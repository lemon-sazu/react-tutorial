import { useState } from 'react';
import './App.css';

function App() {
  const [newTask, setNewTask] = useState('');
  const [tasklist, setTasklist] = useState([]);
  const handleChange = (event) => {
    setNewTask(event.target.value)
  }
  const addToTaskList = () => {
    const task = {
      id: tasklist.length === 0 ? 1 : tasklist.length + 1,
      name: newTask,
      complete: false
    }
    setTasklist([...tasklist, task]);
    console.log(task)
  }
  const deleteTask = (taskid) => {

    const setNewTask =
      tasklist.filter((task) => {
        return task.id !== taskid
      })

    setTasklist(setNewTask)
  }
  const markAsDone = (id) => {
    setTasklist(

      tasklist.map((task, key) => {
        if (task.id === id) {
          return { ...task, complete: true }
        } else {
          return task;
        }
      })

    )
  }
  return (
    <div>
      <div className='add_area'>
        <div className="add_area-inputs">
          <input onChange={handleChange} className='task_input' type="text" placeholder='Do Homework' />
          <button onClick={addToTaskList} className='addtask_btn'>Add Task</button>
        </div>
      </div>
      {tasklist.map((task, key) => {
        return <TaskCard name={task.name} markAsDone={markAsDone} complete={task.complete} key={key} id={task.id} deleteTask={deleteTask} />
      })}
    </div >
  );
}

const TaskCard = (props) => {
  return <div className="list_area" style={{ backgroundColor: props.complete ? 'lawngreen' : '' }}>
    <div className="list_area-content">
      <h4>{props.name}</h4>
      {props.complete ? 'Done' : <button className='complete_btn' onClick={() => props.markAsDone(props.id)}>Mark As Done</button>}
      <button onClick={() => props.deleteTask(props.id)} className='close_btn'>x</button>
    </div>

  </div>
}

export default App;
