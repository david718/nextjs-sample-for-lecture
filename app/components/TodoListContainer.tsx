"use client";
import { useState } from "react";
import TodoList, { Todo } from "./TodoList";

const TodoListContainer = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const fetchTodos = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder3.typicode.com/todos"
      );
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error("Error fetching todos:", error);
      //   throw error;
      setError(error as Error);
    }
  };

  if (error) {
    throw error;
  }

  return (
    <>
      <button onClick={fetchTodos}>Fetch Todos</button>
      <TodoList todos={todos} />
    </>
  );
};

export default TodoListContainer;
