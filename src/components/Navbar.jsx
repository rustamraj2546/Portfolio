import logo from "../assets/logo.png"

const Navbar = () => {

    return (
        <nav className="navbar bg-gray-400/10  w-[70%] m-auto mt-8 py-2 px-4 flex flex-row justify-between items-center rounded-xl">
            <div className="logo">
                <img src={logo} alt="" className="w-8 cursor-pointer" />
            </div>
            <ul className="w-5/12 flex flex-row justify-around">
                <li className="cursor-pointer hover:text-red-500 duration-300">Home</li>
                <li className="cursor-pointer hover:text-red-500 duration-300"><a href="/about">About</a></li>
                <li className="cursor-pointer hover:text-red-500 duration-300">Projects</li>
                <li className="cursor-pointer hover:text-red-500 duration-300">Resume</li>
                <li className="cursor-pointer hover:text-red-500 duration-300">Contact</li>
            </ul>
        </nav>
        
    )
}

export default Navbar;