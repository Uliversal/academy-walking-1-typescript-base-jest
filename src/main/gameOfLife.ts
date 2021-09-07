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
    for (let row = 0; row < height; row++) {
      output.push(new Array(width).fill("0"));
    }
    for (const cell of this.cells) {
      if (cell.x < width && cell.y < height) {
        output[cell.y][cell.x] = "X";
      }
    }
    const o = output.map((e) => e.join("")).join("\n");
    return o;
  }

  nextStep() {
    const newCells: Position[] = [];

    for (const cell of this.cells) {
      let numberOfLiveNeighbours = this.countLiveNeighbours(cell);
      if (numberOfLiveNeighbours === 2 || numberOfLiveNeighbours === 3) {
        newCells.push(cell);
      }

      let neighbours: Position[] = this.getNeighbourCells(cell);
      for (const neighbour of neighbours) {
        if (
          this.isDealCell(neighbour) &&
          !this.isInListOfCells(neighbour, newCells)
        ) {
          if (this.countLiveNeighbours(neighbour) === 3) {
            newCells.push(neighbour);
          }
        }
      }
    }
    this.cells = newCells;
  }

  private countLiveNeighbours(cell: Position) {
    let numberOfLiveNeighbours = 0;
    for (const neighbour of this.cells) {
      if (
        neighbour.x >= cell.x - 1 &&
        neighbour.x <= cell.x + 1 &&
        neighbour.y >= cell.y - 1 &&
        neighbour.y <= cell.y + 1 &&
        !this.isSameCell(neighbour, cell)
      ) {
        numberOfLiveNeighbours++;
      }
    }
    return numberOfLiveNeighbours;
  }

  private isDealCell(cellToCheck: Position) {
    return !this.isInListOfCells(cellToCheck, this.cells);
  }

  private isInListOfCells(cellToCheck: Position, cells: Position[]) {
    return cells.filter((c) => this.isSameCell(cellToCheck, c)).length > 0;
  }

  private isSameCell(cell1: Position, cell2: Position): boolean {
    return cell1.x === cell2.x && cell1.y === cell2.y;
  }

  private getNeighbourCells(cell: Position): Position[] {
    return [
      { x: cell.x - 1, y: cell.y + 1 },
      { x: cell.x - 1, y: cell.y },
      { x: cell.x - 1, y: cell.y - 1 },
      { x: cell.x, y: cell.y + 1 },
      { x: cell.x, y: cell.y - 1 },
      { x: cell.x + 1, y: cell.y + 1 },
      { x: cell.x + 1, y: cell.y },
      { x: cell.x + 1, y: cell.y - 1 },
    ];
  }
}
