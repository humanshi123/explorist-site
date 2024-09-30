import React from "react";

interface SearchProps {
click?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Search: React.FC<SearchProps> = ({click}) => {
    return (
        <div className="relative max-w-[455px] mx-auto w-full ">
            <input type="search" name="" id="" placeholder="Booking Id" className="w-full h-[50px] md:h-[62px] rounded-[50px] p-5 placeholder:text-[#666] placeholder:text-[15px] " />
            <button onClick={click} className="absolute top-0 right-0 h-full w-[138px] bg-[#0f6528] rounded-[50px] text-white  ">Search</button>
        </div>
    );
}

export default Search;
