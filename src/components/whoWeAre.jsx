import TeamCard from "./teamCard";

const WhoWeAre = () => {
  return (
    <>
      <div className="bg-[#f6f6f6] pl-[30px] pt-[80px]  lg:pl-[150px] flex flex-col gap-[60px] lg:first-letter:gap-[80px]">
        <div className={`text-[40px] font-bold  text-[#252525]  font-["Mont-Bold"]`}>Who we are</div>

        <div className="flex flex-col gap-[30px]">
        <TeamCard
          name="Product design  "
          link="product"
          image="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproduct-design.d99a7923.jpg&w=640&q=75"
          text="Our exceptional designers make it their business to create logical, clean, and effective UX/UI for both web and mobile. Bringing together world-class technical skills and a plethora of creativity, they work with development teams to produce engaging and impactful digital experiences for the end user.

          Get closer to our Design Team and see what they have prepared for you in the Design Dopamine Newsletter."
        />
        <TeamCard
          name="Web development"
          link="web"
          image="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fweb-development.0489ac6c.jpg&w=640&q=75"
          text="Our phenomenal web team develops component-based, web-oriented apps, and pixel-perfect designs. We create non-repetitive, easily maintainable code while bringing in the latest tech and methodology. JavaScript is used on both the frontend and the backend while excelling in React as well."
        />
        <TeamCard
          name="Mobile development "
          link="mobile"
          image="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmobile-development.875fcaaa.jpg&w=640&q=75"
          text="Focused on bringing our clients’ visions to life through stable and scalable apps, our mobile team can be relied upon to deliver. Highly knowledgeable and brimming with ideas, the team boasts both Flutter and native Android and iOS processes, giving us the tools to implement any features we may need."
        />
        <TeamCard
          name="Quality assurance "
          link="quality"
          image="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fquality-assurance.860322d1.jpg&w=640&q=75"
          text="With our quality assurance team, Cinnamon is committed to software agility. In addition to implementing automated tests, we also use manual testing to raise the software quality and reliability. They have a sharp eye for UX/UI concerns, which means their involvement inevitably improves the end results."
        />
        <TeamCard
          name="Marketing "
          link="marketing"
          image="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarketing.1620c174.jpg&w=640&q=75"
          text="Our tech-savvy marketing team uses cutting-edge methods and tools to maximize the clients’ return on investment. After a successful product delivery comes the hard part: getting the market traction. They precisely target marketing campaigns, track every click, post, and banner to ensure topmost attention."
        />
        <TeamCard
          name="Project management "
          link="project"
          image="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject-management.200c93ea.jpg&w=640&q=75 "
          text="The focal point of contact are our highly skilled project managers. They retain transparent communication, ensuring the clients are replied to within 24 working hours. PMs define individual assignments, so the client is able to see at any given point, in real time, which task is being worked on."
        />
        <TeamCard
          name="Human resources "
          link="human"
          image="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhuman-resources.193aac55.jpg&w=640&q=75"
          text="Investing in our staff is a priority for Cinnamon. The work done by our human resources team is a huge reason the agency doesn’t suffer from high staff turnover rates like so much of the tech industry does. It’s their job to hire and nurture our talents and make sure we have the best people."
        />
        <TeamCard
          name="Sales "
          link="sales"
          image="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarketing.1620c174.jpg&w=640&q=75"
          text="Having their ears to the ground and listening to market needs, our sales team is likely to be your first contact with Cinnamon. Personable, approachable, and proactive, these experienced salespeople know our offerings inside-out and are fond of knowledge for new clients."
        />
        <TeamCard
          name="Fluffy Friends "
          link="fluffy"
          image="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffluffy-friends.49512681.png&w=828&q=75"
          text=" Our fluffy friends are not only our cutest colleagues, but also a source of happiness and joy. The  policy is a stress-relieving perk not only for pet owners, but for the entire office. The main role of our four-legged staff is to bring cuteness and create a joyful atmosphere in our workplace."
        />
      </div>

      </div>
    </>
  );
};

export default WhoWeAre;
