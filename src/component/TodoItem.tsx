import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { Todo } from "../App";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}

export default function TodoItem({
  todo,
  onToggle,
  onDelete,
  onEdit,
}: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  function handleEditSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = editText.trim();
    if (!trimmed) return;
    onEdit(todo.id, trimmed);
    setIsEditing(false);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setEditText(e.target.value);
  }

  return (
    <li
      className={`flex items-center justify-between px-4 py-2 rounded-lg border border-cyan-500/20 transition-all ${
        todo.completed
          ? "bg-gray-800/70 text-gray-500 line-through"
          : "bg-gray-800/90 text-cyan-200"
      }`}
    >
      {isEditing ? (
        <form onSubmit={handleEditSubmit} className="flex flex-grow gap-2">
          <input
            type="text"
            value={editText}
            onChange={handleChange}
            className="flex-grow bg-gray-900 text-cyan-200 px-3 py-1 rounded-lg border border-cyan-400/30 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
            autoFocus
          />
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold px-3 py-1 rounded-lg"
          >
            Save
          </button>
        </form>
      ) : (
        <>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
              className="accent-cyan-400 w-5 h-5"
            />
            <span
              onClick={() => onToggle(todo.id)}
              className="cursor-pointer select-none hover:text-cyan-400 transition-all"
            >
              {todo.text}
            </span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="text-yellow-400 hover:text-yellow-300 transition"
              aria-label="Edit Task"
            >
              ✏️
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="text-red-500 hover:text-red-400 transition"
              aria-label="Delete Task"
            >
              🗑️
            </button>
          </div>
        </>
      )}
    </li>
  );
}
