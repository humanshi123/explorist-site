import { Link, useNavigate, useParams } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../assets/Moraine.jpg";
import img2 from "../assets/newsletter.gif";
import img3 from "../assets/loginimg.png";
import img4 from "../assets/about4.jpg";
import {
  ClockIcon,
  MessageIcon,
  MobileIcon,
  PickUpMan,
} from "../Utils/SvgIcons";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TravelerSelect from "../Components/TravelerSelect";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import Reviews from "../Components/Reviews";
import RecentlyViewed from "../Components/RecentlyViewed";

type Product = {
  id: number;
  name: string;
  image: string;
};
interface PlaceType {
  label: string;
  value: {
    place_id: string;
    description: string;
  };
}
const isLoggedIn = true;

const sliderData = [
  { id: 1, image: img1 },
  { id: 2, image: img2 },
  { id: 3, image: img3 },
  { id: 4, image: img4 },
  { id: 5, image: img1 },
  { id: 6, image: img2 },
  { id: 7, image: img3 },
];

const WishListIcon = ({ isInWishlist }: { isInWishlist: boolean }) => (
  <svg
    width={38}
    height={37}
    viewBox="0 0 38 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="wishlist-icon"
  >
    <path
      d="M18.7716 36.9909C28.8508 36.9909 37.0217 28.8201 37.0217 18.7408C37.0217 8.66157 28.8508 0.490723 18.7716 0.490723C8.69233 0.490723 0.521484 8.66157 0.521484 18.7408C0.521484 28.8201 8.69233 36.9909 18.7716 36.9909Z"
      fill="white"
    />
    <path
      d="M18.7717 27.1981L17.5931 26.1253C13.4072 22.3295 10.6438 19.818 10.6438 16.7538C10.6438 14.2423 12.6107 12.2834 15.1141 12.2834C16.5284 12.2834 17.8857 12.9418 18.7717 13.9741C19.6576 12.9418 21.015 12.2834 22.4292 12.2834C24.9326 12.2834 26.8996 14.2423 26.8996 16.7538C26.8996 19.818 24.1361 22.3295 19.9502 26.1253L18.7717 27.1981Z"
      fill={isInWishlist ? "red" : "#C1C1C1"}
    />
  </svg>
);

const Product = ({ product }: { product: Product }) => {
  const { productId } = useParams<{ productId: string }>();
  const [place, setPlace] = useState<PlaceType | null>(null);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [notification, setNotification] = useState<string | null>(null);
  const [showLoginWarning, setShowLoginWarning] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const navigate = useNavigate();
  const isInWishlist = wishlist.some((item) => item.id === product.id);


  const toggleWishlist = (product: Product) => {
    if (!isLoggedIn) {
      setShowLoginWarning(true); // Show warning to login if user is not logged in
      return;
    }
    setWishlist((prevWishlist) => {
      const updatedWishlist = isInWishlist
        ? prevWishlist.filter((item) => item.id !== product.id) // Remove from wishlist
        : [...prevWishlist, product]; // Add to wishlist

      // Show notification for 5 seconds if product is added
      if (!isInWishlist) {
        setNotification("Product added to the wishlist!");
        setTimeout(() => setNotification(null), 6000); // Hide after 6 seconds
      }

      return updatedWishlist;
    });
  };

  const goToWishlistPage = () => {
    navigate("/wishlists");
  };

  useEffect(() => {
    if (showLoginWarning) {
      setTimeout(() => setShowLoginWarning(false), 6000); // Auto-hide after 6 seconds
    }
  }, [showLoginWarning]);

  return (
    <div className="relative main-product">
      <div>
        <Swiper
          navigation={false}
          pagination={{
            type: "bullets",
            clickable: true,
            bulletActiveClass: "bg-[#0F6528] opacity-100",
          }}
          className="pb-9"
          autoplay={false}
          slidesPerView={1}
          loop={true}
          modules={[Autoplay, Navigation, Pagination]}
          breakpoints={{
            768: {
              slidesPerView: 2.2,
            },
            1100: {
              slidesPerView: 3.8,
            },
          }}
        >
          {sliderData.map((data) => (
            <SwiperSlide key={data.id}>
              <div>
                <img
                  src={data.image}
                  alt=""
                  className="aspect-[3/2] object-cover "
                />{" "}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container">
        <div className="grid py-10 md:py-[80px] md:grid-cols-2 lg:grid-cols-[minmax(0,1fr),384px] gap-5">
          <div>
            <div className="flex items-center mb-[10px]  ">
              <p className="leading-4 pr-[10px] border-r border-[#8c8c8c] ">
                Badge of Excellence 
              </p>
              <p className="pl-[10px] leading-4  ">America,Toronto</p>
            </div>
            <div className="border-y border-[#d9d9d9] py-[11px] ">
              <ul className="flex flex-wrap items-center gap-x-5 gap-y-[10px] ">
                <li className="flex items-center gap-[5px] ">
                  <ClockIcon />
                  <span>8 hours (approx.)</span>
                </li>
                <li className="flex items-center gap-[5px] ">
                  <MobileIcon />
                  <span>Mobile ticket</span>
                </li>
                <li className="flex items-center gap-[5px] ">
                  <MessageIcon />
                  <span>Offered in: English</span>
                </li>
              </ul>
            </div>
            <div className="flex gap-5 justify-between mt-5 mb-[10px]">
              <h2 className="text-[26px] md:text-4xl leading-[normal] w-full  ">
                Private full day tour to Niagara Falls from Toronto - Hotel pick
                up and drop off
              </h2>
              <button
                onClick={() => toggleWishlist(product)}
                className="min-w-[36px]"
              >
                <WishListIcon isInWishlist={isInWishlist} />
              </button>
            </div>
            <p>
              Enjoy a private visit to the stunning Niagara Falls with this
              private experience from Toronto. Your private driver will pick you
              up in your desired place in the city and driver approximately 90
              minutes until you reach the Falls. You will visit the Niagara
              Falls with a licensed tour guide, expert in the history and facts.
              Your private tour includes a visit to a local winery in Niagara
              and visit to the Town of Niagara.
            </p>
            <p className="leading-4 pl-[10px]">{productId} </p>
            <h2 className="text-[26px] md:text-4xl  mb-[10px] mt-[50px] ">
              Meeting And Pickup
            </h2>
            <div className="border border-[#d9d9d9] p-4 rounded-md ">
              <h4 className="flex text-xl gap-[5px] items-center mt-5  ">
                <PickUpMan /> Pickup Point
              </h4>
              <label className="block text-[#8c8c8c] text-sm mb-2">
                Select a pickup point
              </label>
              <GooglePlacesAutocomplete
                apiKey="YOUR_GOOGLE_API_KEY"
                selectProps={{
                  value: place,
                  onChange: (val: PlaceType | null) => setPlace(val),
                  placeholder: "Select a pickup point",
                  className:
                    "search-place border border-[#ECECEC] text-sm px-3 rounded-md max-w-[372px] ",
                }}
              />
              <h5 className="text-xl mt-5 mb-[15px] ">Pickup details</h5>
              <p className="mb-[10px] ">
                Complimentary pick ups from any hotels in Downtown Vancouver and
                cruise ship terminal Canada Place
              </p>
            </div>
            <div className="black-clock flex gap-2 items-center mt-[50px] ">
              <ClockIcon />
              <h4 className="text-lg md:text-xl ">
                Start time: <span className="text-sm text-[#8c8c8c]  ">8:30 AM</span>
              </h4>
            </div>
          </div>
          <div>
            <div className="sticky top-5 ">
              <div className="p-5 lg:p-[30px] rounded-[10px] bg-white shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)]  ">
                <div className="flex gap-5 justify-between  ">
                  <p>Starting from</p>
                  <div className="text-right">
                    <p className="text-[30px] font-extrabold text-[#0f6528]  ">
                      $2,149.00
                    </p>
                    <p>Price varies by group size</p>
                  </div>
                </div>
                <div className=" product-page ">
                  <label className="text-xl block mb-[10px] text-[#1E1E1E] ">
                    Date
                  </label>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date: Date | null) => setSelectedDate(date)}
                    dateFormat="yyyy-MM-dd"
                    className="calender-input w-full text-sm pb-2 border-b border-[#ECECEC]"
                    placeholderText="Select Date"
                    minDate={new Date()}
                    popperClassName="relative"
                  />
                </div>
                <div className="mb-9">
                  <TravelerSelect />
                </div>
                <button className="button h-[60px] !text-base w-full">
                  Check Availability
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Reviews/>
        </div>
        <RecentlyViewed/>
      </div>
      {notification && (
        <div className="fixed top-5 w-[calc(100%-40px)]  right-5 z-10">
          <div className="bg-white text-center p-5 rounded-[20px] shadow-lg ml-auto max-w-[400px] w-full">
            <p className="font-semibold mb-4 text-lg">{notification}</p>
            <button className="button" onClick={goToWishlistPage}>
              Go to Wishlist Page
            </button>
          </div>
        </div>
      )}

      {/* Warning message if not logged in */}
      {showLoginWarning && (
        <div className="fixed top-5 w-[calc(100%-40px)] right-5 z-10">
          <div className="bg-white text-center p-5 rounded-[20px] shadow-lg ml-auto max-w-[400px] w-full">
            <p className="font-semibold mb-5 text-lg">
              Please log in to add products to your wishlist!
            </p>
            <Link to="/sign-in" className="button">
              Login
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
