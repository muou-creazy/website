import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout/layout.vue"; // 页面整体布局

Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'hash',  // 🔑 关键修改：使用 hash 模式，避免 GitHub Pages 刷新 404
  routes: [
    {
      path: '/',
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
      }, {
        path: "news",
        meta: {
          title: "新闻",
          icon: "el-icon-s-home",
          routerType: "",
          requireLogin: true,
        },
        component: () => import("../page/news/news"),
      }, {
        path: "demo",
        meta: {
          title: "示例",
          icon: "el-icon-s-home",
          routerType: "",
          requireLogin: true,
        },
        component: () => import("../page/demo/demo"),
      }, {
        path: "about",
        meta: {
          title: "关于",
          icon: "el-icon-s-home",
          routerType: "",
          requireLogin: true,
        },
        component: () => import("../page/about/about"),
      }, ],
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