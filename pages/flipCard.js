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
import styles from "../styles/Flipcard.module.css";

const FlipCard = () => {
  const photos = [
    { img: "1.jpg", isTurned: false },
    { img: "2.jpg", isTurned: false },
    { img: "3.jpg", isTurned: false },
  ];
  const doubledPhotos = [...photos, ...photos];

  const [turned, setTurned] = React.useState("");

  const handleCard = () => {
    console.log("you clicked");
  };

  return (
    <>
      <Container display="flex">
        <Typography variant="h1">Flip Card Game</Typography>
        <Button variant="contained">Start</Button>
        <br />
        <br />
        <br />
        <Container>
          <div>
            <Grid container spacing={2}>
              {doubledPhotos.map((photo) => (
                <>
                  <Grid onClick={handleCard} container item xs={4} spacing={1}>
                    <div className={styles.photo} key={Math.random()}>
                      <img
                        className={styles.mainphoto}
                        src={photo.img}
                        width="100px"
                        height="200px"
                      />
                    </div>
                    <div>
                      <img
                        className={styles.backphoto}
                        src="/4.jpg"
                        width="100px"
                        height="200px"
                      />
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
