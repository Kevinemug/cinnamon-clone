/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { MdOutlineHorizontalRule } from "react-icons/md";
import Button from "./button"
import { useState } from "react";
const TeamCard = ({link,image,text}) => {
    const [isActive,setIsActive]=useState('')




  return (
    <>
      <div className={`text-[24px] font-bold    ${isActive ? 'text-[#5135ff] flex' : ''} `} onClick={() => setIsActive(link)} >
        <div className={`${isActive? 'block' : 'hidden'}`} >
          <MdOutlineHorizontalRule className="font-black text-5xl " />
        </div>
        <div className=" ">{link}</div>
      </div>
     {
        isActive === link ? (   
               <div className="flex flex-col gap-[40px]">
        <div>
          <img
            src={image}
            alt=""
          />
        </div>
        <div className="text-[18px] text-[#626262] font-semibold">
  {text}
        </div>
        <div>
        <Button label="Read About Us"/>
        </div>
      </div>
): null
     }
     
    </>
  );
};

export default TeamCard;
