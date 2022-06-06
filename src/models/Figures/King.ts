import { figure_color, coords, Names } from "../../types";
import Cell from "../Cell";
import Figure from "../Figure";

class King extends Figure {
  constructor(color: figure_color, coords: coords) {
    super(color, coords);
    this.name = Names.KING;
  }
  makeMove(target: Cell) {
    this.coords = target.coords;
    target.figure = this;
  }

  canMoveOn(target: Cell) {
    const xd = Math.abs(target.coords[0] - this.coords[0]);
    const yd = Math.abs(target.coords[1] - this.coords[1]);

    if (
      ((xd === 1 && yd === 1) ||
        (xd === 0 && yd === 1) ||
        (xd === 1 && yd === 0)) &&
      target.figure?.color !== this.color
    ) {
      return true;
    }

    return false;
  }
}

export default King;
