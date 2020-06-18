<template lang="pug">
    div.order
        div.myorder(v-if='flag==="myorder"')
            h3 订单列表
            div.card(v-for='(item,index) in myorder' :key='index')
                div.info
                    span {{`用户名：${item.account}`}}
                    span {{`编号：${item.ordernum}`}}
                    span {{`地址：${item.address}`}}
                    span {{`￥${item.price}.0`}}
                el-table(:data="item.goodlist" style="width: 100%" border)
                    el-table-column(prop="goodname" label="商品名称")
                    el-table-column(prop='goodpic' label="商品图片")
                        template(slot-scope="scope")
                            img(:src='scope.row.goodpic')
                    el-table-column(prop="num" label="数量")
                    el-table-column(prop="price" label="价格")
        div.allorder(v-else)
          h3 订单列表
          div.card(v-for='(item,index) in allorder' :key='index')
                div.info
                    span {{`用户名：${item.account}`}}
                    span {{`编号：${item.ordernum}`}}
                    span {{`地址：${item.address}`}}
                    span {{`￥${item.price}.0`}}
                el-table(:data="item.goodlist" style="width: 100%" border)
                    el-table-column(prop="goodname" label="商品名称")
                    el-table-column(prop='goodpic' label="商品图片")
                        template(slot-scope="scope")
                            img(:src='scope.row.goodpic')
                    el-table-column(prop="num" label="数量")
                    el-table-column(prop="price" label="价格")
</template>
<script>
export default {
  name: "order",
  data() {
    return {
      flag: "",
      myorder: [
        {
          account: "",
          ordernum: new Date().getTime(),
          price: 100,
          address: "南阳市",
          goodlist: [
            {
              goodname: "香辣肠",
              goodpic: "../assets/b1.png",
              num: 2,
              price: 20
            },
            {
              goodname: "香辣肠",
              goodpic: "../assets/b1.png",
              num: 2,
              price: 20
            }
          ]
        }
      ],
      allorder: [
        {
          account: "",
          ordernum: new Date().getTime(),
          price: 100,
          address: "驻马店市",
          goodlist: [
            {
              goodname: "香辣肠",
              goodpic: "../assets/b1.png",
              num: 2,
              price: 20
            },
            {
              goodname: "香辣肠",
              goodpic: "../assets/b1.png",
              num: 2,
              price: 20
            }
          ]
        }
      ]
    };
  },
  watch: {
    "$route.query.param"(newVal) {
      this.flag = newVal;
    }
  }
};
</script>
<style lang="scss" scoped>
.order {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  .myorder,
  .allorder {
    margin: 10px;
    h3 {
      height: 40px;
      line-height: 40px;
    }
    .card {
      margin-bottom: 30px;
      .info {
        background: #f7ece8;
        height: 30px;
        line-height: 30px;
        display: flex;
        span {
          flex: 1;
        }
      }
    }
  }
}
</style>