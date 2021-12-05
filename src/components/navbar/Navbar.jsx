import React, { useState } from "react";
//  components
import avatar from "../../assets/images/cv-pic.jpg";
import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Search, Mail, Notifications, Cancel } from "@material-ui/icons";
import { Wrapper } from "./Navbar-style";

const Navbar = () => {
  const [input, inputSet] = useState("");

  //  functions
  const handleInput = (e) => {
    inputSet(e.target.value);
  };

  const handleCancel = () => {
    inputSet("");
  };

  return (
    <AppBar position="fixed">
      <Wrapper>
        <Toolbar>
          <Typography variant="h6">Media</Typography>
        </Toolbar>
        <div className="search">
          <div className="search-icon">
            <Search />
          </div>
          <InputBase
            placeholder="Search..."
            value={input}
            onChange={handleInput}
          />
          {input !== "" && (
            <Cancel className="cancel-icon" onClick={handleCancel} />
          )}
        </div>
        <div className="icons">
          <Badge badgeContent={2} color="error" className="mail">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error" className="notifications">
            <Notifications />
          </Badge>
          <Avatar src={avatar} className="avatar" alt="Chhum" />
        </div>
      </Wrapper>
    </AppBar>
  );
};

export default Navbar;
