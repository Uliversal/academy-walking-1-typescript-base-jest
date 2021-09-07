import { Position } from "./Position";

export class GameOfLife {
  public cells: Position[];

  public constructor() {
    this.cells = [];
  }

  addCell(position: Position) {
    this.cells.push(position);
  }

  printOutput(width: number, height: number) {
    let output: string[][] = [];
    for (let x = 0; x < height; x++) {
      output.push(new Array(width).fill("0"));
    }
    for (const cell of this.cells) {
      if (cell.x < width && cell.y < height) {
        output[cell.y][cell.x] = "X";
      }
    }
    const o = output.map((e) => e.join("")).join("\n");
    console.log(o);
    return o;
  }

  nextStep() {
    const newCells: Position[] = [];

    for (const cell of this.cells) {
      let numberOfNeighbours = -1;
      for (const neighbour of this.cells) {
        if (
          neighbour.x >= cell.x - 1 &&
          neighbour.x <= cell.x + 1 &&
          neighbour.y >= cell.y - 1 &&
          neighbour.y <= cell.y + 1
        ) {
          numberOfNeighbours++;
        }
      }
      if (numberOfNeighbours === 2 || numberOfNeighbours === 3) {
        newCells.push(cell);
      }
    }
    this.cells = newCells;
  }
}
