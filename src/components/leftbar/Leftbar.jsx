import React from "react";
//  components
import { Typography } from "@material-ui/core";
import {
  Home,
  List,
  ExitToApp,
  PlayCircleOutline,
  TabletMac,
  Settings,
  PhotoCamera,
  Bookmark,
  Storefront,
} from "@material-ui/icons";
import { Wrapper } from "./Leftbar-style";

const Leftbar = () => {
  return (
    <Wrapper>
      <div className="leftbar">
        <Home className="icon" />
        <Typography className="label">Homepage</Typography>
      </div>
      <div className="leftbar">
        <List className="icon" />
        <Typography className="label">Lists</Typography>
      </div>
      <div className="leftbar">
        <PhotoCamera className="icon" />
        <Typography className="label">Camera</Typography>
      </div>
      <div className="leftbar">
        <PlayCircleOutline className="icon" />
        <Typography className="label">Videos</Typography>
      </div>
      <div className="leftbar">
        <TabletMac className="icon" />
        <Typography className="label">Apps</Typography>
      </div>
      <div className="leftbar">
        <Bookmark className="icon" />
        <Typography className="label">Collections</Typography>
      </div>
      <div className="leftbar">
        <Storefront className="icon" />
        <Typography className="label">Market Place</Typography>
      </div>
      <div className="leftbar">
        <Settings className="icon" />
        <Typography className="label">Settings</Typography>
      </div>
      <div className="leftbar">
        <ExitToApp className="icon" />
        <Typography className="label">Logout</Typography>
      </div>
    </Wrapper>
  );
};

export default Leftbar;
