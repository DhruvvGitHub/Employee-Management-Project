import { useState } from "react";

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()

        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }

    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="border-2 border-red-400">
          <form onSubmit={submitHandler} action="" className="flex flex-col gap-40 px-24 py-16">
            <h3 className="text-white text-3xl ">Log In</h3>
            <div id="inputs" className="flex flex-col gap-4">
              <input required
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              value={email}
                className="bg-zinc-900 rounded-xl p-2 outline-none text-white"
                type="email"
                placeholder="Email"
              />
              <input required
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              value={password}
                className="bg-zinc-900 rounded-xl p-2 outline-none text-white"
                type="password"
                placeholder="Password"
              />
              <button className="bg-red-400 rounded-xl p-2" type="submit">
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Login;
