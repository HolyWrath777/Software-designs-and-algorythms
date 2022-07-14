import { Point } from "./Point";

const defaultPoints = [new Point(2, 4), new Point(4, 6), new Point()]

export abstract class Shape {
    protected color: string
    protected filled: boolean
    points: Point[]

    constructor();
    constructor(color: string, filled: boolean, points: Point[]) {
        this.color = color ?? 'green';
        this.filled = filled ?? true;
        this.points = points ?? defaultPoints;
    }

    public toString(): string {
        return `A shape with color ${this.color} and ${this.filled ? 'filled' : 'not filled'}. Points: ${this.points.map(p => p.toString()).join(', ')}`;
    }

    public getPerimeter(): number {
        return this.points.reduce((acc, p) => acc + p.distance(), 0);
    }

    abstract getType(): string;
}
