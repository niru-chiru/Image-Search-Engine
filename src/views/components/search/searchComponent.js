import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Button, Card } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import DropdownComponent from "./dropdownCompnent";
import {
  Photo_Type,
  Phote_Color,
  Photo_Category,
} from "../../Helpers/applicationConstant";

const styles = (theme) => ({
  root: {
    marginTop: "80px",
    padding: "20px 20px 35px 20px",
    border: "1px solid #99c2ff",
  },
});
/**
 * Component search, where search the list with query
 * @constant
 * @type {function}
 * @returns {JSX}
 */

const ImageSearchComponent = (props) => {
  const { classes, state, handleSubmit, handleChange, isLoading } = props;

  return (
    <Card className={classes.root}>
      <div>
        <ValidatorForm onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item lg={3} sm={3} md={3} xs={12}>
              <DropdownComponent
                label="Color"
                handleChange={handleChange}
                data={Phote_Color}
                value={state.Color}
                name="Color"
              />
            </Grid>
            <Grid item lg={3} sm={3} md={3} xs={12}>
              <DropdownComponent
                label="Image Type"
                handleChange={handleChange}
                data={Photo_Type}
                value={state.ImgType}
                name="ImgType"
              />
            </Grid>
            <Grid item lg={3} sm={3} md={3} xs={12}>
              <DropdownComponent
                label="Category"
                handleChange={handleChange}
                data={Photo_Category}
                value={state.Category}
                name="Category"
              />
            </Grid>
            <Grid item lg={2} sm={2} md={2} xs={12}>
              <TextValidator
                className="dropdown"
                label="Number of images"
                placeholder="Number of images"
                onChange={handleChange}
                type="number"
                name="Number"
                id="Number"
                value={state.Number}
                validators={[
                  "matchRegexp:([3-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])",
                ]}
                errorMessages={["Images should not be less than 3"]}
              />
            </Grid>
            <Grid item lg={1} sm={1} md={1} xs={12}>
              <Button
                className="search-button"
                color="primary"
                variant="contained"
                type="submit"
                disabled={isLoading}
              >
                <span className="pl-2 capitalize">search</span>
              </Button>
            </Grid>
          </Grid>
        </ValidatorForm>
      </div>
    </Card>
  );
};

export default withStyles(styles, { withTheme: true })(ImageSearchComponent);
