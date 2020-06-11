<template lang="pug">
    div.shopshow
      div.showNews
        div.nav
        div.carousel
          div(class="block")
            el-carousel
              el-carousel-item(v-for="item in 3" :key="item")
                img(src='../assets/ban1.jpg')
        div.news
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.shopshow {
  // border-top: 2px solid #ff3200;
  background-color: #f6f6f6;
  .showNews {
    height: 412px;
    display: flex;
    .nav {
      flex: 2;
    }
    .carousel {
      flex: 6;
      box-sizing: border-box;
      padding: 10px 10px 0;
      .el-carousel {
        height: 401px;
        width: 740px;
        .el-carousel__item:nth-child(2n) {
          height: 401px;
          width: 740px;
          background: url("../assets/ban1.jpg");
        }
        .el-carousel__item:nth-child(2n + 1) {
          height: 401px;
          width: 740px;
          background: url("../assets/ban1.jpg");
        }
        .el-carousel__arrow {
          top: 65%;
        }
      }
    }
    .news {
      flex: 2;
    }
  }
}
</style>