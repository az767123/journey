<template>
  <div>
    <home-header :cityHeader="cityHome"></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-holiday :holidayList="holidayList"></home-holiday>
  </div>

</template>

<script>

  import homeHeader from "components/home/homeheader"
  import homeSwiper from "components/home/swiper"
  import homeIcons from "components/home/icons"
  import homeRecommend from "components/home/recommend"
  import homeHoliday from "components/home/holiday"
  import axios from "axios"

  export default {
    name: "home",
    components:{
      homeHeader,
      homeSwiper,
      homeIcons,
      homeRecommend,
      homeHoliday
    },
    data () {
      return {
        cityHome:"",
        swiperList:[],
        recommendList:[],
        holidayList:[]
      }
    },
    methods:{
      getHomeInfo () {
        axios.get("http://localhost:8080/data/test.json")
            .then(this.getHomeInfoSuccess)
      },
      getHomeInfoSuccess (res) {
        res = res.data
        if(res.ret ) {
          this.cityHome = res.data.city
          this.swiperList = res.data.swiperList
          this.recommendList = res.data.recommendList
          this.holidayList = res.data.holidayList
        }
      }
    },
    mounted () {
      this.getHomeInfo()
    }
  }
</script>

<style lang="less" scoped>



</style>