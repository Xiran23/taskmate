import React from 'react'

const Showtask = ({tasklist,setTasklist,task ,setTask}) => {

  // const tasks = [
  //   {id:1001, name:"Task A", time:"2:09:01 AM 9/14/2030"},
  //   {id:1002, name:"Task B", time:"2:09:01 AM 9/14/2030"},
  //   {id:1003, name:"Task C", time:"2:09:01 AM 9/14/2030"},

  
  // ]

  const handleEdit = (id)=>{

    const seletedTask = tasklist.find(task =>task.id === id);
    setTask(seletedTask)

  }
  const handelDelete = ( id)=>{
    const updateTaskList = tasklist.filter(task => task.id !== id);
    setTasklist(updateTaskList);

  }


  
  return (
    <section className='showTask'>

      <div className="head">
        <div>
          <span className='"title'>Todo</span>
          <span className='count'>{tasklist.length}</span>
        </div>

        <button className='clearAll' onClick ={()=>setTasklist([])}>ClearALl</button>
      </div>
       
       <ul>

        { tasklist.map((task) => (

          <li key={task.id}>
          <p>
            <span className='name'>{task.name}</span>
            <span className='time'>{task.time}</span>
            
          </p>
          <i className='bi bi-pencil-square' onClick={()=> handleEdit(task.id)}></i>
          <i className='bi bi-trash' onClick={()=> handelDelete(task.id)}></i>
        </li>
      ))}
       </ul>


    </section>
  )
}

export default Showtask;
