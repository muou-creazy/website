<!-- 图片拖拽效果 -->
<template>
  <div class="imgDetailBox">
    <el-dialog
      ref="dialog"
      id="dialogBox"
      v-dialogDrag:{dialogDrag}="true"
      title="图片"
      :modal="false"
      :close-on-click-modal="false"
      @closed="closeDialog"
      @opened="bindScrollFun"
      :visible.sync="info.showImg"
    >
      <div class="dialog-body">
        <div class="cont">
          <slot name="content">
            <div id="scrollDiv" class="scrollDiv" style="text-align: center">
              <img
                if="img"
                ref="scaleImg"
                :src="info.src"
                :draggable="true"
                fit="scale-down"
                @mousedown="drag"
                :style="{
                  width: imgWidth > 0 ? imgWidth + 'px' : 'auto',
                  height: imgHeight > 0 ? imgHeight + 'px' : 'auto',
                  top: imgTop + 'px',
                  left: imgLeft + 'px',
                }"
              />
            </div>
          </slot>
          <div class="dragIcon">
            <img src="./icon.png" @mousedown="divDrag" alt="" />
          </div>
        </div>
      </div>
      <slot slot="footer" class="dialog-footer"></slot>
    </el-dialog>
  </div>
</template>
<script>
// dialog 可拖动
import "./drag";
export default {
  name: "imgScale",
  components: {},
  data() {
    //这里存放数据
    return {
      dialogW: 400,
      dialogH: 500,
      dialogWOld: 400,
      dialogHOld: 500,
      imgWidth: -1,
      imgHeight: -1,
      left: 0, // 拖拽前，图片位置信息
      top: 0, // 拖拽前，图片位置信息
      imgLeft: 0, // 当前图片位置信息
      imgTop: 0, // 当前图片位置信息
    };
  },
  props: ["info"],
  watch: {
    "info.src"() {
      this.imgTop = this.top = 0;
      this.imgLeft = this.left = 0;
      this.imgWidth = -1;
      this.imgHeight = -1;
    },
  },
  methods: {
    // 滚轮缩放效果
    bindScrollFun() {
      var scrollDiv = document.getElementById("scrollDiv");
      let scaleImg = this.$refs["scaleImg"];
      let direction = scaleImg.width > scaleImg.height; // 判断图片 横图 或 竖图
      let side = direction ? this.imgWidth : this.imgHeight;
      if (direction) {
        this.imgWidth = 380;
      } else {
        this.imgHeight = 400;
      }
      // 绑定滚轮事件
      scrollDiv.addEventListener("mousewheel", (e) => {
        side < 0 && (side = direction ? 380 : 400);
        let num = e.wheelDelta > 0 ? 1 : -1;
        side == "auto" && (side = 400);
        side = Number(side) + 25 * num;
        side > 2000 && (side = 2000);
        if (side <= 200) {
          side = 200;
          this.imgLeft = this.left = 0;
          this.imgTop = this.top = 0;
        }
        this.imgWidth = direction ? side : -1;
        this.imgHeight = direction ? -1 : side;
      });
    },
    // 拖拽效果
    drag(e) {
      //阻止默认事件的方法,如果不阻止默认事件onmouseup会无法触发
      e.preventDefault();
      //记录点击时，鼠标位置
      let disX = e.clientX;
      let disY = e.clientY;
      document.onmousemove = (e) => {
        // 根据鼠标移动距离，设置图片偏移量
        this.imgLeft = Number(this.left) + parseInt((e.clientX - disX) / 1.2);
        this.imgTop = Number(this.top) + parseInt((e.clientY - disY) / 1.2);
      };
      document.onmouseup = (e) => {
        this.left = this.imgLeft;
        this.top = this.imgTop;
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },
    // 拖拽 改变div大小
    divDrag(e) {
      //阻止默认事件的方法,如果不阻止默认事件onmouseup会无法触发
      e.preventDefault();
      //记录点击时，鼠标位置
      let disX = e.clientX;
      let disY = e.clientY;
      document.onmousemove = (e) => {
        // 根据鼠标移动距离，设置图片偏移量
        this.dialogW = Number(this.dialogWOld) + parseInt((e.clientX - disX) / 1.2);
        this.dialogH = Number(this.dialogHOld) + parseInt((e.clientY - disY) / 1.2);
        this.setDivAside();
      };
      document.onmouseup = (e) => {
        this.dialogWOld = this.dialogW;
        this.dialogHOld = this.dialogH;
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },
    // 设置弹框div宽高
    setDivAside() {
      let target = document.getElementById("dialogBox").querySelector(".el-dialog");
      let imgParent = document.getElementById("scrollDiv");
      target.style.width = this.dialogW + "px";
      target.style.height = this.dialogH + "px";
      imgParent.style.width = Number(this.dialogW - 40) + "px";
      imgParent.style.height = Number(this.dialogH - 100) + "px";
    },
    // 关闭清空弹框
    closeDialog() {
      this.info.showImg = false;
      this.info.src = "";
      this.imgWidth = -1;
      this.imgHeight = -1;
      this.imgTop = this.top = 0;
      this.imgLeft = this.left = 0;
      this.dialogW = this.dialogWOld = 400;
      this.dialogH = this.dialogHOld = 500;
      this.setDivAside();
    },
  },
};
</script>
<style lang="scss">
// 图片预览
.imgDetailBox {
  user-select: none;
  .el-dialog .el-dialog__header {
    margin-bottom: 0;
  }
  .el-dialog__wrapper {
    pointer-events: none;
    .el-dialog {
      width: 400px;
      min-width: 300px;
      min-height: 300px;
      margin:0 !important;
    }
    & > * {
      pointer-events: auto;
    }
    .cont {
      padding-bottom: 20px;
    }
  }
  .scrollDiv {
    width: 100%;
    height: 400px;
    min-width: 260px;
    min-height: 200px;
    box-shadow: 0px 0px 5px #f1f1f1;
    overflow: hidden;
    img {
      position: relative;
      left: 0;
      top: 0;
    }
  }
  .dragIcon {
    position: absolute;
    bottom: 1px;
    right: 5px;
    img {
      width: 12px;
      height: 12px;
      cursor: se-resize;
    }
  }
}
</style>