import banner from "../assets/banner1.png";
import DestinationCard from "../Components/DestinationCard";
import NewsLetter from "../Components/NewsLetter";
import PopularTourCard from "../Components/PopularTourCard";
import disc1 from "../assets/discover.png";
import disc2 from "../assets/discover2.png";
import disc3 from "../assets/discover3.png";
import DiscoverCards from "../Components/DiscoverCards";

const destinations = [
  {
    id: 1,
    imgSrc: banner,
    tours: 12,
    place: "Western Europe",
  },
  {
    id: 2,
    imgSrc: banner,
    tours: 5,
    place: "South Africa",
  },
  {
    id: 3,
    imgSrc: banner,
    tours: 20,
    place: "Scandinavia",
  },
];
const popularTours = [
  {
    id: 1,
    imgSrc: banner,
    badge: "Special Offers",
    place: "Los Angeles - California",
  },
  {
    id: 2,
    imgSrc: banner,
    place: "South Africa",
  },
  {
    id: 3,
    imgSrc: banner,
    place: "Scandinavia",
  },
  {
    id: 4,
    imgSrc: banner,
    place: "Scandinavia",
  },
];
const discoverData =[
  {
    id: 1,
    imgSrc: disc1,
    heading: "Proudly Canadian, Uniquely Global",
    description: "At Explorist, we're not just a business; we're a part of the community. As a Canadian-owned and operated platform, we bring a touch of our renowned hospitality and diversity to every experience we offer.",
  },
  {
    id: 2,
    imgSrc: disc2,
    heading: "Quality of Product",
    description: "The Badge of Excellence marks the best experiences—those that hit our top quality standards and earn 4 to 5-star reviews from travelers. Consider it your shortcut to outstanding adventures.",
  },
  {
    id: 3,
    imgSrc: disc3,
    heading: "Flexible, Stress-Free Travel",
    description: "We understand that plans can change, and when they do, you shouldn't have to pay the price. Our No Hassle Cancellation Policy is designed with your dynamic lifestyle in mind.",
  },
]
export default function Home() {
  return (
    <main>
      <section className="bg-wave pb-10 ">
        <div className="container">
          <div className="flex gap-[30px] mt-[50px]">
            <div className="w-[54%] pt-[30px] ">
              <p className="inline-block  bg-white text-[#1c9d41] text-[17px] font-medium leading-[28px] px-[19px] py-[6px] shadow-[0px_10px_20px_0px_rgba(10,10,10,0.05)] rounded-[30px]">
                Book With Us!
              </p>
              <h1 className="mt-[22px] max-w-[493px] text-[#1e1e1e] text-[68px] leading-[90.80px]">
                Experiences Last a
                <span className="text-[#1c9d41] font-Dmserif "> Lifetime</span>
              </h1>
              <p className="max-w-[474px] text-[#8c8c8c] text-base font-normal leading-[30px]">
                Discover your next adventure! Find local events and explore
                Canada with us.
              </p>
            </div>
            <div className="w-[46%] ">
              <img src={banner} alt="" className="w-full rounded-[12px] " />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[70px] pb-[80px] bg-[#F8F8F8] ">
        <div className="container">
          <h2>
            Top <span>Attractions</span>Near Canada
          </h2>
          <p className="mt-[15px] max-w-[542px] text-[#8c8c8c] text-base font-normal leading-[31px]">
            Ready to find the perfect spot for your next adventure? Let&apos;s
            dive into some popular locations.
          </p>
          <div className=" grid grid-cols-3 gap-x-5 gap-y-[50px] mt-8 ">
            {destinations.map((data) => (
              <DestinationCard
                key={data.id}
                imgSrc={data.imgSrc}
                tours={data.tours}
                place={data.place}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F8F8] pb-[120px]">
        <div className="container">
          <h2 className="text-center mb-10">
            Popular <span> Tours</span>
          </h2>
          <div className="grid grid-cols-4 gap-5">
            {popularTours.map((data) => (
              <PopularTourCard
                key={data.id}
                imgSrc={data.imgSrc}
                badge={data.badge}
                place={data.place}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="py-[80px] ">
        <div className="container">
          <NewsLetter />
        </div>
      </section>

      <section className="pb-[80px]">
        <div className="container">
        <h2 className="text-center">Discover the <span>Explorist Difference</span> </h2>
        <p className="text-center mt-[10px] text-[#8c8c8c] text-base font-normal">Discover the Explorist Difference: Your Gateway to Unforgettable Experiences</p>
        <div className="pt-[44px] grid grid-cols-3 gap-[21px] ">
        {discoverData.map((data)=>(
          <DiscoverCards
            key={data.id}
            imgSrc={data.imgSrc}
            heading={data.heading}
            description={data.description}
          />
        ))}
        </div>
        
        </div>
        </section>
    </main>
  );
}
