import React from "react";

function DisplayTask({ taskList, handleEdit, handleDelete }) {
  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        📋 Task List
      </h1>

      {taskList && taskList.length ? (
        <ul className="space-y-4">
          {taskList.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition"
            >
              {/* Task text */}
              <span className="text-gray-800 font-medium text-lg">
                {task.task}
              </span>

              {/* Status badge */}
              <span
                className={`px-3 py-1 text-sm font-semibold rounded-full ${
                  task.isComplete.toLowerCase() === "complete"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {task.isComplete}
              </span>

              {/* Actions */}
              <div className="flex flex-col space-y-2 ml-4">
                <button
                  onClick={() => handleEdit(task.id)}
                  className="px-3 py-1 rounded-lg bg-yellow-400 text-white font-semibold hover:bg-yellow-500 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="px-3 py-1 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <h2 className="text-gray-500 text-lg text-center">
          🚫 No tasks available
        </h2>
      )}
    </div>
  );
}

export default DisplayTask;
