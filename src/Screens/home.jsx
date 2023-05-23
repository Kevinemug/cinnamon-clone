/* eslint-disable no-unused-vars */
import HomeNav from "../components/homeNav";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Title from "../components/title";
import BackgroundCard from "../components/backgroundCard";
import ServiceCard from "../components/serviceCard";
import Button from "../components/button";
import HomeCardGrid from "../components/homeCardGrid";
import TestimonialIcon from "../components/testimonialIcon";
import Testimonial from "../components/testimonial";
import WhoWeAre from "../components/whoWeAre";
import TeamCard from "../components/teamCard";
const Home = () => {

  return (
    <>
      <HomeNav />

      <div>
        <div className="bg-[#1C1C1C] bg-hero-pattern md:h-[600px] h-[100vh] lg:h-[100vh] w-screen max-w-[100%] ">
          <Title
            color="text-[#f6f6f6]"
            t1="Results focused design &"
            t2="development agency"
            t3="Extend your team with our high performing specialists or hire us to
            shape your product from scratch. Either way, we’ll get your product
            off the ground and build a momentum for your success"
          />
        </div>
        <div className="transform flex -rotate-[90deg] ml-[50px]  lg:ml-[180px] font-semibold  h-[50%] md: -mt-[20px] lg:-mt-[20px] text-[#cbcbcb] origin-bottom-left ">
          <div className="mx-[8px] animate-bounce">
            <AiOutlineArrowLeft className="text-xl " />
          </div>
          <div>SEE OUR WORK</div>
        </div>
        <div className="flex  -mt-[200px] md:-mt-[250px] ml-[200px] md:ml-[600px] lg:ml-[1140px] lg:-mt-[250px]">
          <div className="h-[140px] w-[140px] bg-no-repeat  shadow-3xl  bg-contain bg-center bg-hero-circle bg-[black] rounded-[50%]"></div>
        </div>
      </div>

      <div className=" mt-[160px]  flex flex-col gap-[40px]   md:mt-[200px]  ">
        <BackgroundCard
          bg="bg-[#ffcb47]"
          img="https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F2jr7RHJsFwOn3kEiUGEqAN%2F44d035a93444856bd117f168f348f59b%2FHero_Img__1_.png&w=1200&q=80"
          smallTitle="IOS DEVELOPMENT"
          bigTitle="Smart Build: Maximize your field survey"
          subTitle=" An application for construction management. Make manipulation over
          construction map and export report as a PDF document."
        />
        <BackgroundCard
          bg="bg-[#91f1c3]"
          img="https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F281NSZSG7VvkxHDig0qbBA%2F138576b35c7e45d8a07d60b96d5ff9b8%2FMockup_1.png&w=1200&q=80"
          smallTitle="PRODUCT DESIGN"
          smallTitle_="QUALITY ASSURANCE"
          bigTitle="Corrily: Optimize prices
          to maximize revenue"
          subTitle="Corrily tailors your prices and discounts to the needs of different user segments in order to increase your revenue. Cinnamon was tasked with creating a new visual identity for Corrily and incorporating a fresh, and stunning website redesign."
        />
        <BackgroundCard
          bg="bg-[#50227d]"
          img="https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F14zPgk0p1qf0yptSYRjHBW%2F4947a8f7fd5f73e727abbc7ab62e175a%2FFiona_Thumbnail.png&w=1200&q=80"
          smallTitle="PRODUCT DESIGN"
          smallTitle_="WEB DEVELOPMENT"
          bigTitle="Fiona: Engage & Decide"
          subTitle="Fiona is a fintech consumer-facing website that enables users to search for financial products, discover them, and receive personalized recommendations."
        />
      </div>

      <div className="bg-[#1C1C1C] bg-hero-pattern px-[30px] lg:grid grid-cols-2 lg:mt-[150px]">
        <div className=" text-[40px] lg:text-[54px] lg:pl-[120px] text-[white] font-bold mt-[50px] pt-[60px]">
          Our Services
        </div>

        <div className="py-[40px] flex flex-col gap-[90px] md:grid grid-cols-2 lg:pt-[120px]">
          <ServiceCard
            icon="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproduct-design.cdb049ad.png&w=48&q=75"
            title="Product design"
            subTitle="Producing, prototyping and testing sketches, high-fidelity wireframes
            and the final UI is a process that results in intuitive and impactful
            design that’s easy on the eyes."
          />
          <ServiceCard
            icon="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdevelopment.1440a123.png&w=48&q=75"
            title="Development"
            subTitle="By selecting the befitting tech stack and architecture for the deliverable in question, we build out the product until it's a fully-fledged digital solution."
          />
          <ServiceCard
            icon="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fquality-assurance.9e7ba47b.png&w=48&q=75"
            title="Quality assurance"
            subTitle="Our QA engineering team makes your product bug-free, bulletproof and performance-driven through both automatic and manual testing."
          />
          <ServiceCard
            icon="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarketing-and-growth.35184bb3.png&w=48&q=75"
            title="Marketing & growth"
            subTitle="By understanding the mechanics of digital marketing, we make sure to put your product, at the right time, in front of the right people. See Our Services"
          />
          <Button label="  See Our Services"/>
        </div>
      </div>

      <div>
    <HomeCardGrid/>
      </div>
      <div className="mt-[60px]">
        <Testimonial/>
      </div>
      <div className="mt-[60px]">
        <WhoWeAre/>
        </div>
    </>
  );
};

export default Home;
