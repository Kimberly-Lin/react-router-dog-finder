import React from "react";
import { Route, Switch } from "react-router-dom";

function Routes() {
    return (
      <Switch>
        <Route exact path="/dogs/:name"><DogDetails /></Route>
        <Route exact path="/"><DogList /></Route>
        <Redirect to="/" />
      </Switch>
    );
  }
  
  export default Routes;