import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入需要的页面
import Home from '@/views/Home/Home.vue'
import User from '@/views/User/User.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/user', component: User }
]

const router = new VueRouter({
  routes,
  // mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    // 只有调用了history.pushState()的时候才会触发这个方法，也就是当我们点击浏览器中的“<-” "->"的时候

    // console.log('to')
    // console.log(to)
    // console.log('from')
    // console.log(from)
    console.log(window.scrollY)
    console.log('window.scrollY')
    // 用这个方法实现期望滚动到哪一位置，
    // return { x: 0, y: 400 }

    // 判断如果滚动条的位置存在直接返回当前位置，否则返回到起点
    // savedPosition只有当用户点击前进后退，或者go(-1)的时候才会调用
    // console.log('savedPosition,')
    // console.log(savedPosition)
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: to.meta.top ? to.meta.top : 0 }
    }
  }
})

router.beforeResolve(function(to, from, next) {
  // 和 全局前置守卫类似
  from.meta.top = window.scrollY
  console.log('Resolve')
  next()
})
router.afterEach((to, from) => {
  console.log('after')
})
export default router
