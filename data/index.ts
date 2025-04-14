import { Question } from "@/types";
import { questions as level1Questions } from "./questions/level1";
import { questions as level2Questions } from "./questions/level2";
import { questions as level3Questions } from "./questions/level3";

// Export all question sets
export { level1Questions, level2Questions, level3Questions };

// Get questions by level
export function getQuestionsByLevel(level: 1 | 2 | 3): Question[] {
  switch (level) {
    case 1:
      return level1Questions;
    case 2:
      return level2Questions;
    case 3:
      return level3Questions;
    default:
      return level1Questions;
  }
}
