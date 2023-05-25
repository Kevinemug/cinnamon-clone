/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { MdOutlineHorizontalRule } from "react-icons/md";
import Button from "./button"
import { useState } from "react";
const TeamCard = ({link,image,text,name}) => {
    const [isActive,setIsActive]=useState('product')

    const handleActiveLink = (link) => {
      setIsActive(link)
      
        }
      


  return (
    <>
      <div className="md:grid grid-cols-2  -gap-x-[260px]">
          <div className={`text-[24px] font-bold lg:w-1/2   ${isActive === link ? 'text-[#5135ff] flex' : ''} `} onClick={()=> handleActiveLink (link)} >
            <div className={`${isActive === link ? 'block' : 'hidden'}`} >
              <MdOutlineHorizontalRule className="font-black text-5xl " />
            </div>
            <div className=" " >{name}</div>
          </div>
               {
            isActive === link ? (
                   <div className="flex flex-col gap-[40px] md:">
            <div className="md:w-[80%]">
              <img
                src={image}
                alt=""
              />
            </div>
            <div className="text-[18px] text-[#626262] font-semibold md:w-[70%]">
            {text}
            </div>
            <div>
            <Button label="Read About Us"/>
            </div>
          </div>
          ): null
               }
      </div>
    </>
  );
};

export default TeamCard;
