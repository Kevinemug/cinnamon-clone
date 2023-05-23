/* eslint-disable no-unused-vars */
import { useState } from "react";
import TestimonialIcon from "./testimonialIcon";

const testimonialData = [
    {
      title: "Their team’s design skills definitely set them apart.",
      text: "Wonderful experience; the project manager and the designer were available for all my questions and at no point did I feel they struggle to create the design. The result is a-b-s-o-l-u-t-e-l-y perfect. Top-notch!",
      name: "Eric C",

      image:" https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F2Do3nk7UOI5VuYzwCZFEK1%2F25e83085cd8548425d1b7f04438b641b%2FMicrosoftTeams-image__101_.png&w=750&q=75",
      founder: "Founder Websun Solutions UG. Berlin, Germany",
      logo:""
    },
    {
      title: "They’re consistent, and the communication is good.",
      text: "When I have a deadline, they would work extra hours on the weekend and after hours. Cinnamon gives the impression of being a smaller team that’s focused on customers.",
      name: "Garin Toren,",
      founder: "CEO, ping",
      image:"https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F25RHUxbYmQGNyDPZAv3ugA%2F4a1c8b7c06bf709f09d8b64feea6ea9a%2FGarinProfile.png&w=1920&q=75",
    logo:""
    },
    {
      title: "Great collaboration through the whole process.",
      text: "Cinnamon has provided excellent engineering and design services, that captured our vision and achieved our goals. Together, we have created a quality user experience with great performance. We very much appreciate Cinnamon's commitment and collaboration.",
      name: "Alex Whiteside,",
      founder: "Senior Director of Product & Engineering, Marketing and Consumer Experience",
      image:" https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F2Do3nk7UOI5VuYzwCZFEK1%2F25e83085cd8548425d1b7f04438b641b%2FMicrosoftTeams-image__101_.png&w=750&q=75",
logo:""
    },
    {
      title: "Cinnamon is just the best agency I've ever worked with.",
      text: "Cinnamon is just the best agency I've ever worked with.Everyone in the team is passionate about what they do, incredibly skilled, and a pleasure to work with. Our cooperation went so well I flew to Croatia and worked with the team for 2 weeks. I have recommended them to many people who had similar fantastic experiences",
      name: "Abel Riboulot,",
      founder: "Co-Founder & CEO at Corrily, United States",
      image:"https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2FsFGBXOMW4tR2gEkN8ZDAp%2Fb2f56a92720346f4aa5102077fb6a606%2FCarlosProfile.png&w=1920&q=75",
    logo:"https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F28oURAifg08iWymnAaHweH%2F7b7fb5663e060dfae4de4c3f70c38052%2FpingLogo.png&w=2048&q=75"
    },
    {
      title: "High integrity people.Diligent. First rate.",
      text: "I highly recommend these guys. Excellent work, responsive, easy to deal with. High integrity people. Diligent. First rate",
      name: "Bret Treasure,",
      founder: "Co-founder, Stake Something",
      image:"https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F4VT6BM7yQI9oPzC9PuK8d9%2F4745c4f813e489c9b951ab3b335fbcdd%2Fbret-treasure.png&w=1920&q=75",
    logo:""
    },
    {
      title: "Everything went very efficiently and smoothly.",
      text: "I had one point of contact who was super tuned into all the details of the project and led the whole thing from beginning to end with professionalism and efficiency.",
      name: "Shawnna von Blixen,",
      founder: "Network Coordinator, Children at Risk",
      image:"https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2Fcj2lWM5prXdnwp7OGxefG%2Fb475f25503d14f303326d3244056e023%2FShawnna-von-Blixen.jpg&w=1920&q=75",
    
    logo:""},
    {
      title: "What we have been promised has been delivered.",
      text: "We like organization and web design skills. They did all to help us with our tight deadline. We had a great collaboration, working with Cinnamon was a real pleasure.",
      name: "Camille Ducasse,",
      founder: "Coordinator, Attitude Hotels",
      image:"https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F3D8Lj9Ax09EKyWXvi8mFVT%2F9f23e3af46d43ce5abb66c637091449a%2FCamilleProfile.png&w=1920&q=75",
   logo:"https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F2PbZ3sCIbLi49Ps0LZ84CP%2F9579fff48981f14c568672d6f71e2513%2Ftestimonial-logo.png&w=2048&q=75"
    },
    {
      title: "Their team’s design skills definitely set them apart.",
      text: "They do excellent work in all areas of the project, but it is specifically their design work that puts them head and shoulders above the rest.",
      name: "Alain Puysteins,",
      founder: "CEO, Play&Goy",
      image:"https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F39OoDoXW9lDgGKxQeciIko%2F69e25071ef05d9740e91403bdf416445%2FAlainProfile.png&w=1920&q=75",
    logo:"https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F56lcsDDhYkJqNHK8OObqbf%2F1e5c20a5fdbdd6c2e54705dd8f404954%2Fplayandgologo.png&w=2048&q=75"
    },
    {
      title: "We hire experts for a reason. Quality that’s worth the wait.",
      text: "With Cinnamon, we appreciated the attention to detail and the ability to run the project. The right balance of when to confirm something and when to follow their own lead.",
      name: "Kevin Traster,",
      founder: "CEO, Mffais",
      image:"https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F7LAF5pcPkMncmFZwHVhIVn%2F24b68334511908b103aa6b4017477a5a%2FKevinProfile.png&w=1920&q=75",
    logo:"https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2FzV9vAa44y7pg1QaoSJix8%2Ff470cfce4fb28adb6cbc5d96634f3c08%2FMffaisLogo.png&w=2048&q=75"
    },
    {
      title: "The workflow was fantastic. Good, timely communication.",
      text: "They are a very professional company that provides good communication. The process was quite stress-free, even though the App itself is somewhat complicated.",
      name: "Toni Paju,",
      founder: "Director, Crowdchupa",
      image:"https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F4tilj9Wp33pG8spnSpac3j%2F188739bbdb5dc42f6c96b823d66c0879%2FToniProfile.png&w=1920&q=75",
     logo:"https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F6aVvPRL0Xn5BMnpyApaKHF%2F4752153081fe96ed10a9fdca6ab3b596%2FcarchupaLogo.png&w=2048&q=75"
    },
    {
      title: "The designs met the expectations of the team",
      text: "They have the skill and organization to really think through the project details prior to doing the work. This ensured the best results with minimal redesigning.",
      name: "Andreas Tompros,",
      founder: "COO, Casting Frontier",
      image:"https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F2f1IW0zcuc8P2oe6QIe870%2F68deef0d1e09acb2a46a31539c4dd4de%2FAndreasProfile.png&w=1920&q=75",
     logo:"https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2Fp0Hxt8VBTDYBhHMfvcBex%2Fd935bb89e7181162114c3322d02d0906%2FcfmasterLogo.png&w=2048&q=75"
    },
    {
      title: "They see the value of making the best product possible.",
      text: "The Cinnamon team has a lot of experience, and they love to share it with clients. They’re super professional with how they pitch new ideas, and their developers are quite skilled.",
      name: "Tomas Sjösten,",
      founder: "CEO, Muddest AB",
      image:"https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2FLlGwNhuLqCPNNsvnob1eU%2F3629d987ad16edcac7f4b316f8011905%2FTomasProfile.png&w=1920&q=75",
     logo:"https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F1HWHumPFPMaTKzxJOgIwHb%2F848f3fa62aaa55d3a81e0313387e39cb%2FmuddestLogo.png&w=2048&q=75"
    },
    {
      title: "I was blown away by the quality of the work.",
      text: "I was blown away by the quality of the work, ease of workflow, and constant updates towards completion. Their people are top notch and genuine experts in their field.",
      name: "Carlos G. Amador,",
      founder: "CEO, Jon D Rock Inc.",
      image:"https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2FsFGBXOMW4tR2gEkN8ZDAp%2Fb2f56a92720346f4aa5102077fb6a606%2FCarlosProfile.png&w=1920&q=75",
    logo:"https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2FUJt1sMyBdD6sc3dLq5nyV%2F91e7a395e0d0a1c9cb11bb3f614ba0ba%2FJonDRockLogo.png&w=2048&q=75"
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
  const { title, text, name,image,logo, founder } = testimonialData[currentTestimonial];

    return ( <>

<div className="lg:ml-[150px] lg:flex flex-row  ">
    <div>
        <div>
            <TestimonialIcon/>
        </div>
        <div className="px-[30px] flex flex-col gap-[80px] lg:gap-[50px]">
            <div className="text-[32px]  text-[#252525] font-bold -mt-[55px] lg:text-[45px] lg:w-[60%]">{title}</div>
            <div className="text-[18px] text-[#626262] font-semibold lg:w-[60%]">{text}</div>
            <div className="-mt-[20px]">
                <div className="lg:flex gap-[20px]">
                    <div className="w-[60px] h-[60px]"><img src={image} alt="" /></div>
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

<div className="hidden lg:block w-[280px] h-[280px] mt-[100px] absolute left-[1200px]">
    <img src={logo} alt="logo" />
</div>


    </div>


    
    </> );
}
 
export default Testimonial;