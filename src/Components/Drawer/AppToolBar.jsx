import {
  Avatar,
  Box,
  IconButton,
  styled,
  Toolbar,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { memo } from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import gnrcLogo from "../../assets/gnrc-logo.svg";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import Drawer from "../Drawer";
import MuiAppBar from "@mui/material/AppBar";
import AccountMenus from "./AppBarMenus/AccountMenus";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  backgroundColor: "#ffffff",
  padding: "0.2rem",
  zIndex: theme.zIndex.drawer + 1,
  // transition: theme.transitions.create(["width", "margin"], {
  //   easing: theme.transitions.easing.sharp,
  //   duration: theme.transitions.duration.leavingScreen,
  // }),
  // ...(open && {
  //   marginLeft: drawerWidth,
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   transition: theme.transitions.create(["width", "margin"], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // }),
}));

const AppToolBar = ({ open, toggleDrawer }) => {
  const iconClickHandler = (text) => {
    alert(text);
  };

  const [accountAnchorEl, setAccountAnchorEl] = React.useState(null);
  const accountMenuCloseHandler = (event) => {
    setAccountAnchorEl(event.currentTarget);
  };
  return (
    <AppBar
      position="fixed"
      open={open}
      sx={{ display: "flex", flexDirection: "row" }}
    >
      <Toolbar sx={{ display: "flex", width: "100%" }}>
        <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
          <IconButton
            size="large"
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
          >
            <MenuIcon
              sx={{ color: "grey", fontSize: "1.6rem", color: "dimgrey" }}
            />
          </IconButton>
          {/* //------------------------LOGO------------------------------- */}
          <img
            src={gnrcLogo}
            width="auto"
            height="60"
            alt="gnrc"
            style={{ marginLeft: "8px" }}
          />
        </Box>

        {/* //------------------------ICON Buttons------------------------------- */}
        <Box
          sx={{
            display: "flex",
            width: "200px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconComponent title="Help" clickHandler={iconClickHandler}>
            <HelpOutlineOutlinedIcon sx={{ fontSize: "32px" }} />
          </IconComponent>

          <IconComponent title="Settings" clickHandler={iconClickHandler}>
            <SettingsOutlinedIcon sx={{ fontSize: "32px" }} />
          </IconComponent>

          <IconComponent title="Apps" clickHandler={iconClickHandler}>
            <AppsOutlinedIcon sx={{ fontSize: "32px" }} />
          </IconComponent>

          <IconComponent title="Account" clickHandler={accountMenuCloseHandler}>
            <Avatar sx={{ width: 34, height: 34, backgroundColor: "#a3238e" }}>
              H
            </Avatar>
          </IconComponent>
        </Box>

        <AccountMenus
          accountAnchorEl={accountAnchorEl}
          handleClose={accountMenuCloseHandler}
        />
      </Toolbar>
    </AppBar>
  );
};

export default memo(AppToolBar);

const IconComponent = ({ title, clickHandler, children }) => {
  return (
    <Tooltip title={title}>
      <IconButton onClick={() => clickHandler(title)}>{children}</IconButton>
    </Tooltip>
  );
};
