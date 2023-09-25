import Vue, { h } from "vue";

import App from "@/App.vue";
import "./style.scss";

import YimUI from './components/main';
Vue.use(YimUI);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  render: () => h(App),
});
