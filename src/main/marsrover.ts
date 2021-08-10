import { State } from "./state";

export class MarsRover {
  private state: State;

  public constructor() {
    this.state = new State();
  }

  public getState() {
    return `${this.state.getX()}:${this.state.getY()}:${this.state.getDirection()}`;
  }

  public command(command: string) {
    for (let i=0; i < command.length; i++) {
      let currentCommand = command.charAt(i)
      if (currentCommand === "R") {
        this.turnRight();
      } else if (currentCommand === "L") {
        this.turnLeft();
      } else if (currentCommand === "M") {
        this.move();
      } else {
        throw new Error("Not Implemented");
      }
    }
  }

  private move() {
    const direction = this.state.getDirection();
    const x = this.state.getX();
    const y = this.state.getY();

    if (direction === "N") {
      this.state.setY(y + 1);
    }
    if (direction === "E") {
      this.state.setX(x + 1);
    }
    if (direction === "S") {
      this.state.setY(y - 1);
    }
    if (direction === "W") {
      this.state.setX(x - 1);
    }
  }

  private turnRight() {
    const direction = this.state.getDirection();
    if (direction === "N") {
      this.state.setDirection("E");
    }
    if (direction === "E") {
      this.state.setDirection("S");
    }
    if (direction === "S") {
      this.state.setDirection("W");
    }
    if (direction === "W") {
      this.state.setDirection("N");
    }
  }

  private turnLeft() {
    const direction = this.state.getDirection();
    if (direction === "N") {
      this.state.setDirection("W");
    }
    if (direction === "W") {
      this.state.setDirection("S");
    }
    if (direction === "S") {
      this.state.setDirection("E");
    }
    if (direction === "E") {
      this.state.setDirection("N");
    }
  }
}
