<template>
  <div class="meer-auth-w meer-signin-w">
    <div class="meer-auth-c meer-signin-c">
      <div class="logo-w">
        <img src="@/assets/logo.png" alt="logo">
      </div>
      <div class="to-login-w">
        <div class="to-login-c">
          <router-link to="/signin">아이디 비밀번호가 기억나지 않으신가요?</router-link>
        </div>
      </div>
    </div>
    <div class="meer-auth-c meer-signin-c">
      <div class="meer-auth-title-c">
        <h1>Sign in</h1>
      </div>
      <div class="auth-input-w">
        <div class="auth-input-c">
          <font-awesome-icon icon="user-alt"/>
          <input type="text" v-model="id" placeholder="Your id">
        </div>
        <div class="auth-input-c">
          <font-awesome-icon icon="key"/>
          <input type="password" v-model="password" placeholder="Password">
        </div>
        <div class="register-button-w">
          <button>Login</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'meer-signin',
  data() {
    return {
      id: '',
      password: '',
    }
  }
}
</script>
<style lang="scss" src="@/assets/scss/auth/meer-auth.scss"></style>
<style lang="scss" src="@/assets/scss/auth/meer-signin.scss"></style>