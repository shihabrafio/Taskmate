import React from 'react'

export const Addtask = ({newbie, old}) => {
  const handleSubmit=(e)=>{
    e.preventDefault();
    const date = new Date();
    const newTask = {id: date.getTime(), name: e.target.task.value, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}
    old([...newbie, newTask])
    e.target.task.value = "";
  }
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" placeholder="add task" autoComplete="off" maxLength={25} />
        <button type="submit"></button>
      </form>
    </section>
  )
}
