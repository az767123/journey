<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img :src="item.imgUrl" alt="" />
      </swiper-slide>


      <!-- Optional controls -->

      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "homeSwiper",
    props:{
      swiperList:Array
    },
    data() {
      return {
        swiperOption:{
          pagination:".swiper-pagination",
          loop:true
        }
      }
    },
    computed:{
      showSwiper () {
        //当swiper为空时 返回swiper长度 使v-if为false 解决轮播最后一页问题
        return this.swiperList.length
      }
    }
  }
</script>

<style lang="less" >
  .swiper-pagination-bullet-active {
    background-color: #ff6f23 !important;
  }
  .wrapper {
    overflow: hidden;
    width: 100%;
    height:0;
    padding-bottom: 31.25%;
    img {
      width: 100%;
    }

  }


</style>