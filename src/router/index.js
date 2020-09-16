import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [{
    path: "/index",
    name: "Index",
    component: require("../views/Index.vue").default
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: require("../views/Dashboard.vue").default
  },
  {
    path: "/textbooks",
    name: "Textbooks",
    component: require("../views/Textbooks.vue").default
  },

];

const router = new VueRouter({
  routes
});

export default router;