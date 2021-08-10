import { MarsRover } from "../main/marsrover";

describe("MarsRover test", () => {
  it("should return the rover's position and diretion in 0:0:N", () => {
    const state = new MarsRover().getState();
    expect(state).toBe("0:0:N");
  });

  it("should the rover rotates to Right in 0:0:E", () => {
    const state = new MarsRover().getState();
    expect(state).toBe("0:0:E");
  });
});
