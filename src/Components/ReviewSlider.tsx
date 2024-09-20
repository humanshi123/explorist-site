import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
  return (
      <div className=" pl-[11%] ">
          <Swiper
            navigation={false}
            pagination={{ type: "bullets", clickable: true, bulletActiveClass: "bg-[#0F6528] opacity-100" }}
            autoplay={false}
            slidesPerView={2.5}
            spaceBetween={21}
            loop={true}
            
            modules={[Autoplay, Navigation, Pagination]}
          >
            {data.map(({ id, image, tagline, name, title }) => (
              <SwiperSlide key={id} className=" bg-white p-[30px]  rounded-[10px] h-full mb-[40px]  ">
                <div className="">
                  <p className="text-[#757575] text-base md:leading-[30px]">
                    {title}
                  </p>
                  <h3 className="text-[#1E1E1E] text-[24px] mt-5">{name} </h3>
                  <div className="flex justify-between items-center">
                    <img src={image} alt="" />
                    <p className="text-[#757575] text-sm "> Provider: {tagline} </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
      </div>
  );
};

export default ReviewSlider;
