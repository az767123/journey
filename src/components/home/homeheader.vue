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

    <div class="right" @click="enterCity">
      <span>{{$store.state.city}}</span>
      <span class="iconfont">&#xe64a;</span>
    </div>

  </div>
</template>

<script>
  export default {
    name: "homeHeader",
    props:{
      cityHeader:String
    },
    methods:{
      enterCity() {
        this.$router.push("/homecity")
      }
    }
  }
</script>


<style lang="less" scoped>
  @import "../../assets/css/base.less";
  .header {
    z-index:10;
    position:fixed;
    top:0;
    left:50%;
    transform: translateX(-50%);
    width: 100%;
    height: @headerHeight ;
    line-height: @headerHeight;
    display: flex;
    background-color:@baseBack;
    font-size: 16rem /50;
    max-width:640px;
    .left {
      width: 32rem / 50;
      margin-left:4rem /50;
      text-align: center;
      .iconfont {
        color:white;
        font-size: 26px;
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
      min-width: 62rem / 50;
      color:white;
      display: flex;
      span {
        margin-left:2rem /50;
      }
    }
  }
</style>