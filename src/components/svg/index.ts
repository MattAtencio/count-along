export { AnimalSet, AnimalNames } from "./Animals";
export { FruitSet, FruitNames } from "./Fruit";
export { SpaceSet, SpaceNames } from "./Space";
export { NatureSet, NatureNames } from "./Nature";

import { AnimalSet } from "./Animals";
import { FruitSet } from "./Fruit";
import { SpaceSet } from "./Space";
import { NatureSet } from "./Nature";

export type ObjectCategory = "animals" | "fruit" | "space" | "nature";

export const CATEGORY_SETS: Record<ObjectCategory, React.ComponentType<{ size?: number }>[]> = {
  animals: AnimalSet,
  fruit: FruitSet,
  space: SpaceSet,
  nature: NatureSet,
};

export const CATEGORY_LABELS: Record<ObjectCategory, string> = {
  animals: "Animals",
  fruit: "Fruit",
  space: "Space",
  nature: "Nature",
};

export const CATEGORY_ICONS: Record<ObjectCategory, string> = {
  animals: "\uD83D\uDC31",
  fruit: "\uD83C\uDF4E",
  space: "\u2B50",
  nature: "\uD83C\uDF38",
};
