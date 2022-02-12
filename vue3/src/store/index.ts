import { createStore } from 'vuex'

export default createStore({
  state: {
    fadeWay:"fadeEnter",//transition运动
  },
  mutations: {
    changeWay(state,data) {
       state.fadeWay = data
    }
  },
  actions: {
    changeFadeWay({commit},data){
      commit("changeWay",data)

    }
  },
  modules: {
  }
})
