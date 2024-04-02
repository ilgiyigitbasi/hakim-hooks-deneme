<template>
  <div class="auth-div">
    <div
      style="
        display: flex;
        justify-content: center;
        width: 100%;
        align-items: center;
      "
    >
      <img class="logo-auth" src="../../assets/img/white-logo.svg" />
    </div>
    <div style="background-color: #ffffff" class="auth-inside-div">
      <p class="auth-title">
        Start exploring Skann by logging in to your account!
      </p>

      <div class="column-gap-24px-div">
        <InputComponent
          v-model="email"
          type="email"
          :border="'1px solid rgba(6, 10, 15, 0.15)'"
          :height="'45px'"
          :placeHolder="'Email'"
        />
        <div class="column-gap-8px-div">
          <InputComponent
            v-model="password"
            type="password"
            :border="'1px solid rgba(6, 10, 15, 0.15)'"
            :height="'45px'"
            :placeHolder="'Password'"
          />

          <div v-show="errorMessage" class="row-gap-8px-div">
            <img style="width: 16px" src="../../assets/img/alert.png" alt="" />
            <p class="explanation-text">{{ errorMessage }}</p>
          </div>
        </div>

        <div class="column-gap-16px-div">
          <ButtonComponent
            style="margin-top: 16px"
            :text="'Log In'"
            :color="'#ffffff'"
            :background-color="'#3382f8'"
            :width="'100%'"
            :height="'45px'"
            @click="login"
          />

          <p @click="goToRegister" class="signUpBtn">
            Don't you have an account?
            <span style="font-weight: 600; color: #3382f8">Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";
import InputComponent from "@/components/InputComponent.vue";
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "LoginView",
  components: {
    ButtonComponent,
    InputComponent,
  },
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  computed: {
    ...mapGetters(["getToken"]),
  },
  methods: {
    ...mapActions(["setToken"]),
    async login() {
      if (!this.email || !this.password) {
        this.errorMessage = "Please enter both email and password.";
        return;
      }
      try {
        const formData = new FormData();
        formData.append("email", "avis@skann.com");
        formData.append("password", "6nJ7vQ38W47t");

        const response = await axios.post(
          "http://104.197.168.64:8080/api/login",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log(response.data);
        this.setToken(response.data.token);
        console.log("Token from Vuex:", this.getToken);
        localStorage.setItem("token", this.getToken);
        // Başarılı olduğunda tripsSuccess'i true olarak ayarla
        this.$emit("trips-success", true);
      } catch (error) {
        console.error("Login failed:", error.response.status);
        this.errorMessage = "Login failed. Please try again.";
        // Başarılı olduğunda tripsSuccess'i true olarak ayarla
        this.$emit("trips-success", true);
      }
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/styles.css";
</style>
