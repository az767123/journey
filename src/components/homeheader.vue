<template>
  <div class="header">
    <div class="left">
      <div class="iconfont">&#xe64b;</div>
    </div>

    <div class="input">
      <div>
        <span class="iconfont">&#xe633;</span>
        输入城市/景点/游玩/主题
      </div>
    </div>

    <div class="right">
      <span>城市</span>
      <span class="iconfont">&#xe64a;</span>
    </div>

  </div>
</template>

<script>
  export default {
    name: "homeHeader"
  }
</script>


<style lang="less" scoped>
  @import "../assets/css/base.less";
  .header {
    width: 100%;
    height: 43rem / 50 ;
    display: flex;
    background-color:@baseBack;
    font-size: 16rem /50;
    line-height: 43rem /50;
    .left {
      width: 32rem / 50;
      margin-left:4rem /50;
      text-align: center;
      .iconfont {
        color:white;
        font-size: 30px;
      }
    }
    .input {
      flex:1;
      height: 32rem / 50;
      margin:.11rem .2rem 0 0.1rem;
      background-color: #fff;
      border-radius: .1rem;
      line-height: 32rem /50;
      color:#ccc;
      display: flex;
      padding-left:6rem /50;
      .iconfont {
        font-size: 18px;

      }
    }
    .right {
      width: 62rem / 50;
      color:white;
      display: flex;
      span {
        margin-left:2rem /50;
      }
    }
  }
</style>