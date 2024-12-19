import * as THREE from 'three'
import Experience from '../Experience/Experience.js'

export default class Environment
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.setLight()
    }

    setLight()
    {
        // Light
        this.directionalLight = new THREE.DirectionalLight('#ffffff', 3)
        this.directionalLight.position.set(1, 1, 1)
        this.scene.add(this.directionalLight)
        
        // Helper
        // this.helperDirectional = new THREE.DirectionalLightHelper(this.directionalLight, 5)
        // this.scene.add(this.helperDirectional)
    }
}