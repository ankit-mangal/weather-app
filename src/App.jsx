import { useEffect, useState } from "react";
import "./App.css";
import WeatherComponent from "./components/WeatherComponent";


function App() {

  return (
    <>
      <div className="flex justify-center min-h-[100vh] bg-slate-800 font-sans">
        <WeatherComponent />
      </div>
    </>
  );
} 

export default App;
