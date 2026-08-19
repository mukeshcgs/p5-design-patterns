import Layers from './Layers';

class SimpleLines extends Layers {
    constructor(p, palette) {
        super(p, palette);
        this.stepsOut = 8;
        this.numSteps = this.randomSelectTwo() ? this.stepsOut : Math.floor(this.stepsOut * 1.25);
        this.step = (this.CRYSTAL_SIZE / 2) / this.numSteps;
        this.start = Math.floor(this.p.random(0, this.numSteps));
        this.stop = Math.floor(this.p.random(this.start, this.numSteps + 1));

        this.numShapes = this.randomSelectTwo() ? this.sides : this.sides * 2;
        this.weight = this.randomSelectTwo() ? this.thinStroke : this.thickStroke;
        this.angle = (Math.PI * 2) / this.numShapes;
    }

    render() {
        const p = this.p;
        p.noFill();
        p.stroke(this.strokeColor);
        p.strokeWeight(this.weight);
        p.push();
        p.translate(p.width / 2, p.height / 2);
        for (let i = 0; i < this.numShapes; i++) {
            p.line(this.start * this.step, 0, this.stop * this.step, 0);
            p.rotate(this.angle);
        }
        p.pop();
    }
}

export default SimpleLines;