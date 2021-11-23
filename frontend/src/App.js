import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePath from "./Components/Home/HomePath";
import SignIn from "./Components/Management/SignIn";
import SignUp from "./Components/Management/SignUp";
import UserPage from "./Components/DashBoard/UserPage";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.Public_key);

const App = () => {
  return (
    <Router>
      <Switch>
        <Elements stripe={stripePromise}>
          <Route exact path="/" component={HomePath} />
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/dashboard" component={UserPage} />
        </Elements>
      </Switch>
    </Router>
  );
};

export default App;
