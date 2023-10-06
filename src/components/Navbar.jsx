import React from 'react'
import { AiTwotonePhone,AiFillInstagram,AiFillFacebook,AiFillTwitterSquare,AiFillLinkedin} from "react-icons/ai";
import { Link } from 'react-router-dom';


export const Navbar = () => {
  return (
    <div className='w-full bg-black text-white  items-center '>
       <div className="flex w-full px-[10%] h-10 border-t-4 border-[#69ffd6]">
        <div className='w-[50%] flex items-center cursor-pointer'>
           <p className='mr-1 text-[#69ffd6]'>{<AiTwotonePhone/>} </p> 
            <p>Team: 01712 960400</p>
       
        </div>
        <div className='w-[50% flex items-center ml-[30%]'>
            <a href='https://www.instagram.com/arundhawan22/ ' target='blank' className='mr-5 hover:text-[#69ffd6]'>{<AiFillInstagram size={25}/>}</a>
            <a href='https://www.facebook.com/arundhawanbwf' target='blank' className='mr-5 hover:text-[#69ffd6]'>{<AiFillFacebook size={25}/>}</a>
            <a href='https://twitter.com/i/flow/login?redirect_after_login=%2FArunDhawan_' target='blank' className='mr-5 hover:text-[#69ffd6]'>{<AiFillTwitterSquare size={25}/>}</a>
            <a href='https://www.linkedin.com/in/arun-dhawan/' target='blank' className='mr-5 hover:text-[#69ffd6]'>{<AiFillLinkedin size={25}/>}</a>
        </div>
       </div>
       <div className=' bg-[#69ffd6]'>
        <nav>
          <ul className='flex items-center w-full  h-20'>
            <div className='w-[50%] px-[10%]'>
            <li>
              <Link to='/home'>
                <img src='https://bestwayfuture.com/data/logo.png' alt='logo' className='w-24 h-auto'/>
              </Link>
            </li>
            </div>
            <div className='w-[50%] flex items-center ml-[15%] text-xl font-semibold  text-black'>
            <li className='mr-10 hover:text-[gray]'>
              <Link to='/home'>Home</Link>
            </li>
            <li className='mr-10 hover:text-[gray]'> 
              <Link to='/about '>About</Link>
            </li>
            <li className='mr-10 hover:text-[gray]'>
              <Link to='/events'>Events</Link>
            </li>
            <li className='mr-10 hover:text-[gray]'>
              <Link to='/contact'>Contact us</Link>
            </li>
            </div>
          
          </ul>
        </nav>
       </div>
     
    </div>
  )
}
