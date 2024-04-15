import { data } from "./../../data";
import SearchInput from "../ChatList/SearchInput";
import Avtar from "../../assets/Avatar.png";
import ChatList from "../ChatList/ChatList";

const dummyChats = [
  {
    avatar: Avtar,
    name: "Jessica Drew",
    time: "18:30",
    message: "Ok, see you later",
  },
  {
    avatar: Avtar,
    name: "Bruce Banner",
    time: "17:45",
    message: "Hey, can we meet at the lab?",
  },
  {
    avatar: Avtar,
    name: "Tony Stark",
    time: "16:20",
    message: "What are you up to this evening?",
  },
];

function MainLeft() {
  console.log(data);

  return (
    <div className="mainleft-width">
      <SearchInput />
      <ChatList chats={dummyChats} />
    </div>
  );
}

export default MainLeft;
