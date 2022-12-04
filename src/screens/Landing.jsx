import "../styles.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

function App() {
  let [roomId, setRoomId] = useState("");
  let [peerName, setPeerName] = useState("");
  let [screen, setScreen] = useState(1);
  const navigate = useNavigate();

  const handleSubmit1 = () => {
    navigate("/pokoplan", { state: { peerName: peerName } });
  };
  const handleSubmit2 = () => {
    navigate("/pokoplan", { state: { roomId: roomId, peerName: peerName } });
  };

  return (
    <div className="h-screen">
      <nav className="bg-black mt-0 h-80 fixed z-10 top-0 inset-x-0">
        <h1 className="text-blue text-7xl font-extrabold mt-20">POKOPLAN</h1>
        <div className="arrow bounce"></div>
      </nav>
      {screen == 2 && roomId == "" ? (
        <div className="flex items-center p-4 justify-center">
          <div className="bg-grey shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-80 w-80  relative w-80  rounded-lg shadow">
            <div className="mb-4">
              <h2 className="text-black font-bold text-lg">Enter Your Name:</h2>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="peerName"
                type="text"
                value={peerName}
                onChange={(e) => setPeerName(e.target.value)}
              />
              <button
                className="bg-blue w-40 mt-4 text-white"
                onClick={handleSubmit1}
              >
                submit
              </button>
            </div>
          </div>{" "}
        </div>
      ) : (
        <div className="flex items-center p-4 justify-center">
          <div className="bg-grey shadow-md rounded px-8 pt-6 pb-8 mb-4 relative mt-80 w-80  rounded-lg shadow">
            <div className="mb-4">
              <button
                className="bg-black w-full text-blue"
                onClick={() => setScreen(2)}
              >
                Create Room
              </button>

              <h2 className="text-black">or</h2>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="roomId"
                type="text"
                value={roomId ? roomId : ""}
                onChange={(e) => setRoomId(e.target.value)}
                placeholder="Enter Room Id"
              />
              {screen == 1 && roomId ? (
                <button
                  className="bg-blue w-40 mt-4 text-white"
                  onClick={() => setScreen(2)}
                >
                  submit
                </button>
              ) : (
                <button
                  className="bg-blue w-40 mt-4 text-white"
                  onClick={handleSubmit2}
                >
                  submit
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
