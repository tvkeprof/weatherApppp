import { useState } from "react";
import countriesData from "./data";
import PineconeLogoRight from "./icons/Pinecone-logo-right";
import PineconeLogoLeft from "./icons/Pinecone-logo-left";
import Location from "./icons/Location";
import Home from "./icons/HomeSvg";
import Pin from "./icons/PinSvg";
import Heart from "./icons/HeartSvg";
import User from "./icons/UserSvg";
function App() {
  const [count, setCount] = useState(0);
  console.log(countriesData);

  return (
    <>
      <div className="w-full h-screen bg-sky-400 flex relative justify-center">
        <div className="w-[170px] h-[170px] absolute rounded-full bg-orange-500 top-[100px] left-[300px]"></div>
        <div className="w-1/2 h-screen bg-gray-200 flex justify-center items-center">
          <div className="w-[330px] h-[800px] bg-white/50z-10 flex justify-center  rounded-[50px] px-[40px] py-[60px]  backdrop-blur-md z-10">
            <div className="flex">
              <div>
                <p className="text-gray-400">January14,2025</p>
                <h1 className="h-12 text-5xl font-extrabold text-gray-900">
                  Ulaanbaatar
                </h1>
              </div>
              <Location />
            </div>
            <img
              className="w-[250px] h-[250px] absolute top-[130px] "
              src="./icon.png"
              alt=""
            />
            <h1 className="text-transparent bg-clip-text font-extrabold text-[110px] -mt-10 bg-gradient-to-b from-black to-white absolute top-[370px]">
              -18˚
            </h1>
            <p className="font-extrabold mb-12 h-6 absolute top-[480px] left-[50px] text-orange-500">
              Sunny
            </p>

            <div className="flex absolute top-[540px] gap-[30px]">
              <Home />
              <Pin />
              <Heart />
              <User />
            </div>
          </div>
        </div>
        <div className="w-[130px] h-[130px] absolute rounded-full bg-indigo-500 top-[900px] right-[33 0px] mix-blend-lighten"></div>
        <div className="w-1/2 h-screen bg-gray-900 flex justify-center items-center">
          <div className="w-[330px] h-[800px] bg-gray-700/50z-10 flex justify-center rounded-[50px] backdrop-blur-md z-10 px-[40px] py-[60px]">
            <div className="flex">
              <div>
                <p className="text-gray-400">January14,2025</p>
                <h1 className="h-12 text-5xl font-extrabold text-white ">
                  Ulaanbaatar
                </h1>
              </div>
              <Location />
            </div>
            <img
              className="w-[250px] h-[250px] absolute top-[130px] "
              src="./moon.png"
              alt=""
            />
            <h1 className="text-transparent bg-clip-text font-extrabold text-[110px] -mt-10 bg-gradient-to-b from-black to-white absolute top-[370px]">
              -26˚
            </h1>
            <p className="font-extrabold mb-12 h-6 absolute top-[480px] left-[50px] text-sky-300">
              Snow
            </p>

            <div className="flex absolute top-[540px] gap-[30px]">
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
