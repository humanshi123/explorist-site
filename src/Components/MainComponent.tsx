import { useState } from 'react';
import useSWR from 'swr';
import FiltersComponent from './FiltersComponent';
import DataDisplayComponent from './DataDisplayComponent';

// Define a type for your query state
type QueryState = {
  category: string;
  timeOfDay: string[];
};

// Define a type for the tour data
type TourData = {
  id: number;
  title: string;
  description: string;
  price: string;
  duration: string;
};

// Mock fetcher function for SWR
const fetcher = (url: string) => fetch(url).then(res => res.json());

const MainComponent = () => {
  const [query, setQuery] = useState<QueryState>({ category: '', timeOfDay: [] });

  // Use SWR for fetching data
  const { data: mainData, error } = useSWR<TourData[]>('/api/tours', fetcher);

  // Update query function
  const updateQuery = (newQuery: Partial<QueryState>) => {
    setQuery(prev => ({
      ...prev,
      ...newQuery,
    }));
  };

  // Filter the data based on query
  const filteredData = mainData?.filter(item => {
    return (
      (!query.category || item.title.includes(query.category)) &&
      (query.timeOfDay.length === 0 || query.timeOfDay.includes('Morning')) // Add actual conditions based on your filters
    );
  });

  if (error) return <div>Failed to load data</div>;
  if (!mainData) return <div>Loading...</div>;

  return (
    <div>
      <h1>Niagara Falls Tours</h1>

      {/* Pass query state and update function to FiltersComponent */}
      <FiltersComponent query={query} updateQuery={updateQuery} />

      {/* DataDisplayComponent to show filtered data */}
      <DataDisplayComponent data={filteredData || []} />
    </div>
  );
};

export default MainComponent;
