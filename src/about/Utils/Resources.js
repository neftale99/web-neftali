import * as THREE from 'three'
import gsap from 'gsap'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import EventEmitter from '/Experience/Utils/EventEmitter.js'
import Sources from '../Experience/Sources.js'
import Experience from '../Experience/Experience.js'

export default class Resources extends EventEmitter
{
    constructor(sources)
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
        this.setStartLoading()
    }

    setLoaders()
    {
        this.loadingBarElement = document.querySelector('.loading-bar')
        this.webglElement = document.querySelector('.webgl')
        this.navElement = document.querySelector('.navbar')
        this.welcomeElement = document.querySelector('.welcome')
        this.educationElement = document.querySelector('.education')
        this.skillElement = document.querySelector('.skills')
        this.hobbiesElement = document.querySelector('.hobbies')
        this.thanksElement = document.querySelector('.thanks')

        this.navElement.classList.add('hidden')
        this.welcomeElement.classList.add('hidden')
        this.educationElement.classList.add('hidden')
        this.skillElement.classList.add('hidden')
        this.hobbiesElement.classList.add('hidden')
        this.thanksElement.classList.add('hidden')

        this.loadingManager = new THREE.LoadingManager(
            // Loaded
            () =>
            {
                gsap.delayedCall(1, () => {

                    gsap.to(this.experience.overlayMaterial.uniforms.uAlpha,
                        {
                            duration: 3,
                            value: 0,
                            delay: 1,
                            onUpdate: () => {
                                this.navElement.classList.remove('hidden')
                                this.welcomeElement.classList.remove('hidden')
                                this.educationElement.classList.remove('hidden')
                                this.skillElement.classList.remove('hidden')
                                this.hobbiesElement.classList.remove('hidden')
                                this.thanksElement.classList.remove('hidden')
                            }
                        })
        
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

        // Loaders
        this.loaders = {}
        this.loaders.textureLoader = new THREE.TextureLoader(this.loadingManager)
        this.loaders.dracoLoader = new DRACOLoader(this.loadingManager)
        this.loaders.dracoLoader.setDecoderPath('/draco/')
        this.loaders.gltfLoader = new GLTFLoader(this.loadingManager)
        this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader)
    }

    setStartLoading() {
    // Load each source
    for (const Source of this.sources) {
        if (Source.type === 'rgbeLoader') {
            // Código para cargar HDR
        } else if (Source.type === 'gltfModel') {
            this.loaders.gltfLoader.load(
                Source.path,
                (file) => {
                    this.sourceLoad(Source, file);
                },
                undefined,
                (error) => {
                    console.error('Error loading GLTF model:', error);
                }
            );
        } else if (Source.type === 'textureLoader') {
            this.loaders.textureLoader.load(
                Source.path,
                (file) => {
                    this.sourceLoad(Source, file);
                },
                undefined,
                (error) => {
                    console.error('Error loading texture:', error);
                }
            );
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
    }
}