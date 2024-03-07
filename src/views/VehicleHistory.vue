<template>
  <div class="home-wrapper">
    <div class="column-gap-32px-div">
      <div class="row-gap-16px-div">
        <router-link to="/reportDetail">
          <img
            src="../assets/img/arrow-left.svg"
            style="height: 20px; margin-top: 8px"
          />
        </router-link>

        <h1 class="h1">Vehicle History</h1>
      </div>

      <HorizontalExplanation :horizontal-data="horizontalData" />
      <div class="white-24px-div list-div">
        <div class="row-gap-16px-div">
          <SearchComponent />
          <ButtonComponent
            :text="'Filters'"
            :width="'100px'"
            :height="'45px'"
          />
        </div>

        <div class="list-title-div">
          <div v-for="(title, index) in titles" :key="index">
            <p class="list-title explanation-text">{{ title }}</p>
          </div>
        </div>

        <div
          class="list-div"
          v-for="(listDataItem, index) in listData"
          :key="index"
        >
          <div class="line"></div>
          <VehicleHistoryItem :listData="listDataItem" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HorizontalExplanation from "@/components/reportDetail/horizontalExplanation/HorizontalExplanation.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import SearchComponent from "@/components/SearchComponent.vue";
import VehicleHistoryItem from "@/components/VehicleHistoryItemm.vue";

export default {
  components: {
    HorizontalExplanation,
    ButtonComponent,
    SearchComponent,
    VehicleHistoryItem,
  },
  data() {
    return {
      horizontalData: [
        {
          src: require("@/assets/img/vehicle-history-icon.png"),
          title: "Brand",
          explanation: "N/A",
        },
        {
          title: "License Plate",
          explanation: "34 DFG 456",
        },
        {
          title: "Total Trip",
          explanation: "123",
        },
      ],
      titles: ["Request ID", "Uploaded Photo", "Date - Time", "Detail"],
      listData: [
        {
          requestId: "34647528601785680",
          licensePlate: "4",
          date: "05/02/2024 14:45",
        },
        {
          requestId: "34647528601785680",
          licensePlate: "3",
          date: "05/02/2024 14:46",
        },
        {
          requestId: "34647528601785680",
          licensePlate: "5",
          date: "05/02/2024 14:47",
        },
        {
          requestId: "34647528601785680",
          licensePlate: "1",
          date: "05/02/2024 14:48",
        },
        {
          requestId: "34647528601785680",
          licensePlate: "3",
          date: "05/02/2024 14:45",
        },
        {
          requestId: "34647528601785680",
          licensePlate: "4",
          date: "05/02/2024 14:46",
        },
        {
          requestId: "34647528601785680",
          licensePlate: "4",
          date: "05/02/2024 14:47",
        },
        {
          requestId: "34647528601785680",
          licensePlate: "3",
          date: "05/02/2024 14:48",
        },
      ],
    };
  },
};
</script>

<style scoped>
.icon {
  cursor: pointer;
}
</style>
