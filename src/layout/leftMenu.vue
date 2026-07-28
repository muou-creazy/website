<template>
  <div class="menu cardBox">
    <el-image :src="userInfo.myIcon">
      <div slot="error" class="image-slot">
        <i class="el-icon-picture-outline"></i>
      </div>
    </el-image>

    <div class="name">{{ userInfo.userName }}</div>
    <div class="desc">{{ userInfo.desc }}</div>
    <div class="contact">
      <el-row>
        <template v-for="item in iconLinkList">
          <template  v-if="item.type=='img'">
            <el-col :span="8" :key="item.id">
              <el-popover
                placement="bottom"
                trigger="hover"
                width="100px">
                <div class="iconLinkImg">
                  <el-image :src="item.img" fit="fit">
                    <div slot="error" class="image-slot">
                      <i class="el-icon-picture-outline"></i>
                    </div>
                  </el-image>
                </div>
                <el-button slot="reference">
                  <i :class="['iconfont', item.icon ]"></i>
                </el-button>
              </el-popover>
            </el-col>
          </template>
          <template v-if="item.type=='url'">
            <el-col :span="8" :key="item.id" >
              <a :href="item.url" target="_blank">
                <i :class="['iconfont', item.icon ]" :title="item.name"></i>
              </a>
            </el-col>
          </template>
          <template v-if="item.type=='mail'">
            <el-col :span="8" :key="item.id" >
              <a :href="item.url" target="_blank">
                <i :class="['iconfont', item.icon ]" :title="item.name"></i>
              </a>
            </el-col>
          </template>
        </template>
      </el-row>
    </div>
    <div class="menuList">
      <ul>
        <li v-for="item in routers" :key="item.path" :class="{'active': item.path == $route.path}" >
          <router-link 
            class="router"
            :to="item.path">
            <i :class="[item.icon]"></i>{{ item.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { menuInfo } from "@/utils/baseData";
export default {
  name: 'LeftMenu',
  components: {},
  data(){
    return {
      userInfo: menuInfo.userInfo,
      iconLinkList: menuInfo.iconLinkList,
      routers: menuInfo.routers,
      routePath: '/index',
    }
  },
  methods:{},
  mounted(){},
  watch:{}
}
</script>