import { IPosition } from "./marsrover";

interface AbstractAreaFactory {
  createArea(sizeX: number, sizeY: number, obstacles: IPosition[]): IArea;
}

export class AreaFactory implements AbstractAreaFactory {
  public createArea(
    sizeX: number,
    sizeY: number,
    obstacles: IPosition[]
  ): IArea {
    return new Area(sizeX, sizeY, obstacles);
  }
}

export interface IArea {
  getNewXPosition(x: number): number;
  getNewYPosition(y: number): number;
  isObstacle(position: IPosition): boolean;
}

export class Area implements IArea {
  private sizeX: number;
  private sizeY: number;
  private obstacles: IPosition[];

  constructor(sizeX: number, sizeY: number, obstacles: IPosition[]) {
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.obstacles = obstacles;
  }

  public getNewXPosition(x: number): number {
    if (x < 0) {
      return this.sizeX - 1;
    }
    if (x >= this.sizeX) {
      return 0;
    }
    return x;
  }

  public getNewYPosition(y: number): number {
    if (y < 0) {
      return this.sizeY - 1;
    }
    if (y >= this.sizeY) {
      return 0;
    }
    return y;
  }

  public isObstacle(position: IPosition) {
    for (const obstacle of this.obstacles) {
      if (obstacle.x === position.x && obstacle.y === position.y) {
        return true;
      }
    }
    return false;
  }
}
