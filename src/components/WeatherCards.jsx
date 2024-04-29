import React from "react";
import { Card, CardContent } from "./ui/card";
import { Droplets, CircleGauge, CloudFog, Wind, Sunrise, Sunset } from "lucide-react";
import WeatherInfoDetailCard from "./WeatherInfoDetailCard";
import {formatTemperature, convertTimestampToTime, getCurrentDate} from "../utils/weatherUtils"
import TemperatureCard from "./TemperatureCard";

const WeatherCards = ({ weatherData }) => {
  if (!weatherData) {
    return (
      <Card className="w-[298px] min-w-[40%] h-auto bg-slate-600 p-7 text-white max-[800px]:w-[100%] my-8">
        <CardContent className="m-5 h-5/6 p-0">{<p>Loading...</p>}</CardContent>
      </Card>
    );
  }

  const { main, wind, sys, visibility } = weatherData;

  const weatherDetails = [
    { label: "Humidity", value: `${main.humidity}%`, element: <Droplets size="24" strokeWidth="2"/> },
    { label: "Pressure", value: `${main.pressure} hPa`, element: <CircleGauge size="24" strokeWidth="2"/> },
    { label: "Visibility", value: `${visibility / 1000} km`, element: <CloudFog size="24" strokeWidth="2"/> },
    { label: "Wind Speed", value: `${(wind.speed * 3.6).toFixed(0)} km/h`, element: <Wind size="24" strokeWidth="2"/> },
    { label: "Sunrise", value: `${convertTimestampToTime(sys.sunrise)}`, element: <Sunrise size="24" strokeWidth="2"/> },
    { label: "Sunset", value: `${convertTimestampToTime(sys.sunset)}`, element: <Sunset size="24" strokeWidth="2"/>},
  ];

  return (
    <>
      {weatherData && (
        <>
          <div className="mt-7 text-xl text-white font-semibold">
            Today Overview
          </div>
          <div className="flex space-x-6 my-5 max-[800px]:flex-wrap max-[800px]:space-x-0 max-[800px]:gap-6">
            <TemperatureCard weatherData={weatherData} formatTemperature={formatTemperature} getCurrentDate={getCurrentDate}/>
            <div className="flex flex-wrap justify-evenly gap-5 max-[800px]:flex-col max-[800px]:w-[100%]">
              {weatherDetails.map((detail, index) => (
                <WeatherInfoDetailCard
                  key={index}
                  label={detail.label}
                  value={detail.value}
                  element={detail.element}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default WeatherCards;
