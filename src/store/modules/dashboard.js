const state = {
  tripsSuccess: localStorage.getItem("tripsRequestSuccess") || null,
};

const getters = {
  tripsSuccess: (state) => state.tripsSuccess,
};

const mutations = {
  SET_TRIPS_SUCCESS(state, success) {
    state.tripsSuccess = success;
  },
};

const actions = {
  setTripsSuccess({ commit }, success) {
    commit("SET_TRIPS_SUCCESS", success);
    console.log("Trips Success:", success);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
