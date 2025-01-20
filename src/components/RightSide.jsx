import Heart from "../icons/HeartSvg";
import Home from "../icons/HomeSvg";
import Location from "../icons/Location";
import Pin from "../icons/PinSvg";
import User from "../icons/UserSvg";

const RightSide = (props) => {
  const { weatherData, selectedCity, getWeatherNightImage } = props;

  return (
    <>
      <div className="w-1/2 h-screen bg-gray-900 flex justify-center items-center">
        <div className="relative w-[330px] h-[800px]">
          <div className="w-[130px] h-[130px] absolute rounded-full bg-indigo-500 -bottom-[50px] -right-[50px] mix-blend-lighten"></div>
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
      </div>
    </>
  );
};
export default RightSide;
