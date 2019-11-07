<template>
  <div>
    <div>
      <ul class="list">
        <li class="item"
            v-for="(value,i) in cities"
            @click="letterClick(i)"
            :key="i">{{i}}</li>
      </ul>

    </div>
    <div class="letterShow"
         v-show="isShow">{{letter}}</div>
  </div>
</template>

<script>
  export default {
    name: "alphabet",
    props:{
      cities:Object,
    },

    data(){
      return {
        isShow:false,
        letter:String,
        timer:null
      }
    },
    methods:{
      letterClick(i) {
        this.$emit("changeCity",i)
        this.letter = i
        this.isShow = true
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          this.isShow = false
        },1000)
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/css/base";
  .list {
    position: absolute;
    right: 0;
    top:50%;
    transform: translateY(-50%);
    font-size: 12rem /50;
    list-style: none;
    text-align: center;
    padding-right: 8rem / 50;
    color:@baseBack;
    .item {
      line-height:20rem /50;
    }

  }
  .letterShow {
    position: absolute;
    top:50%;
    left:50%;
    transform: translateX(-50%) translateY(-50%);
    font-size: 24rem / 50;
    width: 40rem / 50;
    height:60rem / 50;
    line-height: 60rem / 50;
    text-align: center;
    background-color: rgba(0,0,0,0.1);
  }

</style>