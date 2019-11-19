import React from "react";
import Theme from "./theme";
import Router from "./router";
import AppLoader from "containers/appLoader";

export default function() {
  return (
    <Theme>
      <AppLoader>
        <Router />
      </AppLoader>
    </Theme>
  );
}
