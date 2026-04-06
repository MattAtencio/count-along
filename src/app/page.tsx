"use client";

import { useState } from "react";
import FreeCount from "@/components/FreeCount";
import GuidedCount from "@/components/GuidedCount";
import { MuteButton } from "@kids-games/core/components";
import { BackToHub } from "@/components/BackToHub";

type Screen = "home" | "free" | "guided";

export default function Home() {
  const [screen, setScreen] = useState<Screen>("home");

  if (screen === "free") {
    return (
      <main className="h-screen flex flex-col">
        <BackToHub />
        <FreeCount onBack={() => setScreen("home")} />
      </main>
    );
  }

  if (screen === "guided") {
    return (
      <main className="h-screen flex flex-col">
        <BackToHub />
        <GuidedCount onBack={() => setScreen("home")} />
      </main>
    );
  }

  // Home screen
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-8 px-6">
      <BackToHub />
      <MuteButton />

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
    </main>
  );
}
