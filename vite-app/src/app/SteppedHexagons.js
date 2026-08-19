import { hexagon } from './helper';
import Layers from './Layers';

class SteppedHexagons extends Layers {
    constructor(p, palette) {
        super(p, palette);
        this.stepsOut = 8;
        this.numSteps = this.randomSelectTwo() ? this.stepsOut : Math.floor(this.stepsOut * 1.25);
        this.centerOffset = (this.CRYSTAL_SIZE / 2) * 0.15;
        this.singleStep = ((this.CRYSTAL_SIZE / 2) - this.centerOffset) / this.numSteps;
        this.weight = this.randomSelectTwo() ? this.thinStroke : this.thickStroke;
    }

    render() {
        const p = this.p;
        p.noFill();
        p.stroke(this.strokeColor);
        p.strokeWeight(this.weight);
        p.push();
        p.translate(p.width / 2, p.height / 2);
        p.rotate(this.angle / 2);
        for (let i = 0; i < this.numShapes; i++) {
            hexagon(p, 0, 0, this.centerOffset + (i * this.singleStep));
        }
        p.pop();
    }
}

export default SteppedHexagons;