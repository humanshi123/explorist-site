import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const StartEndDatePicked: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleSearch = () => {
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
  };

  return (
    <div className="flex gap-1 items-center">
      {/* Start Date Picker */}
      <div className="w-full">
        <DatePicker
          selected={startDate}
          onChange={(date: Date | null) => {
            setStartDate(date);
            if (date && endDate && date > endDate) {
              setEndDate(null);
            }
          }}
          dateFormat="yyyy-MM-dd"
          className="text-sm w-full py-3 px-4 text-[#666] bg-[#F4F4F4] rounded-[50px]  "
          placeholderText="Start Date"
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
              <button
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
              >
                {"<"}
              </button>
              <div>
                <select
                  value={date.getFullYear()}
                  onChange={({ target: { value } }) =>
                    changeYear(parseInt(value))
                  }
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
                  onChange={({ target: { value } }) =>
                    changeMonth(parseInt(value))
                  }
                >
                  {[
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                  ].map((month, index) => (
                    <option key={index} value={index}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
              >
                {">"}
              </button>
            </div>
          )}
        />
      </div>

      {/* End Date Picker */}
      <div className="w-full ">
        <DatePicker
          selected={endDate}
          onChange={(date: Date | null) => setEndDate(date)}
          dateFormat="yyyy-MM-dd"
             className="text-sm w-full py-3 px-4 text-[#666] bg-[#F4F4F4] rounded-[50px]  "
          placeholderText="End Date"
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
              <button
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
              >
                {"<"}
              </button>
              <div className="w-[60%] flex p-1 bg-[#e3e3e3] rounded-md ">
                <select
                  className="w-full bg-transparent"
                  value={date.getFullYear()}
                  onChange={({ target: { value } }) =>
                    changeYear(parseInt(value))
                  }
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
                  className="w-full bg-transparent"
                  value={date.getMonth()}
                  onChange={({ target: { value } }) =>
                    changeMonth(parseInt(value))
                  }
                >
                  {[
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                  ].map((month, index) => (
                    <option key={index} value={index}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
              >
                {">"}
              </button>
            </div>
          )}
        />
      </div>

      <div className="min-w-[77px] ">
        <button
          onClick={handleSearch}
          className="search-button !text-sm w-full h-[40px] rounded-[10px] inline-block bg-[#1c9d41] text-white  transition"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default StartEndDatePicked;
