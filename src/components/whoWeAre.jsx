import TeamCard from "./teamCard";

const WhoWeAre = () => {
    
  return (
    <>
      <div className="bg-[#f6f6f6] pl-[30px] pt-[80px] ">
        <div className="text-[40px] font-bold  text-[#252525] ">Who we are</div>
        <div className="flex flex-col gap-[30px] mt-[60px]">
          <TeamCard
            link="Product design"
            image="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproduct-design.d99a7923.jpg&w=1920&q=75"
           text=" Our exceptional designers make it their business to create logical,
          clean, and effective UX/UI for both web and mobile. Bringing together
          world-class technical skills and a plethora of creativity, they work
          with development teams to produce engaging and impactful digital
          experiences for the end user. Get closer to our Design Team and see
          what they have prepared for you in the Design Dopamine Newsletter.
"
          />
          <TeamCard 
          link="Web development"    
 />
          <TeamCard 
          link= "Mobile development"            
/>
          <TeamCard 
          link="  Quality assurance"/>
          <TeamCard link="Marketing" />
          <TeamCard link ="Project management"/>
          <TeamCard link ="Human resources" />
          <TeamCard  link="Sales"/>
          <TeamCard link="Fluffy friends"/>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;