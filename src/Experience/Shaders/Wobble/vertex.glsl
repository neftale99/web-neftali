uniform float uTime;
uniform float uPositionFrequency;
uniform float uTimeFrequency;
uniform float uStrength;
uniform float uWarpPositionFrequency;
uniform float uWarpTimeFrequency;
uniform float uWarpStrength;

attribute vec4 tangent;
attribute vec3 csm_Position;
attribute vec3 csm_Normal;

varying float vEffect;    

#include ../Includes/simplexNoise4d.glsl

float getEffect(vec3 position) {
    vec3 effectPosition = position;
    effectPosition += simplexNoise4d(vec4(
        position * uWarpPositionFrequency,
        uTime * uWarpTimeFrequency
    )) * uWarpStrength;

    return simplexNoise4d(vec4(
        effectPosition * uPositionFrequency,
        uTime * uTimeFrequency
    )) * uStrength;
}

void main() {
    vec3 biTangent = cross(csm_Normal, tangent.xyz);

    // Neighbors position
    float shift = 0.01;
    vec3 positionA = csm_Position + tangent.xyz * shift;
    vec3 positionB = csm_Position + biTangent * shift;

    // Effect
    float effect = getEffect(csm_Position);
    vec3 newPosition = csm_Position + effect * csm_Normal;
    positionA += getEffect(positionA) * csm_Normal;
    positionB += getEffect(positionB) * csm_Normal;

    // Compute normal
    vec3 toA = normalize(positionA - newPosition);
    vec3 toB = normalize(positionB - newPosition);
    csm_Normal = cross(toA, toB);

    // Varyings
    vEffect = effect / uStrength;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}