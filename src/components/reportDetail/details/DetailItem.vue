<template>
  <div class="row-gap-space-between">
    <p class="explanation-text">{{ title }}</p>

    <p class="explanation-text-black">{{ exp }}</p>
  </div>
</template>

<script>
export default {
  props: {
    exp: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
