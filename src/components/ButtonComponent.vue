<template>
  <div class="button-div">
    <button
      class="button"
      :style="{
        fontSize: fontSize || '12px',
        color: color || '#060A0F',
        backgroundColor: backgroundColor || '#F1F1F4',
        width: width || '0%',
        height: height || '0%',
        type: type || 'button',
      }"
    >
      {{ text }}
    </button>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps([
  "text",
  "fontSize",
  "backgroundColor",
  "color",
  "width",
  "height",
  "type",
]);
</script>

<style scoped>
@import "../assets/css/styles.css";
</style>
