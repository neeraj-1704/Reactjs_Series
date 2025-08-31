import React, { useState } from "react";
import CreateTask from "./components/CreateTask";
import DisplayTask from "./components/DisplayTask";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [editTask, setEditTask] = useState(null); // store task being edited

  const handleEdit = (id) => {
    const selectedTask = taskList.find((task) => task.id === id);
    setIsEditing(id);
    setEditTask(selectedTask); // prefilling before editing
  };

  // delete
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        ✅ Todo App
      </h1>

      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <CreateTask
          isEditing={isEditing}
          taskList={taskList}
          editTask={editTask}
          setTaskList={setTaskList}
          setIsEditing={setIsEditing}
          setEditTask={setEditTask}
        />
      </div>

      <div className="w-full max-w-md mt-6">
        <DisplayTask
          taskList={taskList}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
