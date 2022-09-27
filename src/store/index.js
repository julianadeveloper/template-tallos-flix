import Vuex from "vuex";
import Vue from 'vue'


Vue.use(Vuex)
export default new Vuex.Store({
  state: {
  },

  getters: {},

  mutations: {},

  actions: {},

  modules: {
    authModule: {
      namespaced: true,
      state: ()=>({
        token: localStorage.getItem("token") || ""
      }),
      getters: {
        getToken: (state) => state.token,
      },

      mutations: {
        setToken: (state, value) => (state.token = value),
      },
      actions: {
        SalvaToken: (context) => context.commit('setToken')
      },

    },

  },
});
