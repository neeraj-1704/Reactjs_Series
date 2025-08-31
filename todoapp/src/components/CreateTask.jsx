import React, { useState, useEffect } from 'react'

function CreateTask({ isEditing, taskList, editTask, setTaskList, setIsEditing, setEditTask }) {
  const [task, setTask] = useState({
    id: "",
    task: "",
    isComplete: ""
  });

  // Prefill when editing
  useEffect(() => {
    if (isEditing && editTask) {
      setTask(editTask);
    }
  }, [isEditing, editTask]);

  const handleTask = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({
      ...prev,
      [name]: value,
      id: prev.id || generateRandom() // ✅ keep old id if editing
    }));
  };

  const generateRandom = () => Math.floor(Math.random() * 1000) + 1;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      // 🟡 Update existing task
      setTaskList(
        taskList.map((t) =>
          t.id === isEditing ? { ...task } : t
        )
      );
      setIsEditing(null);
      setEditTask(null);
    } else {
      // 🟢 Add new task
      if (task.task && task.isComplete) {
        setTaskList((prev) => [...prev, task]);
      }
    }

    // Reset form
    setTask({ id: "", task: "", isComplete: "" });
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        {isEditing ? "✏️ Edit Task" : "➕ Create Task"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Task input */}
        <input
          type="text"
          name="task"
          value={task.task}
          placeholder="Enter the task name"
          onChange={handleTask}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />

        {/* Status input */}
        <input
          type="text"
          name="isComplete"
          value={task.isComplete}
          placeholder="Enter status (complete/incomplete)"
          onChange={handleTask}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
        />

        {/* Button */}
        <button
          type="submit"
          className={`w-full py-2 px-4 rounded-lg font-semibold text-white transition ${
            isEditing
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {isEditing ? "Update Task" : "Add Task"}
        </button>
      </form>
    </div>
  )
}

export default CreateTask
