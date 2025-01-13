const Header = () => {
  return (
    <div className="w-full flex items-end justify-between text-white">
        <h1 className="text-2xl">Hello, <br /> <span className="text-3xl font-semibold">Dhruv👋🏻</span></h1>
        <button className="h-fit bg-red-500 px-4 py-3 rounded-lg">Log Out</button>
    </div>
  )
}

export default Header