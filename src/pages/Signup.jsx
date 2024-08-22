

import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    return (
        <>
            <div className='xl:flex gap-7'>
                <div className='bg-green-200 h-screen w-[500px] text-center pt-16'>
                    <p className='text-2xl font-serif'>Welcome in</p>
                    <p className='monoton-regular text-3xl xl:text-4xl hover:scale-105 transition-all'>Park'in</p>
                </div>
                <div className='ps-28'>
                    <p className='text-2xl pt-16 font-semibold mb-6'>CREATE AN ACCOUNT</p>
                    <form>
                        <div className='flex gap-6 mb-2'>
                            <div class="mb-4">
                                <label class="block  text-sm font-semibold mb-2" for="username">
                                    Fullname
                                </label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your username" />
                            </div>
                            <div class="mb-4">
                                <label class="block text-sm font-semibold mb-2" for="email">
                                    Email
                                </label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none" id="email" type="email" placeholder="Enter your email" />
                            </div>
                        </div>
                        <div class="mb-6">
                            <label class="block text-sm font-semibold mb-2" for="licence">
                                Licence
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="licence" type="text" placeholder="Enter your licence" />
                        </div>
                        <div class="mb-6">
                            <label class="block  text-sm font-semibold mb-2" for="password">
                                Password
                            </label>
                            <input class="shadow appearance-none rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        </div>
                        <div class="mb-6">
                            <label class="block  text-sm font-semibold mb-2" for="confirmPassword">
                                Confirm Password
                            </label>
                            <input class="shadow appearance-none rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="confirmPassword" type="password" placeholder="******************" />
                        </div>
                        <button class="bg-[#0E5302] py-2 px-4 rounded font-serif text-white text-xl w-full hover:scale-105 duration-300 focus:outline-none focus:shadow-outline" type="button">
                            Sign In
                        </button>
                    </form>
                    <div className='flex justify-between px-3 mt-3'>
                        <p className='font-serif'>Already have an account?</p>
                        <Link to={"/login"} className='hover:text-[#0E5302] text-lg underline font-serif'>Login</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
