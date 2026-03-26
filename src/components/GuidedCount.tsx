"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { CATEGORY_SETS, type ObjectCategory } from "./svg";
import { useVoice, useSoundEffects, useCelebrate } from "@kids-games/core/voice";
import { CelebrationOverlay } from "@kids-games/core/components";
import {
  getGuidedProgress,
  saveGuidedProgress,
  TARGETS,
  type GuidedProgress,
} from "@/lib/storage";
import Confetti from "./Confetti";

interface PlacedObject {
  id: number;
  x: number;
  y: number;
  categoryIndex: number;
}

const OBJECT_SIZE = 64;
const CATEGORIES: ObjectCategory[] = ["animals", "fruit", "space", "nature"];

export default function GuidedCount({
  onBack,
}: {
  onBack: () => void;
}) {
  const [progress, setProgress] = useState<GuidedProgress>({
    currentTargetIndex: 0,
    completionsAtCurrent: 0,
  });
  const [objects, setObjects] = useState<PlacedObject[]>([]);
  const [celebrating, setCelebrating] = useState(false);
  const [overCount, setOverCount] = useState(false);
  const [allBounce, setAllBounce] = useState(false);
  const [celebrationLevel, setCelebrationLevel] = useState<"small" | "medium" | "big" | null>(null);

  const nextId = useRef(0);
  const cycleIndex = useRef(0);
  const categoryRef = useRef(0);

  const { playPhrase } = useVoice();
  const { playTap } = useSoundEffects();
  const { celebrate } = useCelebrate("sunny");

  // Load progress on mount
  useEffect(() => {
    setProgress(getGuidedProgress());
  }, []);

  const target = TARGETS[Math.min(progress.currentTargetIndex, TARGETS.length - 1)];
  const count = objects.length;
  const setComponents = CATEGORY_SETS[CATEGORIES[categoryRef.current % CATEGORIES.length]];

  const handleCanvasTap = useCallback(
    (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
      if (celebrating) return;

      const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
      let clientX: number, clientY: number;

      if ("touches" in e) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      let x = clientX - rect.left - OBJECT_SIZE / 2;
      let y = clientY - rect.top - OBJECT_SIZE / 2;
      x = Math.max(4, Math.min(rect.width - OBJECT_SIZE - 4, x));
      y = Math.max(4, Math.min(rect.height - OBJECT_SIZE - 4, y));

      // collision offset
      for (const obj of objects) {
        const dx = Math.abs(x - obj.x);
        const dy = Math.abs(y - obj.y);
        if (dx < OBJECT_SIZE * 0.6 && dy < OBJECT_SIZE * 0.6) {
          x += (Math.random() - 0.5) * OBJECT_SIZE;
          y += (Math.random() - 0.5) * OBJECT_SIZE;
          x = Math.max(4, Math.min(rect.width - OBJECT_SIZE - 4, x));
          y = Math.max(4, Math.min(rect.height - OBJECT_SIZE - 4, y));
          break;
        }
      }

      const newCount = count + 1;
      const catIdx = cycleIndex.current % setComponents.length;
      cycleIndex.current++;

      setObjects((prev) => [
        ...prev,
        { id: nextId.current++, x, y, categoryIndex: catIdx },
      ]);

      // Play tap sound + speak the number
      playTap();
      playPhrase(`number-${newCount}`, "bloop");

      // Check target reached
      if (newCount === target) {
        setOverCount(false);
        setCelebrating(true);
        setAllBounce(true);
        setCelebrationLevel("medium");
        setTimeout(() => {
          celebrate("medium");
        }, 300);
      } else if (newCount > target) {
        setOverCount(true);
      }
    },
    [count, objects, celebrating, target, setComponents.length, playTap, playPhrase, celebrate]
  );

  const handleNext = useCallback(() => {
    const newProgress = { ...progress };
    newProgress.completionsAtCurrent += 1;

    // Unlock next target after completing current twice
    if (
      newProgress.completionsAtCurrent >= 2 &&
      newProgress.currentTargetIndex < TARGETS.length - 1
    ) {
      newProgress.currentTargetIndex += 1;
      newProgress.completionsAtCurrent = 0;
    }

    saveGuidedProgress(newProgress);
    setProgress(newProgress);
    setObjects([]);
    setCelebrating(false);
    setOverCount(false);
    setAllBounce(false);
    setCelebrationLevel(null);
    cycleIndex.current = 0;
    categoryRef.current++;
  }, [progress]);

  const handleRetry = useCallback(() => {
    setObjects([]);
    setCelebrating(false);
    setOverCount(false);
    setAllBounce(false);
    setCelebrationLevel(null);
    cycleIndex.current = 0;
  }, []);

  // Progress dots
  const dots = [];
  for (let i = 1; i <= target; i++) {
    dots.push(
      <div
        key={i}
        className={`w-5 h-5 rounded-full transition-all duration-200 ${
          i <= count
            ? "bg-green-400 scale-110"
            : "bg-gray-200"
        }`}
      />
    );
  }

  return (
    <div className="flex flex-col h-full">
      <Confetti active={celebrating} />
      <CelebrationOverlay
        level={celebrationLevel}
        text="Great Job!"
        onComplete={() => setCelebrationLevel(null)}
      />

      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-2 shrink-0">
        <button
          onClick={onBack}
          className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-600 active:scale-95 transition-transform"
          aria-label="Back to home"
        >
          &larr;
        </button>

        <div className="text-center">
          <div className="text-lg font-bold text-gray-500">Can you count to</div>
          <div className="text-[56px] font-black leading-none text-indigo-500">{target}</div>
        </div>

        <div className="w-12" /> {/* spacer */}
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-2 px-4 py-1 flex-wrap shrink-0" aria-label={`Progress: ${count} of ${target}`}>
        {dots}
      </div>

      {/* Canvas */}
      <div
        className={`flex-1 relative bg-white rounded-3xl mx-3 mb-2 shadow-inner overflow-hidden cursor-pointer touch-none ${
          allBounce ? "animate-[all-bounce_500ms_ease-in-out]" : ""
        }`}
        onClick={celebrating ? undefined : handleCanvasTap}
        onTouchStart={celebrating ? undefined : handleCanvasTap}
        role="application"
        aria-label={`Guided counting canvas. Target: ${target}. Current count: ${count}.`}
        aria-live="polite"
      >
        {objects.map((obj) => {
          const SvgComp = setComponents[obj.categoryIndex];
          return (
            <div
              key={obj.id}
              className={`absolute animate-[spawn-bounce_300ms_ease-out] ${
                allBounce ? "animate-[celebration-obj-bounce_500ms_ease-in-out_infinite]" : ""
              }`}
              style={{ left: obj.x, top: obj.y }}
            >
              <SvgComp size={OBJECT_SIZE} />
            </div>
          );
        })}

        {count === 0 && !celebrating && (
          <div className="absolute inset-0 flex items-center justify-center text-gray-300 text-2xl font-bold pointer-events-none select-none text-center px-8">
            Tap {target} times!
          </div>
        )}

        {/* Celebration overlay (buttons) */}
        {celebrating && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-40">
            <div className="text-5xl font-black text-green-500 animate-[celebration-text_800ms_ease-out] drop-shadow-lg">
              Great Job!
            </div>
            <div className="mt-6 flex gap-4">
              <button
                onClick={handleNext}
                className="px-8 py-4 bg-green-400 text-white text-xl font-bold rounded-2xl shadow-lg active:scale-95 transition-transform"
              >
                Next!
              </button>
              <button
                onClick={handleRetry}
                className="px-8 py-4 bg-indigo-400 text-white text-xl font-bold rounded-2xl shadow-lg active:scale-95 transition-transform"
              >
                Again!
              </button>
            </div>
          </div>
        )}

        {/* Over-count message */}
        {overCount && !celebrating && (
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-lg font-bold">
              That&apos;s more than {target}! Keep going or tap &larr; to retry
            </span>
          </div>
        )}
      </div>

      {/* Level indicator */}
      <div className="flex justify-center gap-2 px-4 py-2 shrink-0">
        {TARGETS.map((t, i) => (
          <div
            key={t}
            className={`px-3 py-1 rounded-full text-sm font-bold ${
              i === progress.currentTargetIndex
                ? "bg-indigo-500 text-white"
                : i < progress.currentTargetIndex
                ? "bg-green-200 text-green-700"
                : "bg-gray-100 text-gray-400"
            }`}
          >
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}
