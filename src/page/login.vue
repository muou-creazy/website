<template>
  <div>
     <h3>
      <router-link to="/home">主页</router-link>
      <router-link to="/news">新闻</router-link>
    </h3>
    <div>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
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
  watch:{}
}
</script>
