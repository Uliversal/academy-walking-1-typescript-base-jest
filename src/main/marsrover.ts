import { IArea } from "./area";
import { Direction, Orientation } from "./direction";

export interface IPosition {
  x: number;
  y: number;
}

export class MarsRover {
  private area: IArea;

  private position: IPosition = {
    x: 0,
    y: 0,
  };

  private direction: Direction;

  private hasDetectedObstacle: boolean;

  public constructor(area: IArea) {
    this.area = area;
    this.position = { x: 0, y: 0 };
    this.direction = new Direction();
    this.hasDetectedObstacle = false;
  }

  public getState() {
    return (
      (this.hasDetectedObstacle ? "O:" : "") +
      this.position.x +
      ":" +
      this.position.y +
      ":" +
      this.direction.getOrientation()
    );
  }

  public turnRight() {
    this.hasDetectedObstacle = false;
    this.direction.turnRight();
  }

  public turnLeft() {
    this.hasDetectedObstacle = false;
    this.direction.turnLeft();
  }

  public move() {
    this.hasDetectedObstacle = false;

    const orientation = this.direction.getOrientation();
    const targetPosition = { x: this.position.x, y: this.position.y };

    if (orientation === Orientation.N) {
      targetPosition.y = this.area.getNewYPosition(this.position.y + 1);
    }
    if (orientation === Orientation.E) {
      targetPosition.x = this.area.getNewXPosition(this.position.x + 1);
    }
    if (orientation === Orientation.S) {
      targetPosition.y = this.area.getNewYPosition(this.position.y - 1);
    }
    if (orientation === Orientation.W) {
      targetPosition.x = this.area.getNewXPosition(this.position.x - 1);
    }

    if (this.area.isObstacle(targetPosition)) {
      this.hasDetectedObstacle = true;
      return;
    }

    this.position = targetPosition;
  }
}
