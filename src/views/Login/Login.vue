<template>
  <div class="loginPage">
    <Form
      ref="loginForm"
      class="formIview"
      :model="loginForm"
      :rules="loginRules"
    >
      <h3>PMS后台管理系统</h3>
      <FormItem prop="user">
        <Input type="text" v-model="loginForm.user" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input
          type="password"
          v-model="loginForm.password"
          placeholder="Password"
          @keyup.enter.native="handleLogin"
        >
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleLogin('loginForm')">登录</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
// import { isWscnEmail } from "@/utils/validate";
export default {
  name: "Login",
  data() {
    const validateUser = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入密码"));
      } else if (value.length < 6) {
        callback(new Error("密码不能小于6位"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        user: "admin@wz.com",
        password: "123456"
      },
      loginRules: {
        user: [{ required: true, trigger: "blur", validator: validateUser }],
        password: [{ required: true, trigger: "blur", validator: validatePass }]
      }
    };
  },
  methods: {
    handleLogin(name) {
      // $refs[name]
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$store
            .dispatch("LoginByEmail", this.loginForm)
            .then(() => {
              this.$Message.success("登录成功！");
              this.$router.push({ path: "/" });
            })
            .catch(err => {
              // this.$Message.error(err);
              this.$Message.error("登录失败！");
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/reset";
// @import url('../styles/reset.scss');
.loginPage {
  position: relative;
  height: 100vh;
  .formIview {
    position: absolute;
    width: 400px;
    padding: 30px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    box-shadow: 2px 1px 18px #333333;
    h3 {
      line-height: 40px;
      text-align: center;
      font-size: 22px;
      color: #333;
    }
  }
}
</style>
