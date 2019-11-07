<template>
  <div>
    <div class="search">
      <input type="text"
             class="search-input"
             placeholder="输入城市名或拼音"
             @keyup="search"
             v-model="keyword"/>
    </div>
    <div class="search-list"
         v-show="keyword">
      <ul>
        <li v-for="item in list"
            @click="togCity(item.name)">{{item.name}}</li>
        <li v-show="hasLength">未找到相关城市</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "citysearch",
    props:{
      cities:Object
    },
    data() {
      return {
        keyword:"",
        list:[]
      }
    },
    computed:{
      hasLength(){
        return !this.list.length
      }
    },
    methods:{
      search() {
        let lists = []
        for (let i in this.cities) {
          if (this.keyword) {
            this.cities[i].forEach( value => {
              if(value.spell.indexOf(this.keyword) !== -1
                  || value.name.indexOf(this.keyword) !==-1 ) {
                lists.push(value)
              }
            })
          }
        }
        this.list = lists
      },
      togCity(city) {
        this.$store.commit("changeCity",city)
        this.$router.push("/home")
        this.keyword = ""
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/css/base";
  .search {
    position: fixed;
    top:@headerHeight;
    left:0;
    right:0;
    width: 100%;
    height: 36rem /50;
    padding:5rem /50 ;
    background-color: @baseBack;
    box-sizing: border-box;
    font-size: @articleFont;
    z-index:999;
      .search-input {
        box-sizing: border-box;
        padding: 0 6rem / 50;
        width: 100%;
        height: 24rem /50;
        border-radius: 6rem / 50;
        border:0;
        text-align: center;
      }
      .iconfont {
        font-size: @titleFont;
      }
  }
  .search-list {
    position: absolute;
    top:79rem /50;
    left:0;
    right:0;
    bottom: 0;
    background-color: #eee;
    font-size: @articleFont;
    z-index: 1;
    li {
      line-height: 54 rem /50;
      color:#666;
      padding: 5rem /50;
      border-bottom: 1px solid #e1e1e1;
    }
    li:last-child {
      text-align: center;
    }
  }
</style>