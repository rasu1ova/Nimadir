import { useEffect, useState } from "react";

import "./weather.css";
import "../../App.css";
function Weather() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState(false);
  const [chclass, setChclass] = useState("");
  const [notfound, setNotFound] = useState(false);
  useEffect(() => {
    if (location.length > 1) {
      console.log(location);
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8ed59940bccc8820daed183cab367e50`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error: " + response.status);
          }
          return response.json();
        })
        .then((wdata) => {
          const weaa = wdata.weather[0].main;
          let strtext = JSON.stringify(weaa);
          let weaName = strtext.replace(/"/g, "").trim();
          // if (setSearch() == false) {
          //   setData("");
          // }
          setChclass(weaName);
          setData(wdata);
          console.log(wdata);
          setNotFound(false);
        })
        .catch((err) => {
          console.log(err.message);
          setNotFound(true);
        });
      setSearch(false);
    }
  }, [search]);
  function Press() {
    setSearch(true);
  }

  return (
    <>
      <div id="weather" className={chclass ? `${chclass}` : ""}>
        <label htmlFor="search">
          <input
            type="search"
            name=""
            id=""
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            onKeyPress={(event) => {
              if (event.key == "Enter") {
                Press();
              }
            }}
            placeholder="Enter location"
          />
        </label>

        {location.length > 2 && !notfound ? (
          <>
            <div className="location">
              <h1>{data.name}</h1>
            </div>
            <div className="temp">
              {data.main ? (
                <h2> {Math.round(data.main.temp - 273)}°C</h2>
              ) : null}
            </div>
            <div className="temp-main">
              {data.weather ? <h2>{data.weather[0].main}</h2> : null}
            </div>
            <div className="description">
              {data.weather ? <p>{data.weather[0].description}</p> : null}
              {/* {data.weather ? <p>{data.weather[0].icon}</p> : null} */}
            </div>
            <div className="humidly">
              {data.weather ? (
                <p>
                  Humidly: <i>{data.main.humidity}%</i>
                </p>
              ) : null}
            </div>
            <div className="wind">
              <div className="card">
                {data.weather ? (
                  <p>
                    <span>Deg</span>:<br />
                    <i>{data.wind.deg}</i>
                  </p>
                ) : null}
              </div>
              <div className="card">
                {data.weather ? (
                  <p>
                    <span>Gust</span>:<br />
                    <i>{data.wind.gust}</i>
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="card">
                {data.weather ? (
                  <p>
                    <span>Speed</span>:<br />
                    <i>{data.wind.speed}</i>
                  </p>
                ) : null}
              </div>
            </div>
            <div className="pressure">
              {data.main ? (
                <p>
                  <span>Pressure</span>:<i>{data.main.pressure}</i>
                </p>
              ) : (
                ""
              )}
            </div>
          </>
        ) : (
          <>
            <p className="red">Qayta kiriting </p>
          </>
        )}
      </div>
    </>
  );
}

export default Weather;
