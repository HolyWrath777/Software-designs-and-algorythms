import {getDistance} from "./utils";

export class Point {
   public x: number;
   public y: number;

    constructor();
    constructor(x: number, y: number) {
        this.x = x ?? 0;
        this.y = y ?? 0;
    }

   public toString(): string {
        return `(${this.x}, ${this.y})`;
    }

   public distance(): number;
   public distance(other: Point): number;
   public distance(x: number, y: number): number {
        if (other) {
            return getDistance(this.x - other.x, this.y - other.y);
        }


        if (x && y) {
            return getDistance(this.x - x, this.y - y);
        }

        return getDistance(this.x, this.y);
    }
}
