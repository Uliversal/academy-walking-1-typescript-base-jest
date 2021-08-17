import { Area, AreaFactory } from "../main/area";
import { MarsRover } from "../main/marsrover";
import { RoverCommander } from "../main/rovercommander";

describe("RoverCommander test", () => {
  const area = new AreaFactory().createArea(10, 10, []);

  it("should return the rover's position and diretion in 0:0:N", () => {
    const marsRover = new MarsRover(area);
    const roverCommander = new RoverCommander();
    roverCommander.command(marsRover, "LRRM");

    expect(marsRover.getState()).toBe("1:0:E");
  });

  it.each([
    ["MMRMMLM", "2:3:N"],
    ["MMMMMMMMMM", "0:0:N"],
    ["LM", "9:0:W"],
    ["LLM", "0:9:S"],
    ["RMMMMMMMMMM", "0:0:E"],
  ])(
    "should take a chain of commands '%s' and return the correct ouput %s",
    (command, expectedOuput) => {
      const marsRover = new MarsRover(area);
      const roverCommander = new RoverCommander();
      roverCommander.command(marsRover, command);

      expect(marsRover.getState()).toBe(expectedOuput);
    }
  );

  it.each([
    ["MMMM", "O:0:2:N"],
    ["MMMML", "O:0:2:N"],
  ])(
    "should take a chain of commands '%s' and return the rover's position while approaching an obstacle at (0,3) with %s",
    () => {
      const areaWithObstacles = new AreaFactory().createArea(10, 10, [
        { x: 0, y: 3 },
      ]);

      const marsRover = new MarsRover(areaWithObstacles);
      const roverCommander = new RoverCommander();
      roverCommander.command(marsRover, "MMMM");

      expect(marsRover.getState()).toBe("O:0:2:N");
    }
  );
});
