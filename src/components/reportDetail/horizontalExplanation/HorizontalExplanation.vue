<template>
  <div class="white-32px-div">
    <div class="horizontal-explanation-div">
      <div class="row-gap-16px-div">
        <img
          src="../../../assets/img/vehicle-history-icon.png"
          style="width: 48px"
        />
        <HorizontalItem
          style="width: 120px"
          :title="'Brand:'"
          :explanation="'N/A'"
        />
      </div>

      <HorizontalItem :title="'License Plate:'" :explanation="licensePlate" />
      <HorizontalItem :title="'Total Trip:'" :explanation="totalTrip" />
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
    licensePlate: {
      type: String,
    },
    totalTrip: {
      type: String,
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
