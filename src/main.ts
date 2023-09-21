import Vue, { h } from "vue";

import App from "@/App.vue";
import "./style.scss";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  render: () => h(App),
});
