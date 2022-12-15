import { useEffect, useState } from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherList from "./components/WeatherList";

function App() {
  const [latInput, setLatInput] = useState("");
  const [longInput, setLongInput] = useState("");
  const [weatherItems, setWeatherItems] = useState([]);

  function handleLatChange(event) {
    setLatInput(event.target.value);
  }

  function handleLongChange(event) {
    setLongInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latInput}&longitude=${longInput}&current_weather=true&hourly=temperature_2m`;

    // Fetch open meteo api
    fetch(weatherUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Add a new item to weatherItems with the latitude, longitude, and temp
        const newItem = {
          lat: latInput,
          long: longInput,
          temperature: data.current_weather.temperature,
        };

        setWeatherItems([...weatherItems, newItem]);
      });

    setLatInput("");
    setLongInput("");
  }

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div>
        <WeatherForm
          latInput={latInput}
          longInput={longInput}
          handleLatChange={handleLatChange}
          handleLongChange={handleLongChange}
          handleSubmit={handleSubmit}
        />
        <WeatherList items={weatherItems} />
      </div>
    </div>
  );
}

export default App;
