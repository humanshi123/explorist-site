import { useState } from 'react';

const categories = [
  'Art & Culture',
  'Food & Drink',
  'Likely To Sell Out',
  'Outdoor Activities',
  'Tours, Sightseeing & Cruises',
];

const timeOfDayFilters = ['Morning', 'Afternoon', 'Evening and night'];

// Define the prop types for the FiltersComponent
type FiltersComponentProps = {
  query: { category: string; timeOfDay: string[] };
  updateQuery: (newQuery: { category?: string; timeOfDay?: string[] }) => void;
};

const FiltersComponent = ({ query, updateQuery }: FiltersComponentProps) => {
  const [selectedCategory, setSelectedCategory] = useState(query.category || '');
  const [selectedTimeOfDay, setSelectedTimeOfDay] = useState<string[]>(query.timeOfDay || []);

  // Handle category selection
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    updateQuery({ category });
  };

  // Handle time of day selection
  const handleTimeOfDaySelect = (time: string) => {
    const updatedTimes = selectedTimeOfDay.includes(time)
      ? selectedTimeOfDay.filter(t => t !== time)
      : [...selectedTimeOfDay, time];

    setSelectedTimeOfDay(updatedTimes);
    updateQuery({ timeOfDay: updatedTimes });
  };

  return (
    <div>
      <h2>Filter Tours</h2>

      {/* Categories */}
      <h3>Categories</h3>
      {categories.map(category => (
        <button
          key={category}
          onClick={() => handleCategorySelect(category)}
          style={{ backgroundColor: selectedCategory === category ? 'green' : 'white' }}
        >
          {category}
        </button>
      ))}

      {/* Time of Day */}
      <h3>Time of Day</h3>
      {timeOfDayFilters.map(time => (
        <div key={time}>
          <input
            type="checkbox"
            checked={selectedTimeOfDay.includes(time)}
            onChange={() => handleTimeOfDaySelect(time)}
          />
          <label>{time}</label>
        </div>
      ))}
    </div>
  );
};

export default FiltersComponent;
