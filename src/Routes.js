import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

/** Renders paths for DogList and DogDetail
 * 
 * props: dogs
 * state: N/A
 * 
 * App-> Routes-> DogList, DogDetails
 */
function Routes({ dogs }) {
  return (
    <Switch>
      <Route exact path="/dogs/:name">
        <DogDetails dogs={dogs} />
      </Route>
      <Route exact path="/dogs">
        <DogList dogs={dogs} />
      </Route>
      <Redirect to="/dogs" />
    </Switch>
  );
}

export default Routes;