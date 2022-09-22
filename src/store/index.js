import { createStore } from "vuex";
import { State } from "./auth/types";
import CommentsApi from '../server/comments-api'
import { IComments } from "./comment-model";
export default createStore({
  state: {},

  getters: {},

  mutations: {},

  actions: {},

  modules: {
    // authModule: {
    //   namespaced: true,
    //   state: () => ({
    //     token: localStorage.getItem("token") || "",
    //     role: localStorage.getItem("role") || "",
    //     _id: localStorage.getItem("_id") || "",
    //     name: "",
    //     //:localStorage.getItem("name") || "",
    //   }),

    //   getters: {
    //     getName: (state) => state.name,
    //     getToken: (state) => state.token,
    //     getRole: (state) => state.role,
    //     isAdmin: (state) => state.role === "admin",
    //     getId: (state) => state._id,
    //   },

    //   mutations: {
    //     setName: (state, value) => (state.name = value),
    //     setToken: (state, value) => (state.token = value),
    //     setRole: (state, value) => (state.role = value),
    //     setId: (state, value) => (state._id = value),
    //   },
    //   actions: {},
    // },
    CommentsModule: {
      namespaced: true,

      state: {
        comments: IComments = []
      },

      getters: {
        getComment: (state) => state.getComment,
      },
      // mutations: {
      //   [getAllComments](state)
      // },
      // actions: {
      //   MudaTema: (context ) => context.commit('MudaTema')
      // },
    },
  },
});
