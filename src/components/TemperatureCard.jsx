import React from "react";
import { Cloudy, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const TemperatureCard = ({
  weatherData,
  formatTemperature,
  getCurrentDate,
}) => {
  const { name, main, weather } = weatherData;

  return (
    <Card className="w-[298px] min-w-[40%] h-auto bg-slate-600 p-7 text-white max-[800px]:w-[100%]">
      <CardContent className="mt-5 h-5/6 p-0">
        <Cloudy size="100" strokeWidth="1" />
        <div className="text-[45px] my-2 font-medium">
          {formatTemperature(main.temp)}
          <span>&#176;C</span>
        </div>
        <div className="mt-1 font-medium">{weather[0].main}</div>
        <div className="h-[1px] bg-white my-6"></div>
        <div className="mt-5">
          <div className="flex">
            <span className="mr-3">
              <MapPin size="21" strokeWidth="2" />
            </span>
            <span className="font-medium">{name}</span>
          </div>
          <div className="flex mt-4">
            <span className="mr-3">
              <Calendar size="21" strokeWidth="2" />
            </span>
            <span className="font-medium">{getCurrentDate()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TemperatureCard;
