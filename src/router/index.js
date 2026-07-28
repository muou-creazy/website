import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout/layout.vue"; // 页面整体布局
Vue.use(VueRouter);

Vue.config.productionTip = false

const router =  new VueRouter({
  routes: [
    {
      path:'/',
      component: Layout,
      redirect: '/index',
      children: [{
        path: "index",
        meta: {
          title: "首页",
          icon: "el-icon-s-home",
          routerType: "",
          requireLogin: true,
        },
        component: () => import("../page/index/index.vue"),
      },{
        path: "news",
        meta: {
          title: "新闻",
          icon: "el-icon-s-home",
          routerType: "",
          requireLogin: true,
        },
        component: () => import("../page/news/news"),
      },{
        path: "demo",
        meta: {
          title: "示例",
          icon: "el-icon-s-home",
          routerType: "",
          requireLogin: true,
        },
        component: () => import("../page/demo/demo"),
      },{
        path: "about",
        meta: {
          title: "关于",
          icon: "el-icon-s-home",
          routerType: "",
          requireLogin: true,
        },
        component: () => import("../page/about/about"),
      },],
    },
    {
      path: '*',
      redirect: '/Login'
    },
    {
      path: '/Login',
      name: 'login',
      component: () => import('../page/login'),
    },
  ]
});

export default router;