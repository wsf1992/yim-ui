import Vue, { h } from "vue";

import App from "@/App.vue";
import "./style.scss";

// 引入路由
import router from "./router/index";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// 引入 element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// 引入 yim-ui
import YimUI from "../packages/main";
Vue.use(YimUI);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  render: () => h(App),
});
