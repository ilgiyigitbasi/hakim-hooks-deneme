<template>
  <div class="profile-wrapper">
    <h1 class="h1">Profile</h1>

    <ProfileNavComponent
      :titles="titles"
      :selectedIndex="selectedIndex"
      @titleClicked="selectTitle"
    />

    <div v-if="selectedIndex === 0">
      <UserDetails />
    </div>
  </div>
</template>

<script>
import UserDetails from "@/components/profile/userDetails/UserDetails.vue";
import ProfileNavComponent from "@/components/profile/ProfileNavComponent.vue";

export default {
  components: {
    UserDetails,
    ProfileNavComponent,
  },
  data() {
    return {
      titles: ["User Details"],
      selectedIndex: 0,
    };
  },
  methods: {
    selectTitle(index) {
      this.selectedIndex = index;
    },
  },
};
</script>
<style scoped>
@import "../assets/css/styles.css";
</style>
