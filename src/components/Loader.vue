<!-- Loader.vue -->

<template>
  <div class="loader-container">
    <img class="gif" src="../assets/img/loading-blue.gif" alt="" />
  </div>
</template>

<style scoped>
.loader-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gif {
  width: 120px;
  object-fit: contain;
}
</style>
