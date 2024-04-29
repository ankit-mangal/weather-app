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
    <div className="w-8/12 mt-8 max-[800px]:w-5/12 ">
      <LocationComponent handleCityChange={handleCityChange}/>
      <WeatherInfoComponent cityName={cityName}/>
      <Footer/>
    </div>
  );
};

export default WeatherComponent;
