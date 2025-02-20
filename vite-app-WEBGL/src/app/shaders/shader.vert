#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec2 noise2x2(vec2 p) {
    float x = dot(p, vec2(123.4, 234.5));
    float y = dot(p, vec2(345.6, 456.7));
    vec2 noise = vec2(x, y);
    noise = sin(noise);
    noise = noise * 43758.5453;
    noise = fract(noise);
    return noise;
}

void main() {
    // vec2 uv = gl_FragCoord.xy / u_resolution;
    uv = gl_FragCoord.xy / u_resolution;

    vec3 black = vec3(0.);
    vec3 white = vec3(1.);
    vec3 red = vec3(1., 0., 0.);
    vec3 blue = vec3(.2745, .502, 1.);
    vec3 orange = vec3(1., .5451, .1725);
    vec3 color = blue;
 
    gl_FragColor = vec4(color, 1.);

}