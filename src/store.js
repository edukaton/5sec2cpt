import Vue from 'vue'
import Vuex from 'vuex'
import danger from '@/data/danger'
import skills from '@/data/skills'

Vue.use(Vuex)

const user_skill = [0, 2, 4, 5]

const store = new Vuex.Store({
  state: {
    danger,
    skills,
    percent: 50,
    index: 0,
    chosen: [],
  },
  getters: {
    // doneTodos: state => {
    //   return state.todos.filter(todo => todo.done)
    // },
    defense: (state, getters) => {
      const { skill } = getters.current
      return state.skills.filter((s) => skill.includes(s.id))
    },
    percent: state => state.percent,
    index: state => state.index,
    current: state => {
      if (state.index < state.danger.length) {
        return state.danger[state.index]
      }
    },
    chosen: (state, getters) => {
      return getters.user_skills.filter(s => state.chosen.includes(s.id))
    },
    ifChosen: state => id => {
      return state.chosen.includes(id)
    },
    ifSuccess: (state, getters) => index => {
      const { skill } = getters.current
      return skill.includes(index)
    },
    user_skills: state => {
      return state.skills.filter(s => user_skill.includes(s.id))
    },
    all_skills: state => {
      return state.skills
    }
  },
  mutations: {
    answer(state) {
      // TODO: recalculate
    },
    next(state) {
      state.chosen = []
      state.index++
    },
    chose(state, index) {
      if (state.chosen.includes(index)) {
        state.chosen.splice(state.chosen.indexOf(index), 1)
      } else {
        if (state.chosen.length >= 2) {
          // alert: możesz wybrać maksymalnie dwie karty!
        } else {
          state.chosen.push(index)
        }
      }
    }
  }
})

export default store