<template lang="pug">
    div.shop
        div.manageClass(v-if='flag==="class"||flag==="publishClass"')
          h3 分类列表
          el-button(type="danger" @click='showAdd') 添加分类
          el-table(:data="classData" border style="width: 100%")
            el-table-column(label="选择" width="60px")
                template(slot-scope='scope')
                    input(type='radio' name='radio' @change='radioHandle(scope.row)')
            el-table-column(prop='className' label="分类名称")
            el-table-column(prop='classLevel' label="分类级别")
            el-table-column(prop='dadClass' label="父级分类")
            el-table-column(label="操作")
                template(slot-scope='scope')
                    el-link(type="danger") 删除
          div.goodPublish(v-show='flag==="publishClass"')
              div
                  p 分类级别
                  p
                      el-select(v-model="publishClass.classLevel" placeholder="请选择" @change='(argu)=>{changeHandle(argu) }')
                          el-option(v-for="item in classLevels" :key="item.value" :label="item.label" :value="item.value")
              div(v-show='oneLevelFlag')
                  p 一级分类
                  p
                      el-select(v-model="publishClass.oneLevelClass" placeholder="请选择")
                          el-option(v-for="item in oneLevelClass" :key="item.value" :label="item.label" :value="item.value")
              div(v-show='twoLevelFlag')
                  p 二级分类
                  p
                      el-select(v-model="publishClass.twoLevelClass" placeholder="请选择")
                          el-option(v-for="item in twoLevelClass" :key="item.value" :label="item.label" :value="item.value")
              div
                  p 分类名称
                  p
                      input(type='text' v-model='publishClass.className')
                      span (必填)
              el-button(type="primary") 确认修改
        div.goodManage(v-if='flag==="manage"')
          h3 商品列表
          el-table(:data="goodData" border style="width: 100%")
            el-table-column(prop='goodname' label="商品名称")
            el-table-column(prop='goodpic' label="商品图片")
            el-table-column(prop='num' label="库存")
            el-table-column(prop='goodprice' label="价格")
            el-table-column(label="操作")
                template(slot-scope='scope')
                    el-link(type="primary") 修改
                    el-link(type="danger") 删除
        div.publishGood(v-if='flag==="publish"')
            h3 添加商品
            div
              p 一级分类
              p
               el-select(v-model="publishGood.classLevel" placeholder="请选择" @change='(argu)=>{changeHandle(argu) }')
                          el-option(v-for="item in oneLevelClass" :key="item.value" :label="item.label" :value="item.value")
            div
              p 二级分类
              p
                el-select(v-model="publishGood.twoLevelClass" placeholder="请选择")
                    el-option(v-for="item in twoLevelClass" :key="item.value" :label="item.label" :value="item.value")
            div
              p 三级分类
              p
                el-select(v-model="publishGood.threeLevelClass" placeholder="请选择")
                    el-option(v-for="item in threeLevelClass" :key="item.value" :label="item.label" :value="item.value")
            div
              p 商品名称
              p
                 input(type='text' v-model='publishGood.goodname')
            div
              p 商品图片
              p
                el-upload(class="upload-demo" limit=1 action="https://jsonplaceholder.typicode.com/posts/" :file-list="fileList" list-type="picture")
                  el-button(size="small" type="primary") 点击上传
            div
              p 单价
              p
                 input(type='text' v-model='publishGood.goodprice')
            div
              p 库存
              p
                 input(type='text' v-model='publishGood.num')
            div
              p 描述
              p
                 textarea(v-model='publishGood.desc' style='resize:both;max-width:500px;max-height:200px;min-width:172px')
            div
              p
              p
                 el-button(type="warning") 商品上架
</template>
<script>
export default {
  name: "shop",
  data() {
    return {
      flag: "",
      oneLevelFlag: true,
      twoLevelFlag: false,
      classData: [
        {
          className: "化妆品",
          classLevel: "一级分类",
          dadClass: "无"
        },
        {
          className: "家用商品",
          classLevel: "一级分类",
          dadClass: "无"
        },
        {
          className: "面部护理",
          classLevel: "二级分类",
          dadClass: "化妆品"
        },
        {
          className: "少女派",
          classLevel: "三级分类",
          dadClass: "面部护理"
        }
      ],
      goodData: [
        { goodname: "随便", goodpic: "", num: 10, goodprice: 12 },
        { goodname: "随便", goodpic: "", num: 10, goodprice: 12 },
        { goodname: "随便", goodpic: "", num: 10, goodprice: 12 },
        { goodname: "随便", goodpic: "", num: 10, goodprice: 12 },
        { goodname: "随便", goodpic: "", num: 10, goodprice: 12 }
      ],
      publishClass: {
        classLevel: "",
        oneLevelClass: "",
        twoLevelClass: "",
        className: ""
      },
      publishGood: {
        oneLevelClass: "",
        twoLevelClass: "",
        threeLevelClass: "",
        goodname: "",
        goodprice: "",
        num: "",
        desc: ""
      },
      classLevels: [
        {
          value: "一级分类",
          label: "一级分类"
        },
        {
          value: "二级分类",
          label: "二级分类"
        },
        {
          value: "三级分类",
          label: "三级分类"
        }
      ],
      oneLevelClass: [
        {
          value: "化妆品",
          label: "化妆品"
        },
        {
          value: "家用商品",
          label: "家用商品"
        },
        {
          value: "进口商品，生鲜",
          label: "进口商品，生鲜"
        },
        {
          value: "电子商品",
          label: "电子商品"
        },
        {
          value: "保健商品",
          label: "保健商品"
        },
        {
          value: "箱包",
          label: "箱包"
        }
      ],
      twoLevelClass: [
        {
          value: "面部护理",
          label: "面部护理"
        }
      ],
      threeLevelClass: [
        {
          value: "少女派",
          label: "少女派"
        }
      ],
      fileList: []
    };
  },
  watch: {
    "$route.query.param"(newVal) {
      this.flag = newVal;
    }
  },
  methods: {
    showAdd() {
      this.oneLevelFlag = true;
      this.publishClass.className = "";
      this.flag = "publishClass";
    },
    changeHandle(argu) {
      switch (argu) {
        case "一级分类":
          this.oneLevelFlag = false;
          this.twoLevelFlag = false;
          break;
        case "二级分类":
          this.oneLevelFlag = true;
          this.twoLevelFlag = false;
          break;
        case "三级分类":
          this.oneLevelFlag = true;
          this.twoLevelFlag = true;
          break;
      }
    },
    radioHandle(argu) {
      this.flag = "publishClass";
      this.publishClass.classLevel = argu.classLevel;
      this.publishClass.className = argu.className;
      switch (argu.classLevel) {
        case "一级分类":
          this.oneLevelFlag = false;
          this.twoLevelFlag = false;
          this.publishClass.oneLevelClass = argu.className;
          break;
        case "二级分类":
          this.oneLevelFlag = true;
          this.twoLevelFlag = false;
          this.publishClass.oneLevelClass = argu.className;
          break;
        case "三级分类":
          this.oneLevelFlag = true;
          this.twoLevelFlag = true;
          this.publishClass.oneLevelClass = argu.dadClass;
          this.publishClass.twoLevelClass = argu.className;
          break;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
$w: 100%;
.shop {
  width: $w;
  box-sizing: border-box;
  padding: 10px;
  .manageClass {
    h3 {
      height: 40px;
      line-height: 40px;
    }
    .el-button {
      float: right;
    }
    .el-table {
      margin-top: 60px;
    }
    .goodPublish > div {
      height: 40px;
      display: flex;
      line-height: 40px;
      border: 1px solid rgb(211, 208, 208);
      border-bottom: none;
      p:nth-child(1) {
        flex: 2;
        border-right: 1px solid rgb(211, 208, 208);
        text-align: right;
        box-sizing: border-box;
        padding-right: 10px;
      }
      p:nth-child(2) {
        flex: 8;
        box-sizing: border-box;
        padding-left: 10px;
      }
    }
    .goodPublish {
      margin-top: 30px;
      div:nth-child(4) {
        border-bottom: 1px solid rgb(211, 208, 208);
        p:nth-child(2) {
          input {
            height: 20px;
          }
        }
      }
      .el-button {
        float: right;
        margin-top: 30px;
      }
    }
  }
  .goodManage {
    h3 {
      height: 40px;
      line-height: 40px;
    }
  }
  .publishGood {
    h3 {
      height: 40px;
      line-height: 40px;
      margin-bottom: 30px;
    }
    div:last-child {
      border-bottom: 1px solid rgb(214, 210, 210);
    }
  }
  .publishGood > div {
    display: flex;
    height: 50px;
    line-height: 50px;
    border: 1px solid rgb(223, 218, 218);
    border-bottom: none;
    p:nth-child(1) {
      flex: 2;
      text-align: right;
      padding-right: 10px;
      box-sizing: border-box;
      border-right: 1px solid rgb(223, 218, 218);
    }
    p:nth-child(2) {
      flex: 8;
      padding-left: 10px;
      box-sizing: border-box;
    }
  }
}
</style>