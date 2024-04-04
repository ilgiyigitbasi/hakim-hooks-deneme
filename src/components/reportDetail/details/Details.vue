<template>
  <div class="white-24px-div details-div">
    <div class="column-gap-24px-div">
      <p class="graph-title">Details</p>

      <div class="column-gap-16px-div" style="row-gap: 14px">
        <DetailItem :exp="licensePlate" :title="'License Plate:'" />
        <div class="line"></div>
        <DetailItem :exp="formattedDateTime" :title="'Date - Time:'" />
        <div class="line"></div>
        <DetailItem :exp="requestId" :title="'Request ID:'" />
        <div class="line"></div>
        <DetailItem :exp="brand" :title="'Brand:'" />
        <div class="line"></div>
        <DetailItem :exp="model" :title="'Model:'" />
        <div class="line"></div>
        <DetailItem :exp="carType" :title="'Body Type:'" />
        <div class="line"></div>
        <DetailItem :exp="color" :title="'Color:'" />
        <div class="line"></div>
        <DetailItem :exp="location" :title="'Camera Angle:'" />
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
    brand: String,
    model: String,
    carType: String,
    color: String,
    location: String,
  },
  components: {
    DetailItem,
  },
  computed: {
    formattedDateTime() {
      return this.formatDateTime(this.date);
    },
  },
  methods: {
    formatDateTime(dateTime) {
      return dateTime.slice(0, -7);
    },
  },
};
</script>

<style scoped>
@import "../../../assets/css/styles.css";
</style>
