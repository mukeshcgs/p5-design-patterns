import p5 from "p5";

class Layers {
    constructor() {
        const CRYSTAL_SIZE = 400;
        const SIDES = 6
        let PALLETTE = [
            p5.color(255, 52, 154),
            p5.color(4, 0, 152)
        ]

        this.sides = SIDES;
        this.numShapes = this.sides
        this.angle = p5.TOW_PI / this.numShapes
        this.stepOut = 8
        // this.singleStep(CRYSTAL_SIZE / 2) / this.stepOut
        this.thinStrok = 1
        this.thickStrok = 3
        this.strokeColor = this.getRandomFromPallate()

    }
    getRandomFromPallate() {
        const rando2 = p5.floor(p5.random(0, PALLETTE.length))
        return PALLETTE[rando2]
    }
}
export class Circle extends Layers {
    constructor() {
        super()
        this.shapeSize = (CRYSTAL_SIZE / 2) * 0.93
        this.position = (CRYSTAL_SIZE / 2) - (this.shapeSize / 2)
    }
    rendar() {
        p5.noFill()
        p5.stroke(this.strokeColor)
        p5.strokeWeight(1)
        p5.push()
        p5.translate(canvasWidth / 2, canvasHeight / 2);
        for (let i = 0; i < this.numbShapes; i++) {
            p5.ellipse(this.position, 0, this.shapeSize, this.shapeSize)
            p5.rotate(this.angle)
        }
        p5.pop()
    }
}