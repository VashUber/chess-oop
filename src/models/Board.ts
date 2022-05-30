import Cell from "./Cell";
import Pawn from "./Figures/Pawn";

class Board {
  public board: Cell[][] = [];

  public initBoard() {
    for (let y = 0; y < 8; y++) {
      this.board.push([]);
      const currentColor = y < 2 ? "black" : "white";
      for (let x = 0; x < 8; x++) {
        this.board[y].push(new Cell([x, y], null));
      }
    }
    this.initFigures();
  }

  public initPawn() {
    for (let i = 0; i < 8; i++) {
      this.board[1][i].figure = new Pawn("black", [i, 1]);
      this.board[6][i].figure = new Pawn("white", [i, 6]);
    }
  }

  public initFigures() {
    this.initPawn();
  }

  constructor() {
    this.initBoard();
  }
}

export default Board;
