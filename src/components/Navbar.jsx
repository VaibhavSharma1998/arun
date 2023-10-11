import React,{useState} from 'react'
import { AiTwotonePhone,AiFillInstagram,AiFillFacebook,AiFillTwitterSquare,AiFillLinkedin} from "react-icons/ai";
import { Link } from 'react-router-dom';


export const Navbar = () => {
  const[activelink,setActiveLink] = useState("")

  const handleActiveClick = (link)=>{
    setActiveLink(link)
  }
  return (
    <div className='w-full bg-primary text-secondary  items-center '>
       <div className="flex w-full px-[10%] h-10 border-t-4 border-tertiary">
        <div className='w-[50%] flex items-center cursor-pointer'>
           <p className='mr-1 text-tertiary'>{<AiTwotonePhone/>} </p> 
            <p>Team: 01712 960400</p>
       
        </div>
        <div className='w-[50% flex items-center ml-[30%]'>
            <a href='https://www.instagram.com/arundhawan22/ ' target='blank' className='mr-5 hover:text-tertiary'>{<AiFillInstagram size={25}/>}</a>
            <a href='https://www.facebook.com/arundhawanbwf' target='blank' className='mr-5 hover:text-tertiary'>{<AiFillFacebook size={25}/>}</a>
            <a href='https://twitter.com/i/flow/login?redirect_after_login=%2FArunDhawan_' target='blank' className='mr-5 hover:text-tertiary'>{<AiFillTwitterSquare size={25}/>}</a>
            <a href='https://www.linkedin.com/in/arun-dhawan/' target='blank' className='mr-5 hover:text-tertiary'>{<AiFillLinkedin size={25}/>}</a>
        </div>
       </div>
       <div className=' bg-tertiary'>
        <nav>
          <ul className='flex items-center w-full  h-20'>
            <div className='w-[50%] px-[10%]'>
            <li>
              <Link to='/home'>
                <img src='https://bestwayfuture.com/data/logo.png' alt='logo' className='w-24 h-auto'/>
              </Link>
            </li>
            </div>
            <div className='w-[50%] flex items-center ml-[15%] text-xl font-semibold  text-primary'>
            <li className={`mr-10 hover:text-quinary 
            ${activelink === "home" ? "text-quinary":""}`} 
            onClick={()=>handleActiveClick("home")}>
              <Link to='/home'>Home</Link>
            </li>
            <li className={`mr-10 hover:text-quinary 
               ${activelink === "about" ? "text-quinary" :""}`} onClick={()=>handleActiveClick("about")}> 
              <Link to='/about '>About</Link>
            </li>
            <li className={`mr-10 hover:text-quinary 
               ${activelink === "events" ? "text-quinary" :""}`} onClick={()=>handleActiveClick("events")}> 
              <Link to='/events'>Events</Link>
            </li>
            <li className={`mr-10 hover:text-quinary 
               ${activelink === "contact" ? "text-quinary" :""}`} onClick={()=>handleActiveClick("contact")}>
              <Link to='/contact'>Contact us</Link>
            </li>
            </div>
          
          </ul>
        </nav>
       </div>
     
    </div>
  )
}
