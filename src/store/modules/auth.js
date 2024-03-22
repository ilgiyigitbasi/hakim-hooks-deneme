const state = {
  isLogin: false,
};

const getters = {
  isUserLoggedIn: (state) => state.isLogin,
};

const mutations = {
  SET_LOGIN_STATE(state, isLoggedIn) {
    state.isLogin = isLoggedIn;
  },
};

const actions = {
  setLoginState({ commit }, isLoggedIn) {
    commit("SET_LOGIN_STATE", isLoggedIn);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
