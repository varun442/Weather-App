import { useState } from "react";
import Search from "./Components/search/search";
import CurrentWeather from "./Components/current-weather/current-weather";
import Forecast from "./Components/forecast-weather/forecast";
import CurrentPollution from "./Components/current-pollution/currentpollution";
import ForecastPollution from "./Components/forecast-pollution/forecastpollution";
import {
  WEATHER_API_URL,
  WEATHER_API_KEY,
  POLLUTION_API_URL,
  POLLUTION_API_KEY,
} from "./api";
import "./App.css";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [currentPollution, setCurrentPollution] = useState(null);
  const [toggle, setToggle] = useState({
    button1: false,
    button2: false,
    button3: false,
  });

  const handleClick = (buttonId) => {
    setToggle({ ...toggle, [buttonId]: !toggle[buttonId] });
  };
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const currentPollutionFetch = fetch(
      `${POLLUTION_API_URL}?lat=${lat}&lon=${lon}&appid=${POLLUTION_API_KEY}`
    );

    Promise.all([currentWeatherFetch, forecastFetch, currentPollutionFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();
        const currentPollution = await response[2].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
        setCurrentPollution({ ...currentPollution });
      })
      .catch(console.log);

    console.log(forecast);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <button
        onClick={() => {
          setToggle({ ...toggle, button1: !toggle.button1 });
        }}
      >
        Weather Forecast
      </button>
      <button
        onClick={() => {
          setToggle({ ...toggle, button2: !toggle.button2 });
        }}
      >
        Current Pollution
      </button>
      <button
        onClick={() => {
          setToggle({ ...toggle, button3: !toggle.button3 });
        }}
      >
        Forecast Pollution
      </button>
      {/* <button onClick={handleClick("button2")}>Current Pollution</button> */}
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && toggle.button1 && <Forecast data={forecast} />}
      {currentPollution && toggle.button2 && <CurrentPollution data={currentPollution} />}
      <ForecastPollution />
    </div>
  );
}

export default App;
