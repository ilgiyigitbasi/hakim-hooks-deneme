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

      <router-link to="/profile">
        <div v-if="screenWidth > 1000 || activeLink !== 'profile'">
          <img class="profile" src="../assets/img/profile-image.jpeg" alt="" />
        </div>
        <div v-else class="empty"></div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeLink: "",
      isMenuOpen: false,
      screenWidth: window.innerWidth, // Ekran genişliğini takip edecek değişken
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },

    handleResize() {
      this.screenWidth = window.innerWidth; // Ekran genişliğini güncelle
      if (this.screenWidth > 1000) {
        // Ekran genişliği 1000px'in üstündeyse menüyü kapat
        this.isMenuOpen = false;
      }
    },
  },
  watch: {
    $route(to, from) {
      this.activeLink = to.name || "";
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize); // Resize event listener'ını ekleyin
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize); // Component yok edilmeden önce event listener'ını kaldır
  },
};
</script>

<style scoped>
@import "../assets/css/styles.css";
</style>
