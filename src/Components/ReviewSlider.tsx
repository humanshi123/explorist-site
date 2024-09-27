import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

interface Slide {
  id: number;
  title: string;
  tagline: string;
  image: string;
  name: string;
}

interface DemoSliderProps {
  data: Slide[];
}

const ReviewSlider: React.FC<DemoSliderProps> = ({ data }) => {
  // Create an object to track the expanded state for each slide
  const [expandedStates, setExpandedStates] = useState<{ [key: number]: boolean }>({});

  const toggleReadMore = (id: number) => {
    setExpandedStates((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the state for the specific slide by id
    }));
  };

  return (
    <div className="lg:pl-[11%] pl-[15px] pr-[15px] md:pr-0">
      <Swiper
        navigation={false}
        pagination={{ 
          type: "bullets",
          clickable: true,
          bulletActiveClass: "bg-[#0F6528] opacity-100",
        }}
        autoplay={false}
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        modules={[Autoplay, Navigation, Pagination]}
        breakpoints={{
          768: {
            slidesPerView: 1.2,
          },
          1100: {
            slidesPerView: 2.4,
          },

        }}
      >
        {data.map(({ id, image, tagline, name, title }) => {
          const isExpanded = expandedStates[id] || false; // Check if the slide is expanded, default is false
          return (
            <SwiperSlide key={id} className="bg-white p-[15px] md:p-[30px] rounded-[10px] flex h-auto mb-[40px]">
              <div>
                <p className="text-[#757575] text-sm md:leading-[30px]">
                  {isExpanded ? title : `${title.slice(0, 300)}`}
                  {title.length > 300 && (
                    <button
                      onClick={() => toggleReadMore(id)}
                      className="text-[#0F6528] underline ml-2"
                    >
                      {isExpanded ? "read less" : "...read more"}
                    </button>
                  )}
                </p>
                <h3 className="text-[#1E1E1E] text-lg md:text-[24px] mt-[14px] md:mt-5">{name}</h3>
                <div className="flex justify-between items-center">
                  <img src={image} alt={name} />
                  <p className="text-[#757575] text-sm">Provider: {tagline}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ReviewSlider;
