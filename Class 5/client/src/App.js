import {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import TaskDate from './Components/TaskDate';
import CreateTask from './Components/CreateTask';
import TaskList from './Components/TaskList';

import axios from 'axios'

const API_ENDPOINT = 'https://green-moose-wrap.cyclic.app/'

function App() {

  const [task, setTask] = useState([])

  const getTask = async() => {
    let data = await axios.get(`${API_ENDPOINT}task`)
    setTask(data.data)
  }

  useEffect(()=>{
    getTask()
  },[])

  console.log(task)



  return (
    <div className="App">
     <Header />
     <TaskDate />
     <CreateTask />

    <div>
    {task.map((item)=><TaskList taskName={item.name} date={item.date} isCompleted={item.isCompleted} />)}
    </div>

    </div>
  );
}

export default App;
