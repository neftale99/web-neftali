import * as THREE from 'three'
import gsap from 'gsap'
import GUI from 'lil-gui'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Experience from '../Experience/Experience.js'

export default class Site {
    constructor() {
        this.experience = new Experience()
        this.camera = this.experience.camera
        this.scene = this.experience.scene
        this.sizes = this.experience.sizes
        this.time = this.experience.time

        const geometry = new THREE.TorusKnotGeometry(8, 3.5, 99, 16)
        this.material = new THREE.MeshPhysicalMaterial(
        { 
            wireframe: true,
            color: '#00ebbc',
            // emissive: '#09490d',
            roughness: 1,
            metalness: 1,
            ior: 1.29,
            reflectivity: 0.246,
            iridescenceIOR: 0.024,
            sheen: 1,
            sheenRoughness: 0,
            sheenColor: '#ff0059',
            clearcoat: 0.897,
            clearcoatRoughness: 0.43,
            vertexColors: false,
        })
        
        // Definir el mesh como una propiedad de la clase
        this.mesh = new THREE.Mesh(geometry, this.material)

        // Inicializa la posición del mesh
        this.mesh.position.set(0, 0, - 10)
        this.scene.add(this.mesh)

        this.lightMaterial()
        this.guiMaterial()
        this.horizontalMove()
    }

    horizontalMove()
    {
        gsap.registerPlugin(ScrollTrigger)

        let sections = gsap.utils.toArray(".panel")

        gsap.to(sections, 
        {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: 
            {
                trigger: ".container",
                pin: true,
                scrub: 0.5,
                snap: 1 / (sections.length - 1),
                end: () => "+=" + document.querySelector(".container").offsetWidth * 0.5,
                pinSpacing: true
            }
        })
    }

    lightMaterial()
    {
        const directionalLight = new THREE.DirectionalLight('#ffffff', 2.5)
        directionalLight.position.set(8, 3, 0)
        this.scene.add(directionalLight)

        // const helper = new THREE.DirectionalLightHelper(directionalLight, 10)
        // this.scene.add(helper)
    }

    guiMaterial()
    {
        // const gui = new GUI()
        // const debugObject = {}

        // gui.add(this.material, 'wireframe')
        // gui.addColor(this.material, 'color')
        // // gui.addColor(this.material, 'emissive')
        // gui.add(this.material, 'roughness', 0, 1, 0.001)
        // gui.add(this.material, 'metalness', 0, 1, 0.001)
        // gui.add(this.material, 'ior', 0, 2.5, 0.001)
        // gui.add(this.material, 'reflectivity', 0, 1, 0.001)
        // gui.add(this.material, 'iridescenceIOR', 0, 1, 0.001)
        // gui.add(this.material, 'sheen', 0, 1, 0.001)
        // gui.add(this.material, 'sheenRoughness', 0, 1, 0.001)
        // gui.addColor(this.material, 'sheenColor')
        // gui.add(this.material, 'clearcoat', 0, 1, 0.001)
        // gui.add(this.material, 'clearcoatRoughness', 0, 1, 0.001)
        // gui.add(this.material, 'vertexColors')
    }

    update() 
    {
        this.mesh.rotation.y = Math.sin(this.time.elapsed * 0.001) * 0.8
        this.mesh.rotation.x = Math.cos(this.time.elapsed * 0.001) * 1.5
    }
}