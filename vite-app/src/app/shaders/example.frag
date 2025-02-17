#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float sdfCircle(vec2 p, float r) {
    return length(p) - r;
}
void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    uv = uv - .5;
    uv = uv * u_resolution / 100.0;
    // vec2 st=gl_FragCoord.xy/u_resolution.xy;
    // st.x*=u_resolution.x/u_resolution.y;
    // vec3 color=vec3(0.);
    // color=vec3(
        //     abs(cos(u_time*.1))*st.y,
        //     abs(cos(u_time*.2))*st.y,
        //     abs(sin(u_time))*st.y
    // );
    // gl_FragColor=vec4(color,1.);

    vec3 black = vec3(0.);
    vec3 white = vec3(1.);
    vec3 red = vec3(1., 0., 0.);
    vec3 blue = vec3(0.2745, 0.502, 1.0);
    vec3 orange = vec3(1.0, 0.5451, 0.1725);
    vec3 color = black;
    color = vec3(uv.x, uv.y, 0.);
 
    // gl_FragColor=vec4(color,1.);
    gl_FragColor = vec4(color, 1.);

}