// Space SVG illustrations — friendly, bold outlines, flat colors

export function Star({ size = 60 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon
        points="30,4 36,22 56,22 40,34 46,52 30,42 14,52 20,34 4,22 24,22"
        fill="#FDCB6E"
        stroke="#2D3436"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Face */}
      <circle cx="24" cy="26" r="2" fill="#2D3436" />
      <circle cx="36" cy="26" r="2" fill="#2D3436" />
      <path d="M26,32 Q30,36 34,32" stroke="#2D3436" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function Moon({ size = 60 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Crescent */}
      <path
        d="M38,6 Q56,16 52,36 Q48,54 28,56 Q38,48 38,30 Q38,14 38,6Z"
        fill="#FDCB6E"
        stroke="#2D3436"
        strokeWidth="2.5"
      />
      {/* Full moon shape behind */}
      <circle cx="30" cy="30" r="24" fill="#FFF3CD" stroke="#2D3436" strokeWidth="2.5" />
      {/* Shadow for crescent */}
      <path
        d="M42,10 Q54,20 50,38 Q46,52 30,56 Q44,48 44,30 Q44,16 42,10Z"
        fill="#FDCB6E"
      />
      {/* Face */}
      <circle cx="22" cy="26" r="2.5" fill="#2D3436" />
      <circle cx="34" cy="26" r="2.5" fill="#2D3436" />
      <path d="M24,34 Q30,38 36,34" stroke="#2D3436" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Cheek */}
      <circle cx="16" cy="32" r="3" fill="#FAB1A0" opacity="0.4" />
    </svg>
  );
}

export function Rocket({ size = 60 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <path
        d="M30,4 Q40,16 40,36 L20,36 Q20,16 30,4Z"
        fill="#DFE6E9"
        stroke="#2D3436"
        strokeWidth="2.5"
      />
      {/* Window */}
      <circle cx="30" cy="22" r="6" fill="#74B9FF" stroke="#2D3436" strokeWidth="2" />
      <circle cx="28" cy="20" r="2" fill="white" opacity="0.5" />
      {/* Fins */}
      <path d="M20,30 L10,42 L20,36Z" fill="#FF6B6B" stroke="#2D3436" strokeWidth="2" />
      <path d="M40,30 L50,42 L40,36Z" fill="#FF6B6B" stroke="#2D3436" strokeWidth="2" />
      {/* Bottom */}
      <rect x="22" y="36" width="16" height="6" rx="2" fill="#636E72" stroke="#2D3436" strokeWidth="1.5" />
      {/* Flame */}
      <path d="M24,42 Q30,56 36,42" fill="#FDCB6E" />
      <path d="M26,42 Q30,52 34,42" fill="#E17055" />
    </svg>
  );
}

export function Planet({ size = 60 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ring */}
      <ellipse cx="30" cy="32" rx="28" ry="8" fill="none" stroke="#DEB887" strokeWidth="3" />
      {/* Planet */}
      <circle cx="30" cy="30" r="16" fill="#6C5CE7" stroke="#2D3436" strokeWidth="2.5" />
      {/* Bands */}
      <path d="M14,28 Q22,32 46,26" stroke="#A29BFE" strokeWidth="2" fill="none" />
      <path d="M16,34 Q28,38 44,32" stroke="#A29BFE" strokeWidth="2" fill="none" />
      {/* Highlight */}
      <ellipse cx="24" cy="24" rx="4" ry="5" fill="white" opacity="0.2" />
    </svg>
  );
}

export function Alien({ size = 60 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Head */}
      <ellipse cx="30" cy="26" rx="20" ry="22" fill="#00B894" stroke="#2D3436" strokeWidth="2.5" />
      {/* Eyes */}
      <ellipse cx="22" cy="24" rx="6" ry="7" fill="#2D3436" />
      <ellipse cx="38" cy="24" rx="6" ry="7" fill="#2D3436" />
      <ellipse cx="22" cy="22" rx="2.5" ry="3" fill="#00CEC9" />
      <ellipse cx="38" cy="22" rx="2.5" ry="3" fill="#00CEC9" />
      {/* Mouth */}
      <path d="M26,36 Q30,40 34,36" stroke="#2D3436" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Antennae */}
      <line x1="22" y1="6" x2="22" y2="0" stroke="#2D3436" strokeWidth="2" strokeLinecap="round" />
      <circle cx="22" cy="0" r="2.5" fill="#FDCB6E" />
      <line x1="38" y1="6" x2="38" y2="0" stroke="#2D3436" strokeWidth="2" strokeLinecap="round" />
      <circle cx="38" cy="0" r="2.5" fill="#FDCB6E" />
      {/* Body */}
      <path d="M22,46 Q30,56 38,46" fill="#00B894" stroke="#2D3436" strokeWidth="2" />
      <rect x="22" y="42" width="16" height="6" rx="3" fill="#00B894" stroke="#2D3436" strokeWidth="2" />
    </svg>
  );
}

export const SpaceSet = [Star, Moon, Rocket, Planet, Alien];
export const SpaceNames = ["Star", "Moon", "Rocket", "Planet", "Alien"];
