const TaskNumbers = ({data}) => {
  return (
    <div className="flex justify-center w-full gap-4">
        <div className="w-[24%] bg-red-400 rounded-xl text-white flex flex-col px-4 py-8">
            <h3 className="text-4xl font-bold">{data.taskSummary.newTask}</h3>
            <h3 className="text-3xl font-semibold">New Task</h3>
        </div>
        <div className="w-[24%] bg-blue-400 rounded-xl text-white flex flex-col px-4 py-8">
            <h3 className="text-4xl font-bold">{data.taskSummary.completed}</h3>
            <h3 className="text-3xl font-semibold">Completed Task</h3>
        </div>
        <div className="w-[24%] bg-green-400 rounded-xl text-white flex flex-col px-4 py-8">
            <h3 className="text-4xl font-bold">{data.taskSummary.active}</h3>
            <h3 className="text-3xl font-semibold">Accepted Task</h3>
        </div>
        <div className="w-[24%] bg-yellow-500 rounded-xl text-white flex flex-col px-4 py-8">
            <h3 className="text-4xl font-bold">{data.taskSummary.failed}</h3>
            <h3 className="text-3xl font-semibold">Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskNumbers