import React, { useContext } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import { Link } from 'react-router-dom'
import { IoIosCloseCircle } from 'react-icons/io'

const Sidebar = () => {
    const { isOpen, setIsOpen } = useContext(SidebarContext)

    return (
        <div className={`
            ${isOpen ? 'opacity-1' : 'opacity-0'}
            fixed z-20 top-0 w-full h-full bg-black/50 transition-all duration-300 pointer-events-none
        `}>
            <div className={`
                ${isOpen ? 'right-0' : '-right-full'}
                fixed top-0 w-full sm:w-[50vw] md:w-[40vw] lg:w-[30vw] h-full bg-gray-200 text-black px-6 pt-6 transition-all duration-300 pointer-events-auto
            `}>
                <div className='flex justify-between items-center mb-10'>
                    <div onClick={() => setIsOpen(false)} className='cursor-pointer hover:text-gray-800 transition'>
                        <IoIosCloseCircle size={25} />
                    </div>
                    <div className="text-md text-black font-bold decoration-lime-500 underline underline-offset-8 decoration-wavy transition">
                        MadaBlog
                    </div>
                </div>
                <div className='text-center pt-10'>
                    <ul className="text-xl font-semibold space-y-6">
                        <li onClick={() => setIsOpen(false)} className='hover:text-lime-700'><Link to='/Mada-Blog/'>home</Link></li>
                        <li onClick={() => setIsOpen(false)} className='hover:text-lime-700'><Link to='/Mada-Blog/abouts'>abouts</Link></li>
                        <li onClick={() => setIsOpen(false)} className='hover:text-lime-700'><Link to='/Mada-Blog/contacts'>contacts</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar