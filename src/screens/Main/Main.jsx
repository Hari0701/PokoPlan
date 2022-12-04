import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Huddle from "./Huddle";
import { useLocation } from "react-router-dom";
import PlanningPoker from "./PlanningPoker";
export default function Main() {
  const [story, setStory] = useState("");
  const [screen, setScreen] = useState(1);
  const handleChange1 = (e) => {
    setStory(e.target.value);
  };
  const location = useLocation();
  console.log(location);
  if (location.state.roomId != null) {
    setScreen(2);
  }
  const handleSubmit = () => {
    setScreen(2);
  };
  return (
    <div className="h-screen">
      {screen == 2 ? (
        <div>
          <Navbar />
          <div className="p-10  m-0">
            <h2 className="font-bold text-lg">Story Line: {story}</h2>
            <div className="grid bg-white grid-cols-2">
              <PlanningPoker />
              <Huddle />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center p-4 justify-center">
          <div className="bg-grey shadow-md rounded px-8 pt-6 pb-8 mb-4  relative w-80  rounded-lg shadow">
            <div className="mb-4">
              <h2 className="text-black font-bold text-lg">
                Enter the StoryLine:
              </h2>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="peerName"
                type="text"
                value={story}
                onChange={handleChange1}
              />
              <button
                className="bg-blue w-40 mt-4 text-white"
                onClick={handleSubmit}
              >
                submit
              </button>
            </div>
          </div>{" "}
        </div>
      )}
    </div>
  );
}
