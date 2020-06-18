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
              img(src='../assets/logo.png' style='cursor:pointer;' @click='jumpHome')
            div.sousuo
              el-input(type='text' v-model='searchVal' v-if='!manage')
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
        div.nav(v-if='!manage')
          div.container
            div.left
              div.showDowm 全部商品分类
                div.navlist
                  dl
                    dt 化妆品
                      i(class="el-icon-arrow-right el-icon--right")
                      dd
                        div.wen
                          div.menu
                            h5 
                              a 面部护理
                            a 少女派 |
                    dt 家用商品
                      i(class="el-icon-arrow-right el-icon--right")
                      dd
                       div.wen
                          div.menu
                            h5 
                              a 餐具
                            a 叉子 |
                            a 锅 |
                            a 刀叉 |
                            a 碗筷 |
                    dt 进口食品
                      i(class="el-icon-arrow-right el-icon--right")
                      dd
                        div.wen
                          div.menu
                            h5 
                              a 零食/糖果/巧克力
                            a 坚果 |
                            a 蜜饯 |
                    dt 电子商品
                      i(class="el-icon-arrow-right el-icon--right")
                      dd
                        div.wen
                          div.menu
                            h5 
                              a 手机
                            a 华为手机 |
                            a 联想手机 |
                          div.menu
                            h5 
                              a 手环
                            a 小米手环 |
                          div.menu
                            h5 
                              a 电脑
                            a 联想电脑 |
                    dt 保健食品
                      i(class="el-icon-arrow-right el-icon--right")
                      dd
                        div.wen
                          div.menu
                            h5 
                              a 老年保健品
                            a 脑白金 |
                          div.menu
                            h5 
                              a 中年营养
                            a
                          div.menu
                            h5 
                              a 儿童保健品
                            a
                    dt 箱包
                      i(class="el-icon-arrow-right el-icon--right")
                      dd
                        div.wen
                          div.menu
                            h5 
                              a 旅行箱
                            a 大型 |
                            a 中型 |
                            a 小型 |
                          div.menu
                            h5 
                              a 手提箱
                            a 大型 |
                            a 中型 |
                            a 小型 |
              ul
                li(v-for='(item,index) in navlist' :key='index') {{item.name}}
            div.right 中秋送好礼！
      div.middle
          div.container
            shopshow(v-if='shopshow')
            classify(v-if='classify')
            detail(v-if='detail')
            manage(v-if='manage')
      div.bottom
          div.list
            div.container
              ul
                li
                  div.img
                    img(src='../assets/b1.png')
                  div.text
                    p 正品保障
                    p {{`正品行货 放心购买`}}
                li
                  div.img
                    img(src='../assets/b2.png')
                  div.text
                    p 满38包邮
                    p {{`满38包邮 免运费`}}
                li
                  div.img
                    img(src='../assets/b3.png')
                  div.text
                    p 天天低价
                    p {{`天天低价 畅选无忧`}}
                li
                  div.img
                    img(src='../assets/b4.png')
                  div.text
                    p 准时送达
                    p {{`收货时间由你做主`}}
          div.link
            div.container
              el-row
                el-col(:span='18')
                  ul
                    li
                      ul
                        li 新手上路
                        li 售后流程
                        li 购物流程
                        li 订购方式
                        li 隐私声明
                        li 推荐分享说明
                    li
                      ul
                        li 配送与支付
                        li 货到付款区域
                        li 配送支付查询
                        li 支付方式说明
                    li
                      ul
                        li 会员中心
                        li 资金管理
                        li 我的收藏
                        li 我的订单
                    li
                      ul
                        li 服务保证
                        li 退换货原则
                        li 售后服务保证
                        li 产品质量保证
                    li
                      ul
                        li 联系我们
                        li 网站故障报告
                        li 购物咨询
                        li 投诉与建议
                el-col(:span='6')
                  div.saoma
                    img(src='../assets/er.gif')
                    br
                    img(src='../assets/ss.png')
                  div.info
                    div.license
                      p
                        i(class='iconfont' v-html='`&#xe60c;`')
                        span 新浪微博
                      p 
                        i(class='iconfont' v-html='`&#xe620;`')
                        span 腾讯微博
                    div.phone
                      p 服务热线：
                      p 400-123-4567
          div.copyright
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
import manage from "@/components/Manage.vue";
export default {
  components: {
    shopshow,
    classify,
    detail,
    manage
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
      detail: false,
      manage: false,
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
    },
    jumpHome() {
      this.shopshow = true;
    }
  },
  mounted() {
    if (!this.manage) {
      let elInput = document.querySelectorAll(".el-input input")[0];
      elInput.style.borderColor = "#FF4E00";
      let elAppend = document.querySelectorAll(
        ".el-input-group__append button"
      )[0];
      elAppend.style.background = "#FF4E00";
      elAppend.style.color = "#fff";
      elAppend.style.borderRadius = "0%";
    }
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
          color: #ff3200;
          cursor: pointer;
        }
      }
      p:nth-child(2) {
        color: #ff3200;
        margin-left: 20px;
        cursor: pointer;
      }
    }
  }
  .tagAge {
    background: #ffffff;
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
            color: #ff3200;
            margin-right: 5px;
          }
          i {
            font-style: normal;
          }
          i:nth-child(2) {
            margin-right: 5px;
          }
          i:nth-child(3) {
            color: #ff3200;
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
          z-index: 2;
          p:nth-child(1) {
            height: 60px;
            line-height: 60px;
            text-align: center;
            font-size: 15px;
            span:nth-child(2) {
              color: #ff3200;
              cursor: pointer;
            }
          }
          p:nth-child(3) {
            height: 40px;
            text-align: right;
            padding-right: 10px;
            span:nth-child(2) {
              color: #ff3200;
            }
          }
          .el-button {
            margin-left: 150px;
            margin-bottom: 10px;
            background: #ff3200;
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
      border-bottom: 2px solid #ff3200;
      .left {
        float: left;
        width: 70%;
        height: 40px;
        display: flex;
        .showDowm {
          display: inline-block;
          background: #ff3200;
          color: #fff;
          flex: 2;
          margin-right: 20px;
          padding-left: 30px;
         .navlist {
            dl {
              margin-top: 2PX;
              margin-left: -30px;
              height: 412px;
              background-color: #ff4e00;
              dt {
                width: 203px;
                height: 40px;
                cursor: pointer;
                line-height: 40px;
                text-align: center;
                color: #ffffff;
                position: relative;
                i {
                  position: absolute;
                  right: 5px;
                  top: 13px;
                }
                dd {
                  position: absolute;
                  top: 0px;
                  left: 210px;
                  height: 411px;
                  width: 976px;
                  line-height: 25px;
                  background-color: #ffffff;
                  z-index: 10;
                  display: none;
                  .wen{
                    padding-left: 180px;
                    .menu {
                    position: relative;
                    left: -420px;
                    display: inline-block;
                    // width: 260px;
                      h5{
                        height: 25px;
                        line-height: 25px;
                        color: #3e3e3e;
                        font-size: 14px;
                        // font-weight: bold;
                        margin-bottom: 5px;
                        margin-left: 10px;
                      }
                      a{
                        line-height: 22px;
                        font-size: 12px;
                        font-family: "宋体";
                        padding: 0 10px;
                        margin: 0;
                        color: #000;
                      }
                      a:hover{
                        color: #ff3200;
                      }
                      .menu:hover {
                      color: #000000;
                      }
                    }
                  }  
                }
              }
              dt:hover {
                color: #ff4e00;
                background-color: #ffffff;
              }
              dt:hover dd {
                display: block;
              }
            }
          }
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
  .middle {
    background: #f6f6f6;
  }
  .bottom {
    background: #f6f6f6;
    .list {
      background: #fff;
      ul {
        height: 80px;
        display: flex;
        padding: 30px 10px;
        li {
          flex: 1;
          display: flex;
          .img {
            flex: 1;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding-right: 5px;
          }
          .text {
            flex: 1;
            display: flex;
            flex-direction: column;
            p:nth-child(1) {
              font-size: 16px;
              flex: 1;
              display: flex;
              align-items: flex-end;
              margin-bottom: 5px;
            }
            p:nth-child(2) {
              font-size: 14px;
              color: #beb9b9;
              flex: 1;
              display: flex;
              align-items: flex-start;
            }
          }
        }
      }
    }
    .link {
      border-bottom: 1px solid rgb(212, 208, 208);
      padding: 30px 0;
      .el-row {
        .el-col:nth-child(1) > ul {
          display: flex;
        }
        .el-col:nth-child(1) > ul > li {
          flex: 1;
          ul > li:nth-child(1) {
            font-size: 16px;
            cursor: pointer;
            margin-bottom: 16px;
          }
          ul > li:nth-child(1):hover {
            text-decoration: underline;
          }
          ul > li:not(:nth-child(1)) {
            font-size: 13px;
            cursor: pointer;
            color: rgb(194, 186, 186);
            margin-bottom: 10px;
          }
          ul > li:not(:nth-child(1)):hover {
            color: #ff6724;
          }
        }
        .el-col:nth-child(2) {
          display: flex;
          .saoma {
            flex: 5;
          }
          .info {
            flex: 5;
            .license {
              p {
                height: 30px;
                line-height: 30px;
                color: rgb(194, 186, 186);
                cursor: pointer;
                i {
                  font-size: 20px;
                  position: relative;
                  top: 2px;
                }
              }
              p:hover {
                color: #ff739f;
              }
            }
            .phone {
              margin-top: 20px;
              p:nth-child(1) {
                font-size: 14px;
                color: rgb(194, 186, 186);
              }
              p:nth-child(2) {
                font-size: 20px;
                color: #ff739f;
              }
            }
          }
        }
      }
    }
    .copyright {
      background: #fff;
      p {
        text-align: center;
        font-size: 13px;
        color: #999999;
      }
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