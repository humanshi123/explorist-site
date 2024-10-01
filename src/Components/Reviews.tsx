//import reviewIcon from "../assets/review.svg"; // Renaming to avoid conflict

import { useState } from "react";

type Review = {
  heading: string;
  date: string;
  author: string;
  rating: number;
  comment: string;
};

const ReviewData: Review[] = [
  {
    heading: "Kudos are in order!",
    date: "20-09-2020",
    author: "Shanda_B",
    rating: 1,
    comment: "Our guide, Bob, was fantastic! He was knowledgeable about sites of interest and other information we wanted to know about the Victoria/ Vancouver area. He made the tour for our multigenerational group a great experience. I would definitely recommend this tour.",
  },
  {
    heading: "Fantastic!",
    date: "2024-09-10",
    author: "CraigTDM",
    rating: 3,
    comment: "Highly recommend! If you are wondering whether a private flexible tour to Niagara Falls is for you, a day with Vlad as your driver and guide definitely is! He is an excellent host, his knowledge of the attractions available and information provided on the route is excellent. The flexibility he offers is fantastic, allowing you to plan your day exactly as you wish and spend the amount of time you want to spend at each place. A really great trip.",
  },
  {
    heading: "Great day at Niagara Falls",
    date: "20-07-2010",
    author: "amyhH8380UF",
    rating: 5,
    comment: "We had a wonderful day with Vlad. He was timely, professional, thoughtful and warm. He was very knowledgeable and had good insight and suggestions for our activities. He handled the logistics and we could just relax and enjoy our day at Niagara Falls. Definitely a five star experience!",
  },
  {
    heading: "Kudos are in order!",
    date: "20-09-2020",
    author: "Shanda_B",
    rating: 4,
    comment: "Our guide, Bob, was fantastic! He was knowledgeable about sites of interest and other information we wanted to know about the Victoria/ Vancouver area. He made the tour for our multigenerational group a great experience. I would definitely recommend this tour.",
  },
];

const totalReviews = ReviewData.length;

export const Star: React.FC<{ className1?: string, pathClass?: string }> = ({ className1, pathClass }) => (
  <svg
    className={className1}
    width="25"
    height="24"
    viewBox="0 0 35 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path className={pathClass}
      d="M16.5489 1.43169C16.8483 0.510379 18.1517 0.510379 18.4511 1.43169L21.7658 11.6333C21.8996 12.0453 22.2836 12.3243 22.7168 12.3243H33.4434C34.4122 12.3243 34.8149 13.5639 34.0312 14.1333L25.3532 20.4383C25.0027 20.6929 24.8561 21.1443 24.9899 21.5563L28.3046 31.7579C28.604 32.6792 27.5495 33.4454 26.7658 32.876L18.0878 26.571C17.7373 26.3164 17.2627 26.3164 16.9122 26.571L8.23419 32.876C7.45048 33.4454 6.396 32.6792 6.69535 31.7579L10.0101 21.5563C10.1439 21.1443 9.99728 20.6929 9.64679 20.4383L0.968768 14.1333C0.185055 13.5639 0.58783 12.3243 1.55655 12.3243H12.2832C12.7164 12.3243 13.1004 12.0453 13.2342 11.6333L16.5489 1.43169Z"
      fill="#D9D9D9"
    />
  </svg>
);

const Reviews: React.FC = () => {
  const [visibleReviews, setVisibleReviews] = useState(3);
  // Calculate overall rating
  const overallRating = (
    ReviewData.reduce((acc, review) => acc + review.rating, 0) / totalReviews
  ).toFixed(1);

  // Count how many reviews have a specific rating
  const ratingCount = (rating: number) =>
    ReviewData.filter((review) => review.rating === rating).length;

  const handleLoadMore = () => {
    setVisibleReviews((prev) => prev + 3); // Load 4 more reviews
  };

  return (
    <section className="pb-10 md:pb-[80px]  ">
      <div className="">
        <h2 className="text-[26px] md:text-4xl mb-3 md:mb-8">Customer Reviews</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-[384px,minmax(0,1fr)] gap-y-12 gap-5">
          {/* Overall Rating Section */}
          <div>
            <div className="sticky top-5">
              <div className="text-center ">
                <h2 className="text-[88px] md:text-[100px] font-DmSans font-black ">{overallRating}</h2>
                <div className="flex items-center justify-center mt-2">
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <Star key={index} pathClass="text-[#0F6528] fill-[#0F6528] " />
                    ))}
                </div>
                <p className="mt-2 text-lg">{totalReviews} reviews</p>
                <div className="w-full mt-6">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <div key={star} className="flex items-center gap-[5px] mb-2">
                    <div className="flex justify-between gap-[5px] items-center min-w-[50px]  ">
                    <p className="text-lg text-[#555] font-bold text-center ">{star}</p>
                    <Star pathClass=" fill-[#e3b616]" className1="text-[#e3b616] mr-2" />
                    </div>
                     <div className="flex justify-between w-full gap-2 ">
                     <div className="w-full bg-gray-200 h-[25px] rounded-sm overflow-hidden ">
                        <div
                          className="bg-[#0F6528] h-[25px] "
                          style={{
                            width: `${
                              (ratingCount(star) / totalReviews) * 100
                            }%`,
                          }}
                        ></div>
                      </div>
                      <p className="min-w-10 text-[#555] font-bold text-base ">
                        {((ratingCount(star) / totalReviews) * 100).toFixed(0)}%
                      </p>
                     </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Reviews List Section */}
          <div>
             {ReviewData.slice(0, visibleReviews).map((data, index) => (
              <div
                key={index}
                className="p-5 lg:px-[30px] lg:py-5 rounded-[10px] mb-5 bg-white shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)]"
              >
                <h5 className="text-xl mb-1 ">{data.heading}</h5>
                <p>{data.date}</p>
                <div className="flex mt-4 mb-[10px] items-center justify-between">
                  <h4 className="text-xl text-[#0F6528] ">{data.author}</h4>
                  <div className="flex items-center gap-1">
                  {Array(5)
                .fill(0)
                 .map((_, index) => (
                  <Star
              key={index}
             className1={`w-4 h-4 ${index < data.rating ? "text-[#0F6528]" : "text-[#D9D9D9]"}`} // Fills stars based on rating
             pathClass={index < data.rating ? "fill-[#0F6528]" : "fill-[#D9D9D9]"} // Fills SVG path based on rating
             />
         ))}
                </div>
                </div>
                <p className="md:text-base">{data.comment}</p>
              
              </div>
            ))}
            {visibleReviews < ReviewData.length && (
              <div className="flex justify-center mt-[30px] md:mt-[70px] ">
                <button
                  className="button  md:min-w-[230px] "
                  onClick={handleLoadMore}
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
