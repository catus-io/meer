<template>
  <div class="meer-auth-w meer-signup-w">
    <div class="meer-auth-c meer-signup-c">
      <div class="meer-auth-title-c">
        <h1>Sign up</h1>
      </div>
      <div class="auth-input-w signup-input-w">
        <div class="auth-input-c">
          <font-awesome-icon icon="envelope"/>
          <input type="text" v-model="email" placeholder="Your email">
        </div>
        <div class="auth-input-c">
          <font-awesome-icon icon="user-alt"/>
          <input type="text" v-model="id" placeholder="Your id">
        </div>
        <div class="auth-input-c">
          <font-awesome-icon icon="user-alt" class="name"/>
          <input type="text" v-model="name" placeholder="Your Name">
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
          <button>Register</button>
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
  }
}
</script>
<style lang="scss" src="@/assets/scss/auth/meer-auth.scss"></style>
<style lang="scss" src="@/assets/scss/auth/meer-signup.scss"></style>