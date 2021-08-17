import { AreaFactory } from "../main/area";
import { MarsRover } from "../main/marsrover";

describe("MarsRover test", () => {
  const area = new AreaFactory().createArea(10, 10, []);

  it("should return the rover's position and diretion in 0:0:N", () => {
    const state = new MarsRover(area).getState();
    expect(state).toBe("0:0:N");
  });

  it("should rotate once to the Right and output 0:0:E", () => {
    const rover = new MarsRover(area);
    rover.turnRight();
    const state = rover.getState();
    expect(state).toBe("0:0:E");
  });

  it("should rotate 4 times to the Left and output left direction", () => {
    const rover = new MarsRover(area);
    rover.turnLeft();
    expect(rover.getState()).toBe("0:0:W");
    rover.turnLeft();
    expect(rover.getState()).toBe("0:0:S");
    rover.turnLeft();
    expect(rover.getState()).toBe("0:0:E");
    rover.turnLeft();
    expect(rover.getState()).toBe("0:0:N");
  });

  it("should rotate 4 times to the Right and output right direction", () => {
    const rover = new MarsRover(area);
    rover.turnRight();
    expect(rover.getState()).toBe("0:0:E");
    rover.turnRight();
    expect(rover.getState()).toBe("0:0:S");
    rover.turnRight();
    expect(rover.getState()).toBe("0:0:W");
    rover.turnRight();
    expect(rover.getState()).toBe("0:0:N");
  });

  it("should move forward on grid from bottom-left and output as 0:1:N", () => {
    const rover = new MarsRover(area);
    rover.move();
    expect(rover.getState()).toBe("0:1:N");
  });
});
