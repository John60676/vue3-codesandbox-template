import { createApp } from "vue"
import App from "./App"

let root = document.getElementById("root")
if (!root) {
  root = document.createElement("div")
  root.id = "root"
  document.body.insertBefore(root, document.body.firstChild)
}
createApp(App).mount(root)
