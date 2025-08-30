import React from "react";

function DisplayTask({ taskList }) {
  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Task List</h1>

      {taskList && taskList.length ? (
        <ul className="space-y-3">
          {taskList.map((task) => (
            <li
              key={task._id}
              className="flex justify-between items-center p-3 bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              <span className="text-gray-700 font-medium">{task.task}</span>
              <span
                className={`px-3 py-1 text-sm font-semibold rounded-full ${
                  task.isComplete.toLowerCase() === "complete"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {task.isComplete}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <h2 className="text-gray-500 text-lg">No task list is there</h2>
      )}
    </div>
  );
}

export default DisplayTask;
