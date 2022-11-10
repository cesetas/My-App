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
import { PersonRemoveAlt1Rounded } from "@mui/icons-material";

const FlipCard = () => {
  const photos = [
    { img: "1.jpg", isTurned: false },
    { img: "2.jpg", isTurned: false },
    { img: "3.jpg", isTurned: false },
  ];
  const shuffledPhotos = [...photos, ...photos]
    .map((photo) => ({
      ...photo,
      id: Math.random(),
    }))
    .sort(() => Math.random() - 0.5);
  console.log(shuffledPhotos);
  const [isTurned, setIsTurned] = React.useState(false);
  const [sty, setSty] = React.useState(styles.mainphoto);
  const [cards, setCards] = React.useState(shuffledPhotos);

  const handleCard = (e) => {
    // shuffledPhotos.isTurned = !shuffledPhotos.isTurned;
    setIsTurned(!isTurned);
    setTimeout(() => {
      setIsTurned(false);
    }, 1500);

    console.log(e.target.id);
    // photos[e.target.id - 1].isTurned = isTurned;
    // console.log(!photos[e.target.id - 1].isTurned);
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
              {cards.map((photo) => (
                <>
                  <Grid container item xs={4} spacing={1}>
                    <div key={photo.id}>
                      <img
                        // id={photo.id}
                        // onClick={handleCard}
                        className={
                          isTurned ? styles.mainphoto : styles.backphoto
                        }
                        src={photo.img}
                        width="100px"
                        height="200px"
                      />

                      <img
                        id={photo.id}
                        onClick={handleCard}
                        className={
                          isTurned ? styles.backphoto : styles.mainphoto
                        }
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
