/**
 * Application entry point
 */

// Load application styles
// import "styles/index.scss";
import p5 from "p5";
import dat from "dat.gui";
import Stats from "stats-js";
import { hexagon, hexagonLine, randomSelectTwo, squareLine } from './helper'
import vertexShader from "./shaders/vertex.vert";
import fragmentShader from "./shaders/fragment.frag";
import Img from "./img/texture.png";
import Img_2 from "./img/texture2.png";

// import vertexShader from "./shaders/line/shader.vert";
// import fragmentShader from "./shaders/line/shader.frag";

// import vertexShader from "./shaders/sinwave/shader.vert";
// import fragmentShader from "./shaders/sinwave/shader.frag";

import { drawLine } from "./shape/Line";
import { sinWave } from "./shape/sineWave";

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
  // make library globally available
  window.p5 = p5;

  // Variables scoped within p5
  const canvasWidth = p5.windowWidth;
  const canvasHeight = p5.windowHeight;
  let myShader;
  let bgImage;
  let bgImage_2;

  //load in the shader
  p5.preload = () => {
    myShader = p5.createShader(vertexShader, fragmentShader);
    bgImage = p5.loadImage(Img);
    bgImage_2 = p5.loadImage(Img_2);
  }
  console.log(bgImage);

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
    // let canvas = p5.createCanvas(400, 400, p5.WEBGL);
    p5.background(44, 57, 48);
    // p5.noLoop()
    // p5.noStroke();
    // p5.angleMode(p5.DEGREE)
    // p5.rectMode(p5.CENTER)

  };

  // Draw function
  // ======================================
  p5.draw = () => {
    p5.clear()
    // p5.background(44, 57, 48);
    p5.shader(myShader);

    // Pass the time, texture and resolution to the shader
    // Pass the time from p5 to the shader
    myShader.setUniform('millis', p5.millis());


    // myShader.setUniform('u_time', p5.millis() / 1000.0);
    myShader.setUniform('u_resolution', [p5.width, p5.height]);
    // myShader.setUniform('u_mouse', [p5.mouseX - p5.width / 2, p5.mouseY - p5.height / 2]);

    // set variable to use in shader
    myShader.setUniform('uTexture', bgImage);
    myShader.setUniform("uUseTexture", true); // Indicate we're using a texture
    // Draw a shape using the shader
    p5.push();
    p5.rect(0, 0, 400, 400);
    p5.pop();
    
    myShader.setUniform('uTexture', bgImage_2);
    myShader.setUniform("uUseTexture", true); // Indicate we're using a texture
    p5.push();
    p5.ellipse(0, 0, 200, 200, 150);
    p5.pop();
    
    myShader.setUniform("uUseTexture", false); // Indicate we're using a texture
    p5.push();
    p5.plane(100)
    p5.pop();
    
    // drawline
    // drawLine();

    //sine wave
    // sinWave();
    // render tron effect
    // tron() 
  }



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


