import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    margin: "1px",
    transform: "scale(0.9)",
  },
  root: {
    maxWidth: 700,
    width: 600,
    borderRadius: "5px",
    background: "linear-gradient(rgba(10,70,120,0.5),transparent)",
    margin: "0",
  },
  media: {
    height: 0,
    paddingTop: "50%",
  },
  content: {
    padding: theme.spacing(1),
    textAlign: "center",
  },
  title: {
    fontWeight: 1000,
    fontSize: "1.3rem",
  },
  button: {
    fontSize: "10px",
    backgroundColor: "rgba(0,70,120,0.5)",
  },
  cardActions: {
    marginTop: "0",
    padding: "10px",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const University = ({ name, web_pages }) => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h4" className={classes.title}>
            {name}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button
            size="small"
            href={web_pages}
            target="_blank"
            className={classes.button}
            variant="contained"
          >
            Visit Website{" "}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default University;
