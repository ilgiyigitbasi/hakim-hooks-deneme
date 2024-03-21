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

      <div class="list-div" v-for="(listDataItem, index) in items" :key="index">
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
