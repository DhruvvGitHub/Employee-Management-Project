import Header from "../Others/Header"
import TaskNumbers from "../Others/TaskNumbers"
import TaskList from "../TaskList/TaskList"

const EmployeeDashboard = () => {
  return (
    <div className="py-10 px-14">
        <div className="bg-[#1c1c1c] flex flex-col gap-6">
            <Header />
            <TaskNumbers />
            <TaskList />
        </div>
    </div>
  )
}

export default EmployeeDashboard