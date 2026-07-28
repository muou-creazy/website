<template>
  <div class="news">
    <!-- 板块内容 -->
    <template v-for="(item,idx) in articleList">
      <el-card :key="idx" class="cardItem">
        <img :src="item.img" class="image" />
        <div class="cardInfo">
          <span class="title text-oveflw-one">{{ item.title }}</span>
          <span class="desc text-oveflw-mul2">{{ item.desc }}</span>
        </div>
      </el-card>
    </template>
  </div>
</template>

<script>
import { newsInfo } from "@/utils/baseData";
export default {
  name: "news",
  components: {},
  data() {
    return {
      articleList : newsInfo.articleList,
    };
  },
  mounted() {
    console.log(this.$router);
  },
  watch: {},
};
</script>
