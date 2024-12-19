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

        // Scroll position save
        window.addEventListener('beforeunload', () => 
        {
            sessionStorage.setItem('scrollPosition', scrollY)
        })

        // Initial position to load
        window.addEventListener('load', () => 
        {
            this.scrollPosition = sessionStorage.getItem('scrollPosition')
            if(this.scrollPosition)
            {
                scrollY = 0
                window.scrollTo(0, 0)
                sessionStorage.removeItem('scrollPosition')
            }
        })

        window.addEventListener('scroll', () =>
        {
            scrollY = window.scrollY
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
        // GROUP
        this.instanceGroup = new THREE.Group()
        this.scene.add(this.instanceGroup)

        // Camera
        this.instance = new THREE.PerspectiveCamera(
            35, 
            this.sizes.width / this.sizes.height,
            0.1,
            100
        )
        this.instance.position.z = 15
        this.instanceGroup.add(this.instance)
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
        
        this.instanceGroup.position.x += (this.parallaxX - this.instanceGroup.position.x) * 5 * this.time.delta * 0.005
        this.instanceGroup.position.y += (this.parallaxY - this.instanceGroup.position.y) * 5 * this.time.delta * 0.005
    }
}