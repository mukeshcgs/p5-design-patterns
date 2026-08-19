import { randomSelectTwo } from './helper';

class Layers {
    constructor(p, palette) {
        this.p = p || window.p5;
        this.CRYSTAL_SIZE = 400;
        this.sides = 6;
        this.numShapes = this.sides;
        this.angle = (Math.PI * 2) / this.numShapes;
        this.stepOut = 8;
        this.thinStroke = 1;
        this.thickStroke = 3;
        this.palette = palette || [
            this.p.color(63, 79, 68),
            this.p.color(162, 123, 92),
            this.p.color(220, 215, 201)
        ];
        this.strokeColor = this.getRandomFromPalette();
        this.canvasWidth = this.p.width || this.p.windowWidth;
        this.canvasHeight = this.p.height || this.p.windowHeight;
    }

    getRandomFromPalette() {
        const idx = Math.floor(this.p.random(0, this.palette.length));
        return this.palette[idx];
    }

    randomSelectTwo() {
        return randomSelectTwo(this.p);
    }

    render() {
        // Implemented by subclasses
    }
}

export default Layers;