import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const categories = [
  'Art & Culture',
  'Food & Drink',
  'Likely To Sell Out',
  'Outdoor Activities',
  'Tours, Sightseeing & Cruises',
];

const timeOfDayFilters = ['Morning', 'Afternoon', 'Evening and night'];

function Filters() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTimeOfDay, setSelectedTimeOfDay] = useState<string[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    updateQueryParams({ category });
  };

  const handleTimeOfDaySelect = (time: string) => {
    const updatedTimes = selectedTimeOfDay.includes(time)
      ? selectedTimeOfDay.filter(t => t !== time)
      : [...selectedTimeOfDay, time];

    setSelectedTimeOfDay(updatedTimes);
    updateQueryParams({ timeOfDay: updatedTimes });
  };

  const updateQueryParams = (filters: { category?: string; timeOfDay?: string[] }) => {
    const searchParams = new URLSearchParams(location.search);

    if (filters.category) {
      searchParams.set('category', filters.category);
    }

    if (filters.timeOfDay) {
      searchParams.set('timeOfDay', filters.timeOfDay.join(','));
    }

    navigate({
      pathname: location.pathname,
      search: searchParams.toString(),
    });
  };

  return (
    <div>
      {/* Categories */}
      <h2>All Niagara Falls, Ontario Tours</h2>
      {categories.map(category => (
        <button
          key={category}
          onClick={() => handleCategorySelect(category)}
          style={{
            backgroundColor: selectedCategory === category ? 'green' : 'white',
          }}
        >
          {category}
        </button>
      ))}

      {/* Time of Day */}
      <h2>Time of Day</h2>
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
}

export default Filters;
