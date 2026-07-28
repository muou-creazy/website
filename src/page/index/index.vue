<template>
  <div class="indexBox">
    <!-- <el-button type="primary">主要按钮</el-button>
    <el-button type="primary" @click="getverify"> 获取验证码 </el-button> -->

    <!-- 图片卡片 -->
    <div class="picCards cardBox">
      <template v-for="(e,idx) in picCardList">
          <el-card :key="idx" class="cardItem" v-if="idx < 3">
            <!-- https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png -->
            <img
              :src="e.img"
              class="image"/>
            <div class="cardInfo">
              <div>
                <span class="title text-oveflw-one">{{ e.title }}</span>
                <span class="desc text-oveflw-mul">{{ e.desc }}</span>
              </div>
            </div>
          </el-card>
      </template>
      <em style="clear:both"></em>
    </div>

    <!-- 文章列表 -->
    <div class="articalCards">
      <template v-for="(i,k) in articleList">
          <el-card :key="k" class="cardItem">
            <img
              :src="i.img"
              class="image"/>
            <div class="cardInfo">
                <span class="title text-oveflw-one">{{ i.title }}</span>
                <span class="desc text-oveflw-mul3">{{ i.desc }}</span>
            </div>
          </el-card>
      </template>
    </div>

    <!-- 轮播内容 -->
    <div class="swiperCards">

      <template>
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in 6" :key="item">
            <h3 class="medium">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </template>

      <template v-for="(i,k) in articleList">
          <el-card :key="k" class="cardItem">
            <img
              :src="i.img"
              class="image"/>
            <div class="cardInfo">
                <!-- <span class="title text-oveflw-one">{{ i.title }}</span>
                <span class="desc text-oveflw-mul">{{ i.desc }}</span> -->
                <a href="javascript:;" class="title text-oveflw-one">{{ i.title }}</a>
            </div>
          </el-card>
      </template>
    </div>

    <!-- 板块内容 -->
    <div class="moduleCards">
      <template v-for="(i,k) in articleList">
          <el-card :key="k" class="cardItem">
            <img
              :src="i.img"
              class="image"/>
            <div class="cardInfo">
                <span class="title text-oveflw-one">{{ i.title }}</span>
                <span class="desc text-oveflw-mul3">{{ i.desc }}</span>
            </div>
          </el-card>
      </template>
    </div>
  </div>
</template>

<script>
import { homeInfo } from "@/utils/baseData";
export default {
  name: "App",
  components: {},
  data() {
    return {
      picCardList : homeInfo.picCardList,
      articleList : homeInfo.articleList,
    };
  },
  mounted() {},
  created(){
    this.getverify();
  },
  methods: {
    getverify() {
      this.$http.get(this.$api.verifyCode).then((res) => {
        console.log(res);
      });
    },
  },
  watch: {
    $route: function (newValue, oldValue) {
      console.log(
        "路由" + oldValue.path + "发生变化，跳转到：" + newValue.path
      );
    },
  },
};
</script>
<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>