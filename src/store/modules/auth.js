const state = {
  isLogin: false,
  token: null,
};

const getters = {
  isUserLoggedIn: (state) => state.isLogin,
  getToken: (state) => state.token,
};

const mutations = {
  SET_LOGIN_STATE(state, isLoggedIn) {
    state.isLogin = isLoggedIn;
  },
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
