import TaskForm from "../components/TaskForm"
import TaskCard from "../components/TaskCard"
import { useTasks } from "../context/TaskContext"

export default function Home() {
  const { tasks } = useTasks()

  return (
    <div className="max-w-xl mx-auto p-4">
      <TaskForm />
      {tasks.length === 0 ? (
        <p className="text-gray-400">No tasks yet. Add one above!</p>
      ) : (
        tasks.map(task => <TaskCard key={task.id} task={task} />)
      )}
    </div>
  )
}
