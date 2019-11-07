<template>
  <div class="header">
    <div class="left"  @click="backHome">
      <div class="iconfont">&#xe64b;</div>
    </div>
    <div class="title">城市选择</div>
  </div>
</template>

<script>
  export default {
    name: "cityHeader",
    methods:{
      backHome() {
        this.$router.push("/home")
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/css/base";
  .header {
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: @headerHeight;
    display: flex;
    background-color: @baseBack;
    font-size: @titleFont;
    line-height: @headerHeight;
    color:white;
    .left {
      width: 32rem / 50;
      margin-left:4rem /50;
      text-align: center;
      .iconfont {
        font-size: 26px;
      }
    }
    .title {
      position: absolute;
      left:50%;
      transform: translateX(-50%);
    }


  }
</style>