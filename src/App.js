import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./routes/routes";
import "./App.css";
import Header from "./views/components/Header/appHeader";

const App = (props) => {
  return (
    <BrowserRouter>
      <>
        <Header />
        <div className="customContainer">
          <Switch>
            {routes.map((route) => (
              <Route
                path={route.path}
                component={route.component}
                key={route.id}
                exact={route.exact && true}
              />
            ))}
          </Switch>
        </div>
      </>
    </BrowserRouter>
  );
};
export default App;
