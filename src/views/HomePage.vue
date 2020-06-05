<template lang="pug">
    div.home
      div.top
        div.container
          div.left
            el-dropdown
                span(class="el-dropdown-link" style='cursor:pointer;') 送货至：四川
                    i(class="el-icon-arrow-down el-icon--right")
                el-dropdown-menu(slot="dropdown")
                    p(style='border-bottom:1px dashed #999;color:#999;padding-left:20px') 请选择所在的收货地区
                    el-dropdown-item(v-for='(item,index) in address' :key='index') {{`${item.name} `}}
                        span(v-for='option in item.list') {{`${option} `}}
          div.right
              p 你好，
                  span(@click='jump("login")') 请登录
              p(@click='jump("registry")') 免费注册
      div.tagAge
        div.container
          div.search
            div.logo
              img(src='../assets/logo.png')
            div.sousuo
              el-input(type='text' v-model='searchVal')
                el-button(slot="append") 搜索
            div.select
              span(class="el-dropdown-link")
                i(class='el-icon-shopping-cart-2')
                i 购物车
                i {{`[${cards.length==0? '空':cards.length}]`}}
                i(class="el-icon-arrow-down el-icon--right")
              div.menu
                p
                  span {{!!user.account? '我的购物车':'还未登录!'}}
                  span(@click='jump("login")') {{!!user.account? '':'马上登录'}}
                div.showCards 暂时为空
                p
                  span 共计
                  span {{`￥${price===0? '':price}`}}
                el-button(type="warning") {{!!user.account? '去结算':'去登陆'}}
          div.nav
            div.left
              div.showDowm 全部商品分类
              ul
                li(v-for='(item,index) in navlist' :key='index') {{item.name}}
            div.right 中秋送好礼！
      div.middle
          div.container
            shopshow(v-if='shopshow')
            classify(v-if='classify')
            detail(v-if='detail')
      div.bottom
          div.container
              p 备案/许可证编号：蜀ICP备12009302号-1-www.dingguagua.com Copyright  2015-2018 尤洪商城网 All Rights Reserved. 复制必究 , Technical Support: Dgg Group
              ul
                li
                  img(src='../assets/b_1.gif')
                li
                  img(src='../assets/b_2.gif')
                li
                  img(src='../assets/b_3.gif')
                li
                  img(src='../assets/b_4.gif')
                li
                  img(src='../assets/b_5.gif')
                li
                  img(src='../assets/b_6.gif')
</template>
<script>
import shopshow from "@/components/Shopshow.vue";
import classify from "@/components/Classify.vue";
import detail from "@/components/Detail.vue";
export default {
  components: {
    shopshow,
    classify,
    detail
  },
  data() {
    return {
      address: [
        {
          name: "A",
          list: ["安徽", "澳门"]
        },
        {
          name: "B",
          list: ["北京"]
        },
        {
          name: "C",
          list: ["重庆"]
        },
        {
          name: "F",
          list: ["福建"]
        },
        {
          name: "G",
          list: ["安徽", "澳门", "贵州", "甘肃"]
        },
        {
          name: "H",
          list: ["河北", "河南", "黑龙江", "海南", "湖北", "湖北"]
        },
        {
          name: "J",
          list: ["江苏", "吉林", "吉林"]
        },
        {
          name: "L",
          list: ["辽宁"]
        },
        {
          name: "N",
          list: ["内蒙古", "宁夏"]
        },
        {
          name: "Q",
          list: ["青海"]
        },
        {
          name: "S",
          list: ["上海", "山东", "山西", "四川", "陕西"]
        },
        {
          name: "T",
          list: ["台湾", "天津"]
        },
        {
          name: "X",
          list: ["西藏", "香港", "香港"]
        },
        {
          name: "Y",
          list: ["云南"]
        },
        {
          name: "Z",
          list: ["浙江"]
        }
      ],
      searchVal: "",
      cards: [],
      user: {},
      navlist: [
        { name: "首页" },
        { name: "化妆品" },
        { name: "家用商品" },
        { name: "进口商品" },
        { name: "电子商品" },
        { name: "保健商品" },
        { name: "箱包" }
      ],
      shopshow: true,
      classify: false,
      detail: false
    };
  },
  methods: {
    jump(str) {
      if (str === "login") {
        this.$router.push("/login");
      } else {
        this.$router.push({
          path: "/login",
          query: {
            action: true
          }
        });
      }
    }
  },
  mounted() {
    let elInput = document.querySelectorAll(".el-input input")[0];
    elInput.style.borderColor = "#FF4E00";
    let elAppend = document.querySelectorAll(
      ".el-input-group__append button"
    )[0];
    elAppend.style.background = "#FF4E00";
    elAppend.style.color = "#fff";
    elAppend.style.borderRadius = "0%";
  },
  computed: {
    price() {
      return 0;
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  .top {
    height: 36px;
    line-height: 36px;
    background: #f6f6f6;
    font-size: 12px;
    .left {
      height: 36px;
      float: left;
      .el-dropdown-menu {
        margin-left: 10px;
      }
    }
    .right {
      height: 36px;
      float: right;
      p {
        display: inline-block;
      }
      p:nth-child(1) {
        span {
          color: #ff4e00;
          cursor: pointer;
        }
      }
      p:nth-child(2) {
        color: #ff4e00;
        margin-left: 20px;
        cursor: pointer;
      }
    }
  }
  .tagAge {
    .search {
      display: flex;
      height: 150px;
      align-items: center;
      div {
        flex: 1;
      }
      .select {
        display: flex;
        justify-content: flex-end;
        position: relative;
        .el-dropdown-link {
          border: 1px solid rgb(212, 207, 207);
          display: block;
          padding: 10px;
          background: #f6f6f6;
        }
        span {
          i:nth-child(1) {
            color: #ff4e00;
            margin-right: 5px;
          }
          i {
            font-style: normal;
          }
          i:nth-child(2) {
            margin-right: 5px;
          }
          i:nth-child(3) {
            color: #ff4e00;
          }
        }
        span:nth-child(1):hover + .menu {
          display: block;
        }
        .menu:hover {
          display: block;
        }
        .menu {
          display: none;
          position: absolute;
          top: 42px;
          border: 1px solid rgb(212, 207, 207);
          background: #fff;
          width: 250px;
          p:nth-child(1) {
            height: 60px;
            line-height: 60px;
            text-align: center;
            font-size: 15px;
            span:nth-child(2) {
              color: #ff4e00;
              cursor: pointer;
            }
          }
          p:nth-child(3) {
            height: 40px;
            text-align: right;
            padding-right: 10px;
            span:nth-child(2) {
              color: #ff4e00;
            }
          }
          .el-button {
            margin-left: 150px;
            margin-bottom: 10px;
            background: #ff4e00;
          }
          .showCards {
            padding: 0 5px;
          }
        }
      }
    }
    .nav {
      height: 40px;
      line-height: 40px;
      border-bottom: 2px solid #ff4e00;
      .left {
        float: left;
        width: 70%;
        height: 40px;
        display: flex;
        .showDowm {
          display: inline-block;
          background: #ff4e00;
          color: #fff;
          flex: 3;
          margin-right: 20px;
          padding-left: 30px;
        }
        ul {
          flex: 7;
          display: flex;
          li {
            font-size: 16px;
            flex: 1;
            display: inline-block;
            cursor: pointer;
          }
          li:hover {
            color: #ff4e00;
          }
        }
      }
      .right {
        float: right;
        height: 40px;
        color: #ff4e00;
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
  .bottom {
    padding: 10px 0;
    background: #f6f6f6;
    p {
      text-align: center;
      font-size: 13px;
      color: #999999;
    }
    .container {
      ul {
        width: 60%;
        margin: 20px auto 30px;
        display: flex;
      }
      li {
        flex: 1;
      }
    }
  }
}
</style>