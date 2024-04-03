<template>
  <div class="horizontal-inside-item">
    <p class="explanation-text horizontal-exp">{{ title }}</p>
    <p class="explanation-text-black">{{ explanation }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    explanation: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
@import "../../../assets/css/styles.css";
</style>
