import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";

interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

export default function TodoForm({ onAddTodo }: TodoFormProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;

    onAddTodo(trimmed); // kirim ke parent
    setText(""); // reset input
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 items-center bg-gray-800/80 p-3 rounded-xl shadow-inner shadow-cyan-500/20"
    >
      <input
        type="text"
        placeholder="Enter new task..."
        value={text}
        onChange={handleChange}
        className="flex-grow px-4 py-2 bg-gray-900 text-cyan-200 placeholder-gray-500 border border-cyan-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
      />
      <button
        type="submit"
        className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold px-4 py-2 rounded-lg transition-all shadow-[0_0_10px_#00ffff80]"
      >
        Add
      </button>
    </form>
  );
}
