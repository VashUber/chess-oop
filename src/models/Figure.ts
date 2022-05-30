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
  public canMove(target: Cell) {
    return true;
  }
}

export default Figure;
