import * as THREE from 'three'
import gsap from 'gsap'
import Sizes from '../Utils/Sizes.js'
import Time from '../Utils/Time.js'
import Camera from './Camera.js'
import Renderer from './Renderer.js'
import Site from '../Site/Site.js'

let instance = null

export default class Experience
{
    constructor(canvas)
    {
        // Singleton
        if(instance)
        {
            return instance
        }

        instance = this

        // Options
        this.canvas = canvas

        // Setup
        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.site = new Site()

        // Resize event
        this.sizes.on('resize', () => 
        {
            this.resize()
        })

        // Time tick event
        this.time.on('tick', () => 
        {
            this.update()
        })

        this.setLoading()
    }

    resize()
    {
        this.camera.resize()
        this.renderer.resize()
    }

    update()
    {
        // this.camera.update()
        this.renderer.update()
        this.site.update()
    }

    setLoading()
    {
        document.body.classList.add('no-scroll')

        this.overlayGeometry = new THREE.PlaneGeometry(2, 2, 1, 1)
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
        // this.overlay.position.z = 1
        this.scene.add(this.overlay)

        this.loadingBarElement = document.querySelector('.loading-bar')
        this.webglElement = document.querySelector('.webgl')
        // this.firstElement = document.querySelector('.none')

        // this.firstElement.classList.add('hidden')

        this.progressRatio = 0

        const fakeLoading = setInterval(() => {
            this.progressRatio += 0.02
    
            if (this.progressRatio >= 1) {
                this.progressRatio = 1
                clearInterval(fakeLoading)
                
                gsap.to(
                    this.overlayMaterial.uniforms.uAlpha,
                    {
                        duration: 3,
                        value: 0,
                        delay: 1
                    }
                )

                this.loadingBarElement.style.transform = 'scaleX(1)'
                setTimeout(() =>
                {
                    this.loadingBarElement.classList.add('ended')
                    this.webglElement.style.zIndex = '0'
                    document.body.classList.remove('no-scroll')
                }, 500)
            }
    
            this.loadingBarElement.style.transform = `scaleX(${this.progressRatio})`
    
        }, 10)

        this.hiddenElements = document.querySelectorAll(
            '.container, .firstContainer, .lastContainer, .navbar'
        )

        this.hiddenElements.forEach(element => {
            element.style.opacity = '1'
            element.style.visibility = 'visible'
        })
    }
}