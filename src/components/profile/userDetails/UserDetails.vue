<template>
  <div class="white-24px-div column-gap-16px-div">
    <p class="graph-title">User Details</p>
    <div class="line"></div>
    <div class="column-gap-16px-div">
      <div class="row-gap-64px-div profile-inside-div">
        <p class="profile-label">Name Surname</p>
        <p class="profile-explanation-text">{{ userDetails.name }}</p>
      </div>
      <div class="line"></div>
      <div class="row-gap-64px-div profile-inside-div">
        <p class="profile-label">Email</p>
        <p class="profile-explanation-text">{{ userDetails.email }}</p>
      </div>
      <div class="line"></div>
      <div class="row-gap-64px-div profile-inside-div">
        <p class="profile-label">Phone</p>
        <p class="profile-explanation-text">{{ userDetails.phone }}</p>
      </div>
      <div class="line"></div>
      <div class="row-gap-64px-div profile-inside-div">
        <p class="profile-label">User Type</p>
        <p class="profile-explanation-text">{{ userDetails.id }}</p>
      </div>
    </div>
    <!--
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
    -->
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
      userDetails: {
        name: "Şükran Yorulmaz",
        email: "sukran_yrlmz@hotmail.com",
        phone: "0505 050 50 50",
        id: "Admin",
      },
    };
  },
};
</script>

<style scoped>
@import "../../../assets/css/styles.css";
</style>
