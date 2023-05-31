/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
const BackgroundCard = ({bg,img,smallTitle,bigTitle,subTitle, smallTitle_}) => {
  return (
    <>
      <div className=" px-[30px]    lg:px-[10%]">
        <div className={`${bg} w-full max-w-[100%] group overflow-hidden  transition  h-auto cardo`}>
          <img
          className="group-hover:scale-110 duration-300 transition-all"
            src={img}
            alt="Ios development"
          />
        </div>
        <div className="flex py-5 flex-col gap-[10px]">
          <div className=" flex gap-[40px]">
          
            <div className="text-[#757575] font-black  text-[12px] ">{smallTitle}</div>
            <div className="text-[#757575] font-black  text-[12px]"> { smallTitle_}</div>
            
            </div>
          <div className={`text-[40px] font-bold hover:text-[rgb(81,53,255)] md:w-1/2 md:text-[30px] lg:md:text-[50px]   font-["Mont-Bold"] `}>{bigTitle}</div>
          <div className="text-[16px] font-semibold text-[#757575] lg:w-[60%]">
           {subTitle}
          </div>
        </div>
      </div>
    </>
  );
};

export default BackgroundCard;
