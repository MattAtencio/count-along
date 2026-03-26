// Fruit SVG illustrations — friendly, bold outlines, flat colors

export function Apple({ size = 60 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Stem */}
      <path d="M30,8 Q32,4 30,2" stroke="#6C5B3E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Leaf */}
      <path d="M30,6 Q38,2 36,8" fill="#00B894" stroke="#2D3436" strokeWidth="1.2" />
      {/* Body */}
      <path d="M14,24 Q10,12 20,10 Q28,8 30,12 Q32,8 40,10 Q50,12 46,24 Q48,42 30,52 Q12,42 14,24Z" fill="#FF6B6B" stroke="#2D3436" strokeWidth="2.5" />
      {/* Highlight */}
      <ellipse cx="22" cy="24" rx="5" ry="7" fill="white" opacity="0.25" />
    </svg>
  );
}

export function Banana({ size = 60 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <path d="M15,48 Q8,30 20,14 Q28,6 36,10 Q32,8 26,18 Q16,36 20,48Z" fill="#FDCB6E" stroke="#2D3436" strokeWidth="2.5" strokeLinejoin="round" />
      {/* Tip */}
      <circle cx="16" cy="49" r="2" fill="#A0522D" />
      {/* Stem */}
      <path d="M34,10 Q38,6 42,8" stroke="#6C5B3E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function Orange({ size = 60 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <circle cx="30" cy="32" r="22" fill="#FF9F43" stroke="#2D3436" strokeWidth="2.5" />
      {/* Highlight */}
      <ellipse cx="22" cy="24" rx="6" ry="8" fill="white" opacity="0.2" />
      {/* Stem */}
      <rect x="28" y="8" width="4" height="6" rx="2" fill="#6C5B3E" stroke="#2D3436" strokeWidth="1" />
      {/* Leaf */}
      <path d="M32,10 Q40,4 38,12" fill="#00B894" stroke="#2D3436" strokeWidth="1.2" />
      {/* Navel */}
      <circle cx="30" cy="50" r="3" fill="#E17055" opacity="0.4" />
    </svg>
  );
}

export function Strawberry({ size = 60 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Leaves */}
      <path d="M22,16 L18,8 L26,14" fill="#00B894" stroke="#2D3436" strokeWidth="1.5" />
      <path d="M30,14 L30,4 L34,14" fill="#00B894" stroke="#2D3436" strokeWidth="1.5" />
      <path d="M38,16 L42,8 L34,14" fill="#00B894" stroke="#2D3436" strokeWidth="1.5" />
      {/* Body */}
      <path d="M16,18 Q14,18 16,36 Q20,54 30,56 Q40,54 44,36 Q46,18 44,18Z" fill="#E74C3C" stroke="#2D3436" strokeWidth="2.5" />
      {/* Seeds */}
      <circle cx="24" cy="28" r="1.5" fill="#FDCB6E" />
      <circle cx="36" cy="28" r="1.5" fill="#FDCB6E" />
      <circle cx="30" cy="36" r="1.5" fill="#FDCB6E" />
      <circle cx="24" cy="42" r="1.5" fill="#FDCB6E" />
      <circle cx="36" cy="42" r="1.5" fill="#FDCB6E" />
      <circle cx="30" cy="48" r="1.5" fill="#FDCB6E" />
    </svg>
  );
}

export function Grape({ size = 60 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Stem */}
      <path d="M30,6 L30,16" stroke="#6C5B3E" strokeWidth="2.5" strokeLinecap="round" />
      {/* Leaf */}
      <path d="M30,10 Q38,4 36,12" fill="#00B894" stroke="#2D3436" strokeWidth="1.2" />
      {/* Grapes */}
      <circle cx="24" cy="22" r="7" fill="#A855F7" stroke="#2D3436" strokeWidth="2" />
      <circle cx="36" cy="22" r="7" fill="#A855F7" stroke="#2D3436" strokeWidth="2" />
      <circle cx="18" cy="34" r="7" fill="#9333EA" stroke="#2D3436" strokeWidth="2" />
      <circle cx="30" cy="34" r="7" fill="#9333EA" stroke="#2D3436" strokeWidth="2" />
      <circle cx="42" cy="34" r="7" fill="#9333EA" stroke="#2D3436" strokeWidth="2" />
      <circle cx="24" cy="46" r="7" fill="#7C3AED" stroke="#2D3436" strokeWidth="2" />
      <circle cx="36" cy="46" r="7" fill="#7C3AED" stroke="#2D3436" strokeWidth="2" />
      {/* Highlights */}
      <circle cx="22" cy="20" r="2" fill="white" opacity="0.3" />
      <circle cx="34" cy="20" r="2" fill="white" opacity="0.3" />
    </svg>
  );
}

export const FruitSet = [Apple, Banana, Orange, Strawberry, Grape];
export const FruitNames = ["Apple", "Banana", "Orange", "Strawberry", "Grape"];
