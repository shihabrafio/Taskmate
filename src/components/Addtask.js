import React from 'react'

export const Addtask = ({tasklist, setTasklist, task, setTask}) => {
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(task.id){
      const date = new Date();
      const UpdateTask = tasklist.map((todo)=>(
        todo.id === task.id ? {id: task.id, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : todo 
      ))
      setTasklist(UpdateTask)
      setTask({});
      task.name = "";
    }else {
      const date = new Date();
      const newTask = {id: date.getTime(), name: e.target.task.value, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}
      if(newTask.name){
        setTasklist([...tasklist, newTask])
        e.target.task.value = "";
        setTask({});
      }
    }
  }
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" value={task.name || ''} placeholder="add task" autoComplete="off" maxLength={25} onChange={(e)=> setTask({...task, name: e.target.value})}/>
        <button type="submit"></button>
      </form>
    </section>
  )
}
