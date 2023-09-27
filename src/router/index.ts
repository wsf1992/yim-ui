import VueRouter from "vue-router";

const Home = () => import("@/views/Home.vue");

const routes = [{ path: "/", component: Home }];

export default new VueRouter({ routes });
