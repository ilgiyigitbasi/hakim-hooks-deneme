<template>
  <div class="profile-wrapper">
    <h1 class="h1">Profile</h1>

    <ProfileNavComponent
      :titles="titles"
      :selectedIndex="selectedIndex"
      @titleClicked="selectTitle"
      :profileData="userDetails"
    />

    <div v-if="selectedIndex === 0">
      <UserDetails :userDetails="userDetails" />
    </div>
  </div>
</template>

<script>
import UserDetails from "@/components/profile/userDetails/UserDetails.vue";
import ProfileNavComponent from "@/components/profile/ProfileNavComponent.vue";
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  components: {
    UserDetails,
    ProfileNavComponent,
  },
  data() {
    return {
      titles: ["User Details"],
      selectedIndex: 0,
      userDetails: {
        email: "",
        name: "",
      },
    };
  },

  methods: {
    selectTitle(index) {
      this.selectedIndex = index;
    },
    async getProfile() {
      try {
        const response = await axios.get(
          "http://104.197.168.64:8080/api/my-info",
          {
            headers: {
              "Content-Type": "multipart/form-data",
              "X-Access-Token": this.getToken,
            },
          }
        );
        console.log("response data" + response.data);
        this.userDetails.email = response.data.email;
        this.userDetails.name = response.data.name;
      } catch (error) {
        console.error("Login failed:", error.response.status);
        this.errorMessage = "Login failed. Please try again.";
      }
    },
  },
  computed: {
    ...mapGetters(["getToken"]),
  },
  mounted() {
    this.getProfile();
  },
};
</script>
<style scoped>
@import "../assets/css/styles.css";
</style>
