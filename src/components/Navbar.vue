<template>
  <nav class="navbar">
    <div class="nav-wrapper indigo darken-2">
      <router-link to="">
        <span class="brand-logo">NotToDo-app</span>
      </router-link>

      <ul class="right hide-on-med-and-down">
        <li><router-link to="/signin">ログイン</router-link></li>
        <li><router-link to="/signup">サインアップ</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {

    }
  }
}
</script>

<style>
</style>