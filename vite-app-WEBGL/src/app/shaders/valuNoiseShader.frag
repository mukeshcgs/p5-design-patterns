#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float sdfCircle(vec2 p, float r) {
    return length(p) - r;
}
float whiteNoise2x1(vec2 p) {
    float random = dot(p, vec2(12., 78.));
    random = sin(random);
    random = random * 43758.5453;
    random = fract(random);
    return random;
}
vec2 quintic (vec2 p){
        return p*p*p*(10.0+p*(-15.0 + p* 6.0));
}
 
void main() {
    vec3 black = vec3(0.);
    vec3 white = vec3(1.);
    vec3 red = vec3(1., 0., 0.);
    vec3 blue = vec3(.2745, .502, 1.);
    vec3 orange = vec3(1., .5451, .1725);
    vec3 color = white;

    vec2 uv = gl_FragCoord.xy / u_resolution;
    // grid overlay

    // uv = uv * 2.0;
    // uv = uv * 4.0;
    uv = uv * 8.0;
    // uv = uv * 12.0;
    vec2 gridUv = fract(uv);
    // uv = uv * u_resolution / 100.0;

    //setup grid ids
    vec2 gridId = floor(uv);
    gridUv = smoothstep(0.0, 1.0, gridUv);

    // lerp between BOTTOM two coordinates
    float botLeft = whiteNoise2x1(gridId);
    float botRight = whiteNoise2x1(gridId + vec2(1.0, 0.0));
    float b = mix(botLeft, botRight, gridUv.x);
    // color = vec3(b);

    // lerp between TOP two coordinates
    float topLeft = whiteNoise2x1(gridId + vec2(0.0, 1.0));
    float topRight = whiteNoise2x1(gridId + vec2(1.0, 1.0));
    float t = mix(topLeft, topRight, gridUv.x);
    // color = vec3(t);

    //lerp between top and based on y axis
    float valueNoise = mix(b, t, gridUv.y);
    color = vec3(valueNoise);

    // color = vec3(gridUv, 0.0);
    // color = vec3(uv.x, uv.y, 0.);
    //create a white noise

    // add layers  

    // color = vec3(whiteNoise2x1(uv));
    // gl_FragColor=vec4(color,1.);
    gl_FragColor = vec4(color, 1.);

}