import { useEffect, useRef, useState } from "react";
import "../../styles.css";

import {
  HuddleClientProvider,
  getHuddleClient,
  useRootStore,
} from "@huddle01/huddle01-client";
import PeerVideoAudioElem from "../../components/PeerVideoAudioElem";
import { useHuddleStore } from "@huddle01/huddle01-client/hooks";
import React from "react";
import CardView from "./Card/CardView";

function App() {
  return (
    <div>
      <CardView />
    </div>
  );
}

export default App;
