import{E as x,G as k,P as z,W as M,r as A,e as I,j as L,q as y,l as D,s as O,V as p,t as B,B as C,S as b,U as m,u as R,C as N,m as q,n as j,h,o as F,d as G,g as P,T as _,p as H}from"./index-CLn_N3Cb.js";import{D as W,G as Y,a as U}from"./lil-gui.esm-BWSOvBbT.js";class $ extends x{constructor(){super(),this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),window.addEventListener("resize",()=>{this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.trigger("resize")})}}class V extends x{constructor(){super(),this.start=Date.now(),this.current=this.start,this.elapsed=0,this.delta=16,window.requestAnimationFrame(()=>{this.tick()})}tick(){const t=Date.now();this.delta=t-this.current,this.current=t,this.elapsed=this.current-this.start,this.trigger("tick"),window.requestAnimationFrame(()=>{this.tick()})}}class X{constructor(){this.experience=new l,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.site=this.experience.site,this.scrollY=window.scrollY,window.addEventListener("beforeunload",()=>{sessionStorage.setItem("scrollPosition",this.scrollY)}),window.addEventListener("load",()=>{this.scrollPosition=sessionStorage.getItem("scrollPosition"),this.scrollPosition&&(this.scrollY=0,sessionStorage.removeItem("scrollPosition"),setTimeout(()=>{window.scrollTo(0,0)},100))}),window.addEventListener("scroll",()=>{this.scrollY=window.scrollY}),this.cursor={},this.cursor.x=0,this.cursor.y=0,window.addEventListener("mousemove",t=>{this.cursor.x=t.clientX/this.sizes.width-.5,this.cursor.y=t.clientY/this.sizes.height-.5}),this.setIntance()}setIntance(){this.cameraGroup=new k,this.scene.add(this.cameraGroup),this.instance=new z(35,this.sizes.width/this.sizes.height,.1,100),this.instance.position.x=1,this.instance.position.z=9,this.cameraGroup.add(this.instance)}resize(){this.instance.aspect=this.sizes.width/this.sizes.height,this.instance.updateProjectionMatrix()}update(){this.instance.position.y=-this.scrollY/this.sizes.height*this.site.objectDistance}}class K{constructor(){this.experience=new l,this.canvas=this.experience.canvas,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.camera=this.experience.camera,this.setInstance()}setInstance(){this.instance=new M({canvas:this.canvas,antialias:!0,alpha:!0}),this.instance.toneMapping=A,this.instance.toneMappingExposure=1.5,this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio)}resize(){this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio)}update(){this.instance.render(this.scene,this.camera.instance)}}function w(){return w=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(n[s]=e[s])}return n},w.apply(this,arguments)}var J={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(n){},onComplete:function(n){},preStringTyped:function(n,t){},onStringTyped:function(n,t){},onLastStringBackspaced:function(n){},onTypingPaused:function(n,t){},onTypingResumed:function(n,t){},onReset:function(n){},onStop:function(n,t){},onStart:function(n,t){},onDestroy:function(n){}},Q=new(function(){function n(){}var t=n.prototype;return t.load=function(e,s,i){if(e.el=typeof i=="string"?document.querySelector(i):i,e.options=w({},J,s),e.isInput=e.el.tagName.toLowerCase()==="input",e.attr=e.options.attr,e.bindInputFocusEvents=e.options.bindInputFocusEvents,e.showCursor=!e.isInput&&e.options.showCursor,e.cursorChar=e.options.cursorChar,e.cursorBlinking=!0,e.elContent=e.attr?e.el.getAttribute(e.attr):e.el.textContent,e.contentType=e.options.contentType,e.typeSpeed=e.options.typeSpeed,e.startDelay=e.options.startDelay,e.backSpeed=e.options.backSpeed,e.smartBackspace=e.options.smartBackspace,e.backDelay=e.options.backDelay,e.fadeOut=e.options.fadeOut,e.fadeOutClass=e.options.fadeOutClass,e.fadeOutDelay=e.options.fadeOutDelay,e.isPaused=!1,e.strings=e.options.strings.map(function(u){return u.trim()}),e.stringsElement=typeof e.options.stringsElement=="string"?document.querySelector(e.options.stringsElement):e.options.stringsElement,e.stringsElement){e.strings=[],e.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var a=Array.prototype.slice.apply(e.stringsElement.children),r=a.length;if(r)for(var o=0;o<r;o+=1)e.strings.push(a[o].innerHTML.trim())}for(var c in e.strPos=0,e.currentElContent=this.getCurrentElContent(e),e.currentElContent&&e.currentElContent.length>0&&(e.strPos=e.currentElContent.length-1,e.strings.unshift(e.currentElContent)),e.sequence=[],e.strings)e.sequence[c]=c;e.arrayPos=0,e.stopNum=0,e.loop=e.options.loop,e.loopCount=e.options.loopCount,e.curLoop=0,e.shuffle=e.options.shuffle,e.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},e.typingComplete=!1,e.autoInsertCss=e.options.autoInsertCss,e.autoInsertCss&&(this.appendCursorAnimationCss(e),this.appendFadeOutAnimationCss(e))},t.getCurrentElContent=function(e){return e.attr?e.el.getAttribute(e.attr):e.isInput?e.el.value:e.contentType==="html"?e.el.innerHTML:e.el.textContent},t.appendCursorAnimationCss=function(e){var s="data-typed-js-cursor-css";if(e.showCursor&&!document.querySelector("["+s+"]")){var i=document.createElement("style");i.setAttribute(s,"true"),i.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(i)}},t.appendFadeOutAnimationCss=function(e){var s="data-typed-fadeout-js-css";if(e.fadeOut&&!document.querySelector("["+s+"]")){var i=document.createElement("style");i.setAttribute(s,"true"),i.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(i)}},n}()),S=new(function(){function n(){}var t=n.prototype;return t.typeHtmlChars=function(e,s,i){if(i.contentType!=="html")return s;var a=e.substring(s).charAt(0);if(a==="<"||a==="&"){var r;for(r=a==="<"?">":";";e.substring(s+1).charAt(0)!==r&&!(1+ ++s>e.length););s++}return s},t.backSpaceHtmlChars=function(e,s,i){if(i.contentType!=="html")return s;var a=e.substring(s).charAt(0);if(a===">"||a===";"){var r;for(r=a===">"?"<":"&";e.substring(s-1).charAt(0)!==r&&!(--s<0););s--}return s},n}()),E=function(){function n(e,s){Q.load(this,s,e),this.begin()}var t=n.prototype;return t.toggle=function(){this.pause.status?this.start():this.stop()},t.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},t.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},t.destroy=function(){this.reset(!1),this.options.onDestroy(this)},t.reset=function(e){e===void 0&&(e=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,e&&(this.insertCursor(),this.options.onReset(this),this.begin())},t.begin=function(){var e=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){e.strPos===0?e.typewrite(e.strings[e.sequence[e.arrayPos]],e.strPos):e.backspace(e.strings[e.sequence[e.arrayPos]],e.strPos)},this.startDelay)},t.typewrite=function(e,s){var i=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var a=this.humanizer(this.typeSpeed),r=1;this.pause.status!==!0?this.timeout=setTimeout(function(){s=S.typeHtmlChars(e,s,i);var o=0,c=e.substring(s);if(c.charAt(0)==="^"&&/^\^\d+/.test(c)){var u=1;u+=(c=/\d+/.exec(c)[0]).length,o=parseInt(c),i.temporaryPause=!0,i.options.onTypingPaused(i.arrayPos,i),e=e.substring(0,s)+e.substring(s+u),i.toggleBlinking(!0)}if(c.charAt(0)==="`"){for(;e.substring(s+r).charAt(0)!=="`"&&(r++,!(s+r>e.length)););var d=e.substring(0,s),g=e.substring(d.length+1,s+r),f=e.substring(s+r+1);e=d+g+f,r--}i.timeout=setTimeout(function(){i.toggleBlinking(!1),s>=e.length?i.doneTyping(e,s):i.keepTyping(e,s,r),i.temporaryPause&&(i.temporaryPause=!1,i.options.onTypingResumed(i.arrayPos,i))},o)},a):this.setPauseStatus(e,s,!0)},t.keepTyping=function(e,s,i){s===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var a=e.substring(0,s+=i);this.replaceText(a),this.typewrite(e,s)},t.doneTyping=function(e,s){var i=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){i.backspace(e,s)},this.backDelay))},t.backspace=function(e,s){var i=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var a=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){s=S.backSpaceHtmlChars(e,s,i);var r=e.substring(0,s);if(i.replaceText(r),i.smartBackspace){var o=i.strings[i.arrayPos+1];i.stopNum=o&&r===o.substring(0,s)?s:0}s>i.stopNum?(s--,i.backspace(e,s)):s<=i.stopNum&&(i.arrayPos++,i.arrayPos===i.strings.length?(i.arrayPos=0,i.options.onLastStringBackspaced(),i.shuffleStringsIfNeeded(),i.begin()):i.typewrite(i.strings[i.sequence[i.arrayPos]],s))},a)}else this.setPauseStatus(e,s,!1)},t.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},t.setPauseStatus=function(e,s,i){this.pause.typewrite=i,this.pause.curString=e,this.pause.curStrPos=s},t.toggleBlinking=function(e){this.cursor&&(this.pause.status||this.cursorBlinking!==e&&(this.cursorBlinking=e,e?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},t.humanizer=function(e){return Math.round(Math.random()*e/2)+e},t.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},t.initFadeOut=function(){var e=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){e.arrayPos++,e.replaceText(""),e.strings.length>e.arrayPos?e.typewrite(e.strings[e.sequence[e.arrayPos]],0):(e.typewrite(e.strings[0],0),e.arrayPos=0)},this.fadeOutDelay)},t.replaceText=function(e){this.attr?this.el.setAttribute(this.attr,e):this.isInput?this.el.value=e:this.contentType==="html"?this.el.innerHTML=e:this.el.textContent=e},t.bindFocusEvents=function(){var e=this;this.isInput&&(this.el.addEventListener("focus",function(s){e.stop()}),this.el.addEventListener("blur",function(s){e.el.value&&e.el.value.length!==0||e.start()}))},t.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},n}();class Z{constructor(){this.experience=new l,this.scene=this.experience.scene,this.resources=this.experience.resources,this.setLight()}setLight(){this.directionalLight=new I("#ffffff",3),this.directionalLight.position.set(1,1,1),this.scene.add(this.directionalLight)}}var ee=`uniform vec2 uResolution;
uniform sampler2D uTexture;
uniform sampler2D uDisplacementTexture;

attribute float aIntensity;
attribute float aAngle;

varying vec3 vColor;

void main()
{
    
    vec3 newPosition = position;
    float displacementIntensity = texture(uDisplacementTexture, uv).r;
    displacementIntensity = smoothstep(0.1, 0.3, displacementIntensity);

    vec3 displacement = vec3(
        cos(aAngle) * 0.2,
        sin(aAngle) * 0.2,
        1.0
    );
    displacement = normalize(displacement);
    displacement *= displacementIntensity;
    displacement *= 4.0;
    displacement *= aIntensity;

    newPosition += displacement;

    
    vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;

    
    float pictureIntensity = texture(uTexture, uv).r;

    
    gl_PointSize = 0.1  * pictureIntensity * uResolution.y;
    gl_PointSize *= (1.0 / - viewPosition.z);

    
    vColor = vec3(pow(pictureIntensity, 2.0));
}`,te=`varying vec3 vColor;

void main()
{
    vec2 uv = gl_PointCoord;
    float distanceToCenter = length(uv - vec2(0.5));

    if(distanceToCenter > 0.5)
        discard;

    gl_FragColor = vec4(vColor, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}`;class se{constructor(){this.experience=new l,this.sizes=this.experience.sizes,this.camera=this.experience.camera,this.scene=this.experience.scene,this.resources=this.experience.resources,this.time=this.experience.time,this.site=this.experience.site,this.setTexture(),this.setPlane()}setTexture(){this.texture=this.resources.items.imageNef,this.texture2=this.resources.items.imageGlow}setPlane(){this.displacement={},this.displacement.canvas=document.createElement("canvas"),this.displacement.canvas.width=128,this.displacement.canvas.height=128,this.displacement.canvas.style.position="fixed",this.displacement.canvas.style.width="200px",this.displacement.canvas.style.height="200px",this.displacement.canvas.style.top=0,this.displacement.canvas.style.left=0,this.displacement.canvas.style.zIndex=15,this.displacement.context=this.displacement.canvas.getContext("2d"),this.displacement.context.fillRect(0,0,this.displacement.canvas.width,this.displacement.canvas.height),this.displacement.glowImage=new Image,this.displacement.glowImage.src="./images/glow.png",this.displacement.interactivePlane=new L(new y(6,4),new D({color:"red"})),this.displacement.interactivePlane.position.y=-this.site.objectDistance+4,this.displacement.interactivePlane.position.x=4,this.displacement.interactivePlane.visible=!1,this.scene.add(this.displacement.interactivePlane),this.displacement.raycaster=new O,this.displacement.screenCursor=new p(9999,9999),this.displacement.canvasCursor=new p(9999,9999),this.displacement.canvasCursorPrevious=new p(9999,9999),window.addEventListener("pointermove",t=>{this.displacement.screenCursor.x=t.clientX/this.sizes.width*2-1,this.displacement.screenCursor.y=-(t.clientY/this.sizes.height)*2+1}),this.displacement.texture=new B(this.displacement.canvas),this.particlesGeometry=new y(6,4,150,150),this.particlesGeometry.setIndex(null),this.particlesGeometry.deleteAttribute("normal"),this.intensitiesArray=new Float32Array(this.particlesGeometry.attributes.position.count),this.anglesArray=new Float32Array(this.particlesGeometry.attributes.position.count);for(let t=0;t<this.particlesGeometry.attributes.position.count;t++)this.intensitiesArray[t]=Math.random(),this.anglesArray[t]=Math.random()*Math.PI;this.particlesGeometry.setAttribute("aIntensity",new C(this.intensitiesArray,1)),this.particlesGeometry.setAttribute("aAngle",new C(this.anglesArray,1)),this.particlesMaterial=new b({vertexShader:ee,fragmentShader:te,uniforms:{uResolution:new m(new p(this.sizes.width*this.sizes.pixelRatio,this.sizes.height*this.sizes.pixelRatio)),uTexture:new m(this.texture),uDisplacementTexture:new m(this.displacement.texture)}}),this.particles=new R(this.particlesGeometry,this.particlesMaterial),this.particles.position.y=-this.site.objectDistance+4,this.particles.position.x=4,this.scene.add(this.particles)}update(){this.displacement.raycaster.setFromCamera(this.displacement.screenCursor,this.camera.instance);const t=this.displacement.raycaster.intersectObject(this.displacement.interactivePlane);if(t.length){const a=t[0].uv;this.displacement.canvasCursor.x=a.x*this.displacement.canvas.width,this.displacement.canvasCursor.y=(1-a.y)*this.displacement.canvas.height}this.displacement.context.globalCompositeOperation="source-over",this.displacement.context.globalAlpha=.02,this.displacement.context.fillRect(0,0,this.displacement.canvas.width,this.displacement.canvas.height);const e=this.displacement.canvasCursorPrevious.distanceTo(this.displacement.canvasCursor);this.displacement.canvasCursorPrevious.copy(this.displacement.canvasCursor);const s=Math.min(e*.1,1),i=this.displacement.canvas.width*.2;this.displacement.context.globalCompositeOperation="lighten",this.displacement.context.globalAlpha=s,this.displacement.context.drawImage(this.displacement.glowImage,this.displacement.canvasCursor.x-i*.5,this.displacement.canvasCursor.y-i*.5,i,i),this.displacement.texture.needsUpdate=!0}}var ie=`uniform float uTime;

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

    
    float glitchTime = uTime - modelPosition.y;\r
    float glitchStrength = \r
        sin(glitchTime) + sin(glitchTime * 4.4) + sin(glitchTime * 4.52);\r
    glitchStrength /= 3.0;\r
    glitchStrength = smoothstep(0.3, 1.0, glitchStrength);\r
    glitchStrength *= 4.0;\r
    modelPosition.x += (random2D(modelPosition.xz + uTime) - 0.5) * glitchStrength;\r
    modelPosition.z += (random2D(modelPosition.zx + uTime) - 0.5) * glitchStrength;\r

    
    vec4 modelNormal = modelMatrix * vec4(normal, 0.0);

    
    vPosition = modelPosition.xyz;\r
    vNormal = modelNormal.xyz;\r
}`,ne=`uniform float uTime;\r
uniform vec3 uColor;

varying vec3 vPosition;\r
varying vec3 vNormal;

void main()\r
{\r
    
    vec3 normal = normalize(vNormal);\r
    if(!gl_FrontFacing)\r
        normal *= - 1.0;

    
    float stripes = mod((vPosition.y - uTime * 0.03) * 40.0, 1.5);\r
    stripes = pow(stripes, 3.0);

    
    vec3 viewDirection = normalize(vPosition - cameraPosition);\r
    float fresnel = dot(viewDirection, normal) + 1.0;\r
    fresnel = pow(fresnel, 3.2);

    
    float fallof = smoothstep(0.8, 0.0, fresnel);

    
    float holographic = stripes * fresnel;\r
    holographic += fresnel * 2.55;\r
    holographic *= fallof;

    
    gl_FragColor = vec4(uColor, holographic);\r
    #include <tonemapping_fragment>\r
    #include <colorspace_fragment>\r
}`;class re{constructor(){this.experience=new l,this.scene=this.experience.scene,this.resources=this.experience.resources,this.time=this.experience.time,this.site=this.experience.site,this.debug=this.experience.debug,this.resource=this.resources.items.modelCircuit,this.setModel()}setModel(){this.materialParameters={},this.materialParameters.color="#e1ff00",this.materialCircuit=new b({vertexShader:ie,fragmentShader:ne,uniforms:{uTime:new m(0),uColor:new m(new N(this.materialParameters.color))},transparent:!0,side:q,depthWrite:!1,blending:j}),this.materialComponent=new h({color:"#ff0000",metalness:1,roughness:.4}),this.materialBaseElectronic=new h({color:"#ffffff",metalness:1,roughness:0}),this.materialScrews=new h({color:"#e1ff00",metalness:1,roughness:0}),this.materialSuport=new h({color:"#ffffff",metalness:1,roughness:0}),this.materialWire=new h({color:"#ffffff",metalness:0,roughness:1}),this.model=this.resource.scene,this.model.scale.set(2,2,2),this.model.position.set(.5,-this.site.objectDistance*1.1,2),this.model.rotation.x=.3,this.scene.add(this.model),this.model.traverse(t=>{t.name==="Component"?t.material=this.materialComponent:t.name==="Electronic"?t.material=this.materialCircuit:t.name==="Base-Electronic"?t.material=this.materialBaseElectronic:t.name==="Screws002"?t.material=this.materialScrews:t.name==="Support"?t.material=this.materialSuport:t.name==="Wire"&&(t.material=this.materialWire)})}update(){this.elapsed=this.time.elapsed*.005,this.materialCircuit.uniforms.uTime.value+=this.time.delta*.005,this.model.rotation.y=Math.cos(this.elapsed*.05)}}class ae{constructor(){this.experience=new l,this.scene=this.experience.scene,this.resources=this.experience.resources,this.time=this.experience.time,this.site=this.experience.site,this.debug=this.experience.debug,this.resource=this.resources.items.modelAbstract,this.setModel(),this.setAnimation()}setModel(){this.materialParameters={},this.materialParameters.color="#ffffff",this.materialParameters.emissive="#000000",this.materialParameters.color2="#00eeff",this.materialParameters.emissive2="#000000",this.materialParameters.color3="#fa00cc",this.materialParameters.emissive3="#000000",this.materialSphere=new h({color:this.materialParameters.color,emissive:this.materialParameters.emissive,metalness:1,roughness:.451,ior:1.725,opacity:1,iridescence:0,iridescenceIOR:0,wireframe:!1}),this.materialEffect=new h({color:this.materialParameters.color2,emissive:this.materialParameters.emissive2,metalness:1,roughness:.235,ior:1.4,opacity:1,iridescence:.57,iridescenceIOR:1.05,wireframe:!1}),this.materialEffect2=new h({color:this.materialParameters.color3,emissive:this.materialParameters.emissive3,metalness:1,roughness:.235,ior:1.3,opacity:1,iridescence:.5,iridescenceIOR:1.5,wireframe:!1}),this.model=this.resource.scene,this.model.scale.set(1.2,1.2,1.2),this.model.position.set(3,-this.site.objectDistance*3,2),this.scene.add(this.model),this.model.traverse(t=>{t.name==="Sphere"?t.material=this.materialSphere:t.name==="Effect"?t.material=this.materialEffect:t.name==="Effect002"&&(t.material=this.materialEffect2)})}setAnimation(){this.animations={},this.animations.mixer=new F(this.model),this.animations.effect=this.animations.mixer.clipAction(this.resource.animations[0]),this.animations.effect.play(),this.animations.effect2=this.animations.mixer.clipAction(this.resource.animations[1]),this.animations.effect2.play()}update(){this.animations.mixer.update(this.time.delta*.001)}}class oe{constructor(){this.experience=new l,this.scene=this.experience.scene,this.resources=this.experience.resources,this.resources.on("ready",()=>{this.welcome=new se,this.circuit=new re,this.hobbies=new ae,this.environment=new Z}),this.objectDistance=4,this.setLetter()}update(){this.welcome&&this.welcome.update(),this.circuit&&this.circuit.update(),this.hobbies&&this.hobbies.update()}setLetter(){new E(".animate-welcome",{strings:["WELCOME","BIENVENIDO","BIENVENUE","WILLKOMMEN"],typeSpeed:200,backSpeed:250,backDelay:500,pauseFor:1e3,loop:!0,showCursor:!1}),document.addEventListener("DOMContentLoaded",e=>{const s=document.querySelectorAll(".circle"),i=r=>{let o=0;const c=parseInt(r.getAttribute("data-degree")),u=r.getAttribute("data-color"),d=r.querySelector(".number"),g=d.textContent.trim()==="B1",f=setInterval(()=>{if(o+=1,o>c){clearInterval(f);return}r.style.background=`conic-gradient(
                        ${u} ${o}%,
                        rgba(255, 255, 255, 0.2) ${o}%
                    )`,g||(d.innerHTML=o+"<span>%</span>",d.style.color=u)},50)},a=new IntersectionObserver(r=>{r.forEach(o=>{o.isIntersecting&&(i(o.target),a.unobserve(o.target))})});s.forEach(r=>{a.observe(r)})});const t="ABCDEFGHIJKLMNOPQRSTUVWXYZ";document.querySelectorAll("h2[data-value]").forEach(e=>{e.onmouseover=s=>{let i=0;const a=s.target.dataset.value,r=setInterval(()=>{s.target.innerText=a.split("").map((o,c)=>c<i?a[c]:t[Math.floor(Math.random()*26)]).join(""),i>=a.length&&clearInterval(r),i+=1/3},100)}}),new E(".animate-thanks",{strings:["LET'S TALK","HABLEMOS","PARLONS","LASS UNS REDEN"],typeSpeed:200,backSpeed:250,backDelay:500,pauseFor:1e3,loop:!0,showCursor:!1})}}const T=[{name:"imageNef",type:"textureLoader",path:"/images/Nef1.jpg"},{name:"imageGlow",type:"textureLoader",path:"/images/glow.png"},{name:"modelCircuit",type:"gltfModel",path:"/models/circuit.glb"},{name:"modelAbstract",type:"gltfModel",path:"/models/abstract.glb"}];class ce extends x{constructor(t){super(),this.experience=new l,this.sources=T,this.items={},this.toLoad=this.sources.length,this.loaded=0,this.setLoaders(),this.setStartLoading()}setLoaders(){this.loadingBarElement=document.querySelector(".loading-bar"),this.webglElement=document.querySelector(".webgl"),this.navElement=document.querySelector(".navbar"),this.welcomeElement=document.querySelector(".welcome"),this.educationElement=document.querySelector(".education"),this.skillElement=document.querySelector(".skills"),this.hobbiesElement=document.querySelector(".hobbies"),this.thanksElement=document.querySelector(".thanks"),this.navElement.classList.add("hidden"),this.welcomeElement.classList.add("hidden"),this.educationElement.classList.add("hidden"),this.skillElement.classList.add("hidden"),this.hobbiesElement.classList.add("hidden"),this.thanksElement.classList.add("hidden"),this.loadingManager=new G(()=>{P.delayedCall(1,()=>{P.to(this.experience.overlayMaterial.uniforms.uAlpha,{duration:3,value:0,delay:1,onUpdate:()=>{this.navElement.classList.remove("hidden"),this.welcomeElement.classList.remove("hidden"),this.educationElement.classList.remove("hidden"),this.skillElement.classList.remove("hidden"),this.hobbiesElement.classList.remove("hidden"),this.thanksElement.classList.remove("hidden")}}),this.loadingBarElement.classList.add("ended"),this.loadingBarElement.style.transform="",this.webglElement.style.zIndex="0"})},(t,e,s)=>{this.progressRatio=e/s,this.loadingBarElement.style.transform=`scaleX(${this.progressRatio})`}),this.loaders={},this.loaders.textureLoader=new _(this.loadingManager),this.loaders.dracoLoader=new W(this.loadingManager),this.loaders.dracoLoader.setDecoderPath("/draco/"),this.loaders.gltfLoader=new Y(this.loadingManager),this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader)}setStartLoading(){for(const t of this.sources)t.type==="rgbeLoader"||(t.type==="gltfModel"?this.loaders.gltfLoader.load(t.path,e=>{this.sourceLoad(t,e)},void 0,e=>{console.error("Error loading GLTF model:",e)}):t.type==="textureLoader"&&this.loaders.textureLoader.load(t.path,e=>{this.sourceLoad(t,e)},void 0,e=>{console.error("Error loading texture:",e)}))}sourceLoad(t,e){this.items[t.name]=e,this.loaded++,this.loaded===this.toLoad&&this.trigger("ready")}}class le{constructor(){this.experience=new l,this.ui=new U({width:300}),this.ui.domElement.style.display="none"}}let v=null;class l{constructor(t){if(v)return v;v=this,this.canvas=t,this.debug=new le,this.sizes=new $,this.time=new V,this.scene=new H,this.resources=new ce(T),this.site=new oe,this.camera=new X,this.renderer=new K,this.sizes.on("resize",()=>{this.resize()}),this.time.on("tick",()=>{this.update()}),this.setLoading()}resize(){this.camera.resize(),this.renderer.resize(),this.site.welcome&&this.site.welcome.particlesMaterial&&this.site.welcome.particlesMaterial.uniforms.uResolution.value.set(this.sizes.width*this.sizes.pixelRatio,this.sizes.height*this.sizes.pixelRatio)}update(){this.camera.update(),this.renderer.update(),this.site.update()}setLoading(){this.overlayGeometry=new y(30,30,1,1),this.overlayMaterial=new b({transparent:!0,uniforms:{uAlpha:{value:1}},vertexShader:`
                void main()
                {
                    gl_Position = vec4(position, 1.0);
                }
            `,fragmentShader:`
                uniform float uAlpha;

                void main()
                {
                    gl_FragColor = vec4(0.0, 0.0, 0.0, uAlpha);
                }
            `,wireframe:!1}),this.overlay=new L(this.overlayGeometry,this.overlayMaterial),this.overlay.position.z=4,this.scene.add(this.overlay)}}new l(document.querySelector("canvas.webgl"));
//# sourceMappingURL=about-D3Rzk9Fa.js.map
