import { figure_color, coords, Names } from "../../types";
import Figure from "../Figure";

class Knight extends Figure {
  public name: Names;

  constructor(color: figure_color, coords: coords) {
    super(color, coords);
    this.name = Names.KNIGHT;
  }
}

export default Knight;
