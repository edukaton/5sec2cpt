import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import NewScenario from '@/components/NewScenario'
import ChooseHero from '@/components/ChooseHero'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    }, {
      path: '/nowy-scenariusz',
      name: 'NewScenario',
      component: NewScenario
    }, {
      path: '/wybor-postaci',
      name: 'ChooseHero',
      component: ChooseHero
    }
  ]
})
