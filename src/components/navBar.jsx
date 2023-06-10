import logo from '../utils/Logo - White.png'
import menu from '../utils/Hamberger.png'
import search from '../utils/search.png'
import logout from '../utils/logout.png'
import { useState } from 'react'

export const NavBar = () => {

    const [isOpen , setOpen] = useState(false)

    return(
        <div className="h-25vh w-screen bg-purple-sub flex flex-col justify-end items-center">
            <div className='w-5/6 h-5/6 flex flex-col justify-between'>
                <section className='relative w-full flex justify-between'>
                    <img className='w-auto h-8'  src={logo} alt="white logo" />
                    <div className='w-fit h-fit bg-purple-sub z-30 rounded-full'>
                        <img onClick={() => setOpen(!isOpen) } className='w-auto h-6 cursor-pointer m-4' src={menu} alt="menu icon" />
                    </div>
                    {isOpen ? <DropDown/> : <></>}
                </section>
                <section  className='w-full mt-4'>
                    <form className='flex flex-wrap items-center mb-4' action="">

                        <input className='text-purple-main rounded-2xl placeholder-purple-main outline-none text-center h-8 mr-4' type="text" placeholder='Latitude' />
                        <input className='text-purple-main rounded-2xl placeholder-purple-main outline-none text-center h-8 mr-4 mt-2' type="text" placeholder='Longitude' />
                        <button type='submit' className='grid place-items-center'>
                            <img className='w-auto h-6' src={search} alt="search icon" />
                        </button>
                    </form>
                </section>
            </div>
        </div>
    )
}

const DropDown = () => {
    return(
        <div className='absolute top-0 right-12 rounded-lg bg-white w-2/4 h-25vh md:w-1/4 border grid place-items-center'>
            <div className='w-5/6 h-5/6'>
                <section className='flex justify-around my-2 cursor-pointer'>
                    <span className='w-6 h-6 rounded-full bg-purple-light'></span>
                    <p>Profile</p>
                </section>
                <hr />
                <section className='flex justify-around items-end mt-10 cursor-pointer'>
                    <img src={logout} alt="logout icon" />
                    <p>logout</p>
                </section>
            </div>
        </div>
    )
}