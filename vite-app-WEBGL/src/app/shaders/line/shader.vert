 attribute vec3 aPosition; // Vertex position
uniform vec2 u_mouse;     // Mouse position

void main() {
  // Transform the vertex position to clip space
  if (aPosition.x == 0.0 && aPosition.y == 0.0) {
    // Start of the line (center of the canvas)
    gl_Position = vec4(1.0, 0.0, 0.0, 1.0);
  } else {
    // End of the line (mouse position)
    gl_Position = vec4(u_mouse.x / 400.0, -u_mouse.y / 200.0, 0.0, 1.0);
  }
}