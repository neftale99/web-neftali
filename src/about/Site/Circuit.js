import * as THREE from 'three'
import Experience from '../Experience/Experience.js'
import circuitVertexShader from '../Shaders/Circuit/vertex.glsl'
import circuitFragmentShader from '../Shaders/Circuit/fragment.glsl'

export default class Circuit
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.site = this.experience.site
        this.debug = this.experience.debug

        // Model
        this.resource = this.resources.items.modelCircuit

        this.setModel()
    }

    setModel()
    {
        this.materialParameters = {}
        this.materialParameters.color = '#e1ff00'

        /**
         * Material
         */
        // Material Electronic
        this.materialCircuit = new THREE.ShaderMaterial(
        {
            vertexShader: circuitVertexShader,
            fragmentShader: circuitFragmentShader,
            uniforms:
            {
                uTime: new THREE.Uniform(0),
                uColor: new THREE.Uniform(new THREE.Color(this.materialParameters.color))
            },
            transparent: true,
            side: THREE.DoubleSide,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        })

        // const debugFolderElectronic = this.debug.ui.addFolder('a')

        // debugFolderElectronic
        //     .addColor(this.materialParameters, 'color')
        //     .onChange(() =>
        //     {
        //         this.materialCircuit.uniforms.uColor.value.set(this.materialParameters.color)
        //     })
        
        // Material component
        this.materialComponent = new THREE.MeshPhysicalMaterial(
        {
            color:'#ff0000',
            metalness: 1,
            roughness: 0.4
        })

        // Material Base-Electronic
        this.materialBaseElectronic = new THREE.MeshPhysicalMaterial(
        {
            color:'#ffffff',
            metalness: 1,
            roughness: 0
        })

        // Material Screws
        this.materialScrews = new THREE.MeshPhysicalMaterial(
        {
            color:'#e1ff00',
            metalness: 1,
            roughness: 0
        })

        // Material suport
        this.materialSuport = new THREE.MeshPhysicalMaterial(
        {
            color:'#ffffff',
            metalness: 1,
            roughness: 0
        })
            
        // Material wire
        this.materialWire = new THREE.MeshPhysicalMaterial(
            {
                color:'#ffffff',
                metalness: 0,
                roughness: 1
            })
               

        /**
         * Model
         */    
        this.model = this.resource.scene
        this.model.scale.set(2, 2, 2)
        this.model.position.set(0.5, - this.site.objectDistance * 1.1, 2)
        this.model.rotation.x =  0.3
        this.scene.add(this.model)

        this.model.traverse((child) => 
        {
            if(child.name === 'Component')
            {
                child.material = this.materialComponent         
            }
            else if(child.name === 'Electronic')
            {
                child.material = this.materialCircuit  
            }
            else if(child.name === 'Base-Electronic')
            {
                child.material = this.materialBaseElectronic    
            }
            else if(child.name === 'Screws002')
            {
                child.material = this.materialScrews     
            }
            else if(child.name === 'Support')
            {
                child.material = this.materialSuport 
            }
            else if(child.name === 'Wire')
            {
                child.material = this.materialWire   
            }
        })
    }

    update()
    {
        this.elapsed = this.time.elapsed * 0.005

        this.materialCircuit.uniforms.uTime.value += this.time.delta * 0.005
        this.model.rotation.y = Math.cos(this.elapsed * 0.05) 
    }
}