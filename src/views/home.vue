<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>

</template>

<script>

  import homeHeader from "components/homeheader"
  import homeSwiper from "components/swiper"

  export default {
    name: "home",
    components:{
      homeHeader,
      homeSwiper
    }
  }
</script>

<style lang="less" scoped>



</style>