<template>
  <div class="white-24px-div column-gap-32px-div list">
    <div class="row-gap-space-between title-div">
      <p class="graph-title">Last 10 Reports</p>

      <div class="row-gap-16px-div">
        <ButtonComponent
          class="report-button"
          :text="'All Reports'"
          :width="'112px'"
          :height="'40px'"
          :color="'#ffffff'"
          :backgroundColor="'#3382F8'"
          @click="redirectToReports"
        />
      </div>
    </div>

    <div class="list-div">
      <div class="list-title-div-dashboard">
        <div v-for="(title, index) in titles" :key="index">
          <p class="explanation-text center-text">{{ title }}</p>
        </div>
      </div>

      <div class="list-div" v-for="(item, index) in listData" :key="index">
        <div class="line"></div>
        <DashboardListItem :listData="item" />
      </div>
    </div>
    <div class="align-right-div">
      <ButtonComponent
        @click="redirectToReports"
        class="report-button-mobile"
        :text="'All Reports'"
        :width="'112px'"
        :height="'40px'"
        :color="'#ffffff'"
        :backgroundColor="'#3382F8'"
      />
    </div>
    <FilterVue
      :showPopup="showPopup"
      @closePopup="togglePopup"
      @filterApplied="handleFilterApplied"
    />
  </div>
</template>

<script>
import DashboardListItem from "./DashboardListItem.vue";
import ButtonComponent from "../ButtonComponent.vue";
import FilterVue from "./Filter.vue";
export default {
  components: {
    DashboardListItem,
    ButtonComponent,
    FilterVue,
  },
  props: {
    listData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      showPopup: false,
      titles: ["Request ID", "License Plate", "Date", "Detail"],
      startDate: "",
      endDate: "",
      licensePlate: "",
    };
  },
  methods: {
    redirectToReports() {
      this.$router.push("/reports");
    },
    togglePopup() {
      this.showPopup = !this.showPopup;
    },
    handleFilterApplied(data) {
      this.startDate = data.startDate;
      this.endDate = data.endDate;
      this.licensePlate = data.licensePlate;
      this.$emit("filter-applied", {
        startDate: this.startDate,
        endDate: this.endDate,
        licensePlate: this.licensePlate,
      });
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/styles.css";
.list {
  position: relative;
}
</style>
