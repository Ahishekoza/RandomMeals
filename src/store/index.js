import { createStore } from 'vuex'

export default createStore({
  state: {
    searchedMeals: [],
    searchByLetter: [],
    searchByIngredient: [],
  },
  getters: {
  },
  mutations: {
    setSearchedMeals(state,meals){
      state.searchedMeals = meals 
    },
    setSearchedByLetters(state,meals){
      state.searchByLetter = meals
    },
    setSearchedByIngredients(state,meals){
      state.searchByIngredient = meals
    }
  },
  actions: {
    setSearchedMeals ({commit},meals){
      commit('setSearchedMeals',meals)
    },
    setSearchedByLetters ({commit},meals){
      commit('setSearchedByLetters',meals)
    },
    setSearchedByIngredients({commit},meals){
      commit('setSearchedByIngredients',meals)
    }
  },
  modules: {
  }
})
