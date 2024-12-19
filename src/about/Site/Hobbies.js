import * as THREE from 'three' 
import Experience from '../Experience/Experience.js'

export default class Hobbies
{
    constructor()
    {
        this.experience = new Experience
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.site = this.experience.site
        this.debug = this.experience.debug

        // Model
        this.resource = this.resources.items.modelAbstract

        this.setModel()
        this.setAnimation()
    }

    setModel()
    {
        this.materialParameters = {}
        this.materialParameters.color = '#ffffff'
        this.materialParameters.emissive = '#000000'
        this.materialParameters.color2 = '#00eeff'
        this.materialParameters.emissive2 = '#000000'
        this.materialParameters.color3 = '#fa00cc'
        this.materialParameters.emissive3 = '#000000'

        /**
         * Material
         */
        // Sphere
        this.materialSphere = new THREE.MeshPhysicalMaterial({
            color: this.materialParameters.color,
            emissive: this.materialParameters.emissive,
            metalness: 1,
            roughness: 0.451,
            ior: 1.725,
            opacity: 1,
            iridescence: 0,
            iridescenceIOR: 0,
            wireframe: false,
        })

        // const debugFolderMaterial = this.debug.ui.addFolder('sphere')
        // debugFolderMaterial.addColor(this.materialParameters, 'color')
        //     .onChange(() => this.materialSphere.color.set(this.materialParameters.color))
        // debugFolderMaterial.addColor(this.materialParameters, 'emissive')
        //     .onChange(() => this.materialSphere.emissive.set(this.materialParameters.emissive))
        // debugFolderMaterial.add(this.materialSphere, 'metalness', 0, 1, 0.001)
        // debugFolderMaterial.add(this.materialSphere, 'roughness', 0, 1, 0.001)
        // debugFolderMaterial.add(this.materialSphere, 'ior', 0, 2, 0.001)
        // debugFolderMaterial.add(this.materialSphere, 'opacity', 0, 1, 0.001)
        // debugFolderMaterial.add(this.materialSphere, 'iridescence', 0, 1, 0.001)
        // debugFolderMaterial.add(this.materialSphere, 'iridescenceIOR', 0, 2, 0.001)
        // debugFolderMaterial.add(this.materialSphere, 'wireframe')
        // debugFolderMaterial.add(this.materialSphere, 'vertexColors')


        // Effect
        this.materialEffect = new THREE.MeshPhysicalMaterial({
            color: this.materialParameters.color2,
            emissive: this.materialParameters.emissive2,
            metalness: 1,
            roughness: 0.235,
            ior: 1.4,
            opacity: 1,
            iridescence: 0.57,
            iridescenceIOR: 1.05,
            wireframe: false
        })

        // const debugFolderEffect = this.debug.ui.addFolder('effect')
        // debugFolderEffect.addColor(this.materialParameters, 'color2')
        //     .onChange(() => this.materialEffect.color.set(this.materialParameters.color2))
        // debugFolderEffect.addColor(this.materialParameters, 'emissive2')
        //     .onChange(() => this.materialEffect.emissive.set(this.materialParameters.emissive2))
        // debugFolderEffect.add(this.materialEffect, 'metalness', 0, 1, 0.001)
        // debugFolderEffect.add(this.materialEffect, 'roughness', 0, 1, 0.001)
        // debugFolderEffect.add(this.materialEffect, 'ior', 0, 2, 0.001)
        // debugFolderEffect.add(this.materialEffect, 'opacity', 0, 1, 0.001)
        // debugFolderEffect.add(this.materialEffect, 'iridescence', 0, 1, 0.001)
        // debugFolderEffect.add(this.materialEffect, 'iridescenceIOR', 0, 2, 0.001)
        // debugFolderEffect.add(this.materialEffect, 'wireframe')
        // debugFolderEffect.add(this.materialEffect, 'vertexColors')

        // Effect2
        this.materialEffect2 = new THREE.MeshPhysicalMaterial({
            color: this.materialParameters.color3,
            emissive: this.materialParameters.emissive3,
            metalness: 1,
            roughness: 0.235,
            ior: 1.3,
            opacity: 1,
            iridescence: 0.5,
            iridescenceIOR: 1.5,
            wireframe: false
        })

        // const debugFolderEffect2 = this.debug.ui.addFolder('effect2')
        // debugFolderEffect2.addColor(this.materialParameters, 'color3')
        //     .onChange(() => this.materialEffect2.color.set(this.materialParameters.color3))
        // debugFolderEffect2.addColor(this.materialParameters, 'emissive3')
        //     .onChange(() => this.materialEffect2.emissive.set(this.materialParameters.emissive3))
        // debugFolderEffect2.add(this.materialEffect2, 'metalness', 0, 1, 0.001)
        // debugFolderEffect2.add(this.materialEffect2, 'roughness', 0, 1, 0.001)
        // debugFolderEffect2.add(this.materialEffect2, 'ior', 0, 2, 0.001)
        // debugFolderEffect2.add(this.materialEffect2, 'opacity', 0, 1, 0.001)
        // debugFolderEffect2.add(this.materialEffect2, 'iridescence', 0, 1, 0.001)
        // debugFolderEffect2.add(this.materialEffect2, 'iridescenceIOR', 0, 2, 0.001)
        // debugFolderEffect2.add(this.materialEffect2, 'wireframe')
        // debugFolderEffect2.add(this.materialEffect2, 'vertexColors')


        /**
         * Model
         */
        this.model = this.resource.scene
        this.model.scale.set(1.2, 1.2, 1.2)
        this.model.position.set(3, - this.site.objectDistance * 3, 2)
        this.scene.add(this.model)

        this.model.traverse((child) => 
        {
            if(child.name === 'Sphere')
            {
                child.material = this.materialSphere
            }
            else if(child.name === 'Effect')
            {
                child.material = this.materialEffect
            }
            else if(child.name === 'Effect002')
            {
                child.material = this.materialEffect2 
            }
        })
    }

    setAnimation()
    {
        this.animations = {}
        this.animations.mixer = new THREE.AnimationMixer(this.model)

        this.animations.effect = this.animations.mixer.clipAction(this.resource.animations[0])
        this.animations.effect.play()
        this.animations.effect2 = this.animations.mixer.clipAction(this.resource.animations[1])
        this.animations.effect2.play()
        
    }

    update()
    {
        this.animations.mixer.update(this.time.delta * 0.001)
    }
}