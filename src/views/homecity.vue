<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list   :cities="cities"
                 :hotCities="hotCities"
                 :letter="letter"></city-list>

    <alphabet    :cities="cities"
                 @changeCity="changeCity"></alphabet>
  </div>
</template>

<script>
  import axios from "axios"
  import CityHeader from "components/homecity/cityheader";
  import CitySearch from "components/homecity/citysearch"
  import CityList from "components/homecity/citylist"
  import Alphabet from "components/homecity/alphabet"
  export default {
    name: "homecity",
    data () {
      return {
        cities:{},
        hotCities:[],
        letter:String
      }
    },
    components:{
      CityHeader,
      CitySearch,
      CityList,
      Alphabet
    },
    methods:{
      getCityInfo () {
        axios.get("http://localhost:8080/data/city.json")
             .then(this.getCityInfoSuccess)
      },
      getCityInfoSuccess (res) {
        res = res.data
        if (res.ret) {
          this.cities = res.data.cities
          this.hotCities = res.data.hotCities
        }
      },
      changeCity(i) {
        this.letter = i
      }
    },
    mounted() {
      this.getCityInfo()
    }
  }
</script>

<style lang="less" scoped>

</style>