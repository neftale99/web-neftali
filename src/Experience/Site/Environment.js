import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Environment
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Lights
        this.setDirectionalLight()
    }

    setDirectionalLight()
    {
        // Light
        this.directionalLight = new THREE.DirectionalLight('#ffffff', 3)
        this.directionalLight.position.set(0, 4, 1)
        this.directionalLight.castShadow = true
        this.directionalLight.shadow.mapSize.set(1024, 1024)
        this.directionalLight.shadow.camera.far = 15
        this.directionalLight.shadow.normalBias = 0.05
        this.scene.add(this.directionalLight)

        // Helper
        // this.helperDirectional = new THREE.DirectionalLightHelper(this.directionalLight, 5)
        // this.scene.add(this.helperDirectional)
    }
}