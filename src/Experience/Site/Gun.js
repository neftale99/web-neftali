import * as THREE from 'three'
import CustomShaderMaterial from 'three-custom-shader-material/vanilla'
import gunWobbleVertexShader from '../Shaders/GunWobble/vertex.glsl'
import gunWobbleFragmentShader from '../Shaders/GunWobble/fragment.glsl'
import Experience from '../Experience.js'


export default class Gun
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.site = this.experience.site
        this.time = this.experience.time

        // Material
        this.colorA = '#3cc345'
        this.colorB = '#50ce86'
  
        this.uniforms = {
            // Firste effect
            uTime: new THREE.Uniform(0),
            uPositionFrequency: new THREE.Uniform(2),
            uTimeFrequency: new THREE.Uniform(0.78),
            uStrength: new THREE.Uniform(0.209),
              
            // Second effect
            uWarpPositionFrequency: new THREE.Uniform(0.485),
            uWarpTimeFrequency: new THREE.Uniform(0.582),
            uWarpStrength: new THREE.Uniform(0.76),
  
            // Colors
            uColorA: new THREE.Uniform(new THREE.Color(this.colorA)),
            uColorB: new THREE.Uniform(new THREE.Color(this.colorB)),            
        }
  
        this.material = new CustomShaderMaterial(
        {
            // CSM
            baseMaterial: THREE.MeshPhysicalMaterial,
            vertexShader: gunWobbleVertexShader,
            fragmentShader: gunWobbleFragmentShader,
            uniforms: this.uniforms,
            silent: true,
    
            // MeshPhysicalMaterial
            metalness: 0,
            roughness: 1,
            color: '#049ef4',
            transmission: 0,
            ior: 0.582,
            thickness: 1.5,
            transparent: false,
            wireframe: false
        })
     
        this.materialDepth = new CustomShaderMaterial(
        {
            // CSM
            baseMaterial: THREE.MeshDepthMaterial,
            vertexShader: gunWobbleVertexShader,
            uniforms: this.uniforms,
            silent: true,
    
            // MeshDepthMaterial
            depthPacking: THREE.RGBADepthPacking,
        })

        // Set up
        this.resource = this.resources.items.modelGun

        // Texture
        this.bakedTexture = this.resources.items.baked
        this.bakedTexture.colorSpace = THREE.SRGBColorSpace
        this.bakedTexture.flipY = false

        this.bakedMaterial = new THREE.MeshBasicMaterial({ map: this.bakedTexture })
        this.bakedMaterial2 = new THREE.MeshBasicMaterial()

        this.glassMaterial = new THREE.MeshPhysicalMaterial(
        {
            color: '#ffffff',
            metalness: 0,
            roughness: 0, 
            transmission: 1, 
            opacity: 0.4, 
            ior: 1.5, 
            thickness: 0.2,
            specularIntensity: 1, 
            envMapIntensity: 1, 
            clearcoat: 1, 
            clearcoatRoughness: 0,
            transparent: true, 
            reflectivity: 0.9
        })

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
        this.model.scale.set(2, 2, 2)
        this.model.position.set(4, - this.site.objectDistance * 2.15, 0)
        this.scene.add(this.model)

        this.model.traverse((child) => 
        {
            if(child.isMesh && child.name === 'Gun')
            {
                child.material = this.bakedMaterial            
            } else if(child.isMesh && child.name === 'Glass')
            {
                child.material = this.glassMaterial    
            } else if(child.isMesh && child.name === 'Atom')
            {
                child.material = this.material
                child.customDepthMaterial = this.materialDepth
            } 
        })
    }

    update()
    {
        this.uniforms.uTime.value += this.time.delta * 0.001
        this.model.rotation.y += this.time.delta * 0.001 *  Math.sin(this.time.elapsed * 0.001)  * 0.2
        // this.model.rotation.x += this.time.delta * 0.001 *  Math.cos(this.time.elapsed * 0.001)  * 0.1
    }

}