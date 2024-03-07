<template>
  <div class="white-32px-div">
    <div class="horizontal-explanation-div">
      <div v-for="(horizontalItem, index) in horizontalData" :key="index">
        <HorizontalItem :horizontalData="horizontalItem" />
      </div>
    </div>
  </div>
</template>

<script>
import HorizontalItem from "./HorizontalItem.vue";
export default {
  components: {
    HorizontalItem,
  },
  props: {
    horizontalData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
@import "../../../assets/css/styles.css";
</style>
