import React, { useEffect, useRef, useState } from "react";

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

  const [openDropdowns, setOpenDropdowns] = useState<boolean[]>([
    false, false, false, false, false,
  ]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Array containing dropdown titles and associated filter types
  const dropdowns = [
    { title: "Art & Culture", filterType: "artCulture", items: ["Cultural Tours", "Historical Tours"] },
    { title: "Food & Drink", filterType: "foodDrink", items: ["Wine Tasting", "Culinary Experiences"] },
    { title: "Likely To Sell Out", filterType: "likelyToSellOut", items: ["Popular Tours", "Limited Availability"] },
    { title: "Outdoor Activities", filterType: "outdoorActivities", items: ["Hiking", "Water Sports"] },
    { title: "Tours, Sightseeing & Cruises", filterType: "ToursSightseeingAndCruises", items: ["City Tours", "Boat Cruises"] },
  ];

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

  // Price slider handler
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseInt(e.target.value, 10);
    setFilters((prev) => ({
      ...prev,
      price: [prev.price[0], newPrice],
    }));
  };

  // Handle date range selection
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>, dateType: 'startDate' | 'endDate') => {
    setFilters({
      ...filters,
      [dateType]: e.target.value,
    });
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({
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
  };

  const applyFilters = () => {
    console.log(filters); // You can use this state to filter your tours data
  };

  return (
    <div className="filter-container">
        <input type="search" name="" id="" className="border"/>
  
      {/* Dropdowns for Art & Culture, Food & Drink, etc. */}
      {dropdowns.map((dropdown, index) => (
        <div key={index}>
          <h3
            className={`bg-white rounded-[10px] ${openDropdowns[index] ? "active" : ""}`}
            onClick={() => toggleDropdown(index)}
          >
            {dropdown.title}
          </h3>
          <div
            ref={(el) => (contentRefs.current[index] = el)}
            className="text-selection overflow-hidden transition-[max-height] duration-500 ease-in-out"
            style={{
              maxHeight: openDropdowns[index] ? contentRefs.current[index]?.scrollHeight : 0,
              opacity: openDropdowns[index] ? 1 : 0,
            }}
          >
            {dropdown.items.map((item: string) => (
              <label key={item}>
                <input
                  type="checkbox"
                  value={item}
                  onChange={(e) => handleFilterChange(e, dropdown.filterType as keyof FilterOptions)}
                />
                {item}
              </label>
            ))}
          </div>
        </div>
      ))}

      {/* Time of Day Checkboxes */}
      <div>
        <h3>Time of Day</h3>
        {["Morning", "Afternoon", "Evening", "Night"].map((item: string) => (
          <label key={item}>
            <input
              type="checkbox"
              value={item}
              onChange={(e) => handleFilterChange(e, "timeOfDay")}
            />
            {item}
          </label>
        ))}
      </div>

      {/* Price Filter */}
      <div>
        <h3>Price</h3>
        <input
          type="range"
          min="849"
          max="2924"
          value={filters.price[1]}
          onChange={handlePriceChange}
        />
        <span>Price: CA${filters.price[1]}</span>
      </div>

      {/* Specials Filter */}
      <div>
        <h3>Specials</h3>
        {["Discount", "Group Discount", "Family Friendly"].map((item: string) => (
          <label key={item}>
            <input
              type="checkbox"
              value={item}
              onChange={(e) => handleFilterChange(e, "specials")}
            />
            {item}
          </label>
        ))}
      </div>

      {/* Duration Filter */}
      <div>
        <h3>Duration</h3>
        {["1-3 Hours", "4-7 Hours", "Full Day"].map((item: string) => (
          <label key={item}>
            <input
              type="checkbox"
              value={item}
              onChange={(e) => handleFilterChange(e, "duration")}
            />
            {item}
          </label>
        ))}
      </div>

      {/* Date Picker */}
      <div>
        <h3>Date</h3>
        <label>
          Start Date:
          <input type="date" value={filters.startDate} onChange={(e) => handleDateChange(e, 'startDate')} />
        </label>
        <label>
          End Date:
          <input type="date" value={filters.endDate} onChange={(e) => handleDateChange(e, 'endDate')} />
        </label>
      </div>

      {/* Buttons */}
      <button onClick={applyFilters}>Search</button>
      <button onClick={resetFilters}>Reset Filters</button>
    </div>
  );
};

export default ToursFilter;
