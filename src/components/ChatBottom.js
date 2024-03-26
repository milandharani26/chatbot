import styles from "./ChatBottom.module.css";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AttachmentIcon from "@mui/icons-material/Attachment";
import SendIcon from "@mui/icons-material/Send";

function ChatBottom() {
  return (
    <div className={styles.main}>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          InputProps={{
            startAdornment: (
              <SentimentSatisfiedAltIcon
                className={styles.smile}
                style={{ color: "#aaaaaa", fontSize: "30px" }}
              />
            ),
            endAdornment: (
              <SendIcon
                className={styles.send}
                style={{ color: "#aaaaaa", fontSize: "30px" }}
              />
            ),
            inputProps: {
              style: { color: "white" },
            },
            placeholder: "Message",
          }}
          sx={{
            "& .MuiInputBase-input": {
              height: "30px",
            },
          }}
          style={{
            color: "#ffffff",
            backgroundColor: "#212121",
            borderRadius: "20px",
            width: "710px",
          }}
        />
      </Box>
    </div>
  );
}

export default ChatBottom;
