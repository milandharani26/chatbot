import React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./SearchInput.module.css";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function SearchInput() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const settings = ["Edit Profile", "Report Bug", "Logout"];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className={styles.searchDiv}>
      <MenuIcon
        style={{ fontSize: "40px", color: "#aaaaaa" }}
        onClick={handleOpenUserMenu}
      ></MenuIcon>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>

      <TextField
        focused={false}
        InputProps={{
          startAdornment: (
            <SearchIcon
              className={styles.search}
              style={{ color: "#aaaaaa", fontSize: "30px" }}
            />
          ),
          inputProps: {
            style: { color: "white" },
          },
          placeholder: "Search",
          className: styles.searchInput,
        }}
        sx={{
          "& .MuiInputBase-input": {
            height: "30px",
          },
        }}
        style={{
          color: "#ffffff",
          width: "80%",
          marginLeft: "10px",
          padding: "0px",
        }}
      />
    </div>
  );
}

export default SearchInput;
