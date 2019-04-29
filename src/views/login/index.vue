<template>
  <el-container class="login-container">
    <el-card class="animated flipInY">
      <div slot="header" class="el-card-header">
        <img src="../../../static/image/login-logo.png" alt="">
        <h2 class="login-title">{{$t('login.title')}}</h2>
      </div>
      <el-form :rules="rules" :model="loginForm" ref="loginForm" label-width="60px">
        <el-form-item :label="$t('login.account')" prop="username" style="position:relative">
          <el-input type="text" v-model="loginForm.username" @keyup.enter.native="goToPwdInput"></el-input>
          <span class="svg-container svg-container_user">
            <icon-svg icon-class="user" />
          </span>
        </el-form-item>
        <el-form-item :label="$t('login.password')" prop="pwd">
          <el-input type="password" v-model="loginForm.pwd" @keyup.enter.native="onLogin" ref="pwd"></el-input>
          <span class="svg-container svg-container_password">
            <icon-svg icon-class="password" />
          </span>
        </el-form-item>
        <el-form-item :label="$t('login.remember')" label-width="80px">
          <el-switch v-model="remember"></el-switch>
        </el-form-item>
        <!--点击事件如何携带form参数-->
        <!--如何从i8n中获取配置-->
        <el-button type="primary" @click="onLogin('loginForm')" :loading="loading">{{$t('login.login')}}</el-button>
      </el-form>
    </el-card>
    <!-- particles.js container -->
    <div id="particles"></div>
  </el-container>
</template>
<script>
  import { isValidUsername } from '@/utils/validate'
  import { saveToLocal, loadFromLocal } from '@/common/local-storage'
  import { mapActions } from 'vuex'
  /* eslint-disable*/
  import particles from 'particles.js'
  export default {
    data() {
      // username 验证
      // const let var
      const validateUsername = (rule, value, callback) => {
        if (!isValidUsername(value)) {
          // 这里的callback是怎么生效的?
          callback(new Error('请输入正确的用户名'))
        } else {
          callback()
        }
      }
      // pwd 验证
      const validatePwd = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('密码不能小于6位'))
        } else {
          callback()
        }
      }
      return {
        loginForm: {
          username: 'admin',
          pwd: '123456'
        },
        remember: false,
        loading: false,
        // 为输入框加上触发动作的,validator 验证器
        rules: {
          username: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { required: true, trigger: 'blur', validator: validateUsername },
            { required: true, trigger: 'change', validator: validateUsername }
          ],
          pwd: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { required: true, trigger: 'blur', validator: validatePwd },
            { required: true, trigger: 'change', validator: validatePwd }
          ]
        }
      }
    },
    created() {
      // 初始化时读取localStorage用户信息
      if (loadFromLocal('remember', false)) {
        this.loginForm.username = loadFromLocal('username', '')
        this.loginForm.pwd = loadFromLocal('password', '')
      } else {
        this.loginForm.username = ''
        this.loginForm.pwd = ''
      }
    },
    methods: {
      // 使用store中的login
      ...mapActions([
        'login'
      ]),
      // 用户名输入框回车后切换到密码输入框
      goToPwdInput() {
        // 元素定位方法1,$el:ref=pwd的root dom;注意dom对象和js对象间的转换
        this.$refs.pwd.$el.getElementsByTagName('input')[0].focus()
//        this.$refs.pwd.focus()
      },
      // 登录操作
      onLogin() {
        // 失去焦点
        this.$refs.pwd.$el.getElementsByTagName('input')[0].blur()
        // form 对象的自有方法,做了哪些验证呢?
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true
            // 使用上一步中从store中get的login()
            this.login(this.loginForm).then(() => {
              // 保存账号
              if (this.remember) {
                saveToLocal('username', this.loginForm.username)
                saveToLocal('password', this.loginForm.pwd)
                saveToLocal('remember', true)
              } else {
                saveToLocal('username', '')
                saveToLocal('password', '')
                saveToLocal('remember', false)
              }
              this.$router.push({ path: '/' })
            }).catch(() => {
              this.loading = false
            })
          } else {
            return false
          }
        })
      },
      // 页面提示
      accountTip() {
        this.$notify({
          title: '账号：admin',
          dangerouslyUseHTMLString: true,
          message: '<strong>密码：<i>123456</i></strong>',
          type: 'success',
          position: 'bottom-left'
        })
      }
    },
    watch: {
    },
    mounted() {
    }
  }
</script>
<style scoped lang="stylus">
  .login-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: mix(#494166, #424b50) url('../../../static/image/login-bg.jpg') center no-repeat;
    background-size: cover;
    overflow: hidden;
    .show-account {
      position: absolute;
      left: 15px;
      bottom: 20px;
      color: red;
    }
    .el-card {
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -300px 0 0 -200px;
      width: 400px;
      height: 450px;
      background: #fff;
      .el-card-header {
        text-align: center;
      }
      .login-title {
        margin: 0;
        text-align: center;
      }
      .el-input /deep/ .el-input__inner {
        text-indent: 12px;
      }
      .svg-container {
        position: absolute;
        top: 0;
        left: 5px;
        color: #889aa4;
        &_user {
          font-size: 20px;
        }
        &_password {
          left: 7px;
          font-size: 16px;
        }
      }
      .el-button--primary {
        width: 100%;
      }
    }
  }
  #particles {
    width: 100%;
    height: 100%;
    /*background-color: #b61924;*/
    /*background-color: #23ae88;*/
    background-color: transparent;
    // background-image: url('/static/image/login-bg.jpg');
    /*background-image: url('../img/bg_particles.png');*/
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }
</style>
