<template>
  <div>
    <div class="header">
      <div class="header-left">
        <div class="menu" @click="toggleMenu">
          <img src="../assets/img/menu.svg" alt="Menu" />
        </div>
        <div v-if="isMenuOpen" class="mobile-menu">
          <router-link to="/" @click="toggleMenu">Dashboard</router-link>
          <router-link to="/reports" @click="toggleMenu">Reports</router-link>
          <router-link to="/profile" @click="toggleMenu">Profile</router-link>
        </div>
        <router-link to="/">
          <img class="logo" src="../assets/img/nav-logo.png" alt="" />
        </router-link>
        <div class="nav-titles">
          <router-link
            class="nav-title-item"
            :to="{ name: 'dashboard' }"
            :class="{ active: activeLink === 'dashboard' }"
            >Dashboard</router-link
          >
          <router-link
            class="nav-title-item"
            :to="{ name: 'reports' }"
            :class="{ active: activeLink === 'reports' }"
            >Reports</router-link
          >
          <router-link
            class="nav-title-item"
            :to="{ name: 'profile' }"
            :class="{ active: activeLink === 'profile' }"
            >Profile</router-link
          >
        </div>
      </div>

      <div class="row-gap-8px-div">
        <p class="nav-title-item">Isaac Avis User</p>

        <div
          @click="showLogoutBtn = !showLogoutBtn"
          v-if="screenWidth > 1000 || activeLink !== 'profile'"
        >
          <img class="profile" src="../assets/img/profile.svg" alt="" />
          <div class="column-gap-8px-div">
            <div
              v-if="showLogoutBtn"
              @click="profileClicked()"
              class="profile-button"
            >
              Profile
            </div>
            <div
              v-if="showLogoutBtn"
              @click="logoutClicked()"
              class="logout-button"
            >
              Log out
            </div>
          </div>
        </div>
        <div v-else class="empty"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      activeLink: "",
      isMenuOpen: false,
      screenWidth: window.innerWidth,
      showLogoutBtn: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },

    handleResize() {
      this.screenWidth = window.innerWidth;
      if (this.screenWidth > 1000) {
        this.isMenuOpen = false;
      }
    },
    ...mapMutations(["SET_TOKEN"]),

    logoutClicked() {
      localStorage.setItem("token", null);
      this.$router.push("/login");
    },
    profileClicked() {
      this.$router.push("/profile");
    },
  },
  watch: {
    $route(to, from) {
      this.activeLink = to.name || "";
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style scoped>
@import "../assets/css/styles.css";
.profile {
  cursor: pointer;
}
.logout-div {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: rgb(6, 10, 15, 0.1);
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: 0.3s;
}
.logout {
  position: relative;
}
.logout-button,
.profile-button {
  position: absolute;
  top: 118px;
  right: 0;
  width: 95px;
  height: 40px;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 500;
  color: #41506b;
  cursor: pointer;
  background-color: #ffffff;
  z-index: 100;
}
.profile-button {
  top: 70px;
}
.logout-button:hover,
.profile-button:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}
.logout-button:active,
.profile-button:active {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
}
</style>
