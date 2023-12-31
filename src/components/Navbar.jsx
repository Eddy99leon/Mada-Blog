import { Link } from "react-router-dom"
import { BsPersonCircle } from "react-icons/bs";
import { CgMenuBoxed } from "react-icons/cg";
import { BiReceipt } from "react-icons/bi";
import { SidebarContext } from "../contexts/SidebarContext";
import { useContext } from "react";


function Navbar() {
    const { setIsOpen } = useContext(SidebarContext)

    return (
        <section className=" bg-lime-500">
            <nav className="flex justify-between items-center max-w-5xl mx-auto py-3 px-3 sm:px-8 text-black">
                <Link to='/Mada-Blog/'>
                    <h1 className="flex items-center text-xl font-bold">
                        <BiReceipt size={25} /> MadaBlog.
                    </h1>
                </Link>
                <div className="flex items-center">
                    <ul className="hidden md:flex space-x-8 text-lg font-semibold mr-8">
                        <li><Link to='/Mada-Blog/'>home</Link></li>
                        <li><Link to='/Mada-Blog/abouts'>abouts</Link></li>
                        <li><Link to='/Mada-Blog/contacts'>contacts</Link></li>
                    </ul>
                    <div className="flex items-center space-x-4 pl-8 border-none md:border-l-2 border-black">
                        <BsPersonCircle size={20} className=" cursor-pointer" />
                        <CgMenuBoxed onClick={() => setIsOpen(true)} size={24} className=" cursor-pointer" />
                    </div>
                </div>
            </nav>
        </section>
    
  )
}

export default Navbar