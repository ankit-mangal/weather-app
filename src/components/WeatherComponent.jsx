import React, { useEffect, useState } from "react";
import WeatherInfoComponent from "./WeatherInfoComponent";
import LocationComponent from "./LocationComponent";
import Footer from "./Footer";
// import useWeatherData from "@/hooks/useWeatherData";
// import useCityName from "../hooks/useCityName";

const WeatherComponent = () => {

  const [cityName, setCityName] = useState("mumbai");

  const handleCityChange = (nextCity) => {
    setCityName(nextCity)
  }

  return (
    <div className="w-10/12 mt-8 min-[1000px]:w-8/12 ">
      <LocationComponent handleCityChange={handleCityChange}/>
      <WeatherInfoComponent cityName={cityName}/>
      <Footer/>
    </div>
  );
};

export default WeatherComponent;
