import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useState } from "react";
import { UsersIcon } from "@heroicons/react/solid";
import { useRouter } from "next/dist/client/router";

const Calender = ({
  selectionRange,
  setEndDate,
  setStartDate,
  noOfGustes,
  setNoOfGustes,
  setSearchInput,
  handleSearch,
}) => {
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const resetInput = () => {
    setSearchInput("");
  };

  return (
    <div className="flex flex-col col-span-3 mx-auto my-3">
      <DateRangePicker
        ranges={[selectionRange]}
        minDate={new Date()}
        rangeColors={["#EF9E09"]}
        onChange={handleSelect}
      />
      <div className="flex items-center border-b mb-4">
        <h2 className="text-2xl flex-grow font-semibold">Number of Gustes</h2>
        <UsersIcon className="h-5" />
        <input
          type="number"
          className="w-12 pl-2 text-lg outline-none text-yellow-500"
          value={noOfGustes}
          min={1}
          onChange={(e) => setNoOfGustes(e.target.value)}
        />
      </div>
      <div className="flex">
        <button
          onClick={resetInput}
          className="flex-grow text-gray-500 cursor-pointer"
        >
          Cancle
        </button>
        <button
          onClick={handleSearch}
          className="flex-grow text-yellow-500 cursor-pointer"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Calender;
