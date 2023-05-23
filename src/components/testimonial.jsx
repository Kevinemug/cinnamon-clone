/* eslint-disable no-unused-vars */
import { useState } from "react";
import TestimonialIcon from "./testimonialIcon";

const testimonialData = [
    {
      title: "Their team’s design skills definitely set them apart.",
      text: "Wonderful experience; the project manager and the designer were available for all my questions and at no point did I feel they struggle to create the design. The result is a-b-s-o-l-u-t-e-l-y perfect. Top-notch!",
      name: "Eric C",
      founder: "Founder Websun Solutions UG. Berlin, Germany",
    },
    {
      title: "They’re consistent, and the communication is good.",
      text: "When I have a deadline, they would work extra hours on the weekend and after hours. Cinnamon gives the impression of being a smaller team that’s focused on customers.",
      name: "Garin Toren,",
      founder: "CEO, ping",
    },
    {
      title: "Great collaboration through the whole process.",
      text: "Cinnamon has provided excellent engineering and design services, that captured our vision and achieved our goals. Together, we have created a quality user experience with great performance. We very much appreciate Cinnamon's commitment and collaboration.",
      name: "Alex Whiteside,",
      founder: "Senior Director of Product & Engineering, Marketing and Consumer Experience",
    },
    {
      title: "Cinnamon is just the best agency I've ever worked with.",
      text: "Cinnamon is just the best agency I've ever worked with.Everyone in the team is passionate about what they do, incredibly skilled, and a pleasure to work with. Our cooperation went so well I flew to Croatia and worked with the team for 2 weeks. I have recommended them to many people who had similar fantastic experiences",
      name: "Abel Riboulot,",
      founder: "Co-Founder & CEO at Corrily, United States",
    },
    {
      title: "High integrity people.Diligent. First rate.",
      text: "I highly recommend these guys. Excellent work, responsive, easy to deal with. High integrity people. Diligent. First rate",
      name: "Bret Treasure,",
      founder: "Co-founder, Stake Something",
    },
    {
      title: "Everything went very efficiently and smoothly.",
      text: "I had one point of contact who was super tuned into all the details of the project and led the whole thing from beginning to end with professionalism and efficiency.",
      name: "Shawnna von Blixen,",
      founder: "Network Coordinator, Children at Risk",
    },
    {
      title: "What we have been promised has been delivered.",
      text: "We like organization and web design skills. They did all to help us with our tight deadline. We had a great collaboration, working with Cinnamon was a real pleasure.",
      name: "Camille Ducasse,",
      founder: "Coordinator, Attitude Hotels",
    },
    {
      title: "Another testimonial title",
      text: "Another testimonial text",
      name: "John D",
      founder: "Founder ABC Company",
    },
    {
      title: "Another testimonial title",
      text: "Another testimonial text",
      name: "John D",
      founder: "Founder ABC Company",
    },
    {
      title: "Another testimonial title",
      text: "Another testimonial text",
      name: "John D",
      founder: "Founder ABC Company",
    },
    // Add more testimonial objects as needed
  ];




const Testimonial = () => {


    const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prevTestimonial) =>
      prevTestimonial === testimonialData.length - 1
        ? 0
        : prevTestimonial + 1
    );
  };
  const handlePreviousTestimonial = () => {
    setCurrentTestimonial((prevTestimonial) =>
      prevTestimonial === 0
        ? testimonialData.length - 1
        : prevTestimonial - 1
    );
  };
  const { title, text, name, founder } = testimonialData[currentTestimonial];

    return ( <>
    <div>

<div className="lg:ml-[150px]">
    <div>
        <TestimonialIcon/>
    </div>
    <div className="px-[30px] flex flex-col gap-[80px] lg:gap-[50px]">
        <div className="text-[32px]  text-[#252525] font-bold -mt-[55px] lg:text-[45px] lg:w-[60%]">{title}</div>
        <div className="text-[18px] text-[#626262] font-semibold lg:w-[60%]">{text}</div>
        <div className="-mt-[20px]">
            <div className="lg:flex gap-[20px]">
                <div className="w-[60px] h-[60px]"><img src="https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F2Do3nk7UOI5VuYzwCZFEK1%2F25e83085cd8548425d1b7f04438b641b%2FMicrosoftTeams-image__101_.png&w=750&q=75" alt="" /></div>
                <div>
                    <div className="text-[20px] font-bold">{name}</div>
                    <div className="text-[16px] font-semibold text-[#5b5b5b]">{founder}</div>
                </div>
            </div>
            <div className="flex gap-[60px] mt-[40px]">
                <div onClick={handlePreviousTestimonial}><img src="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Farrow-left.cd95ba98.png&w=48&q=100" alt="" /></div>
                <div onClick={handleNextTestimonial}><img src="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Farrow-right.edcfdab6.png&w=48&q=100" alt="" /></div>
            </div>
        </div>
    </div>
</div>




    </div>
    
    </> );
}
 
export default Testimonial;