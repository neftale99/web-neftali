import * as THREE from 'three'
import Experience from '../Experience.js'
import Environment from './Environment.js'
import Sphere from './Sphere.js'
import Alien from './Alien.js'
import Gun from './Gun.js'
import SpaceShip from './SpaceShip.js'

export default class Site
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.debug = this.experience.debug
        this.time = this.experience.time


        // Resources
        this.resources.on('ready', () =>
        {
            // Setup
            this.sphere = new Sphere()
            this.alien = new Alien()
            this.gun = new Gun()
            this.spaceship = new SpaceShip()
            this.environment = new Environment()
        })

        /**
        * ObjectsDistance
        */
        this.objectDistance = 12
    
    }

    update()
    {
        if(this.spaceship)
            this.spaceship.update
    }
}