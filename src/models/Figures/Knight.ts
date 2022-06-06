import { figure_color, coords, Names } from "../../types";
import Cell from "../Cell";
import Figure from "../Figure";

class Knight extends Figure {
  constructor(color: figure_color, coords: coords) {
    super(color, coords);
    this.name = Names.KNIGHT;
  }

  canMoveOn(target: Cell) {
    const xd = Math.abs(this.coords[0] - target.coords[0]);
    const yd = Math.abs(this.coords[1] - target.coords[1]);

    if (
      ((xd === 1 && yd === 2) || (xd === 2 && yd === 1)) &&
      target.figure?.color !== this.color
    ) {
      return true;
    }

    return false;
  }
}

export default Knight;
