import React, { useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface PlaceType {
  label: string;
  value: {
    place_id: string;
    description: string;
  };
}

const SearchBar: React.FC = () => {
  const [place, setPlace] = useState<PlaceType | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleSearch = () => {
    console.log('Place:', place?.label);
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
  };

  return (
    <div className="search-bar bg-white shadow-md rounded-[20px] flex justify-between items-center">
      {/* Place Search Input */}
 <div className='grid grid-cols-3 bg-white rounded-s-[20px] w-full gap-x-[30px] py-6 px-[59px] '>
 <div className="">
        <label className="block text-[#8c8c8c] mb-3">Place</label>
        <GooglePlacesAutocomplete
          apiKey="YOUR_GOOGLE_API_KEY"
          
          selectProps={{
            value: place,
            onChange: (val: PlaceType | null) => setPlace(val),
            placeholder: 'Enter place',
            className: 'search-place',
            
          }}
        />
      </div>

      {/* Start Date Picker */}
      <div className="">
        <label className="block text-[#8c8c8c] mb-3">Start Date</label>
        <DatePicker
          selected={startDate}
          onChange={(date: Date | null) => {
            setStartDate(date);
            if (date && endDate && date > endDate) {
              setEndDate(null);
            }
          }}
          dateFormat="yyyy-MM-dd"
          className="calender-input text-base w-full py-2 "
          placeholderText="Select Date"
          minDate={new Date()} 
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className="flex justify-between items-center px-2">
              <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                {"<"}
              </button>
              <div>
                <select
                  value={date.getFullYear()}
                  onChange={({ target: { value } }) => changeYear(parseInt(value))}
                >
                  {[...Array(11)].map((_, i) => {
                    const year = new Date().getFullYear() + i;
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
                <select
                  value={date.getMonth()}
                  onChange={({ target: { value } }) => changeMonth(parseInt(value))}
                >
                  {[
                    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                    'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
                  ].map((month, index) => (
                    <option key={index} value={index}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
              <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                {">"}
              </button>
            </div>
          )}
        />
      </div>

      {/* End Date Picker */}
      <div className="">
        <label className="block text-[#8c8c8c] mb-3 ">End Date</label>
        <DatePicker
          selected={endDate}
          onChange={(date: Date | null) => setEndDate(date)}
          dateFormat="yyyy-MM-dd"
          className="calender-input w-full text-base py-2"
          placeholderText="Select Date"
          minDate={startDate || new Date()} // Disable dates before startDate; fallback to current date if startDate is null
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className="flex justify-between items-center px-2">
              <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                {"<"}
              </button>
              <div className='w-[60%] flex p-1 bg-[#e3e3e3] rounded-md '>
                <select
                className='w-full bg-transparent'
                  value={date.getFullYear()}
                  onChange={({ target: { value } }) => changeYear(parseInt(value))}
                >
                  {[...Array(11)].map((_, i) => {
                    const year = new Date().getFullYear() + i;
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
                <select
                className='w-full bg-transparent'
                  value={date.getMonth()}
                  onChange={({ target: { value } }) => changeMonth(parseInt(value))}
                >
                  {[
                    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                    'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
                  ].map((month, index) => (
                    <option key={index} value={index}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
              <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                {">"}
              </button>
            </div>
          )}
        />
      </div>
 </div>

  <div className='min-w-[152px]  flex h-[124px] '>
  <button
        onClick={handleSearch}
        className="text-[20px] w-full h-full rounded-e-[20px] inline-block bg-[#1c9d41] text-white  transition"
      >
        Search
      </button>
  </div>
    </div>
  );
};

export default SearchBar;
