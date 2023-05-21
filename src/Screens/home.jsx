/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import HomeNav from '../components/homeNav'
import Navigation from "../components/navigation";
import debounce from "lodash.debounce";
import {AiOutlineArrowLeft} from 'react-icons/ai'
import Title from "../components/title";
import BackgroundCard from "../components/backgroundCard";
const Home = () => {
  const [isTop, setIsTop] = useState(true);
const[open,setOpen] = useState(false);
  const handleScroll = debounce(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Check if the scroll position is at the top
    if (scrollTop === 0) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  }, 200); // Debounce for 200ms
  useEffect(() => {
    // Attach the debounced onscroll event listener to the window
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

const handleOpen = () =>{
setOpen(true)

}

  return (
    <>
          <HomeNav handler = {handleOpen} boolean= {true} /> 
  
      <div>
        <div className="bg-[#1C1C1C] bg-hero-pattern h-[100vh] w-screen max-w-[100%] ">
          <Title
            color="text-[#f6f6f6]"
            t1="Results focused design &"
            t2="development agency"
            t3="Extend your team with our high performing specialists or hire us to
            shape your product from scratch. Either way, we’ll get your product
            off the ground and build a momentum for your success"
          />
        </div>
        <div className="transform flex -rotate-[90deg] ml-[50px]  lg:ml-[180px] font-semibold  h-[50%] -mt-[20px] lg:-mt-[20px] text-[#cbcbcb] origin-bottom-left ">
        <div className="mx-[8px] animate-bounce"><AiOutlineArrowLeft className="text-xl "/></div>
        <div >SEE OUR WORK</div>
        </div>
        <div className="flex  -mt-[200px]  ml-[200px] lg:ml-[1140px] lg:-mt-[250px]">
            <div className="h-[140px] w-[140px] bg-no-repeat  shadow-3xl  bg-contain bg-center bg-hero-circle bg-[black] rounded-[50%]"></div>
        </div>
      </div>

<div className="mt-[180px]  "><BackgroundCard/></div>
    </>
  );
};

export default Home;