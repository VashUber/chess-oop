<template>
  <div class="flex justify-center items-center h-screen">
    <div class="border-8 border-slate-400">
      <div v-for="(row, y) in board.board" :key="y" class="flex">
        <div
          v-for="(cell, x) in row"
          :key="x"
          class="w-20 h-20 flex justify-center items-center"
          :class="[
            (x + y) % 2 !== 0 ? 'bg-slate-400' : 'bg-slate-200',
            cell === selectedCell ? 'bg-slate-500' : '',
          ]"
          @click="selectCell(cell)"
        >
          <div
            class="w-5 h-5 bg-sky-800 absolute z-50 rounded-full"
            v-if="cell.canMove"
          ></div>
          <Figure v-if="cell.figure" :figure="cell.figure" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import Board from "./models/Board";
import Figure from "./components/Figure.vue";
import Cell from "./models/Cell";

const board = ref<Board>(new Board());
const selectedCell = ref<Cell | null>();

const selectCell = (target: Cell) => {
  if (target.figure && !selectedCell.value) {
    selectedCell.value = target;
    return;
  } // при первом клике выбирается фигура, которая будет ходить
  if (target === selectedCell.value) {
    selectedCell.value = null;
    return;
  } // если второй раз кликаем по той же клетке, ход отменяется
  if (
    selectedCell.value?.figure?.color === target.figure?.color &&
    target.figure
  ) {
    selectedCell.value = target;
  } // если второй раз кликаем по своей же другой фигуре, то фокус переходит на нее
  if (selectedCell.value && selectedCell.value !== target && target.canMove) {
    selectedCell.value.figure!.makeMove(target);
    selectedCell.value.figure = null;
    selectedCell.value = null;
  } // в остальных случаях делаем ход
};

watch(selectedCell, () => {
  if (selectedCell.value)
    board.value.showAvailableCells(selectedCell.value.figure!);
  else board.value.clearAvailableCells();
});
</script>
