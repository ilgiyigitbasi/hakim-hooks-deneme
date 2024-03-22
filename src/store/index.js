import { createStore } from "vuex";
import dashboard from "./modules/dashboard";
import reports from "./modules/reports";
import userDetails from "./modules/profile/userDetails";
import auth from "./modules/auth";
import reportDetail from "./modules/reportDetail";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    dashboard: dashboard,
    reports: reports,
    userDetails: userDetails,
    auth: auth,
    reportDetail: reportDetail,
  },
});
