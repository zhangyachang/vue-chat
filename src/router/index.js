import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import headNav from '../components/headNav'
import login from '../page/login'
import chatMenu from '../page/chatMenu'
import chatToFriends from '../page/chatToFriends'

import VueSocketIo from 'vue-socket.io'
import socketio from 'socket.io-client'
import axios from 'axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import config from '../config/config'

Vue.use(VueSocketIo, socketio(config.ioHttp));//与服务端链接
Vue.use(MintUI)

Vue.use(Router)
Vue.component('headNav', headNav)
Vue.prototype.$axios = axios
Vue.prototype.$config = config

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/chatMenu',
      name: 'chatMenu',
      component: chatMenu
    },
    {
      path: '/chatToFriends',
      name: 'chatToFriends',
      component: chatToFriends
    },
  ]
})
