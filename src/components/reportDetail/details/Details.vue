<template>
  <div class="white-24px-div details-div">
    <div class="column-gap-24px-div">
      <p class="graph-title">Details</p>

      <div class="column-gap-16px-div">
        <DetailItem :exp="licensePlate" :title="'License Plate:'" />
        <div class="line"></div>
        <DetailItem :exp="formattedDateTime" :title="'Date - Time:'" />
        <div class="line"></div>
        <DetailItem :exp="requestId" :title="'Request ID:'" />
        <div class="line"></div>
        <DetailItem :exp="uploadedImages" :title="'Brand:'" />
        <div class="line"></div>
        <DetailItem :exp="'-'" :title="'Model:'" />
        <div class="line"></div>
        <DetailItem :exp="'-'" :title="'Color:'" />
        <div class="line"></div>
        <DetailItem :exp="'-'" :title="'Camera Angle:'" />
        <div class="line"></div>
        <DetailItem :exp="'-'" :title="'Uploaded Images:'" />
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
  computed: {
    formattedDateTime() {
      return this.formatDateTime(this.date);
    },
  },
  methods: {
    formatDateTime(dateTime) {
      const date = new Date(dateTime);
      const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      });
      const formattedTime = date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
      return `${formattedDate} ${formattedTime}`;
    },
  },
};
</script>

<style scoped>
@import "../../../assets/css/styles.css";
</style>
