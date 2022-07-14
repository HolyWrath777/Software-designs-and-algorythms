import { Shape } from './Shape';
import { Point } from "./Point";

export class Triangle extends Shape {
    constructor(color: string, filled: boolean, points: Point[]) {
        super(color, filled, points);
    }

    public toString(): string {
        return `Triangle[v1=${this.points[0].toString()}, v2=${this.points[1].toString()}, v3=${this.points[2].toString()}]`;
    }

    public getType(): string {
        if (this.points[0] === this.points[1] || this.points[0] === this.points[2] || this.points[1] === this.points[2]) {
            return 'Isosceles triangle';
        }

        if (this.points[0].distance(this.points[1]) === this.points[0].distance(this.points[2]) || this.points[1].distance(this.points[2]) === this.points[0].distance(this.points[2])) {
            return 'Equilateral triangle';
        }

        return 'Scalene triangle';
    }
}
