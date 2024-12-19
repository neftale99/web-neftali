import * as THREE from 'three'
import emailjs from '@emailjs/browser' 
import Experience from '../Experience/Experience.js'
import Environment from './Environment.js'
import Earth from './Earth.js'

export default class Site
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Camera position
        this.objectDistance = 2

        // Wait for resources
        this.resources.on('ready', () =>
        {
            // Setup
            this.earth = new Earth()
            this.environment = new Environment()
        })

        this.buttonEmailjs()
    }

    buttonEmailjs()
    {
        emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID)
        const btn = document.getElementById('button')
        
        document.getElementById('form')
            .addEventListener('submit', (event) => 
            {
                event.preventDefault()
         
                btn.value = 'Sending...'
         
                const serviceID = 'default_service'  
                const templateID = 'template_cu86p4i'  
         
                emailjs.sendForm(serviceID, templateID, event.target).then(() => 
                {
                    btn.value = 'Send Email'
                    alert('Sent!')
                }, 
                (err) => 
                {
                    btn.value = 'Send Email';
                    alert(JSON.stringify(err));
                })
            })
    }

    update()
    {
        if(this.earth)
            this.earth.update()
    }
}