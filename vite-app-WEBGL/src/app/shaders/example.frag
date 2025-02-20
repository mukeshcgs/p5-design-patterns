#ifdef GL_ES
precision mediump float;
// precision highp float;
#endif

uniform vec2 uResolution;  // Canvas size (width,height)
uniform vec2 u_mouse;       // mouse position in screen pixels
uniform float u_time;       // Time in seconds since load

void main() {

  vec2 uv = gl_FragCoord.xy / uResolution.xy * 2.0 / 1.0;

  uv - uv -0.5;

  float d = length(uv);

    vec2 st = gl_FragCoord.xy / uResolution;
    // gl_FragColor = vec4(st.x, st.y, abs(sin(uTime)), 1.0);

  // Set each pixel's RGBA value to yellow.
  gl_FragColor = vec4(d, 0.0, 0.0, 1.0);
}

// fragmentShader.frag
// precision mediump float;

// uniform vec2 uResolution;
// uniform float uTime;

// void main() {
//     vec2 st = gl_FragCoord.xy / uResolution;
//     gl_FragColor = vec4(st.x, st.y, abs(sin(uTime)), 1.0);
// }
