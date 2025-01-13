import AllTasks from "../Others/AllTasks"
import CreateTask from "../Others/CreateTask"

const AdminDashboard = () => {
  return (
    <div className="px-14">
        <CreateTask />
        <AllTasks />
    </div>
  )
}

export default AdminDashboard

