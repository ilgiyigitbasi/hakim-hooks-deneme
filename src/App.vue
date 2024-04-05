<template>
  <div class="wrapper">
    <Navbar />
    <div class="column-gap-24px-div">
      <main>
        <router-view />
      </main>
      <FooterVue v-show="showFooter" />
    </div>
  </div>
</template>

<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import Navbar from "./components/Navbar.vue";
import LoginView from "./views/auth/LoginView.vue";
import ErrorScreen from "./components/ErrorScreen.vue";
import FooterVue from "./components/Footer.vue";

export default {
  components: {
    Navbar,
    VueDatePicker,
    LoginView,
    ErrorScreen,
    FooterVue,
  },
  data() {
    return {
      tripsSuccess: JSON.parse(localStorage.getItem("tripsSuccess")) || null,
      error: localStorage.getItem("error") === "true" || false,
      showFooter: false, // Ekledik
    };
  },
  created() {
    setTimeout(() => {
      this.showFooter = true;
    }, 1000); // 2 saniye sonra footer'ı göster
  },
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
