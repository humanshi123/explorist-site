import React, { useEffect, useRef, useState } from "react";
import { Range, getTrackBackground } from "react-range";
import StartEndDatePicked from "./StartEndDatePicked";

// Define the structure for filter options
interface FilterOptions {
  artCulture: string[];
  foodDrink: string[];
  likelyToSellOut: string[];
  outdoorActivities: string[];
  ToursSightseeingAndCruises: string[];
  timeOfDay: string[];
  duration: string[];
  price: [number, number];
  specials: string[];
  startDate: string;
  endDate: string;
}

const ToursFilter: React.FC = () => {
  const [filters, setFilters] = useState<FilterOptions>({
    artCulture: [],
    foodDrink: [],
    likelyToSellOut: [],
    outdoorActivities: [],
    ToursSightseeingAndCruises: [],
    timeOfDay: [],
    duration: [],
    price: [295, 1987],
    specials: [],
    startDate: "",
    endDate: "",
  });


  const [mainDropdown, setMainDropdown] = useState<boolean>(false);
  const [openDropdowns, setOpenDropdowns] = useState<boolean[]>([
    false, false, false, false, false,
  ]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [values, setValues] = useState([0, 1000]); // Initial min and max values
  const MIN = 0;
  const MAX = 1000;

  const handleRangeChange = (values: number[]) => {
    setValues(values);
  };
  // Array containing dropdown titles and associated filter types
  const dropdowns = [
    { title: "Art & Culture", filterType: "artCulture", items: ["Cultural Tours", "Historical Tours"] },
    { title: "Food & Drink", filterType: "foodDrink", items: ["Wine Tasting", "Culinary Experiences"] },
    { title: "Likely To Sell Out", filterType: "likelyToSellOut", items: ["Popular Tours", "Limited Availability"] },
    { title: "Outdoor Activities", filterType: "outdoorActivities", items: ["Hiking", "Water Sports"] },
    { title: "Tours, Sightseeing & Cruises", filterType: "ToursSightseeingAndCruises", items: ["City Tours", "Boat Cruises"] },
  ];

  const opnDropdown = ()=>{
    setMainDropdown(!mainDropdown);
  };
  // Toggle dropdown visibility
  const toggleDropdown = (index: number) => {
    setOpenDropdowns((prevState) =>
      prevState.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        if (openDropdowns[index]) {
          ref.style.maxHeight = ref.scrollHeight + "px";
          ref.style.opacity = "1";
        } else {
          ref.style.maxHeight = "0px";
          ref.style.opacity = "0";
        }
      }
    });
  }, [openDropdowns]);

  // Handle selection for each filter type
  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    filterType: keyof FilterOptions
  ) => {
    const { value, checked } = e.target;

    // Check if the filterType is an array (we exclude price since it's not an array)
    if (Array.isArray(filters[filterType])) {
      setFilters((prev) => ({
        ...prev,
        [filterType]: checked
          ? [...(prev[filterType] as string[]), value]
          : (prev[filterType] as string[]).filter((item: string) => item !== value),
      }));
    }
  };
  // Handle date range selection
  // const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>, dateType: 'startDate' | 'endDate') => {
  //   setFilters({
  //     ...filters,
  //     [dateType]: e.target.value,
  //   });
  // };

  // Reset all filters
  // const resetFilters = () => {
  //   setFilters({
  //     artCulture: [],
  //     foodDrink: [],
  //     likelyToSellOut: [],
  //     outdoorActivities: [],
  //     ToursSightseeingAndCruises: [],
  //     timeOfDay: [],
  //     duration: [],
  //     price: [295, 1987],
  //     specials: [],
  //     startDate: "",
  //     endDate: "",
  //   });
  // };

  const applyFilters = () => {
    console.log(filters); 
  };

  return (
    <div className="filter-container ">
       <label htmlFor="" className="border border-[#e9e9e9] bg-[#f2f7f1] rounded-[10px] w-full flex justify-between ">
       <input type="search" name="" id="" placeholder="Niagara Falls" className="bg-transparent h-[38px] px-3 text-sm w-full "/>
       <button onClick={applyFilters} className=" button !py-2 !px-5 h-[40px] min-w-[85px] ">Search</button>
       </label>
      <div>
        <h3 className="text-lg md:text-xl my-2.5 md:mt-5 md:mb-[15px] leading-[normal] ">When are you traveling? </h3>
        <StartEndDatePicked/>
      </div>  
      <h3 onClick={opnDropdown}  className={`text-base md:text-xl leading-[normal] pb-[15px] md:pb-5 mt-[15px] pt-[5px] md:pt-[10px] border-y border-[#d9d9d9] relative cursor-pointer drop-svg ${mainDropdown ? "active border-b-0" : ""}`}
      >
        All New-Brunswick Tours</h3>
{mainDropdown&&(
  <div>
          {dropdowns.map((dropdown, index) => (
        <div key={index} className=" mb-[5px]  ">
          <p
            className={`border border-[#ccc] text-sm p-[10px] text-[#333] cursor-pointer ${openDropdowns[index] ? "active" : ""}`}
            onClick={() => toggleDropdown(index)}
          >
            {dropdown.title}
          </p>
          <div
            ref={(el) => (contentRefs.current[index] = el)}
            className="text-selection grid pl-5 pt-2 overflow-hidden transition-[max-height] duration-500 ease-in-out"
            style={{
              maxHeight: openDropdowns[index] ? contentRefs.current[index]?.scrollHeight : 0,
              opacity: openDropdowns[index] ? 1 : 0,
            }}
          >
            {dropdown.items.map((item: string) => (
              <label key={item} className="tags ">
                <input
                  type="checkbox"
                  value={item}
                  onChange={(e) => handleFilterChange(e, dropdown.filterType as keyof FilterOptions)}
                />
               <span> {item}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
  </div>
)}

      {/* Time of Day Checkboxes */}
      <div className="border-b border-[#d9d9d9] pb-[10px] mb-[10px] ">
        <h3 className="text-base md:text-xl mt-2 md:my-[15px] leading-[normal] py-[5px] md:py-[10px]">Time of Day</h3>
     <div className="grid">
     {["Morning", "Afternoon", "Evening", "Night"].map((item: string) => (
          <label key={item} className="highlight py-[4px] text-[#8c8c8c] text-sm flex items-center">
            <input
              type="checkbox"
              value={item}
              className="mr-2 accent-black"
              onChange={(e) => handleFilterChange(e, "timeOfDay")}
            />
          <span>{item}</span>
          </label>
        ))}
     </div>
      </div>
      {/* Duration Filter */}
      <div className="border-b border-[#d9d9d9] pb-[10px] mb-[10px] ">
        <h3 className="text-base md:text-xl mt-2 md:my-[15px] leading-[normal] py-[5px] md:py-[10px] ">Duration</h3>
       <div className="grid">
       {["1-3 Hours", "4-7 Hours", "Full Day"].map((item: string) => (
          <label key={item} className="highlight py-[4px] text-[#8c8c8c] text-sm flex items-center">
            <input
              type="checkbox"
              value={item}
              className="mr-2 accent-black"
              onChange={(e) => handleFilterChange(e, "duration")}
            />
            <span>{item}</span>
          </label>
        ))}
       </div>
      </div>

      {/* Price Filter */}
      <div className="border-b border-[#d9d9d9] pb-[10px] mb-[10px]  ">
        <h3 className="text-base md:text-xl  md:my-[15px] leading-[normal] py-[10px]">Price</h3>
        <div className="price-range-slider pt-[50px] pb-2 px-5 md:px-0">
        <Range
  step={10}
  min={MIN}
  max={MAX}
  values={values}
  onChange={handleRangeChange}
  renderTrack={({ props, children }) => (
    <div
      {...props}
      style={{
        ...props.style,
        height: "10px", // Reduced height for a more compact track
        width: "100%",
        borderRadius: "3px",
        background: getTrackBackground({
          values,
          colors: ["#8c8c8c", "#e9e9e9", "#8c8c8c"], 
          min: MIN,
          max: MAX,
        }),
      }}
    >
      {children}
    </div>
  )}
  renderThumb={({ props, index }) => (
    <div
    className="focus-visible:outline-none mt-[-25px] "
      {...props}
      style={{
        ...props.style,
        height: "24px", // Adjusted size
        width: "24px", 
        borderRadius: "50%",
        backgroundColor: "#28a745",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative", // Allows positioning of the price label
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-30px",
          color: "#8c8c8c", 
          padding: "5px 10px",
          borderRadius: "4px",
          fontSize: "14px", 
        }}
      >
        ${values[index].toFixed(2)}
      </div>
    </div>
  )}
/>

    </div>
  </div>



      {/* Specials Filter */}
      <div className="">
        <h3 className="text-base md:text-xl mt-2 md:my-[15px] leading-[normal] py-[5px] md:py-[10px]">Specials</h3>
    <div className="grid">
    {["Discount", "Group Discount", "Family Friendly"].map((item: string) => (
          <label key={item} className="highlight py-[4px] text-[#8c8c8c] text-sm flex items-center ">
            <input
              type="checkbox"
              value={item}
              className="mr-2 accent-black"
              onChange={(e) => handleFilterChange(e, "specials")}
            />
        <span>{item}</span>
          </label>
        ))}
    </div>
      </div>
      {/* <button onClick={resetFilters}>Reset Filters</button> */}
    </div>
  );
};

export default ToursFilter;
