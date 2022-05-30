import { figure_color, coords, Names } from "../../types";
import Figure from "../Figure";

class Queen extends Figure {
  constructor(color: figure_color, coords: coords) {
    super(color, coords);
    this.name = Names.QUEEN;
  }
}

export default Queen;
