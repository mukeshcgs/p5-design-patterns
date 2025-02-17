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
    vec2 uv = gl_FragCoord.xy / u_resolution;
    // uv = gl_FragCoord.xy / u_resolution;

    vec3 black = vec3(0.);
    vec3 white = vec3(1.);
    vec3 red = vec3(1., 0., 0.);
    vec3 blue = vec3(.2745, .502, 1.);
    vec3 orange = vec3(1., .5451, .1725);
    vec3 color = blue;

// 1.1 setup grid
    uv = uv * 4.0;
    vec2 currentGridId = floor(uv);
    vec2 currentGridCoord = fract(uv);
    color = vec3(currentGridCoord, 0.0);
    currentGridCoord = currentGridCoord - 0.5;
    color = vec3(currentGridCoord, 0.0);
// 1.2 add red grid
    vec2 redGridUv = currentGridCoord;
    redGridUv = abs(redGridUv);
    float distToEdgeOfGridCell = 2.0 * max(redGridUv.x, redGridUv.y);
//1.3 test preview
    color = vec3(distToEdgeOfGridCell);
    color = vec3(smoothstep(0.5, 1.0, distToEdgeOfGridCell));
    color = vec3(smoothstep(0.9, 1.0, distToEdgeOfGridCell), 0.0, 0.0);
//1.4 store this var for later
    vec3 redGridColor = vec3(smoothstep(0.9, 1.0, distToEdgeOfGridCell), 0.0, 0.0);

// 2.1 add point at the center of the grid
    float pointOnGrid = 0.0;
    float minDistanceFromPixel = 100.0;

    // loop through the grid
    for (float i = -1.0; i <= 1.0; i++) {
        for (float j = -1.0; j <= 1.0; j++) {
            vec2 adjGridCoords = vec2(i, j);
            vec2 pointOnGrid = adjGridCoords;

            // adding displacement
            vec2 noise = noise2x2(currentGridId + adjGridCoords);
            pointOnGrid = adjGridCoords + sin (u_time * noise) *0.5;
            float dist = length(currentGridCoord - pointOnGrid);
            minDistanceFromPixel = min(dist, minDistanceFromPixel);

            pointOnGrid += smoothstep(0.95, 0.96, 1.0 - dist);
        }
    }
    vec3 pointOnGridColor = vec3(pointOnGrid);
    // color = redGridColor + pointOnGridColor;
    // color = redGridColor + pointOnGridColor - minDistanceFromPixel;
    // color = vec3(smoothstep(0.0, 1.0, 1.0 - minDistanceFromPixel));
    color = vec3(1.0-minDistanceFromPixel);
    gl_FragColor = vec4(color, 1.);

}