import { useEffect, useRef, useState } from "react";
import "../../styles.css";
import { useLocation } from "react-router-dom";
import {
  HuddleClientProvider,
  getHuddleClient,
  useRootStore,
} from "@huddle01/huddle01-client";
import PeerVideoAudioElem from "../../components/PeerVideoAudioElem";
import { useHuddleStore } from "@huddle01/huddle01-client/hooks";
import React from "react";

function App() {
  const huddleClient = getHuddleClient(
    "8f3b87c02ec66a97bb1e4dcf3f91ef199e82b35a68831c1f4f2081900a779ac7"
  );
  const stream = useRootStore((state) => state.stream);
  const enableStream = useRootStore((state) => state.enableStream);
  const pauseTracks = useRootStore((state) => state.pauseTracks);
  const isCamPaused = useRootStore((state) => state.isCamPaused);
  const isMicPaused = useRootStore((state) => state.isMicPaused);
  const peers = useRootStore((state) => state.peers);
  const peerId = useRootStore((state) => state.peerId);
  const lobbyPeers = useRootStore((state) => state.lobbyPeers);
  const roomState = useRootStore((state) => state.roomState);
  let roomId = useHuddleStore((state) => state.roomState.roomId);
  let displayName = useHuddleStore((state) => state.displayName);

  if (useLocation().state) {
    const { state } = useLocation();
    if (useLocation().state.roomId) {
      roomId = state.roomId;
      displayName = state.peerName;
    } else displayName = state.peerName;
  }
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  function generateString() {
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result.trim();
  }

  const handleJoin = async () => {
    try {
      const string = roomId ? roomId : generateString();
      await huddleClient.join(string, {
        address: "0x15900c698ee356E6976e5645394F027F0704c8Eb",
        wallet: "",
        ens: "axit.eth",
      });

      console.log("joined");
    } catch (error) {
      console.log({ error });
    }
  };

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  useEffect(() => {
    enableStream();
    handleJoin();
    if (roomId) {
      huddleClient.allowAllLobbyPeersToJoinRoom();
    }
  }, [peers, peerId, isCamPaused, roomId]);
  return (
    <div>
      <div className="flex-auto block w-80 h-auto p-6  ml-20  border-gray rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <HuddleClientProvider value={huddleClient}>
          <div className="App">
            <div>
              <h2 className={`text-${!roomState.joined ? "red" : "green"}`}>
                Room Id:&nbsp;{roomState.roomId}
              </h2>
            </div>
            <div>
              {/* <div className="card">
              <button onClick={() => huddleClient.enableWebcam()}>
                Enable Webcam
              </button>
              <button onClick={() => huddleClient.disableWebcam()}>
                Disable Webcam
              </button>
              <button
                onClick={() => huddleClient.allowAllLobbyPeersToJoinRoom()}
              ></button>
            </div> */}
              {!isCamPaused && (
                <video
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                  }}
                  ref={videoRef}
                  autoPlay
                  muted
                ></video>
              )}

              {lobbyPeers[0] && <h2>Lobby Peers</h2>}
              <div>
                {lobbyPeers.map((peer) => (
                  <div>{peer.peerId}</div>
                ))}
              </div>

              {/* {Object.values(peers)[0] && <h2>Peers</h2>} */}

              <div className="peers-grid">
                {Object.values(peers).map((peer) => (
                  <div>
                    <PeerVideoAudioElem peerIdAtIndex={peer.peerId} />
                    {displayName}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </HuddleClientProvider>
      </div>
    </div>
  );
}

export default App;
