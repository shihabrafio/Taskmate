import React from 'react'

export const Addtask = () => {
  return (
    <section className="addTask">
      <form>
        <input type="text" placeholder="add task" autoComplete="off" maxLength={25} />
        <button type="submit"></button>
      </form>
    </section>
  )
}
