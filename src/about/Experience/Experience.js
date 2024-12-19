import * as THREE from 'three'
import Sizes from '../Utils/Size.js'
import Time from '../Utils/Time.js'
import Camera from './Camera.js'
import Renderer from './Renderer.js'
import Site from '../Site/Site.js'
import Resources from '../Utils/Resources.js'
import Sources from './Sources.js'
import Debug from '../Utils/Debug.js'

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
        this.debug = new Debug()
        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.resources = new Resources(Sources)
        this.site = new Site()
        this.camera = new Camera()
        this.renderer = new Renderer()

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

        if(this.site.welcome && this.site.welcome.particlesMaterial)
        {
            this.site.welcome.particlesMaterial.uniforms.uResolution.value.set
            (
                this.sizes.width * this.sizes.pixelRatio,
                this.sizes.height * this.sizes.pixelRatio
            )
            // console.log('Updated uResolution:', this.site.welcome.particlesMaterial.uniforms.uResolution.value)
        }
    }

    update()
    {
        this.camera.update()
        this.renderer.update()
        this.site.update()
    }

    setLoading()
    {
        this.overlayGeometry = new THREE.PlaneGeometry(30, 30, 1, 1)
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
        this.overlay.position.z = 4
        this.scene.add(this.overlay)
    }
}