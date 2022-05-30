import { figure_color, coords, Names } from "../../types";
import Figure from "../Figure";

class Rook extends Figure {
  public name: Names;

  constructor(color: figure_color, coords: coords) {
    super(color, coords);
    this.name = Names.ROOK;
  }
}

export default Rook;
