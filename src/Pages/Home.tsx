import banner from "../assets/banner1.png";
import DestinationCard from "../Components/DestinationCard";
import NewsLetter from "../Components/NewsLetter";
import PopularTourCard from "../Components/PopularTourCard";
import disc1 from "../assets/discover.png";
import disc2 from "../assets/discover2.png";
import disc3 from "../assets/discover3.png";
import DiscoverCards from "../Components/DiscoverCards";
import ReviewSlider from "../Components/ReviewSlider";
import review from "../assets/review.svg";
import SearchBar from "../Components/SearchBar";
import { categoryData } from "../Utils/AllCategory";

const discoverData = [
  {
    id: 1,
    imgSrc: disc1,
    heading: "Proudly Canadian, Uniquely Global",
    description:
      "At Explorist, we're not just a business; we're a part of the community. As a Canadian-owned and operated platform, we bring a touch of our renowned hospitality and diversity to every experience we offer.",
  },
  {
    id: 2,
    imgSrc: disc2,
    heading: "Quality of Product",
    description:
      "The Badge of Excellence marks the best experiences—those that hit our top quality standards and earn 4 to 5-star reviews from travelers. Consider it your shortcut to outstanding adventures.",
  },
  {
    id: 3,
    imgSrc: disc3,
    heading: "Flexible, Stress-Free Travel",
    description:
      "We understand that plans can change, and when they do, you shouldn't have to pay the price. Our No Hassle Cancellation Policy is designed with your dynamic lifestyle in mind.",
  },
];
const dataSlider = [
  {
    id: 1,
    title: `Was fantastic experience! Have wanted to do this for so long and it did not disappoint. Got wet..lol..our guide was so fun and knowledgeable. `,
    tagline: "VIATOR",
    image: review,
    name: "Kelsey_K",
  },
  {
    id: 2,
    title:
      "Great trip, still waiting to see photos on the website so we can order!  Our guide Bayden was funny, and talented. ",
    tagline: "VIATOR",
    image: review,
    name: "bnbyoung",
  },
  {
    id: 3,
    title:
      "The mountain stories from Fredd was cherry on the cake. We had a amazing experience and fun. Thank you so much...!",
    tagline: "VIATOR",
    image: review,
    name: "Alesha Martin",
  },
  {
    id: 4,
    title:
      "Tracy and her cozy cabin just oozed a genuine warmth!  To start, her tour bus was the most comfortable one I had been in Yellowknife.  Her chowder and bannock were delicious and she entertained us throughout the night with stories.  She took her time and equally spoke with every individual guest all the while cooking and cleaning all at the same time.  She was so organized, set everyone’s expectations on how picture taking was going to be once the aurora came out.  She also provided ingredients for s’mores that you could make in the fire pit outside.  There were a plethora of fur coats that you could try on and wear.  She also briefly educated us on the indigenous people and the Yellowknife history.  Honestly, even if I didn’t see the Aurora, it would have been a great time.  The aurora was just the cherry on top to a wonderful night.  I did this tour on the last night of my stay in Yellowknife.  I was saving the best for last!  Our tour was suppose to end at 2pm but the Aurora came out later in the night so she let us stay to watch for longer and we didn’t get back to the hotel until 3am.  I highly recommend that you take Tracy’s tour.  On the coldest of nights,  a mom and her son from Hawaii could feel the “aloha” in Yellowknife.  ",
    tagline: "VIATOR",
    image: review,
    name: "JoyLynn_T",
  },
  {
    id: 5,
    title:
      "Tracy is a wonderful hostess and her fish chowder and bannock are delicious.  A very worthwhile trip.",
    tagline: "VIATOR",
    image: review,
    name: "Dianne_V",
  },
  {
    id: 6,
    title:
      "Tonight (well last night now I suppose) we took the Cozy Cabin Tour with Tracy. When I tell you hospitality is real in Yellowknife I mean it wholeheartedly. We were picked up by Derek, our driver for the evening. And we picked up the other tour guests and made our way to the cozy cabin. Tracy prepared a midnight meal of fresh bannock (bread) and fish chowder. We dressed up in furs and Inuit coats She told us all about her life and life in Yellowknife. We especially enjoyed hearing about the common animals and the indigenous heritage of the region. We enjoyed hot chocolate around 1 am.. Then Ms. Aurora showed up and left us speechless. There truly are no words..",
    tagline: "VIATOR",
    image: review,
    name: "Shanea_W",
  },
  {
    id: 7,
    title:
      "Everything about this tour was wonderful. Andy did a great job with his narrative on both history and food. His selection of five or six food items / restaurants was perfect. The pace was good, and we highly recommend this to anyone.",
    tagline: "VIATOR",
    image: review,
    name: "David_C",
  },
  {
    id: 8,
    title:
      "Andy was very knowledgeable and provided great history on the city. We had great food and got to meet the restaurant owners and learn how they got started. This was very worth the time and money and will not disappoint. ",
    tagline: "VIATOR",
    image: review,
    name: "Wendy_Z",
  },
  {
    id: 9,
    title:
      "We had a wonderful time on our food tour with Andy. It was a great mix of history of Victoria and delicious bites. The tour kept a good pace, never feeling too rushed or like we were paused too long. We would highly recommend this tour!",
    tagline: "VIATOR",
    image: review,
    name: "Elizabeth_K",
  },
  {
    id: 10,
    title:
      "I really enjoyed having a chance to learn more about sailing and help the crew move the sails around! It was a lot of fun! Great crew!",
    tagline: "VIATOR",
    image: review,
    name: "James_T",
  },
  {
    id: 11,
    title:
      "Everything was great, insight of the story behind sailing, with the captain being very knowledgeable of their craft. ",
    tagline: "VIATOR",
    image: review,
    name: "Jayson_E",
  },
  {
    id: 12,
    title:
      "Very fun trip!  Very knowledgeable and friendly crew.  Definitely recommend!!   Beautiful harbor scenery,",
    tagline: "VIATOR",
    image: review,
    name: "Jill_K",
  },
];

export default function Home() {
  const topAttractions = categoryData.filter(
    (category) => category.mainCategory === "Top Attractions"
  );
  const popularTourss = categoryData.filter(
    (category) => category.mainCategory === "Popular Tours"
  );
  return (
    <main className="bg-[#FAFFF9]">
      <section className="bg-wave md:pb-10 ">
        <div className="container">
          <div className="grid lg:flex gap-[25px] lg:gap-[30px] mt-[30px] lg:mt-[50px]">
            <div className="lg:w-[54%] md:pt-[30px] text-center lg:text-start ">
              <p className="inline-block  bg-white text-[#1c9d41] text-[17px] font-medium leading-[28px] px-[19px] py-[6px] shadow-[0px_10px_20px_0px_rgba(10,10,10,0.05)] rounded-[30px]">
                Book With Us!
              </p>
              <h1 className="mt-3 md:mt-[22px] mb-5 mx-auto lg:mx-0 max-w-[493px] text-[#1e1e1e] text-[36px] md:text-[48px] lg:text-[68px] leading-[48px] md:leading-[60px] lg:leading-[90.80px]">
                Experiences Last a
                <span className="text-[#1c9d41] font-Dmserif leading-normal">
                  {" "}
                  Lifetime
                </span>
              </h1>
              <p className="lg:max-w-[474px] text-[#8c8c8c] text-sm md:text-base font-normal leading-[26px] md:leading-[30px]">
                Discover your next adventure! Find local events and explore
                Canada with us.
              </p>
              <div className="mt-5 lg:mt-[45px] lg:w-[calc(100%+257px)] relative z-[1]  ">
                <SearchBar />
              </div>
            </div>
            <div className="lg:w-[46%] ">
              <img
                src={banner}
                alt=""
                className="w-full rounded-[12px] lgmax-w-full max-w-[534px] mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[50px] md:pt-[70px] pb-[30px] md:pb-[80px] bg-[#F8F8F8] ">
        <div className="container">
          <h2>
            Top <span>Attractions</span>Near Canada
          </h2>
          <p className="mt-[10px] md:mt-[15px] max-w-[542px] text-[#8c8c8c] text-sm md:text-base font-normal md:leading-[31px]">
            Ready to find the perfect spot for your next adventure? Let&apos;s
            dive into some popular locations.
          </p>
          <div className=" grid md:grid-cols-3 gap-x-5 gap-y-[15px] md:gap-y-[50px] mt-4 md:mt-8 ">
            {topAttractions.map((category) => (
              <DestinationCard
                key={category.id}
                imgSrc={category.image}
                heading={category.heading}
                tours={category.tours}
                categoryId={category.id}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F8F8] pb-[30px] md:pb-[80px] lg:pb-[120px]">
        <div className="container">
          <h2 className="text-center mb-[15px] mg:mb-10">
            Popular <span> Tours</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {popularTourss.map((data) => (
              <PopularTourCard
                key={data.id}
                image={data.image}
                heading={data.heading}
                categoryId={data.id}
              />
            ))}
          </div>
        </div>
      </section>

      <NewsLetterSection />
      <DiscoverSection />
      <SliderSection />
    </main>
  );
}

export const NewsLetterSection = () => {
  return (
    <section className="newsletter py-[30px] md:py-[80px] ">
      <div className="container">
        <NewsLetter />
      </div>
    </section>
  );
};
export const DiscoverSection = () => {
  return (
    <section className="discover-card pb-[30px] md:pb-[80px]">
      <div className="container">
        <h2 className="text-center">
          Discover the <span>Explorist Difference</span>{" "}
        </h2>
        <p className="text-center mt-[10px] text-[#8c8c8c] text-base font-normal">
          Discover the Explorist Difference: Your Gateway to Unforgettable
          Experiences
        </p>
        <div className="pt-[44px] grid md:grid-cols-3 gap-[15px] md:gap-[21px] ">
          {discoverData.map((data) => (
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
  );
};
export const SliderSection = () => {
  return (
    <section className="review-section">
      <div className="py-[30px] md:pt-[80px] md:pb-[50px] ">
        <h2 className="text-center mb-[15px] md:mb-[120px]">
          What Our <span>Customers Say</span>
        </h2>
        <ReviewSlider data={dataSlider} />
      </div>
    </section>
  );
};
 