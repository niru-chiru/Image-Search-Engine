import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  card: {
    minWidth: "100%",
    maxWidth: "100%",
    minHeight: "auto",
    borderRadius: 10,
    padding: 5,
  },
  content: {
    padding: 5,
  },
  media: {
    padding: 10,
    borderRadius: 10,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    marginBottom: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
  },
});

const ImageCard = (props) => {
  const { classes, imageurl, title } = props;

  return (
    <>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <CardMedia
            component="img"
            alt=""
            className={classes.media}
            height="340"
            image={imageurl}
            title=""
          />
          <br />
          <Typography className={classes.title} color="textSecondary">
            {title}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

ImageCard.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ImageCard);
