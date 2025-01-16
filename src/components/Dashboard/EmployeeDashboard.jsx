import Header from "../Others/Header"
import TaskNumbers from "../Others/TaskNumbers"
import TaskList from "../TaskList/TaskList"

const EmployeeDashboard = ({data}) => {
  return (
    <div className="py-10 px-14">
        <div className="bg-[#1c1c1c] flex flex-col gap-6">
            <Header data={data} />
            <TaskNumbers data={data} />
            <TaskList data={data} />
        </div>
    </div>
  )
}

export default EmployeeDashboard