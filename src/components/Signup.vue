<template>
  <div id="Singup">
    <h2>新規登録</h2>
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <button @click="signUp">登録</button>

    <p>
      アカウントを既にお持ちの方
      <router-link to="/signin">sign in now</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "Signup",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    // 登録ボタンが押された時のイベント処理
    signUp: function() {
      firebase
        .auth()
        // emailとpasswordに関連づけられたアカウントを作成するメソッド
        .createUserWithEmailAndPassword(
          this.email,
          this.password
        )
        .then(user => {
          // 成功時
          alert("Create account: " + user.user.email);
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