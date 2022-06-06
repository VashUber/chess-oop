import { figure_color, coords, Names } from "../../types";
import Cell from "../Cell";
import Figure from "../Figure";

class Rook extends Figure {
  constructor(color: figure_color, coords: coords) {
    super(color, coords);
    this.name = Names.ROOK;
  }

  makeMove(target: Cell) {
    this.coords = target.coords;
    target.figure = this;
  }

  canMoveOn(target: Cell) {
    if (this.isVerticalOrHorizontal(target)) {
      return true;
    }

    return false;
  }
}

export default Rook;
