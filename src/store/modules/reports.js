import * as api from "../../axios/api";

const state = {
  todos: [],
};

const getters = {
  getTodos: (state) => state.todos,
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await api.getTodos();
    commit("setTodos", response.data);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
