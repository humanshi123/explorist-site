interface DestinationCardProps {
    imgSrc: string;
    place: string;
    tours:  number;
}

const DestinationCard: React.FC<DestinationCardProps> = ({imgSrc, place, tours}) => {
    return (
        <div className="relative ">
        {/* <a href=""> */}
        <img src={imgSrc} alt="" className="rounded-[10px] w-full aspect-[1/.8] object-cover" />
           <div className="absolute top-[18px] right-[18px]  "> 
        <p className="text-white text-[13px] font-semibold px-[11px] py-1.5 bg-[#1c9d41] rounded-[3px] ">{tours} tours </p></div>
            <div className="absolute bottom-[26px] w-full text-center ">
            <h4 className="text-white text-2xl font-normal leading-7">{place}</h4>
            </div>
        {/* </a> */}
        </div>
    );
}

export default DestinationCard;
