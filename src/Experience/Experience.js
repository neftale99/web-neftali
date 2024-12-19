import * as THREE from 'three'
import Sizes from './Utils/Sizes.js'
import Time from './Utils/Time.js'
import Camera from './Camera.js'
import Renderer from './Renderer.js'
import Resources from './Utils/Resources.js'
import Sources from './Sources.js'
import Debug from './Utils/Debug.js'
import Site from './Site/Site.js'


let instance = null

export default class Experience 
{
    constructor(canvas) 
    {
        // Singleton Camera
        if(instance)
        {
            return instance
        }

        instance = this

        // Options
        this.canvas = canvas

        // Set up
        this.debug = new Debug()
        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.resources = new Resources(Sources)
        this.site = new Site()
        this.camera = new Camera()
        this.renderer = new Renderer()

        // Sizes resize event
        this.sizes.on('resize', () =>
        {
            this.resize()
        })

        // Time tick event
        this.time.on('tick', () =>
        {
            this.update()
        })

        // Menu responsive
        this.setMenu()

        // Overlay
        this.setLoading()
    }

    resize()
    {
        this.camera.resize()
        this.renderer.resize()
    }

    update()
    {
        this.camera.update()
        this.site.update()
        this.renderer.update()
    }

    setMenu()
    {
        const menuBtn = document.querySelector('.menu-btn')
        const navbarUl = document.querySelector('.navbar ul')
        const navbarClose = document.querySelectorAll('.navbar a')

        if( menuBtn && navbarUl)
        {
            menuBtn.addEventListener('click', () =>
                {
                    navbarUl.classList.toggle('show')
                })
        }

        navbarClose.forEach(select =>
        {
            select.addEventListener('click', (event) =>
                {
                    event.preventDefault()
                        
                    navbarClose.forEach(select => 
                        select.classList.remove('active'),
                        select.classList.add('active'))
                    
                    setTimeout(() =>
                    {
                        navbarUl.classList.remove('show')

                        window.location.href = select.getAttribute('href')
                    }, 300)
                })
        })
    }

    setLoading()
    {
        this.overlayGeometry = new THREE.PlaneGeometry(90, 90, 1, 1) //90
        this.overlayMaterial = new THREE.ShaderMaterial({
            transparent: true,
            uniforms: {
                uAlpha: { value: 1 }
            },
            vertexShader: `
                void main()
                {
                    gl_Position = vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform float uAlpha;

                void main()
                {
                    gl_FragColor = vec4(0.0, 0.0, 0.0, uAlpha);
                }
            `,
            wireframe: false
        })
        this.overlay = new THREE.Mesh(this.overlayGeometry, this.overlayMaterial)
        this.overlay.position.z = 1
        this.scene.add(this.overlay)
    }

}