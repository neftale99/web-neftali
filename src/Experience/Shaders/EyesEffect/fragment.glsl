uniform float uTime;

varying vec2 vUv;

vec4 permute(vec4 x)
{
    return mod(((x*34.0)+1.0)*x, 289.0);
}

#include ../Includes/perlinNoise.glsl

void main()
{
    float strength = step(0.7, sin(cnoise(vUv * 5.0) * uTime * 100.0));

    // Color
    vec3 colorA = vec3(0.0, 0.0, 0.0);
    vec3 colorB = vec3(0.35, 0.8, 0.0);

    vec3 color = mix(colorA, colorB, strength);


    gl_FragColor = vec4(color, 1.0);
}