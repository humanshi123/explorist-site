import { useState } from 'react';

interface TravelerType {
  label: string;
  min: number;
  max: number;
  count: number;
}

const TravelerSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [totalTravelers, setTotalTravelers] = useState(0);
  
  const maxTravelers = 6;

  // Define the traveler categories
  const [travelers, setTravelers] = useState<TravelerType[]>([
    { label: 'ADULT (21-55)', min: 2, max: 6, count: 2 },
    { label: 'CHILD (6-11)', min: 0, max: 6, count: 2 },
    { label: 'INFANT (1-5)', min: 0, max: 6, count: 2 },
    { label: 'YOUTH (12-20)', min: 0, max: 6, count: 2 },
    { label: 'SENIOR (56-99)', min: 0, max: 6, count: 2 }
  ]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const updateTravelerCount = (index: number, increment: boolean) => {
    setTravelers((prev) => {
      const newTravelers = [...prev];
      const currentCount = newTravelers[index].count;

      if (increment && totalTravelers < maxTravelers && currentCount < newTravelers[index].max) {
        newTravelers[index].count += 1;
        setTotalTravelers(totalTravelers + 1);
      } else if (!increment && currentCount > newTravelers[index].min) {
        newTravelers[index].count -= 1;
        setTotalTravelers(totalTravelers - 1);
      }

      return newTravelers;
    });
  };

  return (
    <div className="relative mt-9">
      {/* Dropdown toggle */}
      <label className="text-xl block mb-2 text-[#1E1E1E] ">Number of People</label>
      <button className="travel-select text-sm w-full text-left text-[#8C8C8C] border-b border-[#ECECEC] py-2" onClick={toggleDropdown}>
        Select Persons {totalTravelers}
      </button>

      {/* Dropdown content */}
      {isOpen && (
        <div className="absolute z-10 bg-white shadow-lg p-4 w-full rounded-md mt-2">
          <p className="mb-3 ">
            You can select up to {maxTravelers} travelers in total.
          </p>
          {travelers.map((traveler, index) => (
            <div key={traveler.label} className="flex items-center justify-between mb-3">
              <div>
                <p className="text-sm font-medium text-[#000]">{traveler.label}</p>
                <p className="text-xs ">Minimum: {traveler.min}, Maximum: {traveler.max}</p>
              </div>
              <div className="flex items-center">
                <button
                  className="w-6 h-6 grid place-items-center text-[#8c8c8c] leading-[normal] bg-[#f0f0f0] border border-[#8c8c8c] rounded-full "
                  onClick={() => updateTravelerCount(index, false)}
                  disabled={traveler.count <= traveler.min}
                >
                  -
                </button>
                <span className="px-4 ">{traveler.count}</span>
                <button
                  className="w-6 h-6 grid place-items-center text-[#8c8c8c] leading-[normal] bg-[#f0f0f0] border border-[#8c8c8c] rounded-full "
                  onClick={() => updateTravelerCount(index, true)}
                  disabled={traveler.count >= traveler.max || totalTravelers >= maxTravelers}
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <button className="w-full button mt-4" onClick={toggleDropdown}>
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

export default TravelerSelect;
