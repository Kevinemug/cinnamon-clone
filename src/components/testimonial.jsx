import TestimonialIcon from "./testimonialIcon";

const Testimonial = () => {
    return ( <>
    <div>

<div className="lg:ml-[150px]">
    <div>
        <TestimonialIcon/>
    </div>
    <div className="px-[30px] flex flex-col gap-[80px] lg:gap-[50px]">
        <div className="text-[32px]  text-[#252525] font-bold -mt-[55px] lg:text-[45px] lg:w-[60%]">Their team’s design skills definitely set them apart.</div>
        <div className="text-[18px] text-[#626262] font-semibold lg:w-[60%]">Wonderful experience; the project manager and the designer were available for all my questions and at no point did I feel they struggle to create the design.The result is a-b-s-o-l-u-t-e-l-y perfect. Top-notch!</div>
        <div className="-mt-[20px]">
            <div className="lg:flex gap-[20px]">
                <div className="w-[60px] h-[60px]"><img src="https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F2Do3nk7UOI5VuYzwCZFEK1%2F25e83085cd8548425d1b7f04438b641b%2FMicrosoftTeams-image__101_.png&w=750&q=75" alt="" /></div>
                <div>
                    <div className="text-[20px] font-bold">Eric C,</div>
                    <div className="text-[16px] font-semibold text-[#5b5b5b]">Founder Websun Solutions UG. Berlin, Germany</div>
                </div>
            </div>
            <div className="flex gap-[60px] mt-[40px]">
                <div ><img src="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Farrow-left.cd95ba98.png&w=48&q=100" alt="" /></div>
                <div><img src="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Farrow-right.edcfdab6.png&w=48&q=100" alt="" /></div>
            </div>
        </div>
    </div>
</div>




    </div>
    
    </> );
}
 
export default Testimonial;