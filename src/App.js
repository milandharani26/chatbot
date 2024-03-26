import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatNav from "./components/ChatNav";
import MainLeft from "./components/MainLeft";
import Main from "./components/Main";
import ChatMain from "./components/ChatMain";
import MainRight from "./components/MainRight";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="mainLeft" element={<MainLeft />}></Route>
            <Route path="mainRight" element={<MainRight />}>
              <Route path="chatNav" element={<ChatNav />}></Route>
              <Route path="chatMain" element={<ChatMain />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
