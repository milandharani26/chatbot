import styles from "./ChatNav.module.css";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function ChatNav() {
  return (
    <div className={styles.main}>
      <div className={styles.chatNavProfile}>
        <h3 className={styles.chatNavName}>Saker_17</h3>
        <span className={styles.chatNavBio}>bio</span>
      </div>
      <div className={styles.chatNavIcons}>
        <SearchIcon
          className={styles.icon}
          style={{ color: "#aaaaaa", fontSize: "30px", padding: "10px" }}
        />
        <MoreVertIcon
          className={styles.icon}
          style={{ color: "#aaaaaa", fontSize: "30px", padding: "10px" }}
        />
      </div>
    </div>
  );
}

export default ChatNav;
