import React, { useEffect, useState } from 'react';

function CreateTask({ taskList, setTaskList, isEdit, setIsEdit }) {
    const [task, setTask] = useState({
        task: "",
        status: "incomplete"   // default should be string
    });

     // 🟢 Load task into form when editing
  useEffect(() => {
    if (isEdit !== null) {
      const editTask = taskList.find((t) => t.id === isEdit);
      if (editTask) setTask(editTask);
    }
  }, [isEdit, taskList]);
  

    const HandleTask = (e) => {
        e.preventDefault(); // prevent page refresh    
        if (isEdit !== null) {
         const updatedList =   taskList.map((t) => {
                t.id === isEdit ? { ...task } : t
            })
            setTaskList(updatedList)
            setIsEdit(null)
        }
        else {

            if (!task.task.trim()) return; // prevent empty tasks
            setTaskList([...taskList, task]); // add new task to list
            setTask({ task: "", status: "incomplete" }); // reset form
        }

    };



    return (
        <div>
            <h1>Create task</h1>
            <form onSubmit={HandleTask}>
                <input
                    type="text"
                    name="task"
                    placeholder="Enter the name"
                    value={task.task}
                    onChange={(e) => setTask({ ...task, task: e.target.value })}
                />

                <p>Select Status:</p>
                <label>
                    <input
                        type="radio"
                        name="status"
                        value="complete"
                        checked={task.status === "complete"}
                        onChange={(e) => setTask({ ...task, status: e.target.value })}
                    />
                    Complete
                </label>

                <label>
                    <input
                        type="radio"
                        name="status"
                        value="incomplete"
                        checked={task.status === "incomplete"}
                        onChange={(e) => setTask({ ...task, status: e.target.value })}
                    />
                    Incomplete
                </label>

                <br />
                <button type="submit">Add task</button>
            </form>
        </div>
    );
}

export default CreateTask;
