import React from "react";
import { cardData } from "../data/card-data";
//  components
import { Wrapper } from "../post/Post-style";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core";

const Post = () => {
  const cards = cardData;

  return (
    <Wrapper>
      {cards.map((card) => (
        <Card>
          <CardActionArea>
            <CardMedia
              className="card-media"
              image={card.image}
              title="My Post"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                {card.title}
              </Typography>
              <Typography variant="body">{card.content}</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </Wrapper>
  );
};

export default Post;
