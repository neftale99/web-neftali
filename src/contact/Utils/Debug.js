import * as THREE from 'three'
import * as dat from 'lil-gui'
import Experience from '../Experience/Experience.js'

export default class Debug 
{
    constructor()
    {
        this.experience = new Experience()

        // Setup
        this.ui = new dat.GUI({ width: 325})
        this.ui.close()

        this.ui.domElement.style.display = 'none'
    }
}