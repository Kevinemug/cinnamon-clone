/* eslint-disable react/prop-types */
const Title = ({color,subcolor,t1,t2,t3}) => {
  return (
    <>
      <div className=" py-[80px]  lg:py-[230px]  ml-[20px]  lg:ml-[160px]" >
        <div className={`font-black  ${color} text-4xl leading-[50px] lg:text-8xl w-[100%] max-w-[100%]`}> {t1} </div>
        <div className={`font-black ${color} text-4xl lg:text-8xl w-[90%] leading-[50px] lg:leading-[150px]`}>{t2}</div>
        <div className={`${subcolor} lg:w-[50%] mt-[20px] w-[90%] text-xl text-xl lg:text-2xl font-[MontHeavy] text-[rgb(207,207,207)]`}> 
          {t3}
        </div>
      </div>
    </>
  );
};

export default Title;