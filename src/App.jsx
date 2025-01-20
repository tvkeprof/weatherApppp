import { useEffect, useState } from "react";
import { getAllCities } from "./utils/get-all-cities";
import SearchInput from "./components/Search";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import CenterCircle from "./components/CenterCircle";
function App() {
  const [searchValue, setSearchValue] = useState("");
  const [allCities, setAllCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Ulaanbaatar");
  const [filteredData, setFilteredData] = useState([]);
  const [weatherData, setWeatherData] = useState({});
  console.log(weatherData);
  const weatherApiKey = "e956f30c86eb4d49b8b90955251501";

  const getCountries = async () => {
    try {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries"
      );
      const result = await response.json();
      const countries = result.data;
      const cities = getAllCities(countries);
      setAllCities(cities);
    } catch (error) {
      console.log(error);
    }
  };

  const getWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${selectedCity}`
      );
      const result = await response.json();
      const dayWeather = result.forecast.forecastday[0].day;
      const nightWeather = result.forecast.forecastday[0].hour.filter(
        (hour) => hour.is_day === 0
      )[0];
      const formattedDate = new Date(
        result.location.localtime
      ).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      setWeatherData({
        ...result,
        formattedDate,
        day: {
          temp: dayWeather.avgtemp_c,
          condition: dayWeather.condition.text,
          icon: dayWeather.condition.icon,
        },
        night: {
          temp: nightWeather?.temp_c,
          condition: nightWeather?.condition.text,
          icon: nightWeather?.condition.icon,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleClickCtiy = (city) => {
    const cityName = city.split(",")[0];
    setSelectedCity(cityName);
    setSearchValue("");
    setFilteredData([]);
  };

  const getWeatherimage = () => {
    const conditionText =
      weatherData.forecast?.forecastday[0]?.day?.condition?.text || "";
    if (conditionText.includes("Sunny")) {
      return "/icon.webp";
    } else if (
      conditionText.includes(
        "Cloud" && "cloud" && "Overcast" && "Fog" && "Cloud"
      )
    ) {
      return "/cloud.webp";
    } else if (conditionText.includes("Rain" && "rain")) {
      return "/rain.webp";
    } else if (
      conditionText.includes("Snow" && "snow" && "sleet" && "freezing")
    ) {
      return "/snow.webp";
    } else if (conditionText.includes("Thunderstorm" && "thunder")) {
      return "/thunderstorm.webp";
    } else if (conditionText.includes("Wind" && "wind")) {
      return "/wind.webp";
    } else return "/icon.webp";
  };

  const getWeatherNightImage = () => {
    const nightConditionText =
      weatherData.forecast?.forecastday[0]?.hour[0]?.condition.text || "";
    console.log(nightConditionText);
    if (nightConditionText.includes("Clear")) {
      return "/nightClear.webp";
    } else if (
      nightConditionText.includes(
        "Cloud" && "cloud" && "Overcast" && "Fog" && "Cloudy"
      )
    ) {
      return "/nightCloud.webp";
    } else if (nightConditionText.includes("Wind" && "wind")) {
      return "/nightWind.webp";
    } else if (nightConditionText.includes("Rain" && "rain")) {
      return "/nightRain.webp";
    } else if (
      nightConditionText.includes("Snow" && "snow" && "sleet" && "freezing")
    ) {
      return "/nightSnow.webp";
    } else if (nightConditionText.includes("Thunderstorm" && "thunder")) {
      return "/nightThunderstorm.webp";
    } else return "/nightClear.webp";
  };

  const onChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);

    if (value.trim() === "") {
      setFilteredData([]);
    } else {
      const filtered = allCities
        .filter((el) => el.toLowerCase().startsWith(value.toLowerCase()))
        .slice(0, 5);

      setFilteredData(filtered);
    }
  };
  useEffect(() => {
    getCountries();
  }, []);
  useEffect(() => {
    if (selectedCity) {
      getWeatherData();
    }
  }, [selectedCity]);

  return (
    <>
      <div className="w-full h-screen bg-sky-400 flex relative justify-center overflow-hidden">
          <CenterCircle/>
        <div className=" absolute flex top-[100px]">
          <SearchInput
            searchValue={searchValue}
            onChange={onChange}
            filteredData={filteredData}
            handleClickCtiy={handleClickCtiy}
          />
        </div>

        <LeftSide
          weatherData={weatherData}
          getWeatherimage={getWeatherimage}
          selectedCity={selectedCity}
        />

        <RightSide
          weatherData={weatherData}
          getWeatherNightImage={getWeatherNightImage}
          selectedCity={selectedCity}
        />
      </div>
    </>
  );
}

export default App;
