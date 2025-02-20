#ifdef GL_ES
precision mediump float;
// precision highp float;
#endif

uniform vec2 u_resolution;  // Canvas size (width,height)
uniform vec2 u_mouse;       // mouse position in screen pixels
uniform float u_time;       // Time in seconds since load

void main() {
  
  vec2 uv = gl_FragCoord.xy/u_resolution.xy * 2.0 / 1.0;
  
  // uv - uv -0.5;
  
  float d = length(uv);
  
  // Set each pixel's RGBA value to yellow.
  gl_FragColor = vec4(d,0.0, 0.0, 1.0);
  

}