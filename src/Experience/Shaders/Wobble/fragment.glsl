uniform vec3 uColorA;
uniform vec3 uColorB;

varying float vEffect;    

void main()
{
    float colorMix = smoothstep(-1.0, 1.0, vEffect);
    vec3 baseColor = mix(uColorA, uColorB, colorMix);

    csm_DiffuseColor.rgb = baseColor;


    csm_Metalness = step(0.25, vEffect);
    csm_Roughness = 1.0 - colorMix;
}