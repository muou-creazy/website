<template>
  <div class="aboutBox">
    <h4>介绍</h4>
    <div class="cont">
      {{ info.introduction }}
    </div>
    <h4>联系</h4>
    <div class="cont">
      <template v-for="(item, idx) in info.contact">
        <div :key="idx">
          <span>{{ item.label }} : </span>
          <span>{{ item.value }} </span>
        </div>
      </template>
      <div class="imgCode">
        <template v-for="item in info.contactImg">
          <div :key="item.id">
            <div>
              <el-image :src="item.img" fit="fit"></el-image>
            </div>
            <div>{{ item.name }}</div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { aboutInfo } from "@/utils/baseData";
export default {
  name: "about",
  components: {},
  data() {
    return {
      info: aboutInfo,
    };
  },
};
</script>