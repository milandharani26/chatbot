import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatNav from "./components/Chat/ChatNav";
import MainLeft from "./components/Main/MainLeft";
import Main from "./components/Main/Main";
import ChatMain from "./components/Chat/ChatMain";
import MainRight from "./components/Main/MainRight";

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
