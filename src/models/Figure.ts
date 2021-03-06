import { Names } from "./../types/index";
import uniqid from "uniqid";
import { coords, figure_color } from "../types";
import Cell from "./Cell";

class Figure {
  public color: figure_color;
  public id: string;
  public coords: coords;
  public name = "" as Names;

  constructor(color: figure_color, coords: coords) {
    this.color = color;
    this.id = uniqid();
    this.coords = coords;
  }

  public makeMove(target: Cell) {
    this.coords = target.coords;
    target.figure = this;
  }
  public canMoveOn(target: Cell) {
    return true;
  }
}

export default Figure;
