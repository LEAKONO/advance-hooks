import { useState } from "react"
import { useTasks } from "../context/TaskContext"
import { v4 as uuidv4 } from "uuid"

export default function TaskForm() {
  const { dispatch } = useTasks()
  const [title, setTitle] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim() === "") return

    dispatch({
      type: "ADD_TASK",
      payload: {
        id: uuidv4(),
        title,
        completed: false,
      }
    })

    setTitle("")
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task..."
        className="flex-grow p-2 border rounded dark:bg-gray-800 dark:text-white"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add</button>
    </form>
  )
}
