<template>
  <div class="white-24px-div column-gap-32px-div">
    <div class="row-gap-space-between title-div">
      <p class="graph-title">Last 5 Reports</p>

      <div class="row-gap-16px-div">
        <ButtonComponent
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

      <div
        class="list-div"
        v-for="(listDataItem, index) in listData"
        :key="index"
      >
        <div class="line"></div>
        <DashboardListItem :listData="listDataItem" />
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
  </div>
</template>

<script>
import DashboardListItem from "./DashboardListItem.vue";
import ButtonComponent from "../ButtonComponent.vue";
export default {
  components: {
    DashboardListItem,
    ButtonComponent,
  },
  data() {
    return {
      titles: ["Request ID", "License Plate", "Date", "Detail"],
      listData: [
        {
          requestId: "34647528601785680",
          licensePlate: "34 ABC 01",
          date: "05/02/2024 14:45",
        },
        {
          requestId: "34647528601785680",
          licensePlate: "06 XYZ 42",
          date: "05/02/2024 14:46",
        },
        {
          requestId: "34647528601785680",
          licensePlate: "55 KLM 77",
          date: "05/02/2024 14:47",
        },
        {
          requestId: "34647528601785680",
          licensePlate: "12 DEF 98",
          date: "05/02/2024 14:48",
        },
        {
          requestId: "34647528601785680",
          licensePlate: "12 DEF 98",
          date: "05/02/2024 14:48",
        },
      ],
    };
  },
  methods: {
    redirectToReports() {
      this.$router.push("/reports");
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/styles.css";
</style>
