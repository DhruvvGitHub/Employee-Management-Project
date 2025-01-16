import AcceptTask from "./AcceptTask"
import CompleteTask from "./CompleteTask"
import FailedTask from "./FailedTask"
import NewTask from "./NewTask"

const TaskList = ({data}) => {
  return (
    <div id="tasklist" className="h-[55vh] w-full flex items-center gap-5 flex-wrap overflow-x-auto">
        {data.tasks.map((elem, id) => {
            
            if(elem.active) {
                return <AcceptTask key={id}/>
            }
            if(elem.newTask) {
                return <NewTask key={id}/>
            }
            if(elem.failed) {
                return <FailedTask key={id}/>
            }
            if(elem.completed) {
                return <CompleteTask key={id}/>
            }

        })}
    </div>
  )
}

export default TaskList