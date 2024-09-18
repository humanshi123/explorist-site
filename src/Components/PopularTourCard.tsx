interface PopularTourCardProps {
    imgSrc: string;
    place: string;
    badge?: string | number;
  }
  
  const PopularTourCard: React.FC<PopularTourCardProps> = ({ imgSrc, place, badge }) => {
    return (
      <div className="relative ">
        <img src={imgSrc} alt="" className="rounded-[10px] w-full h-[420px] object-cover" />
       
        {badge ? (
        <div className="absolute top-[18px] right-[18px]">
          <p className="text-white text-[13px] font-semibold px-[11px] py-1.5 bg-[#1c9d41] rounded-[3px]">
            {badge}
          </p>
        </div>
      ) : null}
      
        <div className="absolute bottom-[26px] w-full text-center">
        <h4 className="text-white text-[27px] font-normal leading-8">{place}</h4>
        </div>
      </div>
    );
  };
  
  export default PopularTourCard;
  