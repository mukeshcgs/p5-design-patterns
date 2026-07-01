import { hexagon, randomSelectTwo } from './helper';

class Layers {
    constructor() {
        this.CRYSTAL_SIZE = 400;
        const SIDES = 6
        this.PALLETTE = [
            // p5.color(255, 52, 154),
            // p5.color(4, 0, 152)
            // p5.color(44, 57, 48),
            p5.color(63, 79, 68),
            p5.color(162, 123, 92),
            p5.color(220, 215, 201)
          ]
        this.sides = SIDES;
        this.numShapes = this.sides
        this.angle = window.p5.TWO_PI / this.numShapes
        this.stepOut = 8
        // this.singleStep(CRYSTAL_SIZE / 2) / this.stepOut
        this.thinStrok = 1
        this.thickStrok = 3
        this.strokeColor = this.getRandomFromPallate()
        this.randomSelectTwo = randomSelectTwo
        this.canvasWidth = p5.windowWidth
        this.canvasHeight = p5.windowHeight
    }

    getRandomFromPallate() {
        const rando2 = p5.floor(p5.random(0, this.PALLETTE.length))
        return this.PALLETTE[rando2]
    }
    randomSelectTwo() {
        const rando = p5.random(1)
        if (rando > 0.5) {
            return true
        } else {
            return false
        }
    }
    render() {
    }
}
export default Layers