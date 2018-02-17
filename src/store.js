import Vue from 'vue'
import Vuex from 'vuex'
import danger from '@/data/danger'
import skills from '@/data/skills'

Vue.use(Vuex)

const user_skill = [0, 1, 4, 5]

const store = new Vuex.Store({
  state: {
    danger,
    skills,
    percent: 80,
    index: 0,
    chosen: [],
  },
  getters: {
    // doneTodos: state => {
    //   return state.todos.filter(todo => todo.done)
    // },
    index: state => state.index,
    current: state => {
      if (state.index < state.danger.length) {
        return state.danger[state.index]
      }
    },
    chosen: state => index => {
      return state.chosen.includes(index)
    },
    user_skills: state => {
      return state.skills.filter((s, i) => user_skill.includes(i))
    }
  },
  mutations: {
    next(state) {
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