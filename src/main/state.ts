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

  public setX(x: number): void {
    this.x = x;
  }

  public getY(): number {
    return this.y;
  }

  public setY(y: number): void {
    this.y = y;
  }

  public getDirection(): string {
    return this.direction;
  }

  public setDirection(direction: string): void {
    this.direction = direction;
  }
}
