import { createStore } from "vuex";
import CommentsApi from '../server/comments-api'
import { IComments } from "./comment-model";
export default createStore({
  state: {},

  getters: {},

  mutations: {},

  actions: {},

  modules: {
    authModule: {
      namespaced: true,
      state: () => ({
        token: localStorage.getItem("token") || "",
      }),

      getters: {
        getToken: (state) => state.token,
      },

      mutations: {
        setToken: (state, value) => (state.token = value),
      },
      actions: {},
    // },
    // CommentsModule: {
    //   namespaced: true,

    //   state: {
    //     comments: IComments = []
    //   },

    //   getters: {
    //     getComment: (state) => state.getComment,
    //   },
      // mutations: {
      //   [getAllComments](state)
      // },
      // actions: {
      //   MudaTema: (context ) => context.commit('MudaTema')
      // },
    },
  },
});
