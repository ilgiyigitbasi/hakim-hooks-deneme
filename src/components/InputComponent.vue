<template>
  <div class="input-wrap">
    <label class="label"> {{ label }}</label>
    <input
      type="text"
      :value="modelValue"
      :placeholder="placeHolder"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
      :style="{
        fontSize: fontSize || '13px',
        border: border || 'none',
        height: height || '0%',
        width: width || '100%',
        backgroundColor: backgroundColor || 'rgb(241, 241, 244)',
      }"
    />
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
  fontSize: {
    type: String,
    default: "",
  },
  placeHolder: {
    type: String,
    default: "",
  },
  border: {
    type: String,
    default: "",
  },
  height: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "",
  },
  backgroundColor: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
@import "../assets/css/styles.css";
</style>
