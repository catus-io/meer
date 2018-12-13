<template>
  <div class="meer-auth-w meer-signup-w">
    <div class="meer-auth-c meer-signup-c">
      <div class="meer-auth-title-c">
        <h1>Sign up</h1>
      </div>
      <div class="auth-input-w signup-input-w">
        <div class="auth-input-c">
          <font-awesome-icon icon="user-alt"/>
          <input type="text" v-model="id" @keyup="checkId" placeholder="Your id">
          <span>{{validationId}}</span>
        </div>
        <div class="auth-input-c">
          <font-awesome-icon icon="key"/>
          <input type="password" v-model="password" @keyup="checkPw" placeholder="Password">
        </div>
        <div class="auth-input-c">
          <font-awesome-icon icon="key" class="re-password"/>
          <input type="password" v-model="repassword" @keyup="checkPw" placeholder="Repeat your password">
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
      id: '',
      password: '',
      repassword: '',
      validationId: ''
    }
  },
  methods : {
    allCheck() {
      this.checkId()
      this.checkPw()
    },
    validateOfIdLength() {
      const length = this.id.length
      if(length < 5) return true
      else if(length > 30) return true
      // return (length < 5 || length > 30)
    },
    validationRegExp(item, reg) {
      const regExp = new RegExp(reg, 'g');
      return regExp.test(item)
    },
    checkId() {
      if(this.validateOfIdLength()) {
        console.log(this.validateOfIdLength())
        this.validationId = '아이디는 5자 ~ 30자 내외로 입력하세요'
      }
      if(this.validationRegExp(this.id, '[^\\w]')) this.validationId = '특수 문자 넣지마 시바'
    },
    checkPw() {
      if(this.password.length < 8) {
        this.password = ''
        // alert('암호를 8자 이상 입력해주세요.')
      } else{
        if(this.password != this.repassword) {
          this.repassword = ''
          // alert('입력하신 비밀번호가 일치하지 않습니다.')
        }
      }
    }
  },
}
</script>
<style lang="scss" src="@/assets/scss/auth/meer-auth.scss"></style>
<style lang="scss" src="@/assets/scss/auth/meer-signup.scss"></style>