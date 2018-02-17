import Vue from 'vue'
import Router from 'vue-router'
import Game from '@/components/Game'
import Quest from '@/components/Quest'
import Result from '@/components/Result'
import LandingPage from '@/components/LandingPage'
import NewScenario from '@/components/NewScenario'
import ChooseHero from '@/components/ChooseHero'

Vue.use(Router)

export default new Router({
  routes: [
  {
    path: '/gra',
    name: 'game',
    component: Game,
    children: [
      {
        path: 'zagrozenie',
        component: Quest
      },
      {
        path: 'rozwiazanie',
        component: Result
      },
    ],
},
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
