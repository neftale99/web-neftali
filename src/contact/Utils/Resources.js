import * as THREE from 'three' 
import gsap from 'gsap'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import Sources from '../Experience/Sources.js'
import EventEmitter from '/Experience/Utils/EventEmitter.js'
import Experience from '../Experience/Experience.js'

export default class Resources extends EventEmitter
{
    constructor()
    {
        super()

        this.experience = new Experience()

        // Options
        this.sources = Sources

        // Setup
        this.items = {}
        this.toLoad = this.sources.length
        this.loaded = 0

        this.setLoaders()
        this.startLoading()
    }

    setLoaders()
    {
        this.loadingBarElement = document.querySelector('.loading-bar')
        this.webglElement = document.querySelector('.webgl')
        this.conteinerElement = document.querySelector('.container')
        this.navElement = document.querySelector('.navbar')
        this.textElement = document.querySelector('.text')
        this.iconElement = document.querySelector('.icons')

        this.conteinerElement.classList.add('hidden')
        this.navElement.classList.add('hidden')
        this.textElement.classList.add('hidden')
        this.iconElement.classList.add('hidden')

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
                                this.conteinerElement.classList.remove('hidden')
                                this.navElement.classList.remove('hidden')
                                this.textElement.classList.remove('hidden')
                                this.iconElement.classList.remove('hidden')
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

        this.loaders = {}
        this.loaders.dracoLoader = new DRACOLoader(this.loadingManager)
        this.loaders.dracoLoader.setDecoderPath('/draco/')
        this.loaders.gltfLoader = new GLTFLoader(this.loadingManager)
        this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader)
    }

    startLoading()
    {
        // Load each sources
        for(const source of this.sources)
        {
            if(source.type === 'gltfModel')
            {
                this.loaders.gltfLoader.load(
                    source.path,
                    (file) =>
                    {
                        this.sourceLoaded(source, file)
                    }
                )
            }
        }
    }

    sourceLoaded(source, file)
    {
        this.items[source.name] = file

        this.loaded++

        if(this.loaded === this.toLoad)
        {
            this.trigger('ready')
        }
    }
}