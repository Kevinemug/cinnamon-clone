/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const WordsArrow = ({text}) => {
    return ( <>
    <div className="flex flex-col gap-[30px] lg:gap-[10px]">
    <div className="flex gap-[50px]">
        <div className={`text-[rgb(249,249,249)] text-[24px] font-bold w-[70%] lg:w-[90%] font-[Mont-Bold]`} >{text}</div>
        <div className="hover:-translate-y-[10px]"> <img src="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FarrowRightWhite.ec432a63.png&w=48&q=75" alt="" /></div>
    </div>
    <div className="border-b-[1px] border-gray-700"></div>




    </div>
    
    
    
    
    </> );
}
 
export default WordsArrow;