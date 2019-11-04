import Vue from 'vue'
import Router from 'vue-router'
import Task from '@/components/Task.vue'
import Signup from '@/components/Signup'
import Signin from '@/components/Signin'
import { auth } from '@/plugins/firebase'


Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: 'signin'
    },
    {
      path: '/',
      name: 'task',
      component: Task,
      // ルート認証がいる画面であることを宣言
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ]
})

// ルートガード
router.beforeEach((to, from, next)=>{
  // ルート認証があるかチェック
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth){
    // ユーザー認証されているかを確認するメソッド
    auth.onAuthStateChanged(function(user){
      if(user){
        next()
      }else{
        next({
          path: '/signin',
          query: {redirect: to.fullPath}
        })
      }
    })
  }else{
    next()
  }
})

export default router