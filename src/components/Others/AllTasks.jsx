import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTasks = () => {
    const authData = useContext(AuthContext);
    console.log(authData.employees);

    return (
        <div className="w-full h-96 flex flex-col gap-4 px-8 py-2 bg-zinc-900 overflow-auto">
            <div className="w-full bg-zinc-500 rounded-lg flex items-center justify-between text-white p-4">
                <h3>Employee Name</h3>
                <h3>New Task</h3>
                <h3>Active Task</h3>
                <h3>Completed</h3>
                <h3>Failed</h3>
            </div>

            {authData.employees.map((employee) => (
                <div key={employee.id} id="task" className="w-full bg-zinc-700 rounded-lg flex items-center justify-between text-white p-4">
                    <h3 className="text-lg">{employee.firstname}</h3>
                    <h3 className="text-lg">{employee.taskSummary.newTask}</h3>
                    <h3 className="text-lg">{employee.taskSummary.active}</h3>
                    <h3 className="text-lg">{employee.taskSummary.completed}</h3>
                    <h3 className="text-lg">{employee.taskSummary.failed}</h3>
                </div>
            ))}
        </div>
    );
}

export default AllTasks;