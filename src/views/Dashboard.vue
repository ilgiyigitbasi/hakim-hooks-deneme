<template>
  <div class="dashboard-wrapper">
    <h1 class="h1">Dashboard</h1>
    <DashboardList />
  </div>
</template>

<script>
import DashboardList from "@/components/dashboard/DashboardList.vue";

export default {
  components: {
    DashboardList,
  },
};
</script>

<style scoped>
@import "../assets/css/styles.css";
</style>
