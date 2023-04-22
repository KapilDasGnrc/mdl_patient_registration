import { Menu, MenuItem } from "@mui/material";
import React from "react";
import { memo } from "react";

const AccountMenus = ({ accountAnchorEl, handleClose }) => {
  console.log("accountAnchorEl", accountAnchorEl);
  return (
    <Menu
      id="menu-appbar"
      anchorEl={accountAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(accountAnchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
    </Menu>
  );
};

export default memo(AccountMenus);
