import * as THREE from 'three'
import CustomShaderMaterial from 'three-custom-shader-material/vanilla'
import moonWobbleVertexShader from '../Shaders/MoonWobble/vertex.glsl'
import moonWobbleFragmentShader from '../Shaders/MoonWobble/fragment.glsl'
import hologramSpaceVertexShader from '../Shaders/HologramSpace/vertex.glsl'
import hologramSpaceFragmentShader from '../Shaders/HologramSpace/fragment.glsl'
import Experience from '../Experience.js'


export default class SpaceShip
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.site = this.experience.site
        this.time = this.experience.time

        const materialParameters = {}

        // Material moon
        this.colorA = '#17b6cf'
        this.colorB = '#066a7a'

        this.uniforms = {
            // Firste effect
            uTime: new THREE.Uniform(0),
            uPositionFrequency: new THREE.Uniform(1.2),
            uTimeFrequency: new THREE.Uniform(0.8),
            uStrength: new THREE.Uniform(0.24),
            
            // Second effect
            uWarpPositionFrequency: new THREE.Uniform(0.485),
            uWarpTimeFrequency: new THREE.Uniform(0.582),
            uWarpStrength: new THREE.Uniform(0.76),

            // Colors
            uColorA: new THREE.Uniform(new THREE.Color(this.colorA)),
            uColorB: new THREE.Uniform(new THREE.Color(this.colorB)),            
        }

        this.materialMoon = new CustomShaderMaterial(
        {
            // CSM
            baseMaterial: THREE.MeshPhysicalMaterial,
            vertexShader: moonWobbleVertexShader,
            fragmentShader: moonWobbleFragmentShader,
            uniforms: this.uniforms,
            silent: true,
  
            // MeshPhysicalMaterial
            metalness: 0,
            roughness: 1,
            color: '#049ef4',
            transmission: 0,
            ior: 2,
            thickness: 1.5,
            transparent: true,
            wireframe: true
        })

        // Material spaceship
        materialParameters.color = '#ff00bb'

        this.materialSpaceShip = new THREE.ShaderMaterial({
            vertexShader: hologramSpaceVertexShader,
            fragmentShader: hologramSpaceFragmentShader,
            transparent: true,
            depthTest: false,
            side: THREE.DoubleSide,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            uniforms:
            {
                uColor: new THREE.Uniform(new THREE.Color(materialParameters.color))
            }
        })

        // Set up
        this.resource = this.resources.items.modelSpace

        // Texture
        this.bakedTexture = this.resources.items.baked
        this.bakedTexture.colorSpace = THREE.SRGBColorSpace
        this.bakedTexture.flipY = false

        this.setModel()
        this.setAnimation()

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
        this.model.position.set(-3, - this.site.objectDistance * 3, 0)
        this.model.rotation.y = 2
        this.scene.add(this.model)


        this.model.traverse((child) => 
        {
            if(child.isMesh && child.name === 'Moon')
            {
                child.material = this.materialMoon
            } else if(child.isMesh && child.name === 'Spaceship001')
            {
                child.material = this.materialSpaceShip
            } 

        })
    }

    setAnimation()
    {
        this.animation = {}
        this.animation.mixer = new THREE.AnimationMixer(this.model)

        // Moon 
        this.animation.moon = this.animation.mixer.clipAction(this.resource.animations[0])
        this.animation.moon.play()

        // SpaceShip
        this.animation.spaceShip = this.animation.mixer.clipAction(this.resource.animations[1])
        this.animation.spaceShip.play()
    }

    update()
    {
        this.uniforms.uTime.value += this.time.delta * 0.001 
        this.animation.mixer.update(this.time.delta * 0.001)
    }

}