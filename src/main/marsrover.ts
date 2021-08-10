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
    if (command === "R") {
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
    } else if (command === "L") {
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
    } else {
      throw new Error("Not Implemented");
    }
  }
}
