import { figure_color, coords, Names } from "../../types";
import Cell from "../Cell";
import Figure from "../Figure";

class Rook extends Figure {
  constructor(color: figure_color, coords: coords) {
    super(color, coords);
    this.name = Names.ROOK;
  }

  canMoveOn(target: Cell) {
    if (target.isVerticalEmpty(this) || target.isHorizontalEmpty(this))
      return true;

    return false;
  }
}

export default Rook;
