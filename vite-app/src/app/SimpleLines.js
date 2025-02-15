import Layers from './Layers';

class SimpleLines extends Layers {
    constructor() {
        super()
        this.stepsOut = 8
        this.numSteps = this.randomSelectTwo ? this.stepsOut : parseInt(this.stepsOut * 1.25)
        this.step = (this.CRYSTAL_SIZE / 2) / this.numSteps
        this.start = p5.floor(p5.random(0, this.numSteps))
        this.stop = p5.floor(p5.random(this.start, this.numSteps + 1))

        this.numShapes = this.randomSelectTwo ? this.sides : this.sides * 2;
        // this.strokeColor = this.strokeColor;
        this.weight = this.randomSelectTwo ? 1 : 3
        console.log("THIS", this.numShapes);
    }
    render() {
        p5.noFill()
        p5.stroke(this.strokeColor)
        p5.strokeWeight(this.weight)
        p5.push()
        p5.translate(this.canvasWidth / 2, this.canvasHeight / 2);
        for (let i = 0; i < this.numShapes; i++) {
            p5.line(this.start * this.step, 0, this.stop * this.step, 0)
            p5.rotate(window.p5.TWO_PI / this.numShapes)
        }
        p5.pop()
    }
}

export default SimpleLines