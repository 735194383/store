import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/main/hello'
import About from '@/components/main/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hello',
      name: 'Hello',
      components: {
        main: Hello
      }
    },
    {
      path: '/about',
      name: 'About',
      components: {
        main: About
      }
    }
  ]
})
