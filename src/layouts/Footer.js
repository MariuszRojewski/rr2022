import React from "react";
import { Route } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div>
      <h2>Stopka</h2>
      <Route
        exact
        path="/"
        render={(props) => <p>Jesteś na stronie głównej</p>}
      />

      <Route
        exact
        path="/:page"
        render={(props) => {
          console.log(props);
          return <p>Jesteś na stronie {props.match.params.page}</p>;
        }}
      />

      <Route
        exact
        path="/:page/:productName"
        render={(props) => {
          console.log(props);
          return <p>Jesteś na stronie {props.match.params.productName}</p>;
        }}
      />
    </div>
  );
};

export default Footer;
