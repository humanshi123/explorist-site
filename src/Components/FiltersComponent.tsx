import { useState } from "react";

const categories = [
  "Art & Culture",
  "Food & Drink",
  "Likely To Sell Out",
  "Outdoor Activities",
  "Tours, Sightseeing & Cruises",
];
const artCulture = ["Cultural Tours", "Historical Tours"];
const foodDrink = ["Wine Tours", "Wine Tastings"];
const likelyToSellOut = ["Likely To Sell Out"];
const outdoorActivities = [
  "Hiking Tours",
  "Nature and Wildlife Tours",
  "4WD Tours",
  "Adventure Tours",
];
const ToursSightseeingAndCruises = [
  "Private Sightseeing Tours",
  "Bus Tours",
  "Day Trips",
  "Shore Excursions",
  "Multi-day Tours",
  "Air Tours",
  "Sightseeing Cruises",
];
const timeOfDayFilters = ["Morning", "Afternoon", "Evening and night"];
const duration = ["Up to 1 hour", "1 to 4 hours", "4 hours to 1 day", "1 day+"];

type FiltersComponentProps = {
  query: {
    category: string;
    artCulture: string[];
    foodDrink: string[];
    likelyToSellOut: string[];
    outdoorActivities: string[];
    ToursSightseeingAndCruises: string[];
    timeOfDay: string[];
    duration: string[];

  };
  updateQuery: (newQuery: {
    category?: string;
    artCulture?: string[];
    foodDrink: string[];
    likelyToSellOut?: string[];
    outdoorActivities?: string[];
    ToursSightseeingAndCruises?: string[];
    timeOfDay?: string[];
    duration?: string[];
  }) => void;
};

const FiltersComponent = ({ query, updateQuery }: FiltersComponentProps) => {
  const [selectedCategory, setSelectedCategory] = useState(query.category || "");
  const [selectedArtCulture, setSelectedArtCulture] = useState(query.artCulture||[]);
  const [selectedTimeOfDay, setSelectedTimeOfDay] = useState<string[]>(query.timeOfDay || []);
  const [selectedDuration, setSelectedDUration] = useState<string[]>(query.duration || []);
  // Handle category selection
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    updateQuery({ category });
  };

  // Handle time of day selection
  const handleTimeOfDaySelect = (time: string) => {
    const updatedTimes = selectedTimeOfDay.includes(time)
      ? selectedTimeOfDay.filter((t) => t !== time)
      : [...selectedTimeOfDay, time];

    setSelectedTimeOfDay(updatedTimes);
    updateQuery({ timeOfDay: updatedTimes });
  };

const handleDurationSelecty =(data: string)=>{
 const updatedDuration = selectedDuration.includes(data)? selectedDuration.filter((d)=>d !==data):[...selectedDuration, data];
setSelectedDUration(updatedDuration);
updateQuery({duration: updatedDuration});
}

const handleArtCultureSelect =(art: string)=>{
  const updatedArtCulture = selectedArtCulture.includes(art)? selectedArtCulture.filter((a)=>a !==art):[...selectedArtCulture, art];
  setSelectedArtCulture(updatedArtCulture);
  updateQuery({artCulture: updatedArtCulture}); 
}

  return (
    <div>
      <h2>Filter Tours</h2>

      {/* Categories */}
      <h3>Categories</h3>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategorySelect(category)}
          style={{
            backgroundColor: selectedCategory === category ? "green" : "white",
          }}
        >
          {category}
        </button>
      ))}

<h3>Art & Culture</h3>
      {artCulture.map((art) => (
        <button
          key={art}
          onClick={() => handleArtCultureSelect(art)}
          // style={{
          //   backgroundColor: selectedArtCulture === art ? "green" : "white",
          // }}
        >
          {art}
        </button>
      ))}

      <h3>Time of Day</h3>
      {timeOfDayFilters.map((time) => (
        <div key={time}>
          <input
            type="checkbox"
            checked={selectedTimeOfDay.includes(time)}
            onChange={() => handleTimeOfDaySelect(time)}
          />
          <label>{time}</label>
        </div>
      ))}
     
      <h3>Duration</h3>
      {duration.map((data)=>(
        <div key={data}>
          <input type="checkbox" 
          checked={selectedDuration.includes(data)}
          onChange={()=>handleDurationSelecty(data)}  
            />
        </div>
      ))}

    </div>
  );
};

export default FiltersComponent;
