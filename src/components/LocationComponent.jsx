import React from "react";
import { Cloud } from "lucide-react";
import SearchComponent from "./SearchComponent";

const LocationComponent = ({ cityName, handleCityChange }) => {
  return (
    <div className="min-w-[40%] flex gap-3 max-[800px]:flex-wrap">
      <div className="flex justify-center items-center gap-2 px-30 bg-slate-600 w-40 rounded-md text-white max-[800px]:w-[100%] max-[800px]:h-[44px] max-[800px]:justify-start max-[800px]:px-3">
        <Cloud strokeWidth="1.5" />
        <span className="text-lg select-none">weather</span>
      </div>
      <div className="flex w-[100%] gap-3">
        <SearchComponent
          cityName={cityName}
          handleCityChange={handleCityChange}
        />
      </div>
    </div>
  );
};

export default LocationComponent;
