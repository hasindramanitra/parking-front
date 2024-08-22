import React from 'react'
import Navbar from '../components/Navbar'
import { Link, NavLink } from 'react-router-dom'
import image from '../assets/image1.jpg'
import image1 from '../assets/image2.jpg'
import image2 from '../assets/dodge.jpg'
import image3 from '../assets/bmw.jpg'
import image5 from '../assets/parking.jpg'
import image6 from '../assets/red.jpg'
import service from '../assets/service.jpg'
import amazon from '../assets/amazon.jpeg'
import airbus from '../assets/airbus.png'
import apple from '../assets/apple.jpg'
import dhl from '../assets/dhl.jpg'
import asus from '../assets/424_asus.jpg'
import tesla from '../assets/tesla.jpeg'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar className="absolute z-[1000]" />
      <div className='-z-10'>
        <p className='  text text-center text-3xl xl:text-6xl font-bold mt-40 xl:mt-52'>Looking For Parking?</p>
        <p className='text text-center text-2xl xl:text-3xl mt-3'>Welcome to our parking service, where you can securely park </p>
        <p className='text text-center text-2xl xl:text-3xl mt-1'>your car, motorcycles, and other vehicles with ease.</p>
        <div className='text-center mt-3 flex justify-center'>
          <Link to={"/learn-more"}
            className=' bg-[#0E5302] xl:W-[100px] xl:h-[48px] text text-white text-center text-2xl font-semibold mt-2 mr-5 py-2 px-3 border border-[#0E5302] hover:bg-white hover:border-[#0E5302] hover:scale-105  hover:text-[#0E5302] duration-300 '>Get Started</Link>
        </div>
        <div className=' overflow-hidden mt-6'>
          <div className=' logo-slide inline-flex gap-2'>
            <img className=' w-[200px] xl:w-[350px]' src={image} alt="" />
            <img className=' w-[200px] xl:w-[350px]' src={image1} alt="" />
            <img className=' w-[200px] xl:w-[350px]' src={image2} alt="" />
            <img className=' w-[200px] xl:w-[350px]' src={image3} alt="" />
            <img className=' w-[200px] xl:w-[350px]' src={image5} alt="" />
            <img className=' w-[200px] xl:w-[350px]' src={image6} alt="" />
            <img className=' w-[200px] xl:w-[350px]' src={image} alt="" />
            <img className=' w-[200px] xl:w-[350px]' src={image1} alt="" />
            <img className=' w-[200px] xl:w-[350px]' src={image2} alt="" />
            <img className=' w-[200px] xl:w-[350px]' src={image3} alt="" />
            <img className=' w-[200px] xl:w-[350px]' src={image5} alt="" />
            <img className=' w-[200px] xl:w-[350px]' src={image6} alt="" />
          </div>
        </div>
        <div className='mt-8 flex justify-between px-5 xl:px-36'>
          <div>
            <p className='text-xl xl:text-3xl font-bold xl:w-[600px]'>Discover Our wide Range of Parking services for cars, motorcycles, and<br></br> more other vehicles.</p>
            <p className='text-sm xl:text-xl xl:w-[500px] mb-3 xl:mb-[128px] xl:mt-3'>At Our company, we offer a variaty of parking solutions to meet the needs of differents vehicles. Wheither you're looking for a secure parking space for your car or a place to park other types of vehicles. We've got covered. Our team is dedicated to providing convenient and security parking options for all our customers.</p>
            <NavLink to={"/learn-more"}
              className=' bg-[#0E5302] xl:W-[100px]  text text-white text-center text-xl xl:text-2xl font-semibold mt-2 mr-5 py-2 px-3 border border-[#0E5302] hover:bg-white hover:border-[#0E5302] hover:scale-105  hover:text-[#0E5302] duration-300 '>Contact Us</NavLink>
          </div>
          <div>
            <img className='w-[1950px] xl:w-[2000px]' src={service} alt="" />
          </div>
        </div>
        <div className='mt-16'>
          <p className='text-2xl lg:text-3xl xl:text-4xl font-bold text-center'>Secure Parking For Your Vehicles</p>
          <p className='text-center xl:text-2xl'>Our facility parking offers 24/7 security, easy access and affordable rates</p>
          <p className='text-center xl:text-2xl'>We priority the safety and convenient of your vehicles</p>
        </div>
        <div className='flex justify-between px-36 mt-10'>
          <div>
            <p className='text-2xl text-center font-bold flex gap-3 text-blue-700'>
              24/7 Security</p>
            <p className='text-base xl:w-[300px]'>Your vehicle's security is our priority so we work with many compagnies of security for making safe your vehicles 24/7.</p>
          </div>
          <div>
            <p className='text-2xl text-center font-bold flex gap-3 text-blue-700'>
              Easy Access</p>
            <p className='text-base xl:w-[300px]'>We provide hassle free access to our parking facility, ensuring a seamless experience for our customers.</p>
          </div>
          <div>
            <p className='text-2xl text-center font-bold flex gap-3 text-blue-700'>
              Affordable Rates</p>
            <p className='text-base xl:w-[300px]'>Our parking rates are designed to be affordable allowing you to park your vehicle without breaking a bank.</p>
          </div>
        </div>
        <div className='border border-[#0E5302] pt-4 px-4 ml-36 mt-10 xl:h-44 xl:w-[1300px]'>
          <p className='xl:text-3xl font-semibold'>Find Your Parking Today?</p>
          <p className='xl:text-xl font-normal'>Reserve the convenient parking for your vehicle!</p>
          <div className='flex gap-5 mt-6'>
            <NavLink
              to={"/parking-services"}
              className='border border-[#0E5302] bg-[#0E5302] xl:W-[100px] text text-white text-center text-xl mt-2 px-3 hover:scale-105 hover:bg-white hover:border-[#0E5302]  hover:text-[#0E5302] duration-300 '
            >Find Now</NavLink>
            <NavLink
              to={"/signup"}
              className='border border-[#0E5302] W-[100px] h-[38px] text text-[#0E5302] text-center text-xl mt-2 mr-4 px-3 hover:bg-[#0E5302] hover:scale-105  hover:text-white duration-300'
            >Contact Us</NavLink>
          </div>
        </div>
        <div className='my-10'>
          <p className='text-2xl lg:text-3xl xl:text-5xl font-bold text-center'>Our parteners</p>
          <div className='flex gap-20 justify-center mt-10'>
            <img className=' w-[100px] xl:w-[150px]  rounded-lg' src={amazon} alt="" />
            <img className=' w-[100px] xl:w-[150px]  rounded-lg' src={apple} alt="" />
            <img className=' w-[100px] xl:w-[150px]  rounded-lg' src={dhl} alt="" />
            <img className=' w-[100px] xl:w-[150px]  rounded-lg' src={tesla} alt="" />
          </div>
          <div className='flex gap-10 justify-center mt-10'>
            <img className=' w-[100px] xl:w-[150px]  rounded-lg' src={airbus} alt="" />
            <img className=' w-[100px] xl:w-[150px]  rounded-lg' src={asus} alt="" />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
