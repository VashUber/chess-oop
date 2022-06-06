import { figure_color, coords, Names } from "../../types";
import Cell from "../Cell";
import Figure from "../Figure";

class Bishop extends Figure {
  constructor(color: figure_color, coords: coords) {
    super(color, coords);
    this.name = Names.BISHOP;
  }

  canMoveOn(target: Cell) {
    if (target.isDiagonalEmpty(this)) return true;

    return false;
  }
}

export default Bishop;
