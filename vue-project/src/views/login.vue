<template>
  <div class="login">
  <div class="bg1"><img src="../img/bg01.png" alt=""> </div>
  <div class="warp">
      <el-row type="flex" class="row-bg" justify="center">
      <el-col>
        <div class="login-box">
          <h2>用户登录</h2>
          <el-form
            :model="ruleForm"
            status-icon
            class="demo-ruleForm"
            :rules="rules"
            ref="ruleForm"
          >
            <el-form-item prop="username">
              <el-input
                placeholder="请输入用户名"
                type="text"
                autocomplete="off"
                v-model="ruleForm.username"
              >
                <i slot="prefix" class="el-input__icon el-icon-user"></i>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                placeholder="请输入密码"
                type="password"
                autocomplete="off"
                v-model="ruleForm.password"
              >
                <i slot="prefix" class="el-input__icon el-icon-lock"></i>
              </el-input>
            </el-form-item>

            <el-form-item>
              <el-button
                type="primary"
                @click="submitForm('ruleForm')"
                class="ti"
                >提交</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
  </div>
</template>

<script>

import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 4, max: 6, message: "长度在4到6个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    ...mapActions(["getLogin"]),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        console.log(valid);
        //数据校验的方法
        const loading = this.$loading({
          lock: true,
          text: "登录中……",
          spinner: "el-icon-loading",
          background: "rgba(0,0,0,0.7)",
        });
        if (valid) {
          //发请求跳转页面
          this.getLogin(this.ruleForm); //同步函数
          // let token = localStorage.token;
          // if (token) {
          //   this.$router.replace("/about");
          // }
         setTimeout(()=>{
            if(localStorage.token){
            this.$router.replace("/count");
          }
         },1000)
        } else {
          //失败
          this.$message.error("请正确填写！");
        }
        loading.close();
      });
    },
    handleLogin() {},
  },
  computed: {
    ...mapState({
      // username:(state)=>state.login.userInfo.data.username
      msg: (state) => state.login.userInfo.msg,
    }),

    // 直接当做普通属性调用不加括号
    // 任何data中数据变化立即重新计算
    // 计算属性会缓存
  },
};
</script>
<style>
@import "../assets/index.css";

.login-box {
  width: 320px;
  height: 260px;
  padding: 20px 40px;
  background-color: #a6a0a080;
  margin: 0 auto;
}
.login-box h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #000;
}
.ti {
  width: 320px;
}
.login{
  width: 100vw;
  height: 100vh;
  background: url("../img/text1.jpg") no-repeat;
  background-size: 100% 100%;
}
.warp{
  padding-top: 60px;
}
.bg1{
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
  background-color: hsla(0,0%,100%,.2);
}
.bg1 img{
  width: 300px;
  height: 70px;
}
</style>