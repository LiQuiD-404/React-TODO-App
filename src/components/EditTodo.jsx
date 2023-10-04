import React, {useState} from 'react'

const EditTodo = (props) => {
    const [val, setval] = useState(props.task)
    const handleData = () =>{
       props.updateTodo(val)
    }

    return (
        <>
            <div className='flex items-center justify-center my-10'>
                <input type="text" placeholder='Update Task...' className='h-11 w-[20rem] bg-lime-200 px-4 py-2 rounded-md mx-5 outline-none' value={val} onChange={(e)=>{
                    setval(e.target.value) 
                }} />
                <button className='bg-lime-300 px-4 py-2 rounded-md' onClick={handleData}>Update Todo</button>
            </div>

        </>
    )
}

export default EditTodo
