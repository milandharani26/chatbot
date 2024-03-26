import ChatBottom from "./ChatBottom";
import ChatMain from "./ChatMain";
import ChatNav from "./ChatNav";

function MainRight() {
  return (
    <div className="mainright-width">
      <ChatNav />
      <ChatMain />
      <ChatBottom />
    </div>
  );
}

export default MainRight;
