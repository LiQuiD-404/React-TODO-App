import React, {useState} from 'react'

const TodoForm = (props) => {
    const [val, setval] = useState("")
    const handleData = () =>{
        props.TodoData(val)
        setval("");
    }

    return (
        <>
            <div className='flex items-center justify-center my-10'>
                <input type="text" placeholder='Enter a new task here...' className='h-11 w-[12rem] sm:w-[20rem] bg-lime-200 px-4 py-2 rounded-md mx-3 sm:mx-5 outline-none' value={val} onChange={(e)=>{
                    setval(e.target.value)
                }} />
                <button className='bg-lime-300 px-2 py-2 rounded-md text-[0.8rem] sm:text-[1rem]' onClick={handleData}>Add Todo</button>
            </div>

        </>
    )
}

export default TodoForm
