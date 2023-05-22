import Button from "./button";
const HomeCardGrid = () => {
  return (
    <>
      <div className="bg-[#f6f6f6] px-[30px] lg:pt-[100px]  lg:h-[600px] flex flex-col gap-[50px] lg:grid grid-cols-2 lg:pl-[150px] ">
        <div className="text-[45px] lg:text-[65px] font-bold  w-[80%] pt-[70px] text-[#222222] md:w-[35%] lg:w-[60%]">
          Agile team on demand “
        </div>
        <div className="lg:hidden">
          {" "}
          <img
            src="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fagile-team-on-demand.fde9cd9c.png&w=384&q=75"
            alt="agile team on demand"
          />
        </div>
        <div className="text-[#626262] text-[18px] font-semibold lg:mt-[90px] lg:w-[50%]">
          By hiring and managing talented people with skills specific to your
          project, we build you a team that’s accomplished, agile and scalable
          in both directions.
        </div>
        <div className="lg:ml-[730px] lg:-mt-[180px]">
          <Button label="See How It Works" />
        </div>
      </div>
      <div className="hidden lg:block ml-[1230px] -mt-[200px]">
      <img
            src="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fagile-team-on-demand.fde9cd9c.png&w=384&q=75"
            alt="agile team on demand"
          />

      </div>
    </>
  );
};

export default HomeCardGrid;
