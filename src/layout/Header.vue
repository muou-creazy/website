<template>
  <el-container class="headerBox">
    <div class="logo"></div>
    <!-- <el-menu
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#f8f8f8"
      active-text-color="#f8f8f8"
    >
      <el-submenu index="2">
        <template slot="title">
          <el-avatar :size="24" :src="squareUrl"></el-avatar>
          超级管理员
        </template>
        <el-menu-item index="2-1">消息中心</el-menu-item>
        <el-menu-item index="2-2">修改信息</el-menu-item>
        <el-menu-item index="2-3">退出登录</el-menu-item>
      </el-submenu>
    </el-menu> -->
  </el-container>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";

export default {
  name: "Header",
  components: {
    HelloWorld,
  },
  data() {
    return {
      msg: "欢迎使用Vue.js",
      activeIndex: "",
      squareUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
    };
  },
  mounted() {
    console.log(this.$router);
  },
  watch: {
    $route: function (newValue, oldValue) {
      console.log(
        "路由" + oldValue.path + "发生变化，跳转到：" + newValue.path
      );
    },
  },
  methods: {
    handleSelect(key) {
      console.log(key);
    },
  },
};
</script>
