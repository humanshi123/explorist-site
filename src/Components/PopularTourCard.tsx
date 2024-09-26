import { useNavigate } from "react-router-dom";

interface PopularTourCardProps {
  image: string;
  heading: string;
  categoryId: number; // Ensure this is passed correctly from props
}
 
const PopularTourCard: React.FC<PopularTourCardProps> = ({ image, heading, categoryId }) => {
  const navigate = useNavigate();

  // Pass categoryId inside the function
  const handleProductClick = () => {
    navigate(`/product/${categoryId}`); // Navigate using categoryId
  };

  return (
    <div onClick={handleProductClick} className="relative cursor-pointer">
      <img src={image} alt="" className="rounded-[10px] w-full h-[320px] md:h-[420px] object-cover" />
      
      <div className="absolute bottom-[26px] w-full text-center">
        <h4 className="text-white text-[20px] lg:text-[27px] font-normal leading-8">{heading}</h4>
      </div>
    </div>
  );
};

export default PopularTourCard;
