<template>
  <div class="home-wrapper">
    <h1 class="h1">Reports</h1>

    <div class="white-24px-div list-div">
      <div class="row-gap-16px-div">
        <SearchComponent />
        <ButtonComponent :text="'Filters'" :width="'100px'" :height="'45px'" />
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
        <DashboardListItem :listData="listDataItem" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SearchComponent from "@/components/SearchComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import DashboardListItem from "@/components/dashboard/DashboardListItem.vue";
export default {
  name: "Reports",
  components: {
    SearchComponent,
    ButtonComponent,
    DashboardListItem,
  },

  data() {
    return {
      todos: [],
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
      ],
    };
  },
  methods: {
    async fetchTodos() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        ); // Örnek bir API çağrısı
        this.todos = response.data;
        console.log(this.todos);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    },
  },
  created() {
    this.fetchTodos();
  },
};
</script>

<style scoped>
@import "../assets/css/styles.css";
</style>
