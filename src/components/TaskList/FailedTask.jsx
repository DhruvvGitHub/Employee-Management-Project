const FailedTask = () => {
    return (
        <div className="h-[70%] w-[24%] bg-yellow-600 flex-shrink-0 flex flex-col gap-5 p-4 text-white rounded-lg">
            <div id="line-1" className="w-full flex items-center justify-between">
                <h3 className="w-fit bg-red-500 px-2 py-1 rounded-lg">High</h3>
                <h3>Date</h3>
            </div>
            <h1 className="text-3xl font-semibold">Task Name</h1>
            <h5 className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, nihil!</h5>

            <div className='mt-2'>
                <button className='w-full'>Completed</button>
            </div>
        </div>
    )
}

export default FailedTask