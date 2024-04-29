export const formatTemperature = (tempKelvin) => {
  const tempCelsius = tempKelvin - 273.15;
  return tempCelsius.toFixed(1); // Round to 1 decimal place
};

export const convertTimestampToTime = (timestamp) => {
  const date = new Date(timestamp * 1000); // Convert timestamp to milliseconds
  const hours = date.getHours().toString().padStart(2, "0"); // Pad with leading zeros if necessary
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};

export const getCurrentDate = () => {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0'); // Pad with leading zeros if necessary
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based, so we add 1
    const year = today.getFullYear();
    return `${year}-${month}-${day}`;
  };