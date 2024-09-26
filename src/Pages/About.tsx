import about from "../assets/about1.png";
import dataimg2 from "../assets/discover2.png";
import dataimg1 from "../assets/discover3.png";
import dataimg3 from "../assets/about3.png";
import ContentSection from "../Components/ContentSection";
import about4 from "../assets/about4.jpg";
import Faq from "../Components/Faq";
import { SliderSection } from "./Home";


const aboutData = [
  {
    id: 1,
    title: "Flexible Booking, Stress-Free Travel",
    description:
      "We understand that plans can change, and when they do, you shouldn't have to pay the price. Our No Hassle Cancellation Policy is designed with your dynamic lifestyle in mind.",
    image: dataimg1,
  },
  {
    id: 2,
    title: "Quality Offering-Great Price",
    description: "Each of our Experiences meet our strict standards for quality, on-time and exciting journeys; while offering fair pricing.",
    image: dataimg2,
  },
  {
    id: 3,
    title: "Proudly Canadian, Uniquely Global",
    description: "At Explorist, we're not just a business; we're a part of the community; bringing a touch of our renowned hospitality and diversity to every experience we offer.",
    image: dataimg3,
  },
];
const About = () => {
  return (
    <div>
      <section className="pt-[50px] md:pb-[80px]  ">
        <div className="container">
          <h2 className="text-center">About Explorist</h2>
          <p className="mt-[10px] text-center ">The Story About Us</p>
          <div className="grid md:grid-cols-2 gap-[27px] py-10 md:pt-[79px] md:pb-[80px] ">
            <div>
              <img src={about} alt="" />
            </div>
            <div> 
              <h4 className="mb-5 md:mb-10 text-xl ">
                EXPLORIST: One who travels to or through the unknown;
              </h4>
              {aboutData.map((item) => (
                <div className="flex gap-4 md:gap-[30px] mb-5 md:mb-[30px]  ">
                  <div>
                    <img src={item.image} alt="" className="max-w-[41px] "/>
                  </div>
                  <div>
                    <h5 className="text-lg mb-[10px] ">{item.title} </h5>
                    <p className="text-base md:leading-[30px] max-w-[413px] ">{item.description} </p>
                  </div>
                </div>
              ))}
              <p className="text-base md:leading-[30px] max-w-[484px] ">HOW WE DO BUSINESS: Explorist.ca is a Marketplace for Suppliers of Experiences across Canada; hosting individual vendors as well as Viator vendors; providing a strong Trust Relationship.</p>
            </div>
          </div>
          <ContentSection
            title="Join our Ambassador Club ."
            description="A group of adventurers we enlist to film an experience that is posted on our Marketplace.FREE TO PARTICIPATE; We set up the date and the experience, you take the tour and film on your phone, send us the file and description of the tour. We stitch the video together add the audio and post on the site. Everybody wins. Email for more information."
            imageUrl={about4}
            reverse= {true}
          />
        </div>
      </section>
      <Faq />
      <SliderSection />
    </div>
  );
};

export default About;
