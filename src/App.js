
import { useEffect, useState } from "react";
import Header  from "./components/Header";
import AddTask  from "./components/AddTask";
import ShowTask  from "./components/Showtask";

import './App.css';

function App() {

  // const [tasklist ,setTasklist] = useState([]);
  const [tasklist ,setTasklist] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);
  const [task , setTask] = useState({});

  useEffect(()=>{
    localStorage.setItem("tasklist",JSON.stringify(tasklist))
    console.log(JSON.stringify(tasklist));

  },[tasklist]);
 

  return (
    <div className="App">
      <Header></Header>
      <AddTask 
      tasklist={tasklist} setTasklist={setTasklist}
      task = {task} setTask={setTask}

      ></AddTask>
      <ShowTask tasklist={tasklist} setTasklist={setTasklist} setTask={setTask}></ShowTask>
      
    </div>
  );
}

export default App;
