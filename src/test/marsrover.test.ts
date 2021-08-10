import { MarsRover } from "../main/marsrover";

describe("MarsRover test", () => {
  it("Get the state of the Rover", () => {
    const state = new MarsRover().getState();
    expect(state).toBe("0:0:N");
  });
});
