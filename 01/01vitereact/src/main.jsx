import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import Test from "./trial.jsx"

function MyApp() {
  return (
    <div>
      <h3>My App function</h3>
    </div>
  );
}

// react convert this object into tree for execution
const customElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

// to inject variable --> phle poora tree bnta h tb last m variables inject hote h jese ki-
const user = "Pragatiii..." 

// react method to create element --> React.createElement
const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Lets Google!!  ",
  // now add variables or evaluated expression
  user
);

createRoot(document.getElementById("root")).render(
  // <App />
  // <MyApp />
  // customElement
  reactElement
);
