<template>
  <div class="white-24px-div column-gap-16px-div">
    <p class="graph-title">User Details</p>
    <div class="line"></div>
    <div
      class="column-gap-16px-div"
      v-for="(detail, index) in userDetails"
      :key="index"
    >
      <div class="row-gap-64px-div profile-inside-div">
        <p class="profile-label">{{ detail.label }}</p>
        <template v-if="detail.type === 'text'">
          <p class="profile-explanation-text">{{ detail.value }}</p>
        </template>
        <template v-else-if="detail.type === 'input'">
          <InputComponent
            class="email-input"
            v-model="detail.value"
            :height="'40px'"
            :width="'100%'"
            :place-holder="detail.placeholder"
          />
        </template>
      </div>
      <div class="line"></div>
    </div>
    <div class="align-right-div profile-buttons-div">
      <div class="row-gap-16px-div">
        <ButtonComponent :text="'Cancel'" :height="'40px'" :width="'100px'" />
        <ButtonComponent
          :text="'Save'"
          :height="'40px'"
          :width="'100px'"
          :background-color="'#3382F8'"
          :color="'#ffffff'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import InputComponent from "@/components/InputComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
  components: {
    InputComponent,
    ButtonComponent,
  },
  data() {
    return {
      userDetails: [
        { label: "Name Surname", value: "Şükran Yorulmaz", type: "text" },
        { label: "Email", value: "sukranyorulmaz@skann.ai", type: "text" },
        {
          label: "Phone",
          value: "",
          placeholder: "0 (555) 555 55 55",
          type: "input",
        },
        { label: "User Type", value: "Admin", type: "text" },
      ],
    };
  },
};
</script>

<style scoped>
@import "../../../assets/css/styles.css";
</style>
