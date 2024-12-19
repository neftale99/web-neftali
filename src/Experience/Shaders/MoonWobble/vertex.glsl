uniform float uTime;
uniform float uPositionFrequency;
uniform float uTimeFrequency;
uniform float uStrength;
uniform float uWarpPositionFrequency;
uniform float uWarpTimeFrequency;
uniform float uWarpStrength;

attribute vec4 tangent;

varying float vEffect;    

#include ../Includes/simplexNoise4d.glsl

float getEffect(vec3 position)
{
    vec3 effectPosition = position;
    effectPosition += simplexNoise4d(vec4(
        position * uWarpPositionFrequency,
        uTime * uWarpTimeFrequency 
    )) * uWarpStrength;

    return simplexNoise4d(vec4(
        effectPosition * uPositionFrequency,   // XYZ
        uTime * uTimeFrequency     // W
    )) * uStrength;
}

void main()
{
    vec3 biTangent = cross(normal, tangent.xyz);

    // Neighbours position
    float shift = 0.01;
    vec3 positionA = csm_Position + tangent.xyz * shift;
    vec3 positionB = csm_Position + biTangent * shift;

    // Effect
    float effect = getEffect(csm_Position);
    csm_Position += effect * normal;
    positionA += getEffect(positionA) * normal;
    positionB += getEffect(positionB) * normal;

    // Compute normal
    vec3 toA = normalize(positionA - csm_Position);
    vec3 toB = normalize(positionB - csm_Position);
    csm_Normal = cross(toA, toB);

    // Varyings
    vEffect = effect / uStrength;
}
