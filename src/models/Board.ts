import { figure_color } from "./../types/index";
import { Names } from "../types";
import Cell from "./Cell";
import Figure from "./Figure";
import Bishop from "./Figures/Bishop";
import King from "./Figures/King";
import Knight from "./Figures/Knight";
import Pawn from "./Figures/Pawn";
import Queen from "./Figures/Queen";
import Rook from "./Figures/Rook";

class Board {
  public board: Cell[][] = [];
  // public kings = {} as {
  //   black: Cell;
  //   white: Cell;
  // };

  public initBoard() {
    for (let y = 0; y < 8; y++) {
      this.board.push([]);
      for (let x = 0; x < 8; x++) {
        this.board[y].push(new Cell([x, y], null, this.board));
      }
    }
    this.initFigures();
  }

  public showAvailableCells(figure: Figure) {
    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 8; x++) {
        const target = this.board[y][x];
        if (target.figure?.name !== Names.KING)
          target.canMove = figure.canMoveOn(target);
      }
    }
  }

  public clearAvailableCells() {
    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 8; x++) {
        this.board[y][x].canMove = false;
      }
    }
  }

  public initPawn() {
    for (let i = 0; i < 8; i++) {
      this.board[1][i].figure = new Pawn("black", [i, 1]);
      this.board[6][i].figure = new Pawn("white", [i, 6]);
    }
  }

  public initRook() {
    this.board[0][0].figure = new Rook("black", [0, 0]);
    this.board[0][7].figure = new Rook("black", [7, 0]);
    this.board[7][0].figure = new Rook("white", [0, 7]);
    this.board[7][7].figure = new Rook("white", [7, 7]);
  }

  public initKnight() {
    this.board[0][1].figure = new Knight("black", [1, 0]);
    this.board[0][6].figure = new Knight("black", [6, 0]);
    this.board[7][1].figure = new Knight("white", [1, 7]);
    this.board[7][6].figure = new Knight("white", [6, 7]);
  }

  public initBishop() {
    this.board[0][2].figure = new Bishop("black", [2, 0]);
    this.board[0][5].figure = new Bishop("black", [5, 0]);
    this.board[7][2].figure = new Bishop("white", [2, 7]);
    this.board[7][5].figure = new Bishop("white", [5, 7]);
  }

  public initQueen() {
    this.board[0][3].figure = new Queen("black", [3, 0]);
    this.board[7][3].figure = new Queen("white", [3, 7]);
  }

  public initKing() {
    this.board[0][4].figure = new King("black", [4, 0]);
    this.board[7][4].figure = new King("white", [4, 7]);
    // this.kings.black = this.board[0][4];
    // this.kings.white = this.board[7][4];
  }

  public initFigures() {
    this.initPawn();
    this.initRook();
    this.initKnight();
    this.initBishop();
    this.initQueen();
    this.initKing();
  }

  // public setKingEntourage(color: figure_color) {
  //   const cells = [];

  //   for (let y = 0; y < 8; y++) {
  //     for (let x = 0; x < 8; x++) {
  //       const target = this.board[y][x];
  //       const xd = Math.abs(target.coords[0] - this.kings[color].coords[0]);
  //       const yd = Math.abs(target.coords[1] - this.kings[color].coords[1]);

  //       if (
  //         (xd === 1 && yd === 1) ||
  //         (xd === 0 && yd === 1) ||
  //         (xd === 1 && yd === 0)
  //       ) {
  //         const king = this.kings[color].figure as King;
  //         cells.push(target);

  //         if (target.figure) {
  //           if (target.figure.color === color) {
  //             king.entourage = [...new Set(cells)];
  //           }
  //         } else {
  //           king.entourage = [...new Set(cells)];
  //         }
  //       }
  //     }
  //   }
  // }

  // public getKings() {
  //   return this.board.reduce((prev, cur) => {
  //     const obj = {} as { black: Cell; white: Cell };
  //     cur.forEach((elem) => {
  //       if (elem.figure?.name === Names.KING) obj[elem.figure.color] = elem;
  //     });
  //     return { ...obj, ...prev };
  //   }, {} as { black: King; white: King });
  // }

  constructor() {
    this.initBoard();
  }
}

export default Board;
