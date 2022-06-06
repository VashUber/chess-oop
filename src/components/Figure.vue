<template>
  <img
    :src="'/src/assets/figures/' + figure.name + '.svg'"
    :class="[figure.color === 'black' ? '' : 'invert']"
  />
</template>

<script setup lang="ts">
import Figure from "../models/Figure";

defineProps<{ figure: Figure }>();
</script>

<style lang="scss" scoped></style>
