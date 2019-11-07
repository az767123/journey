<template>
  <div class="icons">

        <div class="icon" v-for="item in iconList" :key="item.id">
          <div class="icon-img">
            <img class="a" :src="item.imgUrl" alt="">
          </div>
          <p>{{item.word}}</p>
        </div>

  </div>
</template>

<script>
  export default {
    name: "homeIcons",
    data () {
      return {
        iconList:[
          {
            id:2,
            imgUrl:"//s.qunarzz.com/homenode/images/touchheader/hotel.png",
            word:"酒店"
          },
          {
            id:3,
            imgUrl:"//s.qunarzz.com/homenode/images/touchheader/flight.png",
            word:"机票"
          },
          {
            id:4,
            imgUrl:"//s.qunarzz.com/homenode/images/touchheader/train.png",
            word:"火车票"
          },
          {
            id:5,
            imgUrl:"//s.qunarzz.com/homenode/images/touchheader/package.png",
            word:"度假"
          },
        ]
      }
    },
  }
</script>

<style lang="less" scoped>
  @import "../../assets/css/base";

  .swiper-container{
    height: 0;
    padding-bottom: 25%;
  }
 .icons {
   overflow: hidden;
   height:0;
   padding-bottom: 25%;
   margin-top:10rem / 50 ;
   .icon{
     overflow: hidden;
     float:left;
     position: relative;
     width: 25%;
     padding-bottom: 25%;
     font-size: 14rem /50;
     .icon-img {
       position: absolute;
       top:0;
       left:0;
       right:0;
       bottom:22rem /50;
       box-sizing: border-box;
       img {
         display: block;
         margin:0 auto;
         width: 60%;
       }
     }
     p {
       position: absolute;
       left:0;
       right:0;
       bottom:4rem /50;
       color:@darkTextColor;
       text-align: center;
       overflow: hidden;
       white-space: nowrap;
       text-overflow: ellipsis;
     }
   }
 }
</style>