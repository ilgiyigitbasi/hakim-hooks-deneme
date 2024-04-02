<template>
  <div class="web-list-item-div-dashboard">
    <div class="list-item-dashboard">
      <p class="explanation-text-black">{{ listData.id }}</p>
    </div>

    <div class="list-item-dashboard">
      <p class="explanation-text-black">
        {{ listData.image_count }}
      </p>
    </div>

    <div class="list-item-dashboard">
      <p class="explanation-text">{{ listData.datetime }}</p>
    </div>

    <div class="list-item-dashboard">
      <router-link
        :to="{ path: '/reportDetail', query: { id: listData.id } }"
        class="detail-button"
      >
        <img src="../assets/img/gotodetail.svg" alt="" />
      </router-link>
    </div>
  </div>

  <div class="mobile-list-item-div-dashboard">
    <div class="row-gap-space-between">
      <p class="explanation-text">{{ listData.date }}</p>

      <div class="detail-button">
        <router-link
          :to="{ path: '/reportDetail', query: { id: listData.id } }"
          class="detail-button"
        >
          <img src="../assets/img/gotodetail.svg" alt="" />
        </router-link>
      </div>
    </div>
    <div class="line"></div>

    <div class="column-gap-12px-div">
      <div class="row-gap-16px-div">
        <p class="explanation-text item-text">Request ID:</p>
        <p class="explanation-text-black">{{ listData.requestId }}</p>
      </div>

      <div class="row-gap-16px-div">
        <p class="explanation-text item-text">Uploaded Photo:</p>
        <p class="explanation-text-black">
          {{ listData.licensePlate }}
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
};
</script>

<style scoped>
@import "../assets/css/styles.css";
</style>
