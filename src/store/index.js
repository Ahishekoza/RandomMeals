import { createStore } from 'vuex'

export default createStore({
  state: {
    searchedMeals: []
  },
  getters: {
  },
  mutations: {
    setSearchedMeals(state,meals){
      state.searchedMeals = meals 
    }
  },
  actions: {
    setSearchedMeals ({commit},meals){
      commit('setSearchedMeals',meals)
    }
  },
  modules: {
  }
})
