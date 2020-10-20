import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login.vue'
import Count from '../views/Count.vue'
import Goodsclass from "../views/Goodsclass.vue"
import Goods from "../views/Goods.vue"
import Specs from "../views/Specs.vue"
import Userpower from "../views/Userpower.vue"
import Powerctrl from "../views/Powerctrl.vue"
import Order from "../views/Order.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    // redirect: '/home/count',
    children: [
      {path: '/count', component: Count, },
      {path:'/goodsclass',component:Goodsclass},
      {path:'/goods',component:Goods},
      {path:'/specs',component:Specs},
      {path:'/userpower',component:Userpower},
      {path:'/powerctrl',component:Powerctrl},
      {path:'/order',component:Order},
    ],
    component: Home,

  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {

  //to 要切换过去的那个组件对象 $route, from要切走的那个 ，next 允许不允许切换 是一个函数 。

  var token = localStorage.getItem('token');

  // console.log(token)

  if (token && to.path == "/") {//如果你有登录状态，并且即将访问的页面是login 自动跳 position
    next("/count")
  }

  if (!token&& to.path != "/" && to.meta.requiresAuth) { //当你没有登录，访问的页面不是 login 
    next("/")
  }

  next()


})

export default router
