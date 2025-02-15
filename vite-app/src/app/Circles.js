import Layers from './Layers';

class Circles extends Layers {
    constructor() {
        super()
        this.shapeSize = (this.CRYSTAL_SIZE / 2) * 0.93
        this.position = (this.CRYSTAL_SIZE / 2) - (this.shapeSize / 2)
    }
    render() {
        console.log(this.shapeSize);
        
        p5.noFill()
        p5.stroke(this.strokeColor)
        p5.strokeWeight(1)
        p5.push()
        p5.translate(this.canvasWidth / 2, this.canvasHeight / 2);
        for (let i = 0; i < this.numShapes; i++) {
            p5.ellipse(this.position, 0, this.shapeSize, this.shapeSize)
            p5.rotate(this.angle)
        }
        p5.pop()
    }
}

export default Circles