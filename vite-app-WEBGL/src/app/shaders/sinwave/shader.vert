attribute vec3 aPosition; // Vertex position
uniform float u_time;     // Time for animation
uniform vec2 u_resolution; // Canvas resolution

void main() {
  // Normalize the x position to the canvas width
  float x = aPosition.x / u_resolution.x * 2.0;

  // Calculate the sine wave displacement
  float y = sin(x * 5.0 + u_time * 2.0) * 0.2; // Amplitude and frequency

  // Transform the vertex position
  vec4 pos = vec4(aPosition.x, y * u_resolution.y, 0.0, 1.0);

  // Convert to clip space
  gl_Position = pos;
}