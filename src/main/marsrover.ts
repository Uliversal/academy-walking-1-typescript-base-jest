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
    } else {
      throw new Error("Not Implemented");
    }
  }
}
