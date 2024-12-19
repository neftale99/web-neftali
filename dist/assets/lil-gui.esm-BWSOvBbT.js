import{x as De,y as te,z as xe,J as Te,K as $,N as z,C as N,L as C,O as Fe,Q as Pe,e as He,l as G,k as F,h as M,V as _e,X as P,Y as Be,Z as Ge,_ as we,T as $e,$ as Ue,B as U,a0 as Ve,c as ye,a1 as Ee,a2 as se,a3 as je,f as Y,a4 as Ke,a5 as Le,m as ze,a6 as Xe,a7 as ve,a8 as Ye,j as We,a9 as qe,aa as Je,ab as Qe,u as Ze,G as W,P as et,M as tt,ac as st,ad as nt,ae as it,af as rt,ag as Re,ah as le,ai as X,aj as Se,ak as ot,al as at,am as lt,an as ct,ao as ut,ap as ht,aq as dt,ar as pt,as as ft,at as ce,au as ue,av as he,aw as de,ax as mt,ay as gt,az as At}from"./index-CLn_N3Cb.js";function ds(h,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},s=h.getIndex(),n=h.getAttribute("position"),r=s?s.count:n.count;let i=0;const a=Object.keys(h.attributes),o={},l={},u=[],c=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let f=0,x=a.length;f<x;f++){const b=a[f],w=h.attributes[b];o[b]=new w.constructor(new w.array.constructor(w.count*w.itemSize),w.itemSize,w.normalized);const L=h.morphAttributes[b];L&&(l[b]||(l[b]=[]),L.forEach((y,v)=>{const E=new y.array.constructor(y.count*y.itemSize);l[b][v]=new y.constructor(E,y.itemSize,y.normalized)}))}const p=e*.5,g=Math.log10(1/e),T=Math.pow(10,g),A=p*T;for(let f=0;f<r;f++){const x=s?s.getX(f):f;let b="";for(let w=0,L=a.length;w<L;w++){const y=a[w],v=h.getAttribute(y),E=v.itemSize;for(let I=0;I<E;I++)b+=`${~~(v[c[I]](x)*T+A)},`}if(b in t)u.push(t[b]);else{for(let w=0,L=a.length;w<L;w++){const y=a[w],v=h.getAttribute(y),E=h.morphAttributes[y],I=v.itemSize,ke=o[y],Oe=l[y];for(let j=0;j<I;j++){const oe=c[j],ae=d[j];if(ke[ae](i,v[oe](x)),E)for(let K=0,Ne=E.length;K<Ne;K++)Oe[K][ae](i,E[K][oe](x))}}t[b]=i,u.push(i),i++}}const m=h.clone();for(const f in h.attributes){const x=o[f];if(m.setAttribute(f,new x.constructor(x.array.slice(0,i*x.itemSize),x.itemSize,x.normalized)),f in l)for(let b=0;b<l[f].length;b++){const w=l[f][b];m.morphAttributes[f][b]=new w.constructor(w.array.slice(0,i*w.itemSize),w.itemSize,w.normalized)}}return m.setIndex(u),m}function pe(h,e){if(e===De)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),h;if(e===te||e===xe){let t=h.getIndex();if(t===null){const i=[],a=h.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)i.push(o);h.setIndex(i),t=h.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),h}const s=t.count-2,n=[];if(e===te)for(let i=1;i<=s;i++)n.push(t.getX(0)),n.push(t.getX(i)),n.push(t.getX(i+1));else for(let i=0;i<s;i++)i%2===0?(n.push(t.getX(i)),n.push(t.getX(i+1)),n.push(t.getX(i+2))):(n.push(t.getX(i+2)),n.push(t.getX(i+1)),n.push(t.getX(i)));n.length/3!==s&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=h.clone();return r.setIndex(n),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),h}class ps extends Te{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new wt(t)}),this.register(function(t){return new yt(t)}),this.register(function(t){return new kt(t)}),this.register(function(t){return new Ot(t)}),this.register(function(t){return new Nt(t)}),this.register(function(t){return new Lt(t)}),this.register(function(t){return new vt(t)}),this.register(function(t){return new Rt(t)}),this.register(function(t){return new St(t)}),this.register(function(t){return new _t(t)}),this.register(function(t){return new Ct(t)}),this.register(function(t){return new Et(t)}),this.register(function(t){return new It(t)}),this.register(function(t){return new Mt(t)}),this.register(function(t){return new xt(t)}),this.register(function(t){return new Dt(t)}),this.register(function(t){return new Ft(t)})}load(e,t,s,n){const r=this;let i;if(this.resourcePath!=="")i=this.resourcePath;else if(this.path!==""){const l=$.extractUrlBase(e);i=$.resolveURL(l,this.path)}else i=$.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){n?n(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},o=new z(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{r.parse(l,i,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},s,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,s,n){let r;const i={},a={},o=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(o.decode(new Uint8Array(e,0,4))===Ce){try{i[_.KHR_BINARY_GLTF]=new Pt(e)}catch(c){n&&n(c);return}r=JSON.parse(i[_.KHR_BINARY_GLTF].content)}else r=JSON.parse(o.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new qt(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const c=this.pluginCallbacks[u](l);c.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[c.name]=c,i[c.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const c=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(c){case _.KHR_MATERIALS_UNLIT:i[c]=new Tt;break;case _.KHR_DRACO_MESH_COMPRESSION:i[c]=new Ht(r,this.dracoLoader);break;case _.KHR_TEXTURE_TRANSFORM:i[c]=new Bt;break;case _.KHR_MESH_QUANTIZATION:i[c]=new Gt;break;default:d.indexOf(c)>=0&&a[c]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+c+'".')}}l.setExtensions(i),l.setPlugins(a),l.parse(s,n)}parseAsync(e,t){const s=this;return new Promise(function(n,r){s.parse(e,t,n,r)})}}function bt(){let h={};return{get:function(e){return h[e]},add:function(e,t){h[e]=t},remove:function(e){delete h[e]},removeAll:function(){h={}}}}const _={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class xt{constructor(e){this.parser=e,this.name=_.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let s=0,n=t.length;s<n;s++){const r=t[s];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,s="light:"+e;let n=t.cache.get(s);if(n)return n;const r=t.json,o=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new N(16777215);o.color!==void 0&&u.setRGB(o.color[0],o.color[1],o.color[2],C);const c=o.range!==void 0?o.range:0;switch(o.type){case"directional":l=new He(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Pe(u),l.distance=c;break;case"spot":l=new Fe(u),l.distance=c,o.spot=o.spot||{},o.spot.innerConeAngle=o.spot.innerConeAngle!==void 0?o.spot.innerConeAngle:0,o.spot.outerConeAngle=o.spot.outerConeAngle!==void 0?o.spot.outerConeAngle:Math.PI/4,l.angle=o.spot.outerConeAngle,l.penumbra=1-o.spot.innerConeAngle/o.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+o.type)}return l.position.set(0,0,0),l.decay=2,k(l,o),o.intensity!==void 0&&(l.intensity=o.intensity),l.name=t.createUniqueName(o.name||"light_"+e),n=Promise.resolve(l),t.cache.add(s,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,s=this.parser,r=s.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(o){return s._getNodeRef(t.cache,a,o)})}}class Tt{constructor(){this.name=_.KHR_MATERIALS_UNLIT}getMaterialType(){return G}extendParams(e,t,s){const n=[];e.color=new N(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const i=r.baseColorFactor;e.color.setRGB(i[0],i[1],i[2],C),e.opacity=i[3]}r.baseColorTexture!==void 0&&n.push(s.assignTexture(e,"map",r.baseColorTexture,F))}return Promise.all(n)}}class _t{constructor(e){this.parser=e,this.name=_.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class wt{constructor(e){this.parser=e,this.name=_.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:M}extendMaterialParams(e,t){const s=this.parser,n=s.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],i=n.extensions[this.name];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&r.push(s.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&r.push(s.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(r.push(s.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const a=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new _e(a,a)}return Promise.all(r)}}class yt{constructor(e){this.parser=e,this.name=_.KHR_MATERIALS_DISPERSION}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:M}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Et{constructor(e){this.parser=e,this.name=_.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:M}extendMaterialParams(e,t){const s=this.parser,n=s.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],i=n.extensions[this.name];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&r.push(s.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&r.push(s.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(r)}}class Lt{constructor(e){this.parser=e,this.name=_.KHR_MATERIALS_SHEEN}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:M}extendMaterialParams(e,t){const s=this.parser,n=s.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new N(0,0,0),t.sheenRoughness=0,t.sheen=1;const i=n.extensions[this.name];if(i.sheenColorFactor!==void 0){const a=i.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],C)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&r.push(s.assignTexture(t,"sheenColorMap",i.sheenColorTexture,F)),i.sheenRoughnessTexture!==void 0&&r.push(s.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(r)}}class vt{constructor(e){this.parser=e,this.name=_.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:M}extendMaterialParams(e,t){const s=this.parser,n=s.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],i=n.extensions[this.name];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&r.push(s.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(r)}}class Rt{constructor(e){this.parser=e,this.name=_.KHR_MATERIALS_VOLUME}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:M}extendMaterialParams(e,t){const s=this.parser,n=s.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],i=n.extensions[this.name];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&r.push(s.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;const a=i.attenuationColor||[1,1,1];return t.attenuationColor=new N().setRGB(a[0],a[1],a[2],C),Promise.all(r)}}class St{constructor(e){this.parser=e,this.name=_.KHR_MATERIALS_IOR}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:M}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Ct{constructor(e){this.parser=e,this.name=_.KHR_MATERIALS_SPECULAR}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:M}extendMaterialParams(e,t){const s=this.parser,n=s.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],i=n.extensions[this.name];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&r.push(s.assignTexture(t,"specularIntensityMap",i.specularTexture));const a=i.specularColorFactor||[1,1,1];return t.specularColor=new N().setRGB(a[0],a[1],a[2],C),i.specularColorTexture!==void 0&&r.push(s.assignTexture(t,"specularColorMap",i.specularColorTexture,F)),Promise.all(r)}}class Mt{constructor(e){this.parser=e,this.name=_.EXT_MATERIALS_BUMP}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:M}extendMaterialParams(e,t){const s=this.parser,n=s.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],i=n.extensions[this.name];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&r.push(s.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(r)}}class It{constructor(e){this.parser=e,this.name=_.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:M}extendMaterialParams(e,t){const s=this.parser,n=s.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],i=n.extensions[this.name];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&r.push(s.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(r)}}class kt{constructor(e){this.parser=e,this.name=_.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,s=t.json,n=s.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const r=n.extensions[this.name],i=t.options.ktx2Loader;if(!i){if(s.extensionsRequired&&s.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,i)}}class Ot{constructor(e){this.parser=e,this.name=_.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,s=this.parser,n=s.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;const i=r.extensions[t],a=n.images[i.source];let o=s.textureLoader;if(a.uri){const l=s.options.manager.getHandler(a.uri);l!==null&&(o=l)}return this.detectSupport().then(function(l){if(l)return s.loadTextureImage(e,i.source,o);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return s.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Nt{constructor(e){this.parser=e,this.name=_.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,s=this.parser,n=s.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;const i=r.extensions[t],a=n.images[i.source];let o=s.textureLoader;if(a.uri){const l=s.options.manager.getHandler(a.uri);l!==null&&(o=l)}return this.detectSupport().then(function(l){if(l)return s.loadTextureImage(e,i.source,o);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return s.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Dt{constructor(e){this.name=_.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,s=t.bufferViews[e];if(s.extensions&&s.extensions[this.name]){const n=s.extensions[this.name],r=this.parser.getDependency("buffer",n.buffer),i=this.parser.options.meshoptDecoder;if(!i||!i.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const o=n.byteOffset||0,l=n.byteLength||0,u=n.count,c=n.byteStride,d=new Uint8Array(a,o,l);return i.decodeGltfBufferAsync?i.decodeGltfBufferAsync(u,c,d,n.mode,n.filter).then(function(p){return p.buffer}):i.ready.then(function(){const p=new ArrayBuffer(u*c);return i.decodeGltfBuffer(new Uint8Array(p),u,c,d,n.mode,n.filter),p})})}else return null}}class Ft{constructor(e){this.name=_.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,s=t.nodes[e];if(!s.extensions||!s.extensions[this.name]||s.mesh===void 0)return null;const n=t.meshes[s.mesh];for(const l of n.primitives)if(l.mode!==R.TRIANGLES&&l.mode!==R.TRIANGLE_STRIP&&l.mode!==R.TRIANGLE_FAN&&l.mode!==void 0)return null;const i=s.extensions[this.name].attributes,a=[],o={};for(const l in i)a.push(this.parser.getDependency("accessor",i[l]).then(u=>(o[l]=u,o[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),c=u.isGroup?u.children:[u],d=l[0].count,p=[];for(const g of c){const T=new X,A=new P,m=new Se,f=new P(1,1,1),x=new Be(g.geometry,g.material,d);for(let b=0;b<d;b++)o.TRANSLATION&&A.fromBufferAttribute(o.TRANSLATION,b),o.ROTATION&&m.fromBufferAttribute(o.ROTATION,b),o.SCALE&&f.fromBufferAttribute(o.SCALE,b),x.setMatrixAt(b,T.compose(A,m,f));for(const b in o)if(b==="_COLOR_0"){const w=o[b];x.instanceColor=new Ge(w.array,w.itemSize,w.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,o[b]);we.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),p.push(x)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Ce="glTF",B=12,fe={JSON:1313821514,BIN:5130562};class Pt{constructor(e){this.name=_.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,B),s=new TextDecoder;if(this.header={magic:s.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ce)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-B,r=new DataView(e,B);let i=0;for(;i<n;){const a=r.getUint32(i,!0);i+=4;const o=r.getUint32(i,!0);if(i+=4,o===fe.JSON){const l=new Uint8Array(e,B+i,a);this.content=s.decode(l)}else if(o===fe.BIN){const l=B+i;this.body=e.slice(l,l+a)}i+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Ht{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=_.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const s=this.json,n=this.dracoLoader,r=e.extensions[this.name].bufferView,i=e.extensions[this.name].attributes,a={},o={},l={};for(const u in i){const c=ne[u]||u.toLowerCase();a[c]=i[u]}for(const u in e.attributes){const c=ne[u]||u.toLowerCase();if(i[u]!==void 0){const d=s.accessors[e.attributes[u]],p=H[d.componentType];l[c]=p.name,o[c]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(c,d){n.decodeDracoFile(u,function(p){for(const g in p.attributes){const T=p.attributes[g],A=o[g];A!==void 0&&(T.normalized=A)}c(p)},a,l,C,d)})})}}class Bt{constructor(){this.name=_.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Gt{constructor(){this.name=_.KHR_MESH_QUANTIZATION}}class Me extends At{constructor(e,t,s,n){super(e,t,s,n)}copySampleValue_(e){const t=this.resultBuffer,s=this.sampleValues,n=this.valueSize,r=e*n*3+n;for(let i=0;i!==n;i++)t[i]=s[r+i];return t}interpolate_(e,t,s,n){const r=this.resultBuffer,i=this.sampleValues,a=this.valueSize,o=a*2,l=a*3,u=n-t,c=(s-t)/u,d=c*c,p=d*c,g=e*l,T=g-l,A=-2*p+3*d,m=p-d,f=1-A,x=m-d+c;for(let b=0;b!==a;b++){const w=i[T+b+a],L=i[T+b+o]*u,y=i[g+b+a],v=i[g+b]*u;r[b]=f*w+x*L+A*y+m*v}return r}}const $t=new Se;class Ut extends Me{interpolate_(e,t,s,n){const r=super.interpolate_(e,t,s,n);return $t.fromArray(r).normalize().toArray(r),r}}const R={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},H={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},me={9728:ot,9729:ye,9984:at,9985:lt,9986:ct,9987:Ee},ge={33071:ut,33648:ht,10497:se},q={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ne={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},O={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Vt={CUBICSPLINE:void 0,LINEAR:Re,STEP:dt},J={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function jt(h){return h.DefaultMaterial===void 0&&(h.DefaultMaterial=new Le({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:pt})),h.DefaultMaterial}function D(h,e,t){for(const s in t.extensions)h[s]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[s]=t.extensions[s])}function k(h,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(h.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Kt(h,e,t){let s=!1,n=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const c=e[l];if(c.POSITION!==void 0&&(s=!0),c.NORMAL!==void 0&&(n=!0),c.COLOR_0!==void 0&&(r=!0),s&&n&&r)break}if(!s&&!n&&!r)return Promise.resolve(h);const i=[],a=[],o=[];for(let l=0,u=e.length;l<u;l++){const c=e[l];if(s){const d=c.POSITION!==void 0?t.getDependency("accessor",c.POSITION):h.attributes.position;i.push(d)}if(n){const d=c.NORMAL!==void 0?t.getDependency("accessor",c.NORMAL):h.attributes.normal;a.push(d)}if(r){const d=c.COLOR_0!==void 0?t.getDependency("accessor",c.COLOR_0):h.attributes.color;o.push(d)}}return Promise.all([Promise.all(i),Promise.all(a),Promise.all(o)]).then(function(l){const u=l[0],c=l[1],d=l[2];return s&&(h.morphAttributes.position=u),n&&(h.morphAttributes.normal=c),r&&(h.morphAttributes.color=d),h.morphTargetsRelative=!0,h})}function zt(h,e){if(h.updateMorphTargets(),e.weights!==void 0)for(let t=0,s=e.weights.length;t<s;t++)h.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(h.morphTargetInfluences.length===t.length){h.morphTargetDictionary={};for(let s=0,n=t.length;s<n;s++)h.morphTargetDictionary[t[s]]=s}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Xt(h){let e;const t=h.extensions&&h.extensions[_.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Q(t.attributes):e=h.indices+":"+Q(h.attributes)+":"+h.mode,h.targets!==void 0)for(let s=0,n=h.targets.length;s<n;s++)e+=":"+Q(h.targets[s]);return e}function Q(h){let e="";const t=Object.keys(h).sort();for(let s=0,n=t.length;s<n;s++)e+=t[s]+":"+h[t[s]]+";";return e}function ie(h){switch(h){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Yt(h){return h.search(/\.jpe?g($|\?)/i)>0||h.search(/^data\:image\/jpeg/)===0?"image/jpeg":h.search(/\.webp($|\?)/i)>0||h.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Wt=new X;class qt{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new bt,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let s=!1,n=-1,r=!1,i=-1;if(typeof navigator<"u"){const a=navigator.userAgent;s=/^((?!chrome|android).)*safari/i.test(a)===!0;const o=a.match(/Version\/(\d+)/);n=s&&o?parseInt(o[1],10):-1,r=a.indexOf("Firefox")>-1,i=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||s&&n<17||r&&i<98?this.textureLoader=new $e(this.options.manager):this.textureLoader=new Ue(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new z(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const s=this,n=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(i){return i._markDefs&&i._markDefs()}),Promise.all(this._invokeAll(function(i){return i.beforeRoot&&i.beforeRoot()})).then(function(){return Promise.all([s.getDependencies("scene"),s.getDependencies("animation"),s.getDependencies("camera")])}).then(function(i){const a={scene:i[0][n.scene||0],scenes:i[0],animations:i[1],cameras:i[2],asset:n.asset,parser:s,userData:{}};return D(r,a,n),k(a,n),Promise.all(s._invokeAll(function(o){return o.afterRoot&&o.afterRoot(a)})).then(function(){for(const o of a.scenes)o.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],s=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){const i=t[n].joints;for(let a=0,o=i.length;a<o;a++)e[i[a]].isBone=!0}for(let n=0,r=e.length;n<r;n++){const i=e[n];i.mesh!==void 0&&(this._addNodeRef(this.meshCache,i.mesh),i.skin!==void 0&&(s[i.mesh].isSkinnedMesh=!0)),i.camera!==void 0&&this._addNodeRef(this.cameraCache,i.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,s){if(e.refs[t]<=1)return s;const n=s.clone(),r=(i,a)=>{const o=this.associations.get(i);o!=null&&this.associations.set(a,o);for(const[l,u]of i.children.entries())r(u,a.children[l])};return r(s,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let s=0;s<t.length;s++){const n=e(t[s]);if(n)return n}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const s=[];for(let n=0;n<t.length;n++){const r=e(t[n]);r&&s.push(r)}return s}getDependency(e,t){const s=e+":"+t;let n=this.cache.get(s);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":n=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(s,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const s=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(r,i){return s.getDependency(e,i)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],s=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[_.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(r,i){s.load($.resolveURL(t.uri,n.path),r,void 0,function(){i(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(s){const n=t.byteLength||0,r=t.byteOffset||0;return s.slice(r,r+n)})}loadAccessor(e){const t=this,s=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){const i=q[n.type],a=H[n.componentType],o=n.normalized===!0,l=new a(n.count*i);return Promise.resolve(new U(l,i,o))}const r=[];return n.bufferView!==void 0?r.push(this.getDependency("bufferView",n.bufferView)):r.push(null),n.sparse!==void 0&&(r.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(r).then(function(i){const a=i[0],o=q[n.type],l=H[n.componentType],u=l.BYTES_PER_ELEMENT,c=u*o,d=n.byteOffset||0,p=n.bufferView!==void 0?s.bufferViews[n.bufferView].byteStride:void 0,g=n.normalized===!0;let T,A;if(p&&p!==c){const m=Math.floor(d/p),f="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+m+":"+n.count;let x=t.cache.get(f);x||(T=new l(a,m*p,n.count*p/u),x=new Ve(T,p/u),t.cache.add(f,x)),A=new ft(x,o,d%p/u,g)}else a===null?T=new l(n.count*o):T=new l(a,d,n.count*o),A=new U(T,o,g);if(n.sparse!==void 0){const m=q.SCALAR,f=H[n.sparse.indices.componentType],x=n.sparse.indices.byteOffset||0,b=n.sparse.values.byteOffset||0,w=new f(i[1],x,n.sparse.count*m),L=new l(i[2],b,n.sparse.count*o);a!==null&&(A=new U(A.array.slice(),A.itemSize,A.normalized));for(let y=0,v=w.length;y<v;y++){const E=w[y];if(A.setX(E,L[y*o]),o>=2&&A.setY(E,L[y*o+1]),o>=3&&A.setZ(E,L[y*o+2]),o>=4&&A.setW(E,L[y*o+3]),o>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return A})}loadTexture(e){const t=this.json,s=this.options,r=t.textures[e].source,i=t.images[r];let a=this.textureLoader;if(i.uri){const o=s.manager.getHandler(i.uri);o!==null&&(a=o)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,s){const n=this,r=this.json,i=r.textures[e],a=r.images[t],o=(a.uri||a.bufferView)+":"+i.sampler;if(this.textureCache[o])return this.textureCache[o];const l=this.loadImageSource(t,s).then(function(u){u.flipY=!1,u.name=i.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[i.sampler]||{};return u.magFilter=me[d.magFilter]||ye,u.minFilter=me[d.minFilter]||Ee,u.wrapS=ge[d.wrapS]||se,u.wrapT=ge[d.wrapT]||se,n.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[o]=l,l}loadImageSource(e,t){const s=this,n=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(c=>c.clone());const i=n.images[e],a=self.URL||self.webkitURL;let o=i.uri||"",l=!1;if(i.bufferView!==void 0)o=s.getDependency("bufferView",i.bufferView).then(function(c){l=!0;const d=new Blob([c],{type:i.mimeType});return o=a.createObjectURL(d),o});else if(i.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(o).then(function(c){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(T){const A=new ce(T);A.needsUpdate=!0,d(A)}),t.load($.resolveURL(c,r.path),g,void 0,p)})}).then(function(c){return l===!0&&a.revokeObjectURL(o),k(c,i),c.userData.mimeType=i.mimeType||Yt(i.uri),c}).catch(function(c){throw console.error("THREE.GLTFLoader: Couldn't load texture",o),c});return this.sourceCache[e]=u,u}assignTexture(e,t,s,n){const r=this;return this.getDependency("texture",s.index).then(function(i){if(!i)return null;if(s.texCoord!==void 0&&s.texCoord>0&&(i=i.clone(),i.channel=s.texCoord),r.extensions[_.KHR_TEXTURE_TRANSFORM]){const a=s.extensions!==void 0?s.extensions[_.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const o=r.associations.get(i);i=r.extensions[_.KHR_TEXTURE_TRANSFORM].extendTexture(i,a),r.associations.set(i,o)}}return n!==void 0&&(i.colorSpace=n),e[t]=i,i})}assignFinalMaterial(e){const t=e.geometry;let s=e.material;const n=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,i=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+s.uuid;let o=this.cache.get(a);o||(o=new je,Y.prototype.copy.call(o,s),o.color.copy(s.color),o.map=s.map,o.sizeAttenuation=!1,this.cache.add(a,o)),s=o}else if(e.isLine){const a="LineBasicMaterial:"+s.uuid;let o=this.cache.get(a);o||(o=new Ke,Y.prototype.copy.call(o,s),o.color.copy(s.color),o.map=s.map,this.cache.add(a,o)),s=o}if(n||r||i){let a="ClonedMaterial:"+s.uuid+":";n&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),i&&(a+="flat-shading:");let o=this.cache.get(a);o||(o=s.clone(),r&&(o.vertexColors=!0),i&&(o.flatShading=!0),n&&(o.normalScale&&(o.normalScale.y*=-1),o.clearcoatNormalScale&&(o.clearcoatNormalScale.y*=-1)),this.cache.add(a,o),this.associations.set(o,this.associations.get(s))),s=o}e.material=s}getMaterialType(){return Le}loadMaterial(e){const t=this,s=this.json,n=this.extensions,r=s.materials[e];let i;const a={},o=r.extensions||{},l=[];if(o[_.KHR_MATERIALS_UNLIT]){const c=n[_.KHR_MATERIALS_UNLIT];i=c.getMaterialType(),l.push(c.extendParams(a,r,t))}else{const c=r.pbrMetallicRoughness||{};if(a.color=new N(1,1,1),a.opacity=1,Array.isArray(c.baseColorFactor)){const d=c.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],C),a.opacity=d[3]}c.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",c.baseColorTexture,F)),a.metalness=c.metallicFactor!==void 0?c.metallicFactor:1,a.roughness=c.roughnessFactor!==void 0?c.roughnessFactor:1,c.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",c.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",c.metallicRoughnessTexture))),i=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=ze);const u=r.alphaMode||J.OPAQUE;if(u===J.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===J.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&i!==G&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new _e(1,1),r.normalTexture.scale!==void 0)){const c=r.normalTexture.scale;a.normalScale.set(c,c)}if(r.occlusionTexture!==void 0&&i!==G&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&i!==G){const c=r.emissiveFactor;a.emissive=new N().setRGB(c[0],c[1],c[2],C)}return r.emissiveTexture!==void 0&&i!==G&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,F)),Promise.all(l).then(function(){const c=new i(a);return r.name&&(c.name=r.name),k(c,r),t.associations.set(c,{materials:e}),r.extensions&&D(n,c,r),c})}createUniqueName(e){const t=Xe.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,s=this.extensions,n=this.primitiveCache;function r(a){return s[_.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(o){return Ae(o,a,t)})}const i=[];for(let a=0,o=e.length;a<o;a++){const l=e[a],u=Xt(l),c=n[u];if(c)i.push(c.promise);else{let d;l.extensions&&l.extensions[_.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Ae(new ve,l,t),n[u]={primitive:l,promise:d},i.push(d)}}return Promise.all(i)}loadMesh(e){const t=this,s=this.json,n=this.extensions,r=s.meshes[e],i=r.primitives,a=[];for(let o=0,l=i.length;o<l;o++){const u=i[o].material===void 0?jt(this.cache):this.getDependency("material",i[o].material);a.push(u)}return a.push(t.loadGeometries(i)),Promise.all(a).then(function(o){const l=o.slice(0,o.length-1),u=o[o.length-1],c=[];for(let p=0,g=u.length;p<g;p++){const T=u[p],A=i[p];let m;const f=l[p];if(A.mode===R.TRIANGLES||A.mode===R.TRIANGLE_STRIP||A.mode===R.TRIANGLE_FAN||A.mode===void 0)m=r.isSkinnedMesh===!0?new Ye(T,f):new We(T,f),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),A.mode===R.TRIANGLE_STRIP?m.geometry=pe(m.geometry,xe):A.mode===R.TRIANGLE_FAN&&(m.geometry=pe(m.geometry,te));else if(A.mode===R.LINES)m=new qe(T,f);else if(A.mode===R.LINE_STRIP)m=new Je(T,f);else if(A.mode===R.LINE_LOOP)m=new Qe(T,f);else if(A.mode===R.POINTS)m=new Ze(T,f);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+A.mode);Object.keys(m.geometry.morphAttributes).length>0&&zt(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),k(m,r),A.extensions&&D(n,m,A),t.assignFinalMaterial(m),c.push(m)}for(let p=0,g=c.length;p<g;p++)t.associations.set(c[p],{meshes:e,primitives:p});if(c.length===1)return r.extensions&&D(n,c[0],r),c[0];const d=new W;r.extensions&&D(n,d,r),t.associations.set(d,{meshes:e});for(let p=0,g=c.length;p<g;p++)d.add(c[p]);return d})}loadCamera(e){let t;const s=this.json.cameras[e],n=s[s.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return s.type==="perspective"?t=new et(tt.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):s.type==="orthographic"&&(t=new st(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),s.name&&(t.name=this.createUniqueName(s.name)),k(t,s),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],s=[];for(let n=0,r=t.joints.length;n<r;n++)s.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?s.push(this.getDependency("accessor",t.inverseBindMatrices)):s.push(null),Promise.all(s).then(function(n){const r=n.pop(),i=n,a=[],o=[];for(let l=0,u=i.length;l<u;l++){const c=i[l];if(c){a.push(c);const d=new X;r!==null&&d.fromArray(r.array,l*16),o.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new nt(a,o)})}loadAnimation(e){const t=this.json,s=this,n=t.animations[e],r=n.name?n.name:"animation_"+e,i=[],a=[],o=[],l=[],u=[];for(let c=0,d=n.channels.length;c<d;c++){const p=n.channels[c],g=n.samplers[p.sampler],T=p.target,A=T.node,m=n.parameters!==void 0?n.parameters[g.input]:g.input,f=n.parameters!==void 0?n.parameters[g.output]:g.output;T.node!==void 0&&(i.push(this.getDependency("node",A)),a.push(this.getDependency("accessor",m)),o.push(this.getDependency("accessor",f)),l.push(g),u.push(T))}return Promise.all([Promise.all(i),Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(u)]).then(function(c){const d=c[0],p=c[1],g=c[2],T=c[3],A=c[4],m=[];for(let f=0,x=d.length;f<x;f++){const b=d[f],w=p[f],L=g[f],y=T[f],v=A[f];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const E=s._createAnimationTracks(b,w,L,y,v);if(E)for(let I=0;I<E.length;I++)m.push(E[I])}return new it(r,void 0,m)})}createNodeMesh(e){const t=this.json,s=this,n=t.nodes[e];return n.mesh===void 0?null:s.getDependency("mesh",n.mesh).then(function(r){const i=s._getNodeRef(s.meshCache,n.mesh,r);return n.weights!==void 0&&i.traverse(function(a){if(a.isMesh)for(let o=0,l=n.weights.length;o<l;o++)a.morphTargetInfluences[o]=n.weights[o]}),i})}loadNode(e){const t=this.json,s=this,n=t.nodes[e],r=s._loadNodeShallow(e),i=[],a=n.children||[];for(let l=0,u=a.length;l<u;l++)i.push(s.getDependency("node",a[l]));const o=n.skin===void 0?Promise.resolve(null):s.getDependency("skin",n.skin);return Promise.all([r,Promise.all(i),o]).then(function(l){const u=l[0],c=l[1],d=l[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,Wt)});for(let p=0,g=c.length;p<g;p++)u.add(c[p]);return u})}_loadNodeShallow(e){const t=this.json,s=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],i=r.name?n.createUniqueName(r.name):"",a=[],o=n._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return o&&a.push(o),r.camera!==void 0&&a.push(n.getDependency("camera",r.camera).then(function(l){return n._getNodeRef(n.cameraCache,r.camera,l)})),n._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new rt:l.length>1?u=new W:l.length===1?u=l[0]:u=new we,u!==l[0])for(let c=0,d=l.length;c<d;c++)u.add(l[c]);if(r.name&&(u.userData.name=r.name,u.name=i),k(u,r),r.extensions&&D(s,u,r),r.matrix!==void 0){const c=new X;c.fromArray(r.matrix),u.applyMatrix4(c)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return n.associations.has(u)||n.associations.set(u,{}),n.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,s=this.json.scenes[e],n=this,r=new W;s.name&&(r.name=n.createUniqueName(s.name)),k(r,s),s.extensions&&D(t,r,s);const i=s.nodes||[],a=[];for(let o=0,l=i.length;o<l;o++)a.push(n.getDependency("node",i[o]));return Promise.all(a).then(function(o){for(let u=0,c=o.length;u<c;u++)r.add(o[u]);const l=u=>{const c=new Map;for(const[d,p]of n.associations)(d instanceof Y||d instanceof ce)&&c.set(d,p);return u.traverse(d=>{const p=n.associations.get(d);p!=null&&c.set(d,p)}),c};return n.associations=l(r),r})}_createAnimationTracks(e,t,s,n,r){const i=[],a=e.name?e.name:e.uuid,o=[];O[r.path]===O.weights?e.traverse(function(d){d.morphTargetInfluences&&o.push(d.name?d.name:d.uuid)}):o.push(a);let l;switch(O[r.path]){case O.weights:l=he;break;case O.rotation:l=de;break;case O.position:case O.scale:l=ue;break;default:switch(s.itemSize){case 1:l=he;break;case 2:case 3:default:l=ue;break}break}const u=n.interpolation!==void 0?Vt[n.interpolation]:Re,c=this._getArrayFromAccessor(s);for(let d=0,p=o.length;d<p;d++){const g=new l(o[d]+"."+O[r.path],t.array,c,u);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),i.push(g)}return i}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const s=ie(t.constructor),n=new Float32Array(t.length);for(let r=0,i=t.length;r<i;r++)n[r]=t[r]*s;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(s){const n=this instanceof de?Ut:Me;return new n(this.times,this.values,this.getValueSize()/3,s)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Jt(h,e,t){const s=e.attributes,n=new mt;if(s.POSITION!==void 0){const a=t.json.accessors[s.POSITION],o=a.min,l=a.max;if(o!==void 0&&l!==void 0){if(n.set(new P(o[0],o[1],o[2]),new P(l[0],l[1],l[2])),a.normalized){const u=ie(H[a.componentType]);n.min.multiplyScalar(u),n.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new P,o=new P;for(let l=0,u=r.length;l<u;l++){const c=r[l];if(c.POSITION!==void 0){const d=t.json.accessors[c.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(o.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),o.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),o.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const T=ie(H[d.componentType]);o.multiplyScalar(T)}a.max(o)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(a)}h.boundingBox=n;const i=new gt;n.getCenter(i.center),i.radius=n.min.distanceTo(n.max)/2,h.boundingSphere=i}function Ae(h,e,t){const s=e.attributes,n=[];function r(i,a){return t.getDependency("accessor",i).then(function(o){h.setAttribute(a,o)})}for(const i in s){const a=ne[i]||i.toLowerCase();a in h.attributes||n.push(r(s[i],a))}if(e.indices!==void 0&&!h.index){const i=t.getDependency("accessor",e.indices).then(function(a){h.setIndex(a)});n.push(i)}return le.workingColorSpace!==C&&"COLOR_0"in s&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${le.workingColorSpace}" not supported.`),k(h,e),Jt(h,e,t),Promise.all(n).then(function(){return e.targets!==void 0?Kt(h,e.targets,t):h})}const Z=new WeakMap;class fs extends Te{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,s,n){const r=new z(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,i=>{this.parse(i,t,n)},s,n)}parse(e,t,s=()=>{}){this.decodeDracoFile(e,t,null,null,F,s).catch(s)}decodeDracoFile(e,t,s,n,r=C,i=()=>{}){const a={attributeIDs:s||this.defaultAttributeIDs,attributeTypes:n||this.defaultAttributeTypes,useUniqueIDs:!!s,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(i)}decodeGeometry(e,t){const s=JSON.stringify(t);if(Z.has(e)){const o=Z.get(e);if(o.key===s)return o.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let n;const r=this.workerNextTaskID++,i=e.byteLength,a=this._getWorker(r,i).then(o=>(n=o,new Promise((l,u)=>{n._callbacks[r]={resolve:l,reject:u},n.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(o=>this._createGeometry(o.geometry));return a.catch(()=>!0).then(()=>{n&&r&&this._releaseTask(n,r)}),Z.set(e,{key:s,promise:a}),a}_createGeometry(e){const t=new ve;e.index&&t.setIndex(new U(e.index.array,1));for(let s=0;s<e.attributes.length;s++){const n=e.attributes[s],r=n.name,i=n.array,a=n.itemSize,o=new U(i,a);r==="color"&&(this._assignVertexColorSpace(o,n.vertexColorSpace),o.normalized=!(i instanceof Float32Array)),t.setAttribute(r,o)}return t}_assignVertexColorSpace(e,t){if(t!==F)return;const s=new N;for(let n=0,r=e.count;n<r;n++)s.fromBufferAttribute(e,n).convertSRGBToLinear(),e.setXYZ(n,s.r,s.g,s.b)}_loadLibrary(e,t){const s=new z(this.manager);return s.setPath(this.decoderPath),s.setResponseType(t),s.setWithCredentials(this.withCredentials),new Promise((n,r)=>{s.load(e,n,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(s=>{const n=s[0];e||(this.decoderConfig.wasmBinary=s[1]);const r=Qt.toString(),i=["/* draco decoder */",n,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([i]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const n=new Worker(this.workerSourceURL);n._callbacks={},n._taskCosts={},n._taskLoad=0,n.postMessage({type:"init",decoderConfig:this.decoderConfig}),n.onmessage=function(r){const i=r.data;switch(i.type){case"decode":n._callbacks[i.id].resolve(i);break;case"error":n._callbacks[i.id].reject(i);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+i.type+'"')}},this.workerPool.push(n)}else this.workerPool.sort(function(n,r){return n._taskLoad>r._taskLoad?-1:1});const s=this.workerPool[this.workerPool.length-1];return s._taskCosts[e]=t,s._taskLoad+=t,s})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function Qt(){let h,e;onmessage=function(i){const a=i.data;switch(a.type){case"init":h=a.decoderConfig,e=new Promise(function(u){h.onModuleLoaded=function(c){u({draco:c})},DracoDecoderModule(h)});break;case"decode":const o=a.buffer,l=a.taskConfig;e.then(u=>{const c=u.draco,d=new c.Decoder;try{const p=t(c,d,new Int8Array(o),l),g=p.attributes.map(T=>T.array.buffer);p.index&&g.push(p.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:p},g)}catch(p){console.error(p),self.postMessage({type:"error",id:a.id,error:p.message})}finally{c.destroy(d)}});break}};function t(i,a,o,l){const u=l.attributeIDs,c=l.attributeTypes;let d,p;const g=a.GetEncodedGeometryType(o);if(g===i.TRIANGULAR_MESH)d=new i.Mesh,p=a.DecodeArrayToMesh(o,o.byteLength,d);else if(g===i.POINT_CLOUD)d=new i.PointCloud,p=a.DecodeArrayToPointCloud(o,o.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!p.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+p.error_msg());const T={index:null,attributes:[]};for(const A in u){const m=self[c[A]];let f,x;if(l.useUniqueIDs)x=u[A],f=a.GetAttributeByUniqueId(d,x);else{if(x=a.GetAttributeId(d,i[u[A]]),x===-1)continue;f=a.GetAttribute(d,x)}const b=n(i,a,d,A,m,f);A==="color"&&(b.vertexColorSpace=l.vertexColorSpace),T.attributes.push(b)}return g===i.TRIANGULAR_MESH&&(T.index=s(i,a,d)),i.destroy(d),T}function s(i,a,o){const u=o.num_faces()*3,c=u*4,d=i._malloc(c);a.GetTrianglesUInt32Array(o,c,d);const p=new Uint32Array(i.HEAPF32.buffer,d,u).slice();return i._free(d),{array:p,itemSize:1}}function n(i,a,o,l,u,c){const d=c.num_components(),g=o.num_points()*d,T=g*u.BYTES_PER_ELEMENT,A=r(i,u),m=i._malloc(T);a.GetAttributeDataArrayForAllPoints(o,c,A,T,m);const f=new u(i.HEAPF32.buffer,m,g).slice();return i._free(m),{name:l,array:f,itemSize:d}}function r(i,a){switch(a){case Float32Array:return i.DT_FLOAT32;case Int8Array:return i.DT_INT8;case Int16Array:return i.DT_INT16;case Int32Array:return i.DT_INT32;case Uint8Array:return i.DT_UINT8;case Uint16Array:return i.DT_UINT16;case Uint32Array:return i.DT_UINT32}}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class S{constructor(e,t,s,n,r="div"){this.parent=e,this.object=t,this.property=s,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(n),this.$name=document.createElement("div"),this.$name.classList.add("name"),S.nextNameID=S.nextNameID||0,this.$name.id=`lil-gui-name-${++S.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",i=>i.stopPropagation()),this.domElement.addEventListener("keyup",i=>i.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(s)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Zt extends S{constructor(e,t,s){super(e,t,s,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function re(h){let e,t;return(e=h.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=h.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=h.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const es={isPrimitive:!0,match:h=>typeof h=="string",fromHexString:re,toHexString:re},V={isPrimitive:!0,match:h=>typeof h=="number",fromHexString:h=>parseInt(h.substring(1),16),toHexString:h=>"#"+h.toString(16).padStart(6,0)},ts={isPrimitive:!1,match:h=>Array.isArray(h),fromHexString(h,e,t=1){const s=V.fromHexString(h);e[0]=(s>>16&255)/255*t,e[1]=(s>>8&255)/255*t,e[2]=(s&255)/255*t},toHexString([h,e,t],s=1){s=255/s;const n=h*s<<16^e*s<<8^t*s<<0;return V.toHexString(n)}},ss={isPrimitive:!1,match:h=>Object(h)===h,fromHexString(h,e,t=1){const s=V.fromHexString(h);e.r=(s>>16&255)/255*t,e.g=(s>>8&255)/255*t,e.b=(s&255)/255*t},toHexString({r:h,g:e,b:t},s=1){s=255/s;const n=h*s<<16^e*s<<8^t*s<<0;return V.toHexString(n)}},ns=[es,V,ts,ss];function is(h){return ns.find(e=>e.match(h))}class rs extends S{constructor(e,t,s,n){super(e,t,s,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=is(this.initialValue),this._rgbScale=n,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=re(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class ee extends S{constructor(e,t,s){super(e,t,s,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",n=>{n.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class os extends S{constructor(e,t,s,n,r,i){super(e,t,s,"number"),this._initInput(),this.min(n),this.max(r);const a=i!==void 0;this.step(a?i:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let f=parseFloat(this.$input.value);isNaN(f)||(this._stepExplicit&&(f=this._snap(f)),this.setValue(this._clamp(f)))},s=f=>{const x=parseFloat(this.$input.value);isNaN(x)||(this._snapClampSetValue(x+f),this.$input.value=this.getValue())},n=f=>{f.key==="Enter"&&this.$input.blur(),f.code==="ArrowUp"&&(f.preventDefault(),s(this._step*this._arrowKeyMultiplier(f))),f.code==="ArrowDown"&&(f.preventDefault(),s(this._step*this._arrowKeyMultiplier(f)*-1))},r=f=>{this._inputFocused&&(f.preventDefault(),s(this._step*this._normalizeMouseWheel(f)))};let i=!1,a,o,l,u,c;const d=5,p=f=>{a=f.clientX,o=l=f.clientY,i=!0,u=this.getValue(),c=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",T)},g=f=>{if(i){const x=f.clientX-a,b=f.clientY-o;Math.abs(b)>d?(f.preventDefault(),this.$input.blur(),i=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(x)>d&&T()}if(!i){const x=f.clientY-l;c-=x*this._step*this._arrowKeyMultiplier(f),u+c>this._max?c=this._max-u:u+c<this._min&&(c=this._min-u),this._snapClampSetValue(u+c)}l=f.clientY},T=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",T)},A=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",A),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(m,f,x,b,w)=>(m-f)/(x-f)*(w-b)+b,t=m=>{const f=this.$slider.getBoundingClientRect();let x=e(m,f.left,f.right,this._min,this._max);this._snapClampSetValue(x)},s=m=>{this._setDraggingStyle(!0),t(m.clientX),window.addEventListener("mousemove",n),window.addEventListener("mouseup",r)},n=m=>{t(m.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",r)};let i=!1,a,o;const l=m=>{m.preventDefault(),this._setDraggingStyle(!0),t(m.touches[0].clientX),i=!1},u=m=>{m.touches.length>1||(this._hasScrollBar?(a=m.touches[0].clientX,o=m.touches[0].clientY,i=!0):l(m),window.addEventListener("touchmove",c,{passive:!1}),window.addEventListener("touchend",d))},c=m=>{if(i){const f=m.touches[0].clientX-a,x=m.touches[0].clientY-o;Math.abs(f)>Math.abs(x)?l(m):(window.removeEventListener("touchmove",c),window.removeEventListener("touchend",d))}else m.preventDefault(),t(m.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",c),window.removeEventListener("touchend",d)},p=this._callOnFinishChange.bind(this),g=400;let T;const A=m=>{if(Math.abs(m.deltaX)<Math.abs(m.deltaY)&&this._hasScrollBar)return;m.preventDefault();const x=this._normalizeMouseWheel(m)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(T),T=setTimeout(p,g)};this.$slider.addEventListener("mousedown",s),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",A,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:s}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,s=-e.wheelDelta/120,s*=this._stepExplicit?1:10),t+-s}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class as extends S{constructor(e,t,s,n){super(e,t,s,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(n)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const s=document.createElement("option");s.textContent=t,this.$select.appendChild(s)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class ls extends S{constructor(e,t,s){super(e,t,s,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",n=>{n.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const cs=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function us(h){const e=document.createElement("style");e.innerHTML=h;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let be=!1;class Ie{constructor({parent:e,autoPlace:t=e===void 0,container:s,width:n,title:r="Controls",closeFolders:i=!1,injectStyles:a=!0,touchStyles:o=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{(l.code==="Enter"||l.code==="Space")&&(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),o&&this.domElement.classList.add("allow-touch-styles"),!be&&a&&(us(cs),be=!0),s?s.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),n&&this.domElement.style.setProperty("--width",n+"px"),this._closeFolders=i}add(e,t,s,n,r){if(Object(s)===s)return new as(this,e,t,s);const i=e[t];switch(typeof i){case"number":return new os(this,e,t,s,n,r);case"boolean":return new Zt(this,e,t);case"string":return new ls(this,e,t);case"function":return new ee(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,i)}addColor(e,t,s=1){return new rs(this,e,t,s)}addFolder(e){const t=new Ie({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(s=>{s instanceof ee||s._name in e.controllers&&s.load(e.controllers[s._name])}),t&&e.folders&&this.folders.forEach(s=>{s._title in e.folders&&s.load(e.folders[s._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(s=>{if(!(s instanceof ee)){if(s._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${s._name}"`);t.controllers[s._name]=s.save()}}),e&&this.folders.forEach(s=>{if(s._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${s._title}"`);t.folders[s._title]=s.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const s=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",s))};this.$children.addEventListener("transitionend",s);const n=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=n+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(s=>s.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}export{fs as D,ps as G,Ie as a,ds as m};
//# sourceMappingURL=lil-gui.esm-BWSOvBbT.js.map
