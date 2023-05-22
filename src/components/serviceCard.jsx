/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const ServiceCard = ({icon,title,subTitle}) => {
  return (
    <>
      <div className=" flex flex-col gap-[20px]">
        <div >
          {" "}
          <img
            src={icon}
            alt="icon"
          />
        </div>
        <div className="font-bold text-white text-[20px]">{title}</div>
        <div className="text-[rgb(207,207,207)] text-[18px] font-semibold md:w-[70%] ">
          {subTitle}
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
