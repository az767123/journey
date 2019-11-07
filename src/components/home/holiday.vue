<template>
  <div>
    <div class="headHoliday"><h3>当季热门度假</h3></div>
    <div class="homeHoliday">

      <div class="holiday">

        <div class="holiday-item" v-for="item in holidayList" :key="item.id">
          <div class="holiday-img">
            <img :src="item.imgUrl" alt="">

            <div class="title-in">
              <div class="where"><p>{{item.where}}</p></div>
              <div class="time"><span>{{item.time}}</span></div>
            </div>

          </div>
          <div class="holiday-word">
            <div class="word">{{item.word}}</div>
            <div class="price"><h4>{{item.price}}</h4></div>
          </div>

        </div>
      </div>




    </div>
  </div>
</template>

<script>
  export default {
    name: "homeHoliday",
    props:{
      holidayList:Array
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/css/base";
  /*标题*/
  .headHoliday {
    line-height: 50rem / 50;
    text-indent: 10rem / 50;
    font-size: 16rem / 50;
    margin-top:10rem / 50 ;
  }
  .homeHoliday {
    padding-bottom: 100%;

    .holiday-item {
      float:left;
      width: 50%;
      height: 150rem /50 ;
      font-size: 14rem / 50;
      margin-top:5rem /50 ;
      .holiday-word{
        margin-left:10rem / 50;
        .word {
          margin:5rem /50 0 ;
        }
        .price {
          color:@baseBack;
          font-size: 18rem /50;
        }

      }
      .holiday-img {
        position: relative;
        height: 100rem / 50;
        padding:0 10rem /50 ;
        margin-bottom:5rem / 50 ;
        .title-in {
          position:absolute;
          bottom:0;
          left:50%;
          transform: translateX(-50%);
          background-color: rgba(0,0,0,0.6);
          padding: 8rem / 50;
          text-align: center;
          border-radius: 5rem / 50;
          .where {
            color:white;
          }
          .time {
            font-size: 10px;
            color: yellow;
            margin-top:5rem / 50 ;
          }
        }
        img {
          width: 100%;
          height: 100%;
          border-radius: 10rem /50;
        }
      }
    }

  }

</style>