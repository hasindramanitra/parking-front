

import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <div className='bg-green-200 h-72 pt-6 ps-6 pe-10 flex justify-between'>
                <p className='monoton-regular text-3xl xl:text-4xl hover:scale-105 transition-all'>Park'in</p>
                <div>
                    <p className='text-2xl font-semibold '>PARTENERS</p>
                    <ul className='hidden xl:flex flex-col'>
                        <li className='text-xl font-serif'>Amazon</li>
                        <li className='text-xl font-serif'>Asus</li>
                        <li className='text-xl font-serif'>Tesla</li>
                        <li className='text-xl font-serif'>Apple</li>
                    </ul>
                </div>
                <div>
                    <p className='text-2xl font-semibold '>SITE MAP</p>
                    <ul className='hidden xl:flex flex-col'>
                        <NavLink to={"/"} className="sm:text-sm hover:text-[#0E5302] xl:text-lg font-serif">
                            Home
                        </NavLink>
                        <NavLink className="sm:text-sm hover:text-[#0E5302] xl:text-lg font-serif" to={"/parking-services"}>
                            Parking Services
                        </NavLink>
                        <NavLink className="sm:text-sm hover:text-[#0E5302] xl:text-lg font-serif" to={"/locations"}>
                            Locations
                        </NavLink>
                        <NavLink className="sm:text-sm hover:text-[#0E5302] xl:text-lg font-serif" to={"/locations"}>
                            About Us
                        </NavLink>
                    </ul>
                </div>
                <div>
                    <p className='text-2xl font-semibold'>CONTACTS</p>
                    <p className='text-lg font-serif'>Phone Number: +261 34 46 006 17</p>
                    <p className='text-lg font-serif'>E-mail: parking@gmail.com</p>
                    <div className='flex gap-3'>
                        <i class="bi bi-facebook cursor-pointer hover:text-[#0E5302]"></i>
                        <i class="bi bi-twitter-x cursor-pointer hover:text-[#0E5302]"></i>
                        <i class="bi bi-instagram cursor-pointer hover:text-[#0E5302]"></i>
                    </div>
                </div>

            </div>
        </>
    )
}
