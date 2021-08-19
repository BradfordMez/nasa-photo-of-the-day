import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import "./index.css";
import App from "./App.js";
import theme from "./theme.js";


export const BASE_URL = 'https://api.nasa.gov'
export const API_KEY = 'alz2MXS7TIZ0xSPeI5AbX7MRqSSf5bUZXvTopaFp'





ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById("root")
);
