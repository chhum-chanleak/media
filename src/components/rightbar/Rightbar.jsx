import React from "react";
//  components
import { Wrapper } from "./Rightbar-style";
import { AvatarGroup } from "@material-ui/lab";
import {
  Avatar,
  ImageList,
  ImageListItem,
  Link,
  Typography,
} from "@material-ui/core";

const Rightbar = () => {
  return (
    <Wrapper>
      <Typography className="friends-label">Online Friends</Typography>
      <AvatarGroup total={6}>
        <Avatar>BO</Avatar>
        <Avatar style={{ backgroundColor: "orange" }}>NH</Avatar>
        <Avatar style={{ backgroundColor: "purple" }}>OP</Avatar>
        <Avatar style={{ backgroundColor: "green" }}>CC</Avatar>
        <Avatar style={{ backgroundColor: "red" }}>KQ</Avatar>
        <Avatar style={{ backgroundColor: "orange" }}>TM</Avatar>
        <Avatar style={{ backgroundColor: "purple" }}>ZN</Avatar>
      </AvatarGroup>
      <Typography className="gallery-label">Gallery</Typography>
      <ImageList
        sx={{ width: 500, height: 450 }}
        cols={3}
        rowHeight={120}
        className="image-list"
      >
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format"
            srcSet=""
            alt="disconnected"
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format"
            srcSet=""
            alt="disconnected"
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format"
            srcSet=""
            alt="disconnected"
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format"
            srcSet=""
            alt="disconnected"
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=format"
            srcSet=""
            alt="disconnected"
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format"
            srcSet=""
            alt="disconnected"
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format"
            srcSet=""
            alt="disconnected"
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=164&h=164&fit=crop&auto=format"
            srcSet=""
            alt="disconnected"
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=164&h=164&fit=crop&auto=format"
            srcSet=""
            alt="disconnected"
            loading="lazy"
          />
        </ImageListItem>
      </ImageList>
      <Typography className="category-label">Category</Typography>
      <Link href="#" variant="body2" className="links">
        News
      </Link>
      <Link href="#" variant="body2" className="links">
        Movies
      </Link>
      <Link href="#" variant="body2" className="links">
        Food
      </Link>
      <Link href="#" variant="body2" className="links">
        Sports
      </Link>
    </Wrapper>
  );
};

export default Rightbar;
