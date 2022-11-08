import * as React from "react";
import {
  AppBar,
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  Grid,
} from "@mui/material";

const FlipCard = () => {
  const photos = [
    { img: "1.jpg", isTurned: false },
    { img: "2.jpg", isTurned: false },
    { img: "3.jpg", isTurned: false },
  ];
  const doubledPhotos = [...photos, ...photos];

  console.log(doubledPhotos, Math.random());

  return (
    <>
      <Container display="flex">
        <Typography variant="h1">Flip Card Game</Typography>
        <Button variant="contained">Start</Button>
        <h1 className="text-3xl font-bold">Hello world!</h1>

        <div>
          {doubledPhotos.map((photo) => (
            <>
              <div key={Math.random()}>{photo.img}</div>
              <div>arka</div>
            </>
          ))}
        </div>
      </Container>
    </>
  );
};

export default FlipCard;
