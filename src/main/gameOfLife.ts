import { Position } from "./Position";

export class GameOfLife {

  public cells: Position[];

  public constructor() {
    this.cells = [];
  }

  addCell(position: Position){
    this.cells.push(position);
  }

  printOutput (width: number, height: number) {
    let output: string[][] = [];
    for (let x = 0; x < height; x++) {
        output.push(new Array(width).fill('0'));
    }
    for (const cell of this.cells) {
      if (cell.x < width && cell.y < height) {
        output[cell.y][cell.x] = 'X';
      }
    }    
    return output.map(e => e.join('')).join('\n');
  }

  nextStep() {
    
  }
}