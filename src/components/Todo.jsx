import React, { useState } from 'react'

function Todo() {
    const [todoName, setTodoName] = useState("")
    const [todoList, setTodoList] = useState([])

    const addTodo = () => {
        // setTodoName(todoName)
        if(todoName !== ""){
        let newTodo = {name: todoName, id: Math.ceil(Math.random()*129/20*268.4)}

        setTodoList([...todoList, newTodo])
        setTodoName("")}
      
        
    }

    const deleteTodo = (id) => {
       setTodoList( todoList.filter(todo => todo.id !== id) )
    }

    console.log(todoList);
  return (
    <div className='text-center bg-gray-600 h-screen text-white py-5'>

        <h1 className='text-4xl font-semibold mb-5 text-yellow-50'>Todo</h1>

<div>
    <input 
    className='border-2 border-blue-900 outline-none h-12 bg-blue-200 w-6/12 text-blue-700 text-lg font-medium rounded-l-3xl px-4' 
    placeholder='Add New Todo ...' type="text" value={todoName} onChange={e => setTodoName(e.target.value)}/>
    <button className='w-20 border-2 border-green-200 bg-green-500 h-11 rounded-r-3xl text-xl font-extrabold' onClick={addTodo}>+</button>
</div>

<div className=' border-red-500 mt-5'>
    {
        todoList.map(item=><div     className='border-2 border-yellow-900 outline-none h-10 bg-yellow-50 w-[725px] text-blue-700 font-medium rounded-3xl pl-4 ml-[275px] content-evenly flex gap-[37px] my-1' 
            key={item.id}> <p className='text-gray-600 text-lg  border-black w-10/12 py-1 text-start capitalize'>{item.name}</p>  <button className='w-[100px] bg-red-500 h-[36px] rounded-r-2xl text-white font-medium text-lg' onClick={() => deleteTodo(item.id)}>Delete</button> </div>)
    }
</div>

    </div>
  )
}

export default Todo