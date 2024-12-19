import * as THREE from 'three'
import CustomShaderMaterial from 'three-custom-shader-material/vanilla'
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js'
import wobbleVertexShader from '../Shaders/Wobble/vertex.glsl'
import wobbleFragmentShader from '../Shaders/Wobble/fragment.glsl'
import Experience from '../Experience.js'

export default class Sphere
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.site = this.experience.site
        this.time = this.experience.time
  
        // Material Sphere
        this.colorA = '#a6072f'
        this.colorB = '#0ffffb'

        this.uniforms = {
            // Firste effect
            uTime: new THREE.Uniform(0),
            uPositionFrequency: new THREE.Uniform(0.596),
            uTimeFrequency: new THREE.Uniform(0.312),
            uStrength: new THREE.Uniform(0.596),
            
            // Second effect
            uWarpPositionFrequency: new THREE.Uniform(0.255),
            uWarpTimeFrequency: new THREE.Uniform(0.474),
            uWarpStrength: new THREE.Uniform(1.65),

            // Colors
            uColorA: new THREE.Uniform(new THREE.Color(this.colorA)),
            uColorB: new THREE.Uniform(new THREE.Color(this.colorB)),            
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
                transmission: 0,
                ior: 1.5,
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
  
        // Geometry
        let geometry = new THREE.IcosahedronGeometry(2.6, 50)
        geometry = mergeVertices(geometry)
        geometry.computeTangents()
  
  
        // // Mesh
        this.sphere = new THREE.Mesh(geometry, this.material)
        this.sphere.customDepthMaterial = this.materialDepth
        this.sphere.position.y = - this.site.objectDistance * 0
        this.scene.add(this.sphere)

        // Time tick event
        this.time.on('tick', () =>
        {
            this.update()
        })

    }

    update()
    {
        this.uniforms.uTime.value += this.time.delta * 0.001
        this.sphere.rotation.y += this.time.delta * 0.001 *  Math.sin(this.time.elapsed * 0.001) * 0.5
        this.sphere.rotation.x += this.time.delta * 0.001 *  Math.sin(this.time.elapsed * 0.001) * 0.5
        this.sphere.rotation.z += this.time.delta * 0.001 *  Math.sin(this.time.elapsed * 0.001) * 0.5
    }

}