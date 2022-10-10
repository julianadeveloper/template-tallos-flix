import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {},

  getters: {},

  mutations: {},

  actions: {},

  modules: {
    authModule: {
      namespaced: true,
      state: () => ({
        token: localStorage.getItem("token") || ""
      }),
      getters: {
        getToken: state => state.token
      },
      mutations: {
        setToken: (state, value) => (state.token = value)
      }
    },
    dashboard: {
      namespaced: true,
      state: () => ({
        users: [],
        theaters: [],
        movies: [],
        comments: [],
        sessions: []
      }),
      getters: {
        getUsers: state => state.users,
        getTheaters: state => state.theaters,
        getMovies: state => state.movies,
        getComments: state => state.comments,
        getSessions: state => state.sessions
      },
      mutations: {
        setUsers: (state, value) => (state.users = value),
        setTheaters: (state, value) => (state.theaters = value),
        setMovies: (state, value) => (state.movies = value),
        setComments: (state, value) => (state.comments = value),
        setSessions: (state, value) => (state.sessions = value)
      }
    }
  }
});
