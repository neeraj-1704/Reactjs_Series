import React from 'react'

function DisplayTask({ taskList, handleEdit, handleDelete }) {
    return (
        <div>
            {taskList.length > 0 ? (
                <div>
                    {taskList.map((task, index) => (
                        <ul key={index}>
                            <li>{task.task} - {task.status}</li>
                            <button onClick={() => handleEdit(index)}>Edit</button>
                            <button onClick={() => handleDelete(index)}>Delete</button>

                        </ul>
                    ))}
                </div>
            ) : (
                <p>No task list</p>
            )}
        </div>
    )
}

export default DisplayTask
