<template>
  <div class="error-div">
    <div class="white-24px-div error-inside-div">
      <div style="row-gap: 4px">
        <p style="font-weight: 600; text-align: center" class="title">
          Something went wrong!
        </p>

        <p
          style="
            font-size: 13px;
            font-weight: 500;
            color: #41506b;
            text-align: center;
          "
        >
          An unexpected error has occurred, please try again.
        </p>
      </div>

      <img style="width: 350px" src="../assets/img/error-image.png" alt="" />

      <ButtonComponent
        @click="retry"
        :text="'Go Back'"
        :color="'#ffffff'"
        :background-color="'#3382F8'"
        :width="'120px'"
        :height="'40px'"
      />
    </div>
  </div>
</template>

<script>
import ButtonComponent from "./ButtonComponent.vue";
export default {
  components: {
    ButtonComponent,
  },
  methods: {
    retry() {
      this.$router.go(-1); // Go back to the previous page
      window.location.reload();
    },
  },
};
</script>

<style scoped>
.error-div {
  width: 100%;
  height: 100vh;
  background: url("../assets/img/login-background.jpg") center/cover no-repeat;
  box-sizing: border-box;
  padding: 0 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 32px;
}
.error-inside-div {
  width: 500px;
  height: 580px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  box-sizing: border-box;
  padding-top: 64px;
  padding-bottom: 64px;
}
</style>
