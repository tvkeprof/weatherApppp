import Heart from "../icons/HeartSvg"
import Home from "../icons/HomeSvg"
import Location from "../icons/Location"
import Pin from "../icons/PinSvg"
import User from "../icons/UserSvg"



const LeftSide = (props) =>{
    const { weatherData, getWeatherimage, selectedCity

    }=props
    return(
        <>
                <div className="w-1/2 h-screen bg-gray-200 flex justify-center items-center">
          <div className="w-[330px] h-[800px] bg-white/50z-10 flex justify-center  rounded-[50px] px-[40px] py-[60px]  backdrop-blur-md z-10">
            <div className="flex">
              <div>
                <p className="text-gray-400">
                  {weatherData?.formattedDate || "Loading..."}
                </p>
                <h1 className="h-12 text-5xl font-extrabold text-gray-900">
                  {selectedCity}
                </h1>
              </div>
              <Location />
            </div>
            <img
              className="w-[250px] h-[250px] absolute top-[200px] "
              src={getWeatherimage()}
              alt=""
            />
            <h1 className="text-transparent bg-clip-text font-extrabold text-[110px] -mt-10 bg-gradient-to-b from-black to-white absolute top-[470px]">
              {weatherData?.day?.temp
                ? `${weatherData.day.temp}˚`
                : "Loading..."}
            </h1>
            <p className="font-extrabold mb-12 h-6 absolute top-[580px] left-[50px] text-orange-500">
              {weatherData?.day?.condition || "Loading..."}
            </p>

            <div className="flex absolute top-[640px] gap-[30px]">
              <Home />
              <Pin />
              <Heart />
              <User />
            </div>
          </div>
        </div>
        </>
    )
}
export default LeftSide