<template>
  <div v-if="showPopup" class="popup-div">
    <div class="popup">
      <div class="white-24px-div column-gap-24px-div">
        <div class="row-gap-space-between">
          <p class="graph-title">Filters</p>
          <div class="close-btn icon" @click="closePopup">
            <img src="../../assets/img/close.svg" alt="" />
          </div>
        </div>
        <div class="line"></div>

        <div class="column-gap-8px-div licensePlate">
          <p class="explanation-text">License Plate:</p>
          <InputComponent
            :height="'40px'"
            :width="'100%'"
            v-model="licensePlate"
            :pattern="platePattern"
            @input="convertToUpperCase"
          />

          <img
            v-if="isValidPlate"
            src="../../assets/img/check.svg"
            class="icon"
          />
          <img v-else src="../../assets/img/info.svg" class="info" />
        </div>

        <div class="column-gap-8px-div">
          <p class="explanation-text">Request ID:</p>
          <InputComponent
            :height="'40px'"
            :width="'100%'"
            v-model="requestId"
          />
        </div>

        <div class="column-gap-32px-div">
          <div class="column-gap-8px-div">
            <p class="explanation-text">Date Range:</p>
            <div class="row-gap-24px-div">
              <VueDatePicker
                v-model="date"
                :enable-time-picker="false"
                range
                selectText="Uygula"
                cancelText="Vazgeç"
                locale="tr"
                style="
                  --dp-background-color: #f1f1f4;
                  --dp-text-color: #41506b;
                  --dp-primary-text-color: #060a0f;
                  --dp-border-color: #f1f1f4;
                  --dp-border-color-hover: #f1f1f4;
                  --dp-font-family: 'Poppins', sans-serif;
                  --dp-font-size: 13px;
                  height: 40px;
                  background-color: #f1f1f4;
                  border-radius: 5px;
                  padding-top: 4px;
                  font-weight: 500;
                  --dp-border-radius: 5px;
                  --dp-action-buttons-padding: 16px;
                "
              />
            </div>
          </div>
          <div class="align-right-div profile-buttons-div">
            <div class="row-gap-16px-div">
              <ButtonComponent
                @click="closePopup"
                :text="'Cancel'"
                :height="'40px'"
                :width="'100px'"
              />
              <ButtonComponent
                @click="applyFilters"
                :text="'Apply'"
                :height="'40px'"
                :width="'100px'"
                :background-color="'#3382F8'"
                :color="'#ffffff'"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputComponent from "../InputComponent.vue";
import ButtonComponent from "../ButtonComponent.vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { ref, onMounted } from "vue";
export default {
  name: "PopupVue",
  props: {
    showPopup: Boolean,
  },
  components: {
    InputComponent,
    ButtonComponent,
    VueDatePicker,
  },
  data() {
    return {
      licensePlate: "",
      requestId: "",
      startDate: "",
      endDate: "",
      platePattern: "^(0[1-9]|[1-7][0-9]|8[01])([A-Z]{3})(\\d{3})$",
    };
  },
  methods: {
    closePopup() {
      this.$emit("closePopup");
    },
    applyFilters() {
      console.log("Start Date:", this.date[0]);
      console.log("End Date:", this.date[1]);
      this.closePopup(); // Opsiyonel: Popup'ı kapatmak için
    },
    convertToUpperCase() {
      // Yeni metot
      this.licensePlate = this.licensePlate.toUpperCase();
    },
  },
  computed: {
    isValidPlate() {
      return this.licensePlate.match(this.platePattern);
    },
  },
  setup() {
    const date = ref();

    onMounted(() => {
      const startDate = new Date();
      const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
      date.value = [startDate, endDate];
    });

    return {
      date,
    };
  },
};
</script>

<style scoped>
@import "../../assets/css/styles.css";
.popup-div {
  width: 100%;

  position: absolute;
  display: flex;
  justify-content: end;
  box-sizing: border-box;
  padding: 24px;
  margin-top: 24px;
}
.popup {
  width: 442px;
  height: 100%;
  border-radius: 8px;
  background-size: contain;

  display: flex;
  flex-direction: column;
  margin-right: 24px;
  row-gap: 24px;
  align-items: center;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
  background-color: white;
}
.align-right-div {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
}
.close-btn {
  color: white;
  font-size: 24px;
  cursor: pointer;
}
.inside {
  width: 90%;
  height: 400px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 24px;
}
.title {
  font-size: 60px;
  font-weight: 600;
}
.exp {
  font-size: 16px;
  font-weight: 500;
}
.input {
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 50px;
  background-color: #f3f3f3;
  padding: 16px;
  font-style: italic;
}
.pop-up-btn {
  padding: 16px 48px;
  background-color: #ff487a;
  border-radius: 50px;
  font-weight: 500;
  font-size: 20px;
  color: white;
  cursor: pointer;
  transition: all 0.15s;
}
.pop-up-btn:hover {
  opacity: 0.9;
}
.pop-up-btn:active {
  opacity: 0.8;
}
.licensePlate {
  position: relative;
}
.licensePlate img.icon,
.info {
  position: absolute;
  bottom: -3px;
  transform: translateY(-50%);
  right: 8px;
  width: 24px;
}
.info {
  cursor: pointer;
}
</style>
