uniform float uTime;

varying vec3 vPosition;
varying vec3 vNormal;

#include ../Includes/random2D.glsl

void main()
{
    // Position
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    // Final position
    gl_Position = projectionMatrix * viewMatrix * modelPosition;

    // Glitch
    float glitchTime = uTime - modelPosition.y;
    float glitchStrength = 
        sin(glitchTime) + sin(glitchTime * 4.4) + sin(glitchTime * 4.52);
    glitchStrength /= 3.0;
    glitchStrength = smoothstep(0.3, 1.0, glitchStrength);
    glitchStrength *= 4.0;
    modelPosition.x += (random2D(modelPosition.xz + uTime) - 0.5) * glitchStrength;
    modelPosition.z += (random2D(modelPosition.zx + uTime) - 0.5) * glitchStrength;


    // Model normal
    vec4 modelNormal = modelMatrix * vec4(normal, 0.0);

    // Varyings 
    vPosition = modelPosition.xyz;
    vNormal = modelNormal.xyz;
}