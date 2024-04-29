import React, { useEffect, useState } from "react";
import WeatherCards from "./WeatherCards";
import useWeatherData from "../hooks/useWeatherData";

const apiKey = import.meta.env.VITE_API_KEY;

const WeatherInfoComponent = ({ cityName }) => {
  const { weatherData, loading } = useWeatherData(cityName);

  return (
    <div>
      <WeatherCards weatherData={weatherData} loading={loading} />
    </div>
  );
};

export default WeatherInfoComponent;
