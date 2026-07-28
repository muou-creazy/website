<template>
  <el-container class="layout">
    <!-- 顶部 -->
    <el-header>
      <Header />
    </el-header>

    <el-container class="mainCont">
      <!-- 左侧菜单栏 -->
      <el-aside class="menuBox">
        <LeftMenu />
      </el-aside>

      <!-- 内容区 -->
      <el-container>
        <el-main>
          <div class="main cardBox">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </div>
          <!-- <el-footer><Footer /></el-footer> -->
        </el-main>
        <!-- footer -->
      </el-container>
      <el-aside class="messageBox"><MessageBox/></el-aside>
    </el-container>
  </el-container>
</template>

<script>
import LeftMenu from "./leftMenu";
import Header from "./Header";
import Footer from "./footer";
import MessageBox from "./MessageBox";
export default {
  name: "App",
  components: {
    LeftMenu,
    Header,
    Footer,
    MessageBox,
  },
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "/assets/sass/layout/layout.css";
</style>
