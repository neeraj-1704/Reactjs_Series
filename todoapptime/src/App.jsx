import React , {useState}from 'react'
import CreateTask from './components/CreateTask'
import DisplayTask from './components/DisplayTask';
function App() {
  const [taskList, setTaskList] = useState([]);
  const [isEdit , setIsEdit] = useState(null);

  const handleEdit = (index) => {
    setIsEdit(index); // tell CreateTask which task to load
  }

  const handleDelete = (index) => {
    setTaskList(taskList.filter((_, i) => i !== index));
  };
  
  return (
    <div>
      <h1>Task App</h1>
      <CreateTask 
      taskList={taskList} 
      setTaskList={setTaskList}
      isEdit={isEdit}
      setIsEdit={setIsEdit}
      
      />   
      <DisplayTask
       taskList ={taskList} 
       handleEdit={handleEdit} 
       handleDelete={handleDelete} />
    </div>
  )
}

export default App