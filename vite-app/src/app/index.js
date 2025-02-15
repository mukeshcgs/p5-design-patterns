/**
 * Application entry point
 */

// Load application styles
// import "styles/index.scss";
import p5 from "p5";
import dat from "dat.gui";
import Stats from "stats-js";
import { hexagon, hexagonLine, randomSelectTwo, squareLine } from './helper'
import Circles from './Circles.js';
import SimpleLines from './SimpleLines.js';
import SteppedHexagons from "./SteppedHexagons.js";
import DottedLines from "./DottedLines.js";

// =======================================
// START YOUR APP HERE
// =======================================

// P5.js experiment boilerplate

// plug in Stats;
// var stats = new Stats();
// stats.setMode(0);
// document.body.appendChild(stats.domElement);

// plug in dat.GUI
// window.onload = function () {
//   var gui = new dat.GUI();
//   var foo = { bar: "Hello World!" };
//   gui.add(foo, "bar", 10, 1000);
// };

// ----------------------------------------

const sketch = p5 => {
  // Variables scoped within p5
  const canvasWidth = p5.windowWidth;
  const canvasHeight = p5.windowHeight;

  // make library globally available
  window.p5 = p5;

  //Sketch Variables
  const CRYSTAL_SIZE = 400;
  const SIDES = 6
  let PALLETTE = [
    p5.color(255, 52, 154),
    p5.color(4, 0, 152)
  ]

  // Setup function
  // ======================================
  p5.setup = () => {
    let canvas = p5.createCanvas(canvasWidth, canvasHeight);
    p5.noLoop()
    p5.angleMode(p5.DEGREE)
    p5.rectMode(p5.CENTER)
  };

  // Draw function
  // ======================================
  p5.draw = () => {
    // testLines()
    // outlineShape()
    // simpleLinesLoc()
    // tron()
    const circles = new Circles()
    circles.render()

    const simpleLines = new SimpleLines()
    simpleLines.render()

    const steppedHexagons = new SteppedHexagons()
    steppedHexagons.render()

    const dottedLines = new DottedLines()
    dottedLines.render()
  }
  //Circle
  // function circle() { }



  //Helper Random Color
  function getRandomFromPallate() {
    const rando2 = p5.floor(p5.random(0, PALLETTE.length))
    return PALLETTE[rando2]
  }

  //Simple Lines
  function simpleLinesLoc() {
    const stepsOut = 8
    const numSteps = randomSelectTwo ? stepsOut : stepsOut * 1.25
    const step = (CRYSTAL_SIZE / 2) / numSteps
    const start = p5.floor(p5.random(0, numSteps))
    const stop = p5.floor(p5.random(start, numSteps + 1))

    let numShapes = randomSelectTwo() ? SIDES : SIDES * 2;
    const strokeColor = getRandomFromPallate();
    const weight = randomSelectTwo() ? 1 : 3

    p5.noFill()
    p5.stroke(strokeColor)
    p5.strokeWeight(weight)

    p5.push()
    p5.translate(canvasWidth / 2, canvasHeight / 2);
    for (let i = 0; i < numShapes; i++) {
      p5.line(start * step, 0, stop * step, 0)
      p5.rotate(p5.TWO_PI / numShapes)
    }
    p5.pop()
  }

  //Outside Circle
  function outlineShape() {
    const strokeColor = getRandomFromPallate()
    const weight = randomSelectTwo() ? 1 : 3
    const isHexagon = randomSelectTwo()
    p5.stroke(strokeColor)
    p5.strokeWeight(weight)

    p5.push()
    p5.translate(canvasWidth / 2, canvasHeight / 2);
    if (isHexagon) {
      hexagon(0, 0, CRYSTAL_SIZE / 2)
    } else {
      p5.ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
    }
    p5.pop()
  }

  // Spokes
  function testLines() {
    let numShapes = randomSelectTwo() ? SIDES : SIDES * 2;
    const strokeColor = getRandomFromPallate();

    p5.noFill()
    p5.stroke("#ccc")
    p5.strokeWeight(1)

    p5.push()
    p5.translate(canvasWidth / 2, canvasHeight / 2);
    p5.ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
    for (let i = 0; i < numShapes; i++) {
      p5.line(0, 0, 0, CRYSTAL_SIZE / 2)
      p5.stroke(101, 108, 118)
      p5.rotate(p5.TWO_PI / numShapes)
    }
    p5.pop()
  };

  // Trone Effect - 1
  function tron() {
    let numShapes = randomSelectTwo() ? SIDES : SIDES;
    const strokeColor = getRandomFromPallate();
    p5.noFill()
    p5.stroke(strokeColor)
    p5.strokeWeight(0.5)

    p5.push()
    p5.translate(canvasWidth / 2, canvasHeight / 2);

    for (let i = 0; i < numShapes; i++) {
      p5.line(0, 0, CRYSTAL_SIZE * 2, 0)
      p5.rotate(p5.TWO_PI / numShapes)

      for (let i = 0; i < numShapes * 2; i++) {
        p5.stroke(getRandomFromPallate())
        p5.strokeWeight(0.5)
        // hexagonLine(0, 0, p5.floor(p5.random(1, CRYSTAL_SIZE)))
        squareLine(0, 0, p5.floor(p5.random(1, CRYSTAL_SIZE)))
        // p5.ellipse(0, 0, p5.floor(p5.random(0, CRYSTAL_SIZE)), CRYSTAL_SIZE)
      }

    }
    p5.pop()
  };
};
new p5(sketch);

export default sketch;


