import { useState } from "react";
import Subtract from "/Users/24LP8057/Downloads/Subtract.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="w-full h-screen bg-sky-400 flex">
      <div className="w-1/2 h-screen bg-gray-200"></div>
      <div className="w-1/2 h-screen bg-gray-900"></div>
        <div className="w-[140px] h-[140px] rounded-full bg-gray-500 "></div>
    </div>
    </>
  );
}

export default App;
