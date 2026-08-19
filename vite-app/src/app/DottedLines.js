import Layers from './Layers';

class DottedLines extends Layers {
    constructor(p, palette) {
        super(p, palette);
        this.numShapes = this.randomSelectTwo() ? this.sides : this.sides * 2;
        this.angle = (Math.PI * 2) / this.numShapes;
        this.shapeSize = 6;
        this.centerOffset = (this.CRYSTAL_SIZE / 2) * 0.5;
        this.singleStep = ((this.CRYSTAL_SIZE / 2) - this.centerOffset) / 6;
    }

    render() {
        const p = this.p;
        p.fill(this.strokeColor);
        p.noStroke();
        p.push();
        p.translate(p.width / 2, p.height / 2);
        for (let i = 0; i < this.numShapes; i++) {
            for (let x = this.centerOffset; x < this.CRYSTAL_SIZE / 2; x += this.singleStep) {
                p.rect(x, 0, this.shapeSize, this.shapeSize);
            }
            p.rotate(this.angle);
        }
        p.pop();
    }
}

export default DottedLines;