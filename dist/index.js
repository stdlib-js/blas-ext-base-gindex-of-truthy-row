"use strict";var l=function(e,a){return function(){try{return a||e((a={exports:{}}).exports,a),a.exports}catch(t){throw (a=0, t)}};};var g=l(function(G,y){
function R(e,a,t,f,n,v){var i,u,r,s,o,c;for(i=t.data,u=t.accessors[0],o=e,s=0;s<a;s++){for(r=v+s*n,c=0;c<o;c++){if(u(i,r)){o=c;break}r+=f}if(o===0)return 0}return o<e?o:-1}y.exports=R
});var q=l(function(H,m){
var b=require('@stdlib/array-base-arraylike2object/dist'),j=require('@stdlib/blas-ext-base-gany/dist').ndarray,k=require('@stdlib/ndarray-base-assert-is-row-major/dist'),p=g();function O(e,a,t,f,n,v){var i,u,r,s,o;if(e<=0||a<=0)return-1;if(k([f,n])){for(i=v,r=0;r<e;r++){if(j(a,t,n,i))return r;i+=f}return-1}if(o=b(t),o.accessorProtocol)return p(e,a,o,f,n,v);for(r=e,u=0;u<a;u++){for(i=v+u*n,s=0;s<r;s++){if(t[i]){r=s;break}i+=f}if(r===0)return 0}return r<e?r:-1}m.exports=O
});var x=l(function(I,w){
var T=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),E=require('@stdlib/blas-base-layout-resolve-str/dist'),F=require('@stdlib/math-base-special-fast-max/dist'),d=require('@stdlib/error-tools-fmtprodmsg/dist'),V=q();function P(e,a,t,f,n){var v,i,u,r;if(r=E(e),r===null)throw new TypeError(d('33xFx',e));if(T(r)?(u=t,v=n,i=1):(u=a,v=1,i=n),n<F(1,u))throw new RangeError(d('33xIR',u,n));return V(a,t,f,v,i,0)}w.exports=P
});var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=x(),B=q();z(h,"ndarray",B);module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
