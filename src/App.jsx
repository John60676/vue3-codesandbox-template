import { defineComponent } from "vue"
import HelloWorld from "./components/HelloWorld.vue"
import "./index.css"

export default defineComponent({
  name: "App",
  setup() {
    return () => (
      <div>
        123
        <br />
        <HelloWorld />
      </div>
    )
  },
})
