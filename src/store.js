import Vue from 'vue'
import Vuex from 'vuex'
import danger from '@/data/danger'
import skills from '@/data/skills'

Vue.use(Vuex)

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
    all_skills: state => state.skills,
    user_skills: state =>  state.skills.filter(s => [0, 2, 4, 5].includes(s.id)),
    chosen_skills: state => state.skills.filter(s => state.chosen.includes(s.id)),
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
  },
  mutations: {
    answer(state) {
      let answers = 0
      const skills = state.danger[state.index].skill
      for (let i in state.chosen) {
        if (skills.includes(state.chosen[i])) {
          answers++
        }
      }
      if (answers === 0) {
        return state.percent -= 10
      }
      if (answers === 2) {
        return state.percent += 10
      }
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
          state.chosen.shift()
          state.chosen.push(index)
        } else {
          state.chosen.push(index)
        }
      }
    }
  }
})

export default store
