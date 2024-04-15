import ChatBottom from "../Chat/ChatBottom";
import ChatMain from "../Chat/ChatMain";
import ChatNav from "../Chat/ChatNav";

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
