uniform vec3 uColor;

varying vec3 vPosition;
varying vec3 vNormal;

void main()
{
    vec3 normal = normalize(vNormal);
    if (!gl_FrontFacing) normal *= -1.0;

    // Holografía básica
    float stripes = mod(vPosition.y, 1.0);
    stripes = pow(stripes, 3.0);

    vec3 viewDirection = normalize(vPosition - cameraPosition);
    float fresnel = dot(viewDirection, normal) + 1.0;
    fresnel = pow(fresnel, 2.0);

    float fallof = smoothstep(0.8, 0.0, fresnel);
    float holographic = stripes * fresnel + fresnel * 2.25;
    holographic *= fallof;

    // Wave
    float wave = sin(length(vPosition) * 10.0) * 0.1;
    holographic += wave; 

    // Color final
    gl_FragColor = vec4(uColor, holographic);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}
