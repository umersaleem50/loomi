import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "../App";
const Routes = (props) => {
  return (
    <Router>
      <Route path="/" exact component={App} />
      {/* <Route render={() => <h1>No found 404!</h1>} /> */}
    </Router>
  );
};

export default Routes;
