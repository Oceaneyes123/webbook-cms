import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
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
  {
    path: "/videomaterial",
    name: "Video Material",
    component: require("../views/VideoMaterial.vue").default
  },
  {
    path: "/videomaterial/addcontent",
    name: "AddContent",
    component: require("../views/contents/AddContent.vue").default
  },
  {
    path: "/videomaterial/addcontent/tips",
    name: "AddContent",
    component: require("../views/contents/Tips.vue").default
  }
];

const router = new VueRouter({
  routes
});

export default router;
