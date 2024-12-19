import * as THREE from 'three'
import gsap from 'gsap'
import Sizes from '../Utils/Size.js'
import Time from '../Utils/Time.js'
import Camera from './Camera.js'
import Renderer from './Renderer.js'
import Site from '../Site/Site.js'
import Resources from '../Utils/Resources.js'
import sources from './Sources.js' 
import Debug from '../Utils/Debug.js'
import overlayVertexShader from '../Shaders/Overlay/vertex.glsl'
import overlayFragmentShader from '../Shaders/Overlay/fragment.glsl'

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
        this.resources = new Resources(sources)
        this.site = new Site()
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.debug = new Debug()

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

        this.setLoader()
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

    setLoader() 
    {
        this.overlayGeometry = new THREE.PlaneGeometry(8, 8, 1, 1)
        this.overlayMaterial = new THREE.ShaderMaterial({
            vertexShader: overlayVertexShader,
            fragmentShader: overlayFragmentShader,
            uniforms: {
                uAlpha: new THREE.Uniform(1)
            },
            transparent: true,

        })
        this.overlay = new THREE.Mesh(this.overlayGeometry, this.overlayMaterial)
        this.overlay.position.z = 2
        this.scene.add(this.overlay)
    }

}