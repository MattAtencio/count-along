// Nature SVG illustrations — friendly, bold outlines, flat colors

export function Flower({ size = 60 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Stem */}
      <line x1="30" y1="36" x2="30" y2="56" stroke="#00B894" strokeWidth="3" strokeLinecap="round" />
      {/* Leaves */}
      <path d="M30,46 Q20,40 22,48" fill="#00B894" stroke="#2D3436" strokeWidth="1" />
      <path d="M30,50 Q40,44 38,52" fill="#00B894" stroke="#2D3436" strokeWidth="1" />
      {/* Petals */}
      <ellipse cx="30" cy="12" rx="7" ry="10" fill="#FF6B6B" stroke="#2D3436" strokeWidth="1.5" />
      <ellipse cx="18" cy="22" rx="7" ry="10" fill="#FF9FF3" stroke="#2D3436" strokeWidth="1.5" transform="rotate(-40,18,22)" />
      <ellipse cx="42" cy="22" rx="7" ry="10" fill="#FF9FF3" stroke="#2D3436" strokeWidth="1.5" transform="rotate(40,42,22)" />
      <ellipse cx="20" cy="34" rx="7" ry="10" fill="#FF6B6B" stroke="#2D3436" strokeWidth="1.5" transform="rotate(-80,20,34)" />
      <ellipse cx="40" cy="34" rx="7" ry="10" fill="#FF6B6B" stroke="#2D3436" strokeWidth="1.5" transform="rotate(80,40,34)" />
      {/* Center */}
      <circle cx="30" cy="24" r="8" fill="#FDCB6E" stroke="#2D3436" strokeWidth="2" />
      {/* Face */}
      <circle cx="27" cy="23" r="1.5" fill="#2D3436" />
      <circle cx="33" cy="23" r="1.5" fill="#2D3436" />
      <path d="M28,27 Q30,29 32,27" stroke="#2D3436" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function Tree({ size = 60 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Trunk */}
      <rect x="25" y="38" width="10" height="18" rx="2" fill="#A0522D" stroke="#2D3436" strokeWidth="2" />
      {/* Canopy */}
      <circle cx="30" cy="22" r="20" fill="#00B894" stroke="#2D3436" strokeWidth="2.5" />
      {/* Highlights */}
      <circle cx="20" cy="16" r="8" fill="#55EFC4" opacity="0.4" />
      <circle cx="38" cy="28" r="6" fill="#55EFC4" opacity="0.3" />
      {/* Face */}
      <circle cx="24" cy="22" r="2" fill="#2D3436" />
      <circle cx="36" cy="22" r="2" fill="#2D3436" />
      <path d="M27,28 Q30,32 33,28" stroke="#2D3436" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function Butterfly({ size = 60 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="30" cy="30" rx="3" ry="16" fill="#2D3436" />
      {/* Antennae */}
      <path d="M29,14 Q24,6 20,4" stroke="#2D3436" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M31,14 Q36,6 40,4" stroke="#2D3436" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <circle cx="20" cy="4" r="2" fill="#FDCB6E" />
      <circle cx="40" cy="4" r="2" fill="#FDCB6E" />
      {/* Upper wings */}
      <ellipse cx="16" cy="22" rx="14" ry="12" fill="#FF9FF3" stroke="#2D3436" strokeWidth="2" />
      <ellipse cx="44" cy="22" rx="14" ry="12" fill="#FF9FF3" stroke="#2D3436" strokeWidth="2" />
      {/* Lower wings */}
      <ellipse cx="18" cy="38" rx="10" ry="9" fill="#A29BFE" stroke="#2D3436" strokeWidth="2" />
      <ellipse cx="42" cy="38" rx="10" ry="9" fill="#A29BFE" stroke="#2D3436" strokeWidth="2" />
      {/* Wing dots */}
      <circle cx="14" cy="20" r="4" fill="#E17055" opacity="0.6" />
      <circle cx="46" cy="20" r="4" fill="#E17055" opacity="0.6" />
      <circle cx="17" cy="38" r="3" fill="#FDCB6E" opacity="0.6" />
      <circle cx="43" cy="38" r="3" fill="#FDCB6E" opacity="0.6" />
    </svg>
  );
}

export function Sun({ size = 60 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Rays */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <line
          key={angle}
          x1="30"
          y1="30"
          x2={30 + 26 * Math.cos((angle * Math.PI) / 180)}
          y2={30 + 26 * Math.sin((angle * Math.PI) / 180)}
          stroke="#FDCB6E"
          strokeWidth="3"
          strokeLinecap="round"
        />
      ))}
      {/* Body */}
      <circle cx="30" cy="30" r="16" fill="#FDCB6E" stroke="#2D3436" strokeWidth="2.5" />
      {/* Face */}
      <circle cx="24" cy="28" r="2" fill="#2D3436" />
      <circle cx="36" cy="28" r="2" fill="#2D3436" />
      <path d="M24,34 Q30,40 36,34" stroke="#2D3436" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      {/* Cheeks */}
      <circle cx="18" cy="34" r="3" fill="#FAB1A0" opacity="0.4" />
      <circle cx="42" cy="34" r="3" fill="#FAB1A0" opacity="0.4" />
    </svg>
  );
}

export function Cloud({ size = 60 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cloud shape */}
      <circle cx="20" cy="30" r="14" fill="white" stroke="#2D3436" strokeWidth="2.5" />
      <circle cx="35" cy="24" r="16" fill="white" stroke="#2D3436" strokeWidth="2.5" />
      <circle cx="46" cy="32" r="12" fill="white" stroke="#2D3436" strokeWidth="2.5" />
      {/* Fill gaps */}
      <rect x="16" y="28" width="34" height="14" fill="white" />
      {/* Bottom outline */}
      <line x1="8" y1="42" x2="56" y2="42" stroke="#2D3436" strokeWidth="2.5" strokeLinecap="round" />
      {/* Face */}
      <circle cx="26" cy="30" r="2" fill="#2D3436" />
      <circle cx="38" cy="30" r="2" fill="#2D3436" />
      <path d="M29,36 Q32,39 35,36" stroke="#2D3436" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Cheeks */}
      <circle cx="21" cy="34" r="2.5" fill="#74B9FF" opacity="0.3" />
      <circle cx="43" cy="34" r="2.5" fill="#74B9FF" opacity="0.3" />
    </svg>
  );
}

export const NatureSet = [Flower, Tree, Butterfly, Sun, Cloud];
export const NatureNames = ["Flower", "Tree", "Butterfly", "Sun", "Cloud"];
