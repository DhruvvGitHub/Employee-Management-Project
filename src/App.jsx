import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {

  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)

  useEffect(() => {
    if(authData) {
      const loggedInUser = localStorage.getItem("loggedInUser")

      if(loggedInUser) {
        setUser(loggedInUser.role)
      }
    }
  }, [authData])
  

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
    } else if (authData && authData.employees.find((e) => email == e.email && e.password == password)) { // Assuming a different condition
      setUser('employee');
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee'}))
    } else {
      alert("Invalid Credentials");
    }
  };
  

  const data = useContext(AuthContext)
  console.log(data);

  return (
    <div className="w-full h-screen bg-zinc-800">
      <>
        {!user ? <Login handleLogin={handleLogin} /> : ''}
        {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
      </>
    </div>
  );
};

export default App;