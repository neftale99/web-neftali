uniform vec3 uColorA;
uniform vec3 uColorB;

varying float vEffect;    

void main()
{
    float colorMix = smoothstep(- 1.0, 1.0, vEffect);
    csm_DiffuseColor.rgb = mix(uColorA, uColorB, colorMix);

    // Shinny tip
    csm_Roughness = 1.0;
}