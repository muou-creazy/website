<template>
  <div id="show_key_word">
    <div id="waterfallBox">
      <vue-waterfall-easy
        :imgsArr="imgsArr"
        :width="boxWidth"
        :gap="10"
        :imgWidth="120"
        @scrollReachBottom="getData"
      ></vue-waterfall-easy>
    </div>
  </div>
</template>

<script>
import vueWaterfallEasy from "@/components/vue-waterfall-easy/vue-waterfall-easy.vue";
import { demoInfo, imglist, srcList } from "@/utils/baseData";
export default {
  name: "v-waterfall",
  components: {
    vueWaterfallEasy,
  },
  data() {
    return {
      imgsArr: [],
      boxWidth: 0,
      num : 0,
    };
  },
  created() {
    //初始就加载数据
    this.getData();
  },
  watch: {},
  mounted() {
    // 监听窗口大小
    setTimeout(e=>{
      this.setScreenWidth();
    },500)

    window.onresize = () => {
      this.setScreenWidth();
    };
  },
  methods: {
    setScreenWidth(){
      let pWidth = document.querySelectorAll("#waterfallBox")[0].clientWidth;
      this.boxWidth = Number(pWidth);
    },
    getData() {
      let list = demoInfo.srcList;
      if(this.num % 2 == 0){
        list = demoInfo.imglist
      }
      this.num++
      this.imgsArr = this.imgsArr.concat(list);
    },
  },
  computed: {
  },
};
</script>

<style scoped>
#show_key_word {
  height: 100%;
  padding: 10px;
}
#waterfallBox {
  width: 100%;
  height: calc(100vh - 120px);
}
</style>
