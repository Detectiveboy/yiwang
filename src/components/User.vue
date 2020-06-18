<template lang="pug">
    div.user
        div.userinfo(v-if='flag==="userinfo"')
            div.img
                img(src='../assets/b1.png')
            div.info
                h3 {{`${userinfo.permissions===1? '系统管理员':'用户'}`}}
                p {{`性别：${userinfo.gender}`}}
                p {{`邮箱：${userinfo.email}`}}
                p {{`电话：${userinfo.mobile}`}}
        div.alluser(v-else)
          h3 用户列表
          el-button(type="warning" @click='clickHandle') 添加用户
          el-table(:data="tableData" style="width: 100%" border)
            el-table-column(prop="account" label="用户名称")
            el-table-column(prop="username" label="真实姓名")
            el-table-column(prop="gender" label="性别")
            el-table-column(prop="permissions" label="类型")
            el-table-column(label="操作")
              template(slot-scope='scope')
                el-link(type="primary") 修改
                el-link(type="danger" v-show='scope.row.permissions===0') 删除
        div.adduser(v-if='flag==="adduser"')
          h3
            span 添加用户
            span(@click='cancelHanle') 取消操作
          div.form
            div
              p 用户姓名
              p
                input(type='text' v-model='adduserData.account')
            div
              p 真实姓名
              p
                input(type='text' v-model='adduserData.username')
            div
              p 密码
              p
                input(type='text' v-model='adduserData.password')
            div
              p 确认密码
              p
                input(type='text' v-model='adduserData.surepassword')
            div
              p 身份证号
              p
                input(type='text' v-model='adduserData.idcard')
            div
              p 电子邮箱
              p
                input(type='text' v-model='adduserData.email')
            div
              p 手机
              p
                input(type='text' v-model='adduserData.phone')
            div
              p 用户类型
              p
                el-select(v-model="adduserData.usertype" placeholder="请选择")
                  el-option(v-for="item in options" :key="item.value" :label="item.label" :value="item.value")
            div
              p
              p
                el-button(type="danger") 添加用户
</template>
<script>
export default {
  name: "user",
  data() {
    return {
      flag: "",
      userinfo: {
        permissions: 1,
        gender: "男",
        email: "2913379173@qq.com",
        mobile: 16639649502
      },
      tableData: [
        {
          account: "拉拉",
          username: "张三",
          gender: "男",
          permissions: 0
        },
        {
          account: "滴滴",
          username: "李四",
          gender: "男",
          permissions: 0
        },
        {
          account: "飞天",
          username: "一胜",
          gender: "男",
          permissions: 0
        }
      ],
      adduserData: {
        account: "",
        username: "",
        password: "",
        surepassword: "",
        idcard: "",
        email: "",
        phone: "",
        usertype: ""
      },
      options: [
        {
          value: 1,
          label: "管理员"
        },
        {
          value: 0,
          label: "普通用户"
        }
      ]
    };
  },
  watch: {
    "$route.query.param"(newVal) {
      this.flag = newVal;
    }
  },
  methods: {
    clickHandle() {
      this.flag = "adduser";
    },
    cancelHanle() {
      this.flag = "alluser";
    }
  }
};
</script>
<style lang="scss" scoped>
@mixin wh($w: 100%, $h: 100%) {
  width: $w;
  height: $h;
}
.user {
  @include wh();
  overflow-y: auto;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  .userinfo {
    height: 150px;
    padding: 60px;
    border-bottom: 1px solid rgb(179, 171, 171);
    .img {
      display: inline-block;
      position: relative;
      bottom: 50px;
    }
    .info {
      display: inline-block;
      margin-left: 20px;
      p {
        margin-top: 20px;
      }
    }
  }
  .alluser {
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
  }
  .adduser {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(68, 66, 66, 0.794);
    h3 {
      span:nth-child(2) {
        color: rgb(221, 48, 17);
        cursor: pointer;
        float: right;
      }
    }
    .form {
      margin-top: 30px;
      div:last-child {
        border-bottom: 1px solid rgb(202, 198, 198);
      }
    }
    .form > div {
      display: flex;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border: 1px solid rgb(202, 198, 198);
      border-bottom: none;
      p:nth-child(1) {
        flex: 2;
        color: rgb(245, 240, 240);
        border-right: 1px solid rgb(202, 198, 198);
      }
      p:nth-child(2) {
        box-sizing: border-box;
        padding-left: 5px;
        flex: 8;
        text-align: left;
        input {
          height: 20px;
          background: rgb(245, 240, 240);
        }
      }
    }
  }
}
</style>