import * as THREE from 'three'
import Experience from './Experience.js'

export default class Camera
{
    constructor()
    {
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas
        this.time = this.experience.time
        this.site = this.experience.site

        // Scroll
        let scrollY = window.scrollY

        window.addEventListener('scroll', () =>
        {
            scrollY = window.scrollY
        })

        // Scroll position save
        window.addEventListener('beforeunload', () => 
        {
            sessionStorage.setItem('scrollPosition', this.scrollY)
        })
    
        // Initial position to load
        window.addEventListener('load', () => 
        {
            this.scrollPosition = sessionStorage.getItem('scrollPosition')
            if(this.scrollPosition)
            {
                this.scrollY = 0
                window.scrollTo(0, 0)
                sessionStorage.removeItem('scrollPosition')
            }
        })
    

        // Cursor
        this.cursor = {}
        this.cursor.x = 0
        this.cursor.y = 0

        window.addEventListener('mousemove', (event) =>
        {
            this.cursor.x = event.clientX / this.sizes.width - 0.5
            this.cursor.y = event.clientY / this.sizes.height - 0.5

        })

        this.setInstance()
    }

    setInstance()
    {
        // Group
        this.cameraGroup = new THREE.Group()
        this.scene.add(this.cameraGroup)

        this.instance = new THREE.PerspectiveCamera(
            35, 
            this.sizes.width / this.sizes.height,
            0.1,
            100
        )
        this.instance.position.z = 5
        this.cameraGroup.add(this.instance)
    }

    resize()
    {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update()
    {
        this.instance.position.y = - scrollY / this.sizes.height * this.site.objectDistance 

        this.parallaxX = this.cursor.x * 0.5
        this.parallaxY = - this.cursor.y * 0.5
        this.cameraGroup.position.x += (
            this.parallaxX - this.cameraGroup.position.x
        ) * 1.5 * this.time.delta * 0.002
        this.cameraGroup.position.y += (
            this.parallaxY - this.cameraGroup.position.y
        ) * 1.5 * this.time.delta * 0.002
    }
}
