/* eslint-disable react/no-unescaped-entities */
import Button from "./button";
import WordsArrow from './wordsArrow';

const SectionWithArrows = () => {
  return (
    <>
      <div className="bg-[#1C1C1C]  bg-hero-pattern px-[30px] pt-[50px] pb-[80px] lg:px-[150px] lg:flex gap-[80px] lg:pb-[50px]">
        <div className="flex flex-col gap-[30px] lg:w-[50%]">
          <div className="text-[50px] text-white font-bold">We're growing</div>
          <div className="text-[rgb(207,207,207)] text-[18px] font-semibold  lg:w-[60%] ">
            Jump on board with Cinnamon and get the privilege of working on
            challenging projects for leading global companies! Make the world a
            better, more connected place.
          </div>
          <div className><Button label="See All Positions"/></div>
        </div>

        <div className="flex flex-col gap-[50px] mt-[40px] lg:mt-[10px]">
<WordsArrow text="Flutter Development Team Lead"/>
<WordsArrow text="Lead Generation Assistant"/>
<WordsArrow text="Mobile Development Team Lead"/>
        </div>
      </div>
    </>
  );
};

export default SectionWithArrows;
