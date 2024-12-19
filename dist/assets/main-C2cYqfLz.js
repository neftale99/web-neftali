import{E as Le,G as at,P as st,W as ct,A as lt,a as ut,D as ft,H as ye,F as Ae,b as xe,L as ht,c as Oe,d as dt,g as ke,T as pt,e as mt,M as gt,f as vt,U as q,C as ce,h as ve,i as Be,R as je,I as yt,j as Je,S as Fe,k as Qe,l as Ne,m as xt,n as wt,o as _t,p as bt,q as Mt}from"./index-CLn_N3Cb.js";import{D as St,G as Et,a as At,m as It}from"./lil-gui.esm-BWSOvBbT.js";class Ct extends Le{constructor(){super(),this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),window.addEventListener("resize",()=>{this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.trigger("resize")})}}class Pt extends Le{constructor(){super(),this.start=Date.now(),this.current=this.start,this.elpased=0,this.delta=16,window.requestAnimationFrame(()=>{this.tick()})}tick(){const o=Date.now();this.delta=o-this.current,this.current=o,this.elapsed=this.current-this.start,this.trigger("tick"),window.requestAnimationFrame(()=>{this.tick()})}}class Tt{constructor(){this.experience=new se,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.time=this.experience.time,this.site=this.experience.site;let o=window.scrollY;window.addEventListener("beforeunload",()=>{sessionStorage.setItem("scrollPosition",o)}),window.addEventListener("load",()=>{this.scrollPosition=sessionStorage.getItem("scrollPosition"),this.scrollPosition&&(o=0,window.scrollTo(0,0),sessionStorage.removeItem("scrollPosition"))}),window.addEventListener("scroll",()=>{o=window.scrollY}),this.cursor={},this.cursor.x=0,this.cursor.y=0,window.addEventListener("mousemove",f=>{this.cursor.x=f.clientX/this.sizes.width-.5,this.cursor.y=f.clientY/this.sizes.height-.5}),this.setInstance()}setInstance(){this.instanceGroup=new at,this.scene.add(this.instanceGroup),this.instance=new st(35,this.sizes.width/this.sizes.height,.1,100),this.instance.position.z=15,this.instanceGroup.add(this.instance)}resize(){this.instance.aspect=this.sizes.width/this.sizes.height,this.instance.updateProjectionMatrix()}update(){this.instance.position.y=-scrollY/this.sizes.height*this.site.objectDistance,this.parallaxX=this.cursor.x*.5,this.parallaxY=-this.cursor.y*.5,this.instanceGroup.position.x+=(this.parallaxX-this.instanceGroup.position.x)*5*this.time.delta*.005,this.instanceGroup.position.y+=(this.parallaxY-this.instanceGroup.position.y)*5*this.time.delta*.005}}class Dt{constructor(){this.experience=new se,this.canvas=this.experience.canvas,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.camera=this.experience.camera,this.setInstance()}setInstance(){this.instance=new ct({canvas:this.canvas,alpha:!0,antialias:!0}),this.instance.toneMapping=lt,this.instance.toneMappingExposure=1,this.instance.shadowMap.enabled=!0,this.instance.shadowMap.type=ut,this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio)}resize(){this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio)}update(){this.instance.render(this.scene,this.camera.instance)}}class Lt extends ft{constructor(o){super(o),this.type=ye}parse(o){const v=function(t,r){switch(t){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(r||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(r||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(r||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(r||""))}},A=`
`,G=function(t,r,n){r=r||1024;let u=t.pos,D=-1,E=0,L="",b=String.fromCharCode.apply(null,new Uint16Array(t.subarray(u,u+128)));for(;0>(D=b.indexOf(A))&&E<r&&u<t.byteLength;)L+=b,E+=b.length,u+=128,b+=String.fromCharCode.apply(null,new Uint16Array(t.subarray(u,u+128)));return-1<D?(t.pos+=E+D+1,L+b.slice(0,D)):!1},U=function(t){const r=/^#\?(\S+)/,n=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,c=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,u=/^\s*FORMAT=(\S+)\s*$/,D=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,E={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let L,b;for((t.pos>=t.byteLength||!(L=G(t)))&&v(1,"no header found"),(b=L.match(r))||v(3,"bad initial token"),E.valid|=1,E.programtype=b[1],E.string+=L+`
`;L=G(t),L!==!1;){if(E.string+=L+`
`,L.charAt(0)==="#"){E.comments+=L+`
`;continue}if((b=L.match(n))&&(E.gamma=parseFloat(b[1])),(b=L.match(c))&&(E.exposure=parseFloat(b[1])),(b=L.match(u))&&(E.valid|=2,E.format=b[1]),(b=L.match(D))&&(E.valid|=4,E.height=parseInt(b[1],10),E.width=parseInt(b[2],10)),E.valid&2&&E.valid&4)break}return E.valid&2||v(3,"missing format specifier"),E.valid&4||v(3,"missing image size specifier"),E},j=function(t,r,n){const c=r;if(c<8||c>32767||t[0]!==2||t[1]!==2||t[2]&128)return new Uint8Array(t);c!==(t[2]<<8|t[3])&&v(3,"wrong scanline width");const u=new Uint8Array(4*r*n);u.length||v(4,"unable to allocate buffer space");let D=0,E=0;const L=4*c,b=new Uint8Array(4),z=new Uint8Array(L);let W=n;for(;W>0&&E<t.byteLength;){E+4>t.byteLength&&v(1),b[0]=t[E++],b[1]=t[E++],b[2]=t[E++],b[3]=t[E++],(b[0]!=2||b[1]!=2||(b[2]<<8|b[3])!=c)&&v(3,"bad rgbe scanline format");let Y=0,N;for(;Y<L&&E<t.byteLength;){N=t[E++];const re=N>128;if(re&&(N-=128),(N===0||Y+N>L)&&v(3,"bad scanline data"),re){const J=t[E++];for(let pe=0;pe<N;pe++)z[Y++]=J}else z.set(t.subarray(E,E+N),Y),Y+=N,E+=N}const ie=c;for(let re=0;re<ie;re++){let J=0;u[D]=z[re+J],J+=c,u[D+1]=z[re+J],J+=c,u[D+2]=z[re+J],J+=c,u[D+3]=z[re+J],D+=4}W--}return u},y=function(t,r,n,c){const u=t[r+3],D=Math.pow(2,u-128)/255;n[c+0]=t[r+0]*D,n[c+1]=t[r+1]*D,n[c+2]=t[r+2]*D,n[c+3]=1},T=function(t,r,n,c){const u=t[r+3],D=Math.pow(2,u-128)/255;n[c+0]=xe.toHalfFloat(Math.min(t[r+0]*D,65504)),n[c+1]=xe.toHalfFloat(Math.min(t[r+1]*D,65504)),n[c+2]=xe.toHalfFloat(Math.min(t[r+2]*D,65504)),n[c+3]=xe.toHalfFloat(1)},p=new Uint8Array(o);p.pos=0;const x=U(p),I=x.width,M=x.height,S=j(p.subarray(p.pos),I,M);let F,l,m;switch(this.type){case Ae:m=S.length/4;const t=new Float32Array(m*4);for(let n=0;n<m;n++)y(S,n*4,t,n*4);F=t,l=Ae;break;case ye:m=S.length/4;const r=new Uint16Array(m*4);for(let n=0;n<m;n++)T(S,n*4,r,n*4);F=r,l=ye;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:I,height:M,data:F,header:x.string,gamma:x.gamma,exposure:x.exposure,type:l}}setDataType(o){return this.type=o,this}load(o,f,d,s){function g(v,O){switch(v.type){case Ae:case ye:v.colorSpace=ht,v.minFilter=Oe,v.magFilter=Oe,v.generateMipmaps=!1,v.flipY=!0;break}f&&f(v,O)}return super.load(o,g,d,s)}}const Bt=[{name:"environmentMap",type:"rgbeLoader",path:"/environmentMaps/overcast_soil_puresky_1k.hdr"},{name:"models",type:"gltfModel",path:"/models/models.glb"},{name:"modelGun",type:"gltfModel",path:"/models/gun.glb"},{name:"modelSpace",type:"gltfModel",path:"/models/spaceship.glb"},{name:"baked",type:"textureLoader",path:"/models/bake.jpg"},{name:"baked2",type:"textureLoader",path:"/models/bake2.jpg"}];class jt extends Le{constructor(o){super(),this.experience=new se,this.sources=o,this.items={},this.toLoad=this.sources.length,this.loaded=0,this.setLoader(),this.setStartLoading()}setLoader(){this.loadingBarElement=document.querySelector(".loading-bar"),this.webglElement=document.querySelector(".webgl"),this.navElement=document.querySelector(".navbar"),this.nameElement=document.querySelector(".name"),this.aboutElement=document.querySelector(".about"),this.labElement=document.querySelector(".shaderlab"),this.contactElement=document.querySelector(".contact"),this.navElement.classList.add("hidden"),this.nameElement.classList.add("hidden"),this.aboutElement.classList.add("hidden"),this.labElement.classList.add("hidden"),this.contactElement.classList.add("hidden"),this.loadingManager=new dt(()=>{ke.delayedCall(.5,()=>{ke.to(this.experience.overlayMaterial.uniforms.uAlpha,{duration:3,value:0,delay:1,onUpdate:()=>{this.navElement.classList.remove("hidden"),this.nameElement.classList.remove("hidden"),this.aboutElement.classList.remove("hidden"),this.labElement.classList.remove("hidden"),this.contactElement.classList.remove("hidden")}}),this.loadingBarElement.classList.add("ended"),this.loadingBarElement.style.transform="",this.webglElement.style.zIndex="0"})},(o,f,d)=>{this.progressRatio=f/d,this.loadingBarElement.style.transform=`scaleX(${this.progressRatio})`}),this.loaders={},this.loaders.rgbeLoader=new Lt(this.loadingManager),this.loaders.dracoLoader=new St(this.loadingManager),this.loaders.dracoLoader.setDecoderPath("/draco/"),this.loaders.gltfLoader=new Et(this.loadingManager),this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader),this.loaders.textureLoader=new pt(this.loadingManager)}setStartLoading(){for(const o of this.sources)o.type==="rgbeLoader"?this.loaders.rgbeLoader.load(o.path,f=>{this.sourceLoad(o,f)}):o.type==="gltfModel"?this.loaders.gltfLoader.load(o.path,f=>{this.sourceLoad(o,f)}):o.type==="textureLoader"&&this.loaders.textureLoader.load(o.path,f=>{this.sourceLoad(o,f)})}sourceLoad(o,f){this.items[o.name]=f,this.loaded++,this.loaded===this.toLoad&&this.trigger("ready"),o.name==="modelSpace"&&f.animations||o.name}}class Ft{constructor(){this.experience=new se,this.ui=new At({width:325}),this.ui.close(),this.ui.domElement.style.display="none"}}class zt{constructor(){this.experience=new se,this.scene=this.experience.scene,this.resources=this.experience.resources,this.setDirectionalLight()}setDirectionalLight(){this.directionalLight=new mt("#ffffff",3),this.directionalLight.position.set(0,4,1),this.directionalLight.castShadow=!0,this.directionalLight.shadow.mapSize.set(1024,1024),this.directionalLight.shadow.camera.far=15,this.directionalLight.shadow.normalBias=.05,this.scene.add(this.directionalLight)}}function Me(h){return h&&h.__esModule&&Object.prototype.hasOwnProperty.call(h,"default")?h.default:h}function we(h){throw new Error('Could not dynamically require "'+h+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var et={exports:{}};(function(h,o){(function(f){h.exports=f()})(function(){return function f(d,s,g){function v(B,A){if(!s[B]){if(!d[B]){var G=typeof we=="function"&&we;if(!A&&G)return G(B,!0);if(O)return O(B,!0);throw new Error("Cannot find module '"+B+"'")}A=s[B]={exports:{}},d[B][0].call(A.exports,function(U){var j=d[B][1][U];return v(j||U)},A,A.exports,f,d,s,g)}return s[B].exports}for(var O=typeof we=="function"&&we,R=0;R<g.length;R++)v(g[R]);return v}({1:[function(f,d,s){(function(g,v,O,R,B,A,G,U,j){var y=f("crypto");function T(l,m){m=I(l,m);var t;return(t=m.algorithm!=="passthrough"?y.createHash(m.algorithm):new F).write===void 0&&(t.write=t.update,t.end=t.update),S(m,t).dispatch(l),t.update||t.end(""),t.digest?t.digest(m.encoding==="buffer"?void 0:m.encoding):(l=t.read(),m.encoding!=="buffer"?l.toString(m.encoding):l)}(s=d.exports=T).sha1=function(l){return T(l)},s.keys=function(l){return T(l,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},s.MD5=function(l){return T(l,{algorithm:"md5",encoding:"hex"})},s.keysMD5=function(l){return T(l,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var p=y.getHashes?y.getHashes().slice():["sha1","md5"],x=(p.push("passthrough"),["buffer","hex","binary","base64"]);function I(l,m){var t={};if(t.algorithm=(m=m||{}).algorithm||"sha1",t.encoding=m.encoding||"hex",t.excludeValues=!!m.excludeValues,t.algorithm=t.algorithm.toLowerCase(),t.encoding=t.encoding.toLowerCase(),t.ignoreUnknown=m.ignoreUnknown===!0,t.respectType=m.respectType!==!1,t.respectFunctionNames=m.respectFunctionNames!==!1,t.respectFunctionProperties=m.respectFunctionProperties!==!1,t.unorderedArrays=m.unorderedArrays===!0,t.unorderedSets=m.unorderedSets!==!1,t.unorderedObjects=m.unorderedObjects!==!1,t.replacer=m.replacer||void 0,t.excludeKeys=m.excludeKeys||void 0,l===void 0)throw new Error("Object argument required.");for(var r=0;r<p.length;++r)p[r].toLowerCase()===t.algorithm.toLowerCase()&&(t.algorithm=p[r]);if(p.indexOf(t.algorithm)===-1)throw new Error('Algorithm "'+t.algorithm+'"  not supported. supported values: '+p.join(", "));if(x.indexOf(t.encoding)===-1&&t.algorithm!=="passthrough")throw new Error('Encoding "'+t.encoding+'"  not supported. supported values: '+x.join(", "));return t}function M(l){if(typeof l=="function")return/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(l))!=null}function S(l,m,t){t=t||[];function r(n){return m.update?m.update(n,"utf8"):m.write(n,"utf8")}return{dispatch:function(n){return this["_"+((n=l.replacer?l.replacer(n):n)===null?"null":typeof n)](n)},_object:function(n){var c,u=Object.prototype.toString.call(n),D=/\[object (.*)\]/i.exec(u);if(D=(D=D?D[1]:"unknown:["+u+"]").toLowerCase(),0<=(u=t.indexOf(n)))return this.dispatch("[CIRCULAR:"+u+"]");if(t.push(n),O!==void 0&&O.isBuffer&&O.isBuffer(n))return r("buffer:"),r(n);if(D==="object"||D==="function"||D==="asyncfunction")return u=Object.keys(n),l.unorderedObjects&&(u=u.sort()),l.respectType===!1||M(n)||u.splice(0,0,"prototype","__proto__","constructor"),l.excludeKeys&&(u=u.filter(function(E){return!l.excludeKeys(E)})),r("object:"+u.length+":"),c=this,u.forEach(function(E){c.dispatch(E),r(":"),l.excludeValues||c.dispatch(n[E]),r(",")});if(!this["_"+D]){if(l.ignoreUnknown)return r("["+D+"]");throw new Error('Unknown object type "'+D+'"')}this["_"+D](n)},_array:function(n,E){E=E!==void 0?E:l.unorderedArrays!==!1;var u=this;if(r("array:"+n.length+":"),!E||n.length<=1)return n.forEach(function(L){return u.dispatch(L)});var D=[],E=n.map(function(L){var b=new F,z=t.slice();return S(l,b,z).dispatch(L),D=D.concat(z.slice(t.length)),b.read().toString()});return t=t.concat(D),E.sort(),this._array(E,!1)},_date:function(n){return r("date:"+n.toJSON())},_symbol:function(n){return r("symbol:"+n.toString())},_error:function(n){return r("error:"+n.toString())},_boolean:function(n){return r("bool:"+n.toString())},_string:function(n){r("string:"+n.length+":"),r(n.toString())},_function:function(n){r("fn:"),M(n)?this.dispatch("[native]"):this.dispatch(n.toString()),l.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(n.name)),l.respectFunctionProperties&&this._object(n)},_number:function(n){return r("number:"+n.toString())},_xml:function(n){return r("xml:"+n.toString())},_null:function(){return r("Null")},_undefined:function(){return r("Undefined")},_regexp:function(n){return r("regex:"+n.toString())},_uint8array:function(n){return r("uint8array:"),this.dispatch(Array.prototype.slice.call(n))},_uint8clampedarray:function(n){return r("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(n))},_int8array:function(n){return r("int8array:"),this.dispatch(Array.prototype.slice.call(n))},_uint16array:function(n){return r("uint16array:"),this.dispatch(Array.prototype.slice.call(n))},_int16array:function(n){return r("int16array:"),this.dispatch(Array.prototype.slice.call(n))},_uint32array:function(n){return r("uint32array:"),this.dispatch(Array.prototype.slice.call(n))},_int32array:function(n){return r("int32array:"),this.dispatch(Array.prototype.slice.call(n))},_float32array:function(n){return r("float32array:"),this.dispatch(Array.prototype.slice.call(n))},_float64array:function(n){return r("float64array:"),this.dispatch(Array.prototype.slice.call(n))},_arraybuffer:function(n){return r("arraybuffer:"),this.dispatch(new Uint8Array(n))},_url:function(n){return r("url:"+n.toString())},_map:function(n){return r("map:"),n=Array.from(n),this._array(n,l.unorderedSets!==!1)},_set:function(n){return r("set:"),n=Array.from(n),this._array(n,l.unorderedSets!==!1)},_file:function(n){return r("file:"),this.dispatch([n.name,n.size,n.type,n.lastModfied])},_blob:function(){if(l.ignoreUnknown)return r("[blob]");throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow:function(){return r("domwindow")},_bigint:function(n){return r("bigint:"+n.toString())},_process:function(){return r("process")},_timer:function(){return r("timer")},_pipe:function(){return r("pipe")},_tcp:function(){return r("tcp")},_udp:function(){return r("udp")},_tty:function(){return r("tty")},_statwatcher:function(){return r("statwatcher")},_securecontext:function(){return r("securecontext")},_connection:function(){return r("connection")},_zlib:function(){return r("zlib")},_context:function(){return r("context")},_nodescript:function(){return r("nodescript")},_httpparser:function(){return r("httpparser")},_dataview:function(){return r("dataview")},_signal:function(){return r("signal")},_fsevent:function(){return r("fsevent")},_tlswrap:function(){return r("tlswrap")}}}function F(){return{buf:"",write:function(l){this.buf+=l},end:function(l){this.buf+=l},read:function(){return this.buf}}}s.writeToStream=function(l,m,t){return t===void 0&&(t=m,m={}),S(m=I(l,m),t).dispatch(l)}}).call(this,f("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},f("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9a5aa49d.js","/")},{buffer:3,crypto:5,lYpoI2:11}],2:[function(f,d,s){(function(g,v,O,R,B,A,G,U,j){(function(y){var T=typeof Uint8Array<"u"?Uint8Array:Array,p=43,x=47,I=48,M=97,S=65,F=45,l=95;function m(t){return t=t.charCodeAt(0),t===p||t===F?62:t===x||t===l?63:t<I?-1:t<I+10?t-I+26+26:t<S+26?t-S:t<M+26?t-M+26:void 0}y.toByteArray=function(t){var r,n;if(0<t.length%4)throw new Error("Invalid string. Length must be a multiple of 4");var c=t.length,c=t.charAt(c-2)==="="?2:t.charAt(c-1)==="="?1:0,u=new T(3*t.length/4-c),D=0<c?t.length-4:t.length,E=0;function L(b){u[E++]=b}for(r=0;r<D;r+=4,0)L((16711680&(n=m(t.charAt(r))<<18|m(t.charAt(r+1))<<12|m(t.charAt(r+2))<<6|m(t.charAt(r+3))))>>16),L((65280&n)>>8),L(255&n);return c==2?L(255&(n=m(t.charAt(r))<<2|m(t.charAt(r+1))>>4)):c==1&&(L((n=m(t.charAt(r))<<10|m(t.charAt(r+1))<<4|m(t.charAt(r+2))>>2)>>8&255),L(255&n)),u},y.fromByteArray=function(t){var r,n,c,u,D=t.length%3,E="";function L(b){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(b)}for(r=0,c=t.length-D;r<c;r+=3)n=(t[r]<<16)+(t[r+1]<<8)+t[r+2],E+=L((u=n)>>18&63)+L(u>>12&63)+L(u>>6&63)+L(63&u);switch(D){case 1:E=(E+=L((n=t[t.length-1])>>2))+L(n<<4&63)+"==";break;case 2:E=(E=(E+=L((n=(t[t.length-2]<<8)+t[t.length-1])>>10))+L(n>>4&63))+L(n<<2&63)+"="}return E}})(s===void 0?this.base64js={}:s)}).call(this,f("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},f("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:11}],3:[function(f,d,s){(function(g,v,p,R,B,A,G,U,j){var y=f("base64-js"),T=f("ieee754");function p(e,i,a){if(!(this instanceof p))return new p(e,i,a);var _,w,P,H,X=typeof e;if(i==="base64"&&X=="string")for(e=(H=e).trim?H.trim():H.replace(/^\s+|\s+$/g,"");e.length%4!=0;)e+="=";if(X=="number")_=W(e);else if(X=="string")_=p.byteLength(e,i);else{if(X!="object")throw new Error("First argument needs to be a number, array or string.");_=W(e.length)}if(p._useTypedArrays?w=p._augment(new Uint8Array(_)):((w=this).length=_,w._isBuffer=!0),p._useTypedArrays&&typeof e.byteLength=="number")w._set(e);else if(Y(H=e)||p.isBuffer(H)||H&&typeof H=="object"&&typeof H.length=="number")for(P=0;P<_;P++)p.isBuffer(e)?w[P]=e.readUInt8(P):w[P]=e[P];else if(X=="string")w.write(e,0,i);else if(X=="number"&&!p._useTypedArrays&&!a)for(P=0;P<_;P++)w[P]=0;return w}function x(e,i,a,_){return p._charsWritten=J(function(w){for(var P=[],H=0;H<w.length;H++)P.push(255&w.charCodeAt(H));return P}(i),e,a,_)}function I(e,i,a,_){return p._charsWritten=J(function(w){for(var P,H,X=[],Z=0;Z<w.length;Z++)H=w.charCodeAt(Z),P=H>>8,H=H%256,X.push(H),X.push(P);return X}(i),e,a,_)}function M(e,i,a){var _="";a=Math.min(e.length,a);for(var w=i;w<a;w++)_+=String.fromCharCode(e[w]);return _}function S(e,i,a,P){P||(C(typeof a=="boolean","missing or invalid endian"),C(i!=null,"missing offset"),C(i+1<e.length,"Trying to read beyond buffer length"));var w,P=e.length;if(!(P<=i))return a?(w=e[i],i+1<P&&(w|=e[i+1]<<8)):(w=e[i]<<8,i+1<P&&(w|=e[i+1])),w}function F(e,i,a,P){P||(C(typeof a=="boolean","missing or invalid endian"),C(i!=null,"missing offset"),C(i+3<e.length,"Trying to read beyond buffer length"));var w,P=e.length;if(!(P<=i))return a?(i+2<P&&(w=e[i+2]<<16),i+1<P&&(w|=e[i+1]<<8),w|=e[i],i+3<P&&(w+=e[i+3]<<24>>>0)):(i+1<P&&(w=e[i+1]<<16),i+2<P&&(w|=e[i+2]<<8),i+3<P&&(w|=e[i+3]),w+=e[i]<<24>>>0),w}function l(e,i,a,_){if(_||(C(typeof a=="boolean","missing or invalid endian"),C(i!=null,"missing offset"),C(i+1<e.length,"Trying to read beyond buffer length")),!(e.length<=i))return _=S(e,i,a,!0),32768&_?-1*(65535-_+1):_}function m(e,i,a,_){if(_||(C(typeof a=="boolean","missing or invalid endian"),C(i!=null,"missing offset"),C(i+3<e.length,"Trying to read beyond buffer length")),!(e.length<=i))return _=F(e,i,a,!0),2147483648&_?-1*(4294967295-_+1):_}function t(e,i,a,_){return _||(C(typeof a=="boolean","missing or invalid endian"),C(i+3<e.length,"Trying to read beyond buffer length")),T.read(e,i,a,23,4)}function r(e,i,a,_){return _||(C(typeof a=="boolean","missing or invalid endian"),C(i+7<e.length,"Trying to read beyond buffer length")),T.read(e,i,a,52,8)}function n(e,i,a,_,w){if(w||(C(i!=null,"missing value"),C(typeof _=="boolean","missing or invalid endian"),C(a!=null,"missing offset"),C(a+1<e.length,"trying to write beyond buffer length"),Se(i,65535)),w=e.length,!(w<=a))for(var P=0,H=Math.min(w-a,2);P<H;P++)e[a+P]=(i&255<<8*(_?P:1-P))>>>8*(_?P:1-P)}function c(e,i,a,_,w){if(w||(C(i!=null,"missing value"),C(typeof _=="boolean","missing or invalid endian"),C(a!=null,"missing offset"),C(a+3<e.length,"trying to write beyond buffer length"),Se(i,4294967295)),w=e.length,!(w<=a))for(var P=0,H=Math.min(w-a,4);P<H;P++)e[a+P]=i>>>8*(_?P:3-P)&255}function u(e,i,a,_,w){w||(C(i!=null,"missing value"),C(typeof _=="boolean","missing or invalid endian"),C(a!=null,"missing offset"),C(a+1<e.length,"Trying to write beyond buffer length"),Ee(i,32767,-32768)),e.length<=a||n(e,0<=i?i:65535+i+1,a,_,w)}function D(e,i,a,_,w){w||(C(i!=null,"missing value"),C(typeof _=="boolean","missing or invalid endian"),C(a!=null,"missing offset"),C(a+3<e.length,"Trying to write beyond buffer length"),Ee(i,2147483647,-2147483648)),e.length<=a||c(e,0<=i?i:4294967295+i+1,a,_,w)}function E(e,i,a,_,w){w||(C(i!=null,"missing value"),C(typeof _=="boolean","missing or invalid endian"),C(a!=null,"missing offset"),C(a+3<e.length,"Trying to write beyond buffer length"),ze(i,34028234663852886e22,-34028234663852886e22)),e.length<=a||T.write(e,i,a,_,23,4)}function L(e,i,a,_,w){w||(C(i!=null,"missing value"),C(typeof _=="boolean","missing or invalid endian"),C(a!=null,"missing offset"),C(a+7<e.length,"Trying to write beyond buffer length"),ze(i,17976931348623157e292,-17976931348623157e292)),e.length<=a||T.write(e,i,a,_,52,8)}s.Buffer=p,s.SlowBuffer=p,s.INSPECT_MAX_BYTES=50,p.poolSize=8192,p._useTypedArrays=function(){try{var e=new ArrayBuffer(0),i=new Uint8Array(e);return i.foo=function(){return 42},i.foo()===42&&typeof i.subarray=="function"}catch{return!1}}(),p.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},p.isBuffer=function(e){return!(e==null||!e._isBuffer)},p.byteLength=function(e,i){var a;switch(e+="",i||"utf8"){case"hex":a=e.length/2;break;case"utf8":case"utf-8":a=ie(e).length;break;case"ascii":case"binary":case"raw":a=e.length;break;case"base64":a=re(e).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":a=2*e.length;break;default:throw new Error("Unknown encoding")}return a},p.concat=function(e,i){if(C(Y(e),`Usage: Buffer.concat(list, [totalLength])
list should be an Array.`),e.length===0)return new p(0);if(e.length===1)return e[0];if(typeof i!="number")for(w=i=0;w<e.length;w++)i+=e[w].length;for(var a=new p(i),_=0,w=0;w<e.length;w++){var P=e[w];P.copy(a,_),_+=P.length}return a},p.prototype.write=function(e,i,a,_){isFinite(i)?isFinite(a)||(_=a,a=void 0):(Z=_,_=i,i=a,a=Z),i=Number(i)||0;var w,P,H,X,Z=this.length-i;switch((!a||Z<(a=Number(a)))&&(a=Z),_=String(_||"utf8").toLowerCase()){case"hex":w=function(oe,Q,ee,K){ee=Number(ee)||0;var $=oe.length-ee;(!K||$<(K=Number(K)))&&(K=$),C(($=Q.length)%2==0,"Invalid hex string"),$/2<K&&(K=$/2);for(var fe=0;fe<K;fe++){var Re=parseInt(Q.substr(2*fe,2),16);C(!isNaN(Re),"Invalid hex string"),oe[ee+fe]=Re}return p._charsWritten=2*fe,fe}(this,e,i,a);break;case"utf8":case"utf-8":P=this,H=i,X=a,w=p._charsWritten=J(ie(e),P,H,X);break;case"ascii":case"binary":w=x(this,e,i,a);break;case"base64":P=this,H=i,X=a,w=p._charsWritten=J(re(e),P,H,X);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":w=I(this,e,i,a);break;default:throw new Error("Unknown encoding")}return w},p.prototype.toString=function(e,i,a){var _,w,P,H,X=this;if(e=String(e||"utf8").toLowerCase(),i=Number(i)||0,(a=a!==void 0?Number(a):X.length)===i)return"";switch(e){case"hex":_=function(Z,oe,Q){var ee=Z.length;(!oe||oe<0)&&(oe=0),(!Q||Q<0||ee<Q)&&(Q=ee);for(var K="",$=oe;$<Q;$++)K+=N(Z[$]);return K}(X,i,a);break;case"utf8":case"utf-8":_=function(Z,oe,Q){var ee="",K="";Q=Math.min(Z.length,Q);for(var $=oe;$<Q;$++)Z[$]<=127?(ee+=pe(K)+String.fromCharCode(Z[$]),K=""):K+="%"+Z[$].toString(16);return ee+pe(K)}(X,i,a);break;case"ascii":case"binary":_=M(X,i,a);break;case"base64":w=X,H=a,_=(P=i)===0&&H===w.length?y.fromByteArray(w):y.fromByteArray(w.slice(P,H));break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":_=function(Z,oe,Q){for(var ee=Z.slice(oe,Q),K="",$=0;$<ee.length;$+=2)K+=String.fromCharCode(ee[$]+256*ee[$+1]);return K}(X,i,a);break;default:throw new Error("Unknown encoding")}return _},p.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},p.prototype.copy=function(e,i,a,_){if(i=i||0,(_=_||_===0?_:this.length)!==(a=a||0)&&e.length!==0&&this.length!==0){C(a<=_,"sourceEnd < sourceStart"),C(0<=i&&i<e.length,"targetStart out of bounds"),C(0<=a&&a<this.length,"sourceStart out of bounds"),C(0<=_&&_<=this.length,"sourceEnd out of bounds"),_>this.length&&(_=this.length);var w=(_=e.length-i<_-a?e.length-i+a:_)-a;if(w<100||!p._useTypedArrays)for(var P=0;P<w;P++)e[P+i]=this[P+a];else e._set(this.subarray(a,a+w),i)}},p.prototype.slice=function(e,i){var a=this.length;if(e=z(e,a,0),i=z(i,a,a),p._useTypedArrays)return p._augment(this.subarray(e,i));for(var _=i-e,w=new p(_,void 0,!0),P=0;P<_;P++)w[P]=this[P+e];return w},p.prototype.get=function(e){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(e)},p.prototype.set=function(e,i){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(e,i)},p.prototype.readUInt8=function(e,i){if(i||(C(e!=null,"missing offset"),C(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length))return this[e]},p.prototype.readUInt16LE=function(e,i){return S(this,e,!0,i)},p.prototype.readUInt16BE=function(e,i){return S(this,e,!1,i)},p.prototype.readUInt32LE=function(e,i){return F(this,e,!0,i)},p.prototype.readUInt32BE=function(e,i){return F(this,e,!1,i)},p.prototype.readInt8=function(e,i){if(i||(C(e!=null,"missing offset"),C(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length))return 128&this[e]?-1*(255-this[e]+1):this[e]},p.prototype.readInt16LE=function(e,i){return l(this,e,!0,i)},p.prototype.readInt16BE=function(e,i){return l(this,e,!1,i)},p.prototype.readInt32LE=function(e,i){return m(this,e,!0,i)},p.prototype.readInt32BE=function(e,i){return m(this,e,!1,i)},p.prototype.readFloatLE=function(e,i){return t(this,e,!0,i)},p.prototype.readFloatBE=function(e,i){return t(this,e,!1,i)},p.prototype.readDoubleLE=function(e,i){return r(this,e,!0,i)},p.prototype.readDoubleBE=function(e,i){return r(this,e,!1,i)},p.prototype.writeUInt8=function(e,i,a){a||(C(e!=null,"missing value"),C(i!=null,"missing offset"),C(i<this.length,"trying to write beyond buffer length"),Se(e,255)),i>=this.length||(this[i]=e)},p.prototype.writeUInt16LE=function(e,i,a){n(this,e,i,!0,a)},p.prototype.writeUInt16BE=function(e,i,a){n(this,e,i,!1,a)},p.prototype.writeUInt32LE=function(e,i,a){c(this,e,i,!0,a)},p.prototype.writeUInt32BE=function(e,i,a){c(this,e,i,!1,a)},p.prototype.writeInt8=function(e,i,a){a||(C(e!=null,"missing value"),C(i!=null,"missing offset"),C(i<this.length,"Trying to write beyond buffer length"),Ee(e,127,-128)),i>=this.length||(0<=e?this.writeUInt8(e,i,a):this.writeUInt8(255+e+1,i,a))},p.prototype.writeInt16LE=function(e,i,a){u(this,e,i,!0,a)},p.prototype.writeInt16BE=function(e,i,a){u(this,e,i,!1,a)},p.prototype.writeInt32LE=function(e,i,a){D(this,e,i,!0,a)},p.prototype.writeInt32BE=function(e,i,a){D(this,e,i,!1,a)},p.prototype.writeFloatLE=function(e,i,a){E(this,e,i,!0,a)},p.prototype.writeFloatBE=function(e,i,a){E(this,e,i,!1,a)},p.prototype.writeDoubleLE=function(e,i,a){L(this,e,i,!0,a)},p.prototype.writeDoubleBE=function(e,i,a){L(this,e,i,!1,a)},p.prototype.fill=function(e,i,a){if(i=i||0,a=a||this.length,C(typeof(e=typeof(e=e||0)=="string"?e.charCodeAt(0):e)=="number"&&!isNaN(e),"value is not a number"),C(i<=a,"end < start"),a!==i&&this.length!==0){C(0<=i&&i<this.length,"start out of bounds"),C(0<=a&&a<=this.length,"end out of bounds");for(var _=i;_<a;_++)this[_]=e}},p.prototype.inspect=function(){for(var e=[],i=this.length,a=0;a<i;a++)if(e[a]=N(this[a]),a===s.INSPECT_MAX_BYTES){e[a+1]="...";break}return"<Buffer "+e.join(" ")+">"},p.prototype.toArrayBuffer=function(){if(typeof Uint8Array>"u")throw new Error("Buffer.toArrayBuffer not supported in this browser");if(p._useTypedArrays)return new p(this).buffer;for(var e=new Uint8Array(this.length),i=0,a=e.length;i<a;i+=1)e[i]=this[i];return e.buffer};var b=p.prototype;function z(e,i,a){return typeof e!="number"?a:i<=(e=~~e)?i:0<=e||0<=(e+=i)?e:0}function W(e){return(e=~~Math.ceil(+e))<0?0:e}function Y(e){return(Array.isArray||function(i){return Object.prototype.toString.call(i)==="[object Array]"})(e)}function N(e){return e<16?"0"+e.toString(16):e.toString(16)}function ie(e){for(var i=[],a=0;a<e.length;a++){var _=e.charCodeAt(a);if(_<=127)i.push(e.charCodeAt(a));else for(var w=a,P=(55296<=_&&_<=57343&&a++,encodeURIComponent(e.slice(w,a+1)).substr(1).split("%")),H=0;H<P.length;H++)i.push(parseInt(P[H],16))}return i}function re(e){return y.toByteArray(e)}function J(e,i,a,_){for(var w=0;w<_&&!(w+a>=i.length||w>=e.length);w++)i[w+a]=e[w];return w}function pe(e){try{return decodeURIComponent(e)}catch{return"�"}}function Se(e,i){C(typeof e=="number","cannot write a non-number as a number"),C(0<=e,"specified a negative value for writing an unsigned value"),C(e<=i,"value is larger than maximum value for type"),C(Math.floor(e)===e,"value has a fractional component")}function Ee(e,i,a){C(typeof e=="number","cannot write a non-number as a number"),C(e<=i,"value larger than maximum allowed value"),C(a<=e,"value smaller than minimum allowed value"),C(Math.floor(e)===e,"value has a fractional component")}function ze(e,i,a){C(typeof e=="number","cannot write a non-number as a number"),C(e<=i,"value larger than maximum allowed value"),C(a<=e,"value smaller than minimum allowed value")}function C(e,i){if(!e)throw new Error(i||"Failed assertion")}p._augment=function(e){return e._isBuffer=!0,e._get=e.get,e._set=e.set,e.get=b.get,e.set=b.set,e.write=b.write,e.toString=b.toString,e.toLocaleString=b.toString,e.toJSON=b.toJSON,e.copy=b.copy,e.slice=b.slice,e.readUInt8=b.readUInt8,e.readUInt16LE=b.readUInt16LE,e.readUInt16BE=b.readUInt16BE,e.readUInt32LE=b.readUInt32LE,e.readUInt32BE=b.readUInt32BE,e.readInt8=b.readInt8,e.readInt16LE=b.readInt16LE,e.readInt16BE=b.readInt16BE,e.readInt32LE=b.readInt32LE,e.readInt32BE=b.readInt32BE,e.readFloatLE=b.readFloatLE,e.readFloatBE=b.readFloatBE,e.readDoubleLE=b.readDoubleLE,e.readDoubleBE=b.readDoubleBE,e.writeUInt8=b.writeUInt8,e.writeUInt16LE=b.writeUInt16LE,e.writeUInt16BE=b.writeUInt16BE,e.writeUInt32LE=b.writeUInt32LE,e.writeUInt32BE=b.writeUInt32BE,e.writeInt8=b.writeInt8,e.writeInt16LE=b.writeInt16LE,e.writeInt16BE=b.writeInt16BE,e.writeInt32LE=b.writeInt32LE,e.writeInt32BE=b.writeInt32BE,e.writeFloatLE=b.writeFloatLE,e.writeFloatBE=b.writeFloatBE,e.writeDoubleLE=b.writeDoubleLE,e.writeDoubleBE=b.writeDoubleBE,e.fill=b.fill,e.inspect=b.inspect,e.toArrayBuffer=b.toArrayBuffer,e}}).call(this,f("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},f("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(f,d,s){(function(g,v,y,R,B,A,G,U,j){var y=f("buffer").Buffer,T=4,p=new y(T);p.fill(0),d.exports={hash:function(x,I,M,S){for(var F=I(function(n,c){n.length%T!=0&&(u=n.length+(T-n.length%T),n=y.concat([n,p],u));for(var u,D=[],E=c?n.readInt32BE:n.readInt32LE,L=0;L<n.length;L+=T)D.push(E.call(n,L));return D}(x=y.isBuffer(x)?x:new y(x),S),8*x.length),I=S,l=new y(M),m=I?l.writeInt32BE:l.writeInt32LE,t=0;t<F.length;t++)m.call(l,F[t],4*t,!0);return l}}}).call(this,f("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},f("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],5:[function(f,d,s){(function(g,v,y,R,B,A,G,U,j){var y=f("buffer").Buffer,T=f("./sha"),p=f("./sha256"),x=f("./rng"),I={sha1:T,sha256:p,md5:f("./md5")},M=64,S=new y(M);function F(n,c){var u=I[n=n||"sha1"],D=[];return u||l("algorithm:",n,"is not yet supported"),{update:function(E){return y.isBuffer(E)||(E=new y(E)),D.push(E),E.length,this},digest:function(E){var L=y.concat(D),L=c?function(b,z,W){y.isBuffer(z)||(z=new y(z)),y.isBuffer(W)||(W=new y(W)),z.length>M?z=b(z):z.length<M&&(z=y.concat([z,S],M));for(var Y=new y(M),N=new y(M),ie=0;ie<M;ie++)Y[ie]=54^z[ie],N[ie]=92^z[ie];return W=b(y.concat([Y,W])),b(y.concat([N,W]))}(u,c,L):u(L);return D=null,E?L.toString(E):L}}}function l(){var n=[].slice.call(arguments).join(" ");throw new Error([n,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join(`
`))}S.fill(0),s.createHash=function(n){return F(n)},s.createHmac=F,s.randomBytes=function(n,c){if(!c||!c.call)return new y(x(n));try{c.call(this,void 0,new y(x(n)))}catch(u){c(u)}};var m,t=["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],r=function(n){s[n]=function(){l("sorry,",n,"is not implemented yet")}};for(m in t)r(t[m])}).call(this,f("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},f("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(f,d,s){(function(g,v,O,R,B,A,G,U,j){var y=f("./helpers");function T(l,m){l[m>>5]|=128<<m%32,l[14+(m+64>>>9<<4)]=m;for(var t=1732584193,r=-271733879,n=-1732584194,c=271733878,u=0;u<l.length;u+=16){var D=t,E=r,L=n,b=c,t=x(t,r,n,c,l[u+0],7,-680876936),c=x(c,t,r,n,l[u+1],12,-389564586),n=x(n,c,t,r,l[u+2],17,606105819),r=x(r,n,c,t,l[u+3],22,-1044525330);t=x(t,r,n,c,l[u+4],7,-176418897),c=x(c,t,r,n,l[u+5],12,1200080426),n=x(n,c,t,r,l[u+6],17,-1473231341),r=x(r,n,c,t,l[u+7],22,-45705983),t=x(t,r,n,c,l[u+8],7,1770035416),c=x(c,t,r,n,l[u+9],12,-1958414417),n=x(n,c,t,r,l[u+10],17,-42063),r=x(r,n,c,t,l[u+11],22,-1990404162),t=x(t,r,n,c,l[u+12],7,1804603682),c=x(c,t,r,n,l[u+13],12,-40341101),n=x(n,c,t,r,l[u+14],17,-1502002290),t=I(t,r=x(r,n,c,t,l[u+15],22,1236535329),n,c,l[u+1],5,-165796510),c=I(c,t,r,n,l[u+6],9,-1069501632),n=I(n,c,t,r,l[u+11],14,643717713),r=I(r,n,c,t,l[u+0],20,-373897302),t=I(t,r,n,c,l[u+5],5,-701558691),c=I(c,t,r,n,l[u+10],9,38016083),n=I(n,c,t,r,l[u+15],14,-660478335),r=I(r,n,c,t,l[u+4],20,-405537848),t=I(t,r,n,c,l[u+9],5,568446438),c=I(c,t,r,n,l[u+14],9,-1019803690),n=I(n,c,t,r,l[u+3],14,-187363961),r=I(r,n,c,t,l[u+8],20,1163531501),t=I(t,r,n,c,l[u+13],5,-1444681467),c=I(c,t,r,n,l[u+2],9,-51403784),n=I(n,c,t,r,l[u+7],14,1735328473),t=M(t,r=I(r,n,c,t,l[u+12],20,-1926607734),n,c,l[u+5],4,-378558),c=M(c,t,r,n,l[u+8],11,-2022574463),n=M(n,c,t,r,l[u+11],16,1839030562),r=M(r,n,c,t,l[u+14],23,-35309556),t=M(t,r,n,c,l[u+1],4,-1530992060),c=M(c,t,r,n,l[u+4],11,1272893353),n=M(n,c,t,r,l[u+7],16,-155497632),r=M(r,n,c,t,l[u+10],23,-1094730640),t=M(t,r,n,c,l[u+13],4,681279174),c=M(c,t,r,n,l[u+0],11,-358537222),n=M(n,c,t,r,l[u+3],16,-722521979),r=M(r,n,c,t,l[u+6],23,76029189),t=M(t,r,n,c,l[u+9],4,-640364487),c=M(c,t,r,n,l[u+12],11,-421815835),n=M(n,c,t,r,l[u+15],16,530742520),t=S(t,r=M(r,n,c,t,l[u+2],23,-995338651),n,c,l[u+0],6,-198630844),c=S(c,t,r,n,l[u+7],10,1126891415),n=S(n,c,t,r,l[u+14],15,-1416354905),r=S(r,n,c,t,l[u+5],21,-57434055),t=S(t,r,n,c,l[u+12],6,1700485571),c=S(c,t,r,n,l[u+3],10,-1894986606),n=S(n,c,t,r,l[u+10],15,-1051523),r=S(r,n,c,t,l[u+1],21,-2054922799),t=S(t,r,n,c,l[u+8],6,1873313359),c=S(c,t,r,n,l[u+15],10,-30611744),n=S(n,c,t,r,l[u+6],15,-1560198380),r=S(r,n,c,t,l[u+13],21,1309151649),t=S(t,r,n,c,l[u+4],6,-145523070),c=S(c,t,r,n,l[u+11],10,-1120210379),n=S(n,c,t,r,l[u+2],15,718787259),r=S(r,n,c,t,l[u+9],21,-343485551),t=F(t,D),r=F(r,E),n=F(n,L),c=F(c,b)}return Array(t,r,n,c)}function p(l,m,t,r,n,c){return F((m=F(F(m,l),F(r,c)))<<n|m>>>32-n,t)}function x(l,m,t,r,n,c,u){return p(m&t|~m&r,l,m,n,c,u)}function I(l,m,t,r,n,c,u){return p(m&r|t&~r,l,m,n,c,u)}function M(l,m,t,r,n,c,u){return p(m^t^r,l,m,n,c,u)}function S(l,m,t,r,n,c,u){return p(t^(m|~r),l,m,n,c,u)}function F(l,m){var t=(65535&l)+(65535&m);return(l>>16)+(m>>16)+(t>>16)<<16|65535&t}d.exports=function(l){return y.hash(l,T,16)}}).call(this,f("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},f("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(f,d,s){(function(g,v,O,R,B,A,G,U,j){d.exports=function(y){for(var T,p=new Array(y),x=0;x<y;x++)!(3&x)&&(T=4294967296*Math.random()),p[x]=T>>>((3&x)<<3)&255;return p}}).call(this,f("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},f("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],8:[function(f,d,s){(function(g,v,O,R,B,A,G,U,j){var y=f("./helpers");function T(I,M){I[M>>5]|=128<<24-M%32,I[15+(M+64>>9<<4)]=M;for(var S,F,l,m=Array(80),t=1732584193,r=-271733879,n=-1732584194,c=271733878,u=-1009589776,D=0;D<I.length;D+=16){for(var E=t,L=r,b=n,z=c,W=u,Y=0;Y<80;Y++){m[Y]=Y<16?I[D+Y]:x(m[Y-3]^m[Y-8]^m[Y-14]^m[Y-16],1);var N=p(p(x(t,5),(N=r,F=n,l=c,(S=Y)<20?N&F|~N&l:!(S<40)&&S<60?N&F|N&l|F&l:N^F^l)),p(p(u,m[Y]),(S=Y)<20?1518500249:S<40?1859775393:S<60?-1894007588:-899497514)),u=c,c=n,n=x(r,30),r=t,t=N}t=p(t,E),r=p(r,L),n=p(n,b),c=p(c,z),u=p(u,W)}return Array(t,r,n,c,u)}function p(I,M){var S=(65535&I)+(65535&M);return(I>>16)+(M>>16)+(S>>16)<<16|65535&S}function x(I,M){return I<<M|I>>>32-M}d.exports=function(I){return y.hash(I,T,20,!0)}}).call(this,f("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},f("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(f,d,s){(function(g,v,O,R,B,A,G,U,j){function y(M,S){var F=(65535&M)+(65535&S);return(M>>16)+(S>>16)+(F>>16)<<16|65535&F}function T(M,S){var F,l=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),m=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),t=new Array(64);M[S>>5]|=128<<24-S%32,M[15+(S+64>>9<<4)]=S;for(var r,n,c=0;c<M.length;c+=16){for(var u=m[0],D=m[1],E=m[2],L=m[3],b=m[4],z=m[5],W=m[6],Y=m[7],N=0;N<64;N++)t[N]=N<16?M[N+c]:y(y(y((n=t[N-2],x(n,17)^x(n,19)^I(n,10)),t[N-7]),(n=t[N-15],x(n,7)^x(n,18)^I(n,3))),t[N-16]),F=y(y(y(y(Y,x(n=b,6)^x(n,11)^x(n,25)),b&z^~b&W),l[N]),t[N]),r=y(x(r=u,2)^x(r,13)^x(r,22),u&D^u&E^D&E),Y=W,W=z,z=b,b=y(L,F),L=E,E=D,D=u,u=y(F,r);m[0]=y(u,m[0]),m[1]=y(D,m[1]),m[2]=y(E,m[2]),m[3]=y(L,m[3]),m[4]=y(b,m[4]),m[5]=y(z,m[5]),m[6]=y(W,m[6]),m[7]=y(Y,m[7])}return m}var p=f("./helpers"),x=function(M,S){return M>>>S|M<<32-S},I=function(M,S){return M>>>S};d.exports=function(M){return p.hash(M,T,32,!0)}}).call(this,f("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},f("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(f,d,s){(function(g,v,O,R,B,A,G,U,j){s.read=function(y,T,p,x,c){var M,S,F=8*c-x-1,l=(1<<F)-1,m=l>>1,t=-7,r=p?c-1:0,n=p?-1:1,c=y[T+r];for(r+=n,M=c&(1<<-t)-1,c>>=-t,t+=F;0<t;M=256*M+y[T+r],r+=n,t-=8);for(S=M&(1<<-t)-1,M>>=-t,t+=x;0<t;S=256*S+y[T+r],r+=n,t-=8);if(M===0)M=1-m;else{if(M===l)return S?NaN:1/0*(c?-1:1);S+=Math.pow(2,x),M-=m}return(c?-1:1)*S*Math.pow(2,M-x)},s.write=function(y,T,p,x,I,u){var S,F,l=8*u-I-1,m=(1<<l)-1,t=m>>1,r=I===23?Math.pow(2,-24)-Math.pow(2,-77):0,n=x?0:u-1,c=x?1:-1,u=T<0||T===0&&1/T<0?1:0;for(T=Math.abs(T),isNaN(T)||T===1/0?(F=isNaN(T)?1:0,S=m):(S=Math.floor(Math.log(T)/Math.LN2),T*(x=Math.pow(2,-S))<1&&(S--,x*=2),2<=(T+=1<=S+t?r/x:r*Math.pow(2,1-t))*x&&(S++,x/=2),m<=S+t?(F=0,S=m):1<=S+t?(F=(T*x-1)*Math.pow(2,I),S+=t):(F=T*Math.pow(2,t-1)*Math.pow(2,I),S=0));8<=I;y[p+n]=255&F,n+=c,F/=256,I-=8);for(S=S<<I|F,l+=I;0<l;y[p+n]=255&S,n+=c,S/=256,l-=8);y[p+n-c]|=128*u}}).call(this,f("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},f("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/ieee754/index.js","/node_modules/gulp-browserify/node_modules/ieee754")},{buffer:3,lYpoI2:11}],11:[function(f,d,s){(function(g,v,O,R,B,A,G,U,j){var y,T,p;function x(){}(g=d.exports={}).nextTick=(T=typeof window<"u"&&window.setImmediate,p=typeof window<"u"&&window.postMessage&&window.addEventListener,T?function(I){return window.setImmediate(I)}:p?(y=[],window.addEventListener("message",function(I){var M=I.source;M!==window&&M!==null||I.data!=="process-tick"||(I.stopPropagation(),0<y.length&&y.shift()())},!0),function(I){y.push(I),window.postMessage("process-tick","*")}):function(I){setTimeout(I,0)}),g.title="browser",g.browser=!0,g.env={},g.argv=[],g.on=x,g.addListener=x,g.once=x,g.off=x,g.removeListener=x,g.removeAllListeners=x,g.emit=x,g.binding=function(I){throw new Error("process.binding is not supported")},g.cwd=function(){return"/"},g.chdir=function(I){throw new Error("process.chdir is not supported")}}).call(this,f("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},f("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:11}]},{},[1])(1)})})(et);var Rt=et.exports;const Ot=Me(Rt);var tt=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","uint","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"],kt=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"],nt=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"],Nt=tt,Ut=Nt.slice().concat(["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray"]),Te=nt;Te=Te.slice().filter(function(h){return!/^(gl\_|texture)/.test(h)});var qt=Te.concat(["gl_VertexID","gl_InstanceID","gl_Position","gl_PointSize","gl_FragCoord","gl_FrontFacing","gl_FragDepth","gl_PointCoord","gl_MaxVertexAttribs","gl_MaxVertexUniformVectors","gl_MaxVertexOutputVectors","gl_MaxFragmentInputVectors","gl_MaxVertexTextureImageUnits","gl_MaxCombinedTextureImageUnits","gl_MaxTextureImageUnits","gl_MaxFragmentUniformVectors","gl_MaxDrawBuffers","gl_MinProgramTexelOffset","gl_MaxProgramTexelOffset","gl_DepthRangeParameters","gl_DepthRange","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"]),Gt=Qt,Ht=tt,Ue=kt,Yt=nt,Vt=Ut,Wt=qt,ae=999,qe=9999,Ie=0,Ce=1,Ge=2,He=3,Ye=4,me=5,Xt=6,$t=7,Zt=8,Ve=9,Kt=10,We=11,Jt=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function Qt(h){var o=0,f=0,d=ae,s,g,v=[],O=[],R=1,B=0,A=0,G=!1,U=!1,j="",y;h=h||{};var T=Yt,p=Ht;h.version==="300 es"&&(T=Wt,p=Vt);for(var x={},I={},o=0;o<T.length;o++)x[T[o]]=!0;for(var o=0;o<p.length;o++)I[p[o]]=!0;return function(z){return O=[],z!==null?S(z):F()};function M(z){z.length&&O.push({type:Jt[d],data:z,position:A,line:R,column:B})}function S(z){o=0,z.toString&&(z=z.toString()),j+=z.replace(/\r\n/g,`
`),y=j.length;for(var W;s=j[o],o<y;){switch(W=o,d){case Ie:o=n();break;case Ce:o=r();break;case Ge:o=t();break;case He:o=c();break;case Ye:o=E();break;case We:o=D();break;case me:o=L();break;case qe:o=b();break;case Ve:o=m();break;case ae:o=l();break}if(W!==o)switch(j[W]){case`
`:B=0,++R;break;default:++B;break}}return f+=o,j=j.slice(o),O}function F(z){return v.length&&M(v.join("")),d=Kt,M("(eof)"),O}function l(){return v=v.length?[]:v,g==="/"&&s==="*"?(A=f+o-1,d=Ie,g=s,o+1):g==="/"&&s==="/"?(A=f+o-1,d=Ce,g=s,o+1):s==="#"?(d=Ge,A=f+o,o):/\s/.test(s)?(d=Ve,A=f+o,o):(G=/\d/.test(s),U=/[^\w_]/.test(s),A=f+o,d=G?Ye:U?He:qe,o)}function m(){return/[^\s]/g.test(s)?(M(v.join("")),d=ae,o):(v.push(s),g=s,o+1)}function t(){return(s==="\r"||s===`
`)&&g!=="\\"?(M(v.join("")),d=ae,o):(v.push(s),g=s,o+1)}function r(){return t()}function n(){return s==="/"&&g==="*"?(v.push(s),M(v.join("")),d=ae,o+1):(v.push(s),g=s,o+1)}function c(){if(g==="."&&/\d/.test(s))return d=me,o;if(g==="/"&&s==="*")return d=Ie,o;if(g==="/"&&s==="/")return d=Ce,o;if(s==="."&&v.length){for(;u(v););return d=me,o}if(s===";"||s===")"||s==="("){if(v.length)for(;u(v););return M(s),d=ae,o+1}var z=v.length===2&&s!=="=";if(/[\w_\d\s]/.test(s)||z){for(;u(v););return d=ae,o}return v.push(s),g=s,o+1}function u(z){var W=0,Y,N;do{if(Y=Ue.indexOf(z.slice(0,z.length+W).join("")),N=Ue[Y],Y===-1){if(W--+z.length>0)continue;N=z.slice(0,1).join("")}return M(N),A+=N.length,v=v.slice(N.length),v.length}while(!0)}function D(){return/[^a-fA-F0-9]/.test(s)?(M(v.join("")),d=ae,o):(v.push(s),g=s,o+1)}function E(){return s==="."||/[eE]/.test(s)?(v.push(s),d=me,g=s,o+1):s==="x"&&v.length===1&&v[0]==="0"?(d=We,v.push(s),g=s,o+1):/[^\d]/.test(s)?(M(v.join("")),d=ae,o):(v.push(s),g=s,o+1)}function L(){return s==="f"&&(v.push(s),g=s,o+=1),/[eE]/.test(s)||(s==="-"||s==="+")&&/[eE]/.test(g)?(v.push(s),g=s,o+1):/[^\d]/.test(s)?(M(v.join("")),d=ae,o):(v.push(s),g=s,o+1)}function b(){if(/[^\d\w_]/.test(s)){var z=v.join("");return I[z]?d=Zt:x[z]?d=$t:d=Xt,M(v.join("")),d=ae,o}return v.push(s),g=s,o+1}}var en=Gt,tn=nn;function nn(h,o){var f=en(o),d=[];return d=d.concat(f(h)),d=d.concat(f(null)),d}const rn=Me(tn);var on=an;function an(h){for(var o=[],f=0;f<h.length;f++)h[f].type!=="eof"&&o.push(h[f].data);return o.join("")}const Xe=Me(on);var sn=cn;function cn(h){var o=null,f=null,d=0,s=0,g=0,v=0,O=0,R=[],B,A,G;for(B=0,A;B<h.length;B++)if(G=h[B],G.data==="{"){if(d&&d++||(A=j(B,le(")"),le()),A<0)||(v=A,A=j(A,le("("),le(")")),A<0)||(O=A,A=j(A,ge),A<0)||h[A].type!=="ident"||(f=h[A].data,A=j(A,ge),A<0))continue;d=1,s=B,o=h[A].data,g=A;var U=j(A,ge);switch(h[U]&&h[U].data){case"lowp":case"highp":case"mediump":g=U}}else if(d&&G.data==="}"){if(--d)continue;R.push({name:f,type:o,body:[s+1,B],args:[O,v+1],outer:[g,B+1]})}for(B=0;B<h.length;B++)if(G=h[B],G.data===";"){if(A=j(B,le(")"),le()),A<0||(v=A,A=j(A,le("("),le(")")),A<0)||(O=A,A=j(A,ge),A<0)||h[A].type!=="ident"||(f=h[A].data,A=j(A,ge),A<0)||h[A].type==="operator"||h[A].data==="return")continue;o=h[A].data,R.push({name:f,type:o,body:!1,args:[O,v+1],outer:[A,B+1]})}return R.sort(function(y,T){return y.outer[0]-T.outer[0]});function j(y,T,p){for(var x=y-1;x>=0;x--){if(T(h[x]))return x;if(p&&p(h[x]))return-1}return-1}}function le(h){return function(o){return o.type==="operator"&&(!h||o.data===h)}}function ge(h){return h.type!=="whitespace"}const ln=Me(sn);function un(h,o){if(typeof h!="object"||h===null)return h;var f=h[Symbol.toPrimitive];if(f!==void 0){var d=f.call(h,o||"default");if(typeof d!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(h)}function rt(h){var o=un(h,"string");return typeof o=="symbol"?o:String(o)}function V(h,o,f){return o=rt(o),o in h?Object.defineProperty(h,o,{value:f,enumerable:!0,configurable:!0,writable:!0}):h[o]=f,h}function $e(h,o){var f=Object.keys(h);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(h);o&&(d=d.filter(function(s){return Object.getOwnPropertyDescriptor(h,s).enumerable})),f.push.apply(f,d)}return f}function he(h){for(var o=1;o<arguments.length;o++){var f=arguments[o]!=null?arguments[o]:{};o%2?$e(Object(f),!0).forEach(function(d){V(h,d,f[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(h,Object.getOwnPropertyDescriptors(f)):$e(Object(f)).forEach(function(d){Object.defineProperty(h,d,Object.getOwnPropertyDescriptor(f,d))})}return h}function fn(h,o){if(h==null)return{};var f={},d=Object.keys(h),s,g;for(g=0;g<d.length;g++)s=d[g],!(o.indexOf(s)>=0)&&(f[s]=h[s]);return f}function hn(h,o){if(h==null)return{};var f=fn(h,o),d,s;if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(h);for(s=0;s<g.length;s++)d=g[s],!(o.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(h,d)&&(f[d]=h[d])}return f}function dn(h,o){if(!(h instanceof o))throw new TypeError("Cannot call a class as a function")}function pn(h,o){for(var f=0;f<o.length;f++){var d=o[f];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(h,rt(d.key),d)}}function mn(h,o,f){return o&&pn(h.prototype,o),Object.defineProperty(h,"prototype",{writable:!1}),h}function it(h){if(h===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return h}function De(h,o){return De=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(d,s){return d.__proto__=s,d},De(h,o)}function gn(h,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");h.prototype=Object.create(o&&o.prototype,{constructor:{value:h,writable:!0,configurable:!0}}),Object.defineProperty(h,"prototype",{writable:!1}),o&&De(h,o)}function _e(h){return _e=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(f){return f.__proto__||Object.getPrototypeOf(f)},_e(h)}function vn(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function yn(h,o){if(o&&(typeof o=="object"||typeof o=="function"))return o;if(o!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return it(h)}function xn(h){var o=vn();return function(){var d=_e(h),s;if(o){var g=_e(this).constructor;s=Reflect.construct(d,arguments,g)}else s=d.apply(this,arguments);return yn(this,s)}}var k={position:"csm_Position",positionRaw:"csm_PositionRaw",pointSize:"csm_PointSize",fragColor:"csm_FragColor",diffuseColor:"csm_DiffuseColor",normal:"csm_Normal",roughness:"csm_Roughness",metalness:"csm_Metalness",emissive:"csm_Emissive",ao:"csm_AO",bump:"csm_Bump",depthAlpha:"csm_DepthAlpha"},te,de,wn=(te={},V(te,"".concat(k.normal),{"#include <beginnormal_vertex>":`
    vec3 objectNormal = `.concat(k.normal,`;
    #ifdef USE_TANGENT
	    vec3 objectTangent = vec3( tangent.xyz );
    #endif
    `)}),V(te,"".concat(k.position),{"#include <begin_vertex>":`
    vec3 transformed = `.concat(k.position,`;
  `)}),V(te,"".concat(k.positionRaw),{"#include <begin_vertex>":`
    vec4 csm_internal_positionUnprojected = `.concat(k.positionRaw,`;
    mat4x4 csm_internal_unprojectMatrix = projectionMatrix * modelViewMatrix;
    #ifdef USE_INSTANCING
      csm_internal_unprojectMatrix = csm_internal_unprojectMatrix * instanceMatrix;
    #endif
    csm_internal_positionUnprojected = inverse(csm_internal_unprojectMatrix) * csm_internal_positionUnprojected;
    vec3 transformed = csm_internal_positionUnprojected.xyz;
  `)}),V(te,"".concat(k.pointSize),{"gl_PointSize = size;":`
    gl_PointSize = `.concat(k.pointSize,`;
    `)}),V(te,"".concat(k.diffuseColor),{"#include <color_fragment>":`
    #include <color_fragment>
    diffuseColor = `.concat(k.diffuseColor,`;
  `)}),V(te,"".concat(k.fragColor),{"#include <dithering_fragment>":`
    #include <dithering_fragment>
    gl_FragColor  = `.concat(k.fragColor,`;
  `)}),V(te,"".concat(k.emissive),{"vec3 totalEmissiveRadiance = emissive;":`
    vec3 totalEmissiveRadiance = `.concat(k.emissive,`;
    `)}),V(te,"".concat(k.roughness),{"#include <roughnessmap_fragment>":`
    #include <roughnessmap_fragment>
    roughnessFactor = `.concat(k.roughness,`;
    `)}),V(te,"".concat(k.metalness),{"#include <metalnessmap_fragment>":`
    #include <metalnessmap_fragment>
    metalnessFactor = `.concat(k.metalness,`;
    `)}),V(te,"".concat(k.ao),{"#include <aomap_fragment>":`
    #include <aomap_fragment>
    reflectedLight.indirectDiffuse *= 1. - `.concat(k.ao,`;
    `)}),V(te,"".concat(k.bump),{"#include <normal_fragment_maps>":`
    #include <normal_fragment_maps>

    vec3 csm_internal_orthogonal = `.concat(k.bump," - (dot(").concat(k.bump,`, normal) * normal);
    vec3 csm_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_internal_orthogonal;
    normal = normalize(normal - csm_internal_projectedbump);
    `)}),V(te,"".concat(k.depthAlpha),{"gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );":`
      gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity * `.concat(k.depthAlpha,` );
    `),"gl_FragColor = packDepthToRGBA( fragCoordZ );":`
      gl_FragColor = packDepthToRGBA( fragCoordZ );
      gl_FragColor.a *= `.concat(k.depthAlpha,`;
    `)}),te),_n=(de={},V(de,"".concat(k.position),{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = projectionMatrix * modelViewMatrix * vec4( `.concat(k.position,`, 1.0 );
  `)}),V(de,"".concat(k.positionRaw),{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = `.concat(k.position,`;
  `)}),V(de,"".concat(k.diffuseColor),{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = `.concat(k.diffuseColor,`;
  `)}),V(de,"".concat(k.fragColor),{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = `.concat(k.fragColor,`;
  `)}),de),bn=`

#ifdef IS_VERTEX
    // csm_Position & csm_PositionRaw
    #ifdef IS_UNKNOWN
        vec3 csm_Position = vec3(0.0);
        vec4 csm_PositionRaw = vec4(0.0);
        vec3 csm_Normal = vec3(0.0);
    #else
        vec3 csm_Position = position;
        vec4 csm_PositionRaw = projectionMatrix * modelViewMatrix * vec4(position, 1.);
        vec3 csm_Normal = normal;
    #endif

    // csm_PointSize
    #ifdef IS_POINTSMATERIAL
        float csm_PointSize = size;
    #endif
#else
    // csm_DiffuseColor & csm_FragColor
    #if defined IS_UNKNOWN || defined IS_SHADERMATERIAL || defined IS_MESHDEPTHMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_SHADOWMATERIAL
        vec4 csm_DiffuseColor = vec4(1.0, 0.0, 1.0, 1.0);
        vec4 csm_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
    #else
        #ifdef USE_MAP
            vec4 _csm_sampledDiffuseColor = texture2D(map, vMapUv);

            #ifdef DECODE_VIDEO_TEXTURE
            // inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)
            _csm_sampledDiffuseColor = vec4(mix(pow(_csm_sampledDiffuseColor.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), _csm_sampledDiffuseColor.rgb * 0.0773993808, vec3(lessThanEqual(_csm_sampledDiffuseColor.rgb, vec3(0.04045)))), _csm_sampledDiffuseColor.w);
            #endif

            vec4 csm_DiffuseColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
            vec4 csm_FragColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
        #else
            vec4 csm_DiffuseColor = vec4(diffuse, opacity);
            vec4 csm_FragColor = vec4(diffuse, opacity);
        #endif
    #endif

    // csm_Emissive, csm_Roughness, csm_Metalness
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL
        vec3 csm_Emissive = emissive;
        float csm_Roughness = roughness;
        float csm_Metalness = metalness;
    #endif

    // csm_AO
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHBASICMATERIAL || defined IS_MESHLAMBERTMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHTOONMATERIAL
        float csm_AO = 0.0;
    #endif

    // csm_Bump
    #if defined IS_MESHLAMBERTMATERIAL || defined IS_MESHMATCAPMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHSTANDARDMATERIAL || defined IS_MESHTOONMATERIAL || defined IS_SHADOWMATERIAL 
        vec3 csm_Bump = vec3(0.0);
    #endif

    float csm_DepthAlpha = 1.0;
#endif
`,Mn=`
    varying mat4 csm_internal_vModelViewMatrix;
`,Sn=`
    csm_internal_vModelViewMatrix = modelViewMatrix;
`,En=`
    varying mat4 csm_internal_vModelViewMatrix;
`,An=`
    
`,ne,In=(ne={},V(ne,"".concat(k.position),"*"),V(ne,"".concat(k.positionRaw),"*"),V(ne,"".concat(k.normal),"*"),V(ne,"".concat(k.pointSize),["PointsMaterial"]),V(ne,"".concat(k.diffuseColor),"*"),V(ne,"".concat(k.fragColor),"*"),V(ne,"".concat(k.emissive),["MeshStandardMaterial","MeshPhysicalMaterial"]),V(ne,"".concat(k.roughness),["MeshStandardMaterial","MeshPhysicalMaterial"]),V(ne,"".concat(k.metalness),["MeshStandardMaterial","MeshPhysicalMaterial"]),V(ne,"".concat(k.ao),["MeshStandardMaterial","MeshPhysicalMaterial","MeshBasicMaterial","MeshLambertMaterial","MeshPhongMaterial","MeshToonMaterial"]),V(ne,"".concat(k.bump),["MeshLambertMaterial","MeshMatcapMaterial","MeshNormalMaterial","MeshPhongMaterial","MeshPhysicalMaterial","MeshStandardMaterial","MeshToonMaterial","ShadowMaterial"]),V(ne,"".concat(k.depthAlpha),"*"),ne),Cn=["baseMaterial","fragmentShader","vertexShader","uniforms","patchMap","cacheKey","silent"],Pn=function(o,f,d){return o.split(f).join(d)},Tn=function(o){return o.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},Dn=function(o,f){return new RegExp("\\b".concat(Tn(f),"\\b")).test(o)};function Ln(h){try{new h}catch(o){if(o.message.indexOf("is not a constructor")>=0)return!1}return!0}function Bn(h,o){var f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;Object.assign(h,o);var d=Object.getPrototypeOf(o);Object.entries(Object.getOwnPropertyDescriptors(d)).filter(function(s){var g=typeof s[1].get=="function",v=typeof s[1].set=="function",O=typeof s[1].value=="function",R=s[0]==="constructor";return(g||v||O)&&!R}).forEach(function(s){if(typeof h[s[0]]=="function"){f||console.warn("Function ".concat(s[0]," already exists on CSM, renaming to base_").concat(s[0]));var g="base_".concat(s[0]);h[g]=s[1].value.bind(h);return}Object.defineProperty(h,s[0],s[1])})}function jn(h){var o=h.toString().trim(),f=o.substring(o.indexOf("{")+1,o.lastIndexOf("}"));return f.trim().length===0}function Ze(h){return h.replace(/\s/g,"")}function Fn(h,o,f){var d=h.lastIndexOf(o);return d===-1?h:h.substring(0,d)+f+h.substring(d+o.length)}var ue=function(h){gn(f,h);var o=xn(f);function f(d){var s,g=d.baseMaterial,v=d.fragmentShader,O=d.vertexShader,R=d.uniforms,B=d.patchMap,A=d.cacheKey,G=d.silent,U=hn(d,Cn);dn(this,f);var j;if(Ln(g)?j=new g(U):(j=g,Object.assign(j,U)),j.type==="RawShaderMaterial")throw new Error("CustomShaderMaterial does not support RawShaderMaterial");s=o.call(this),Bn(it(s),j,G),s.__csm={patchMap:B||{},fragmentShader:v||"",vertexShader:O||"",cacheKey:A,baseMaterial:g,instanceID:gt.generateUUID(),type:j.type,isAlreadyExtended:!jn(j.onBeforeCompile),cacheHash:"",silent:G},s.uniforms=he(he({},s.uniforms||{}),R||{});{var y=s.__csm,T=y.fragmentShader,p=y.vertexShader,x=s.uniforms;s.__csm.cacheHash=s.getCacheHash(),s.generateMaterial(T,p,x)}return s}return mn(f,[{key:"update",value:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.uniforms=s.uniforms||this.uniforms,Object.assign(this.__csm,s);var g=this.__csm,v=g.fragmentShader,O=g.vertexShader,R=this.uniforms,B=this.getCacheHash();this.__csm.cacheHash=B,this.generateMaterial(v,O,R)}},{key:"clone",value:function(){var s={baseMaterial:this.__csm.baseMaterial,fragmentShader:this.__csm.fragmentShader,vertexShader:this.__csm.vertexShader,uniforms:this.uniforms,silent:this.__csm.silent,patchMap:this.__csm.patchMap,cacheKey:this.__csm.cacheKey},g=new this.constructor(s);return Object.assign(this,g),g}},{key:"getCacheHash",value:function(){var s=this.__csm,g=s.fragmentShader,v=s.vertexShader,O=this.uniforms,R=Object.values(O).reduce(function(A,G){var U=G.value;return A+JSON.stringify(U)},""),B=Ze(g)+Ze(v)+R;return B.trim().length>0?Ot(B):this.customProgramCacheKey()}},{key:"generateMaterial",value:function(s,g,v){var O=this,R=this.parseShader(s),B=this.parseShader(g);this.uniforms=v||{},this.customProgramCacheKey=function(){return O.__csm.cacheHash};var A=function(j){try{if(R){var y=O.patchShader(R,j.fragmentShader,!0);j.fragmentShader=O.getMaterialDefine()+y}if(B){var T=O.patchShader(B,j.vertexShader);j.vertexShader=`#define IS_VERTEX;
`+T,j.vertexShader=O.getMaterialDefine()+j.vertexShader}j.uniforms=he(he({},j.uniforms),O.uniforms),O.uniforms=j.uniforms}catch(p){console.error(p)}};if(this.__csm.isAlreadyExtended){var G=this.onBeforeCompile;this.onBeforeCompile=function(U,j){G(U,j),A(U)}}else this.onBeforeCompile=A;this.needsUpdate=!0}},{key:"patchShader",value:function(s,g,v){var O=this,R=g,B=he(he({},this.getPatchMapForMaterial()),this.__csm.patchMap);Object.keys(B).forEach(function(U){Object.keys(B[U]).forEach(function(j){var y=In[U],T=O.__csm.type;if(U==="*"||Dn(s.main,U))if(!y||Array.isArray(y)&&y.includes(T)||y==="*")R=Pn(R,j,B[U][j]);else throw new Error("CSM: ".concat(U," is not available in ").concat(T,". Shader cannot compile."))})}),R=R.replace("void main() {",`
        #ifndef CSM_IS_HEAD_DEFAULTS_DEFINED
          `.concat(v?En:Mn,`
          #define CSM_IS_HEAD_DEFAULTS_DEFINED 1
        #endif

        `).concat(s.header,`
        
        void main() {
          #ifndef CSM_IS_DEFAULTS_DEFINED
            `).concat(bn,`
            #define CSM_IS_DEFAULTS_DEFINED 1
          #endif
          
          #ifndef CSM_IS_MAIN_DEFAULTS_DEFINED
            `).concat(v?An:Sn,`
            #define CSM_IS_MAIN_DEFAULTS_DEFINED 1
          #endif

          // CSM_START
      `));var A=this.__csm.isAlreadyExtended,G=R.includes("// CSM_END");return A&&G?R=Fn(R,"// CSM_END",`
          // CSM_END
          `.concat(s.main,`
          // CSM_END
        `)):R=R.replace("// CSM_START",`
        // CSM_START
        `.concat(s.main,`
        // CSM_END
          `)),R=s.defines+R,R}},{key:"parseShader",value:function(s){if(s){var g=s.replace(/\/\*\*(.*?)\*\/|\/\/(.*?)\n/gm,""),v=rn(g),O=ln(v),R=O.map(function(G){return G.name}).indexOf("main"),B=Xe(v.slice(0,R>=0?O[R].outer[0]:void 0)),A=R>=0?this.getShaderFromIndex(v,O[R].body):"";return{defines:"",header:B,main:A}}}},{key:"getMaterialDefine",value:function(){var s=this.__csm.type;return s?"#define IS_".concat(s.toUpperCase(),`;
`):`#define IS_UNKNOWN;
`}},{key:"getPatchMapForMaterial",value:function(){switch(this.__csm.type){case"ShaderMaterial":return _n;default:return wn}}},{key:"getShaderFromIndex",value:function(s,g){return Xe(s.slice(g[0],g[1]))}}]),f}(vt),be=`uniform float uTime;\r
uniform float uPositionFrequency;\r
uniform float uTimeFrequency;\r
uniform float uStrength;\r
uniform float uWarpPositionFrequency;\r
uniform float uWarpTimeFrequency;\r
uniform float uWarpStrength;

attribute vec4 tangent;\r
attribute vec3 csm_Position;\r
attribute vec3 csm_Normal;

varying float vEffect;    

vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\r
float permute(float x){return floor(mod(((x*34.0)+1.0)*x, 289.0));}\r
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\r
float taylorInvSqrt(float r){return 1.79284291400159 - 0.85373472095314 * r;}

vec4 grad4(float j, vec4 ip)\r
{\r
  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\r
  vec4 p,s;

  p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\r
  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);\r
  s = vec4(lessThan(p, vec4(0.0)));\r
  p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www; 

  return p;\r
}

float simplexNoise4d(vec4 v)\r
{\r
  const vec2  C = vec2( 0.138196601125010504,  
                        0.309016994374947451); 
  
  vec4 i  = floor(v + dot(v, C.yyyy) );\r
  vec4 x0 = v -   i + dot(i, C.xxxx);

  

  
  vec4 i0;

  vec3 isX = step( x0.yzw, x0.xxx );\r
  vec3 isYZ = step( x0.zww, x0.yyz );\r
  
  i0.x = isX.x + isX.y + isX.z;\r
  i0.yzw = 1.0 - isX;

  
  i0.y += isYZ.x + isYZ.y;\r
  i0.zw += 1.0 - isYZ.xy;

  i0.z += isYZ.z;\r
  i0.w += 1.0 - isYZ.z;

  
  vec4 i3 = clamp( i0, 0.0, 1.0 );\r
  vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );\r
  vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

  
  vec4 x1 = x0 - i1 + 1.0 * C.xxxx;\r
  vec4 x2 = x0 - i2 + 2.0 * C.xxxx;\r
  vec4 x3 = x0 - i3 + 3.0 * C.xxxx;\r
  vec4 x4 = x0 - 1.0 + 4.0 * C.xxxx;

  
  i = mod(i, 289.0); \r
  float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);\r
  vec4 j1 = permute( permute( permute( permute (\r
             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))\r
           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))\r
           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))\r
           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));\r
  
  
  

  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

  vec4 p0 = grad4(j0,   ip);\r
  vec4 p1 = grad4(j1.x, ip);\r
  vec4 p2 = grad4(j1.y, ip);\r
  vec4 p3 = grad4(j1.z, ip);\r
  vec4 p4 = grad4(j1.w, ip);

  
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\r
  p0 *= norm.x;\r
  p1 *= norm.y;\r
  p2 *= norm.z;\r
  p3 *= norm.w;\r
  p4 *= taylorInvSqrt(dot(p4,p4));

  
  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);\r
  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);\r
  m0 = m0 * m0;\r
  m1 = m1 * m1;\r
  return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))\r
               + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;

}

float getEffect(vec3 position) {\r
    vec3 effectPosition = position;\r
    effectPosition += simplexNoise4d(vec4(\r
        position * uWarpPositionFrequency,\r
        uTime * uWarpTimeFrequency\r
    )) * uWarpStrength;

    return simplexNoise4d(vec4(\r
        effectPosition * uPositionFrequency,\r
        uTime * uTimeFrequency\r
    )) * uStrength;\r
}

void main() {\r
    vec3 biTangent = cross(csm_Normal, tangent.xyz);

    
    float shift = 0.01;\r
    vec3 positionA = csm_Position + tangent.xyz * shift;\r
    vec3 positionB = csm_Position + biTangent * shift;

    
    float effect = getEffect(csm_Position);\r
    vec3 newPosition = csm_Position + effect * csm_Normal;\r
    positionA += getEffect(positionA) * csm_Normal;\r
    positionB += getEffect(positionB) * csm_Normal;

    
    vec3 toA = normalize(positionA - newPosition);\r
    vec3 toB = normalize(positionB - newPosition);\r
    csm_Normal = cross(toA, toB);

    
    vEffect = effect / uStrength;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);\r
}`,ot=`uniform vec3 uColorA;\r
uniform vec3 uColorB;

varying float vEffect;    

void main()\r
{\r
    float colorMix = smoothstep(-1.0, 1.0, vEffect);\r
    vec3 baseColor = mix(uColorA, uColorB, colorMix);

    csm_DiffuseColor.rgb = baseColor;\r

    csm_Metalness = step(0.25, vEffect);\r
    csm_Roughness = 1.0 - colorMix;\r
}`;class zn{constructor(){this.experience=new se,this.scene=this.experience.scene,this.resources=this.experience.resources,this.site=this.experience.site,this.time=this.experience.time,this.colorA="#a6072f",this.colorB="#0ffffb",this.uniforms={uTime:new q(0),uPositionFrequency:new q(.596),uTimeFrequency:new q(.312),uStrength:new q(.596),uWarpPositionFrequency:new q(.255),uWarpTimeFrequency:new q(.474),uWarpStrength:new q(1.65),uColorA:new q(new ce(this.colorA)),uColorB:new q(new ce(this.colorB))},this.material=new ue({baseMaterial:ve,vertexShader:be,fragmentShader:ot,uniforms:this.uniforms,silent:!0,metalness:1,roughness:0,color:"#049ef4",transmission:0,ior:1.5,thickness:1.15,transparent:!0,wireframe:!1}),this.materialDepth=new ue({baseMaterial:Be,vertexShader:be,uniforms:this.uniforms,silent:!0,depthPacking:je});let o=new yt(2.6,50);o=It(o),o.computeTangents(),this.sphere=new Je(o,this.material),this.sphere.customDepthMaterial=this.materialDepth,this.sphere.position.y=-this.site.objectDistance*0,this.scene.add(this.sphere),this.time.on("tick",()=>{this.update()})}update(){this.uniforms.uTime.value+=this.time.delta*.001,this.sphere.rotation.y+=this.time.delta*.001*Math.sin(this.time.elapsed*.001)*.5,this.sphere.rotation.x+=this.time.delta*.001*Math.sin(this.time.elapsed*.001)*.5,this.sphere.rotation.z+=this.time.delta*.001*Math.sin(this.time.elapsed*.001)*.5}}var Rn=`varying vec2 vUv;

void main()\r
{\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    
    vUv = uv;\r
}`,On=`uniform float uTime;

varying vec2 vUv;

vec4 permute(vec4 x)\r
{\r
    return mod(((x*34.0)+1.0)*x, 289.0);\r
}

vec2 fade(vec2 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

float cnoise(vec2 P){\r
  vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);\r
  vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);\r
  Pi = mod(Pi, 289.0); 
  vec4 ix = Pi.xzxz;\r
  vec4 iy = Pi.yyww;\r
  vec4 fx = Pf.xzxz;\r
  vec4 fy = Pf.yyww;\r
  vec4 i = permute(permute(ix) + iy);\r
  vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; 
  vec4 gy = abs(gx) - 0.5;\r
  vec4 tx = floor(gx + 0.5);\r
  gx = gx - tx;\r
  vec2 g00 = vec2(gx.x,gy.x);\r
  vec2 g10 = vec2(gx.y,gy.y);\r
  vec2 g01 = vec2(gx.z,gy.z);\r
  vec2 g11 = vec2(gx.w,gy.w);\r
  vec4 norm = 1.79284291400159 - 0.85373472095314 * \r
    vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));\r
  g00 *= norm.x;\r
  g01 *= norm.y;\r
  g10 *= norm.z;\r
  g11 *= norm.w;\r
  float n00 = dot(g00, vec2(fx.x, fy.x));\r
  float n10 = dot(g10, vec2(fx.y, fy.y));\r
  float n01 = dot(g01, vec2(fx.z, fy.z));\r
  float n11 = dot(g11, vec2(fx.w, fy.w));\r
  vec2 fade_xy = fade(Pf.xy);\r
  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);\r
  float n_xy = mix(n_x.x, n_x.y, fade_xy.y);\r
  return 2.3 * n_xy;\r
}

void main()\r
{\r
    float strength = step(0.7, sin(cnoise(vUv * 5.0) * uTime * 100.0));

    
    vec3 colorA = vec3(0.0, 0.0, 0.0);\r
    vec3 colorB = vec3(0.35, 0.8, 0.0);

    vec3 color = mix(colorA, colorB, strength);\r

    gl_FragColor = vec4(color, 1.0);\r
}`;class kn{constructor(){this.experience=new se,this.scene=this.experience.scene,this.resources=this.experience.resources,this.site=this.experience.site,this.time=this.experience.time,this.colorC="#ff6600",this.colorD="#57ff0f",this.uniforms={uTime:new q(0),uPositionFrequency:new q(.827),uTimeFrequency:new q(.991),uStrength:new q(2.021),uWarpPositionFrequency:new q(1.156),uWarpTimeFrequency:new q(.827),uWarpStrength:new q(.338),uColorA:new q(new ce(this.colorC)),uColorB:new q(new ce(this.colorD))},this.material=new ue({baseMaterial:ve,vertexShader:be,fragmentShader:ot,uniforms:this.uniforms,silent:!0,metalness:1,roughness:0,color:"#049ef4",transmission:.077,ior:.857,thickness:1.15,transparent:!0,wireframe:!1}),this.materialDepth=new ue({baseMaterial:Be,vertexShader:be,uniforms:this.uniforms,silent:!0,depthPacking:je}),this.eyesMaterial=new Fe({vertexShader:Rn,fragmentShader:On,uniforms:{uTime:{value:0}}}),this.resource=this.resources.items.models,this.setModel(),this.time.on("tick",()=>{this.update()})}setModel(){this.model=this.resource.scene,this.model.scale.set(1.8,1.8,1.8),this.model.position.set(-2,-this.site.objectDistance*1.15,0),this.model.rotation.y=5.8,this.scene.add(this.model),this.model.traverse(o=>{o.isMesh&&(o.name==="Eyes"?o.material=this.eyesMaterial:(o.material=this.material,o.customDepthMaterial=this.materialDepth))})}update(){this.uniforms.uTime.value+=this.time.delta*.001,this.eyesMaterial.uniforms.uTime.value+=this.time.delta*.001,this.model.rotation.y+=this.time.delta*.001*Math.sin(this.time.elapsed*.001)*.2}}var Ke=`uniform float uTime;\r
uniform float uPositionFrequency;\r
uniform float uTimeFrequency;\r
uniform float uStrength;\r
uniform float uWarpPositionFrequency;\r
uniform float uWarpTimeFrequency;\r
uniform float uWarpStrength;

attribute vec4 tangent;

varying float vEffect;    

vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\r
float permute(float x){return floor(mod(((x*34.0)+1.0)*x, 289.0));}\r
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\r
float taylorInvSqrt(float r){return 1.79284291400159 - 0.85373472095314 * r;}

vec4 grad4(float j, vec4 ip)\r
{\r
  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\r
  vec4 p,s;

  p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\r
  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);\r
  s = vec4(lessThan(p, vec4(0.0)));\r
  p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www; 

  return p;\r
}

float simplexNoise4d(vec4 v)\r
{\r
  const vec2  C = vec2( 0.138196601125010504,  
                        0.309016994374947451); 
  
  vec4 i  = floor(v + dot(v, C.yyyy) );\r
  vec4 x0 = v -   i + dot(i, C.xxxx);

  

  
  vec4 i0;

  vec3 isX = step( x0.yzw, x0.xxx );\r
  vec3 isYZ = step( x0.zww, x0.yyz );\r
  
  i0.x = isX.x + isX.y + isX.z;\r
  i0.yzw = 1.0 - isX;

  
  i0.y += isYZ.x + isYZ.y;\r
  i0.zw += 1.0 - isYZ.xy;

  i0.z += isYZ.z;\r
  i0.w += 1.0 - isYZ.z;

  
  vec4 i3 = clamp( i0, 0.0, 1.0 );\r
  vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );\r
  vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

  
  vec4 x1 = x0 - i1 + 1.0 * C.xxxx;\r
  vec4 x2 = x0 - i2 + 2.0 * C.xxxx;\r
  vec4 x3 = x0 - i3 + 3.0 * C.xxxx;\r
  vec4 x4 = x0 - 1.0 + 4.0 * C.xxxx;

  
  i = mod(i, 289.0); \r
  float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);\r
  vec4 j1 = permute( permute( permute( permute (\r
             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))\r
           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))\r
           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))\r
           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));\r
  
  
  

  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

  vec4 p0 = grad4(j0,   ip);\r
  vec4 p1 = grad4(j1.x, ip);\r
  vec4 p2 = grad4(j1.y, ip);\r
  vec4 p3 = grad4(j1.z, ip);\r
  vec4 p4 = grad4(j1.w, ip);

  
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\r
  p0 *= norm.x;\r
  p1 *= norm.y;\r
  p2 *= norm.z;\r
  p3 *= norm.w;\r
  p4 *= taylorInvSqrt(dot(p4,p4));

  
  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);\r
  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);\r
  m0 = m0 * m0;\r
  m1 = m1 * m1;\r
  return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))\r
               + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;

}

float getEffect(vec3 position)\r
{\r
    vec3 effectPosition = position;\r
    effectPosition += simplexNoise4d(vec4(\r
        position * uWarpPositionFrequency,\r
        uTime * uWarpTimeFrequency \r
    )) * uWarpStrength;

    return simplexNoise4d(vec4(\r
        effectPosition * uPositionFrequency,   
        uTime * uTimeFrequency     
    )) * uStrength;\r
}

void main()\r
{\r
    vec3 biTangent = cross(normal, tangent.xyz);

    
    float shift = 0.01;\r
    vec3 positionA = csm_Position + tangent.xyz * shift;\r
    vec3 positionB = csm_Position + biTangent * shift;

    
    float effect = getEffect(csm_Position);\r
    csm_Position += effect * normal;\r
    positionA += getEffect(positionA) * normal;\r
    positionB += getEffect(positionB) * normal;

    
    vec3 toA = normalize(positionA - csm_Position);\r
    vec3 toB = normalize(positionB - csm_Position);\r
    csm_Normal = cross(toA, toB);

    
    vEffect = effect / uStrength;\r
}`,Nn=`uniform vec3 uColorA;\r
uniform vec3 uColorB;

varying float vEffect;    

void main()\r
{\r
    float colorMix = smoothstep(- 1.0, 1.0, vEffect);\r
    csm_DiffuseColor.rgb = mix(uColorA, uColorB, colorMix);

    
    
    

    
    csm_Roughness = 1.0 - colorMix;\r
}`;class Un{constructor(){this.experience=new se,this.scene=this.experience.scene,this.resources=this.experience.resources,this.site=this.experience.site,this.time=this.experience.time,this.colorA="#3cc345",this.colorB="#50ce86",this.uniforms={uTime:new q(0),uPositionFrequency:new q(2),uTimeFrequency:new q(.78),uStrength:new q(.209),uWarpPositionFrequency:new q(.485),uWarpTimeFrequency:new q(.582),uWarpStrength:new q(.76),uColorA:new q(new ce(this.colorA)),uColorB:new q(new ce(this.colorB))},this.material=new ue({baseMaterial:ve,vertexShader:Ke,fragmentShader:Nn,uniforms:this.uniforms,silent:!0,metalness:0,roughness:1,color:"#049ef4",transmission:0,ior:.582,thickness:1.5,transparent:!1,wireframe:!1}),this.materialDepth=new ue({baseMaterial:Be,vertexShader:Ke,uniforms:this.uniforms,silent:!0,depthPacking:je}),this.resource=this.resources.items.modelGun,this.bakedTexture=this.resources.items.baked,this.bakedTexture.colorSpace=Qe,this.bakedTexture.flipY=!1,this.bakedMaterial=new Ne({map:this.bakedTexture}),this.bakedMaterial2=new Ne,this.glassMaterial=new ve({color:"#ffffff",metalness:0,roughness:0,transmission:1,opacity:.4,ior:1.5,thickness:.2,specularIntensity:1,envMapIntensity:1,clearcoat:1,clearcoatRoughness:0,transparent:!0,reflectivity:.9}),this.setModel(),this.time.on("tick",()=>{this.update()})}setModel(){this.model=this.resource.scene,this.model.scale.set(2,2,2),this.model.position.set(4,-this.site.objectDistance*2.15,0),this.scene.add(this.model),this.model.traverse(o=>{o.isMesh&&o.name==="Gun"?o.material=this.bakedMaterial:o.isMesh&&o.name==="Glass"?o.material=this.glassMaterial:o.isMesh&&o.name==="Atom"&&(o.material=this.material,o.customDepthMaterial=this.materialDepth)})}update(){this.uniforms.uTime.value+=this.time.delta*.001,this.model.rotation.y+=this.time.delta*.001*Math.sin(this.time.elapsed*.001)*.2,this.model.rotation.x+=this.time.delta*.001*Math.cos(this.time.elapsed*.001)*.1}}var qn=`uniform float uTime;\r
uniform float uPositionFrequency;\r
uniform float uTimeFrequency;\r
uniform float uStrength;\r
uniform float uWarpPositionFrequency;\r
uniform float uWarpTimeFrequency;\r
uniform float uWarpStrength;

attribute vec4 tangent;

varying float vEffect;    

vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\r
float permute(float x){return floor(mod(((x*34.0)+1.0)*x, 289.0));}\r
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\r
float taylorInvSqrt(float r){return 1.79284291400159 - 0.85373472095314 * r;}

vec4 grad4(float j, vec4 ip)\r
{\r
  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\r
  vec4 p,s;

  p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\r
  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);\r
  s = vec4(lessThan(p, vec4(0.0)));\r
  p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www; 

  return p;\r
}

float simplexNoise4d(vec4 v)\r
{\r
  const vec2  C = vec2( 0.138196601125010504,  
                        0.309016994374947451); 
  
  vec4 i  = floor(v + dot(v, C.yyyy) );\r
  vec4 x0 = v -   i + dot(i, C.xxxx);

  

  
  vec4 i0;

  vec3 isX = step( x0.yzw, x0.xxx );\r
  vec3 isYZ = step( x0.zww, x0.yyz );\r
  
  i0.x = isX.x + isX.y + isX.z;\r
  i0.yzw = 1.0 - isX;

  
  i0.y += isYZ.x + isYZ.y;\r
  i0.zw += 1.0 - isYZ.xy;

  i0.z += isYZ.z;\r
  i0.w += 1.0 - isYZ.z;

  
  vec4 i3 = clamp( i0, 0.0, 1.0 );\r
  vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );\r
  vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

  
  vec4 x1 = x0 - i1 + 1.0 * C.xxxx;\r
  vec4 x2 = x0 - i2 + 2.0 * C.xxxx;\r
  vec4 x3 = x0 - i3 + 3.0 * C.xxxx;\r
  vec4 x4 = x0 - 1.0 + 4.0 * C.xxxx;

  
  i = mod(i, 289.0); \r
  float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);\r
  vec4 j1 = permute( permute( permute( permute (\r
             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))\r
           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))\r
           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))\r
           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));\r
  
  
  

  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

  vec4 p0 = grad4(j0,   ip);\r
  vec4 p1 = grad4(j1.x, ip);\r
  vec4 p2 = grad4(j1.y, ip);\r
  vec4 p3 = grad4(j1.z, ip);\r
  vec4 p4 = grad4(j1.w, ip);

  
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\r
  p0 *= norm.x;\r
  p1 *= norm.y;\r
  p2 *= norm.z;\r
  p3 *= norm.w;\r
  p4 *= taylorInvSqrt(dot(p4,p4));

  
  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);\r
  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);\r
  m0 = m0 * m0;\r
  m1 = m1 * m1;\r
  return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))\r
               + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;

}

float getEffect(vec3 position)\r
{\r
    vec3 effectPosition = position;\r
    effectPosition += simplexNoise4d(vec4(\r
        position * uWarpPositionFrequency,\r
        uTime * uWarpTimeFrequency \r
    )) * uWarpStrength;

    return simplexNoise4d(vec4(\r
        effectPosition * uPositionFrequency,   
        uTime * uTimeFrequency     
    )) * uStrength;\r
}

void main()\r
{\r
    vec3 biTangent = cross(normal, tangent.xyz);

    
    float shift = 0.01;\r
    vec3 positionA = csm_Position + tangent.xyz * shift;\r
    vec3 positionB = csm_Position + biTangent * shift;

    
    float effect = getEffect(csm_Position);\r
    csm_Position += effect * normal;\r
    positionA += getEffect(positionA) * normal;\r
    positionB += getEffect(positionB) * normal;

    
    vec3 toA = normalize(positionA - csm_Position);\r
    vec3 toB = normalize(positionB - csm_Position);\r
    csm_Normal = cross(toA, toB);

    
    vEffect = effect / uStrength;\r
}`,Gn=`uniform vec3 uColorA;\r
uniform vec3 uColorB;

varying float vEffect;    

void main()\r
{\r
    float colorMix = smoothstep(- 1.0, 1.0, vEffect);\r
    csm_DiffuseColor.rgb = mix(uColorA, uColorB, colorMix);

    
    csm_Roughness = 1.0;\r
}`,Hn=`varying vec3 vPosition;\r
varying vec3 vNormal;

float random2D (vec2 st) {\r
    return fract(sin(dot(st.xy,\r
                         vec2(12.9898,78.233)))*\r
        43758.5453123);\r
}

void main()\r
{\r
    
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    
    vec4 modelNormal = modelMatrix * vec4(normal, 0.0);

    
    gl_Position = projectionMatrix * viewMatrix * modelPosition;

    
    vPosition = modelPosition.xyz;\r
    vNormal = modelNormal.xyz;\r
}`,Yn=`uniform vec3 uColor;

varying vec3 vPosition;\r
varying vec3 vNormal;

void main()\r
{\r
    vec3 normal = normalize(vNormal);\r
    if (!gl_FrontFacing) normal *= -1.0;

    
    float stripes = mod(vPosition.y, 1.0);\r
    stripes = pow(stripes, 3.0);

    vec3 viewDirection = normalize(vPosition - cameraPosition);\r
    float fresnel = dot(viewDirection, normal) + 1.0;\r
    fresnel = pow(fresnel, 2.0);

    float fallof = smoothstep(0.8, 0.0, fresnel);\r
    float holographic = stripes * fresnel + fresnel * 2.25;\r
    holographic *= fallof;

    
    float wave = sin(length(vPosition) * 10.0) * 0.1;\r
    holographic += wave; 

    
    gl_FragColor = vec4(uColor, holographic);\r
    #include <tonemapping_fragment>\r
    #include <colorspace_fragment>\r
}`;class Vn{constructor(){this.experience=new se,this.scene=this.experience.scene,this.resources=this.experience.resources,this.site=this.experience.site,this.time=this.experience.time;const o={};this.colorA="#17b6cf",this.colorB="#066a7a",this.uniforms={uTime:new q(0),uPositionFrequency:new q(1.2),uTimeFrequency:new q(.8),uStrength:new q(.24),uWarpPositionFrequency:new q(.485),uWarpTimeFrequency:new q(.582),uWarpStrength:new q(.76),uColorA:new q(new ce(this.colorA)),uColorB:new q(new ce(this.colorB))},this.materialMoon=new ue({baseMaterial:ve,vertexShader:qn,fragmentShader:Gn,uniforms:this.uniforms,silent:!0,metalness:0,roughness:1,color:"#049ef4",transmission:0,ior:2,thickness:1.5,transparent:!0,wireframe:!0}),o.color="#ff00bb",this.materialSpaceShip=new Fe({vertexShader:Hn,fragmentShader:Yn,transparent:!0,depthTest:!1,side:xt,depthWrite:!1,blending:wt,uniforms:{uColor:new q(new ce(o.color))}}),this.resource=this.resources.items.modelSpace,this.bakedTexture=this.resources.items.baked,this.bakedTexture.colorSpace=Qe,this.bakedTexture.flipY=!1,this.setModel(),this.setAnimation(),this.time.on("tick",()=>{this.update()})}setModel(){this.model=this.resource.scene,this.model.scale.set(2,2,2),this.model.position.set(-3,-this.site.objectDistance*3,0),this.model.rotation.y=2,this.scene.add(this.model),this.model.traverse(o=>{o.isMesh&&o.name==="Moon"?o.material=this.materialMoon:o.isMesh&&o.name==="Spaceship001"&&(o.material=this.materialSpaceShip)})}setAnimation(){this.animation={},this.animation.mixer=new _t(this.model),this.animation.moon=this.animation.mixer.clipAction(this.resource.animations[0]),this.animation.moon.play(),this.animation.spaceShip=this.animation.mixer.clipAction(this.resource.animations[1]),this.animation.spaceShip.play()}update(){this.uniforms.uTime.value+=this.time.delta*.001,this.animation.mixer.update(this.time.delta*.001)}}class Wn{constructor(){this.experience=new se,this.scene=this.experience.scene,this.resources=this.experience.resources,this.debug=this.experience.debug,this.time=this.experience.time,this.resources.on("ready",()=>{this.sphere=new zn,this.alien=new kn,this.gun=new Un,this.spaceship=new Vn,this.environment=new zt}),this.objectDistance=12}update(){this.spaceship&&this.spaceship.update}}let Pe=null;class se{constructor(o){if(Pe)return Pe;Pe=this,this.canvas=o,this.debug=new Ft,this.sizes=new Ct,this.time=new Pt,this.scene=new bt,this.resources=new jt(Bt),this.site=new Wn,this.camera=new Tt,this.renderer=new Dt,this.sizes.on("resize",()=>{this.resize()}),this.time.on("tick",()=>{this.update()}),this.setMenu(),this.setLoading()}resize(){this.camera.resize(),this.renderer.resize()}update(){this.camera.update(),this.site.update(),this.renderer.update()}setMenu(){const o=document.querySelector(".menu-btn"),f=document.querySelector(".navbar ul"),d=document.querySelectorAll(".navbar a");o&&f&&o.addEventListener("click",()=>{f.classList.toggle("show")}),d.forEach(s=>{s.addEventListener("click",g=>{g.preventDefault(),d.forEach(v=>v.classList.remove("active"),s.classList.add("active")),setTimeout(()=>{f.classList.remove("show"),window.location.href=s.getAttribute("href")},300)})})}setLoading(){this.overlayGeometry=new Mt(90,90,1,1),this.overlayMaterial=new Fe({transparent:!0,uniforms:{uAlpha:{value:1}},vertexShader:`
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
            `,wireframe:!1}),this.overlay=new Je(this.overlayGeometry,this.overlayMaterial),this.overlay.position.z=1,this.scene.add(this.overlay)}}new se(document.querySelector("canvas.webgl"));
//# sourceMappingURL=main-C2cYqfLz.js.map
