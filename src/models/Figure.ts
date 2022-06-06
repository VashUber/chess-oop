import { Names } from "./../types/index";
import uniqid from "uniqid";
import { coords, figure_color } from "../types";
import Cell from "./Cell";

class Figure {
  public color: figure_color;
  public id: string;
  public coords: coords;
  public name: Names = "" as Names;

  constructor(color: figure_color, coords: coords) {
    this.color = color;
    this.id = uniqid();
    this.coords = coords;
  }

  public makeMove(target: Cell) {
    return;
  }
  public canMoveOn(target: Cell) {
    return true;
  }
  public isVerticalOrHorizontal(target: Cell) {
    const isEqualX = target.coords[0] === this.coords[0];
    const isEqualY = target.coords[1] === this.coords[1];

    if (isEqualX && target.figure?.color !== this.color) {
      return true;
    }
    if (isEqualY && target.figure?.color !== this.color) {
      return true;
    }

    return false;
  }
}

export default Figure;
