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
    return o;
  }

  nextStep() {
    const newCells: Position[] = [];

    for (const cell of this.cells) {
      let numberOfLiveNeighbours = this.countLiveNeighbours(cell);
      if (numberOfLiveNeighbours === 2 || numberOfLiveNeighbours === 3) {
        newCells.push(cell);
      }
      let neighbours : Position[] = [
        {x: cell.x - 1, y: cell.y + 1}, 
        {x: cell.x - 1, y: cell.y}, 
        {x: cell.x - 1, y: cell.y - 1}, 
        {x: cell.x, y: cell.y + 1}, 
        {x: cell.x, y: cell.y - 1}, 
        {x: cell.x + 1, y: cell.y + 1}, 
        {x: cell.x + 1, y: cell.y}, 
        {x: cell.x + 1, y: cell.y - 1}, 
      ];

      
      

      for (const neighbour of neighbours) {
        if (this.cells.filter(c => c.x === neighbour.x && c.y === neighbour.y).length === 0 &&
        newCells.filter(c => c.x === neighbour.x && c.y === neighbour.y).length === 0
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
    let numberOfLiveNeighbours = this.cells.filter(c => c.x === cell.x && c.y === cell.y).length === 0? 0: -1;
    for (const neighbour of this.cells) {
      if (neighbour.x >= cell.x - 1 &&
        neighbour.x <= cell.x + 1 &&
        neighbour.y >= cell.y - 1 &&
        neighbour.y <= cell.y + 1) {
        numberOfLiveNeighbours++;
      }
    }
    return numberOfLiveNeighbours;
  }
}
