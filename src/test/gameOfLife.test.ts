import { GameOfLife } from "./../main/gameOfLife";
import { Position } from "../main/Position";

describe("GameOfLife test", () => {
  it("should return 2x2 grid with two cells", () => {
    const gameOfLife = new GameOfLife();
    gameOfLife.addCell({ x: 0, y: 0 });
    gameOfLife.addCell({ x: 1, y: 0 });
    expect(gameOfLife.printOutput(2, 2)).toBe("XX\n00");
  });

  it("should return an empty 2x2 grid after one step because two cells died", () => {
    const gameOfLife = new GameOfLife();
    gameOfLife.addCell({ x: 0, y: 0 });
    gameOfLife.addCell({ x: 1, y: 0 });
    gameOfLife.nextStep();
    expect(gameOfLife.printOutput(2, 2)).toBe("00\n00");
  });

  it("should return a 4x4 grid after one step filled with cells", () => {
    const gameOfLife = new GameOfLife();
    gameOfLife.addCell({ x: 1, y: 1 });
    gameOfLife.addCell({ x: 2, y: 1 });
    gameOfLife.addCell({ x: 1, y: 2 });
    gameOfLife.addCell({ x: 2, y: 2 });
    gameOfLife.nextStep();
    expect(gameOfLife.printOutput(4, 4)).toBe("0000\n0XX0\n0XX0\n0000");
    gameOfLife.nextStep();
    expect(gameOfLife.printOutput(4, 4)).toBe("0000\n0XX0\n0XX0\n0000");
  });

  it("should return a 4x4 grid after one step filled with cells", () => {
    const gameOfLife = new GameOfLife();
    gameOfLife.addCell({ x: 1, y: 1 });
    gameOfLife.addCell({ x: 2, y: 1 });
    gameOfLife.addCell({ x: 1, y: 2 });
    gameOfLife.nextStep();
    expect(gameOfLife.printOutput(4, 4)).toBe("0000\n0XX0\n0XX0\n0000");
  });

  it("should return a 4x4 grid after one step filled with cells", () => {
    const gameOfLife = new GameOfLife();
    gameOfLife.addCell({ x: 1, y: 0 });
    gameOfLife.addCell({ x: 1, y: 1 });
    gameOfLife.addCell({ x: 1, y: 2 });
    gameOfLife.nextStep();
    expect(gameOfLife.printOutput(3, 3)).toBe("000\nXXX\n000");
    gameOfLife.nextStep();
    expect(gameOfLife.printOutput(3, 3)).toBe("0X0\n0X0\n0X0");

  });


});
