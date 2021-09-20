import { useEffect, useState } from "react";
import axios from "axios";
import "./Style.css";
import { ListCards } from "./component/ListCards";

function App() {
  const key = "f864be8131bfca0f1bb3e3d7c89af016";
  const [country, setCountry] = useState("");
  const [weatherData, setWeatherData] = useState();

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=f864be8131bfca0f1bb3e3d7c89af016&units=metric`
      );
      console.log(data);
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <div className="App">
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="search for a city"
        />
        <button onClick={() => fetchData()}>Search</button>
      </div>
      <div>{weatherData ? <ListCards data={weatherData} /> : null}</div>
      <div className="footer">
        <h2>Weather App 'API workshope'</h2>
        <p>Done by Harrabi Oussema&#128155;</p>
      </div>
    </div>
  );
}
export default App;
