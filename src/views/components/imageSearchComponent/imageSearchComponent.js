import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ImageCard from "../ImageCard/imageCard";
import { Grid } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    marginTop: "50px",
  },
});

/**
 * Component Search, Main Component where start app ui-search
 * @constant
 * @type {function}
 * @returns {JSX}
 */
const ImageSearchComponent = (props) => {
  const { classes, ImageList } = props;

  /**
   * Map is a function to create Image component
   * @type {function}
   * @return {Object}
   */
  const images = ImageList.map((item, index) => (
    <Grid item lg={4} sm={4} md={4} xs={12}>
      <ImageCard key={index} imageurl={item.largeImageURL} title={item.tags} />{" "}
    </Grid>
  ));

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {images}
      </Grid>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(ImageSearchComponent);
