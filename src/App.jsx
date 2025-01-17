import { useEffect, useState } from "react";
import countriesData from "./data";
import PineconeLogoRight from "./icons/Pinecone-logo-right";
import PineconeLogoLeft from "./icons/Pinecone-logo-left";
import Location from "./icons/Location";
import Home from "./icons/HomeSvg";
import Pin from "./icons/PinSvg";
import Heart from "./icons/HeartSvg";
import User from "./icons/UserSvg";
import Search from "./icons/SearchSvg";
import { getAllCities } from "./utils/get-all-cities";
import SearchInput from "./components/Search";
import LeftSide from "./components/LeftSide";
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
      // setWeatherData(result);
      // console.log(result);
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
      return "/icon.png";
    } else if (conditionText.includes("Cloud" && "cloud" && "Overcast" && "Fog")) {
      return "/cloud.png";
    } else if (conditionText.includes("Rain" && "rain")) {
      return "/rain.png";
    } else if (conditionText.includes("Snow" && "snow" && "sleet" && "freezing")) {
      return "/snow.png";
    } else if (conditionText.includes("Thunderstorm" && "thunder")) {
      return "/thunderstorm.png"
    } else if (conditionText.includes("Wind" && "wind")) {
      return "/wind.png"
    }else return "/icon.png";
  };

  const getWeatherNightImage = () => {
    const nightConditionText = 
    weatherData.forecast?.forecastday[0]?.hour[0]?.condition.text || "";
    console.log(nightConditionText)
    if (nightConditionText.includes ("Clear")) {
      return "/nightClear.png"; 
    } else if (nightConditionText.includes ("Cloud" && "cloud" && "Overcast" && "Fog" && "Cloudy")) {
      return "/nightCloud.png"; 
    }else if (nightConditionText.includes ("Wind" && "wind")) {
      return "/nightWind.png";
    }else if (nightConditionText.includes ("Rain" && "rain")) {
      return "/nightRain.png";
    }else if (nightConditionText.includes ("Snow" && "snow" && "sleet" && "freezing")) {
      return "/nightSnow.png";
    }else if (nightConditionText.includes ("Thunderstorm" && "thunder")) {
      return "/nightThunderstorm.png";
    } else return "/nightClear.png"
  }

  



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
      <div className="w-full h-screen bg-sky-400 flex relative justify-center">
        <div className=" absolute flex top-[100px]">
          <SearchInput searchValue={searchValue} onChange={onChange} filteredData={filteredData} handleClickCtiy={handleClickCtiy} />
        </div>
        <div className="w-[170px] h-[170px] absolute rounded-full bg-orange-500 top-[100px] left-[300px]"></div>
        <LeftSide weatherData={weatherData} getWeatherimage={getWeatherimage} selectedCity={selectedCity} />

        <div className="w-[130px] h-[130px] absolute rounded-full bg-indigo-500 top-[900px] right-[330px] mix-blend-lighten"></div>
        <div className="w-1/2 h-screen bg-gray-900 flex justify-center items-center">
          <div className="w-[330px] h-[800px] bg-gray-700/50z-10 flex justify-center rounded-[50px] backdrop-blur-md z-10 px-[40px] py-[60px]">
            <div className="flex">
              <div>
                <p className="text-gray-400">
                  {weatherData?.formattedDate || "Loading..."}
                </p>
                <h1 className="h-12 text-5xl font-extrabold text-white ">
                  {selectedCity}
                </h1>
              </div>
              <Location />
            </div>
            <img
              className="w-[250px] h-[250px] absolute top-[200px] "
              src={getWeatherNightImage()}
              alt=""
            />
            <h1 className="text-transparent bg-clip-text font-extrabold text-[110px] -mt-10 bg-gradient-to-b from-black to-white absolute top-[470px]">
              {weatherData?.night?.temp
                ? `${weatherData.night.temp}˚`
                : "Loading..."}
            </h1>
            <p className="font-extrabold mb-12 h-6 absolute top-[580px] left-[50px] text-sky-300">
              {weatherData?.night?.condition || "Loading..."}
            </p>

            <div className="flex absolute top-[640px] gap-[30px]">
              <Home />
              <Pin />
              <Heart />
              <User />
            </div>
          </div>
        </div>
        <div className="w-[1000px] h-[1000px] rounded-full bg-none border border-slate-400 absolute inset-0 m-auto"></div>
        <div className="w-[800px] h-[800px] rounded-full bg-none border border-slate-400 absolute inset-0 m-auto"></div>
        <div className="w-[540px] h-[540px] rounded-full bg-none border border-slate-400 absolute inset-0 m-auto"></div>
        <div className="w-[340px] h-[340px] rounded-full bg-none border border-slate-400 absolute inset-0 m-auto"></div>
        <div className=" flex justify-center items-center gap-[20px] w-[140px] h-[140px] rounded-full bg-gray-200 border-slate-400 border absolute inset-0 m-auto">
          <PineconeLogoRight />
          <PineconeLogoLeft />
        </div>
      </div>
    </>
  );
}

export default App;

