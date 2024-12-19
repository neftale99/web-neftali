import * as THREE from 'three'
import Experience from '../Experience/Experience.js'

export default class Environment
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Setup
        this.setDirectionalLight()
    }

    setDirectionalLight()
    {
        this.directionalLight = new THREE.DirectionalLight('#ffffff', 5)
        this.directionalLight.position.set(- 2, 1, 3)
        this.scene.add(this.directionalLight)

        this.helper = new THREE.DirectionalLightHelper(this.directionalLight, 2)
        this.scene.add(this.directionalLight)
    }

}