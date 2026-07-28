<template>
  <el-container class="footerCont">
    <span>&copy;秦菂袛</span>
    <span>联系我们</span>
  </el-container>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'Footer',
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
  watch:{}
}
</script>
