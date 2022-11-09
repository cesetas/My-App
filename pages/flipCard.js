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
import "../styles/Flipcard.module.css";

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
        <Container>
          <div>
            <Grid container spacing={2}>
              {doubledPhotos.map((photo) => (
                <>
                  <Grid container item xs={4} spacing={1}>
                    <div key={Math.random()}>
                      <img src={photo.img} width="100px" height="200px" />
                    </div>
                    <div>
                      <img src="/4.jpg" width="100px" height="200px" />
                    </div>
                  </Grid>
                </>
              ))}
            </Grid>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default FlipCard;
