interface DiscoverCardsProps {
    imgSrc: string;
    heading: string;
    description:  string;
}

const DiscoverCards: React.FC<DiscoverCardsProps> = ({imgSrc, heading, description}) => {
    return (
        <div className="rounded-[20px] py-[35px] px-[30px] bg-white shadow-[0px_0px_35px_0px_rgba(15,101,40,0.1)] text-center ">
        <img src={imgSrc} alt="" className="mx-auto " />
        <h4 className="text-[#0f6528] text-[20px] mt-[18px] mb-[10px] ">
        {heading} </h4>

        <p className="max-w-[332px] mx-auto text-[#8c8c8c] text-sm font-normal leading-[26px]">{description} </p>
        </div>
    );
}

export default DiscoverCards;
