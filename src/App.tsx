import { useState } from "react";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";
import TodoFilter from "./component/TodoFilter";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  function handleAddTodo(text: string) {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  }

  function handleToggleTodo(id: number) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function handleDeleteTodo(id: number) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function handleEditTodo(id: number, newText: string) {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  }

  function handleFilterChange(newFilter: "all" | "active" | "completed") {
    setFilter(newFilter);
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; // all
  });

  return (
    <div className="min-h-screen bg-gray-900 text-cyan-300 flex flex-col items-center py-10">
      <h1 className="text-4xl font-extrabold tracking-wide mb-8 neon-text">
        ⚡ Cyber Todo List ⚡
      </h1>

      <div className="w-full max-w-md bg-gray-800/60 rounded-2xl p-6 shadow-[0_0_20px_#00ffff80] space-y-6">
        <TodoForm onAddTodo={handleAddTodo} />
        <TodoFilter currentFilter={filter} onFilterChange={handleFilterChange} />
        <TodoList
          todos={filteredTodos}
          onToggle={handleToggleTodo}
          onDelete={handleDeleteTodo}
          onEdit={handleEditTodo}
        />
      </div>
    </div>
  );
}
