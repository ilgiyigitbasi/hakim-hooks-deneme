<template>
  <div class="horizontal-inside-item">
    <p class="explanation-text">{{ horizontalData.title }}</p>
    <p class="explanation-text-black">{{ horizontalData.explanation }}</p>
  </div>
</template>

<script>
export default {
  props: {
    horizontalData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
@import "../../../assets/css/styles.css";
</style>
