<template>
  <div class="list" ref="citys">
    <div>

      <!--当前城市-->
      <div class="area">
        <div class="title">当前城市</div>
        <div class="city-list">
          <div class="city-wrapper">
            <div class="city current">{{$store.state.city}}</div>
          </div>

        </div>
      </div>


      <!--热门城市-->
        <div class="area">
          <div class="title">热门城市</div>
          <div class="city-list">
            <div class="city-wrapper"
                 v-for="item in hotCities"
                 :key="item.id"
                 @click="togCity(item.name)">

              <div class="city">{{item.name}}</div>
            </div>

          </div>
        </div>

      <!--首字母-->

      <!--循环每个字母-->
        <div class="area"
             v-for="(value,i) in cities"
             :key="i"
             :ref="i">
          <div class="title">{{i}}</div>

      <!--循环每个字母开头的城市-->
          <div class="city-list"
               v-for="item in value"
               :key="item.id"
               >
            <div class="item-list"
                 @click="togCity(item.name)">
              <div class="item">{{item.name}}</div>
            </div>

          </div>
        </div>

      </div>


  </div>
</template>

<script>

  import Bscroll from "better-scroll"

  export default {
    name: "citylist",
    props:{
      cities:Object,
      hotCities:Array,
      letter:""
    },
    mounted () {
      this.scroll = new Bscroll(this.$refs.citys)
    },
    watch:{
      letter() {
        if (this.letter) {
          const element = this.$refs[this.letter][0]
          this.scroll.scrollToElement(element)
        }
      }
    },
    methods:{
      togCity(city) {
        this.$router.push("/home")
        this.$store.commit("changeCity",city)
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/css/base";
  .list {
    overflow: hidden;
    position: absolute;
    top:80rem /50;
    right: 0;
    left: 0;
    bottom:0;
    font-size: @articleFont;
    z-index: -1;
    .title {
      line-height: 28rem / 50;
      background-color: #eee;
      padding-left: 10rem / 50;
      color:#666;
    }
    .city-list {
      overflow: hidden;
      padding:8rem /50 30rem /50 5rem / 50 5rem /50;
      .city-wrapper {
        width: 33.33%;
        float:left;
        .city {
          margin:5rem /50;
          padding:3rem / 50;
          text-align: center;
          border:1rem /50 solid #ccc;
          border-radius: 10rem /50;
        }
        .current {
          color: @baseBack;
          border: 1rem /50 solid @baseBack;
        }
      }
      .item-list {
        .item {
          line-height: 54 rem /50;
          color:#666;
          padding: 5rem /50;
          border-bottom: 1px solid #e1e1e1;
        }
      }
    }

  }

</style>