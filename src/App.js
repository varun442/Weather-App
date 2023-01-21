import { useState } from "react";
import "./App.css";
import CurrentWeather from "./Components/current-weather/current-weather";
import Forecast from "./Components/forecast-weather/forecast-weather";
import { WEATHER_API_KEY } from "./Components/search/api";
import { WEATHER_API_URL } from "./Components/search/api";
import Search from "./Components/search/Search";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  const onSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    // console.log(lat + " " + lon);
    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    // https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    // currentWeatherFetch
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => setCurrentWeather({ city: searchData.label, ...data }));

    // forecastFetch
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => setForecastWeather({ city: searchData.label, ...data }));

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecastWeather({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
  };
  

  // console.log(currentWeather)
  // console.log(forecastWeather)
  return (
    <div className="App">
      <Search onSearchChange={onSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather}/>}
      {forecastWeather && <Forecast data={forecastWeather}/>}
    </div>
  );
}

export default App;
