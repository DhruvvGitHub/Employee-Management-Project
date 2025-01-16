import { useState } from "react"
import { setLocalStorage } from "../../utils/localStorage"

const Header = ({data}) => {

  // const [username, setUsername] = useState('')

  // if(!data) {
  //   setUsername('Admin')
  // } else {
  //   setUsername(data.firstname)
  // }

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    window.location.reload()
  }

  return (
    <div className="w-full flex items-end justify-between text-white">
        <h1 className="text-2xl">Hello, <br /> <span className="text-3xl font-semibold">username👋🏻</span></h1>
        <button onClick={logOutUser} className="h-fit bg-red-500 px-4 py-3 rounded-lg">Log Out</button>
    </div>
  )
}

export default Header