<template lang="pug">
    div.manage
        el-row
            el-col(:span='5')
                h5
                    i(class='iconfont' v-html='`&#xe61e;`')
                    span 管理中心
                ul
                    li
                        i(class='iconfont' v-html='`&#xe647;`')
                        span 订单中心
                    li(@click='jumpHandle("/order","myorder")') 我的订单
                    li(@click='jumpHandle("/order","allorder")') 全部订单
                ul
                    li
                        i(class='iconfont' v-html='`&#xe686;`')
                        span 用户中心
                    li(@click='jumpHandle("/user","userinfo")') 用户信息
                    li(@click='jumpHandle("/user","alluser")') 用户列表
                ul
                    li
                        i(class='iconfont' v-html='`&#xe686`')
                        span 商品管理
                    li(@click='jumpHandle("/shop","class")') 分类管理
                    li(@click='jumpHandle("/shop","manage")') 商品管理
                    li(@click='jumpHandle("/shop","publish")') 商品上架
                ul
                    li
                        i(class='iconfont' v-html='`&#xe686`')
                        span 资讯中心
                    li(@click='jumpHandle("/news","/")') 资讯列表
            el-col(:span='18')
                router-view
</template>
<script>
export default {
  name: "manage",
  methods: {
    jumpHandle(target, parameter) {
      this.$router.push({
        path: target,
        query: {
          param: parameter
        }
      });
    }
  },
};
</script>
<style lang="scss" scoped>
.manage {
  padding-top: 20px;
  .el-row {
    .el-col {
      margin-bottom: 40px;
    }
    .el-col:nth-child(1) {
      text-align: center;
      h5 {
        height: 36px;
        line-height: 36px;
        color: #fff;
        background: #ff4e00;
        font-size: 16px;
        i {
          margin-right: 5px;
        }
      }
      ul {
        margin-top: 10px;
        padding-bottom: 10px;
        background: #fff;
        color: rgb(54, 52, 52);
        box-shadow: 0.5px 1px 10px rgb(126, 123, 123);
        li:nth-child(1) {
          height: 36px;
          line-height: 36px;
          border-bottom: 1px solid rgb(167, 163, 163);
          font-size: 16px;
          i {
            margin-right: 5px;
          }
        }
        li:not(:nth-child(1)) {
          height: 30px;
          line-height: 30px;
          font-size: 14px;
          margin-top: 4px;
          cursor: pointer;
        }
        li:not(:nth-child(1)):hover {
          color: #ff4e00;
        }
      }
    }
    .el-col:nth-child(2) {
      background: #fff;
      height: 800px;
      float: right;
      box-shadow: 0.5px 1px 10px rgb(126, 123, 123);
    }
  }
}
</style>