<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

  import Home from "views/home";

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style lang="less">
  @import "assets/css/base.css";
  #app {
    margin-top:43rem / 50 ;
  }

</style>
