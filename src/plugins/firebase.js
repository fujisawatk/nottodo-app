import firebase from 'firebase/app'
import "firebase/auth"

// Firebase設定データ
var firebaseConfig = {
  apiKey: "AIzaSyDIaRYxHRM13TadGqValIVoH0iPgKGG7W4",
  authDomain: "nottodo-app.firebaseapp.com",
  databaseURL: "https://nottodo-app.firebaseio.com",
  projectId: "nottodo-app",
  storageBucket: "nottodo-app.appspot.com",
  messagingSenderId: "104050327149",
  appId: "1:104050327149:web:470ccf48eaac45611e4964",
};
// Firebase初期化
firebase.initializeApp(firebaseConfig);