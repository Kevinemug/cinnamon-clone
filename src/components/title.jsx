/* eslint-disable react/prop-types */
const Title = ({color,subcolor,t1,t2,t3}) => {
  return (
    <>
      <div className=" py-[80px]   lg:py-[160px]  ml-[20px]  lg:ml-[160px] "  >
        <div className={`font-["Mont-Heavy"]  ${color} text-4xl leading-[50px] md:text-6xl lg:text-7xl w-[100%] max-w-[100%]`}> {t1} </div>
        <div className={`font-["Mont-Heavy"] ${color} text-4xl lg:text-7xl w-[90%] md:text-6xl leading-[50px] lg:leading-[150px]`}>{t2}</div>
        <div className={`${subcolor} lg:w-[50%] md:mt-[40px]  mt-[20px] w-[90%] md:text-2xl text-xl text-xl lg:text-2xl text-[rgb(207,207,207)]`}> 
          {t3}
        </div>
      </div>
    </>
  );
};

export default Title;
