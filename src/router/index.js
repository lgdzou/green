import Vue from 'vue'
import Router from 'vue-router'

//view
import Loading from 'components/Loading'
import Show from 'components/Show'
import Registration from 'components/Registration'


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
