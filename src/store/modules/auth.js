const state = {
  token: localStorage.getItem("token") || null,
};

const getters = {
  getToken: (state) => state.token,
};

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },
};

const actions = {
  setLoginState({ commit }, isLoggedIn) {
    commit("SET_LOGIN_STATE", isLoggedIn);
  },
  setToken({ commit }, token) {
    commit("SET_TOKEN", token);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
