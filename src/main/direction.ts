export enum Orientation {
  N = "N",
  E = "E",
  S = "S",
  W = "W",
}

export class Direction {
  private orientation: Orientation;

  constructor() {
    this.orientation = Orientation.N;
  }

  public getOrientation(): Orientation {
    return this.orientation;
  }

  public turnRight() {
    if (this.orientation === Orientation.N) {
      this.orientation = Orientation.E;
    } else if (this.orientation === Orientation.E) {
      this.orientation = Orientation.S;
    } else if (this.orientation === Orientation.S) {
      this.orientation = Orientation.W;
    } else if (this.orientation === Orientation.W) {
      this.orientation = Orientation.N;
    }
  }

  public turnLeft() {
    if (this.orientation === Orientation.N) {
      this.orientation = Orientation.W;
    } else if (this.orientation === Orientation.W) {
      this.orientation = Orientation.S;
    } else if (this.orientation === Orientation.S) {
      this.orientation = Orientation.E;
    } else if (this.orientation === Orientation.E) {
      this.orientation = Orientation.N;
    }
  }
}
