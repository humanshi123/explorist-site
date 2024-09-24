import { useNavigate } from "react-router-dom";

interface DestinationCardProps {
    imgSrc: string;
    heading: string;
    tours?: number;
    categoryId: number; // Added categoryId prop to navigate to the correct category page
}

const DestinationCard: React.FC<DestinationCardProps> = ({ imgSrc, heading, tours, categoryId }) => {
    const navigate = useNavigate();

    // Navigate to the collection page based on the categoryId
    const handleCategoryClick = () => {
        navigate(`/category/${categoryId}`);
    };

    return (
        <div onClick={handleCategoryClick} className="relative cursor-pointer">
            <img src={imgSrc} alt={heading} className="rounded-[10px] w-full aspect-[1/.8] object-cover" />
            
            <div className="absolute top-[18px] right-[18px]"> 
                <p className="text-white text-[13px] font-semibold px-[11px] py-1.5 bg-[#1c9d41] rounded-[3px]">
                    {tours} tours
                </p>
            </div>
            
            <div className="absolute bottom-[26px] w-full text-center">
                <h4 className="text-white text-[20px] lg:text-2xl font-normal lg:leading-7">{heading}</h4>
            </div>
        </div>
    );
};

export default DestinationCard;
