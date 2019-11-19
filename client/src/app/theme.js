import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

let theme = createMuiTheme({});

export default ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
