"use client";

import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  rotation: number;
  scale: number;
  dx: number;
  dy: number;
  delay: number;
}

const COLORS = [
  "#FF6B6B", "#FDCB6E", "#00B894", "#74B9FF", "#A29BFE",
  "#FF9FF3", "#FF9F43", "#55EFC4", "#E17055", "#6C5CE7",
];

export default function Confetti({ active }: { active: boolean }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (!active) {
      setParticles([]);
      return;
    }

    const newParticles: Particle[] = [];
    for (let i = 0; i < 40; i++) {
      newParticles.push({
        id: i,
        x: 40 + Math.random() * 20, // center-ish %
        y: 30 + Math.random() * 10,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        rotation: Math.random() * 360,
        scale: 0.5 + Math.random() * 0.8,
        dx: (Math.random() - 0.5) * 60, // spread in vw
        dy: -(20 + Math.random() * 40), // upward burst in vh
        delay: Math.random() * 0.3,
      });
    }
    setParticles(newParticles);
  }, [active]);

  if (!active || particles.length === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${10 * p.scale}px`,
            height: `${14 * p.scale}px`,
            backgroundColor: p.color,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
            transform: `rotate(${p.rotation}deg)`,
            animation: `confetti-burst 1.5s ease-out ${p.delay}s forwards`,
            // Encode the spread values as CSS custom properties
            ["--dx" as string]: `${p.dx}vw`,
            ["--dy" as string]: `${p.dy}vh`,
          }}
        />
      ))}
    </div>
  );
}
