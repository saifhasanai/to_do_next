// app/components/TodoItem.tsx
"use client";

import React from 'react';
import { Todo } from '@/types'; // Assuming types are in a 'types' folder at the root

interface TodoItemProps {
  task: Todo;
  onDelete: (id: string) => void;
  onToggleComplete: (id: string) => void;
}

/**
 * TodoItem component to display a single task with delete and complete functionality.
 * @param {TodoItemProps} props - The component props.
 * @returns {JSX.Element} The rendered TodoItem component.
 */
const TodoItem: React.FC<TodoItemProps> = ({ task, onDelete, onToggleComplete }) => {
  return (
    <li
      className={`flex justify-between items-center p-3 rounded-lg shadow-sm transition duration-200 ease-in-out ${
        task.completed ? 'bg-green-50' : 'bg-gray-50 hover:bg-gray-100'
      }`}
      data-id={task.id}
    >
      <div className="flex items-center flex-grow mr-3">
        {/* Checkbox for completing task */}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 mr-3 cursor-pointer"
          aria-label={`Mark task ${task.text} as ${task.completed ? 'incomplete' : 'complete'}`}
        />
        {/* Task text */}
        <span
          className={`text-gray-800 ${
            task.completed ? 'line-through text-gray-500' : ''
          }`}
        >
          {task.text}
        </span>
      </div>

      {/* Delete button */}
      <button
        onClick={() => onDelete(task.id)}
        aria-label={`Delete task: ${task.text}`}
        className="bg-red-500 hover:bg-red-600 text-white text-xs font-semibold py-1 px-3 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
