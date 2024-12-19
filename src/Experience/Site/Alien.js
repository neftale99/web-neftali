import * as THREE from 'three'
import CustomShaderMaterial from 'three-custom-shader-material/vanilla'
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js'
import wobbleVertexShader from '../Shaders/Wobble/vertex.glsl'
import wobbleFragmentShader from '../Shaders/Wobble/fragment.glsl'
import eyesVertexShader from '../Shaders/EyesEffect/vertex.glsl'
import eyesFragmentShader from '../Shaders/EyesEffect/fragment.glsl'
import Experience from '../Experience.js'


export default class Alien
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.site = this.experience.site
        this.time = this.experience.time

        // Material
        this.colorC= '#ff6600'
        this.colorD = '#57ff0f'

        this.uniforms = {
            // Firste effect
            uTime: new THREE.Uniform(0),
            uPositionFrequency: new THREE.Uniform(0.827),
            uTimeFrequency: new THREE.Uniform(0.991),
            uStrength: new THREE.Uniform(2.021),
            
            // Second effect
            uWarpPositionFrequency: new THREE.Uniform(1.156),
            uWarpTimeFrequency: new THREE.Uniform(0.827),
            uWarpStrength: new THREE.Uniform(0.338),

            // Colors
            uColorA: new THREE.Uniform(new THREE.Color(this.colorC)),
            uColorB: new THREE.Uniform(new THREE.Color(this.colorD)),            
        }

        this.material = new CustomShaderMaterial(
            {
                // CSM
                baseMaterial: THREE.MeshPhysicalMaterial,
                vertexShader: wobbleVertexShader,
                fragmentShader: wobbleFragmentShader,
                uniforms: this.uniforms,
                silent: true,
  
                // MeshPhysicalMaterial
                metalness: 1,
                roughness: 0,
                color: '#049ef4',
                transmission: 0.077,
                ior: 0.857,
                thickness: 1.15,
                transparent: true,
                wireframe: false
            })
  
        this.materialDepth = new CustomShaderMaterial(
            {
                // CSM
                baseMaterial: THREE.MeshDepthMaterial,
                vertexShader: wobbleVertexShader,
                uniforms: this.uniforms,
                silent: true,
  
                // MeshDepthMaterial
                depthPacking: THREE.RGBADepthPacking
            })

        this.eyesMaterial = new THREE.ShaderMaterial(
            {
                vertexShader: eyesVertexShader,
                fragmentShader: eyesFragmentShader,
                uniforms:
                {
                    uTime: { value: 0 }
                }
            })


        // Set up
        this.resource = this.resources.items.models

        this.setModel()

        // Time tick event
        this.time.on('tick', () =>
        {
            this.update()
        })
    }

    setModel()
    {
        this.model = this.resource.scene
        this.model.scale.set(1.8, 1.8, 1.8)
        this.model.position.set(-2, - this.site.objectDistance * 1.15, 0)
        this.model.rotation.y = 5.8
        this.scene.add(this.model)

        this.model.traverse(child => 
        {
            if (child.isMesh) 
            {
                if (child.name === 'Eyes') {
                    child.material = this.eyesMaterial
                } else {
                    child.material = this.material
                    child.customDepthMaterial = this.materialDepth
                }
            }
        })
    }

    update()
    {
        this.uniforms.uTime.value += this.time.delta * 0.001
        this.eyesMaterial.uniforms.uTime.value += this.time.delta * 0.001

        this.model.rotation.y += this.time.delta * 0.001 *  Math.sin(this.time.elapsed * 0.001)  * 0.2
        // this.model.rotation.z += this.time.delta * 0.001 *  Math.cos(this.time.elapsed * 0.001)  * 0.1
    }

}