<template>
  <!-- <el-container class="footerCont">
    <span>&copy;秦菂袛</span>
    <span>联系我们</span>
  </el-container> -->
  <div class="relative">
    <div class="item cardBox">
      <div class="title">随笔</div>
      <ul>
        <li>兼容不同浏览器方法小结</li>
        <li>ES6至ES2018学习记录</li>
        <li>react初步使用</li>
        <li>RN与flutter对比</li>
      </ul>
    </div>
    <div class="item cardBox">
      <div class="title">近期文章</div>
      <ul>
        <li>vue使用总结</li>
        <li>golang初始教程</li>
        <li>flutter学习总结</li>
        <li>electron学习总结</li>
      </ul>
    </div>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return {
    }
  },
  mounted(){
    console.log(this.$router)
  },
  watch:{
    // $route:function(newValue,oldValue){
    //   console.log('路由'+oldValue.path+'发生变化，跳转到：'+newValue.path);
    // }
  }
}
</script>
