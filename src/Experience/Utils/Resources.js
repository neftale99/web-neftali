import * as THREE from 'three'
import gsap from 'gsap'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import EventEmitter from './EventEmitter.js'
import Sources from '../Sources.js'
import Experience from '../Experience.js'


export default class Resources extends EventEmitter
{
    constructor(Sources)
    {
        super()

        this.experience = new Experience()

        // Options
        this.sources = Sources

        // Setup
        this.items = {}
        this.toLoad = this.sources.length
        this.loaded = 0

        // Loaders
        this.setLoader()
        this.setStartLoading()
    }

    setLoader() 
    {
        this.loadingBarElement = document.querySelector('.loading-bar')
        this.webglElement = document.querySelector('.webgl')
        this.navElement = document.querySelector('.navbar')
        this.nameElement = document.querySelector('.name')
        this.aboutElement = document.querySelector('.about')
        this.labElement = document.querySelector('.shaderlab')
        this.contactElement = document.querySelector('.contact')

        this.navElement.classList.add('hidden')
        this.nameElement.classList.add('hidden')
        this.aboutElement.classList.add('hidden')
        this.labElement.classList.add('hidden')
        this.contactElement.classList.add('hidden')

        this.loadingManager = new THREE.LoadingManager(
            // Loaded
            () =>
            {
                gsap.delayedCall(0.5, () => {

                    gsap.to(
                        this.experience.overlayMaterial.uniforms.uAlpha,
                        { 
                            duration: 3, 
                            value: 0,
                            delay: 1,
                            onUpdate: () => {
                                this.navElement.classList.remove('hidden')
                                this.nameElement.classList.remove('hidden')
                                this.aboutElement.classList.remove('hidden')
                                this.labElement.classList.remove('hidden')
                                this.contactElement.classList.remove('hidden')
                            }
                        }
                    )
    
                    this.loadingBarElement.classList.add('ended')
                    this.loadingBarElement.style.transform = ''

                    this.webglElement.style.zIndex = '0'
                })
            },

            // Progress
            (itemUrl, itemsLoaded, itemsTotal) =>
            {
                this.progressRatio = itemsLoaded / itemsTotal
                this.loadingBarElement.style.transform = `scaleX(${this.progressRatio})`
            }
        )
    
        // Loaders initialization
        this.loaders = {}
        this.loaders.rgbeLoader = new RGBELoader(this.loadingManager )
        this.loaders.dracoLoader = new DRACOLoader(this.loadingManager )
        this.loaders.dracoLoader.setDecoderPath('/draco/')
        this.loaders.gltfLoader = new GLTFLoader(this.loadingManager )
        this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader)
        this.loaders.textureLoader = new THREE.TextureLoader(this.loadingManager )
    }
    

    setStartLoading()
    {
        // Load each source
        for(const Source of this.sources)
        {
            if (Source.type === 'rgbeLoader')
            {
                this.loaders.rgbeLoader.load(
                    Source.path,
                    (file) =>
                    {
                        this.sourceLoad(Source, file) 
                    }
                )
            }
            else if (Source.type === 'gltfModel')
                {
                    this.loaders.gltfLoader.load(
                        Source.path,
                        (file) =>
                        {
                            this.sourceLoad(Source, file) 
                        }
                    )
                }
            else if (Source.type === 'textureLoader')
                {
                    this.loaders.textureLoader.load(
                        Source.path,
                        (file) =>
                        {
                            this.sourceLoad(Source, file) 
                        }
                    )
                }
        }
    }

    sourceLoad(Source, file)
    {
        this.items[Source.name] = file

        this.loaded++

        if(this.loaded === this.toLoad)
        {
            this.trigger('ready')
        }

        if(Source.name === 'modelSpace' && file.animations) {
            // console.log('Animations', file.animations)
        } else if(Source.name === 'modelSpace') {
            // console.log('No animations')
        }

    }

}