<template>
  <div class="row-gap-space-between">
    <p class="explanation-text">{{ detailsData.title }}</p>
    <div v-if="detailsData.exp === 'true'">
      <img class="icon" src="../../../assets/img/check.svg" alt="" />
    </div>
    <p v-else class="explanation-text-black">{{ detailsData.exp }}</p>
  </div>
</template>

<script>
export default {
  props: {
    detailsData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
