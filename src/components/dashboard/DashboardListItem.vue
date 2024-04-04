<template>
  <div class="web-list-item-div-dashboard">
    <div class="list-item-dashboard">
      <p class="explanation-text-black">{{ listData.id }}</p>
    </div>

    <div class="list-item-dashboard">
      <p class="explanation-text-black license-plate">
        {{ listData.license_plate }}
      </p>
    </div>

    <div class="list-item-dashboard">
      <p class="explanation-text">{{ formatDateTime(listData.datetime) }}</p>
    </div>

    <div class="list-item-dashboard">
      <router-link
        :to="{ path: '/reportDetail', query: { id: listData.id } }"
        class="detail-button"
      >
        <img src="../../assets/img/gotodetail.svg" alt="" />
      </router-link>
    </div>
  </div>

  <div class="mobile-list-item-div-dashboard">
    <div class="row-gap-space-between">
      <p class="explanation-text">{{ listData.datetime }}</p>

      <router-link
        :to="{ path: '/reportDetail', query: { id: listData.id } }"
        class="detail-button"
      >
        <img src="../../assets/img/gotodetail.svg" alt="" />
      </router-link>
    </div>
    <div class="line"></div>

    <div class="column-gap-12px-div">
      <div class="row-gap-16px-div">
        <p class="explanation-text item-text">Request ID:</p>
        <p class="explanation-text-black">{{ listData.id }}</p>
      </div>

      <div class="row-gap-16px-div">
        <p class="explanation-text item-text">License Plate:</p>
        <p class="explanation-text-black license-plate">
          {{ listData.license_plate }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listData: {
      type: Array,
      required: true,
    },
  },
  methods: {
    formatDateTime(dateTime) {
      const date = new Date(dateTime);
      // Tarih ve saat değerlerini alıyoruz
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
@import "../../assets/css/styles.css";
</style>
