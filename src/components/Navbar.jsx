

import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom'


export default function Navbar() {

    const [isMenuOpen , setIsMenuOpen] = useState(false);
    console.log(isMenuOpen);
    
    return (
        <div className='fixed bg-white top-0 w-full '>
            <div className='relative'>
                <div className='shadow-xl shadow-green-50 w-full h-[76px]  flex items-center justify-between ps-8 pe-9'>
                    <p className='monoton-regular text-3xl xl:text-4xl hover:scale-105 transition-all'>Park'in</p>
                    <ul className='hidden xl:flex items-center gap-12'>
                        <NavLink to={"/"} className="sm:text-sm py-3 px-2 duration-300 font-serif hover:scale-105 hover:text-white hover:bg-[#0E5302]" style={{ fontWeight: 400, fontSize: "20px", fontFamily: "Roboto" }}>
                            Home
                        </NavLink>
                        <NavLink className="sm:text-sm py-2 px-2 duration-300 font-serif hover:scale-105 hover:text-white hover:bg-[#0E5302]" to={"/parking-services"} style={{ fontWeight: 400, fontSize: "20px", fontFamily: "Roboto" }}>
                            Parking Services
                        </NavLink>
                        <NavLink className="sm:text-sm py-2 px-2 duration-300 font-serif hover:scale-105 hover:text-white hover:bg-[#0E5302]" to={"/locations"} style={{ fontWeight: 400, fontSize: "20px", fontFamily: "Roboto" }}>
                            Locations
                        </NavLink>
                        <NavLink className="sm:text-sm py-2 px-2 duration-300 font-serif hover:scale-105 hover:text-white hover:bg-[#0E5302]" to={"/contact"} style={{ fontWeight: 400, fontSize: "20px", fontFamily: "Roboto" }}>
                            Contact Us
                        </NavLink>
                    </ul>
                    <div className='hidden xl:flex'>
                        <NavLink
                            to={"/signup"}
                            className='border border-[#0E5302] W-[100px] h-[38px] text text-[#0E5302] text-center text-xl mr-4 px-3 hover:bg-[#0E5302] hover:scale-105  hover:text-white duration-300'
                        >Signup</NavLink>
                    </div>

                </div>
                <div onClick={() => setIsMenuOpen(!isMenuOpen)} className='sm:flex lg:flex xl:hidden cursor-pointer' style={{position:"absolute", top:"25px", right:"20px"}}>
                    { isMenuOpen ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30} />}
                </div>
                {
                    isMenuOpen && <div className={`absolute xl:hidden top-[76px] left-0 w-full bg-white flex flex-col items-center transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`} style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}>
                    <NavLink to={"/"} className="sm:text-sm hover:bg-[#0E5302] text-center hover:text-white transition-all w-full py-2" style={{ fontWeight: 400, fontSize: "20px", fontFamily: "Roboto" }}>
                        Home
                    </NavLink>
                    <NavLink className="sm:text-sm hover:bg-[#0E5302] text-center hover:text-white transition-all w-full py-2" to={"/parking-services"} style={{ fontWeight: 400, fontSize: "20px", fontFamily: "Roboto" }}>
                        Parking Services
                    </NavLink>
                    <NavLink className="sm:text-sm hover:bg-[#0E5302] text-center hover:text-white transition-all w-full py-2" to={"/locations"} style={{ fontWeight: 400, fontSize: "20px", fontFamily: "Roboto" }}>
                        Locations
                    </NavLink>
                    <NavLink className="sm:text-sm hover:bg-[#0E5302] text-center hover:text-white transition-all w-full py-2"  to={"/contact"} style={{ fontWeight: 400, fontSize: "20px", fontFamily: "Roboto" }}>
                        Contact Us
                    </NavLink>
                    <NavLink
                        to={"/signup"}
                        className='sm:text-sm hover:bg-[#0E5302] text-center hover:text-white transition-all w-full py-2' style={{ fontWeight: 400, fontSize: "20px", fontFamily: "Roboto" }}
                    >Signup</NavLink>
                    <NavLink
                        to={"/login"}
                        className='sm:text-sm hover:bg-[#0E5302] text-center hover:text-white transition-all w-full py-2' style={{ fontWeight: 400, fontSize: "20px", fontFamily: "Roboto" }}
                    >Login</NavLink>
            </div>
                }
                
            </div>
        </div>
    )
}
