<template>
  <div class="white-24px-div details-div">
    <div class="column-gap-24px-div">
      <p class="graph-title">Details</p>
      <div v-for="(item, index) in detailsData" :key="index">
        <div class="column-gap-16px-div">
          <DetailItem :detailsData="item" />
          <div v-if="index !== detailsData.length - 1" class="line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailItem from "./DetailItem.vue";
export default {
  props: {
    detailsData: {
      type: Array,
      required: true,
    },
  },
  components: {
    DetailItem,
  },
};
</script>

<style scoped>
@import "../../../assets/css/styles.css";
</style>
