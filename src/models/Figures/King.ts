import { figure_color, coords, Names } from "../../types";
import Figure from "../Figure";

class King extends Figure {
  constructor(color: figure_color, coords: coords) {
    super(color, coords);
    this.name = Names.KING;
  }
}

export default King;
