import { createStore } from 'vuex'

export default createStore({
  state: {
    fadeWay: "fadeEnter",//transition运动方式
    pageIndex:0//跳回主页 对应index
  },
  mutations: {
    changeWay(state, data) {
      state.fadeWay = data
    },
    changeIndex(state, data){
      state.pageIndex = data
    }

  },
  actions: {
    changeFadeWay({ commit }, data) {
      commit("changeWay", data)
    },
    changePageIndex({ commit }, data){
      commit("changeIndex", data)
    }
  },
  modules: {
  }
})
