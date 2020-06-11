<template lang="pug">
    div.Detail
      div.container
        el-row
          el-col(:span='8')
            div.img
              img(:src='goodDetail.pic')
          el-col(:span='16')
            div.text
              div.detailDes 
                h2.detailDesName {{`香奈儿`}}
                div.detailDestexts {{`“开业巨惠，北京专柜直供”，不光低价，“真”才靠谱！`}}
                div.detailDesPrice {{`本店价格：`}}
                div.detailDesinv {{`库存：`}}
                div.detailDesmodel
                  dt 型号选择：
                    dd 30ml
                    dd 50ml
                    dd 100ml
                div.detailDescolor
                  dt 颜色选择：
                    dd 红色
                    dd 白色
                    dd 黑色
                el-input-number(v-model="num" controls-position="right" :min="1" :max="10")
                i(class="el-icon-shopping-cart-full el-icon--left") 
                  span 加入购物车
      div.init
        div.i_left
          span 我的收藏
        div.prop
          div.i_right
            div.desc
                a.dec(href="#prop_1") 商品属性
                a(href="#deta_1") 商品详情
            div(class="text_1" id="prop_1")
              tr.one
                td {{`商品名称：香奈儿`}}
                td {{`商品价格：152.0`}}
                td {{`品牌： 迪奥（Dior）`}}
                td {{`上架时间：2015-09-06 09:19:09`}}
              tr.two
                td {{`商品毛重：160.00g`}}
                td {{`商品产地：法国`}}
                td {{`香调：果香调香型：淡香水/香露EDT`}}
              tr.three
                td {{`容量：1ml-15ml`}}
                td {{`类型：女士香水，Q版香水，组合套装`}}
          div(class="deta" id="deta_1")
            div.det
              div.deta_2 商品详情
              div.de
                  tr
                        td 订单
                  img(:src='goodDetail.pic')


              

</template>
<script>
export default {
  data() {
    return {
      num: 1,
      goodDetail: {
        goodname: "",
        goodprice: 0,
        pic: "../assets/1_1.jpg"
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.el-col {
  img {
    margin-top: 80px;
    width: 350px;
    border: 1px solid #e2dcdc;
  }
}
.text {
  width: 450px;
  height: 100%;
  margin-top: 80px;
  margin-left: 100px;
  .detailDestexts {
    color: slategray;
    font-size: 14px;
  }
  .detailDes {
    font-size: 12px;
  }
  .detailDesPrice,
  .detailDesinv {
    line-height: 80px;
  }
  .detailDesmodel,
  .detailDescolor {
    line-height: 40px;
    dd {
      display: inline-block;
      border: 2px solid #ebe7e7;
      margin-left: 10px;
      width: 60px;
      height: 25px;
      line-height: 25px;
      text-align: center;
      font-size: 12px;
    }
    dd:hover {
      border: 2px solid orangered;
    }
  }
  .el-input-number {
    width: 100px;
    margin-top: 80px;
  }
  i {
    color: red;
    background: orangered;
    width: 120px;
    height: 40px;
    line-height: 40px;
    margin: 10px 10px;
    color: #ffffff;
  }
  span {
    color: #000;
    margin-left: 20px;
    color: #ffffff;
  }
}
.init {
  display: flex;
  .i_left {
    background: #ebe7e7;
    width: 140px;
    height: 30px;
    line-height: 30px;
  }
  .prop {
    width: 100%;
    height: 100%;
    margin-left: 20px;
    font-size: 12px;
    .i_right {
      flex: 2;
      border: 1px solid #ebe7e7;
      .desc {
        background: #ebe7e7;
        width: 100%;
        height: 30px;
        line-height: 30px;
        a {
          margin: 0 15px;
          text-decoration: none;
        }
        a:hover {
          color: sandybrown;
        }
      }
      .text_1 {
        line-height: 30px;
        margin: 15px;
      }
    }
  }
  .deta {
    flex: 1;
    width: 100%;
    height: 100%;
    display: block;
    border: 1px solid #ebe7e7;
    margin-top: 10px;
    border-top: 2px solid orangered;
    .deta_2 {
      width: 100%;
      height: 30px;
      line-height: 30px;
      background: #ebe7e7;
    }
    .de {
      td {
        padding-top: 20px;
        position: relative;
        left: 40px;
      }
      img {
        position: relative;
        width: 20%;
        left: 340px;
      }
    }
  }
}

.container {
  margin: 0;
  ul {
    width: 60%;
    margin: 20px auto 30px;
    display: flex;
  }
  li {
    flex: 1;
  }
}
</style>