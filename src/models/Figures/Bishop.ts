import { figure_color, coords, Names } from "../../types";
import Figure from "../Figure";

class Bishop extends Figure {
  constructor(color: figure_color, coords: coords) {
    super(color, coords);
    this.name = Names.BISHOP;
  }
}

export default Bishop;
