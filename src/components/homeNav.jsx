/* eslint-disable no-unused-vars */
import { BsFillPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from "react";
const HomeNav = () => {
    const [closed,setClosed]=useState(true)
  return (
    <>
      <div className=" ">
        <div className="lg:fixed w-screen top-[10px] lg:top-0">
          <nav className="   flex flex-col lg:flex-row lg:justify-around z-50 bg-[#1C1C1C] bg-hero-pattern    h-[80px] ">
            <div className="font-black  flex justify-between text-white text-2xl px-[40px] py-[20px]  lg:py-[10px]  lg:mt-[5px] ">
              <div>CINNAMON</div>
              <div className=" block lg:hidden">
               { closed ? <HiOutlineMenuAlt3 onClick={()=> setClosed(false)} className="text-3xl"/> : <AiOutlineClose onClick={()=> setClosed(true)} className="text-3xl"/>} 
                </div>
            </div>
            <div className="flex  flex-col lg:flex-row gap-x-12  ">
              <div className={`flex flex-col lg:flex-row gap-10  lg:gap-x-8 lg:mt-[15px] mt-[50px] lg:flex ${ closed ? ' hidden' : ''} `} >
                <Link to="/projects">
                  <div className="lg:hidden link flex justify-center flex-col items-center">
                    <a
                      href=""
                      className="font-bold transition text-white text-[18px] hover:text-[#5135ff]"
                    >
                      Home
                    </a>
                    <div className=" circle hidden transition h-[5px] w-[5px] mt-[5px]  rounded-[50%] bg-[#5135ff]"></div>
                  </div>
                </Link>
                <Link to="/projects">
                  <div className="link flex justify-center flex-col items-center">
                    <a
                      href=""
                      className="font-bold transition text-white text-[18px] hover:text-[#5135ff]"
                    >
                      Projects
                    </a>
                    <div className=" circle hidden transition h-[5px] w-[5px] mt-[5px]  rounded-[50%] bg-[#5135ff]"></div>
                  </div>
                </Link>
                <Link to="/services">
                  <div className="link flex justify-center flex-col items-center">
                    <a
                      href=""
                      className="font-bold text-white text-[18px] transition hover:text-[#5135ff]"
                    >
                      Services
                    </a>
                    <div className=" circle hidden transition h-[5px] w-[5px] mt-[5px]  rounded-[50%] bg-[#5135ff]"></div>
                  </div>
                </Link>
                <Link to="/careers">
                  <div className="link flex justify-center flex-col items-center ">
                    <a
                      href=""
                      className="font-bold text-white text-[18px] transition hover:text-[#5135ff]"
                    >
                      Careers
                    </a>
                    <div className=" circle hidden transition h-[5px] w-[5px] mt-[5px]  rounded-[50%] bg-[#5135ff]"></div>
                  </div>
                </Link>
                <Link to="/about">
                  <div className="link flex justify-center flex-col items-center">
                    <a
                      href=""
                      className="font-bold transition text-white text-[18px] hover:text-[#5135ff]"
                    >
                      About Us
                    </a>
                    <div className=" circle hidden transition h-[5px] w-[5px] mt-[5px]  rounded-[50%] bg-[#5135ff]"></div>
                  </div>
                </Link>
                <Link to="/blog">
                  <div className="link flex justify-center flex-col items-center">
                    <a
                      href=""
                      className="font-bold text-white transitiontext-[18px] hover:text-[#5135ff]"
                    >
                      Blog
                    </a>
                    <div className=" circle hidden transition h-[5px] w-[5px] mt-[5px]  rounded-[50%] bg-[#5135ff]"></div>
                  </div>
                </Link>
                <Link to="/contact">
                  <div className="lg:hidden link flex justify-center flex-col items-center">
                    <a
                      href=""
                      className="font-bold text-white transitiontext-[18px] hover:text-[#5135ff]"
                    >
                      Contact us
                    </a>
                    <div className=" circle hidden transition h-[5px] w-[5px] mt-[5px]  rounded-[50%] bg-[#5135ff]"></div>
                  </div>
                </Link>
              </div>
              <Link to="/">
                <div className="opacity-0 lg:opacity-[150] h-[45px] cursor-pointer transition mt-[10px] w-[45px] rounded-[50%]  flex justify-center items-center border-2 border-white hover:bg-[#5135ff] hover:border-[#5135ff]">
                  <BsFillPlayFill className="text-2xl text-white " />
                </div>
              </Link>
              <Link to="/contact">
                <div className="mt-[10px]">
                  <button className="hidden lg:block bg-[#5135ff] text-[18px] transition hover:border-2 font-bold border-[#5135ff] hover:bg-white h-[45px] w-[170px] hover:[#5135ff] text-white hover:text-[#5135ff]">
                    Contact Us
                  </button>
                </div>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default HomeNav;