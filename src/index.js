import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./todoList";

var destination = document.querySelector("#container")

ReactDOM.render(
    <div>
        <App />
    </div>,
    destination
);