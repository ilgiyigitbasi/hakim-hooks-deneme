<template>
  <div v-if="error">
    <ErrorScreen />
  </div>
  <div v-else>
    <div class="wrapper" v-if="tripsSuccess">
      <Navbar />
      <main><router-view /></main>
    </div>
    <div v-else>
      <LoginView @trips-success="updateTripsSuccess" />
    </div>
  </div>
</template>
<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import Navbar from "./components/Navbar.vue";
import LoginView from "./views/auth/LoginView.vue";
import ErrorScreen from "./components/ErrorScreen.vue";
export default {
  components: {
    Navbar,
    VueDatePicker,
    LoginView,
    ErrorScreen,
  },
  data() {
    return {
      tripsSuccess: JSON.parse(localStorage.getItem("tripsSuccess")) || null,
      error: localStorage.getItem("error") === "true" || false,
    };
  },
  created() {
    console.log(localStorage.getItem("token"));
    console.log(this.tripsSuccess);
    console.log(localStorage.getItem("error"));
  },
  computed: {},
  methods: {
    updateTripsSuccess(success) {
      this.tripsSuccess = success;
      localStorage.setItem("tripsSuccess", JSON.stringify(success));
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap");
@import "assets/css/colors.css";

#app,
body {
  background: var(--lightGray);
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
}
p {
  margin: 0;
}
.wrapper {
  box-sizing: border-box;
  min-height: 100vh;
  padding-left: 100px;
  padding-right: 100px;
  width: 100%;
  padding-bottom: 32px;
}

@media (max-width: 1000px) {
  .wrapper {
    padding-left: 24px;
    padding-right: 24px;
  }
}
</style>
