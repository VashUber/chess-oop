<template>
  <div class="flex justify-center items-center h-screen">
    <div class="border-8 border-slate-400">
      <div v-for="(row, y) in board.board" :key="y" class="flex">
        <div
          v-for="(cell, x) in row"
          :key="x"
          class="w-20 h-20 flex justify-center items-center"
          :class="[(x + y) % 2 !== 0 ? 'bg-slate-400' : 'bg-slate-200']"
        >
          <Figure v-if="cell.figure" :figure="cell.figure" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Figure from "./components/Figure.vue";
import Board from "./models/Board";

const board = ref<Board>(new Board());
</script>
