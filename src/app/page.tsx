"use client";

import { useState, useEffect, useCallback } from "react";
import FreeCount from "@/components/FreeCount";
import GuidedCount from "@/components/GuidedCount";
import { getMuted, setMuted as saveMuted } from "@/lib/storage";

type Screen = "home" | "free" | "guided";

export default function Home() {
  const [screen, setScreen] = useState<Screen>("home");
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    setMuted(getMuted());
  }, []);

  const toggleMute = useCallback(() => {
    setMuted((prev) => {
      const next = !prev;
      saveMuted(next);
      return next;
    });
  }, []);

  if (screen === "free") {
    return (
      <main className="h-screen flex flex-col">
        <FreeCount muted={muted} onBack={() => setScreen("home")} />
      </main>
    );
  }

  if (screen === "guided") {
    return (
      <main className="h-screen flex flex-col">
        <GuidedCount muted={muted} onBack={() => setScreen("home")} />
      </main>
    );
  }

  // Home screen
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-8 px-6">
      {/* Back to Hub */}
      <a
        href="/"
        className="absolute top-4 left-4 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-2xl active:scale-90 transition-transform"
        aria-label="Back to Kids Corner"
      >
        &#x1F3E0;
      </a>

      {/* Title */}
      <div className="text-center">
        <h1 className="text-5xl sm:text-6xl font-black text-indigo-500 leading-tight">
          Count Along
        </h1>
        <p className="text-xl text-gray-400 mt-2 font-bold">
          Tap, count, and learn!
        </p>
      </div>

      {/* Decorative icons */}
      <div className="flex gap-4 text-4xl" aria-hidden="true">
        <span className="animate-[spawn-bounce_600ms_ease-out_0ms_both]">&#x1F431;</span>
        <span className="animate-[spawn-bounce_600ms_ease-out_100ms_both]">&#x1F34E;</span>
        <span className="animate-[spawn-bounce_600ms_ease-out_200ms_both]">&#x2B50;</span>
        <span className="animate-[spawn-bounce_600ms_ease-out_300ms_both]">&#x1F338;</span>
        <span className="animate-[spawn-bounce_600ms_ease-out_400ms_both]">&#x1F430;</span>
      </div>

      {/* Mode buttons */}
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <button
          onClick={() => setScreen("free")}
          className="w-full py-5 bg-indigo-500 text-white text-2xl font-bold rounded-3xl shadow-lg active:scale-95 transition-transform"
        >
          Free Count
        </button>
        <button
          onClick={() => setScreen("guided")}
          className="w-full py-5 bg-green-400 text-white text-2xl font-bold rounded-3xl shadow-lg active:scale-95 transition-transform"
        >
          Guided Count
        </button>
      </div>

      {/* Mute toggle */}
      <button
        onClick={toggleMute}
        className="mt-4 w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-2xl active:scale-95 transition-transform"
        aria-label={muted ? "Unmute sounds" : "Mute sounds"}
        aria-pressed={muted}
      >
        {muted ? (
          <span aria-hidden="true">&#x1F507;</span>
        ) : (
          <span aria-hidden="true">&#x1F50A;</span>
        )}
      </button>
    </main>
  );
}
