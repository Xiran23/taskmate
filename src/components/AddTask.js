import React from 'react'

const AddTask = ({tasklist,setTasklist,task ,setTask}) => {
  const handleSubmit=(e)=>{
    e.preventDefault();

    if(task.id) {

      const date = new Date ();
      const updateTask = tasklist.map((todo)=>(
        todo.id === task.id ? {
          id :task.id 
          // ,name:e.target.task.value,
          ,name : task.name,
          time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
        
        } :todo

        
      ));
      setTasklist(updateTask)
      setTask({})

    }else{

      const date = new Date();
      const newTask = {
        id:date.getTime(),
        name :e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,}
  
              setTasklist([...tasklist,newTask]);
              // e.target.task.value = "";
              setTask({})
    }




  }
  return (
    <section className='addTask'>
      <form onSubmit={handleSubmit}>
        <input type='text' name='task' value={task.name || ""} autoComplete='off' placeholder='add task' onChange = {
e => setTask({...task , name:e.target.value})


        }/>

        <button type='submit'>{task.id ? "upadate " : "Add"}</button>
        
      </form>
    </section>
  )
}

export default AddTask
