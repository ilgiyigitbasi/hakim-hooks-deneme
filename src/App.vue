<template>
  <div class="wrapper">
    <Navbar />
    <main><router-view /></main>
  </div>
</template>
<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
    VueDatePicker,
  },
  data() {
    return {
      isLogin: true,
    };
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap");
@import "assets/css/colors.css";

#app,
body {
  background: var(--background);
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  padding-bottom: 32px;
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
}

@media (max-width: 1000px) {
  .wrapper {
    padding-left: 24px;
    padding-right: 24px;
  }
}
</style>
