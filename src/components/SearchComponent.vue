<template>
  <input
    type="text"
    :value="modelValue"
    placeholder="Search"
    @input="$emit('update:modelValue', $event.target.value)"
    v-bind="$attrs"
    class="search-input"
  />
</template>
<script setup>
defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});
</script>
<style scoped>
@import "../assets/css/styles.css";
</style>
