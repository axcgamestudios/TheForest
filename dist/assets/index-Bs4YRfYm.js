var Ku=Object.defineProperty;var Zu=(n,e,t)=>e in n?Ku(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var B=(n,e,t)=>Zu(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bi="180",Ju=0,Jc=1,ju=2,Fh=1,Nh=2,qn=3,jn=0,Ot=1,Zt=2,qt=0,ds=1,ao=2,jc=3,$c=4,$u=5,bi=100,ed=101,td=102,nd=103,id=104,sd=200,rd=201,od=202,ad=203,Ma=204,Aa=205,cd=206,ld=207,hd=208,ud=209,dd=210,fd=211,pd=212,md=213,gd=214,ya=0,co=1,Sa=2,ms=3,_a=4,wa=5,Ea=6,Ta=7,Oh=0,vd=1,xd=2,Zn=0,Md=1,Ad=2,yd=3,Sd=4,_d=5,wd=6,Ed=7,zh=300,gs=301,vs=302,ba=303,Ca=304,Mo=306,kt=1e3,Yt=1001,$n=1002,jt=1003,Td=1004,mr=1005,zt=1006,Co=1007,ui=1008,Ht=1009,kh=1010,Hh=1011,js=1012,vc=1013,Pi=1014,Dn=1015,Ui=1016,xc=1017,Mc=1018,xs=1020,Gh=35902,Vh=35899,Wh=1021,Xh=1022,En=1023,$s=1026,Ms=1027,Ao=1028,Ac=1029,Yh=1030,yc=1031,Sc=1033,no=33776,io=33777,so=33778,ro=33779,Ra=35840,Da=35841,Pa=35842,Ia=35843,La=36196,Ba=37492,Ua=37496,Fa=37808,Na=37809,Oa=37810,za=37811,ka=37812,Ha=37813,Ga=37814,Va=37815,Wa=37816,Xa=37817,Ya=37818,qa=37819,Qa=37820,Ka=37821,Za=36492,Ja=36494,ja=36495,$a=36283,ec=36284,tc=36285,nc=36286,fi=3200,bd=3201,qh=0,Cd=1,Ln="",ot="srgb",di="srgb-linear",lo="linear",xt="srgb",ki=7680,el=519,Rd=512,Dd=513,Pd=514,Qh=515,Id=516,Ld=517,Bd=518,Ud=519,ic=35044,tl="300 es",Un=2e3,ho=2001;class ei{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nl=1234567;const qs=Math.PI/180,As=180/Math.PI;function Fn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function tt(n,e,t){return Math.max(e,Math.min(t,n))}function _c(n,e){return(n%e+e)%e}function Fd(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Nd(n,e,t){return n!==e?(t-n)/(e-n):0}function Qs(n,e,t){return(1-t)*n+t*e}function Od(n,e,t,i){return Qs(n,e,1-Math.exp(-t*i))}function zd(n,e=1){return e-Math.abs(_c(n,e*2)-e)}function kd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Hd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Gd(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Vd(n,e){return n+Math.random()*(e-n)}function Wd(n){return n*(.5-Math.random())}function Xd(n){n!==void 0&&(nl=n);let e=nl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Yd(n){return n*qs}function qd(n){return n*As}function Qd(n){return(n&n-1)===0&&n!==0}function Kd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Zd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Jd(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,c*u,c*f,a*l);break;case"YZY":n.set(c*f,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*f,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*d,a*l);break;case"YXY":n.set(c*d,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Rn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function gt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ze={DEG2RAD:qs,RAD2DEG:As,generateUUID:Fn,clamp:tt,euclideanModulo:_c,mapLinear:Fd,inverseLerp:Nd,lerp:Qs,damp:Od,pingpong:zd,smoothstep:kd,smootherstep:Hd,randInt:Gd,randFloat:Vd,randFloatSpread:Wd,seededRandom:Xd,degToRad:Yd,radToDeg:qd,isPowerOfTwo:Qd,ceilPowerOfTwo:Kd,floorPowerOfTwo:Zd,setQuaternionFromProperEuler:Jd,normalize:gt,denormalize:Rn};class oe{constructor(e=0,t=0){oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Et{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(u!==v||c!==f||l!==d||h!==g){let m=1-a;const p=c*f+l*d+h*g+u*v,x=p>=0?1:-1,A=1-p*p;if(A>Number.EPSILON){const C=Math.sqrt(A),T=Math.atan2(C,p*x);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}const M=a*x;if(c=c*m+f*M,l=l*m+d*M,h=h*m+g*M,u=u*m+v*M,m===1-a){const C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*d-l*f,e[t+1]=c*g+h*f+l*u-a*d,e[t+2]=l*g+h*d+a*f-c*u,e[t+3]=h*g-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),f=c(i/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>u){const d=2*Math.sqrt(1+i-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-i-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,i=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(il.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(il.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ro.copy(this).projectOnVector(e),this.sub(Ro)}reflect(e){return this.sub(Ro.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ro=new R,il=new Et;class Je{constructor(e,t,i,s,r,o,a,c,l){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],v=s[0],m=s[3],p=s[6],x=s[1],A=s[4],M=s[7],C=s[2],T=s[5],P=s[8];return r[0]=o*v+a*x+c*C,r[3]=o*m+a*A+c*T,r[6]=o*p+a*M+c*P,r[1]=l*v+h*x+u*C,r[4]=l*m+h*A+u*T,r[7]=l*p+h*M+u*P,r[2]=f*v+d*x+g*C,r[5]=f*m+d*A+g*T,r[8]=f*p+d*M+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=t*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*l-h*i)*v,e[2]=(a*i-s*o)*v,e[3]=f*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=d*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Do.makeScale(e,t)),this}rotate(e){return this.premultiply(Do.makeRotation(-e)),this}translate(e,t){return this.premultiply(Do.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Do=new Je;function Kh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function er(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function jd(){const n=er("canvas");return n.style.display="block",n}const sl={};function tr(n){n in sl||(sl[n]=!0,console.warn(n))}function $d(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const rl=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ol=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ef(){const n={enabled:!0,workingColorSpace:di,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===xt&&(s.r=Jn(s.r),s.g=Jn(s.g),s.b=Jn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xt&&(s.r=fs(s.r),s.g=fs(s.g),s.b=fs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ln?lo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return tr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return tr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[di]:{primaries:e,whitePoint:i,transfer:lo,toXYZ:rl,fromXYZ:ol,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ot},outputColorSpaceConfig:{drawingBufferColorSpace:ot}},[ot]:{primaries:e,whitePoint:i,transfer:xt,toXYZ:rl,fromXYZ:ol,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ot}}}),n}const ut=ef();function Jn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function fs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Hi;class tf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Hi===void 0&&(Hi=er("canvas")),Hi.width=e.width,Hi.height=e.height;const s=Hi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Hi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=er("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Jn(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Jn(t[i]/255)*255):t[i]=Jn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nf=0;class wc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Fn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Po(s[o].image)):r.push(Po(s[o]))}else r=Po(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Po(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?tf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sf=0;const Io=new R;class Lt extends ei{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,i=Yt,s=Yt,r=zt,o=ui,a=En,c=Ht,l=Lt.DEFAULT_ANISOTROPY,h=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Fn(),this.name="",this.source=new wc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Io).x}get height(){return this.source.getSize(Io).y}get depth(){return this.source.getSize(Io).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kt:e.x=e.x-Math.floor(e.x);break;case Yt:e.x=e.x<0?0:1;break;case $n:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kt:e.y=e.y-Math.floor(e.y);break;case Yt:e.y=e.y<0?0:1;break;case $n:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=zh;Lt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,i=0,s=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(l+1)/2,M=(d+1)/2,C=(p+1)/2,T=(h+f)/4,P=(u+v)/4,E=(g+m)/4;return A>M&&A>C?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=T/i,r=P/i):M>C?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=T/s,r=E/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=P/r,s=E/r),this.set(i,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-v)/x,this.z=(f-h)/x,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rf extends ei{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new Lt(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new wc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ut extends rf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Zh extends Lt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class of extends Lt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fi{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Tn):Tn.fromBufferAttribute(r,o),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gr.copy(i.boundingBox)),gr.applyMatrix4(e.matrixWorld),this.union(gr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ts),vr.subVectors(this.max,Ts),Gi.subVectors(e.a,Ts),Vi.subVectors(e.b,Ts),Wi.subVectors(e.c,Ts),ti.subVectors(Vi,Gi),ni.subVectors(Wi,Vi),gi.subVectors(Gi,Wi);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-gi.z,gi.y,ti.z,0,-ti.x,ni.z,0,-ni.x,gi.z,0,-gi.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-gi.y,gi.x,0];return!Lo(t,Gi,Vi,Wi,vr)||(t=[1,0,0,0,1,0,0,0,1],!Lo(t,Gi,Vi,Wi,vr))?!1:(xr.crossVectors(ti,ni),t=[xr.x,xr.y,xr.z],Lo(t,Gi,Vi,Wi,vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Hn=[new R,new R,new R,new R,new R,new R,new R,new R],Tn=new R,gr=new Fi,Gi=new R,Vi=new R,Wi=new R,ti=new R,ni=new R,gi=new R,Ts=new R,vr=new R,xr=new R,vi=new R;function Lo(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){vi.fromArray(n,r);const a=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),c=e.dot(vi),l=t.dot(vi),h=i.dot(vi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const af=new Fi,bs=new R,Bo=new R;class Ni{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):af.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bs.subVectors(e,this.center);const t=bs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(bs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bs.copy(e.center).add(Bo)),this.expandByPoint(bs.copy(e.center).sub(Bo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Gn=new R,Uo=new R,Mr=new R,ii=new R,Fo=new R,Ar=new R,No=new R;class Ec{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Uo.copy(e).add(t).multiplyScalar(.5),Mr.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(Uo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Mr),a=ii.dot(this.direction),c=-ii.dot(Mr),l=ii.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Uo).addScaledVector(Mr,f),d}intersectSphere(e,t){Gn.subVectors(e.center,this.origin);const i=Gn.dot(this.direction),s=Gn.dot(Gn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,i,s,r){Fo.subVectors(t,e),Ar.subVectors(i,e),No.crossVectors(Fo,Ar);let o=this.direction.dot(No),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,e);const c=a*this.direction.dot(Ar.crossVectors(ii,Ar));if(c<0)return null;const l=a*this.direction.dot(Fo.cross(ii));if(l<0||c+l>o)return null;const h=-a*ii.dot(No);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,i,s,r,o,a,c,l,h,u,f,d,g,v,m){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,u,f,d,g,v,m)}set(e,t,i,s,r,o,a,c,l,h,u,f,d,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Xi.setFromMatrixColumn(e,0).length(),r=1/Xi.setFromMatrixColumn(e,1).length(),o=1/Xi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,d=o*u,g=a*h,v=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+g*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*h,d=c*u,g=l*h,v=l*u;t[0]=f+v*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*h,d=c*u,g=l*h,v=l*u;t[0]=f-v*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*h,d=o*u,g=a*h,v=a*u;t[0]=c*h,t[4]=g*l-d,t[8]=f*l+v,t[1]=c*u,t[5]=v*l+f,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=v-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+g,t[10]=f-v*u}else if(e.order==="XZY"){const f=o*c,d=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+v,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cf,e,lf)}lookAt(e,t,i){const s=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),si.crossVectors(i,pn),si.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),si.crossVectors(i,pn)),si.normalize(),yr.crossVectors(pn,si),s[0]=si.x,s[4]=yr.x,s[8]=pn.x,s[1]=si.y,s[5]=yr.y,s[9]=pn.y,s[2]=si.z,s[6]=yr.z,s[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],v=i[6],m=i[10],p=i[14],x=i[3],A=i[7],M=i[11],C=i[15],T=s[0],P=s[4],E=s[8],S=s[12],y=s[1],D=s[5],L=s[9],U=s[13],z=s[2],N=s[6],F=s[10],W=s[14],k=s[3],$=s[7],ne=s[11],ge=s[15];return r[0]=o*T+a*y+c*z+l*k,r[4]=o*P+a*D+c*N+l*$,r[8]=o*E+a*L+c*F+l*ne,r[12]=o*S+a*U+c*W+l*ge,r[1]=h*T+u*y+f*z+d*k,r[5]=h*P+u*D+f*N+d*$,r[9]=h*E+u*L+f*F+d*ne,r[13]=h*S+u*U+f*W+d*ge,r[2]=g*T+v*y+m*z+p*k,r[6]=g*P+v*D+m*N+p*$,r[10]=g*E+v*L+m*F+p*ne,r[14]=g*S+v*U+m*W+p*ge,r[3]=x*T+A*y+M*z+C*k,r[7]=x*P+A*D+M*N+C*$,r[11]=x*E+A*L+M*F+C*ne,r[15]=x*S+A*U+M*W+C*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*a*f+i*l*f+s*a*d-i*c*d)+v*(+t*c*d-t*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+m*(+t*l*u-t*a*d-r*o*u+i*o*d+r*a*h-i*l*h)+p*(-s*a*h-t*c*u+t*a*f+s*o*u-i*o*f+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],x=u*m*l-v*f*l+v*c*d-a*m*d-u*c*p+a*f*p,A=g*f*l-h*m*l-g*c*d+o*m*d+h*c*p-o*f*p,M=h*v*l-g*u*l+g*a*d-o*v*d-h*a*p+o*u*p,C=g*u*c-h*v*c-g*a*f+o*v*f+h*a*m-o*u*m,T=t*x+i*A+s*M+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/T;return e[0]=x*P,e[1]=(v*f*r-u*m*r-v*s*d+i*m*d+u*s*p-i*f*p)*P,e[2]=(a*m*r-v*c*r+v*s*l-i*m*l-a*s*p+i*c*p)*P,e[3]=(u*c*r-a*f*r-u*s*l+i*f*l+a*s*d-i*c*d)*P,e[4]=A*P,e[5]=(h*m*r-g*f*r+g*s*d-t*m*d-h*s*p+t*f*p)*P,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*P,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*d+t*c*d)*P,e[8]=M*P,e[9]=(g*u*r-h*v*r-g*i*d+t*v*d+h*i*p-t*u*p)*P,e[10]=(o*v*r-g*a*r+g*i*l-t*v*l-o*i*p+t*a*p)*P,e[11]=(h*a*r-o*u*r-h*i*l+t*u*l+o*i*d-t*a*d)*P,e[12]=C*P,e[13]=(h*v*s-g*u*s+g*i*f-t*v*f-h*i*m+t*u*m)*P,e[14]=(g*a*s-o*v*s-g*i*c+t*v*c+o*i*m-t*a*m)*P,e[15]=(o*u*s-h*a*s+h*i*c-t*u*c-o*i*f+t*a*f)*P,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,v=o*h,m=o*u,p=a*u,x=c*l,A=c*h,M=c*u,C=i.x,T=i.y,P=i.z;return s[0]=(1-(v+p))*C,s[1]=(d+M)*C,s[2]=(g-A)*C,s[3]=0,s[4]=(d-M)*T,s[5]=(1-(f+p))*T,s[6]=(m+x)*T,s[7]=0,s[8]=(g+A)*P,s[9]=(m-x)*P,s[10]=(1-(f+v))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Xi.set(s[0],s[1],s[2]).length();const o=Xi.set(s[4],s[5],s[6]).length(),a=Xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],bn.copy(this);const l=1/r,h=1/o,u=1/a;return bn.elements[0]*=l,bn.elements[1]*=l,bn.elements[2]*=l,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=u,bn.elements[9]*=u,bn.elements[10]*=u,t.setFromRotationMatrix(bn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Un,c=!1){const l=this.elements,h=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s);let g,v;if(c)g=r/(o-r),v=o*r/(o-r);else if(a===Un)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===ho)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Un,c=!1){const l=this.elements,h=2/(t-e),u=2/(i-s),f=-(t+e)/(t-e),d=-(i+s)/(i-s);let g,v;if(c)g=1/(o-r),v=o/(o-r);else if(a===Un)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===ho)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Xi=new R,bn=new lt,cf=new R(0,0,0),lf=new R(1,1,1),si=new R,yr=new R,pn=new R,al=new lt,cl=new Et;class un{constructor(e=0,t=0,i=0,s=un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return al.makeRotationFromQuaternion(e),this.setFromRotationMatrix(al,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cl.setFromEuler(this),this.setFromQuaternion(cl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}un.DEFAULT_ORDER="XYZ";class Jh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hf=0;const ll=new R,Yi=new Et,Vn=new lt,Sr=new R,Cs=new R,uf=new R,df=new Et,hl=new R(1,0,0),ul=new R(0,1,0),dl=new R(0,0,1),fl={type:"added"},ff={type:"removed"},qi={type:"childadded",child:null},Oo={type:"childremoved",child:null};class Tt extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new R,t=new un,i=new Et,s=new R(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new Je}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(hl,e)}rotateY(e){return this.rotateOnAxis(ul,e)}rotateZ(e){return this.rotateOnAxis(dl,e)}translateOnAxis(e,t){return ll.copy(e).applyQuaternion(this.quaternion),this.position.add(ll.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hl,e)}translateY(e){return this.translateOnAxis(ul,e)}translateZ(e){return this.translateOnAxis(dl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Sr.copy(e):Sr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Cs,Sr,this.up):Vn.lookAt(Sr,Cs,this.up),this.quaternion.setFromRotationMatrix(Vn),s&&(Vn.extractRotation(s.matrixWorld),Yi.setFromRotationMatrix(Vn),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fl),qi.child=e,this.dispatchEvent(qi),qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ff),Oo.child=e,this.dispatchEvent(Oo),Oo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fl),qi.child=e,this.dispatchEvent(qi),qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,uf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,df,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Tt.DEFAULT_UP=new R(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new R,Wn=new R,zo=new R,Xn=new R,Qi=new R,Ki=new R,pl=new R,ko=new R,Ho=new R,Go=new R,Vo=new ft,Wo=new ft,Xo=new ft;class wn{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Cn.subVectors(e,t),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Cn.subVectors(s,t),Wn.subVectors(i,t),zo.subVectors(e,t);const o=Cn.dot(Cn),a=Cn.dot(Wn),c=Cn.dot(zo),l=Wn.dot(Wn),h=Wn.dot(zo),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Xn.x),c.addScaledVector(o,Xn.y),c.addScaledVector(a,Xn.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return Vo.setScalar(0),Wo.setScalar(0),Xo.setScalar(0),Vo.fromBufferAttribute(e,t),Wo.fromBufferAttribute(e,i),Xo.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Vo,r.x),o.addScaledVector(Wo,r.y),o.addScaledVector(Xo,r.z),o}static isFrontFacing(e,t,i,s){return Cn.subVectors(i,t),Wn.subVectors(e,t),Cn.cross(Wn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),Cn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return wn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Qi.subVectors(s,i),Ki.subVectors(r,i),ko.subVectors(e,i);const c=Qi.dot(ko),l=Ki.dot(ko);if(c<=0&&l<=0)return t.copy(i);Ho.subVectors(e,s);const h=Qi.dot(Ho),u=Ki.dot(Ho);if(h>=0&&u<=h)return t.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(Qi,o);Go.subVectors(e,r);const d=Qi.dot(Go),g=Ki.dot(Go);if(g>=0&&d<=g)return t.copy(r);const v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Ki,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return pl.subVectors(r,s),a=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(pl,a);const p=1/(m+v+f);return o=v*p,a=f*p,t.copy(i).addScaledVector(Qi,o).addScaledVector(Ki,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},_r={h:0,s:0,l:0};function Yo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Re{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ut.workingColorSpace){if(e=_c(e,1),t=tt(t,0,1),i=tt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Yo(o,r,e+1/3),this.g=Yo(o,r,e),this.b=Yo(o,r,e-1/3)}return ut.colorSpaceToWorking(this,s),this}setStyle(e,t=ot){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ot){const i=jh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jn(e.r),this.g=Jn(e.g),this.b=Jn(e.b),this}copyLinearToSRGB(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ot){return ut.workingToColorSpace(tn.copy(this),e),Math.round(tt(tn.r*255,0,255))*65536+Math.round(tt(tn.g*255,0,255))*256+Math.round(tt(tn.b*255,0,255))}getHexString(e=ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(tn.copy(this),t);const i=tn.r,s=tn.g,r=tn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=ot){ut.workingToColorSpace(tn.copy(this),e);const t=tn.r,i=tn.g,s=tn.b;return e!==ot?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+t,ri.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL(_r);const i=Qs(ri.h,_r.h,t),s=Qs(ri.s,_r.s,t),r=Qs(ri.l,_r.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new Re;Re.NAMES=jh;let pf=0;class On extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Fn(),this.name="",this.type="Material",this.blending=ds,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ma,this.blendDst=Aa,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=el,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(i.blending=this.blending),this.side!==jn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ma&&(i.blendSrc=this.blendSrc),this.blendDst!==Aa&&(i.blendDst=this.blendDst),this.blendEquation!==bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ms&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==el&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ii extends On{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qn=mf();function mf(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(i[c]=0,i[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(i[c]=1024>>-l-14,i[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(i[c]=l+15<<10,i[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(i[c]=31744,i[c|256]=64512,s[c]=24,s[c|256]=24):(i[c]=31744,i[c|256]=64512,s[c]=13,s[c|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function gf(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=tt(n,-65504,65504),Qn.floatView[0]=n;const e=Qn.uint32View[0],t=e>>23&511;return Qn.baseTable[t]+((e&8388607)>>Qn.shiftTable[t])}function vf(n){const e=n>>10;return Qn.uint32View[0]=Qn.mantissaTable[Qn.offsetTable[e]+(n&1023)]+Qn.exponentTable[e],Qn.floatView[0]}class xi{static toHalfFloat(e){return gf(e)}static fromHalfFloat(e){return vf(e)}}const Nt=new R,wr=new oe;let xf=0;class Bt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ic,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)wr.fromBufferAttribute(this,t),wr.applyMatrix3(e),this.setXY(t,wr.x,wr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Rn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ic&&(e.usage=this.usage),e}}class $h extends Bt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class eu extends Bt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class at extends Bt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Mf=0;const yn=new lt,qo=new Tt,Zi=new R,mn=new Fi,Rs=new Fi,Wt=new R;class Dt extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kh(e)?eu:$h)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,i){return yn.makeTranslation(e,t,i),this.applyMatrix4(yn),this}scale(e,t,i){return yn.makeScale(e,t,i),this.applyMatrix4(yn),this}lookAt(e){return qo.lookAt(e),qo.updateMatrix(),this.applyMatrix4(qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new at(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Rs.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(mn.min,Rs.min),mn.expandByPoint(Wt),Wt.addVectors(mn.max,Rs.max),mn.expandByPoint(Wt)):(mn.expandByPoint(Rs.min),mn.expandByPoint(Rs.max))}mn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Wt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Wt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Wt.fromBufferAttribute(a,l),c&&(Zi.fromBufferAttribute(e,l),Wt.add(Zi)),s=Math.max(s,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let E=0;E<i.count;E++)a[E]=new R,c[E]=new R;const l=new R,h=new R,u=new R,f=new oe,d=new oe,g=new oe,v=new R,m=new R;function p(E,S,y){l.fromBufferAttribute(i,E),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,y),f.fromBufferAttribute(r,E),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),h.sub(l),u.sub(l),d.sub(f),g.sub(f);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(D),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(D),a[E].add(v),a[S].add(v),a[y].add(v),c[E].add(m),c[S].add(m),c[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let E=0,S=x.length;E<S;++E){const y=x[E],D=y.start,L=y.count;for(let U=D,z=D+L;U<z;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const A=new R,M=new R,C=new R,T=new R;function P(E){C.fromBufferAttribute(s,E),T.copy(C);const S=a[E];A.copy(S),A.sub(C.multiplyScalar(C.dot(S))).normalize(),M.crossVectors(T,S);const D=M.dot(c[E])<0?-1:1;o.setXYZW(E,A.x,A.y,A.z,D)}for(let E=0,S=x.length;E<S;++E){const y=x[E],D=y.start,L=y.count;for(let U=D,z=D+L;U<z;U+=3)P(e.getX(U+0)),P(e.getX(U+1)),P(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,u=new R;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?d=c[v]*a.data.stride+a.offset:d=c[v]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new Bt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dt,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=e(f,i);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ml=new lt,Mi=new Ec,Er=new Ni,gl=new R,Tr=new R,br=new R,Cr=new R,Qo=new R,Rr=new R,vl=new R,Dr=new R;class le extends Tt{constructor(e=new Dt,t=new Ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Rr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Qo.fromBufferAttribute(u,e),o?Rr.addScaledVector(Qo,h):Rr.addScaledVector(Qo.sub(t),h))}t.add(Rr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Er.copy(i.boundingSphere),Er.applyMatrix4(r),Mi.copy(e.ray).recast(e.near),!(Er.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Er,gl)===null||Mi.origin.distanceToSquared(gl)>(e.far-e.near)**2))&&(ml.copy(r).invert(),Mi.copy(e.ray).applyMatrix4(ml),!(i.boundingBox!==null&&Mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Mi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),A=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=x,C=A;M<C;M+=3){const T=a.getX(M),P=a.getX(M+1),E=a.getX(M+2);s=Pr(this,p,e,i,l,h,u,T,P,E),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const x=a.getX(m),A=a.getX(m+1),M=a.getX(m+2);s=Pr(this,o,e,i,l,h,u,x,A,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),A=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let M=x,C=A;M<C;M+=3){const T=M,P=M+1,E=M+2;s=Pr(this,p,e,i,l,h,u,T,P,E),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const x=m,A=m+1,M=m+2;s=Pr(this,o,e,i,l,h,u,x,A,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Af(n,e,t,i,s,r,o,a){let c;if(e.side===Ot?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===jn,a),c===null)return null;Dr.copy(a),Dr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Dr);return l<t.near||l>t.far?null:{distance:l,point:Dr.clone(),object:n}}function Pr(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,Tr),n.getVertexPosition(c,br),n.getVertexPosition(l,Cr);const h=Af(n,e,t,i,Tr,br,Cr,vl);if(h){const u=new R;wn.getBarycoord(vl,Tr,br,Cr,u),s&&(h.uv=wn.getInterpolatedAttribute(s,a,c,l,u,new oe)),r&&(h.uv1=wn.getInterpolatedAttribute(r,a,c,l,u,new oe)),o&&(h.normal=wn.getInterpolatedAttribute(o,a,c,l,u,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new R,materialIndex:0};wn.getNormal(Tr,br,Cr,f.normal),h.face=f,h.barycoord=u}return h}class xe extends Dt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(u,2));function g(v,m,p,x,A,M,C,T,P,E,S){const y=M/P,D=C/E,L=M/2,U=C/2,z=T/2,N=P+1,F=E+1;let W=0,k=0;const $=new R;for(let ne=0;ne<F;ne++){const ge=ne*D-U;for(let Pe=0;Pe<N;Pe++){const qe=Pe*y-L;$[v]=qe*x,$[m]=ge*A,$[p]=z,l.push($.x,$.y,$.z),$[v]=0,$[m]=0,$[p]=T>0?1:-1,h.push($.x,$.y,$.z),u.push(Pe/P),u.push(1-ne/E),W+=1}}for(let ne=0;ne<E;ne++)for(let ge=0;ge<P;ge++){const Pe=f+ge+N*ne,qe=f+ge+N*(ne+1),it=f+(ge+1)+N*(ne+1),Ke=f+(ge+1)+N*ne;c.push(Pe,qe,Ke),c.push(qe,it,Ke),k+=6}a.addGroup(d,k,S),d+=k,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xe(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ys(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function on(n){const e={};for(let t=0;t<n.length;t++){const i=ys(n[t]);for(const s in i)e[s]=i[s]}return e}function yf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function tu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const nu={clone:ys,merge:on};var Sf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_f=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ft extends On{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sf,this.fragmentShader=_f,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=yf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class iu extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new R,xl=new oe,Ml=new oe;class an extends iu{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=As*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return As*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,xl,Ml),t.subVectors(Ml,xl)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qs*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ji=-90,ji=1;class wf extends Tt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new an(Ji,ji,e,t);s.layers=this.layers,this.add(s);const r=new an(Ji,ji,e,t);r.layers=this.layers,this.add(r);const o=new an(Ji,ji,e,t);o.layers=this.layers,this.add(o);const a=new an(Ji,ji,e,t);a.layers=this.layers,this.add(a);const c=new an(Ji,ji,e,t);c.layers=this.layers,this.add(c);const l=new an(Ji,ji,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Un)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ho)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class su extends Lt{constructor(e=[],t=gs,i,s,r,o,a,c,l,h){super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ef extends Ut{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new su(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new xe(5,5,5),r=new Ft({name:"CubemapFromEquirect",uniforms:ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ot,blending:qt});r.uniforms.tEquirect.value=t;const o=new le(s,r),a=t.minFilter;return t.minFilter===ui&&(t.minFilter=zt),new wf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class yt extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tf={type:"move"};class Ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tf)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new yt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Tc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Re(e),this.density=t}clone(){return new Tc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class nr extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class bf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ic,this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const rn=new R;class uo{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Rn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Rn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new uo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ir extends On{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let $i;const Ds=new R,es=new R,ts=new R,ns=new oe,Ps=new oe,ru=new lt,Ir=new R,Is=new R,Lr=new R,Al=new oe,Zo=new oe,yl=new oe;class fo extends Tt{constructor(e=new ir){if(super(),this.isSprite=!0,this.type="Sprite",$i===void 0){$i=new Dt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new bf(t,5);$i.setIndex([0,1,2,0,2,3]),$i.setAttribute("position",new uo(i,3,0,!1)),$i.setAttribute("uv",new uo(i,2,3,!1))}this.geometry=$i,this.material=e,this.center=new oe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),es.setFromMatrixScale(this.matrixWorld),ru.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ts.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&es.multiplyScalar(-ts.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Br(Ir.set(-.5,-.5,0),ts,o,es,s,r),Br(Is.set(.5,-.5,0),ts,o,es,s,r),Br(Lr.set(.5,.5,0),ts,o,es,s,r),Al.set(0,0),Zo.set(1,0),yl.set(1,1);let a=e.ray.intersectTriangle(Ir,Is,Lr,!1,Ds);if(a===null&&(Br(Is.set(-.5,.5,0),ts,o,es,s,r),Zo.set(0,1),a=e.ray.intersectTriangle(Ir,Lr,Is,!1,Ds),a===null))return;const c=e.ray.origin.distanceTo(Ds);c<e.near||c>e.far||t.push({distance:c,point:Ds.clone(),uv:wn.getInterpolation(Ds,Ir,Is,Lr,Al,Zo,yl,new oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Br(n,e,t,i,s,r){ns.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Ps.x=r*ns.x-s*ns.y,Ps.y=s*ns.x+r*ns.y):Ps.copy(ns),n.copy(e),n.x+=Ps.x,n.y+=Ps.y,n.applyMatrix4(ru)}class bc extends Lt{constructor(e=null,t=1,i=1,s,r,o,a,c,l=jt,h=jt,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sl extends Bt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const is=new lt,_l=new lt,Ur=[],wl=new Fi,Cf=new lt,Ls=new le,Bs=new Ni;class sr extends le{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Sl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Cf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,is),wl.copy(e.boundingBox).applyMatrix4(is),this.boundingBox.union(wl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,is),Bs.copy(e.boundingSphere).applyMatrix4(is),this.boundingSphere.union(Bs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Ls.geometry=this.geometry,Ls.material=this.material,Ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(i),e.ray.intersectsSphere(Bs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,is),_l.multiplyMatrices(i,is),Ls.matrixWorld=_l,Ls.raycast(e,Ur);for(let o=0,a=Ur.length;o<a;o++){const c=Ur[o];c.instanceId=r,c.object=this,t.push(c)}Ur.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Sl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new bc(new Float32Array(s*this.count),s,this.count,Ao,Dn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Jo=new R,Rf=new R,Df=new Je;class Ei{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Jo.subVectors(i,t).cross(Rf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Jo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Df.getNormalMatrix(e),s=this.coplanarPoint(Jo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Ni,Pf=new oe(.5,.5),Fr=new R;class Cc{constructor(e=new Ei,t=new Ei,i=new Ei,s=new Ei,r=new Ei,o=new Ei){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Un,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],v=r[9],m=r[10],p=r[11],x=r[12],A=r[13],M=r[14],C=r[15];if(s[0].setComponents(l-o,d-h,p-g,C-x).normalize(),s[1].setComponents(l+o,d+h,p+g,C+x).normalize(),s[2].setComponents(l+a,d+u,p+v,C+A).normalize(),s[3].setComponents(l-a,d-u,p-v,C-A).normalize(),i)s[4].setComponents(c,f,m,M).normalize(),s[5].setComponents(l-c,d-f,p-m,C-M).normalize();else if(s[4].setComponents(l-c,d-f,p-m,C-M).normalize(),t===Un)s[5].setComponents(l+c,d+f,p+m,C+M).normalize();else if(t===ho)s[5].setComponents(c,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){Ai.center.set(0,0,0);const t=Pf.distanceTo(e.center);return Ai.radius=.7071067811865476+t,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Fr.x=s.normal.x>0?e.max.x:e.min.x,Fr.y=s.normal.y>0?e.max.y:e.min.y,Fr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ou extends On{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const po=new R,mo=new R,El=new lt,Us=new Ec,Nr=new Ni,jo=new R,Tl=new R;class If extends Tt{constructor(e=new Dt,t=new ou){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)po.fromBufferAttribute(t,s-1),mo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=po.distanceTo(mo);e.setAttribute("lineDistance",new at(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Nr.copy(i.boundingSphere),Nr.applyMatrix4(s),Nr.radius+=r,e.ray.intersectsSphere(Nr)===!1)return;El.copy(s).invert(),Us.copy(e.ray).applyMatrix4(El);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=l){const p=h.getX(v),x=h.getX(v+1),A=Or(this,e,Us,c,p,x,v);A&&t.push(A)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(d),p=Or(this,e,Us,c,v,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=l){const p=Or(this,e,Us,c,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=Or(this,e,Us,c,g-1,d,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Or(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(po.fromBufferAttribute(a,s),mo.fromBufferAttribute(a,r),t.distanceSqToSegment(po,mo,jo,Tl)>i)return;jo.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(jo);if(!(l<e.near||l>e.far))return{distance:l,point:Tl.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const bl=new R,Cl=new R;class Lf extends If{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)bl.fromBufferAttribute(t,s),Cl.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+bl.distanceTo(Cl);e.setAttribute("lineDistance",new at(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Rc extends On{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Rl=new lt,sc=new Ec,zr=new Ni,kr=new R;class au extends Tt{constructor(e=new Dt,t=new Rc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zr.copy(i.boundingSphere),zr.applyMatrix4(s),zr.radius+=r,e.ray.intersectsSphere(zr)===!1)return;Rl.copy(s).invert(),sc.copy(e.ray).applyMatrix4(Rl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,v=d;g<v;g++){const m=l.getX(g);kr.fromBufferAttribute(u,m),Dl(kr,m,c,s,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,v=d;g<v;g++)kr.fromBufferAttribute(u,g),Dl(kr,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Dl(n,e,t,i,s,r,o){const a=sc.distanceSqToPoint(n);if(a<t){const c=new R;sc.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Dc extends Lt{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yo extends Lt{constructor(e,t,i=Pi,s,r,o,a=jt,c=jt,l,h=$s,u=1){if(h!==$s&&h!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class cu extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class pt extends Dt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const v=[],m=i/2;let p=0;x(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(f,3)),this.setAttribute("uv",new at(d,2));function x(){const M=new R,C=new R;let T=0;const P=(t-e)/i;for(let E=0;E<=r;E++){const S=[],y=E/r,D=y*(t-e)+e;for(let L=0;L<=s;L++){const U=L/s,z=U*c+a,N=Math.sin(z),F=Math.cos(z);C.x=D*N,C.y=-y*i+m,C.z=D*F,u.push(C.x,C.y,C.z),M.set(N,P,F).normalize(),f.push(M.x,M.y,M.z),d.push(U,1-y),S.push(g++)}v.push(S)}for(let E=0;E<s;E++)for(let S=0;S<r;S++){const y=v[S][E],D=v[S+1][E],L=v[S+1][E+1],U=v[S][E+1];(e>0||S!==0)&&(h.push(y,D,U),T+=3),(t>0||S!==r-1)&&(h.push(D,L,U),T+=3)}l.addGroup(p,T,0),p+=T}function A(M){const C=g,T=new oe,P=new R;let E=0;const S=M===!0?e:t,y=M===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),g++;const D=g;for(let L=0;L<=s;L++){const z=L/s*c+a,N=Math.cos(z),F=Math.sin(z);P.x=S*F,P.y=m*y,P.z=S*N,u.push(P.x,P.y,P.z),f.push(0,y,0),T.x=N*.5+.5,T.y=F*.5*y+.5,d.push(T.x,T.y),g++}for(let L=0;L<s;L++){const U=C+L,z=D+L;M===!0?h.push(z,z+1,U):h.push(z+1,z,U),E+=3}l.addGroup(p,E,M===!0?1:2),p+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pc extends pt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Pc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ur extends Dt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new at(r,3)),this.setAttribute("normal",new at(r.slice(),3)),this.setAttribute("uv",new at(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const A=new R,M=new R,C=new R;for(let T=0;T<t.length;T+=3)d(t[T+0],A),d(t[T+1],M),d(t[T+2],C),c(A,M,C,x)}function c(x,A,M,C){const T=C+1,P=[];for(let E=0;E<=T;E++){P[E]=[];const S=x.clone().lerp(M,E/T),y=A.clone().lerp(M,E/T),D=T-E;for(let L=0;L<=D;L++)L===0&&E===T?P[E][L]=S:P[E][L]=S.clone().lerp(y,L/D)}for(let E=0;E<T;E++)for(let S=0;S<2*(T-E)-1;S++){const y=Math.floor(S/2);S%2===0?(f(P[E][y+1]),f(P[E+1][y]),f(P[E][y])):(f(P[E][y+1]),f(P[E+1][y+1]),f(P[E+1][y]))}}function l(x){const A=new R;for(let M=0;M<r.length;M+=3)A.x=r[M+0],A.y=r[M+1],A.z=r[M+2],A.normalize().multiplyScalar(x),r[M+0]=A.x,r[M+1]=A.y,r[M+2]=A.z}function h(){const x=new R;for(let A=0;A<r.length;A+=3){x.x=r[A+0],x.y=r[A+1],x.z=r[A+2];const M=m(x)/2/Math.PI+.5,C=p(x)/Math.PI+.5;o.push(M,1-C)}g(),u()}function u(){for(let x=0;x<o.length;x+=6){const A=o[x+0],M=o[x+2],C=o[x+4],T=Math.max(A,M,C),P=Math.min(A,M,C);T>.9&&P<.1&&(A<.2&&(o[x+0]+=1),M<.2&&(o[x+2]+=1),C<.2&&(o[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function d(x,A){const M=x*3;A.x=e[M+0],A.y=e[M+1],A.z=e[M+2]}function g(){const x=new R,A=new R,M=new R,C=new R,T=new oe,P=new oe,E=new oe;for(let S=0,y=0;S<r.length;S+=9,y+=6){x.set(r[S+0],r[S+1],r[S+2]),A.set(r[S+3],r[S+4],r[S+5]),M.set(r[S+6],r[S+7],r[S+8]),T.set(o[y+0],o[y+1]),P.set(o[y+2],o[y+3]),E.set(o[y+4],o[y+5]),C.copy(x).add(A).add(M).divideScalar(3);const D=m(C);v(T,y+0,x,D),v(P,y+2,A,D),v(E,y+4,M,D)}}function v(x,A,M,C){C<0&&x.x===1&&(o[A]=x.x-1),M.x===0&&M.z===0&&(o[A]=C/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ur(e.vertices,e.indices,e.radius,e.details)}}class Ic extends ur{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ic(e.radius,e.detail)}}class zn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new oe:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new R,s=[],r=[],o=[],a=new R,c=new lt;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(tt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(tt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Lc extends zn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new oe){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Bf extends Lc{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Bc(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const Hr=new R,$o=new Bc,ea=new Bc,ta=new Bc;class Uf extends zn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new R){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Hr.subVectors(s[0],s[1]).add(s[0]),l=Hr);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Hr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Hr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),$o.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,v,m),ea.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,v,m),ta.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&($o.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),ea.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),ta.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return i.set($o.calc(c),ea.calc(c),ta.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Pl(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function Ff(n,e){const t=1-n;return t*t*e}function Nf(n,e){return 2*(1-n)*n*e}function Of(n,e){return n*n*e}function Ks(n,e,t,i){return Ff(n,e)+Nf(n,t)+Of(n,i)}function zf(n,e){const t=1-n;return t*t*t*e}function kf(n,e){const t=1-n;return 3*t*t*n*e}function Hf(n,e){return 3*(1-n)*n*n*e}function Gf(n,e){return n*n*n*e}function Zs(n,e,t,i,s){return zf(n,e)+kf(n,t)+Hf(n,i)+Gf(n,s)}class lu extends zn{constructor(e=new oe,t=new oe,i=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new oe){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Zs(e,s.x,r.x,o.x,a.x),Zs(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Vf extends zn{constructor(e=new R,t=new R,i=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new R){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Zs(e,s.x,r.x,o.x,a.x),Zs(e,s.y,r.y,o.y,a.y),Zs(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class hu extends zn{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wf extends zn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uu extends zn{constructor(e=new oe,t=new oe,i=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new oe){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ks(e,s.x,r.x,o.x),Ks(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xf extends zn{constructor(e=new R,t=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ks(e,s.x,r.x,o.x),Ks(e,s.y,r.y,o.y),Ks(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class du extends zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Pl(a,c.x,l.x,h.x,u.x),Pl(a,c.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new oe().fromArray(s))}return this}}var rc=Object.freeze({__proto__:null,ArcCurve:Bf,CatmullRomCurve3:Uf,CubicBezierCurve:lu,CubicBezierCurve3:Vf,EllipseCurve:Lc,LineCurve:hu,LineCurve3:Wf,QuadraticBezierCurve:uu,QuadraticBezierCurve3:Xf,SplineCurve:du});class Yf extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rc[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new rc[s.type]().fromJSON(s))}return this}}class Il extends Yf{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new hu(this.currentPoint.clone(),new oe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new uu(this.currentPoint.clone(),new oe(e,t),new oe(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new lu(this.currentPoint.clone(),new oe(e,t),new oe(i,s),new oe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new du(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){const l=new Lc(e,t,i,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class fu extends Il{constructor(e){super(e),this.uuid=Fn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Il().fromJSON(s))}return this}}function qf(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=pu(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=jf(n,e,r,t)),n.length>80*t){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let f=t;f<s;f+=t){const d=n[f],g=n[f+1];d<a&&(a=d),g<c&&(c=g),d>h&&(h=d),g>u&&(u=g)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return rr(r,o,t,a,c,l,0),o}function pu(n,e,t,i,s){let r;if(s===lp(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Ll(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Ll(o/i|0,n[o],n[o+1],r);return r&&Ss(r,r.next)&&(ar(r),r=r.next),r}function Li(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ss(t,t.next)||Rt(t.prev,t,t.next)===0)){if(ar(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function rr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&ip(n,i,s,r);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(r?Kf(n,i,s,r):Qf(n)){e.push(c.i,n.i,l.i),ar(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Zf(Li(n),e),rr(n,e,t,i,s,r,2)):o===2&&Jf(n,e,t,i,s,r):rr(Li(n),e,t,i,s,r,1);break}}}function Qf(n){const e=n.prev,t=n,i=n.next;if(Rt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,c=t.y,l=i.y,h=Math.min(s,r,o),u=Math.min(a,c,l),f=Math.max(s,r,o),d=Math.max(a,c,l);let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Xs(s,a,r,c,o,l,g.x,g.y)&&Rt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Kf(n,e,t,i){const s=n.prev,r=n,o=n.next;if(Rt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,c,l),g=Math.min(h,u,f),v=Math.max(a,c,l),m=Math.max(h,u,f),p=oc(d,g,e,t,i),x=oc(v,m,e,t,i);let A=n.prevZ,M=n.nextZ;for(;A&&A.z>=p&&M&&M.z<=x;){if(A.x>=d&&A.x<=v&&A.y>=g&&A.y<=m&&A!==s&&A!==o&&Xs(a,h,c,u,l,f,A.x,A.y)&&Rt(A.prev,A,A.next)>=0||(A=A.prevZ,M.x>=d&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Xs(a,h,c,u,l,f,M.x,M.y)&&Rt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;A&&A.z>=p;){if(A.x>=d&&A.x<=v&&A.y>=g&&A.y<=m&&A!==s&&A!==o&&Xs(a,h,c,u,l,f,A.x,A.y)&&Rt(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;M&&M.z<=x;){if(M.x>=d&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Xs(a,h,c,u,l,f,M.x,M.y)&&Rt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Zf(n,e){let t=n;do{const i=t.prev,s=t.next.next;!Ss(i,s)&&gu(i,t,t.next,s)&&or(i,s)&&or(s,i)&&(e.push(i.i,t.i,s.i),ar(t),ar(t.next),t=n=s),t=t.next}while(t!==n);return Li(t)}function Jf(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&op(o,a)){let c=vu(o,a);o=Li(o,o.next),c=Li(c,c.next),rr(o,e,t,i,s,r,0),rr(c,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function jf(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,c=r<o-1?e[r+1]*i:n.length,l=pu(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(rp(l))}s.sort($f);for(let r=0;r<s.length;r++)t=ep(s[r],t);return t}function $f(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function ep(n,e){const t=tp(n,e);if(!t)return e;const i=vu(t,n);return Li(i,i.next),Li(t,t.next)}function tp(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(Ss(n,t))return t;do{if(Ss(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&mu(s<l?i:r,s,c,l,s<l?r:i,s,t.x,t.y)){const u=Math.abs(s-t.y)/(i-t.x);or(t,n)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&np(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function np(n,e){return Rt(n.prev,n,e.prev)<0&&Rt(e.next,n,n.next)<0}function ip(n,e,t,i){let s=n;do s.z===0&&(s.z=oc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,sp(s)}function sp(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function oc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function rp(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function mu(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Xs(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&mu(n,e,t,i,s,r,o,a)}function op(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!ap(n,e)&&(or(n,e)&&or(e,n)&&cp(n,e)&&(Rt(n.prev,n,e.prev)||Rt(n,e.prev,e))||Ss(n,e)&&Rt(n.prev,n,n.next)>0&&Rt(e.prev,e,e.next)>0)}function Rt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ss(n,e){return n.x===e.x&&n.y===e.y}function gu(n,e,t,i){const s=Vr(Rt(n,e,t)),r=Vr(Rt(n,e,i)),o=Vr(Rt(t,i,n)),a=Vr(Rt(t,i,e));return!!(s!==r&&o!==a||s===0&&Gr(n,t,e)||r===0&&Gr(n,i,e)||o===0&&Gr(t,n,i)||a===0&&Gr(t,e,i))}function Gr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Vr(n){return n>0?1:n<0?-1:0}function ap(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&gu(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function or(n,e){return Rt(n.prev,n,n.next)<0?Rt(n,e,n.next)>=0&&Rt(n,n.prev,e)>=0:Rt(n,e,n.prev)<0||Rt(n,n.next,e)<0}function cp(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function vu(n,e){const t=ac(n.i,n.x,n.y),i=ac(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Ll(n,e,t,i){const s=ac(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ar(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ac(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function lp(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class hp{static triangulate(e,t,i=2){return qf(e,t,i)}}class cs{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return cs.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Bl(e),Ul(i,e);let o=e.length;t.forEach(Bl);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Ul(i,t[c]);const a=hp.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Bl(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Ul(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Uc extends Dt{constructor(e=new fu([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new at(s,3)),this.setAttribute("uv",new at(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:up;let A,M=!1,C,T,P,E;p&&(A=p.getSpacedPoints(h),M=!0,f=!1,C=p.computeFrenetFrames(h,!1),T=new R,P=new R,E=new R),f||(m=0,d=0,g=0,v=0);const S=a.extractPoints(l);let y=S.shape;const D=S.holes;if(!cs.isClockWise(y)){y=y.reverse();for(let j=0,X=D.length;j<X;j++){const Z=D[j];cs.isClockWise(Z)&&(D[j]=Z.reverse())}}function U(j){const Z=10000000000000001e-36;let Q=j[0];for(let ce=1;ce<=j.length;ce++){const se=ce%j.length,ae=j[se],ke=ae.x-Q.x,Oe=ae.y-Q.y,b=ke*ke+Oe*Oe,_=Math.max(Math.abs(ae.x),Math.abs(ae.y),Math.abs(Q.x),Math.abs(Q.y)),G=Z*_*_;if(b<=G){j.splice(se,1),ce--;continue}Q=ae}}U(y),D.forEach(U);const z=D.length,N=y;for(let j=0;j<z;j++){const X=D[j];y=y.concat(X)}function F(j,X,Z){return X||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(X,Z)}const W=y.length;function k(j,X,Z){let Q,ce,se;const ae=j.x-X.x,ke=j.y-X.y,Oe=Z.x-j.x,b=Z.y-j.y,_=ae*ae+ke*ke,G=ae*b-ke*Oe;if(Math.abs(G)>Number.EPSILON){const Y=Math.sqrt(_),te=Math.sqrt(Oe*Oe+b*b),J=X.x-ke/Y,Ce=X.y+ae/Y,fe=Z.x-b/te,Te=Z.y+Oe/te,Ue=((fe-J)*b-(Te-Ce)*Oe)/(ae*b-ke*Oe);Q=J+ae*Ue-j.x,ce=Ce+ke*Ue-j.y;const he=Q*Q+ce*ce;if(he<=2)return new oe(Q,ce);se=Math.sqrt(he/2)}else{let Y=!1;ae>Number.EPSILON?Oe>Number.EPSILON&&(Y=!0):ae<-Number.EPSILON?Oe<-Number.EPSILON&&(Y=!0):Math.sign(ke)===Math.sign(b)&&(Y=!0),Y?(Q=-ke,ce=ae,se=Math.sqrt(_)):(Q=ae,ce=ke,se=Math.sqrt(_/2))}return new oe(Q/se,ce/se)}const $=[];for(let j=0,X=N.length,Z=X-1,Q=j+1;j<X;j++,Z++,Q++)Z===X&&(Z=0),Q===X&&(Q=0),$[j]=k(N[j],N[Z],N[Q]);const ne=[];let ge,Pe=$.concat();for(let j=0,X=z;j<X;j++){const Z=D[j];ge=[];for(let Q=0,ce=Z.length,se=ce-1,ae=Q+1;Q<ce;Q++,se++,ae++)se===ce&&(se=0),ae===ce&&(ae=0),ge[Q]=k(Z[Q],Z[se],Z[ae]);ne.push(ge),Pe=Pe.concat(ge)}let qe;if(m===0)qe=cs.triangulateShape(N,D);else{const j=[],X=[];for(let Z=0;Z<m;Z++){const Q=Z/m,ce=d*Math.cos(Q*Math.PI/2),se=g*Math.sin(Q*Math.PI/2)+v;for(let ae=0,ke=N.length;ae<ke;ae++){const Oe=F(N[ae],$[ae],se);Ie(Oe.x,Oe.y,-ce),Q===0&&j.push(Oe)}for(let ae=0,ke=z;ae<ke;ae++){const Oe=D[ae];ge=ne[ae];const b=[];for(let _=0,G=Oe.length;_<G;_++){const Y=F(Oe[_],ge[_],se);Ie(Y.x,Y.y,-ce),Q===0&&b.push(Y)}Q===0&&X.push(b)}}qe=cs.triangulateShape(j,X)}const it=qe.length,Ke=g+v;for(let j=0;j<W;j++){const X=f?F(y[j],Pe[j],Ke):y[j];M?(P.copy(C.normals[0]).multiplyScalar(X.x),T.copy(C.binormals[0]).multiplyScalar(X.y),E.copy(A[0]).add(P).add(T),Ie(E.x,E.y,E.z)):Ie(X.x,X.y,0)}for(let j=1;j<=h;j++)for(let X=0;X<W;X++){const Z=f?F(y[X],Pe[X],Ke):y[X];M?(P.copy(C.normals[j]).multiplyScalar(Z.x),T.copy(C.binormals[j]).multiplyScalar(Z.y),E.copy(A[j]).add(P).add(T),Ie(E.x,E.y,E.z)):Ie(Z.x,Z.y,u/h*j)}for(let j=m-1;j>=0;j--){const X=j/m,Z=d*Math.cos(X*Math.PI/2),Q=g*Math.sin(X*Math.PI/2)+v;for(let ce=0,se=N.length;ce<se;ce++){const ae=F(N[ce],$[ce],Q);Ie(ae.x,ae.y,u+Z)}for(let ce=0,se=D.length;ce<se;ce++){const ae=D[ce];ge=ne[ce];for(let ke=0,Oe=ae.length;ke<Oe;ke++){const b=F(ae[ke],ge[ke],Q);M?Ie(b.x,b.y+A[h-1].y,A[h-1].x+Z):Ie(b.x,b.y,u+Z)}}}ee(),re();function ee(){const j=s.length/3;if(f){let X=0,Z=W*X;for(let Q=0;Q<it;Q++){const ce=qe[Q];Ee(ce[2]+Z,ce[1]+Z,ce[0]+Z)}X=h+m*2,Z=W*X;for(let Q=0;Q<it;Q++){const ce=qe[Q];Ee(ce[0]+Z,ce[1]+Z,ce[2]+Z)}}else{for(let X=0;X<it;X++){const Z=qe[X];Ee(Z[2],Z[1],Z[0])}for(let X=0;X<it;X++){const Z=qe[X];Ee(Z[0]+W*h,Z[1]+W*h,Z[2]+W*h)}}i.addGroup(j,s.length/3-j,0)}function re(){const j=s.length/3;let X=0;we(N,X),X+=N.length;for(let Z=0,Q=D.length;Z<Q;Z++){const ce=D[Z];we(ce,X),X+=ce.length}i.addGroup(j,s.length/3-j,1)}function we(j,X){let Z=j.length;for(;--Z>=0;){const Q=Z;let ce=Z-1;ce<0&&(ce=j.length-1);for(let se=0,ae=h+m*2;se<ae;se++){const ke=W*se,Oe=W*(se+1),b=X+Q+ke,_=X+ce+ke,G=X+ce+Oe,Y=X+Q+Oe;pe(b,_,G,Y)}}}function Ie(j,X,Z){c.push(j),c.push(X),c.push(Z)}function Ee(j,X,Z){Me(j),Me(X),Me(Z);const Q=s.length/3,ce=x.generateTopUV(i,s,Q-3,Q-2,Q-1);I(ce[0]),I(ce[1]),I(ce[2])}function pe(j,X,Z,Q){Me(j),Me(X),Me(Q),Me(X),Me(Z),Me(Q);const ce=s.length/3,se=x.generateSideWallUV(i,s,ce-6,ce-3,ce-2,ce-1);I(se[0]),I(se[1]),I(se[3]),I(se[1]),I(se[2]),I(se[3])}function Me(j){s.push(c[j*3+0]),s.push(c[j*3+1]),s.push(c[j*3+2])}function I(j){r.push(j.x),r.push(j.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return dp(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new rc[s.type]().fromJSON(s)),new Uc(i,e.options)}}const up={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[s*3],h=e[s*3+1];return[new oe(r,o),new oe(a,c),new oe(l,h)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[s*3],d=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new oe(o,1-c),new oe(l,1-u),new oe(f,1-g),new oe(v,1-p)]:[new oe(a,1-c),new oe(h,1-u),new oe(d,1-g),new oe(m,1-p)]}};function dp(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class So extends ur{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new So(e.radius,e.detail)}}class Fc extends ur{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Fc(e.radius,e.detail)}}class Oi extends Dt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const x=p*f-o;for(let A=0;A<l;A++){const M=A*u-r;g.push(M,-x,0),v.push(0,0,1),m.push(A/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){const A=x+l*p,M=x+l*(p+1),C=x+1+l*(p+1),T=x+1+l*p;d.push(A,M,T),d.push(M,C,T)}this.setIndex(d),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(v,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Jt extends Dt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new R,f=new R,d=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const x=[],A=p/i;let M=0;p===0&&o===0?M=.5/t:p===i&&c===Math.PI&&(M=-.5/t);for(let C=0;C<=t;C++){const T=C/t;u.x=-e*Math.cos(s+T*r)*Math.sin(o+A*a),u.y=e*Math.cos(o+A*a),u.z=e*Math.sin(s+T*r)*Math.sin(o+A*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(T+M,1-A),x.push(l++)}h.push(x)}for(let p=0;p<i;p++)for(let x=0;x<t;x++){const A=h[p][x+1],M=h[p][x],C=h[p+1][x],T=h[p+1][x+1];(p!==0||o>0)&&d.push(A,M,T),(p!==i-1||c<Math.PI)&&d.push(M,C,T)}this.setIndex(d),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(v,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _s extends Dt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new R,u=new R,f=new R;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){const v=g/s*r,m=d/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){const v=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,x=(s+1)*d+g;o.push(v,m,x),o.push(m,p,x)}this.setIndex(o),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(c,3)),this.setAttribute("uv",new at(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ve extends On{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qh,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fp extends On{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fi,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pp extends On{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const na={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class xu{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const mp=new xu;class Nc{constructor(e){this.manager=e!==void 0?e:mp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Nc.DEFAULT_MATERIAL_NAME="__DEFAULT";const ss=new WeakMap;class gp extends Nc{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=na.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=ss.get(o);u===void 0&&(u=[],ss.set(o,u)),u.push({onLoad:t,onError:s})}return o}const a=er("img");function c(){h(),t&&t(this);const u=ss.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}ss.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),na.remove(`image:${e}`);const f=ss.get(this)||[];for(let d=0;d<f.length;d++){const g=f[d];g.onError&&g.onError(u)}ss.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),na.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class vp extends Nc{constructor(e){super(e)}load(e,t,i,s){const r=new Lt,o=new gp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Oc extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ia=new lt,Fl=new R,Nl=new R;class zc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=Ht,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cc,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Fl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fl),Nl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nl),t.updateMatrixWorld(),ia.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ia,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ia)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class xp extends zc{constructor(){super(new an(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=As*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Mp extends Oc{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new xp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ol=new lt,Fs=new R,sa=new R;class Ap extends zc{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Fs.setFromMatrixPosition(e.matrixWorld),i.position.copy(Fs),sa.copy(i.position),sa.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(sa),i.updateMatrixWorld(),s.makeTranslation(-Fs.x,-Fs.y,-Fs.z),Ol.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ol,i.coordinateSystem,i.reversedDepth)}}class zl extends Oc{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ap}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class kc extends iu{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class yp extends zc{constructor(){super(new kc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sp extends Oc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new yp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class _p extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class wp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Be{constructor(e){this.value=e}clone(){return new Be(this.value.clone===void 0?this.value:this.value.clone())}}class Ep extends Lf{constructor(e=10,t=10,i=4473924,s=8947848){i=new Re(i),s=new Re(s);const r=t/2,o=e/t,a=e/2,c=[],l=[];for(let f=0,d=0,g=-a;f<=t;f++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const v=f===r?i:s;v.toArray(l,d),d+=3,v.toArray(l,d),d+=3,v.toArray(l,d),d+=3,v.toArray(l,d),d+=3}const h=new Dt;h.setAttribute("position",new at(c,3)),h.setAttribute("color",new at(l,3));const u=new ou({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function kl(n,e,t,i){const s=Tp(i);switch(t){case Wh:return n*e;case Ao:return n*e/s.components*s.byteLength;case Ac:return n*e/s.components*s.byteLength;case Yh:return n*e*2/s.components*s.byteLength;case yc:return n*e*2/s.components*s.byteLength;case Xh:return n*e*3/s.components*s.byteLength;case En:return n*e*4/s.components*s.byteLength;case Sc:return n*e*4/s.components*s.byteLength;case no:case io:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case so:case ro:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Da:case Ia:return Math.max(n,16)*Math.max(e,8)/4;case Ra:case Pa:return Math.max(n,8)*Math.max(e,8)/2;case La:case Ba:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ua:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Na:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Oa:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case za:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ka:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ha:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Va:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Wa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ya:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case qa:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Qa:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ka:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Za:case Ja:case ja:return Math.ceil(n/4)*Math.ceil(e/4)*16;case $a:case ec:return Math.ceil(n/4)*Math.ceil(e/4)*8;case tc:case nc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tp(n){switch(n){case Ht:case kh:return{byteLength:1,components:1};case js:case Hh:case Ui:return{byteLength:2,components:1};case xc:case Mc:return{byteLength:2,components:4};case Pi:case vc:case Dn:return{byteLength:4,components:1};case Gh:case Vh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bi}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bi);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Mu(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function bp(n){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){const h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],v=u[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const v=u[d];n.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Dp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ip=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Up=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Np=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Jp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$p=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,em=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,im=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sm="gl_FragColor = linearToOutputTexel( gl_FragColor );",rm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,om=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,am=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Am=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ym=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_m=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Em=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Tm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Um=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,km=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ym=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Km=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$m=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,i0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,s0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,c0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,h0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,u0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,d0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,f0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,m0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,v0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,x0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,M0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,A0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,y0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,S0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,T0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const b0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,C0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,B0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,U0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,F0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,O0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,G0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Y0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Q0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,K0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,j0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ng=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ig=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,og=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:Cp,alphahash_pars_fragment:Rp,alphamap_fragment:Dp,alphamap_pars_fragment:Pp,alphatest_fragment:Ip,alphatest_pars_fragment:Lp,aomap_fragment:Bp,aomap_pars_fragment:Up,batching_pars_vertex:Fp,batching_vertex:Np,begin_vertex:Op,beginnormal_vertex:zp,bsdfs:kp,iridescence_fragment:Hp,bumpmap_pars_fragment:Gp,clipping_planes_fragment:Vp,clipping_planes_pars_fragment:Wp,clipping_planes_pars_vertex:Xp,clipping_planes_vertex:Yp,color_fragment:qp,color_pars_fragment:Qp,color_pars_vertex:Kp,color_vertex:Zp,common:Jp,cube_uv_reflection_fragment:jp,defaultnormal_vertex:$p,displacementmap_pars_vertex:em,displacementmap_vertex:tm,emissivemap_fragment:nm,emissivemap_pars_fragment:im,colorspace_fragment:sm,colorspace_pars_fragment:rm,envmap_fragment:om,envmap_common_pars_fragment:am,envmap_pars_fragment:cm,envmap_pars_vertex:lm,envmap_physical_pars_fragment:Am,envmap_vertex:hm,fog_vertex:um,fog_pars_vertex:dm,fog_fragment:fm,fog_pars_fragment:pm,gradientmap_pars_fragment:mm,lightmap_pars_fragment:gm,lights_lambert_fragment:vm,lights_lambert_pars_fragment:xm,lights_pars_begin:Mm,lights_toon_fragment:ym,lights_toon_pars_fragment:Sm,lights_phong_fragment:_m,lights_phong_pars_fragment:wm,lights_physical_fragment:Em,lights_physical_pars_fragment:Tm,lights_fragment_begin:bm,lights_fragment_maps:Cm,lights_fragment_end:Rm,logdepthbuf_fragment:Dm,logdepthbuf_pars_fragment:Pm,logdepthbuf_pars_vertex:Im,logdepthbuf_vertex:Lm,map_fragment:Bm,map_pars_fragment:Um,map_particle_fragment:Fm,map_particle_pars_fragment:Nm,metalnessmap_fragment:Om,metalnessmap_pars_fragment:zm,morphinstance_vertex:km,morphcolor_vertex:Hm,morphnormal_vertex:Gm,morphtarget_pars_vertex:Vm,morphtarget_vertex:Wm,normal_fragment_begin:Xm,normal_fragment_maps:Ym,normal_pars_fragment:qm,normal_pars_vertex:Qm,normal_vertex:Km,normalmap_pars_fragment:Zm,clearcoat_normal_fragment_begin:Jm,clearcoat_normal_fragment_maps:jm,clearcoat_pars_fragment:$m,iridescence_pars_fragment:e0,opaque_fragment:t0,packing:n0,premultiplied_alpha_fragment:i0,project_vertex:s0,dithering_fragment:r0,dithering_pars_fragment:o0,roughnessmap_fragment:a0,roughnessmap_pars_fragment:c0,shadowmap_pars_fragment:l0,shadowmap_pars_vertex:h0,shadowmap_vertex:u0,shadowmask_pars_fragment:d0,skinbase_vertex:f0,skinning_pars_vertex:p0,skinning_vertex:m0,skinnormal_vertex:g0,specularmap_fragment:v0,specularmap_pars_fragment:x0,tonemapping_fragment:M0,tonemapping_pars_fragment:A0,transmission_fragment:y0,transmission_pars_fragment:S0,uv_pars_fragment:_0,uv_pars_vertex:w0,uv_vertex:E0,worldpos_vertex:T0,background_vert:b0,background_frag:C0,backgroundCube_vert:R0,backgroundCube_frag:D0,cube_vert:P0,cube_frag:I0,depth_vert:L0,depth_frag:B0,distanceRGBA_vert:U0,distanceRGBA_frag:F0,equirect_vert:N0,equirect_frag:O0,linedashed_vert:z0,linedashed_frag:k0,meshbasic_vert:H0,meshbasic_frag:G0,meshlambert_vert:V0,meshlambert_frag:W0,meshmatcap_vert:X0,meshmatcap_frag:Y0,meshnormal_vert:q0,meshnormal_frag:Q0,meshphong_vert:K0,meshphong_frag:Z0,meshphysical_vert:J0,meshphysical_frag:j0,meshtoon_vert:$0,meshtoon_frag:eg,points_vert:tg,points_frag:ng,shadow_vert:ig,shadow_frag:sg,sprite_vert:rg,sprite_frag:og},Ae={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},In={basic:{uniforms:on([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:on([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Re(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:on([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:on([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:on([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Re(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:on([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:on([Ae.points,Ae.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:on([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:on([Ae.common,Ae.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:on([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:on([Ae.sprite,Ae.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:on([Ae.common,Ae.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:on([Ae.lights,Ae.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};In.physical={uniforms:on([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Wr={r:0,b:0,g:0},yi=new un,ag=new lt;function cg(n,e,t,i,s,r,o){const a=new Re(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(A){let M=A.isScene===!0?A.background:null;return M&&M.isTexture&&(M=(A.backgroundBlurriness>0?t:e).get(M)),M}function v(A){let M=!1;const C=g(A);C===null?p(a,c):C&&C.isColor&&(p(C,1),M=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(A,M){const C=g(M);C&&(C.isCubeTexture||C.mapping===Mo)?(h===void 0&&(h=new le(new xe(1,1,1),new Ft({name:"BackgroundCubeMaterial",uniforms:ys(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,P,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),yi.copy(M.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ag.makeRotationFromEuler(yi)),h.material.toneMapped=ut.getTransfer(C.colorSpace)!==xt,(u!==C||f!==C.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=C,f=C.version,d=n.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new le(new Oi(2,2),new Ft({name:"BackgroundMaterial",uniforms:ys(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ut.getTransfer(C.colorSpace)!==xt,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||f!==C.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=C,f=C.version,d=n.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function p(A,M){A.getRGB(Wr,tu(n)),i.buffers.color.setClear(Wr.r,Wr.g,Wr.b,M,o)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,M=1){a.set(A),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(A){c=A,p(a,c)},render:v,addToRenderList:m,dispose:x}}function lg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(y,D,L,U,z){let N=!1;const F=u(U,L,D);r!==F&&(r=F,l(r.object)),N=d(y,U,L,z),N&&g(y,U,L,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,M(y,D,L,U),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return n.createVertexArray()}function l(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function u(y,D,L){const U=L.wireframe===!0;let z=i[y.id];z===void 0&&(z={},i[y.id]=z);let N=z[D.id];N===void 0&&(N={},z[D.id]=N);let F=N[U];return F===void 0&&(F=f(c()),N[U]=F),F}function f(y){const D=[],L=[],U=[];for(let z=0;z<t;z++)D[z]=0,L[z]=0,U[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:L,attributeDivisors:U,object:y,attributes:{},index:null}}function d(y,D,L,U){const z=r.attributes,N=D.attributes;let F=0;const W=L.getAttributes();for(const k in W)if(W[k].location>=0){const ne=z[k];let ge=N[k];if(ge===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(ge=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(ge=y.instanceColor)),ne===void 0||ne.attribute!==ge||ge&&ne.data!==ge.data)return!0;F++}return r.attributesNum!==F||r.index!==U}function g(y,D,L,U){const z={},N=D.attributes;let F=0;const W=L.getAttributes();for(const k in W)if(W[k].location>=0){let ne=N[k];ne===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(ne=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(ne=y.instanceColor));const ge={};ge.attribute=ne,ne&&ne.data&&(ge.data=ne.data),z[k]=ge,F++}r.attributes=z,r.attributesNum=F,r.index=U}function v(){const y=r.newAttributes;for(let D=0,L=y.length;D<L;D++)y[D]=0}function m(y){p(y,0)}function p(y,D){const L=r.newAttributes,U=r.enabledAttributes,z=r.attributeDivisors;L[y]=1,U[y]===0&&(n.enableVertexAttribArray(y),U[y]=1),z[y]!==D&&(n.vertexAttribDivisor(y,D),z[y]=D)}function x(){const y=r.newAttributes,D=r.enabledAttributes;for(let L=0,U=D.length;L<U;L++)D[L]!==y[L]&&(n.disableVertexAttribArray(L),D[L]=0)}function A(y,D,L,U,z,N,F){F===!0?n.vertexAttribIPointer(y,D,L,z,N):n.vertexAttribPointer(y,D,L,U,z,N)}function M(y,D,L,U){v();const z=U.attributes,N=L.getAttributes(),F=D.defaultAttributeValues;for(const W in N){const k=N[W];if(k.location>=0){let $=z[W];if($===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&($=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&($=y.instanceColor)),$!==void 0){const ne=$.normalized,ge=$.itemSize,Pe=e.get($);if(Pe===void 0)continue;const qe=Pe.buffer,it=Pe.type,Ke=Pe.bytesPerElement,ee=it===n.INT||it===n.UNSIGNED_INT||$.gpuType===vc;if($.isInterleavedBufferAttribute){const re=$.data,we=re.stride,Ie=$.offset;if(re.isInstancedInterleavedBuffer){for(let Ee=0;Ee<k.locationSize;Ee++)p(k.location+Ee,re.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ee=0;Ee<k.locationSize;Ee++)m(k.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let Ee=0;Ee<k.locationSize;Ee++)A(k.location+Ee,ge/k.locationSize,it,ne,we*Ke,(Ie+ge/k.locationSize*Ee)*Ke,ee)}else{if($.isInstancedBufferAttribute){for(let re=0;re<k.locationSize;re++)p(k.location+re,$.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let re=0;re<k.locationSize;re++)m(k.location+re);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let re=0;re<k.locationSize;re++)A(k.location+re,ge/k.locationSize,it,ne,ge*Ke,ge/k.locationSize*re*Ke,ee)}}else if(F!==void 0){const ne=F[W];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(k.location,ne);break;case 3:n.vertexAttrib3fv(k.location,ne);break;case 4:n.vertexAttrib4fv(k.location,ne);break;default:n.vertexAttrib1fv(k.location,ne)}}}}x()}function C(){E();for(const y in i){const D=i[y];for(const L in D){const U=D[L];for(const z in U)h(U[z].object),delete U[z];delete D[L]}delete i[y]}}function T(y){if(i[y.id]===void 0)return;const D=i[y.id];for(const L in D){const U=D[L];for(const z in U)h(U[z].object),delete U[z];delete D[L]}delete i[y.id]}function P(y){for(const D in i){const L=i[D];if(L[y.id]===void 0)continue;const U=L[y.id];for(const z in U)h(U[z].object),delete U[z];delete L[y.id]}}function E(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function hg(n,e,t){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),t.update(h,i,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,i,1)}function c(l,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function ug(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==En&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const E=P===Ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Ht&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Dn&&!E)}function c(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:A,maxFragmentUniforms:M,vertexTextures:C,maxSamples:T}}function dg(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Ei,a=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const x=r?0:i,A=x*4;let M=p.clippingState||null;c.value=M,M=h(g,f,A,d);for(let C=0;C!==A;++C)M[C]=t[C];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=d+v*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,M=d;A!==v;++A,M+=4)o.copy(u[A]).applyMatrix4(x,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function fg(n){let e=new WeakMap;function t(o,a){return a===ba?o.mapping=gs:a===Ca&&(o.mapping=vs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ba||a===Ca)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Ef(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const ls=4,Hl=[.125,.215,.35,.446,.526,.582],Ci=20,ra=new kc,Gl=new Re;let oa=null,aa=0,ca=0,la=!1;const Ti=(1+Math.sqrt(5))/2,rs=1/Ti,Vl=[new R(-Ti,rs,0),new R(Ti,rs,0),new R(-rs,0,Ti),new R(rs,0,Ti),new R(0,Ti,-rs),new R(0,Ti,rs),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],pg=new R;class cc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=pg}=r;oa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),la=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oa,aa,ca),this._renderer.xr.enabled=la,e.scissorTest=!1,Xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gs||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),la=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:Ui,format:En,colorSpace:di,depthBuffer:!1},s=Wl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wl(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mg(r)),this._blurMaterial=gg(r,e,t)}return s}_compileMaterial(e){const t=new le(this._lodPlanes[0],e);this._renderer.compile(t,ra)}_sceneToCubeUV(e,t,i,s,r){const c=new an(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Gl),u.toneMapping=Zn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const v=new Ii({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),m=new le(new xe,v);let p=!1;const x=e.background;x?x.isColor&&(v.color.copy(x),e.background=null,p=!0):(v.color.copy(Gl),p=!0);for(let A=0;A<6;A++){const M=A%3;M===0?(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[A],r.y,r.z)):M===1?(c.up.set(0,0,l[A]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[A],r.z)):(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[A]));const C=this._cubeSize;Xr(s,M*C,A>2?C:0,C,C),u.setRenderTarget(s),p&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=x}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===gs||e.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new le(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Xr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,ra)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Vl[(s-r-1)%Vl.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new le(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ci-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Ci;m>Ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ci}`);const p=[];let x=0;for(let P=0;P<Ci;++P){const E=P/v,S=Math.exp(-E*E/2);p.push(S),P===0?x+=S:P<m&&(x+=2*S)}for(let P=0;P<p.length;P++)p[P]=p[P]/x;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:A}=this;f.dTheta.value=g,f.mipInt.value=A-i;const M=this._sizeLods[s],C=3*M*(s>A-ls?s-A+ls:0),T=4*(this._cubeSize-M);Xr(t,C,T,3*M,2*M),c.setRenderTarget(t),c.render(u,ra)}}function mg(n){const e=[],t=[],i=[];let s=n;const r=n-ls+1+Hl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>n-ls?c=Hl[o-n+ls-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,v=3,m=2,p=1,x=new Float32Array(v*g*d),A=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let T=0;T<d;T++){const P=T%3*2/3-1,E=T>2?0:-1,S=[P,E,0,P+2/3,E,0,P+2/3,E+1,0,P,E,0,P+2/3,E+1,0,P,E+1,0];x.set(S,v*g*T),A.set(f,m*g*T);const y=[T,T,T,T,T,T];M.set(y,p*g*T)}const C=new Dt;C.setAttribute("position",new Bt(x,v)),C.setAttribute("uv",new Bt(A,m)),C.setAttribute("faceIndex",new Bt(M,p)),e.push(C),s>ls&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Wl(n,e,t){const i=new Ut(n,e,t);return i.texture.mapping=Mo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function gg(n,e,t){const i=new Float32Array(Ci),s=new R(0,1,0);return new Ft({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qt,depthTest:!1,depthWrite:!1})}function Xl(){return new Ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qt,depthTest:!1,depthWrite:!1})}function Yl(){return new Ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qt,depthTest:!1,depthWrite:!1})}function Hc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vg(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===ba||c===Ca,h=c===gs||c===vs;if(l||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new cc(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new cc(n)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function xg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&tr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Mg(n,e,t,i){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const d in f)e.update(f[d],n.ARRAY_BUFFER)}function l(u){const f=[],d=u.index,g=u.attributes.position;let v=0;if(d!==null){const x=d.array;v=d.version;for(let A=0,M=x.length;A<M;A+=3){const C=x[A+0],T=x[A+1],P=x[A+2];f.push(C,T,T,P,P,C)}}else if(g!==void 0){const x=g.array;v=g.version;for(let A=0,M=x.length/3-1;A<M;A+=3){const C=A+0,T=A+1,P=A+2;f.push(C,T,T,P,P,C)}}else return;const m=new(Kh(f)?eu:$h)(f,1);m.version=v;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Ag(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function l(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),t.update(d,i,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function u(f,d,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,v,0,g);let p=0;for(let x=0;x<g;x++)p+=d[x]*v[x];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function yg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Sg(n,e,t){const i=new WeakMap,s=new ft;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let y=function(){E.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let C=a.attributes.position.count*M,T=1;C>e.maxTextureSize&&(T=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const P=new Float32Array(C*T*4*u),E=new Zh(P,C,T,u);E.type=Dn,E.needsUpdate=!0;const S=M*4;for(let D=0;D<u;D++){const L=p[D],U=x[D],z=A[D],N=C*T*4*D;for(let F=0;F<L.count;F++){const W=F*S;g===!0&&(s.fromBufferAttribute(L,F),P[N+W+0]=s.x,P[N+W+1]=s.y,P[N+W+2]=s.z,P[N+W+3]=0),v===!0&&(s.fromBufferAttribute(U,F),P[N+W+4]=s.x,P[N+W+5]=s.y,P[N+W+6]=s.z,P[N+W+7]=0),m===!0&&(s.fromBufferAttribute(z,F),P[N+W+8]=s.x,P[N+W+9]=s.y,P[N+W+10]=s.z,P[N+W+11]=z.itemSize===4?s.w:1)}}f={count:u,texture:E,size:new oe(C,T)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function _g(n,e,t,i){let s=new WeakMap;function r(c){const l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const Au=new Lt,ql=new yo(1,1),yu=new Zh,Su=new of,_u=new su,Ql=[],Kl=[],Zl=new Float32Array(16),Jl=new Float32Array(9),jl=new Float32Array(4);function ws(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Ql[s];if(r===void 0&&(r=new Float32Array(s),Ql[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function _o(n,e){let t=Kl[e];t===void 0&&(t=new Int32Array(e),Kl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function wg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Eg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function Tg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function bg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function Cg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,i))return;jl.set(i),n.uniformMatrix2fv(this.addr,!1,jl),Vt(t,i)}}function Rg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,i))return;Jl.set(i),n.uniformMatrix3fv(this.addr,!1,Jl),Vt(t,i)}}function Dg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,i))return;Zl.set(i),n.uniformMatrix4fv(this.addr,!1,Zl),Vt(t,i)}}function Pg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ig(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function Lg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function Bg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function Ug(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Fg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function Ng(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function Og(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function zg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ql.compareFunction=Qh,r=ql):r=Au,t.setTexture2D(e||r,s)}function kg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Su,s)}function Hg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||_u,s)}function Gg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||yu,s)}function Vg(n){switch(n){case 5126:return wg;case 35664:return Eg;case 35665:return Tg;case 35666:return bg;case 35674:return Cg;case 35675:return Rg;case 35676:return Dg;case 5124:case 35670:return Pg;case 35667:case 35671:return Ig;case 35668:case 35672:return Lg;case 35669:case 35673:return Bg;case 5125:return Ug;case 36294:return Fg;case 36295:return Ng;case 36296:return Og;case 35678:case 36198:case 36298:case 36306:case 35682:return zg;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return Gg}}function Wg(n,e){n.uniform1fv(this.addr,e)}function Xg(n,e){const t=ws(e,this.size,2);n.uniform2fv(this.addr,t)}function Yg(n,e){const t=ws(e,this.size,3);n.uniform3fv(this.addr,t)}function qg(n,e){const t=ws(e,this.size,4);n.uniform4fv(this.addr,t)}function Qg(n,e){const t=ws(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Kg(n,e){const t=ws(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Zg(n,e){const t=ws(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Jg(n,e){n.uniform1iv(this.addr,e)}function jg(n,e){n.uniform2iv(this.addr,e)}function $g(n,e){n.uniform3iv(this.addr,e)}function ev(n,e){n.uniform4iv(this.addr,e)}function tv(n,e){n.uniform1uiv(this.addr,e)}function nv(n,e){n.uniform2uiv(this.addr,e)}function iv(n,e){n.uniform3uiv(this.addr,e)}function sv(n,e){n.uniform4uiv(this.addr,e)}function rv(n,e,t){const i=this.cache,s=e.length,r=_o(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Au,r[o])}function ov(n,e,t){const i=this.cache,s=e.length,r=_o(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Su,r[o])}function av(n,e,t){const i=this.cache,s=e.length,r=_o(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||_u,r[o])}function cv(n,e,t){const i=this.cache,s=e.length,r=_o(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||yu,r[o])}function lv(n){switch(n){case 5126:return Wg;case 35664:return Xg;case 35665:return Yg;case 35666:return qg;case 35674:return Qg;case 35675:return Kg;case 35676:return Zg;case 5124:case 35670:return Jg;case 35667:case 35671:return jg;case 35668:case 35672:return $g;case 35669:case 35673:return ev;case 5125:return tv;case 36294:return nv;case 36295:return iv;case 36296:return sv;case 35678:case 36198:case 36298:case 36306:case 35682:return rv;case 35679:case 36299:case 36307:return ov;case 35680:case 36300:case 36308:case 36293:return av;case 36289:case 36303:case 36311:case 36292:return cv}}class hv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Vg(t.type)}}class uv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lv(t.type)}}class dv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const ha=/(\w+)(\])?(\[|\.)?/g;function $l(n,e){n.seq.push(e),n.map[e.id]=e}function fv(n,e,t){const i=n.name,s=i.length;for(ha.lastIndex=0;;){const r=ha.exec(i),o=ha.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){$l(t,l===void 0?new hv(a,n,e):new uv(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new dv(a),$l(t,u)),t=u}}}class oo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);fv(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function eh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const pv=37297;let mv=0;function gv(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const th=new Je;function vv(n){ut._getMatrix(th,ut.workingColorSpace,n);const e=`mat3( ${th.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(n)){case lo:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function nh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+gv(n.getShaderSource(e),a)}else return r}function xv(n,e){const t=vv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Mv(n,e){let t;switch(e){case Md:t="Linear";break;case Ad:t="Reinhard";break;case yd:t="Cineon";break;case Sd:t="ACESFilmic";break;case wd:t="AgX";break;case Ed:t="Neutral";break;case _d:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Yr=new R;function Av(){ut.getLuminanceCoefficients(Yr);const n=Yr.x.toFixed(4),e=Yr.y.toFixed(4),t=Yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ys).join(`
`)}function Sv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function _v(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ys(n){return n!==""}function ih(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wv=/^[ \t]*#include +<([\w\d./]+)>/gm;function lc(n){return n.replace(wv,Tv)}const Ev=new Map;function Tv(n,e){let t=je[e];if(t===void 0){const i=Ev.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lc(t)}const bv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rh(n){return n.replace(bv,Cv)}function Cv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function oh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Rv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Fh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Nh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function Dv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case gs:case vs:e="ENVMAP_TYPE_CUBE";break;case Mo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Pv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case vs:e="ENVMAP_MODE_REFRACTION";break}return e}function Iv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Oh:e="ENVMAP_BLENDING_MULTIPLY";break;case vd:e="ENVMAP_BLENDING_MIX";break;case xd:e="ENVMAP_BLENDING_ADD";break}return e}function Lv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Bv(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Rv(t),l=Dv(t),h=Pv(t),u=Iv(t),f=Lv(t),d=yv(t),g=Sv(r),v=s.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ys).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ys).join(`
`),p.length>0&&(p+=`
`)):(m=[oh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),p=[oh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?je.tonemapping_pars_fragment:"",t.toneMapping!==Zn?Mv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,xv("linearToOutputTexel",t.outputColorSpace),Av(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ys).join(`
`)),o=lc(o),o=ih(o,t),o=sh(o,t),a=lc(a),a=ih(a,t),a=sh(a,t),o=rh(o),a=rh(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=x+m+o,M=x+p+a,C=eh(s,s.VERTEX_SHADER,A),T=eh(s,s.FRAGMENT_SHADER,M);s.attachShader(v,C),s.attachShader(v,T),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(D){if(n.debug.checkShaderErrors){const L=s.getProgramInfoLog(v)||"",U=s.getShaderInfoLog(C)||"",z=s.getShaderInfoLog(T)||"",N=L.trim(),F=U.trim(),W=z.trim();let k=!0,$=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,C,T);else{const ne=nh(s,C,"vertex"),ge=nh(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+N+`
`+ne+`
`+ge)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||W==="")&&($=!1);$&&(D.diagnostics={runnable:k,programLog:N,vertexShader:{log:F,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(C),s.deleteShader(T),E=new oo(s,v),S=_v(s,v)}let E;this.getUniforms=function(){return E===void 0&&P(this),E};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,pv)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=T,this}let Uv=0;class Fv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Nv(e),t.set(e,i)),i}}class Nv{constructor(e){this.id=Uv++,this.code=e,this.usedTimes=0}}function Ov(n,e,t,i,s,r,o){const a=new Jh,c=new Fv,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,y,D,L,U){const z=L.fog,N=U.geometry,F=S.isMeshStandardMaterial?L.environment:null,W=(S.isMeshStandardMaterial?t:e).get(S.envMap||F),k=W&&W.mapping===Mo?W.image.height:null,$=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const ne=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ge=ne!==void 0?ne.length:0;let Pe=0;N.morphAttributes.position!==void 0&&(Pe=1),N.morphAttributes.normal!==void 0&&(Pe=2),N.morphAttributes.color!==void 0&&(Pe=3);let qe,it,Ke,ee;if($){const mt=In[$];qe=mt.vertexShader,it=mt.fragmentShader}else qe=S.vertexShader,it=S.fragmentShader,c.update(S),Ke=c.getVertexShaderID(S),ee=c.getFragmentShaderID(S);const re=n.getRenderTarget(),we=n.state.buffers.depth.getReversed(),Ie=U.isInstancedMesh===!0,Ee=U.isBatchedMesh===!0,pe=!!S.map,Me=!!S.matcap,I=!!W,j=!!S.aoMap,X=!!S.lightMap,Z=!!S.bumpMap,Q=!!S.normalMap,ce=!!S.displacementMap,se=!!S.emissiveMap,ae=!!S.metalnessMap,ke=!!S.roughnessMap,Oe=S.anisotropy>0,b=S.clearcoat>0,_=S.dispersion>0,G=S.iridescence>0,Y=S.sheen>0,te=S.transmission>0,J=Oe&&!!S.anisotropyMap,Ce=b&&!!S.clearcoatMap,fe=b&&!!S.clearcoatNormalMap,Te=b&&!!S.clearcoatRoughnessMap,Ue=G&&!!S.iridescenceMap,he=G&&!!S.iridescenceThicknessMap,_e=Y&&!!S.sheenColorMap,Xe=Y&&!!S.sheenRoughnessMap,Ne=!!S.specularMap,ye=!!S.specularColorMap,Ze=!!S.specularIntensityMap,O=te&&!!S.transmissionMap,me=te&&!!S.thicknessMap,ve=!!S.gradientMap,De=!!S.alphaMap,ue=S.alphaTest>0,ie=!!S.alphaHash,Fe=!!S.extensions;let Qe=Zn;S.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Qe=n.toneMapping);const At={shaderID:$,shaderType:S.type,shaderName:S.name,vertexShader:qe,fragmentShader:it,defines:S.defines,customVertexShaderID:Ke,customFragmentShaderID:ee,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Ee,batchingColor:Ee&&U._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&U.instanceColor!==null,instancingMorph:Ie&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:re===null?n.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:di,alphaToCoverage:!!S.alphaToCoverage,map:pe,matcap:Me,envMap:I,envMapMode:I&&W.mapping,envMapCubeUVHeight:k,aoMap:j,lightMap:X,bumpMap:Z,normalMap:Q,displacementMap:f&&ce,emissiveMap:se,normalMapObjectSpace:Q&&S.normalMapType===Cd,normalMapTangentSpace:Q&&S.normalMapType===qh,metalnessMap:ae,roughnessMap:ke,anisotropy:Oe,anisotropyMap:J,clearcoat:b,clearcoatMap:Ce,clearcoatNormalMap:fe,clearcoatRoughnessMap:Te,dispersion:_,iridescence:G,iridescenceMap:Ue,iridescenceThicknessMap:he,sheen:Y,sheenColorMap:_e,sheenRoughnessMap:Xe,specularMap:Ne,specularColorMap:ye,specularIntensityMap:Ze,transmission:te,transmissionMap:O,thicknessMap:me,gradientMap:ve,opaque:S.transparent===!1&&S.blending===ds&&S.alphaToCoverage===!1,alphaMap:De,alphaTest:ue,alphaHash:ie,combine:S.combine,mapUv:pe&&v(S.map.channel),aoMapUv:j&&v(S.aoMap.channel),lightMapUv:X&&v(S.lightMap.channel),bumpMapUv:Z&&v(S.bumpMap.channel),normalMapUv:Q&&v(S.normalMap.channel),displacementMapUv:ce&&v(S.displacementMap.channel),emissiveMapUv:se&&v(S.emissiveMap.channel),metalnessMapUv:ae&&v(S.metalnessMap.channel),roughnessMapUv:ke&&v(S.roughnessMap.channel),anisotropyMapUv:J&&v(S.anisotropyMap.channel),clearcoatMapUv:Ce&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:fe&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:he&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&v(S.sheenRoughnessMap.channel),specularMapUv:Ne&&v(S.specularMap.channel),specularColorMapUv:ye&&v(S.specularColorMap.channel),specularIntensityMapUv:Ze&&v(S.specularIntensityMap.channel),transmissionMapUv:O&&v(S.transmissionMap.channel),thicknessMapUv:me&&v(S.thicknessMap.channel),alphaMapUv:De&&v(S.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Q||Oe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!N.attributes.uv&&(pe||De),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:we,skinning:U.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Pe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Qe,decodeVideoTexture:pe&&S.map.isVideoTexture===!0&&ut.getTransfer(S.map.colorSpace)===xt,decodeVideoTextureEmissive:se&&S.emissiveMap.isVideoTexture===!0&&ut.getTransfer(S.emissiveMap.colorSpace)===xt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Zt,flipSided:S.side===Ot,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Fe&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&S.extensions.multiDraw===!0||Ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return At.vertexUv1s=l.has(1),At.vertexUv2s=l.has(2),At.vertexUv3s=l.has(3),l.clear(),At}function p(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)y.push(D),y.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(x(y,S),A(y,S),y.push(n.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function x(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function A(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function M(S){const y=g[S.type];let D;if(y){const L=In[y];D=nu.clone(L.uniforms)}else D=S.uniforms;return D}function C(S,y){let D;for(let L=0,U=h.length;L<U;L++){const z=h[L];if(z.cacheKey===y){D=z,++D.usedTimes;break}}return D===void 0&&(D=new Bv(n,y,S,r),h.push(D)),D}function T(S){if(--S.usedTimes===0){const y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function P(S){c.remove(S)}function E(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:C,releaseProgram:T,releaseShaderCache:P,programs:h,dispose:E}}function zv(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function kv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ah(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ch(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,f,d,g,v,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function a(u,f,d,g,v,m){const p=o(u,f,d,g,v,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function c(u,f,d,g,v,m){const p=o(u,f,d,g,v,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||kv),i.length>1&&i.sort(f||ah),s.length>1&&s.sort(f||ah)}function h(){for(let u=e,f=n.length;u<f;u++){const d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Hv(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new ch,n.set(i,[o])):s>=r.length?(o=new ch,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Gv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Re};break;case"SpotLight":t={position:new R,direction:new R,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new R,halfWidth:new R,halfHeight:new R};break}return n[e.id]=t,t}}}function Vv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Wv=0;function Xv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Yv(n){const e=new Gv,t=Vv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new R);const s=new R,r=new lt,o=new lt;function a(l){let h=0,u=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,x=0,A=0,M=0,C=0,T=0,P=0;l.sort(Xv);for(let S=0,y=l.length;S<y;S++){const D=l[S],L=D.color,U=D.intensity,z=D.distance,N=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=L.r*U,u+=L.g*U,f+=L.b*U;else if(D.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(D.sh.coefficients[F],U);P++}else if(D.isDirectionalLight){const F=e.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const W=D.shadow,k=t.get(D);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,i.directionalShadow[d]=k,i.directionalShadowMap[d]=N,i.directionalShadowMatrix[d]=D.shadow.matrix,x++}i.directional[d]=F,d++}else if(D.isSpotLight){const F=e.get(D);F.position.setFromMatrixPosition(D.matrixWorld),F.color.copy(L).multiplyScalar(U),F.distance=z,F.coneCos=Math.cos(D.angle),F.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),F.decay=D.decay,i.spot[v]=F;const W=D.shadow;if(D.map&&(i.spotLightMap[C]=D.map,C++,W.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[v]=W.matrix,D.castShadow){const k=t.get(D);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,i.spotShadow[v]=k,i.spotShadowMap[v]=N,M++}v++}else if(D.isRectAreaLight){const F=e.get(D);F.color.copy(L).multiplyScalar(U),F.halfWidth.set(D.width*.5,0,0),F.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=F,m++}else if(D.isPointLight){const F=e.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity),F.distance=D.distance,F.decay=D.decay,D.castShadow){const W=D.shadow,k=t.get(D);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,k.shadowCameraNear=W.camera.near,k.shadowCameraFar=W.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=N,i.pointShadowMatrix[g]=D.shadow.matrix,A++}i.point[g]=F,g++}else if(D.isHemisphereLight){const F=e.get(D);F.skyColor.copy(D.color).multiplyScalar(U),F.groundColor.copy(D.groundColor).multiplyScalar(U),i.hemi[p]=F,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const E=i.hash;(E.directionalLength!==d||E.pointLength!==g||E.spotLength!==v||E.rectAreaLength!==m||E.hemiLength!==p||E.numDirectionalShadows!==x||E.numPointShadows!==A||E.numSpotShadows!==M||E.numSpotMaps!==C||E.numLightProbes!==P)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=M+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=P,E.directionalLength=d,E.pointLength=g,E.spotLength=v,E.rectAreaLength=m,E.hemiLength=p,E.numDirectionalShadows=x,E.numPointShadows=A,E.numSpotShadows=M,E.numSpotMaps=C,E.numLightProbes=P,i.version=Wv++)}function c(l,h){let u=0,f=0,d=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const A=l[p];if(A.isDirectionalLight){const M=i.directional[u];M.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(A.isSpotLight){const M=i.spot[d];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(A.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(A.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(A.width*.5,0,0),M.halfHeight.set(0,A.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(A.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(m),f++}else if(A.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(A.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:i}}function lh(n){const e=new Yv(n),t=[],i=[];function s(h){l.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function qv(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new lh(n),e.set(s,[a])):r>=o.length?(a=new lh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Qv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Zv(n,e,t){let i=new Cc;const s=new oe,r=new oe,o=new ft,a=new fp({depthPacking:bd}),c=new pp,l={},h=t.maxTextureSize,u={[jn]:Ot,[Ot]:jn,[Zt]:Zt},f=new Ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:Qv,fragmentShader:Kv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Dt;g.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new le(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fh;let p=this.type;this.render=function(T,P,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=n.getRenderTarget(),y=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),L=n.state;L.setBlending(qt),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const U=p!==qn&&this.type===qn,z=p===qn&&this.type!==qn;for(let N=0,F=T.length;N<F;N++){const W=T[N],k=W.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const $=k.getFrameExtents();if(s.multiply($),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,k.mapSize.y=r.y)),k.map===null||U===!0||z===!0){const ge=this.type!==qn?{minFilter:jt,magFilter:jt}:{};k.map!==null&&k.map.dispose(),k.map=new Ut(s.x,s.y,ge),k.map.texture.name=W.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const ne=k.getViewportCount();for(let ge=0;ge<ne;ge++){const Pe=k.getViewport(ge);o.set(r.x*Pe.x,r.y*Pe.y,r.x*Pe.z,r.y*Pe.w),L.viewport(o),k.updateMatrices(W,ge),i=k.getFrustum(),M(P,E,k.camera,W,this.type)}k.isPointLightShadow!==!0&&this.type===qn&&x(k,E),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,y,D)};function x(T,P){const E=e.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ut(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(P,null,E,f,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(P,null,E,d,v,null)}function A(T,P,E,S){let y=null;const D=E.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)y=D;else if(y=E.isPointLight===!0?c:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const L=y.uuid,U=P.uuid;let z=l[L];z===void 0&&(z={},l[L]=z);let N=z[U];N===void 0&&(N=y.clone(),z[U]=N,P.addEventListener("dispose",C)),y=N}if(y.visible=P.visible,y.wireframe=P.wireframe,S===qn?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:u[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,E.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const L=n.properties.get(y);L.light=E}return y}function M(T,P,E,S,y){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===qn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,T.matrixWorld);const U=e.update(T),z=T.material;if(Array.isArray(z)){const N=U.groups;for(let F=0,W=N.length;F<W;F++){const k=N[F],$=z[k.materialIndex];if($&&$.visible){const ne=A(T,$,S,y);T.onBeforeShadow(n,T,P,E,U,ne,k),n.renderBufferDirect(E,null,U,ne,T,k),T.onAfterShadow(n,T,P,E,U,ne,k)}}}else if(z.visible){const N=A(T,z,S,y);T.onBeforeShadow(n,T,P,E,U,N,null),n.renderBufferDirect(E,null,U,N,T,null),T.onAfterShadow(n,T,P,E,U,N,null)}}const L=T.children;for(let U=0,z=L.length;U<z;U++)M(L[U],P,E,S,y)}function C(T){T.target.removeEventListener("dispose",C);for(const E in l){const S=l[E],y=T.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const Jv={[ya]:co,[Sa]:Ea,[_a]:Ta,[ms]:wa,[co]:ya,[Ea]:Sa,[Ta]:_a,[wa]:ms};function jv(n,e){function t(){let O=!1;const me=new ft;let ve=null;const De=new ft(0,0,0,0);return{setMask:function(ue){ve!==ue&&!O&&(n.colorMask(ue,ue,ue,ue),ve=ue)},setLocked:function(ue){O=ue},setClear:function(ue,ie,Fe,Qe,At){At===!0&&(ue*=Qe,ie*=Qe,Fe*=Qe),me.set(ue,ie,Fe,Qe),De.equals(me)===!1&&(n.clearColor(ue,ie,Fe,Qe),De.copy(me))},reset:function(){O=!1,ve=null,De.set(-1,0,0,0)}}}function i(){let O=!1,me=!1,ve=null,De=null,ue=null;return{setReversed:function(ie){if(me!==ie){const Fe=e.get("EXT_clip_control");ie?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),me=ie;const Qe=ue;ue=null,this.setClear(Qe)}},getReversed:function(){return me},setTest:function(ie){ie?re(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(ie){ve!==ie&&!O&&(n.depthMask(ie),ve=ie)},setFunc:function(ie){if(me&&(ie=Jv[ie]),De!==ie){switch(ie){case ya:n.depthFunc(n.NEVER);break;case co:n.depthFunc(n.ALWAYS);break;case Sa:n.depthFunc(n.LESS);break;case ms:n.depthFunc(n.LEQUAL);break;case _a:n.depthFunc(n.EQUAL);break;case wa:n.depthFunc(n.GEQUAL);break;case Ea:n.depthFunc(n.GREATER);break;case Ta:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}De=ie}},setLocked:function(ie){O=ie},setClear:function(ie){ue!==ie&&(me&&(ie=1-ie),n.clearDepth(ie),ue=ie)},reset:function(){O=!1,ve=null,De=null,ue=null,me=!1}}}function s(){let O=!1,me=null,ve=null,De=null,ue=null,ie=null,Fe=null,Qe=null,At=null;return{setTest:function(mt){O||(mt?re(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(mt){me!==mt&&!O&&(n.stencilMask(mt),me=mt)},setFunc:function(mt,kn,Pn){(ve!==mt||De!==kn||ue!==Pn)&&(n.stencilFunc(mt,kn,Pn),ve=mt,De=kn,ue=Pn)},setOp:function(mt,kn,Pn){(ie!==mt||Fe!==kn||Qe!==Pn)&&(n.stencilOp(mt,kn,Pn),ie=mt,Fe=kn,Qe=Pn)},setLocked:function(mt){O=mt},setClear:function(mt){At!==mt&&(n.clearStencil(mt),At=mt)},reset:function(){O=!1,me=null,ve=null,De=null,ue=null,ie=null,Fe=null,Qe=null,At=null}}}const r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,x=null,A=null,M=null,C=null,T=null,P=new Re(0,0,0),E=0,S=!1,y=null,D=null,L=null,U=null,z=null;const N=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,W=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(k)[1]),F=W>=1):k.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),F=W>=2);let $=null,ne={};const ge=n.getParameter(n.SCISSOR_BOX),Pe=n.getParameter(n.VIEWPORT),qe=new ft().fromArray(ge),it=new ft().fromArray(Pe);function Ke(O,me,ve,De){const ue=new Uint8Array(4),ie=n.createTexture();n.bindTexture(O,ie),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<ve;Fe++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(me,0,n.RGBA,1,1,De,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(me+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return ie}const ee={};ee[n.TEXTURE_2D]=Ke(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=Ke(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[n.TEXTURE_2D_ARRAY]=Ke(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=Ke(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(n.DEPTH_TEST),o.setFunc(ms),Z(!1),Q(Jc),re(n.CULL_FACE),j(qt);function re(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function we(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function Ie(O,me){return u[O]!==me?(n.bindFramebuffer(O,me),u[O]=me,O===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=me),O===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=me),!0):!1}function Ee(O,me){let ve=d,De=!1;if(O){ve=f.get(me),ve===void 0&&(ve=[],f.set(me,ve));const ue=O.textures;if(ve.length!==ue.length||ve[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,Fe=ue.length;ie<Fe;ie++)ve[ie]=n.COLOR_ATTACHMENT0+ie;ve.length=ue.length,De=!0}}else ve[0]!==n.BACK&&(ve[0]=n.BACK,De=!0);De&&n.drawBuffers(ve)}function pe(O){return g!==O?(n.useProgram(O),g=O,!0):!1}const Me={[bi]:n.FUNC_ADD,[ed]:n.FUNC_SUBTRACT,[td]:n.FUNC_REVERSE_SUBTRACT};Me[nd]=n.MIN,Me[id]=n.MAX;const I={[sd]:n.ZERO,[rd]:n.ONE,[od]:n.SRC_COLOR,[Ma]:n.SRC_ALPHA,[dd]:n.SRC_ALPHA_SATURATE,[hd]:n.DST_COLOR,[cd]:n.DST_ALPHA,[ad]:n.ONE_MINUS_SRC_COLOR,[Aa]:n.ONE_MINUS_SRC_ALPHA,[ud]:n.ONE_MINUS_DST_COLOR,[ld]:n.ONE_MINUS_DST_ALPHA,[fd]:n.CONSTANT_COLOR,[pd]:n.ONE_MINUS_CONSTANT_COLOR,[md]:n.CONSTANT_ALPHA,[gd]:n.ONE_MINUS_CONSTANT_ALPHA};function j(O,me,ve,De,ue,ie,Fe,Qe,At,mt){if(O===qt){v===!0&&(we(n.BLEND),v=!1);return}if(v===!1&&(re(n.BLEND),v=!0),O!==$u){if(O!==m||mt!==S){if((p!==bi||M!==bi)&&(n.blendEquation(n.FUNC_ADD),p=bi,M=bi),mt)switch(O){case ds:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ao:n.blendFunc(n.ONE,n.ONE);break;case jc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $c:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ds:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ao:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case jc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $c:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}x=null,A=null,C=null,T=null,P.set(0,0,0),E=0,m=O,S=mt}return}ue=ue||me,ie=ie||ve,Fe=Fe||De,(me!==p||ue!==M)&&(n.blendEquationSeparate(Me[me],Me[ue]),p=me,M=ue),(ve!==x||De!==A||ie!==C||Fe!==T)&&(n.blendFuncSeparate(I[ve],I[De],I[ie],I[Fe]),x=ve,A=De,C=ie,T=Fe),(Qe.equals(P)===!1||At!==E)&&(n.blendColor(Qe.r,Qe.g,Qe.b,At),P.copy(Qe),E=At),m=O,S=!1}function X(O,me){O.side===Zt?we(n.CULL_FACE):re(n.CULL_FACE);let ve=O.side===Ot;me&&(ve=!ve),Z(ve),O.blending===ds&&O.transparent===!1?j(qt):j(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const De=O.stencilWrite;a.setTest(De),De&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),se(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?re(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function Z(O){y!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),y=O)}function Q(O){O!==Ju?(re(n.CULL_FACE),O!==D&&(O===Jc?n.cullFace(n.BACK):O===ju?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),D=O}function ce(O){O!==L&&(F&&n.lineWidth(O),L=O)}function se(O,me,ve){O?(re(n.POLYGON_OFFSET_FILL),(U!==me||z!==ve)&&(n.polygonOffset(me,ve),U=me,z=ve)):we(n.POLYGON_OFFSET_FILL)}function ae(O){O?re(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function ke(O){O===void 0&&(O=n.TEXTURE0+N-1),$!==O&&(n.activeTexture(O),$=O)}function Oe(O,me,ve){ve===void 0&&($===null?ve=n.TEXTURE0+N-1:ve=$);let De=ne[ve];De===void 0&&(De={type:void 0,texture:void 0},ne[ve]=De),(De.type!==O||De.texture!==me)&&($!==ve&&(n.activeTexture(ve),$=ve),n.bindTexture(O,me||ee[O]),De.type=O,De.texture=me)}function b(){const O=ne[$];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function G(){try{n.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{n.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(){try{n.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(){try{n.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{n.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{n.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ue(){try{n.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{n.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(O){qe.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),qe.copy(O))}function Xe(O){it.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),it.copy(O))}function Ne(O,me){let ve=l.get(me);ve===void 0&&(ve=new WeakMap,l.set(me,ve));let De=ve.get(O);De===void 0&&(De=n.getUniformBlockIndex(me,O.name),ve.set(O,De))}function ye(O,me){const De=l.get(me).get(O);c.get(me)!==De&&(n.uniformBlockBinding(me,De,O.__bindingPointIndex),c.set(me,De))}function Ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},$=null,ne={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,x=null,A=null,M=null,C=null,T=null,P=new Re(0,0,0),E=0,S=!1,y=null,D=null,L=null,U=null,z=null,qe.set(0,0,n.canvas.width,n.canvas.height),it.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:re,disable:we,bindFramebuffer:Ie,drawBuffers:Ee,useProgram:pe,setBlending:j,setMaterial:X,setFlipSided:Z,setCullFace:Q,setLineWidth:ce,setPolygonOffset:se,setScissorTest:ae,activeTexture:ke,bindTexture:Oe,unbindTexture:b,compressedTexImage2D:_,compressedTexImage3D:G,texImage2D:Ue,texImage3D:he,updateUBOMapping:Ne,uniformBlockBinding:ye,texStorage2D:fe,texStorage3D:Te,texSubImage2D:Y,texSubImage3D:te,compressedTexSubImage2D:J,compressedTexSubImage3D:Ce,scissor:_e,viewport:Xe,reset:Ze}}function $v(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new oe,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,_){return d?new OffscreenCanvas(b,_):er("canvas")}function v(b,_,G){let Y=1;const te=Oe(b);if((te.width>G||te.height>G)&&(Y=G/Math.max(te.width,te.height)),Y<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const J=Math.floor(Y*te.width),Ce=Math.floor(Y*te.height);u===void 0&&(u=g(J,Ce));const fe=_?g(J,Ce):u;return fe.width=J,fe.height=Ce,fe.getContext("2d").drawImage(b,0,0,J,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+J+"x"+Ce+")."),fe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){n.generateMipmap(b)}function x(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(b,_,G,Y,te=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let J=_;if(_===n.RED&&(G===n.FLOAT&&(J=n.R32F),G===n.HALF_FLOAT&&(J=n.R16F),G===n.UNSIGNED_BYTE&&(J=n.R8)),_===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.R8UI),G===n.UNSIGNED_SHORT&&(J=n.R16UI),G===n.UNSIGNED_INT&&(J=n.R32UI),G===n.BYTE&&(J=n.R8I),G===n.SHORT&&(J=n.R16I),G===n.INT&&(J=n.R32I)),_===n.RG&&(G===n.FLOAT&&(J=n.RG32F),G===n.HALF_FLOAT&&(J=n.RG16F),G===n.UNSIGNED_BYTE&&(J=n.RG8)),_===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RG8UI),G===n.UNSIGNED_SHORT&&(J=n.RG16UI),G===n.UNSIGNED_INT&&(J=n.RG32UI),G===n.BYTE&&(J=n.RG8I),G===n.SHORT&&(J=n.RG16I),G===n.INT&&(J=n.RG32I)),_===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RGB8UI),G===n.UNSIGNED_SHORT&&(J=n.RGB16UI),G===n.UNSIGNED_INT&&(J=n.RGB32UI),G===n.BYTE&&(J=n.RGB8I),G===n.SHORT&&(J=n.RGB16I),G===n.INT&&(J=n.RGB32I)),_===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),G===n.UNSIGNED_INT&&(J=n.RGBA32UI),G===n.BYTE&&(J=n.RGBA8I),G===n.SHORT&&(J=n.RGBA16I),G===n.INT&&(J=n.RGBA32I)),_===n.RGB&&(G===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),_===n.RGBA){const Ce=te?lo:ut.getTransfer(Y);G===n.FLOAT&&(J=n.RGBA32F),G===n.HALF_FLOAT&&(J=n.RGBA16F),G===n.UNSIGNED_BYTE&&(J=Ce===xt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function M(b,_){let G;return b?_===null||_===Pi||_===xs?G=n.DEPTH24_STENCIL8:_===Dn?G=n.DEPTH32F_STENCIL8:_===js&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Pi||_===xs?G=n.DEPTH_COMPONENT24:_===Dn?G=n.DEPTH_COMPONENT32F:_===js&&(G=n.DEPTH_COMPONENT16),G}function C(b,_){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==jt&&b.minFilter!==zt?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function T(b){const _=b.target;_.removeEventListener("dispose",T),E(_),_.isVideoTexture&&h.delete(_)}function P(b){const _=b.target;_.removeEventListener("dispose",P),y(_)}function E(b){const _=i.get(b);if(_.__webglInit===void 0)return;const G=b.source,Y=f.get(G);if(Y){const te=Y[_.__cacheKey];te.usedTimes--,te.usedTimes===0&&S(b),Object.keys(Y).length===0&&f.delete(G)}i.remove(b)}function S(b){const _=i.get(b);n.deleteTexture(_.__webglTexture);const G=b.source,Y=f.get(G);delete Y[_.__cacheKey],o.memory.textures--}function y(b){const _=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let te=0;te<_.__webglFramebuffer[Y].length;te++)n.deleteFramebuffer(_.__webglFramebuffer[Y][te]);else n.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)n.deleteFramebuffer(_.__webglFramebuffer[Y]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const G=b.textures;for(let Y=0,te=G.length;Y<te;Y++){const J=i.get(G[Y]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(G[Y])}i.remove(b)}let D=0;function L(){D=0}function U(){const b=D;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),D+=1,b}function z(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function N(b,_){const G=i.get(b);if(b.isVideoTexture&&ae(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&G.__version!==b.version){const Y=b.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(G,b,_);return}}else b.isExternalTexture&&(G.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+_)}function F(b,_){const G=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&G.__version!==b.version){ee(G,b,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+_)}function W(b,_){const G=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&G.__version!==b.version){ee(G,b,_);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+_)}function k(b,_){const G=i.get(b);if(b.version>0&&G.__version!==b.version){re(G,b,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+_)}const $={[kt]:n.REPEAT,[Yt]:n.CLAMP_TO_EDGE,[$n]:n.MIRRORED_REPEAT},ne={[jt]:n.NEAREST,[Td]:n.NEAREST_MIPMAP_NEAREST,[mr]:n.NEAREST_MIPMAP_LINEAR,[zt]:n.LINEAR,[Co]:n.LINEAR_MIPMAP_NEAREST,[ui]:n.LINEAR_MIPMAP_LINEAR},ge={[Rd]:n.NEVER,[Ud]:n.ALWAYS,[Dd]:n.LESS,[Qh]:n.LEQUAL,[Pd]:n.EQUAL,[Bd]:n.GEQUAL,[Id]:n.GREATER,[Ld]:n.NOTEQUAL};function Pe(b,_){if(_.type===Dn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===zt||_.magFilter===Co||_.magFilter===mr||_.magFilter===ui||_.minFilter===zt||_.minFilter===Co||_.minFilter===mr||_.minFilter===ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,$[_.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,$[_.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,$[_.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,ne[_.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,ne[_.minFilter]),_.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,ge[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===jt||_.minFilter!==mr&&_.minFilter!==ui||_.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function qe(b,_){let G=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",T));const Y=_.source;let te=f.get(Y);te===void 0&&(te={},f.set(Y,te));const J=z(_);if(J!==b.__cacheKey){te[J]===void 0&&(te[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),te[J].usedTimes++;const Ce=te[b.__cacheKey];Ce!==void 0&&(te[b.__cacheKey].usedTimes--,Ce.usedTimes===0&&S(_)),b.__cacheKey=J,b.__webglTexture=te[J].texture}return G}function it(b,_,G){return Math.floor(Math.floor(b/G)/_)}function Ke(b,_,G,Y){const J=b.updateRanges;if(J.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,G,Y,_.data);else{J.sort((he,_e)=>he.start-_e.start);let Ce=0;for(let he=1;he<J.length;he++){const _e=J[Ce],Xe=J[he],Ne=_e.start+_e.count,ye=it(Xe.start,_.width,4),Ze=it(_e.start,_.width,4);Xe.start<=Ne+1&&ye===Ze&&it(Xe.start+Xe.count-1,_.width,4)===ye?_e.count=Math.max(_e.count,Xe.start+Xe.count-_e.start):(++Ce,J[Ce]=Xe)}J.length=Ce+1;const fe=n.getParameter(n.UNPACK_ROW_LENGTH),Te=n.getParameter(n.UNPACK_SKIP_PIXELS),Ue=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let he=0,_e=J.length;he<_e;he++){const Xe=J[he],Ne=Math.floor(Xe.start/4),ye=Math.ceil(Xe.count/4),Ze=Ne%_.width,O=Math.floor(Ne/_.width),me=ye,ve=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ze),n.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,Ze,O,me,ve,G,Y,_.data)}b.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,fe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Te),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ue)}}function ee(b,_,G){let Y=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=n.TEXTURE_3D);const te=qe(b,_),J=_.source;t.bindTexture(Y,b.__webglTexture,n.TEXTURE0+G);const Ce=i.get(J);if(J.version!==Ce.__version||te===!0){t.activeTexture(n.TEXTURE0+G);const fe=ut.getPrimaries(ut.workingColorSpace),Te=_.colorSpace===Ln?null:ut.getPrimaries(_.colorSpace),Ue=_.colorSpace===Ln||fe===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let he=v(_.image,!1,s.maxTextureSize);he=ke(_,he);const _e=r.convert(_.format,_.colorSpace),Xe=r.convert(_.type);let Ne=A(_.internalFormat,_e,Xe,_.colorSpace,_.isVideoTexture);Pe(Y,_);let ye;const Ze=_.mipmaps,O=_.isVideoTexture!==!0,me=Ce.__version===void 0||te===!0,ve=J.dataReady,De=C(_,he);if(_.isDepthTexture)Ne=M(_.format===Ms,_.type),me&&(O?t.texStorage2D(n.TEXTURE_2D,1,Ne,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,Ne,he.width,he.height,0,_e,Xe,null));else if(_.isDataTexture)if(Ze.length>0){O&&me&&t.texStorage2D(n.TEXTURE_2D,De,Ne,Ze[0].width,Ze[0].height);for(let ue=0,ie=Ze.length;ue<ie;ue++)ye=Ze[ue],O?ve&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,ye.width,ye.height,_e,Xe,ye.data):t.texImage2D(n.TEXTURE_2D,ue,Ne,ye.width,ye.height,0,_e,Xe,ye.data);_.generateMipmaps=!1}else O?(me&&t.texStorage2D(n.TEXTURE_2D,De,Ne,he.width,he.height),ve&&Ke(_,he,_e,Xe)):t.texImage2D(n.TEXTURE_2D,0,Ne,he.width,he.height,0,_e,Xe,he.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){O&&me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Ne,Ze[0].width,Ze[0].height,he.depth);for(let ue=0,ie=Ze.length;ue<ie;ue++)if(ye=Ze[ue],_.format!==En)if(_e!==null)if(O){if(ve)if(_.layerUpdates.size>0){const Fe=kl(ye.width,ye.height,_.format,_.type);for(const Qe of _.layerUpdates){const At=ye.data.subarray(Qe*Fe/ye.data.BYTES_PER_ELEMENT,(Qe+1)*Fe/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,Qe,ye.width,ye.height,1,_e,At)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,ye.width,ye.height,he.depth,_e,ye.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ue,Ne,ye.width,ye.height,he.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?ve&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,ye.width,ye.height,he.depth,_e,Xe,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ue,Ne,ye.width,ye.height,he.depth,0,_e,Xe,ye.data)}else{O&&me&&t.texStorage2D(n.TEXTURE_2D,De,Ne,Ze[0].width,Ze[0].height);for(let ue=0,ie=Ze.length;ue<ie;ue++)ye=Ze[ue],_.format!==En?_e!==null?O?ve&&t.compressedTexSubImage2D(n.TEXTURE_2D,ue,0,0,ye.width,ye.height,_e,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,ue,Ne,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?ve&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,ye.width,ye.height,_e,Xe,ye.data):t.texImage2D(n.TEXTURE_2D,ue,Ne,ye.width,ye.height,0,_e,Xe,ye.data)}else if(_.isDataArrayTexture)if(O){if(me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Ne,he.width,he.height,he.depth),ve)if(_.layerUpdates.size>0){const ue=kl(he.width,he.height,_.format,_.type);for(const ie of _.layerUpdates){const Fe=he.data.subarray(ie*ue/he.data.BYTES_PER_ELEMENT,(ie+1)*ue/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ie,he.width,he.height,1,_e,Xe,Fe)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,_e,Xe,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,he.width,he.height,he.depth,0,_e,Xe,he.data);else if(_.isData3DTexture)O?(me&&t.texStorage3D(n.TEXTURE_3D,De,Ne,he.width,he.height,he.depth),ve&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,_e,Xe,he.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,he.width,he.height,he.depth,0,_e,Xe,he.data);else if(_.isFramebufferTexture){if(me)if(O)t.texStorage2D(n.TEXTURE_2D,De,Ne,he.width,he.height);else{let ue=he.width,ie=he.height;for(let Fe=0;Fe<De;Fe++)t.texImage2D(n.TEXTURE_2D,Fe,Ne,ue,ie,0,_e,Xe,null),ue>>=1,ie>>=1}}else if(Ze.length>0){if(O&&me){const ue=Oe(Ze[0]);t.texStorage2D(n.TEXTURE_2D,De,Ne,ue.width,ue.height)}for(let ue=0,ie=Ze.length;ue<ie;ue++)ye=Ze[ue],O?ve&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,_e,Xe,ye):t.texImage2D(n.TEXTURE_2D,ue,Ne,_e,Xe,ye);_.generateMipmaps=!1}else if(O){if(me){const ue=Oe(he);t.texStorage2D(n.TEXTURE_2D,De,Ne,ue.width,ue.height)}ve&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,Xe,he)}else t.texImage2D(n.TEXTURE_2D,0,Ne,_e,Xe,he);m(_)&&p(Y),Ce.__version=J.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function re(b,_,G){if(_.image.length!==6)return;const Y=qe(b,_),te=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+G);const J=i.get(te);if(te.version!==J.__version||Y===!0){t.activeTexture(n.TEXTURE0+G);const Ce=ut.getPrimaries(ut.workingColorSpace),fe=_.colorSpace===Ln?null:ut.getPrimaries(_.colorSpace),Te=_.colorSpace===Ln||Ce===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ue=_.isCompressedTexture||_.image[0].isCompressedTexture,he=_.image[0]&&_.image[0].isDataTexture,_e=[];for(let ie=0;ie<6;ie++)!Ue&&!he?_e[ie]=v(_.image[ie],!0,s.maxCubemapSize):_e[ie]=he?_.image[ie].image:_.image[ie],_e[ie]=ke(_,_e[ie]);const Xe=_e[0],Ne=r.convert(_.format,_.colorSpace),ye=r.convert(_.type),Ze=A(_.internalFormat,Ne,ye,_.colorSpace),O=_.isVideoTexture!==!0,me=J.__version===void 0||Y===!0,ve=te.dataReady;let De=C(_,Xe);Pe(n.TEXTURE_CUBE_MAP,_);let ue;if(Ue){O&&me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,De,Ze,Xe.width,Xe.height);for(let ie=0;ie<6;ie++){ue=_e[ie].mipmaps;for(let Fe=0;Fe<ue.length;Fe++){const Qe=ue[Fe];_.format!==En?Ne!==null?O?ve&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe,0,0,Qe.width,Qe.height,Ne,Qe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe,Ze,Qe.width,Qe.height,0,Qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe,0,0,Qe.width,Qe.height,Ne,ye,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe,Ze,Qe.width,Qe.height,0,Ne,ye,Qe.data)}}}else{if(ue=_.mipmaps,O&&me){ue.length>0&&De++;const ie=Oe(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,De,Ze,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(he){O?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,_e[ie].width,_e[ie].height,Ne,ye,_e[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ze,_e[ie].width,_e[ie].height,0,Ne,ye,_e[ie].data);for(let Fe=0;Fe<ue.length;Fe++){const At=ue[Fe].image[ie].image;O?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe+1,0,0,At.width,At.height,Ne,ye,At.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe+1,Ze,At.width,At.height,0,Ne,ye,At.data)}}else{O?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ne,ye,_e[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ze,Ne,ye,_e[ie]);for(let Fe=0;Fe<ue.length;Fe++){const Qe=ue[Fe];O?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe+1,0,0,Ne,ye,Qe.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe+1,Ze,Ne,ye,Qe.image[ie])}}}m(_)&&p(n.TEXTURE_CUBE_MAP),J.__version=te.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function we(b,_,G,Y,te,J){const Ce=r.convert(G.format,G.colorSpace),fe=r.convert(G.type),Te=A(G.internalFormat,Ce,fe,G.colorSpace),Ue=i.get(_),he=i.get(G);if(he.__renderTarget=_,!Ue.__hasExternalTextures){const _e=Math.max(1,_.width>>J),Xe=Math.max(1,_.height>>J);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,J,Te,_e,Xe,_.depth,0,Ce,fe,null):t.texImage2D(te,J,Te,_e,Xe,0,Ce,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),se(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,te,he.__webglTexture,0,ce(_)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,te,he.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(b,_,G){if(n.bindRenderbuffer(n.RENDERBUFFER,b),_.depthBuffer){const Y=_.depthTexture,te=Y&&Y.isDepthTexture?Y.type:null,J=M(_.stencilBuffer,te),Ce=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=ce(_);se(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,J,_.width,_.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,J,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,J,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,b)}else{const Y=_.textures;for(let te=0;te<Y.length;te++){const J=Y[te],Ce=r.convert(J.format,J.colorSpace),fe=r.convert(J.type),Te=A(J.internalFormat,Ce,fe,J.colorSpace),Ue=ce(_);G&&se(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,Te,_.width,_.height):se(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ue,Te,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Te,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ee(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(_.depthTexture);Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),N(_.depthTexture,0);const te=Y.__webglTexture,J=ce(_);if(_.depthTexture.format===$s)se(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(_.depthTexture.format===Ms)se(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function pe(b){const _=i.get(b),G=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const Y=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){const te=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",te)};Y.addEventListener("dispose",te),_.__depthDisposeCallback=te}_.__boundDepthTexture=Y}if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const Y=b.texture.mipmaps;Y&&Y.length>0?Ee(_.__webglFramebuffer[0],b):Ee(_.__webglFramebuffer,b)}else if(G){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=n.createRenderbuffer(),Ie(_.__webglDepthbuffer[Y],b,!1);else{const te=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,J)}}else{const Y=b.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Ie(_.__webglDepthbuffer,b,!1);else{const te=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,J)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Me(b,_,G){const Y=i.get(b);_!==void 0&&we(Y.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&pe(b)}function I(b){const _=b.texture,G=i.get(b),Y=i.get(_);b.addEventListener("dispose",P);const te=b.textures,J=b.isWebGLCubeRenderTarget===!0,Ce=te.length>1;if(Ce||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=_.version,o.memory.textures++),J){G.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0){G.__webglFramebuffer[fe]=[];for(let Te=0;Te<_.mipmaps.length;Te++)G.__webglFramebuffer[fe][Te]=n.createFramebuffer()}else G.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){G.__webglFramebuffer=[];for(let fe=0;fe<_.mipmaps.length;fe++)G.__webglFramebuffer[fe]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let fe=0,Te=te.length;fe<Te;fe++){const Ue=i.get(te[fe]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&se(b)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let fe=0;fe<te.length;fe++){const Te=te[fe];G.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[fe]);const Ue=r.convert(Te.format,Te.colorSpace),he=r.convert(Te.type),_e=A(Te.internalFormat,Ue,he,Te.colorSpace,b.isXRRenderTarget===!0),Xe=ce(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,_e,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,G.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(G.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Pe(n.TEXTURE_CUBE_MAP,_);for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0)for(let Te=0;Te<_.mipmaps.length;Te++)we(G.__webglFramebuffer[fe][Te],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Te);else we(G.__webglFramebuffer[fe],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(_)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let fe=0,Te=te.length;fe<Te;fe++){const Ue=te[fe],he=i.get(Ue);let _e=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(_e=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,he.__webglTexture),Pe(_e,Ue),we(G.__webglFramebuffer,b,Ue,n.COLOR_ATTACHMENT0+fe,_e,0),m(Ue)&&p(_e)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(fe=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,Y.__webglTexture),Pe(fe,_),_.mipmaps&&_.mipmaps.length>0)for(let Te=0;Te<_.mipmaps.length;Te++)we(G.__webglFramebuffer[Te],b,_,n.COLOR_ATTACHMENT0,fe,Te);else we(G.__webglFramebuffer,b,_,n.COLOR_ATTACHMENT0,fe,0);m(_)&&p(fe),t.unbindTexture()}b.depthBuffer&&pe(b)}function j(b){const _=b.textures;for(let G=0,Y=_.length;G<Y;G++){const te=_[G];if(m(te)){const J=x(b),Ce=i.get(te).__webglTexture;t.bindTexture(J,Ce),p(J),t.unbindTexture()}}}const X=[],Z=[];function Q(b){if(b.samples>0){if(se(b)===!1){const _=b.textures,G=b.width,Y=b.height;let te=n.COLOR_BUFFER_BIT;const J=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(b),fe=_.length>1;if(fe)for(let Ue=0;Ue<_.length;Ue++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const Te=b.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ue=0;Ue<_.length;Ue++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ue]);const he=i.get(_[Ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,he,0)}n.blitFramebuffer(0,0,G,Y,0,0,G,Y,te,n.NEAREST),c===!0&&(X.length=0,Z.length=0,X.push(n.COLOR_ATTACHMENT0+Ue),b.depthBuffer&&b.resolveDepthBuffer===!1&&(X.push(J),Z.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,X))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let Ue=0;Ue<_.length;Ue++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ue]);const he=i.get(_[Ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,he,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const _=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function ce(b){return Math.min(s.maxSamples,b.samples)}function se(b){const _=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ae(b){const _=o.render.frame;h.get(b)!==_&&(h.set(b,_),b.update())}function ke(b,_){const G=b.colorSpace,Y=b.format,te=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||G!==di&&G!==Ln&&(ut.getTransfer(G)===xt?(Y!==En||te!==Ht)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),_}function Oe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=L,this.setTexture2D=N,this.setTexture2DArray=F,this.setTexture3D=W,this.setTextureCube=k,this.rebindTextures=Me,this.setupRenderTarget=I,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=we,this.useMultisampledRTT=se}function ex(n,e){function t(i,s=Ln){let r;const o=ut.getTransfer(s);if(i===Ht)return n.UNSIGNED_BYTE;if(i===xc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Mc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Gh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Vh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===kh)return n.BYTE;if(i===Hh)return n.SHORT;if(i===js)return n.UNSIGNED_SHORT;if(i===vc)return n.INT;if(i===Pi)return n.UNSIGNED_INT;if(i===Dn)return n.FLOAT;if(i===Ui)return n.HALF_FLOAT;if(i===Wh)return n.ALPHA;if(i===Xh)return n.RGB;if(i===En)return n.RGBA;if(i===$s)return n.DEPTH_COMPONENT;if(i===Ms)return n.DEPTH_STENCIL;if(i===Ao)return n.RED;if(i===Ac)return n.RED_INTEGER;if(i===Yh)return n.RG;if(i===yc)return n.RG_INTEGER;if(i===Sc)return n.RGBA_INTEGER;if(i===no||i===io||i===so||i===ro)if(o===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===no)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===no)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===io)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===so)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ro)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ra||i===Da||i===Pa||i===Ia)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ra)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ia)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===La||i===Ba||i===Ua)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===La||i===Ba)return o===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ua)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Fa||i===Na||i===Oa||i===za||i===ka||i===Ha||i===Ga||i===Va||i===Wa||i===Xa||i===Ya||i===qa||i===Qa||i===Ka)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Fa)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Na)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Oa)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===za)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ka)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ha)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ga)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Va)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wa)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xa)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ya)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qa)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qa)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ka)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Za||i===Ja||i===ja)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Za)return o===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ja)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ja)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$a||i===ec||i===tc||i===nc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===$a)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ec)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===tc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===nc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const tx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ix{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new cu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ft({vertexShader:tx,fragmentShader:nx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new le(new Oi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sx extends ei{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null;const v=typeof XRWebGLBinding<"u",m=new ix,p={},x=t.getContextAttributes();let A=null,M=null;const C=[],T=[],P=new oe;let E=null;const S=new an;S.viewport=new ft;const y=new an;y.viewport=new ft;const D=[S,y],L=new _p;let U=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let re=C[ee];return re===void 0&&(re=new Ko,C[ee]=re),re.getTargetRaySpace()},this.getControllerGrip=function(ee){let re=C[ee];return re===void 0&&(re=new Ko,C[ee]=re),re.getGripSpace()},this.getHand=function(ee){let re=C[ee];return re===void 0&&(re=new Ko,C[ee]=re),re.getHandSpace()};function N(ee){const re=T.indexOf(ee.inputSource);if(re===-1)return;const we=C[re];we!==void 0&&(we.update(ee.inputSource,ee.frame,l||o),we.dispatchEvent({type:ee.type,data:ee.inputSource}))}function F(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",W);for(let ee=0;ee<C.length;ee++){const re=T[ee];re!==null&&(T[ee]=null,C[ee].disconnect(re))}U=null,z=null,m.reset();for(const ee in p)delete p[ee];e.setRenderTarget(A),d=null,f=null,u=null,s=null,M=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",F),s.addEventListener("inputsourceschange",W),x.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Ie=null,Ee=null;x.depth&&(Ee=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=x.stencil?Ms:$s,Ie=x.stencil?xs:Pi);const pe={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(pe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Ut(f.textureWidth,f.textureHeight,{format:En,type:Ht,depthTexture:new yo(f.textureWidth,f.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const we={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,we),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Ut(d.framebufferWidth,d.framebufferHeight,{format:En,type:Ht,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ke.setContext(s),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(ee){for(let re=0;re<ee.removed.length;re++){const we=ee.removed[re],Ie=T.indexOf(we);Ie>=0&&(T[Ie]=null,C[Ie].disconnect(we))}for(let re=0;re<ee.added.length;re++){const we=ee.added[re];let Ie=T.indexOf(we);if(Ie===-1){for(let pe=0;pe<C.length;pe++)if(pe>=T.length){T.push(we),Ie=pe;break}else if(T[pe]===null){T[pe]=we,Ie=pe;break}if(Ie===-1)break}const Ee=C[Ie];Ee&&Ee.connect(we)}}const k=new R,$=new R;function ne(ee,re,we){k.setFromMatrixPosition(re.matrixWorld),$.setFromMatrixPosition(we.matrixWorld);const Ie=k.distanceTo($),Ee=re.projectionMatrix.elements,pe=we.projectionMatrix.elements,Me=Ee[14]/(Ee[10]-1),I=Ee[14]/(Ee[10]+1),j=(Ee[9]+1)/Ee[5],X=(Ee[9]-1)/Ee[5],Z=(Ee[8]-1)/Ee[0],Q=(pe[8]+1)/pe[0],ce=Me*Z,se=Me*Q,ae=Ie/(-Z+Q),ke=ae*-Z;if(re.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(ke),ee.translateZ(ae),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ee[10]===-1)ee.projectionMatrix.copy(re.projectionMatrix),ee.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Oe=Me+ae,b=I+ae,_=ce-ke,G=se+(Ie-ke),Y=j*I/b*Oe,te=X*I/b*Oe;ee.projectionMatrix.makePerspective(_,G,Y,te,Oe,b),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ge(ee,re){re===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(re.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let re=ee.near,we=ee.far;m.texture!==null&&(m.depthNear>0&&(re=m.depthNear),m.depthFar>0&&(we=m.depthFar)),L.near=y.near=S.near=re,L.far=y.far=S.far=we,(U!==L.near||z!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),U=L.near,z=L.far),L.layers.mask=ee.layers.mask|6,S.layers.mask=L.layers.mask&3,y.layers.mask=L.layers.mask&5;const Ie=ee.parent,Ee=L.cameras;ge(L,Ie);for(let pe=0;pe<Ee.length;pe++)ge(Ee[pe],Ie);Ee.length===2?ne(L,S,y):L.projectionMatrix.copy(S.projectionMatrix),Pe(ee,L,Ie)};function Pe(ee,re,we){we===null?ee.matrix.copy(re.matrixWorld):(ee.matrix.copy(we.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(re.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(re.projectionMatrix),ee.projectionMatrixInverse.copy(re.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=As*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(ee){c=ee,f!==null&&(f.fixedFoveation=ee),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ee)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(ee){return p[ee]};let qe=null;function it(ee,re){if(h=re.getViewerPose(l||o),g=re,h!==null){const we=h.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let Ie=!1;we.length!==L.cameras.length&&(L.cameras.length=0,Ie=!0);for(let I=0;I<we.length;I++){const j=we[I];let X=null;if(d!==null)X=d.getViewport(j);else{const Q=u.getViewSubImage(f,j);X=Q.viewport,I===0&&(e.setRenderTargetTextures(M,Q.colorTexture,Q.depthStencilTexture),e.setRenderTarget(M))}let Z=D[I];Z===void 0&&(Z=new an,Z.layers.enable(I),Z.viewport=new ft,D[I]=Z),Z.matrix.fromArray(j.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(j.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(X.x,X.y,X.width,X.height),I===0&&(L.matrix.copy(Z.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ie===!0&&L.cameras.push(Z)}const Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=i.getBinding();const I=u.getDepthInformation(we[0]);I&&I.isValid&&I.texture&&m.init(I,s.renderState)}if(Ee&&Ee.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let I=0;I<we.length;I++){const j=we[I].camera;if(j){let X=p[j];X||(X=new cu,p[j]=X);const Z=u.getCameraImage(j);X.sourceTexture=Z}}}}for(let we=0;we<C.length;we++){const Ie=T[we],Ee=C[we];Ie!==null&&Ee!==void 0&&Ee.update(Ie,re,l||o)}qe&&qe(ee,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),g=null}const Ke=new Mu;Ke.setAnimationLoop(it),this.setAnimationLoop=function(ee){qe=ee},this.dispose=function(){}}}const Si=new un,rx=new lt;function ox(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,tu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,A,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,x,A):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ot&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ot&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),A=x.envMap,M=x.envMapRotation;A&&(m.envMap.value=A,Si.copy(M),Si.x*=-1,Si.y*=-1,Si.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),m.envMapRotation.value.setFromMatrix4(rx.makeRotationFromEuler(Si)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=A*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ot&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ax(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,A){const M=A.program;i.uniformBlockBinding(x,M)}function l(x,A){let M=s[x.id];M===void 0&&(g(x),M=h(x),s[x.id]=M,x.addEventListener("dispose",m));const C=A.program;i.updateUBOMapping(x,C);const T=e.render.frame;r[x.id]!==T&&(f(x),r[x.id]=T)}function h(x){const A=u();x.__bindingPointIndex=A;const M=n.createBuffer(),C=x.__size,T=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,C,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,M),M}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const A=s[x.id],M=x.uniforms,C=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let T=0,P=M.length;T<P;T++){const E=Array.isArray(M[T])?M[T]:[M[T]];for(let S=0,y=E.length;S<y;S++){const D=E[S];if(d(D,T,S,C)===!0){const L=D.__offset,U=Array.isArray(D.value)?D.value:[D.value];let z=0;for(let N=0;N<U.length;N++){const F=U[N],W=v(F);typeof F=="number"||typeof F=="boolean"?(D.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,L+z,D.__data)):F.isMatrix3?(D.__data[0]=F.elements[0],D.__data[1]=F.elements[1],D.__data[2]=F.elements[2],D.__data[3]=0,D.__data[4]=F.elements[3],D.__data[5]=F.elements[4],D.__data[6]=F.elements[5],D.__data[7]=0,D.__data[8]=F.elements[6],D.__data[9]=F.elements[7],D.__data[10]=F.elements[8],D.__data[11]=0):(F.toArray(D.__data,z),z+=W.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(x,A,M,C){const T=x.value,P=A+"_"+M;if(C[P]===void 0)return typeof T=="number"||typeof T=="boolean"?C[P]=T:C[P]=T.clone(),!0;{const E=C[P];if(typeof T=="number"||typeof T=="boolean"){if(E!==T)return C[P]=T,!0}else if(E.equals(T)===!1)return E.copy(T),!0}return!1}function g(x){const A=x.uniforms;let M=0;const C=16;for(let P=0,E=A.length;P<E;P++){const S=Array.isArray(A[P])?A[P]:[A[P]];for(let y=0,D=S.length;y<D;y++){const L=S[y],U=Array.isArray(L.value)?L.value:[L.value];for(let z=0,N=U.length;z<N;z++){const F=U[z],W=v(F),k=M%C,$=k%W.boundary,ne=k+$;M+=$,ne!==0&&C-ne<W.storage&&(M+=C-ne),L.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=M,M+=W.storage}}}const T=M%C;return T>0&&(M+=C-T),x.__size=M,x.__cache={},this}function v(x){const A={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(A.boundary=4,A.storage=4):x.isVector2?(A.boundary=8,A.storage=8):x.isVector3||x.isColor?(A.boundary=16,A.storage=12):x.isVector4?(A.boundary=16,A.storage=16):x.isMatrix3?(A.boundary=48,A.storage=48):x.isMatrix4?(A.boundary=64,A.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),A}function m(x){const A=x.target;A.removeEventListener("dispose",m);const M=o.indexOf(A.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function p(){for(const x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class cx{constructor(e={}){const{canvas:t=jd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const x=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let C=!1;this._outputColorSpace=ot;let T=0,P=0,E=null,S=-1,y=null;const D=new ft,L=new ft;let U=null;const z=new Re(0);let N=0,F=t.width,W=t.height,k=1,$=null,ne=null;const ge=new ft(0,0,F,W),Pe=new ft(0,0,F,W);let qe=!1;const it=new Cc;let Ke=!1,ee=!1;const re=new lt,we=new R,Ie=new ft,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pe=!1;function Me(){return E===null?k:1}let I=i;function j(w,H){return t.getContext(w,H)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bi}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",ue,!1),I===null){const H="webgl2";if(I=j(H,w),I===null)throw j(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let X,Z,Q,ce,se,ae,ke,Oe,b,_,G,Y,te,J,Ce,fe,Te,Ue,he,_e,Xe,Ne,ye,Ze;function O(){X=new xg(I),X.init(),Ne=new ex(I,X),Z=new ug(I,X,e,Ne),Q=new jv(I,X),Z.reversedDepthBuffer&&f&&Q.buffers.depth.setReversed(!0),ce=new yg(I),se=new zv,ae=new $v(I,X,Q,se,Z,Ne,ce),ke=new fg(M),Oe=new vg(M),b=new bp(I),ye=new lg(I,b),_=new Mg(I,b,ce,ye),G=new _g(I,_,b,ce),he=new Sg(I,Z,ae),fe=new dg(se),Y=new Ov(M,ke,Oe,X,Z,ye,fe),te=new ox(M,se),J=new Hv,Ce=new qv(X),Ue=new cg(M,ke,Oe,Q,G,d,c),Te=new Zv(M,G,Z),Ze=new ax(I,ce,Z,Q),_e=new hg(I,X,ce),Xe=new Ag(I,X,ce),ce.programs=Y.programs,M.capabilities=Z,M.extensions=X,M.properties=se,M.renderLists=J,M.shadowMap=Te,M.state=Q,M.info=ce}O();const me=new sx(M,I);this.xr=me,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=X.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=X.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(w){w!==void 0&&(k=w,this.setSize(F,W,!1))},this.getSize=function(w){return w.set(F,W)},this.setSize=function(w,H,q=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,W=H,t.width=Math.floor(w*k),t.height=Math.floor(H*k),q===!0&&(t.style.width=w+"px",t.style.height=H+"px"),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(F*k,W*k).floor()},this.setDrawingBufferSize=function(w,H,q){F=w,W=H,k=q,t.width=Math.floor(w*q),t.height=Math.floor(H*q),this.setViewport(0,0,w,H)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(ge)},this.setViewport=function(w,H,q,K){w.isVector4?ge.set(w.x,w.y,w.z,w.w):ge.set(w,H,q,K),Q.viewport(D.copy(ge).multiplyScalar(k).round())},this.getScissor=function(w){return w.copy(Pe)},this.setScissor=function(w,H,q,K){w.isVector4?Pe.set(w.x,w.y,w.z,w.w):Pe.set(w,H,q,K),Q.scissor(L.copy(Pe).multiplyScalar(k).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(w){Q.setScissorTest(qe=w)},this.setOpaqueSort=function(w){$=w},this.setTransparentSort=function(w){ne=w},this.getClearColor=function(w){return w.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(w=!0,H=!0,q=!0){let K=0;if(w){let V=!1;if(E!==null){const de=E.texture.format;V=de===Sc||de===yc||de===Ac}if(V){const de=E.texture.type,Se=de===Ht||de===Pi||de===js||de===xs||de===xc||de===Mc,Le=Ue.getClearColor(),be=Ue.getClearAlpha(),We=Le.r,Ye=Le.g,He=Le.b;Se?(g[0]=We,g[1]=Ye,g[2]=He,g[3]=be,I.clearBufferuiv(I.COLOR,0,g)):(v[0]=We,v[1]=Ye,v[2]=He,v[3]=be,I.clearBufferiv(I.COLOR,0,v))}else K|=I.COLOR_BUFFER_BIT}H&&(K|=I.DEPTH_BUFFER_BIT),q&&(K|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),Ue.dispose(),J.dispose(),Ce.dispose(),se.dispose(),ke.dispose(),Oe.dispose(),G.dispose(),ye.dispose(),Ze.dispose(),Y.dispose(),me.dispose(),me.removeEventListener("sessionstart",Pn),me.removeEventListener("sessionend",Xc),pi.stop()};function ve(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const w=ce.autoReset,H=Te.enabled,q=Te.autoUpdate,K=Te.needsUpdate,V=Te.type;O(),ce.autoReset=w,Te.enabled=H,Te.autoUpdate=q,Te.needsUpdate=K,Te.type=V}function ue(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ie(w){const H=w.target;H.removeEventListener("dispose",ie),Fe(H)}function Fe(w){Qe(w),se.remove(w)}function Qe(w){const H=se.get(w).programs;H!==void 0&&(H.forEach(function(q){Y.releaseProgram(q)}),w.isShaderMaterial&&Y.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,q,K,V,de){H===null&&(H=Ee);const Se=V.isMesh&&V.matrixWorld.determinant()<0,Le=Vu(w,H,q,K,V);Q.setMaterial(K,Se);let be=q.index,We=1;if(K.wireframe===!0){if(be=_.getWireframeAttribute(q),be===void 0)return;We=2}const Ye=q.drawRange,He=q.attributes.position;let st=Ye.start*We,vt=(Ye.start+Ye.count)*We;de!==null&&(st=Math.max(st,de.start*We),vt=Math.min(vt,(de.start+de.count)*We)),be!==null?(st=Math.max(st,0),vt=Math.min(vt,be.count)):He!=null&&(st=Math.max(st,0),vt=Math.min(vt,He.count));const Pt=vt-st;if(Pt<0||Pt===1/0)return;ye.setup(V,K,Le,q,be);let St,Mt=_e;if(be!==null&&(St=b.get(be),Mt=Xe,Mt.setIndex(St)),V.isMesh)K.wireframe===!0?(Q.setLineWidth(K.wireframeLinewidth*Me()),Mt.setMode(I.LINES)):Mt.setMode(I.TRIANGLES);else if(V.isLine){let Ge=K.linewidth;Ge===void 0&&(Ge=1),Q.setLineWidth(Ge*Me()),V.isLineSegments?Mt.setMode(I.LINES):V.isLineLoop?Mt.setMode(I.LINE_LOOP):Mt.setMode(I.LINE_STRIP)}else V.isPoints?Mt.setMode(I.POINTS):V.isSprite&&Mt.setMode(I.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)tr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Mt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(X.get("WEBGL_multi_draw"))Mt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ge=V._multiDrawStarts,bt=V._multiDrawCounts,ht=V._multiDrawCount,dn=be?b.get(be).bytesPerElement:1,zi=se.get(K).currentProgram.getUniforms();for(let fn=0;fn<ht;fn++)zi.setValue(I,"_gl_DrawID",fn),Mt.render(Ge[fn]/dn,bt[fn])}else if(V.isInstancedMesh)Mt.renderInstances(st,Pt,V.count);else if(q.isInstancedBufferGeometry){const Ge=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,bt=Math.min(q.instanceCount,Ge);Mt.renderInstances(st,Pt,bt)}else Mt.render(st,Pt)};function At(w,H,q){w.transparent===!0&&w.side===Zt&&w.forceSinglePass===!1?(w.side=Ot,w.needsUpdate=!0,pr(w,H,q),w.side=jn,w.needsUpdate=!0,pr(w,H,q),w.side=Zt):pr(w,H,q)}this.compile=function(w,H,q=null){q===null&&(q=w),p=Ce.get(q),p.init(H),A.push(p),q.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),w!==q&&w.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const K=new Set;return w.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const de=V.material;if(de)if(Array.isArray(de))for(let Se=0;Se<de.length;Se++){const Le=de[Se];At(Le,q,V),K.add(Le)}else At(de,q,V),K.add(de)}),p=A.pop(),K},this.compileAsync=function(w,H,q=null){const K=this.compile(w,H,q);return new Promise(V=>{function de(){if(K.forEach(function(Se){se.get(Se).currentProgram.isReady()&&K.delete(Se)}),K.size===0){V(w);return}setTimeout(de,10)}X.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let mt=null;function kn(w){mt&&mt(w)}function Pn(){pi.stop()}function Xc(){pi.start()}const pi=new Mu;pi.setAnimationLoop(kn),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(w){mt=w,me.setAnimationLoop(w),w===null?pi.stop():pi.start()},me.addEventListener("sessionstart",Pn),me.addEventListener("sessionend",Xc),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(H),H=me.getCamera()),w.isScene===!0&&w.onBeforeRender(M,w,H,E),p=Ce.get(w,A.length),p.init(H),A.push(p),re.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),it.setFromProjectionMatrix(re,Un,H.reversedDepth),ee=this.localClippingEnabled,Ke=fe.init(this.clippingPlanes,ee),m=J.get(w,x.length),m.init(),x.push(m),me.enabled===!0&&me.isPresenting===!0){const de=M.xr.getDepthSensingMesh();de!==null&&To(de,H,-1/0,M.sortObjects)}To(w,H,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort($,ne),pe=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,pe&&Ue.addToRenderList(m,w),this.info.render.frame++,Ke===!0&&fe.beginShadows();const q=p.state.shadowsArray;Te.render(q,w,H),Ke===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=m.opaque,V=m.transmissive;if(p.setupLights(),H.isArrayCamera){const de=H.cameras;if(V.length>0)for(let Se=0,Le=de.length;Se<Le;Se++){const be=de[Se];qc(K,V,w,be)}pe&&Ue.render(w);for(let Se=0,Le=de.length;Se<Le;Se++){const be=de[Se];Yc(m,w,be,be.viewport)}}else V.length>0&&qc(K,V,w,H),pe&&Ue.render(w),Yc(m,w,H);E!==null&&P===0&&(ae.updateMultisampleRenderTarget(E),ae.updateRenderTargetMipmap(E)),w.isScene===!0&&w.onAfterRender(M,w,H),ye.resetDefaultState(),S=-1,y=null,A.pop(),A.length>0?(p=A[A.length-1],Ke===!0&&fe.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function To(w,H,q,K){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||it.intersectsSprite(w)){K&&Ie.setFromMatrixPosition(w.matrixWorld).applyMatrix4(re);const Se=G.update(w),Le=w.material;Le.visible&&m.push(w,Se,Le,q,Ie.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||it.intersectsObject(w))){const Se=G.update(w),Le=w.material;if(K&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ie.copy(w.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ie.copy(Se.boundingSphere.center)),Ie.applyMatrix4(w.matrixWorld).applyMatrix4(re)),Array.isArray(Le)){const be=Se.groups;for(let We=0,Ye=be.length;We<Ye;We++){const He=be[We],st=Le[He.materialIndex];st&&st.visible&&m.push(w,Se,st,q,Ie.z,He)}}else Le.visible&&m.push(w,Se,Le,q,Ie.z,null)}}const de=w.children;for(let Se=0,Le=de.length;Se<Le;Se++)To(de[Se],H,q,K)}function Yc(w,H,q,K){const V=w.opaque,de=w.transmissive,Se=w.transparent;p.setupLightsView(q),Ke===!0&&fe.setGlobalState(M.clippingPlanes,q),K&&Q.viewport(D.copy(K)),V.length>0&&fr(V,H,q),de.length>0&&fr(de,H,q),Se.length>0&&fr(Se,H,q),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function qc(w,H,q,K){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new Ut(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")||X.has("EXT_color_buffer_float")?Ui:Ht,minFilter:ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));const de=p.state.transmissionRenderTarget[K.id],Se=K.viewport||D;de.setSize(Se.z*M.transmissionResolutionScale,Se.w*M.transmissionResolutionScale);const Le=M.getRenderTarget(),be=M.getActiveCubeFace(),We=M.getActiveMipmapLevel();M.setRenderTarget(de),M.getClearColor(z),N=M.getClearAlpha(),N<1&&M.setClearColor(16777215,.5),M.clear(),pe&&Ue.render(q);const Ye=M.toneMapping;M.toneMapping=Zn;const He=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),Ke===!0&&fe.setGlobalState(M.clippingPlanes,K),fr(w,q,K),ae.updateMultisampleRenderTarget(de),ae.updateRenderTargetMipmap(de),X.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let vt=0,Pt=H.length;vt<Pt;vt++){const St=H[vt],Mt=St.object,Ge=St.geometry,bt=St.material,ht=St.group;if(bt.side===Zt&&Mt.layers.test(K.layers)){const dn=bt.side;bt.side=Ot,bt.needsUpdate=!0,Qc(Mt,q,K,Ge,bt,ht),bt.side=dn,bt.needsUpdate=!0,st=!0}}st===!0&&(ae.updateMultisampleRenderTarget(de),ae.updateRenderTargetMipmap(de))}M.setRenderTarget(Le,be,We),M.setClearColor(z,N),He!==void 0&&(K.viewport=He),M.toneMapping=Ye}function fr(w,H,q){const K=H.isScene===!0?H.overrideMaterial:null;for(let V=0,de=w.length;V<de;V++){const Se=w[V],Le=Se.object,be=Se.geometry,We=Se.group;let Ye=Se.material;Ye.allowOverride===!0&&K!==null&&(Ye=K),Le.layers.test(q.layers)&&Qc(Le,H,q,be,Ye,We)}}function Qc(w,H,q,K,V,de){w.onBeforeRender(M,H,q,K,V,de),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(M,H,q,K,w,de),V.transparent===!0&&V.side===Zt&&V.forceSinglePass===!1?(V.side=Ot,V.needsUpdate=!0,M.renderBufferDirect(q,H,K,V,w,de),V.side=jn,V.needsUpdate=!0,M.renderBufferDirect(q,H,K,V,w,de),V.side=Zt):M.renderBufferDirect(q,H,K,V,w,de),w.onAfterRender(M,H,q,K,V,de)}function pr(w,H,q){H.isScene!==!0&&(H=Ee);const K=se.get(w),V=p.state.lights,de=p.state.shadowsArray,Se=V.state.version,Le=Y.getParameters(w,V.state,de,H,q),be=Y.getProgramCacheKey(Le);let We=K.programs;K.environment=w.isMeshStandardMaterial?H.environment:null,K.fog=H.fog,K.envMap=(w.isMeshStandardMaterial?Oe:ke).get(w.envMap||K.environment),K.envMapRotation=K.environment!==null&&w.envMap===null?H.environmentRotation:w.envMapRotation,We===void 0&&(w.addEventListener("dispose",ie),We=new Map,K.programs=We);let Ye=We.get(be);if(Ye!==void 0){if(K.currentProgram===Ye&&K.lightsStateVersion===Se)return Zc(w,Le),Ye}else Le.uniforms=Y.getUniforms(w),w.onBeforeCompile(Le,M),Ye=Y.acquireProgram(Le,be),We.set(be,Ye),K.uniforms=Le.uniforms;const He=K.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(He.clippingPlanes=fe.uniform),Zc(w,Le),K.needsLights=Xu(w),K.lightsStateVersion=Se,K.needsLights&&(He.ambientLightColor.value=V.state.ambient,He.lightProbe.value=V.state.probe,He.directionalLights.value=V.state.directional,He.directionalLightShadows.value=V.state.directionalShadow,He.spotLights.value=V.state.spot,He.spotLightShadows.value=V.state.spotShadow,He.rectAreaLights.value=V.state.rectArea,He.ltc_1.value=V.state.rectAreaLTC1,He.ltc_2.value=V.state.rectAreaLTC2,He.pointLights.value=V.state.point,He.pointLightShadows.value=V.state.pointShadow,He.hemisphereLights.value=V.state.hemi,He.directionalShadowMap.value=V.state.directionalShadowMap,He.directionalShadowMatrix.value=V.state.directionalShadowMatrix,He.spotShadowMap.value=V.state.spotShadowMap,He.spotLightMatrix.value=V.state.spotLightMatrix,He.spotLightMap.value=V.state.spotLightMap,He.pointShadowMap.value=V.state.pointShadowMap,He.pointShadowMatrix.value=V.state.pointShadowMatrix),K.currentProgram=Ye,K.uniformsList=null,Ye}function Kc(w){if(w.uniformsList===null){const H=w.currentProgram.getUniforms();w.uniformsList=oo.seqWithValue(H.seq,w.uniforms)}return w.uniformsList}function Zc(w,H){const q=se.get(w);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.batchingColor=H.batchingColor,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.instancingMorph=H.instancingMorph,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function Vu(w,H,q,K,V){H.isScene!==!0&&(H=Ee),ae.resetTextureUnits();const de=H.fog,Se=K.isMeshStandardMaterial?H.environment:null,Le=E===null?M.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:di,be=(K.isMeshStandardMaterial?Oe:ke).get(K.envMap||Se),We=K.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ye=!!q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),He=!!q.morphAttributes.position,st=!!q.morphAttributes.normal,vt=!!q.morphAttributes.color;let Pt=Zn;K.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Pt=M.toneMapping);const St=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Mt=St!==void 0?St.length:0,Ge=se.get(K),bt=p.state.lights;if(Ke===!0&&(ee===!0||w!==y)){const sn=w===y&&K.id===S;fe.setState(K,w,sn)}let ht=!1;K.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==bt.state.version||Ge.outputColorSpace!==Le||V.isBatchedMesh&&Ge.batching===!1||!V.isBatchedMesh&&Ge.batching===!0||V.isBatchedMesh&&Ge.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ge.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ge.instancing===!1||!V.isInstancedMesh&&Ge.instancing===!0||V.isSkinnedMesh&&Ge.skinning===!1||!V.isSkinnedMesh&&Ge.skinning===!0||V.isInstancedMesh&&Ge.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ge.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ge.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ge.instancingMorph===!1&&V.morphTexture!==null||Ge.envMap!==be||K.fog===!0&&Ge.fog!==de||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==fe.numPlanes||Ge.numIntersection!==fe.numIntersection)||Ge.vertexAlphas!==We||Ge.vertexTangents!==Ye||Ge.morphTargets!==He||Ge.morphNormals!==st||Ge.morphColors!==vt||Ge.toneMapping!==Pt||Ge.morphTargetsCount!==Mt)&&(ht=!0):(ht=!0,Ge.__version=K.version);let dn=Ge.currentProgram;ht===!0&&(dn=pr(K,H,V));let zi=!1,fn=!1,Es=!1;const Ct=dn.getUniforms(),Mn=Ge.uniforms;if(Q.useProgram(dn.program)&&(zi=!0,fn=!0,Es=!0),K.id!==S&&(S=K.id,fn=!0),zi||y!==w){Q.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ct.setValue(I,"projectionMatrix",w.projectionMatrix),Ct.setValue(I,"viewMatrix",w.matrixWorldInverse);const cn=Ct.map.cameraPosition;cn!==void 0&&cn.setValue(I,we.setFromMatrixPosition(w.matrixWorld)),Z.logarithmicDepthBuffer&&Ct.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ct.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,fn=!0,Es=!0)}if(V.isSkinnedMesh){Ct.setOptional(I,V,"bindMatrix"),Ct.setOptional(I,V,"bindMatrixInverse");const sn=V.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Ct.setValue(I,"boneTexture",sn.boneTexture,ae))}V.isBatchedMesh&&(Ct.setOptional(I,V,"batchingTexture"),Ct.setValue(I,"batchingTexture",V._matricesTexture,ae),Ct.setOptional(I,V,"batchingIdTexture"),Ct.setValue(I,"batchingIdTexture",V._indirectTexture,ae),Ct.setOptional(I,V,"batchingColorTexture"),V._colorsTexture!==null&&Ct.setValue(I,"batchingColorTexture",V._colorsTexture,ae));const An=q.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&he.update(V,q,dn),(fn||Ge.receiveShadow!==V.receiveShadow)&&(Ge.receiveShadow=V.receiveShadow,Ct.setValue(I,"receiveShadow",V.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Mn.envMap.value=be,Mn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&H.environment!==null&&(Mn.envMapIntensity.value=H.environmentIntensity),fn&&(Ct.setValue(I,"toneMappingExposure",M.toneMappingExposure),Ge.needsLights&&Wu(Mn,Es),de&&K.fog===!0&&te.refreshFogUniforms(Mn,de),te.refreshMaterialUniforms(Mn,K,k,W,p.state.transmissionRenderTarget[w.id]),oo.upload(I,Kc(Ge),Mn,ae)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(oo.upload(I,Kc(Ge),Mn,ae),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ct.setValue(I,"center",V.center),Ct.setValue(I,"modelViewMatrix",V.modelViewMatrix),Ct.setValue(I,"normalMatrix",V.normalMatrix),Ct.setValue(I,"modelMatrix",V.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const sn=K.uniformsGroups;for(let cn=0,bo=sn.length;cn<bo;cn++){const mi=sn[cn];Ze.update(mi,dn),Ze.bind(mi,dn)}}return dn}function Wu(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function Xu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(w,H,q){const K=se.get(w);K.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),se.get(w.texture).__webglTexture=H,se.get(w.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:q,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,H){const q=se.get(w);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0};const Yu=I.createFramebuffer();this.setRenderTarget=function(w,H=0,q=0){E=w,T=H,P=q;let K=!0,V=null,de=!1,Se=!1;if(w){const be=se.get(w);if(be.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(I.FRAMEBUFFER,null),K=!1;else if(be.__webglFramebuffer===void 0)ae.setupRenderTarget(w);else if(be.__hasExternalTextures)ae.rebindTextures(w,se.get(w.texture).__webglTexture,se.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const He=w.depthTexture;if(be.__boundDepthTexture!==He){if(He!==null&&se.has(He)&&(w.width!==He.image.width||w.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(w)}}const We=w.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Se=!0);const Ye=se.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ye[H])?V=Ye[H][q]:V=Ye[H],de=!0):w.samples>0&&ae.useMultisampledRTT(w)===!1?V=se.get(w).__webglMultisampledFramebuffer:Array.isArray(Ye)?V=Ye[q]:V=Ye,D.copy(w.viewport),L.copy(w.scissor),U=w.scissorTest}else D.copy(ge).multiplyScalar(k).floor(),L.copy(Pe).multiplyScalar(k).floor(),U=qe;if(q!==0&&(V=Yu),Q.bindFramebuffer(I.FRAMEBUFFER,V)&&K&&Q.drawBuffers(w,V),Q.viewport(D),Q.scissor(L),Q.setScissorTest(U),de){const be=se.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+H,be.__webglTexture,q)}else if(Se){const be=H;for(let We=0;We<w.textures.length;We++){const Ye=se.get(w.textures[We]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+We,Ye.__webglTexture,q,be)}}else if(w!==null&&q!==0){const be=se.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,be.__webglTexture,q)}S=-1},this.readRenderTargetPixels=function(w,H,q,K,V,de,Se,Le=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=se.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(be=be[Se]),be){Q.bindFramebuffer(I.FRAMEBUFFER,be);try{const We=w.textures[Le],Ye=We.format,He=We.type;if(!Z.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-K&&q>=0&&q<=w.height-V&&(w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Le),I.readPixels(H,q,K,V,Ne.convert(Ye),Ne.convert(He),de))}finally{const We=E!==null?se.get(E).__webglFramebuffer:null;Q.bindFramebuffer(I.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(w,H,q,K,V,de,Se,Le=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=se.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(be=be[Se]),be)if(H>=0&&H<=w.width-K&&q>=0&&q<=w.height-V){Q.bindFramebuffer(I.FRAMEBUFFER,be);const We=w.textures[Le],Ye=We.format,He=We.type;if(!Z.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,st),I.bufferData(I.PIXEL_PACK_BUFFER,de.byteLength,I.STREAM_READ),w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Le),I.readPixels(H,q,K,V,Ne.convert(Ye),Ne.convert(He),0);const vt=E!==null?se.get(E).__webglFramebuffer:null;Q.bindFramebuffer(I.FRAMEBUFFER,vt);const Pt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await $d(I,Pt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,st),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,de),I.deleteBuffer(st),I.deleteSync(Pt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,H=null,q=0){const K=Math.pow(2,-q),V=Math.floor(w.image.width*K),de=Math.floor(w.image.height*K),Se=H!==null?H.x:0,Le=H!==null?H.y:0;ae.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,q,0,0,Se,Le,V,de),Q.unbindTexture()};const qu=I.createFramebuffer(),Qu=I.createFramebuffer();this.copyTextureToTexture=function(w,H,q=null,K=null,V=0,de=null){de===null&&(V!==0?(tr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=V,V=0):de=0);let Se,Le,be,We,Ye,He,st,vt,Pt;const St=w.isCompressedTexture?w.mipmaps[de]:w.image;if(q!==null)Se=q.max.x-q.min.x,Le=q.max.y-q.min.y,be=q.isBox3?q.max.z-q.min.z:1,We=q.min.x,Ye=q.min.y,He=q.isBox3?q.min.z:0;else{const An=Math.pow(2,-V);Se=Math.floor(St.width*An),Le=Math.floor(St.height*An),w.isDataArrayTexture?be=St.depth:w.isData3DTexture?be=Math.floor(St.depth*An):be=1,We=0,Ye=0,He=0}K!==null?(st=K.x,vt=K.y,Pt=K.z):(st=0,vt=0,Pt=0);const Mt=Ne.convert(H.format),Ge=Ne.convert(H.type);let bt;H.isData3DTexture?(ae.setTexture3D(H,0),bt=I.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(ae.setTexture2DArray(H,0),bt=I.TEXTURE_2D_ARRAY):(ae.setTexture2D(H,0),bt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,H.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,H.unpackAlignment);const ht=I.getParameter(I.UNPACK_ROW_LENGTH),dn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),zi=I.getParameter(I.UNPACK_SKIP_PIXELS),fn=I.getParameter(I.UNPACK_SKIP_ROWS),Es=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,St.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,St.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,We),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ye),I.pixelStorei(I.UNPACK_SKIP_IMAGES,He);const Ct=w.isDataArrayTexture||w.isData3DTexture,Mn=H.isDataArrayTexture||H.isData3DTexture;if(w.isDepthTexture){const An=se.get(w),sn=se.get(H),cn=se.get(An.__renderTarget),bo=se.get(sn.__renderTarget);Q.bindFramebuffer(I.READ_FRAMEBUFFER,cn.__webglFramebuffer),Q.bindFramebuffer(I.DRAW_FRAMEBUFFER,bo.__webglFramebuffer);for(let mi=0;mi<be;mi++)Ct&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,se.get(w).__webglTexture,V,He+mi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,se.get(H).__webglTexture,de,Pt+mi)),I.blitFramebuffer(We,Ye,Se,Le,st,vt,Se,Le,I.DEPTH_BUFFER_BIT,I.NEAREST);Q.bindFramebuffer(I.READ_FRAMEBUFFER,null),Q.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(V!==0||w.isRenderTargetTexture||se.has(w)){const An=se.get(w),sn=se.get(H);Q.bindFramebuffer(I.READ_FRAMEBUFFER,qu),Q.bindFramebuffer(I.DRAW_FRAMEBUFFER,Qu);for(let cn=0;cn<be;cn++)Ct?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,An.__webglTexture,V,He+cn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,An.__webglTexture,V),Mn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,sn.__webglTexture,de,Pt+cn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,sn.__webglTexture,de),V!==0?I.blitFramebuffer(We,Ye,Se,Le,st,vt,Se,Le,I.COLOR_BUFFER_BIT,I.NEAREST):Mn?I.copyTexSubImage3D(bt,de,st,vt,Pt+cn,We,Ye,Se,Le):I.copyTexSubImage2D(bt,de,st,vt,We,Ye,Se,Le);Q.bindFramebuffer(I.READ_FRAMEBUFFER,null),Q.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Mn?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(bt,de,st,vt,Pt,Se,Le,be,Mt,Ge,St.data):H.isCompressedArrayTexture?I.compressedTexSubImage3D(bt,de,st,vt,Pt,Se,Le,be,Mt,St.data):I.texSubImage3D(bt,de,st,vt,Pt,Se,Le,be,Mt,Ge,St):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,de,st,vt,Se,Le,Mt,Ge,St.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,de,st,vt,St.width,St.height,Mt,St.data):I.texSubImage2D(I.TEXTURE_2D,de,st,vt,Se,Le,Mt,Ge,St);I.pixelStorei(I.UNPACK_ROW_LENGTH,ht),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,dn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,zi),I.pixelStorei(I.UNPACK_SKIP_ROWS,fn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Es),de===0&&H.generateMipmaps&&I.generateMipmap(bt),Q.unbindTexture()},this.initRenderTarget=function(w){se.get(w).__webglFramebuffer===void 0&&ae.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ae.setTextureCube(w,0):w.isData3DTexture?ae.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ae.setTexture2DArray(w,0):ae.setTexture2D(w,0),Q.unbindTexture()},this.resetState=function(){T=0,P=0,E=null,Q.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}}function wt(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function qr(n,e,t){let i=n*374761393+e*668265263+t*144665|0;return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967296}function hh(n){return n*n*(3-2*n)}function wu(n,e,t=0){const i=Math.floor(n),s=Math.floor(e),r=hh(n-i),o=hh(e-s),a=qr(i,s,t),c=qr(i+1,s,t),l=qr(i,s+1,t),h=qr(i+1,s+1,t);return a+(c-a)*r+(l-a)*o+(a-c-l+h)*r*o}function gn(n,e,t=4,i=0){let s=0,r=.5,o=n,a=e;for(let c=0;c<t;c++)s+=r*wu(o,a,i+c*101),o*=2.03,a*=2.03,r*=.5;return s}const It=600,Qr=512,lx=new R(0,0,140),ua=[[14,210],[6,170],[0,140],[8,105],[-6,70],[10,30],[-4,-15],[-22,-60],[-38,-105],[-48,-128],[-42,-146],[-58,-160],[-70,-170]],ct={x:-70,z:-170},Di={x:56,z:122,r:40},$e={x:28,z:124,half:8},Bn={x:52,z:118,r:6},Xt=It/2;function hx(n,e){let t=(140-e)*.055;t+=10*(gn(n*.004,e*.004,4,11)-.5)*2,t+=3*(gn(n*.018,e*.018,4,23)-.5)*2,t+=.5*(gn(n*.09,e*.09,3,37)-.5)*2,t+=da(n,e,ct.x,ct.z,178,62,1.25),t+=da(n,e,-18,-118,110,28,1.5),t+=da(n,e,150,-95,75,16,1.6);const i=n-ct.x,s=e-ct.z,r=Math.sqrt(i*i+s*s);if(r<14){const a=1-r/14;t+=4.2*a*a*(3-2*a)}const o=Math.sqrt(n*n+e*e);if(o>215){const a=Math.min(1,(o-215)/80);t+=26*a*a*(3-2*a)*(.45+.9*gn(n*.007+9,e*.007+4,3,501))}return t}function da(n,e,t,i,s,r,o){const a=n-t,c=e-i,l=Math.sqrt(a*a+c*c);if(l>=s)return 0;const h=1-l/s,u=.9+.5*(gn(n*.012,e*.012,3,77)-.5);return r*Math.pow(h,o)*u}function uh(n,e){let t=1/0;for(let i=0;i<ua.length-1;i++){const[s,r]=ua[i],[o,a]=ua[i+1],c=o-s,l=a-r,h=c*c+l*l;let u=((n-s)*c+(e-r)*l)/h;u=Math.max(0,Math.min(1,u));const f=s+c*u,d=r+l*u,g=n-f,v=e-d,m=g*g+v*v;m<t&&(t=m)}return Math.sqrt(t)}class ux{constructor(){B(this,"heights");B(this,"mask");B(this,"texture");const e=Qr;this.heights=new Float32Array(e*e),this.mask=new Float32Array(e*e);const t=It/(e-1);for(let r=0;r<e;r++){const o=-Xt+r*t;for(let a=0;a<e;a++){const c=-Xt+a*t;this.heights[r*e+a]=hx(c,o)}}for(let r=0;r<e;r++){const o=-Xt+r*t;for(let a=0;a<e;a++){const c=-Xt+a*t,l=r*e+a,h=this.heights[r*e+Math.max(0,a-1)],u=this.heights[r*e+Math.min(e-1,a+1)],f=this.heights[Math.max(0,r-1)*e+a],d=this.heights[Math.min(e-1,r+1)*e+a],g=(u-h)/(2*t),v=(d-f)/(2*t),m=Math.sqrt(g*g+v*v),p=this.heights[l];let x=1-_i(.56,.88,m);x*=1-.3*_i(38,70,p);const A=_i(.64,.85,gn(c*.045+13,o*.045+71,3,313))*_i(16,32,p);x*=1-.75*A;const M=_i(18,45,p)*1.5,C=uh(c,o);x*=_i(.7+M,1.9+M*2.2,C);const T=Math.hypot(c-ct.x,o-ct.z);x*=_i(5,10,T),this.mask[l]=x}}const i=new Uint16Array(e*e*4);for(let r=0;r<e*e;r++)i[r*4+0]=xi.toHalfFloat(this.heights[r]),i[r*4+1]=xi.toHalfFloat(this.mask[r]),i[r*4+2]=0,i[r*4+3]=xi.toHalfFloat(1);const s=new bc(i,e,e,En,Ui);s.magFilter=zt,s.minFilter=zt,s.wrapS=Yt,s.wrapT=Yt,s.needsUpdate=!0,this.texture=s}sampleHeight(e,t){return this.bilinear(this.heights,e,t)}carve(e,t,i,s,r,o=1.6){const a=Qr,c=It/(a-1),l=Math.max(0,Math.floor((e-i-o+Xt)/c)),h=Math.min(a-1,Math.ceil((e+i+o+Xt)/c)),u=Math.max(0,Math.floor((t-s-o+Xt)/c)),f=Math.min(a-1,Math.ceil((t+s+o+Xt)/c)),d=this.texture.image.data;for(let g=u;g<=f;g++){const v=-Xt+g*c;for(let m=l;m<=h;m++){const p=-Xt+m*c,x=Math.max(Math.abs(p-e)-i,0),A=Math.max(Math.abs(v-t)-s,0),M=Math.hypot(x,A);if(M>=o)continue;const C=M<=0?1:1-M/o,T=C*C*(3-2*C),P=g*a+m,E=this.heights[P],S=E+(r-E)*T;S<E&&(this.heights[P]=S),T>.25&&(this.mask[P]=Math.min(this.mask[P],1-T)),d[P*4+0]=xi.toHalfFloat(this.heights[P]),d[P*4+1]=xi.toHalfFloat(this.mask[P])}}this.texture.needsUpdate=!0}carveRamp(e,t,i,s,r,o,a,c=1.4){const l=Math.hypot(i-e,s-t);if(l<.01)return;const h=(i-e)/l,u=(s-t)/l,f=r+c+1,d=Math.min(e,i)-f,g=Math.max(e,i)+f,v=Math.min(t,s)-f,m=Math.max(t,s)+f,p=Qr,x=It/(p-1),A=Math.max(0,Math.floor((d+Xt)/x)),M=Math.min(p-1,Math.ceil((g+Xt)/x)),C=Math.max(0,Math.floor((v+Xt)/x)),T=Math.min(p-1,Math.ceil((m+Xt)/x)),P=this.texture.image.data;for(let E=C;E<=T;E++){const S=-Xt+E*x;for(let y=A;y<=M;y++){const D=-Xt+y*x,L=ze.clamp(((D-e)*h+(S-t)*u)/l,0,1),U=e+(i-e)*L,z=t+(s-t)*L,N=Math.hypot(D-U,S-z),F=Math.max(N-r,0);if(F>=c)continue;const W=F<=0?1:1-F/c,k=W*W*(3-2*W),$=o*L*k;if($<=.001)continue;const ne=E*p+y,ge=this.heights[ne],Pe=Math.max(a,ge-$);Pe<ge&&(this.heights[ne]=Pe),$>.5&&(this.mask[ne]=Math.min(this.mask[ne],.35)),P[ne*4+0]=xi.toHalfFloat(this.heights[ne]),P[ne*4+1]=xi.toHalfFloat(this.mask[ne])}}this.texture.needsUpdate=!0}sampleMask(e,t){return this.bilinear(this.mask,e,t)}sampleSlope(e,t){const s=(this.sampleHeight(e+1.2,t)-this.sampleHeight(e-1.2,t))/2.4,r=(this.sampleHeight(e,t+1.2)-this.sampleHeight(e,t-1.2))/(2*1.2);return Math.sqrt(s*s+r*r)}distToPath(e,t){return uh(e,t)}bilinear(e,t,i){const s=Qr,r=ze.clamp((t+Xt)/It,0,1)*(s-1),o=ze.clamp((i+Xt)/It,0,1)*(s-1),a=Math.min(Math.floor(r),s-2),c=Math.min(Math.floor(o),s-2),l=r-a,h=o-c,u=e[c*s+a],f=e[c*s+a+1],d=e[(c+1)*s+a],g=e[(c+1)*s+a+1];return u+(f-u)*l+(d-u)*h+(u-f-d+g)*l*h}}function _i(n,e,t){const i=ze.clamp((t-n)/(e-n),0,1);return i*i*(3-2*i)}function $t(n,e){const t=document.createElement("canvas");t.width=n,t.height=e;const i=t.getContext("2d");return[t,i]}function nn(n,e=!0){const t=new Dc(n);return e&&(t.colorSpace=ot),t.anisotropy=4,t.needsUpdate=!0,t}function dx(){const[n,e]=$t(512,512),t=wt(4021),i=512,s=512,r=34;for(let a=0;a<r;a++){const c=i*(.5+(t()-.5)*.55),l=s*(.995-t()*.03),h=(t()-.5)*1.5,u=s*(.55+t()*.42),f=8+t()*10,d=c+h*u*.55,g=l-u,v=c+h*u*.18,m=l-u*.55,p=e.createLinearGradient(c,l,d,g),x=t(),A=`rgb(${28+x*10|0}, ${46+x*10|0}, ${12+x*5|0})`,M=`rgb(${60+x*32|0}, ${96+x*26|0}, ${22+x*10|0})`,C=`rgb(${118+x*62|0}, ${140+x*36|0}, ${44+x*26|0})`;p.addColorStop(0,A),p.addColorStop(.55,M),p.addColorStop(1,C),e.fillStyle=p,e.beginPath(),e.moveTo(c-f/2,l),e.quadraticCurveTo(v-f/2,m,d,g),e.quadraticCurveTo(v+f/2,m,c+f/2,l),e.closePath(),e.fill()}const o=nn(n);return o.wrapS=Yt,o.wrapT=Yt,o}function fx(){const[n,e]=$t(512,512),t=wt(7717),i=256,s=256,r=170;for(let a=0;a<r;a++){const c=t()*Math.PI*2,l=Math.pow(t(),.6)*215,h=i+Math.cos(c)*l,u=s+Math.sin(c)*l*.92,f=82+t()*26,d=34+t()*22,g=l/215,v=13+t()*11+g*12;e.fillStyle=`hsla(${f}, ${d}%, ${v}%, ${.85+t()*.15})`,e.save(),e.translate(h,u),e.rotate(t()*Math.PI*2);const m=12+t()*15,p=7+t()*9;e.beginPath(),e.ellipse(0,0,m,p,0,0,Math.PI*2),e.fill(),e.restore()}const o=nn(n);return o.wrapS=Yt,o.wrapT=Yt,o}function hc(){const[n,e]=$t(256,512),t=wt(1379);e.fillStyle="#4d4238",e.fillRect(0,0,256,512);for(let s=0;s<320;s++){const r=t()*256,o=t()*512,a=30+t()*140,c=1.5+t()*4.5,l=t(),h=45+l*52,u=38+l*46,f=30+l*38;e.strokeStyle=`rgba(${h|0}, ${u|0}, ${f|0}, ${.35+t()*.45})`,e.lineWidth=c,e.beginPath(),e.moveTo(r,o-a/2),e.bezierCurveTo(r+(t()-.5)*10,o-a/4,r+(t()-.5)*10,o+a/4,r+(t()-.5)*6,o+a/2),e.stroke()}for(let s=0;s<90;s++){const r=t()*256,o=t()*512,a=20+t()*90;e.strokeStyle=`rgba(18, 14, 10, ${.3+t()*.4})`,e.lineWidth=1+t()*2,e.beginPath(),e.moveTo(r,o-a/2),e.lineTo(r+(t()-.5)*8,o+a/2),e.stroke()}const i=nn(n);return i.wrapS=kt,i.wrapT=kt,i}function px(){const[e,t]=$t(512,512),i=wt(6067),s=t.createImageData(512,512),r=s.data;for(let a=0;a<512;a++)for(let c=0;c<512;c++){let l=.55*gn(c*.028,a*.028,4,611)+.3*gn(c*.09,a*.09,3,733)+.15*gn(c*.24,a*.24,2,857);const h=i();h<.015?l+=.25:h<.03&&(l-=.25);const u=Math.max(0,Math.min(255,Math.round((.28+l*.62)*255))),f=(a*512+c)*4;r[f]=u,r[f+1]=u,r[f+2]=u,r[f+3]=255}t.putImageData(s,0,0);const o=new Dc(e);return o.wrapS=$n,o.wrapT=$n,o.anisotropy=8,o.needsUpdate=!0,o}function mx(){const[n,e]=$t(256,512),t=wt(66613);e.fillStyle="#000000",e.fillRect(0,0,256,512);for(let r=0;r<7;r++){const o=t()*256;e.strokeStyle=`rgba(180, 30, 15, ${.18+t()*.15})`,e.lineWidth=1+t()*1.5,e.beginPath(),e.moveTo(o,0);let a=o;for(let c=0;c<=512;c+=32)a+=(t()-.5)*26,e.lineTo(a,c);e.stroke()}const i=[36,92,158,220];for(const r of i){let o=14+t()*30;for(;o<492;){const a=t()<.25,c=a?.95:.55+t()*.3;e.strokeStyle=a?`rgba(255, 120, 60, ${c})`:`rgba(235, 55, 25, ${c})`,e.lineWidth=a?2.5:1.8;const l=7+t()*9,h=2+Math.floor(t()*3);e.beginPath();let u=r+(t()-.5)*14,f=o;e.moveTo(u,f);for(let d=0;d<h;d++){const g=Math.floor(t()*4);u+=g===0?l:g===1?-l:(t()-.5)*l,f+=g>=2?l:l*.4,e.lineTo(u,f)}e.stroke(),t()<.3&&(e.fillStyle="rgba(255, 160, 90, 0.9)",e.fillRect(r+(t()-.5)*20,o+l/2,2.5,2.5)),o+=l+10+t()*22}}const s=nn(n);return s.wrapS=kt,s.wrapT=kt,s}function cr(){const[n,e]=$t(64,64),t=e.createRadialGradient(32,32,0,32,32,30);return t.addColorStop(0,"rgba(255, 250, 225, 1)"),t.addColorStop(.4,"rgba(255, 248, 215, 0.55)"),t.addColorStop(1,"rgba(255, 245, 200, 0)"),e.fillStyle=t,e.fillRect(0,0,64,64),nn(n)}function dh(n){const[e,t]=$t(256,256),i=new Re(n),s=Math.round(i.r*255),r=Math.round(i.g*255),o=Math.round(i.b*255);t.fillStyle=`rgb(${s},${r},${o})`,t.fillRect(0,0,256,256);const a=wt(1337);for(let c=0;c<26;c++){const l=a()*256,h=.02+a()*.04,u=a()>.5;t.strokeStyle=u?`rgba(255,255,255,${h})`:`rgba(0,0,0,${h})`,t.lineWidth=6+a()*20,t.beginPath(),t.moveTo(0,l),t.bezierCurveTo(80,l+a()*14-7,180,l+a()*14-7,256,l),t.stroke()}for(let c=0;c<900;c++){const l=a()>.5?255:40;t.fillStyle=`rgba(${l},${l},${l},0.06)`,t.fillRect(a()*256,a()*256,1.3,1.3)}return nn(e)}function gx(){const[n,e]=$t(128,128),t=wt(4242);e.fillStyle="rgb(86,86,86)",e.fillRect(0,0,128,128);for(let s=0;s<700;s++){const r=60+Math.floor(t()*60);e.fillStyle=`rgba(${r},${r},${r},0.5)`,e.fillRect(t()*128,t()*128,1,1)}const i=nn(n,!1);return i.wrapS=kt,i.wrapT=kt,i}function vx(){const[n,e]=$t(128,128);e.fillStyle="#191a1c",e.fillRect(0,0,128,128),e.strokeStyle="#0a0a0b",e.lineWidth=7;for(let i=-128;i<256;i+=18)e.beginPath(),e.moveTo(i,0),e.lineTo(i+64,128),e.stroke();e.strokeStyle="rgba(255,255,255,0.05)",e.lineWidth=4;for(let i=-128;i<256;i+=18)e.beginPath(),e.moveTo(i+9,0),e.lineTo(i+73,128),e.stroke();const t=nn(n);return t.wrapS=kt,t.wrapT=kt,t.repeat.set(3,1),t}function Eu(){const[n,e]=$t(512,512),t=wt(97531),i=e.createRadialGradient(256,240,60,256,256,320);i.addColorStop(0,"#c08463"),i.addColorStop(.55,"#b0714f"),i.addColorStop(1,"#93543a"),e.fillStyle=i,e.fillRect(0,0,512,512);for(let o=0;o<130;o++){const a=t()*512,c=t()*512,l=14+t()*42,h=t(),u=h>.6?`rgba(178,84,62,${.05+t()*.08})`:h>.25?`rgba(134,70,46,${.05+t()*.08})`:`rgba(214,140,102,${.04+t()*.07})`,f=e.createRadialGradient(a,c,0,a,c,l);f.addColorStop(0,u),f.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=f,e.fillRect(a-l,c-l,l*2,l*2)}e.lineWidth=1.6;for(let o=0;o<10;o++){e.strokeStyle=`rgba(88,112,124,${.06+t()*.06})`,e.beginPath();let a=t()*512,c=t()*512;e.moveTo(a,c);for(let l=0;l<4;l++)a+=(t()-.5)*90,c+=t()*60,e.quadraticCurveTo(a+12,c-18,a,c);e.stroke()}for(let o=0;o<4600;o++){const a=t()>.35;e.fillStyle=a?`rgba(88,44,30,${.07+t()*.1})`:`rgba(232,172,138,${.05+t()*.07})`,e.fillRect(t()*512,t()*512,1.4,1.4)}e.lineWidth=1;for(let o=0;o<700;o++){const a=t()*512,c=t()*512,l=t()*Math.PI*2;e.strokeStyle=`rgba(96,58,38,${.06+t()*.09})`,e.beginPath(),e.moveTo(a,c),e.lineTo(a+Math.cos(l)*5,c+Math.sin(l)*5),e.stroke()}for(let o=0;o<46;o++){const a=t()*512,c=t()*512;e.strokeStyle=`rgba(104,52,36,${.14+t()*.12})`,e.lineWidth=1.6,e.beginPath(),e.arc(a,c,5+t()*5,.15*Math.PI,.85*Math.PI),e.stroke(),e.beginPath(),e.arc(a+2,c+8+t()*4,4+t()*4,.1*Math.PI,.9*Math.PI),e.stroke()}const s="rgba(196,80,58,0.10)";e.fillStyle=s,e.fillRect(0,0,512,34),e.fillRect(0,478,512,34),e.fillRect(0,0,34,512),e.fillRect(478,0,34,512);const r=nn(n);return r.wrapS=Yt,r.wrapT=Yt,r}function Tu(){const[n,e]=$t(512,512),t=wt(22222);e.fillStyle="rgb(128,128,128)",e.fillRect(0,0,512,512);for(let s=0;s<2600;s++){const r=90+Math.floor(t()*40);e.fillStyle=`rgb(${r},${r},${r})`,e.fillRect(t()*512,t()*512,1.6,1.6)}for(let s=0;s<46;s++){e.strokeStyle=`rgba(60,60,60,${.35+t()*.25})`,e.lineWidth=2.4;const r=t()*512,o=t()*512;e.beginPath(),e.arc(r,o,6+t()*6,.15*Math.PI,.85*Math.PI),e.stroke()}const i=nn(n,!1);return i.wrapS=Yt,i.wrapT=Yt,i}function xx(){const[n,e]=$t(256,256),t=wt(5533);e.fillStyle="#a87844",e.fillRect(0,0,256,256);for(let s=0;s<30;s++){const r=t()*256,o=118+t()*60;e.strokeStyle=`rgba(${o+40},${o},${o-45},${.25+t()*.35})`,e.lineWidth=.8+t()*2.4,e.beginPath(),e.moveTo(r,0);let a=r;for(let c=0;c<256;c+=32)a+=(t()-.5)*7,e.lineTo(a,c+16);e.stroke()}for(let s=0;s<4;s++){const r=t()*256,o=t()*256,a=e.createRadialGradient(r,o,1,r,o,7+t()*5);a.addColorStop(0,"rgba(70,40,18,0.8)"),a.addColorStop(.6,"rgba(120,74,38,0.4)"),a.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=a,e.fillRect(r-14,o-14,28,28)}const i=nn(n);return i.wrapS=kt,i.wrapT=kt,i}function Mx(){const[n,e]=$t(128,128),t=wt(8841);e.fillStyle="#5c3a24",e.fillRect(0,0,128,128);for(let i=0;i<1500;i++){const s=60+Math.floor(t()*50);e.fillStyle=`rgba(${s},${Math.floor(s*.62)},${Math.floor(s*.4)},0.4)`,e.fillRect(t()*128,t()*128,1.4,1.4)}e.strokeStyle="rgba(208,180,130,0.85)",e.lineWidth=2,e.setLineDash([6,5]);for(let i=-128;i<256;i+=34)e.beginPath(),e.moveTo(i,0),e.lineTo(i+128,128),e.stroke();return e.setLineDash([]),nn(n)}function Ax(){const[n,e]=$t(128,128),t=wt(64064);e.fillStyle="rgb(168,172,178)",e.fillRect(0,0,128,128);for(let s=0;s<700;s++){const r=120+Math.floor(t()*90);e.strokeStyle=`rgba(${r},${r+3},${r+8},0.5)`,e.lineWidth=.7;const o=t()*128;e.beginPath(),e.moveTo(0,o),e.lineTo(128,o+(t()-.5)*3),e.stroke()}const i=nn(n,!1);return i.wrapS=kt,i.wrapT=kt,i}function yx(){const[n,e]=$t(1024,1024),t=wt(20240),i=341;for(let r=0;r<3;r++){const o=r*i;if(e.save(),e.translate(0,o),e.beginPath(),e.rect(0,0,1024,i),e.clip(),r===0){e.fillStyle="#d9cdb8",e.fillRect(0,0,1024,i);for(let a=0;a<260;a++){const c=t()*1024,l=.06+t()*.16;e.strokeStyle=t()>.5?`rgba(150,120,82,${l})`:`rgba(236,226,204,${l*.8})`,e.lineWidth=.7+t()*2.6,e.beginPath(),e.moveTo(c,-6);let h=c;for(let u=0;u<i+12;u+=26)h+=(t()-.5)*9,e.lineTo(h,u);e.stroke()}for(let a=0;a<9;a++){const c=t()*1024,l=t()*i,h=e.createRadialGradient(c,l,1,c,l,9);h.addColorStop(0,"rgba(120,88,52,0.55)"),h.addColorStop(.65,"rgba(160,128,88,0.25)"),h.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=h,e.fillRect(c-12,l-12,24,24)}for(let a=0;a<1024;a+=116)e.fillStyle="rgba(96,72,44,0.35)",e.fillRect(a+t()*8,0,2.4,i)}if(r===1){e.fillStyle="#cbb9a0",e.fillRect(0,0,1024,i);const a=74;for(let c=0;c<1024;c+=a){const l=e.createLinearGradient(c,0,c+a,0);l.addColorStop(0,"rgba(74,52,32,0.34)"),l.addColorStop(.25,"rgba(120,92,60,0.12)"),l.addColorStop(.9,"rgba(255,244,224,0.10)"),l.addColorStop(1,"rgba(60,42,26,0.30)"),e.fillStyle=l,e.fillRect(c,0,a,i),e.fillStyle="rgba(70,48,30,0.4)",e.fillRect(c,0,2,i);for(let h=0;h<i;h+=46){const u=h/46%2*23;e.fillStyle=`rgba(${150+t()*40},${120+t()*30},${86+t()*24},0.18)`,e.beginPath(),e.moveTo(c+3,h+44+u*.2),e.quadraticCurveTo(c+a/2,h+30+u*.2,c+a-3,h+44+u*.2),e.lineTo(c+a-3,h+46),e.lineTo(c+3,h+46),e.closePath(),e.fill()}}}if(r===2){e.fillStyle="#b7b2a8",e.fillRect(0,0,1024,i);let a=0;for(;a<i;){const c=52+t()*34;let l=-20+t()*30;for(;l<1024;){const h=70+t()*110,u=158+t()*56;e.fillStyle=`rgb(${u},${u-6},${u-14})`,bu(e,l,a,h,c,7),e.fill(),e.strokeStyle="rgba(255,255,255,0.16)",e.lineWidth=2,e.beginPath(),e.moveTo(l+6,a+2),e.lineTo(l+h-6,a+2),e.stroke(),e.strokeStyle="rgba(60,56,48,0.35)",e.beginPath(),e.moveTo(l+6,a+c-2),e.lineTo(l+h-6,a+c-2),e.stroke(),l+=h+6}a+=c+6}for(let c=0;c<40;c++){const l=t()*1024,h=t()*i,u=e.createRadialGradient(l,h,1,l,h,10+t()*22);u.addColorStop(0,`rgba(108,124,72,${.14+t()*.2})`),u.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=u,e.fillRect(l-34,h-34,68,68)}}e.restore()}const s=nn(n);return s.wrapS=kt,s.wrapT=Yt,s}function bu(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}function Sx(n,e,t=1){const i=n.attributes.uv;for(let s=0;s<i.count;s++){const r=i.getX(s)*t%1,o=(e+i.getY(s))/3;i.setXY(s,Math.abs(r),o)}i.needsUpdate=!0}function fh(){const[n,e]=$t(256,256),t=wt(91021);e.fillStyle="#c8c2b4",e.fillRect(0,0,256,256);const i=32;for(let r=0;r*i<256;r++){const o=r%2*32;for(let a=-64+o;a<256;a+=64){const c=150+t()*36;e.fillStyle=`rgb(${c},${Math.floor(c*.62)},${Math.floor(c*.48)})`,bu(e,a+2,r*i+2,60,i-4,3),e.fill(),e.fillStyle=`rgba(0,0,0,${.04+t()*.07})`,e.fillRect(a+2,r*i+i-8,60,4)}}const s=nn(n);return s.wrapS=kt,s.wrapT=kt,s}function _x(){const[n,e]=$t(256,256),t=wt(4477);e.fillStyle="#d6cab2",e.fillRect(0,0,256,256);for(let s=0;s<70;s++){const r=t()*256,o=.08+t()*.18;e.strokeStyle=t()>.5?`rgba(142,112,74,${o})`:`rgba(240,232,212,${o})`,e.lineWidth=.8+t()*2.2,e.beginPath(),e.moveTo(r,-4);let a=r;for(let c=0;c<260;c+=34)a+=(t()-.5)*6,e.lineTo(a,c);e.stroke()}for(let s=0;s<260;s+=52)e.fillStyle="rgba(90,66,40,0.3)",e.fillRect(s,0,2,256);const i=nn(n);return i.wrapS=kt,i.wrapT=kt,i}const Cu=600,Ru=520,Gc=`
#define CS_CLOUD_H ${Cu.toFixed(1)}
#define CS_CLOUD_SCALE ${Ru.toFixed(1)}

float cshash(vec2 p){ p = fract(p * vec2(123.34, 345.45)); p += dot(p, p + 34.345); return fract(p.x * p.y); }
float csnoise(vec2 p){
  vec2 i = floor(p); vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = cshash(i); float b = cshash(i + vec2(1.0, 0.0));
  float c = cshash(i + vec2(0.0, 1.0)); float d = cshash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
float csfbm(vec2 p){
  float v = 0.0; float a = 0.5;
  for (int k = 0; k < 4; k++){ v += a * csnoise(p); p = p * 2.03 + 17.0; a *= 0.5; }
  return v;
}

/** Deriva del viento en unidades del campo (misma dirección que el pasto). */
vec2 csWind(float t){
  return normalize(vec2(0.82, 0.44)) * t * 0.0115;
}

/**
 * Cobertura de nubes en el punto q del plano (coordenadas ya escaladas).
 * "soft" controla la suavidad del borde (0.14 nube nítida, ~0.3 penumbra).
 */
float cloudField(vec2 q, float t, float soft){
  vec2 p = q + csWind(t);
  float mask = csfbm(p * 0.18 + 11.7);
  float maskSm = smoothstep(0.34, 0.66, mask);
  // Evolución: fundido continuo entre dos campos desfasados.
  float ev = smoothstep(0.0, 1.0, abs(fract(t * 0.004) * 2.0 - 1.0));
  float n = mix(csfbm(p), csfbm(p + 61.7), ev);
  float thr = mix(0.72, 0.42, maskSm);
  return smoothstep(thr, thr + soft, n);
}

/** Sombra de nube (0 = despejado, 1 = sombra plena) sobre un punto del mundo. */
float cloudShadowAt(vec2 worldXZ, float worldY, vec3 sunDir, float t){
  vec2 q = (worldXZ + sunDir.xz / max(sunDir.y, 0.2) * (CS_CLOUD_H - worldY)) / CS_CLOUD_SCALE;
  return cloudField(q, t, 0.3);
}
`,Kt={uTime:{value:0},uPlayer:{value:new oe(0,0)},uSunDir:{value:new R(.45,.55,.55).normalize()},uDay:{value:1}},as=6,Kn=It/as,wx=64,Ex=16,Tx=165,ph=5.5;async function bx(){const e=await(await fetch("./models/relief.bin")).arrayBuffer(),t=new DataView(e),i=t.getUint16(0,!0),s=t.getUint16(2,!0),r=new bc(new Uint8Array(e,4,i*s),i,s,Ao,Ht);return r.wrapS=$n,r.wrapT=$n,r.magFilter=zt,r.minFilter=zt,r.needsUpdate=!0,r}async function Cx(n){const e=new vp,t="./",[i,s,r]=await Promise.all([bx(),e.loadAsync(`${t}textures/rock_albedo.jpg`),e.loadAsync(`${t}textures/rock_normal.jpg`)]);s.colorSpace=ot;for(const d of[s,r])d.wrapS=$n,d.wrapT=$n,d.anisotropy=8;r.repeat.set(It/ph,It/ph);const o=new Ve({color:16777215,roughness:.96,metalness:0,normalMap:r});o.onBeforeCompile=d=>{d.uniforms.uField={value:n.texture},d.uniforms.uWorld={value:It},d.uniforms.uDetail={value:px()},d.uniforms.uRockAlbedo={value:s},d.uniforms.uTime=Kt.uTime,d.uniforms.uSunDir=Kt.uSunDir,d.uniforms.uRelief={value:i},d.vertexShader=d.vertexShader.replace("#include <common>",`#include <common>
        varying vec3 vTWPos;
        varying vec3 vTWNorm;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vTWPos = position;
        vTWNorm = normal;`),d.fragmentShader=d.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vTWPos;
        varying vec3 vTWNorm;
        uniform sampler2D uField;
        uniform sampler2D uDetail;
        uniform sampler2D uRockAlbedo;
        uniform float uWorld;
        uniform float uTime;
        uniform vec3 uSunDir;
        uniform sampler2D uRelief;
        ${Gc}
        float thash(vec2 p){ p = fract(p * vec2(123.34, 345.45)); p += dot(p, p + 34.345); return fract(p.x * p.y); }
        float tnoise(vec2 p){
          vec2 i = floor(p); vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          float a = thash(i); float b = thash(i + vec2(1.0, 0.0));
          float c = thash(i + vec2(0.0, 1.0)); float d = thash(i + vec2(1.0, 1.0));
          return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
        }
        float tfbm(vec2 p){
          float v = 0.0; float a = 0.5;
          for (int k = 0; k < 4; k++){ v += a * tnoise(p); p *= 2.03; a *= 0.5; }
          return v;
        }`).replace("#include <map_fragment>",`#include <map_fragment>
        vec2 wxz = vTWPos.xz;
        float n1 = tfbm(wxz * 0.016);
        float n2 = tfbm(wxz * 0.11 + 7.3);
        float n3 = tnoise(wxz * 1.7);

        // Pasto: parches verdes y amarillentos secos.
        vec3 grassA = vec3(0.062, 0.130, 0.020);
        vec3 grassB = vec3(0.225, 0.245, 0.052);
        float dry = clamp(n1 * 2.2 - 0.6 + (n2 - 0.5) * 0.9, 0.0, 1.0);
        vec3 gcol = mix(grassA, grassB, dry);
        gcol *= 0.72 + 0.42 * n3;
        gcol *= 0.9 + 0.2 * tnoise(wxz * 0.6);

        vec4 fld = texture2D(uField, wxz / uWorld + 0.5);
        float gmask = fld.g;
        vec3 nrm = normalize(vTWNorm);
        float slope = 1.0 - nrm.y;

        // El pasto del cerro se seca y amarillea ligeramente con la altura.
        gcol = mix(gcol, gcol * vec3(1.3, 1.05, 0.5), smoothstep(20.0, 55.0, vTWPos.y) * 0.35);

        // Suelo desnudo: material rocoso fotogramétrico (Rockwall), con
        // albedo, normal map y relieve horneado compartiendo las MISMAS UVs
        // para que color y relieve correspondan.
        vec3 stone = texture2D(uRockAlbedo, vNormalMapUv).rgb;
        float flatW = smoothstep(0.62, 0.25, slope);
        // Transición firme pasto->tierra: evita piedras teñidas de verde.
        float gDirtW = smoothstep(0.3, 0.72, 1.0 - gmask);
        float gBumpMask = clamp(gDirtW * flatW * 1.5, 0.08, 1.0);
        // Relieve horneado (Rockwall.obj): hondonadas más oscuras.
        float gRelief = texture2D(uRelief, vNormalMapUv).r;
        vec3 bare = stone * (0.7 + 0.5 * n2);
        bare *= 0.72 + 0.46 * gRelief;
        // Más oscuro y húmedo abajo; claro y polvoriento en el cerro.
        bare *= mix(vec3(0.82, 0.74, 0.62), vec3(1.12, 1.04, 0.88), smoothstep(14.0, 36.0, vTWPos.y));
        vec3 col = mix(gcol, bare, gDirtW * flatW);

        // Roca gris sólo en cortes casi verticales (cárcavas y taludes).
        vec3 rock = vec3(0.168, 0.161, 0.152) * (0.7 + 0.55 * tfbm(wxz * 0.05 + vTWPos.y * 0.09));
        float rockW = smoothstep(0.62, 0.86, slope + (n2 - 0.5) * 0.08);
        col = mix(col, rock, rockW);

        col *= 0.9 + 0.2 * tnoise(wxz * 0.43);

        // Grano de detalle en dos escalas (fino ~2 m y macro ~17 m).
        float det1 = texture2D(uDetail, wxz * 0.48).r;
        float det2 = texture2D(uDetail, wxz * 0.058 + 0.37).r;
        col *= 0.70 + 0.55 * det1;
        col *= 0.80 + 0.36 * det2;

        // Oclusión falsa: el suelo bajo el pasto denso queda en penumbra.
        col *= 1.0 - gmask * 0.28;

        // Sombras de las nubes deslizándose sobre el mundo.
        col *= 1.0 - cloudShadowAt(vTWPos.xz, vTWPos.y, uSunDir, uTime) * 0.42;

        diffuseColor.rgb = col;`).replace("#include <normal_fragment_maps>",`#ifdef USE_NORMALMAP
        // Normal map fotogramétrico sólo donde hay tierra desnuda: la
        // intensidad se enmascara para que el pasto conserve su normal.
        mat3 gTbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
        vec3 gMapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
        gMapN.xy *= normalScale * gBumpMask;
        normal = normalize( gTbn * gMapN );
        #endif`)};const a=new yt,c=[],l=[],h=[];for(let d=0;d<as;d++)for(let g=0;g<as;g++){const v=-It/2+g*Kn,m=-It/2+d*Kn;h.push({x:v+Kn/2,z:m+Kn/2}),c.push(mh(n,o,v,m,wx)),l.push(mh(n,o,v,m,Ex)),a.add(c[c.length-1],l[l.length-1])}return{group:a,update:d=>{for(let g=0;g<h.length;g++){const v=h[g],m=Math.hypot(v.x-d.x,v.z-d.z)<Tx;c[g].visible=m,l[g].visible=!m}},rebuildAt:(d,g,v)=>{const m=Kn,p=Math.max(0,Math.floor((d-v+It/2)/m)),x=Math.min(as-1,Math.floor((d+v+It/2)/m)),A=Math.max(0,Math.floor((g-v+It/2)/m)),M=Math.min(as-1,Math.floor((g+v+It/2)/m));for(let C=A;C<=M;C++)for(let T=p;T<=x;T++){const P=C*as+T;uc(c[P],n),uc(l[P],n)}}}}function mh(n,e,t,i,s){const r=new Oi(Kn,Kn,s,s);r.rotateX(-Math.PI/2),r.translate(t+Kn/2,0,i+Kn/2);const o=new le(r,e);return o.receiveShadow=!0,o.castShadow=!1,o.matrixAutoUpdate=!1,uc(o,n),o}function uc(n,e){const t=n.geometry,i=t.attributes.position,s=t.attributes.normal,r=1.2;for(let o=0;o<i.count;o++){const a=i.getX(o),c=i.getZ(o);i.setY(o,e.sampleHeight(a,c));const l=(e.sampleHeight(a+r,c)-e.sampleHeight(a-r,c))/(2*r),h=(e.sampleHeight(a,c+r)-e.sampleHeight(a,c-r))/(2*r),u=1/Math.hypot(l,1,h);s.setXYZ(o,-l*u,u,-h*u)}i.needsUpdate=!0,s.needsUpdate=!0,t.computeBoundingSphere()}class lr extends le{constructor(){const e=lr.SkyShader,t=new Ft({name:e.name,uniforms:nu.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Ot,depthWrite:!1});super(new xe(1,1,1),t),this.isSky=!0}}lr.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new R},up:{value:new R(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const Rx=480;class Dx{constructor(e,t,i){B(this,"sunDir");B(this,"sun");B(this,"sunMesh");B(this,"renderer");B(this,"scene");B(this,"sky");B(this,"shadowExtent",75);B(this,"clouds");B(this,"timeOfDay",.38);B(this,"moonDir",new R);B(this,"moon");B(this,"moonGlow");B(this,"starsBright");B(this,"starsDim");B(this,"envDay");B(this,"envNight");B(this,"envIsNight",!1);B(this,"sunColor",new Re);B(this,"moonColor",new Re(9677004));B(this,"dayFog",new Re(13032946));B(this,"duskFog",new Re(14196844));B(this,"nightFog",new Re(725794));B(this,"tmpFog",new Re);B(this,"nightMats",[]);B(this,"nightLights",[]);B(this,"activeLightDir",new R);B(this,"nightF",0);this.renderer=e,this.scene=t;const s=new lr;s.scale.setScalar(45e3);const r=s.material.uniforms;r.turbidity.value=2.6,r.rayleigh.value=1.3,r.mieCoefficient.value=.0042,r.mieDirectionalG.value=.82,this.sky=s,this.sunDir=new R(.45,.72,.35).normalize();const o=new cc(e);this.envDay=this.bakeEnv(o,46),this.envNight=this.bakeEnv(o,-22),t.environment=this.envDay,t.environmentIntensity=.45,o.dispose(),r.sunPosition.value.copy(this.sunDir),t.add(s),this.sunMesh=new le(new Jt(34,16,12),new Ii({color:16774089,fog:!1})),this.sunMesh.frustumCulled=!1,t.add(this.sunMesh),this.moon=new le(new Jt(23,18,14),new Ii({color:15265268,fog:!1})),this.moon.frustumCulled=!1,t.add(this.moon),this.moonGlow=new fo(new ir({map:cr(),color:12570856,transparent:!0,opacity:.4,depthWrite:!1,fog:!1})),this.moonGlow.scale.setScalar(130),t.add(this.moonGlow),this.createStars(),this.createClouds(t),t.fog=new Tc(13032946,.0012);const a=new Sp(16773594,3.6);a.castShadow=!0,a.shadow.mapSize.set(i,i);const c=this.shadowExtent;a.shadow.camera.left=-c,a.shadow.camera.right=c,a.shadow.camera.top=c,a.shadow.camera.bottom=-c,a.shadow.camera.near=1,a.shadow.camera.far=450,a.shadow.camera.updateProjectionMatrix(),a.shadow.bias=-25e-5,a.shadow.normalBias=.15,t.add(a),t.add(a.target),this.sun=a,this.updateAstros(0)}bakeEnv(e,t){const i=new lr;i.scale.setScalar(45e3);const s=i.material.uniforms;s.turbidity.value=2.6,s.rayleigh.value=1.3,s.mieCoefficient.value=.0042,s.mieDirectionalG.value=.82;const r=ze.degToRad(t),o=ze.degToRad(90);s.sunPosition.value.setFromSphericalCoords(1,Math.PI/2-r,o);const a=new nr;a.add(i);const c=e.fromScene(a);return i.geometry.dispose(),i.material.dispose(),c.texture}createStars(){const e=(t,i,s)=>{const r=wt(771+t),o=new Float32Array(t*3),a=new Float32Array(t*3),c=new Re;for(let f=0;f<t;f++){const d=r()*Math.PI*2,g=Math.acos(1-r()*.92),v=1650;o[f*3]=Math.sin(g)*Math.cos(d)*v,o[f*3+1]=Math.cos(g)*v,o[f*3+2]=Math.sin(g)*Math.sin(d)*v;const m=r();m>.85?c.setRGB(1,.82,.62):m>.6?c.setRGB(.72,.82,1):c.setRGB(1,1,1),a[f*3]=c.r,a[f*3+1]=c.g,a[f*3+2]=c.b}const l=new Dt;l.setAttribute("position",new Bt(o,3)),l.setAttribute("color",new Bt(a,3));const h=new Rc({size:i,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:s,depthWrite:!1,fog:!1}),u=new au(l,h);return u.frustumCulled=!1,u.visible=!1,this.scene.add(u),u};this.starsBright=e(320,2.4,.95),this.starsDim=e(900,1.25,.7)}createClouds(e){const t=new Jt(1750,48,20,0,Math.PI*2,0,Math.PI*.56),i=new Ft({transparent:!0,depthWrite:!1,side:Ot,uniforms:{uTime:Kt.uTime,uSunDir:Kt.uSunDir,uDay:Kt.uDay},vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,fragmentShader:`
        uniform float uTime;
        uniform vec3 uSunDir;
        uniform float uDay;
        varying vec3 vDir;

        ${Gc}

        void main() {
          vec3 dir = normalize(vDir);
          float hor = smoothstep(0.03, 0.18, dir.y);
          if (hor <= 0.002) discard;

          float tPlane = (${Cu.toFixed(1)} - cameraPosition.y) / max(dir.y, 0.035);
          vec2 q = (cameraPosition.xz + dir.xz * tPlane) / ${Ru.toFixed(1)};

          float alpha = cloudField(q, uTime, 0.14);
          alpha *= 0.8 + 0.35 * csnoise((q + csWind(uTime)) * 3.3 + 5.0);
          if (alpha <= 0.004) discard;

          vec2 sunOffs = normalize(uSunDir.xz + vec2(1e-4)) * 0.14;
          float dens = cloudField(q, uTime, 0.35);
          float densSun = cloudField(q + sunOffs, uTime, 0.35);
          float lit = clamp(0.95 + (dens - densSun) * 1.5, 0.7, 1.3);
          vec3 col = mix(vec3(0.62, 0.66, 0.74), vec3(1.12, 1.1, 1.05), clamp(lit, 0.0, 1.0));
          col += vec3(1.0, 0.95, 0.85) * max(lit - 1.0, 0.0);

          // Borde plateado alrededor del sol.
          col += vec3(0.35, 0.3, 0.22) * pow(max(dot(dir, uSunDir), 0.0), 12.0) * alpha;

          // Noche: las nubes se apagan y azulean a la luz de la luna.
          col *= mix(vec3(0.10, 0.13, 0.22), vec3(1.0), uDay);

          col = mix(vec3(0.85, 0.9, 0.97) * mix(0.35, 1.0, uDay), col, hor);

          gl_FragColor = vec4(col, alpha * hor * 0.94);
        }`});i.fog=!1,this.clouds=new le(t,i),this.clouds.frustumCulled=!1,this.clouds.renderOrder=1,e.add(this.clouds)}get time(){return this.timeOfDay}setTimeOfDay(e){this.timeOfDay=(e%1+1)%1,this.updateAstros(0)}get nightFactor(){return this.nightF}registerNightMaterial(e){this.nightMats.push({mat:e,base:e.emissiveIntensity})}registerNightLight(e){this.nightLights.push({light:e,base:e.intensity})}updateCycle(e,t){return t&&(this.timeOfDay=(this.timeOfDay+e/Rx)%1),this.updateAstros(e)}updateAstros(e){const t=this.timeOfDay,i=Math.sin((t-.25)*Math.PI*2)*ze.degToRad(62),s=(t-.5)*Math.PI*2+Math.PI;this.sunDir.setFromSphericalCoords(1,Math.PI/2-i,s).normalize(),this.moonDir.setFromSphericalCoords(1,Math.PI/2-Math.sin((t+.5-.25)*Math.PI*2)*ze.degToRad(48),s+Math.PI*.92).normalize();const r=ze.radToDeg(i);this.nightF=ze.smoothstep(-r+4,0,10),this.sky.material.uniforms.sunPosition.value.copy(this.sunDir),Kt.uSunDir.value.copy(this.sunDir),Kt.uDay.value=1-this.nightF*.94;const o=r>-4;this.sunMesh.visible=o;const a=1-ze.clamp(Math.abs(r)/18,0,1);this.sunColor.setHex(16774089).lerp(new Re(16744255),a*.8),this.sunMesh.material.color.copy(this.sunColor);const c=this.nightF;this.moon.visible=c>.15,this.starsBright.visible=c>.08,this.starsDim.visible=c>.08,this.starsBright.material.opacity=.95*c,this.starsDim.material.opacity=.7*c*(.9+.1*Math.sin(Kt.uTime.value*1.7)),c<.5?(this.activeLightDir.copy(this.sunDir),this.sun.intensity=ze.lerp(3.6,.04,c/.5),this.sun.color.copy(this.sunColor).lerp(new Re(16751718),a*.5)):(this.activeLightDir.copy(this.moonDir),this.sun.intensity=ze.lerp(.04,.34,(c-.5)/.5),this.sun.color.copy(this.moonColor));const l=c>.55;l!==this.envIsNight&&(this.envIsNight=l,this.scene.environment=l?this.envNight:this.envDay),this.scene.environmentIntensity=ze.lerp(.5,.07,c),this.tmpFog.copy(this.dayFog).lerp(this.nightFog,c),this.tmpFog.lerp(this.duskFog,a*(1-c)*.85),this.scene.fog.color.copy(this.tmpFog),this.scene.fog.density=.0012+c*7e-4;const h=ze.smoothstep(c,.35,.8);for(const v of this.nightMats)v.mat.emissiveIntensity=v.base*(.04+h);for(const v of this.nightLights)v.light.intensity=v.base*h;const u=t*24,f=Math.floor(u),d=Math.floor((u-f)*60),g=`${String(f).padStart(2,"0")}:${String(d).padStart(2,"0")}`;return{time:t,night:c,clock:g}}followPlayer(e){this.clouds.position.set(e.x,0,e.z),this.sunMesh.position.copy(e).addScaledVector(this.sunDir,1500),this.moon.position.copy(e).addScaledVector(this.moonDir,1500),this.moonGlow.position.copy(this.moon.position),this.moonGlow.material.opacity=.42*this.nightF,this.starsBright.position.copy(e),this.starsDim.position.copy(e);const t=this.shadowExtent*2/this.sun.shadow.mapSize.x,i=this.activeLightDir,s=Math.abs(i.y)>.95?new R(1,0,0):new R(0,1,0),r=new R().crossVectors(i,s).normalize(),o=new R().crossVectors(r,i).normalize(),a=Math.round(e.dot(r)/t)*t,c=Math.round(e.dot(o)/t)*t,l=e.dot(i),h=new R().addScaledVector(r,a).addScaledVector(o,c).addScaledVector(i,l);this.sun.target.position.copy(h),this.sun.position.copy(h).addScaledVector(i,220)}}function Px(n,e){const r=[];for(let g=0;g<3;g++){const v=new Oi(.8,.66,1,2);v.translate(0,.33,0),v.rotateY(g*Math.PI/3),r.push(v)}const o=Ix(r),a=new Ve({map:dx(),alphaTest:.32,side:Zt,roughness:.95,metalness:0});a.onBeforeCompile=g=>{g.uniforms.uTime=Kt.uTime,g.uniforms.uPlayer=Kt.uPlayer,g.uniforms.uSunDir=Kt.uSunDir,g.uniforms.uField={value:n.texture},g.uniforms.uWorld={value:It},g.uniforms.uHalf={value:52},g.uniforms.uFadeStart={value:26},g.uniforms.uFadeEnd={value:48},g.vertexShader=g.vertexShader.replace("#include <common>",`#include <common>
        uniform float uTime;
        uniform vec2 uPlayer;
        uniform sampler2D uField;
        uniform float uWorld;
        uniform float uHalf;
        uniform float uFadeStart;
        uniform float uFadeEnd;
        varying vec3 vGWPos;
        float ghash(vec2 p){ p = fract(p * vec2(123.34, 345.45)); p += dot(p, p + 34.345); return fract(p.x * p.y); }`).replace("#include <project_vertex>",`
        mat3 gRS = mat3(instanceMatrix);
        vec2 gCell = instanceMatrix[3].xz;

        // Wrap toroidal alrededor del jugador.
        vec2 gRel = mod(gCell - uPlayer + uHalf, 2.0 * uHalf) - uHalf;
        vec2 gXZ = uPlayer + gRel;

        vec4 gFld = texture2D(uField, gXZ / uWorld + 0.5);
        float gH = gFld.r;
        float gMask = gFld.g;
        float gRnd = ghash(gCell);

        // Sin pasto en sendero/roca; transición suave con umbral aleatorio.
        float gScale = smoothstep(0.2, 0.7, gMask + (gRnd - 0.5) * 0.25);

        // Lejos de la cámara la mata se encoge hasta hundirse en el suelo:
        // el pasto aparece "creciendo" en vez de hacer pop.
        float gDistCam = distance(cameraPosition.xz, gXZ);
        gScale *= 1.0 - smoothstep(uFadeStart, uFadeEnd, gDistCam + (gRnd - 0.5) * 12.0);

        vec3 gP = gRS * (transformed * gScale);

        // Viento: brisa amplia + agitación fina, curvado desde la base.
        float hf = clamp(position.y / 0.66, 0.0, 1.0);
        hf *= hf;
        float t = uTime;
        float w1 = sin(t * 1.35 + gXZ.x * 0.13 + gXZ.y * 0.09);
        float w2 = sin(t * 2.8 + gXZ.x * 0.8 + gXZ.y * 0.6 + gRnd * 6.283) * 0.5;
        float gust = 0.6 + 0.4 * sin(t * 0.37 + gXZ.x * 0.021 + gXZ.y * 0.017);
        vec2 sway = normalize(vec2(0.82, 0.44)) * (w1 + w2) * 0.15 * gust * hf * (0.6 + 0.75 * gRnd);

        vec3 gWP = vec3(gXZ.x + gP.x + sway.x, gH + gP.y - 0.035, gXZ.y + gP.z + sway.y);
        vGWPos = gWP;

        vec4 mvPosition = viewMatrix * vec4(gWP, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        `).replace("#include <worldpos_vertex>","vec4 worldPosition = vec4( vGWPos, 1.0 );"),g.fragmentShader=g.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vGWPos;
        uniform vec3 uSunDir;
        uniform float uFadeStart;
        uniform float uFadeEnd;
        uniform float uTime;
        ${Gc}`).replace("#include <map_fragment>",`#include <map_fragment>
        float gDist = distance(cameraPosition, vGWPos);
        diffuseColor.a *= 1.0 - smoothstep(uFadeStart, uFadeEnd * 1.04, gDist);
        // Sombras de las nubes (mismo campo que el domo del cielo).
        diffuseColor.rgb *= 1.0 - cloudShadowAt(vGWPos.xz, vGWPos.y, uSunDir, uTime) * 0.42;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        // Translucidez falsa: el pasto brilla a contraluz del sol.
        vec3 gToFrag = normalize(vGWPos - cameraPosition);
        float gBack = pow(clamp(dot(gToFrag, uSunDir), 0.0, 1.0), 3.0);
        totalEmissiveRadiance += diffuseColor.rgb * gBack * 0.7;`)};const c=new sr(o,a,e);c.frustumCulled=!1,c.castShadow=!1,c.receiveShadow=!0;const l=wt(90210),h=new lt,u=new Et,f=new R(0,1,0),d=new Re;for(let g=0;g<e;g++){const v=(l()*2-1)*52,m=(l()*2-1)*52,p=.8+l()*.6;u.setFromAxisAngle(f,l()*Math.PI*2),h.compose(new R(v,0,m),u,new R(p,p*(.85+l()*.35),p)),c.setMatrixAt(g,h);const x=ze.clamp(gn(v*.03+3.7,m*.03+9.1,3,77)*1.8-.4,0,1);d.setRGB((.8+.3*x)*(.9+l()*.16),(.92+.1*x)*(.9+l()*.16),(.82-.3*x)*(.88+l()*.2)),c.setColorAt(g,d)}return c.instanceMatrix.needsUpdate=!0,c.instanceColor&&(c.instanceColor.needsUpdate=!0),c}function Ix(n){const e=[],t=[],i=[],s=[];let r=0;for(const a of n){const c=a.attributes.position,l=a.attributes.normal,h=a.attributes.uv;for(let f=0;f<c.count;f++)e.push(c.getX(f),c.getY(f),c.getZ(f)),t.push(l.getX(f),l.getY(f),l.getZ(f)),i.push(h.getX(f),h.getY(f));const u=a.index;for(let f=0;f<u.count;f++)s.push(u.getX(f)+r);r+=c.count,a.dispose()}const o=new Dt;return o.setAttribute("position",new at(e,3)),o.setAttribute("normal",new at(t,3)),o.setAttribute("uv",new at(i,2)),o.setIndex(s),o}const ps=new R(0,1,0);function gh(n){const e=wt(n.seed),t=[],i=[],s=[{origin:new R,quat:new Et,length:n.length[0],radius:n.trunkRadius,level:0}];for(;s.length>0;)Lx(s.shift(),n,e,s,t,i);return{branches:t,leaves:i,hasLeaves:n.leaves!==null}}function vh(n,e={}){const t=Fx(n.branches,Math.max(1,Math.floor(e.sectionStride??1)),e.segmentFactor??1),i=n.hasLeaves?Nx(n.leaves,Math.max(1,Math.floor(e.leafStride??1)),e.leafScale??1,e.singleBillboard??!1):null;return{trunk:t,leaves:i}}function Lx(n,e,t,i,s,r){const o=e.sections[n.level],a=n.length/o,c=e.taper[n.level],l=n.quat.clone(),h=n.origin.clone(),u=[];for(let d=0;d<=o;d++){let g=n.radius;d===o&&n.level===e.levels?g=.02:g*=1-c*(d/o),u.push({origin:h.clone(),quat:l.clone(),radius:g}),h.add(new R(0,a,0).applyQuaternion(l));const v=Math.max(1,1/Math.sqrt(Math.max(g,.01)))*e.gnarliness[n.level];l.multiply(new Et().setFromEuler(new un((t()*2-1)*v,0,(t()*2-1)*v)));const m=ps.clone().applyQuaternion(l),p=new R().crossVectors(m,ps),x=p.length();if(x>1e-6){p.divideScalar(x);const A=Math.atan2(x,m.dot(ps)),M=e.forceUp/Math.max(g,.02),C=Math.max(-A,Math.min(A,M));l.premultiply(new Et().setFromAxisAngle(p,C))}}s.push({sections:u,segments:e.segments[n.level]});const f=u[u.length-1];n.level<e.levels?(i.push({origin:f.origin.clone(),quat:f.quat.clone(),length:e.length[n.level+1],radius:f.radius,level:n.level+1}),Bx(n.level+1,u,e,t,i)):e.leaves&&(Iu(f.origin,f.quat,e,t,r),Ux(u,e,t,r))}function Du(n,e){const t=Math.min(Math.floor(e*(n.length-1)),n.length-2),i=e*(n.length-1)-t,s=n[t],r=n[t+1];return{origin:new R().lerpVectors(s.origin,r.origin,i),quat:s.quat.clone().slerp(r.quat,i),radius:s.radius*(1-i)+r.radius*i}}function Pu(n,e){const t=Array.from({length:n},(i,s)=>s);for(let i=n-1;i>0;i--){const s=Math.floor(e()*(i+1));[t[i],t[s]]=[t[s],t[i]]}return t}function Bx(n,e,t,i,s){const r=t.children[n-1],o=t.start[n],a=(1-o)/r,c=i(),l=Pu(r,i),h=ze.degToRad(t.angle[n]);for(let u=0;u<r;u++){const f=o+(u+i())*a,d=Du(e,Math.min(f,1)),g=2*Math.PI*(c+(l[u]+i()-.5)/r),v=d.quat.clone().multiply(new Et().setFromAxisAngle(ps,g)).multiply(new Et().setFromAxisAngle(new R(1,0,0),h));s.push({origin:d.origin,quat:v,length:t.length[n]*(.7+i()*.6),radius:d.radius*t.radiusFactor[n],level:n})}}function Ux(n,e,t,i){const s=e.leaves.countPerTip,r=1/s,o=t(),a=Pu(s,t),c=ze.degToRad(e.leaves.angleDeg);for(let l=0;l<s;l++){const h=Math.min((l+t())*r,1),u=Du(n,h),f=2*Math.PI*(o+(a[l]+t()-.5)/s),d=u.quat.clone().multiply(new Et().setFromAxisAngle(ps,f)).multiply(new Et().setFromAxisAngle(new R(1,0,0),c));Iu(u.origin,d,e,t,i)}}function Iu(n,e,t,i,s){const r=t.leaves.sizeVariance;s.push({origin:n.clone(),quat:e.clone(),size:t.leaves.size*(1+(i()*2-1)*r)})}function Fx(n,e,t){const i=[],s=[],r=[],o=[];for(const a of n){const c=[];for(let f=0;f<a.sections.length;f+=e)c.push(a.sections[f]);(a.sections.length-1)%e!==0&&c.push(a.sections[a.sections.length-1]);const l=Math.max(3,Math.round(a.segments*t)),h=i.length/3,u=l+1;for(let f=0;f<c.length;f++){const d=c[f];for(let g=0;g<=l;g++){const v=2*Math.PI*(g%l)/l,m=new R(Math.cos(v),0,Math.sin(v)).applyQuaternion(d.quat);i.push(d.origin.x+m.x*d.radius,d.origin.y+m.y*d.radius,d.origin.z+m.z*d.radius),s.push(m.x,m.y,m.z),r.push(g/l,f%2)}}for(let f=0;f<c.length-1;f++)for(let d=0;d<l;d++){const g=h+f*u+d,v=h+f*u+d+1,m=g+u,p=v+u;o.push(g,m,v,v,m,p)}}return Lu(i,s,r,o)}function Nx(n,e,t,i){const s=[],r=[],o=[],a=[],c=i?[0]:[0,Math.PI/2],l=new R;for(let h=0;h<n.length;h+=e){const u=n[h],f=u.size*t,d=u.size*t;for(const g of c){const v=s.length/3,m=new Et().copy(u.quat).multiply(new Et().setFromAxisAngle(ps,g)),p=new R(0,0,1).applyQuaternion(m),x=[[-f/2,d],[-f/2,0],[f/2,0],[f/2,d]];for(const[A,M]of x){l.set(A,M,0).applyQuaternion(m).add(u.origin),s.push(l.x,l.y,l.z);const C=new R().copy(p).add(l.clone().sub(u.origin).normalize()).normalize();r.push(C.x,C.y,C.z)}o.push(0,1,0,0,1,0,1,1),a.push(v,v+1,v+2,v,v+2,v+3)}}return Lu(s,r,o,a)}function Lu(n,e,t,i){const s=new Dt;return s.setAttribute("position",new at(n,3)),s.setAttribute("normal",new at(e,3)),s.setAttribute("uv",new at(t,2)),s.setIndex(i),s.computeBoundingSphere(),s}const Ox=3,zx=150,ai=[{dist:52,detail:{},castShadow:!0},{dist:115,detail:{sectionStride:2,segmentFactor:.65,leafStride:2,leafScale:1.25},castShadow:!1},{dist:1/0,detail:{sectionStride:3,segmentFactor:.4,leafStride:3,leafScale:1.4,singleBillboard:!0},castShadow:!1}];function kx(n,e){return{seed:n,levels:3,length:[8.5+e()*3,3.2+e()*1.2,2.6+e()*.8,1.6+e()*.5],trunkRadius:.3+e()*.12,radiusFactor:[1,.8,.68,.6],angle:[0,48+e()*14,54+e()*12,32+e()*10],children:[4,3,3],start:[0,.38+e()*.12,.08,.12],taper:[.7,.52,.62,.72],gnarliness:[.045,.11,.18,.11],sections:[7,5,3,2],segments:[6,5,4,3],forceUp:.011+e()*.005,leaves:{countPerTip:6,size:1.15+e()*.35,sizeVariance:.45,angleDeg:38+e()*10}}}function Hx(n){return{seed:n,levels:3,length:[8.5,2.6,1.9,1.2],trunkRadius:.23,radiusFactor:[1,.7,.62,.55],angle:[0,52,56,46],children:[3,3,2],start:[0,.45,.18,.2],taper:[.78,.68,.7,.8],gnarliness:[.11,.28,.34,.3],sections:[6,4,3,2],segments:[6,4,3,3],forceUp:.005,leaves:null}}function Gx(n,e){const t=new yt,i=[],s=wt(5150),r=new Ve({map:hc(),roughness:.92,metalness:0}),o=new Ve({map:hc(),color:10129798,roughness:.95,metalness:0}),a=new Ve({map:fx(),alphaTest:.4,side:Zt,roughness:.85,metalness:0});a.onBeforeCompile=L=>{L.uniforms.uTime=Kt.uTime,L.vertexShader=L.vertexShader.replace("#include <common>",`#include <common>
        uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        {
          #ifdef USE_INSTANCING
            vec3 fIp = instanceMatrix[3].xyz;
          #else
            vec3 fIp = vec3(0.0);
          #endif
          float fPh = fIp.x * 0.31 + fIp.z * 0.27;
          float fSw = sin(uTime * 1.05 + fPh) + 0.5 * sin(uTime * 2.3 + fPh * 1.7);
          float fAmp = 0.06 * smoothstep(1.5, 7.0, transformed.y);
          transformed.x += fSw * fAmp * 0.9;
          transformed.z += fSw * fAmp * 0.45;
          transformed.x += sin(uTime * 3.1 + fPh + position.y * 2.1) * 0.02 * (0.4 + 0.6 * uv.y);
        }`),L.fragmentShader=L.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      totalEmissiveRadiance += diffuseColor.rgb * 0.12;`)};const c=[];for(let L=0;L<3;L++){const U=wt(2e3+L*517),z=kx(3e3+L*131,U),N=gh(z);c.push({trunkRadius:z.trunkRadius,lods:ai.map(F=>vh(N,F.detail))})}{const L=Hx(4242),U=gh(L);c.push({trunkRadius:L.trunkRadius,lods:ai.map(z=>vh(U,z.detail))})}const l=[],h=[[],[],[],[]],u=new Et,f=new R(0,1,0),d=(L,U,z)=>{const N=It/2-15;if(Math.abs(L)>N||Math.abs(U)>N||n.sampleHeight(L,U)>72||n.sampleSlope(L,U)>.5||n.distToPath(L,U)<5||n.sampleMask(L,U)<.2)return!1;const W=L-0,k=U-140;if(W*W+k*k<225)return!1;const $=L-Di.x,ne=U-Di.z;if($*$+ne*ne<Di.r*Di.r||Math.abs(L-$e.x)<$e.half+3&&Math.abs(U-$e.z)<$e.half+3)return!1;for(const[ge,Pe,qe]of l){const it=L-ge,Ke=U-Pe,ee=Math.max(z,qe);if(it*it+Ke*Ke<ee*ee)return!1}return!0},g=(L,U,z,N,F)=>{const W=n.sampleHeight(U,z)-.15;u.setFromAxisAngle(f,s()*Math.PI*2);const k=new lt().compose(new R(U,W,z),u,new R(N,N,N)),$=s(),ne=new Re(.85+$*.3,.9+s()*.18,.8+s()*.25),ge=c[L].trunkRadius,Pe={x:U,z,r:Math.max(.4,ge*N*1.4)};h[L].push({matrix:k,color:ne,x:U,z,lodBias:(s()-.5)*14,hidden:!1,collider:Pe,variant:L,scale:N}),l.push([U,z,F]),i.push(Pe)};g(0,-22,102,1.65,6),g(1,26,52,1.45,6),g(3,-4,62,1.15,6),g(2,17,118,1.35,6);let v=0,m=0;const p=150;for(;m<p&&v<6e3;){v++;const L=(s()*2-1)*(It/2-20),U=(s()*2-1)*(It/2-20),z=gn(L*.008+50,U*.008+20,3,91),N=ze.clamp((170-U)/300,.25,1),F=n.sampleHeight(L,U),W=1-ze.clamp((F-28)/40,0,1)*.75;if(s()>z*1.4*N*W||!d(L,U,7))continue;const $=s()<.14?3:Math.floor(s()*3);let ne=.8+s()*.75;F>35&&(ne*=.65),g($,L,U,ne,7),m++}const x=[];for(let L=0;L<4;L++){const U=h[L],z=c[L],N=L<3?r:o,F=[],W=[];for(let k=0;k<ai.length;k++){const $=new sr(z.lods[k].trunk,N,U.length);if($.castShadow=ai[k].castShadow,$.receiveShadow=!0,$.frustumCulled=!1,$.count=0,t.add($),F.push($),z.lods[k].leaves){const ne=new sr(z.lods[k].leaves,a,U.length);ne.castShadow=ai[k].castShadow,ne.receiveShadow=!1,ne.frustumCulled=!1;for(let ge=0;ge<U.length;ge++)ne.setColorAt(ge,U[ge].color);ne.count=0,t.add(ne),W.push(ne)}else W.push(null)}x.push({placements:U,trunkLods:F,foliageLods:W})}const A=new R(1/0,0,1/0),M=[],C=[],T=[];let P=0;const E=L=>{for(const U of x){const z=[0,0,0];for(const N of U.placements){if(N.hidden)continue;const F=Math.hypot(N.x-L.x,N.z-L.z)+N.lodBias,W=F<ai[0].dist?0:F<ai[1].dist?1:2,k=z[W]++;U.trunkLods[W].setMatrixAt(k,N.matrix);const $=U.foliageLods[W];$&&($.setMatrixAt(k,N.matrix),$.setColorAt(k,N.color))}for(let N=0;N<ai.length;N++){const F=U.trunkLods[N];F.count=z[N],F.instanceMatrix.needsUpdate=!0;const W=U.foliageLods[N];W&&(W.count=z[N],W.instanceMatrix.needsUpdate=!0,W.instanceColor&&(W.instanceColor.needsUpdate=!0))}}},S=(L,U=0,z=0)=>{if(P=z,L.distanceToSquared(A)>=36&&(A.copy(L),E(L)),!(U<=0)){for(let N=M.length-1;N>=0;N--){const F=M[N];F.t+=U/1.35;const W=Math.min(F.t,1),k=W*W*(Math.PI/2-.12);if(F.group.setRotationFromAxisAngle(F.axis,k),!F.placed&&F.t>=.94){F.placed=!0;const $=new le(new pt(.32*F.placement.scale,.4*F.placement.scale,.55,9),F.placement.variant<3?r:o);$.position.set(F.placement.x,n.sampleHeight(F.placement.x,F.placement.z)+.18,F.placement.z),$.castShadow=!0,$.receiveShadow=!0,e.add($),F.placement.collider.r=.35;const ne=4+Math.floor(Math.random()*3);T.push({x:F.placement.x,z:F.placement.z,wood:ne}),C.push({placement:F.placement,stump:$,at:P+zx})}F.t>=1&&(e.remove(F.group),M.splice(N,1))}for(let N=C.length-1;N>=0;N--){const F=C[N];P<F.at||(F.placement.hidden=!1,F.placement.collider.r=Math.max(.4,c[F.placement.variant].trunkRadius*F.placement.scale*1.4),e.remove(F.stump),F.stump.geometry.dispose(),C.splice(N,1),E(A))}}},y=(L,U)=>{let z=null;for(const N of x)for(const F of N.placements){if(F.hidden)continue;const W=Math.hypot(F.x-L.x,F.z-L.z);W<U&&(!z||W<z.dist)&&(z={placement:F,dist:W})}return z},D=L=>{if(L.hidden)return;L.hidden=!0,E(A);const U=c[L.variant],z=new yt,N=new R,F=new Et,W=new R;L.matrix.decompose(N,F,W),z.position.copy(N),z.quaternion.copy(F),z.scale.copy(W);const k=new le(U.lods[0].trunk,L.variant<3?r:o);if(k.castShadow=!0,z.add(k),U.lods[0].leaves){const ge=new le(U.lods[0].leaves,a);z.add(ge)}const $=Math.random()*Math.PI*2,ne=new R(Math.cos($),0,-Math.sin($)).normalize();e.add(z),M.push({group:z,axis:ne,t:0,placed:!1,placement:L})};return e.add(t),{group:t,colliders:i,update:S,nearestTree:y,fellTree:D,fellEvents:T}}function Vx(n,e,t){const i=wt(31337),s=[];for(let f=0;f<2;f++){const d=new So(1,2),g=d.attributes.position,v=400+f*77;for(let x=0;x<g.count;x++){const A=new R(g.getX(x),g.getY(x),g.getZ(x)),M=gn(A.x*1.4+A.y*.9+v,A.z*1.4-A.y*.7,4,v);A.multiplyScalar(.75+M*.55),A.y*=.72,g.setXYZ(x,A.x,A.y,A.z)}d.computeVertexNormals();const m=d.attributes.normal,p=new Float32Array(g.count*3);for(let x=0;x<g.count;x++){const A=g.getX(x),M=g.getY(x),C=g.getZ(x),T=gn(A*3.1+v,C*3.1+M*2,3,v+5);let P=.15+T*.13,E=.147+T*.125,S=.14+T*.12;const y=Math.max(0,m.getY(x)),D=Math.pow(y,1.2)*(.45+.55*wu(A*2.2+v,C*2.2,v+9));P=P*(1-D)+.13*D,E=E*(1-D)+.21*D,S=S*(1-D)+.05*D,p[x*3]=P,p[x*3+1]=E,p[x*3+2]=S}d.setAttribute("color",new Bt(p,3)),s.push(d)}const r=new Ve({vertexColors:!0,roughness:.95,metalness:0}),o=[[],[]];o[0].push({x:-15,z:118,s:1.7,rot:.6}),o[1].push({x:-12.4,z:116.2,s:1,rot:2.4});let a=0,c=0;for(;a<26&&c<900;){c++;const f=(i()*2-1)*(It/2-25),d=(i()*2-1)*(It/2-25);if(n.sampleHeight(f,d)>60||n.distToPath(f,d)<2.5||Math.hypot(f-Di.x,d-Di.z)<Di.r-8)continue;const g=n.sampleSlope(f,d)>.3?1.6:.6;i()>.5*g||(o[Math.floor(i()*2)].push({x:f,z:d,s:.35+i()*1.3,rot:i()*Math.PI*2}),a++)}const l=new lt,h=new Et,u=new R(0,1,0);for(let f=0;f<2;f++){const d=o[f];if(!d.length)continue;const g=new sr(s[f],r,d.length);g.castShadow=!0,g.receiveShadow=!0;for(let v=0;v<d.length;v++){const m=d[v],p=n.sampleHeight(m.x,m.z)+m.s*.12;h.setFromAxisAngle(u,m.rot),l.compose(new R(m.x,p,m.z),h,new R(m.s,m.s,m.s)),g.setMatrixAt(v,l),m.s>.7&&t.push({x:m.x,z:m.z,r:m.s*.85})}g.instanceMatrix.needsUpdate=!0,e.add(g)}}function Wx(n,e,t){const i=new Ve({map:hc(),color:11576470,roughness:.95}),s=[],r=new pt(.28,.36,5.2,8,3);s.push({geo:r,x:-13,z:112,ry:.5,rz:Math.PI/2-.06});const o=new pt(.2,.26,3.6,7,2);s.push({geo:o,x:18,z:78,ry:2.1,rz:Math.PI/2+.1});const a=new pt(.34,.48,1.5,8,2);s.push({geo:a,x:-2.5,z:96,ry:0,rz:.12});for(const c of s){const l=new le(c.geo,i),h=n.sampleHeight(c.x,c.z);l.position.set(c.x,h+(c.rz>1?.32:.6),c.z),l.rotation.set(0,c.ry,c.rz),l.castShadow=!0,l.receiveShadow=!0,e.add(l),t.push({x:c.x,z:c.z,r:.6})}}class Xx{constructor(e){B(this,"points");B(this,"base");B(this,"phase");B(this,"count",350);B(this,"radius",22);const t=wt(2718),i=new Float32Array(this.count*3);this.base=new Float32Array(this.count*3),this.phase=new Float32Array(this.count);for(let o=0;o<this.count;o++)this.base[o*3]=(t()*2-1)*this.radius,this.base[o*3+1]=.3+t()*4.5,this.base[o*3+2]=(t()*2-1)*this.radius,this.phase[o]=t()*Math.PI*2;const s=new Dt;s.setAttribute("position",new Bt(i,3));const r=new Rc({map:cr(),size:.045,transparent:!0,opacity:.5,depthWrite:!1,sizeAttenuation:!0,color:16773836});this.points=new au(s,r),this.points.frustumCulled=!1,e.add(this.points)}update(e,t,i){const s=this.points.geometry.attributes.position,r=this.radius*2;for(let o=0;o<this.count;o++){const a=this.phase[o];let c=this.base[o*3]+Math.sin(e*.11+a)*3+e*.25,l=this.base[o*3+2]+Math.cos(e*.09+a*1.3)*3;c=((c-t.x+this.radius)%r+r)%r-this.radius+t.x,l=((l-t.z+this.radius)%r+r)%r-this.radius+t.z;const h=i.sampleHeight(c,l)+this.base[o*3+1]+Math.sin(e*.5+a*2.7)*.4;s.setXYZ(o,c,h,l)}s.needsUpdate=!0}}async function Yx(n,e,t){await Promise.all([Qx(n,e,t),Kx(n,e,t)]),Zx(n,e,t)}async function dc(n,e){const i=await(await fetch(`./models/${n}.bin`)).arrayBuffer(),s=new DataView(i),r=s.getUint32(0,!0),o=s.getUint32(4,!0),a=new Dt;return a.setAttribute("position",new Bt(new Float32Array(i,8,r*3),3)),a.setIndex(new Bt(new Uint32Array(i,8+r*12,o*3),1)),e&&a.computeVertexNormals(),a}const xh=98.4,qx=16;async function Qx(n,e,t){const i=await dc("efigie",!0),s=i.attributes.position.array,r=i.attributes.position.count,o=new Float32Array(r*2);for(let u=0;u<r;u++){const f=s[u*3],d=s[u*3+1],g=s[u*3+2];o[u*2]=Math.atan2(g,f)/(Math.PI*2)+.5,o[u*2+1]=d/xh}i.setAttribute("uv",new Bt(o,2));const a=mx();a.repeat.set(2,3);const c=new Ve({color:new Re(.014,.013,.016),roughness:.86,metalness:.05,emissive:new Re(1,.08,.04),emissiveMap:a,emissiveIntensity:1.1});c.envMapIntensity=.4,c.onBeforeCompile=u=>{u.uniforms.uTime=Kt.uTime,u.fragmentShader=u.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uTime;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        // Latido lento y siniestro de los glifos.
        totalEmissiveRadiance *= 0.55 + 0.45 * (0.5 + 0.5 * sin(uTime * 1.05));`)};const l=n.sampleHeight(ct.x,ct.z),h=new le(i,c);h.scale.setScalar(qx/xh),h.position.set(ct.x,l-.45,ct.z),h.castShadow=!0,h.receiveShadow=!0,e.add(h),t.push({x:ct.x,z:ct.z,r:2.9})}const Mh={crystal_a:43.4,crystal_b:33.3};async function Kx(n,e,t){const[i,s]=await Promise.all([dc("crystal_a",!1),dc("crystal_b",!1)]),r=new Ve({color:new Re(.05,.045,.062),metalness:.75,roughness:.24,flatShading:!0});r.envMapIntensity=1.1;const o=wt(31666),a=[],c=[],l=14,h=Math.atan2(-160-ct.z,-58-ct.x),u=new Et,f=new Et,d=new Et,g=new R(0,1,0);for(let v=0;v<l;v++){const m=(v+o()*.8)/l*Math.PI*2;let p=Math.abs(m-h);if(p=Math.min(p,Math.PI*2-p),p<.38)continue;const x=o()<.22,A=x?Mh.crystal_b:Mh.crystal_a,M=x?5.8+o()*1.8:3.5+o()*3,C=ct.x+Math.cos(m)*M,T=ct.z+Math.sin(m)*M,P=x?2.1+o()*1.1:3.2+o()*2.4,E=P/A,y=(x?101.6:52)*E*.35;let D=1/0;for(const[W,k]of[[y,y],[y,-y],[-y,y],[-y,-y]])D=Math.min(D,n.sampleHeight(C+W,T+k));const L=(.32+o()*.12)*P,U=D-L;f.setFromAxisAngle(g,o()*Math.PI*2);const z=new R(-Math.sin(m),0,Math.cos(m));d.setFromAxisAngle(z,(.05+o()*.15)*(o()<.5?1:-1)),u.multiplyQuaternions(d,f);const N=new lt().compose(new R(C,U,T),u,new R(E,E,E)),F=P-L;(x?c:a).push({m:N,big:F>.9}),t.push({x:C,z:T,r:.5+F*.45})}for(const[v,m]of[[i,a],[s,c]]){if(!m.length)continue;const p=new sr(v,r,m.length);for(let x=0;x<m.length;x++)p.setMatrixAt(x,m[x].m);p.instanceMatrix.needsUpdate=!0,p.castShadow=!0,p.receiveShadow=!0,e.add(p)}}function Zx(n,e,t){const r=n.sampleHeight(-46,-127),o=new yt;o.position.set(-46,r,-127);const a=new Ve({color:new Re(.42,.42,.4),roughness:.95}),c=new Ve({color:new Re(.66,.66,.62),roughness:.85}),l=new le(new xe(3.4,.5,3.4),a);l.position.y=.05;const h=new le(new xe(1.15,.9,1.15),c);h.position.y=.7;const u=new le(new pt(.24,.44,3.4,4,1),c);u.rotation.y=Math.PI/4,u.position.y=2.8;const f=new le(new Pc(.34,.5,4),c);f.rotation.y=Math.PI/4,f.position.y=4.72;for(const d of[l,h,u,f])d.castShadow=!0,d.receiveShadow=!0,o.add(d);e.add(o),t.push({x:-46,z:-127,r:1.6})}const rt={log:9071176,darkWood:6047022,roof:8209462,stone:10327690,metal:12173766,brass:13213798,sign:13213798,shutter:5204818,planter:7031344},nt={wood:0,shingle:1,stone:2};let Ah=null;function Jx(){return Ah??(Ah=yx()),Ah}function Ns(n,e,t,i,s,r=0){const o=Math.hypot(i-e,s-t),a=Math.max(2,Math.round(o/1.1)),c=r>0?Math.floor((a-r)/2):-1,l=r>0?c+r:-1;for(let h=0;h<a;h++){if(h>=c&&h<l)continue;const u=h/(a-1);n.push({x:e+(i-e)*u,z:t+(s-t)*u,r:.55})}}function Os(n,e,t,i,s,r,o,a){const c=Math.hypot(i-e,s-t),l=Math.max(3,Math.round(o/.42)),h=Math.atan2(i-e,s-t);for(let u=0;u<l;u++){const f=r+.21+u*.42,d=new pt(.2,.2,c+.5,9,1);if(d.rotateZ(Math.PI/2),d.rotateY(-h+Math.PI/2),d.translate((e+i)/2,f,(t+s)/2),d.userData.tint=u%2===0?rt.log:8544575,d.userData.band=nt.wood,n.push(d),a()<.34){const g=new Jt(.085,6,5),v=a();g.translate(e+(i-e)*v,f,t+(s-t)*v),g.userData.tint=rt.darkWood,g.userData.band=nt.wood,n.push(g)}}}function Kr(n,e,t,i,s,r,o){const a=nt.wood,c=new xe(1.14,1.26,.18);c.rotateY(s),c.translate(t,r+1.5,i),c.userData.tint=rt.darkWood,c.userData.band=a,n.push(c);const l=new xe(.96,1.06,.06);l.rotateY(s),l.translate(t,r+1.5,i),l.userData.tint=2832962,l.userData.band=a,n.push(l);const h=new xe(.08,1.02,.1);h.rotateY(s),h.translate(t,r+1.5,i),h.userData.tint=rt.darkWood,h.userData.band=a,n.push(h);const u=new xe(1.2,.09,.22);u.rotateY(s),u.translate(t,r+.82,i),u.userData.tint=rt.darkWood,u.userData.band=a,n.push(u);for(const v of[-1,1]){const m=new xe(.42,1.14,.05);m.rotateY(s+v*.35);const p=Math.cos(s)*v*.78-Math.sin(s)*.06,x=-Math.sin(s)*v*.78-Math.cos(s)*.06;m.translate(t+p,r+1.48,i+x),m.userData.tint=v===1?rt.shutter:5929566,m.userData.band=a,n.push(m)}if(o){const v=new xe(1,.2,.24);v.rotateY(s);const m=Math.sin(s)*-.16,p=Math.cos(s)*-.16;v.translate(t+m,r+.68,i+p),v.userData.tint=rt.planter,v.userData.band=a,n.push(v);for(let x=0;x<4;x++){const A=new Jt(.055,6,5);A.translate(t+m+Math.cos(s)*(x-1.5)*.2,r+.82,i+p-Math.sin(s)*(x-1.5)*.2),A.userData.tint=[14180431,15249983,13066126,14180431][x],A.userData.band=a,n.push(A)}}const f=new Oi(.96,1.06);f.rotateY(s+Math.PI);const d=-Math.sin(s+Math.PI)*.07,g=-Math.cos(s+Math.PI)*.07;f.translate(t+d,r+1.5,i+g),e.push(f)}function jx(n,e,t,i,s){const r=new xe(1.04,2.1,.12);r.rotateY(i),r.translate(e,s+1.07,t),r.userData.tint=7164472,r.userData.band=nt.wood,n.push(r);for(let a=0;a<3;a++){const c=new xe(.035,2,.135);c.rotateY(i),c.translate(e+Math.cos(i)*(a-1)*.28,s+1.07,t-Math.sin(i)*(a-1)*.28),c.userData.tint=rt.darkWood,c.userData.band=nt.wood,n.push(c)}const o=new Jt(.05,6,5);o.translate(e+Math.cos(i)*.38,s+1.02,t-Math.sin(i)*.38),o.userData.tint=rt.brass,o.userData.band=nt.wood,n.push(o);for(const a of[-1,1]){const c=new xe(.14,2.16,.2);c.rotateY(i),c.translate(e+Math.cos(i)*a*.56,s+1.08,t-Math.sin(i)*a*.56),c.userData.tint=rt.darkWood,c.userData.band=nt.wood,n.push(c)}}function yh(n,e,t,i,s,r,o,a=.5){const l=s/2+a,h=Math.hypot(l,1.5),u=Math.atan2(1.5,l),f=Math.cos(o),d=Math.sin(o),g=(A,M,C)=>[e+d*C+f*A,i+M,t+f*C-d*A];for(const A of[-1,1]){const M=new xe(h,.14,r+a*2);M.rotateZ(-A*u);const[C,T,P]=g(A*l/2,1.5/2+.05,0);M.translate(C,T,P),M.userData.tint=rt.roof,M.userData.band=nt.shingle,n.push(M)}const v=new xe(.3,.16,r+a*2),[m,p,x]=g(0,1.5+.02,0);v.translate(m,p,x),v.userData.tint=rt.darkWood,v.userData.band=nt.wood,n.push(v);for(const A of[-1,1]){const M=new xe(s-.15,1.38,.15),[C,T,P]=g(0,(1.5-.12)/2,A*(r/2));M.rotateY(o),M.translate(C,T,P),M.userData.tint=9859135,M.userData.band=nt.wood,n.push(M)}}function Bu(n){const e=[],t=[],i=[],s=[],r=[];let o=0;const a=new Re;for(const l of n){Sx(l,l.userData.band??nt.wood,2.4);const h=l.attributes.position,u=l.attributes.normal,f=l.attributes.uv;a.setHex(l.userData.tint??rt.log);for(let d=0;d<h.count;d++)e.push(h.getX(d),h.getY(d),h.getZ(d)),u?t.push(u.getX(d),u.getY(d),u.getZ(d)):t.push(0,1,0),f?i.push(f.getX(d),f.getY(d)):i.push(0,0),s.push(a.r,a.g,a.b);if(l.index)for(let d=0;d<l.index.count;d++)r.push(l.index.getX(d)+o);else for(let d=0;d<h.count;d++)r.push(d+o);o+=h.count,l.dispose()}const c=new Dt;return c.setAttribute("position",new at(e,3)),c.setAttribute("normal",new at(t,3)),c.setAttribute("uv",new at(i,2)),c.setAttribute("color",new at(s,3)),c.setIndex(r),c}function Js(n,e){const t=new le(Bu(e),new Ve({vertexColors:!0,map:Jx(),roughness:.86,metalness:.02}));return t.castShadow=!0,t.receiveShadow=!0,n.add(t),t}function Sh(n,e,t){if(!e.length)return;const i=Bu(e),s=new Ve({color:15917750,emissive:16761962,emissiveIntensity:1.7,roughness:.9,side:Zt}),r=new le(i,s);n.add(r),t.registerNightMaterial(s)}function $x(n,e,t,i,s){const r=new le(new xe(.14,.2,.14),new Ve({color:3814962,roughness:.8}));r.position.set(e,t,i),n.add(r);const o=new Ve({color:16771504,emissive:16765040,emissiveIntensity:2.2,roughness:.5}),a=new le(new Jt(.055,8,6),o);a.position.set(e,t-.01,i),n.add(a),s.registerNightMaterial(o)}function Zr(n,e,t,i,s,r){const{cx:o,cz:a,w:c,d:l,rotY:h}=s,u=Math.cos(h),f=Math.sin(h),d=(Me,I)=>[o+f*I+u*Me,a+u*I-f*Me];let g=1/0;for(const Me of[-.5,.5])for(const I of[-.5,.5]){const[j,X]=d(Me*c,I*l);g=Math.min(g,t.sampleHeight(j,X))}g+=.05;const v=c/2,m=l/2,p=2.4,x=[],A=[],[M,C]=d(-v,-m),[T,P]=d(v,-m),[E,S]=d(-v,m),[y,D]=d(v,m),[L,U]=d(-v,-m),[z,N]=d(-v,m),[F,W]=d(v,-m),[k,$]=d(v,m);Os(x,M,C,T,P,g,p,i),Os(x,E,S,y,D,g,p,i),Os(x,L,U,z,N,g,p,i),Os(x,F,W,k,$,g,p,i);for(const[Me,I]of[d(-v,-m),d(v,-m),d(-v,m),d(v,m)])for(let j=0;j<6;j++){const X=new pt(.19,.19,.34,8);X.rotateZ((j%2===0?.45:-.45)+Math.PI/2),X.rotateY(h),X.translate(Me+(i()-.5)*.08,g+.24+j*.42,I+(i()-.5)*.08),X.userData.tint=j%2===0?rt.darkWood:rt.log,X.userData.band=nt.wood,x.push(X)}for(let Me=0;Me<Math.round(c*2+l*2);Me++){const I=Me/Math.round(c*2+l*2),j=2*(c+l);let X,Z;const Q=I*j;Q<c?[X,Z]=[Q-c/2,-l/2]:Q<c+l?[X,Z]=[c/2,Q-c-l/2]:Q<2*c+l?[X,Z]=[c/2-(Q-c-l),l/2]:[X,Z]=[-c/2,l/2-(Q-2*c-l)];const[ce,se]=d(X,Z),ae=new xe(.34,.3+i()*.14,.3);ae.rotateY(i()*Math.PI),ae.translate(ce,g+.02,se),ae.userData.tint=i()>.5?rt.stone:9078138,ae.userData.band=nt.stone,x.push(ae)}const[ne,ge]=d(0,-m-.03);jx(x,ne,ge,h,g),$x(n,ne+Math.cos(h)*.9,g+2.2,ge-Math.sin(h)*.9,r);const[Pe,qe]=d(-v*.45,m+.03),[it,Ke]=d(v*.45,m+.03);Kr(x,A,Pe,qe,h,g,!0),Kr(x,A,it,Ke,h,g,!1);const[ee,re]=d(v+.03,0);Kr(x,A,ee,re,h+Math.PI/2,g,!1),yh(x,o,a,g+p,c,l,h);const[we,Ie]=d(v-.45,m-.45),Ee=new xe(.78,3.9,.78);Ee.translate(we,g+1.95,Ie),Ee.userData.tint=rt.stone,Ee.userData.band=nt.stone,x.push(Ee);const pe=new xe(.98,.18,.98);if(pe.translate(we,g+3.92,Ie),pe.userData.tint=rt.darkWood,pe.userData.band=nt.wood,x.push(pe),s.porch){const[Me,I]=d(-v-.2,-m-1.55),[j,X]=d(v+.2,-m-1.55),Z=new xe(c+.8,.16,1.8);Z.rotateY(h),Z.translate((Me+j)/2,g+.12,(I+X)/2),Z.userData.tint=7623215,Z.userData.band=nt.wood,x.push(Z);for(const ae of[-1,1]){const[ke,Oe]=d(ae*(v-.1),-m-1.35),b=new xe(.16,2.5,.16);b.rotateY(h),b.translate(ke,g+1.32,Oe),b.userData.tint=rt.darkWood,b.userData.band=nt.wood,x.push(b)}const Q=new xe(c+1,.12,2.15);Q.rotateX(-.2);const[ce,se]=d(0,-m-.9);Q.rotateY(h),Q.translate(ce,g+2.66,se),Q.userData.tint=rt.roof,Q.userData.band=nt.shingle,x.push(Q);for(const ae of[-1,1]){const[ke,Oe]=d(ae*(v+.1),-m-1.42),[b,_]=d(ae*(v+.1),-m-.42),G=new xe(.09,.07,1.05);G.rotateY(h),G.translate((ke+b)/2,g+.85,(Oe+_)/2),G.userData.tint=rt.darkWood,G.userData.band=nt.wood,x.push(G);for(let Y=0;Y<4;Y++){const te=(Y+.5)/4,J=new pt(.03,.045,.72,6);J.translate(ke+(b-ke)*te,g+.44,Oe+(_-Oe)*te),J.userData.tint=7623215,J.userData.band=nt.wood,x.push(J)}}for(let ae=0;ae<2;ae++){const[ke,Oe]=d(0,-m-1.9-ae*.42),b=new xe(1.6,.14,.45);b.rotateY(h),b.translate(ke,g+.05-ae*.14,Oe),b.userData.tint=rt.darkWood,b.userData.band=nt.wood,x.push(b)}}if(Ns(e,M,C,T,P,1),Ns(e,E,S,y,D),Ns(e,L,U,z,N),Ns(e,F,W,k,$),e.push({x:we,z:Ie,r:.62}),Js(n,x),Sh(n,A,r),s.secondFloor){const Me=[],I=[],j=v-.5,X=m-.5,Z=g+p+.1,Q=2.25,ce=[d(-j,-X),d(j,-X),d(j,X),d(-j,X)];for(let te=0;te<4;te++){const[J,Ce]=ce[te],[fe,Te]=ce[(te+1)%4];Os(Me,J,Ce,fe,Te,Z,Q,i),Ns(e,J,Ce,fe,Te)}const[se,ae]=d(0,-X-.03);Kr(Me,I,se,ae,h,Z,!1);const ke=Z+.02;for(let te=0;te<9;te++){const J=-1.4+te*.35,[Ce,fe]=d(J,-X-.35),Te=new pt(.028,.04,.78,6);Te.translate(Ce,ke+.42,fe),Te.userData.tint=7623215,Te.userData.band=nt.wood,Me.push(Te)}const[Oe,b]=d(-1.55,-X-.35),[_,G]=d(1.55,-X-.35),Y=new xe(3.4,.08,.09);Y.rotateY(h),Y.translate((Oe+_)/2,ke+.84,(b+G)/2),Y.userData.tint=rt.darkWood,Y.userData.band=nt.wood,Me.push(Y),yh(Me,o,a,Z+Q,j*2,X*2,h),Js(n,Me),Sh(n,I,r)}}function eM(n,e,t,i){const s=wt(90210);{const r=Bn.x,o=Bn.z,a=e.sampleHeight(r,o)+.05,c=[],l=[[-4.2,-3],[4.2,-3],[-4.2,.6],[4.2,.6],[-4.2,3.4],[4.2,3.4]];for(const[x,A]of l){const M=new pt(.17,.21,3.2,9);M.translate(r+x,a+1.6,o+A),M.userData.tint=rt.log,M.userData.band=nt.wood,c.push(M),t.push({x:r+x,z:o+A,r:.42})}for(let x=0;x<3;x++){const A=-3+x*3.2,M=3.4-x*.3,C=new xe(8.9,.18,.16);C.translate(r,a+M,o+A),C.userData.tint=rt.darkWood,C.userData.band=nt.wood,c.push(C);const T=new xe(9.6,.12,3.6);T.rotateX(Math.atan2(.3,3.2)),T.translate(r,a+M-.15,o+A+1.6),T.userData.tint=rt.roof,T.userData.band=nt.shingle,c.push(T)}const h=new xe(3,.12,1.1);h.translate(r-.6,a+1.02,o-.8),h.userData.tint=rt.darkWood,h.userData.band=nt.wood,c.push(h);for(const[x,A]of[[-1.9,-1.2],[.7,-1.2],[-1.9,-.4],[.7,-.4]]){const M=new xe(.12,.96,.12);M.translate(r-.6+x,a+.5,o+A),M.userData.tint=rt.darkWood,M.userData.band=nt.wood,c.push(M)}const u=new pt(.42,.42,.035,18);u.rotateX(Math.PI/2),u.translate(r-.6,a+1.12,o-.8),u.userData.tint=rt.metal,u.userData.band=nt.wood,c.push(u);const f=new xe(.6,.5,.7);f.translate(r-.6,a+.66,o-.8),f.userData.tint=4871496,f.userData.band=nt.wood,c.push(f),t.push({x:r-.6,z:o-.8,r:1});for(let x=0;x<3;x++)for(let A=0;A<4-x;A++){const M=new pt(.24,.24,3.2,9);M.rotateZ(Math.PI/2),M.translate(r+2,a+.26+x*.44,o+.6+A*.5+x*.25),M.userData.tint=x%2===0?8019004:7623215,M.userData.band=nt.wood,c.push(M)}t.push({x:r+2,z:o+1.3,r:1.6});const d=new xe(2.8,.7,.08);d.translate(r,a+2.7,o-3.3),d.userData.tint=rt.sign,d.userData.band=nt.wood,c.push(d);const g=new xe(2.95,.82,.05);g.translate(r,a+2.7,o-3.32),g.userData.tint=rt.darkWood,g.userData.band=nt.wood,c.push(g),Js(n,c);const v=new zl(16761707,22,20,2);v.position.set(r,a+3.1,o),n.add(v),i.registerNightLight(v);const m=new Ve({color:16771504,emissive:16765040,emissiveIntensity:2.4,roughness:.5}),p=new le(new Jt(.07,8,6),m);p.position.set(r,a+3.2,o),n.add(p),i.registerNightMaterial(m)}Zr(n,t,e,s,{cx:42,cz:96,w:4.6,d:5.4,rotY:.35,porch:!0},i),Zr(n,t,e,s,{cx:70,cz:136,w:5.2,d:4.4,rotY:-.55,porch:!0},i),Zr(n,t,e,s,{cx:44,cz:146,w:4,d:4,rotY:.15,porch:!0},i),Zr(n,t,e,s,{cx:70,cz:100,w:5.6,d:5,rotY:-1.1,porch:!1,secondFloor:!0},i);{const r=[],o=(a,c,l,h)=>{const u=Math.hypot(l-a,h-c),f=Math.max(1,Math.round(u/2.2));for(let d=0;d<=f;d++){const g=d/f,v=a+(l-a)*g,m=c+(h-c)*g,p=new xe(.12,1.05,.12);p.translate(v,e.sampleHeight(v,m)+.5,m),p.userData.tint=rt.darkWood,p.userData.band=nt.wood,r.push(p)}for(const d of[.45,.92]){const g=new xe(u,.08,.07);g.rotateY(-Math.atan2(l-a,h-c)+Math.PI/2);const v=(a+l)/2,m=(c+h)/2;g.translate(v,e.sampleHeight(v,m)+d,m),g.userData.tint=rt.log,g.userData.band=nt.wood,r.push(g)}};o(30,88,24,110),o(18,116,18,160),o(18,160,52,166),Js(n,r);for(const[a,c]of[[38,104],[60,150],[64,112]]){const l=e.sampleHeight(a,c),h=[],u=new pt(.08,.11,3.4,8);u.translate(a,l+1.7,c),u.userData.tint=rt.darkWood,u.userData.band=nt.wood,h.push(u);const f=new xe(.5,.07,.07);f.translate(a-.22,l+3.32,c),f.userData.tint=rt.darkWood,f.userData.band=nt.wood,h.push(f);const d=new xe(.42,.16,.42);d.translate(a-.45,l+3.26,c),d.userData.tint=3815994,d.userData.band=nt.wood,h.push(d),Js(n,h);const g=new Ve({color:16771504,emissive:16765040,emissiveIntensity:2.4,roughness:.5}),v=new le(new Jt(.085,8,6),g);v.position.set(a-.45,l+3.14,c),n.add(v),i.registerNightMaterial(g);const m=new zl(16767392,13,17,2);m.position.set(a-.45,l+3.05,c),n.add(m),i.registerNightLight(m),t.push({x:a,z:c,r:.35})}}}class tM{constructor(e,t){B(this,"group",new yt);B(this,"rotors",[]);B(this,"led");B(this,"baseY");B(this,"state","orbit");B(this,"stateTime",0);B(this,"cooldownUntil",0);B(this,"arcAngle",0);B(this,"yaw",0);B(this,"pitch",0);B(this,"bank",0);B(this,"alert",!1);this.baseY=t.sampleHeight(ct.x,ct.z);const i=new Ve({color:new Re(.03,.03,.035),roughness:.55,metalness:.25}),s=new Ve({color:new Re(.02,.02,.022),roughness:.4,metalness:.6}),r=new le(new xe(.36,.12,.36),i),o=new le(new Jt(.13,12,8),i);o.scale.set(1.1,.55,1.1),o.position.y=.07,this.group.add(r,o);const a=new le(new Jt(.06,10,8),s);a.position.y=-.09;const c=new le(new pt(.025,.03,.04,8),new Ve({color:1118515,roughness:.2,metalness:.8}));c.rotation.x=Math.PI/2,c.position.set(0,-.09,.06),this.group.add(a,c);const l=new Ii({color:657932,transparent:!0,opacity:.32,side:Zt,depthWrite:!1});for(let f=0;f<4;f++){const d=f/4*Math.PI*2+Math.PI/4,g=Math.cos(d),v=Math.sin(d),m=new le(new xe(.4,.035,.055),i);m.position.set(g*.24,.01,v*.24),m.rotation.y=-d,this.group.add(m);const p=new le(new pt(.045,.05,.06,10),s);p.position.set(g*.42,.04,v*.42),this.group.add(p);const x=new le(new pt(.16,.16,.006,18),l);x.position.set(g*.42,.085,v*.42),this.group.add(x),this.rotors.push(x);const A=new le(new xe(.3,.004,.03),i);A.position.y=.002,x.add(A)}this.led=new Ve({color:2229509,emissive:new Re(1,.05,.02),emissiveIntensity:0});const h=new le(new Jt(.022,8,6),this.led);h.position.set(0,.02,.19);const u=new le(new Jt(.016,8,6),new Ve({color:336389,emissive:new Re(.05,.9,.1),emissiveIntensity:.9}));u.position.set(0,.02,-.19),this.group.add(h,u),this.group.traverse(f=>{f instanceof le&&(f.castShadow=!0)}),e.add(this.group)}get position(){return this.group.position}update(e,t,i){this.stateTime+=e;const s=this.group.position,r=9+Math.sin(t*.11)*2.5,o=t*.22,a=new R(ct.x+Math.cos(o)*r,this.baseY+19+Math.sin(t*.35)*1.3,ct.z+Math.sin(o)*r),c=Math.hypot(i.x-ct.x,i.z-ct.z);switch(this.alert=!1,this.state){case"orbit":{s.copy(a),this.faceTo(-o-Math.PI/2,.05,.16+Math.sin(t*.11)*.03,1,e),c<22&&t>this.cooldownUntil&&(this.state="approach",this.stateTime=0);break}case"approach":{const u=new R(s.x-i.x,0,s.z-i.z);u.lengthSq()<.01&&u.set(1,0,0),u.normalize();const f=new R(i.x+u.x*2.6,i.y+1.15,i.z+u.z*2.6),d=this.flyToward(f,10,e,.9);this.lookWhileFlying(f,e),d&&(this.state="inspect",this.stateTime=0,this.arcAngle=Math.atan2(s.z-i.z,s.x-i.x));break}case"inspect":{this.alert=!0,this.arcAngle+=e*.45;const u=new R(i.x+Math.cos(this.arcAngle)*2.6,i.y+1.15+Math.sin(t*2.6)*.12,i.z+Math.sin(this.arcAngle)*2.6);this.flyToward(u,6,e);const f=i.x-s.x,d=i.z-s.z,g=i.y-.2-s.y;this.faceTo(Math.atan2(f,d),-Math.atan2(g,Math.hypot(f,d))*.6,0,4,e),this.stateTime>5.5&&(this.state="return",this.stateTime=0);break}case"return":{const u=this.flyToward(a,9,e,1.8);this.lookWhileFlying(a,e),u&&(this.state="orbit",this.cooldownUntil=t+40);break}}this.group.rotation.set(this.pitch,this.yaw,this.bank,"YXZ");const l=this.state==="orbit"?85:110;for(let u=0;u<this.rotors.length;u++)this.rotors[u].rotation.y+=e*l*(u%2===0?1:-1);let h;if(this.alert)h=t%.4<.18?3.6:0;else{const u=t%1.6;h=u<.08||u>.22&&u<.3?3.2:0}this.led.emissiveIntensity=h}flyToward(e,t,i,s=.5){const r=this.group.position,o=new R().subVectors(e,r),a=o.length();if(a<.001)return!0;const c=Math.min(Math.max(a*2.2,2.5),t);return r.addScaledVector(o.normalize(),Math.min(a,c*i)),a<s}lookWhileFlying(e,t){const i=this.group.position,s=e.x-i.x,r=e.z-i.z;if(s*s+r*r<.04)return;const o=this.yaw;this.faceTo(Math.atan2(s,r),.12,0,3,t);const a=ze.clamp((this.yaw-o)/Math.max(t,.001),-2,2);this.bank=ze.damp(this.bank,-a*.25,4,t)}faceTo(e,t,i,s,r){let o=e-this.yaw;o=Math.atan2(Math.sin(o),Math.cos(o)),this.yaw+=o*(1-Math.exp(-s*r)),this.pitch=ze.damp(this.pitch,t,s,r),this.bank=ze.damp(this.bank,i,s,r)}}const fa=1.68,zs=4.6,nM=2.05,iM=22,sM=5.4,rM=70,oM=58,xo=class xo{constructor(e,t,i,s){B(this,"position");B(this,"enabled",!1);B(this,"landingSpeed",0);B(this,"walkedDistance",0);B(this,"sprintDistance",0);B(this,"jumps",0);B(this,"mYaw",Math.PI);B(this,"mPitch",0);B(this,"velocity",new R);B(this,"grounded",!0);B(this,"keys",new Set);B(this,"bobTime",0);B(this,"bobAmount",0);B(this,"idleTime",0);B(this,"camDip",0);B(this,"camDipVel",0);B(this,"lastPickup",-10);B(this,"platformProvider",null);this.camera=e,this.field=t,this.colliders=i,this.position=s.clone(),this.position.y=t.sampleHeight(s.x,s.z)+fa,this.mYaw=0,this.mPitch=.02,window.addEventListener("keydown",r=>{r.code==="Space"&&r.preventDefault(),this.keys.add(r.code)}),window.addEventListener("keyup",r=>this.keys.delete(r.code)),window.addEventListener("mousemove",r=>{if(!document.pointerLockElement)return;this.mYaw-=r.movementX*.0021,this.mPitch-=r.movementY*.0021;const o=Math.PI/2-.06;this.mPitch=ze.clamp(this.mPitch,-o,o)}),this.camera.fov=oM,this.camera.updateProjectionMatrix(),this.syncCamera()}get isGrounded(){return this.grounded}get isSprinting(){return this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")}get pressedKeys(){return this.keys}get yaw(){return this.mYaw}set yaw(e){this.mYaw=e}get pitch(){return this.mPitch}set pitch(e){this.mPitch=e}get bobPhase(){return this.bobTime}get bobIntensity(){return this.bobAmount}getViewDir(e){return e.set(-Math.sin(this.mYaw),0,-Math.cos(this.mYaw)).normalize()}alignYawTo(e){this.mYaw=Math.atan2(-e.x,-e.z)}wrapAngle(e){return Math.atan2(Math.sin(e),Math.cos(e))}zeroVelocity(){this.velocity.set(0,0,0),this.grounded=!0}addImpulse(e){this.camDipVel+=e}get horizontalSpeed(){return Math.hypot(this.velocity.x,this.velocity.z)}getViewQuaternion(e){return e.setFromEuler(new un(this.mPitch,this.mYaw,0,"YXZ"))}setPlatformProvider(e){this.platformProvider=e}getSnapshot(){return{x:this.position.x,y:this.position.y,z:this.position.z,yaw:this.mYaw,pitch:this.mPitch}}restoreSnapshot(e){this.position.set(e.x,e.y,e.z),this.mYaw=e.yaw,this.mPitch=ze.clamp(e.pitch,-1.5,1.5),this.velocity.set(0,0,0),this.grounded=!0,this.syncCamera(0)}update(e){this.landingSpeed=0;const t=new R(-Math.sin(this.mYaw),0,-Math.cos(this.mYaw)),i=new R(-t.z,0,t.x),s=new R;this.enabled&&((this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&s.add(t),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&s.sub(t),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&s.add(i),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&s.sub(i));const r=this.isSprinting,o=s.lengthSq()>0?zs*(r?nM:1):0;s.lengthSq()>0&&s.normalize();const a=this.grounded?38:9;this.velocity.x=ze.damp(this.velocity.x,s.x*o,a*.35,e),this.velocity.z=ze.damp(this.velocity.z,s.z*o,a*.35,e),this.enabled&&this.grounded&&this.keys.has("Space")&&(this.velocity.y=sM,this.grounded=!1,this.jumps++),this.grounded||(this.velocity.y-=iM*e),this.position.x+=this.velocity.x*e,this.position.z+=this.velocity.z*e,this.position.y+=this.velocity.y*e;const c=Math.hypot(this.velocity.x,this.velocity.z)*e;this.walkedDistance+=c,r&&c>.008&&this.horizontalSpeed>zs*1.1&&(this.sprintDistance+=c);const l=this.position.y-fa;for(const g of this.colliders){if(g.minY!==void 0&&(l<g.minY||l>(g.maxY??g.minY)))continue;const v=this.position.x-g.x,m=this.position.z-g.z,p=g.r+.42,x=v*v+m*m;if(x<p*p&&x>1e-6){const A=Math.sqrt(x);this.position.x=g.x+v/A*p,this.position.z=g.z+m/A*p}}const h=xo.STEP_UP,u=this.field.sampleHeight(this.position.x,this.position.z);let f=u<=l+h?u:-1/0;if(this.platformProvider){const g=this.platformProvider(this.position.x,this.position.z,l);g>f&&(f=g)}f===-1/0&&(f=u);const d=f+fa;this.position.y<=d?(!this.grounded&&this.velocity.y<-3&&(this.landingSpeed=-this.velocity.y),this.position.y=d,this.velocity.y=0,this.grounded=!0):this.position.y>d+.05&&(this.grounded=!1),this.syncCamera(e)}syncCamera(e=0){const t=this.horizontalSpeed,i=this.isSprinting&&t>zs*1.05,s=this.grounded?ze.clamp(t/zs,0,2.1):0;this.bobAmount=ze.damp(this.bobAmount,s,8,e);const r=4.4+t*1.15;this.bobTime+=e*r;const o=this.bobAmount*this.bobAmount,a=Math.sin(this.bobTime*2)*.055*o,c=Math.cos(this.bobTime)*.038*o,l=Math.sin(this.bobTime)*.016*o;this.idleTime+=e;const h=Math.sin(this.idleTime*1.35)*.007*(1-Math.min(this.bobAmount,1));this.landingSpeed>2.5&&(this.camDipVel-=Math.min(this.landingSpeed*1.35,6.5)),e>0&&(this.camDip+=this.camDipVel*e,this.camDipVel+=(-this.camDip*85-this.camDipVel*11)*e,this.camDip=ze.clamp(this.camDip,-.45,.2));const u=-Math.abs(Math.min(this.camDip,0))-Math.max(this.camDip,0)*.4;this.camera.position.set(this.position.x+c*Math.cos(this.mYaw),this.position.y+a+h+u,this.position.z-c*Math.sin(this.mYaw)),this.camera.quaternion.setFromEuler(new un(this.mPitch,this.mYaw,l,"YXZ"));const f=rM+(i?7:0)+ze.clamp(t-zs,0,6)*.5,d=e>0?ze.damp(this.camera.fov,f,5,e):this.camera.fov;Math.abs(d-this.camera.fov)>.004&&(this.camera.fov=d,this.camera.updateProjectionMatrix())}};B(xo,"STEP_UP",.62);let go=xo;const ks=new R;function Sn(n,e,t,i,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;ks.copy(e),ks[i]=0,ks.normalize();const l=.5*o/(o+a),h=1-ks.angleTo(n)/c;return Math.sign(ks[t])===1?h*l:a/(o+a)+l+l*(1-h)}class _n extends xe{constructor(e=1,t=1,i=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const c=new R,l=new R,h=new R(e,t,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,g=u.length/6,v=new R,m=.5/o;for(let p=0,x=0;p<u.length;p+=3,x+=2)switch(c.fromArray(u,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),u[p+0]=h.x*Math.sign(c.x)+l.x*r,u[p+1]=h.y*Math.sign(c.y)+l.y*r,u[p+2]=h.z*Math.sign(c.z)+l.z*r,f[p+0]=l.x,f[p+1]=l.y,f[p+2]=l.z,Math.floor(p/g)){case 0:v.set(1,0,0),d[x+0]=Sn(v,l,"z","y",r,i),d[x+1]=1-Sn(v,l,"y","z",r,t);break;case 1:v.set(-1,0,0),d[x+0]=1-Sn(v,l,"z","y",r,i),d[x+1]=1-Sn(v,l,"y","z",r,t);break;case 2:v.set(0,1,0),d[x+0]=1-Sn(v,l,"x","z",r,e),d[x+1]=Sn(v,l,"z","x",r,i);break;case 3:v.set(0,-1,0),d[x+0]=1-Sn(v,l,"x","z",r,e),d[x+1]=1-Sn(v,l,"z","x",r,i);break;case 4:v.set(0,0,1),d[x+0]=1-Sn(v,l,"x","y",r,e),d[x+1]=1-Sn(v,l,"y","x",r,t);break;case 5:v.set(0,0,-1),d[x+0]=Sn(v,l,"x","y",r,e),d[x+1]=1-Sn(v,l,"y","x",r,t);break}}static fromJSON(e){return new _n(e.width,e.height,e.depth,e.segments,e.radius)}}function aM(){return new Ve({map:Eu(),bumpMap:Tu(),bumpScale:.05,roughness:.46,metalness:0})}class cM{constructor(e){B(this,"group",new yt);B(this,"right");B(this,"left");B(this,"axe");B(this,"swingT",-1);B(this,"swingHitAt",.3);B(this,"onSwingHit",null);B(this,"onSwingStart",null);B(this,"time",0);const t=aM(),i=new Ve({color:14266015,roughness:.24,metalness:.05}),s=new Ve({map:Eu(),color:13208176,bumpMap:Tu(),bumpScale:.04,roughness:.5}),r=new Ve({color:4016691,roughness:.9,metalness:0});this.right=this.buildHand(t,i,s,r,!1),this.left=this.buildHand(t,i,s,r,!0),this.right.root.position.set(.27,-.36,-.52),this.right.root.rotation.set(-.3,-.18,.1),this.left.root.position.set(-.24,-.4,-.46),this.left.root.rotation.set(-.34,.22,-.14),this.axe=this.buildAxe(),this.axe.position.set(.01,.02,.02),this.axe.rotation.set(.36,-.1,-.18),this.right.palm.add(this.axe),this.group.add(this.right.root,this.left.root),this.group.traverse(o=>{o.frustumCulled=!1,o instanceof le&&(o.castShadow=!1,o.receiveShadow=!1)}),this.group.visible=!1,e.add(this.group)}setVisible(e){this.group.visible=e}get isSwinging(){return this.swingT>=0}swing(){this.swingT>=0||(this.swingT=0,this.onSwingStart?.())}update(e,t){this.time+=e;const i=Math.min(t.bobIntensity,2.1),s=i*i,r=Math.sin(this.time*1.35)*.006*(1-Math.min(i,1)),o=Math.cos(this.time*1.1)*.005*(1-Math.min(i,1)),a=Math.sin(t.bobPhase)*.055*s,c=-Math.sin(t.bobPhase)*.05*s,l=Math.abs(Math.cos(t.bobPhase))*.03*s,h=Math.abs(Math.cos(t.bobPhase+Math.PI))*.028*s,u=t.sprinting?1.5:1;this.applyPose(this.right,{a:.8,b:.85,c:.8},.5,.45),this.applyPose(this.left,{a:.42,b:.52,c:.46},.34,.3),this.right.root.position.set(.27+a*u*.6+r,-.36+l*u+o,-.52+Math.max(a,0)*.16*u),this.left.root.position.set(-.24+c*u*.6-r,-.4+h*u-o,-.46+Math.max(c,0)*.16*u),this.right.root.rotation.set(-.3,-.18,.1+a*.35*u),this.left.root.rotation.set(-.34,.22,-.14+c*.35*u);const f=this.time-t.lastPickup;if(f>=0&&f<.5){const d=Math.sin(f/.5*Math.PI);this.left.root.position.z-=d*.18,this.left.root.position.y+=d*.08,this.left.root.rotation.x+=d*.5,this.right.root.position.z-=d*.08}if(this.swingT>=0){const d=this.swingT;this.swingT+=e/.62;const g=Math.min(this.swingT,1);let v;g<.42?v=g/.42:g<.62?v=1-(g-.42)/.2:v=-((g-.62)/.38)*.6;const m=g<.42?v:Math.max(0,1-(g-.42)/.3),p=v*v*(3-2*v);this.right.root.position.y+=p*.26,this.right.root.position.x+=p*.05,this.right.root.position.z+=p*.12,this.right.root.rotation.x-=m*.85,this.right.root.rotation.y+=m*.16,this.right.root.rotation.z+=p*.38,g<.5&&(this.left.root.position.x+=p*.08,this.left.root.position.y+=p*.12,this.left.root.rotation.z+=p*.2),d<this.swingHitAt&&this.swingT>=this.swingHitAt&&this.onSwingHit?.(),this.swingT>=1&&(this.swingT=-1)}}applyPose(e,t,i,s){for(let r=0;r<e.fingers.length;r++){const o=e.fingers[r],a=1-r*.06;o.base.rotation.x=t.a*1.15*a,o.mid.rotation.x=t.b*1.25*a,o.tip.rotation.x=t.c*1.1*a,o.base.rotation.y=(r-1.5)*s*.16}e.thumb.base.rotation.z=-.9-i*.35,e.thumb.mid.rotation.z=-.5-i*.6}buildHand(e,t,i,s,r){const o=new yt,a=new yt;o.add(a);const c=new le(new _n(.09,.108,.054,3,.017),e);a.add(c);const l=new le(new _n(.092,.032,.052,2,.013),i);l.position.set(0,.052,0),a.add(l);const h=new le(new Jt(.031,10,8),e);h.scale.set(1,1.25,.62),h.position.set(r?.04:-.04,.02,.018),a.add(h);const u=new yt;u.position.set(r?.048:-.048,.012,.012),a.add(u);const f=new le(new _n(.05,.024,.026,2,.01),e);f.position.x=r?.026:-.026,u.add(f);const d=new yt;d.position.x=r?.05:-.05,u.add(d);const g=new le(new _n(.042,.022,.024,2,.009),e);g.position.x=r?.021:-.021,d.add(g);const v=new le(new _n(.008,.013,.008,1,.003),t);v.position.set(r?.03:-.03,.004,-.013),v.rotation.z=0,v.rotation.x=Math.PI/2,d.add(v);const m=[],p=[.052,.06,.056,.046];for(let M=0;M<4;M++){const C=(M-1.5)*.0215,T=new yt;T.position.set(C,.068,0),a.add(T);const P=new le(new _n(.019,p[M],.021,2,.008),e);P.position.y=p[M]/2,T.add(P);const E=new yt;E.position.y=p[M],T.add(E);const S=p[M]*.62,y=new le(new _n(.017,S,.019,2,.007),e);y.position.y=S/2,E.add(y);const D=new yt;D.position.y=S,E.add(D);const L=p[M]*.5,U=new le(new _n(.015,L,.017,2,.006),e);U.position.y=L/2,D.add(U);for(const[N,F]of[[E,.0115],[D,.0095]]){const W=new le(new Jt(F,8,6),i);W.scale.set(.9,.55,.75),W.position.set(0,-.001,-.009),N.add(W)}const z=new le(new _n(.0115,.009,.0125,1,.003),t);z.position.set(0,L*.68,-.009),D.add(z),m.push({base:T,mid:E,tip:D})}const x=new le(new pt(.052,.062,.08,12),s);x.position.y=-.052,a.add(x);const A=new le(new _s(.054,.008,6,12),i);return A.position.y=-.012,A.rotation.x=Math.PI/2,a.add(A),r&&(a.rotation.y=Math.PI),{root:o,palm:a,fingers:m,thumb:{base:u,mid:d}}}buildAxe(){const e=new yt,t=xx(),i=new Ve({map:t,bumpMap:t,bumpScale:.012,roughness:.62,metalness:.04}),s=new Ve({map:Mx(),roughness:.85}),r=new Ve({color:13160150,roughnessMap:Ax(),roughness:.34,metalness:.92,envMapIntensity:1.15}),o=new Ve({color:15659766,roughness:.12,metalness:.98,envMapIntensity:1.6}),a=new le(new pt(.017,.02,.36,14),i);a.position.y=.18,a.rotation.z=.02,e.add(a);const c=new le(new pt(.016,.017,.24,14),i);c.position.y=.44,c.rotation.z=-.03,e.add(c);const l=new le(new pt(.0205,.0215,.13,14),s);l.position.y=.075,e.add(l);for(let p=0;p<3;p++){const x=new le(new _s(.021,.0035,8,18),s);x.position.y=.02+p*.042,x.rotation.x=Math.PI/2,e.add(x)}const h=new le(new pt(.021,.018,.02,14),s);h.position.y=.008,e.add(h);const u=new fu;u.moveTo(.055,-.05),u.lineTo(.055,.05),u.quadraticCurveTo(-.02,.072,-.078,.055),u.quadraticCurveTo(-.152,.022,-.176,0),u.quadraticCurveTo(-.168,-.022,-.152,-.042),u.quadraticCurveTo(-.07,-.072,.055,-.05);const f=new Uc(u,{depth:.03,bevelEnabled:!0,bevelThickness:.008,bevelSize:.011,bevelSegments:2,curveSegments:10});f.rotateY(Math.PI/2),f.translate(.012,.52,-.008);const d=new le(f,r);e.add(d);const g=new le(new xe(.012,.105,.026),o);g.position.set(-.152,.52,.007),g.rotation.z=.42,e.add(g);const v=new le(new pt(.024,.024,.045,12),r);v.position.y=.5,e.add(v);const m=new le(new xe(.012,.03,.028),i);return m.position.y=.565,m.rotation.y=.3,e.add(m),e}}/**
 * postprocessing v6.39.4 build Mon Jul 27 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var lM=(()=>{const n=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new Dt;return t.setAttribute("position",new Bt(n,3)),t.setAttribute("uv",new Bt(e,2)),t})(),xn=class fc{static get fullscreenGeometry(){return lM}constructor(e="Pass",t=new nr,i=new kc){this.name=e,this.renderer=null,this.scene=t,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new le(fc.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new nr),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=fi){}render(e,t,i,s,r){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,i){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof Ut||t instanceof On||t instanceof Lt||t instanceof fc)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},hM=class extends xn{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(n,e,t,i,s){const r=n.state.buffers.stencil;r.setLocked(!1),r.setTest(!1)}},uM=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,wo="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",Uu=class extends Ft{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new Be(null),depthBuffer:new Be(null),channelWeights:new Be(null),opacity:new Be(1)},blending:qt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:uM,vertexShader:wo}),this.depthFunc=co}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(n){const e=n!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){const e=n!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(n){this.colorSpaceConversion!==n&&(n?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(n){n!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=n):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(n){this.uniforms.inputBuffer.value=n}getOpacity(n){return this.uniforms.opacity.value}setOpacity(n){this.uniforms.opacity.value=n}},Vc=class extends xn{constructor(n,e=!0){super("CopyPass"),this.fullscreenMaterial=new Uu,this.needsSwap=!1,this.renderTarget=n,n===void 0&&(this.renderTarget=new Ut(1,1,{minFilter:zt,magFilter:zt,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(n){this.autoResize=n}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(n){this.autoResize=n}render(n,e,t,i,s){this.fullscreenMaterial.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){this.autoResize&&this.renderTarget.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==Ht?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":n!==null&&n.outputColorSpace===ot&&(this.renderTarget.texture.colorSpace=ot))}},_h=new Re,Wc=class extends xn{constructor(n=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=n,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(n,e,t){this.color=n,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(n){this.overrideClearColor=n}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(n){this.overrideClearAlpha=n}render(n,e,t,i,s){const r=this.overrideClearColor,o=this.overrideClearAlpha,a=n.getClearAlpha(),c=r!==null,l=o>=0;c?(n.getClearColor(_h),n.setClearColor(r,l?o:a)):l&&n.setClearAlpha(o),n.setRenderTarget(this.renderToScreen?null:e),n.clear(this.color,this.depth,this.stencil),c?n.setClearColor(_h,a):l&&n.setClearAlpha(a)}},dM=class extends xn{constructor(n,e){super("MaskPass",n,e),this.needsSwap=!1,this.clearPass=new Wc(!1,!1,!0),this.inverse=!1}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get inverted(){return this.inverse}set inverted(n){this.inverse=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(n){this.inverted=n}render(n,e,t,i,s){const r=n.getContext(),o=n.state.buffers,a=this.scene,c=this.camera,l=this.clearPass,h=this.inverted?0:1,u=1-h;o.color.setMask(!1),o.depth.setMask(!1),o.color.setLocked(!0),o.depth.setLocked(!0),o.stencil.setTest(!0),o.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),o.stencil.setFunc(r.ALWAYS,h,4294967295),o.stencil.setClear(u),o.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?l.render(n,null):(l.render(n,e),l.render(n,t))),this.renderToScreen?(n.setRenderTarget(null),n.render(a,c)):(n.setRenderTarget(e),n.render(a,c),n.setRenderTarget(t),n.render(a,c)),o.color.setLocked(!1),o.depth.setLocked(!1),o.stencil.setLocked(!1),o.stencil.setFunc(r.EQUAL,1,4294967295),o.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),o.stencil.setLocked(!0)}},pa=1/1e3,fM=1e3,pM=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(n){typeof document<"u"&&document.hidden!==void 0&&(n?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=n)}get delta(){return this._delta*pa}get fixedDelta(){return this._fixedDelta*pa}set fixedDelta(n){this._fixedDelta=n*fM}get elapsed(){return this._elapsed*pa}update(n){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(n!==void 0?n:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(n){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},mM=class{constructor(n=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:i=0,frameBufferType:s}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,s,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new Vc,this.depthRenderTarget=null,this.passes=[],this.timer=new pM,this.autoRenderToScreen=!0,this.setRenderer(n)}get stableDepthTexture(){return this.depthRenderTarget===null?null:this.depthRenderTarget.depthTexture}get multisampling(){return this.inputBuffer.samples}set multisampling(n){this.multisampling!==n&&(this.inputBuffer.samples=n,this.outputBuffer.samples=n,this.inputBuffer.dispose(),this.outputBuffer.dispose())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(n){if(this.renderer=n,n!==null){const e=n.getSize(new oe),t=n.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===Ht&&n.outputColorSpace===ot&&(this.inputBuffer.texture.colorSpace=ot,this.outputBuffer.texture.colorSpace=ot,this.inputBuffer.dispose(),this.outputBuffer.dispose()),n.autoClear=!1,this.setSize(e.width,e.height);for(const s of this.passes)s.initialize(n,t,i)}}replaceRenderer(n,e=!0){const t=this.renderer,i=t.domElement.parentNode;return this.setRenderer(n),e&&i!==null&&(i.removeChild(t.domElement),i.appendChild(n.domElement)),t}createDepthTexture(){const n=new yo;n.name="EffectComposer.InputDepth",this.inputBuffer.stencilBuffer?(n.format=Ms,n.type=xs):n.type=Dn;const e=n.clone();e.name="EffectComposer.OutputDepth";const t=n.clone();t.name="EffectComposer.StableDepth",this.inputBuffer.depthTexture=n,this.outputBuffer.depthTexture=e,this.inputBuffer.dispose(),this.outputBuffer.dispose();const{width:i,height:s}=this.inputBuffer;this.depthRenderTarget=new Ut(i,s,{depthBuffer:!0,stencilBuffer:this.inputBuffer.stencilBuffer,depthTexture:t})}blitDepthBuffer(n){const e=this.renderer,t=this.depthRenderTarget,i=e.properties,s=e.getContext();e.setRenderTarget(t);const r=i.get(n).__webglFramebuffer,o=i.get(t).__webglFramebuffer,a=n.stencilBuffer?s.DEPTH_BUFFER_BIT|s.STENCIL_BUFFER_BIT:s.DEPTH_BUFFER_BIT;s.bindFramebuffer(s.READ_FRAMEBUFFER,r),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,o),s.blitFramebuffer(0,0,n.width,n.height,0,0,t.width,t.height,a,s.NEAREST),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),e.setRenderTarget(null)}deleteDepthTexture(){const n=this.stableDepthTexture;for(const e of this.passes)e.getDepthTexture()===n&&e.setDepthTexture(null);this.depthRenderTarget!==null&&(this.depthRenderTarget.dispose(),this.depthRenderTarget=null),this.inputBuffer.depthTexture!==null&&(this.inputBuffer.depthTexture.dispose(),this.inputBuffer.depthTexture=null),this.outputBuffer.depthTexture!==null&&(this.outputBuffer.depthTexture.dispose(),this.outputBuffer.depthTexture=null)}createBuffer(n,e,t,i){const s=this.renderer,r=s===null?new oe:s.getDrawingBufferSize(new oe),o=new Ut(r.width,r.height,{minFilter:zt,magFilter:zt,samples:i,stencilBuffer:e,depthBuffer:n,type:t});return t===Ht&&s!==null&&s.outputColorSpace===ot&&(o.texture.colorSpace=ot),o.texture.name="EffectComposer.Buffer",o.texture.generateMipmaps=!1,o}setMainScene(n){for(const e of this.passes)e.mainScene=n}setMainCamera(n){for(const e of this.passes)e.mainCamera=n}addPass(n,e){const t=this.passes,i=this.renderer,s=i.getDrawingBufferSize(new oe),r=i.getContext().getContextAttributes().alpha,o=this.inputBuffer.texture.type;if(n.renderer=i,n.setSize(s.width,s.height),n.initialize(i,r,o),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),n.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,n):t.push(n),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),n.needsDepthTexture||this.depthRenderTarget!==null)if(this.depthRenderTarget===null){this.createDepthTexture();for(const a of t)a.setDepthTexture(this.stableDepthTexture)}else n.setDepthTexture(this.stableDepthTexture)}removePass(n){const e=this.passes,t=e.indexOf(n);if(t!==-1&&e.splice(t,1).length>0){const r=this.stableDepthTexture;if(r!==null){const o=(c,l)=>c||l.needsDepthTexture;e.reduce(o,!1)||(n.getDepthTexture()===r&&n.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&t===e.length&&(n.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const n=this.passes;this.deleteDepthTexture(),n.length>0&&(this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!1),this.passes=[])}render(n){const e=this.renderer,t=this.copyPass;let i=this.inputBuffer,s=this.outputBuffer,r,o=!1;n===void 0&&(this.timer.update(),n=this.timer.getDelta());for(const a of this.passes)if(a.enabled){if(a.render(e,i,s,n,o),a.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(i),a.needsSwap){if(o){t.renderToScreen=a.renderToScreen;const c=e.getContext(),l=e.state.buffers.stencil;l.setFunc(c.NOTEQUAL,1,4294967295),t.render(e,i,s,n,o),l.setFunc(c.EQUAL,1,4294967295)}r=i,i=s,s=r}a instanceof dM?o=!0:a instanceof hM&&(o=!1)}}setSize(n,e,t){const i=this.renderer,s=i.getSize(new oe);(n===void 0||e===void 0)&&(n=s.width,e=s.height),(s.width!==n||s.height!==e)&&i.setSize(n,e,t);const r=i.getDrawingBufferSize(new oe);this.inputBuffer.setSize(r.width,r.height),this.outputBuffer.setSize(r.width,r.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(r.width,r.height);for(const o of this.passes)o.setSize(r.width,r.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const n of this.passes)n.dispose();this.deleteDepthTexture(),this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.copyPass.dispose(),this.timer.dispose(),this.passes=[],xn.fullscreenGeometry.dispose()}},Nn={NONE:0,DEPTH:1,CONVOLUTION:2},dt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},gM=class{constructor(){this.shaderParts=new Map([[dt.FRAGMENT_HEAD,null],[dt.FRAGMENT_MAIN_UV,null],[dt.FRAGMENT_MAIN_IMAGE,null],[dt.VERTEX_HEAD,null],[dt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Nn.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=di}},ma=!1,wh=class{constructor(n=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(n),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case Zt:t=this.materialsFlatShadedDoubleSide;break;case Ot:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case Zt:t=this.materialsDoubleSide;break;case Ot:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(n){if(!(n instanceof Ft))return n.clone();const e=n.uniforms,t=new Map;for(const s in e){const r=e[s].value;r.isRenderTargetTexture&&(e[s].value=null,t.set(s,r))}const i=n.clone();for(const s of t)e[s[0]].value=s[1],i.uniforms[s[0]].value=s[1];return i}setMaterial(n){if(this.disposeMaterials(),this.material=n,n!==null){const e=this.materials=[this.cloneMaterial(n),this.cloneMaterial(n),this.cloneMaterial(n)];for(const t of e)t.uniforms=Object.assign({},n.uniforms),t.side=jn;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=Ot,i}),this.materialsDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=Zt,i}),this.materialsFlatShaded=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=Ot,i}),this.materialsFlatShadedDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=Zt,i})}}render(n,e,t){const i=n.shadowMap.enabled;if(n.shadowMap.enabled=!1,ma){const s=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),n.render(e,t);for(const r of s)r[0].material=r[1];this.meshCount!==s.size&&s.clear()}else{const s=e.overrideMaterial;e.overrideMaterial=this.material,n.render(e,t),e.overrideMaterial=s}n.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){const n=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of n)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return ma}static set workaroundEnabled(n){ma=n}},ci=-1,vn=class extends ei{constructor(n=null,e=ci,t=ci,i=1){super(),n!==null&&this.addEventListener("change",()=>n.setSize(this.baseSize.width,this.baseSize.height)),this.baseSize=new oe(1,1),this.preferredSize=new oe(e,t),this.target=this.preferredSize,this.s=i,this.effectiveSize=new oe,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const n=this.baseSize,e=this.preferredSize,t=this.effectiveSize,i=this.scale;e.width!==ci?t.width=e.width:e.height!==ci?t.width=Math.round(e.height*(n.width/Math.max(n.height,1))):t.width=Math.round(n.width*i),e.height!==ci?t.height=e.height:e.width!==ci?t.height=Math.round(e.width/Math.max(n.width/Math.max(n.height,1),1)):t.height=Math.round(n.height*i)}get width(){return this.effectiveSize.width}set width(n){this.preferredWidth=n}get height(){return this.effectiveSize.height}set height(n){this.preferredHeight=n}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(n){this.s!==n&&(this.s=n,this.preferredSize.setScalar(ci),this.dispatchEvent({type:"change"}))}getScale(){return this.scale}setScale(n){this.scale=n}get baseWidth(){return this.baseSize.width}set baseWidth(n){this.baseSize.width!==n&&(this.baseSize.width=n,this.dispatchEvent({type:"change"}))}getBaseWidth(){return this.baseWidth}setBaseWidth(n){this.baseWidth=n}get baseHeight(){return this.baseSize.height}set baseHeight(n){this.baseSize.height!==n&&(this.baseSize.height=n,this.dispatchEvent({type:"change"}))}getBaseHeight(){return this.baseHeight}setBaseHeight(n){this.baseHeight=n}setBaseSize(n,e){(this.baseSize.width!==n||this.baseSize.height!==e)&&(this.baseSize.set(n,e),this.dispatchEvent({type:"change"}))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(n){this.preferredSize.width!==n&&(this.preferredSize.width=n,this.dispatchEvent({type:"change"}))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(n){this.preferredWidth=n}get preferredHeight(){return this.preferredSize.height}set preferredHeight(n){this.preferredSize.height!==n&&(this.preferredSize.height=n,this.dispatchEvent({type:"change"}))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(n){this.preferredHeight=n}setPreferredSize(n,e){(this.preferredSize.width!==n||this.preferredSize.height!==e)&&(this.preferredSize.set(n,e),this.dispatchEvent({type:"change"}))}copy(n){this.s=n.scale,this.baseSize.set(n.baseWidth,n.baseHeight),this.preferredSize.set(n.preferredWidth,n.preferredHeight),this.dispatchEvent({type:"change"})}static get AUTO_SIZE(){return ci}},et={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},vM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",xM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",MM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",AM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",yM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",SM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",_M="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",wM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",EM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",TM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",bM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",CM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",RM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",DM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",PM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",IM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",LM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",BM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",UM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",FM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",NM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",OM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",zM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",kM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",HM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",GM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",VM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",WM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",XM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",YM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",qM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",QM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",KM=new Map([[et.ADD,vM],[et.ALPHA,xM],[et.AVERAGE,MM],[et.COLOR,AM],[et.COLOR_BURN,yM],[et.COLOR_DODGE,SM],[et.DARKEN,_M],[et.DIFFERENCE,wM],[et.DIVIDE,EM],[et.DST,null],[et.EXCLUSION,TM],[et.HARD_LIGHT,bM],[et.HARD_MIX,CM],[et.HUE,RM],[et.INVERT,DM],[et.INVERT_RGB,PM],[et.LIGHTEN,IM],[et.LINEAR_BURN,LM],[et.LINEAR_DODGE,BM],[et.LINEAR_LIGHT,UM],[et.LUMINOSITY,FM],[et.MULTIPLY,NM],[et.NEGATION,OM],[et.NORMAL,zM],[et.OVERLAY,kM],[et.PIN_LIGHT,HM],[et.REFLECT,GM],[et.SATURATION,VM],[et.SCREEN,WM],[et.SOFT_LIGHT,XM],[et.SRC,YM],[et.SUBTRACT,qM],[et.VIVID_LIGHT,QM]]),ZM=class extends ei{constructor(n,e=1){super(),this._blendFunction=n,this.opacity=new Be(e)}getOpacity(){return this.opacity.value}setOpacity(n){this.opacity.value=n}get blendFunction(){return this._blendFunction}set blendFunction(n){this._blendFunction=n,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(n){this.blendFunction=n}getShaderCode(){return KM.get(this.blendFunction)}},dr=class extends ei{constructor(n,e,{attributes:t=Nn.NONE,blendFunction:i=et.NORMAL,defines:s=new Map,uniforms:r=new Map,extensions:o=null,vertexShader:a=null}={}){super(),this.name=n,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=a,this.defines=s,this.uniforms=r,this.extensions=o,this.blendMode=new ZM(i),this.blendMode.addEventListener("change",c=>this.setChanged()),this._inputColorSpace=di,this._outputColorSpace=Ln}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(n){this._inputColorSpace=n,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n,this.setChanged()}set mainScene(n){}set mainCamera(n){}getName(){return this.name}setRenderer(n){this.renderer=n}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(n){this.attributes=n,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(n){this.fragmentShader=n,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(n){this.vertexShader=n,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(n,e=fi){}update(n,e,t){}setSize(n,e){}initialize(n,e,t){}dispose(){for(const n of Object.keys(this)){const e=this[n];(e instanceof Ut||e instanceof On||e instanceof Lt||e instanceof xn)&&this[n].dispose()}}},Eo={SMALL:1,MEDIUM:2,LARGE:3},JM=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,jM="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",$M=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],eA=class extends Ft{constructor(n=new ft){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new Be(null),texelSize:new Be(new ft),scale:new Be(1),kernel:new Be(0)},blending:qt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:JM,vertexShader:jM}),this.setTexelSize(n.x,n.y),this.kernelSize=Eo.MEDIUM}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.inputBuffer=n}get kernelSequence(){return $M[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(n){this.uniforms.scale.value=n}getScale(){return this.uniforms.scale.value}setScale(n){this.uniforms.scale.value=n}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(n){this.uniforms.kernel.value=n}setKernel(n){this.kernel=n}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e,n*.5,e*.5)}setSize(n,e){const t=1/n,i=1/e;this.uniforms.texelSize.value.set(t,i,t*.5,i*.5)}},Fu=class extends xn{constructor({kernelSize:n=Eo.MEDIUM,resolutionScale:e=.5,width:t=vn.AUTO_SIZE,height:i=vn.AUTO_SIZE,resolutionX:s=t,resolutionY:r=i}={}){super("KawaseBlurPass"),this.renderTargetA=new Ut(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const o=this.resolution=new vn(this,s,r,e);o.addEventListener("change",a=>this.setSize(o.baseWidth,o.baseHeight)),this._blurMaterial=new eA,this._blurMaterial.kernelSize=n,this.copyMaterial=new Uu}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(n){this._blurMaterial=n}get dithering(){return this.copyMaterial.dithering}set dithering(n){this.copyMaterial.dithering=n}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(n){this.blurMaterial.kernelSize=n}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get scale(){return this.blurMaterial.scale}set scale(n){this.blurMaterial.scale=n}getScale(){return this.blurMaterial.scale}setScale(n){this.blurMaterial.scale=n}getKernelSize(){return this.kernelSize}setKernelSize(n){this.kernelSize=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}render(n,e,t,i,s){const r=this.scene,o=this.camera,a=this.renderTargetA,c=this.renderTargetB,l=this.blurMaterial,h=l.kernelSequence;let u=e;this.fullscreenMaterial=l;for(let f=0,d=h.length;f<d;++f){const g=(f&1)===0?a:c;l.kernel=h[f],l.inputBuffer=u.texture,n.setRenderTarget(g),n.render(r,o),u=g}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=u.texture,n.setRenderTarget(this.renderToScreen?null:t),n.render(r,o)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e);const i=t.width,s=t.height;this.renderTargetA.setSize(i,s),this.renderTargetB.setSize(i,s),this.blurMaterial.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,t!==Ht?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):n!==null&&n.outputColorSpace===ot&&(this.renderTargetA.texture.colorSpace=ot,this.renderTargetB.texture.colorSpace=ot))}static get AUTO_SIZE(){return vn.AUTO_SIZE}},tA=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`,nA=class extends Ft{constructor(n=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:Bi.replace(/\D+/g,"")},uniforms:{inputBuffer:new Be(null),threshold:new Be(0),smoothing:new Be(1),range:new Be(null)},blending:qt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:tA,vertexShader:wo}),this.colorOutput=n,this.luminanceRange=e}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get threshold(){return this.uniforms.threshold.value}set threshold(n){this.smoothing>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=n}getThreshold(){return this.threshold}setThreshold(n){this.threshold=n}get smoothing(){return this.uniforms.smoothing.value}set smoothing(n){this.threshold>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=n}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(n){this.smoothing=n}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(n){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(n){n?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(n){return this.colorOutput}setColorOutputEnabled(n){this.colorOutput=n}get useRange(){return this.luminanceRange!==null}set useRange(n){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(n){n!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=n,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(n){this.luminanceRange=n}},Nu=class extends xn{constructor({renderTarget:n,luminanceRange:e,colorOutput:t,resolutionScale:i=1,width:s=vn.AUTO_SIZE,height:r=vn.AUTO_SIZE,resolutionX:o=s,resolutionY:a=r}={}){super("LuminancePass"),this.fullscreenMaterial=new nA(t,e),this.needsSwap=!1,this.renderTarget=n,this.renderTarget===void 0&&(this.renderTarget=new Ut(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const c=this.resolution=new vn(this,o,a,i);c.addEventListener("change",l=>this.setSize(c.baseWidth,c.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(n,e,t,i,s){const r=this.fullscreenMaterial;r.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height)}initialize(n,e,t){t!==void 0&&t!==Ht&&(this.renderTarget.texture.type=t,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},iA=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,sA="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",rA=class extends Ft{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new Be(null),texelSize:new Be(new oe)},blending:qt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:iA,vertexShader:sA})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},oA=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,aA="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",cA=class extends Ft{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new Be(null),supportBuffer:new Be(null),texelSize:new Be(new oe),radius:new Be(.85)},blending:qt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:oA,vertexShader:aA})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}set supportBuffer(n){this.uniforms.supportBuffer.value=n}get radius(){return this.uniforms.radius.value}set radius(n){this.uniforms.radius.value=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},lA=class extends xn{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new Ut(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new rA,this.upsamplingMaterial=new cA,this.resolution=new oe}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(n){if(this.levels!==n){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let t=0;t<n;++t){const i=e.clone();i.texture.name="Downsampling.Mipmap"+t,this.downsamplingMipmaps.push(i)}this.upsamplingMipmaps.push(e);for(let t=1,i=n-1;t<i;++t){const s=e.clone();s.texture.name="Upsampling.Mipmap"+t,this.upsamplingMipmaps.push(s)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(n){this.upsamplingMaterial.radius=n}render(n,e,t,i,s){const{scene:r,camera:o}=this,{downsamplingMaterial:a,upsamplingMaterial:c}=this,{downsamplingMipmaps:l,upsamplingMipmaps:h}=this;let u=e;this.fullscreenMaterial=a;for(let f=0,d=l.length;f<d;++f){const g=l[f];a.setSize(u.width,u.height),a.inputBuffer=u.texture,n.setRenderTarget(g),n.render(r,o),u=g}this.fullscreenMaterial=c;for(let f=h.length-1;f>=0;--f){const d=h[f];c.setSize(u.width,u.height),c.inputBuffer=u.texture,c.supportBuffer=l[f].texture,n.setRenderTarget(d),n.render(r,o),u=d}}setSize(n,e){const t=this.resolution;t.set(n,e);let i=t.width,s=t.height;for(let r=0,o=this.downsamplingMipmaps.length;r<o;++r)i=Math.round(i*.5),s=Math.round(s*.5),this.downsamplingMipmaps[r].setSize(i,s),r<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[r].setSize(i,s)}initialize(n,e,t){if(t!==void 0){const i=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const s of i)s.texture.type=t;if(t!==Ht)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(n!==null&&n.outputColorSpace===ot)for(const s of i)s.texture.colorSpace=ot}}dispose(){super.dispose();for(const n of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))n.dispose()}},hA=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,uA=class extends dr{constructor({blendFunction:n=et.SCREEN,luminanceThreshold:e=1,luminanceSmoothing:t=.03,mipmapBlur:i=!0,intensity:s=1,radius:r=.85,levels:o=8,kernelSize:a=Eo.LARGE,resolutionScale:c=.5,width:l=vn.AUTO_SIZE,height:h=vn.AUTO_SIZE,resolutionX:u=l,resolutionY:f=h}={}){super("BloomEffect",hA,{blendFunction:n,uniforms:new Map([["map",new Be(null)],["intensity",new Be(s)]])}),this.renderTarget=new Ut(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new Fu({kernelSize:a}),this.luminancePass=new Nu({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=t,this.mipmapBlurPass=new lA,this.mipmapBlurPass.enabled=i,this.mipmapBlurPass.radius=r,this.mipmapBlurPass.levels=o,this.uniforms.get("map").value=i?this.mipmapBlurPass.texture:this.renderTarget.texture;const d=this.resolution=new vn(this,u,f,c);d.addEventListener("change",g=>this.setSize(d.baseWidth,d.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get dithering(){return this.blurPass.dithering}set dithering(n){this.blurPass.dithering=n}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(n){this.blurPass.kernelSize=n}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(n){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(n){this.uniforms.get("intensity").value=n}getIntensity(){return this.intensity}setIntensity(n){this.intensity=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}update(n,e,t){const i=this.renderTarget,s=this.luminancePass;s.enabled?(s.render(n,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(n,s.renderTarget):this.blurPass.render(n,s.renderTarget,i)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(n,e):this.blurPass.render(n,e,i)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height),this.blurPass.resolution.copy(t),this.luminancePass.setSize(n,e),this.mipmapBlurPass.setSize(n,e)}initialize(n,e,t){this.blurPass.initialize(n,e,t),this.luminancePass.initialize(n,e,t),this.mipmapBlurPass.initialize(n,e,t),t!==void 0&&(this.renderTarget.texture.type=t,n!==null&&n.outputColorSpace===ot&&(this.renderTarget.texture.colorSpace=ot))}},pc=class extends xn{constructor(n,e="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=n,this.input=e}setInput(n){this.input=n}render(n,e,t,i,s){const r=this.fullscreenMaterial.uniforms;e!==null&&r!==void 0&&r[this.input]!==void 0&&(r[this.input].value=e.texture),n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}initialize(n,e,t){t!==void 0&&t!==Ht&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},dA=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform vec2 lightPosition;uniform float exposure;uniform float decay;uniform float density;uniform float weight;uniform float clampMax;varying vec2 vUv;void main(){vec2 coord=vUv;vec2 delta=lightPosition-coord;delta*=1.0/SAMPLES_FLOAT*density;float illuminationDecay=1.0;vec4 color=vec4(0.0);for(int i=0;i<SAMPLES_INT;++i){coord+=delta;vec4 texel=texture2D(inputBuffer,coord);texel*=illuminationDecay*weight;color+=texel;illuminationDecay*=decay;}gl_FragColor=clamp(color*exposure,0.0,clampMax);
#include <dithering_fragment>
}`,fA=class extends Ft{constructor(n){super({name:"GodRaysMaterial",defines:{SAMPLES_INT:"60",SAMPLES_FLOAT:"60.0"},uniforms:{inputBuffer:new Be(null),lightPosition:new Be(n),density:new Be(1),decay:new Be(1),weight:new Be(1),exposure:new Be(1),clampMax:new Be(1)},blending:qt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:dA,vertexShader:wo})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get lightPosition(){return this.uniforms.lightPosition.value}getLightPosition(){return this.uniforms.lightPosition.value}setLightPosition(n){this.uniforms.lightPosition.value=n}get density(){return this.uniforms.density.value}set density(n){this.uniforms.density.value=n}getDensity(){return this.uniforms.density.value}setDensity(n){this.uniforms.density.value=n}get decay(){return this.uniforms.decay.value}set decay(n){this.uniforms.decay.value=n}getDecay(){return this.uniforms.decay.value}setDecay(n){this.uniforms.decay.value=n}get weight(){return this.uniforms.weight.value}set weight(n){this.uniforms.weight.value=n}getWeight(){return this.uniforms.weight.value}setWeight(n){this.uniforms.weight.value=n}get exposure(){return this.uniforms.exposure.value}set exposure(n){this.uniforms.exposure.value=n}getExposure(){return this.uniforms.exposure.value}setExposure(n){this.uniforms.exposure.value=n}get maxIntensity(){return this.uniforms.clampMax.value}set maxIntensity(n){this.uniforms.clampMax.value=n}getMaxIntensity(){return this.uniforms.clampMax.value}setMaxIntensity(n){this.uniforms.clampMax.value=n}get samples(){return Number(this.defines.SAMPLES_INT)}set samples(n){const e=Math.floor(n);this.defines.SAMPLES_INT=e.toFixed(0),this.defines.SAMPLES_FLOAT=e.toFixed(1),this.needsUpdate=!0}getSamples(){return this.samples}setSamples(n){this.samples=n}},Ou=class extends xn{constructor(n,e,t=null){super("RenderPass",n,e),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new Wc,this.overrideMaterialManager=t===null?null:new wh(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get renderToScreen(){return super.renderToScreen}set renderToScreen(n){super.renderToScreen=n,this.clearPass.renderToScreen=n}get overrideMaterial(){const n=this.overrideMaterialManager;return n!==null?n.material:null}set overrideMaterial(n){const e=this.overrideMaterialManager;n!==null?e!==null?e.setMaterial(n):this.overrideMaterialManager=new wh(n):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(n){this.overrideMaterial=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getSelection(){return this.selection}setSelection(n){this.selection=n}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(n){this.ignoreBackground=n}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(n){this.skipShadowMapUpdate=n}getClearPass(){return this.clearPass}render(n,e,t,i,s){const r=this.scene,o=this.camera,a=this.selection,c=o.layers.mask,l=r.background,h=n.shadowMap.autoUpdate,u=this.renderToScreen?null:e;a!==null&&o.layers.set(a.getLayer()),this.skipShadowMapUpdate&&(n.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(r.background=null),this.clearPass.enabled&&this.clearPass.render(n,e),n.setRenderTarget(u),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(n,r,o):n.render(r,o),o.layers.mask=c,r.background=l,n.shadowMap.autoUpdate=h}},pA=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv);}`,ga=new R,Eh=new lt,mA=class extends dr{constructor(n,e,{blendFunction:t=et.SCREEN,samples:i=60,density:s=.96,decay:r=.9,weight:o=.4,exposure:a=.6,clampMax:c=1,blur:l=!0,kernelSize:h=Eo.SMALL,resolutionScale:u=.5,width:f=vn.AUTO_SIZE,height:d=vn.AUTO_SIZE,resolutionX:g=f,resolutionY:v=d}={}){super("GodRaysEffect",pA,{blendFunction:t,attributes:Nn.DEPTH,uniforms:new Map([["map",new Be(null)]])}),this.camera=n,this._lightSource=e,this.lightSource=e,this.lightScene=new nr,this.screenPosition=new oe,this.renderTargetA=new Ut(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="GodRays.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="GodRays.Target.B",this.uniforms.get("map").value=this.renderTargetB.texture,this.renderTargetLight=new Ut(1,1),this.renderTargetLight.texture.name="GodRays.Light",this.renderTargetLight.depthTexture=new yo,this.renderPassLight=new Ou(this.lightScene,n),this.renderPassLight.clearPass.enabled=!1,this.blurPass=new Fu({kernelSize:h}),this.blurPass.enabled=l,this.copyPass=new Vc(this.renderTargetLight),this.copyPass.fullscreenMaterial.channelWeights=new ft(0,0,0,1),this.godRaysPass=new pc(new fA(this.screenPosition));const m=this.godRaysMaterial;m.density=s,m.decay=r,m.weight=o,m.exposure=a,m.maxIntensity=c,m.samples=i;const p=this.resolution=new vn(this,g,v,u);p.addEventListener("change",x=>this.setSize(p.baseWidth,p.baseHeight))}set mainCamera(n){this.camera=n,this.renderPassLight.mainCamera=n}get lightSource(){return this._lightSource}set lightSource(n){this._lightSource=n,n!==null&&(n.material.depthWrite=!1,n.material.transparent=!0)}getBlurPass(){return this.blurPass}get texture(){return this.renderTargetB.texture}getTexture(){return this.texture}get godRaysMaterial(){return this.godRaysPass.fullscreenMaterial}getGodRaysMaterial(){return this.godRaysMaterial}getResolution(){return this.resolution}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get dithering(){return this.godRaysMaterial.dithering}set dithering(n){const e=this.godRaysMaterial;e.dithering=n,e.needsUpdate=!0}get blur(){return this.blurPass.enabled}set blur(n){this.blurPass.enabled=n}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(n){this.blurPass.kernelSize=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}get samples(){return this.godRaysMaterial.samples}set samples(n){this.godRaysMaterial.samples=n}setDepthTexture(n,e=fi){this.copyPass.fullscreenMaterial.depthBuffer=n,this.copyPass.fullscreenMaterial.depthPacking=e}update(n,e,t){const i=this.lightSource,s=i.parent,r=i.matrixAutoUpdate,o=this.renderTargetA,a=this.renderTargetLight;i.material.depthWrite=!0,i.matrixAutoUpdate=!1,i.updateWorldMatrix(!0,!1),s!==null&&(r||Eh.copy(i.matrix),i.matrix.copy(i.matrixWorld)),this.lightScene.add(i),this.copyPass.render(n,e),this.renderPassLight.render(n,a),i.material.depthWrite=!1,i.matrixAutoUpdate=r,s!==null&&(r||i.matrix.copy(Eh),s.add(i)),ga.setFromMatrixPosition(i.matrixWorld).project(this.camera),this.screenPosition.set(Math.min(Math.max((ga.x+1)*.5,-1),2),Math.min(Math.max((ga.y+1)*.5,-1),2));let c=a;this.blurPass.enabled&&(this.blurPass.render(n,c,o),c=o),this.godRaysPass.render(n,c,this.renderTargetB)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e);const i=t.width,s=t.height;this.renderTargetLight.setSize(n,e),this.renderTargetA.setSize(i,s),this.renderTargetB.setSize(i,s),this.blurPass.resolution.copy(t)}initialize(n,e,t){this.blurPass.initialize(n,e,t),this.renderPassLight.initialize(n,e,t),this.copyPass.initialize(n,e,t),this.godRaysPass.initialize(n,e,t),t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,this.renderTargetLight.texture.type=t,n!==null&&n.outputColorSpace===ot&&(this.renderTargetA.texture.colorSpace=ot,this.renderTargetB.texture.colorSpace=ot,this.renderTargetLight.texture.colorSpace=ot))}},zu={COLOR:2},gA={DISABLED:0},Hs={LOW:0,MEDIUM:1,HIGH:2,ULTRA:3},hn={LINEAR:0,REINHARD:1,REINHARD2:2,REINHARD2_ADAPTIVE:3,OPTIMIZED_CINEON:5,CINEON:5,ACES_FILMIC:6,AGX:7,NEUTRAL:8},Gs={DEFAULT:0,ESKIL:1},vA=`varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
#if EDGE_DETECTION_MODE == 1
#include <common>
#endif
#if EDGE_DETECTION_MODE == 0 || PREDICATION_MODE == 1
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}vec3 gatherNeighbors(){float p=readDepth(vUv);float pLeft=readDepth(vUv0);float pTop=readDepth(vUv1);return vec3(p,pLeft,pTop);}
#elif PREDICATION_MODE == 2
uniform sampler2D predicationBuffer;vec3 gatherNeighbors(){float p=texture2D(predicationBuffer,vUv).r;float pLeft=texture2D(predicationBuffer,vUv0).r;float pTop=texture2D(predicationBuffer,vUv1).r;return vec3(p,pLeft,pTop);}
#endif
#if PREDICATION_MODE != 0
vec2 calculatePredicatedThreshold(){vec3 neighbours=gatherNeighbors();vec2 delta=abs(neighbours.xx-neighbours.yz);vec2 edges=step(PREDICATION_THRESHOLD,delta);return PREDICATION_SCALE*EDGE_THRESHOLD*(1.0-PREDICATION_STRENGTH*edges);}
#endif
#if EDGE_DETECTION_MODE != 0
uniform sampler2D inputBuffer;
#endif
void main(){
#if EDGE_DETECTION_MODE == 0
const vec2 threshold=vec2(DEPTH_THRESHOLD);
#elif PREDICATION_MODE != 0
vec2 threshold=calculatePredicatedThreshold();
#else
const vec2 threshold=vec2(EDGE_THRESHOLD);
#endif
#if EDGE_DETECTION_MODE == 0
vec3 neighbors=gatherNeighbors();vec2 delta=abs(neighbors.xx-vec2(neighbors.y,neighbors.z));vec2 edges=step(threshold,delta);if(dot(edges,vec2(1.0))==0.0){discard;}gl_FragColor=vec4(edges,0.0,1.0);
#elif EDGE_DETECTION_MODE == 1
float l=luminance(texture2D(inputBuffer,vUv).rgb);float lLeft=luminance(texture2D(inputBuffer,vUv0).rgb);float lTop=luminance(texture2D(inputBuffer,vUv1).rgb);vec4 delta;delta.xy=abs(l-vec2(lLeft,lTop));vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}float lRight=luminance(texture2D(inputBuffer,vUv2).rgb);float lBottom=luminance(texture2D(inputBuffer,vUv3).rgb);delta.zw=abs(l-vec2(lRight,lBottom));vec2 maxDelta=max(delta.xy,delta.zw);float lLeftLeft=luminance(texture2D(inputBuffer,vUv4).rgb);float lTopTop=luminance(texture2D(inputBuffer,vUv5).rgb);delta.zw=abs(vec2(lLeft,lTop)-vec2(lLeftLeft,lTopTop));maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges.xy*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);
#elif EDGE_DETECTION_MODE == 2
vec4 delta;vec3 c=texture2D(inputBuffer,vUv).rgb;vec3 cLeft=texture2D(inputBuffer,vUv0).rgb;vec3 t=abs(c-cLeft);delta.x=max(max(t.r,t.g),t.b);vec3 cTop=texture2D(inputBuffer,vUv1).rgb;t=abs(c-cTop);delta.y=max(max(t.r,t.g),t.b);vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}vec3 cRight=texture2D(inputBuffer,vUv2).rgb;t=abs(c-cRight);delta.z=max(max(t.r,t.g),t.b);vec3 cBottom=texture2D(inputBuffer,vUv3).rgb;t=abs(c-cBottom);delta.w=max(max(t.r,t.g),t.b);vec2 maxDelta=max(delta.xy,delta.zw);vec3 cLeftLeft=texture2D(inputBuffer,vUv4).rgb;t=abs(c-cLeftLeft);delta.z=max(max(t.r,t.g),t.b);vec3 cTopTop=texture2D(inputBuffer,vUv5).rgb;t=abs(c-cTopTop);delta.w=max(max(t.r,t.g),t.b);maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);
#endif
}`,xA=`uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,0.0);vUv1=vUv+texelSize*vec2(0.0,-1.0);
#if EDGE_DETECTION_MODE != 0
vUv2=vUv+texelSize*vec2(1.0,0.0);vUv3=vUv+texelSize*vec2(0.0,1.0);vUv4=vUv+texelSize*vec2(-2.0,0.0);vUv5=vUv+texelSize*vec2(0.0,-2.0);
#endif
gl_Position=vec4(position.xy,1.0,1.0);}`,MA=class extends Ft{constructor(n=new oe,e=zu.COLOR){super({name:"EdgeDetectionMaterial",defines:{THREE_REVISION:Bi.replace(/\D+/g,""),LOCAL_CONTRAST_ADAPTATION_FACTOR:"2.0",EDGE_THRESHOLD:"0.1",DEPTH_THRESHOLD:"0.01",PREDICATION_MODE:"0",PREDICATION_THRESHOLD:"0.01",PREDICATION_SCALE:"2.0",PREDICATION_STRENGTH:"1.0",DEPTH_PACKING:"0"},uniforms:{inputBuffer:new Be(null),depthBuffer:new Be(null),predicationBuffer:new Be(null),texelSize:new Be(n)},blending:qt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:vA,vertexShader:xA}),this.edgeDetectionMode=e}set depthBuffer(n){this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=fi){this.depthBuffer=n,this.depthPacking=e}get edgeDetectionMode(){return Number(this.defines.EDGE_DETECTION_MODE)}set edgeDetectionMode(n){this.defines.EDGE_DETECTION_MODE=n.toFixed(0),this.needsUpdate=!0}getEdgeDetectionMode(){return this.edgeDetectionMode}setEdgeDetectionMode(n){this.edgeDetectionMode=n}get localContrastAdaptationFactor(){return Number(this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR)}set localContrastAdaptationFactor(n){this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR=n.toFixed("6"),this.needsUpdate=!0}getLocalContrastAdaptationFactor(){return this.localContrastAdaptationFactor}setLocalContrastAdaptationFactor(n){this.localContrastAdaptationFactor=n}get edgeDetectionThreshold(){return Number(this.defines.EDGE_THRESHOLD)}set edgeDetectionThreshold(n){this.defines.EDGE_THRESHOLD=n.toFixed("6"),this.defines.DEPTH_THRESHOLD=(n*.1).toFixed("6"),this.needsUpdate=!0}getEdgeDetectionThreshold(){return this.edgeDetectionThreshold}setEdgeDetectionThreshold(n){this.edgeDetectionThreshold=n}get predicationMode(){return Number(this.defines.PREDICATION_MODE)}set predicationMode(n){this.defines.PREDICATION_MODE=n.toFixed(0),this.needsUpdate=!0}getPredicationMode(){return this.predicationMode}setPredicationMode(n){this.predicationMode=n}set predicationBuffer(n){this.uniforms.predicationBuffer.value=n}setPredicationBuffer(n){this.uniforms.predicationBuffer.value=n}get predicationThreshold(){return Number(this.defines.PREDICATION_THRESHOLD)}set predicationThreshold(n){this.defines.PREDICATION_THRESHOLD=n.toFixed("6"),this.needsUpdate=!0}getPredicationThreshold(){return this.predicationThreshold}setPredicationThreshold(n){this.predicationThreshold=n}get predicationScale(){return Number(this.defines.PREDICATION_SCALE)}set predicationScale(n){this.defines.PREDICATION_SCALE=n.toFixed("6"),this.needsUpdate=!0}getPredicationScale(){return this.predicationScale}setPredicationScale(n){this.predicationScale=n}get predicationStrength(){return Number(this.defines.PREDICATION_STRENGTH)}set predicationStrength(n){this.defines.PREDICATION_STRENGTH=n.toFixed("6"),this.needsUpdate=!0}getPredicationStrength(){return this.predicationStrength}setPredicationStrength(n){this.predicationStrength=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},AA=`#define sampleLevelZeroOffset(t, coord, offset) texture2D(t, coord + offset * texelSize)
#if __VERSION__ < 300
#define round(v) floor(v + 0.5)
#endif
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform lowp sampler2D areaTexture;uniform lowp sampler2D searchTexture;uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}vec2 decodeDiagBilinearAccess(in vec2 e){e.r=e.r*abs(5.0*e.r-5.0*0.75);return round(e);}vec4 decodeDiagBilinearAccess(in vec4 e){e.rb=e.rb*abs(5.0*e.rb-5.0*0.75);return round(e);}vec2 searchDiag1(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 searchDiag2(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);coord.x+=0.25*texelSize.x;vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;e=decodeDiagBilinearAccess(e);coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 areaDiag(const in vec2 dist,const in vec2 e,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE_DIAG,AREATEX_MAX_DISTANCE_DIAG)*e+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.x+=0.5;texCoord.y+=AREATEX_SUBTEX_SIZE*offset;return texture2D(areaTexture,texCoord).rg;}vec2 calculateDiagWeights(const in vec2 texCoord,const in vec2 e,const in vec4 subsampleIndices){vec2 weights=vec2(0.0);vec4 d;vec2 end;if(e.r>0.0){d.xz=searchDiag1(texCoord,vec2(-1.0,1.0),end);d.x+=float(end.y>0.9);}else{d.xz=vec2(0.0);}d.yw=searchDiag1(texCoord,vec2(1.0,-1.0),end);if(d.x+d.y>2.0){vec4 coords=vec4(-d.x+0.25,d.x,d.y,-d.y-0.25)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.xy=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).rg;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).rg;c.yxwz=decodeDiagBilinearAccess(c.xyzw);vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.z);}d.xz=searchDiag2(texCoord,vec2(-1.0,-1.0),end);if(sampleLevelZeroOffset(inputBuffer,texCoord,vec2(1,0)).r>0.0){d.yw=searchDiag2(texCoord,vec2(1.0),end);d.y+=float(end.y>0.9);}else{d.yw=vec2(0.0);}if(d.x+d.y>2.0){vec4 coords=vec4(-d.x,-d.x,d.y,d.y)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.x=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).g;c.y=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(0,-1)).r;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).gr;vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.w).gr;}return weights;}float searchLength(const in vec2 e,const in float offset){vec2 scale=SEARCHTEX_SIZE*vec2(0.5,-1.0);vec2 bias=SEARCHTEX_SIZE*vec2(offset,1.0);scale+=vec2(-1.0,1.0);bias+=vec2(0.5,-0.5);scale*=1.0/SEARCHTEX_PACKED_SIZE;bias*=1.0/SEARCHTEX_PACKED_SIZE;return texture2D(searchTexture,scale*e+bias).r;}float searchXLeft(in vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x>end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(-2.0,0.0)*texelSize+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.0)+3.25;return texelSize.x*offset+texCoord.x;}float searchXRight(vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x<end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(2.0,0.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.5)+3.25;return-texelSize.x*offset+texCoord.x;}float searchYUp(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.y>end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=-vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.0)+3.25;return texelSize.y*offset+texCoord.y;}float searchYDown(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;i++){if(!(texCoord.y<end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.5)+3.25;return-texelSize.y*offset+texCoord.y;}vec2 area(const in vec2 dist,const in float e1,const in float e2,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE)*round(4.0*vec2(e1,e2))+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.y=AREATEX_SUBTEX_SIZE*offset+texCoord.y;return texture2D(areaTexture,texCoord).rg;}void detectHorizontalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){
#if !defined(DISABLE_CORNER_DETECTION)
vec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,1)).r;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).r;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,-2)).r;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,-2)).r;weights*=clamp(factor,0.0,1.0);
#endif
}void detectVerticalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){
#if !defined(DISABLE_CORNER_DETECTION)
vec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(1,0)).g;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).g;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(-2,0)).g;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(-2,1)).g;weights*=clamp(factor,0.0,1.0);
#endif
}void main(){vec4 weights=vec4(0.0);vec4 subsampleIndices=vec4(0.0);vec2 e=texture2D(inputBuffer,vUv).rg;if(e.g>0.0){
#if !defined(DISABLE_DIAG_DETECTION)
weights.rg=calculateDiagWeights(vUv,e,subsampleIndices);if(weights.r==-weights.g){
#endif
vec2 d;vec3 coords;coords.x=searchXLeft(vOffset[0].xy,vOffset[2].x);coords.y=vOffset[1].y;d.x=coords.x;float e1=texture2D(inputBuffer,coords.xy).r;coords.z=searchXRight(vOffset[0].zw,vOffset[2].y);d.y=coords.z;d=round(resolution.xx*d+-vPixCoord.xx);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.zy,vec2(1,0)).r;weights.rg=area(sqrtD,e1,e2,subsampleIndices.y);coords.y=vUv.y;detectHorizontalCornerPattern(weights.rg,coords.xyzy,d);
#if !defined(DISABLE_DIAG_DETECTION)
}else{e.r=0.0;}
#endif
}if(e.r>0.0){vec2 d;vec3 coords;coords.y=searchYUp(vOffset[1].xy,vOffset[2].z);coords.x=vOffset[0].x;d.x=coords.y;float e1=texture2D(inputBuffer,coords.xy).g;coords.z=searchYDown(vOffset[1].zw,vOffset[2].w);d.y=coords.z;d=round(resolution.yy*d-vPixCoord.yy);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.xz,vec2(0,1)).g;weights.ba=area(sqrtD,e1,e2,subsampleIndices.x);coords.x=vUv.x;detectVerticalCornerPattern(weights.ba,coords.xyxz,d);}gl_FragColor=weights;}`,yA="uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void main(){vUv=position.xy*0.5+0.5;vPixCoord=vUv*resolution;vOffset[0]=vUv.xyxy+texelSize.xyxy*vec4(-0.25,-0.125,1.25,-0.125);vOffset[1]=vUv.xyxy+texelSize.xyxy*vec4(-0.125,-0.25,-0.125,1.25);vOffset[2]=vec4(vOffset[0].xz,vOffset[1].yw)+vec4(-2.0,2.0,-2.0,2.0)*texelSize.xxyy*MAX_SEARCH_STEPS_FLOAT;gl_Position=vec4(position.xy,1.0,1.0);}",SA=class extends Ft{constructor(n=new oe,e=new oe){super({name:"SMAAWeightsMaterial",defines:{MAX_SEARCH_STEPS_INT:"16",MAX_SEARCH_STEPS_FLOAT:"16.0",MAX_SEARCH_STEPS_DIAG_INT:"8",MAX_SEARCH_STEPS_DIAG_FLOAT:"8.0",CORNER_ROUNDING:"25",CORNER_ROUNDING_NORM:"0.25",AREATEX_MAX_DISTANCE:"16.0",AREATEX_MAX_DISTANCE_DIAG:"20.0",AREATEX_PIXEL_SIZE:"(1.0 / vec2(160.0, 560.0))",AREATEX_SUBTEX_SIZE:"(1.0 / 7.0)",SEARCHTEX_SIZE:"vec2(66.0, 33.0)",SEARCHTEX_PACKED_SIZE:"vec2(64.0, 16.0)"},uniforms:{inputBuffer:new Be(null),searchTexture:new Be(null),areaTexture:new Be(null),resolution:new Be(e),texelSize:new Be(n)},blending:qt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:AA,vertexShader:yA})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get searchTexture(){return this.uniforms.searchTexture.value}set searchTexture(n){this.uniforms.searchTexture.value=n}get areaTexture(){return this.uniforms.areaTexture.value}set areaTexture(n){this.uniforms.areaTexture.value=n}setLookupTextures(n,e){this.searchTexture=n,this.areaTexture=e}get orthogonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_INT)}set orthogonalSearchSteps(n){const e=Math.min(Math.max(n,0),112);this.defines.MAX_SEARCH_STEPS_INT=e.toFixed("0"),this.defines.MAX_SEARCH_STEPS_FLOAT=e.toFixed("1"),this.needsUpdate=!0}setOrthogonalSearchSteps(n){this.orthogonalSearchSteps=n}get diagonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_DIAG_INT)}set diagonalSearchSteps(n){const e=Math.min(Math.max(n,0),20);this.defines.MAX_SEARCH_STEPS_DIAG_INT=e.toFixed("0"),this.defines.MAX_SEARCH_STEPS_DIAG_FLOAT=e.toFixed("1"),this.needsUpdate=!0}setDiagonalSearchSteps(n){this.diagonalSearchSteps=n}get diagonalDetection(){return this.defines.DISABLE_DIAG_DETECTION===void 0}set diagonalDetection(n){n?delete this.defines.DISABLE_DIAG_DETECTION:this.defines.DISABLE_DIAG_DETECTION="1",this.needsUpdate=!0}isDiagonalDetectionEnabled(){return this.diagonalDetection}setDiagonalDetectionEnabled(n){this.diagonalDetection=n}get cornerRounding(){return Number(this.defines.CORNER_ROUNDING)}set cornerRounding(n){const e=Math.min(Math.max(n,0),100);this.defines.CORNER_ROUNDING=e.toFixed("4"),this.defines.CORNER_ROUNDING_NORM=(e/100).toFixed("4"),this.needsUpdate=!0}setCornerRounding(n){this.cornerRounding=n}get cornerDetection(){return this.defines.DISABLE_CORNER_DETECTION===void 0}set cornerDetection(n){n?delete this.defines.DISABLE_CORNER_DETECTION:this.defines.DISABLE_CORNER_DETECTION="1",this.needsUpdate=!0}isCornerRoundingEnabled(){return this.cornerDetection}setCornerRoundingEnabled(n){this.cornerDetection=n}setSize(n,e){const t=this.uniforms;t.texelSize.value.set(1/n,1/e),t.resolution.value.set(n,e)}},Th="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAAAeElEQVRYR+2XSwqAMAxEJ168ePEqwRSKhIIiuHjJqiU0gWE+1CQdApcVAMUAuARaMGCX1MIL/Ow13++9lW2s3mW9MWvsnWc/2fvGygwPAN4E8QzAA4CXAB6AHjG4JTHYI1ey3pcx6FHnEfhLDOIBKAmUBK6/ANUDTlROXAHd9EC1AAAAAElFTkSuQmCC",bh="data:image/png;base64,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",_A="uniform sampler2D weightMap;varying vec2 vOffset0;varying vec2 vOffset1;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 a;a.x=texture2D(weightMap,vOffset0).a;a.y=texture2D(weightMap,vOffset1).g;a.wz=texture2D(weightMap,uv).rb;vec4 color=inputColor;if(dot(a,vec4(1.0))>=1e-5){bool h=max(a.x,a.z)>max(a.y,a.w);vec4 blendingOffset=vec4(0.0,a.y,0.0,a.w);vec2 blendingWeight=a.yw;movec(bvec4(h),blendingOffset,vec4(a.x,0.0,a.z,0.0));movec(bvec2(h),blendingWeight,a.xz);blendingWeight/=dot(blendingWeight,vec2(1.0));vec4 blendingCoord=blendingOffset*vec4(texelSize,-texelSize)+uv.xyxy;color=blendingWeight.x*texture2D(inputBuffer,blendingCoord.xy);color+=blendingWeight.y*texture2D(inputBuffer,blendingCoord.zw);}outputColor=color;}",wA="varying vec2 vOffset0;varying vec2 vOffset1;void mainSupport(const in vec2 uv){vOffset0=uv+texelSize*vec2(1.0,0.0);vOffset1=uv+texelSize*vec2(0.0,1.0);}",EA=class extends dr{constructor({blendFunction:n=et.SRC,preset:e=Hs.MEDIUM,edgeDetectionMode:t=zu.COLOR,predicationMode:i=gA.DISABLED}={}){super("SMAAEffect",_A,{vertexShader:wA,blendFunction:n,attributes:Nn.CONVOLUTION|Nn.DEPTH,uniforms:new Map([["weightMap",new Be(null)]])});let s,r;arguments.length>1&&(s=arguments[0],r=arguments[1],arguments.length>2&&(e=arguments[2]),arguments.length>3&&(t=arguments[3])),this.renderTargetEdges=new Ut(1,1,{depthBuffer:!1}),this.renderTargetEdges.texture.name="SMAA.Edges",this.renderTargetWeights=this.renderTargetEdges.clone(),this.renderTargetWeights.texture.name="SMAA.Weights",this.uniforms.get("weightMap").value=this.renderTargetWeights.texture,this.clearPass=new Wc(!0,!1,!1),this.clearPass.overrideClearColor=new Re(0),this.clearPass.overrideClearAlpha=1,this.edgeDetectionPass=new pc(new MA),this.edgeDetectionMaterial.edgeDetectionMode=t,this.edgeDetectionMaterial.predicationMode=i,this.weightsPass=new pc(new SA);const o=new xu;o.onLoad=()=>{const a=new Lt(s);a.name="SMAA.Search",a.magFilter=jt,a.minFilter=jt,a.generateMipmaps=!1,a.needsUpdate=!0,a.flipY=!0,this.weightsMaterial.searchTexture=a;const c=new Lt(r);c.name="SMAA.Area",c.magFilter=zt,c.minFilter=zt,c.generateMipmaps=!1,c.needsUpdate=!0,c.flipY=!1,this.weightsMaterial.areaTexture=c,this.dispatchEvent({type:"load"})},o.itemStart("search"),o.itemStart("area"),s!==void 0&&r!==void 0?(o.itemEnd("search"),o.itemEnd("area")):typeof Image<"u"&&(s=new Image,r=new Image,s.addEventListener("load",()=>o.itemEnd("search")),r.addEventListener("load",()=>o.itemEnd("area")),s.src=Th,r.src=bh),this.applyPreset(e)}get edgesTexture(){return this.renderTargetEdges.texture}getEdgesTexture(){return this.edgesTexture}get weightsTexture(){return this.renderTargetWeights.texture}getWeightsTexture(){return this.weightsTexture}get edgeDetectionMaterial(){return this.edgeDetectionPass.fullscreenMaterial}get colorEdgesMaterial(){return this.edgeDetectionMaterial}getEdgeDetectionMaterial(){return this.edgeDetectionMaterial}get weightsMaterial(){return this.weightsPass.fullscreenMaterial}getWeightsMaterial(){return this.weightsMaterial}setEdgeDetectionThreshold(n){this.edgeDetectionMaterial.edgeDetectionThreshold=n}setOrthogonalSearchSteps(n){this.weightsMaterial.orthogonalSearchSteps=n}applyPreset(n){const e=this.edgeDetectionMaterial,t=this.weightsMaterial;switch(n){case Hs.LOW:e.edgeDetectionThreshold=.15,t.orthogonalSearchSteps=4,t.diagonalDetection=!1,t.cornerDetection=!1;break;case Hs.MEDIUM:e.edgeDetectionThreshold=.1,t.orthogonalSearchSteps=8,t.diagonalDetection=!1,t.cornerDetection=!1;break;case Hs.HIGH:e.edgeDetectionThreshold=.1,t.orthogonalSearchSteps=16,t.diagonalSearchSteps=8,t.cornerRounding=25,t.diagonalDetection=!0,t.cornerDetection=!0;break;case Hs.ULTRA:e.edgeDetectionThreshold=.05,t.orthogonalSearchSteps=32,t.diagonalSearchSteps=16,t.cornerRounding=25,t.diagonalDetection=!0,t.cornerDetection=!0;break}}setDepthTexture(n,e=fi){this.edgeDetectionMaterial.depthBuffer=n,this.edgeDetectionMaterial.depthPacking=e}update(n,e,t){this.clearPass.render(n,this.renderTargetEdges),this.edgeDetectionPass.render(n,e,this.renderTargetEdges),this.weightsPass.render(n,this.renderTargetEdges,this.renderTargetWeights)}setSize(n,e){this.edgeDetectionMaterial.setSize(n,e),this.weightsMaterial.setSize(n,e),this.renderTargetEdges.setSize(n,e),this.renderTargetWeights.setSize(n,e)}dispose(){const{searchTexture:n,areaTexture:e}=this.weightsMaterial;n!==null&&e!==null&&(n.dispose(),e.dispose()),super.dispose()}static get searchImageDataURL(){return Th}static get areaImageDataURL(){return bh}},TA=`#include <packing>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
uniform lowp sampler2D luminanceBuffer0;uniform lowp sampler2D luminanceBuffer1;uniform float minLuminance;uniform float deltaTime;uniform float tau;varying vec2 vUv;void main(){float l0=unpackRGBAToFloat(texture2D(luminanceBuffer0,vUv));
#if __VERSION__ < 300
float l1=texture2DLodEXT(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#else
float l1=textureLod(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#endif
l0=max(minLuminance,l0);l1=max(minLuminance,l1);float adaptedLum=l0+(l1-l0)*(1.0-exp(-deltaTime*tau));gl_FragColor=(adaptedLum==1.0)?vec4(1.0):packFloatToRGBA(adaptedLum);}`,bA=class extends Ft{constructor(){super({name:"AdaptiveLuminanceMaterial",defines:{MIP_LEVEL_1X1:"0.0"},uniforms:{luminanceBuffer0:new Be(null),luminanceBuffer1:new Be(null),minLuminance:new Be(.01),deltaTime:new Be(0),tau:new Be(1)},extensions:{shaderTextureLOD:!0},blending:qt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:TA,vertexShader:wo})}set luminanceBuffer0(n){this.uniforms.luminanceBuffer0.value=n}setLuminanceBuffer0(n){this.uniforms.luminanceBuffer0.value=n}set luminanceBuffer1(n){this.uniforms.luminanceBuffer1.value=n}setLuminanceBuffer1(n){this.uniforms.luminanceBuffer1.value=n}set mipLevel1x1(n){this.defines.MIP_LEVEL_1X1=n.toFixed(1),this.needsUpdate=!0}setMipLevel1x1(n){this.mipLevel1x1=n}set deltaTime(n){this.uniforms.deltaTime.value=n}setDeltaTime(n){this.uniforms.deltaTime.value=n}get minLuminance(){return this.uniforms.minLuminance.value}set minLuminance(n){this.uniforms.minLuminance.value=n}getMinLuminance(){return this.uniforms.minLuminance.value}setMinLuminance(n){this.uniforms.minLuminance.value=n}get adaptationRate(){return this.uniforms.tau.value}set adaptationRate(n){this.uniforms.tau.value=n}getAdaptationRate(){return this.uniforms.tau.value}setAdaptationRate(n){this.uniforms.tau.value=n}},CA=class extends xn{constructor(n,{minLuminance:e=.01,adaptationRate:t=1}={}){super("AdaptiveLuminancePass"),this.fullscreenMaterial=new bA,this.needsSwap=!1,this.renderTargetPrevious=new Ut(1,1,{minFilter:jt,magFilter:jt,depthBuffer:!1}),this.renderTargetPrevious.texture.name="Luminance.Previous";const i=this.fullscreenMaterial;i.luminanceBuffer0=this.renderTargetPrevious.texture,i.luminanceBuffer1=n,i.minLuminance=e,i.adaptationRate=t,this.renderTargetAdapted=this.renderTargetPrevious.clone(),this.renderTargetAdapted.texture.name="Luminance.Adapted",this.copyPass=new Vc(this.renderTargetPrevious,!1)}get texture(){return this.renderTargetAdapted.texture}getTexture(){return this.renderTargetAdapted.texture}set mipLevel1x1(n){this.fullscreenMaterial.mipLevel1x1=n}get adaptationRate(){return this.fullscreenMaterial.adaptationRate}set adaptationRate(n){this.fullscreenMaterial.adaptationRate=n}render(n,e,t,i,s){this.fullscreenMaterial.deltaTime=i,n.setRenderTarget(this.renderToScreen?null:this.renderTargetAdapted),n.render(this.scene,this.camera),this.copyPass.render(n,this.renderTargetAdapted)}},RA=`#include <tonemapping_pars_fragment>
uniform float whitePoint;
#if TONE_MAPPING_MODE == 2 || TONE_MAPPING_MODE == 3
uniform float middleGrey;
#if TONE_MAPPING_MODE == 3
uniform lowp sampler2D luminanceBuffer;
#else
uniform float averageLuminance;
#endif
vec3 Reinhard2ToneMapping(vec3 color){color*=toneMappingExposure;float l=luminance(color);
#if TONE_MAPPING_MODE == 3
float lumAvg=unpackRGBAToFloat(texture2D(luminanceBuffer,vec2(0.5)));
#else
float lumAvg=averageLuminance;
#endif
float lumScaled=(l*middleGrey)/max(lumAvg,1e-6);float lumCompressed=lumScaled*(1.0+lumScaled/(whitePoint*whitePoint));lumCompressed/=(1.0+lumScaled);return clamp(lumCompressed*color,0.0,1.0);}
#elif TONE_MAPPING_MODE == 4
#define A 0.15
#define B 0.50
#define C 0.10
#define D 0.20
#define E 0.02
#define F 0.30
vec3 Uncharted2Helper(const in vec3 x){return((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;}vec3 Uncharted2ToneMapping(vec3 color){color*=toneMappingExposure;return clamp(Uncharted2Helper(color)/Uncharted2Helper(vec3(whitePoint)),0.0,1.0);}
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){
#if TONE_MAPPING_MODE == 2 || TONE_MAPPING_MODE == 3
outputColor=vec4(Reinhard2ToneMapping(inputColor.rgb),inputColor.a);
#elif TONE_MAPPING_MODE == 4
outputColor=vec4(Uncharted2ToneMapping(inputColor.rgb),inputColor.a);
#else
outputColor=vec4(toneMapping(inputColor.rgb),inputColor.a);
#endif
}`,DA=class extends dr{constructor({blendFunction:n=et.SRC,adaptive:e=!1,mode:t=e?hn.REINHARD2_ADAPTIVE:hn.AGX,resolution:i=256,maxLuminance:s=4,whitePoint:r=s,middleGrey:o=.6,minLuminance:a=.01,averageLuminance:c=1,adaptationRate:l=1}={}){super("ToneMappingEffect",RA,{blendFunction:n,uniforms:new Map([["luminanceBuffer",new Be(null)],["maxLuminance",new Be(s)],["whitePoint",new Be(r)],["middleGrey",new Be(o)],["averageLuminance",new Be(c)]])}),this.renderTargetLuminance=new Ut(1,1,{minFilter:ui,depthBuffer:!1}),this.renderTargetLuminance.texture.generateMipmaps=!0,this.renderTargetLuminance.texture.name="Luminance",this.luminancePass=new Nu({renderTarget:this.renderTargetLuminance}),this.adaptiveLuminancePass=new CA(this.luminancePass.texture,{minLuminance:a,adaptationRate:l}),this.uniforms.get("luminanceBuffer").value=this.adaptiveLuminancePass.texture,this.resolution=i,this.mode=t}get mode(){return Number(this.defines.get("TONE_MAPPING_MODE"))}set mode(n){if(this.mode===n)return;const t=Bi.replace(/\D+/g,"")>=168?"CineonToneMapping(texel)":"OptimizedCineonToneMapping(texel)";switch(this.defines.clear(),this.defines.set("TONE_MAPPING_MODE",n.toFixed(0)),n){case hn.LINEAR:this.defines.set("toneMapping(texel)","LinearToneMapping(texel)");break;case hn.REINHARD:this.defines.set("toneMapping(texel)","ReinhardToneMapping(texel)");break;case hn.CINEON:case hn.OPTIMIZED_CINEON:this.defines.set("toneMapping(texel)",t);break;case hn.ACES_FILMIC:this.defines.set("toneMapping(texel)","ACESFilmicToneMapping(texel)");break;case hn.AGX:this.defines.set("toneMapping(texel)","AgXToneMapping(texel)");break;case hn.NEUTRAL:this.defines.set("toneMapping(texel)","NeutralToneMapping(texel)");break;default:this.defines.set("toneMapping(texel)","texel");break}this.adaptiveLuminancePass.enabled=n===hn.REINHARD2_ADAPTIVE,this.setChanged()}getMode(){return this.mode}setMode(n){this.mode=n}get whitePoint(){return this.uniforms.get("whitePoint").value}set whitePoint(n){this.uniforms.get("whitePoint").value=n}get middleGrey(){return this.uniforms.get("middleGrey").value}set middleGrey(n){this.uniforms.get("middleGrey").value=n}get averageLuminance(){return this.uniforms.get("averageLuminance").value}set averageLuminance(n){this.uniforms.get("averageLuminance").value=n}get adaptiveLuminanceMaterial(){return this.adaptiveLuminancePass.fullscreenMaterial}getAdaptiveLuminanceMaterial(){return this.adaptiveLuminanceMaterial}get resolution(){return this.luminancePass.resolution.width}set resolution(n){const e=Math.max(0,Math.ceil(Math.log2(n))),t=Math.pow(2,e);this.luminancePass.resolution.setPreferredSize(t,t),this.adaptiveLuminanceMaterial.mipLevel1x1=e}getResolution(){return this.resolution}setResolution(n){this.resolution=n}get adaptive(){return this.mode===hn.REINHARD2_ADAPTIVE}set adaptive(n){this.mode=n?hn.REINHARD2_ADAPTIVE:hn.REINHARD2}get adaptationRate(){return this.adaptiveLuminanceMaterial.adaptationRate}set adaptationRate(n){this.adaptiveLuminanceMaterial.adaptationRate=n}get distinction(){return console.warn(this.name,"distinction was removed."),1}set distinction(n){console.warn(this.name,"distinction was removed.")}update(n,e,t){this.adaptiveLuminancePass.enabled&&(this.luminancePass.render(n,e),this.adaptiveLuminancePass.render(n,null,null,t))}initialize(n,e,t){this.adaptiveLuminancePass.initialize(n,e,t)}},PA=`uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;
#if VIGNETTE_TECHNIQUE == 0
float d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));
#else
vec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));
#endif
outputColor=vec4(color,inputColor.a);}`,IA=class extends dr{constructor({blendFunction:n,eskil:e=!1,technique:t=e?Gs.ESKIL:Gs.DEFAULT,offset:i=.5,darkness:s=.5}={}){super("VignetteEffect",PA,{blendFunction:n,defines:new Map([["VIGNETTE_TECHNIQUE",t.toFixed(0)]]),uniforms:new Map([["offset",new Be(i)],["darkness",new Be(s)]])})}get technique(){return Number(this.defines.get("VIGNETTE_TECHNIQUE"))}set technique(n){this.technique!==n&&(this.defines.set("VIGNETTE_TECHNIQUE",n.toFixed(0)),this.setChanged())}get eskil(){return this.technique===Gs.ESKIL}set eskil(n){this.technique=n?Gs.ESKIL:Gs.DEFAULT}getTechnique(){return this.technique}setTechnique(n){this.technique=n}get offset(){return this.uniforms.get("offset").value}set offset(n){this.uniforms.get("offset").value=n}getOffset(){return this.offset}setOffset(n){this.offset=n}get darkness(){return this.uniforms.get("darkness").value}set darkness(n){this.uniforms.get("darkness").value=n}getDarkness(){return this.darkness}setDarkness(n){this.darkness=n}},LA=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,BA="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",UA=class extends Ft{constructor(n,e,t,i,s=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:Bi.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new Be(null),depthBuffer:new Be(null),resolution:new Be(new oe),texelSize:new Be(new oe),cameraNear:new Be(.3),cameraFar:new Be(1e3),aspect:new Be(1),time:new Be(0)},blending:qt,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:s}),n&&this.setShaderParts(n),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(i)}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){this.uniforms.depthBuffer.value=n}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=fi){this.depthBuffer=n,this.depthPacking=e}setShaderData(n){this.setShaderParts(n.shaderParts),this.setDefines(n.defines),this.setUniforms(n.uniforms),this.setExtensions(n.extensions)}setShaderParts(n){return this.fragmentShader=LA.replace(dt.FRAGMENT_HEAD,n.get(dt.FRAGMENT_HEAD)||"").replace(dt.FRAGMENT_MAIN_UV,n.get(dt.FRAGMENT_MAIN_UV)||"").replace(dt.FRAGMENT_MAIN_IMAGE,n.get(dt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=BA.replace(dt.VERTEX_HEAD,n.get(dt.VERTEX_HEAD)||"").replace(dt.VERTEX_MAIN_SUPPORT,n.get(dt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(n){for(const e of n.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(n){for(const e of n.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(n){this.extensions={};for(const e of n)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(n){this.encodeOutput!==n&&(n?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(n){return this.encodeOutput}setOutputEncodingEnabled(n){this.encodeOutput=n}get time(){return this.uniforms.time.value}set time(n){this.uniforms.time.value=n}setDeltaTime(n){this.uniforms.time.value+=n}adoptCameraSettings(n){this.copyCameraSettings(n)}copyCameraSettings(n){n&&(this.uniforms.cameraNear.value=n.near,this.uniforms.cameraFar.value=n.far,n instanceof an?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(n,e){const t=this.uniforms;t.resolution.value.set(n,e),t.texelSize.value.set(1/n,1/e),t.aspect.value=n/e}static get Section(){return dt}};function Ch(n,e,t){for(const i of e){const s="$1"+n+i.charAt(0).toUpperCase()+i.slice(1),r=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(const o of t.entries())o[1]!==null&&t.set(o[0],o[1].replace(r,s))}}function FA(n,e,t){let i=e.getFragmentShader(),s=e.getVertexShader();const r=i!==void 0&&/mainImage/.test(i),o=i!==void 0&&/mainUv/.test(i);if(t.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(o&&(t.attributes&Nn.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!r&&!o)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const a=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,c=t.shaderParts;let l=c.get(dt.FRAGMENT_HEAD)||"",h=c.get(dt.FRAGMENT_MAIN_UV)||"",u=c.get(dt.FRAGMENT_MAIN_IMAGE)||"",f=c.get(dt.VERTEX_HEAD)||"",d=c.get(dt.VERTEX_MAIN_SUPPORT)||"";const g=new Set,v=new Set;if(o&&(h+=`	${n}MainUv(UV);
`,t.uvTransformation=!0),s!==null&&/mainSupport/.test(s)){const x=/mainSupport *\([\w\s]*?uv\s*?\)/.test(s);d+=`	${n}MainSupport(`,d+=x?`vUv);
`:`);
`;for(const A of s.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const M of A[1].split(/\s*,\s*/))t.varyings.add(M),g.add(M),v.add(M);for(const A of s.matchAll(a))v.add(A[1])}for(const x of i.matchAll(a))v.add(x[1]);for(const x of e.defines.keys())v.add(x.replace(/\([\w\s,]*\)/g,""));for(const x of e.uniforms.keys())v.add(x);v.delete("while"),v.delete("for"),v.delete("if"),e.uniforms.forEach((x,A)=>t.uniforms.set(n+A.charAt(0).toUpperCase()+A.slice(1),x)),e.defines.forEach((x,A)=>t.defines.set(n+A.charAt(0).toUpperCase()+A.slice(1),x));const m=new Map([["fragment",i],["vertex",s]]);Ch(n,v,t.defines),Ch(n,v,m),i=m.get("fragment"),s=m.get("vertex");const p=e.blendMode;if(t.blendModes.set(p.blendFunction,p),r){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(u+=e.inputColorSpace===ot?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==Ln?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);const x=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;u+=`${n}MainImage(color0, UV, `,(t.attributes&Nn.DEPTH)!==0&&x.test(i)&&(u+="depth, ",t.readDepth=!0),u+=`color1);
	`;const A=n+"BlendOpacity";t.uniforms.set(A,p.opacity),u+=`color0 = blend${p.blendFunction}(color0, color1, ${A});

	`,l+=`uniform float ${A};

`}if(l+=i+`
`,s!==null&&(f+=s+`
`),c.set(dt.FRAGMENT_HEAD,l),c.set(dt.FRAGMENT_MAIN_UV,h),c.set(dt.FRAGMENT_MAIN_IMAGE,u),c.set(dt.VERTEX_HEAD,f),c.set(dt.VERTEX_MAIN_SUPPORT,d),e.extensions!==null)for(const x of e.extensions)t.extensions.add(x)}}var Rh=class extends xn{constructor(n,...e){super("EffectPass"),this.fullscreenMaterial=new UA(null,null,null,n),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(n){for(const e of this.effects)e.mainScene=n}set mainCamera(n){this.fullscreenMaterial.copyCameraSettings(n);for(const e of this.effects)e.mainCamera=n}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(n){this.fullscreenMaterial.encodeOutput=n}get dithering(){return this.fullscreenMaterial.dithering}set dithering(n){const e=this.fullscreenMaterial;e.dithering=n,e.needsUpdate=!0}setEffects(n){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=n.sort((e,t)=>t.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const n=new gM;let e=0;for(const o of this.effects)if(o.blendMode.blendFunction===et.DST)n.attributes|=o.getAttributes()&Nn.DEPTH;else{if((n.attributes&o.getAttributes()&Nn.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${o.name})`);FA("e"+e++,o,n)}let t=n.shaderParts.get(dt.FRAGMENT_HEAD),i=n.shaderParts.get(dt.FRAGMENT_MAIN_IMAGE),s=n.shaderParts.get(dt.FRAGMENT_MAIN_UV);const r=/\bblend\b/g;for(const o of n.blendModes.values())t+=o.getShaderCode().replace(r,`blend${o.blendFunction}`)+`
`;(n.attributes&Nn.DEPTH)!==0?(n.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,n.colorSpace===ot&&(i+=`color0 = sRGBToLinear(color0);
	`),n.uvTransformation?(s=`vec2 transformedUv = vUv;
`+s,n.defines.set("UV","transformedUv")):n.defines.set("UV","vUv"),n.shaderParts.set(dt.FRAGMENT_HEAD,t),n.shaderParts.set(dt.FRAGMENT_MAIN_IMAGE,i),n.shaderParts.set(dt.FRAGMENT_MAIN_UV,s);for(const[o,a]of n.shaderParts)a!==null&&n.shaderParts.set(o,a.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(n)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(n,e=fi){this.fullscreenMaterial.depthBuffer=n,this.fullscreenMaterial.depthPacking=e;for(const t of this.effects)t.setDepthTexture(n,e)}render(n,e,t,i,s){for(const r of this.effects)r.update(n,e,i);if(!this.skipRendering||this.renderToScreen){const r=this.fullscreenMaterial;r.inputBuffer=e.texture,r.time+=i*this.timeScale,n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}}setSize(n,e){this.fullscreenMaterial.setSize(n,e);for(const t of this.effects)t.setSize(n,e)}initialize(n,e,t){this.renderer=n;for(const i of this.effects)i.initialize(n,e,t);this.updateMaterial(),t!==void 0&&t!==Ht&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const n of this.effects)n.removeEventListener("change",this.listener),n.dispose()}handleEvent(n){switch(n.type){case"change":this.recompile();break}}};function NA(n,e,t,i,s=!0){n.toneMapping=Zn;const r=new mM(n,{frameBufferType:Ui});r.setMainScene(e),r.setMainCamera(t),r.addPass(new Ou(e,t));const a=[new uA({intensity:.5,luminanceThreshold:.8,luminanceSmoothing:.25,mipmapBlur:!0})];if(i&&s){const u=new mA(t,i,{blur:!0,samples:48,density:.98,decay:.95,weight:.85,exposure:.6,clampMax:1});a.push(u)}const c=new DA({mode:hn.ACES_FILMIC});r.addPass(new Rh(t,...a,c));const l=new EA,h=new IA({offset:.28,darkness:.42});return r.addPass(new Rh(t,l,h)),r}class OA{constructor(e,t){B(this,"ctx",null);B(this,"master");B(this,"windGain");B(this,"windFilter");B(this,"rustleGain");B(this,"noiseBuf");B(this,"birdCountdown",3);B(this,"stepAccum",0);B(this,"lastPos",new R);B(this,"firstFrame",!0);B(this,"engineOsc",null);B(this,"engineGain",null);B(this,"engineFilter",null);B(this,"engineOsc2",null);this.field=e,this.controller=t}start(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const e=new AudioContext;this.ctx=e,this.master=e.createGain(),this.master.gain.value=0,this.master.connect(e.destination),this.noiseBuf=this.makeNoise(2,!1);const t=this.makeNoise(6,!0),i=e.createBufferSource();i.buffer=t,i.loop=!0,this.windFilter=e.createBiquadFilter(),this.windFilter.type="lowpass",this.windFilter.frequency.value=480,this.windFilter.Q.value=.4,this.windGain=e.createGain(),this.windGain.gain.value=.1,i.connect(this.windFilter).connect(this.windGain).connect(this.master),i.start();const s=e.createBufferSource();s.buffer=this.noiseBuf,s.loop=!0;const r=e.createBiquadFilter();r.type="highpass",r.frequency.value=2400,this.rustleGain=e.createGain(),this.rustleGain.gain.value=0,s.connect(r).connect(this.rustleGain).connect(this.master),s.start(),e.state==="suspended"&&e.resume()}setMenu(e){if(!this.ctx)return;const t=this.ctx.currentTime;this.master.gain.cancelScheduledValues(t),this.master.gain.setTargetAtTime(e?.06:.55,t,.4)}playEvent(e){if(!this.ctx||this.ctx.state!=="running")return;const t=this.ctx;if(e==="chop"){const r=t.currentTime,o=t.createGain();o.gain.setValueAtTime(.5,r),o.gain.exponentialRampToValueAtTime(.001,r+.16),o.connect(this.master);const a=t.createOscillator();a.type="triangle",a.frequency.setValueAtTime(160,r),a.frequency.exponentialRampToValueAtTime(64,r+.09);const c=t.createGain();c.gain.value=.9,a.connect(c).connect(o),a.start(r),a.stop(r+.16);const l=t.createBufferSource();l.buffer=this.noiseBuf,l.playbackRate.value=.7;const h=t.createBiquadFilter();h.type="bandpass",h.frequency.value=900+Math.random()*300,h.Q.value=1.1;const u=t.createGain();u.gain.setValueAtTime(.7,r),u.gain.exponentialRampToValueAtTime(.001,r+.1),l.connect(h).connect(u).connect(o),l.start(r,Math.random()),l.stop(r+.12);return}if(e==="fall"){const r=t.currentTime,o=t.createGain();o.gain.setValueAtTime(.55,r),o.gain.exponentialRampToValueAtTime(.001,r+1.1),o.connect(this.master);const a=t.createOscillator();a.type="sine",a.frequency.setValueAtTime(70,r),a.frequency.exponentialRampToValueAtTime(34,r+.7),a.connect(o),a.start(r),a.stop(r+1.1);const c=t.createBufferSource();c.buffer=this.noiseBuf,c.playbackRate.value=.35;const l=t.createBiquadFilter();l.type="lowpass",l.frequency.value=340,c.connect(l).connect(o),c.start(r,Math.random()),c.stop(r+1);return}if(e==="cash"){const r=t.currentTime+.01;for(const[o,a,c]of[[1245,0,.09],[1660,.07,.14]]){const l=t.createOscillator();l.type="square",l.frequency.value=o;const h=t.createGain();h.gain.setValueAtTime(0,r+a),h.gain.linearRampToValueAtTime(.055,r+a+.008),h.gain.exponentialRampToValueAtTime(8e-4,r+a+c),l.connect(h).connect(this.master),l.start(r+a),l.stop(r+a+c+.03)}return}if(e==="hammer"){const r=t.currentTime,o=t.createGain();o.gain.setValueAtTime(.4,r),o.gain.exponentialRampToValueAtTime(.001,r+.2),o.connect(this.master);const a=t.createOscillator();a.type="triangle",a.frequency.setValueAtTime(210,r),a.frequency.exponentialRampToValueAtTime(88,r+.1),a.connect(o),a.start(r),a.stop(r+.2);const c=t.createBufferSource();c.buffer=this.noiseBuf;const l=t.createBiquadFilter();l.type="bandpass",l.frequency.value=1500;const h=t.createGain();h.gain.setValueAtTime(.4,r),h.gain.exponentialRampToValueAtTime(.001,r+.07),c.connect(l).connect(h).connect(o),c.start(r,Math.random()),c.stop(r+.09);return}if(e==="deny"){const r=t.currentTime,o=t.createOscillator();o.type="square",o.frequency.value=140;const a=t.createGain();a.gain.setValueAtTime(.05,r),a.gain.exponentialRampToValueAtTime(.001,r+.18),o.connect(a).connect(this.master),o.start(r),o.stop(r+.2);return}if(e==="door"){const r=t.currentTime,o=t.createBufferSource();o.buffer=this.noiseBuf,o.playbackRate.value=.5;const a=t.createBiquadFilter();a.type="bandpass",a.frequency.value=480,a.Q.value=2.2;const c=t.createGain();c.gain.setValueAtTime(.28,r),c.gain.exponentialRampToValueAtTime(.001,r+.35),o.connect(a).connect(c).connect(this.master),o.start(r,Math.random()),o.stop(r+.4);return}const i=e==="pickup"?[{f:880,t:0,d:.1,g:.1},{f:1318,t:.07,d:.12,g:.09}]:e==="mission"?[{f:523,t:0,d:.14,g:.08},{f:659,t:.11,d:.14,g:.08},{f:784,t:.22,d:.2,g:.09}]:e==="level"?[{f:392,t:0,d:.16,g:.08},{f:494,t:.12,d:.16,g:.08},{f:587,t:.24,d:.16,g:.09},{f:784,t:.36,d:.3,g:.1}]:[{f:660,t:0,d:.05,g:.05,type:"triangle"}],s=t.currentTime+.01;for(const r of i){const o=t.createOscillator();o.type=r.type??"sine",o.frequency.value=r.f;const a=t.createGain();a.gain.setValueAtTime(0,s+r.t),a.gain.linearRampToValueAtTime(r.g,s+r.t+.015),a.gain.exponentialRampToValueAtTime(8e-4,s+r.t+r.d),o.connect(a).connect(this.master),o.start(s+r.t),o.stop(s+r.t+r.d+.05)}}setEngine(e,t){if(!this.ctx||this.ctx.state!=="running")return;const i=this.ctx;if(e&&!this.engineOsc)this.engineOsc=i.createOscillator(),this.engineOsc.type="sawtooth",this.engineOsc2=i.createOscillator(),this.engineOsc2.type="square",this.engineFilter=i.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.value=320,this.engineFilter.Q.value=1.4,this.engineGain=i.createGain(),this.engineGain.gain.value=0,this.engineOsc.connect(this.engineFilter),this.engineOsc2.connect(this.engineFilter),this.engineFilter.connect(this.engineGain).connect(this.master),this.engineOsc.start(),this.engineOsc2.start(),this.engineGain.gain.setTargetAtTime(.16,i.currentTime,.25);else if(!e&&this.engineOsc){const s=this.engineOsc,r=this.engineOsc2;this.engineGain.gain.setTargetAtTime(0,i.currentTime,.2),s.stop(i.currentTime+.9),r.stop(i.currentTime+.9),this.engineOsc=null,this.engineOsc2=null,this.engineGain=null,this.engineFilter=null}if(this.engineOsc&&this.engineFilter){const s=52+t*150;this.engineOsc.frequency.setTargetAtTime(s,i.currentTime,.08),this.engineOsc2.frequency.setTargetAtTime(s*.5,i.currentTime,.08),this.engineFilter.frequency.setTargetAtTime(260+t*900,i.currentTime,.1),this.engineGain?.gain.setTargetAtTime(.13+t*.08,i.currentTime,.15)}}update(e,t){if(!this.ctx||this.ctx.state!=="running")return;const i=this.ctx,s=this.controller.position;this.firstFrame&&(this.lastPos.copy(s),this.firstFrame=!1);const r=.6+.4*Math.sin(t*.37+s.x*.021+s.z*.017)*(.7+.3*Math.sin(t*.13));this.windGain.gain.setTargetAtTime(.07+r*.13,i.currentTime,.35),this.windFilter.frequency.setTargetAtTime(380+r*480,i.currentTime,.35);const o=s.x-this.lastPos.x,a=s.z-this.lastPos.z,c=Math.hypot(o,a),l=e>0?c/e:0;this.lastPos.copy(s);const h=this.field.sampleMask(s.x,s.z),u=h>.4&&this.controller.isGrounded?ze.clamp(l/7.5,0,1)*.16:0;if(this.rustleGain.gain.setTargetAtTime(u,i.currentTime,.12),this.controller.isGrounded&&l>.6){this.stepAccum+=c;const f=1.55+l*.12;this.stepAccum>=f&&(this.stepAccum=0,this.playStep(l,h))}else this.stepAccum=Math.min(this.stepAccum,1.2);this.controller.landingSpeed>3.5&&this.playStep(this.controller.landingSpeed*1.6,h,!0),this.birdCountdown-=e,this.birdCountdown<=0&&(this.birdCountdown=2.5+Math.random()*8,this.playBird())}playStep(e,t,i=!1){const s=this.ctx,r=s.currentTime,o=t>.4,a=s.createGain(),c=(i?.34:.14+Math.min(e/8,1)*.1)*(.85+Math.random()*.3);a.gain.setValueAtTime(c,r),a.gain.exponentialRampToValueAtTime(.001,r+(i?.22:.13)),a.connect(this.master);const l=s.createOscillator();l.type="triangle";const h=(i?58:72)+Math.random()*24;l.frequency.setValueAtTime(h*1.5,r),l.frequency.exponentialRampToValueAtTime(h,r+.07);const u=s.createGain();u.gain.value=o?.5:1,l.connect(u).connect(a),l.start(r),l.stop(r+.16);const f=s.createBufferSource();f.buffer=this.noiseBuf,f.playbackRate.value=.8+Math.random()*.5;const d=s.createBiquadFilter();d.type="bandpass",d.frequency.value=o?2100+Math.random()*900:620+Math.random()*260,d.Q.value=.7;const g=s.createGain();g.gain.setValueAtTime(o?1:.8,r),g.gain.exponentialRampToValueAtTime(.001,r+.1),f.connect(d).connect(g).connect(a),f.start(r,Math.random()*1.2),f.stop(r+.14)}playBird(){const e=this.ctx;let t=e.currentTime+.05;const i=.25+Math.random()*.75,s=e.createStereoPanner();s.pan.value=(Math.random()*2-1)*.85;const r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=6500-i*3800;const o=e.createGain();o.gain.value=.16*(1-i*.72),r.connect(s).connect(o).connect(this.master);const a=e.createOscillator();a.type="sine";const c=e.createGain();c.gain.setValueAtTime(0,t),a.connect(c).connect(r);const l=2+Math.floor(Math.random()*5),h=2100+Math.random()*1700;for(let u=0;u<l;u++){const f=.05+Math.random()*.09,d=h*(.9+Math.random()*.25),g=Math.max(500,d+(Math.random()*2-1)*900);a.frequency.setValueAtTime(d,t),a.frequency.exponentialRampToValueAtTime(g,t+f*.85),c.gain.linearRampToValueAtTime(1,t+.012),c.gain.linearRampToValueAtTime(1e-4,t+f),t+=f+.03+Math.random()*.09}a.start(e.currentTime+.05),a.stop(t+.05)}makeNoise(e,t){const i=this.ctx,s=Math.floor(i.sampleRate*e),r=i.createBuffer(1,s,i.sampleRate),o=r.getChannelData(0);let a=0;for(let c=0;c<s;c++){const l=Math.random()*2-1;t?(a=(a+.02*l)/1.02,o[c]=a*3.5):o[c]=l}return r}}const ku=15,li=[{id:"walk1",title:"Primeros pasos",hint:"Camina 80 m por el bosque",xp:10,goal:80,kind:"walk",icon:"🥾",requires:[]},{id:"flower1",title:"Botánico del bosque",hint:"Recoge 8 flores luminosas con la tecla E",xp:40,goal:8,kind:"collect",item:"flower",icon:"🌸",requires:[]},{id:"chop1",title:"Leñador del valle",hint:"Tala 3 árboles con el hacha (clic izquierdo)",xp:30,cash:60,goal:3,kind:"chop",icon:"🪓",requires:[]},{id:"obelisk1",title:"El claro del obelisco",hint:"Sigue el sendero ladera arriba hasta el obelisco",xp:30,goal:1,kind:"reach",poi:{x:-46,z:-127,r:13,label:"Obelisco"},icon:"🗿",requires:[]},{id:"rock1",title:"La gran roca musgosa",hint:"Encuentra la gran roca junto al sendero de abajo",xp:15,goal:1,kind:"reach",poi:{x:-15,z:118,r:9,label:"Roca"},icon:"🪨",requires:["walk1"]},{id:"sprint1",title:"Atleta del bosque",hint:"Corre 300 m manteniendo Shift",xp:30,goal:300,kind:"sprint",icon:"💨",requires:["walk1"]},{id:"drive1",title:"Conductor del bosque",hint:"Sube a un coche del pueblo con F y conducelo",xp:20,cash:40,goal:1,kind:"drive",icon:"🚗",requires:["walk1"]},{id:"summit1",title:"Hacia la cumbre",hint:"Alcanza la explanada de la cumbre del cerro",xp:40,goal:1,kind:"reach",poi:{x:ct.x,z:ct.z,r:16,label:"Cumbre"},icon:"⛰️",requires:["obelisk1"]},{id:"crystal1",title:"Fragmentos de resonancia",hint:"Recoge 5 fragmentos de cristal en la ladera alta",xp:50,goal:5,kind:"collect",item:"crystal",icon:"💠",requires:["obelisk1"]},{id:"sell1",title:"Comerciante de madera",hint:"Vende 10 de madera en el aserradero (E junto a la sierra)",xp:25,cash:50,goal:10,kind:"sell",icon:"💰",requires:["chop1"]},{id:"build1",title:"Constructor novato",hint:"Construye 5 piezas de tu casa con B",xp:40,cash:80,goal:5,kind:"build",icon:"🔨",requires:["chop1"]},{id:"drone1",title:"El ojo en el cielo",hint:"Acércate al dron que patrulla sobre la cumbre",xp:30,goal:1,kind:"drone",icon:"🛸",requires:["summit1"]},{id:"marker1",title:"La efigie del Marcador",hint:"Contémplala desde menos de 10 m",xp:50,goal:1,kind:"reach",poi:{x:ct.x,z:ct.z,r:10,label:"Efigie"},icon:"👁️",requires:["summit1"]},{id:"relic1",title:"Reliquias del antiguo",hint:"Encuentra 3 reliquias escondidas por el cerro",xp:60,goal:3,kind:"collect",item:"relic",icon:"⚱️",requires:["summit1"]},{id:"walk2",title:"Explorador incansable",hint:"Camina 2000 m en total",xp:60,goal:2e3,kind:"walk",icon:"🧭",requires:["sprint1"]},{id:"final",title:"Guardián del bosque",hint:"Completa todas las demás misiones",xp:100,goal:ku,kind:"all",icon:"🌲",requires:[]}],Jr=120,Dh=4;class zA{constructor(){B(this,"defs",li);B(this,"state",new Map);B(this,"_xp",0);B(this,"level",1);B(this,"completedEvents",[]);B(this,"activatedEvents",[]);B(this,"levelUpEvents",[]);for(const e of li)this.state.set(e.id,{active:!1,done:!1,progress:0});this.refreshActive()}get xp(){return this._xp}get levelNumber(){return this.level}get levelProgress(){return this._xp%Jr/Jr}isActive(e){return this.state.get(e)?.active??!1}isDone(e){return this.state.get(e)?.done??!1}progressOf(e){return this.state.get(e)?.progress??0}get activeMissions(){const e=[];for(const t of li){const i=this.state.get(t.id);i.active&&!i.done&&e.push({def:t,progress:i.progress})}return e}get all(){return li.map(e=>({def:e,state:this.state.get(e.id)}))}get totalDone(){let e=0;for(const t of this.state.values())t.done&&e++;return e}serialize(){const e=[],t={};for(const i of li){const s=this.state.get(i.id);s.done&&e.push(i.id),s.progress>0&&(t[i.id]=s.progress)}return{xp:this._xp,level:this.level,done:e,progress:t}}apply(e){this._xp=Math.max(0,Math.floor(e.xp??0)),this.level=Math.max(1,Math.floor(e.level??1+Math.floor(this._xp/Jr)));const t=new Set(e.done??[]);for(const i of li){const s=this.state.get(i.id);s.done=t.has(i.id),s.active=!1,s.progress=s.done?i.goal:Math.min(e.progress?.[i.id]??0,i.goal)}this.activatedEvents.length=0,this.completedEvents.length=0,this.levelUpEvents.length=0,this.refreshActive()}update(e,t){for(const i of li){const s=this.state.get(i.id);if(!(!s.active||s.done)){switch(i.kind){case"walk":s.progress=Math.min(e.walked,i.goal);break;case"sprint":s.progress=Math.min(e.sprinted,i.goal);break;case"collect":s.progress=Math.min(e.collected[i.item]??0,i.goal);break;case"reach":s.progress=Math.hypot(e.playerPos.x-i.poi.x,e.playerPos.z-i.poi.z)<i.poi.r?1:0;break;case"drone":s.progress=e.playerPos.distanceTo(t)<9?1:0;break;case"chop":s.progress=Math.min(e.chopped,i.goal);break;case"drive":s.progress=e.drove>=1?1:0;break;case"build":s.progress=Math.min(e.built,i.goal);break;case"sell":s.progress=Math.min(e.sold,i.goal);break;case"all":s.progress=this.totalDone;break}s.progress>=i.goal&&(s.done=!0,s.active=!1,this.addXp(i.xp),this.completedEvents.push({def:i,xp:i.xp}),this.refreshActive())}}}addXp(e){this._xp+=e;const t=1+Math.floor(this._xp/Jr);t>this.level&&(this.level=t,this.levelUpEvents.push(t))}refreshActive(){let e=this.activeMissions.length;if(!(e>=Dh))for(const t of li){if(e>=Dh)break;const i=this.state.get(t.id);i.active||i.done||t.kind==="all"&&this.totalDone<ku||t.requires.every(s=>this.state.get(s)?.done)&&(i.active=!0,this.activatedEvents.push(t),e++)}}}const kA={flower:"flor luminosa",crystal:"fragmento de cristal",relic:"reliquia antigua"};class HA{constructor(e,t){B(this,"group",new yt);B(this,"collected",{flower:0,crystal:0,relic:0});B(this,"collectedEvents",[]);B(this,"nearest",null);B(this,"items",[]);B(this,"bursts",[]);B(this,"playerPos",new R(0,0,9999));B(this,"playing",!1);B(this,"wantPick",!1);this.field=t;const i=cr(),s=wt(77701);this.scatter(s,"flower",8,()=>{const o=-34+s()*68,a=-50+s()*180;return{x:o,z:a}},(o,a)=>this.field.sampleMask(o,a)>.35&&this.field.sampleHeight(o,a)<34&&(Math.abs(o-$e.x)>$e.half+2||Math.abs(a-$e.z)>$e.half+2)),this.scatter(s,"crystal",5,()=>{const o=s()*Math.PI*2,a=42+s()*48;return{x:ct.x+Math.cos(o)*a,z:ct.z+Math.sin(o)*a}},(o,a)=>{const c=this.field.sampleHeight(o,a);return c>24&&c<62&&this.field.sampleSlope(o,a)<.55});const r=[{x:-42.5,z:-131.5},{x:-18.5,z:113.5},{x:ct.x+9,z:ct.z-7}];for(const o of r)this.spawn("relic",o.x+(s()-.5)*2,o.z+(s()-.5)*2,i);e.add(this.group),window.addEventListener("keydown",o=>{o.code==="KeyE"&&(this.wantPick=!0)})}setPlaying(e){this.playing=e,e||(this.wantPick=!1)}nearestOfKind(e){let t=null,i=1/0;for(const s of this.items){if(s.kind!==e||s.collected)continue;const r=s.group.position.distanceToSquared(this.playerPos);r<i&&(i=r,t=s.group.position)}return t}scatter(e,t,i,s,r){const o=cr();let a=0,c=0;for(;a<i&&c<400;){c++;const{x:l,z:h}=s();if(!r(l,h))continue;let u=!0;for(const f of this.items)if(Math.hypot(f.group.position.x-l,f.group.position.z-h)<12){u=!1;break}u&&(this.spawn(t,l,h,o,e),a++)}}spawn(e,t,i,s,r){const o=r??Math.random,a=this.field.sampleHeight(t,i),c=new yt;c.position.set(t,a,i);let l,h;switch(e){case"flower":l=16767351,h=16762976;break;case"crystal":l=8251647,h=6740223;break;case"relic":l=13214463,h=12160255;break}const u=new le(e==="flower"?new So(.085,1):e==="crystal"?new Fc(.24):new Ic(.2),new Ve({color:1710612,emissive:new Re(l),emissiveIntensity:1.9,roughness:.4}));if(e==="flower"){const d=new le(new pt(.015,.02,.34,5),new Ve({color:3033630,roughness:.9}));d.position.y=.17,u.position.y=.38,c.add(d)}else e==="crystal"?(u.position.y=.45,u.rotation.set(.3,0,.2)):(u.position.y=.22,u.rotation.set(.2,.6,0));c.add(u);const f=new fo(new ir({map:s,color:h,transparent:!0,opacity:e==="crystal"?.42:.34,blending:ao,depthWrite:!1}));f.scale.setScalar(e==="crystal"?1.5:1.15),f.position.y=u.position.y,c.add(f),this.group.add(c),this.items.push({kind:e,group:c,sprite:f,baseY:c.position.y,phase:o()*Math.PI*2,spin:.4+o()*.5,collected:!1})}update(e,t,i){this.playerPos.copy(i);for(const r of this.items){if(r.collected)continue;r.group.position.y=r.baseY+Math.sin(t*1.6+r.phase)*.1,r.group.rotation.y+=e*r.spin;const o=.85+.15*Math.sin(t*2.2+r.phase);r.sprite.scale.setScalar((r.kind==="crystal"?1.5:1.15)*o)}for(let r=this.bursts.length-1;r>=0;r--){const o=this.bursts[r];if(o.t+=e/.55,o.t>=1){this.group.remove(o.sprite),o.sprite.material.dispose(),this.bursts.splice(r,1);continue}const a=1-o.t;o.sprite.scale.setScalar(1.2+o.t*3.2),o.sprite.material.opacity=.7*a}this.nearest=null;let s=1/0;for(const r of this.items){if(r.collected)continue;const o=r.group.position.distanceTo(i);o<2.6&&o<s&&(s=o,this.nearest={kind:r.kind,label:kA[r.kind],pos:r.group.position,dist:o})}this.playing&&this.wantPick&&(this.wantPick=!1,this.nearest&&this.collect(this.nearest.pos)),this.wantPick=!1}collect(e){const t=this.items.find(r=>!r.collected&&r.group.position===e);if(!t)return;t.collected=!0,t.group.visible=!1,this.collected[t.kind]++;const i=new fo(new ir({map:t.sprite.material.map,color:t.sprite.material.color.getHex(),transparent:!0,opacity:.7,blending:ao,depthWrite:!1}));i.position.copy(t.group.position),i.position.y+=.35,i.scale.setScalar(1.2),this.group.add(i),this.bursts.push({sprite:i,t:0});const s=this.items.filter(r=>r.kind===t.kind).length;this.collectedEvents.push({kind:t.kind,remaining:s-this.collected[t.kind],total:s})}}class Hu{constructor(){B(this,"_wood",0);B(this,"_money",80);B(this,"_totalSold",0);B(this,"events",[]);this._money=80}static legacy(){try{const e=localStorage.getItem("tf-economy-v1");if(!e)return null;const t=JSON.parse(e);return{wood:Math.max(0,Math.floor(t.wood??0)),money:Math.max(0,Math.floor(t.money??80)),sold:Math.max(0,Math.floor(t.sold??0))}}catch{return null}}serialize(){return{wood:this._wood,money:this._money,sold:this._totalSold}}apply(e){this._wood=Math.max(0,Math.floor(e.wood??0)),this._money=Math.max(0,Math.floor(e.money??80)),this._totalSold=Math.max(0,Math.floor(e.sold??0))}get wood(){return this._wood}get money(){return this._money}get totalSold(){return this._totalSold}addWood(e){e<=0||(this._wood+=e,this.events.push({kind:"wood",amount:e}))}addCash(e){e<=0||(this._money+=e,this.events.push({kind:"cash",amount:e}))}sellWood(e=5){if(this._wood<=0)return 0;const t=this._wood*e;return this._totalSold+=this._wood,this._money+=t,this.events.push({kind:"sell",amount:t}),this._wood=0,t}canAfford(e,t){return this._wood>=e&&this._money>=t}spend(e,t){return this.canAfford(e,t)?(this._wood-=e,this._money-=t,(e>0||t>0)&&this.events.push({kind:"spend",amount:t}),!0):!1}}const GA=[{type:"pickup",color:10893870,x:54,z:128,rotY:0,maxSpeed:16},{type:"suv",color:3825551,x:62,z:116,rotY:Math.PI/2,maxSpeed:14},{type:"compact",color:7043653,x:58,z:142,rotY:0,maxSpeed:18}],Vs=.35,VA=1.68;class WA{constructor(e,t,i,s,r,o,a,c,l,h){B(this,"group",new yt);B(this,"collider");B(this,"spec");B(this,"lights");B(this,"wheels",[]);B(this,"steerPivots",[]);B(this,"steerWheel");B(this,"seatLocal",new R(-.42,1.06,.34));B(this,"v",0);B(this,"steer",0);B(this,"yaw");B(this,"pitch",0);B(this,"roll",0);B(this,"bodyBob",0);B(this,"y",0);B(this,"wheelSpin",0);B(this,"braking",!1);this.spec=e,this.yaw=e.rotY,this.y=t.sampleHeight(e.x,e.z)+.1,this.collider={x:e.x,z:e.z,r:1.3},this.lights={head:o,tail:a,reverse:l},this.steerWheel=this.build(i,s,r,o,a,c,l,h),this.group.position.set(e.x,this.y,e.z),this.group.rotation.y=this.yaw}get position(){return this.group.position}get forward(){return new R(Math.sin(this.yaw),0,Math.cos(this.yaw))}distanceTo(e){return Math.hypot(this.group.position.x-e.x,this.group.position.z-e.z)}seatWorld(e){return e.copy(this.seatLocal).applyMatrix4(this.group.matrixWorld)}exitWorld(e){return e.set(-1.7,0,.25).applyMatrix4(this.group.matrixWorld)}setNight(e,t){this.lights.head.emissiveIntensity=t?.35+3.4*e:.2*e,this.lights.tail.emissiveIntensity=.22*e+(t?this.braking?2.6:.7*e:0),this.lights.reverse.emissiveIntensity=t&&this.v<-.3?1.8:.05}drive(e,t,i,s,r,o){const a=this.spec.maxSpeed;this.braking=s,s?this.v-=Math.sign(this.v)*Math.min(Math.abs(this.v),20*e):t>0?this.v+=(this.v<0?19:8.5)*e*t:t<0&&(this.v-=(this.v>0?15:5.5)*e*-t),this.v-=this.v*.32*e+Math.sign(this.v)*.5*e,this.v=ze.clamp(this.v,-6.5,a);const c=.55*(1-Math.min(Math.abs(this.v)/a,1)*.55);this.steer=ze.damp(this.steer,i*c,8,e);let h=this.v/2.8*Math.tan(this.steer);const u=Math.max(0,1-Math.abs(this.v)/4);h+=this.steer*1.5*u*Math.sign(this.v||1)*(s?1.5:1),this.yaw+=h*e;const f=this.forward,d=this.group.position;d.x+=f.x*this.v*e,d.z+=f.z*this.v*e;const g=this.v>=0?1:-1;let v=!1;for(const y of[g*1.95,g*1.15,-g*1.15]){const D=d.x+f.x*y,L=d.z+f.z*y;for(const U of o){if(U===this.collider)continue;const z=U.r+.62,N=D-U.x,F=L-U.z;if(N*N+F*F<z*z){const k=Math.max(Math.hypot(N,F),.001),$=z-k+.04;d.x+=N/k*$,d.z+=F/k*$,Math.abs(this.v)>4.5?(v=!0,this.v=-this.v*.14):this.v*=.22;break}}}const m=286;d.x=ze.clamp(d.x,-m,m),d.z=ze.clamp(d.z,-m,m);const p=new R(f.z,0,-f.x),x=(y,D)=>r.sampleHeight(d.x+y,d.z+D),A=x(f.x*1.4,f.z*1.4),M=x(-f.x*1.4,-f.z*1.4),C=x(-p.x*.78,-p.z*.78),T=x(p.x*.78,p.z*.78),P=(A+M+C+T)/4+.12;this.y=ze.damp(this.y,P,10,e);const E=Math.atan2(A-M,2.8),S=Math.atan2(C-T,1.56);this.pitch=ze.damp(this.pitch,E,8,e),this.roll=ze.damp(this.roll,S,8,e),this.bodyBob=ze.damp(this.bodyBob,ze.clamp(-this.v*.006,-.05,.035),6,e),d.y=this.y,this.group.rotation.set(this.pitch+this.bodyBob,this.yaw,this.roll,"YXZ"),this.wheelSpin+=this.v/Vs*e;for(const y of this.wheels)y.rotation.x=this.wheelSpin;for(const y of this.steerPivots)y.rotation.y=this.steer;return this.steerWheel.rotation.z=-this.steer*2.6,this.collider.x=d.x,this.collider.z=d.z,v}settle(e){const t=this.group.position;this.y=e.sampleHeight(t.x,t.z)+.12,t.y=this.y}build(e,t,i,s,r,o,a,c){const l=this.spec.type,h=l==="pickup"?4.9:l==="suv"?4.5:3.8,u=l==="compact"?1.76:1.92,f=l==="suv"?.88:.7,d=.44,g=h*.6,v=u*.86,m=new Ve({map:dh(this.spec.color),roughnessMap:gx(),roughness:.38,metalness:.55,envMapIntensity:.9}),p=new Ve({map:dh(new Re(this.spec.color).multiplyScalar(.55).getHex()),roughness:.6,metalness:.3}),x=(pe,Me=!0)=>{pe.castShadow=Me,pe.receiveShadow=!0,this.group.add(pe)},A=(pe,Me,I,j,X,Z,Q)=>{const ce=new le(new xe(pe,Me,I),Q);return ce.position.set(j,X,Z),ce},M=(pe,Me,I,j,X,Z,Q,ce)=>{const se=new le(new _n(pe,Me,I,2,Q),ce);return se.position.set(j,X,Z),se},C=d+f/2;x(M(u,f,h,0,C,0,.07,m)),x(M(u*.98,.2,h*.96,0,d+.08,0,.05,p));const T=l==="compact"?.72:.98,P=M(u*.94,.18,T,0,d+f+.07,h/2-T/2-.05,.05,m);P.rotation.x=-.055,x(P),x(M(u*.94,.16,.5,0,d+f+.055,-h/2+.3,.05,m));const E=l==="suv"?.8:l==="pickup"?.66:.62,S=l==="pickup"?.4:l==="suv"?-.18:-.08,y=l==="pickup"?1.55:h*.5,D=u*.9,L=d+f+E/2+.06;if(l==="pickup"){x(M(D,E,y,0,L,S,.09,m));const pe=d+f+.22;x(M(u*.96,.5,h-y-T-.4,0,pe,-h/2+(h-y)/2-.05,.05,m));for(const Me of[-1,1])x(A(.09,.1,h-y-T-.5,Me*(u/2-.1),pe+.3,-h/2+(h-y)/2-.05,e));x(M(u*.9,.46,.08,0,pe+.02,-h/2+.07,.03,m)),x(A(u*.86,.04,1.5,0,d+.5,-h/2+.9,o),!1)}else{if(x(M(D,E,y,0,L,S,.11,m)),x(M(D*.94,.08,y*.92,0,L+E/2+.02,S,.03,m)),l==="compact"){const pe=M(D*.9,E*.95,.1,0,L-.02,S-y/2-.18,.03,m);pe.rotation.x=.28,x(pe)}if(l==="suv"){for(const pe of[-1,1])x(A(.07,.06,y*.7,pe*D*.32,L+E/2+.08,S,e),!1);x(A(D*.7,.05,.07,0,L+E/2+.09,S+y*.33,e),!1),x(A(D*.7,.05,.07,0,L+E/2+.09,S-y*.33,e),!1)}}const U=E*.72,z=S+y/2-.06,N=L-E*.04+U/2,F=M(D*.86,U,.05,0,N,z,.02,t);F.rotation.x=-.42,x(F,!1);for(const pe of[-1,1]){const Me=M(.04,E*.6,y*.4,pe*(D/2+.005),L-E*.05,S+y*.14,.02,t);x(Me,!1);const I=M(.04,E*.55,y*.3,pe*(D/2+.005),L-E*.07,S-y*.22,.02,t);x(I,!1)}const W=L-E*.06,k=M(D*.8,E*.58,.04,0,W,S-y/2+.03,.02,t);k.rotation.x=l==="compact"?.3:.18,x(k,!1);for(const pe of[-1,1])for(const Me of[S+y*.04,S-y*.34])x(A(.015,E*.82,.03,pe*(u/2+.003),L-E*.06,Me,p),!1);const $=M(u*.99,.24,.2,0,d+.2,h/2+.06,.05,e);x($);const ne=M(u*.6,.2,.06,0,d+f-.06,h/2+.015,.02,p);x(ne);for(let pe=0;pe<3;pe++)x(A(u*.54,.025,.075,0,d+f-.13+pe*.065,h/2+.02,e),!1);for(const pe of[-1,1]){const Me=M(.34,.16,.1,pe*(u/2-.3),d+f-.02,h/2-.02,.02,p);x(Me,!1);const I=M(.28,.12,.06,pe*(u/2-.3),d+f-.02,h/2+.035,.02,s);x(I,!1)}x(A(.44,.13,.03,0,d+.24,h/2+.17,c),!1);const ge=M(u*.99,.22,.18,0,d+.18,-h/2-.06,.05,e);x(ge);for(const pe of[-1,1]){const Me=M(.3,.14,.06,pe*(u/2-.28),d+f-.04,-h/2-.035,.02,r);x(Me,!1);const I=M(.1,.08,.05,pe*(u/2-.44),d+f-.05,-h/2-.035,.015,a);x(I,!1)}x(A(.4,.12,.03,0,d+.22,-h/2-.16,c),!1);const Pe=new le(new pt(.045,.05,.18,10),e);Pe.rotation.x=Math.PI/2,Pe.position.set(u/2-.32,d+.06,-h/2-.1),x(Pe,!1);for(const pe of[-1,1]){const Me=A(.14,.03,.03,pe*(u/2+.06),L+E*.18,S+y/2-.12,p);x(Me,!1);const I=A(.03,.1,.16,pe*(u/2+.13),L+E*.2,S+y/2-.12,p);x(I,!1)}x(M(u*.84,.22,.42,0,L-E*.36,S+y/2-.32,.05,o),!1);const qe=new Tt;qe.position.set(-.42,L-E*.2,S+y/2-.52),qe.rotation.x=-.42;const it=new le(new _s(.165,.021,8,22),o);qe.add(it);for(let pe=0;pe<3;pe++){const Me=pe/3*Math.PI*2,I=new le(new xe(.028,.15,.02),o);I.position.set(Math.sin(Me)*.075,-.055,0),I.rotation.z=Me,qe.add(I)}const Ke=new le(new pt(.03,.03,.025,10),e);Ke.rotation.x=Math.PI/2,qe.add(Ke),this.group.add(qe);for(const pe of[-1,1]){const Me=M(.52,.13,.5,pe*.42,L-E*.62,S-.06,.04,o);x(Me,!1);const I=M(.5,.55,.13,pe*.42,L-E*.28,S-.3,.05,o);I.rotation.x=.12,x(I,!1);const j=M(.26,.16,.1,pe*.42,L+E*.14,S-.33,.04,o);x(j,!1)}x(A(.04,.2,.04,-.05,L-E*.52,S-.1,e),!1),x(A(.05,.16,.05,-.62,L-E*.54,S-.18,e),!1);const ee=new _s(.44,.075,8,14,Math.PI);for(const[pe,Me]of[[-1,1],[1,1],[-1,-1],[1,-1]]){const I=new le(ee,p);I.position.set(pe*v/2,Vs+.06,Me*g/2),I.rotation.y=Me>0?0:Math.PI,x(I,!1)}const re=new pt(Vs,Vs,.26,20);re.rotateZ(Math.PI/2);const we=vx(),Ie=new Ve({map:we,roughness:.95,metalness:0}),Ee=new pt(.16,.16,.27,14);Ee.rotateZ(Math.PI/2);for(const[pe,Me]of[[-1,1],[1,1],[-1,-1],[1,-1]]){const I=new Tt;I.position.set(pe*v/2,Vs,Me*g/2);const j=new le(re,Ie),X=new le(Ee,e);j.add(X);for(let Q=0;Q<5;Q++){const ce=Q/5*Math.PI*2,se=new le(new xe(.3,.05,.05),e);se.rotation.x=ce,se.position.set(.135,0,0),se.translateX(0),X.add(se)}const Z=new le(new pt(.055,.055,.29,10),p);Z.rotation.z=Math.PI/2,X.add(Z),I.add(j),this.group.add(I),this.wheels.push(j),Me>0&&this.steerPivots.push(I)}return qe}}class XA{constructor(e,t,i,s,r,o){B(this,"cars",[]);B(this,"drivingCar",null);B(this,"camera");B(this,"controller");B(this,"field");B(this,"colliders");B(this,"audio");B(this,"tmp",new R);B(this,"tmpQ",new Et);B(this,"tmpE",new un(0,0,0,"YXZ"));B(this,"headlights");B(this,"headTarget",new Tt);B(this,"crashCooldown",0);B(this,"night",0);B(this,"hasDriven",!1);this.field=t,this.colliders=i,this.controller=s,this.camera=r,this.audio=o;const a=new Ve({color:3032141,roughness:.06,metalness:.8}),c=new Ve({color:3288876,roughness:.55,metalness:.45}),l=new Ve({color:16774872,emissive:16772528,emissiveIntensity:.3,roughness:.25}),h=new Ve({color:8000532,emissive:13639712,emissiveIntensity:.22,roughness:.3}),u=new Ve({color:16053488,emissive:16777215,emissiveIntensity:.05,roughness:.3}),f=new Ve({color:4866616,roughness:.9}),d=new Ve({color:14275778,roughness:.6});for(const g of GA){const v=new WA(g,t,c,a,new Ve({color:1842204,roughness:.95}),l,h,f,u,d);v.settle(t),e.add(v.group),i.push(v.collider),this.cars.push(v)}this.headlights=new Mp(16772812,0,42,.52,.45,1.4),this.headlights.visible=!1,e.add(this.headlights),e.add(this.headTarget),this.headlights.target=this.headTarget}get isDriving(){return this.drivingCar!==null}get speedKmh(){return this.drivingCar?Math.abs(this.drivingCar.v)*3.6:0}setNight(e){this.night=e;for(const t of this.cars)t.setNight(e,t===this.drivingCar)}serialize(){return this.cars.map(e=>({x:e.group.position.x,z:e.group.position.z,rotY:e.group.rotation.y,v:e.v}))}apply(e){Array.isArray(e)&&this.cars.forEach((t,i)=>{const s=e[i];s&&(t.group.position.set(s.x,this.field.sampleHeight(s.x,s.z)+.12,s.z),t.group.rotation.set(0,s.rotY,0),t.v=0,t.collider.x=s.x,t.collider.z=s.z)})}nearest(e,t=3.6){let i=null,s=t;for(const r of this.cars){const o=r.distanceTo(e);o<s&&(s=o,i=r)}return i}toggleEnter(){if(this.drivingCar)return this.drivingCar.exitWorld(this.tmp),this.controller.position.set(this.tmp.x,this.field.sampleHeight(this.tmp.x,this.tmp.z)+VA,this.tmp.z),this.controller.zeroVelocity(),this.drivingCar=null,this.audio.setEngine(!1,0),this.controller.enabled=!0,this.controller.update(0),this.headlights.visible=!1,!1;const e=this.nearest(this.controller.position);return e?(this.drivingCar=e,this.controller.enabled=!1,this.controller.alignYawTo(e.forward),this.audio.setEngine(!0,0),!0):!1}update(e,t){if(this.crashCooldown=Math.max(0,this.crashCooldown-e),!this.drivingCar)return;const i=this.drivingCar,s=t.has("KeyW")||t.has("ArrowUp")?1:t.has("KeyS")||t.has("ArrowDown")?-1:0,r=t.has("KeyA")||t.has("ArrowLeft")?1:t.has("KeyD")||t.has("ArrowRight")?-1:0;i.drive(e,s,r,t.has("Space"),this.field,this.colliders)&&this.crashCooldown<=0&&(this.crashCooldown=.5,this.audio.playEvent("chop")),Math.abs(i.v)>2&&(this.hasDriven=!0),this.audio.setEngine(!0,Math.min(Math.abs(i.v)/i.spec.maxSpeed,1)),i.seatWorld(this.tmp),this.camera.position.copy(this.tmp);const a=this.controller.wrapAngle(this.controller.yaw-i.group.rotation.y);this.tmpE.set(this.controller.pitch,a,0),this.tmpQ.setFromEuler(this.tmpE),this.camera.quaternion.copy(i.group.quaternion).multiply(this.tmpQ);const c=70+ze.clamp(Math.abs(i.v)-8,0,8)*.6;Math.abs(c-this.camera.fov)>.05&&(this.camera.fov=ze.damp(this.camera.fov,c,4,e),this.camera.updateProjectionMatrix());const l=this.night>.25;if(this.headlights.visible=l,l){const h=260*this.night;this.headlights.intensity=h,this.headlights.position.copy(i.group.position);const u=i.forward;this.headlights.position.y+=.75,this.headTarget.position.copy(i.group.position).addScaledVector(u,20),this.headTarget.position.y=i.group.position.y+.2,this.headlights.target.updateMatrixWorld()}}}class YA{constructor(e,t,i,s,r,o,a){B(this,"choppedCount",0);B(this,"hp",new Map);B(this,"chips",[]);B(this,"group",new yt);B(this,"tmpDir",new R);B(this,"shake",0);this.forest=t,this.controller=i,this.hands=s,this.economy=r,this.audio=o,this.camera=a,e.add(this.group),this.hands.onSwingHit=()=>this.impact()}aimedTree(){const e=this.controller.position,t=this.forest.nearestTree(e,3.9);if(!t)return null;this.camera.getWorldDirection(this.tmpDir);const i=t.placement.x-e.x,s=t.placement.z-e.z,r=Math.hypot(i,s);return r<.001||i/r*this.tmpDir.x+s/r*this.tmpDir.z>.55?t.placement:null}trySwing(){this.hands.swing()}impact(){const e=this.aimedTree();if(!e)return;const t=(this.hp.get(e)??Ox)-1;if(this.spawnChips(e.x,e.z),this.shake=.35,this.audio.playEvent("chop"),t>0){this.hp.set(e,t);return}this.hp.delete(e),this.forest.fellTree(e),this.choppedCount++}update(e){this.shake>0&&(this.shake=Math.max(0,this.shake-e*2.4),this.controller.addImpulse(-this.shake*.35));for(let t=this.chips.length-1;t>=0;t--){const i=this.chips[t];if(i.t+=e/.8,i.t>=1){this.group.remove(i.sprite),i.sprite.material.dispose(),this.chips.splice(t,1);continue}i.vy-=9.8*e,i.sprite.position.x+=i.vx*e,i.sprite.position.y+=i.vy*e,i.sprite.position.z+=i.vz*e,i.sprite.material.opacity=.85*(1-i.t)}}spawnChips(e,t){const i=cr();for(let s=0;s<7;s++){const r=new fo(new ir({map:i,color:13213798,transparent:!0,opacity:.85,depthWrite:!1}));this.controller.position;const o=this.controller.position.y-.9;r.position.set(e+(Math.random()-.5)*.4,o,t+(Math.random()-.5)*.4),r.scale.setScalar(.07+Math.random()*.06),this.group.add(r),this.chips.push({sprite:r,vx:(Math.random()-.5)*3.2,vy:1.6+Math.random()*2.4,vz:(Math.random()-.5)*3.2,t:0})}}}const hs={floor:{type:"floor",name:"Tarima",icon:"▦",wood:2,cash:8},wall:{type:"wall",name:"Pared",icon:"▮",wood:4,cash:16},door:{type:"door",name:"Pared con puerta",icon:"🚪",wood:4,cash:24},window:{type:"window",name:"Pared con ventana",icon:"🪟",wood:4,cash:22},stairs:{type:"stairs",name:"Escalera",icon:"🪜",wood:3,cash:14},roof:{type:"roof",name:"Techo",icon:"🏠",wood:5,cash:28}},mc=["floor","wall","door","window","stairs","roof"],Ri=[{name:"Madera clara",hex:11108954},{name:"Verde pino",hex:6257234},{name:"Terracota",hex:11753279},{name:"Blanco hueso",hex:14209987},{name:"Gris piedra",hex:9276808},{name:"Azul noche",hex:5202808},{name:"Mostaza",hex:13213774}],gc=[{wood:20,cash:100},{wood:30,cash:180},{wood:40,cash:260}],us={wood:30,cash:150};function vo(n){return n<0?"Sótano":n===0?"Planta baja":`${n}ª planta`}const Qt=2.6,jr=2.6,$r=.5,Yn={cx:28,cz:121.5,halfW:5,halfD:4.5},ln={x1:28,z1:125.6,x2:28,z2:132.8,halfW:.95},va=3;function qA(){const n=document.createElement("canvas");n.width=256,n.height=160;const e=n.getContext("2d");e.fillStyle="#5c452e",e.fillRect(0,0,256,160),e.strokeStyle="#8a6a48",e.lineWidth=10,e.strokeRect(5,5,246,150),e.fillStyle="#f3e6c8",e.textAlign="center",e.font="bold 40px Georgia, serif",e.fillText("TU PARCELA",128,66),e.font="24px Georgia, serif",e.fillStyle="#d9c9a3",e.fillText("pulsa B para construir",128,108),e.font="20px Georgia, serif",e.fillText("tu casa",128,136);const t=new Dc(n);return t.colorSpace=ot,t}class QA{constructor(e,t,i,s,r,o){B(this,"active",!1);B(this,"deleteMode",!1);B(this,"builtCount",0);B(this,"notices",[]);B(this,"floors",0);B(this,"basement",!1);B(this,"currentType","floor");B(this,"colorIdx",0);B(this,"style","wood");B(this,"userRot",0);B(this,"level",0);B(this,"gradeY");B(this,"group",new yt);B(this,"pieces",[]);B(this,"ghost");B(this,"grid");B(this,"ghostMats",{ok:new Ii({color:8380543,transparent:!0,opacity:.45,depthWrite:!1}),bad:new Ii({color:14704736,transparent:!0,opacity:.45,depthWrite:!1})});B(this,"fwd",new R);B(this,"ghostValid",!1);B(this,"platformAt",(e,t,i)=>{let s=-1/0;const r=go.STEP_UP;for(const o of this.pieces){const a=e-o.pos.x,c=t-o.pos.z,l=Math.cos(o.rotY),h=Math.sin(o.rotY),u=l*a-h*c,f=h*a+l*c;let d=null;if(o.type==="floor")Math.abs(u)<=1.25&&Math.abs(f)<=1.25&&(d=o.pos.y+.14);else if(o.type==="roof")Math.abs(u)<=1.5&&Math.abs(f)<=1.35&&(d=o.pos.y+1.5);else if(o.type==="stairs"&&Math.abs(u)<=.7&&f>=-1.3&&f<=1.3){const g=ze.clamp(Math.floor((f+1.2)/.3),0,7);d=o.pos.y+(g+1)*(Qt/8)}d!==null&&d<=i+r&&d>s&&(s=d)}return s});this.field=t,this.controller=i,this.economy=s,this.colliders=r,this.rebuildTerrain=o,this.gradeY=this.field.sampleHeight($e.x,$e.z),e.add(this.group),this.buildFence(e),this.grid=new Ep($e.half*2,16,10477695,5929546),this.grid.material.transparent=!0,this.grid.material.opacity=.35,this.grid.visible=!1,e.add(this.grid),this.ghost=this.buildPiece("floor",0,"wood",!0),this.ghost.visible=!1,e.add(this.ghost),this.controller.setPlatformProvider(this.platformAt)}levelBase(e){return e<0?this.gradeY-jr:this.gradeY+e*Qt}get levels(){const e=[];this.basement&&e.push(-1);for(let t=0;t<=this.floors;t++)e.push(t);return e}get selectedType(){return this.currentType}get selectedColor(){return this.colorIdx}get selectedStyle(){return this.style}get selectedLevel(){return this.level}toggle(){this.active=!this.active,this.deleteMode=!1,this.ghost.visible=this.active,this.grid.visible=this.active,this.active&&this.refreshGhost()}onKey(e){if(this.active){if(e.startsWith("Digit")){const t=Number(e.slice(5))-1;t>=0&&t<mc.length&&(this.currentType=mc[t],this.deleteMode=!1,this.refreshGhost());return}switch(e){case"KeyR":this.userRot=(this.userRot+Math.PI/2)%(Math.PI*2),this.refreshGhost();break;case"KeyT":this.style=this.style==="wood"?"stone":this.style==="stone"?"brick":"wood",this.refreshGhost();break;case"KeyY":this.colorIdx=(this.colorIdx+1)%Ri.length,this.refreshGhost();break;case"KeyX":this.deleteMode=!this.deleteMode,this.ghost.visible=this.active&&!this.deleteMode;break;case"KeyQ":this.stepLevel(1);break;case"KeyZ":this.stepLevel(-1);break;case"KeyG":this.buyFloor();break;case"KeyH":this.buyBasement();break}}}stepLevel(e){const t=this.levels;if(t.length<2){this.notices.push({ok:!1,title:"Sin más niveles",sub:this.floors>=va&&this.basement?"Ya tienes sótano y las 3 plantas":`Compra con ${this.basement?"G (planta)":"H (sótano) · G (planta)"}`});return}const i=t.indexOf(this.level),s=ze.clamp((i<0?t.length-1:i)+e,0,t.length-1);this.level=t[s],this.refreshGhost()}buyFloor(){if(!this.active)return;if(this.floors>=va){this.notices.push({ok:!1,title:"Límite alcanzado",sub:"La casa ya tiene 3 plantas"});return}const e=gc[this.floors];if(!this.economy.spend(e.wood,e.cash)){this.notices.push({ok:!1,title:`Ampliar a ${vo(this.floors+1)}`,sub:`Necesitas 🪵 ${e.wood} + $${e.cash}`});return}this.floors++,this.level=this.floors,this.refreshGhost(),this.notices.push({ok:!0,title:`¡${vo(this.floors)} comprada!`,sub:"Sube con Q y construye encima (tecla 6 para escaleras)"})}buyBasement(){if(this.active){if(this.basement){this.notices.push({ok:!1,title:"Sótano ya construido",sub:"Baja con Z para edificar en él"});return}if(!this.economy.spend(us.wood,us.cash)){this.notices.push({ok:!1,title:"Comprar sótano",sub:`Necesitas 🪵 ${us.wood} + $${us.cash}`});return}this.excavate(),this.level=-1,this.refreshGhost(),this.notices.push({ok:!0,title:"¡Sótano excavado!",sub:"Baja por la rampa de piedra y construye bajo tierra (Z para bajar)"})}}excavate(){if(this.basement)return;this.basement=!0;const e=this.gradeY-jr;this.field.carve(Yn.cx,Yn.cz,Yn.halfW,Yn.halfD,e,1.6),this.field.carveRamp(ln.x1,ln.z1,ln.x2,ln.z2,ln.halfW,jr,e,1.4),this.rebuildTerrain(28,124.5,13),this.buildBasementKit()}onClick(){if(!this.active)return;if(this.deleteMode){this.tryDelete();return}if(!this.ghostValid)return;const e=hs[this.currentType],t=this.style==="wood"?0:this.style==="stone"?10:6;if(!this.economy.spend(e.wood,e.cash+t))return;const i=this.ghost.position.clone(),s=this.ghost.rotation.y,r=this.buildPiece(this.currentType,this.colorIdx,this.style,!1);r.position.copy(i),r.rotation.y=s,this.group.add(r);const o=this.addColliders(this.currentType,i,s);this.pieces.push({type:this.currentType,pos:i,rotY:s,colorIdx:this.colorIdx,style:this.style,level:this.level,mesh:r,colliders:o}),this.builtCount++}tryDelete(){const e=this.controller.position;let t=-1,i=3.2;for(let a=0;a<this.pieces.length;a++){const c=Math.hypot(this.pieces[a].pos.x-e.x,this.pieces[a].pos.z-e.z);c<i&&(i=c,t=a)}if(t<0)return;const s=this.pieces[t],r=hs[s.type],o=s.style==="wood"?0:s.style==="stone"?10:6;this.economy.addWood(Math.ceil(r.wood/2)),this.economy.addCash(Math.ceil((r.cash+o)/2)),this.group.remove(s.mesh);for(const a of s.colliders){const c=this.colliders.indexOf(a);c>=0&&this.colliders.splice(c,1)}this.pieces.splice(t,1)}update(){!this.active||this.deleteMode||this.refreshGhost()}refreshGhost(){if(this.ghost.userData.type!==this.currentType){this.ghost.clear();const v=this.buildPiece(this.currentType,this.colorIdx,this.style,!0);this.ghost.add(...v.children),this.ghost.userData.type=this.currentType}this.controller.getViewDir(this.fwd);const e=this.controller.position,t=3.6;let i=e.x+this.fwd.x*t,s=e.z+this.fwd.z*t;i=Math.round(i/$r)*$r,s=Math.round(s/$r)*$r;const r=this.levelBase(this.level),o=this.currentType==="roof"?r+Qt:r,a=Math.atan2(this.fwd.x,this.fwd.z),c=Math.round(a/(Math.PI/2))*(Math.PI/2);this.ghost.position.set(i,o,s),this.ghost.rotation.set(0,c+this.userRot,0),this.grid.position.set($e.x,o+.02,$e.z);const l=hs[this.currentType],h=this.style==="wood"?0:this.style==="stone"?10:6,u=Math.hypot(i-e.x,s-e.z)<1,f=Math.abs(i-$e.x)<$e.half-.55&&Math.abs(s-$e.z)<$e.half-.55,d=this.level>=0||Math.abs(i-Yn.cx)<Yn.halfW-.45&&Math.abs(s-Yn.cz)<Yn.halfD-.45;this.ghostValid=this.economy.canAfford(l.wood,l.cash+h)&&!u&&f&&d;const g=this.ghostValid?this.ghostMats.ok:this.ghostMats.bad;this.ghostValid&&g.color.setHex(Ri[this.colorIdx%Ri.length].hex).lerp(new Re(16777215),.25),this.ghost.traverse(v=>{v instanceof le&&(v.material=g)})}buildPiece(e,t,i,s){const r=new yt,o=Ri[t%Ri.length].hex,a=!s&&i==="brick"?fh():null,c=s?this.ghostMats.ok:new Ve({color:o,...a?{map:a}:{},roughness:i==="stone"?.92:i==="brick"?.85:.78,metalness:0}),l=s?this.ghostMats.ok:new Ve({color:6047022,roughness:.85}),h=s?this.ghostMats.ok:new Ve({color:2832962,roughness:.08,metalness:.7}),u=(m,p,x=0,A=0,M=0,C=!1)=>{const T=new le(m,p);T.position.set(x,A,M),s||(T.castShadow=!0,T.receiveShadow=!0),r.add(T)},f=2.4,d=.18,g=s?this.ghostMats.ok:l,v=m=>{u(new xe(f+.02,.5,d+.02),g,0,-.24,0)};switch(e){case"floor":{u(new xe(2.4,.14,2.4),c,0,.07,0);for(const m of[-1,1])u(new xe(.18,.12,2.4),l,m*.9,.02,0);for(let m=0;m<4;m++)u(new xe(2.3,.02,.03),l,0,.145,-.9+m*.6);break}case"wall":{if(i==="stone")for(let m=0;m<6;m++){const p=4-m%2;for(let x=0;x<p;x++){const A=f/p-.03;u(new xe(A,.42,d),c,-f/2+(x+.5)*(f/p),.22+m*.44,0)}}else{for(let m=0;m<6;m++)u(new xe(f/6-.02,Qt,d),c,-f/2+(m+.5)*(f/6),Qt/2,0);u(new xe(f,.16,d+.04),l,0,.3,0),u(new xe(f,.16,d+.04),l,0,Qt-.3,0)}v();break}case"door":{for(const p of[-1,1])u(new xe(.8,Qt,d),c,p*.8,Qt/2,0);u(new xe(.8,.55,d),c,0,Qt-.275,0);const m=new le(new xe(.78,2,.06),l);m.position.set(-.4,1,.42),m.rotation.y=.55,m.castShadow=!s,r.add(m),v();break}case"window":{u(new xe(f,.7,d),c,0,.35,0),u(new xe(f,.6,d),c,0,Qt-.3,0);for(const m of[-1,1])u(new xe(.45,Qt,d),c,m*.975,Qt/2,0);u(new xe(1.3,1.25,.06),l,0,1.32,0),u(new xe(1.14,1.1,.05),h,0,1.32,.01),u(new xe(.07,1.1,.07),l,0,1.32,.02),v();break}case"stairs":{const p=Qt/8,x=2.4/8;for(let A=0;A<8;A++)u(new xe(1.3,p+.05,x+.02),c,0,(A+1)*p-(p+.05)/2,-1.2+(A+.5)*x);for(const A of[-1,1]){const M=new le(new xe(.09,.14,2.6),l);M.position.set(A*.66,Qt/2,0),M.rotation.x=Math.atan2(Qt,2.4)*-1+0,M.castShadow=!s,r.add(M)}break}case"roof":{const m=Math.hypot(1.35,1.45),p=Math.atan2(1.35,1.45);for(const A of[-1,1]){const M=new le(new xe(m,.12,2.6),c);M.position.set(A*1.45/2,.75,0),M.rotation.z=-A*p,M.castShadow=!s,M.receiveShadow=!s,r.add(M)}const x=new le(new xe(.28,.16,2.6),l);x.position.y=1.48,x.castShadow=!s,r.add(x);break}}return r.userData.type=e,r}addColliders(e,t,i){const s=[],r=t.y,o=r-.5,a=r+Qt-.06,c=Math.sin(i),l=Math.cos(i),h=(f,d)=>[t.x+c*d+l*f,t.z+l*d-c*f],u=(f,d,g,v,m=.4)=>{const[p,x]=h(f,d),[A,M]=h(g,v),C=Math.hypot(A-p,M-x),T=Math.max(1,Math.round(C/.9));for(let P=0;P<=T;P++){const E=P/T,S={x:p+(A-p)*E,z:x+(M-x)*E,r:m,minY:o,maxY:a};s.push(S),this.colliders.push(S)}};switch(e){case"floor":case"roof":case"stairs":break;case"wall":u(-1.1,0,1.1,0);break;case"door":u(-1.15,0,-.45,0),u(.45,0,1.15,0);break;case"window":u(-1.15,0,1.1,0);break}return s}buildFence(e){const t=new yt,i=new Ve({map:_x(),color:12163698,roughness:.85}),s=new Ve({color:6047022,roughness:.9});this.gradeY;const r=$e.half,o=new xe(.14,1.15,.14),a=new xe(2.05,.07,.05),c=(g,v,m,p,x,A)=>{const M=Math.hypot(m-g,p-v),C=Math.max(2,Math.round(M/2.05)),T=(m-g)/M,P=(p-v)/M,E=x??-1/0,S=A??1/0;for(let y=0;y<C;y++){const D=y/C*M,L=(y+1)/C*M,U=(D+L)/2;if(U>E&&U<S)continue;const z=g+T*L,N=v+P*L,F=this.field.sampleHeight(z,N),W=new le(o,s);if(W.position.set(z,F+.55,N),W.rotation.y=Math.atan2(-P,T),W.castShadow=!0,t.add(W),!(L>E&&D<S)){const k=g+T*U,$=v+P*U,ne=this.field.sampleHeight(k,$);for(const ge of[.42,.85]){const Pe=new le(a,i);Pe.position.set(k,ne+ge,$),Pe.rotation.y=Math.atan2(-P,T),Pe.castShadow=!0,t.add(Pe)}}}};c($e.x-r,$e.z-r,$e.x+r,$e.z-r),c($e.x+r,$e.z-r,$e.x+r,$e.z+r),c($e.x+r,$e.z+r,$e.x-r,$e.z+r,10.8,15.6),c($e.x-r,$e.z+r,$e.x-r,$e.z-r);for(const[g,v]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const m=$e.x+g*r,p=$e.z+v*r,x=new le(new xe(.2,1.4,.2),s);x.position.set(m,this.field.sampleHeight(m,p)+.7,p),x.castShadow=!0,t.add(x)}const l=$e.x-3.2,h=$e.z+r+.6,u=this.field.sampleHeight(l,h);for(const g of[-1,1]){const v=new le(new xe(.1,1.5,.1),s);v.position.set(l+g*.7,u+.75,h),v.castShadow=!0,t.add(v)}const f=new Ve({map:qA(),roughness:.8}),d=new le(new xe(1.7,1.05,.07),[f,f,s,s,f,f]);d.position.set(l,u+1.35,h),d.castShadow=!0,t.add(d),e.add(t)}buildBasementKit(){const e=new yt,t=new Ve({map:fh(),color:11052186,roughness:.95}),i=this.gradeY-jr,s=this.gradeY+.45,r=s-i,o=(s+i)/2,a=(v,m,p,x)=>{const A=new le(new xe(p,r,x),t);A.position.set(v,o,m),A.castShadow=!0,A.receiveShadow=!0,e.add(A)},{cx:c,cz:l,halfW:h,halfD:u}=Yn;a(c,l-u-.18,h*2+.9,.36),a(c+h+.18,l,.36,u*2),a(c-h-.18,l,.36,u*2);const f=h-ln.halfW-.35;a(c-(ln.halfW+.35+f/2),l+u+.18,f,.36),a(c+(ln.halfW+.35+f/2),l+u+.18,f,.36);const d=10;for(let v=0;v<d;v++){const m=(v+.5)/d,p=ln.z1+(ln.z2-ln.z1)*m,x=this.field.sampleHeight(ln.x1,p),A=new le(new xe(ln.halfW*2+.5,.34,.68),t);A.position.set(ln.x1,x+.05,p),A.receiveShadow=!0,A.castShadow=!0,e.add(A)}const g=new le(new xe(h*2-.2,.12,u*2-.2),t);g.position.set(c,i+.05,l),g.receiveShadow=!0,e.add(g),this.group.add(e)}serialize(){return{pieces:this.pieces.map(e=>({t:e.type,p:[e.pos.x,e.pos.y,e.pos.z],r:e.rotY,c:e.colorIdx,s:e.style,l:e.level})),floors:this.floors,basement:this.basement}}apply(e){for(const t of this.pieces){this.group.remove(t.mesh);for(const i of t.colliders){const s=this.colliders.indexOf(i);s>=0&&this.colliders.splice(s,1)}}this.pieces.length=0,this.floors=ze.clamp(Math.floor(e.floors??0),0,va),e.basement&&this.excavate();for(const t of e.pieces??[]){if(!hs[t.t])continue;const i=ze.clamp(Math.floor(t.l??0),this.basement?-1:0,this.floors),s=this.levelBase(i),r=t.t==="roof"?s+Qt:s,o=this.buildPiece(t.t,t.c,t.s,!1),a=new R(t.p[0],r,t.p[2]);o.position.copy(a),o.rotation.y=t.r,this.group.add(o);const c=this.addColliders(t.t,a,t.r);this.pieces.push({type:t.t,pos:a,rotY:t.r,colorIdx:t.c,style:t.s,level:i,mesh:o,colliders:c})}this.level=0}applyLegacy(e){this.apply({pieces:e.map(t=>({...t,l:0})),floors:0,basement:!1})}}const eo="tf-save-v2";class hr{constructor(e){B(this,"lastAuto",0);B(this,"saveTimer",0);B(this,"onSaved",null);this.engine=e,window.addEventListener("pagehide",()=>this.saveNow()),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&this.saveNow()})}static exists(){try{return localStorage.getItem(eo)!==null}catch{return!1}}static read(){try{const e=localStorage.getItem(eo);if(!e)return null;const t=JSON.parse(e);return!t||typeof t!="object"||!t.p?null:t}catch{return null}}load(){const e=hr.read();if(e)return this.applyData(e),!0;let t=!1;const i=Hu.legacy();i&&(i.wood>0||i.money!==80||i.sold>0)&&(this.engine.economy.apply(i),t=!0);try{const s=localStorage.getItem("tf-house-v1");if(s){const r=JSON.parse(s);Array.isArray(r)&&r.length&&(this.engine.builder.applyLegacy(r),t=!0)}}catch{}return t}applyData(e){const t=this.engine;t.controller.restoreSnapshot({x:e.p.x,y:e.p.y,z:e.p.z,yaw:e.p.yaw,pitch:e.p.pitch}),t.sky.setTimeOfDay(e.t??.38),t.economy.apply(e.eco??{}),t.missions.apply(e.mis??{}),t.builder.apply(e.house??{pieces:[],floors:0,basement:!1}),t.vehicles.apply(e.cars??[])}update(e,t){t&&(this.saveTimer+=e,this.saveTimer-this.lastAuto>=20&&(this.lastAuto=this.saveTimer,this.saveNow(!0)))}saveNow(e=!1){try{const t=this.engine,i={v:2,t:t.sky.time,p:t.controller.getSnapshot(),eco:t.economy.serialize(),mis:t.missions.serialize(),house:t.builder.serialize(),cars:t.vehicles.serialize(),at:Date.now()};localStorage.setItem(eo,JSON.stringify(i)),e&&this.onSaved?.()}catch{}}static wipe(){try{localStorage.removeItem(eo),localStorage.removeItem("tf-economy-v1"),localStorage.removeItem("tf-house-v1")}catch{}}}function KA(n){return n<.22||n>=.82?"🌙":n<.3?"🌅":n<.72?"☀️":"🌇"}const Ph={low:{grassCount:12e3,shadowMapSize:1024,pixelRatioCap:1,grassShadows:!1,godRays:!1},med:{grassCount:28e3,shadowMapSize:2048,pixelRatioCap:1.5,grassShadows:!0,godRays:!0},high:{grassCount:42e3,shadowMapSize:4096,pixelRatioCap:2,grassShadows:!0,godRays:!0}},to=58,ZA=70,JA=1.25,wi=()=>new Promise(n=>setTimeout(n,0));class jA{constructor(e){B(this,"renderer");B(this,"scene");B(this,"camera");B(this,"missions",new zA);B(this,"economy",new Hu);B(this,"qualityName");B(this,"clock",new wp);B(this,"field");B(this,"sky");B(this,"controller");B(this,"composer");B(this,"motes");B(this,"audio");B(this,"drone");B(this,"collectibles");B(this,"vehicles");B(this,"chopping");B(this,"builder");B(this,"hands");B(this,"forest");B(this,"quality");B(this,"hud",null);B(this,"mode","menu");B(this,"hadFirstPlay",!1);B(this,"cycleInfo",{time:.38,night:0,clock:"09:07"});B(this,"save");B(this,"transT",0);B(this,"transFromPos",new R);B(this,"transFromQuat",new Et);B(this,"transFromFov",to);B(this,"cineLook",new R);B(this,"cineTarget",new R);B(this,"tmpQuat",new Et);B(this,"terrainUpdate");B(this,"terrainRebuild");const t=new URLSearchParams(location.search).get("q")??localStorage.getItem("tf-quality")??"med";this.qualityName=t in Ph?t:"med",this.quality=Ph[this.qualityName],this.renderer=new cx({antialias:!1,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,this.quality.pixelRatioCap)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Nh,e.appendChild(this.renderer.domElement),this.scene=new nr,this.camera=new an(to,window.innerWidth/window.innerHeight,.1,2e3),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer?.setSize(window.innerWidth,window.innerHeight)}),this.bindInputs()}bindInputs(){window.addEventListener("keydown",e=>{if(!(this.mode!=="play"||this.vehicles.isDriving))switch(e.code){case"KeyF":this.vehicles.toggleEnter()&&this.audio.playEvent("door");break;case"KeyB":this.builder.toggle(),this.audio.playEvent("ui");break;case"KeyE":this.trySellWood();break;default:this.builder.onKey(e.code);break}}),window.addEventListener("keydown",e=>{this.mode!=="play"||!this.vehicles.isDriving||e.code==="KeyF"&&(this.vehicles.toggleEnter(),this.audio.playEvent("door"))}),this.renderer.domElement.addEventListener("mousedown",e=>{if(!(this.mode!=="play"||this.vehicles.isDriving)&&document.pointerLockElement&&e.button===0)if(this.builder.active){const t=this.economy.money+this.economy.wood;this.builder.onClick(),this.economy.money+this.economy.wood<t?this.audio.playEvent("hammer"):this.builder.deleteMode||this.audio.playEvent("deny")}else this.chopping.trySwing()})}trySellWood(){if(this.economy.wood<=0||this.collectibles.nearest)return;const e=this.controller.position;Math.hypot(e.x-Bn.x,e.z-Bn.z)>Bn.r+2||this.economy.sellWood(5)}async build(e){e(.05,"Modelando el terreno…"),await wi(),this.field=new ux,e(.2,"Iluminando el cielo…"),await wi(),this.sky=new Dx(this.renderer,this.scene,this.quality.shadowMapSize),e(.34,"Extendiendo la ladera…"),await wi();const t=await Cx(this.field);this.scene.add(t.group),this.terrainUpdate=t.update,this.terrainRebuild=t.rebuildAt,e(.46,"Sembrando el pasto…"),await wi();const i=Px(this.field,this.quality.grassCount);i.receiveShadow=this.quality.grassShadows,this.scene.add(i),e(.56,"Plantando el bosque…"),await wi(),this.forest=Gx(this.field,this.scene);const s=this.forest.colliders;e(.64,"Levantando el pueblo…"),await wi(),Vx(this.field,this.scene,s),Wx(this.field,this.scene,s),eM(this.scene,this.field,s,this.sky),await Yx(this.field,this.scene,s),this.drone=new tM(this.scene,this.field),this.motes=new Xx(this.scene),this.collectibles=new HA(this.scene,this.field),e(.78,"Afinando la luz…"),await wi(),this.controller=new go(this.camera,this.field,s,lx),this.scene.add(this.camera),this.audio=new OA(this.field,this.controller),this.hands=new cM(this.camera),this.vehicles=new XA(this.scene,this.field,s,this.controller,this.camera,this.audio),this.chopping=new YA(this.scene,this.forest,this.controller,this.hands,this.economy,this.audio,this.camera),this.builder=new QA(this.scene,this.field,this.controller,this.economy,s,(r,o,a)=>this.terrainRebuild(r,o,a)),this.composer=NA(this.renderer,this.scene,this.camera,this.sky.sunMesh,this.quality.godRays),this.save=new hr(this),this.save.load(),this.updateCinematic(0),this.sky.followPlayer(this.camera.position),this.forest.update(this.camera.position),this.terrainUpdate(this.camera.position),await this.renderer.compileAsync(this.scene,this.camera),this.composer.render(0),e(1,"Listo")}setHud(e){this.hud=e}beginPlay(){this.mode!=="paused"&&(this.mode="transition",this.transT=0,this.transFromPos.copy(this.camera.position),this.transFromQuat.copy(this.camera.quaternion),this.transFromFov=this.camera.fov)}setPlaying(e){e?(this.mode==="paused"&&(this.mode="play",this.controller.enabled=!this.vehicles.isDriving,this.collectibles.setPlaying(!0)),this.audio.setMenu(!1)):(this.mode=this.hadFirstPlay?"paused":"menu",this.mode==="menu"&&this.updateCinematic(Kt.uTime.value),this.controller.enabled=!1,this.collectibles.setPlaying(!1),this.audio.setMenu(!0),this.save?.saveNow())}startAudio(){this.audio.start()}start(){this.clock.getDelta(),this.renderer.setAnimationLoop(()=>this.update())}get dronePosition(){return this.drone.position}update(){const e=Math.min(this.clock.getDelta(),.05),t=Kt.uTime.value+e;Kt.uTime.value=t;const i=this.mode==="play";switch(this.cycleInfo=this.sky.updateCycle(e,i),this.vehicles.setNight(this.cycleInfo.night),this.save?.update(e,i),this.mode){case"menu":this.updateCinematic(t);break;case"transition":this.updateTransition(e);break;case"play":this.vehicles.isDriving?this.vehicles.update(e,this.controller.pressedKeys):this.controller.update(e),this.updateGameplay(e,t);break}const s=this.mode==="play"&&!this.vehicles.isDriving;this.hands.setVisible(s),s&&this.hands.update(e,{bobPhase:this.controller.bobPhase,bobIntensity:this.controller.bobIntensity,sprinting:this.controller.isSprinting,grounded:this.controller.isGrounded,lastPickup:this.controller.lastPickup});const r=this.mode==="menu"||this.mode==="transition"?this.camera.position:this.controller.position;Kt.uPlayer.value.set(r.x,r.z),this.sky.followPlayer(r),this.forest.update(r,i?e:0,t),this.terrainUpdate(r),this.motes.update(t,r,this.field),this.drone.update(e,t,this.controller.position),this.audio.update(e,t),this.composer.render(e)}updateCinematic(e){const r=e*.038+2.4,o=6+Math.cos(r)*36,a=92+Math.sin(r)*36,c=this.field.sampleHeight(o,a)+8.5+Math.sin(e*.12)*2.4;this.camera.position.set(o,c,a);const l=.5+.5*Math.sin(e*.05+1.2),h=this.field.sampleHeight(0,55)+5,u=this.field.sampleHeight(ct.x,ct.z)+13;this.cineTarget.set(ze.lerp(0,ct.x,l),ze.lerp(h,u,l),ze.lerp(55,ct.z,l)),this.camera.lookAt(this.cineTarget),Math.abs(this.camera.fov-to)>.01&&(this.camera.fov=ze.damp(this.camera.fov,to,4,1/60),this.camera.updateProjectionMatrix()),this.cineLook.copy(this.cineTarget)}updateTransition(e){this.transT+=e/JA;const t=ze.smoothstep(Math.min(this.transT,1),0,1),i=this.controller.position;this.controller.getViewQuaternion(this.tmpQuat),this.camera.position.lerpVectors(this.transFromPos,i,t),this.camera.quaternion.slerpQuaternions(this.transFromQuat,this.tmpQuat,t);const s=ze.lerp(this.transFromFov,ZA,t);Math.abs(s-this.camera.fov)>.01&&(this.camera.fov=s,this.camera.updateProjectionMatrix()),this.transT>=1&&(this.mode="play",this.hadFirstPlay=!0,this.controller.enabled=!0,this.collectibles.setPlaying(!0),this.controller.update(0))}updateGameplay(e,t){const i=this.controller.position;this.collectibles.update(e,t,i),this.chopping.update(e),this.builder.update();for(const s of this.builder.notices)this.audio.playEvent(s.ok?"cash":"deny"),this.hud?.toast(s.ok?"build":"new",s.title,s.sub);this.builder.notices.length=0,this.missions.update({walked:this.controller.walkedDistance,sprinted:this.controller.sprintDistance,collected:this.collectibles.collected,playerPos:i,chopped:this.chopping.choppedCount,drove:this.vehicles.hasDriven?1:0,built:this.builder.builtCount,sold:this.economy.totalSold},this.dronePosition);for(const s of this.missions.completedEvents){this.audio.playEvent("mission");const r=s.def.cash??0;r>0&&this.economy.addCash(r),this.hud?.toast("mission",s.def.title,`Misión completada · +${s.xp} XP${r?` · +$${r}`:""}`)}this.missions.completedEvents.length=0;for(const s of this.missions.activatedEvents)this.hud?.toast("new","Nueva misión",s.title);this.missions.activatedEvents.length=0;for(const s of this.missions.levelUpEvents)this.audio.playEvent("level"),this.hud?.toast("level",`¡Nivel ${s}!`,"Sigue explorando el bosque");this.missions.levelUpEvents.length=0;for(const s of this.collectibles.collectedEvents)this.audio.playEvent("pickup"),this.controller.lastPickup=t,this.hud?.toast("item",s.kind==="flower"?"Flor luminosa":s.kind==="crystal"?"Fragmento de cristal":"Reliquia antigua",s.remaining>0?`Quedan ${s.remaining} de ${s.total}`:"Colección completa");this.collectibles.collectedEvents.length=0;for(const s of this.forest.fellEvents)this.audio.playEvent("fall"),this.economy.addWood(s.wood),this.hud?.toast("wood","Árbol talado",`+${s.wood} de madera · véndela en el aserradero`);this.forest.fellEvents.length=0;for(const s of this.economy.events)s.kind==="cash"?(this.audio.playEvent("cash"),this.hud?.toast("cash","Dinero ganado",`+$${s.amount}`)):s.kind==="sell"?(this.audio.playEvent("cash"),this.hud?.toast("cash","Madera vendida",`+$${s.amount} en el aserradero`)):s.kind==="spend"&&this.hud?.toast("build","Pieza colocada",`Materiales gastados · -$${s.amount}`);this.economy.events.length=0,this.hud?.update(e,this.cycleInfo)}}function $A(n){const e=n.getContext("2d");let t=0,i=!0,s=0,r=0,o=performance.now();const a=()=>{const m=Math.min(window.devicePixelRatio,1.5);n.width=Math.floor(window.innerWidth*m),n.height=Math.floor(window.innerHeight*m),n.style.width=`${window.innerWidth}px`,n.style.height=`${window.innerHeight}px`,e.setTransform(m,0,0,m,0,0)};a(),window.addEventListener("resize",a);const c=()=>window.innerWidth,l=()=>window.innerHeight,h=(m,p,x,A,M)=>{let C=m;const T=()=>(C=C*16807%2147483647,C/2147483647),P=[];for(let E=0;E<p;E++)P.push({x:E/p*1.15*c()+T()*90-45,h:A+T()*(M-A),w:.32+T()*.22,lean:(T()-.5)*.16});return{color:x,trees:P,swaySpeed:.25+T()*.3,swayAmp:4+T()*6}};let u=[];const f=()=>{u=[h(1234,26,"#0b1a0e",l()*.22,l()*.38),h(5678,20,"#081309",l()*.32,l()*.5),h(9012,14,"#050c06",l()*.45,l()*.68)]};f(),window.addEventListener("resize",f);const d=[];for(let m=0;m<70;m++){const p=m>46;d.push({x:Math.random()*c(),y:p?l()*(.55+Math.random()*.4):Math.random()*l()*.8,vx:(Math.random()-.5)*14,vy:p?(Math.random()-.5)*6:-4-Math.random()*8,r:p?1.6+Math.random()*1.8:.8+Math.random()*1.6,ph:Math.random()*Math.PI*2,fire:p})}const g=[{y:.62,h:.16,speed:12,alpha:.05},{y:.74,h:.2,speed:-8,alpha:.07},{y:.5,h:.1,speed:18,alpha:.04}],v=m=>{if(!i)return;const p=Math.min((m-o)/1e3,.05);o=m,r+=p;const x=c(),A=l(),M=e.createLinearGradient(0,0,0,A);M.addColorStop(0,"#0d1f12"),M.addColorStop(.45,"#112a16"),M.addColorStop(.72,"#1b3a1e"),M.addColorStop(1,"#071009"),e.fillStyle=M,e.fillRect(0,0,x,A);const C=x*.78,T=A*.18,P=e.createRadialGradient(C,T,0,C,T,A*.3);P.addColorStop(0,"rgba(214,235,190,0.20)"),P.addColorStop(1,"rgba(214,235,190,0)"),e.fillStyle=P,e.fillRect(0,0,x,A),e.fillStyle="rgba(226,240,208,0.85)",e.beginPath(),e.arc(C,T,A*.035,0,Math.PI*2),e.fill();for(let E=0;E<3;E++){const S=-.9+E*.28+Math.sin(r*.11+E*2.1)*.05,y=x*(.3+E*.22),D=A*1.4;e.save(),e.translate(y,-A*.1),e.rotate(S);const L=e.createLinearGradient(0,0,0,D);L.addColorStop(0,"rgba(196,226,160,0.055)"),L.addColorStop(1,"rgba(196,226,160,0)"),e.fillStyle=L,e.fillRect(-x*.035,0,x*.07,D),e.restore()}for(const E of g){const S=A*E.y,y=r*E.speed%(x*1.6)-x*.3,D=e.createRadialGradient(y+x*.3,S,0,y+x*.3,S,x*.75);D.addColorStop(0,`rgba(178,204,160,${E.alpha})`),D.addColorStop(1,"rgba(178,204,160,0)"),e.fillStyle=D,e.fillRect(0,S-A*E.h,x,A*E.h*2)}for(let E=0;E<u.length;E++){const S=u[E],y=A*(.66+E*.11);e.fillStyle=S.color;for(const D of S.trees){const L=Math.sin(r*S.swaySpeed+D.x*.01)*S.swayAmp,U=D.x+L,z=D.h,N=z*D.w;e.beginPath(),e.moveTo(U-N*.05,y),e.lineTo(U+N*.05,y),e.lineTo(U+N*.03+D.lean*z*.3,y-z),e.lineTo(U-N*.03+D.lean*z*.3,y-z),e.closePath(),e.fill();for(let F=0;F<3;F++){const W=F/3,k=y-z*(.3+W*.55),$=N*(.75-W*.42),ne=z*.2;e.beginPath(),e.moveTo(U-$+L*.4*W,k),e.lineTo(U+D.lean*z*.3+L*.6,k-ne),e.lineTo(U+$+L*.4*W,k),e.closePath(),e.fill()}}e.fillRect(0,y,x,A-y+4)}for(const E of d){E.x+=(E.vx+Math.sin(r*.5+E.ph)*6)*p,E.y+=E.vy*p,E.x<-20&&(E.x=x+20),E.x>x+20&&(E.x=-20),E.y<-20&&(E.y=A+20),E.y>A+20&&(E.y=-20);const S=E.fire?.35+.65*Math.max(0,Math.sin(r*2.4+E.ph*3)):.5+.5*Math.sin(r*1.3+E.ph),y=E.r*(E.fire?3.2:2.2),D=e.createRadialGradient(E.x,E.y,0,E.x,E.y,y),L=E.fire?`rgba(190,255,140,${.75*S})`:`rgba(235,240,205,${.4*S})`;D.addColorStop(0,L),D.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=D,e.beginPath(),e.arc(E.x,E.y,y,0,Math.PI*2),e.fill()}if(s>0){const E=Math.min(x*.5,460),S=(x-E)/2,y=A-34;e.fillStyle="rgba(255,255,255,0.08)",e.fillRect(S,y,E,2),e.fillStyle="rgba(184,212,136,0.9)",e.fillRect(S,y,E*s,2)}t=requestAnimationFrame(v)};return t=requestAnimationFrame(v),{setProgress:m=>{s=Math.max(0,Math.min(1,m))},stop:()=>{i=!1,cancelAnimationFrame(t),window.removeEventListener("resize",a),window.removeEventListener("resize",f)}}}const ey=[{a:0,label:"N"},{a:45,label:"NE"},{a:90,label:"E"},{a:135,label:"SE"},{a:180,label:"S"},{a:225,label:"SO"},{a:270,label:"O"},{a:315,label:"NO"}],Ih=1.05,ty={flower:"🌸",crystal:"💠",relic:"⚱️"};class ny{constructor(e,t,i,s,r,o,a,c,l){B(this,"root");B(this,"compass");B(this,"ctx2d");B(this,"tracker");B(this,"prompt");B(this,"promptKey");B(this,"promptText");B(this,"xpFill");B(this,"xpLevel");B(this,"toasts");B(this,"resMoney");B(this,"resWood");B(this,"speedo");B(this,"speedVal");B(this,"buildbar");B(this,"clock");B(this,"saveDot");B(this,"tmpVec",new R);B(this,"trackerRefresh",0);B(this,"lastPrompt","");B(this,"lastClock","");B(this,"lastLevel",-1);B(this,"lastXpPct",-1);B(this,"lastMoney",-1);B(this,"lastWood",-1);this.missions=e,this.collectibles=t,this.controller=i,this.getDronePos=s,this.camera=r,this.economy=o,this.vehicles=a,this.builder=c,this.chopping=l,this.root=document.getElementById("hud"),this.compass=document.getElementById("compass"),this.ctx2d=this.compass.getContext("2d"),this.tracker=document.getElementById("tracker"),this.prompt=document.getElementById("prompt"),this.promptKey=document.getElementById("promptKey"),this.promptText=document.getElementById("promptText"),this.xpFill=document.getElementById("xpFill"),this.xpLevel=document.getElementById("xpLevel"),this.toasts=document.getElementById("toasts"),this.resMoney=document.getElementById("resMoney"),this.resWood=document.getElementById("resWood"),this.speedo=document.getElementById("speedo"),this.speedVal=document.getElementById("speedVal"),this.buildbar=document.getElementById("buildbar"),this.clock=document.getElementById("clock"),this.saveDot=document.getElementById("saveDot"),this.resizeCompass(),window.addEventListener("resize",()=>this.resizeCompass())}flashSave(){this.saveDot.classList.remove("on"),this.saveDot.offsetWidth,this.saveDot.classList.add("on")}resizeCompass(){const e=Math.min(window.devicePixelRatio,2),t=Math.min(560,Math.floor(window.innerWidth*.46)),i=46;this.compass.width=Math.floor(t*e),this.compass.height=Math.floor(i*e),this.compass.style.width=`${t}px`,this.compass.style.height=`${i}px`,this.ctx2d.setTransform(e,0,0,e,0,0)}show(){this.root.classList.remove("hidden")}hide(){this.root.classList.add("hidden")}toast(e,t,i){const s=document.createElement("div");s.className=`toast toast-${e}`;const r=e==="mission"?"✓":e==="new"?"◈":e==="level"?"★":e==="cash"?"💰":e==="wood"?"🪵":e==="build"?"🔨":"+";for(s.innerHTML=`<span class="toast-ic">${r}</span><div><div class="toast-t">${t}</div><div class="toast-s">${i}</div></div>`,this.toasts.appendChild(s);this.toasts.children.length>4;)this.toasts.firstChild?.remove();setTimeout(()=>{s.classList.add("out"),setTimeout(()=>s.remove(),500)},4200)}update(e,t){this.drawCompass();const i=`${KA(t.time)} ${t.clock}`;i!==this.lastClock&&(this.lastClock=i,this.clock.textContent=i),this.trackerRefresh-=e,this.trackerRefresh<=0&&(this.trackerRefresh=.25,this.renderTracker(),this.renderBuildBar()),this.economy.money!==this.lastMoney&&(this.lastMoney=this.economy.money,this.resMoney.textContent=`$${this.economy.money}`),this.economy.wood!==this.lastWood&&(this.lastWood=this.economy.wood,this.resWood.textContent=`${this.economy.wood}`),this.vehicles.isDriving?(this.speedo.classList.remove("hidden"),this.speedVal.textContent=String(Math.round(this.vehicles.speedKmh))):this.speedo.classList.add("hidden");let s="",r="";if(this.vehicles.isDriving)s="F",r="bajar del coche";else if(this.vehicles.nearest(this.controller.position))s="F",r="subir al coche";else if(this.economy.wood>0&&this.nearSawmill())s="E",r=`vender ${this.economy.wood} de madera (+$${this.economy.wood*5})`;else{const c=this.collectibles.nearest;c?(s="E",r=`Recoger ${c.label}`):this.chopping.aimedTree()&&(s="🖱",r="Talar el árbol")}const o=s+r;o!==this.lastPrompt&&(this.lastPrompt=o,s?(this.promptKey.textContent=s,this.promptText.textContent=r,this.prompt.classList.remove("hidden")):this.prompt.classList.add("hidden"));const a=Math.round(this.missions.levelProgress*100);(this.missions.levelNumber!==this.lastLevel||a!==this.lastXpPct)&&(this.lastLevel=this.missions.levelNumber,this.lastXpPct=a,this.xpLevel.textContent=`NV ${this.missions.levelNumber}`,this.xpFill.style.width=`${a}%`)}nearSawmill(){const e=this.controller.position;return Math.hypot(e.x-Bn.x,e.z-Bn.z)<Bn.r+2}renderTracker(){const e=this.missions.activeMissions;let t='<div class="trk-head">MISIONES</div>';e.length||(t+='<div class="trk-empty">Todo completado. ¡Bien hecho!</div>');for(const{def:i,progress:s}of e){const r=i.goal>1?Math.min(s/i.goal,1):0,o=i.goal>1?`<span class="trk-count">${Math.floor(s)}/${i.goal}</span>`:"";t+=`
        <div class="trk-item" data-m="${i.id}">
          <div class="trk-title"><span class="trk-ic">${i.icon}</span>${i.title}${o}</div>
          <div class="trk-bar"><div class="trk-fill" style="width:${Math.round(r*100)}%"></div></div>
        </div>`}this.tracker.innerHTML=t}renderBuildBar(){if(!this.builder.active){this.buildbar.classList.add("hidden");return}if(this.buildbar.classList.remove("hidden"),this.builder.deleteMode){this.buildbar.innerHTML=`
        <div class="bb-head">DEMOLER</div>
        <div class="bb-body">
          <span class="bb-sel">Cerca de ti · devuelve 50% del coste</span>
          <span class="bb-hint"><kbd>X</kbd> volver a construir · <kbd>B</kbd> salir</span>
        </div>`;return}const e=this.builder.selectedType,t=this.builder.selectedStyle,i=this.builder.selectedColor,s=this.builder.selectedLevel,r=hs[e],o=t==="wood"?0:t==="stone"?10:6,a=this.economy.canAfford(r.wood,r.cash+o),c=[];this.builder.basement?c.push(`<span class="bb-lv${s===-1?" cur":""} own">🪨 Sótano</span>`):c.push(`<span class="bb-lv buy"><kbd>H</kbd> Sótano · 🪵${us.wood}+$${us.cash}</span>`);for(let h=0;h<=this.builder.floors;h++)c.push(`<span class="bb-lv${s===h?" cur":""} own">${h===0?"🏠 Baja":`${h}ª planta`}</span>`);if(this.builder.floors<gc.length){const h=gc[this.builder.floors];c.push(`<span class="bb-lv buy"><kbd>G</kbd> ${vo(this.builder.floors+1)} · 🪵${h.wood}+$${h.cash}</span>`)}let l="";mc.forEach((h,u)=>{const f=hs[h];l+=`<span class="bb-piece${h===e?" sel":""}"><b>${u+1}</b>${f.icon} ${f.name}</span>`}),this.buildbar.innerHTML=`
      <div class="bb-head">CONSTRUIR · <kbd>Q</kbd>/<kbd>Z</kbd> nivel · <kbd>B</kbd> salir</div>
      <div class="bb-levels">${c.join("")}</div>
      <div class="bb-pieces">${l}</div>
      <div class="bb-body">
        <span class="bb-sel">
          ${vo(s)} · ${r.name} ·
          <i class="${a?"ok":"no"}">🪵 ${r.wood} + $${r.cash+o}</i>
           · <kbd>T</kbd> ${t==="wood"?"madera":t==="stone"?"piedra":"ladrillo"}
           · <kbd>Y</kbd> <i class="swatch" style="background:#${Ri[i].hex.toString(16).padStart(6,"0")}"></i>${Ri[i].name}
           · <kbd>R</kbd> rotar · <kbd>X</kbd> demoler
        </span>
      </div>`}compassMarkers(){const e=[];for(const{def:t}of this.missions.activeMissions)if(t.kind==="reach"&&t.poi)this.tmpVec.set(t.poi.x,0,t.poi.z),e.push({pos:this.tmpVec.clone(),label:t.poi.label,color:"#ffd977"});else if(t.kind==="drone")e.push({pos:this.getDronePos().clone(),label:"Dron",color:"#ff8f6b"});else if(t.kind==="collect"&&t.item){const i=this.collectibles.nearestOfKind(t.item);i&&e.push({pos:i.clone(),label:`${ty[t.item]}`,color:"#9fe8ff"})}else t.kind==="drive"?(this.tmpVec.set(58,0,124),e.push({pos:this.tmpVec.clone(),label:"🚗",color:"#a8e8c8"})):t.kind==="build"?(this.tmpVec.set($e.x,0,$e.z),e.push({pos:this.tmpVec.clone(),label:"🔨",color:"#e8c88f"})):t.kind==="sell"&&(this.tmpVec.set(Bn.x,0,Bn.z),e.push({pos:this.tmpVec.clone(),label:"💰",color:"#ffd98c"}));return e.slice(0,4)}drawCompass(){const e=this.ctx2d,t=parseFloat(this.compass.style.width),i=parseFloat(this.compass.style.height);e.clearRect(0,0,t,i);const s=new R;this.camera.getWorldDirection(s);const r=Math.atan2(s.x,-s.z),o=this.controller.position,a=t/2,c=e.createLinearGradient(0,0,0,i);c.addColorStop(0,"rgba(8,14,8,0.0)"),c.addColorStop(.35,"rgba(8,14,8,0.55)"),c.addColorStop(1,"rgba(8,14,8,0.0)"),e.fillStyle=c,e.fillRect(0,0,t,i);const l=h=>{let u=h-r;return u=Math.atan2(Math.sin(u),Math.cos(u)),Math.abs(u)>Ih?null:a+u/Ih*(t/2-8)};e.textAlign="center";for(let h=0;h<360;h+=15){const u=h*Math.PI/180,f=l(u);if(f===null)continue;const d=h%45===0;e.fillStyle=d?"rgba(232,238,222,0.85)":"rgba(232,238,222,0.3)",e.fillRect(f-.5,d?10:14,d?1.5:1,d?8:4)}e.font='600 11px "Segoe UI", system-ui, sans-serif';for(const h of ey){const u=l(h.a*Math.PI/180);u!==null&&(e.fillStyle=h.label.length===1?"rgba(240,245,230,0.95)":"rgba(200,212,180,0.7)",e.fillText(h.label,u,32))}e.font='600 9px "Segoe UI", system-ui, sans-serif';for(const h of this.compassMarkers()){const u=Math.atan2(h.pos.x-o.x,-(h.pos.z-o.z));let f=l(u),d=!1;if(f===null){let v=u-r;v=Math.atan2(Math.sin(v),Math.cos(v)),f=v>0?t-10:10,d=!0}const g=Math.round(Math.hypot(h.pos.x-o.x,h.pos.z-o.z));e.fillStyle=h.color,e.beginPath(),d?(e.moveTo(f,18+(f>a?3:-3)),e.lineTo(f-5,12),e.lineTo(f+5,12),e.closePath()):(e.moveTo(f,8),e.lineTo(f-4.5,15),e.lineTo(f,22),e.lineTo(f+4.5,15),e.closePath()),e.fill(),d||(e.fillStyle="rgba(240,245,230,0.85)",e.fillText(`${h.label} ${g}m`,f,44))}e.fillStyle="rgba(184,212,136,0.95)",e.fillRect(a-1,6,2,10)}}const _t=n=>document.getElementById(n),iy=_t("boot"),Ws=_t("menu"),Lh=_t("hud"),hi=_t("play"),sy=_t("ringFill"),ry=_t("bootPct"),Gu=_t("bootText"),oy=_t("pauseBadge"),ay=_t("hint"),cy=_t("hint2"),ly=_t("misCounter"),hy=_t("qLabel"),uy=264,Bh=["Consejo: mantén Shift para correr entre la hierba","Consejo: tala árboles con el hacha (clic izquierdo) y gana madera","Consejo: sube a los coches del pueblo con F y da una vuelta","Consejo: vende la madera en el aserradero (tecla E junto a la sierra)","Consejo: tu parcela está junto al pueblo: pulsa B y construye tu casa","Consejo: compra plantas con G y un sótano con H en el constructor","Consejo: de noche se encienden las farolas del pueblo","Consejo: la partida se guarda sola; también al pausar","Consejo: la brújula marca tus misiones activas","Consejo: el dron patrulla la cumbre… acércate si te atreves","Consejo: cambia la calidad en el menú si va lento"];function xa(n){_t(n).classList.remove("hidden")}function os(){for(const n of["panelControls","panelCredits","panelMissions"])_t(n).classList.add("hidden")}function Uh(n){const e=n.missions.all,t=e.filter(r=>r.state.done).length;_t("misDoneN").textContent=String(t),_t("misLevel").textContent=String(n.missions.levelNumber),_t("misXp").textContent=String(n.missions.xp),ly.textContent=`${t}/${e.length}`;const i=_t("misList");let s="";for(const{def:r,state:o}of e){const a=o.done?"done":o.active?"active":"locked",c=o.done?"COMPLETADA":o.active?"ACTIVA":"BLOQUEADA",l=o.active&&r.goal>1?` <span class="mis-xp">· ${Math.floor(o.progress)}/${r.goal}</span>`:"",h=r.cash?` <span class="mis-xp">· $${r.cash}</span>`:"";s+=`
      <div class="mis-item ${a}">
        <span class="mis-ic">${o.done?"✓":r.icon}</span>
        <div class="mis-body">
          <div class="mis-t">${r.title}</div>
          <div class="mis-h">${r.hint}</div>
        </div>
        <span class="mis-xp">+${r.xp} XP${h}${l}</span>
        <span class="mis-state">${c}</span>
      </div>`}i.innerHTML=s}async function dy(){const n=$A(_t("bootfx"));let e=0;const t=window.setInterval(()=>{e=(e+1)%Bh.length,_t("bootTip").textContent=Bh[e]},3600),i=new jA(_t("app"));hy.textContent=i.qualityName,document.querySelectorAll(".q-pills button").forEach(c=>{c.classList.toggle("active",c.dataset.q===i.qualityName)}),await i.build((c,l)=>{n.setProgress(c),sy.style.strokeDashoffset=`${Math.round(uy*(1-c))}`,ry.textContent=`${Math.round(c*100)}%`,Gu.textContent=l}),n.stop(),window.clearInterval(t);const s=new ny(i.missions,i.collectibles,i.controller,()=>i.dronePosition,i.camera,i.economy,i.vehicles,i.builder,i.chopping);i.setHud(s),i.save.onSaved=()=>s.flashSave(),iy.classList.add("hidden"),Ws.classList.remove("hidden"),hi.disabled=!1,hi.textContent="ENTRAR AL BOSQUE";const r=i.renderer.domElement,o=()=>{const c=r.requestPointerLock();c&&typeof c.catch=="function"&&c.catch(()=>{hi.textContent="ESPERA UN INSTANTE…",window.setTimeout(()=>{hi.textContent=i.mode==="paused"?"REANUDAR":"ENTRAR AL BOSQUE"},1300)})},a=()=>{hi.disabled||(os(),i.startAudio(),i.audio.playEvent("ui"),i.mode==="menu"&&i.beginPlay(),o())};hi.addEventListener("click",a),window.addEventListener("keydown",c=>{c.code==="Enter"&&!Ws.classList.contains("hidden")&&a()}),document.addEventListener("pointerlockchange",()=>{const c=document.pointerLockElement===r;if(i.setPlaying(c),c)Ws.classList.add("hidden"),Lh.classList.remove("hidden"),s.show(),document.body.classList.add("playing"),hi.textContent="REANUDAR",window.setTimeout(()=>{ay.classList.add("faded"),cy.classList.add("faded")},12e3);else{Ws.classList.remove("hidden"),Lh.classList.add("hidden"),s.hide(),document.body.classList.remove("playing");const l=i.mode==="paused";Ws.classList.toggle("paused",l),oy.classList.toggle("hidden",!l),hi.textContent=l?"REANUDAR":"ENTRAR AL BOSQUE",Uh(i)}}),_t("btnControls").addEventListener("click",()=>{i.audio.playEvent("ui"),os(),xa("panelControls")}),_t("btnCredits").addEventListener("click",()=>{i.audio.playEvent("ui"),os(),xa("panelCredits")}),_t("btnMissions").addEventListener("click",()=>{i.audio.playEvent("ui"),os(),Uh(i),xa("panelMissions")}),document.querySelectorAll("[data-close]").forEach(c=>c.addEventListener("click",os)),document.querySelectorAll(".panel").forEach(c=>c.addEventListener("click",l=>{l.target===c&&os()})),_t("btnReset").addEventListener("click",()=>{if(i.audio.playEvent("ui"),!hr.exists()){s.toast("new","Sin partida guardada","Aún no hay nada que borrar");return}window.confirm("¿Borrar la partida guardada? Se perderán tu casa, dinero y misiones.")&&(hr.wipe(),location.reload())}),document.querySelectorAll(".q-pills button").forEach(c=>{c.addEventListener("click",()=>{const l=c.dataset.q;if(l===i.qualityName)return;localStorage.setItem("tf-quality",l);const h=new URL(location.href);h.searchParams.set("q",l),location.href=h.toString()})}),i.start(),window.__engine=i}dy().catch(n=>{Gu.textContent="Error al iniciar. Revisa la consola del navegador.",window.__bootError=n,console.error(n)});
