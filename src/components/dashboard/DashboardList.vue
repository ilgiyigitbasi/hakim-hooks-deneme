<template>
  <div class="white-24px-div column-gap-32px-div list">
    <div class="row-gap-space-between title-div">
      <p class="graph-title">Last 5 Reports</p>

      <div class="row-gap-16px-div">
        <ButtonComponent
          @click="togglePopup"
          class="filters-button"
          :text="'Filters'"
          :width="'112px'"
          :height="'40px'"
        />
        <ButtonComponent
          class="report-button"
          :text="'Reports'"
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

      <div class="list-div" v-for="(item, index) in items" :key="index">
        <div class="line"></div>
        <DashboardListItem :listData="item" />
      </div>
    </div>
    <div class="align-right-div">
      <ButtonComponent
        @click="redirectToReports"
        class="report-button-mobile"
        :text="'Reports'"
        :width="'112px'"
        :height="'40px'"
        :color="'#ffffff'"
        :backgroundColor="'#3382F8'"
      />
    </div>
    <FilterVue :showPopup="showPopup" @closePopup="togglePopup" />
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
  data() {
    return {
      showPopup: false,
      titles: ["Request ID", "License Plate", "Date", "Detail"],
      items: [
        {
          datetime: "Mon, 18 Mar 2024 12:57:58 GMT",
          id: "2",
          image_count: "1",
          license_plate: "34 ABC 01",
        },
        {
          datetime: "Mon, 18 Mar 2024 12:57:58 GMT",
          id: "2",
          image_count: "1",
          license_plate: "34 ABC 01",
        },
        {
          datetime: "Mon, 18 Mar 2024 12:57:58 GMT",
          id: "2",
          image_count: "1",
          license_plate: "34 ABC 01",
        },
        {
          datetime: "Mon, 18 Mar 2024 12:57:58 GMT",
          id: "2",
          image_count: "1",
          license_plate: "34 ABC 01",
        },
        {
          datetime: "Mon, 18 Mar 2024 12:57:58 GMT",
          id: "2",
          image_count: "1",
          license_plate: "34 ABC 01",
        },
        {
          datetime: "Mon, 18 Mar 2024 12:57:58 GMT",
          id: "2",
          image_count: "1",
          license_plate: "34 ABC 01",
        },
      ],
    };
  },
  methods: {
    redirectToReports() {
      this.$router.push("/reports");
    },
    togglePopup() {
      this.showPopup = !this.showPopup;
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
