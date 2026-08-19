/**
 * Application Entry Point - p5 Generative Crystal Patterns
 */
import p5 from "p5";
import Circles from './Circles.js';
import SimpleLines from './SimpleLines.js';
import SteppedHexagons from "./SteppedHexagons.js";
import DottedLines from "./DottedLines.js";

const sketch = p => {
  let layers = [];
  let palette = [];

  const createPalette = () => [
    p.color(63, 79, 68),
    p.color(162, 123, 92),
    p.color(220, 215, 201),
    p.color(101, 108, 118),
    p.color(240, 235, 227)
  ];

  /**
   * Instantiate layers once per design generation (Zero churn in draw loop)
   */
  const generateLayers = () => {
    layers = [
      new Circles(p, palette),
      new SimpleLines(p, palette),
      new SteppedHexagons(p, palette),
      new DottedLines(p, palette)
    ];
  };

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.rectMode(p.CENTER);
    p.noLoop();

    palette = createPalette();
    generateLayers();
    p.redraw();
  };

  p.draw = () => {
    p.background(44, 57, 48);
    for (let i = 0; i < layers.length; i++) {
      layers[i].render();
    }
  };

  /**
   * Click or tap to generate a new randomized crystal pattern
   */
  p.mousePressed = () => {
    generateLayers();
    p.redraw();
  };

  /**
   * Responsive canvas resize handler
   */
  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    p.redraw();
  };
};

new p5(sketch);

export default sketch;
