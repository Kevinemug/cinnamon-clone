/* eslint-disable no-unused-vars */
import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <>
      <div className="fixed w-screen top-0">
        <nav className=" flex flex-row justify-around  bg-white    h-[80px] ">
          <div className="font-black text-2xl py-[10px] lg:mt-[15px]">CINNAMON</div>
          <div className="flex flex-row gap-x-12  ">
            <div className="flex gap-x-8 mt-[10px] lg:mt-[25px]">
              <Link to="/projects">
                <div className="link flex justify-center flex-col items-center">
                  <a href="" className="font-semibold text-[18px] hover:text-blue-500">
                    Projects
                  </a>
                  <div className=" circle hidden transition h-[5px] w-[5px] mt-[5px]  rounded-[50%] bg-blue-500"></div>
                </div>
              </Link>
              <Link to="/services">
                <div className="link flex justify-center flex-col items-center">
                  <a href="" className="font-semibold text-[18px] hover:text-blue-500">
                    Services
                  </a>
                  <div className=" circle hidden transition h-[5px] w-[5px] mt-[5px]  rounded-[50%] bg-blue-500"></div>
                </div>
              </Link>
              <Link to="/careers">
                <div className="link flex justify-center flex-col items-center ">
                  <a href="" className="font-semibold text-[18px] hover:text-blue-500">
                    Careers
                  </a>
                  <div className=" circle hidden transition h-[5px] w-[5px] mt-[5px]  rounded-[50%] bg-blue-500"></div>
                </div>
              </Link>
              <Link to="/about">
                <div className="link flex justify-center flex-col items-center">
                  <a href="" className="font-semibold text-[18px] hover:text-blue-500">
                    About Us
                  </a>
                  <div className=" circle hidden transition h-[5px] w-[5px] mt-[5px]  rounded-[50%] bg-blue-500"></div>
                </div>
              </Link>
              <Link to="/blog">
                <div className="link flex justify-center flex-col items-center">
                  <a href="" className="font-semibold text-[18px] hover:text-blue-500">
                    Blog
                  </a>
                  <div className=" circle hidden transition h-[5px] w-[5px] mt-[5px]  rounded-[50%] bg-blue-500"></div>
                </div>
              </Link>
            </div>
            <Link to="/">
              <div className="h-[45px] cursor-pointer mt-[20px]   w-[45px] rounded-[50%]  flex justify-center items-center border-2 border-blue-500">
                <BsFillPlayFill className="text-2xl text-blue-500" />
              </div>
            </Link>
            <Link to="/contact">
              <div className="mt-[20px]">
                <button className="bg-blue-500 hover:border-2 font-bold border-blue-500 hover:bg-white h-[45px] w-[170px] hover:text-blue-500 text-white">
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
