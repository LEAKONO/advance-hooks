import { useTasks } from "../context/TaskContext"

export default function TaskCard({ task }) {
  const { dispatch } = useTasks()

  return (
    <div className="bg-white dark:bg-gray-800 p-3 mb-2 rounded flex justify-between items-center shadow">
      <span
        onClick={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
        className={`cursor-pointer ${task.completed ? "line-through text-gray-400" : ""}`}
      >
        {task.title}
      </span>
      <button
        onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}
        className="text-red-500 hover:text-red-700"
      >
        ❌
      </button>
    </div>
  )
}
