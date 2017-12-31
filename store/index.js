import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      achievements: [],
      levels: []
    },
    mutations: {
      ADD_ACHIEVEMENT(state, achievement) {
        state.achievements.push(achievement)
      },
      ADD_LEVEL(state, level) {
        state.levels.push(level)
      }
    }
  })
}

export default createStore
