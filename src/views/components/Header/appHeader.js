import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { App_Header } from "../../Helpers/applicationConstant";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  headerText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: "20px",
  },
  appBar: {
    padding: "10px 0px",
    position: "fixed",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
}));
/**
 * Component Header, where application header shown
 * @constant
 * @type {function}
 * @returns {JSX}
 */
const HeaderComponent = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense">
          <Typography className={classes.headerText}>{App_Header}</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderComponent;
