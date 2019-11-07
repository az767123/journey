<template>
  <div>
    <div class="headTitle"><h3>当季热销推荐</h3></div>

    <ul>
      <li class="item" v-for="item in recommendList" :key="item.id">
        <div class="img-wrapper">
          <img :src="item.imgUrl" alt="">
        </div>

        <div class="item-info">
          <p class="title">{{item.title}}</p>
          <p>{{item.word}}</p>
          <div class="item-btn">查看详情</div>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: "homeRecommend",
    props:{
      recommendList:Array
    }
  }
</script>

<style lang="less" scoped>
  .headTitle {
    line-height: 44rem / 50;
    text-indent: 10rem / 50;
    font-size: 16rem / 50;
  }
  .item {
    display: flex;
    height: 94rem / 50;
    font-size: 16rem / 50;
    .img-wrapper {
      img {
          border-radius: 20rem /50;
          height: 85rem / 50;
          padding:10rem /50;
      }
    }
    .item-info {
      position: relative;
      font-size:12rem / 50;
      line-height:14rem / 50;
      color: #adadad;
      padding:5rem /50;
      overflow: hidden;
      text-overflow: ellipsis;
      .title {
        font-size: 16rem /50 ;
        line-height: 28rem /50 ;
        color:black;
      }
      .item-btn {
        position: absolute;
        bottom: 0;
        left: 5rem / 50;
        margin-top:4rem /50 ;
        background-color: #ff9300;
        padding:5rem /50;
        border-radius: 10rem / 50;
        color:#fff;
        width: 50rem /50 ;
      }

    }
  }
</style>