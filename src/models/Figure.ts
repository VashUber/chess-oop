import uniqid from "uniqid";
import { coords, figure_color } from "../types";

class Figure {
  public color: figure_color;
  public id: string;
  public coords: coords;

  constructor(color: figure_color, coords: coords) {
    this.color = color;
    this.id = uniqid();
    this.coords = coords;
  }
}

export default Figure;
