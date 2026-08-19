import Layers from './Layers';

class Circles extends Layers {
    constructor(p, palette) {
        super(p, palette);
        this.shapeSize = (this.CRYSTAL_SIZE / 2) * 0.93;
        this.position = (this.CRYSTAL_SIZE / 2) - (this.shapeSize / 2);
    }

    render() {
        const p = this.p;
        p.noFill();
        p.stroke(this.strokeColor);
        p.strokeWeight(this.thinStroke);
        p.push();
        p.translate(p.width / 2, p.height / 2);
        for (let i = 0; i < this.numShapes; i++) {
            p.ellipse(this.position, 0, this.shapeSize, this.shapeSize);
            p.rotate(this.angle);
        }
        p.pop();
    }
}

export default Circles;