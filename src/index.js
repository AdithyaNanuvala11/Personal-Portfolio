import React from "react";
import reactdom from "react-dom";
import App from "../src/components/App";
import "./index.css";
// import 'bootstrap/dist/css/bootstrap.css';
reactdom.render( 
    <App />
    , document.getElementById("root")
)