// Animal SVG illustrations — friendly, bold outlines, flat colors

export function Cat({ size = 60 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ears */}
      <polygon points="12,20 8,4 22,16" fill="#FF9F43" stroke="#2D3436" strokeWidth="2" strokeLinejoin="round" />
      <polygon points="48,20 52,4 38,16" fill="#FF9F43" stroke="#2D3436" strokeWidth="2" strokeLinejoin="round" />
      {/* Head */}
      <circle cx="30" cy="32" r="20" fill="#FF9F43" stroke="#2D3436" strokeWidth="2.5" />
      {/* Eyes */}
      <circle cx="22" cy="28" r="3.5" fill="#2D3436" />
      <circle cx="38" cy="28" r="3.5" fill="#2D3436" />
      <circle cx="23" cy="27" r="1.2" fill="white" />
      <circle cx="39" cy="27" r="1.2" fill="white" />
      {/* Nose */}
      <ellipse cx="30" cy="35" rx="2.5" ry="2" fill="#E17055" />
      {/* Mouth */}
      <path d="M27,38 Q30,42 33,38" stroke="#2D3436" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Whiskers */}
      <line x1="10" y1="33" x2="20" y2="35" stroke="#2D3436" strokeWidth="1.2" />
      <line x1="10" y1="38" x2="20" y2="37" stroke="#2D3436" strokeWidth="1.2" />
      <line x1="50" y1="33" x2="40" y2="35" stroke="#2D3436" strokeWidth="1.2" />
      <line x1="50" y1="38" x2="40" y2="37" stroke="#2D3436" strokeWidth="1.2" />
    </svg>
  );
}

export function Dog({ size = 60 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ears */}
      <ellipse cx="12" cy="22" rx="8" ry="14" fill="#A0522D" stroke="#2D3436" strokeWidth="2" />
      <ellipse cx="48" cy="22" rx="8" ry="14" fill="#A0522D" stroke="#2D3436" strokeWidth="2" />
      {/* Head */}
      <circle cx="30" cy="32" r="20" fill="#DEB887" stroke="#2D3436" strokeWidth="2.5" />
      {/* Eyes */}
      <circle cx="22" cy="28" r="3.5" fill="#2D3436" />
      <circle cx="38" cy="28" r="3.5" fill="#2D3436" />
      <circle cx="23" cy="27" r="1.2" fill="white" />
      <circle cx="39" cy="27" r="1.2" fill="white" />
      {/* Nose */}
      <ellipse cx="30" cy="36" rx="4" ry="3" fill="#2D3436" />
      {/* Tongue */}
      <path d="M30,39 Q30,46 34,44" fill="#E17055" stroke="#2D3436" strokeWidth="1" />
    </svg>
  );
}

export function Bird({ size = 60 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="30" cy="35" rx="16" ry="14" fill="#74B9FF" stroke="#2D3436" strokeWidth="2.5" />
      {/* Head */}
      <circle cx="30" cy="18" r="12" fill="#74B9FF" stroke="#2D3436" strokeWidth="2.5" />
      {/* Eye */}
      <circle cx="34" cy="16" r="3" fill="#2D3436" />
      <circle cx="35" cy="15" r="1" fill="white" />
      {/* Beak */}
      <polygon points="42,18 50,16 42,22" fill="#FDCB6E" stroke="#2D3436" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Wing */}
      <ellipse cx="20" cy="35" rx="10" ry="7" fill="#0984E3" stroke="#2D3436" strokeWidth="1.5" />
      {/* Cheek */}
      <circle cx="26" cy="21" r="2.5" fill="#FAB1A0" opacity="0.6" />
    </svg>
  );
}

export function Fish({ size = 60 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Tail */}
      <polygon points="8,30 2,20 2,40" fill="#E17055" stroke="#2D3436" strokeWidth="2" strokeLinejoin="round" />
      {/* Body */}
      <ellipse cx="30" cy="30" rx="22" ry="14" fill="#FF7675" stroke="#2D3436" strokeWidth="2.5" />
      {/* Eye */}
      <circle cx="40" cy="26" r="4" fill="white" stroke="#2D3436" strokeWidth="1.5" />
      <circle cx="41" cy="25" r="2" fill="#2D3436" />
      {/* Mouth */}
      <path d="M50,32 Q48,34 50,36" stroke="#2D3436" strokeWidth="1.5" fill="none" />
      {/* Stripes */}
      <path d="M22,18 Q24,30 22,42" stroke="#E17055" strokeWidth="1.5" fill="none" />
      <path d="M30,17 Q32,30 30,43" stroke="#E17055" strokeWidth="1.5" fill="none" />
      {/* Fin */}
      <path d="M25,17 Q30,8 35,17" fill="#FDCB6E" stroke="#2D3436" strokeWidth="1.5" />
    </svg>
  );
}

export function Bunny({ size = 60 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ears */}
      <ellipse cx="20" cy="12" rx="5" ry="14" fill="white" stroke="#2D3436" strokeWidth="2" />
      <ellipse cx="20" cy="12" rx="2.5" ry="10" fill="#FAB1A0" />
      <ellipse cx="40" cy="12" rx="5" ry="14" fill="white" stroke="#2D3436" strokeWidth="2" />
      <ellipse cx="40" cy="12" rx="2.5" ry="10" fill="#FAB1A0" />
      {/* Head */}
      <circle cx="30" cy="36" r="18" fill="white" stroke="#2D3436" strokeWidth="2.5" />
      {/* Eyes */}
      <circle cx="23" cy="32" r="3" fill="#2D3436" />
      <circle cx="37" cy="32" r="3" fill="#2D3436" />
      <circle cx="24" cy="31" r="1" fill="white" />
      <circle cx="38" cy="31" r="1" fill="white" />
      {/* Nose */}
      <ellipse cx="30" cy="38" rx="2" ry="1.5" fill="#FAB1A0" />
      {/* Mouth */}
      <path d="M28,40 Q30,43 32,40" stroke="#2D3436" strokeWidth="1.2" fill="none" />
      {/* Cheeks */}
      <circle cx="18" cy="38" r="3" fill="#FAB1A0" opacity="0.4" />
      <circle cx="42" cy="38" r="3" fill="#FAB1A0" opacity="0.4" />
    </svg>
  );
}

export const AnimalSet = [Cat, Dog, Bird, Fish, Bunny];
export const AnimalNames = ["Cat", "Dog", "Bird", "Fish", "Bunny"];
