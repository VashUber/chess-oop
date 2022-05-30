import { figure_color, coords, Names } from "../../types";
import Cell from "../Cell";
import Figure from "../Figure";

class Pawn extends Figure {
  public isFirstTurn: boolean;

  constructor(color: figure_color, coords: coords) {
    super(color, coords);
    this.name = Names.PAWN;
    this.isFirstTurn = true;
  }

  makeMove(target: Cell) {
    if (this.isFirstTurn) this.isFirstTurn = false;
    this.coords = target.coords;
    target.figure = this;
  }

  canMove(target: Cell) {
    const yd = this.coords[1] - target.coords[1];
    const color = this.color === "black" ? -1 : 1;

    if (target.coords[0] === this.coords[0]) {
      if (yd * color === 1) return true;
      if (this.isFirstTurn && yd * color === 2) {
        return true;
      }
    }
    return false;
  }
}

export default Pawn;
