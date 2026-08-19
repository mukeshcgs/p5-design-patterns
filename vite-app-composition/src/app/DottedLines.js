import { randomSelectTwo } from './helper';
import Layers from './Layers';

class DottedLines extends Layers {
    constructor() {
        super()
        // this.stepsOut = 8
        // this.numSteps = randomSelectTwo() ? this.stepsOut : this.stepsOut * 1.25
        // this.centerOffset = (this.CRYSTAL_SIZE / 2) * 0.15
        // this.singleStep = ((this.CRYSTAL_SIZE / 2) - this.centerOffset) / this.numSteps
        // this.weight = this.randomSelectTwo ? 1 : 3


        this.numShapes = randomSelectTwo() ? this.sides : this.sides * 2
        this.angle = 360 / this.numShapes
        this.shapeSize = 6
        this.centerOffset = (this.CRYSTAL_SIZE / 2) * 0.5
        // this.numSteps = ((this.CRYSTAL_SIZE / 2) - this.centerOffset) / this.numSteps
        this.singleStep = ((this.CRYSTAL_SIZE / 2) - this.centerOffset) / 6

    }
    render() {
        console.log("======", this.centerOffset);
        p5.fill(this.strokeColor)
        p5.noStroke()
        p5.push()
        p5.translate(this.canvasWidth / 2, this.canvasHeight / 2);
        for (let i = 0; i < this.numShapes; i++) {
            for (let x = this.centerOffset; x < this.CRYSTAL_SIZE / 2; x += this.singleStep) {
                p5.rect(x, 0, this.shapeSize, this.shapeSize)
            }
            p5.rotate(this.angle)
        }
        p5.pop()
    }
}

export default DottedLines