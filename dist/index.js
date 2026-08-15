"use strict";var q=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var l=q(function(G,g){
function R(a,r,t,f,n,v){var i,u,e,s,o,c;for(i=t.data,u=t.accessors[0],o=a,s=0;s<r;s++){for(e=v+s*n,c=0;c<o;c++){if(u(i,e)){o=c;break}e+=f}if(o===0)return 0}return o<a?o:-1}g.exports=R
});var y=q(function(H,m){
var b=require('@stdlib/array-base-arraylike2object/dist'),j=require('@stdlib/blas-ext-base-gany/dist').ndarray,k=require('@stdlib/ndarray-base-assert-is-row-major/dist'),p=l();function O(a,r,t,f,n,v){var i,u,e,s,o;if(a<=0||r<=0)return-1;if(k([f,n])){for(i=v,e=0;e<a;e++){if(j(r,t,n,i))return e;i+=f}return-1}if(o=b(t),o.accessorProtocol)return p(a,r,o,f,n,v);for(e=a,u=0;u<r;u++){for(i=v+u*n,s=0;s<e;s++){if(t[i]){e=s;break}i+=f}if(e===0)return 0}return e<a?e:-1}m.exports=O
});var d=q(function(I,x){
var T=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),E=require('@stdlib/blas-base-assert-is-layout/dist'),F=require('@stdlib/math-base-special-fast-max/dist'),w=require('@stdlib/error-tools-fmtprodmsg/dist'),V=y();function P(a,r,t,f,n){var v,i,u;if(!E(a))throw new TypeError(w('33xFx',a));if(T(a)?(u=t,v=n,i=1):(u=r,v=1,i=n),n<F(1,u))throw new RangeError(w('33xIR',u,n));return V(r,t,f,v,i,0)}x.exports=P
});var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=d(),B=y();z(h,"ndarray",B);module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
