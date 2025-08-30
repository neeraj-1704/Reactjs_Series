import React, { useState } from 'react'

function CreateTask({ taskList, setTaskList }) {
    const [task, setTask] = useState({
        task: "",
        isComplete: ""
    })

    const handleTask = (e) => {
        const { name, value } = e.target;
        setTask((prev) => ({
            id:generateRandom(),
            ...prev,
            [name]: value
        }))
    }

    const generateRandom = () => {
       const  random = Math.floor(Math.random() * 100) + 1; // 1 - 100
         return random
       
  };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.task && task.isComplete) {
            setTaskList((prev) => [...prev, task])
        }
        setTask({
            task: "",
            isComplete: ""
        });
    }
    return (
        <div>

            <div>
                <h1>Task Create</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name="task"
                        value={task.task}
                        placeholder='Enter the task name'
                        onChange={handleTask}
                    />
                    <input
                        type='text'
                        name="isComplete"
                        value={task.isComplete}
                        placeholder='Enter the status complete.imcomplete'
                        onChange={handleTask}
                    />
                    <button>Add Task</button>
                </form>
            </div>
        </div>
    )
}

export default CreateTask