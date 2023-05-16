/* eslint-disable react/prop-types */
const Title = ({color,subcolor,t1,t2,t3}) => {
  return (
    <>
      <div className="py-[230px] ml-[160px]" >
        <div className={`font-black  ${color} text-8xl`}> {t1} </div>
        <div className={`font-black ${color} text-8xl  leading-[150px]`}>{t2}</div>
        <div className={`${subcolor} w-[50%] text-2xl font-[MontHeavy] text-[rgb(207,207,207)]`}> 
          {t3}
        </div>
      </div>
    </>
  );
};

export default Title;
