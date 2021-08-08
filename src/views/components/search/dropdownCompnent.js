import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import { SelectValidator } from "react-material-ui-form-validator";

const styles = (theme) => ({
  root: {
    marginTop: "50px",
  },
});
/**
 * Component Dropdown, reusable component to dropdown list
 * @constant
 * @type {function}
 * @returns {JSX}
 */
const DropdownComponent = (props) => {
  const { label, handleChange, data, name, value } = props;

  return (
    <>
      <SelectValidator
        className="dropdown"
        placeholder={"Select " + label}
        label={label}
        onChange={handleChange}
        type="select"
        id=""
        name={name}
        value={value}
        validators={[]}
        errorMessages={["this field is required"]}
      >
        {data.length > 0 &&
          data.map((item, index) => (
            <MenuItem key={index} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
      </SelectValidator>
    </>
  );
};

export default withStyles(styles, { withTheme: true })(DropdownComponent);
