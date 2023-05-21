/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'

// eslint-disable-next-line react/prop-types
const Navigation = ({link}) => {
  const [isActive,setIsActive]=useState(link)
  const [closed,setClosed]=useState(true)

  const handleActiveLink = (link) => {
setIsActive(link)

  }
  return (
    <>
      <div className="fixed w-screen top-0">
        <nav className="   flex flex-col lg:flex-row lg:justify-around    bg-white    h-[80px] ">
            <div className="font-black  flex justify-between text-2xl py-[10px] lg:mt-[15px]">
          <Link to="/">
              <div>CINNAMON</div>
          </Link>
              <div className=" block lg:hidden">
               { closed ? <HiOutlineMenuAlt3 onClick={()=> setClosed(false)} className="text-3xl"/> : <AiOutlineClose onClick={()=> setClosed(true)} className="text-3xl"/>} 
                </div>

              </div>
          <div className="flex  flex-col lg:flex-row gap-x-12 ">
            <div className={`flex flex-col lg:flex-row   gap-10  lg:gap-x-8  mt-[10px] lg:mt-[25px]   ${closed ? ' ' :'hidden'} `}>
              <Link to="/projects">
                <div className="link flex justify-center flex-col items-center" onClick={()=> handleActiveLink ('projects')}>
                  <a href="" className={`font-semibold text-[18px]  hover:text-[#5135ff]  ${isActive === 'projects' ? 'text-[#5135ff] font-bold' : '' } `} >
                    Projects
                  </a>
                  <div className= {` circle  transition h-[5px] w-[5px] mt-[5px]  rounded-[50%] bg-[#5135ff]  ${isActive === 'projects' ? 'block' : 'hidden' }`}></div>
                </div>
              </Link>
              <Link to="/services">
                <div className="link flex justify-center flex-col items-center" onClick={()=> handleActiveLink ('services')}>
                  <a href=""className={`font-semibold text-[18px] hover:text-[#5135ff]  ${isActive === 'services' ? 'text-[#5135ff]' : '' } `} >
                    Services
                  </a>
                  <div className= {` circle  transition h-[5px] w-[5px] mt-[5px]  rounded-[50%] bg-[#5135ff]  ${isActive === 'services' ? 'block' : 'hidden' }`}></div>
                </div>
              </Link>
              <Link to="/careers">
                <div className="link flex justify-center flex-col items-center " onClick={()=> handleActiveLink ('careers')}>
                  <a href="" className={`font-semibold text-[18px] hover:text-[#5135ff]  ${isActive === 'careers' ? 'text-[#5135ff]' : '' } `} >
                    Careers
                  </a>
                  <div className= {` circle  transition h-[5px] w-[5px] mt-[5px]  rounded-[50%] bg-[#5135ff]  ${isActive === 'careers' ? 'block' : 'hidden' }`}></div>
                </div>
              </Link>
              <Link to="/about">
                <div className="link flex justify-center flex-col items-center" onClick={()=> handleActiveLink ('about')}>
                  <a href="" className= {`font-semibold text-[18px] hover:text-[#5135ff]  ${isActive === 'about' ? 'text-[#5135ff]' : '' } `}>
                    About Us
                  </a>
                  <div className= {` circle  transition h-[5px] w-[5px] mt-[5px]  rounded-[50%] bg-[#5135ff]  ${isActive === 'about' ? 'block' : 'hidden' }`}></div>
                </div>
              </Link>
              <Link to="/blog">
                <div className="link flex justify-center flex-col items-center" onClick={()=> handleActiveLink ('blog')}>
                  <a href=""  className= {`font-semibold text-[18px] hover:text-[#5135ff]  ${isActive === 'blog' ? 'text-[#5135ff]' : '' } `}>
                    Blog
                  </a>
                  <div className= {` circle  transition h-[5px] w-[5px] mt-[5px]  rounded-[50%] bg-[#5135ff]  ${isActive === 'blog' ? 'block' : 'hidden' }`}></div>
                </div>
              </Link>
              <Link to="/contact">
                  <div className="link  flex justify-center flex-col items-center">
                    <a
                      href=""
                      className=" lg:hidden font-bold text-black transitiontext-[18px] hover:text-[#5135ff]"
                    >
                      Contact us
                    </a>
                    <div className=" circle hidden transition h-[5px] w-[5px] mt-[5px]  rounded-[50%] bg-[#5135ff]"></div>
                  </div>
                </Link>

            </div>
            <Link to="/">
              <div className=" opacity-0 lg:opacity-[150] h-[45px] cursor-pointer mt-[20px]   w-[45px] rounded-[50%]  flex justify-center items-center border-2 border-[#5135ff]">
                <BsFillPlayFill className="text-2xl text-[#5135ff]" />
              </div>
            </Link>
            <Link to="/contact">
              <div className="mt-[20px]">
                <button className=" hidden lg:block bg-[#5135ff] hover:border-2 font-bold border-[#5135ff] hover:bg-white h-[45px] w-[170px] hover:text-[#5135ff] text-white">
                  Contact Us
                </button>
              </div>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
