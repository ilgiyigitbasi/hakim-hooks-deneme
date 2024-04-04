<template>
  <div class="white-24px-div column-gap-24px-div profile-nav-component">
    <div class="row-gap-space-between profile-top-div">
      <div class="row-gap-24px-div profile-image-text-div">
        <div class="profile-image-div">
          <img class="profile-image" src="../../assets/img/profile.svg" />
        </div>
        <div class="column-gap-8px-div name-div">
          <p class="graph-title">{{ profileData.name }}</p>
          <p class="explanation-text">{{ profileData.email }}</p>
        </div>
      </div>

      <div class="logout">
        <div @click="showLogoutBtn = !showLogoutBtn" class="logout-div">
          <img style="width: 16px" src="../../assets/img/logout.svg" alt="" />
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

    <div class="titles-div-profile">
      <div
        class="profile-title-div"
        v-for="(title, index) in titles"
        :key="index"
        :class="{ active: selectedIndex === index }"
        @click="selectTitle(index)"
      >
        <p class="profile-title">{{ title }}</p>
        <div class="profile-line" v-if="selectedIndex === index"></div>
      </div>
    </div>

    <div class="profile-line"></div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["titles", "selectedIndex"],
  methods: {
    selectTitle(index) {
      this.$emit("titleClicked", index);
    },
    ...mapMutations(["SET_TOKEN"]),

    logoutClicked() {
      this.SET_TOKEN(null);

      localStorage.setItem("tripsSuccess", JSON.stringify(false));
      this.$emit("trips-success", false);

      this.$router.push("/");
      window.location.reload();
    },
  },
  props: {
    profileData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showLogoutBtn: false,
    };
  },
};
</script>
<style scoped>
@import "../../assets/css/styles.css";
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
.logout-button {
  position: absolute;
  top: 50px;
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
}
.logout-button:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}
.logout-button:active {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
}
</style>
