import * as THREE from 'three'
import Experience from '../Experience/Experience.js'
import particlesVertexShader from '../Shaders/Particles/vertex.glsl'
import particlesFragmentShader from '../Shaders/Particles/fragment.glsl'

export default class Welcome
{
    constructor()
    {
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.camera = this.experience.camera
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.site = this.experience.site

        this.setTexture()
        this.setPlane()
    }

    setTexture()
    {
        this.texture = this.resources.items.imageNef
        this.texture2 = this.resources.items.imageGlow
    }

    setPlane()
    {
        /**
         * Displacement
         */
        this.displacement = {}

        // 2D canvas
        this.displacement.canvas = document.createElement('canvas')
        this.displacement.canvas.width = 128
        this.displacement.canvas.height = 128
        this.displacement.canvas.style.position = 'fixed'
        this.displacement.canvas.style.width = '200px'
        this.displacement.canvas.style.height = '200px'
        this.displacement.canvas.style.top = 0
        this.displacement.canvas.style.left = 0
        this.displacement.canvas.style.zIndex = 15
        // document.body.append(this.displacement.canvas)

        // Content
        this.displacement.context = this.displacement.canvas.getContext('2d')
        this.displacement.context.fillRect(0, 0, this.displacement.canvas.width, this.displacement.canvas.height)

        // Glow image
        this.displacement.glowImage = new Image()
        this.displacement.glowImage.src = './images/glow.png'

        // Interactive plane
        this.displacement.interactivePlane = new THREE.Mesh(
            new THREE.PlaneGeometry(6, 4),
            new THREE.MeshBasicMaterial({ color: 'red' })
        )
        this.displacement.interactivePlane.position.y = - this.site.objectDistance + 4
        this.displacement.interactivePlane.position.x = 4
        this.displacement.interactivePlane.visible = false
        this.scene.add(this.displacement.interactivePlane)

        // Raycaster
        this.displacement.raycaster = new THREE.Raycaster()
    
        // Coordinates
        this.displacement.screenCursor = new THREE.Vector2(9999, 9999)
        this.displacement.canvasCursor = new THREE.Vector2(9999, 9999)
        this.displacement.canvasCursorPrevious = new THREE.Vector2(9999, 9999)
 
        window.addEventListener('pointermove', (event) =>
        {
            this.displacement.screenCursor.x = 
                (event.clientX / this.sizes.width ) * 2 - 1
            this.displacement.screenCursor.y = 
                -(event.clientY / this.sizes.height ) * 2 + 1
        })

        // Texture
        this.displacement.texture = new THREE.CanvasTexture(this.displacement.canvas)
        
        /**
         * Plane
         */
        this.particlesGeometry = new THREE.PlaneGeometry(6, 4, 150, 150)
        this.particlesGeometry.setIndex(null)
        this.particlesGeometry.deleteAttribute('normal')

        this.intensitiesArray = new Float32Array(this.particlesGeometry.attributes.position.count)
        this.anglesArray = new Float32Array(this.particlesGeometry.attributes.position.count)

        for(let i = 0; i < this.particlesGeometry.attributes.position.count; i++)
        {
            this.intensitiesArray[i] = Math.random()
            this.anglesArray[i] = Math.random() * Math.PI
        }

        this.particlesGeometry.setAttribute('aIntensity', new THREE.BufferAttribute(this.intensitiesArray, 1))
        this.particlesGeometry.setAttribute('aAngle', new THREE.BufferAttribute(this.anglesArray, 1))

        this.particlesMaterial = new THREE.ShaderMaterial(
        {
            vertexShader: particlesVertexShader,
            fragmentShader: particlesFragmentShader,
            uniforms:
            {
                uResolution: new THREE.Uniform(
                    new THREE.Vector2(
                        this.sizes.width * this.sizes.pixelRatio,
                        this.sizes.height * this.sizes.pixelRatio
                )),
                uTexture: new THREE.Uniform(this.texture),
                uDisplacementTexture: new THREE.Uniform(this.displacement.texture)
            },
            // blending: THREE.AdditiveBlending
        })
        this.particles = new THREE.Points(this.particlesGeometry, this.particlesMaterial)
        this.particles.position.y = - this.site.objectDistance + 4
        this.particles.position.x = 4
        this.scene.add(this.particles)
    }

    update()
    {
        // Raycaster
        this.displacement.raycaster.setFromCamera(this.displacement.screenCursor, this.camera.instance)

        const intersections = this.displacement.raycaster.intersectObject(this.displacement.interactivePlane)

        if(intersections.length)
        {
            const uv = intersections[0].uv

            this.displacement.canvasCursor.x = 
                uv.x * this.displacement.canvas.width
            this.displacement.canvasCursor.y = 
                (1 - uv.y) * this.displacement.canvas.height
        }

        /**
         * Displacement
         */
        // Fade out
        this.displacement.context.globalCompositeOperation = 'source-over'
        this.displacement.context.globalAlpha = 0.02
        this.displacement.context.fillRect(0, 0, this.displacement.canvas.width, this.displacement.canvas.height)

        // Speed alpha
        const cursorDistance = this.displacement.canvasCursorPrevious.distanceTo(this.displacement.canvasCursor)
        this.displacement.canvasCursorPrevious.copy(this.displacement.canvasCursor)
        const alpha = Math.min(cursorDistance * 0.1, 1)

        // Draw glow
        const glowSize = this.displacement.canvas.width * 0.2
        this.displacement.context.globalCompositeOperation = 'lighten'
        this.displacement.context.globalAlpha = alpha
        this.displacement.context.drawImage(
            this.displacement.glowImage,
            this.displacement.canvasCursor.x - glowSize * 0.5,
            this.displacement.canvasCursor.y - glowSize * 0.5,
            glowSize,
            glowSize
        )
    
        // Texture
        this.displacement.texture.needsUpdate = true
    }

}