import { createApp } from "vue";
import App from "./App.jsx";

let root = document.getElementById("app");
if (!root) {
  root = document.createElement("div");
  root.id = "app";
  document.body.insertBefore(root, document.body.firstChild);
}

createApp(App).mount(root);
