import { figure_color, coords, Names } from "../../types";
import Cell from "../Cell";
import Figure from "../Figure";

class Queen extends Figure {
  constructor(color: figure_color, coords: coords) {
    super(color, coords);
    this.name = Names.QUEEN;
  }

  canMoveOn(target: Cell) {
    if (
      target.isVerticalEmpty(this) ||
      target.isHorizontalEmpty(this) ||
      target.isDiagonalEmpty(this)
    )
      return true;

    return false;
  }
}

export default Queen;
