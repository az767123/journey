<template>
  <div>首页
    <home-header></home-header>
  </div>

</template>

<script>

  import homeHeader from "./homeheader";
  export default {
    name: "home",
    components:{
      homeHeader
    }
  }
</script>

<style lang="less" scoped>
  @color:red;
  div {
    color:@color;
  }

</style>