import * as THREE from 'three'
import Typed from 'typed.js'
import Experience from '../Experience/Experience.js'
import Environment from './Environment.js'
import Welcome from './Welcome.js'
import Circuit from './Circuit.js'
import Hobbies from './Hobbies.js'

export default class Site
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        
        // Wait for resources
        this.resources.on('ready', () =>
        {
            this.welcome = new Welcome()
            this.circuit = new Circuit()
            this.hobbies = new Hobbies()
            this.environment = new Environment()
        })

        /**
        * ObjectsDistance
        */
        this.objectDistance = 4
          
        this.setLetter()
    }

    update()
    {
        if(this.welcome)
            this.welcome.update()

        if(this.circuit)
            this.circuit.update()

        if(this.hobbies)
            this.hobbies.update()

    }

    setLetter()
    {
        // Welcome
        const typed = new Typed('.animate-welcome', {
            strings: [
                'WELCOME',
                'BIENVENIDO',
                'BIENVENUE',
                'WILLKOMMEN'
            ],
            typeSpeed: 200,     
            backSpeed: 250,      
            backDelay: 500,     
            pauseFor: 1000,      
            loop: true,          
            showCursor: false, 
        })

        // Skills
        document.addEventListener('DOMContentLoaded', (event) =>
        {
            const circleElement = document.querySelectorAll('.circle')

            const animationCircle = (progress) =>
            {
                let degree = 0
                const targetDegree = parseInt(progress.getAttribute('data-degree'))
                const color = progress.getAttribute('data-color')
                const number = progress.querySelector('.number')
                const b1 = number.textContent.trim() === 'B1'

                const interval = setInterval(() => 
                {
                    degree += 1

                    if(degree > targetDegree)
                    {
                        clearInterval(interval)
                        return
                    }
                    
                    progress.style.background = `conic-gradient(
                        ${color} ${degree}%,
                        rgba(255, 255, 255, 0.2) ${degree}%
                    )`

                    if (!b1) {
                        number.innerHTML = degree + '<span>%</span>'
                        number.style.color = color
                    }
                }, 50)
            }

            const observer = new IntersectionObserver((entries) =>
            {
                entries.forEach((entry) =>
                {
                    if(entry.isIntersecting)
                    {
                        animationCircle(entry.target)
                        observer.unobserve(entry.target)
                    }
                })
            })

            circleElement.forEach((circle) =>
            {
                observer.observe(circle)
            })

        })
 
        // H2
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

        document.querySelectorAll('h2[data-value]').forEach(element => {
            element.onmouseover = event => {
                let iterations = 0
                const originalText = event.target.dataset.value
                
                const interval = setInterval(() => {
                    event.target.innerText = originalText
                        .split("")
                        .map((letter, index) => {
                            if (index < iterations) {
                                return originalText[index]
                            }
                            return letters[Math.floor(Math.random() * 26)]
                        })
                        .join("")

                    if (iterations >= originalText.length) {
                        clearInterval(interval)
                    }

                    iterations += 1 / 3
                }, 100)
            }
        })

        // Thanks
        const typedThanks = new Typed('.animate-thanks', {
            strings: [
                "LET'S TALK",
                'HABLEMOS',
                'PARLONS',
                'LASS UNS REDEN'
            ],
            typeSpeed: 200,     
            backSpeed: 250,      
            backDelay: 500,     
            pauseFor: 1000,      
            loop: true,          
            showCursor: false
        })
    }
}