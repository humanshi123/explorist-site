// import { useState } from 'react';
// import useSWR from 'swr';
// import FiltersComponent from './FiltersComponent';
// import DataDisplayComponent from './DataDisplayComponent';

// // Define a type for your query state
// type QueryState = {
//     artCulture: string[];
//     foodDrink: string[];
//     likelyToSellOut: string[];
//     outdoorActivities: string[]; 
//     ToursSightseeingAndCruises: string[];
//     timeOfDay: string[];
//     duration: string[];
// };

// // Define a type for the tour data
// type TourData = {
//   id: number;
//   title: string;
//   description: string;
//   price: string;
//   duration: string;
// };

// // Mock fetcher function for SWR
// const fetcher = (url: string) => fetch(url).then(res => res.json());

// const MainComponent = () => {
//   const [query, setQuery] = useState<QueryState>({ 
//     artCulture: [],
//     foodDrink: [],
//     likelyToSellOut: [],
//     outdoorActivities: [],
//     ToursSightseeingAndCruises: [],
//     timeOfDay: [],
//     duration: [],
//   });

//   const { data: mainData, error } = useSWR<TourData[]>('/api/tours', fetcher);

//   const updateQuery = (newQuery: Partial<QueryState>) => {
//     setQuery(prev => ({
//       ...prev,
//       ...newQuery,
//     }));
//   };

//   const filteredData = mainData?.filter(() => {
//     return (
//       //(!query.category || item.title.includes(query.category)) &&
//       (query.timeOfDay.length === 0 || query.timeOfDay.includes('Morning') || query.timeOfDay.includes('Afternoon') || query.timeOfDay.includes('Evening and night')) // Add actual conditions based on your filters
//     );
//   });

//   if (error) return <div>Failed to load data</div>;
//   if (!mainData) return <div>Loading...</div>;

//   return (
//     <div>
//       <h1>Niagara Falls Tours</h1>

//       <FiltersComponent query={query} updateQuery={updateQuery} />

//       <DataDisplayComponent data={filteredData || []} />
//     </div>
//   );
// };

// export default MainComponent;

import React from 'react';

const MainComponent = () => {
  return (
    <div>
      fdfdfd
    </div>
  );
}

export default MainComponent;
