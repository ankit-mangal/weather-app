import { useEffect, useState } from "react";

const apiKey = import.meta.env.VITE_API_KEY;

const useWeatherData = (cityName) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    setLoading(true);
    setError(null);

    try {
      const locationResponse = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`
      );
      if (!locationResponse.ok) {
        throw new Error("Failed to fetch location data");
      }

      const locationData = await locationResponse.json();
      const { lat, lon } = locationData[0];

      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
      );
      if (!weatherResponse.ok) {
        throw new Error("Failed to fetch weather data");
      }

      const data = await weatherResponse.json();
      setWeatherData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (cityName) {
      fetchWeatherData();
    }
  }, [cityName]);

  return { weatherData, loading, error };
};

export default useWeatherData;
