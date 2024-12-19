import * as THREE from 'three'
import Experience from '../Experience/Experience.js'
import earthVertexShader from '../Shaders/vertex.glsl'
import earthFragmentShader from '../Shaders/fragment.glsl'

export default class Earth
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.site = this.experience.site
        this.debug = this.experience.debug

        // Setup
        this.resources = this.resources.items.earthModel

        this.setModel()
    }

    setModel()
    {
        const materialParameters = {}
        materialParameters.color = '#007548'
        materialParameters.color2 = '#ffffff'
        materialParameters.color3 = '#000000'

        this.material = new THREE.ShaderMaterial({
            vertexShader: earthVertexShader,
            fragmentShader: earthFragmentShader,
            uniforms:
            {
                uTime: new THREE.Uniform(0),
                uColor: new THREE.Uniform(new THREE.Color(materialParameters.color))
            },
            transparent: false,
            side: THREE.DoubleSide,
            blending: THREE.AdditiveBlending
        })

        const materialD = this.debug.ui.addFolder('Material')
        materialD.close() 
        materialD.addColor(materialParameters, 'color').onChange(() => 
        {
            this.material.uniforms.uColor.value.set(materialParameters.color)
        })

        this.material2 = new THREE.MeshPhysicalMaterial({
            color: materialParameters.color2,
            roughness: 0.373,
            metalness: 0.154,
            ior: 0.762,
            reflectivity: 0.445,
            iridescence: 0.389
        })
        
        const material2D = this.debug.ui.addFolder('Material2')
        material2D.close()
        material2D.addColor(materialParameters, 'color2').onChange(() =>
        {
            this.material2.color.set(materialParameters.color2)
        })
        material2D.add(this.material2, 'roughness', 0, 1, 0.001)
        material2D.add(this.material2, 'metalness', 0, 1, 0.001)
        material2D.add(this.material2, 'ior', 0, 2, 0.001)
        material2D.add(this.material2, 'reflectivity', 0, 1, 0.001)
        material2D.add(this.material2, 'iridescence', 0, 1, 0.001)

        this.material3 = new THREE.MeshPhysicalMaterial({
            color: materialParameters.color3,
            roughness: 0,
            metalness: 1
        })

        const material3D = this.debug.ui.addFolder('Material3')
        material3D.close()
        material3D.addColor(materialParameters, 'color3').onChange(() =>
        {
            this.material3.color.set(materialParameters.color3)
        })
        material3D.add(this.material3, 'roughness', 0, 1, 0.001)
        material3D.add(this.material3, 'metalness', 0, 1, 0.001)

        this.model = this.resources.scene
        this.model.scale.set(1.1, 1.1, 1.1)
        this.model.position.y = - this.site.objectDistance * 0.37
        this.model.position.x = 1.5
        this.scene.add(this.model)

        this.model.traverse((child) =>
        {
            this.map = this.model.children.find((child) => child.name === 'Map')
            this.map.material = this.material

            this.ocean = this.model.children.find((child) => child.name === 'Icosphere')
            this.ocean.material = this.material2

            this.wire = this.model.children.find((child) => child.name === 'Sphere-Wire')
            this.wire.material = this.material3

        })
    }

    update()
    {
        this.model.rotation.y = this.time.elapsed * 0.0004
        this.material.uniforms.uTime.value = this.time.elapsed * 0.1
    }
}