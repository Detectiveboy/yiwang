<template lang="pug">
    div.shopshow
        div.showNews
            div.nav
            div.carousel
            div.news
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.shopshow {
  .showNews {
    height: 412px;
    display: flex;
    .nav {
      flex: 2;
    }
    .carousel {
      flex: 6;
      box-sizing: border-box;
      padding: 5px 10px 0;
    }
    .news {
      flex: 2;
    }
  }
}
</style>