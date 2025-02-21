// Hexagone
export function sinWave() {
      // Draw a grid of points to form the sine wave
  p5.beginShape(p5.POINTS);
  for (let x = -p5.width / 2; x < p5.width / 2; x += 0) {
    p5.vertex(x, 0);
  }
  p5.endShape();
}
