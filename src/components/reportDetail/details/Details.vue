<template>
  <div class="white-24px-div details-div">
    <div class="column-gap-24px-div">
      <p class="graph-title">Details</p>

      <div class="column-gap-24px-div">
        <DetailItem :exp="licensePlate" :title="'License Plate:'" />
        <div class="line"></div>
        <DetailItem :exp="date" :title="'Date - Time:'" />
        <div class="line"></div>
        <DetailItem :exp="requestId" :title="'Request ID:'" />
        <div class="line"></div>
        <DetailItem :exp="uploadedImages" :title="'Uploaded Images:'" />
      </div>
    </div>
  </div>
</template>

<script>
import DetailItem from "./DetailItem.vue";
export default {
  props: {
    licensePlate: String,
    date: String,
    requestId: String,
    uploadedImages: String,
  },
  components: {
    DetailItem,
  },
};
</script>

<style scoped>
@import "../../../assets/css/styles.css";
</style>
