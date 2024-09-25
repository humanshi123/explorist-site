// import Filters from "../Components/Filters";
import ContentSection from "../Components/ContentSection";
//import MainComponent from "../Components/MainComponent";
import image1 from "../assets/rightImg.png";
import image2 from "../assets/leftImg.png";
import banner2 from "../assets/banner2.png";
import { SliderSection } from "./Home";
const content =[
  {
    id: 1,
    imageUrl: image1,
    title: "Recognize and limit air travel when appropriate",
    description: "Promote responsible air travel by recognizing environmental impact and implementing restrictions when necessary to mitigate carbon emissions and prioritize sustainable transportation alternatives for a healthier planet.",
    reverse: true,
  },
  {
    id: 2,
    imageUrl: image2,
    title: "Support local experiences and ecological practices",
    description: "Embrace local experiences and ecological practices to foster community well-being and sustainable living. Support initiatives that prioritize environmental conservation, empowering local communities and preserving cultural richness for a harmonious future.",
  
  },
  {
    id: 3,
    imageUrl: image1,
    title: "Show respect for wildlife and natural settings",
    description: "Demonstrate reverence for wildlife and nature by minimizing human impact, refraining from littering, and observing from a distance. Preserve the delicate balance of ecosystems to ensure the well-being of all species.",
    reverse: true,
  },
  {
    id: 4,
    imageUrl: image2,
    title: "Recycle, reuse and compost when possible",
    description: "Promote sustainability by incorporating the principles of recycle, reuse, and composting into daily practices, minimizing waste and contributing to a healthier environment for a more eco-friendly lifestyle.",
  },

]
export default function EcologyCheck() {
  return (
    <div>
         <section className="pt-[30px] ">
            <div className="container">
            <div className="relative  ">
            <img src={banner2} alt="" className="rounded-[10px] min-h-[180px] object-cover  " />
            <div className="absolute rounded-[10px] inset-0 grid place-items-center items-center bg-[#000] bg-opacity-50 ">
           <div className="text-center w-full ">
           <h2 className="text-white shadow-text mb-[10px] ">Find Your Booking</h2>
            <p className="text-white  ">Discover and locate your booked tour</p>
           </div>
            </div>
            </div>
            <p className="text-center mt-4 md:mt-[30px]  text-base">Leave your guidebooks at home and dive into the local cultures that make each destination so special. We’ll connect you with our exclusive experiencesAs the top platform for travel adventures, we think travel is about creating memories. With over 300,000 experiences, from basic tours to thrilling adventures and unique activities, making lasting memories has never been simpler.</p>
            </div>
           </section>
    <div className="container grid gap-10 md:gap-[80px] !py-10 md:!py-[80px]">
    {content.map((data)=>(
        <ContentSection
          key={data.id}
          title={data.title}
          description={data.description}
          imageUrl={data.imageUrl}
          reverse={data.reverse}
        />
      ))}
    </div>
      <SliderSection />
     {/* <MainComponent /> */}
    </div>
  )
}
