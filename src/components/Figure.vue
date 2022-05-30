<template>
  <img
    :src="'/src/assets/figures/' + figure.name + '.svg'"
    :class="[figure.color === 'black' ? '' : 'invert']"
  />
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{ figure: any }>();
</script>

<style lang="scss" scoped></style>
