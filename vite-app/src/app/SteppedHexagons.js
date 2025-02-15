import { hexagon, randomSelectTwo } from './helper';
import Layers from './Layers';

class SteppedHexagons extends Layers {
    constructor() {
        super()
        this.stepsOut = 8
        this.numSteps = this.randomSelectTwo ? this.stepsOut : this.stepsOut * 1.25
        this.centerOffset = (this.CRYSTAL_SIZE / 2) * 0.15
        this.singleStep = ((this.CRYSTAL_SIZE / 2) - this.centerOffset) / this.numSteps
        this.weight = this.randomSelectTwo ? 1 : 3
    }
    render() {
        p5.noFill()
        p5.stroke(this.strokeColor)
        p5.strokeWeight(this.weight)
        p5.push()
        p5.translate(this.canvasWidth / 2, this.canvasHeight / 2);
        p5.rotate(this.angle / 2)
        for (let i = 0; i < this.numShapes; i++) {
            hexagon(0, 0, this.centerOffset + (i * this.singleStep))
        }
        p5.pop()
    }
}

export default SteppedHexagons 