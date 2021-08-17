import { MarsRover } from "./marsrover";
import { TurnRight, TurnLeft, Move } from "./command";

enum COMMANDS {
  R = "R",
  L = "L",
  M = "M",
}

export class RoverCommander {
  public command(marsrover: MarsRover, command: string) {
    for (let i = 0; i < command.length; i++) {
      let currentCommand = command.charAt(i);
      if (currentCommand === COMMANDS.R) {
        new TurnRight(marsrover).execute();
      } else if (currentCommand === COMMANDS.L) {
        new TurnLeft(marsrover).execute();
      } else if (currentCommand === COMMANDS.M) {
        new Move(marsrover).execute();
      } else {
        throw new Error("Not Implemented");
      }
    }
  }
}
