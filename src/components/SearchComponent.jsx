import React, { useState, useMemo } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
// import useCityName from "../hooks/useCityName";
// import useWeatherData from "../hooks/useWeatherData";

const SearchComponent = ({ cityName, handleCityChange }) => {
  const [city, setCity] = useState('')

  const handleInput = (event) => {
    setCity(event.target.value)
  }

  const handleSearch = () => {
    handleCityChange(city);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
    }
  };

  return (
    <>
      <Input
        type="text"
        placeholder="Mumbai"
        className="min-w-[40%] bg-slate-600 text-white py-6 px-3 text-lg placeholder-slate-400"
        value={city}
        onChange={handleInput}
        onKeyDown={handleKeyPress}
        spellCheck='false'
      />
      <Button
        size="icon"
        className="bg-slate-600 hover:bg-slate-600 py-6 px-4 w-14 max-[800px]:hidden"
        onClick={handleSearch}
      >
        <Search className="h-6 w-6 text-white" />
      </Button>
    </>
  );
};

export default SearchComponent;
