import { MarsRover } from "./marsrover";

export abstract class RoverCommand {
  protected marsrover: MarsRover;

  constructor(marsrover: MarsRover) {
    this.marsrover = marsrover;
  }

  abstract execute(): void;
}

export class TurnRight extends RoverCommand {
  public execute(): void {
    this.marsrover.turnRight();
  }
}

export class TurnLeft extends RoverCommand {
  public execute(): void {
    this.marsrover.turnLeft();
  }
}

export class Move extends RoverCommand {
  public execute(): void {
    this.marsrover.move();
  }
}
