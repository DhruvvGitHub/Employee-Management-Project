import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className="h-[70%] w-[24%] bg-zinc-600 flex-shrink-0 flex flex-col gap-5 p-4 text-white rounded-lg">
    <div id="line-1" className ="w-full flex items-center justify-between">
        <h3 className="w-fit bg-red-500 px-2 py-1 rounded-lg">{data.category}</h3>
        <h3>{data.taskDate}</h3>
    </div>
    <h1 className="text-3xl font-semibold">{data.taskName}</h1>
    <h5 className="text-lg">{data.taskDescription}</h5>

    <div className='mt-2'>
        <button className='w-full'>Completed</button>
    </div>
</div>
  )
}

export default CompleteTask