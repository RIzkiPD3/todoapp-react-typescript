interface TodoFilterProps {
    currentFilter: "all" | "active" | "completed";
    onFilterChange: (filter: "all" | "active" | "completed") => void;
  }
  
  export default function TodoFilter({
    currentFilter,
    onFilterChange,
  }: TodoFilterProps) {
    const filters: ("all" | "active" | "completed")[] = [
      "all",
      "active",
      "completed",
    ];
  
    return (
      <div className="flex justify-center gap-4 mt-4">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`px-4 py-2 rounded-lg font-semibold capitalize transition-all border border-cyan-500/40 
              ${
                currentFilter === filter
                  ? "bg-cyan-500 text-gray-900 shadow-[0_0_10px_#00ffff80]"
                  : "text-cyan-400 hover:text-cyan-300 hover:border-cyan-300"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>
    );
  }
  