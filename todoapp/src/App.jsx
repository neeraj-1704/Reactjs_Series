import React from 'react'
import { useState } from 'react'
import CreateTask from './components/CreateTask'
import DisplayTask from './components/DisplayTask'
function App() {

   const [taskList, setTaskList] = useState([])
    
  return (
    <div>
      <h1>This the todo app</h1>
      <CreateTask  taskList={taskList} setTaskList={setTaskList}/>
      <DisplayTask taskList={taskList}/>
    </div>
  )
}

export default App