import React from "react";
import { Card, CardContent, CardTitle } from "./ui/card";

const WeatherInfoDetailCard = ({ label, value, element }) => {
  return (
    <>
      <Card className="w-[47%] border-0 bg-slate-600 p-7 text-white max-[893px]:w-[46%] max-[800px]:w-[100%]">
        <CardTitle className="text-md">{label}</CardTitle>
        <CardContent className="mt-5 h-5/6 p-0 flex gap-3">
          <span>{element}</span>
          <span>{value}</span>
        </CardContent>
      </Card>
    </>
  );
};

export default WeatherInfoDetailCard;
