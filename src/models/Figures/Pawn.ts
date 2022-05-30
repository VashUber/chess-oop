import { figure_color, coords, Names } from "../../types";
import Cell from "../Cell";
import Figure from "../Figure";

class Pawn extends Figure {
  public name: Names;

  constructor(color: figure_color, coords: coords) {
    super(color, coords);
    this.name = Names.PAWN;
  }
}

export default Pawn;
