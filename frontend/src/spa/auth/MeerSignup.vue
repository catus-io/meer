<template>
  <div class="meer-auth-w meer-signup-w">
    <div class="meer-auth-c meer-signup-c">
      <div class="meer-auth-title-c">
        <h1>Sign up</h1>
      </div>
      <div class="auth-input-w signup-input-w">
        <div class="auth-input-c">
          <font-awesome-icon icon="user-alt"/>
          <input type="text" v-model="id" placeholder="Your id">
        </div>
        <div class="auth-input-c">
          <font-awesome-icon icon="key"/>
          <input type="password" v-model="password" placeholder="Password">
        </div>
        <div class="auth-input-c">
          <font-awesome-icon icon="key" class="re-password"/>
          <input type="password" v-model="repassword" placeholder="Repeat your password">
        </div>
        <div class="signup-policy-c">
          <input type="checkbox">
          <span>I agree all statements in <router-link to="#">Terms of service</router-link></span>
        </div>
        <div class="register-button-w">
          <button @click = allCheck() >Register</button>
        </div>
      </div>
    </div>
    <div class="meer-auth-c meer-signup-c">
      <div class="logo-w">
        <img src="@/assets/logo.png" alt="logo">
      </div>
      <div class="to-login-w">
        <div class="to-login-c">
          <router-link to="/signin">이미 계정을 가지고 계신가요?</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'meer-signup',
  data() {
    return {
      email: '',
      id: '',
      name: '',
      password: '',
      repassword: '',
    }
  },
  methods : {
    allCheck() {
      this.checkId()
      this.checkPw()
    },
    checkId() {
      if(this.id.length < 5) {
        this.id = ''
        alert('아이디를 5자 이상 입력해주세요')
      }
      if(this.id.length > 30) {
        this.id = ''
        alert('아이디를 30자 이하로 입력해주세요.')
      }
      else {
        this.id = this.id.replace(/[^A-Za-z0-9_]/g,'')
      }
    },
    checkPw() {
      if(this.password.length < 8) {
        this.password = ''
        alert('암호를 8자 이상 입력해주세요.')
      }
      if(this.password =! this.repassword) {
        this.repassword = ''
        alert('입력하신 비밀번호가 일치하지 않습니다.')
      }
      console.log(this.password.length)
      console.log(this.password)
      console.log(this.repassword)
    }
  },
}
</script>
<style lang="scss" src="@/assets/scss/auth/meer-auth.scss"></style>
<style lang="scss" src="@/assets/scss/auth/meer-signup.scss"></style>