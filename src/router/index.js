import Vue from 'vue'
import Router from 'vue-router'
//  view
import Exchange from 'components/Exchange'
import Show from 'components/Show'
import Registration from 'components/Registration'
import Loading from 'components/Loading'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      children: [
        {
          path: '',
          component: Loading
        },
        {
          path: '/exchange',
          component: Exchange
        },
        {
          path: '/show',
          component: Show
        },
        {
          path: '/reg',
          component: Registration
        }
      ]
    }
  ]
})
