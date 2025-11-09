interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
}

export default function TodoList({ todos }: TodoListProps) {
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
        <li
          key={todo.id}
          className="bg-gray-800/70 px-4 py-2 rounded-lg border border-cyan-500/20 text-cyan-200 hover:bg-gray-800/90 transition-all"
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
}
