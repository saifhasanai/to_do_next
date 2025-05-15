// types/index.ts

/**
 * Represents a single To-Do item.
 */
export interface Todo {
  id: string; // Using string for IDs, e.g., UUID or timestamp-based
  text: string;
  completed: boolean;
}
