<template>
  <div class="white-24px-div column-gap-24px-div profile-nav-component">
    <div class="row-gap-space-between profile-top-div">
      <div class="row-gap-24px-div profile-image-text-div">
        <div class="profile-image-div">
          <img
            class="profile-image"
            src="../../assets/img/profile-image.jpeg"
          />
        </div>
        <div class="column-gap-8px-div name-div">
          <p class="graph-title">Şükran Yorulmaz</p>
          <p class="explanation-text">sukranyorulmaz@skann.ai</p>
        </div>
      </div>

      <div class="logout-button">
        <img class="logout-icon" src="../../assets/img/logout.svg" alt="" />
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
export default {
  props: ["titles", "selectedIndex"],
  methods: {
    selectTitle(index) {
      this.$emit("titleClicked", index);
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
@import "../../assets/css/styles.css";
</style>
