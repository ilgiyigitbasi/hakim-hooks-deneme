<template>
  <div class="web-list-item-div-dashboard">
    <div class="list-item-dashboard">
      <p class="explanation-text-black">{{ listData.id }}</p>
    </div>

    <div class="list-item-dashboard">
      <router-link
        class="license-plate-router"
        :to="{ path: '/vehicleHistory', query: { id: listData.license_plate } }"
      >
        <p class="explanation-text-black license-plate">
          {{ formattedLicensePlate }}
        </p>
      </router-link>
    </div>

    <div class="list-item-dashboard">
      <p class="explanation-text">{{ formattedDateTime }}</p>
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
      <p class="explanation-text">{{ formattedDateTime }}</p>

      <router-link
        :to="{ path: '/reportDetail', query: { id: licensePlate } }"
        class="license-plate-router"
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

        <router-link
          :to="{ path: '/vehicleHistory', query: { id: licensePlate } }"
        >
          <p class="explanation-text-black license-plate">
            {{ formattedLicensePlate }}
          </p>
        </router-link>
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
  methods: {},
  computed: {
    formattedDateTime() {
      // datetime verisini al
      const dateTime = this.listData.datetime;

      // datetime verisinden sondaki 7 karakteri kırparak geri kalanını döndür
      return dateTime.slice(0, -7);
    },
    formattedLicensePlate() {
      // Lisans plakası verisini al
      const licensePlate = this.listData.license_plate;

      // Eğer plaka verisi boşsa veya belirtilen değerlerden biriyle eşleşiyorsa "not found" döndür
      if (
        !licensePlate ||
        ["plaka bulunamadı", "Plaka bulunamadı", "Plaka Bulunamadı"].includes(
          licensePlate
        )
      ) {
        return "None";
      }

      // Plaka verisi uygunsa aynı şekilde geri döndür
      return licensePlate;
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/styles.css";
.license-plate {
  cursor: pointer;
  text-decoration: none;
  transition: all 0.15s;
}
.license-plate:hover {
  border: 1px solid #3382f8;
  color: #3382f8;
}
.license-plate-router {
  text-decoration: none;
}
</style>
