<template lang='pug'>
    div.form
        div.info
            h2 注册
            p 有商城账号，
                span(@click='login') 我要登录
        el-form(label-width="100px")
            el-form-item(label="登录用户名" :rules="[{ required: true}]")
                el-input(suffix-icon="el-icon-user" v-model="form.account" autocomplete="on" type='text')
            el-form-item(label="密码" :rules="[{ required: true}]")
                el-input(suffix-icon="el-icon-lollipop" v-model="form.password" autocomplete="on" type='password')
            el-form-item(label="确认密码" :rules="[{ required: true}]")
                el-input(suffix-icon="el-icon-lollipop" v-model="form.truepassword" autocomplete="on" type='password')
            el-form-item(label="用户名" :rules="[{ required: true}]")
                el-input(suffix-icon="el-icon-user" v-model="form.username" autocomplete="on" type='text')
            el-form-item(label="性别" :rules="[{ required: true}]")
                el-radio(v-model="form.gender" label="男") 男
                el-radio(v-model="form.gender" label="女") 女
            el-form-item(label="身份证号" :rules="[{ required: true}]")
                el-input(suffix-icon="el-icon-user" v-model="form.idcard" autocomplete="on" type='text')
            el-form-item(label="邮箱" :rules="[{ required: true}]")
                el-input(suffix-icon="el-icon-user" v-model="form.email" autocomplete="on" type='text')
            el-form-item(label="手机" :rules="[{ required: true}]")
                el-input(suffix-icon="el-icon-user" v-model="form.mobile" autocomplete="on" type='text')
        el-button(type="warning" style='margin-left:100px') 注册
</template>
<script>
export default {
  name: "registry",
  data() {
    return {
      form: {
        account: "",
        password: "",
        truepassword: "",
        username: "",
        gender: "",
        idcard: null,
        email: "",
        mobile: null
      }
    };
  },
  methods: {
    login() {
      this.$emit("showLogin");
    }
  }
};
</script>
<style lang="scss" scoped>
</style>