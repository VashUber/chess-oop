import { coords } from "../types";
import Board from "./Board";
import Figure from "./Figure";

class Cell {
  public coords: coords;
  public figure: Figure | null;
  public canMove: boolean = false;
  public board: Cell[][];

  constructor(coords: coords, figure: Figure | null, board: Cell[][]) {
    this.coords = coords;
    this.figure = figure;
    this.board = board;
  }

  public isVerticalEmpty(target: Figure) {
    const min = Math.min(this.coords[1], target.coords[1]);
    const max = Math.max(this.coords[1], target.coords[1]);

    if (
      this.coords[0] === target.coords[0] &&
      target !== this.figure &&
      target.color !== this.figure?.color
    ) {
      for (let y = min + 1; y < max; y++) {
        if (this.board[y][target.coords[0]].figure) return false;
      }
    } else return false;

    return true;
  }

  public isHorizontalEmpty(target: Figure) {
    const min = Math.min(this.coords[0], target.coords[0]);
    const max = Math.max(this.coords[0], target.coords[0]);

    if (
      this.coords[1] === target.coords[1] &&
      target !== this.figure &&
      target.color !== this.figure?.color
    ) {
      for (let x = min + 1; x < max; x++) {
        if (this.board[target.coords[1]][x].figure) return false;
      }
    } else return false;

    return true;
  }

  public isDiagonalEmpty(target: Figure) {
    const xd = Math.abs(target.coords[0] - this.coords[0]);
    const yd = Math.abs(target.coords[1] - this.coords[1]);

    const xDir = target.coords[0] > this.coords[0] ? 1 : -1;
    const yDir = target.coords[1] > this.coords[1] ? 1 : -1;

    if (xd === yd && this.figure?.color !== target.color) {
      for (let i = 1; i < yd; i++) {
        if (
          this.board[this.coords[1] + yDir * i][this.coords[0] + xDir * i]
            .figure
        )
          return false;
      }
    } else return false;

    return true;
  }
}

export default Cell;
