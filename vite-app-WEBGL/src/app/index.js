/**
 * Application entry point
 */

// Load application styles
// import "styles/index.scss";
import p5 from "p5";
import dat from "dat.gui";
import Stats from "stats-js";
import { hexagon, hexagonLine, randomSelectTwo, squareLine } from './helper'
import vertexShader from "./shaders/example.vert";
import fragmentShader from "./shaders/example.frag";

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
  let myShader;

  //load in the shader
  p5.preload = () => {
    myShader = p5.createShader(vertexShader, fragmentShader);
    // myShader = p5.loadShader('/shaders/example.vert', '/shaders/example.frag');
    // myShader = p5.loadShader('/shaders/vert.glsl', '/shaders/frag.glsl')
  }
  //Sketch Variables
  const CRYSTAL_SIZE = 400;
  const SIDES = 6
  let PALLETTE = [
    p5.color(255, 52, 154),
    p5.color(4, 0, 152),
    p5.color(44, 57, 48),
    // p5.color(255, 255, 255),
    // p5.color(0, 0, 0),
    // p5.color(220, 215, 201)
  ]
 
  // Setup function
  // ======================================
  p5.setup = () => {
    let canvas = p5.createCanvas(canvasWidth, canvasHeight, p5.WEBGL);
    // p5.shader(myShader);
    // p5.background(44, 57, 48);
    p5.noLoop()
    p5.angleMode(p5.DEGREE)
    p5.rectMode(p5.CENTER)
    //tell p5 to use the shader
  };

  // Draw function
  // ======================================
  p5.draw = () => {
    p5.shader(myShader);
    
    // Pass the time from p5 to the shader
    // myShader.setUniform('time', p5.millis());
    // Draw a shape using the shader
    
    // p5.rect(-p5.canvasWidth / 2, -p5.canvasHeight / 2, p5.canvasWidth, p5.canvasHeight); // Cover the canvas
    myShader.setUniform("uResolution", [p5.width, p5.height]);
    // myShader.setUniform("uTime", p5.millis() / 1000.0); // Time in seconds
    // p5.shader(myShader);
    // p5.plane(100, 100); 
    // p5.circle(0, 0, 100);
    p5.rect(-p5.width, -p5.height, p5.width, p5.height); // Cover the canvas
    // p5.rect(-p5.width / 2, -p5.height / 2, p5.width, p5.height); // Cover the canvas
    // tron()
  }



  // //Helper Random 1 or 2 for Spoke count
  // function randomSelectTwo() {
  //   const rando = p5.random(1)
  //   if (rando > 0.5) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  //Helper Random Color
  function getRandomFromPallate() {
    const rando2 = p5.floor(p5.random(0, PALLETTE.length))
    return PALLETTE[rando2]
  }

  // Trone Effect - 1
  function tron() {
    let numShapes = randomSelectTwo() ? SIDES : SIDES;
    const strokeColor = getRandomFromPallate();
    p5.noFill()
    p5.stroke(strokeColor)
    p5.strokeWeight(0.5)
    p5.push()
    // p5.translate(canvasWidth / 2, canvasHeight / 2);

    for (let i = 0; i < numShapes; i++) {
      p5.line(0, 0, CRYSTAL_SIZE * 2, 0)
      p5.rotate(p5.TWO_PI / numShapes)

      for (let i = 0; i < numShapes; i++) {
        p5.stroke(getRandomFromPallate())
        p5.strokeWeight(0.5)
        hexagonLine(0, 0, p5.floor(p5.random(1, CRYSTAL_SIZE)))
        // squareLine(0, 0, p5.floor(p5.random(1, CRYSTAL_SIZE)))
        // p5.ellipse(0, 0, p5.floor(p5.random(0, CRYSTAL_SIZE)), CRYSTAL_SIZE)
      }

    }
    p5.pop()
  };
};
new p5(sketch);

export default sketch;


