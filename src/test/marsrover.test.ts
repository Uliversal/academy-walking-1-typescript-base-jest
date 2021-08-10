import { MarsRover } from "../main/marsrover";

describe("MarsRover test", () => {
  it("should return the rover's position and diretion in 0:0:N", () => {
    const state = new MarsRover().getState();
    expect(state).toBe("0:0:N");
  });

  it("should rotate once to the Right and output 0:0:E", () => {
    const rover = new MarsRover();
    rover.command("R");
    const state = rover.getState();
    expect(state).toBe("0:0:E");
  });

  it("should rotate 4 times to the Left and output left direction", () => {
    const rover = new MarsRover();
    rover.command("L");
    expect(rover.getState()).toBe("0:0:W");
    rover.command("L");
    expect(rover.getState()).toBe("0:0:S");
    rover.command("L");
    expect(rover.getState()).toBe("0:0:E");
    rover.command("L");
    expect(rover.getState()).toBe("0:0:N");
  });

  it("should rotate 4 times to the Right and output right direction", () => {
    const rover = new MarsRover();
    rover.command("R");
    expect(rover.getState()).toBe("0:0:E");
    rover.command("R");
    expect(rover.getState()).toBe("0:0:S");
    rover.command("R");
    expect(rover.getState()).toBe("0:0:W");
    rover.command("R");
    expect(rover.getState()).toBe("0:0:N");
  });

  it("should move forward on grid from bottom-left and output as 0:1:N", () => {
    const rover = new MarsRover();
    rover.command("M");
    const state = rover.getState();
    expect(state).toBe("0:1:N");
  });

  it("should take a chain of commands and return the correct ouput for 2:3:N", () => {
    const rover = new MarsRover();
    rover.command("MMRMMLM");
    const state = rover.getState();
    expect(state).toBe("2:3:N");
  });
});
