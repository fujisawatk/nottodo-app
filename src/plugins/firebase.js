import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/firestore"

// Firebase設定データ
const config = {
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
const firebaseApp = firebase.initializeApp(config);
// Firestore設定
const db = firebaseApp.firestore()
// Timestampクラスに変換させるオプション
db.settings({ timestampsInSnapshots: true })