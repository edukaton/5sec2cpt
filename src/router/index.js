import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import HelloWorld from '@/components/HelloWorld'
import Game from '@/components/Game'
=======
import LandingPage from '@/components/LandingPage'
import NewScenario from '@/components/NewScenario'
import ChooseHero from '@/components/ChooseHero'
>>>>>>> 4c7df14b7a18b7426f6fc7e7ae4d30497c4d2696

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/gra',
      name: 'game',
      component: Game,
=======
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
>>>>>>> 4c7df14b7a18b7426f6fc7e7ae4d30497c4d2696
    }
  ]
})
