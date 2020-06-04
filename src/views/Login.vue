<template lang='pug'>
    div.login
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
                    p 你好
                        span(@click='jump("login")') 请登录
                    p(@click='jump("registry")') 免费注册
        div.middle
            div.container
              div.show
                div.font
                    img(src='../assets/logo.png')
                div.content
                    el-row
                        el-col(:span='14')
                            img(src='../assets/l_img.png')
                        el-col(:span='10')
                            div.form(v-if='flag')
                                div.info
                                    h2 登录
                                    p 还没有商城账号，
                                        span(@click='jump("registry")') 立即注册
                                el-form(label-width="100px")
                                    el-form-item(label="用户名")
                                       el-input(suffix-icon="el-icon-user" v-model="form.account" autocomplete="on" type='text')
                                    el-form-item(label="密码")
                                       el-input(suffix-icon="el-icon-lollipop" v-model="form.password" autocomplete="on" type='password')
                                el-button(type="warning" style='margin-left:100px') 登录
                            registry(@showLogin='showLogin' v-if='!flag')
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
import registry from "@/components/Registry.vue";
export default {
  components: { registry },
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
      form: {
        account: "",
        password: ""
      },
      flag: true
    };
  },
  methods: {
    jump(str) {
      if (str === "login") {
        this.flag = true;
      } else {
        this.flag = false;
      }
    },
    showLogin() {
      this.flag = true;
    }
  },
  mounted() {
    if (this.$route.query.action) {
      this.flag = false;
    }
  }
};
</script>
<style lang="scss">
.login {
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
  .middle {
    width: 100%;
    background: #fff4ef;
    .container {
      .show {
        width: 100%;
        .font {
          height: 140px;
          display: flex;
          align-items: center;
        }
        .content {
          margin-top: 45px;
          padding: 20px 0 100px;
          .el-row {
            .el-col:nth-child(1) {
              img {
                width: 90%;
                height: 400px;
              }
            }
            .el-col:nth-child(2) {
              .form {
                width: 100%;
                margin: 0 auto;
                background: #fff;
                border-radius: 4px;
                box-shadow: 2px 2px 20px rgb(161, 157, 157);
                padding: 40px 30px 50px;
                box-sizing: border-box;
                .info {
                  display: flex;
                  height: 50px;
                  font-size: 12px;
                  color: #555555;
                  h2 {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 20px;
                    color: #555555;
                    margin-left: 64px;
                  }
                  span {
                    cursor: pointer;
                    color: #ff4e00;
                  }
                  p {
                    flex: 2;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  }
                }
                .el-button {
                  width: 287px;
                  background: #fd5810;
                }
              }
            }
          }
        }
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