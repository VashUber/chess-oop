import { coords } from "../types";
import Figure from "./Figure";

class Cell {
  public coords: coords;
  public figure: Figure | null;
  public canMove: boolean = false;

  constructor(coords: coords, figure: Figure | null) {
    this.coords = coords;
    this.figure = figure;
  }
}

export default Cell;
