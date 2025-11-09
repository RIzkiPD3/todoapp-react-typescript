import { useState } from "react";
import TodoForm from "./component/TodoForm";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);


  const handleAddTodo = (text: string) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-cyan-300 flex flex-col items-center py-10">
      <h1 className="text-4xl font-extrabold tracking-wide mb-8 neon-text">
        ⚡ Cyber Todo List ⚡
      </h1>

      <div className="w-full max-w-md bg-gray-800/60 rounded-2xl p-6 shadow-[0_0_20px_#00ffff80] space-y-6">
        <TodoForm onAddTodo={handleAddTodo} />

        <div className="text-center text-gray-400 italic">
          {todos.length === 0
            ? "No tasks yet. Uploading mission data..."
            : `Tasks loaded: ${todos.length}`}
        </div>
      </div>
    </div>
  );
}
