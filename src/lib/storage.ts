// LocalStorage helpers for Count Along
// Note: Mute state is now managed by @kids-games/core (KidsAudioProvider)

const PROGRESS_KEY = "count-along-guided-progress";

export interface GuidedProgress {
  /** Index into TARGETS array */
  currentTargetIndex: number;
  /** How many times the current target has been completed */
  completionsAtCurrent: number;
}

export const TARGETS = [3, 5, 7, 10];

export function getGuidedProgress(): GuidedProgress {
  if (typeof window === "undefined") {
    return { currentTargetIndex: 0, completionsAtCurrent: 0 };
  }
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        currentTargetIndex: parsed.currentTargetIndex ?? 0,
        completionsAtCurrent: parsed.completionsAtCurrent ?? 0,
      };
    }
  } catch {
    // ignore
  }
  return { currentTargetIndex: 0, completionsAtCurrent: 0 };
}

export function saveGuidedProgress(progress: GuidedProgress): void {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}
