<template>
  <div class="meer-auth-w meer-signup-w">
      <div class="meer-auth-c meer-signup-c">
        <div class="meer-auth-title-c">
          <h1>Sign up</h1>
        </div>
        <div class="auth-input-w signup-input-w">
          <form v-on:submit.prevent="onSubmit">
            <div class="auth-input-c">
              <font-awesome-icon icon="user-alt"/>
              <input type="text" v-model="id" @keyup="checkId" placeholder="Your id">
              <p>{{validationId}}</p>
            </div>
            <div class="auth-input-c">
              <font-awesome-icon icon="key"/>
              <input type="password" v-model="password" @keyup="checkPw" placeholder="Password">
            </div>
            <div class="auth-input-c">
              <font-awesome-icon icon="key" class="re-password"/>
              <input type="password" v-model="repassword" @keyup="checkPw" placeholder="Repeat your password">
              <p>{{validationPw}}</p>
            </div>
            <div class="signup-policy-c">
              <input type="checkbox">
              <span>I agree all statements in <router-link to="#">Terms of service</router-link></span>
            </div>
            <div class="register-button-w">
              <!-- <button @click=allCheck() >Register</button> -->
              <button type="submit" >Register</button>
            </div>
          </form>
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
import validation from '@/commons/validations/validations.js'
export default {
  name: 'meer-signup',
  data() {
    return {
      id: '',
      password: '',
      repassword: '',
      validationId: '',
      validationPw: ''
    }
  },
  methods : {
    checkId() {
      let id = this.id
      if(validation.length(id, 5, 30)) {
        this.validationId = '아이디는 5자 ~ 30자 내외로 입력하세요'
      }
      else this.validationId = '' 
      if(validation.regExp(this.id, '[^\\w]')) this.validationId = '특수 문자는 입력하실 수 없습니다.'
    },
    checkPw() {
      let pw = this.password
      let repw = this.repassword
      if(validation.length(pw, 8)) {
        this.validationPw = '암호는 8자 이상 입력하세요'
      }
      else this.validationPw = ''
      if(repw && !validation.compare(pw, repw)) this.validationPw = '암호가 일치하지 않습니다.'
    },
    onSubmit() {
      const baseURI = 'http://localhost:3000';
      this.$http.post(`${baseURI}/signup`, { id: this.id, password: this.password })
      .then(() => this.$router.push('/signin'))
      .catch(err => this.validationId = '이미 있는 아이디입니다.')
    }
  },
}
</script>
<style lang="scss" src="@/assets/scss/auth/meer-auth.scss"></style>
<style lang="scss" src="@/assets/scss/auth/meer-signup.scss"></style>