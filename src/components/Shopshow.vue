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
            div.new
              p 新闻资讯
              el-link(href="Manage.vue" target="_blank") 更多
                i(class="el-icon-arrow-right el-icon--right")
            div.notices
              div.notice
                p [公告]
                el-link(href="Manage.vue" target="_blank") 会员特惠月开始了
              div.notice
                p [公告]
                el-link(href="javascript:;" target="_blank") 迎双旦促销大酬宾
              div.notice
                p [公告]
                el-link(href="javascript:;" target="_blank") 加入会员，赢千万大礼包
              div.notice
                p [公告]
                el-link(href="javascript:;" target="_blank") 新年不夜天，通宵也是开张
              div.notice
                p [公告]
                el-link(href="javascript:;" target="_blank") 积分兑换开始了
            div.prepaid
              p 话费充值
            div.Pay
              div.tr
                span 号码
                input(type="text")
              div.tr
                span 充值
                el-dropdown
                  span.el-dropdown-link 100
                    i(class="el-icon-arrow-down el-icon--right")
                  el-dropdown-menu(slot="dropdown")
                    el-dropdown-item 100
                    el-dropdown-item 50
                    el-dropdown-item 30
                    el-dropdown-item 20
                    el-dropdown-item 10
                p ￥99.5
              div.tr
                el-button 立即充值
</template>
<script>
export default {
  data() {
    return {};
  }
};
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
      margin: 10px auto;
      border: 1px solid #d9d9d9;
      background: #ffffff;
      .new {
        width: 225px;
        height: 39px;
        line-height: 39px;
        font-size: 16px;
        border-bottom: 1px solid #d9d9d9;
        p {
          display: inline;
          padding-left: 10px;
        }
        .el-link {
          margin-left: 100px;
          font-size: 12px;
        }
        .el-link:hover {
          text-decoration: none;
          color: #ff3200;
        }
      }
      .notices {
        padding: 10px;
        font-size: 12px;
        border-bottom: 1px solid #d9d9d9;
        .notice {
          height: 30px;
          line-height: 30px;
          p {
            display: inline;
          }
          .el-link {
            font-size: 12px;
            margin-left: 10px;
          }
          .el-link:hover {
            text-decoration: none;
            color: #ff3200;
          }
        }
      }
      .prepaid {
        border-bottom: 1px solid #d9d9d9;
        p {
          padding-left: 10px;
          height: 39px;
          line-height: 39px;
        }
      }
      .Pay {
        .tr {
          height: 35px;
          line-height: 35px;
          span {
            // display: inline;
            padding-left: 10px;
            font-size: 12px;
          }
          input {
            width: 118px;
            margin: auto 10px;
            height: 23px;
            border: 1px solid #d9d9d9;
          }
        }
        .tr {
          .el-dropdown {
            width: 118px;
            margin-left: 10px;
            height: 23px;
            line-height: 23px;
            border: 1px solid #d9d9d9;
            i {
              margin-left: 70px;
            }
          }
          p {
            display: inline;
            color: #ff4e00;
          }
        }
        .tr {
          .el-button {
            // width: 80px;
            // height: 26px;
            // line-height: 26px;
            font-size: 12px;
            background: #ff4e00;
            color: #ffffff;
          }
        }
      }
    }
  }
}
</style>