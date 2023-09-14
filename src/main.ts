import Vue, { h } from "vue";

import App from "@/App.vue";
import store from "./store/index";
import router from "./router/index";
import "./style.scss";
import VueRouter from "vue-router";

Vue.config.productionTip = false;

Vue.use(VueRouter);
new Vue({
  el: "#app",
  router,
  store,
  render: () => h(App),
});
