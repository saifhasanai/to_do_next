"use client";

import React, { useState, useEffect, FormEvent } from "react";
import InputField from "./components/InputField";
import AddButton from "./components/AddButton";
import TodoList from "./components/TodoList";
import { Todo } from "@/types";

const generateId = (): string => {
  return Date.now().toString();
};

export default function HomePage() {
  const [tasks, setTasks] = useState<Todo[]>([]);
  const [newTaskText, setNewTaskText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      const storedTasks = localStorage.getItem("nextTodoTasks");
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error("Failed to parse tasks from localStorage:", error);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem("nextTodoTasks", JSON.stringify(tasks));
      } catch (error) {
        console.error("Failed to save tasks to localStorage:", error);
      }
    }
  }, [tasks, isLoading]);

  const handleAddTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedText = newTaskText.trim();
    if (trimmedText === "") {
      alert("Task cannot be empty!");
      return;
    }

    const newTask: Todo = {
      id: generateId(),
      text: trimmedText,
      completed: false,
    };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
    setNewTaskText("");
  };

  const handleDeleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleToggleCompleteTask = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="todo-container w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          My To-Do List
        </h1>

        <form
          onSubmit={handleAddTask}
          className="flex flex-col sm:flex-row gap-3 mb-6"
        >
          <InputField
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            placeholder="What needs to be done?"
            ariaLabel="New task input"
            className="flex-1 p-2 border border-gray-300 rounded-md"
          />
          <AddButton
            type="submit"
            disabled={isLoading || newTaskText.trim() === ""}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add Task
          </AddButton>
        </form>

        {isLoading ? (
          <p className="text-gray-500 text-center p-3">Loading tasks...</p>
        ) : (
          <TodoList
            tasks={tasks}
            onDeleteTask={handleDeleteTask}
            onToggleCompleteTask={handleToggleCompleteTask}
          />
        )}
      </div>
    </main>
  );
}