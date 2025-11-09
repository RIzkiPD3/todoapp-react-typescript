import TodoItem from "./TodoItem";
import type { Todo } from "../App";

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}

export default function TodoList({
  todos,
  onToggle,
  onDelete,
  onEdit,
}: TodoListProps) {
  if (todos.length === 0) {
    return (
      <p className="text-center text-gray-500 italic mt-4">
        No tasks yet. Time to add some missions ⚙️
      </p>
    );
  }

  return (
    <ul className="space-y-3 mt-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}
