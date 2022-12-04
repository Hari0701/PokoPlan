import Landing from "./screens/Landing";
import Main from "./screens/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/pokoplan" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
