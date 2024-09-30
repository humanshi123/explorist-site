import WishImg1 from "../assets/Ontario.jpg";
import WishImg2 from "../assets/Moraine.jpg";
import WishImg3 from "../assets/banner1.png";
import { useLocation, useNavigate } from "react-router-dom";
import review from "../assets/review.svg";
import { ProductClock, ProductTick } from "../Utils/SvgIcons";

// Define the Product type
type Product = {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
};

const sampleWishlist: Product[] = [
  {
    id: 1,
    name: "Vatican Museums, Sistine Chapel & St Peter’s Basilica Guided Tour",
    image: WishImg1,
    price: "$6,708",
    description: "We believe that exploration should not come at the expense of our environment. That's why Explorist is not just eco and That's why Explorist is not just eco...",
  },
  {
    id: 2,
    name: "Vatican Museums, Sistine Chapel & St Peter’s Basilica Guided Tour",
    image: WishImg2,
    price: "$6,708",
    description: "We believe that exploration should not come at the expense of our environment. That's why Explorist is not just eco and why Explorist is not just eco",
  },
  {
    id: 3,
    name: "Vatican Museums, Sistine Chapel & St Peter’s Basilica Guided Tour",
    image: WishImg3,
    price: "$6,708",
    description: "We believe that exploration should not come at the expense of our environment. That's why Explorist is not just eco...",
  },
];

const Wishlists = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Use either passed data or the sample wishlist for testing/design
  const wishlist: Product[] = location.state?.wishlist || sampleWishlist;
  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };
  return (
  <div>
      <div className="container">
      <h2 className="text-center mt-5 mb-5 md:mb-10">Wishlist</h2>
      <div className="wishlist-items grid md:grid-cols-2 lg:grid-cols-4 gap-y-7 md:gap-y-[50px] gap-x-[21px] md:pb-[80px] pb-10">
        {wishlist.length > 0 ? (
          wishlist.map((item: Product) => (
            <div key={item.id} className="wishlist-item cursor-pointer" onClick={() => handleProductClick(item.id)}>
              <img src={item.image} alt={item.name} className="w-full rounded-[10px] h-[313px] object-cover " />
              <h4 className="text-[#1e1e1e] mt-[15px] mb-[10px] ">{item.name}</h4>
              <div className="price flex justify-between items-center ">
              <h4 className="text-[#1e1e1e] text-lg   ">{item.price} </h4>
            <div className="price flex justify-between items-center "><img src={review} alt="" /> <p className="text-[#8c8c8c] text-sm ml-1  ">10</p></div>
            </div>
             <p className="line-clamp-3 mt-2">{item.description}</p>
             <div className="flex items-center gap-5 mt-5">
                <p className="flex items-center gap-1"><ProductClock/> 3 hours </p>
                <p className="flex items-center gap-1"><ProductTick/> Free Cancellation</p>
             </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Your wishlist is empty!</p>
        )}
      </div>
    </div>
  </div>
  );
};

export default Wishlists;
