<template>
  <div id="Singin">
    <h2>ログイン</h2>
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <button @click="signIn">ログイン</button>

    <p>
      アカウントをお持ちでない方
      <router-link to="/signup">アカウント作成</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "Signip",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    // ログインボタンが押された時のイベント処理
    signIn: function() {
      firebase
        .auth()
        // emailとpasswordに関連づけられたアカウントでログインするメソッド
        .signInWithEmailAndPassword(
          this.email,
          this.password
        )
        .then(user => {
          // 成功時
          alert("success: " + user.user.email);
          this.$router.push("/");
        })
        .catch(error => {
          // 失敗時
          alert(error.message);
        });
    }
  }
};

</script>
 
<style>
</style>