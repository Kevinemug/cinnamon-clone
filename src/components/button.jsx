/* eslint-disable react/prop-types */
const Button = ({label}) => {
  return (
    <>
      <div>
        <button className=" bg-[#5135ff] text-[16px] hover:border-2 font-semibold border-[#5135ff] hover:bg-white h-[45px] w-[200px] hover:text-[#5135ff] text-white">
        {label}
        </button>
      </div>
    </>
  );
};

export default Button;
