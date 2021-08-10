export class State {
  private x: number;
  private y: number;
  private direction: string;

  public constructor() {
    this.x = 0;
    this.y = 0;
    this.direction = "N";
  }

  public getX(): number {
    return this.x;
  }

  public getY(): number {
    return this.y;
  }

  public getDirection(): string {
    return this.direction;
  }

  public setDirection(direction: string): void {
    this.direction = direction;
  }
}
