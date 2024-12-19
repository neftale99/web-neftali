import{E as v,G as j,P as _,W as C,r as F,e as H,w as I,S as L,U as f,C as G,m as q,n as B,h as y,d as V,g as b,p as A,q as N,j as O}from"./index-CLn_N3Cb.js";import{D as K,G as U,a as W}from"./lil-gui.esm-BWSOvBbT.js";class Y extends v{constructor(){super(),this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),window.addEventListener("resize",()=>{this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.trigger("resize")})}}class X extends v{constructor(){super(),this.start=Date.now(),this.current=this.start,this.elapsed=0,this.delta=16,window.requestAnimationFrame(()=>{this.tick()})}tick(){const t=Date.now();this.delta=t-this.current,this.current=t,this.elapsed=this.current-this.start,this.trigger("tick"),window.requestAnimationFrame(()=>{this.tick()})}}class J{constructor(){this.experience=new l,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.time=this.experience.time,this.site=this.experience.site,window.addEventListener("scroll",()=>{}),window.addEventListener("beforeunload",()=>{sessionStorage.setItem("scrollPosition",this.scrollY)}),window.addEventListener("load",()=>{this.scrollPosition=sessionStorage.getItem("scrollPosition"),this.scrollPosition&&(this.scrollY=0,window.scrollTo(0,0),sessionStorage.removeItem("scrollPosition"))}),this.cursor={},this.cursor.x=0,this.cursor.y=0,window.addEventListener("mousemove",t=>{this.cursor.x=t.clientX/this.sizes.width-.5,this.cursor.y=t.clientY/this.sizes.height-.5}),this.setInstance()}setInstance(){this.cameraGroup=new j,this.scene.add(this.cameraGroup),this.instance=new _(35,this.sizes.width/this.sizes.height,.1,100),this.instance.position.z=5,this.cameraGroup.add(this.instance)}resize(){this.instance.aspect=this.sizes.width/this.sizes.height,this.instance.updateProjectionMatrix()}update(){this.instance.position.y=-scrollY/this.sizes.height*this.site.objectDistance,this.parallaxX=this.cursor.x*.5,this.parallaxY=-this.cursor.y*.5,this.cameraGroup.position.x+=(this.parallaxX-this.cameraGroup.position.x)*1.5*this.time.delta*.002,this.cameraGroup.position.y+=(this.parallaxY-this.cameraGroup.position.y)*1.5*this.time.delta*.002}}class ${constructor(){this.experience=new l,this.canvas=this.experience.canvas,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.camera=this.experience.camera,this.setInstance()}setInstance(){this.instance=new C({canvas:this.canvas,antialias:!0,alpha:!0}),this.instance.toneMapping=F,this.instance.toneMappingExposure=1,this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio)}resize(){this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio)}update(){this.instance.render(this.scene,this.camera.instance)}}class h{constructor(t=0,i="Network Error"){this.status=t,this.text=i}}const Q=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},n={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:Q()},w=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},Z=(e,t="https://api.emailjs.com")=>{if(!e)return;const i=w(e);n.publicKey=i.publicKey,n.blockHeadless=i.blockHeadless,n.storageProvider=i.storageProvider,n.blockList=i.blockList,n.limitRate=i.limitRate,n.origin=i.origin||t},P=async(e,t,i={})=>{const s=await fetch(n.origin+e,{method:"POST",headers:i,body:t}),r=await s.text(),a=new h(s.status,r);if(s.ok)return a;throw a},S=(e,t,i)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!i||typeof i!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},ee=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},E=e=>e.webdriver||!e.languages||e.languages.length===0,z=()=>new h(451,"Unavailable For Headless Browser"),te=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},ie=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},se=(e,t)=>e instanceof FormData?e.get(t):e[t],M=(e,t)=>{if(ie(e))return!1;te(e.list,e.watchVariable);const i=se(t,e.watchVariable);return typeof i!="string"?!1:e.list.includes(i)},k=()=>new h(403,"Forbidden"),re=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},ne=async(e,t,i)=>{const s=Number(await i.get(e)||0);return t-Date.now()+s},R=async(e,t,i)=>{if(!t.throttle||!i)return!1;re(t.throttle,t.id);const s=t.id||e;return await ne(s,t.throttle,i)>0?!0:(await i.set(s,Date.now().toString()),!1)},D=()=>new h(429,"Too Many Requests"),ae=async(e,t,i,s)=>{const r=w(s),a=r.publicKey||n.publicKey,o=r.blockHeadless||n.blockHeadless,d=r.storageProvider||n.storageProvider,m={...n.blockList,...r.blockList},u={...n.limitRate,...r.limitRate};return o&&E(navigator)?Promise.reject(z()):(S(a,e,t),ee(i),i&&M(m,i)?Promise.reject(k()):await R(location.pathname,u,d)?Promise.reject(D()):P("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:a,service_id:e,template_id:t,template_params:i}),{"Content-type":"application/json"}))},oe=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},le=e=>typeof e=="string"?document.querySelector(e):e,ce=async(e,t,i,s)=>{const r=w(s),a=r.publicKey||n.publicKey,o=r.blockHeadless||n.blockHeadless,d=n.storageProvider||r.storageProvider,m={...n.blockList,...r.blockList},u={...n.limitRate,...r.limitRate};if(o&&E(navigator))return Promise.reject(z());const p=le(i);S(a,e,t),oe(p);const c=new FormData(p);return M(m,c)?Promise.reject(k()):await R(location.pathname,u,d)?Promise.reject(D()):(c.append("lib_version","4.4.1"),c.append("service_id",e),c.append("template_id",t),c.append("user_id",a),P("/api/v1.0/email/send-form",c))},x={init:Z,send:ae,sendForm:ce,EmailJSResponseStatus:h};class he{constructor(){this.experience=new l,this.scene=this.experience.scene,this.resources=this.experience.resources,this.setDirectionalLight()}setDirectionalLight(){this.directionalLight=new H("#ffffff",5),this.directionalLight.position.set(-2,1,3),this.scene.add(this.directionalLight),this.helper=new I(this.directionalLight,2),this.scene.add(this.directionalLight)}}var de=`uniform float uTime;

varying vec3 vPosition;\r
varying vec3 vNormal;

float random2D (vec2 st) {\r
    return fract(sin(dot(st.xy,\r
                         vec2(12.9898,78.233)))*\r
        43758.5453123);\r
}

void main()\r
{\r
    
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    
    gl_Position = projectionMatrix * viewMatrix * modelPosition;

    
    vec4 modelNormal = modelMatrix * vec4(normal, 0.0);

    
    vPosition = modelPosition.xyz;\r
    vNormal = modelNormal.xyz;\r
}`,me=`uniform float uTime;\r
uniform vec3 uColor;

varying vec3 vPosition;\r
varying vec3 vNormal;

void main()\r
{\r
    
    vec3 normal = normalize(vNormal);\r
    if(!gl_FrontFacing)\r
        normal *= - 1.0;

    
    float stripes = mod((vPosition.y + uTime * 0.002) * 20.0, 1.2);\r
    stripes = pow(stripes, 3.0);

    
    vec3 viewDirecion = normalize(vPosition - cameraPosition);\r
    float fresnel = dot(viewDirecion, normal) + 1.0; \r
    fresnel = pow(fresnel, 3.0);

    
    float falloff = smoothstep(0.8, 0.0, fresnel);

    
    float holographic = stripes * fresnel;\r
    holographic += fresnel * 5.0; \r
    holographic *= falloff; 

    
    gl_FragColor = vec4(uColor, holographic);\r
    #include <tonemapping_fragment>\r
    #include <colorspace_fragment>\r
}`;class ue{constructor(){this.experience=new l,this.scene=this.experience.scene,this.resources=this.experience.resources,this.time=this.experience.time,this.site=this.experience.site,this.debug=this.experience.debug,this.resources=this.resources.items.earthModel,this.setModel()}setModel(){const t={};t.color="#007548",t.color2="#ffffff",t.color3="#000000",this.material=new L({vertexShader:de,fragmentShader:me,uniforms:{uTime:new f(0),uColor:new f(new G(t.color))},transparent:!1,side:q,blending:B});const i=this.debug.ui.addFolder("Material");i.close(),i.addColor(t,"color").onChange(()=>{this.material.uniforms.uColor.value.set(t.color)}),this.material2=new y({color:t.color2,roughness:.373,metalness:.154,ior:.762,reflectivity:.445,iridescence:.389});const s=this.debug.ui.addFolder("Material2");s.close(),s.addColor(t,"color2").onChange(()=>{this.material2.color.set(t.color2)}),s.add(this.material2,"roughness",0,1,.001),s.add(this.material2,"metalness",0,1,.001),s.add(this.material2,"ior",0,2,.001),s.add(this.material2,"reflectivity",0,1,.001),s.add(this.material2,"iridescence",0,1,.001),this.material3=new y({color:t.color3,roughness:0,metalness:1});const r=this.debug.ui.addFolder("Material3");r.close(),r.addColor(t,"color3").onChange(()=>{this.material3.color.set(t.color3)}),r.add(this.material3,"roughness",0,1,.001),r.add(this.material3,"metalness",0,1,.001),this.model=this.resources.scene,this.model.scale.set(1.1,1.1,1.1),this.model.position.y=-this.site.objectDistance*.37,this.model.position.x=1.5,this.scene.add(this.model),this.model.traverse(a=>{this.map=this.model.children.find(o=>o.name==="Map"),this.map.material=this.material,this.ocean=this.model.children.find(o=>o.name==="Icosphere"),this.ocean.material=this.material2,this.wire=this.model.children.find(o=>o.name==="Sphere-Wire"),this.wire.material=this.material3})}update(){this.model.rotation.y=this.time.elapsed*4e-4,this.material.uniforms.uTime.value=this.time.elapsed*.1}}class pe{constructor(){this.experience=new l,this.scene=this.experience.scene,this.resources=this.experience.resources,this.objectDistance=2,this.resources.on("ready",()=>{this.earth=new ue,this.environment=new he}),this.buttonEmailjs()}buttonEmailjs(){x.init("TlS73zFV8RUMHaItg");const t=document.getElementById("button");document.getElementById("form").addEventListener("submit",i=>{i.preventDefault(),t.value="Sending...",x.sendForm("default_service","template_cu86p4i",i.target).then(()=>{t.value="Send Email",alert("Sent!")},a=>{t.value="Send Email",alert(JSON.stringify(a))})})}update(){this.earth&&this.earth.update()}}const T=[{name:"earthModel",type:"gltfModel",path:"./models/earth.glb"}];class ge extends v{constructor(){super(),this.experience=new l,this.sources=T,this.items={},this.toLoad=this.sources.length,this.loaded=0,this.setLoaders(),this.startLoading()}setLoaders(){this.loadingBarElement=document.querySelector(".loading-bar"),this.webglElement=document.querySelector(".webgl"),this.conteinerElement=document.querySelector(".container"),this.navElement=document.querySelector(".navbar"),this.textElement=document.querySelector(".text"),this.iconElement=document.querySelector(".icons"),this.conteinerElement.classList.add("hidden"),this.navElement.classList.add("hidden"),this.textElement.classList.add("hidden"),this.iconElement.classList.add("hidden"),this.loadingManager=new V(()=>{b.delayedCall(.5,()=>{b.to(this.experience.overlayMaterial.uniforms.uAlpha,{duration:3,value:0,delay:1,onUpdate:()=>{this.conteinerElement.classList.remove("hidden"),this.navElement.classList.remove("hidden"),this.textElement.classList.remove("hidden"),this.iconElement.classList.remove("hidden")}}),this.loadingBarElement.classList.add("ended"),this.loadingBarElement.style.transform="",this.webglElement.style.zIndex="0"})},(t,i,s)=>{this.progressRatio=i/s,this.loadingBarElement.style.transform=`scaleX(${this.progressRatio})`}),this.loaders={},this.loaders.dracoLoader=new K(this.loadingManager),this.loaders.dracoLoader.setDecoderPath("/draco/"),this.loaders.gltfLoader=new U(this.loadingManager),this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader)}startLoading(){for(const t of this.sources)t.type==="gltfModel"&&this.loaders.gltfLoader.load(t.path,i=>{this.sourceLoaded(t,i)})}sourceLoaded(t,i){this.items[t.name]=i,this.loaded++,this.loaded===this.toLoad&&this.trigger("ready")}}class fe{constructor(){this.experience=new l,this.ui=new W({width:325}),this.ui.close(),this.ui.domElement.style.display="none"}}var ve=`void main()\r
{\r
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

}`,we=`uniform float uAlpha;

void main()\r
{\r
    gl_FragColor = vec4(0.0, 0.0, 0.0, uAlpha);\r
    #include <tonemapping_fragment>\r
    #include <colorspace_fragment>\r
}`;let g=null;class l{constructor(t){if(g)return g;g=this,this.canvas=t,this.sizes=new Y,this.time=new X,this.scene=new A,this.resources=new ge(T),this.site=new pe,this.camera=new J,this.renderer=new $,this.debug=new fe,this.sizes.on("resize",()=>{this.resize()}),this.time.on("tick",()=>{this.update()}),this.setLoader()}resize(){this.camera.resize(),this.renderer.resize()}update(){this.camera.update(),this.site.update(),this.renderer.update()}setLoader(){this.overlayGeometry=new N(8,8,1,1),this.overlayMaterial=new L({vertexShader:ve,fragmentShader:we,uniforms:{uAlpha:new f(1)},transparent:!0}),this.overlay=new O(this.overlayGeometry,this.overlayMaterial),this.overlay.position.z=2,this.scene.add(this.overlay)}}new l(document.querySelector("canvas.webgl"));
//# sourceMappingURL=contact-DWAiYkkk.js.map
