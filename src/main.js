import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// Firebase設定データ
var firebaseConfig = {
  apiKey: "AIzaSyDIaRYxHRM13TadGqValIVoH0iPgKGG7W4",
  authDomain: "nottodo-app.firebaseapp.com",
  databaseURL: "https://nottodo-app.firebaseio.com",
  projectId: "nottodo-app",
  storageBucket: "nottodo-app.appspot.com",
  messagingSenderId: "104050327149",
  appId: "1:104050327149:web:470ccf48eaac45611e4964",
  measurementId: "G-Z7P5XBVFFF"
};
// Firebase初期化
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
