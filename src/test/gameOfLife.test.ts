import { GameOfLife } from './../main/gameOfLife';
import { Position } from "../main/Position";

describe("GameOfLife test", () => {

  it("should return 2x2 grid with two cells", () => {
    const gameOfLife = new GameOfLife();
    gameOfLife.addCell({x:0,y:0});
    gameOfLife.addCell({x:1,y:0});
    expect(gameOfLife.printOutput(2,2)).toBe('XX\n00');
  });

  it("should return 2x2 grid after one step", () => {
    const gameOfLife = new GameOfLife();
    gameOfLife.addCell({x:0,y:0});
    gameOfLife.addCell({x:1,y:0});
    gameOfLife.nextStep();
    expect(gameOfLife.printOutput(2,2)).toBe('00\n00');
  });

});
