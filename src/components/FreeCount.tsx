"use client";

import { useState, useCallback, useRef } from "react";
import { CATEGORY_SETS, CATEGORY_ICONS, type ObjectCategory } from "./svg";
import { useVoice, useSoundEffects } from "@kids-games/core/voice";

interface PlacedObject {
  id: number;
  x: number;
  y: number;
  categoryIndex: number; // which SVG within the set
  animKey: number;
}

const OBJECT_SIZE = 64;
const MAX_COUNT = 20;
const CATEGORIES: ObjectCategory[] = ["animals", "fruit", "space", "nature"];

export default function FreeCount({
  onBack,
}: {
  onBack: () => void;
}) {
  const [objects, setObjects] = useState<PlacedObject[]>([]);
  const [category, setCategory] = useState<ObjectCategory>("animals");
  const [countBounce, setCountBounce] = useState(0);
  const nextId = useRef(0);
  const cycleIndex = useRef(0);

  const { playPhrase } = useVoice();
  const { playTap } = useSoundEffects();

  const count = objects.length;
  const setComponents = CATEGORY_SETS[category];

  const handleCanvasTap = useCallback(
    (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
      if (count >= MAX_COUNT) return;

      const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
      let clientX: number, clientY: number;

      if ("touches" in e) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      // Position relative to canvas, clamped to keep object visible
      let x = clientX - rect.left - OBJECT_SIZE / 2;
      let y = clientY - rect.top - OBJECT_SIZE / 2;
      x = Math.max(4, Math.min(rect.width - OBJECT_SIZE - 4, x));
      y = Math.max(4, Math.min(rect.height - OBJECT_SIZE - 4, y));

      // Simple collision offset — nudge if overlapping an existing object
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
        { id: nextId.current++, x, y, categoryIndex: catIdx, animKey: Date.now() },
      ]);

      setCountBounce((b) => b + 1);

      // Play tap sound + speak the number
      playTap();
      playPhrase(`number-${newCount}`, "bloop");
    },
    [count, objects, setComponents.length, playTap, playPhrase]
  );

  const handleClear = useCallback(() => {
    setObjects([]);
    cycleIndex.current = 0;
    setCountBounce(0);
  }, []);

  return (
    <div className="flex flex-col h-full">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-2 shrink-0">
        <button
          onClick={onBack}
          className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-600 active:scale-95 transition-transform"
          aria-label="Back to home"
        >
          &larr;
        </button>

        {/* Count display */}
        <div
          key={countBounce}
          className="text-[64px] font-black leading-none text-indigo-500 animate-[count-bounce_200ms_ease-in-out]"
          aria-live="polite"
          aria-atomic="true"
        >
          {count}
        </div>

        <button
          onClick={handleClear}
          className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-2xl font-bold text-red-500 active:scale-95 transition-transform"
          aria-label="Clear all objects"
        >
          &times;
        </button>
      </div>

      {/* Canvas */}
      <div
        className="flex-1 relative bg-white rounded-3xl mx-3 mb-2 shadow-inner overflow-hidden cursor-pointer touch-none"
        onClick={handleCanvasTap}
        onTouchStart={handleCanvasTap}
        role="application"
        aria-label={`Counting canvas. Current count: ${count}. Tap to add objects.`}
      >
        {objects.map((obj) => {
          const SvgComp = setComponents[obj.categoryIndex];
          return (
            <div
              key={obj.id}
              className="absolute animate-[spawn-bounce_300ms_ease-out]"
              style={{ left: obj.x, top: obj.y }}
            >
              <SvgComp size={OBJECT_SIZE} />
            </div>
          );
        })}

        {count === 0 && (
          <div className="absolute inset-0 flex items-center justify-center text-gray-300 text-2xl font-bold pointer-events-none select-none">
            Tap anywhere to count!
          </div>
        )}
      </div>

      {/* Category selector */}
      <div className="flex justify-center gap-3 px-4 py-3 shrink-0">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setCategory(cat);
              cycleIndex.current = 0;
            }}
            className={`w-16 h-16 rounded-2xl text-2xl flex items-center justify-center transition-all active:scale-95 ${
              category === cat
                ? "bg-indigo-100 ring-3 ring-indigo-400 shadow-md scale-105"
                : "bg-gray-100"
            }`}
            aria-label={`Select ${cat} objects`}
            aria-pressed={category === cat}
          >
            {CATEGORY_ICONS[cat]}
          </button>
        ))}
      </div>
    </div>
  );
}
