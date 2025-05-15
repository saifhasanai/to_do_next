// app/components/TodoList.tsx
"use client";

import React from 'react';
import { Todo } from '@/types';
import TodoItem from './TodoItem'; // Import the TodoItem component

interface TodoListProps {
  tasks: Todo[];
  onDeleteTask: (id: string) => void;
  onToggleCompleteTask: (id: string) => void;
}

/**
 * TodoList component to display a list of tasks.
 * @param {TodoListProps} props - The component props.
 * @returns {JSX.Element} The rendered TodoList component.
 */
const TodoList: React.FC<TodoListProps> = ({ tasks, onDeleteTask, onToggleCompleteTask }) => {
  if (tasks.length === 0) {
    return <p className="text-gray-500 text-center p-3">No tasks yet! Add one above.</p>;
  }

  return (
    <ul id="task-list" className="space-y-3">
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          onDelete={onDeleteTask}
          onToggleComplete={onToggleCompleteTask}
        />
      ))}
    </ul>
  );
};

export default TodoList;
