import Header from "./Header"

const CreateTask = () => {
  return (
            <div className="py-4 text-white flex flex-col items-center">
        <Header />

            <h1 className="text-3xl">Create Task</h1>
        <form className="w-fit flex items-start justify-center gap-20 mt-4 bg-zinc-900 px-8 py-6" action="">

            <div id="left" className="flex flex-col gap-8">
            <div>
                <h3 className="text-xl text-zinc-300">Task Title</h3>
                <input className="bg-zinc-600 p-2 rounded-lg outline-none" type="text" placeholder="Make a UI Design" />
            </div>
            <div>
                <h3 className="text-xl text-zinc-300">Date</h3>
                <input className="bg-zinc-600 p-2 rounded-lg outline-none" type="date" />
            </div>
            <div>
                <h3 className="text-xl text-zinc-300">Assign to</h3>
                <input className="bg-zinc-600 p-2 rounded-lg outline-none" type="text" placeholder="Enter employee name" />
            </div>
            <div>
                <h3 className="text-xl text-zinc-300">Category</h3>
                <input className="bg-zinc-600 p-2 rounded-lg outline-none" type="text" placeholder="Enter Category" />
            </div>
            </div>
            <div id="right" className="">
                <h3 className="text-xl text-zinc-300">Description</h3>
                <textarea className="h-[20vh] bg-zinc-600 p-2 rounded-lg outline-none w-[25vw] block" placeholder="Provide detailed description" ></textarea>

                <button type="submit" className="bg-green-500 rounded-md px-4 py-2 mt-5 text-xl">Create Task</button>
            </div>
        </form>
    </div>
  )
}

export default CreateTask