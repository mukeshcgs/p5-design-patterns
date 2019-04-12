/**
 * Application entry point
 */

// Load application styles
import "styles/index.scss";
import p5 from "p5";
import dat from "dat.gui";
import Stats from "stats-js";

// ================================
// START YOUR APP HERE
// ================================

// P5.js experiment boilerplate

// plug in Stats;
var stats = new Stats();
stats.setMode(0);
document.body.appendChild(stats.domElement);

// plug in dat.GUI
window.onload = function () {
  var gui = new dat.GUI();
  var foo = { bar: "Hello World!" };
  gui.add(foo, "bar", 10, 1000);
};

// -----------------------------

const sketch = p5 => {
  // Variables scoped within p5
  const canvasWidth = p5.windowWidth;
  const canvasHeight = p5.windowHeight;
  // const d = new Star(500, 300, 4);

  // make library globally available
  window.p5 = p5;

  //Sketch Variables
  const CRYSTAL_SIZE = 400;
  const SIDES = 6
  let PALLETTE = [
    p5.color(255,52,154),
    p5.color(4,0,152)
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
    p5.noFill()
    // p5.stroke(0)
    // p5.background("#000");

    p5.push()
    p5.translate(canvasWidth/2,canvasHeight/2);
    p5.stroke(PALLETTE[1])
    p5.ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
    p5.stroke(PALLETTE[0])
    
    for (let i = 0; i < SIDES; i++) {
      p5.line(0, 0, 0, CRYSTAL_SIZE )
      // let c = 360 / SIDES;
      // console.log(c)
      p5.rotate(360 / SIDES)
    }
    p5.pop()
    

  };
};

new p5(sketch);

export default sketch;
