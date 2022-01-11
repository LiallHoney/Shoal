(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(e,t,n){var i=n("b622"),r=i("toStringTag"),s={};s[r]="z",e.exports="[object z]"===String(s)},"0366":function(e,t,n){var i=n("e330"),r=n("59ed"),s=i(i.bind);e.exports=function(e,t){return r(e),void 0===t?e:s?s(e,t):function(){return e.apply(t,arguments)}}},"06cf":function(e,t,n){var i=n("83ab"),r=n("c65b"),s=n("d1e7"),o=n("5c6c"),a=n("fc6a"),c=n("a04b"),u=n("1a2d"),l=n("0cfb"),h=Object.getOwnPropertyDescriptor;t.f=i?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return o(!r(s.f,e,t),e[t])}},"07fa":function(e,t,n){var i=n("50c4");e.exports=function(e){return i(e.length)}},"0829":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Du})),n.d(t,"b",(function(){return Sc})),n.d(t,"c",(function(){return dc})),n.d(t,"d",(function(){return tc})),n.d(t,"e",(function(){return ou})),n.d(t,"f",(function(){return Cc})),n.d(t,"g",(function(){return E})),n.d(t,"h",(function(){return Ac})),n.d(t,"i",(function(){return au})),n.d(t,"j",(function(){return cu})),n.d(t,"k",(function(){return j})),n.d(t,"l",(function(){return Ru})),n.d(t,"m",(function(){return qa})),n.d(t,"n",(function(){return se})),n.d(t,"o",(function(){return W})),n.d(t,"p",(function(){return Ya})),n.d(t,"q",(function(){return w})),n.d(t,"r",(function(){return K})),n.d(t,"s",(function(){return v})),n.d(t,"t",(function(){return za})),n.d(t,"u",(function(){return zu})),n.d(t,"v",(function(){return nl})),n.d(t,"w",(function(){return tl})),n.d(t,"x",(function(){return _c})),n.d(t,"y",(function(){return rc})),n.d(t,"z",(function(){return sc})),n.d(t,"A",(function(){return ec})),n.d(t,"B",(function(){return Wu})),n.d(t,"C",(function(){return Zu})),n.d(t,"D",(function(){return kc})),n.d(t,"E",(function(){return oc})),n.d(t,"F",(function(){return vc})),n.d(t,"G",(function(){return gc})),n.d(t,"H",(function(){return bc})),n.d(t,"I",(function(){return Cu})),n.d(t,"J",(function(){return Tu})),n.d(t,"K",(function(){return pc})),n.d(t,"L",(function(){return Qu})),n.d(t,"M",(function(){return Pu})),n.d(t,"N",(function(){return $u})),n.d(t,"O",(function(){return Bu})),n.d(t,"P",(function(){return Fu})),n.d(t,"Q",(function(){return Uu})),n.d(t,"R",(function(){return Vu})),n.d(t,"S",(function(){return il})),n.d(t,"T",(function(){return _u})),n.d(t,"U",(function(){return wu})),n.d(t,"V",(function(){return Ec})),n.d(t,"W",(function(){return Ic})),n.d(t,"X",(function(){return Ku})),n.d(t,"Y",(function(){return Gu})),n.d(t,"Z",(function(){return gu})),n.d(t,"ab",(function(){return fu})),n.d(t,"bb",(function(){return cc})),n.d(t,"cb",(function(){return ac})),n.d(t,"db",(function(){return Ju})),n.d(t,"eb",(function(){return el})),n.d(t,"fb",(function(){return qu})),n.d(t,"gb",(function(){return f})),n.d(t,"hb",(function(){return lu})),n.d(t,"ib",(function(){return Eu})),n.d(t,"jb",(function(){return ku})),n.d(t,"kb",(function(){return Hu})),n.d(t,"lb",(function(){return wc})),n.d(t,"mb",(function(){return mu}));var i=n("589b"),r=n("22e5"),s=n("e691"),o=n("1fd5"),a=n("8f6b");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="9.5.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=new s["b"]("@firebase/firestore");function d(){return h.logLevel}function f(e){h.setLogLevel(e)}function p(e,...t){if(h.logLevel<=s["a"].DEBUG){const n=t.map(g);h.debug(`Firestore (${l}): ${e}`,...n)}}function m(e,...t){if(h.logLevel<=s["a"].ERROR){const n=t.map(g);h.error(`Firestore (${l}): ${e}`,...n)}}function v(e,...t){if(h.logLevel<=s["a"].WARN){const n=t.map(g);h.warn(`Firestore (${l}): ${e}`,...n)}}function g(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e="Unexpected state"){const t=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+e;throw m(t),new Error(t)}function _(e,t){e||y()}function w(e,t){e||y()}function b(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e,t){this.user=t,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization="Bearer "+e}}class C{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(u.UNAUTHENTICATED))}shutdown(){}}class S{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class O{constructor(e){this.t=e,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let r=new I;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new I,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const t=r;e.enqueueRetryable(async()=>{await t.promise,await i(this.currentUser)})},o=e=>{p("FirebaseCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(p("FirebaseCredentialsProvider","Auth not yet detected"),r.resolve(),r=new I)}},0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(p("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(_("string"==typeof t.accessToken),new T(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return _(null===e||"string"==typeof e),new u(e)}}class A{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=u.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},t=this.h.auth.getAuthHeaderValueForFirstParty([]);return t&&(e.Authorization=t),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class x{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new A(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.g(e),this.p=e=>t.writeSequenceNumber(e))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */D.T=-1;class N{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=L(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<t&&(n+=e.charAt(i[r]%e.length))}return n}}function R(e,t){return e<t?-1:e>t?1:0}function M(e,t,n){return e.length===t.length&&e.every((e,i)=>n(e,t[i]))}function P(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new E(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new E(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new E(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new E(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return j.fromMillis(Date.now())}static fromDate(e){return j.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new j(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?R(this.nanoseconds,e.nanoseconds):R(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.timestamp=e}static fromTimestamp(e){return new $(e)}static min(){return new $(new j(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function F(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function U(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,t,n){void 0===t?t=0:t>e.length&&y(),void 0===n?n=e.length-t:n>e.length-t&&y(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===V.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof V?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=e.get(i),r=t.get(i);if(n<r)return-1;if(n>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class q extends V{construct(e,t,n){return new q(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new E(k.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new q(t)}static emptyPath(){return new q([])}}const H=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class W extends V{construct(e,t,n){return new W(e,t,n)}static isValidIdentifier(e){return H.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),W.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new W(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const r=()=>{if(0===n.length)throw new E(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;i<e.length;){const t=e[i];if("\\"===t){if(i+1===e.length)throw new E(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new E(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?(s=!s,i++):"."!==t||s?(n+=t,i++):(r(),i++)}if(r(),s)throw new E(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new W(t)}static emptyPath(){return new W([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.fields=e,e.sort(W.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return M(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new G(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new G(t)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return R(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}G.EMPTY_BYTE_STRING=new G("");const Q=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Y(e){if(_(!!e),"string"==typeof e){let t=0;const n=Q.exec(e);if(_(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:X(e.seconds),nanos:X(e.nanos)}}function X(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function J(e){return"string"==typeof e?G.fromBase64String(e):G.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ee(e){const t=e.mapValue.fields.__previous_value__;return Z(t)?ee(t):t}function te(e){const t=Y(e.mapValue.fields.__local_write_time__.timestampValue);return new j(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(e){return null==e}function ie(e){return 0===e&&1/e==-1/0}function re(e){return"number"==typeof e&&Number.isInteger(e)&&!ie(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(q.fromString(e))}static fromName(e){return new se(q.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===q.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return q.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new q(e.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Z(e)?4:10:y()}function ae(e,t){const n=oe(e);if(n!==oe(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return te(e).isEqual(te(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Y(e.timestampValue),i=Y(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return J(e.bytesValue).isEqual(J(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return X(e.geoPointValue.latitude)===X(t.geoPointValue.latitude)&&X(e.geoPointValue.longitude)===X(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return X(e.integerValue)===X(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=X(e.doubleValue),i=X(t.doubleValue);return n===i?ie(n)===ie(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return M(e.arrayValue.values||[],t.arrayValue.values||[],ae);case 10:return function(e,t){const n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(B(n)!==B(i))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===i[r]||!ae(n[r],i[r])))return!1;return!0}(e,t);default:return y()}}function ce(e,t){return void 0!==(e.values||[]).find(e=>ae(e,t))}function ue(e,t){const n=oe(e),i=oe(t);if(n!==i)return R(n,i);switch(n){case 0:return 0;case 1:return R(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=X(e.integerValue||e.doubleValue),i=X(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return le(e.timestampValue,t.timestampValue);case 4:return le(te(e),te(t));case 5:return R(e.stringValue,t.stringValue);case 6:return function(e,t){const n=J(e),i=J(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),i=t.split("/");for(let r=0;r<n.length&&r<i.length;r++){const e=R(n[r],i[r]);if(0!==e)return e}return R(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=R(X(e.latitude),X(t.latitude));return 0!==n?n:R(X(e.longitude),X(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],i=t.values||[];for(let r=0;r<n.length&&r<i.length;++r){const e=ue(n[r],i[r]);if(e)return e}return R(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},i=Object.keys(n),r=t.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let o=0;o<i.length&&o<s.length;++o){const e=R(i[o],s[o]);if(0!==e)return e;const t=ue(n[i[o]],r[s[o]]);if(0!==t)return t}return R(i.length,s.length)}(e.mapValue,t.mapValue);default:throw y()}}function le(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return R(e,t);const n=Y(e),i=Y(t),r=R(n.seconds,i.seconds);return 0!==r?r:R(n.nanos,i.nanos)}function he(e){return de(e)}function de(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Y(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?J(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,se.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const i of e.values||[])n?n=!1:t+=",",t+=de(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",i=!0;for(const r of t)i?i=!1:n+=",",n+=`${r}:${de(e.fields[r])}`;return n+"}"}(e.mapValue):y();var t,n}function fe(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function pe(e){return!!e&&"integerValue"in e}function me(e){return!!e&&"arrayValue"in e}function ve(e){return!!e&&"nullValue"in e}function ge(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ye(e){return!!e&&"mapValue"in e}function _e(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return F(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=_e(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=_e(e.arrayValue.values[n]);return t}return Object.assign({},e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.value=e}static empty(){return new we({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ye(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=_e(t)}setAll(e){let t=W.emptyPath(),n={},i=[];e.forEach((e,r)=>{if(!t.isImmediateParentOf(r)){const e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=r.popLast()}e?n[r.lastSegment()]=_e(e):i.push(r.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,n,i)}delete(e){const t=this.field(e.popLast());ye(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ae(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];ye(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){F(t,(t,n)=>e[t]=n);for(const i of n)delete e[i]}clone(){return new we(_e(this.value))}}function be(e){const t=[];return F(e.fields,(e,n)=>{const i=new W([e]);if(ye(n)){const e=be(n.mapValue).fields;if(0===e.length)t.push(i);else for(const n of e)t.push(i.child(n))}else t.push(i)}),new z(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ke{constructor(e,t,n,i,r){this.key=e,this.documentType=t,this.version=n,this.data=i,this.documentState=r}static newInvalidDocument(e){return new ke(e,0,$.min(),we.empty(),0)}static newFoundDocument(e,t,n){return new ke(e,1,t,n,0)}static newNoDocument(e,t){return new ke(e,2,t,we.empty(),0)}static newUnknownDocument(e,t){return new ke(e,3,t,we.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=we.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=we.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new ke(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,t=null,n=[],i=[],r=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.A=null}}function Ie(e,t=null,n=[],i=[],r=null,s=null,o=null){return new Ee(e,t,n,i,r,s,o)}function Te(e){const t=b(e);if(null===t.A){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>xe(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>function(e){return e.field.canonicalString()+e.dir}(e)).join(","),ne(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=Fe(t.startAt)),t.endAt&&(e+="|ub:",e+=Fe(t.endAt)),t.A=e}return t.A}function Ce(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>{return`${(t=e).field.canonicalString()} ${t.op} ${he(t.value)}`;var t}).join(", ")}]`),ne(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e)).join(", ")}]`),e.startAt&&(t+=", startAt: "+Fe(e.startAt)),e.endAt&&(t+=", endAt: "+Fe(e.endAt)),`Target(${t})`}function Se(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let r=0;r<e.orderBy.length;r++)if(!Ve(e.orderBy[r],t.orderBy[r]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(n=e.filters[r],i=t.filters[r],n.op!==i.op||!n.field.isEqual(i.field)||!ae(n.value,i.value))return!1;var n,i;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!He(e.startAt,t.startAt)&&He(e.endAt,t.endAt)}function Oe(e){return se.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class Ae extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.R(e,t,n):new De(e,t,n):"array-contains"===t?new Me(e,n):"in"===t?new Pe(e,n):"not-in"===t?new je(e,n):"array-contains-any"===t?new $e(e,n):new Ae(e,t,n)}static R(e,t,n){return"in"===t?new Le(e,n):new Ne(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.P(ue(t,this.value)):null!==t&&oe(this.value)===oe(t)&&this.P(ue(t,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return y()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function xe(e){return e.field.canonicalString()+e.op.toString()+he(e.value)}class De extends Ae{constructor(e,t,n){super(e,t,n),this.key=se.fromName(n.referenceValue)}matches(e){const t=se.comparator(e.key,this.key);return this.P(t)}}class Le extends Ae{constructor(e,t){super(e,"in",t),this.keys=Re("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Ne extends Ae{constructor(e,t){super(e,"not-in",t),this.keys=Re("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Re(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>se.fromName(e.referenceValue))}class Me extends Ae{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return me(t)&&ce(t.arrayValue,this.value)}}class Pe extends Ae{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&ce(this.value.arrayValue,t)}}class je extends Ae{constructor(e,t){super(e,"not-in",t)}matches(e){if(ce(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!ce(this.value.arrayValue,t)}}class $e extends Ae{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!me(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>ce(this.value.arrayValue,e))}}class Be{constructor(e,t){this.position=e,this.before=t}}function Fe(e){return`${e.before?"b":"a"}:${e.position.map(e=>he(e)).join(",")}`}class Ue{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ve(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function qe(e,t,n){let i=0;for(let r=0;r<e.position.length;r++){const s=t[r],o=e.position[r];if(i=s.field.isKeyField()?se.comparator(se.fromName(o.referenceValue),n.key):ue(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return e.before?i<=0:i<0}function He(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ae(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,t=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function ze(e,t,n,i,r,s,o,a){return new We(e,t,n,i,r,s,o,a)}function Ke(e){return new We(e)}function Ge(e){return!ne(e.limit)&&"F"===e.limitType}function Qe(e){return!ne(e.limit)&&"L"===e.limitType}function Ye(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Xe(e){for(const t of e.filters)if(t.v())return t.field;return null}function Je(e){return null!==e.collectionGroup}function Ze(e){const t=b(e);if(null===t.V){t.V=[];const e=Xe(t),n=Ye(t);if(null!==e&&null===n)e.isKeyField()||t.V.push(new Ue(e)),t.V.push(new Ue(W.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.V.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.V.push(new Ue(W.keyField(),e))}}}return t.V}function et(e){const t=b(e);if(!t.S)if("F"===t.limitType)t.S=Ie(t.path,t.collectionGroup,Ze(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const r of Ze(t)){const t="desc"===r.dir?"asc":"desc";e.push(new Ue(r.field,t))}const n=t.endAt?new Be(t.endAt.position,!t.endAt.before):null,i=t.startAt?new Be(t.startAt.position,!t.startAt.before):null;t.S=Ie(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}return t.S}function tt(e,t,n){return new We(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function nt(e,t){return Se(et(e),et(t))&&e.limitType===t.limitType}function it(e){return`${Te(et(e))}|lt:${e.limitType}`}function rt(e){return`Query(target=${Ce(et(e))}; limitType=${e.limitType})`}function st(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):se.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!qe(e.startAt,Ze(e),t))&&(!e.endAt||!qe(e.endAt,Ze(e),t))}(e,t)}function ot(e){return(t,n)=>{let i=!1;for(const r of Ze(e)){const e=at(r,t,n);if(0!==e)return e;i=i||r.field.isKeyField()}return 0}}function at(e,t,n){const i=e.field.isKeyField()?se.comparator(t.key,n.key):function(e,t,n){const i=t.data.field(e),r=n.data.field(e);return null!==i&&null!==r?ue(i,r):y()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(e,t){if(e.D){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ie(t)?"-0":t}}function ut(e){return{integerValue:""+e}}function lt(e,t){return re(t)?ut(t):ct(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(){this._=void 0}}function dt(e,t,n){return e instanceof mt?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof vt?gt(e,t):e instanceof yt?_t(e,t):function(e,t){const n=pt(e,t),i=bt(n)+bt(e.C);return pe(n)&&pe(e.C)?ut(i):ct(e.N,i)}(e,t)}function ft(e,t,n){return e instanceof vt?gt(e,t):e instanceof yt?_t(e,t):n}function pt(e,t){return e instanceof wt?pe(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class mt extends ht{}class vt extends ht{constructor(e){super(),this.elements=e}}function gt(e,t){const n=kt(t);for(const i of e.elements)n.some(e=>ae(e,i))||n.push(i);return{arrayValue:{values:n}}}class yt extends ht{constructor(e){super(),this.elements=e}}function _t(e,t){let n=kt(t);for(const i of e.elements)n=n.filter(e=>!ae(e,i));return{arrayValue:{values:n}}}class wt extends ht{constructor(e,t){super(),this.N=e,this.C=t}}function bt(e){return X(e.integerValue||e.doubleValue)}function kt(e){return me(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,t){this.field=e,this.transform=t}}function It(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof vt&&t instanceof vt||e instanceof yt&&t instanceof yt?M(e.elements,t.elements,ae):e instanceof wt&&t instanceof wt?ae(e.C,t.C):e instanceof mt&&t instanceof mt}(e.transform,t.transform)}class Tt{constructor(e,t){this.version=e,this.transformResults=t}}class Ct{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ct}static exists(e){return new Ct(void 0,e)}static updateTime(e){return new Ct(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function St(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Ot{}function At(e,t,n){e instanceof Rt?function(e,t,n){const i=e.value.clone(),r=jt(e.fieldTransforms,t,n.transformResults);i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):e instanceof Mt?function(e,t,n){if(!St(e.precondition,t))return void t.convertToUnknownDocument(n.version);const i=jt(e.fieldTransforms,t,n.transformResults),r=t.data;r.setAll(Pt(e)),r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function xt(e,t,n){e instanceof Rt?function(e,t,n){if(!St(e.precondition,t))return;const i=e.value.clone(),r=$t(e.fieldTransforms,n,t);i.setAll(r),t.convertToFoundDocument(Nt(t),i).setHasLocalMutations()}(e,t,n):e instanceof Mt?function(e,t,n){if(!St(e.precondition,t))return;const i=$t(e.fieldTransforms,n,t),r=t.data;r.setAll(Pt(e)),r.setAll(i),t.convertToFoundDocument(Nt(t),r).setHasLocalMutations()}(e,t,n):function(e,t){St(e.precondition,t)&&t.convertToNoDocument($.min())}(e,t)}function Dt(e,t){let n=null;for(const i of e.fieldTransforms){const e=t.data.field(i.field),r=pt(i.transform,e||null);null!=r&&(null==n&&(n=we.empty()),n.set(i.field,r))}return n||null}function Lt(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&M(e,t,(e,t)=>It(e,t))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function Nt(e){return e.isFoundDocument()?e.version:$.min()}class Rt extends Ot{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}}class Mt extends Ot{constructor(e,t,n,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}}function Pt(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}}),t}function jt(e,t,n){const i=new Map;_(e.length===n.length);for(let r=0;r<n.length;r++){const s=e[r],o=s.transform,a=t.data.field(s.field);i.set(s.field,ft(o,a,n[r]))}return i}function $t(e,t,n){const i=new Map;for(const r of e){const e=r.transform,s=n.data.field(r.field);i.set(r.field,dt(e,s,t))}return i}class Bt extends Ot{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Ft extends Ot{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vt,qt;function Ht(e){switch(e){default:return y();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function Wt(e){if(void 0===e)return m("GRPC error has no .code"),k.UNKNOWN;switch(e){case Vt.OK:return k.OK;case Vt.CANCELLED:return k.CANCELLED;case Vt.UNKNOWN:return k.UNKNOWN;case Vt.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Vt.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Vt.INTERNAL:return k.INTERNAL;case Vt.UNAVAILABLE:return k.UNAVAILABLE;case Vt.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Vt.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Vt.NOT_FOUND:return k.NOT_FOUND;case Vt.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Vt.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Vt.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Vt.ABORTED:return k.ABORTED;case Vt.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Vt.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Vt.DATA_LOSS:return k.DATA_LOSS;default:return y()}}(qt=Vt||(Vt={}))[qt.OK=0]="OK",qt[qt.CANCELLED=1]="CANCELLED",qt[qt.UNKNOWN=2]="UNKNOWN",qt[qt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",qt[qt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",qt[qt.NOT_FOUND=5]="NOT_FOUND",qt[qt.ALREADY_EXISTS=6]="ALREADY_EXISTS",qt[qt.PERMISSION_DENIED=7]="PERMISSION_DENIED",qt[qt.UNAUTHENTICATED=16]="UNAUTHENTICATED",qt[qt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",qt[qt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",qt[qt.ABORTED=10]="ABORTED",qt[qt.OUT_OF_RANGE=11]="OUT_OF_RANGE",qt[qt.UNIMPLEMENTED=12]="UNIMPLEMENTED",qt[qt.INTERNAL=13]="INTERNAL",qt[qt.UNAVAILABLE=14]="UNAVAILABLE",qt[qt.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zt{constructor(e,t){this.comparator=e,this.root=t||Gt.EMPTY}insert(e,t){return new zt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Gt.BLACK,null,null))}remove(e){return new zt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Gt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Kt(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Kt(this.root,e,this.comparator,!1)}getReverseIterator(){return new Kt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Kt(this.root,e,this.comparator,!0)}}class Kt{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Gt{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:Gt.RED,this.left=null!=i?i:Gt.EMPTY,this.right=null!=r?r:Gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,r){return new Gt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Gt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return Gt.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw y();if(this.right.isRed())throw y();const e=this.left.check();if(e!==this.right.check())throw y();return e+(this.isRed()?0:1)}}Gt.EMPTY=null,Gt.RED=!0,Gt.BLACK=!1,Gt.EMPTY=new class{constructor(){this.size=0}get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(e,t,n,i,r){return this}insert(e,t,n){return new Gt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qt{constructor(e){this.comparator=e,this.data=new zt(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Yt(this.data.getIterator())}getIteratorFrom(e){return new Yt(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof Qt))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Qt(this.comparator);return t.data=e,t}}class Yt{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=new zt(se.comparator);function Jt(){return Xt}const Zt=new zt(se.comparator);function en(){return Zt}const tn=new zt(se.comparator);function nn(){return tn}const rn=new Qt(se.comparator);function sn(...e){let t=rn;for(const n of e)t=t.add(n);return t}const on=new Qt(R);function an(){return on}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,t,n,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,un.createSynthesizedTargetChangeForCurrentChange(e,t)),new cn($.min(),n,an(),Jt(),sn())}}class un{constructor(e,t,n,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t){return new un(G.EMPTY_BYTE_STRING,t,sn(),sn(),sn())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,t,n,i){this.k=e,this.removedTargetIds=t,this.key=n,this.$=i}}class hn{constructor(e,t){this.targetId=e,this.O=t}}class dn{constructor(e,t,n=G.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class fn{constructor(){this.F=0,this.M=vn(),this.L=G.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=sn(),t=sn(),n=sn();return this.M.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:y()}}),new un(this.L,this.B,e,t,n)}G(){this.U=!1,this.M=vn()}H(e,t){this.U=!0,this.M=this.M.insert(e,t)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class pn{constructor(e){this.tt=e,this.et=new Map,this.nt=Jt(),this.st=mn(),this.it=new Qt(R)}rt(e){for(const t of e.k)e.$&&e.$.isFoundDocument()?this.ot(t,e.$):this.ct(t,e.key,e.$);for(const t of e.removedTargetIds)this.ct(t,e.key,e.$)}at(e){this.forEachTarget(e,t=>{const n=this.ut(t);switch(e.state){case 0:this.ht(t)&&n.j(e.resumeToken);break;case 1:n.X(),n.q||n.G(),n.j(e.resumeToken);break;case 2:n.X(),n.q||this.removeTarget(t);break;case 3:this.ht(t)&&(n.Z(),n.j(e.resumeToken));break;case 4:this.ht(t)&&(this.lt(t),n.j(e.resumeToken));break;default:y()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.et.forEach((e,n)=>{this.ht(n)&&t(n)})}ft(e){const t=e.targetId,n=e.O.count,i=this.dt(t);if(i){const e=i.target;if(Oe(e))if(0===n){const n=new se(e.path);this.ct(t,n,ke.newNoDocument(n,$.min()))}else _(1===n);else this.wt(t)!==n&&(this.lt(t),this.it=this.it.add(t))}}_t(e){const t=new Map;this.et.forEach((n,i)=>{const r=this.dt(i);if(r){if(n.current&&Oe(r.target)){const t=new se(r.target.path);null!==this.nt.get(t)||this.gt(i,t)||this.ct(i,t,ke.newNoDocument(t,e))}n.K&&(t.set(i,n.W()),n.G())}});let n=sn();this.st.forEach((e,t)=>{let i=!0;t.forEachWhile(e=>{const t=this.dt(e);return!t||2===t.purpose||(i=!1,!1)}),i&&(n=n.add(e))});const i=new cn(e,t,this.it,this.nt,n);return this.nt=Jt(),this.st=mn(),this.it=new Qt(R),i}ot(e,t){if(!this.ht(e))return;const n=this.gt(e,t.key)?2:0;this.ut(e).H(t.key,n),this.nt=this.nt.insert(t.key,t),this.st=this.st.insert(t.key,this.yt(t.key).add(e))}ct(e,t,n){if(!this.ht(e))return;const i=this.ut(e);this.gt(e,t)?i.H(t,1):i.J(t),this.st=this.st.insert(t,this.yt(t).delete(e)),n&&(this.nt=this.nt.insert(t,n))}removeTarget(e){this.et.delete(e)}wt(e){const t=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let t=this.et.get(e);return t||(t=new fn,this.et.set(e,t)),t}yt(e){let t=this.st.get(e);return t||(t=new Qt(R),this.st=this.st.insert(e,t)),t}ht(e){const t=null!==this.dt(e);return t||p("WatchChangeAggregator","Detected inactive target",e),t}dt(e){const t=this.et.get(e);return t&&t.q?null:this.tt.Tt(e)}lt(e){this.et.set(e,new fn),this.tt.getRemoteKeysForTarget(e).forEach(t=>{this.ct(e,t,null)})}gt(e,t){return this.tt.getRemoteKeysForTarget(e).has(t)}}function mn(){return new zt(se.comparator)}function vn(){return new zt(se.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),yn=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class _n{constructor(e,t){this.databaseId=e,this.D=t}}function wn(e,t){return e.D?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function bn(e,t){return e.D?t.toBase64():t.toUint8Array()}function kn(e,t){return wn(e,t.toTimestamp())}function En(e){return _(!!e),$.fromTimestamp(function(e){const t=Y(e);return new j(t.seconds,t.nanos)}(e))}function In(e,t){return function(e){return new q(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Tn(e){const t=q.fromString(e);return _(Zn(t)),t}function Cn(e,t){return In(e.databaseId,t.path)}function Sn(e,t){const n=Tn(t);if(n.get(1)!==e.databaseId.projectId)throw new E(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new E(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new se(Dn(n))}function On(e,t){return In(e.databaseId,t)}function An(e){const t=Tn(e);return 4===t.length?q.emptyPath():Dn(t)}function xn(e){return new q(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Dn(e){return _(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Ln(e,t,n){return{name:Cn(e,t),fields:n.value.mapValue.fields}}function Nn(e,t,n){const i=Sn(e,t.name),r=En(t.updateTime),s=new we({mapValue:{fields:t.fields}}),o=ke.newFoundDocument(i,r,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function Rn(e,t){return"found"in t?function(e,t){_(!!t.found),t.found.name,t.found.updateTime;const n=Sn(e,t.found.name),i=En(t.found.updateTime),r=new we({mapValue:{fields:t.found.fields}});return ke.newFoundDocument(n,i,r)}(e,t):"missing"in t?function(e,t){_(!!t.missing),_(!!t.readTime);const n=Sn(e,t.missing),i=En(t.readTime);return ke.newNoDocument(n,i)}(e,t):y()}function Mn(e,t){let n;if("targetChange"in t){t.targetChange;const i=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:y()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],s=function(e,t){return e.D?(_(void 0===t||"string"==typeof t),G.fromBase64String(t||"")):(_(void 0===t||t instanceof Uint8Array),G.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?k.UNKNOWN:Wt(e.code);return new E(t,e.message||"")}(o);n=new dn(i,r,s,a||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const r=Sn(e,i.document.name),s=En(i.document.updateTime),o=new we({mapValue:{fields:i.document.fields}}),a=ke.newFoundDocument(r,s,o),c=i.targetIds||[],u=i.removedTargetIds||[];n=new ln(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const r=Sn(e,i.document),s=i.readTime?En(i.readTime):$.min(),o=ke.newNoDocument(r,s),a=i.removedTargetIds||[];n=new ln([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const r=Sn(e,i.document),s=i.removedTargetIds||[];n=new ln([],s,r,null)}else{if(!("filter"in t))return y();{t.filter;const e=t.filter;e.targetId;const i=e.count||0,r=new Ut(i),s=e.targetId;n=new hn(s,r)}}return n}function Pn(e,t){let n;if(t instanceof Rt)n={update:Ln(e,t.key,t.value)};else if(t instanceof Bt)n={delete:Cn(e,t.key)};else if(t instanceof Mt)n={update:Ln(e,t.key,t.data),updateMask:Jn(t.fieldMask)};else{if(!(t instanceof Ft))return y();n={verify:Cn(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof mt)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof vt)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof yt)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof wt)return{fieldPath:t.field.canonicalString(),increment:n.C};throw y()}(0,e))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:kn(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:y()}(e,t.precondition)),n}function jn(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?Ct.updateTime(En(e.updateTime)):void 0!==e.exists?Ct.exists(e.exists):Ct.none()}(t.currentDocument):Ct.none(),i=t.updateTransforms?t.updateTransforms.map(t=>function(e,t){let n=null;if("setToServerValue"in t)_("REQUEST_TIME"===t.setToServerValue),n=new mt;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new vt(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new yt(e)}else"increment"in t?n=new wt(e,t.increment):y();const i=W.fromServerFormat(t.fieldPath);return new Et(i,n)}(e,t)):[];if(t.update){t.update.name;const r=Sn(e,t.update.name),s=new we({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new z(t.map(e=>W.fromServerFormat(e)))}(t.updateMask);return new Mt(r,s,e,n,i)}return new Rt(r,s,n,i)}if(t.delete){const i=Sn(e,t.delete);return new Bt(i,n)}if(t.verify){const i=Sn(e,t.verify);return new Ft(i,n)}return y()}function $n(e,t){return e&&e.length>0?(_(void 0!==t),e.map(e=>function(e,t){let n=e.updateTime?En(e.updateTime):En(t);return n.isEqual($.min())&&(n=En(t)),new Tt(n,e.transformResults||[])}(e,t))):[]}function Bn(e,t){return{documents:[On(e,t.path)]}}function Fn(e,t){const n={structuredQuery:{}},i=t.path;null!==t.collectionGroup?(n.parent=On(e,i),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=On(e,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(e){if(0===e.length)return;const t=e.map(e=>function(e){if("=="===e.op){if(ge(e.value))return{unaryFilter:{field:Gn(e.field),op:"IS_NAN"}};if(ve(e.value))return{unaryFilter:{field:Gn(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ge(e.value))return{unaryFilter:{field:Gn(e.field),op:"IS_NOT_NAN"}};if(ve(e.value))return{unaryFilter:{field:Gn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gn(e.field),op:Kn(e.op),value:e.value}}}(e));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);r&&(n.structuredQuery.where=r);const s=function(e){if(0!==e.length)return e.map(e=>function(e){return{field:Gn(e.field),direction:zn(e.dir)}}(e))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.D||ne(t)?t:{value:t}}(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=Hn(t.startAt)),t.endAt&&(n.structuredQuery.endAt=Hn(t.endAt)),n}function Un(e){let t=An(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){_(1===i);const e=n.from[0];e.allDescendants?r=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=qn(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(e=>function(e){return new Ue(Qn(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,ne(t)?null:t}(n.limit));let c=null;n.startAt&&(c=Wn(n.startAt));let u=null;return n.endAt&&(u=Wn(n.endAt)),ze(t,r,o,s,a,"F",c,u)}function Vn(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return y()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function qn(e){return e?void 0!==e.unaryFilter?[Xn(e)]:void 0!==e.fieldFilter?[Yn(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map(e=>qn(e)).reduce((e,t)=>e.concat(t)):y():[]}function Hn(e){return{before:e.before,values:e.position}}function Wn(e){const t=!!e.before,n=e.values||[];return new Be(n,t)}function zn(e){return gn[e]}function Kn(e){return yn[e]}function Gn(e){return{fieldPath:e.canonicalString()}}function Qn(e){return W.fromServerFormat(e.fieldPath)}function Yn(e){return Ae.create(Qn(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return y()}}(e.fieldFilter.op),e.fieldFilter.value)}function Xn(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Qn(e.unaryFilter.field);return Ae.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Qn(e.unaryFilter.field);return Ae.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Qn(e.unaryFilter.field);return Ae.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Qn(e.unaryFilter.field);return Ae.create(r,"!=",{nullValue:"NULL_VALUE"});default:return y()}}function Jn(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Zn(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=ni(t)),t=ti(e.get(n),t);return ni(t)}function ti(e,t){let n=t;const i=e.length;for(let r=0;r<i;r++){const t=e.charAt(r);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function ni(e){return e+""}function ii(e){const t=e.length;if(_(t>=2),2===t)return _(""===e.charAt(0)&&""===e.charAt(1)),q.emptyPath();const n=t-2,i=[];let r="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&y(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===r.length?o=n:(r+=n,o=r,r=""),i.push(o);break;case"":r+=e.substring(s,t),r+="\0";break;case"":r+=e.substring(s,t+1);break;default:y()}s=t+2}return new q(i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,t){this.seconds=e,this.nanoseconds=t}}class si{constructor(e,t,n){this.ownerId=e,this.allowTabSynchronization=t,this.leaseTimestampMs=n}}si.store="owner",si.key="owner";class oi{constructor(e,t,n){this.userId=e,this.lastAcknowledgedBatchId=t,this.lastStreamToken=n}}oi.store="mutationQueues",oi.keyPath="userId";class ai{constructor(e,t,n,i,r){this.userId=e,this.batchId=t,this.localWriteTimeMs=n,this.baseMutations=i,this.mutations=r}}ai.store="mutations",ai.keyPath="batchId",ai.userMutationsIndex="userMutationsIndex",ai.userMutationsKeyPath=["userId","batchId"];class ci{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,t){return[e,ei(t)]}static key(e,t,n){return[e,ei(t),n]}}ci.store="documentMutations",ci.PLACEHOLDER=new ci;class ui{constructor(e,t){this.path=e,this.readTime=t}}class li{constructor(e,t){this.path=e,this.version=t}}class hi{constructor(e,t,n,i,r,s){this.unknownDocument=e,this.noDocument=t,this.document=n,this.hasCommittedMutations=i,this.readTime=r,this.parentPath=s}}hi.store="remoteDocuments",hi.readTimeIndex="readTimeIndex",hi.readTimeIndexPath="readTime",hi.collectionReadTimeIndex="collectionReadTimeIndex",hi.collectionReadTimeIndexPath=["parentPath","readTime"];class di{constructor(e){this.byteSize=e}}di.store="remoteDocumentGlobal",di.key="remoteDocumentGlobalKey";class fi{constructor(e,t,n,i,r,s,o){this.targetId=e,this.canonicalId=t,this.readTime=n,this.resumeToken=i,this.lastListenSequenceNumber=r,this.lastLimboFreeSnapshotVersion=s,this.query=o}}fi.store="targets",fi.keyPath="targetId",fi.queryTargetsIndexName="queryTargetsIndex",fi.queryTargetsKeyPath=["canonicalId","targetId"];class pi{constructor(e,t,n){this.targetId=e,this.path=t,this.sequenceNumber=n}}pi.store="targetDocuments",pi.keyPath=["targetId","path"],pi.documentTargetsIndex="documentTargetsIndex",pi.documentTargetsKeyPath=["path","targetId"];class mi{constructor(e,t,n,i){this.highestTargetId=e,this.highestListenSequenceNumber=t,this.lastRemoteSnapshotVersion=n,this.targetCount=i}}mi.key="targetGlobalKey",mi.store="targetGlobal";class vi{constructor(e,t){this.collectionId=e,this.parent=t}}vi.store="collectionParents",vi.keyPath=["collectionId","parent"];class gi{constructor(e,t,n,i){this.clientId=e,this.updateTimeMs=t,this.networkEnabled=n,this.inForeground=i}}gi.store="clientMetadata",gi.keyPath="clientId";class yi{constructor(e,t,n){this.bundleId=e,this.createTime=t,this.version=n}}yi.store="bundles",yi.keyPath="bundleId";class _i{constructor(e,t,n){this.name=e,this.readTime=t,this.bundledQuery=n}}_i.store="namedQueries",_i.keyPath="name";const wi=[oi.store,ai.store,ci.store,hi.store,fi.store,si.store,mi.store,pi.store,gi.store,di.store,vi.store,yi.store,_i.store],bi="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ki{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Ei((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Ei?t:Ei.resolve(t)}catch(e){return Ei.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Ei.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Ei.reject(t)}static resolve(e){return new Ei((t,n)=>{t(e)})}static reject(e){return new Ei((t,n)=>{n(e)})}static waitFor(e){return new Ei((t,n)=>{let i=0,r=0,s=!1;e.forEach(e=>{++i,e.next(()=>{++r,s&&r===i&&t()},e=>n(e))}),s=!0,r===i&&t()})}static or(e){let t=Ei.resolve(!1);for(const n of e)t=t.next(e=>e?Ei.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,i)=>{n.push(t.call(this,e,i))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.Et=new I,this.transaction.oncomplete=()=>{this.Et.resolve()},this.transaction.onabort=()=>{t.error?this.Et.reject(new Si(e,t.error)):this.Et.resolve()},this.transaction.onerror=t=>{const n=Li(t.target.error);this.Et.reject(new Si(e,n))}}static open(e,t,n,i){try{return new Ii(t,e.transaction(i,n))}catch(e){throw new Si(t,e)}}get It(){return this.Et.promise}abort(e){e&&this.Et.reject(e),this.aborted||(p("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(e){const t=this.transaction.objectStore(e);return new Ai(t)}}class Ti{constructor(e,t,n){this.name=e,this.version=t,this.At=n,12.2===Ti.Rt(Object(o["l"])())&&m("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return p("SimpleDb","Removing database:",e),xi(window.indexedDB.deleteDatabase(e)).toPromise()}static bt(){if(!Object(o["r"])())return!1;if(Ti.Pt())return!0;const e=Object(o["l"])(),t=Ti.Rt(e),n=0<t&&t<10,i=Ti.vt(e),r=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||r)}static Pt(){var t;return"undefined"!=typeof e&&"YES"===(null===(t=Object({NODE_ENV:"production",BASE_URL:"/"}))||void 0===t?void 0:t.Vt)}static St(e,t){return e.store(t)}static Rt(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static vt(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async Dt(e){return this.db||(p("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=e=>{const n=e.target.result;t(n)},i.onblocked=()=>{n(new Si(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=t=>{const i=t.target.error;"VersionError"===i.name?n(new E(k.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===i.name?n(new E(k.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+i)):n(new Si(e,i))},i.onupgradeneeded=e=>{p("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.At.Ct(t,i.transaction,e.oldVersion,this.version).next(()=>{p("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.Nt&&(this.db.onversionchange=e=>this.Nt(e)),this.db}xt(e){this.Nt=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,i){const r="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.Dt(e);const t=Ii.open(this.db,e,r?"readonly":"readwrite",n),s=i(t).catch(e=>(t.abort(e),Ei.reject(e))).toPromise();return s.catch(()=>{}),await t.It,s}catch(e){const t="FirebaseError"!==e.name&&s<3;if(p("SimpleDb","Transaction failed with error:",e.message,"Retrying:",t),this.close(),!t)return Promise.reject(e)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Ci{constructor(e){this.kt=e,this.$t=!1,this.Ot=null}get isDone(){return this.$t}get Ft(){return this.Ot}set cursor(e){this.kt=e}done(){this.$t=!0}Mt(e){this.Ot=e}delete(){return xi(this.kt.delete())}}class Si extends E{constructor(e,t){super(k.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Oi(e){return"IndexedDbTransactionError"===e.name}class Ai{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(p("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(p("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),xi(n)}add(e){return p("SimpleDb","ADD",this.store.name,e,e),xi(this.store.add(e))}get(e){return xi(this.store.get(e)).next(t=>(void 0===t&&(t=null),p("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return p("SimpleDb","DELETE",this.store.name,e),xi(this.store.delete(e))}count(){return p("SimpleDb","COUNT",this.store.name),xi(this.store.count())}Lt(e,t){const n=this.cursor(this.options(e,t)),i=[];return this.Bt(n,(e,t)=>{i.push(t)}).next(()=>i)}Ut(e,t){p("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.qt=!1;const i=this.cursor(n);return this.Bt(i,(e,t,n)=>n.delete())}Kt(e,t){let n;t?n=e:(n={},t=e);const i=this.cursor(n);return this.Bt(i,t)}jt(e){const t=this.cursor({});return new Ei((n,i)=>{t.onerror=e=>{const t=Li(e.target.error);i(t)},t.onsuccess=t=>{const i=t.target.result;i?e(i.primaryKey,i.value).next(e=>{e?i.continue():n()}):n()}})}Bt(e,t){const n=[];return new Ei((i,r)=>{e.onerror=e=>{r(e.target.error)},e.onsuccess=e=>{const r=e.target.result;if(!r)return void i();const s=new Ci(r),o=t(r.primaryKey,r.value,s);if(o instanceof Ei){const e=o.catch(e=>(s.done(),Ei.reject(e)));n.push(e)}s.isDone?i():null===s.Ft?r.continue():r.continue(s.Ft)}}).next(()=>Ei.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.qt?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function xi(e){return new Ei((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=Li(e.target.error);n(t)}})}let Di=!1;function Li(e){const t=Ti.Rt(Object(o["l"])());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new E("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Di||(Di=!0,setTimeout(()=>{throw e},0)),e}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends ki{constructor(e,t){super(),this.Qt=e,this.currentSequenceNumber=t}}function Ri(e,t){const n=b(e);return Ti.St(n.Qt,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const t=this.mutations[i];t.key.isEqual(e.key)&&At(t,e,n[i])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&xt(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&xt(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(t=>{const n=e.get(t.key),i=n;this.applyToLocalView(i),n.isValidDocument()||i.convertToNoDocument($.min())})}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),sn())}isEqual(e){return this.batchId===e.batchId&&M(this.mutations,e.mutations,(e,t)=>Lt(e,t))&&M(this.baseMutations,e.baseMutations,(e,t)=>Lt(e,t))}}class Pi{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){_(e.mutations.length===n.length);let i=nn();const r=e.mutations;for(let s=0;s<r.length;s++)i=i.insert(r[s].key,n[s].version);return new Pi(e,t,n,i)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,t,n,i,r=$.min(),s=$.min(),o=G.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new ji(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new ji(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ji(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e){this.Wt=e}}function Bi(e,t){if(t.document)return Nn(e.Wt,t.document,!!t.hasCommittedMutations);if(t.noDocument){const e=se.fromSegments(t.noDocument.path),n=Hi(t.noDocument.readTime),i=ke.newNoDocument(e,n);return t.hasCommittedMutations?i.setHasCommittedMutations():i}if(t.unknownDocument){const e=se.fromSegments(t.unknownDocument.path),n=Hi(t.unknownDocument.version);return ke.newUnknownDocument(e,n)}return y()}function Fi(e,t,n){const i=Ui(n),r=t.key.path.popLast().toArray();if(t.isFoundDocument()){const n=function(e,t){return{name:Cn(e,t.key),fields:t.data.value.mapValue.fields,updateTime:wn(e,t.version.toTimestamp())}}(e.Wt,t),s=t.hasCommittedMutations;return new hi(null,null,n,s,i,r)}if(t.isNoDocument()){const e=t.key.path.toArray(),n=qi(t.version),s=t.hasCommittedMutations;return new hi(null,new ui(e,n),null,s,i,r)}if(t.isUnknownDocument()){const e=t.key.path.toArray(),n=qi(t.version);return new hi(new li(e,n),null,null,!0,i,r)}return y()}function Ui(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function Vi(e){const t=new j(e[0],e[1]);return $.fromTimestamp(t)}function qi(e){const t=e.toTimestamp();return new ri(t.seconds,t.nanoseconds)}function Hi(e){const t=new j(e.seconds,e.nanoseconds);return $.fromTimestamp(t)}function Wi(e,t){const n=(t.baseMutations||[]).map(t=>jn(e.Wt,t));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const i=t.mutations.map(t=>jn(e.Wt,t)),r=j.fromMillis(t.localWriteTimeMs);return new Mi(t.batchId,r,n,i)}function zi(e){const t=Hi(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?Hi(e.lastLimboFreeSnapshotVersion):$.min();let i;var r;return void 0!==e.query.documents?(_(1===(r=e.query).documents.length),i=et(Ke(An(r.documents[0])))):i=function(e){return et(Un(e))}(e.query),new ji(i,e.targetId,0,e.lastListenSequenceNumber,t,n,G.fromBase64String(e.resumeToken))}function Ki(e,t){const n=qi(t.snapshotVersion),i=qi(t.lastLimboFreeSnapshotVersion);let r;r=Oe(t.target)?Bn(e.Wt,t.target):Fn(e.Wt,t.target);const s=t.resumeToken.toBase64();return new fi(t.targetId,Te(t.target),n,s,t.sequenceNumber,i,r)}function Gi(e){const t=Un({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?tt(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{getBundleMetadata(e,t){return Yi(e).get(t).next(e=>{if(e)return{id:(t=e).bundleId,createTime:Hi(t.createTime),version:t.version};var t})}saveBundleMetadata(e,t){return Yi(e).put({bundleId:(n=t).id,createTime:qi(En(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return Xi(e).get(t).next(e=>{if(e)return{name:(t=e).name,query:Gi(t.bundledQuery),readTime:Hi(t.readTime)};var t})}saveNamedQuery(e,t){return Xi(e).put(function(e){return{name:e.name,readTime:qi(En(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function Yi(e){return Ri(e,yi.store)}function Xi(e){return Ri(e,_i.store)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(){this.Gt=new Zi}addToCollectionParentIndex(e,t){return this.Gt.add(t),Ei.resolve()}getCollectionParents(e,t){return Ei.resolve(this.Gt.getEntries(t))}}class Zi{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new Qt(q.comparator),r=!i.has(n);return this.index[t]=i.add(n),r}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new Qt(q.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this.zt=new Zi}addToCollectionParentIndex(e,t){if(!this.zt.has(t)){const n=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.zt.add(t)});const r={collectionId:n,parent:ei(i)};return tr(e).put(r)}return Ei.resolve()}getCollectionParents(e,t){const n=[],i=IDBKeyRange.bound([t,""],[P(t),""],!1,!0);return tr(e).Lt(i).next(e=>{for(const i of e){if(i.collectionId!==t)break;n.push(ii(i.parent))}return n})}}function tr(e){return Ri(e,vi.store)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ir{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new ir(e,ir.DEFAULT_COLLECTION_PERCENTILE,ir.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(e,t,n){const i=e.store(ai.store),r=e.store(ci.store),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=i.Kt({range:o},(e,t,n)=>(a++,n.delete()));s.push(c.next(()=>{_(1===a)}));const u=[];for(const l of n.mutations){const e=ci.key(t,l.key.path,n.batchId);s.push(r.delete(e)),u.push(l.key)}return Ei.waitFor(s).next(()=>u)}function sr(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw y();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ir.DEFAULT_COLLECTION_PERCENTILE=10,ir.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ir.DEFAULT=new ir(41943040,ir.DEFAULT_COLLECTION_PERCENTILE,ir.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ir.DISABLED=new ir(-1,0,0);class or{constructor(e,t,n,i){this.userId=e,this.N=t,this.Ht=n,this.referenceDelegate=i,this.Jt={}}static Yt(e,t,n,i){_(""!==e.uid);const r=e.isAuthenticated()?e.uid:"";return new or(r,t,n,i)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return cr(e).Kt({index:ai.userMutationsIndex,range:n},(e,n,i)=>{t=!1,i.done()}).next(()=>t)}addMutationBatch(e,t,n,i){const r=ur(e),s=cr(e);return s.add({}).next(o=>{_("number"==typeof o);const a=new Mi(o,t,n,i),c=function(e,t,n){const i=n.baseMutations.map(t=>Pn(e.Wt,t)),r=n.mutations.map(t=>Pn(e.Wt,t));return new ai(t,n.batchId,n.localWriteTime.toMillis(),i,r)}(this.N,this.userId,a),u=[];let l=new Qt((e,t)=>R(e.canonicalString(),t.canonicalString()));for(const e of i){const t=ci.key(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(r.put(t,ci.PLACEHOLDER))}return l.forEach(t=>{u.push(this.Ht.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.Jt[o]=a.keys()}),Ei.waitFor(u).next(()=>a)})}lookupMutationBatch(e,t){return cr(e).get(t).next(e=>e?(_(e.userId===this.userId),Wi(this.N,e)):null)}Xt(e,t){return this.Jt[t]?Ei.resolve(this.Jt[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){const n=e.keys();return this.Jt[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=IDBKeyRange.lowerBound([this.userId,n]);let r=null;return cr(e).Kt({index:ai.userMutationsIndex,range:i},(e,t,i)=>{t.userId===this.userId&&(_(t.batchId>=n),r=Wi(this.N,t)),i.done()}).next(()=>r)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return cr(e).Kt({index:ai.userMutationsIndex,range:t,reverse:!0},(e,t,i)=>{n=t.batchId,i.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return cr(e).Lt(ai.userMutationsIndex,t).next(e=>e.map(e=>Wi(this.N,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=ci.prefixForPath(this.userId,t.path),i=IDBKeyRange.lowerBound(n),r=[];return ur(e).Kt({range:i},(n,i,s)=>{const[o,a,c]=n,u=ii(a);if(o===this.userId&&t.path.isEqual(u))return cr(e).get(c).next(e=>{if(!e)throw y();_(e.userId===this.userId),r.push(Wi(this.N,e))});s.done()}).next(()=>r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Qt(R);const i=[];return t.forEach(t=>{const r=ci.prefixForPath(this.userId,t.path),s=IDBKeyRange.lowerBound(r),o=ur(e).Kt({range:s},(e,i,r)=>{const[s,o,a]=e,c=ii(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):r.done()});i.push(o)}),Ei.waitFor(i).next(()=>this.Zt(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1,r=ci.prefixForPath(this.userId,n),s=IDBKeyRange.lowerBound(r);let o=new Qt(R);return ur(e).Kt({range:s},(e,t,r)=>{const[s,a,c]=e,u=ii(a);s===this.userId&&n.isPrefixOf(u)?u.length===i&&(o=o.add(c)):r.done()}).next(()=>this.Zt(e,o))}Zt(e,t){const n=[],i=[];return t.forEach(t=>{i.push(cr(e).get(t).next(e=>{if(null===e)throw y();_(e.userId===this.userId),n.push(Wi(this.N,e))}))}),Ei.waitFor(i).next(()=>n)}removeMutationBatch(e,t){return rr(e.Qt,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.te(t.batchId)}),Ei.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}te(e){delete this.Jt[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return Ei.resolve();const n=IDBKeyRange.lowerBound(ci.prefixForUser(this.userId)),i=[];return ur(e).Kt({range:n},(e,t,n)=>{if(e[0]===this.userId){const t=ii(e[1]);i.push(t)}else n.done()}).next(()=>{_(0===i.length)})})}containsKey(e,t){return ar(e,this.userId,t)}ee(e){return lr(e).get(this.userId).next(e=>e||new oi(this.userId,-1,""))}}function ar(e,t,n){const i=ci.prefixForPath(t,n.path),r=i[1],s=IDBKeyRange.lowerBound(i);let o=!1;return ur(e).Kt({range:s,qt:!0},(e,n,i)=>{const[s,a,c]=e;s===t&&a===r&&(o=!0),i.done()}).next(()=>o)}function cr(e){return Ri(e,ai.store)}function ur(e){return Ri(e,ci.store)}function lr(e){return Ri(e,oi.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new hr(0)}static ie(){return new hr(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t){this.referenceDelegate=e,this.N=t}allocateTargetId(e){return this.re(e).next(t=>{const n=new hr(t.highestTargetId);return t.highestTargetId=n.next(),this.oe(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.re(e).next(e=>$.fromTimestamp(new j(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.re(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.re(e).next(i=>(i.highestListenSequenceNumber=t,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.oe(e,i)))}addTargetData(e,t){return this.ce(e,t).next(()=>this.re(e).next(n=>(n.targetCount+=1,this.ae(t,n),this.oe(e,n))))}updateTargetData(e,t){return this.ce(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>fr(e).delete(t.targetId)).next(()=>this.re(e)).next(t=>(_(t.targetCount>0),t.targetCount-=1,this.oe(e,t)))}removeTargets(e,t,n){let i=0;const r=[];return fr(e).Kt((s,o)=>{const a=zi(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(i++,r.push(this.removeTargetData(e,a)))}).next(()=>Ei.waitFor(r)).next(()=>i)}forEachTarget(e,t){return fr(e).Kt((e,n)=>{const i=zi(n);t(i)})}re(e){return pr(e).get(mi.key).next(e=>(_(null!==e),e))}oe(e,t){return pr(e).put(mi.key,t)}ce(e,t){return fr(e).put(Ki(this.N,t))}ae(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.re(e).next(e=>e.targetCount)}getTargetData(e,t){const n=Te(t),i=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let r=null;return fr(e).Kt({range:i,index:fi.queryTargetsIndexName},(e,n,i)=>{const s=zi(n);Se(t,s.target)&&(r=s,i.done())}).next(()=>r)}addMatchingKeys(e,t,n){const i=[],r=mr(e);return t.forEach(t=>{const s=ei(t.path);i.push(r.put(new pi(n,s))),i.push(this.referenceDelegate.addReference(e,n,t))}),Ei.waitFor(i)}removeMatchingKeys(e,t,n){const i=mr(e);return Ei.forEach(t,t=>{const r=ei(t.path);return Ei.waitFor([i.delete([n,r]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){const n=mr(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(i)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),i=mr(e);let r=sn();return i.Kt({range:n,qt:!0},(e,t,n)=>{const i=ii(e[1]),s=new se(i);r=r.add(s)}).next(()=>r)}containsKey(e,t){const n=ei(t.path),i=IDBKeyRange.bound([n],[P(n)],!1,!0);let r=0;return mr(e).Kt({index:pi.documentTargetsIndex,qt:!0,range:i},([e,t],n,i)=>{0!==e&&(r++,i.done())}).next(()=>r>0)}Tt(e,t){return fr(e).get(t).next(e=>e?zi(e):null)}}function fr(e){return Ri(e,fi.store)}function pr(e){return Ri(e,mi.store)}function mr(e){return Ri(e,pi.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vr(e){if(e.code!==k.FAILED_PRECONDITION||e.message!==bi)throw e;p("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr([e,t],[n,i]){const r=R(e,n);return 0===r?R(t,i):r}class yr{constructor(e){this.ue=e,this.buffer=new Qt(gr),this.he=0}le(){return++this.he}fe(e){const t=[e,this.le()];if(this.buffer.size<this.ue)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();gr(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class _r{constructor(e,t){this.garbageCollector=e,this.asyncQueue=t,this.de=!1,this.we=null}start(e){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this._e(e)}stop(){this.we&&(this.we.cancel(),this.we=null)}get started(){return null!==this.we}_e(e){const t=this.de?3e5:6e4;p("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.we=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.we=null,this.de=!0;try{await e.collectGarbage(this.garbageCollector)}catch(e){Oi(e)?p("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await vr(e)}await this._e(e)})}}class wr{constructor(e,t){this.me=e,this.params=t}calculateTargetCount(e,t){return this.me.ge(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return Ei.resolve(D.T);const n=new yr(t);return this.me.forEachTarget(e,e=>n.fe(e.sequenceNumber)).next(()=>this.me.ye(e,e=>n.fe(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.me.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.me.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector","Garbage collection skipped; disabled"),Ei.resolve(nr)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),nr):this.pe(e,t))}getCacheSize(e){return this.me.getCacheSize(e)}pe(e,t){let n,i,r,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(p("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),i=this.params.maximumSequenceNumbersToCollect):i=t,o=Date.now(),this.nthSequenceNumber(e,i))).next(i=>(n=i,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(r=t,c=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(u=Date.now(),d()<=s["a"].DEBUG&&p("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${o-l}ms\n\tDetermined least recently used ${i} in `+(a-o)+"ms\n"+`\tRemoved ${r} targets in `+(c-a)+"ms\n"+`\tRemoved ${e} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),Ei.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:e})))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new wr(e,t)}(this,t)}ge(e){const t=this.Te(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}Te(e){let t=0;return this.ye(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}ye(e,t){return this.Ee(e,(e,n)=>t(n))}addReference(e,t,n){return kr(e,n)}removeReference(e,t,n){return kr(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return kr(e,t)}Ie(e,t){return function(e,t){let n=!1;return lr(e).jt(i=>ar(e,i,t).next(e=>(e&&(n=!0),Ei.resolve(!e)))).next(()=>n)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let r=0;return this.Ee(e,(s,o)=>{if(o<=t){const t=this.Ie(e,s).next(t=>{if(!t)return r++,n.getEntry(e,s).next(()=>(n.removeEntry(s),mr(e).delete([0,ei(s.path)])))});i.push(t)}}).next(()=>Ei.waitFor(i)).next(()=>n.apply(e)).next(()=>r)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return kr(e,t)}Ee(e,t){const n=mr(e);let i,r=D.T;return n.Kt({index:pi.documentTargetsIndex},([e,n],{path:s,sequenceNumber:o})=>{0===e?(r!==D.T&&t(new se(ii(i)),r),r=o,i=s):r=D.T}).next(()=>{r!==D.T&&t(new se(ii(i)),r)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function kr(e,t){return mr(e).put(function(e,t){return new pi(0,ei(e.path),t)}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[i,r]of n)if(this.equalsFn(i,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(void 0!==i){for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],e))return void(i[n]=[e,t]);i.push([e,t])}else this.inner[n]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),!0;return!1}forEach(e){F(this.inner,(t,n)=>{for(const[i,r]of n)e(i,r)})}isEmpty(){return U(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(){this.changes=new Er(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}getReadTime(e){const t=this.changes.get(e);return t?t.readTime:$.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:ke.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Ei.resolve(n.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,t){this.N=e,this.Ht=t}addEntry(e,t,n){return Or(e).put(Ar(t),n)}removeEntry(e,t){const n=Or(e),i=Ar(t);return n.delete(i)}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.Ae(e,n)))}getEntry(e,t){return Or(e).get(Ar(t)).next(e=>this.Re(t,e))}be(e,t){return Or(e).get(Ar(t)).next(e=>({document:this.Re(t,e),size:sr(e)}))}getEntries(e,t){let n=Jt();return this.Pe(e,t,(e,t)=>{const i=this.Re(e,t);n=n.insert(e,i)}).next(()=>n)}ve(e,t){let n=Jt(),i=new zt(se.comparator);return this.Pe(e,t,(e,t)=>{const r=this.Re(e,t);n=n.insert(e,r),i=i.insert(e,sr(t))}).next(()=>({documents:n,Ve:i}))}Pe(e,t,n){if(t.isEmpty())return Ei.resolve();const i=IDBKeyRange.bound(t.first().path.toArray(),t.last().path.toArray()),r=t.getIterator();let s=r.getNext();return Or(e).Kt({range:i},(e,t,i)=>{const o=se.fromSegments(e);for(;s&&se.comparator(s,o)<0;)n(s,null),s=r.getNext();s&&s.isEqual(o)&&(n(s,t),s=r.hasNext()?r.getNext():null),s?i.Mt(s.path.toArray()):i.done()}).next(()=>{for(;s;)n(s,null),s=r.hasNext()?r.getNext():null})}getDocumentsMatchingQuery(e,t,n){let i=Jt();const r=t.path.length+1,s={};if(n.isEqual($.min())){const e=t.path.toArray();s.range=IDBKeyRange.lowerBound(e)}else{const e=t.path.toArray(),i=Ui(n);s.range=IDBKeyRange.lowerBound([e,i],!0),s.index=hi.collectionReadTimeIndex}return Or(e).Kt(s,(e,n,s)=>{if(e.length!==r)return;const o=Bi(this.N,n);t.path.isPrefixOf(o.key.path)?st(t,o)&&(i=i.insert(o.key,o)):s.done()}).next(()=>i)}newChangeBuffer(e){return new Cr(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return Sr(e).get(di.key).next(e=>(_(!!e),e))}Ae(e,t){return Sr(e).put(di.key,t)}Re(e,t){if(t){const e=Bi(this.N,t);if(!e.isNoDocument()||!e.version.isEqual($.min()))return e}return ke.newInvalidDocument(e)}}class Cr extends Ir{constructor(e,t){super(),this.Se=e,this.trackRemovals=t,this.De=new Er(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){const t=[];let n=0,i=new Qt((e,t)=>R(e.canonicalString(),t.canonicalString()));return this.changes.forEach((r,s)=>{const o=this.De.get(r);if(s.document.isValidDocument()){const a=Fi(this.Se.N,s.document,this.getReadTime(r));i=i.add(r.path.popLast());const c=sr(a);n+=c-o,t.push(this.Se.addEntry(e,r,a))}else if(n-=o,this.trackRemovals){const n=Fi(this.Se.N,ke.newNoDocument(r,$.min()),this.getReadTime(r));t.push(this.Se.addEntry(e,r,n))}else t.push(this.Se.removeEntry(e,r))}),i.forEach(n=>{t.push(this.Se.Ht.addToCollectionParentIndex(e,n))}),t.push(this.Se.updateMetadata(e,n)),Ei.waitFor(t)}getFromCache(e,t){return this.Se.be(e,t).next(e=>(this.De.set(t,e.size),e.document))}getAllFromCache(e,t){return this.Se.ve(e,t).next(({documents:e,Ve:t})=>(t.forEach((e,t)=>{this.De.set(e,t)}),e))}}function Sr(e){return Ri(e,di.store)}function Or(e){return Ri(e,hi.store)}function Ar(e){return e.path.toArray()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e){this.N=e}Ct(e,t,n,i){_(n<i&&n>=0&&i<=11);const r=new Ii("createOrUpgrade",t);n<1&&i>=1&&(function(e){e.createObjectStore(si.store)}(e),function(e){e.createObjectStore(oi.store,{keyPath:oi.keyPath}),e.createObjectStore(ai.store,{keyPath:ai.keyPath,autoIncrement:!0}).createIndex(ai.userMutationsIndex,ai.userMutationsKeyPath,{unique:!0}),e.createObjectStore(ci.store)}(e),Dr(e),function(e){e.createObjectStore(hi.store)}(e));let s=Ei.resolve();return n<3&&i>=3&&(0!==n&&(function(e){e.deleteObjectStore(pi.store),e.deleteObjectStore(fi.store),e.deleteObjectStore(mi.store)}(e),Dr(e)),s=s.next(()=>function(e){const t=e.store(mi.store),n=new mi(0,0,$.min().toTimestamp(),0);return t.put(mi.key,n)}(r))),n<4&&i>=4&&(0!==n&&(s=s.next(()=>function(e,t){return t.store(ai.store).Lt().next(n=>{e.deleteObjectStore(ai.store),e.createObjectStore(ai.store,{keyPath:ai.keyPath,autoIncrement:!0}).createIndex(ai.userMutationsIndex,ai.userMutationsKeyPath,{unique:!0});const i=t.store(ai.store),r=n.map(e=>i.put(e));return Ei.waitFor(r)})}(e,r))),s=s.next(()=>{!function(e){e.createObjectStore(gi.store,{keyPath:gi.keyPath})}(e)})),n<5&&i>=5&&(s=s.next(()=>this.Ce(r))),n<6&&i>=6&&(s=s.next(()=>(function(e){e.createObjectStore(di.store)}(e),this.Ne(r)))),n<7&&i>=7&&(s=s.next(()=>this.xe(r))),n<8&&i>=8&&(s=s.next(()=>this.ke(e,r))),n<9&&i>=9&&(s=s.next(()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e),function(e){const t=e.objectStore(hi.store);t.createIndex(hi.readTimeIndex,hi.readTimeIndexPath,{unique:!1}),t.createIndex(hi.collectionReadTimeIndex,hi.collectionReadTimeIndexPath,{unique:!1})}(t)})),n<10&&i>=10&&(s=s.next(()=>this.$e(r))),n<11&&i>=11&&(s=s.next(()=>{!function(e){e.createObjectStore(yi.store,{keyPath:yi.keyPath})}(e),function(e){e.createObjectStore(_i.store,{keyPath:_i.keyPath})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)})),s}Ne(e){let t=0;return e.store(hi.store).Kt((e,n)=>{t+=sr(n)}).next(()=>{const n=new di(t);return e.store(di.store).put(di.key,n)})}Ce(e){const t=e.store(oi.store),n=e.store(ai.store);return t.Lt().next(t=>Ei.forEach(t,t=>{const i=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.Lt(ai.userMutationsIndex,i).next(n=>Ei.forEach(n,n=>{_(n.userId===t.userId);const i=Wi(this.N,n);return rr(e,t.userId,i).next(()=>{})}))}))}xe(e){const t=e.store(pi.store),n=e.store(hi.store);return e.store(mi.store).get(mi.key).next(e=>{const i=[];return n.Kt((n,r)=>{const s=new q(n),o=function(e){return[0,ei(e)]}(s);i.push(t.get(o).next(n=>n?Ei.resolve():(n=>t.put(new pi(0,ei(n),e.highestListenSequenceNumber)))(s)))}).next(()=>Ei.waitFor(i))})}ke(e,t){e.createObjectStore(vi.store,{keyPath:vi.keyPath});const n=t.store(vi.store),i=new Zi,r=e=>{if(i.add(e)){const t=e.lastSegment(),i=e.popLast();return n.put({collectionId:t,parent:ei(i)})}};return t.store(hi.store).Kt({qt:!0},(e,t)=>{const n=new q(e);return r(n.popLast())}).next(()=>t.store(ci.store).Kt({qt:!0},([e,t,n],i)=>{const s=ii(t);return r(s.popLast())}))}$e(e){const t=e.store(fi.store);return t.Kt((e,n)=>{const i=zi(n),r=Ki(this.N,i);return t.put(r)})}}function Dr(e){e.createObjectStore(pi.store,{keyPath:pi.keyPath}).createIndex(pi.documentTargetsIndex,pi.documentTargetsKeyPath,{unique:!0}),e.createObjectStore(fi.store,{keyPath:fi.keyPath}).createIndex(fi.queryTargetsIndexName,fi.queryTargetsKeyPath,{unique:!0}),e.createObjectStore(mi.store)}const Lr="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Nr{constructor(e,t,n,i,r,s,o,a,c,u){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Oe=r,this.window=s,this.document=o,this.Fe=c,this.Me=u,this.Le=null,this.Be=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ue=null,this.inForeground=!1,this.qe=null,this.Ke=null,this.je=Number.NEGATIVE_INFINITY,this.Qe=e=>Promise.resolve(),!Nr.bt())throw new E(k.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new br(this,i),this.We=t+"main",this.N=new $i(a),this.Ge=new Ti(this.We,11,new xr(this.N)),this.ze=new dr(this.referenceDelegate,this.N),this.Ht=new er,this.He=function(e,t){return new Tr(e,t)}(this.N,this.Ht),this.Je=new Qi,this.window&&this.window.localStorage?this.Ye=this.window.localStorage:(this.Ye=null,!1===u&&m("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Xe().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new E(k.FAILED_PRECONDITION,Lr);return this.Ze(),this.tn(),this.en(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.ze.getHighestSequenceNumber(e))}).then(e=>{this.Le=new D(e,this.Fe)}).then(()=>{this.Be=!0}).catch(e=>(this.Ge&&this.Ge.close(),Promise.reject(e)))}nn(e){return this.Qe=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ge.xt(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Oe.enqueueAndForget(async()=>{this.started&&await this.Xe()}))}Xe(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Mr(e).put(new gi(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.sn(e).next(e=>{e||(this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.Qe(!1)))})}).next(()=>this.rn(e)).next(t=>this.isPrimary&&!t?this.on(e).next(()=>!1):!!t&&this.cn(e).next(()=>!0))).catch(e=>{if(Oi(e))return p("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return p("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Oe.enqueueRetryable(()=>this.Qe(e)),this.isPrimary=e})}sn(e){return Rr(e).get(si.key).next(e=>Ei.resolve(this.an(e)))}un(e){return Mr(e).delete(this.clientId)}async hn(){if(this.isPrimary&&!this.ln(this.je,18e5)){this.je=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const t=Ri(e,gi.store);return t.Lt().next(e=>{const n=this.fn(e,18e5),i=e.filter(e=>-1===n.indexOf(e));return Ei.forEach(i,e=>t.delete(e.clientId)).next(()=>i)})}).catch(()=>[]);if(this.Ye)for(const t of e)this.Ye.removeItem(this.dn(t.clientId))}}en(){this.Ke=this.Oe.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Xe().then(()=>this.hn()).then(()=>this.en()))}an(e){return!!e&&e.ownerId===this.clientId}rn(e){return this.Me?Ei.resolve(!0):Rr(e).get(si.key).next(t=>{if(null!==t&&this.ln(t.leaseTimestampMs,5e3)&&!this.wn(t.ownerId)){if(this.an(t)&&this.networkEnabled)return!0;if(!this.an(t)){if(!t.allowTabSynchronization)throw new E(k.FAILED_PRECONDITION,Lr);return!1}}return!(!this.networkEnabled||!this.inForeground)||Mr(e).Lt().next(e=>void 0===this.fn(e,5e3).find(e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,i=this.networkEnabled===e.networkEnabled;if(t||n&&i)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&p("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.Be=!1,this._n(),this.Ke&&(this.Ke.cancel(),this.Ke=null),this.mn(),this.gn(),await this.Ge.runTransaction("shutdown","readwrite",[si.store,gi.store],e=>{const t=new Ni(e,D.T);return this.on(t).next(()=>this.un(t))}),this.Ge.close(),this.yn()}fn(e,t){return e.filter(e=>this.ln(e.updateTimeMs,t)&&!this.wn(e.clientId))}pn(){return this.runTransaction("getActiveClients","readonly",e=>Mr(e).Lt().next(e=>this.fn(e,18e5).map(e=>e.clientId)))}get started(){return this.Be}getMutationQueue(e){return or.Yt(e,this.N,this.Ht,this.referenceDelegate)}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getIndexManager(){return this.Ht}getBundleCache(){return this.Je}runTransaction(e,t,n){p("IndexedDbPersistence","Starting transaction:",e);const i="readonly"===t?"readonly":"readwrite";let r;return this.Ge.runTransaction(e,i,wi,i=>(r=new Ni(i,this.Le?this.Le.next():D.T),"readwrite-primary"===t?this.sn(r).next(e=>!!e||this.rn(r)).next(t=>{if(!t)throw m(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.Qe(!1)),new E(k.FAILED_PRECONDITION,bi);return n(r)}).next(e=>this.cn(r).next(()=>e)):this.Tn(r).next(()=>n(r)))).then(e=>(r.raiseOnCommittedEvent(),e))}Tn(e){return Rr(e).get(si.key).next(e=>{if(null!==e&&this.ln(e.leaseTimestampMs,5e3)&&!this.wn(e.ownerId)&&!this.an(e)&&!(this.Me||this.allowTabSynchronization&&e.allowTabSynchronization))throw new E(k.FAILED_PRECONDITION,Lr)})}cn(e){const t=new si(this.clientId,this.allowTabSynchronization,Date.now());return Rr(e).put(si.key,t)}static bt(){return Ti.bt()}on(e){const t=Rr(e);return t.get(si.key).next(e=>this.an(e)?(p("IndexedDbPersistence","Releasing primary lease."),t.delete(si.key)):Ei.resolve())}ln(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(m(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Ze(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.qe=()=>{this.Oe.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.Xe()))},this.document.addEventListener("visibilitychange",this.qe),this.inForeground="visible"===this.document.visibilityState)}mn(){this.qe&&(this.document.removeEventListener("visibilitychange",this.qe),this.qe=null)}tn(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Ue=()=>{this._n(),Object(o["v"])()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Oe.enterRestrictedMode(!0),this.Oe.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ue))}gn(){this.Ue&&(this.window.removeEventListener("pagehide",this.Ue),this.Ue=null)}wn(e){var t;try{const n=null!==(null===(t=this.Ye)||void 0===t?void 0:t.getItem(this.dn(e)));return p("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return m("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}_n(){if(this.Ye)try{this.Ye.setItem(this.dn(this.clientId),String(Date.now()))}catch(e){m("Failed to set zombie client id.",e)}}yn(){if(this.Ye)try{this.Ye.removeItem(this.dn(this.clientId))}catch(e){}}dn(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Rr(e){return Ri(e,si.store)}function Mr(e){return Ri(e,gi.store)}function Pr(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class jr{constructor(e,t){this.progress=e,this.En=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,t,n){this.He=e,this.In=t,this.Ht=n}An(e,t){return this.In.getAllMutationBatchesAffectingDocumentKey(e,t).next(n=>this.Rn(e,t,n))}Rn(e,t,n){return this.He.getEntry(e,t).next(e=>{for(const t of n)t.applyToLocalView(e);return e})}bn(e,t){e.forEach((e,n)=>{for(const i of t)i.applyToLocalView(n)})}Pn(e,t){return this.He.getEntries(e,t).next(t=>this.vn(e,t).next(()=>t))}vn(e,t){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>this.bn(t,e))}getDocumentsMatchingQuery(e,t,n){return function(e){return se.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.Vn(e,t.path):Je(t)?this.Sn(e,t,n):this.Dn(e,t,n)}Vn(e,t){return this.An(e,new se(t)).next(e=>{let t=en();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}Sn(e,t,n){const i=t.collectionGroup;let r=en();return this.Ht.getCollectionParents(e,i).next(s=>Ei.forEach(s,s=>{const o=function(e,t){return new We(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(i));return this.Dn(e,o,n).next(e=>{e.forEach((e,t)=>{r=r.insert(e,t)})})}).next(()=>r))}Dn(e,t,n){let i,r;return this.He.getDocumentsMatchingQuery(e,t,n).next(n=>(i=n,this.In.getAllMutationBatchesAffectingQuery(e,t))).next(t=>(r=t,this.Cn(e,r,i).next(e=>{i=e;for(const t of r)for(const e of t.mutations){const n=e.key;let r=i.get(n);null==r&&(r=ke.newInvalidDocument(n),i=i.insert(n,r)),xt(e,r,t.localWriteTime),r.isFoundDocument()||(i=i.remove(n))}}))).next(()=>(i.forEach((e,n)=>{st(t,n)||(i=i.remove(e))}),i))}Cn(e,t,n){let i=sn();for(const s of t)for(const e of s.mutations)e instanceof Mt&&null===n.get(e.key)&&(i=i.add(e.key));let r=n;return this.He.getEntries(e,i).next(e=>(e.forEach((e,t)=>{t.isFoundDocument()&&(r=r.insert(e,t))}),r))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Nn=n,this.xn=i}static kn(e,t){let n=sn(),i=sn();for(const r of t.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Br(e,t.fromCache,n,i)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{$n(e){this.On=e}getDocumentsMatchingQuery(e,t,n,i){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||n.isEqual($.min())?this.Fn(e,t):this.On.Pn(e,i).next(r=>{const o=this.Mn(t,r);return(Ge(t)||Qe(t))&&this.Ln(t.limitType,o,i,n)?this.Fn(e,t):(d()<=s["a"].DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),rt(t)),this.On.getDocumentsMatchingQuery(e,t,n).next(e=>(o.forEach(t=>{e=e.insert(t.key,t)}),e)))})}Mn(e,t){let n=new Qt(ot(e));return t.forEach((t,i)=>{st(e,i)&&(n=n.add(i))}),n}Ln(e,t,n,i){if(n.size!==t.size)return!0;const r="F"===e?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Fn(e,t){return d()<=s["a"].DEBUG&&p("QueryEngine","Using full collection scan to execute query:",rt(t)),this.On.getDocumentsMatchingQuery(e,t,$.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,t,n,i){this.persistence=e,this.Bn=t,this.N=i,this.Un=new zt(R),this.qn=new Er(e=>Te(e),Se),this.Kn=$.min(),this.In=e.getMutationQueue(n),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new $r(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Un))}}function Vr(e,t,n,i){return new Ur(e,t,n,i)}async function qr(e,t){const n=b(e);let i=n.In,r=n.Qn;const s=await n.persistence.runTransaction("Handle user change","readonly",e=>{let s;return n.In.getAllMutationBatches(e).next(o=>(s=o,i=n.persistence.getMutationQueue(t),r=new $r(n.jn,i,n.persistence.getIndexManager()),i.getAllMutationBatches(e))).next(t=>{const n=[],i=[];let o=sn();for(const e of s){n.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return r.Pn(e,o).next(e=>({Wn:e,removedBatchIds:n,addedBatchIds:i}))})});return n.In=i,n.Qn=r,n.Bn.$n(n.Qn),s}function Hr(e,t){const n=b(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const i=t.batch.keys(),r=n.jn.newChangeBuffer({trackRemovals:!0});return function(e,t,n,i){const r=n.batch,s=r.keys();let o=Ei.resolve();return s.forEach(e=>{o=o.next(()=>i.getEntry(t,e)).next(t=>{const s=n.docVersions.get(e);_(null!==s),t.version.compareTo(s)<0&&(r.applyToRemoteDocument(t,n),t.isValidDocument()&&i.addEntry(t,n.commitVersion))})}),o.next(()=>e.In.removeMutationBatch(t,r))}(n,e,t,r).next(()=>r.apply(e)).next(()=>n.In.performConsistencyCheck(e)).next(()=>n.Qn.Pn(e,i))})}function Wr(e){const t=b(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.ze.getLastRemoteSnapshotVersion(e))}function zr(e,t){const n=b(e),i=t.snapshotVersion;let r=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const s=n.jn.newChangeBuffer({trackRemovals:!0});r=n.Un;const o=[];t.targetChanges.forEach((t,s)=>{const a=r.get(s);if(!a)return;o.push(n.ze.removeMatchingKeys(e,t.removedDocuments,s).next(()=>n.ze.addMatchingKeys(e,t.addedDocuments,s)));const c=t.resumeToken;if(c.approximateByteSize()>0){const u=a.withResumeToken(c,i).withSequenceNumber(e.currentSequenceNumber);r=r.insert(s,u),function(e,t,n){return _(t.resumeToken.approximateByteSize()>0),0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,u,t)&&o.push(n.ze.updateTargetData(e,u))}});let a=Jt();if(t.documentUpdates.forEach((i,r)=>{t.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,i))}),o.push(Kr(e,s,t.documentUpdates,i,void 0).next(e=>{a=e})),!i.isEqual($.min())){const t=n.ze.getLastRemoteSnapshotVersion(e).next(t=>n.ze.setTargetsMetadata(e,e.currentSequenceNumber,i));o.push(t)}return Ei.waitFor(o).next(()=>s.apply(e)).next(()=>n.Qn.vn(e,a)).next(()=>a)}).then(e=>(n.Un=r,e))}function Kr(e,t,n,i,r){let s=sn();return n.forEach(e=>s=s.add(e)),t.getEntries(e,s).next(e=>{let s=Jt();return n.forEach((n,o)=>{const a=e.get(n),c=(null==r?void 0:r.get(n))||i;o.isNoDocument()&&o.version.isEqual($.min())?(t.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(o,c),s=s.insert(n,o)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)}),s})}function Gr(e,t){const n=b(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),n.In.getNextMutationBatchAfterBatchId(e,t)))}function Qr(e,t){const n=b(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let i;return n.ze.getTargetData(e,t).next(r=>r?(i=r,Ei.resolve(i)):n.ze.allocateTargetId(e).next(r=>(i=new ji(t,r,0,e.currentSequenceNumber),n.ze.addTargetData(e,i).next(()=>i))))}).then(e=>{const i=n.Un.get(e.targetId);return(null===i||e.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Un=n.Un.insert(e.targetId,e),n.qn.set(t,e.targetId)),e})}async function Yr(e,t,n){const i=b(e),r=i.Un.get(t),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,e=>i.persistence.referenceDelegate.removeTarget(e,r))}catch(e){if(!Oi(e))throw e;p("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}i.Un=i.Un.remove(t),i.qn.delete(r.target)}function Xr(e,t,n){const i=b(e);let r=$.min(),s=sn();return i.persistence.runTransaction("Execute query","readonly",e=>function(e,t,n){const i=b(e),r=i.qn.get(n);return void 0!==r?Ei.resolve(i.Un.get(r)):i.ze.getTargetData(t,n)}(i,e,et(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,i.ze.getMatchingKeysForTargetId(e,t.targetId).next(e=>{s=e})}).next(()=>i.Bn.getDocumentsMatchingQuery(e,t,n?r:$.min(),n?s:sn())).next(e=>({documents:e,Gn:s})))}function Jr(e,t){const n=b(e),i=b(n.ze),r=n.Un.get(t);return r?Promise.resolve(r.target):n.persistence.runTransaction("Get target data","readonly",e=>i.Tt(e,t).next(e=>e?e.target:null))}function Zr(e){const t=b(e);return t.persistence.runTransaction("Get new document changes","readonly",e=>function(e,t,n){const i=b(e);let r=Jt(),s=Ui(n);const o=Or(t),a=IDBKeyRange.lowerBound(s,!0);return o.Kt({index:hi.readTimeIndex,range:a},(e,t)=>{const n=Bi(i.N,t);r=r.insert(n.key,n),s=t.readTime}).next(()=>({En:r,readTime:Vi(s)}))}(t.jn,e,t.Kn)).then(({En:e,readTime:n})=>(t.Kn=n,e))}async function es(e){const t=b(e);return t.persistence.runTransaction("Synchronize last document change read time","readonly",e=>function(e){const t=Or(e);let n=$.min();return t.Kt({index:hi.readTimeIndex,reverse:!0},(e,t,i)=>{t.readTime&&(n=Vi(t.readTime)),i.done()}).next(()=>n)}(e)).then(e=>{t.Kn=e})}async function ts(e,t,n,i){const r=b(e);let s=sn(),o=Jt(),a=nn();for(const l of n){const e=t.zn(l.metadata.name);l.document&&(s=s.add(e)),o=o.insert(e,t.Hn(l)),a=a.insert(e,t.Jn(l.metadata.readTime))}const c=r.jn.newChangeBuffer({trackRemovals:!0}),u=await Qr(r,function(e){return et(Ke(q.fromString("__bundle__/docs/"+e)))}(i));return r.persistence.runTransaction("Apply bundle documents","readwrite",e=>Kr(e,c,o,$.min(),a).next(t=>(c.apply(e),t)).next(t=>r.ze.removeMatchingKeysForTargetId(e,u.targetId).next(()=>r.ze.addMatchingKeys(e,s,u.targetId)).next(()=>r.Qn.vn(e,t)).next(()=>t)))}async function ns(e,t,n=sn()){const i=await Qr(e,et(Gi(t.bundledQuery))),r=b(e);return r.persistence.runTransaction("Save named query","readwrite",e=>{const s=En(t.readTime);if(i.snapshotVersion.compareTo(s)>=0)return r.Je.saveNamedQuery(e,t);const o=i.withResumeToken(G.EMPTY_BYTE_STRING,s);return r.Un=r.Un.insert(o.targetId,o),r.ze.updateTargetData(e,o).next(()=>r.ze.removeMatchingKeysForTargetId(e,i.targetId)).next(()=>r.ze.addMatchingKeys(e,n,i.targetId)).next(()=>r.Je.saveNamedQuery(e,t))})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return Ei.resolve(this.Yn.get(t))}saveBundleMetadata(e,t){var n;return this.Yn.set(t.id,{id:(n=t).id,version:n.version,createTime:En(n.createTime)}),Ei.resolve()}getNamedQuery(e,t){return Ei.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,function(e){return{name:e.name,query:Gi(e.bundledQuery),readTime:En(e.readTime)}}(t)),Ei.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(){this.Zn=new Qt(ss.ts),this.es=new Qt(ss.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,t){const n=new ss(e,t);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.rs(new ss(e,t))}os(e,t){e.forEach(e=>this.removeReference(e,t))}cs(e){const t=new se(new q([])),n=new ss(t,e),i=new ss(t,e+1),r=[];return this.es.forEachInRange([n,i],e=>{this.rs(e),r.push(e.key)}),r}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const t=new se(new q([])),n=new ss(t,e),i=new ss(t,e+1);let r=sn();return this.es.forEachInRange([n,i],e=>{r=r.add(e.key)}),r}containsKey(e){const t=new ss(e,0),n=this.Zn.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class ss{constructor(e,t){this.key=e,this.ls=t}static ts(e,t){return se.comparator(e.key,t.key)||R(e.ls,t.ls)}static ns(e,t){return R(e.ls,t.ls)||se.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,t){this.Ht=e,this.referenceDelegate=t,this.In=[],this.fs=1,this.ds=new Qt(ss.ts)}checkEmpty(e){return Ei.resolve(0===this.In.length)}addMutationBatch(e,t,n,i){const r=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const s=new Mi(r,t,n,i);this.In.push(s);for(const o of i)this.ds=this.ds.add(new ss(o.key,r)),this.Ht.addToCollectionParentIndex(e,o.key.path.popLast());return Ei.resolve(s)}lookupMutationBatch(e,t){return Ei.resolve(this.ws(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this._s(n),r=i<0?0:i;return Ei.resolve(this.In.length>r?this.In[r]:null)}getHighestUnacknowledgedBatchId(){return Ei.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(e){return Ei.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new ss(t,0),i=new ss(t,Number.POSITIVE_INFINITY),r=[];return this.ds.forEachInRange([n,i],e=>{const t=this.ws(e.ls);r.push(t)}),Ei.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Qt(R);return t.forEach(e=>{const t=new ss(e,0),i=new ss(e,Number.POSITIVE_INFINITY);this.ds.forEachInRange([t,i],e=>{n=n.add(e.ls)})}),Ei.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let r=n;se.isDocumentKey(r)||(r=r.child(""));const s=new ss(new se(r),0);let o=new Qt(R);return this.ds.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(o=o.add(e.ls)),!0)},s),Ei.resolve(this.gs(o))}gs(e){const t=[];return e.forEach(e=>{const n=this.ws(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){_(0===this.ys(t.batchId,"removed")),this.In.shift();let n=this.ds;return Ei.forEach(t.mutations,i=>{const r=new ss(i.key,t.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ds=n})}te(e){}containsKey(e,t){const n=new ss(t,0),i=this.ds.firstAfterOrEqual(n);return Ei.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.In.length,Ei.resolve()}ys(e,t){return this._s(e)}_s(e){return 0===this.In.length?0:e-this.In[0].batchId}ws(e){const t=this._s(e);return t<0||t>=this.In.length?null:this.In[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,t){this.Ht=e,this.ps=t,this.docs=new zt(se.comparator),this.size=0}addEntry(e,t,n){const i=t.key,r=this.docs.get(i),s=r?r.size:0,o=this.ps(t);return this.docs=this.docs.insert(i,{document:t.clone(),size:o,readTime:n}),this.size+=o-s,this.Ht.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Ei.resolve(n?n.document.clone():ke.newInvalidDocument(t))}getEntries(e,t){let n=Jt();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.clone():ke.newInvalidDocument(e))}),Ei.resolve(n)}getDocumentsMatchingQuery(e,t,n){let i=Jt();const r=new se(t.path.child("")),s=this.docs.getIteratorFrom(r);for(;s.hasNext();){const{key:e,value:{document:r,readTime:o}}=s.getNext();if(!t.path.isPrefixOf(e.path))break;o.compareTo(n)<=0||st(t,r)&&(i=i.insert(r.key,r.clone()))}return Ei.resolve(i)}Ts(e,t){return Ei.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new cs(this)}getSize(e){return Ei.resolve(this.size)}}class cs extends Ir{constructor(e){super(),this.Se=e}applyChanges(e){const t=[];return this.changes.forEach((n,i)=>{i.document.isValidDocument()?t.push(this.Se.addEntry(e,i.document,this.getReadTime(n))):this.Se.removeEntry(n)}),Ei.waitFor(t)}getFromCache(e,t){return this.Se.getEntry(e,t)}getAllFromCache(e,t){return this.Se.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.persistence=e,this.Es=new Er(e=>Te(e),Se),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.Is=0,this.As=new rs,this.targetCount=0,this.Rs=hr.se()}forEachTarget(e,t){return this.Es.forEach((e,n)=>t(n)),Ei.resolve()}getLastRemoteSnapshotVersion(e){return Ei.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Ei.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),Ei.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Is&&(this.Is=t),Ei.resolve()}ce(e){this.Es.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Rs=new hr(t),this.highestTargetId=t),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,t){return this.ce(t),this.targetCount+=1,Ei.resolve()}updateTargetData(e,t){return this.ce(t),Ei.resolve()}removeTargetData(e,t){return this.Es.delete(t.target),this.As.cs(t.targetId),this.targetCount-=1,Ei.resolve()}removeTargets(e,t,n){let i=0;const r=[];return this.Es.forEach((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Es.delete(s),r.push(this.removeMatchingKeysForTargetId(e,o.targetId)),i++)}),Ei.waitFor(r).next(()=>i)}getTargetCount(e){return Ei.resolve(this.targetCount)}getTargetData(e,t){const n=this.Es.get(t)||null;return Ei.resolve(n)}addMatchingKeys(e,t,n){return this.As.ss(t,n),Ei.resolve()}removeMatchingKeys(e,t,n){this.As.os(t,n);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach(t=>{r.push(i.markPotentiallyOrphaned(e,t))}),Ei.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.As.cs(t),Ei.resolve()}getMatchingKeysForTargetId(e,t){const n=this.As.hs(t);return Ei.resolve(n)}containsKey(e,t){return Ei.resolve(this.As.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,t){this.bs={},this.Le=new D(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new us(this),this.Ht=new Ji,this.He=function(e,t){return new as(e,t)}(this.Ht,e=>this.referenceDelegate.Ps(e)),this.N=new $i(t),this.Je=new is(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let t=this.bs[e.toKey()];return t||(t=new os(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=t),t}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,t,n){p("MemoryPersistence","Starting transaction:",e);const i=new hs(this.Le.next());return this.referenceDelegate.vs(),n(i).next(e=>this.referenceDelegate.Vs(i).next(()=>e)).toPromise().then(e=>(i.raiseOnCommittedEvent(),e))}Ss(e,t){return Ei.or(Object.values(this.bs).map(n=>()=>n.containsKey(e,t)))}}class hs extends ki{constructor(e){super(),this.currentSequenceNumber=e}}class ds{constructor(e){this.persistence=e,this.Ds=new rs,this.Cs=null}static Ns(e){return new ds(e)}get xs(){if(this.Cs)return this.Cs;throw y()}addReference(e,t,n){return this.Ds.addReference(n,t),this.xs.delete(n.toString()),Ei.resolve()}removeReference(e,t,n){return this.Ds.removeReference(n,t),this.xs.add(n.toString()),Ei.resolve()}markPotentiallyOrphaned(e,t){return this.xs.add(t.toString()),Ei.resolve()}removeTarget(e,t){this.Ds.cs(t.targetId).forEach(e=>this.xs.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.xs.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}vs(){this.Cs=new Set}Vs(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ei.forEach(this.xs,n=>{const i=se.fromPath(n);return this.ks(e,i).next(e=>{e||t.removeEntry(i)})}).next(()=>(this.Cs=null,t.apply(e)))}updateLimboDocument(e,t){return this.ks(e,t).next(e=>{e?this.xs.delete(t.toString()):this.xs.add(t.toString())})}Ps(e){return 0}ks(e,t){return Ei.or([()=>Ei.resolve(this.Ds.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ss(e,t)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(e,t){return`firestore_clients_${e}_${t}`}function ps(e,t,n){let i=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(i+="_"+t.uid),i}function ms(e,t){return`firestore_targets_${e}_${t}`}class vs{constructor(e,t,n,i){this.user=e,this.batchId=t,this.state=n,this.error=i}static $s(e,t,n){const i=JSON.parse(n);let r,s="object"==typeof i&&-1!==["pending","acknowledged","rejected"].indexOf(i.state)&&(void 0===i.error||"object"==typeof i.error);return s&&i.error&&(s="string"==typeof i.error.message&&"string"==typeof i.error.code,s&&(r=new E(i.error.code,i.error.message))),s?new vs(e,t,i.state,r):(m("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class gs{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static $s(e,t){const n=JSON.parse(t);let i,r="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return r&&n.error&&(r="string"==typeof n.error.message&&"string"==typeof n.error.code,r&&(i=new E(n.error.code,n.error.message))),r?new gs(e,n.state,i):(m("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ys{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static $s(e,t){const n=JSON.parse(t);let i="object"==typeof n&&n.activeTargetIds instanceof Array,r=an();for(let s=0;i&&s<n.activeTargetIds.length;++s)i=re(n.activeTargetIds[s]),r=r.add(n.activeTargetIds[s]);return i?new ys(e,r):(m("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class _s{constructor(e,t){this.clientId=e,this.onlineState=t}static $s(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new _s(t.clientId,t.onlineState):(m("SharedClientState","Failed to parse online state: "+e),null)}}class ws{constructor(){this.activeTargetIds=an()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class bs{constructor(e,t,n,i,r){this.window=e,this.Oe=t,this.persistenceKey=n,this.Ls=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Bs=this.Us.bind(this),this.qs=new zt(R),this.started=!1,this.Ks=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=r,this.js=fs(this.persistenceKey,this.Ls),this.Qs=function(e){return"firestore_sequence_number_"+e}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.qs=this.qs.insert(this.Ls,new ws),this.Ws=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.Gs=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.zs=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.Hs=function(e){return"firestore_online_state_"+e}(this.persistenceKey),this.Js=function(e){return"firestore_bundle_loaded_"+e}(this.persistenceKey),this.window.addEventListener("storage",this.Bs)}static bt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.pn();for(const n of e){if(n===this.Ls)continue;const e=this.getItem(fs(this.persistenceKey,n));if(e){const t=ys.$s(n,e);t&&(this.qs=this.qs.insert(t.clientId,t))}}this.Ys();const t=this.storage.getItem(this.Hs);if(t){const e=this.Xs(t);e&&this.Zs(e)}for(const n of this.Ks)this.Us(n);this.Ks=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Qs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ti(this.qs)}isActiveQueryTarget(e){let t=!1;return this.qs.forEach((n,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.ei(e,"pending")}updateMutationState(e,t,n){this.ei(e,t,n),this.ni(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(ms(this.persistenceKey,e));if(n){const i=gs.$s(e,n);i&&(t=i.state)}}return this.si.Fs(e),this.Ys(),t}removeLocalQueryTarget(e){this.si.Ms(e),this.Ys()}isLocalQueryTarget(e){return this.si.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(ms(this.persistenceKey,e))}updateQueryState(e,t,n){this.ii(e,t,n)}handleUserChange(e,t,n){t.forEach(e=>{this.ni(e)}),this.currentUser=e,n.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.ri(e)}notifyBundleLoaded(){this.oi()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Bs),this.removeItem(this.js),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return p("SharedClientState","READ",e,t),t}setItem(e,t){p("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){p("SharedClientState","REMOVE",e),this.storage.removeItem(e)}Us(e){const t=e;if(t.storageArea===this.storage){if(p("SharedClientState","EVENT",t.key,t.newValue),t.key===this.js)return void m("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Oe.enqueueRetryable(async()=>{if(this.started){if(null!==t.key)if(this.Ws.test(t.key)){if(null==t.newValue){const e=this.ci(t.key);return this.ai(e,null)}{const e=this.ui(t.key,t.newValue);if(e)return this.ai(e.clientId,e)}}else if(this.Gs.test(t.key)){if(null!==t.newValue){const e=this.hi(t.key,t.newValue);if(e)return this.li(e)}}else if(this.zs.test(t.key)){if(null!==t.newValue){const e=this.fi(t.key,t.newValue);if(e)return this.di(e)}}else if(t.key===this.Hs){if(null!==t.newValue){const e=this.Xs(t.newValue);if(e)return this.Zs(e)}}else if(t.key===this.Qs){const e=function(e){let t=D.T;if(null!=e)try{const n=JSON.parse(e);_("number"==typeof n),t=n}catch(e){m("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==D.T&&this.sequenceNumberHandler(e)}else if(t.key===this.Js)return this.syncEngine.wi()}else this.Ks.push(t)})}}get si(){return this.qs.get(this.Ls)}Ys(){this.setItem(this.js,this.si.Os())}ei(e,t,n){const i=new vs(this.currentUser,e,t,n),r=ps(this.persistenceKey,this.currentUser,e);this.setItem(r,i.Os())}ni(e){const t=ps(this.persistenceKey,this.currentUser,e);this.removeItem(t)}ri(e){const t={clientId:this.Ls,onlineState:e};this.storage.setItem(this.Hs,JSON.stringify(t))}ii(e,t,n){const i=ms(this.persistenceKey,e),r=new gs(e,t,n);this.setItem(i,r.Os())}oi(){this.setItem(this.Js,"value-not-used")}ci(e){const t=this.Ws.exec(e);return t?t[1]:null}ui(e,t){const n=this.ci(e);return ys.$s(n,t)}hi(e,t){const n=this.Gs.exec(e),i=Number(n[1]),r=void 0!==n[2]?n[2]:null;return vs.$s(new u(r),i,t)}fi(e,t){const n=this.zs.exec(e),i=Number(n[1]);return gs.$s(i,t)}Xs(e){return _s.$s(e)}async li(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine._i(e.batchId,e.state,e.error);p("SharedClientState","Ignoring mutation for non-active user "+e.user.uid)}di(e){return this.syncEngine.mi(e.targetId,e.state,e.error)}ai(e,t){const n=t?this.qs.insert(e,t):this.qs.remove(e),i=this.ti(this.qs),r=this.ti(n),s=[],o=[];return r.forEach(e=>{i.has(e)||s.push(e)}),i.forEach(e=>{r.has(e)||o.push(e)}),this.syncEngine.gi(s,o).then(()=>{this.qs=n})}Zs(e){this.qs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ti(e){let t=an();return e.forEach((e,n)=>{t=t.unionWith(n.activeTargetIds)}),t}}class ks{constructor(){this.yi=new ws,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,t,n){this.pi[e]=t}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new ws,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{Ti(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.Fi=t+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,t,n,i){const r=this.Bi(e,t);p("RestConnection","Sending: ",r,n);const s={};return this.Ui(s,i),this.qi(e,r,s,n).then(e=>(p("RestConnection","Received: ",e),e),t=>{throw v("RestConnection",e+" failed with error: ",t,"url: ",r,"request:",n),t})}Ki(e,t,n,i){return this.Li(e,t,n,i)}Ui(e,t){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+l,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t)for(const n in t.authHeaders)t.authHeaders.hasOwnProperty(n)&&(e[n]=t.authHeaders[n])}Bi(e,t){const n=Ts[e];return`${this.Fi}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,t,n,i){return new Promise((r,s)=>{const o=new a["g"];o.listenOnce(a["c"].COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a["a"].NO_ERROR:const t=o.getResponseJson();p("Connection","XHR received:",JSON.stringify(t)),r(t);break;case a["a"].TIMEOUT:p("Connection",'RPC "'+e+'" timed out'),s(new E(k.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=o.getStatus();if(p("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(t)>=0?t:k.UNKNOWN}(e.status);s(new E(t,e.message))}else s(new E(k.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new E(k.UNAVAILABLE,"Connection failed."));break;default:y()}}finally{p("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);o.send(t,"POST",c,n,15)})}ji(e,t){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Object(a["h"])(),r=Object(a["i"])(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new a["d"]({})),this.Ui(s.initMessageHeaders,t),Object(o["s"])()||Object(o["u"])()||Object(o["o"])()||Object(o["q"])()||Object(o["w"])()||Object(o["n"])()||(s.httpHeadersOverwriteParam="$httpHeaders");const c=n.join("");p("Connection","Creating WebChannel: "+c,s);const u=i.createWebChannel(c,s);let l=!1,h=!1;const d=new Cs({vi:e=>{h?p("Connection","Not sending because WebChannel is closed:",e):(l||(p("Connection","Opening WebChannel transport."),u.open(),l=!0),p("Connection","WebChannel sending:",e),u.send(e))},Vi:()=>u.close()}),f=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return f(u,a["f"].EventType.OPEN,()=>{h||p("Connection","WebChannel transport opened.")}),f(u,a["f"].EventType.CLOSE,()=>{h||(h=!0,p("Connection","WebChannel transport closed"),d.$i())}),f(u,a["f"].EventType.ERROR,e=>{h||(h=!0,v("Connection","WebChannel transport errored:",e),d.$i(new E(k.UNAVAILABLE,"The operation could not be completed")))}),f(u,a["f"].EventType.MESSAGE,e=>{var t;if(!h){const n=e.data[0];_(!!n);const i=n,r=i.error||(null===(t=i[0])||void 0===t?void 0:t.error);if(r){p("Connection","WebChannel received error:",r);const e=r.status;let t=function(e){const t=Vt[e];if(void 0!==t)return Wt(t)}(e),n=r.message;void 0===t&&(t=k.INTERNAL,n="Unknown error status: "+e+" with message "+r.message),h=!0,d.$i(new E(t,n)),u.close()}else p("Connection","WebChannel received:",n),d.Oi(n)}}),f(r,a["b"].STAT_EVENT,e=>{e.stat===a["e"].PROXY?p("Connection","Detected buffering proxy"):e.stat===a["e"].NOPROXY&&p("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ki()},0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(){return"undefined"!=typeof window?window:null}function As(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(e){return new _n(e,!0)}class Ds{constructor(e,t,n=1e3,i=1.5,r=6e4){this.Oe=e,this.timerId=t,this.Qi=n,this.Wi=i,this.Gi=r,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const t=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),i=Math.max(0,t-n);i>0&&p("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.zi} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,i,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,t,n,i,r,s,o){this.Oe=e,this.er=n,this.nr=i,this.sr=r,this.credentialsProvider=s,this.listener=o,this.state=0,this.ir=0,this.rr=null,this.cr=null,this.stream=null,this.ar=new Ds(e,t)}ur(){return 1===this.state||5===this.state||this.hr()}hr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.lr()}async stop(){this.ur()&&await this.close(0)}dr(){this.state=0,this.ar.reset()}wr(){this.hr()&&null===this.rr&&(this.rr=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this._r()))}mr(e){this.gr(),this.stream.send(e)}async _r(){if(this.hr())return this.close(0)}gr(){this.rr&&(this.rr.cancel(),this.rr=null)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,t){this.gr(),this.yr(),this.ar.cancel(),this.ir++,4!==e?this.ar.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(m(t.toString()),m("Using maximum backoff delay to prevent overloading the backend."),this.ar.Yi()):t&&t.code===k.UNAUTHENTICATED&&3!==this.state&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.pr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(t)}pr(){}auth(){this.state=1;const e=this.Tr(this.ir),t=this.ir;this.credentialsProvider.getToken().then(e=>{this.ir===t&&this.Er(e)},t=>{e(()=>{const e=new E(k.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Ir(e)})})}Er(e){const t=this.Tr(this.ir);this.stream=this.Ar(e),this.stream.Si(()=>{t(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.nr,1e4,()=>(this.hr()&&(this.state=3),Promise.resolve())),this.listener.Si()))}),this.stream.Ci(e=>{t(()=>this.Ir(e))}),this.stream.onMessage(e=>{t(()=>this.onMessage(e))})}lr(){this.state=5,this.ar.Xi(async()=>{this.state=0,this.start()})}Ir(e){return p("PersistentStream","close with error: "+e),this.stream=null,this.close(4,e)}Tr(e){return t=>{this.Oe.enqueueAndForget(()=>this.ir===e?t():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ns extends Ls{constructor(e,t,n,i,r){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r),this.N=i}Ar(e){return this.sr.ji("Listen",e)}onMessage(e){this.ar.reset();const t=Mn(this.N,e),n=function(e){if(!("targetChange"in e))return $.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?$.min():t.readTime?En(t.readTime):$.min()}(e);return this.listener.Rr(t,n)}br(e){const t={};t.database=xn(this.N),t.addTarget=function(e,t){let n;const i=t.target;return n=Oe(i)?{documents:Bn(e,i)}:{query:Fn(e,i)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=bn(e,t.resumeToken):t.snapshotVersion.compareTo($.min())>0&&(n.readTime=wn(e,t.snapshotVersion.toTimestamp())),n}(this.N,e);const n=Vn(this.N,e);n&&(t.labels=n),this.mr(t)}Pr(e){const t={};t.database=xn(this.N),t.removeTarget=e,this.mr(t)}}class Rs extends Ls{constructor(e,t,n,i,r){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r),this.N=i,this.vr=!1}get Vr(){return this.vr}start(){this.vr=!1,this.lastStreamToken=void 0,super.start()}pr(){this.vr&&this.Sr([])}Ar(e){return this.sr.ji("Write",e)}onMessage(e){if(_(!!e.streamToken),this.lastStreamToken=e.streamToken,this.vr){this.ar.reset();const t=$n(e.writeResults,e.commitTime),n=En(e.commitTime);return this.listener.Dr(n,t)}return _(!e.writeResults||0===e.writeResults.length),this.vr=!0,this.listener.Cr()}Nr(){const e={};e.database=xn(this.N),this.mr(e)}Sr(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>Pn(this.N,e))};this.mr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms extends class{}{constructor(e,t,n){super(),this.credentials=e,this.sr=t,this.N=n,this.kr=!1}$r(){if(this.kr)throw new E(k.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,t,n){return this.$r(),this.credentials.getToken().then(i=>this.sr.Li(e,t,n,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===k.UNAUTHENTICATED&&this.credentials.invalidateToken(),e):new E(k.UNKNOWN,e.toString())})}Ki(e,t,n){return this.$r(),this.credentials.getToken().then(i=>this.sr.Ki(e,t,n,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===k.UNAUTHENTICATED&&this.credentials.invalidateToken(),e):new E(k.UNKNOWN,e.toString())})}terminate(){this.kr=!0}}class Ps{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Or=0,this.Fr=null,this.Mr=!0}Lr(){0===this.Or&&(this.Br("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.Ur("Backend didn't respond within 10 seconds."),this.Br("Offline"),Promise.resolve())))}qr(e){"Online"===this.state?this.Br("Unknown"):(this.Or++,this.Or>=1&&(this.Kr(),this.Ur("Connection failed 1 times. Most recent error: "+e.toString()),this.Br("Offline")))}set(e){this.Kr(),this.Or=0,"Online"===e&&(this.Mr=!1),this.Br(e)}Br(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Ur(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Mr?(m(t),this.Mr=!1):p("OnlineStateTracker",t)}Kr(){null!==this.Fr&&(this.Fr.cancel(),this.Fr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,t,n,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.jr=[],this.Qr=new Map,this.Wr=new Set,this.Gr=[],this.zr=r,this.zr.Ti(e=>{n.enqueueAndForget(async()=>{zs(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=b(e);t.Wr.add(4),await Bs(t),t.Hr.set("Unknown"),t.Wr.delete(4),await $s(t)}(this))})}),this.Hr=new Ps(n,i)}}async function $s(e){if(zs(e))for(const t of e.Gr)await t(!0)}async function Bs(e){for(const t of e.Gr)await t(!1)}function Fs(e,t){const n=b(e);n.Qr.has(t.targetId)||(n.Qr.set(t.targetId,t),Ws(n)?Hs(n):uo(n).hr()&&Vs(n,t))}function Us(e,t){const n=b(e),i=uo(n);n.Qr.delete(t),i.hr()&&qs(n,t),0===n.Qr.size&&(i.hr()?i.wr():zs(n)&&n.Hr.set("Unknown"))}function Vs(e,t){e.Jr.Y(t.targetId),uo(e).br(t)}function qs(e,t){e.Jr.Y(t),uo(e).Pr(t)}function Hs(e){e.Jr=new pn({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Tt:t=>e.Qr.get(t)||null}),uo(e).start(),e.Hr.Lr()}function Ws(e){return zs(e)&&!uo(e).ur()&&e.Qr.size>0}function zs(e){return 0===b(e).Wr.size}function Ks(e){e.Jr=void 0}async function Gs(e){e.Qr.forEach((t,n)=>{Vs(e,t)})}async function Qs(e,t){Ks(e),Ws(e)?(e.Hr.qr(t),Hs(e)):e.Hr.set("Unknown")}async function Ys(e,t,n){if(e.Hr.set("Online"),t instanceof dn&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const i of t.targetIds)e.Qr.has(i)&&(await e.remoteSyncer.rejectListen(i,n),e.Qr.delete(i),e.Jr.removeTarget(i))}(e,t)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Xs(e,n)}else if(t instanceof ln?e.Jr.rt(t):t instanceof hn?e.Jr.ft(t):e.Jr.at(t),!n.isEqual($.min()))try{const t=await Wr(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Jr._t(t);return n.targetChanges.forEach((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const r=e.Qr.get(i);r&&e.Qr.set(i,r.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach(t=>{const n=e.Qr.get(t);if(!n)return;e.Qr.set(t,n.withResumeToken(G.EMPTY_BYTE_STRING,n.snapshotVersion)),qs(e,t);const i=new ji(n.target,t,1,n.sequenceNumber);Vs(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){p("RemoteStore","Failed to raise snapshot:",t),await Xs(e,t)}}async function Xs(e,t,n){if(!Oi(t))throw t;e.Wr.add(1),await Bs(e),e.Hr.set("Offline"),n||(n=()=>Wr(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),e.Wr.delete(1),await $s(e)})}function Js(e,t){return t().catch(n=>Xs(e,n,t))}async function Zs(e){const t=b(e),n=lo(t);let i=t.jr.length>0?t.jr[t.jr.length-1].batchId:-1;for(;eo(t);)try{const e=await Gr(t.localStore,i);if(null===e){0===t.jr.length&&n.wr();break}i=e.batchId,to(t,e)}catch(e){await Xs(t,e)}no(t)&&io(t)}function eo(e){return zs(e)&&e.jr.length<10}function to(e,t){e.jr.push(t);const n=lo(e);n.hr()&&n.Vr&&n.Sr(t.mutations)}function no(e){return zs(e)&&!lo(e).ur()&&e.jr.length>0}function io(e){lo(e).start()}async function ro(e){lo(e).Nr()}async function so(e){const t=lo(e);for(const n of e.jr)t.Sr(n.mutations)}async function oo(e,t,n){const i=e.jr.shift(),r=Pi.from(i,t,n);await Js(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await Zs(e)}async function ao(e,t){t&&lo(e).Vr&&await async function(e,t){if(n=t.code,Ht(n)&&n!==k.ABORTED){const n=e.jr.shift();lo(e).dr(),await Js(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await Zs(e)}var n}(e,t),no(e)&&io(e)}async function co(e,t){const n=b(e);t?(n.Wr.delete(2),await $s(n)):t||(n.Wr.add(2),await Bs(n),n.Hr.set("Unknown"))}function uo(e){return e.Yr||(e.Yr=function(e,t,n){const i=b(e);return i.$r(),new Ns(t,i.sr,i.credentials,i.N,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Si:Gs.bind(null,e),Ci:Qs.bind(null,e),Rr:Ys.bind(null,e)}),e.Gr.push(async t=>{t?(e.Yr.dr(),Ws(e)?Hs(e):e.Hr.set("Unknown")):(await e.Yr.stop(),Ks(e))})),e.Yr}function lo(e){return e.Xr||(e.Xr=function(e,t,n){const i=b(e);return i.$r(),new Rs(t,i.sr,i.credentials,i.N,n)}(e.datastore,e.asyncQueue,{Si:ro.bind(null,e),Ci:ao.bind(null,e),Cr:so.bind(null,e),Dr:oo.bind(null,e)}),e.Gr.push(async t=>{t?(e.Xr.dr(),await Zs(e)):(await e.Xr.stop(),e.jr.length>0&&(p("RemoteStore",`Stopping write stream with ${e.jr.length} pending writes`),e.jr=[]))})),e.Xr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ho{constructor(e,t,n,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new I,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,i,r){const s=Date.now()+n,o=new ho(e,t,s,i,r);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new E(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fo(e,t){if(m("AsyncQueue",`${t}: ${e}`),Oi(e))return new E(k.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e){this.comparator=e?(t,n)=>e(t,n)||se.comparator(t.key,n.key):(e,t)=>se.comparator(e.key,t.key),this.keyedMap=en(),this.sortedSet=new zt(this.comparator)}static emptySet(e){return new po(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof po))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(!e.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new po;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(){this.Zr=new zt(se.comparator)}track(e){const t=e.doc.key,n=this.Zr.get(t);n?0!==e.type&&3===n.type?this.Zr=this.Zr.insert(t,e):3===e.type&&1!==n.type?this.Zr=this.Zr.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Zr=this.Zr.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Zr=this.Zr.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Zr=this.Zr.remove(t):1===e.type&&2===n.type?this.Zr=this.Zr.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Zr=this.Zr.insert(t,{type:2,doc:e.doc}):y():this.Zr=this.Zr.insert(t,e)}eo(){const e=[];return this.Zr.inorderTraversal((t,n)=>{e.push(n)}),e}}class vo{constructor(e,t,n,i,r,s,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,i){const r=[];return t.forEach(e=>{r.push({type:0,doc:e})}),new vo(e,t,po.emptySet(t),r,n,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&nt(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(){this.no=void 0,this.listeners=[]}}class yo{constructor(){this.queries=new Er(e=>it(e),nt),this.onlineState="Unknown",this.so=new Set}}async function _o(e,t){const n=b(e),i=t.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new go),r)try{s.no=await n.onListen(i)}catch(e){const n=fo(e,`Initialization of query '${rt(t.query)}' failed`);return void t.onError(n)}n.queries.set(i,s),s.listeners.push(t),t.io(n.onlineState),s.no&&t.ro(s.no)&&Eo(n)}async function wo(e,t){const n=b(e),i=t.query;let r=!1;const s=n.queries.get(i);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),r=0===s.listeners.length)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function bo(e,t){const n=b(e);let i=!1;for(const r of t){const e=r.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.ro(r)&&(i=!0);t.no=r}}i&&Eo(n)}function ko(e,t,n){const i=b(e),r=i.queries.get(t);if(r)for(const s of r.listeners)s.onError(n);i.queries.delete(t)}function Eo(e){e.so.forEach(e=>{e.next()})}class Io{constructor(e,t,n){this.query=e,this.oo=t,this.co=!1,this.ao=null,this.onlineState="Unknown",this.options=n||{}}ro(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new vo(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.co?this.uo(e)&&(this.oo.next(e),t=!0):this.ho(e,this.onlineState)&&(this.lo(e),t=!0),this.ao=e,t}onError(e){this.oo.error(e)}io(e){this.onlineState=e;let t=!1;return this.ao&&!this.co&&this.ho(this.ao,e)&&(this.lo(this.ao),t=!0),t}ho(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.fo||!n)&&(!e.docs.isEmpty()||"Offline"===t)}uo(e){if(e.docChanges.length>0)return!0;const t=this.ao&&this.ao.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}lo(e){e=vo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.oo.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,t){this.payload=e,this.byteLength=t}wo(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e){this.N=e}zn(e){return Sn(this.N,e)}Hn(e){return e.metadata.exists?Nn(this.N,e.document,!1):ke.newNoDocument(this.zn(e.metadata.name),this.Jn(e.metadata.readTime))}Jn(e){return En(e)}}class So{constructor(e,t,n){this._o=e,this.localStore=t,this.N=n,this.queries=[],this.documents=[],this.progress=Oo(e)}mo(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;return e.payload.namedQuery?this.queries.push(e.payload.namedQuery):e.payload.documentMetadata?(this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t):e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t),t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}yo(e){const t=new Map,n=new Co(this.N);for(const i of e)if(i.metadata.queries){const e=n.zn(i.metadata.name);for(const n of i.metadata.queries){const i=(t.get(n)||sn()).add(e);t.set(n,i)}}return t}async complete(){const e=await ts(this.localStore,new Co(this.N),this.documents,this._o.id),t=this.yo(this.documents);for(const n of this.queries)await ns(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",new jr(Object.assign({},this.progress),e)}}function Oo(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this.key=e}}class xo{constructor(e){this.key=e}}class Do{constructor(e,t){this.query=e,this.po=t,this.To=null,this.current=!1,this.Eo=sn(),this.mutatedKeys=sn(),this.Io=ot(e),this.Ao=new po(this.Io)}get Ro(){return this.po}bo(e,t){const n=t?t.Po:new mo,i=t?t.Ao:this.Ao;let r=t?t.mutatedKeys:this.mutatedKeys,s=i,o=!1;const a=Ge(this.query)&&i.size===this.query.limit?i.last():null,c=Qe(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((e,t)=>{const u=i.get(e),l=st(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.vo(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Io(l,a)>0||c&&this.Io(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),r=d?r.add(e):r.delete(e)):(s=s.delete(e),r=r.delete(e)))}),Ge(this.query)||Qe(this.query))for(;s.size>this.query.limit;){const e=Ge(this.query)?s.last():s.first();s=s.delete(e.key),r=r.delete(e.key),n.track({type:1,doc:e})}return{Ao:s,Po:n,Ln:o,mutatedKeys:r}}vo(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const i=this.Ao;this.Ao=e.Ao,this.mutatedKeys=e.mutatedKeys;const r=e.Po.eo();r.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return y()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Io(e.doc,t.doc)),this.Vo(n);const s=t?this.So():[],o=0===this.Eo.size&&this.current?1:0,a=o!==this.To;return this.To=o,0!==r.length||a?{snapshot:new vo(this.query,e.Ao,i,r,e.mutatedKeys,0===o,a,!1),Do:s}:{Do:s}}io(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ao:this.Ao,Po:new mo,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{Do:[]}}Co(e){return!this.po.has(e)&&!!this.Ao.has(e)&&!this.Ao.get(e).hasLocalMutations}Vo(e){e&&(e.addedDocuments.forEach(e=>this.po=this.po.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.po=this.po.delete(e)),this.current=e.current)}So(){if(!this.current)return[];const e=this.Eo;this.Eo=sn(),this.Ao.forEach(e=>{this.Co(e.key)&&(this.Eo=this.Eo.add(e.key))});const t=[];return e.forEach(e=>{this.Eo.has(e)||t.push(new xo(e))}),this.Eo.forEach(n=>{e.has(n)||t.push(new Ao(n))}),t}No(e){this.po=e.Gn,this.Eo=sn();const t=this.bo(e.documents);return this.applyChanges(t,!0)}xo(){return vo.fromInitialDocuments(this.query,this.Ao,this.mutatedKeys,0===this.To)}}class Lo{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class No{constructor(e){this.key=e,this.ko=!1}}class Ro{constructor(e,t,n,i,r,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.$o={},this.Oo=new Er(e=>it(e),nt),this.Fo=new Map,this.Mo=new Set,this.Lo=new zt(se.comparator),this.Bo=new Map,this.Uo=new rs,this.qo={},this.Ko=new Map,this.jo=hr.ie(),this.onlineState="Unknown",this.Qo=void 0}get isPrimaryClient(){return!0===this.Qo}}async function Mo(e,t){const n=la(e);let i,r;const s=n.Oo.get(t);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.xo();else{const e=await Qr(n.localStore,et(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);i=e.targetId,r=await Po(n,t,i,"current"===s),n.isPrimaryClient&&Fs(n.remoteStore,e)}return r}async function Po(e,t,n,i){e.Wo=(t,n,i)=>async function(e,t,n,i){let r=t.view.bo(n);r.Ln&&(r=await Xr(e.localStore,t.query,!1).then(({documents:e})=>t.view.bo(e,r)));const s=i&&i.targetChanges.get(t.targetId),o=t.view.applyChanges(r,e.isPrimaryClient,s);return Qo(e,t.targetId,o.Do),o.snapshot}(e,t,n,i);const r=await Xr(e.localStore,t,!0),s=new Do(t,r.Gn),o=s.bo(r.documents),a=un.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==e.onlineState),c=s.applyChanges(o,e.isPrimaryClient,a);Qo(e,n,c.Do);const u=new Lo(t,n,s);return e.Oo.set(t,u),e.Fo.has(n)?e.Fo.get(n).push(t):e.Fo.set(n,[t]),c.snapshot}async function jo(e,t){const n=b(e),i=n.Oo.get(t),r=n.Fo.get(i.targetId);if(r.length>1)return n.Fo.set(i.targetId,r.filter(e=>!nt(e,t))),void n.Oo.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Yr(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),Us(n.remoteStore,i.targetId),Ko(n,i.targetId)}).catch(vr)):(Ko(n,i.targetId),await Yr(n.localStore,i.targetId,!0))}async function $o(e,t,n){const i=ha(e);try{const e=await function(e,t){const n=b(e),i=j.now(),r=t.reduce((e,t)=>e.add(t.key),sn());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>n.Qn.Pn(e,r).next(r=>{s=r;const o=[];for(const e of t){const t=Dt(e,s.get(e.key));null!=t&&o.push(new Mt(e.key,t,be(t.value.mapValue),Ct.exists(!0)))}return n.In.addMutationBatch(e,i,o,t)})).then(e=>(e.applyToLocalDocumentSet(s),{batchId:e.batchId,changes:s}))}(i.localStore,t);i.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let i=e.qo[e.currentUser.toKey()];i||(i=new zt(R)),i=i.insert(t,n),e.qo[e.currentUser.toKey()]=i}(i,e.batchId,n),await Jo(i,e.changes),await Zs(i.remoteStore)}catch(e){const t=fo(e,"Failed to persist write");n.reject(t)}}async function Bo(e,t){const n=b(e);try{const e=await zr(n.localStore,t);t.targetChanges.forEach((e,t)=>{const i=n.Bo.get(t);i&&(_(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?i.ko=!0:e.modifiedDocuments.size>0?_(i.ko):e.removedDocuments.size>0&&(_(i.ko),i.ko=!1))}),await Jo(n,e,t)}catch(e){await vr(e)}}function Fo(e,t,n){const i=b(e);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const e=[];i.Oo.forEach((n,i)=>{const r=i.view.io(t);r.snapshot&&e.push(r.snapshot)}),function(e,t){const n=b(e);n.onlineState=t;let i=!1;n.queries.forEach((e,n)=>{for(const r of n.listeners)r.io(t)&&(i=!0)}),i&&Eo(n)}(i.eventManager,t),e.length&&i.$o.Rr(e),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function Uo(e,t,n){const i=b(e);i.sharedClientState.updateQueryState(t,"rejected",n);const r=i.Bo.get(t),s=r&&r.key;if(s){let e=new zt(se.comparator);e=e.insert(s,ke.newNoDocument(s,$.min()));const n=sn().add(s),r=new cn($.min(),new Map,new Qt(R),e,n);await Bo(i,r),i.Lo=i.Lo.remove(s),i.Bo.delete(t),Xo(i)}else await Yr(i.localStore,t,!1).then(()=>Ko(i,t,n)).catch(vr)}async function Vo(e,t){const n=b(e),i=t.batch.batchId;try{const e=await Hr(n.localStore,t);zo(n,i,null),Wo(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Jo(n,e)}catch(e){await vr(e)}}async function qo(e,t,n){const i=b(e);try{const e=await function(e,t){const n=b(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let i;return n.In.lookupMutationBatch(e,t).next(t=>(_(null!==t),i=t.keys(),n.In.removeMutationBatch(e,t))).next(()=>n.In.performConsistencyCheck(e)).next(()=>n.Qn.Pn(e,i))})}(i.localStore,t);zo(i,t,n),Wo(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await Jo(i,e)}catch(n){await vr(n)}}async function Ho(e,t){const n=b(e);zs(n.remoteStore)||p("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=b(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",e=>t.In.getHighestUnacknowledgedBatchId(e))}(n.localStore);if(-1===e)return void t.resolve();const i=n.Ko.get(e)||[];i.push(t),n.Ko.set(e,i)}catch(e){const n=fo(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function Wo(e,t){(e.Ko.get(t)||[]).forEach(e=>{e.resolve()}),e.Ko.delete(t)}function zo(e,t,n){const i=b(e);let r=i.qo[i.currentUser.toKey()];if(r){const e=r.get(t);e&&(n?e.reject(n):e.resolve(),r=r.remove(t)),i.qo[i.currentUser.toKey()]=r}}function Ko(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e.Fo.get(t))e.Oo.delete(i),n&&e.$o.Go(i,n);e.Fo.delete(t),e.isPrimaryClient&&e.Uo.cs(t).forEach(t=>{e.Uo.containsKey(t)||Go(e,t)})}function Go(e,t){e.Mo.delete(t.path.canonicalString());const n=e.Lo.get(t);null!==n&&(Us(e.remoteStore,n),e.Lo=e.Lo.remove(t),e.Bo.delete(n),Xo(e))}function Qo(e,t,n){for(const i of n)i instanceof Ao?(e.Uo.addReference(i.key,t),Yo(e,i)):i instanceof xo?(p("SyncEngine","Document no longer in limbo: "+i.key),e.Uo.removeReference(i.key,t),e.Uo.containsKey(i.key)||Go(e,i.key)):y()}function Yo(e,t){const n=t.key,i=n.path.canonicalString();e.Lo.get(n)||e.Mo.has(i)||(p("SyncEngine","New document in limbo: "+n),e.Mo.add(i),Xo(e))}function Xo(e){for(;e.Mo.size>0&&e.Lo.size<e.maxConcurrentLimboResolutions;){const t=e.Mo.values().next().value;e.Mo.delete(t);const n=new se(q.fromString(t)),i=e.jo.next();e.Bo.set(i,new No(n)),e.Lo=e.Lo.insert(n,i),Fs(e.remoteStore,new ji(et(Ke(n.path)),i,2,D.T))}}async function Jo(e,t,n){const i=b(e),r=[],s=[],o=[];i.Oo.isEmpty()||(i.Oo.forEach((e,a)=>{o.push(i.Wo(a,t,n).then(e=>{if(e){i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),r.push(e);const t=Br.kn(a.targetId,e);s.push(t)}}))}),await Promise.all(o),i.$o.Rr(r),await async function(e,t){const n=b(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>Ei.forEach(t,t=>Ei.forEach(t.Nn,i=>n.persistence.referenceDelegate.addReference(e,t.targetId,i)).next(()=>Ei.forEach(t.xn,i=>n.persistence.referenceDelegate.removeReference(e,t.targetId,i)))))}catch(e){if(!Oi(e))throw e;p("LocalStore","Failed to update sequence numbers: "+e)}for(const i of t){const e=i.targetId;if(!i.fromCache){const t=n.Un.get(e),i=t.snapshotVersion,r=t.withLastLimboFreeSnapshotVersion(i);n.Un=n.Un.insert(e,r)}}}(i.localStore,s))}async function Zo(e,t){const n=b(e);if(!n.currentUser.isEqual(t)){p("SyncEngine","User change. New user:",t.toKey());const e=await qr(n.localStore,t);n.currentUser=t,function(e,t){e.Ko.forEach(e=>{e.forEach(e=>{e.reject(new E(k.CANCELLED,t))})}),e.Ko.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Jo(n,e.Wn)}}function ea(e,t){const n=b(e),i=n.Bo.get(t);if(i&&i.ko)return sn().add(i.key);{let e=sn();const i=n.Fo.get(t);if(!i)return e;for(const t of i){const i=n.Oo.get(t);e=e.unionWith(i.view.Ro)}return e}}async function ta(e,t){const n=b(e),i=await Xr(n.localStore,t.query,!0),r=t.view.No(i);return n.isPrimaryClient&&Qo(n,t.targetId,r.Do),r}async function na(e){const t=b(e);return Zr(t.localStore).then(e=>Jo(t,e))}async function ia(e,t,n,i){const r=b(e),s=await function(e,t){const n=b(e),i=b(n.In);return n.persistence.runTransaction("Lookup mutation documents","readonly",e=>i.Xt(e,t).next(t=>t?n.Qn.Pn(e,t):Ei.resolve(null)))}(r.localStore,t);null!==s?("pending"===n?await Zs(r.remoteStore):"acknowledged"===n||"rejected"===n?(zo(r,t,i||null),Wo(r,t),function(e,t){b(b(e).In).te(t)}(r.localStore,t)):y(),await Jo(r,s)):p("SyncEngine","Cannot apply mutation batch with id: "+t)}async function ra(e,t){const n=b(e);if(la(n),ha(n),!0===t&&!0!==n.Qo){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await sa(n,e.toArray());n.Qo=!0,await co(n.remoteStore,!0);for(const i of t)Fs(n.remoteStore,i)}else if(!1===t&&!1!==n.Qo){const e=[];let t=Promise.resolve();n.Fo.forEach((i,r)=>{n.sharedClientState.isLocalQueryTarget(r)?e.push(r):t=t.then(()=>(Ko(n,r),Yr(n.localStore,r,!0))),Us(n.remoteStore,r)}),await t,await sa(n,e),function(e){const t=b(e);t.Bo.forEach((e,n)=>{Us(t.remoteStore,n)}),t.Uo.us(),t.Bo=new Map,t.Lo=new zt(se.comparator)}(n),n.Qo=!1,await co(n.remoteStore,!1)}}async function sa(e,t,n){const i=b(e),r=[],s=[];for(const o of t){let e;const t=i.Fo.get(o);if(t&&0!==t.length){e=await Qr(i.localStore,et(t[0]));for(const e of t){const t=i.Oo.get(e),n=await ta(i,t);n.snapshot&&s.push(n.snapshot)}}else{const t=await Jr(i.localStore,o);e=await Qr(i.localStore,t),await Po(i,oa(t),o,!1)}r.push(e)}return i.$o.Rr(s),r}function oa(e){return ze(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function aa(e){const t=b(e);return b(b(t.localStore).persistence).pn()}async function ca(e,t,n,i){const r=b(e);if(r.Qo)p("SyncEngine","Ignoring unexpected query state notification.");else if(r.Fo.has(t))switch(n){case"current":case"not-current":{const e=await Zr(r.localStore),i=cn.createSynthesizedRemoteEventForCurrentChange(t,"current"===n);await Jo(r,e,i);break}case"rejected":await Yr(r.localStore,t,!0),Ko(r,t,i);break;default:y()}}async function ua(e,t,n){const i=la(e);if(i.Qo){for(const e of t){if(i.Fo.has(e)){p("SyncEngine","Adding an already active target "+e);continue}const t=await Jr(i.localStore,e),n=await Qr(i.localStore,t);await Po(i,oa(t),n.targetId,!1),Fs(i.remoteStore,n)}for(const e of n)i.Fo.has(e)&&await Yr(i.localStore,e,!1).then(()=>{Us(i.remoteStore,e),Ko(i,e)}).catch(vr)}}function la(e){const t=b(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Bo.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ea.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Uo.bind(null,t),t.$o.Rr=bo.bind(null,t.eventManager),t.$o.Go=ko.bind(null,t.eventManager),t}function ha(e){const t=b(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Vo.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=qo.bind(null,t),t}function da(e,t,n){const i=b(e);(async function(e,t,n){try{const i=await t.getMetadata();if(await function(e,t){const n=b(e),i=En(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",e=>n.Je.getBundleMetadata(e,t.id)).then(e=>!!e&&e.createTime.compareTo(i)>=0)}(e.localStore,i))return await t.close(),void n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(i));n._updateProgress(Oo(i));const r=new So(i,e.localStore,t.N);let s=await t.zo();for(;s;){const e=await r.mo(s);e&&n._updateProgress(e),s=await t.zo()}const o=await r.complete();await Jo(e,o.En,void 0),await function(e,t){const n=b(e);return n.persistence.runTransaction("Save bundle","readwrite",e=>n.Je.saveBundleMetadata(e,t))}(e.localStore,i),n._completeWith(o.progress)}catch(e){v("SyncEngine","Loading bundle failed with "+e),n._failWith(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(i,t,n).then(()=>{i.sharedClientState.notifyBundleLoaded()})}class fa{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=xs(e.databaseInfo.databaseId),this.sharedClientState=this.Ho(e),this.persistence=this.Jo(e),await this.persistence.start(),this.gcScheduler=this.Yo(e),this.localStore=this.Xo(e)}Yo(e){return null}Xo(e){return Vr(this.persistence,new Fr,e.initialUser,this.N)}Jo(e){return new ls(ds.Ns,this.N)}Ho(e){return new ks}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class pa extends fa{constructor(e,t,n){super(),this.Zo=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await es(this.localStore),await this.Zo.initialize(this,e),await ha(this.Zo.syncEngine),await Zs(this.Zo.remoteStore),await this.persistence.nn(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Xo(e){return Vr(this.persistence,new Fr,e.initialUser,this.N)}Yo(e){const t=this.persistence.referenceDelegate.garbageCollector;return new _r(t,e.asyncQueue)}Jo(e){const t=Pr(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?ir.withCacheSize(this.cacheSizeBytes):ir.DEFAULT;return new Nr(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Os(),As(),this.N,this.sharedClientState,!!this.forceOwnership)}Ho(e){return new ks}}class ma extends pa{constructor(e,t){super(e,t,!1),this.Zo=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Zo.syncEngine;this.sharedClientState instanceof bs&&(this.sharedClientState.syncEngine={_i:ia.bind(null,t),mi:ca.bind(null,t),gi:ua.bind(null,t),pn:aa.bind(null,t),wi:na.bind(null,t)},await this.sharedClientState.start()),await this.persistence.nn(async e=>{await ra(this.Zo.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):e||this.gcScheduler.stop())})}Ho(e){const t=Os();if(!bs.bt(t))throw new E(k.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Pr(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new bs(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class va{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Fo(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Zo.bind(null,this.syncEngine),await co(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new yo}createDatastore(e){const t=xs(e.databaseInfo.databaseId),n=(i=e.databaseInfo,new Ss(i));var i;return function(e,t,n){return new Ms(e,t,n)}(e.credentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,i=e.asyncQueue,r=e=>Fo(this.syncEngine,e,0),s=Is.bt()?new Is:new Es,new js(t,n,i,r,s);var t,n,i,r,s}createSyncEngine(e,t){return function(e,t,n,i,r,s,o){const a=new Ro(e,t,n,i,r,s);return o&&(a.Qo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=b(e);p("RemoteStore","RemoteStore shutting down."),t.Wr.add(5),await Bs(t),t.zr.shutdown(),t.Hr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const i={value:e.slice(n,n+t),done:!1};return n+=t,i}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.tc(this.observer.next,e)}error(e){this.observer.error?this.tc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}ec(){this.muted=!0}tc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,t){this.nc=e,this.N=t,this.metadata=new I,this.buffer=new Uint8Array,this.sc=new TextDecoder("utf-8"),this.ic().then(e=>{e&&e.wo()?this.metadata.resolve(e.payload.metadata):this.metadata.reject(new Error("The first element of the bundle is not a metadata, it is\n             "+JSON.stringify(null==e?void 0:e.payload)))},e=>this.metadata.reject(e))}close(){return this.nc.cancel()}async getMetadata(){return this.metadata.promise}async zo(){return await this.getMetadata(),this.ic()}async ic(){const e=await this.rc();if(null===e)return null;const t=this.sc.decode(e),n=Number(t);isNaN(n)&&this.oc(`length string (${t}) is not valid number`);const i=await this.cc(n);return new To(JSON.parse(i),e.length+n)}ac(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async rc(){for(;this.ac()<0;)if(await this.uc())break;if(0===this.buffer.length)return null;const e=this.ac();e<0&&this.oc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async cc(e){for(;this.buffer.length<e;)await this.uc()&&this.oc("Reached the end of bundle when more is expected.");const t=this.sc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}oc(e){throw this.nc.cancel(),new Error("Invalid bundle format: "+e)}async uc(){const e=await this.nc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new E(k.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=b(e),i=xn(n.N)+"/documents",r={documents:t.map(e=>Cn(n.N,e))},s=await n.Ki("BatchGetDocuments",i,r),o=new Map;s.forEach(e=>{const t=Rn(n.N,e);o.set(t.key.toString(),t)});const a=[];return t.forEach(e=>{const t=o.get(e.toString());_(!!t),a.push(t)}),a}(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new Bt(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{const n=se.fromPath(t);this.mutations.push(new Ft(n,this.precondition(n)))}),await async function(e,t){const n=b(e),i=xn(n.N)+"/documents",r={writes:t.map(e=>Pn(n.N,e))};await n.Li("Commit",i,r)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw y();t=$.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new E(k.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?Ct.updateTime(t):Ct.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual($.min()))throw new E(k.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ct.updateTime(t)}return Ct.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,t,n,i){this.asyncQueue=e,this.datastore=t,this.updateFunction=n,this.deferred=i,this.hc=5,this.ar=new Ds(this.asyncQueue,"transaction_retry")}run(){this.hc-=1,this.lc()}lc(){this.ar.Xi(async()=>{const e=new wa(this.datastore),t=this.fc(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.dc(e)}))}).catch(e=>{this.dc(e)})})}fc(e){try{const t=this.updateFunction(e);return!ne(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}dc(e){this.hc>0&&this.wc(e)?(this.hc-=1,this.asyncQueue.enqueueAndForget(()=>(this.lc(),Promise.resolve()))):this.deferred.reject(e)}wc(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||!Ht(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,t,n){this.credentials=e,this.asyncQueue=t,this.databaseInfo=n,this.user=u.UNAUTHENTICATED,this.clientId=N.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(t,async e=>{p("FirestoreClient","Received user=",e.uid),await this.credentialListener(e),this.user=e})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new I;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(t){const n=fo(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Ea(e,t){e.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener(async e=>{i.isEqual(e)||(await qr(t.localStore,e),i=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function Ia(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Ta(e);p("FirestoreClient","Initializing OnlineComponentProvider");const i=await e.getConfiguration();await t.initialize(n,i),e.setCredentialChangeListener(e=>async function(e,t){const n=b(e);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const i=zs(n);n.Wr.add(3),await Bs(n),i&&n.Hr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Wr.delete(3),await $s(n)}(t.remoteStore,e)),e.onlineComponents=t}async function Ta(e){return e.offlineComponents||(p("FirestoreClient","Using default OfflineComponentProvider"),await Ea(e,new fa)),e.offlineComponents}async function Ca(e){return e.onlineComponents||(p("FirestoreClient","Using default OnlineComponentProvider"),await Ia(e,new va)),e.onlineComponents}function Sa(e){return Ta(e).then(e=>e.persistence)}function Oa(e){return Ta(e).then(e=>e.localStore)}function Aa(e){return Ca(e).then(e=>e.remoteStore)}function xa(e){return Ca(e).then(e=>e.syncEngine)}async function Da(e){const t=await Ca(e),n=t.eventManager;return n.onListen=Mo.bind(null,t.syncEngine),n.onUnlisten=jo.bind(null,t.syncEngine),n}function La(e){return e.asyncQueue.enqueue(async()=>{const t=await Sa(e),n=await Aa(e);return t.setNetworkEnabled(!0),function(e){const t=b(e);return t.Wr.delete(0),$s(t)}(n)})}function Na(e){return e.asyncQueue.enqueue(async()=>{const t=await Sa(e),n=await Aa(e);return t.setNetworkEnabled(!1),async function(e){const t=b(e);t.Wr.add(0),await Bs(t),t.Hr.set("Offline")}(n)})}function Ra(e,t){const n=new I;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){try{const i=await function(e,t){const n=b(e);return n.persistence.runTransaction("read document","readonly",e=>n.Qn.An(e,t))}(e,t);i.isFoundDocument()?n.resolve(i):i.isNoDocument()?n.resolve(null):n.reject(new E(k.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const i=fo(e,`Failed to get document '${t} from cache`);n.reject(i)}}(await Oa(e),t,n)),n.promise}function Ma(e,t,n={}){const i=new I;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,i,r){const s=new ya({next:s=>{t.enqueueAndForget(()=>wo(e,o));const a=s.docs.has(n);!a&&s.fromCache?r.reject(new E(k.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&i&&"server"===i.source?r.reject(new E(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):r.resolve(s)},error:e=>r.reject(e)}),o=new Io(Ke(n.path),s,{includeMetadataChanges:!0,fo:!0});return _o(e,o)}(await Da(e),e.asyncQueue,t,n,i)),i.promise}function Pa(e,t){const n=new I;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){try{const i=await Xr(e,t,!0),r=new Do(t,i.Gn),s=r.bo(i.documents),o=r.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const i=fo(e,`Failed to execute query '${t} against cache`);n.reject(i)}}(await Oa(e),t,n)),n.promise}function ja(e,t,n={}){const i=new I;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,i,r){const s=new ya({next:n=>{t.enqueueAndForget(()=>wo(e,o)),n.fromCache&&"server"===i.source?r.reject(new E(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:e=>r.reject(e)}),o=new Io(n,s,{includeMetadataChanges:!0,fo:!0});return _o(e,o)}(await Da(e),e.asyncQueue,t,n,i)),i.promise}function $a(e,t){const n=new ya(t);return e.asyncQueue.enqueueAndForget(async()=>function(e,t){b(e).so.add(t),t.next()}(await Da(e),n)),()=>{n.ec(),e.asyncQueue.enqueueAndForget(async()=>function(e,t){b(e).so.delete(t)}(await Da(e),n))}}function Ba(e,t){const n=new I;return e.asyncQueue.enqueueAndForget(async()=>{const i=await function(e){return Ca(e).then(e=>e.datastore)}(e);new ba(e.asyncQueue,i,t,n).run()}),n.promise}function Fa(e,t,n,i){const r=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,function(e,t){return new _a(e,t)}(function(e,t){if(e instanceof Uint8Array)return ga(e,t);if(e instanceof ArrayBuffer)return ga(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,xs(t));e.asyncQueue.enqueueAndForget(async()=>{da(await xa(e),r,i)})}function Ua(e,t){return e.asyncQueue.enqueue(async()=>function(e,t){const n=b(e);return n.persistence.runTransaction("Get named query","readonly",e=>n.Je.getNamedQuery(e,t))}(await Oa(e),t))}class Va{constructor(e,t,n,i,r,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class qa{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof qa&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(e,t,n){if(!n)throw new E(k.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function za(e,t,n,i){if(!0===t&&!0===i)throw new E(k.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Ka(e){if(!se.isDocumentKey(e))throw new E(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ga(e){if(se.isDocumentKey(e))throw new E(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Qa(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=e.substring(0,20)+"..."),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":y()}function Ya(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new E(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qa(e);throw new E(k.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function Xa(e,t){if(t<=0)throw new E(k.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new E(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new E(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,za("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,t){this._credentials=t,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ja({}),this._settingsFrozen=!1,e instanceof qa?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new E(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qa(e.options.projectId)}(e))}get app(){if(!this._app)throw new E(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new E(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ja(e),void 0!==e.credentials&&(this._credentials=function(e){if(!e)return new C;switch(e.type){case"gapi":const t=e.client;return _(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new x(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new E(k.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Ha.get(e);t&&(p("ComponentProvider","Removing Datastore"),Ha.delete(e),t.terminate())}(this),Promise.resolve()}}function ec(e,t,n,i={}){var r;const s=(e=Ya(e,Za))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&v("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),i.mockUserToken){let t,n;if("string"==typeof i.mockUserToken)t=i.mockUserToken,n=u.MOCK_USER;else{t=Object(o["f"])(i.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new E(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new u(s)}e._credentials=new S(new T(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ic(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new tc(this.firestore,e,this._key)}}class nc{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new nc(this.firestore,e,this._query)}}class ic extends nc{constructor(e,t,n){super(e,t,Ke(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new tc(this.firestore,null,new se(e))}withConverter(e){return new ic(this.firestore,e,this._path)}}function rc(e,t,...n){if(e=Object(o["k"])(e),Wa("collection","path",t),e instanceof Za){const i=q.fromString(t,...n);return Ga(i),new ic(e,null,i)}{if(!(e instanceof tc||e instanceof ic))throw new E(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(q.fromString(t,...n));return Ga(i),new ic(e.firestore,null,i)}}function sc(e,t){if(e=Ya(e,Za),Wa("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new E(k.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new nc(e,null,function(e){return new We(q.emptyPath(),e)}(t))}function oc(e,t,...n){if(e=Object(o["k"])(e),1===arguments.length&&(t=N.I()),Wa("doc","path",t),e instanceof Za){const i=q.fromString(t,...n);return Ka(i),new tc(e,null,new se(i))}{if(!(e instanceof tc||e instanceof ic))throw new E(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(q.fromString(t,...n));return Ka(i),new tc(e.firestore,e instanceof ic?e.converter:null,new se(i))}}function ac(e,t){return e=Object(o["k"])(e),t=Object(o["k"])(t),(e instanceof tc||e instanceof ic)&&(t instanceof tc||t instanceof ic)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function cc(e,t){return e=Object(o["k"])(e),t=Object(o["k"])(t),e instanceof nc&&t instanceof nc&&e.firestore===t.firestore&&nt(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class uc{constructor(){this._c=Promise.resolve(),this.mc=[],this.gc=!1,this.yc=[],this.Tc=null,this.Ec=!1,this.Ic=!1,this.Ac=[],this.ar=new Ds(this,"async_queue_retry"),this.Rc=()=>{const e=As();e&&p("AsyncQueue","Visibility state changed to "+e.visibilityState),this.ar.tr()};const e=As();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Rc)}get isShuttingDown(){return this.gc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.bc(),this.Pc(e)}enterRestrictedMode(e){if(!this.gc){this.gc=!0,this.Ic=e||!1;const t=As();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Rc)}}enqueue(e){if(this.bc(),this.gc)return new Promise(()=>{});const t=new I;return this.Pc(()=>this.gc&&this.Ic?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.mc.push(e),this.vc()))}async vc(){if(0!==this.mc.length){try{await this.mc[0](),this.mc.shift(),this.ar.reset()}catch(e){if(!Oi(e))throw e;p("AsyncQueue","Operation failed with retryable error: "+e)}this.mc.length>0&&this.ar.Xi(()=>this.vc())}}Pc(e){const t=this._c.then(()=>(this.Ec=!0,e().catch(e=>{this.Tc=e,this.Ec=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw m("INTERNAL UNHANDLED ERROR: ",t),e}).then(e=>(this.Ec=!1,e))));return this._c=t,t}enqueueAfterDelay(e,t,n){this.bc(),this.Ac.indexOf(e)>-1&&(t=0);const i=ho.createAndSchedule(this,e,t,n,e=>this.Vc(e));return this.yc.push(i),i}bc(){this.Tc&&y()}verifyOperationInProgress(){}async Sc(){let e;do{e=this._c,await e}while(e!==this._c)}Dc(e){for(const t of this.yc)if(t.timerId===e)return!0;return!1}Cc(e){return this.Sc().then(()=>{this.yc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.yc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Sc()})}Nc(e){this.Ac.push(e)}Vc(e){const t=this.yc.indexOf(e);this.yc.splice(t,1)}}function lc(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const i of t)if(i in n&&"function"==typeof n[i])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class hc{constructor(){this._progressObserver={},this._taskCompletionResolver=new I,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc=-1;class fc extends Za{constructor(e,t){super(e,t),this.type="firestore",this._queue=new uc,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||mc(this),this._firestoreClient.terminate()}}function pc(e){return e._firestoreClient||mc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function mc(e){var t;const n=e._freezeSettings(),i=function(e,t,n,i){return new Va(e,t,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new ka(e._credentials,e._queue,i)}function vc(e,t){Tc(e=Ya(e,fc));const n=pc(e),i=e._freezeSettings(),r=new va;return yc(n,r,new pa(r,i.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function gc(e){Tc(e=Ya(e,fc));const t=pc(e),n=e._freezeSettings(),i=new va;return yc(t,i,new ma(i,n.cacheSizeBytes))}function yc(e,t,n){const i=new I;return e.asyncQueue.enqueue(async()=>{try{await Ea(e,n),await Ia(e,t),i.resolve()}catch(e){if(!function(e){return"FirebaseError"===e.name?e.code===k.FAILED_PRECONDITION||e.code===k.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||(22===e.code||20===e.code||11===e.code)}(e))throw e;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+e),i.reject(e)}}).then(()=>i.promise)}function _c(e){if(e._initialized&&!e._terminated)throw new E(k.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new I;return e._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(e){if(!Ti.bt())return Promise.resolve();const t=e+"main";await Ti.delete(t)}(Pr(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function wc(e){return function(e){const t=new I;return e.asyncQueue.enqueueAndForget(async()=>Ho(await xa(e),t)),t.promise}(pc(e=Ya(e,fc)))}function bc(e){return La(pc(e=Ya(e,fc)))}function kc(e){return Na(pc(e=Ya(e,fc)))}function Ec(e,t){const n=pc(e=Ya(e,fc)),i=new hc;return Fa(n,e._databaseId,t,i),i}function Ic(e,t){return Ua(pc(e=Ya(e,fc)),t).then(t=>t?new nc(e,null,t.query):null)}function Tc(e){if(e._initialized||e._terminated)throw new E(k.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new E(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new W(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sc{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Sc(G.fromBase64String(e))}catch(e){throw new E(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Sc(G.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new E(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new E(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return R(this._lat,e._lat)||R(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc=/^__.*__$/;class Dc{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Mt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Rt(e,this.data,t,this.fieldTransforms)}}class Lc{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Mt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Nc(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw y()}}class Rc{constructor(e,t,n,i,r,s){this.settings=e,this.databaseId=t,this.N=n,this.ignoreUndefinedProperties=i,void 0===r&&this.xc(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get kc(){return this.settings.kc}$c(e){return new Rc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Oc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.$c({path:n,Fc:!1});return i.Mc(e),i}Lc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.$c({path:n,Fc:!1});return i.xc(),i}Bc(e){return this.$c({path:void 0,Fc:!0})}Uc(e){return eu(e,this.settings.methodName,this.settings.qc||!1,this.path,this.settings.Kc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Mc(this.path.get(e))}Mc(e){if(0===e.length)throw this.Uc("Document fields must not be empty");if(Nc(this.kc)&&xc.test(e))throw this.Uc('Document fields cannot begin and end with "__"')}}class Mc{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.N=n||xs(e)}jc(e,t,n,i=!1){return new Rc({kc:e,methodName:t,Kc:n,path:W.emptyPath(),Fc:!1,qc:i},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function Pc(e){const t=e._freezeSettings(),n=xs(e._databaseId);return new Mc(e._databaseId,!!t.ignoreUndefinedProperties,n)}function jc(e,t,n,i,r,s={}){const o=e.jc(s.merge||s.mergeFields?2:0,t,n,r);Yc("Data must be an object, but it was:",o,i);const a=Gc(i,o);let c,u;if(s.merge)c=new z(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const i of s.mergeFields){const r=Xc(t,i,n);if(!o.contains(r))throw new E(k.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);tu(e,r)||e.push(r)}c=new z(e),u=o.fieldTransforms.filter(e=>c.covers(e.field))}else c=null,u=o.fieldTransforms;return new Dc(new we(a),c,u)}class $c extends Oc{_toFieldTransform(e){if(2!==e.kc)throw 1===e.kc?e.Uc(this._methodName+"() can only appear at the top level of your update data"):e.Uc(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $c}}function Bc(e,t,n){return new Rc({kc:3,Kc:t.settings.Kc,methodName:e._methodName,Fc:n},t.databaseId,t.N,t.ignoreUndefinedProperties)}class Fc extends Oc{_toFieldTransform(e){return new Et(e.path,new mt)}isEqual(e){return e instanceof Fc}}class Uc extends Oc{constructor(e,t){super(e),this.Qc=t}_toFieldTransform(e){const t=Bc(this,e,!0),n=this.Qc.map(e=>Kc(e,t)),i=new vt(n);return new Et(e.path,i)}isEqual(e){return this===e}}class Vc extends Oc{constructor(e,t){super(e),this.Qc=t}_toFieldTransform(e){const t=Bc(this,e,!0),n=this.Qc.map(e=>Kc(e,t)),i=new yt(n);return new Et(e.path,i)}isEqual(e){return this===e}}class qc extends Oc{constructor(e,t){super(e),this.Wc=t}_toFieldTransform(e){const t=new wt(e.N,lt(e.N,this.Wc));return new Et(e.path,t)}isEqual(e){return this===e}}function Hc(e,t,n,i){const r=e.jc(1,t,n);Yc("Data must be an object, but it was:",r,i);const s=[],a=we.empty();F(i,(e,i)=>{const c=Zc(t,e,n);i=Object(o["k"])(i);const u=r.Lc(c);if(i instanceof $c)s.push(c);else{const e=Kc(i,u);null!=e&&(s.push(c),a.set(c,e))}});const c=new z(s);return new Lc(a,c,r.fieldTransforms)}function Wc(e,t,n,i,r,s){const a=e.jc(1,t,n),c=[Xc(t,i,n)],u=[r];if(s.length%2!=0)throw new E(k.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let o=0;o<s.length;o+=2)c.push(Xc(t,s[o])),u.push(s[o+1]);const l=[],h=we.empty();for(let f=c.length-1;f>=0;--f)if(!tu(l,c[f])){const e=c[f];let t=u[f];t=Object(o["k"])(t);const n=a.Lc(e);if(t instanceof $c)l.push(e);else{const i=Kc(t,n);null!=i&&(l.push(e),h.set(e,i))}}const d=new z(l);return new Lc(h,d,a.fieldTransforms)}function zc(e,t,n,i=!1){return Kc(n,e.jc(i?4:3,t))}function Kc(e,t){if(Qc(e=Object(o["k"])(e)))return Yc("Unsupported field value:",t,e),Gc(e,t);if(e instanceof Oc)return function(e,t){if(!Nc(t.kc))throw t.Uc(e._methodName+"() can only be used with update() and set()");if(!t.path)throw t.Uc(e._methodName+"() is not currently supported inside arrays");const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Fc&&4!==t.kc)throw t.Uc("Nested arrays are not supported");return function(e,t){const n=[];let i=0;for(const r of e){let e=Kc(r,t.Bc(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Object(o["k"])(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return lt(t.N,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=j.fromDate(e);return{timestampValue:wn(t.N,n)}}if(e instanceof j){const n=new j(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:wn(t.N,n)}}if(e instanceof Ac)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Sc)return{bytesValue:bn(t.N,e._byteString)};if(e instanceof tc){const n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t.Uc(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:In(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Uc("Unsupported field value: "+Qa(e))}(e,t)}function Gc(e,t){const n={};return U(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):F(e,(e,i)=>{const r=Kc(i,t.Oc(e));null!=r&&(n[e]=r)}),{mapValue:{fields:n}}}function Qc(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof j||e instanceof Ac||e instanceof Sc||e instanceof tc||e instanceof Oc)}function Yc(e,t,n){if(!Qc(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const i=Qa(n);throw"an object"===i?t.Uc(e+" a custom object"):t.Uc(e+" "+i)}}function Xc(e,t,n){if((t=Object(o["k"])(t))instanceof Cc)return t._internalPath;if("string"==typeof t)return Zc(e,t);throw eu("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const Jc=new RegExp("[~\\*/\\[\\]]");function Zc(e,t,n){if(t.search(Jc)>=0)throw eu(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Cc(...t.split("."))._internalPath}catch(i){throw eu(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function eu(e,t,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=" in field "+i),o&&(c+=" in document "+r),c+=")"),new E(k.INVALID_ARGUMENT,a+e+c)}function tu(e,t){return e.some(e=>e.isEqual(t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,t,n,i,r){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new tc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new iu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ru("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class iu extends nu{data(){return super.data()}}function ru(e,t){return"string"==typeof t?Zc(e,t):t instanceof Cc?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ou extends nu{constructor(e,t,n,i,r,s){super(e,t,n,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new au(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(ru("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class au extends ou{data(e={}){return super.data(e)}}class cu{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new su(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new au(this._firestore,this._userDataWriter,n.key,n,new su(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new E(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>({type:"added",doc:new au(e._firestore,e._userDataWriter,n.doc.key,n.doc,new su(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const i=new au(e._firestore,e._userDataWriter,t.doc.key,t.doc,new su(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let r=-1,s=-1;return 0!==t.type&&(r=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:uu(t.type),doc:i,oldIndex:r,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function uu(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return y()}}function lu(e,t){return e instanceof ou&&t instanceof ou?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof cu&&t instanceof cu&&e._firestore===t._firestore&&cc(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(e){if(Qe(e)&&0===e.explicitOrderBy.length)throw new E(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class du{}function fu(e,...t){for(const n of t)e=n._apply(e);return e}class pu extends du{constructor(e,t,n){super(),this.Gc=e,this.zc=t,this.Hc=n,this.type="where"}_apply(e){const t=Pc(e.firestore),n=function(e,t,n,i,r,s,o){let a;if(r.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new E(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on FieldPath.documentId().`);if("in"===s||"not-in"===s){Au(o,s);const t=[];for(const n of o)t.push(Ou(i,e,n));a={arrayValue:{values:t}}}else a=Ou(i,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Au(o,s),a=zc(n,t,o,"in"===s||"not-in"===s);const c=Ae.create(r,s,a);return function(e,t){if(t.v()){const n=Xe(e);if(null!==n&&!n.isEqual(t.field))throw new E(k.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const i=Ye(e);null!==i&&xu(e,t.field,i)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new E(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new E(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,c),c}(e._query,"where",t,e.firestore._databaseId,this.Gc,this.zc,this.Hc);return new nc(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new We(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function mu(e,t,n){const i=t,r=ru("where",e);return new pu(r,i,n)}class vu extends du{constructor(e,t){super(),this.Gc=e,this.Jc=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new E(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new E(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const i=new Ue(t,n);return function(e,t){if(null===Ye(e)){const n=Xe(e);null!==n&&xu(e,n,t.field)}}(e,i),i}(e._query,this.Gc,this.Jc);return new nc(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new We(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function gu(e,t="asc"){const n=t,i=ru("orderBy",e);return new vu(i,n)}class yu extends du{constructor(e,t,n){super(),this.type=e,this.Yc=t,this.Xc=n}_apply(e){return new nc(e.firestore,e.converter,tt(e._query,this.Yc,this.Xc))}}function _u(e){return Xa("limit",e),new yu("limit",e,"F")}function wu(e){return Xa("limitToLast",e),new yu("limitToLast",e,"L")}class bu extends du{constructor(e,t,n){super(),this.type=e,this.Zc=t,this.ta=n}_apply(e){const t=Su(e,this.type,this.Zc,this.ta);return new nc(e.firestore,e.converter,function(e,t){return new We(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function ku(...e){return new bu("startAt",e,!0)}function Eu(...e){return new bu("startAfter",e,!1)}class Iu extends du{constructor(e,t,n){super(),this.type=e,this.Zc=t,this.ta=n}_apply(e){const t=Su(e,this.type,this.Zc,this.ta);return new nc(e.firestore,e.converter,function(e,t){return new We(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function Tu(...e){return new Iu("endBefore",e,!0)}function Cu(...e){return new Iu("endAt",e,!1)}function Su(e,t,n,i){if(n[0]=Object(o["k"])(n[0]),n[0]instanceof nu)return function(e,t,n,i,r){if(!i)throw new E(k.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of Ze(e))if(o.field.isKeyField())s.push(fe(t,i.key));else{const e=i.data.field(o.field);if(Z(e))throw new E(k.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new E(k.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new Be(s,r)}(e._query,e.firestore._databaseId,t,n[0]._document,i);{const r=Pc(e.firestore);return function(e,t,n,i,r,s){const o=e.explicitOrderBy;if(r.length>o.length)throw new E(k.INVALID_ARGUMENT,`Too many arguments provided to ${i}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<r.length;c++){const s=r[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new E(k.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${i}(), but got a ${typeof s}`);if(!Je(e)&&-1!==s.indexOf("/"))throw new E(k.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ${i}() must be a plain document ID, but '${s}' contains a slash.`);const n=e.path.child(q.fromString(s));if(!se.isDocumentKey(n))throw new E(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ${i}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const r=new se(n);a.push(fe(t,r))}else{const e=zc(n,i,s);a.push(e)}}return new Be(a,s)}(e._query,e.firestore._databaseId,r,t,n,i)}}function Ou(e,t,n){if("string"==typeof(n=Object(o["k"])(n))){if(""===n)throw new E(k.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!Je(t)&&-1!==n.indexOf("/"))throw new E(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=t.path.child(q.fromString(n));if(!se.isDocumentKey(i))throw new E(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return fe(e,new se(i))}if(n instanceof tc)return fe(e,n._key);throw new E(k.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qa(n)}.`)}function Au(e,t){if(!Array.isArray(e)||0===e.length)throw new E(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new E(k.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function xu(e,t,n){if(!n.isEqual(t))throw new E(k.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{convertValue(e,t="none"){switch(oe(e)){case 0:return null;case 1:return e.booleanValue;case 2:return X(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(J(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw y()}}convertObject(e,t){const n={};return F(e.fields,(e,i)=>{n[e]=this.convertValue(i,t)}),n}convertGeoPoint(e){return new Ac(X(e.latitude),X(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ee(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(te(e));default:return null}}convertTimestamp(e){const t=Y(e);return new j(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=q.fromString(e);_(Zn(n));const i=new qa(n.get(1),n.get(3)),r=new se(n.popFirst(5));return i.isEqual(t)||m(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}class Nu extends Du{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sc(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new tc(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Pc(e)}set(e,t,n){this._verifyNotCommitted();const i=Mu(e,this._firestore),r=Lu(i.converter,t,n),s=jc(this._dataReader,"WriteBatch.set",i._key,r,null!==i.converter,n);return this._mutations.push(s.toMutation(i._key,Ct.none())),this}update(e,t,n,...i){this._verifyNotCommitted();const r=Mu(e,this._firestore);let s;return s="string"==typeof(t=Object(o["k"])(t))||t instanceof Cc?Wc(this._dataReader,"WriteBatch.update",r._key,t,n,i):Hc(this._dataReader,"WriteBatch.update",r._key,t),this._mutations.push(s.toMutation(r._key,Ct.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Mu(e,this._firestore);return this._mutations=this._mutations.concat(new Bt(t._key,Ct.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new E(k.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Mu(e,t){if((e=Object(o["k"])(e)).firestore!==t)throw new E(k.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(e){e=Ya(e,tc);const t=Ya(e.firestore,fc);return Ma(pc(t),e._key).then(n=>Yu(t,e,n))}class ju extends Du{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sc(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new tc(this.firestore,null,t)}}function $u(e){e=Ya(e,tc);const t=Ya(e.firestore,fc),n=pc(t),i=new ju(t);return Ra(n,e._key).then(n=>new ou(t,i,e._key,n,new su(null!==n&&n.hasLocalMutations,!0),e.converter))}function Bu(e){e=Ya(e,tc);const t=Ya(e.firestore,fc);return Ma(pc(t),e._key,{source:"server"}).then(n=>Yu(t,e,n))}function Fu(e){e=Ya(e,nc);const t=Ya(e.firestore,fc),n=pc(t),i=new ju(t);return hu(e._query),ja(n,e._query).then(n=>new cu(t,i,e,n))}function Uu(e){e=Ya(e,nc);const t=Ya(e.firestore,fc),n=pc(t),i=new ju(t);return Pa(n,e._query).then(n=>new cu(t,i,e,n))}function Vu(e){e=Ya(e,nc);const t=Ya(e.firestore,fc),n=pc(t),i=new ju(t);return ja(n,e._query,{source:"server"}).then(n=>new cu(t,i,e,n))}function qu(e,t,n){e=Ya(e,tc);const i=Ya(e.firestore,fc),r=Lu(e.converter,t,n);return Qu(i,[jc(Pc(i),"setDoc",e._key,r,null!==e.converter,n).toMutation(e._key,Ct.none())])}function Hu(e,t,n,...i){e=Ya(e,tc);const r=Ya(e.firestore,fc),s=Pc(r);let a;return a="string"==typeof(t=Object(o["k"])(t))||t instanceof Cc?Wc(s,"updateDoc",e._key,t,n,i):Hc(s,"updateDoc",e._key,t),Qu(r,[a.toMutation(e._key,Ct.exists(!0))])}function Wu(e){return Qu(Ya(e.firestore,fc),[new Bt(e._key,Ct.none())])}function zu(e,t){const n=Ya(e.firestore,fc),i=oc(e),r=Lu(e.converter,t);return Qu(n,[jc(Pc(e.firestore),"addDoc",i._key,r,null!==e.converter,{}).toMutation(i._key,Ct.exists(!1))]).then(()=>i)}function Ku(e,...t){var n,i,r;e=Object(o["k"])(e);let s={includeMetadataChanges:!1},a=0;"object"!=typeof t[a]||lc(t[a])||(s=t[a],a++);const c={includeMetadataChanges:s.includeMetadataChanges};if(lc(t[a])){const e=t[a];t[a]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[a+1]=null===(i=e.error)||void 0===i?void 0:i.bind(e),t[a+2]=null===(r=e.complete)||void 0===r?void 0:r.bind(e)}let u,l,h;if(e instanceof tc)l=Ya(e.firestore,fc),h=Ke(e._key.path),u={next:n=>{t[a]&&t[a](Yu(l,e,n))},error:t[a+1],complete:t[a+2]};else{const n=Ya(e,nc);l=Ya(n.firestore,fc),h=n._query;const i=new ju(l);u={next:e=>{t[a]&&t[a](new cu(l,i,n,e))},error:t[a+1],complete:t[a+2]},hu(e._query)}return function(e,t,n,i){const r=new ya(i),s=new Io(t,r,n);return e.asyncQueue.enqueueAndForget(async()=>_o(await Da(e),s)),()=>{r.ec(),e.asyncQueue.enqueueAndForget(async()=>wo(await Da(e),s))}}(pc(l),h,c,u)}function Gu(e,t){return $a(pc(e=Ya(e,fc)),lc(t)?t:{next:t})}function Qu(e,t){return function(e,t){const n=new I;return e.asyncQueue.enqueueAndForget(async()=>$o(await xa(e),t,n)),n.promise}(pc(e),t)}function Yu(e,t,n){const i=n.docs.get(t._key),r=new ju(e);return new ou(e,r,t._key,i,new su(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Pc(e)}get(e){const t=Mu(e,this._firestore),n=new Nu(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return y();const i=e[0];if(i.isFoundDocument())return new nu(this._firestore,n,i.key,i,t.converter);if(i.isNoDocument())return new nu(this._firestore,n,t._key,null,t.converter);throw y()})}set(e,t,n){const i=Mu(e,this._firestore),r=Lu(i.converter,t,n),s=jc(this._dataReader,"Transaction.set",i._key,r,null!==i.converter,n);return this._transaction.set(i._key,s),this}update(e,t,n,...i){const r=Mu(e,this._firestore);let s;return s="string"==typeof(t=Object(o["k"])(t))||t instanceof Cc?Wc(this._dataReader,"Transaction.update",r._key,t,n,i):Hc(this._dataReader,"Transaction.update",r._key,t),this._transaction.update(r._key,s),this}delete(e){const t=Mu(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Mu(e,this._firestore),n=new ju(this._firestore);return super.get(e).then(e=>new ou(this._firestore,n,t._key,e._document,new su(!1,!1),t.converter))}}function Ju(e,t){return Ba(pc(e=Ya(e,fc)),n=>t(new Xu(e,n)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(){return new $c("deleteField")}function el(){return new Fc("serverTimestamp")}function tl(...e){return new Uc("arrayUnion",e)}function nl(...e){return new Vc("arrayRemove",e)}function il(e){return new qc("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){l=e}(i["SDK_VERSION"]),Object(i["_registerComponent"])(new r["a"]("firestore",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=new fc(i,new O(e.getProvider("auth-internal")));return n=Object.assign({useFetchStreams:t},n),r._setSettings(n),r},"PUBLIC")),Object(i["registerVersion"])(c,"3.3.1",e),Object(i["registerVersion"])(c,"3.3.1","esm2017")}()}).call(this,n("4362"))},"0cfb":function(e,t,n){var i=n("83ab"),r=n("d039"),s=n("cc12");e.exports=!i&&!r((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(e,t,n){var i=n("da84"),r=i.String;e.exports=function(e){try{return r(e)}catch(t){return"Object"}}},1626:function(e,t){e.exports=function(e){return"function"==typeof e}},1862:function(e,t,n){"use strict";var i=n("7ded"),r=n("0829"),s=n("1fd5"),o=n("22e5");const a="@firebase/firestore-compat",c="0.1.8";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new r["g"]("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(){if("undefined"===typeof Uint8Array)throw new r["g"]("unimplemented","Uint8Arrays are not available in this environment.")}function h(){if(!Object(r["r"])())throw new r["g"]("unimplemented","Blobs are unavailable in Firestore in this environment.")}class d{constructor(e){this._delegate=e}static fromBase64String(e){return h(),new d(r["b"].fromBase64String(e))}static fromUint8Array(e){return l(),new d(r["b"].fromUint8Array(e))}toBase64(){return h(),this._delegate.toBase64()}toUint8Array(){return l(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e){return p(e,["next","error","complete"])}function p(e,t){if("object"!==typeof e||null===e)return!1;const n=e;for(const i of t)if(i in n&&"function"===typeof n[i])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{enableIndexedDbPersistence(e,t){return Object(r["F"])(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Object(r["G"])(e._delegate)}clearIndexedDbPersistence(e){return Object(r["x"])(e._delegate)}}class v{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof r["m"]||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||Object(r["s"])("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){Object(r["A"])(this._delegate,e,t,n)}enableNetwork(){return Object(r["H"])(this._delegate)}disableNetwork(){return Object(r["D"])(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,Object(r["t"])("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Object(r["lb"])(this._delegate)}onSnapshotsInSync(e){return Object(r["Y"])(this._delegate,e)}get app(){if(!this._appCompat)throw new r["g"]("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new D(this,Object(r["y"])(this._delegate,e))}catch(t){throw E(t,"collection()","Firestore.collection()")}}doc(e){try{return new k(this,Object(r["E"])(this._delegate,e))}catch(t){throw E(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new O(this,Object(r["z"])(this._delegate,e))}catch(t){throw E(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Object(r["db"])(this._delegate,t=>e(new _(this,t)))}batch(){return Object(r["K"])(this._delegate),new w(new r["l"](this._delegate,e=>Object(r["L"])(this._delegate,e)))}loadBundle(e){return Object(r["V"])(this._delegate,e)}namedQuery(e){return Object(r["W"])(this._delegate,e).then(e=>e?new O(this,e):null)}}class g extends r["a"]{constructor(e){super(),this.firestore=e}convertBytes(e){return new d(new r["b"](e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return k.forKey(t,this.firestore,null)}}function y(e){Object(r["gb"])(e)}class _{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new g(e)}get(e){const t=L(e);return this._delegate.get(t).then(e=>new C(this._firestore,new r["e"](this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter)))}set(e,t,n){const i=L(e);return n?(u("Transaction.set",n),this._delegate.set(i,t,n)):this._delegate.set(i,t),this}update(e,t,n,...i){const r=L(e);return 2===arguments.length?this._delegate.update(r,t):this._delegate.update(r,t,n,...i),this}delete(e){const t=L(e);return this._delegate.delete(t),this}}class w{constructor(e){this._delegate=e}set(e,t,n){const i=L(e);return n?(u("WriteBatch.set",n),this._delegate.set(i,t,n)):this._delegate.set(i,t),this}update(e,t,n,...i){const r=L(e);return 2===arguments.length?this._delegate.update(r,t):this._delegate.update(r,t,n,...i),this}delete(e){const t=L(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class b{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new r["i"](this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new S(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=b.INSTANCES;let i=n.get(e);i||(i=new WeakMap,n.set(e,i));let r=i.get(t);return r||(r=new b(e,new g(e),t),i.set(t,r)),r}}b.INSTANCES=new WeakMap;class k{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new g(e)}static forPath(e,t,n){if(e.length%2!==0)throw new r["g"]("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new k(t,new r["d"](t._delegate,n,new r["n"](e)))}static forKey(e,t,n){return new k(t,new r["d"](t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new D(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new D(this.firestore,Object(r["y"])(this._delegate,e))}catch(t){throw E(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Object(s["k"])(e),e instanceof r["d"]&&Object(r["cb"])(this._delegate,e)}set(e,t){t=u("DocumentReference.set",t);try{return t?Object(r["fb"])(this._delegate,e,t):Object(r["fb"])(this._delegate,e)}catch(n){throw E(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?Object(r["kb"])(this._delegate,e):Object(r["kb"])(this._delegate,e,t,...n)}catch(i){throw E(i,"updateDoc()","DocumentReference.update()")}}delete(){return Object(r["B"])(this._delegate)}onSnapshot(...e){const t=I(e),n=T(e,e=>new C(this.firestore,new r["e"](this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)));return Object(r["X"])(this._delegate,t,n)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?Object(r["N"])(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?Object(r["O"])(this._delegate):Object(r["M"])(this._delegate),t.then(e=>new C(this.firestore,new r["e"](this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)))}withConverter(e){return new k(this.firestore,e?this._delegate.withConverter(b.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function E(e,t,n){return e.message=e.message.replace(t,n),e}function I(e){for(const t of e)if("object"===typeof t&&!f(t))return t;return{}}function T(e,t){var n,i;let r;return r=f(e[0])?e[0]:f(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{r.next&&r.next(t(e))},error:null===(n=r.error)||void 0===n?void 0:n.bind(r),complete:null===(i=r.complete)||void 0===i?void 0:i.bind(r)}}class C{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new k(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Object(r["hb"])(this._delegate,e._delegate)}}class S extends C{data(e){const t=this._delegate.data(e);return Object(r["q"])(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class O{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new g(e)}where(e,t,n){try{return new O(this.firestore,Object(r["ab"])(this._delegate,Object(r["mb"])(e,t,n)))}catch(i){throw E(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new O(this.firestore,Object(r["ab"])(this._delegate,Object(r["Z"])(e,t)))}catch(n){throw E(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new O(this.firestore,Object(r["ab"])(this._delegate,Object(r["T"])(e)))}catch(t){throw E(t,"limit()","Query.limit()")}}limitToLast(e){try{return new O(this.firestore,Object(r["ab"])(this._delegate,Object(r["U"])(e)))}catch(t){throw E(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new O(this.firestore,Object(r["ab"])(this._delegate,Object(r["jb"])(...e)))}catch(t){throw E(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new O(this.firestore,Object(r["ab"])(this._delegate,Object(r["ib"])(...e)))}catch(t){throw E(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new O(this.firestore,Object(r["ab"])(this._delegate,Object(r["J"])(...e)))}catch(t){throw E(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new O(this.firestore,Object(r["ab"])(this._delegate,Object(r["I"])(...e)))}catch(t){throw E(t,"endAt()","Query.endAt()")}}isEqual(e){return Object(r["bb"])(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?Object(r["Q"])(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?Object(r["R"])(this._delegate):Object(r["P"])(this._delegate),t.then(e=>new x(this.firestore,new r["j"](this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)))}onSnapshot(...e){const t=I(e),n=T(e,e=>new x(this.firestore,new r["j"](this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)));return Object(r["X"])(this._delegate,t,n)}withConverter(e){return new O(this.firestore,e?this._delegate.withConverter(b.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class A{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new S(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class x{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new O(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new S(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(e=>new A(this._firestore,e))}forEach(e,t){this._delegate.forEach(n=>{e.call(t,new S(this._firestore,n))})}isEqual(e){return Object(r["hb"])(this._delegate,e._delegate)}}class D extends O{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new k(this.firestore,e):null}doc(e){try{return new k(this.firestore,void 0===e?Object(r["E"])(this._delegate):Object(r["E"])(this._delegate,e))}catch(t){throw E(t,"doc()","CollectionReference.doc()")}}add(e){return Object(r["u"])(this._delegate,e).then(e=>new k(this.firestore,e))}isEqual(e){return Object(r["cb"])(this._delegate,e._delegate)}withConverter(e){return new D(this.firestore,e?this._delegate.withConverter(b.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function L(e){return Object(r["p"])(e,r["d"])}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(...e){this._delegate=new r["f"](...e)}static documentId(){return new N(r["o"].keyField().canonicalString())}isEqual(e){return e=Object(s["k"])(e),e instanceof r["f"]&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this._delegate=e}static serverTimestamp(){const e=Object(r["eb"])();return e._methodName="FieldValue.serverTimestamp",new R(e)}static delete(){const e=Object(r["C"])();return e._methodName="FieldValue.delete",new R(e)}static arrayUnion(...e){const t=Object(r["w"])(...e);return t._methodName="FieldValue.arrayUnion",new R(t)}static arrayRemove(...e){const t=Object(r["v"])(...e);return t._methodName="FieldValue.arrayRemove",new R(t)}static increment(e){const t=Object(r["S"])(e);return t._methodName="FieldValue.increment",new R(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={Firestore:v,GeoPoint:r["h"],Timestamp:r["k"],Blob:d,Transaction:_,WriteBatch:w,DocumentReference:k,DocumentSnapshot:C,Query:O,QueryDocumentSnapshot:S,QuerySnapshot:x,CollectionReference:D,FieldPath:N,FieldValue:R,setLogLevel:y,CACHE_SIZE_UNLIMITED:r["c"]};function P(e,t){e.INTERNAL.registerComponent(new o["a"]("firestore-compat",e=>{const n=e.getProvider("app-compat").getImmediate(),i=e.getProvider("firestore").getImmediate();return t(n,i)},"PUBLIC").setServiceProps(Object.assign({},M)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e){P(e,(e,t)=>new v(e,t,new m)),e.registerVersion(a,c)}j(i["a"])},"19aa":function(e,t,n){var i=n("da84"),r=n("3a9b"),s=i.TypeError;e.exports=function(e,t){if(r(t,e))return e;throw s("Incorrect invocation")}},"1a2d":function(e,t,n){var i=n("e330"),r=n("7b0b"),s=i({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(r(e),t)}},"1be4":function(e,t,n){var i=n("d066");e.exports=i("document","documentElement")},"1c7e":function(e,t,n){var i=n("b622"),r=i("iterator"),s=!1;try{var o=0,a={next:function(){return{done:!!o++}},return:function(){s=!0}};a[r]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}e.exports=function(e,t){if(!t&&!s)return!1;var n=!1;try{var i={};i[r]=function(){return{next:function(){return{done:n=!0}}}},e(i)}catch(c){}return n}},"1cdc":function(e,t,n){var i=n("342f");e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(i)},"1d80":function(e,t,n){var i=n("da84"),r=i.TypeError;e.exports=function(e){if(void 0==e)throw r("Can't call method on "+e);return e}},"1da1":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("d3b7");function i(e,t,n,i,r,s,o){try{var a=e[s](o),c=a.value}catch(u){return void n(u)}a.done?t(c):Promise.resolve(c).then(i,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,s){var o=e.apply(t,n);function a(e){i(o,r,s,a,c,"next",e)}function c(e){i(o,r,s,a,c,"throw",e)}a(void 0)}))}}},"1f5a":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return $e})),n.d(t,"c",(function(){return ut})),n.d(t,"d",(function(){return ft})),n.d(t,"e",(function(){return mt})),n.d(t,"f",(function(){return pt})),n.d(t,"g",(function(){return Ze})),n.d(t,"h",(function(){return dt})),n.d(t,"i",(function(){return Li})),n.d(t,"j",(function(){return zr})),n.d(t,"k",(function(){return c})),n.d(t,"l",(function(){return Ii})),n.d(t,"m",(function(){return gt})),n.d(t,"n",(function(){return _t})),n.d(t,"o",(function(){return wt})),n.d(t,"p",(function(){return k})),n.d(t,"q",(function(){return De})),n.d(t,"r",(function(){return g})),n.d(t,"s",(function(){return Mn})),n.d(t,"t",(function(){return C})),n.d(t,"u",(function(){return sr})),n.d(t,"v",(function(){return fe})),n.d(t,"x",(function(){return qt})),n.d(t,"y",(function(){return xn})),n.d(t,"z",(function(){return qr})),n.d(t,"A",(function(){return Ln})),n.d(t,"B",(function(){return Ht})),n.d(t,"C",(function(){return Vt})),n.d(t,"D",(function(){return Ne})),n.d(t,"F",(function(){return zt})),n.d(t,"G",(function(){return d})),n.d(t,"H",(function(){return Jt})),n.d(t,"I",(function(){return pn})),n.d(t,"J",(function(){return gn})),n.d(t,"K",(function(){return rr})),n.d(t,"L",(function(){return de})),n.d(t,"M",(function(){return ii})),n.d(t,"N",(function(){return Qt})),n.d(t,"O",(function(){return Rt})),n.d(t,"P",(function(){return Oi})),n.d(t,"Q",(function(){return Vi})),n.d(t,"R",(function(){return nr})),n.d(t,"S",(function(){return En})),n.d(t,"T",(function(){return Mt})),n.d(t,"U",(function(){return Ai})),n.d(t,"V",(function(){return Ui})),n.d(t,"W",(function(){return er})),n.d(t,"X",(function(){return Zt})),n.d(t,"Y",(function(){return Ut})),n.d(t,"Z",(function(){return Gt})),n.d(t,"ab",(function(){return It})),n.d(t,"bb",(function(){return Nt})),n.d(t,"cb",(function(){return jt})),n.d(t,"db",(function(){return Kt})),n.d(t,"eb",(function(){return Yt})),n.d(t,"fb",(function(){return Si})),n.d(t,"gb",(function(){return Fi})),n.d(t,"hb",(function(){return Ji})),n.d(t,"ib",(function(){return Ot})),n.d(t,"jb",(function(){return rn})),n.d(t,"kb",(function(){return sn})),n.d(t,"lb",(function(){return Di})),n.d(t,"mb",(function(){return nn})),n.d(t,"nb",(function(){return en})),n.d(t,"ob",(function(){return Wt})),n.d(t,"w",(function(){return Es})),n.d(t,"E",(function(){return bs}));var i=n("1fd5"),r=n("589b");function s(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;var o=n("e691"),a=n("22e5");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},u={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function h(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const d=l,f=h,p=new i["b"]("auth","Firebase",h()),m=new o["b"]("@firebase/auth");function v(e,...t){m.logLevel<=o["a"].ERROR&&m.error(`Auth (${r["SDK_VERSION"]}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(e,...t){throw b(e,...t)}function y(e,...t){return b(e,...t)}function _(e,t,n){const r=Object.assign(Object.assign({},f()),{[t]:n}),s=new i["b"]("auth","Firebase",r);return s.create(t,{appName:e.name})}function w(e,t,n){const i=n;if(!(t instanceof i))throw i.name!==t.constructor.name&&g(e,"argument-error"),_(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function b(e,...t){if("string"!==typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return p.create(e,...t)}function k(e,t,...n){if(!e)throw b(t,...n)}function E(e){const t="INTERNAL ASSERTION FAILED: "+e;throw v(t),new Error(t)}function I(e,t){e||E(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=new Map;function C(e){I(e instanceof Function,"Expected a class definition");let t=T.get(e);return t?(I(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,T.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(C);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function A(){return"http:"===x()||"https:"===x()}function x(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(A()||Object(i["n"])()||"connection"in navigator))||navigator.onLine}function L(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e,t){this.shortDelay=e,this.longDelay=t,I(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(i["s"])()||Object(i["u"])()}get(){return D()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t){I(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void E("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void E("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void E("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},j=new N(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function B(e,t,n,r,s={}){return F(e,s,()=>{let s={},o={};r&&("GET"===t?o=r:s={body:JSON.stringify(r)});const a=Object(i["x"])(Object.assign({key:e.config.apiKey},o)).slice(1),c=new(M.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&c.set("X-Firebase-Locale",e.languageCode),M.fetch()(V(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function F(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},P),t);try{const t=new q(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw H(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw H(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw H(e,"email-already-in-use",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw _(e,a,o);g(e,a)}}catch(s){if(s instanceof i["c"])throw s;g(e,"network-request-failed")}}async function U(e,t,n,i,r={}){const s=await B(e,t,n,i,r);return"mfaPendingCredential"in s&&g(e,"multi-factor-auth-required",{_serverResponse:s}),s}function V(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?R(e.config,r):`${e.config.apiScheme}://${r}`}class q{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(y(this.auth,"timeout")),j.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function H(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=y(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(e,t){return B(e,"POST","/v1/accounts:delete",t)}async function z(e,t){return B(e,"POST","/v1/accounts:update",t)}async function K(e,t){return B(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e,t=!1){const n=Object(i["k"])(e),r=await n.getIdToken(t),s=X(r);k(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:G(Y(s.auth_time)),issuedAtTime:G(Y(s.iat)),expirationTime:G(Y(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function Y(e){return 1e3*Number(e)}function X(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return v("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(i["d"])(n);return e?JSON.parse(e):(v("Failed to decode base64 JWT payload"),null)}catch(s){return v("Caught error parsing JWT payload as JSON",s),null}}function J(e){const t=X(e);return k(t,"internal-error"),k("undefined"!==typeof t.exp,"internal-error"),k("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i["c"]&&ee(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function ee({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=G(this.lastLoginAt),this.creationTime=G(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(e){var t;const n=e.auth,i=await e.getIdToken(),r=await Z(e,K(n,{idToken:i}));k(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?oe(s.providerUserInfo):[],a=se(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ne(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function re(e){const t=Object(i["k"])(e);await ie(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function se(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function oe(e){return e.map(e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ae(e,t){const n=await F(e,{},()=>{const n=Object(i["x"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=V(e,r,"/v1/token","key="+s);return M.fetch()(o,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){k(e.idToken,"internal-error"),k("undefined"!==typeof e.idToken,"internal-error"),k("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):J(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return k(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await ae(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new ce;return n&&(k("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(k("string"===typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(k("number"===typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ce,this.toJSON())}_performRefresh(){return E("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e,t){k("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class le{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new te(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.metadata=new ne(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Z(this,this.stsTokenManager.getToken(this.auth,e));return k(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Q(this,e)}reload(){return re(this)}_assign(e){this!==e&&(k(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new le(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ie(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Z(this,W(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,v=null!==(c=t.createdAt)&&void 0!==c?c:void 0,g=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:_,isAnonymous:w,providerData:b,stsTokenManager:E}=t;k(y&&E,e,"internal-error");const I=ce.fromJSON(this.name,E);k("string"===typeof y,e,"internal-error"),ue(l,e.name),ue(h,e.name),k("boolean"===typeof _,e,"internal-error"),k("boolean"===typeof w,e,"internal-error"),ue(d,e.name),ue(f,e.name),ue(p,e.name),ue(m,e.name),ue(v,e.name),ue(g,e.name);const T=new le({uid:y,auth:e,email:h,emailVerified:_,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:v,lastLoginAt:g});return b&&Array.isArray(b)&&(T.providerData=b.map(e=>Object.assign({},e))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,n=!1){const i=new ce;i.updateFromServerResponse(t);const r=new le({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await ie(r),r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}he.type="NONE";const de=he;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e,t,n){return`firebase:${e}:${t}:${n}`}class pe{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=fe(this.userKey,i.apiKey,r),this.fullPersistenceKey=fe("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?le._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new pe(C(de),e,n);const i=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let r=i[0]||C(de);const s=fe(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=le._fromJSON(e,t);u!==r&&(o=n),r=u;break}}catch(c){}const a=i.filter(e=>e._shouldAllowMigration);return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==r)try{await e._remove(s)}catch(c){}})),new pe(r,e,n)):new pe(r,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(_e(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ve(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(be(t))return"Blackberry";if(ke(t))return"Webos";if(ge(t))return"Safari";if((t.includes("chrome/")||ye(t))&&!t.includes("edge/"))return"Chrome";if(we(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ve(e=Object(i["l"])()){return/firefox\//i.test(e)}function ge(e=Object(i["l"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ye(e=Object(i["l"])()){return/crios\//i.test(e)}function _e(e=Object(i["l"])()){return/iemobile/i.test(e)}function we(e=Object(i["l"])()){return/android/i.test(e)}function be(e=Object(i["l"])()){return/blackberry/i.test(e)}function ke(e=Object(i["l"])()){return/webos/i.test(e)}function Ee(e=Object(i["l"])()){return/iphone|ipad|ipod/i.test(e)}function Ie(e=Object(i["l"])()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function Te(e=Object(i["l"])()){var t;return Ee(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Ce(){return Object(i["q"])()&&10===document.documentMode}function Se(e=Object(i["l"])()){return Ee(e)||we(e)||ke(e)||be(e)||/windows phone/i.test(e)||_e(e)}function Oe(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(e,t=[]){let n;switch(e){case"Browser":n=me(Object(i["l"])());break;case"Worker":n=`${me(Object(i["l"])())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r["SDK_VERSION"]}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Le(this),this.idTokenSubscription=new Le(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=C(t)),this._initializationPromise=this.queue(async()=>{var n,i;this._deleted||(this.persistenceManager=await pe.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null===n||void 0===n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);i&&i!==r||!(null===s||void 0===s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ie(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=L()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(i["k"])(e):null;return t&&k(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&k(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(C(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&C(e)||this._popupRedirectResolver;k(t,this,"argument-error"),this.redirectPersistenceManager=await pe.create(this,[C(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return k(s,this,"internal-error"),s.then(()=>r(this.currentUser)),"function"===typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ae(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function De(e){return Object(i["k"])(e)}class Le{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(i["g"])(e=>this.observer=e)}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Ne(e,t,n){const i=De(e);k(i._canInitEmulator,i,"emulator-config-failed"),k(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Re(t),{host:o,port:a}=Me(t),c=null===a?"":":"+a;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||je()}function Re(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Me(e){const t=Re(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:Pe(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:Pe(t)}}}function Pe(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function je(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return E("not implemented")}_getIdTokenResponse(e){return E("not implemented")}_linkToIdToken(e,t){return E("not implemented")}_getReauthenticationResolver(e){return E("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Be(e,t){return B(e,"POST","/v1/accounts:resetPassword",$(e,t))}async function Fe(e,t){return B(e,"POST","/v1/accounts:update",t)}async function Ue(e,t){return B(e,"POST","/v1/accounts:update",$(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ve(e,t){return U(e,"POST","/v1/accounts:signInWithPassword",$(e,t))}async function qe(e,t){return B(e,"POST","/v1/accounts:sendOobCode",$(e,t))}async function He(e,t){return qe(e,t)}async function We(e,t){return qe(e,t)}async function ze(e,t){return qe(e,t)}async function Ke(e,t){return qe(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ge(e,t){return U(e,"POST","/v1/accounts:signInWithEmailLink",$(e,t))}async function Qe(e,t){return U(e,"POST","/v1/accounts:signInWithEmailLink",$(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye extends $e{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Ye(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ye(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Ve(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ge(e,{email:this._email,oobCode:this._password});default:g(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Fe(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Qe(e,{idToken:t,email:this._email,oobCode:this._password});default:g(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xe(e,t){return U(e,"POST","/v1/accounts:signInWithIdp",$(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je="http://localhost";class Ze extends $e{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ze(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):g("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=s(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new Ze(n,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Xe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Xe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xe(e,t)}buildRequest(){const e={requestUri:Je,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(i["x"])(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(e,t){return B(e,"POST","/v1/accounts:sendVerificationCode",$(e,t))}async function tt(e,t){return U(e,"POST","/v1/accounts:signInWithPhoneNumber",$(e,t))}async function nt(e,t){const n=await U(e,"POST","/v1/accounts:signInWithPhoneNumber",$(e,t));if(n.temporaryProof)throw H(e,"account-exists-with-different-credential",n);return n}const it={["USER_NOT_FOUND"]:"user-not-found"};async function rt(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return U(e,"POST","/v1/accounts:signInWithPhoneNumber",$(e,n),it)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends $e{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new st({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new st({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return tt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return nt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return rt(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new st({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function at(e){const t=Object(i["y"])(Object(i["j"])(e))["link"],n=t?Object(i["y"])(Object(i["j"])(t))["deep_link_id"]:null,r=Object(i["y"])(Object(i["j"])(e))["deep_link_id"],s=r?Object(i["y"])(Object(i["j"])(r))["link"]:null;return s||r||n||t||e}class ct{constructor(e){var t,n,r,s,o,a;const c=Object(i["y"])(Object(i["j"])(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=ot(null!==(r=c["mode"])&&void 0!==r?r:null);k(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=at(e);try{return new ct(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ut{constructor(){this.providerId=ut.PROVIDER_ID}static credential(e,t){return Ye._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ct.parseLink(t);return k(n,"argument-error"),Ye._fromEmailAndCode(e,n.code,n.tenantId)}}ut.PROVIDER_ID="password",ut.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ut.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends lt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class dt extends ht{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return k("providerId"in t&&"signInMethod"in t,"argument-error"),Ze._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return k(e.idToken||e.accessToken,"argument-error"),Ze._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return dt.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return dt.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:r,nonce:s,providerId:o}=e;if(!n&&!i&&!t&&!r)return null;if(!o)return null;try{return new dt(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:r})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends ht{constructor(){super("facebook.com")}static credential(e){return Ze._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch(t){return null}}}ft.FACEBOOK_SIGN_IN_METHOD="facebook.com",ft.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt extends ht{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ze._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return pt.credential(t,n)}catch(i){return null}}}pt.GOOGLE_SIGN_IN_METHOD="google.com",pt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt extends ht{constructor(){super("github.com")}static credential(e){return Ze._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch(t){return null}}}mt.GITHUB_SIGN_IN_METHOD="github.com",mt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vt="http://localhost";class gt extends $e{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Xe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Xe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xe(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i,pendingToken:r}=t;return n&&i&&r&&n===i?new gt(n,r):null}static _create(e,t){return new gt(e,t)}buildRequest(){return{requestUri:vt,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="saml.";class _t extends lt{constructor(e){k(e.startsWith(yt),"argument-error"),super(e)}static credentialFromResult(e){return _t.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return _t.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=gt.fromJSON(e);return k(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return gt._create(n,t)}catch(i){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends ht{constructor(){super("twitter.com")}static credential(e,t){return Ze._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return wt.credential(t,n)}catch(i){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function bt(e,t){return U(e,"POST","/v1/accounts:signUp",$(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wt.TWITTER_SIGN_IN_METHOD="twitter.com",wt.PROVIDER_ID="twitter.com";class kt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await le._fromIdTokenResponse(e,n,i),s=Et(n),o=new kt({user:r,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Et(n);return new kt({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Et(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function It(e){var t;const n=De(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new kt({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await bt(n,{returnSecureToken:!0}),r=await kt._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(r.user),r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends i["c"]{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Tt.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Tt(e,t,n,i)}}function Ct(e,t,n,i){const r="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return r.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw Tt._fromErrorAndOperation(e,n,t,i);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(e){return new Set(e.map(({providerId:e})=>e).filter(e=>!!e))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ot(e,t){const n=Object(i["k"])(e);await xt(!0,n,t);const{providerUserInfo:r}=await z(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),s=St(r||[]);return n.providerData=n.providerData.filter(e=>s.has(e.providerId)),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function At(e,t,n=!1){const i=await Z(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return kt._forOperation(e,"link",i)}async function xt(e,t,n){await ie(t);const i=St(t.providerData),r=!1===e?"provider-already-linked":"no-such-provider";k(i.has(n)===e,t.auth,r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dt(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await Z(e,Ct(i,r,t,e),n);k(s.idToken,i,"internal-error");const o=X(s.idToken);k(o,i,"internal-error");const{sub:a}=o;return k(e.uid===a,i,"user-mismatch"),kt._forOperation(e,r,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&g(i,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lt(e,t,n=!1){const i="signIn",r=await Ct(e,i,t),s=await kt._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function Nt(e,t){return Lt(De(e),t)}async function Rt(e,t){const n=Object(i["k"])(e);return await xt(!1,n,t.providerId),At(n,t)}async function Mt(e,t){return Dt(Object(i["k"])(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(e,t){return U(e,"POST","/v1/accounts:signInWithCustomToken",$(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jt(e,t){const n=De(e),i=await Pt(n,{token:t,returnSecureToken:!0}),r=await kt._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(r.user),r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Bt._fromServerResponse(e,t):g(e,"internal-error")}}class Bt extends $t{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Bt(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(e,t,n){var i;k((null===(i=n.url)||void 0===i?void 0:i.length)>0,e,"invalid-continue-uri"),k("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(k(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(k(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ut(e,t,n){const r=Object(i["k"])(e),s={requestType:"PASSWORD_RESET",email:t};n&&Ft(r,s,n),await We(r,s)}async function Vt(e,t,n){await Be(Object(i["k"])(e),{oobCode:t,newPassword:n})}async function qt(e,t){await Ue(Object(i["k"])(e),{oobCode:t})}async function Ht(e,t){const n=Object(i["k"])(e),r=await Be(n,{oobCode:t}),s=r.requestType;switch(k(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":k(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":k(r.mfaInfo,n,"internal-error");default:k(r.email,n,"internal-error")}let o=null;return r.mfaInfo&&(o=$t._fromServerResponse(De(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:o},operation:s}}async function Wt(e,t){const{data:n}=await Ht(Object(i["k"])(e),t);return n.email}async function zt(e,t,n){const i=De(e),r=await bt(i,{returnSecureToken:!0,email:t,password:n}),s=await kt._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function Kt(e,t,n){return Nt(Object(i["k"])(e),ut.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gt(e,t,n){const r=Object(i["k"])(e),s={requestType:"EMAIL_SIGNIN",email:t};k(n.handleCodeInApp,r,"argument-error"),n&&Ft(r,s,n),await ze(r,s)}function Qt(e,t){const n=ct.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function Yt(e,t,n){const r=Object(i["k"])(e),s=ut.credentialWithLink(t,n||O());return k(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Nt(r,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xt(e,t){return B(e,"POST","/v1/accounts:createAuthUri",$(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jt(e,t){const n=A()?O():"http://localhost",r={identifier:t,continueUri:n},{signinMethods:s}=await Xt(Object(i["k"])(e),r);return s||[]}async function Zt(e,t){const n=Object(i["k"])(e),r=await e.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:r};t&&Ft(n.auth,s,t);const{email:o}=await He(n.auth,s);o!==e.email&&await e.reload()}async function en(e,t,n){const r=Object(i["k"])(e),s=await e.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:t};n&&Ft(r.auth,o,n);const{email:a}=await Ke(r.auth,o);a!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tn(e,t){return B(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nn(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=Object(i["k"])(e),s=await r.getIdToken(),o={idToken:s,displayName:t,photoUrl:n,returnSecureToken:!0},a=await Z(r,tn(r.auth,o));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find(({providerId:e})=>"password"===e);c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function rn(e,t){return on(Object(i["k"])(e),t,null)}function sn(e,t){return on(Object(i["k"])(e),null,t)}async function on(e,t,n){const{auth:i}=e,r=await e.getIdToken(),s={idToken:r,returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const o=await Z(e,Fe(i,s));await e._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(e){var t,n;if(!e)return null;const{providerId:i}=e,r=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!i&&(null===e||void 0===e?void 0:e.idToken)){const i=null===(n=null===(t=X(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(i){const e="anonymous"!==i&&"custom"!==i?i:null;return new cn(s,e)}}if(!i)return null;switch(i){case"facebook.com":return new ln(s,r);case"github.com":return new hn(s,r);case"google.com":return new dn(s,r);case"twitter.com":return new fn(s,r,e.screenName||null);case"custom":case"anonymous":return new cn(s,null);default:return new cn(s,i,r)}}class cn{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class un extends cn{constructor(e,t,n,i){super(e,t,n),this.username=i}}class ln extends cn{constructor(e,t){super(e,"facebook.com",t)}}class hn extends un{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class dn extends cn{constructor(e,t){super(e,"google.com",t)}}class fn extends un{constructor(e,t,n){super(e,"twitter.com",t,n)}}function pn(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:an(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,t){this.type=e,this.credential=t}static _fromIdtoken(e){return new mn("enroll",e)}static _fromMfaPendingCredential(e){return new mn("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return mn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return mn._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=De(e),i=t.customData._serverResponse,r=(i.mfaInfo||[]).map(e=>$t._fromServerResponse(n,e));k(i.mfaPendingCredential,n,"internal-error");const s=mn._fromMfaPendingCredential(i.mfaPendingCredential);return new vn(s,r,async e=>{const r=await e._process(n,s);delete i.mfaInfo,delete i.mfaPendingCredential;const o=Object.assign(Object.assign({},i),{idToken:r.idToken,refreshToken:r.refreshToken});switch(t.operationType){case"signIn":const e=await kt._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return k(t.user,n,"internal-error"),kt._forOperation(t.user,t.operationType,o);default:g(n,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function gn(e,t){var n;const r=Object(i["k"])(e),s=t;return k(t.customData.operationType,r,"argument-error"),k(null===(n=s.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,r,"argument-error"),vn._fromError(r,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(e,t){return B(e,"POST","/v2/accounts/mfaEnrollment:start",$(e,t))}function _n(e,t){return B(e,"POST","/v2/accounts/mfaEnrollment:finalize",$(e,t))}function wn(e,t){return B(e,"POST","/v2/accounts/mfaEnrollment:withdraw",$(e,t))}class bn{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(t=>$t._fromServerResponse(e.auth,t)))})}static _fromUser(e){return new bn(e)}async getSession(){return mn._fromIdtoken(await this.user.getIdToken())}async enroll(e,t){const n=e,i=await this.getSession(),r=await Z(this.user,n._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(r),this.user.reload()}async unenroll(e){const t="string"===typeof e?e:e.uid,n=await this.user.getIdToken(),i=await Z(this.user,wn(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:e})=>e!==t),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(r){if("auth/user-token-expired"!==r.code)throw r}}}const kn=new WeakMap;function En(e){const t=Object(i["k"])(e);return kn.has(t)||kn.set(t,bn._fromUser(t)),kn.get(t)}const In="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(In,"1"),this.storage.removeItem(In),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(){const e=Object(i["l"])();return ge(e)||Ee(e)}const Sn=1e3,On=10;class An extends Tn{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Cn()&&Oe(),this.fallbackToPolling=Se(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);Ce()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,On):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},Sn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}An.type="LOCAL";const xn=An;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends Tn{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Dn.type="SESSION";const Ln=Dn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Rn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map(async e=>e(t.origin,r)),a=await Nn(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Mn(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rn.receivers=[];class Pn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise((o,a)=>{const c=Mn("",20);i.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(u),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(){return window}function $n(e){jn().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(){return"undefined"!==typeof jn()["WorkerGlobalScope"]&&"function"===typeof jn()["importScripts"]}async function Fn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Un(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Vn(){return Bn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn="firebaseLocalStorageDb",Hn=1,Wn="firebaseLocalStorage",zn="fbase_key";class Kn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Gn(e,t){return e.transaction([Wn],t?"readwrite":"readonly").objectStore(Wn)}function Qn(){const e=indexedDB.deleteDatabase(qn);return new Kn(e).toPromise()}function Yn(){const e=indexedDB.open(qn,Hn);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Wn,{keyPath:zn})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Wn)?t(n):(n.close(),await Qn(),t(await Yn()))})})}async function Xn(e,t,n){const i=Gn(e,!0).put({[zn]:t,value:n});return new Kn(i).toPromise()}async function Jn(e,t){const n=Gn(e,!1).get(t),i=await new Kn(n).toPromise();return void 0===i?null:i.value}function Zn(e,t){const n=Gn(e,!0).delete(t);return new Kn(n).toPromise()}const ei=800,ti=3;class ni{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Yn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>ti)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rn._getInstance(Vn()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Fn(),!this.activeServiceWorker)return;this.sender=new Pn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Un()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yn();return await Xn(e,In,"1"),await Zn(e,In),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xn(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>Jn(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Zn(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Gn(e,!1).getAll();return new Kn(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ei)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ni.type="LOCAL";const ii=ni;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(e,t){return B(e,"POST","/v2/accounts/mfaSignIn:start",$(e,t))}function si(e,t){return B(e,"POST","/v2/accounts/mfaSignIn:finalize",$(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi(e){return(await B(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function ci(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=y("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",ai().appendChild(i)})}function ui(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=500,hi=6e4,di=1e12;class fi{constructor(e){this.auth=e,this.counter=di,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new pi(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||di;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||di;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||di;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class pi{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i="string"===typeof e?document.getElementById(e):e;k(i,"argument-error",{appName:t}),this.container=i,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout(()=>{this.responseToken=mi(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()},hi)},li))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function mi(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<e;i++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=ui("rcb"),gi=new N(3e4,6e4),yi="https://www.google.com/recaptcha/api.js?";class _i{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!jn().grecaptcha}load(e,t=""){return k(wi(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(jn().grecaptcha):new Promise((n,r)=>{const s=jn().setTimeout(()=>{r(y(e,"network-request-failed"))},gi.get());jn()[vi]=()=>{jn().clearTimeout(s),delete jn()[vi];const i=jn().grecaptcha;if(!i)return void r(y(e,"internal-error"));const o=i.render;i.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(i)};const o=`${yi}?${Object(i["x"])({onload:vi,render:"explicit",hl:t})}`;ci(o).catch(()=>{clearTimeout(s),r(y(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!jn().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function wi(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class bi{async load(e){return new fi(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki="recaptcha",Ei={theme:"light",type:"image"};class Ii{constructor(e,t=Object.assign({},Ei),n){this.parameters=t,this.type=ki,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=De(n),this.isInvisible="invisible"===this.parameters.size,k("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const i="string"===typeof e?document.getElementById(e):e;k(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new bi:new _i,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(n=>{const i=e=>{e&&(this.tokenChangeListeners.delete(i),n(e))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e})),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){k(!this.parameters.sitekey,this.auth,"argument-error"),k(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),k("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(e=>e(t)),"function"===typeof e)e(t);else if("string"===typeof e){const n=jn()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){k(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){k(A()&&!Bn(),this.auth,"internal-error"),await Ti(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await oi(this.auth);k(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return k(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Ti(){let e=null;return new Promise(t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()}).catch(t=>{throw e&&window.removeEventListener("load",e),t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=st._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Si(e,t,n){const r=De(e),s=await xi(r,t,Object(i["k"])(n));return new Ci(s,e=>Nt(r,e))}async function Oi(e,t,n){const r=Object(i["k"])(e);await xt(!1,r,"phone");const s=await xi(r.auth,t,Object(i["k"])(n));return new Ci(s,e=>Rt(r,e))}async function Ai(e,t,n){const r=Object(i["k"])(e),s=await xi(r.auth,t,Object(i["k"])(n));return new Ci(s,e=>Mt(r,e))}async function xi(e,t,n){var i;const r=await n.verify();try{let s;if(k("string"===typeof r,e,"argument-error"),k(n.type===ki,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){k("enroll"===t.type,e,"internal-error");const n=await yn(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{k("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;k(n,e,"missing-multi-factor-info");const o=await ri(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await et(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}async function Di(e,t){await At(Object(i["k"])(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this.providerId=Li.PROVIDER_ID,this.auth=De(e)}verifyPhoneNumber(e,t){return xi(this.auth,e,Object(i["k"])(t))}static credential(e,t){return st._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Li.credentialFromTaggedObject(t)}static credentialFromError(e){return Li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?st._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ni(e,t){return t?C(t):(k(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Li.PROVIDER_ID="phone",Li.PHONE_SIGN_IN_METHOD="phone";class Ri extends $e{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Xe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Xe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Mi(e){return Lt(e.auth,new Ri(e),e.bypassAuthState)}function Pi(e){const{auth:t,user:n}=e;return k(n,t,"internal-error"),Dt(n,new Ri(e),e.bypassAuthState)}async function ji(e){const{auth:t,user:n}=e;return k(n,t,"internal-error"),At(n,new Ri(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Mi;case"linkViaPopup":case"linkViaRedirect":return ji;case"reauthViaPopup":case"reauthViaRedirect":return Pi;default:g(this.auth,"internal-error")}}resolve(e){I(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){I(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=new N(2e3,1e4);async function Fi(e,t,n){const i=De(e);w(e,t,lt);const r=Ni(i,n),s=new qi(i,"signInViaPopup",t,r);return s.executeNotNull()}async function Ui(e,t,n){const r=Object(i["k"])(e);w(r.auth,t,lt);const s=Ni(r.auth,n),o=new qi(r.auth,"reauthViaPopup",t,s,r);return o.executeNotNull()}async function Vi(e,t,n){const r=Object(i["k"])(e);w(r.auth,t,lt);const s=Ni(r.auth,n),o=new qi(r.auth,"linkViaPopup",t,s,r);return o.executeNotNull()}class qi extends $i{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,qi.currentPopupAction&&qi.currentPopupAction.cancel(),qi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return k(e,this.auth,"internal-error"),e}async onExecution(){I(1===this.filter.length,"Popup operations only handle one event");const e=Mn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(y(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(y(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(y(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,Bi.get())};e()}}qi.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Hi="pendingRedirect",Wi=new Map;class zi extends $i{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Wi.get(this.auth._key());if(!e){try{const t=await Ki(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Wi.set(this.auth._key(),e)}return this.bypassAuthState||Wi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Ki(e,t){const n=Xi(t),i=Yi(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}async function Gi(e,t){return Yi(e)._set(Xi(t),"true")}function Qi(){Wi.clear()}function Yi(e){return C(e._redirectPersistence)}function Xi(e){return fe(Hi,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(e,t,n){return Zi(e,t,n)}async function Zi(e,t,n){const i=De(e);w(e,t,lt);const r=Ni(i,n);return await Gi(r,i),r._openRedirect(i,t,"signInViaRedirect")}function er(e,t,n){return tr(e,t,n)}async function tr(e,t,n){const r=Object(i["k"])(e);w(r.auth,t,lt);const s=Ni(r.auth,n);await Gi(s,r.auth);const o=await or(r);return s._openRedirect(r.auth,t,"reauthViaRedirect",o)}function nr(e,t,n){return ir(e,t,n)}async function ir(e,t,n){const r=Object(i["k"])(e);w(r.auth,t,lt);const s=Ni(r.auth,n);await xt(!1,r,t.providerId),await Gi(s,r.auth);const o=await or(r);return s._openRedirect(r.auth,t,"linkViaRedirect",o)}async function rr(e,t){return await De(e)._initializationPromise,sr(e,t,!1)}async function sr(e,t,n=!1){const i=De(e),r=Ni(i,t),s=new zi(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}async function or(e){const t=Mn(e.uid+":::");return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=6e5;class cr{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hr(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!lr(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(y(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ar&&this.cachedEventUids.clear(),this.cachedEventUids.has(ur(e))}saveEventToCache(e){this.cachedEventUids.add(ur(e)),this.lastProcessedEventTime=Date.now()}}function ur(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function lr({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function hr(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lr(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dr(e,t={}){return B(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pr=/^https?/;async function mr(e){if(e.config.emulator)return;const{authorizedDomains:t}=await dr(e);for(const i of t)try{if(vr(i))return}catch(n){}g(e,"unauthorized-domain")}function vr(e){const t=O(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!pr.test(n))return!1;if(fr.test(e))return i===e;const r=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+r+"|"+r+")$","i");return s.test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new N(3e4,6e4);function yr(){const e=jn().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function _r(e){return new Promise((t,n)=>{var i,r,s;function o(){yr(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{yr(),n(y(e,"network-request-failed"))},timeout:gr.get()})}if(null===(r=null===(i=jn().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=jn().gapi)||void 0===s?void 0:s.load)){const t=ui("iframefcb");return jn()[t]=()=>{gapi.load?o():n(y(e,"network-request-failed"))},ci("https://apis.google.com/js/api.js?onload="+t)}o()}}).catch(e=>{throw wr=null,e})}let wr=null;function br(e){return wr=wr||_r(e),wr}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new N(5e3,15e3),Er="__/auth/iframe",Ir="emulator/auth/iframe",Tr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Cr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Sr(e){const t=e.config;k(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?R(t,Ir):`https://${e.config.authDomain}/${Er}`,s={apiKey:t.apiKey,appName:e.name,v:r["SDK_VERSION"]},o=Cr.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${Object(i["x"])(s).slice(1)}`}async function Or(e){const t=await br(e),n=jn().gapi;return k(n,e,"internal-error"),t.open({where:document.body,url:Sr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Tr,dontclear:!0},t=>new Promise(async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=y(e,"network-request-failed"),s=jn().setTimeout(()=>{i(r)},kr.get());function o(){jn().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{i(r)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xr=500,Dr=600,Lr="_blank",Nr="http://localhost";class Rr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Mr(e,t,n,r=xr,s=Dr){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Ar),{width:r.toString(),height:s.toString(),top:o,left:a}),l=Object(i["l"])().toLowerCase();n&&(c=ye(l)?Lr:n),ve(l)&&(t=t||Nr,u.scrollbars="yes");const h=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(Te(l)&&"_self"!==c)return Pr(t||"",c),new Rr(null);const d=window.open(t||"",c,h);k(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Rr(d)}function Pr(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr="__/auth/handler",$r="emulator/auth/handler";function Br(e,t,n,s,o,a){k(e.config.authDomain,e,"auth-domain-config-required"),k(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:r["SDK_VERSION"],eventId:o};if(t instanceof lt){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",Object(i["p"])(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof ht){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const i of Object.keys(u))void 0===u[i]&&delete u[i];return`${Fr(e)}?${Object(i["x"])(u).slice(1)}`}function Fr({config:e}){return e.emulator?R(e,$r):`https://${e.authDomain}/${jr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur="webStorageSupport";class Vr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ln,this._completeRedirectFn=sr}async _openPopup(e,t,n,i){var r;I(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const s=Br(e,t,n,O(),i);return Mr(e,s,Mn())}async _openRedirect(e,t,n,i){return await this._originValidation(e),$n(Br(e,t,n,O(),i)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(I(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await Or(e),n=new cr(e);return t.register("authEvent",t=>{k(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const i=n.onEvent(t.authEvent);return{status:i?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Ur,{type:Ur},n=>{var i;const r=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[Ur];void 0!==r&&t(!!r),g(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=mr(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Se()||ge()||Ee()}}const qr=Vr;class Hr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return E("unexpected MultiFactorSessionType")}}}class Wr extends Hr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Wr(e)}_finalizeEnroll(e,t,n){return _n(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return si(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class zr{constructor(){}static assertion(e){return Wr._fromCredential(e)}}zr.FACTOR_ID="phone";var Kr="@firebase/auth",Gr="0.19.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Xr(e){Object(r["_registerComponent"])(new a["a"]("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),{apiKey:r,authDomain:s}=i.options;return(t=>{k(r&&!r.includes(":"),"invalid-api-key",{appName:t.name}),k(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:t.name});const i={apiKey:r,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ae(e)},o=new xe(t,i);return S(o,n),o})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const i=e.getProvider("auth-internal");i.initialize()})),Object(r["_registerComponent"])(new a["a"]("auth-internal",e=>{const t=De(e.getProvider("auth").getImmediate());return(e=>new Qr(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(r["registerVersion"])(Kr,Gr,Yr(e)),Object(r["registerVersion"])(Kr,Gr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jr(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xr("Browser");const Zr=2e3;async function es(e,t,n){var i;const{BuildInfo:r}=Jr();I(t.sessionId,"AuthEvent did not contain a session ID");const s=await ss(t.sessionId),o={};return Ee()?o["ibi"]=r.packageName:we()?o["apn"]=r.packageName:g(e,"operation-not-supported-in-this-environment"),r.displayName&&(o["appDisplayName"]=r.displayName),o["sessionId"]=s,Br(e,n,t.type,void 0,null!==(i=t.eventId)&&void 0!==i?i:void 0,o)}async function ts(e){const{BuildInfo:t}=Jr(),n={};Ee()?n.iosBundleId=t.packageName:we()?n.androidPackageName=t.packageName:g(e,"operation-not-supported-in-this-environment"),await dr(e,n)}function ns(e){const{cordova:t}=Jr();return new Promise(n=>{t.plugins.browsertab.isAvailable(i=>{let r=null;i?t.plugins.browsertab.openUrl(e):r=t.InAppBrowser.open(e,Ie()?"_blank":"_system","location=yes"),n(r)})})}async function is(e,t,n){const{cordova:i}=Jr();let r=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var e;s();const t=null===(e=i.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(y(e,"redirect-cancelled-by-user"))},Zr))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}t.addPassiveListener(c),document.addEventListener("resume",u,!1),we()&&document.addEventListener("visibilitychange",l,!1),r=()=>{t.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{r()}}function rs(e){var t,n,i,r,s,o,a,c,u,l;const h=Jr();k("function"===typeof(null===(t=null===h||void 0===h?void 0:h.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),k("undefined"!==typeof(null===(n=null===h||void 0===h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),k("function"===typeof(null===(s=null===(r=null===(i=null===h||void 0===h?void 0:h.cordova)||void 0===i?void 0:i.plugins)||void 0===r?void 0:r.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),k("function"===typeof(null===(c=null===(a=null===(o=null===h||void 0===h?void 0:h.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),k("function"===typeof(null===(l=null===(u=null===h||void 0===h?void 0:h.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function ss(e){const t=os(e),n=await crypto.subtle.digest("SHA-256",t),i=Array.from(new Uint8Array(n));return i.map(e=>e.toString(16).padStart(2,"0")).join("")}function os(e){if(I(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=20;class cs extends cr{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function us(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:fs(),postBody:null,tenantId:e.tenantId,error:y(e,"no-auth-event")}}function ls(e,t){return ps()._set(ms(e),t)}async function hs(e){const t=await ps()._get(ms(e));return t&&await ps()._remove(ms(e)),t}function ds(e,t){var n,i;const r=gs(t);if(r.includes("/__/auth/callback")){const t=ys(r),s=t["firebaseError"]?vs(decodeURIComponent(t["firebaseError"])):null,o=null===(i=null===(n=null===s||void 0===s?void 0:s["code"])||void 0===n?void 0:n.split("auth/"))||void 0===i?void 0:i[1],a=o?y(o):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:r,postBody:null}}return null}function fs(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<as;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function ps(){return C(xn)}function ms(e){return fe("authEvent",e.config.apiKey,e.name)}function vs(e){try{return JSON.parse(e)}catch(t){return null}}function gs(e){const t=ys(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,i=ys(n)["link"],r=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,s=ys(r)["link"];return s||r||i||n||e}function ys(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return Object(i["y"])(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=500;class ws{constructor(){this._redirectPersistence=Ln,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=sr}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new cs(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){g(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,i){rs(e);const r=await this._initialize(e);await r.initialized(),r.resetRedirect(),Qi(),await this._originValidation(e);const s=us(e,n,i);await ls(e,s);const o=await es(e,s,t),a=await ns(o);return is(e,r,a)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ts(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:i,BuildInfo:r}=Jr(),s=setTimeout(async()=>{await hs(e),t.onEvent(ks())},_s),o=async n=>{clearTimeout(s);const i=await hs(e);let r=null;i&&(null===n||void 0===n?void 0:n["url"])&&(r=ds(i,n["url"])),t.onEvent(r||ks())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,o);const a=i,c=r.packageName.toLowerCase()+"://";Jr().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&o({url:e}),"function"===typeof a)try{a(e)}catch(t){console.error(t)}}}}const bs=ws;function ks(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:y("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(e,t){De(e)._logFramework(t)}},"1fd5":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return C})),n.d(t,"c",(function(){return T})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return A})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return P})),n.d(t,"h",(function(){return D})),n.d(t,"i",(function(){return u})),n.d(t,"j",(function(){return M})),n.d(t,"k",(function(){return F})),n.d(t,"l",(function(){return f})),n.d(t,"m",(function(){return v})),n.d(t,"n",(function(){return g})),n.d(t,"o",(function(){return _})),n.d(t,"p",(function(){return x})),n.d(t,"q",(function(){return w})),n.d(t,"r",(function(){return E})),n.d(t,"s",(function(){return p})),n.d(t,"t",(function(){return m})),n.d(t,"u",(function(){return y})),n.d(t,"v",(function(){return k})),n.d(t,"w",(function(){return b})),n.d(t,"x",(function(){return N})),n.d(t,"y",(function(){return R}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296===(64512&r)&&i+1<e.length&&56320===(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},r=function(e){const t=[];let n=0,i=0;while(n<e.length){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[i++]=String.fromCharCode(55296+(c>>10)),t[i++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const t=e[r],s=r+1<e.length,o=s?e[r+1]:0,a=r+2<e.length,c=a?e[r+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),i.push(n[u],n[l],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):r(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const t=n[e.charAt(r++)],s=r<e.length,o=s?n[e.charAt(r)]:0;++r;const a=r<e.length,c=a?n[e.charAt(r)]:64;++r;const u=r<e.length,l=u?n[e.charAt(r)]:64;if(++r,null==t||null==o||null==c||null==l)throw Error();const h=t<<2|o>>4;if(i.push(h),64!==c){const e=o<<4&240|c>>2;if(i.push(e),64!==l){const e=c<<6&192|l;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){const t=i(e);return s.encodeByteArray(t,!0)},a=function(e){return o(e).replace(/\./g,"")},c=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&l(n)&&(e[n]=u(e[n],t[n]));return e}function l(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+i,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function p(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(f())}function m(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(t){return!1}}function v(){return"object"===typeof self&&self.self===self}function g(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function _(){return f().indexOf("Electron/")>=0}function w(){const e=f();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function b(){return f().indexOf("MSAppHost/")>=0}function k(){return!m()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function E(){return"object"===typeof indexedDB}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const I="FirebaseError";class T extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=I,Object.setPrototypeOf(this,T.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,C.prototype.create)}}class C{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?S(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new T(i,o,n);return a}}function S(e,t){return e.replace(O,(e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`})}const O=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function A(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function x(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function D(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(L(n)&&L(s)){if(!D(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function L(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function R(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}}),t}function M(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e,t){const n=new j(e,t);return n.subscribe.bind(n)}class j{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=$(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=B),void 0===i.error&&(i.error=B),void 0===i.complete&&(i.complete=B);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}}),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function B(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function F(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"))},2266:function(e,t,n){var i=n("da84"),r=n("0366"),s=n("c65b"),o=n("825a"),a=n("0d51"),c=n("e95a"),u=n("07fa"),l=n("3a9b"),h=n("9a1f"),d=n("35a1"),f=n("2a62"),p=i.TypeError,m=function(e,t){this.stopped=e,this.result=t},v=m.prototype;e.exports=function(e,t,n){var i,g,y,_,w,b,k,E=n&&n.that,I=!(!n||!n.AS_ENTRIES),T=!(!n||!n.IS_ITERATOR),C=!(!n||!n.INTERRUPTED),S=r(t,E),O=function(e){return i&&f(i,"normal",e),new m(!0,e)},A=function(e){return I?(o(e),C?S(e[0],e[1],O):S(e[0],e[1])):C?S(e,O):S(e)};if(T)i=e;else{if(g=d(e),!g)throw p(a(e)+" is not iterable");if(c(g)){for(y=0,_=u(e);_>y;y++)if(w=A(e[y]),w&&l(v,w))return w;return new m(!1)}i=h(e,g)}b=i.next;while(!(k=s(b,i)).done){try{w=A(k.value)}catch(x){f(i,"throw",x)}if("object"==typeof w&&w&&l(v,w))return w}return new m(!1)}},"22e5":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return u}));var i=n("1fd5");class r{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new i["a"];if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),i=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(r);n===e&&s.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(e,t,n){var i=n("5926"),r=Math.max,s=Math.min;e.exports=function(e,t){var n=i(e);return n<0?r(n+t,0):s(n,t)}},"23e7":function(e,t,n){var i=n("da84"),r=n("06cf").f,s=n("9112"),o=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");e.exports=function(e,t){var n,l,h,d,f,p,m=e.target,v=e.global,g=e.stat;if(l=v?i:g?i[m]||a(m,{}):(i[m]||{}).prototype,l)for(h in t){if(f=t[h],e.noTargetGet?(p=r(l,h),d=p&&p.value):d=l[h],n=u(v?h:m+(g?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,e)}}},"241c":function(e,t,n){var i=n("ca84"),r=n("7839"),s=r.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,s)}},"256a":function(e,t,n){"use strict";n("5994")},2626:function(e,t,n){"use strict";var i=n("d066"),r=n("9bf2"),s=n("b622"),o=n("83ab"),a=s("species");e.exports=function(e){var t=i(e),n=r.f;o&&t&&!t[a]&&n(t,a,{configurable:!0,get:function(){return this}})}},2877:function(e,t,n){"use strict";function i(e,t,n,i,r,s,o,a){var c,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),i&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=c):r&&(c=a?function(){r.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(e,t){return c.call(t),l(e,t)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:e,options:u}}n.d(t,"a",(function(){return i}))},"2a62":function(e,t,n){var i=n("c65b"),r=n("825a"),s=n("dc4a");e.exports=function(e,t,n){var o,a;r(e);try{if(o=s(e,"return"),!o){if("throw"===t)throw n;return n}o=i(o,e)}catch(c){a=!0,o=c}if("throw"===t)throw n;if(a)throw o;return r(o),n}},"2b0e":function(e,t,n){"use strict";(function(e){
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function i(e){return void 0===e||null===e}function r(e){return void 0!==e&&null!==e}function s(e){return!0===e}function o(e){return!1===e}function a(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function c(e){return null!==e&&"object"===typeof e}var u=Object.prototype.toString;function l(e){return"[object Object]"===u.call(e)}function h(e){return"[object RegExp]"===u.call(e)}function d(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function f(e){return r(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function p(e){return null==e?"":Array.isArray(e)||l(e)&&e.toString===u?JSON.stringify(e,null,2):String(e)}function m(e){var t=parseFloat(e);return isNaN(t)?e:t}function v(e,t){for(var n=Object.create(null),i=e.split(","),r=0;r<i.length;r++)n[i[r]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}v("slot,component",!0);var g=v("key,ref,slot,slot-scope,is");function y(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}var _=Object.prototype.hasOwnProperty;function w(e,t){return _.call(e,t)}function b(e){var t=Object.create(null);return function(n){var i=t[n];return i||(t[n]=e(n))}}var k=/-(\w)/g,E=b((function(e){return e.replace(k,(function(e,t){return t?t.toUpperCase():""}))})),I=b((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})),T=/\B([A-Z])/g,C=b((function(e){return e.replace(T,"-$1").toLowerCase()}));function S(e,t){function n(n){var i=arguments.length;return i?i>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function O(e,t){return e.bind(t)}var A=Function.prototype.bind?O:S;function x(e,t){t=t||0;var n=e.length-t,i=new Array(n);while(n--)i[n]=e[n+t];return i}function D(e,t){for(var n in t)e[n]=t[n];return e}function L(e){for(var t={},n=0;n<e.length;n++)e[n]&&D(t,e[n]);return t}function N(e,t,n){}var R=function(e,t,n){return!1},M=function(e){return e};function P(e,t){if(e===t)return!0;var n=c(e),i=c(t);if(!n||!i)return!n&&!i&&String(e)===String(t);try{var r=Array.isArray(e),s=Array.isArray(t);if(r&&s)return e.length===t.length&&e.every((function(e,n){return P(e,t[n])}));if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(r||s)return!1;var o=Object.keys(e),a=Object.keys(t);return o.length===a.length&&o.every((function(n){return P(e[n],t[n])}))}catch(u){return!1}}function j(e,t){for(var n=0;n<e.length;n++)if(P(e[n],t))return n;return-1}function $(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}var B="data-server-rendered",F=["component","directive","filter"],U=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],V={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:R,isReservedAttr:R,isUnknownElement:R,getTagNamespace:N,parsePlatformTagName:M,mustUseProp:R,async:!0,_lifecycleHooks:U},q=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function H(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function W(e,t,n,i){Object.defineProperty(e,t,{value:n,enumerable:!!i,writable:!0,configurable:!0})}var z=new RegExp("[^"+q.source+".$_\\d]");function K(e){if(!z.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}var G,Q="__proto__"in{},Y="undefined"!==typeof window,X="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,J=X&&WXEnvironment.platform.toLowerCase(),Z=Y&&window.navigator.userAgent.toLowerCase(),ee=Z&&/msie|trident/.test(Z),te=Z&&Z.indexOf("msie 9.0")>0,ne=Z&&Z.indexOf("edge/")>0,ie=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===J),re=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/)),se={}.watch,oe=!1;if(Y)try{var ae={};Object.defineProperty(ae,"passive",{get:function(){oe=!0}}),window.addEventListener("test-passive",null,ae)}catch(Io){}var ce=function(){return void 0===G&&(G=!Y&&!X&&"undefined"!==typeof e&&(e["process"]&&"server"===e["process"].env.VUE_ENV)),G},ue=Y&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function le(e){return"function"===typeof e&&/native code/.test(e.toString())}var he,de="undefined"!==typeof Symbol&&le(Symbol)&&"undefined"!==typeof Reflect&&le(Reflect.ownKeys);he="undefined"!==typeof Set&&le(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var fe=N,pe=0,me=function(){this.id=pe++,this.subs=[]};me.prototype.addSub=function(e){this.subs.push(e)},me.prototype.removeSub=function(e){y(this.subs,e)},me.prototype.depend=function(){me.target&&me.target.addDep(this)},me.prototype.notify=function(){var e=this.subs.slice();for(var t=0,n=e.length;t<n;t++)e[t].update()},me.target=null;var ve=[];function ge(e){ve.push(e),me.target=e}function ye(){ve.pop(),me.target=ve[ve.length-1]}var _e=function(e,t,n,i,r,s,o,a){this.tag=e,this.data=t,this.children=n,this.text=i,this.elm=r,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},we={child:{configurable:!0}};we.child.get=function(){return this.componentInstance},Object.defineProperties(_e.prototype,we);var be=function(e){void 0===e&&(e="");var t=new _e;return t.text=e,t.isComment=!0,t};function ke(e){return new _e(void 0,void 0,void 0,String(e))}function Ee(e){var t=new _e(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var Ie=Array.prototype,Te=Object.create(Ie),Ce=["push","pop","shift","unshift","splice","sort","reverse"];Ce.forEach((function(e){var t=Ie[e];W(Te,e,(function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];var r,s=t.apply(this,n),o=this.__ob__;switch(e){case"push":case"unshift":r=n;break;case"splice":r=n.slice(2);break}return r&&o.observeArray(r),o.dep.notify(),s}))}));var Se=Object.getOwnPropertyNames(Te),Oe=!0;function Ae(e){Oe=e}var xe=function(e){this.value=e,this.dep=new me,this.vmCount=0,W(e,"__ob__",this),Array.isArray(e)?(Q?De(e,Te):Le(e,Te,Se),this.observeArray(e)):this.walk(e)};function De(e,t){e.__proto__=t}function Le(e,t,n){for(var i=0,r=n.length;i<r;i++){var s=n[i];W(e,s,t[s])}}function Ne(e,t){var n;if(c(e)&&!(e instanceof _e))return w(e,"__ob__")&&e.__ob__ instanceof xe?n=e.__ob__:Oe&&!ce()&&(Array.isArray(e)||l(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new xe(e)),t&&n&&n.vmCount++,n}function Re(e,t,n,i,r){var s=new me,o=Object.getOwnPropertyDescriptor(e,t);if(!o||!1!==o.configurable){var a=o&&o.get,c=o&&o.set;a&&!c||2!==arguments.length||(n=e[t]);var u=!r&&Ne(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=a?a.call(e):n;return me.target&&(s.depend(),u&&(u.dep.depend(),Array.isArray(t)&&je(t))),t},set:function(t){var i=a?a.call(e):n;t===i||t!==t&&i!==i||a&&!c||(c?c.call(e,t):n=t,u=!r&&Ne(t),s.notify())}})}}function Me(e,t,n){if(Array.isArray(e)&&d(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n,n;var i=e.__ob__;return e._isVue||i&&i.vmCount?n:i?(Re(i.value,t,n),i.dep.notify(),n):(e[t]=n,n)}function Pe(e,t){if(Array.isArray(e)&&d(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||w(e,t)&&(delete e[t],n&&n.dep.notify())}}function je(e){for(var t=void 0,n=0,i=e.length;n<i;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&je(t)}xe.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)Re(e,t[n])},xe.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)Ne(e[t])};var $e=V.optionMergeStrategies;function Be(e,t){if(!t)return e;for(var n,i,r,s=de?Reflect.ownKeys(t):Object.keys(t),o=0;o<s.length;o++)n=s[o],"__ob__"!==n&&(i=e[n],r=t[n],w(e,n)?i!==r&&l(i)&&l(r)&&Be(i,r):Me(e,n,r));return e}function Fe(e,t,n){return n?function(){var i="function"===typeof t?t.call(n,n):t,r="function"===typeof e?e.call(n,n):e;return i?Be(i,r):r}:t?e?function(){return Be("function"===typeof t?t.call(this,this):t,"function"===typeof e?e.call(this,this):e)}:t:e}function Ue(e,t){var n=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return n?Ve(n):n}function Ve(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}function qe(e,t,n,i){var r=Object.create(e||null);return t?D(r,t):r}$e.data=function(e,t,n){return n?Fe(e,t,n):t&&"function"!==typeof t?e:Fe(e,t)},U.forEach((function(e){$e[e]=Ue})),F.forEach((function(e){$e[e+"s"]=qe})),$e.watch=function(e,t,n,i){if(e===se&&(e=void 0),t===se&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var r={};for(var s in D(r,e),t){var o=r[s],a=t[s];o&&!Array.isArray(o)&&(o=[o]),r[s]=o?o.concat(a):Array.isArray(a)?a:[a]}return r},$e.props=$e.methods=$e.inject=$e.computed=function(e,t,n,i){if(!e)return t;var r=Object.create(null);return D(r,e),t&&D(r,t),r},$e.provide=Fe;var He=function(e,t){return void 0===t?e:t};function We(e,t){var n=e.props;if(n){var i,r,s,o={};if(Array.isArray(n)){i=n.length;while(i--)r=n[i],"string"===typeof r&&(s=E(r),o[s]={type:null})}else if(l(n))for(var a in n)r=n[a],s=E(a),o[s]=l(r)?r:{type:r};else 0;e.props=o}}function ze(e,t){var n=e.inject;if(n){var i=e.inject={};if(Array.isArray(n))for(var r=0;r<n.length;r++)i[n[r]]={from:n[r]};else if(l(n))for(var s in n){var o=n[s];i[s]=l(o)?D({from:s},o):{from:o}}else 0}}function Ke(e){var t=e.directives;if(t)for(var n in t){var i=t[n];"function"===typeof i&&(t[n]={bind:i,update:i})}}function Ge(e,t,n){if("function"===typeof t&&(t=t.options),We(t,n),ze(t,n),Ke(t),!t._base&&(t.extends&&(e=Ge(e,t.extends,n)),t.mixins))for(var i=0,r=t.mixins.length;i<r;i++)e=Ge(e,t.mixins[i],n);var s,o={};for(s in e)a(s);for(s in t)w(e,s)||a(s);function a(i){var r=$e[i]||He;o[i]=r(e[i],t[i],n,i)}return o}function Qe(e,t,n,i){if("string"===typeof n){var r=e[t];if(w(r,n))return r[n];var s=E(n);if(w(r,s))return r[s];var o=I(s);if(w(r,o))return r[o];var a=r[n]||r[s]||r[o];return a}}function Ye(e,t,n,i){var r=t[e],s=!w(n,e),o=n[e],a=tt(Boolean,r.type);if(a>-1)if(s&&!w(r,"default"))o=!1;else if(""===o||o===C(e)){var c=tt(String,r.type);(c<0||a<c)&&(o=!0)}if(void 0===o){o=Xe(i,r,e);var u=Oe;Ae(!0),Ne(o),Ae(u)}return o}function Xe(e,t,n){if(w(t,"default")){var i=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:"function"===typeof i&&"Function"!==Ze(t.type)?i.call(e):i}}var Je=/^\s*function (\w+)/;function Ze(e){var t=e&&e.toString().match(Je);return t?t[1]:""}function et(e,t){return Ze(e)===Ze(t)}function tt(e,t){if(!Array.isArray(t))return et(t,e)?0:-1;for(var n=0,i=t.length;n<i;n++)if(et(t[n],e))return n;return-1}function nt(e,t,n){ge();try{if(t){var i=t;while(i=i.$parent){var r=i.$options.errorCaptured;if(r)for(var s=0;s<r.length;s++)try{var o=!1===r[s].call(i,e,t,n);if(o)return}catch(Io){rt(Io,i,"errorCaptured hook")}}}rt(e,t,n)}finally{ye()}}function it(e,t,n,i,r){var s;try{s=n?e.apply(t,n):e.call(t),s&&!s._isVue&&f(s)&&!s._handled&&(s.catch((function(e){return nt(e,i,r+" (Promise/async)")})),s._handled=!0)}catch(Io){nt(Io,i,r)}return s}function rt(e,t,n){if(V.errorHandler)try{return V.errorHandler.call(null,e,t,n)}catch(Io){Io!==e&&st(Io,null,"config.errorHandler")}st(e,t,n)}function st(e,t,n){if(!Y&&!X||"undefined"===typeof console)throw e;console.error(e)}var ot,at=!1,ct=[],ut=!1;function lt(){ut=!1;var e=ct.slice(0);ct.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!==typeof Promise&&le(Promise)){var ht=Promise.resolve();ot=function(){ht.then(lt),ie&&setTimeout(N)},at=!0}else if(ee||"undefined"===typeof MutationObserver||!le(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ot="undefined"!==typeof setImmediate&&le(setImmediate)?function(){setImmediate(lt)}:function(){setTimeout(lt,0)};else{var dt=1,ft=new MutationObserver(lt),pt=document.createTextNode(String(dt));ft.observe(pt,{characterData:!0}),ot=function(){dt=(dt+1)%2,pt.data=String(dt)},at=!0}function mt(e,t){var n;if(ct.push((function(){if(e)try{e.call(t)}catch(Io){nt(Io,t,"nextTick")}else n&&n(t)})),ut||(ut=!0,ot()),!e&&"undefined"!==typeof Promise)return new Promise((function(e){n=e}))}var vt=new he;function gt(e){yt(e,vt),vt.clear()}function yt(e,t){var n,i,r=Array.isArray(e);if(!(!r&&!c(e)||Object.isFrozen(e)||e instanceof _e)){if(e.__ob__){var s=e.__ob__.dep.id;if(t.has(s))return;t.add(s)}if(r){n=e.length;while(n--)yt(e[n],t)}else{i=Object.keys(e),n=i.length;while(n--)yt(e[i[n]],t)}}}var _t=b((function(e){var t="&"===e.charAt(0);e=t?e.slice(1):e;var n="~"===e.charAt(0);e=n?e.slice(1):e;var i="!"===e.charAt(0);return e=i?e.slice(1):e,{name:e,once:n,capture:i,passive:t}}));function wt(e,t){function n(){var e=arguments,i=n.fns;if(!Array.isArray(i))return it(i,null,arguments,t,"v-on handler");for(var r=i.slice(),s=0;s<r.length;s++)it(r[s],null,e,t,"v-on handler")}return n.fns=e,n}function bt(e,t,n,r,o,a){var c,u,l,h;for(c in e)u=e[c],l=t[c],h=_t(c),i(u)||(i(l)?(i(u.fns)&&(u=e[c]=wt(u,a)),s(h.once)&&(u=e[c]=o(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,e[c]=l));for(c in t)i(e[c])&&(h=_t(c),r(h.name,t[c],h.capture))}function kt(e,t,n){var o;e instanceof _e&&(e=e.data.hook||(e.data.hook={}));var a=e[t];function c(){n.apply(this,arguments),y(o.fns,c)}i(a)?o=wt([c]):r(a.fns)&&s(a.merged)?(o=a,o.fns.push(c)):o=wt([a,c]),o.merged=!0,e[t]=o}function Et(e,t,n){var s=t.options.props;if(!i(s)){var o={},a=e.attrs,c=e.props;if(r(a)||r(c))for(var u in s){var l=C(u);It(o,c,u,l,!0)||It(o,a,u,l,!1)}return o}}function It(e,t,n,i,s){if(r(t)){if(w(t,n))return e[n]=t[n],s||delete t[n],!0;if(w(t,i))return e[n]=t[i],s||delete t[i],!0}return!1}function Tt(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}function Ct(e){return a(e)?[ke(e)]:Array.isArray(e)?Ot(e):void 0}function St(e){return r(e)&&r(e.text)&&o(e.isComment)}function Ot(e,t){var n,o,c,u,l=[];for(n=0;n<e.length;n++)o=e[n],i(o)||"boolean"===typeof o||(c=l.length-1,u=l[c],Array.isArray(o)?o.length>0&&(o=Ot(o,(t||"")+"_"+n),St(o[0])&&St(u)&&(l[c]=ke(u.text+o[0].text),o.shift()),l.push.apply(l,o)):a(o)?St(u)?l[c]=ke(u.text+o):""!==o&&l.push(ke(o)):St(o)&&St(u)?l[c]=ke(u.text+o.text):(s(e._isVList)&&r(o.tag)&&i(o.key)&&r(t)&&(o.key="__vlist"+t+"_"+n+"__"),l.push(o)));return l}function At(e){var t=e.$options.provide;t&&(e._provided="function"===typeof t?t.call(e):t)}function xt(e){var t=Dt(e.$options.inject,e);t&&(Ae(!1),Object.keys(t).forEach((function(n){Re(e,n,t[n])})),Ae(!0))}function Dt(e,t){if(e){for(var n=Object.create(null),i=de?Reflect.ownKeys(e):Object.keys(e),r=0;r<i.length;r++){var s=i[r];if("__ob__"!==s){var o=e[s].from,a=t;while(a){if(a._provided&&w(a._provided,o)){n[s]=a._provided[o];break}a=a.$parent}if(!a)if("default"in e[s]){var c=e[s].default;n[s]="function"===typeof c?c.call(t):c}else 0}}return n}}function Lt(e,t){if(!e||!e.length)return{};for(var n={},i=0,r=e.length;i<r;i++){var s=e[i],o=s.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,s.context!==t&&s.fnContext!==t||!o||null==o.slot)(n.default||(n.default=[])).push(s);else{var a=o.slot,c=n[a]||(n[a]=[]);"template"===s.tag?c.push.apply(c,s.children||[]):c.push(s)}}for(var u in n)n[u].every(Nt)&&delete n[u];return n}function Nt(e){return e.isComment&&!e.asyncFactory||" "===e.text}function Rt(e){return e.isComment&&e.asyncFactory}function Mt(e,t,i){var r,s=Object.keys(t).length>0,o=e?!!e.$stable:!s,a=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(o&&i&&i!==n&&a===i.$key&&!s&&!i.$hasNormal)return i;for(var c in r={},e)e[c]&&"$"!==c[0]&&(r[c]=Pt(t,c,e[c]))}else r={};for(var u in t)u in r||(r[u]=jt(t,u));return e&&Object.isExtensible(e)&&(e._normalized=r),W(r,"$stable",o),W(r,"$key",a),W(r,"$hasNormal",s),r}function Pt(e,t,n){var i=function(){var e=arguments.length?n.apply(null,arguments):n({});e=e&&"object"===typeof e&&!Array.isArray(e)?[e]:Ct(e);var t=e&&e[0];return e&&(!t||1===e.length&&t.isComment&&!Rt(t))?void 0:e};return n.proxy&&Object.defineProperty(e,t,{get:i,enumerable:!0,configurable:!0}),i}function jt(e,t){return function(){return e[t]}}function $t(e,t){var n,i,s,o,a;if(Array.isArray(e)||"string"===typeof e)for(n=new Array(e.length),i=0,s=e.length;i<s;i++)n[i]=t(e[i],i);else if("number"===typeof e)for(n=new Array(e),i=0;i<e;i++)n[i]=t(i+1,i);else if(c(e))if(de&&e[Symbol.iterator]){n=[];var u=e[Symbol.iterator](),l=u.next();while(!l.done)n.push(t(l.value,n.length)),l=u.next()}else for(o=Object.keys(e),n=new Array(o.length),i=0,s=o.length;i<s;i++)a=o[i],n[i]=t(e[a],a,i);return r(n)||(n=[]),n._isVList=!0,n}function Bt(e,t,n,i){var r,s=this.$scopedSlots[e];s?(n=n||{},i&&(n=D(D({},i),n)),r=s(n)||("function"===typeof t?t():t)):r=this.$slots[e]||("function"===typeof t?t():t);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},r):r}function Ft(e){return Qe(this.$options,"filters",e,!0)||M}function Ut(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}function Vt(e,t,n,i,r){var s=V.keyCodes[t]||n;return r&&i&&!V.keyCodes[t]?Ut(r,i):s?Ut(s,e):i?C(i)!==t:void 0===e}function qt(e,t,n,i,r){if(n)if(c(n)){var s;Array.isArray(n)&&(n=L(n));var o=function(o){if("class"===o||"style"===o||g(o))s=e;else{var a=e.attrs&&e.attrs.type;s=i||V.mustUseProp(t,a,o)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var c=E(o),u=C(o);if(!(c in s)&&!(u in s)&&(s[o]=n[o],r)){var l=e.on||(e.on={});l["update:"+o]=function(e){n[o]=e}}};for(var a in n)o(a)}else;return e}function Ht(e,t){var n=this._staticTrees||(this._staticTrees=[]),i=n[e];return i&&!t||(i=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),zt(i,"__static__"+e,!1)),i}function Wt(e,t,n){return zt(e,"__once__"+t+(n?"_"+n:""),!0),e}function zt(e,t,n){if(Array.isArray(e))for(var i=0;i<e.length;i++)e[i]&&"string"!==typeof e[i]&&Kt(e[i],t+"_"+i,n);else Kt(e,t,n)}function Kt(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function Gt(e,t){if(t)if(l(t)){var n=e.on=e.on?D({},e.on):{};for(var i in t){var r=n[i],s=t[i];n[i]=r?[].concat(r,s):s}}else;return e}function Qt(e,t,n,i){t=t||{$stable:!n};for(var r=0;r<e.length;r++){var s=e[r];Array.isArray(s)?Qt(s,t,n):s&&(s.proxy&&(s.fn.proxy=!0),t[s.key]=s.fn)}return i&&(t.$key=i),t}function Yt(e,t){for(var n=0;n<t.length;n+=2){var i=t[n];"string"===typeof i&&i&&(e[t[n]]=t[n+1])}return e}function Xt(e,t){return"string"===typeof e?t+e:e}function Jt(e){e._o=Wt,e._n=m,e._s=p,e._l=$t,e._t=Bt,e._q=P,e._i=j,e._m=Ht,e._f=Ft,e._k=Vt,e._b=qt,e._v=ke,e._e=be,e._u=Qt,e._g=Gt,e._d=Yt,e._p=Xt}function Zt(e,t,i,r,o){var a,c=this,u=o.options;w(r,"_uid")?(a=Object.create(r),a._original=r):(a=r,r=r._original);var l=s(u._compiled),h=!l;this.data=e,this.props=t,this.children=i,this.parent=r,this.listeners=e.on||n,this.injections=Dt(u.inject,r),this.slots=function(){return c.$slots||Mt(e.scopedSlots,c.$slots=Lt(i,r)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Mt(e.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Mt(e.scopedSlots,this.$slots)),u._scopeId?this._c=function(e,t,n,i){var s=fn(a,e,t,n,i,h);return s&&!Array.isArray(s)&&(s.fnScopeId=u._scopeId,s.fnContext=r),s}:this._c=function(e,t,n,i){return fn(a,e,t,n,i,h)}}function en(e,t,i,s,o){var a=e.options,c={},u=a.props;if(r(u))for(var l in u)c[l]=Ye(l,u,t||n);else r(i.attrs)&&nn(c,i.attrs),r(i.props)&&nn(c,i.props);var h=new Zt(i,c,o,s,e),d=a.render.call(null,h._c,h);if(d instanceof _e)return tn(d,i,h.parent,a,h);if(Array.isArray(d)){for(var f=Ct(d)||[],p=new Array(f.length),m=0;m<f.length;m++)p[m]=tn(f[m],i,h.parent,a,h);return p}}function tn(e,t,n,i,r){var s=Ee(e);return s.fnContext=n,s.fnOptions=i,t.slot&&((s.data||(s.data={})).slot=t.slot),s}function nn(e,t){for(var n in t)e[E(n)]=t[n]}Jt(Zt.prototype);var rn={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;rn.prepatch(n,n)}else{var i=e.componentInstance=an(e,Dn);i.$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var n=t.componentOptions,i=t.componentInstance=e.componentInstance;Pn(i,n.propsData,n.listeners,t,n.children)},insert:function(e){var t=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,Fn(n,"mounted")),e.data.keepAlive&&(t._isMounted?Zn(n):$n(n,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?Bn(t,!0):t.$destroy())}},sn=Object.keys(rn);function on(e,t,n,o,a){if(!i(e)){var u=n.$options._base;if(c(e)&&(e=u.extend(e)),"function"===typeof e){var l;if(i(e.cid)&&(l=e,e=En(l,u),void 0===e))return kn(l,t,n,o,a);t=t||{},ki(e),r(t.model)&&ln(e.options,t);var h=Et(t,e,a);if(s(e.options.functional))return en(e,h,t,n,o);var d=t.on;if(t.on=t.nativeOn,s(e.options.abstract)){var f=t.slot;t={},f&&(t.slot=f)}cn(t);var p=e.options.name||a,m=new _e("vue-component-"+e.cid+(p?"-"+p:""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:h,listeners:d,tag:a,children:o},l);return m}}}function an(e,t){var n={_isComponent:!0,_parentVnode:e,parent:t},i=e.data.inlineTemplate;return r(i)&&(n.render=i.render,n.staticRenderFns=i.staticRenderFns),new e.componentOptions.Ctor(n)}function cn(e){for(var t=e.hook||(e.hook={}),n=0;n<sn.length;n++){var i=sn[n],r=t[i],s=rn[i];r===s||r&&r._merged||(t[i]=r?un(s,r):s)}}function un(e,t){var n=function(n,i){e(n,i),t(n,i)};return n._merged=!0,n}function ln(e,t){var n=e.model&&e.model.prop||"value",i=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[n]=t.model.value;var s=t.on||(t.on={}),o=s[i],a=t.model.callback;r(o)?(Array.isArray(o)?-1===o.indexOf(a):o!==a)&&(s[i]=[a].concat(o)):s[i]=a}var hn=1,dn=2;function fn(e,t,n,i,r,o){return(Array.isArray(n)||a(n))&&(r=i,i=n,n=void 0),s(o)&&(r=dn),pn(e,t,n,i,r)}function pn(e,t,n,i,s){if(r(n)&&r(n.__ob__))return be();if(r(n)&&r(n.is)&&(t=n.is),!t)return be();var o,a,c;(Array.isArray(i)&&"function"===typeof i[0]&&(n=n||{},n.scopedSlots={default:i[0]},i.length=0),s===dn?i=Ct(i):s===hn&&(i=Tt(i)),"string"===typeof t)?(a=e.$vnode&&e.$vnode.ns||V.getTagNamespace(t),o=V.isReservedTag(t)?new _e(V.parsePlatformTagName(t),n,i,void 0,void 0,e):n&&n.pre||!r(c=Qe(e.$options,"components",t))?new _e(t,n,i,void 0,void 0,e):on(c,n,e,i,t)):o=on(t,n,e,i);return Array.isArray(o)?o:r(o)?(r(a)&&mn(o,a),r(n)&&vn(n),o):be()}function mn(e,t,n){if(e.ns=t,"foreignObject"===e.tag&&(t=void 0,n=!0),r(e.children))for(var o=0,a=e.children.length;o<a;o++){var c=e.children[o];r(c.tag)&&(i(c.ns)||s(n)&&"svg"!==c.tag)&&mn(c,t,n)}}function vn(e){c(e.style)&&gt(e.style),c(e.class)&&gt(e.class)}function gn(e){e._vnode=null,e._staticTrees=null;var t=e.$options,i=e.$vnode=t._parentVnode,r=i&&i.context;e.$slots=Lt(t._renderChildren,r),e.$scopedSlots=n,e._c=function(t,n,i,r){return fn(e,t,n,i,r,!1)},e.$createElement=function(t,n,i,r){return fn(e,t,n,i,r,!0)};var s=i&&i.data;Re(e,"$attrs",s&&s.attrs||n,null,!0),Re(e,"$listeners",t._parentListeners||n,null,!0)}var yn,_n=null;function wn(e){Jt(e.prototype),e.prototype.$nextTick=function(e){return mt(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,i=n.render,r=n._parentVnode;r&&(t.$scopedSlots=Mt(r.data.scopedSlots,t.$slots,t.$scopedSlots)),t.$vnode=r;try{_n=t,e=i.call(t._renderProxy,t.$createElement)}catch(Io){nt(Io,t,"render"),e=t._vnode}finally{_n=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof _e||(e=be()),e.parent=r,e}}function bn(e,t){return(e.__esModule||de&&"Module"===e[Symbol.toStringTag])&&(e=e.default),c(e)?t.extend(e):e}function kn(e,t,n,i,r){var s=be();return s.asyncFactory=e,s.asyncMeta={data:t,context:n,children:i,tag:r},s}function En(e,t){if(s(e.error)&&r(e.errorComp))return e.errorComp;if(r(e.resolved))return e.resolved;var n=_n;if(n&&r(e.owners)&&-1===e.owners.indexOf(n)&&e.owners.push(n),s(e.loading)&&r(e.loadingComp))return e.loadingComp;if(n&&!r(e.owners)){var o=e.owners=[n],a=!0,u=null,l=null;n.$on("hook:destroyed",(function(){return y(o,n)}));var h=function(e){for(var t=0,n=o.length;t<n;t++)o[t].$forceUpdate();e&&(o.length=0,null!==u&&(clearTimeout(u),u=null),null!==l&&(clearTimeout(l),l=null))},d=$((function(n){e.resolved=bn(n,t),a?o.length=0:h(!0)})),p=$((function(t){r(e.errorComp)&&(e.error=!0,h(!0))})),m=e(d,p);return c(m)&&(f(m)?i(e.resolved)&&m.then(d,p):f(m.component)&&(m.component.then(d,p),r(m.error)&&(e.errorComp=bn(m.error,t)),r(m.loading)&&(e.loadingComp=bn(m.loading,t),0===m.delay?e.loading=!0:u=setTimeout((function(){u=null,i(e.resolved)&&i(e.error)&&(e.loading=!0,h(!1))}),m.delay||200)),r(m.timeout)&&(l=setTimeout((function(){l=null,i(e.resolved)&&p(null)}),m.timeout)))),a=!1,e.loading?e.loadingComp:e.resolved}}function In(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];if(r(n)&&(r(n.componentOptions)||Rt(n)))return n}}function Tn(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&An(e,t)}function Cn(e,t){yn.$on(e,t)}function Sn(e,t){yn.$off(e,t)}function On(e,t){var n=yn;return function i(){var r=t.apply(null,arguments);null!==r&&n.$off(e,i)}}function An(e,t,n){yn=e,bt(t,n||{},Cn,Sn,On,e),yn=void 0}function xn(e){var t=/^hook:/;e.prototype.$on=function(e,n){var i=this;if(Array.isArray(e))for(var r=0,s=e.length;r<s;r++)i.$on(e[r],n);else(i._events[e]||(i._events[e]=[])).push(n),t.test(e)&&(i._hasHookEvent=!0);return i},e.prototype.$once=function(e,t){var n=this;function i(){n.$off(e,i),t.apply(n,arguments)}return i.fn=t,n.$on(e,i),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(e)){for(var i=0,r=e.length;i<r;i++)n.$off(e[i],t);return n}var s,o=n._events[e];if(!o)return n;if(!t)return n._events[e]=null,n;var a=o.length;while(a--)if(s=o[a],s===t||s.fn===t){o.splice(a,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?x(n):n;for(var i=x(arguments,1),r='event handler for "'+e+'"',s=0,o=n.length;s<o;s++)it(n[s],t,i,t,r)}return t}}var Dn=null;function Ln(e){var t=Dn;return Dn=e,function(){Dn=t}}function Nn(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function Rn(e){e.prototype._update=function(e,t){var n=this,i=n.$el,r=n._vnode,s=Ln(n);n._vnode=e,n.$el=r?n.__patch__(r,e):n.__patch__(n.$el,e,t,!1),s(),i&&(i.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Fn(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||y(t.$children,e),e._watcher&&e._watcher.teardown();var n=e._watchers.length;while(n--)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Fn(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function Mn(e,t,n){var i;return e.$el=t,e.$options.render||(e.$options.render=be),Fn(e,"beforeMount"),i=function(){e._update(e._render(),n)},new ii(e,i,N,{before:function(){e._isMounted&&!e._isDestroyed&&Fn(e,"beforeUpdate")}},!0),n=!1,null==e.$vnode&&(e._isMounted=!0,Fn(e,"mounted")),e}function Pn(e,t,i,r,s){var o=r.data.scopedSlots,a=e.$scopedSlots,c=!!(o&&!o.$stable||a!==n&&!a.$stable||o&&e.$scopedSlots.$key!==o.$key||!o&&e.$scopedSlots.$key),u=!!(s||e.$options._renderChildren||c);if(e.$options._parentVnode=r,e.$vnode=r,e._vnode&&(e._vnode.parent=r),e.$options._renderChildren=s,e.$attrs=r.data.attrs||n,e.$listeners=i||n,t&&e.$options.props){Ae(!1);for(var l=e._props,h=e.$options._propKeys||[],d=0;d<h.length;d++){var f=h[d],p=e.$options.props;l[f]=Ye(f,p,t,e)}Ae(!0),e.$options.propsData=t}i=i||n;var m=e.$options._parentListeners;e.$options._parentListeners=i,An(e,i,m),u&&(e.$slots=Lt(s,r.context),e.$forceUpdate())}function jn(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function $n(e,t){if(t){if(e._directInactive=!1,jn(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)$n(e.$children[n]);Fn(e,"activated")}}function Bn(e,t){if((!t||(e._directInactive=!0,!jn(e)))&&!e._inactive){e._inactive=!0;for(var n=0;n<e.$children.length;n++)Bn(e.$children[n]);Fn(e,"deactivated")}}function Fn(e,t){ge();var n=e.$options[t],i=t+" hook";if(n)for(var r=0,s=n.length;r<s;r++)it(n[r],e,null,e,i);e._hasHookEvent&&e.$emit("hook:"+t),ye()}var Un=[],Vn=[],qn={},Hn=!1,Wn=!1,zn=0;function Kn(){zn=Un.length=Vn.length=0,qn={},Hn=Wn=!1}var Gn=0,Qn=Date.now;if(Y&&!ee){var Yn=window.performance;Yn&&"function"===typeof Yn.now&&Qn()>document.createEvent("Event").timeStamp&&(Qn=function(){return Yn.now()})}function Xn(){var e,t;for(Gn=Qn(),Wn=!0,Un.sort((function(e,t){return e.id-t.id})),zn=0;zn<Un.length;zn++)e=Un[zn],e.before&&e.before(),t=e.id,qn[t]=null,e.run();var n=Vn.slice(),i=Un.slice();Kn(),ei(n),Jn(i),ue&&V.devtools&&ue.emit("flush")}function Jn(e){var t=e.length;while(t--){var n=e[t],i=n.vm;i._watcher===n&&i._isMounted&&!i._isDestroyed&&Fn(i,"updated")}}function Zn(e){e._inactive=!1,Vn.push(e)}function ei(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,$n(e[t],!0)}function ti(e){var t=e.id;if(null==qn[t]){if(qn[t]=!0,Wn){var n=Un.length-1;while(n>zn&&Un[n].id>e.id)n--;Un.splice(n+1,0,e)}else Un.push(e);Hn||(Hn=!0,mt(Xn))}}var ni=0,ii=function(e,t,n,i,r){this.vm=e,r&&(e._watcher=this),e._watchers.push(this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++ni,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new he,this.newDepIds=new he,this.expression="","function"===typeof t?this.getter=t:(this.getter=K(t),this.getter||(this.getter=N)),this.value=this.lazy?void 0:this.get()};ii.prototype.get=function(){var e;ge(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(Io){if(!this.user)throw Io;nt(Io,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&gt(e),ye(),this.cleanupDeps()}return e},ii.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},ii.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},ii.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():ti(this)},ii.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||c(e)||this.deep){var t=this.value;if(this.value=e,this.user){var n='callback for watcher "'+this.expression+'"';it(this.cb,this.vm,[e,t],this.vm,n)}else this.cb.call(this.vm,e,t)}}},ii.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},ii.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},ii.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1}};var ri={enumerable:!0,configurable:!0,get:N,set:N};function si(e,t,n){ri.get=function(){return this[t][n]},ri.set=function(e){this[t][n]=e},Object.defineProperty(e,n,ri)}function oi(e){e._watchers=[];var t=e.$options;t.props&&ai(e,t.props),t.methods&&mi(e,t.methods),t.data?ci(e):Ne(e._data={},!0),t.computed&&hi(e,t.computed),t.watch&&t.watch!==se&&vi(e,t.watch)}function ai(e,t){var n=e.$options.propsData||{},i=e._props={},r=e.$options._propKeys=[],s=!e.$parent;s||Ae(!1);var o=function(s){r.push(s);var o=Ye(s,t,n,e);Re(i,s,o),s in e||si(e,"_props",s)};for(var a in t)o(a);Ae(!0)}function ci(e){var t=e.$options.data;t=e._data="function"===typeof t?ui(t,e):t||{},l(t)||(t={});var n=Object.keys(t),i=e.$options.props,r=(e.$options.methods,n.length);while(r--){var s=n[r];0,i&&w(i,s)||H(s)||si(e,"_data",s)}Ne(t,!0)}function ui(e,t){ge();try{return e.call(t,t)}catch(Io){return nt(Io,t,"data()"),{}}finally{ye()}}var li={lazy:!0};function hi(e,t){var n=e._computedWatchers=Object.create(null),i=ce();for(var r in t){var s=t[r],o="function"===typeof s?s:s.get;0,i||(n[r]=new ii(e,o||N,N,li)),r in e||di(e,r,s)}}function di(e,t,n){var i=!ce();"function"===typeof n?(ri.get=i?fi(t):pi(n),ri.set=N):(ri.get=n.get?i&&!1!==n.cache?fi(t):pi(n.get):N,ri.set=n.set||N),Object.defineProperty(e,t,ri)}function fi(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),me.target&&t.depend(),t.value}}function pi(e){return function(){return e.call(this,this)}}function mi(e,t){e.$options.props;for(var n in t)e[n]="function"!==typeof t[n]?N:A(t[n],e)}function vi(e,t){for(var n in t){var i=t[n];if(Array.isArray(i))for(var r=0;r<i.length;r++)gi(e,n,i[r]);else gi(e,n,i)}}function gi(e,t,n,i){return l(n)&&(i=n,n=n.handler),"string"===typeof n&&(n=e[n]),e.$watch(t,n,i)}function yi(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=Me,e.prototype.$delete=Pe,e.prototype.$watch=function(e,t,n){var i=this;if(l(t))return gi(i,e,t,n);n=n||{},n.user=!0;var r=new ii(i,e,t,n);if(n.immediate){var s='callback for immediate watcher "'+r.expression+'"';ge(),it(t,i,[r.value],i,s),ye()}return function(){r.teardown()}}}var _i=0;function wi(e){e.prototype._init=function(e){var t=this;t._uid=_i++,t._isVue=!0,e&&e._isComponent?bi(t,e):t.$options=Ge(ki(t.constructor),e||{},t),t._renderProxy=t,t._self=t,Nn(t),Tn(t),gn(t),Fn(t,"beforeCreate"),xt(t),oi(t),At(t),Fn(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}function bi(e,t){var n=e.$options=Object.create(e.constructor.options),i=t._parentVnode;n.parent=t.parent,n._parentVnode=i;var r=i.componentOptions;n.propsData=r.propsData,n._parentListeners=r.listeners,n._renderChildren=r.children,n._componentTag=r.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function ki(e){var t=e.options;if(e.super){var n=ki(e.super),i=e.superOptions;if(n!==i){e.superOptions=n;var r=Ei(e);r&&D(e.extendOptions,r),t=e.options=Ge(n,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function Ei(e){var t,n=e.options,i=e.sealedOptions;for(var r in n)n[r]!==i[r]&&(t||(t={}),t[r]=n[r]);return t}function Ii(e){this._init(e)}function Ti(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=x(arguments,1);return n.unshift(this),"function"===typeof e.install?e.install.apply(e,n):"function"===typeof e&&e.apply(null,n),t.push(e),this}}function Ci(e){e.mixin=function(e){return this.options=Ge(this.options,e),this}}function Si(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,i=n.cid,r=e._Ctor||(e._Ctor={});if(r[i])return r[i];var s=e.name||n.options.name;var o=function(e){this._init(e)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=t++,o.options=Ge(n.options,e),o["super"]=n,o.options.props&&Oi(o),o.options.computed&&Ai(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,F.forEach((function(e){o[e]=n[e]})),s&&(o.options.components[s]=o),o.superOptions=n.options,o.extendOptions=e,o.sealedOptions=D({},o.options),r[i]=o,o}}function Oi(e){var t=e.options.props;for(var n in t)si(e.prototype,"_props",n)}function Ai(e){var t=e.options.computed;for(var n in t)di(e.prototype,n,t[n])}function xi(e){F.forEach((function(t){e[t]=function(e,n){return n?("component"===t&&l(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"===typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}}))}function Di(e){return e&&(e.Ctor.options.name||e.tag)}function Li(e,t){return Array.isArray(e)?e.indexOf(t)>-1:"string"===typeof e?e.split(",").indexOf(t)>-1:!!h(e)&&e.test(t)}function Ni(e,t){var n=e.cache,i=e.keys,r=e._vnode;for(var s in n){var o=n[s];if(o){var a=o.name;a&&!t(a)&&Ri(n,s,i,r)}}}function Ri(e,t,n,i){var r=e[t];!r||i&&r.tag===i.tag||r.componentInstance.$destroy(),e[t]=null,y(n,t)}wi(Ii),yi(Ii),xn(Ii),Rn(Ii),wn(Ii);var Mi=[String,RegExp,Array],Pi={name:"keep-alive",abstract:!0,props:{include:Mi,exclude:Mi,max:[String,Number]},methods:{cacheVNode:function(){var e=this,t=e.cache,n=e.keys,i=e.vnodeToCache,r=e.keyToCache;if(i){var s=i.tag,o=i.componentInstance,a=i.componentOptions;t[r]={name:Di(a),tag:s,componentInstance:o},n.push(r),this.max&&n.length>parseInt(this.max)&&Ri(t,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)Ri(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",(function(t){Ni(e,(function(e){return Li(t,e)}))})),this.$watch("exclude",(function(t){Ni(e,(function(e){return!Li(t,e)}))}))},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,t=In(e),n=t&&t.componentOptions;if(n){var i=Di(n),r=this,s=r.include,o=r.exclude;if(s&&(!i||!Li(s,i))||o&&i&&Li(o,i))return t;var a=this,c=a.cache,u=a.keys,l=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;c[l]?(t.componentInstance=c[l].componentInstance,y(u,l),u.push(l)):(this.vnodeToCache=t,this.keyToCache=l),t.data.keepAlive=!0}return t||e&&e[0]}},ji={KeepAlive:Pi};function $i(e){var t={get:function(){return V}};Object.defineProperty(e,"config",t),e.util={warn:fe,extend:D,mergeOptions:Ge,defineReactive:Re},e.set=Me,e.delete=Pe,e.nextTick=mt,e.observable=function(e){return Ne(e),e},e.options=Object.create(null),F.forEach((function(t){e.options[t+"s"]=Object.create(null)})),e.options._base=e,D(e.options.components,ji),Ti(e),Ci(e),Si(e),xi(e)}$i(Ii),Object.defineProperty(Ii.prototype,"$isServer",{get:ce}),Object.defineProperty(Ii.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Ii,"FunctionalRenderContext",{value:Zt}),Ii.version="2.6.14";var Bi=v("style,class"),Fi=v("input,textarea,option,select,progress"),Ui=function(e,t,n){return"value"===n&&Fi(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},Vi=v("contenteditable,draggable,spellcheck"),qi=v("events,caret,typing,plaintext-only"),Hi=function(e,t){return Qi(t)||"false"===t?"false":"contenteditable"===e&&qi(t)?t:"true"},Wi=v("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),zi="http://www.w3.org/1999/xlink",Ki=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Gi=function(e){return Ki(e)?e.slice(6,e.length):""},Qi=function(e){return null==e||!1===e};function Yi(e){var t=e.data,n=e,i=e;while(r(i.componentInstance))i=i.componentInstance._vnode,i&&i.data&&(t=Xi(i.data,t));while(r(n=n.parent))n&&n.data&&(t=Xi(t,n.data));return Ji(t.staticClass,t.class)}function Xi(e,t){return{staticClass:Zi(e.staticClass,t.staticClass),class:r(e.class)?[e.class,t.class]:t.class}}function Ji(e,t){return r(e)||r(t)?Zi(e,er(t)):""}function Zi(e,t){return e?t?e+" "+t:e:t||""}function er(e){return Array.isArray(e)?tr(e):c(e)?nr(e):"string"===typeof e?e:""}function tr(e){for(var t,n="",i=0,s=e.length;i<s;i++)r(t=er(e[i]))&&""!==t&&(n&&(n+=" "),n+=t);return n}function nr(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}var ir={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},rr=v("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),sr=v("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),or=function(e){return rr(e)||sr(e)};function ar(e){return sr(e)?"svg":"math"===e?"math":void 0}var cr=Object.create(null);function ur(e){if(!Y)return!0;if(or(e))return!1;if(e=e.toLowerCase(),null!=cr[e])return cr[e];var t=document.createElement(e);return e.indexOf("-")>-1?cr[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:cr[e]=/HTMLUnknownElement/.test(t.toString())}var lr=v("text,number,password,search,email,tel,url");function hr(e){if("string"===typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}function dr(e,t){var n=document.createElement(e);return"select"!==e||t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function fr(e,t){return document.createElementNS(ir[e],t)}function pr(e){return document.createTextNode(e)}function mr(e){return document.createComment(e)}function vr(e,t,n){e.insertBefore(t,n)}function gr(e,t){e.removeChild(t)}function yr(e,t){e.appendChild(t)}function _r(e){return e.parentNode}function wr(e){return e.nextSibling}function br(e){return e.tagName}function kr(e,t){e.textContent=t}function Er(e,t){e.setAttribute(t,"")}var Ir=Object.freeze({createElement:dr,createElementNS:fr,createTextNode:pr,createComment:mr,insertBefore:vr,removeChild:gr,appendChild:yr,parentNode:_r,nextSibling:wr,tagName:br,setTextContent:kr,setStyleScope:Er}),Tr={create:function(e,t){Cr(t)},update:function(e,t){e.data.ref!==t.data.ref&&(Cr(e,!0),Cr(t))},destroy:function(e){Cr(e,!0)}};function Cr(e,t){var n=e.data.ref;if(r(n)){var i=e.context,s=e.componentInstance||e.elm,o=i.$refs;t?Array.isArray(o[n])?y(o[n],s):o[n]===s&&(o[n]=void 0):e.data.refInFor?Array.isArray(o[n])?o[n].indexOf(s)<0&&o[n].push(s):o[n]=[s]:o[n]=s}}var Sr=new _e("",{},[]),Or=["create","activate","update","remove","destroy"];function Ar(e,t){return e.key===t.key&&e.asyncFactory===t.asyncFactory&&(e.tag===t.tag&&e.isComment===t.isComment&&r(e.data)===r(t.data)&&xr(e,t)||s(e.isAsyncPlaceholder)&&i(t.asyncFactory.error))}function xr(e,t){if("input"!==e.tag)return!0;var n,i=r(n=e.data)&&r(n=n.attrs)&&n.type,s=r(n=t.data)&&r(n=n.attrs)&&n.type;return i===s||lr(i)&&lr(s)}function Dr(e,t,n){var i,s,o={};for(i=t;i<=n;++i)s=e[i].key,r(s)&&(o[s]=i);return o}function Lr(e){var t,n,o={},c=e.modules,u=e.nodeOps;for(t=0;t<Or.length;++t)for(o[Or[t]]=[],n=0;n<c.length;++n)r(c[n][Or[t]])&&o[Or[t]].push(c[n][Or[t]]);function l(e){return new _e(u.tagName(e).toLowerCase(),{},[],void 0,e)}function h(e,t){function n(){0===--n.listeners&&d(e)}return n.listeners=t,n}function d(e){var t=u.parentNode(e);r(t)&&u.removeChild(t,e)}function f(e,t,n,i,o,a,c){if(r(e.elm)&&r(a)&&(e=a[c]=Ee(e)),e.isRootInsert=!o,!p(e,t,n,i)){var l=e.data,h=e.children,d=e.tag;r(d)?(e.elm=e.ns?u.createElementNS(e.ns,d):u.createElement(d,e),k(e),_(e,h,t),r(l)&&b(e,t),y(n,e.elm,i)):s(e.isComment)?(e.elm=u.createComment(e.text),y(n,e.elm,i)):(e.elm=u.createTextNode(e.text),y(n,e.elm,i))}}function p(e,t,n,i){var o=e.data;if(r(o)){var a=r(e.componentInstance)&&o.keepAlive;if(r(o=o.hook)&&r(o=o.init)&&o(e,!1),r(e.componentInstance))return m(e,t),y(n,e.elm,i),s(a)&&g(e,t,n,i),!0}}function m(e,t){r(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,w(e)?(b(e,t),k(e)):(Cr(e),t.push(e))}function g(e,t,n,i){var s,a=e;while(a.componentInstance)if(a=a.componentInstance._vnode,r(s=a.data)&&r(s=s.transition)){for(s=0;s<o.activate.length;++s)o.activate[s](Sr,a);t.push(a);break}y(n,e.elm,i)}function y(e,t,n){r(e)&&(r(n)?u.parentNode(n)===e&&u.insertBefore(e,t,n):u.appendChild(e,t))}function _(e,t,n){if(Array.isArray(t)){0;for(var i=0;i<t.length;++i)f(t[i],n,e.elm,null,!0,t,i)}else a(e.text)&&u.appendChild(e.elm,u.createTextNode(String(e.text)))}function w(e){while(e.componentInstance)e=e.componentInstance._vnode;return r(e.tag)}function b(e,n){for(var i=0;i<o.create.length;++i)o.create[i](Sr,e);t=e.data.hook,r(t)&&(r(t.create)&&t.create(Sr,e),r(t.insert)&&n.push(e))}function k(e){var t;if(r(t=e.fnScopeId))u.setStyleScope(e.elm,t);else{var n=e;while(n)r(t=n.context)&&r(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t),n=n.parent}r(t=Dn)&&t!==e.context&&t!==e.fnContext&&r(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t)}function E(e,t,n,i,r,s){for(;i<=r;++i)f(n[i],s,e,t,!1,n,i)}function I(e){var t,n,i=e.data;if(r(i))for(r(t=i.hook)&&r(t=t.destroy)&&t(e),t=0;t<o.destroy.length;++t)o.destroy[t](e);if(r(t=e.children))for(n=0;n<e.children.length;++n)I(e.children[n])}function T(e,t,n){for(;t<=n;++t){var i=e[t];r(i)&&(r(i.tag)?(C(i),I(i)):d(i.elm))}}function C(e,t){if(r(t)||r(e.data)){var n,i=o.remove.length+1;for(r(t)?t.listeners+=i:t=h(e.elm,i),r(n=e.componentInstance)&&r(n=n._vnode)&&r(n.data)&&C(n,t),n=0;n<o.remove.length;++n)o.remove[n](e,t);r(n=e.data.hook)&&r(n=n.remove)?n(e,t):t()}else d(e.elm)}function S(e,t,n,s,o){var a,c,l,h,d=0,p=0,m=t.length-1,v=t[0],g=t[m],y=n.length-1,_=n[0],w=n[y],b=!o;while(d<=m&&p<=y)i(v)?v=t[++d]:i(g)?g=t[--m]:Ar(v,_)?(A(v,_,s,n,p),v=t[++d],_=n[++p]):Ar(g,w)?(A(g,w,s,n,y),g=t[--m],w=n[--y]):Ar(v,w)?(A(v,w,s,n,y),b&&u.insertBefore(e,v.elm,u.nextSibling(g.elm)),v=t[++d],w=n[--y]):Ar(g,_)?(A(g,_,s,n,p),b&&u.insertBefore(e,g.elm,v.elm),g=t[--m],_=n[++p]):(i(a)&&(a=Dr(t,d,m)),c=r(_.key)?a[_.key]:O(_,t,d,m),i(c)?f(_,s,e,v.elm,!1,n,p):(l=t[c],Ar(l,_)?(A(l,_,s,n,p),t[c]=void 0,b&&u.insertBefore(e,l.elm,v.elm)):f(_,s,e,v.elm,!1,n,p)),_=n[++p]);d>m?(h=i(n[y+1])?null:n[y+1].elm,E(e,h,n,p,y,s)):p>y&&T(t,d,m)}function O(e,t,n,i){for(var s=n;s<i;s++){var o=t[s];if(r(o)&&Ar(e,o))return s}}function A(e,t,n,a,c,l){if(e!==t){r(t.elm)&&r(a)&&(t=a[c]=Ee(t));var h=t.elm=e.elm;if(s(e.isAsyncPlaceholder))r(t.asyncFactory.resolved)?L(e.elm,t,n):t.isAsyncPlaceholder=!0;else if(s(t.isStatic)&&s(e.isStatic)&&t.key===e.key&&(s(t.isCloned)||s(t.isOnce)))t.componentInstance=e.componentInstance;else{var d,f=t.data;r(f)&&r(d=f.hook)&&r(d=d.prepatch)&&d(e,t);var p=e.children,m=t.children;if(r(f)&&w(t)){for(d=0;d<o.update.length;++d)o.update[d](e,t);r(d=f.hook)&&r(d=d.update)&&d(e,t)}i(t.text)?r(p)&&r(m)?p!==m&&S(h,p,m,n,l):r(m)?(r(e.text)&&u.setTextContent(h,""),E(h,null,m,0,m.length-1,n)):r(p)?T(p,0,p.length-1):r(e.text)&&u.setTextContent(h,""):e.text!==t.text&&u.setTextContent(h,t.text),r(f)&&r(d=f.hook)&&r(d=d.postpatch)&&d(e,t)}}}function x(e,t,n){if(s(n)&&r(e.parent))e.parent.data.pendingInsert=t;else for(var i=0;i<t.length;++i)t[i].data.hook.insert(t[i])}var D=v("attrs,class,staticClass,staticStyle,key");function L(e,t,n,i){var o,a=t.tag,c=t.data,u=t.children;if(i=i||c&&c.pre,t.elm=e,s(t.isComment)&&r(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(r(c)&&(r(o=c.hook)&&r(o=o.init)&&o(t,!0),r(o=t.componentInstance)))return m(t,n),!0;if(r(a)){if(r(u))if(e.hasChildNodes())if(r(o=c)&&r(o=o.domProps)&&r(o=o.innerHTML)){if(o!==e.innerHTML)return!1}else{for(var l=!0,h=e.firstChild,d=0;d<u.length;d++){if(!h||!L(h,u[d],n,i)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else _(t,u,n);if(r(c)){var f=!1;for(var p in c)if(!D(p)){f=!0,b(t,n);break}!f&&c["class"]&&gt(c["class"])}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,t,n,a){if(!i(t)){var c=!1,h=[];if(i(e))c=!0,f(t,h);else{var d=r(e.nodeType);if(!d&&Ar(e,t))A(e,t,h,null,null,a);else{if(d){if(1===e.nodeType&&e.hasAttribute(B)&&(e.removeAttribute(B),n=!0),s(n)&&L(e,t,h))return x(t,h,!0),e;e=l(e)}var p=e.elm,m=u.parentNode(p);if(f(t,h,p._leaveCb?null:m,u.nextSibling(p)),r(t.parent)){var v=t.parent,g=w(t);while(v){for(var y=0;y<o.destroy.length;++y)o.destroy[y](v);if(v.elm=t.elm,g){for(var _=0;_<o.create.length;++_)o.create[_](Sr,v);var b=v.data.hook.insert;if(b.merged)for(var k=1;k<b.fns.length;k++)b.fns[k]()}else Cr(v);v=v.parent}}r(m)?T([e],0,0):r(e.tag)&&I(e)}}return x(t,h,c),t.elm}r(e)&&I(e)}}var Nr={create:Rr,update:Rr,destroy:function(e){Rr(e,Sr)}};function Rr(e,t){(e.data.directives||t.data.directives)&&Mr(e,t)}function Mr(e,t){var n,i,r,s=e===Sr,o=t===Sr,a=jr(e.data.directives,e.context),c=jr(t.data.directives,t.context),u=[],l=[];for(n in c)i=a[n],r=c[n],i?(r.oldValue=i.value,r.oldArg=i.arg,Br(r,"update",t,e),r.def&&r.def.componentUpdated&&l.push(r)):(Br(r,"bind",t,e),r.def&&r.def.inserted&&u.push(r));if(u.length){var h=function(){for(var n=0;n<u.length;n++)Br(u[n],"inserted",t,e)};s?kt(t,"insert",h):h()}if(l.length&&kt(t,"postpatch",(function(){for(var n=0;n<l.length;n++)Br(l[n],"componentUpdated",t,e)})),!s)for(n in a)c[n]||Br(a[n],"unbind",e,e,o)}var Pr=Object.create(null);function jr(e,t){var n,i,r=Object.create(null);if(!e)return r;for(n=0;n<e.length;n++)i=e[n],i.modifiers||(i.modifiers=Pr),r[$r(i)]=i,i.def=Qe(t.$options,"directives",i.name,!0);return r}function $r(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function Br(e,t,n,i,r){var s=e.def&&e.def[t];if(s)try{s(n.elm,e,n,i,r)}catch(Io){nt(Io,n.context,"directive "+e.name+" "+t+" hook")}}var Fr=[Tr,Nr];function Ur(e,t){var n=t.componentOptions;if((!r(n)||!1!==n.Ctor.options.inheritAttrs)&&(!i(e.data.attrs)||!i(t.data.attrs))){var s,o,a,c=t.elm,u=e.data.attrs||{},l=t.data.attrs||{};for(s in r(l.__ob__)&&(l=t.data.attrs=D({},l)),l)o=l[s],a=u[s],a!==o&&Vr(c,s,o,t.data.pre);for(s in(ee||ne)&&l.value!==u.value&&Vr(c,"value",l.value),u)i(l[s])&&(Ki(s)?c.removeAttributeNS(zi,Gi(s)):Vi(s)||c.removeAttribute(s))}}function Vr(e,t,n,i){i||e.tagName.indexOf("-")>-1?qr(e,t,n):Wi(t)?Qi(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):Vi(t)?e.setAttribute(t,Hi(t,n)):Ki(t)?Qi(n)?e.removeAttributeNS(zi,Gi(t)):e.setAttributeNS(zi,t,n):qr(e,t,n)}function qr(e,t,n){if(Qi(n))e.removeAttribute(t);else{if(ee&&!te&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){var i=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",i)};e.addEventListener("input",i),e.__ieph=!0}e.setAttribute(t,n)}}var Hr={create:Ur,update:Ur};function Wr(e,t){var n=t.elm,s=t.data,o=e.data;if(!(i(s.staticClass)&&i(s.class)&&(i(o)||i(o.staticClass)&&i(o.class)))){var a=Yi(t),c=n._transitionClasses;r(c)&&(a=Zi(a,er(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var zr,Kr={create:Wr,update:Wr},Gr="__r",Qr="__c";function Yr(e){if(r(e[Gr])){var t=ee?"change":"input";e[t]=[].concat(e[Gr],e[t]||[]),delete e[Gr]}r(e[Qr])&&(e.change=[].concat(e[Qr],e.change||[]),delete e[Qr])}function Xr(e,t,n){var i=zr;return function r(){var s=t.apply(null,arguments);null!==s&&es(e,r,n,i)}}var Jr=at&&!(re&&Number(re[1])<=53);function Zr(e,t,n,i){if(Jr){var r=Gn,s=t;t=s._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=r||e.timeStamp<=0||e.target.ownerDocument!==document)return s.apply(this,arguments)}}zr.addEventListener(e,t,oe?{capture:n,passive:i}:n)}function es(e,t,n,i){(i||zr).removeEventListener(e,t._wrapper||t,n)}function ts(e,t){if(!i(e.data.on)||!i(t.data.on)){var n=t.data.on||{},r=e.data.on||{};zr=t.elm,Yr(n),bt(n,r,Zr,es,Xr,t.context),zr=void 0}}var ns,is={create:ts,update:ts};function rs(e,t){if(!i(e.data.domProps)||!i(t.data.domProps)){var n,s,o=t.elm,a=e.data.domProps||{},c=t.data.domProps||{};for(n in r(c.__ob__)&&(c=t.data.domProps=D({},c)),a)n in c||(o[n]="");for(n in c){if(s=c[n],"textContent"===n||"innerHTML"===n){if(t.children&&(t.children.length=0),s===a[n])continue;1===o.childNodes.length&&o.removeChild(o.childNodes[0])}if("value"===n&&"PROGRESS"!==o.tagName){o._value=s;var u=i(s)?"":String(s);ss(o,u)&&(o.value=u)}else if("innerHTML"===n&&sr(o.tagName)&&i(o.innerHTML)){ns=ns||document.createElement("div"),ns.innerHTML="<svg>"+s+"</svg>";var l=ns.firstChild;while(o.firstChild)o.removeChild(o.firstChild);while(l.firstChild)o.appendChild(l.firstChild)}else if(s!==a[n])try{o[n]=s}catch(Io){}}}}function ss(e,t){return!e.composing&&("OPTION"===e.tagName||os(e,t)||as(e,t))}function os(e,t){var n=!0;try{n=document.activeElement!==e}catch(Io){}return n&&e.value!==t}function as(e,t){var n=e.value,i=e._vModifiers;if(r(i)){if(i.number)return m(n)!==m(t);if(i.trim)return n.trim()!==t.trim()}return n!==t}var cs={create:rs,update:rs},us=b((function(e){var t={},n=/;(?![^(]*\))/g,i=/:(.+)/;return e.split(n).forEach((function(e){if(e){var n=e.split(i);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}));function ls(e){var t=hs(e.style);return e.staticStyle?D(e.staticStyle,t):t}function hs(e){return Array.isArray(e)?L(e):"string"===typeof e?us(e):e}function ds(e,t){var n,i={};if(t){var r=e;while(r.componentInstance)r=r.componentInstance._vnode,r&&r.data&&(n=ls(r.data))&&D(i,n)}(n=ls(e.data))&&D(i,n);var s=e;while(s=s.parent)s.data&&(n=ls(s.data))&&D(i,n);return i}var fs,ps=/^--/,ms=/\s*!important$/,vs=function(e,t,n){if(ps.test(t))e.style.setProperty(t,n);else if(ms.test(n))e.style.setProperty(C(t),n.replace(ms,""),"important");else{var i=ys(t);if(Array.isArray(n))for(var r=0,s=n.length;r<s;r++)e.style[i]=n[r];else e.style[i]=n}},gs=["Webkit","Moz","ms"],ys=b((function(e){if(fs=fs||document.createElement("div").style,e=E(e),"filter"!==e&&e in fs)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<gs.length;n++){var i=gs[n]+t;if(i in fs)return i}}));function _s(e,t){var n=t.data,s=e.data;if(!(i(n.staticStyle)&&i(n.style)&&i(s.staticStyle)&&i(s.style))){var o,a,c=t.elm,u=s.staticStyle,l=s.normalizedStyle||s.style||{},h=u||l,d=hs(t.data.style)||{};t.data.normalizedStyle=r(d.__ob__)?D({},d):d;var f=ds(t,!0);for(a in h)i(f[a])&&vs(c,a,"");for(a in f)o=f[a],o!==h[a]&&vs(c,a,null==o?"":o)}}var ws={create:_s,update:_s},bs=/\s+/;function ks(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(bs).forEach((function(t){return e.classList.add(t)})):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function Es(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(bs).forEach((function(t){return e.classList.remove(t)})):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{var n=" "+(e.getAttribute("class")||"")+" ",i=" "+t+" ";while(n.indexOf(i)>=0)n=n.replace(i," ");n=n.trim(),n?e.setAttribute("class",n):e.removeAttribute("class")}}function Is(e){if(e){if("object"===typeof e){var t={};return!1!==e.css&&D(t,Ts(e.name||"v")),D(t,e),t}return"string"===typeof e?Ts(e):void 0}}var Ts=b((function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}})),Cs=Y&&!te,Ss="transition",Os="animation",As="transition",xs="transitionend",Ds="animation",Ls="animationend";Cs&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(As="WebkitTransition",xs="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Ds="WebkitAnimation",Ls="webkitAnimationEnd"));var Ns=Y?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function Rs(e){Ns((function(){Ns(e)}))}function Ms(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),ks(e,t))}function Ps(e,t){e._transitionClasses&&y(e._transitionClasses,t),Es(e,t)}function js(e,t,n){var i=Bs(e,t),r=i.type,s=i.timeout,o=i.propCount;if(!r)return n();var a=r===Ss?xs:Ls,c=0,u=function(){e.removeEventListener(a,l),n()},l=function(t){t.target===e&&++c>=o&&u()};setTimeout((function(){c<o&&u()}),s+1),e.addEventListener(a,l)}var $s=/\b(transform|all)(,|$)/;function Bs(e,t){var n,i=window.getComputedStyle(e),r=(i[As+"Delay"]||"").split(", "),s=(i[As+"Duration"]||"").split(", "),o=Fs(r,s),a=(i[Ds+"Delay"]||"").split(", "),c=(i[Ds+"Duration"]||"").split(", "),u=Fs(a,c),l=0,h=0;t===Ss?o>0&&(n=Ss,l=o,h=s.length):t===Os?u>0&&(n=Os,l=u,h=c.length):(l=Math.max(o,u),n=l>0?o>u?Ss:Os:null,h=n?n===Ss?s.length:c.length:0);var d=n===Ss&&$s.test(i[As+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:d}}function Fs(e,t){while(e.length<t.length)e=e.concat(e);return Math.max.apply(null,t.map((function(t,n){return Us(t)+Us(e[n])})))}function Us(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Vs(e,t){var n=e.elm;r(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var s=Is(e.data.transition);if(!i(s)&&!r(n._enterCb)&&1===n.nodeType){var o=s.css,a=s.type,u=s.enterClass,l=s.enterToClass,h=s.enterActiveClass,d=s.appearClass,f=s.appearToClass,p=s.appearActiveClass,v=s.beforeEnter,g=s.enter,y=s.afterEnter,_=s.enterCancelled,w=s.beforeAppear,b=s.appear,k=s.afterAppear,E=s.appearCancelled,I=s.duration,T=Dn,C=Dn.$vnode;while(C&&C.parent)T=C.context,C=C.parent;var S=!T._isMounted||!e.isRootInsert;if(!S||b||""===b){var O=S&&d?d:u,A=S&&p?p:h,x=S&&f?f:l,D=S&&w||v,L=S&&"function"===typeof b?b:g,N=S&&k||y,R=S&&E||_,M=m(c(I)?I.enter:I);0;var P=!1!==o&&!te,j=Ws(L),B=n._enterCb=$((function(){P&&(Ps(n,x),Ps(n,A)),B.cancelled?(P&&Ps(n,O),R&&R(n)):N&&N(n),n._enterCb=null}));e.data.show||kt(e,"insert",(function(){var t=n.parentNode,i=t&&t._pending&&t._pending[e.key];i&&i.tag===e.tag&&i.elm._leaveCb&&i.elm._leaveCb(),L&&L(n,B)})),D&&D(n),P&&(Ms(n,O),Ms(n,A),Rs((function(){Ps(n,O),B.cancelled||(Ms(n,x),j||(Hs(M)?setTimeout(B,M):js(n,a,B)))}))),e.data.show&&(t&&t(),L&&L(n,B)),P||j||B()}}}function qs(e,t){var n=e.elm;r(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var s=Is(e.data.transition);if(i(s)||1!==n.nodeType)return t();if(!r(n._leaveCb)){var o=s.css,a=s.type,u=s.leaveClass,l=s.leaveToClass,h=s.leaveActiveClass,d=s.beforeLeave,f=s.leave,p=s.afterLeave,v=s.leaveCancelled,g=s.delayLeave,y=s.duration,_=!1!==o&&!te,w=Ws(f),b=m(c(y)?y.leave:y);0;var k=n._leaveCb=$((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[e.key]=null),_&&(Ps(n,l),Ps(n,h)),k.cancelled?(_&&Ps(n,u),v&&v(n)):(t(),p&&p(n)),n._leaveCb=null}));g?g(E):E()}function E(){k.cancelled||(!e.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e),d&&d(n),_&&(Ms(n,u),Ms(n,h),Rs((function(){Ps(n,u),k.cancelled||(Ms(n,l),w||(Hs(b)?setTimeout(k,b):js(n,a,k)))}))),f&&f(n,k),_||w||k())}}function Hs(e){return"number"===typeof e&&!isNaN(e)}function Ws(e){if(i(e))return!1;var t=e.fns;return r(t)?Ws(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function zs(e,t){!0!==t.data.show&&Vs(t)}var Ks=Y?{create:zs,activate:zs,remove:function(e,t){!0!==e.data.show?qs(e,t):t()}}:{},Gs=[Hr,Kr,is,cs,ws,Ks],Qs=Gs.concat(Fr),Ys=Lr({nodeOps:Ir,modules:Qs});te&&document.addEventListener("selectionchange",(function(){var e=document.activeElement;e&&e.vmodel&&ro(e,"input")}));var Xs={inserted:function(e,t,n,i){"select"===n.tag?(i.elm&&!i.elm._vOptions?kt(n,"postpatch",(function(){Xs.componentUpdated(e,t,n)})):Js(e,t,n.context),e._vOptions=[].map.call(e.options,to)):("textarea"===n.tag||lr(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",no),e.addEventListener("compositionend",io),e.addEventListener("change",io),te&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Js(e,t,n.context);var i=e._vOptions,r=e._vOptions=[].map.call(e.options,to);if(r.some((function(e,t){return!P(e,i[t])}))){var s=e.multiple?t.value.some((function(e){return eo(e,r)})):t.value!==t.oldValue&&eo(t.value,r);s&&ro(e,"change")}}}};function Js(e,t,n){Zs(e,t,n),(ee||ne)&&setTimeout((function(){Zs(e,t,n)}),0)}function Zs(e,t,n){var i=t.value,r=e.multiple;if(!r||Array.isArray(i)){for(var s,o,a=0,c=e.options.length;a<c;a++)if(o=e.options[a],r)s=j(i,to(o))>-1,o.selected!==s&&(o.selected=s);else if(P(to(o),i))return void(e.selectedIndex!==a&&(e.selectedIndex=a));r||(e.selectedIndex=-1)}}function eo(e,t){return t.every((function(t){return!P(t,e)}))}function to(e){return"_value"in e?e._value:e.value}function no(e){e.target.composing=!0}function io(e){e.target.composing&&(e.target.composing=!1,ro(e.target,"input"))}function ro(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function so(e){return!e.componentInstance||e.data&&e.data.transition?e:so(e.componentInstance._vnode)}var oo={bind:function(e,t,n){var i=t.value;n=so(n);var r=n.data&&n.data.transition,s=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;i&&r?(n.data.show=!0,Vs(n,(function(){e.style.display=s}))):e.style.display=i?s:"none"},update:function(e,t,n){var i=t.value,r=t.oldValue;if(!i!==!r){n=so(n);var s=n.data&&n.data.transition;s?(n.data.show=!0,i?Vs(n,(function(){e.style.display=e.__vOriginalDisplay})):qs(n,(function(){e.style.display="none"}))):e.style.display=i?e.__vOriginalDisplay:"none"}},unbind:function(e,t,n,i,r){r||(e.style.display=e.__vOriginalDisplay)}},ao={model:Xs,show:oo},co={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function uo(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?uo(In(t.children)):e}function lo(e){var t={},n=e.$options;for(var i in n.propsData)t[i]=e[i];var r=n._parentListeners;for(var s in r)t[E(s)]=r[s];return t}function ho(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}function fo(e){while(e=e.parent)if(e.data.transition)return!0}function po(e,t){return t.key===e.key&&t.tag===e.tag}var mo=function(e){return e.tag||Rt(e)},vo=function(e){return"show"===e.name},go={name:"transition",props:co,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(mo),n.length)){0;var i=this.mode;0;var r=n[0];if(fo(this.$vnode))return r;var s=uo(r);if(!s)return r;if(this._leaving)return ho(e,r);var o="__transition-"+this._uid+"-";s.key=null==s.key?s.isComment?o+"comment":o+s.tag:a(s.key)?0===String(s.key).indexOf(o)?s.key:o+s.key:s.key;var c=(s.data||(s.data={})).transition=lo(this),u=this._vnode,l=uo(u);if(s.data.directives&&s.data.directives.some(vo)&&(s.data.show=!0),l&&l.data&&!po(s,l)&&!Rt(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=D({},c);if("out-in"===i)return this._leaving=!0,kt(h,"afterLeave",(function(){t._leaving=!1,t.$forceUpdate()})),ho(e,r);if("in-out"===i){if(Rt(s))return u;var d,f=function(){d()};kt(c,"afterEnter",f),kt(c,"enterCancelled",f),kt(h,"delayLeave",(function(e){d=e}))}}return r}}},yo=D({tag:String,moveClass:String},co);delete yo.mode;var _o={props:yo,beforeMount:function(){var e=this,t=this._update;this._update=function(n,i){var r=Ln(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,r(),t.call(e,n,i)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),i=this.prevChildren=this.children,r=this.$slots.default||[],s=this.children=[],o=lo(this),a=0;a<r.length;a++){var c=r[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))s.push(c),n[c.key]=c,(c.data||(c.data={})).transition=o;else;}if(i){for(var u=[],l=[],h=0;h<i.length;h++){var d=i[h];d.data.transition=o,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?u.push(d):l.push(d)}this.kept=e(t,null,u),this.removed=l}return e(t,null,s)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(wo),e.forEach(bo),e.forEach(ko),this._reflow=document.body.offsetHeight,e.forEach((function(e){if(e.data.moved){var n=e.elm,i=n.style;Ms(n,t),i.transform=i.WebkitTransform=i.transitionDuration="",n.addEventListener(xs,n._moveCb=function e(i){i&&i.target!==n||i&&!/transform$/.test(i.propertyName)||(n.removeEventListener(xs,e),n._moveCb=null,Ps(n,t))})}})))},methods:{hasMove:function(e,t){if(!Cs)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach((function(e){Es(n,e)})),ks(n,t),n.style.display="none",this.$el.appendChild(n);var i=Bs(n);return this.$el.removeChild(n),this._hasMove=i.hasTransform}}};function wo(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function bo(e){e.data.newPos=e.elm.getBoundingClientRect()}function ko(e){var t=e.data.pos,n=e.data.newPos,i=t.left-n.left,r=t.top-n.top;if(i||r){e.data.moved=!0;var s=e.elm.style;s.transform=s.WebkitTransform="translate("+i+"px,"+r+"px)",s.transitionDuration="0s"}}var Eo={Transition:go,TransitionGroup:_o};Ii.config.mustUseProp=Ui,Ii.config.isReservedTag=or,Ii.config.isReservedAttr=Bi,Ii.config.getTagNamespace=ar,Ii.config.isUnknownElement=ur,D(Ii.options.directives,ao),D(Ii.options.components,Eo),Ii.prototype.__patch__=Y?Ys:N,Ii.prototype.$mount=function(e,t){return e=e&&Y?hr(e):void 0,Mn(this,e,t)},Y&&setTimeout((function(){V.devtools&&ue&&ue.emit("init",Ii)}),0),t["a"]=Ii}).call(this,n("c8ba"))},"2ba4":function(e,t){var n=Function.prototype,i=n.apply,r=n.bind,s=n.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?s.bind(i):function(){return s.apply(i,arguments)})},"2cf4":function(e,t,n){var i,r,s,o,a=n("da84"),c=n("2ba4"),u=n("0366"),l=n("1626"),h=n("1a2d"),d=n("d039"),f=n("1be4"),p=n("f36a"),m=n("cc12"),v=n("1cdc"),g=n("605d"),y=a.setImmediate,_=a.clearImmediate,w=a.process,b=a.Dispatch,k=a.Function,E=a.MessageChannel,I=a.String,T=0,C={},S="onreadystatechange";try{i=a.location}catch(L){}var O=function(e){if(h(C,e)){var t=C[e];delete C[e],t()}},A=function(e){return function(){O(e)}},x=function(e){O(e.data)},D=function(e){a.postMessage(I(e),i.protocol+"//"+i.host)};y&&_||(y=function(e){var t=p(arguments,1);return C[++T]=function(){c(l(e)?e:k(e),void 0,t)},r(T),T},_=function(e){delete C[e]},g?r=function(e){w.nextTick(A(e))}:b&&b.now?r=function(e){b.now(A(e))}:E&&!v?(s=new E,o=s.port2,s.port1.onmessage=x,r=u(o.postMessage,o)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&i&&"file:"!==i.protocol&&!d(D)?(r=D,a.addEventListener("message",x,!1)):r=S in m("script")?function(e){f.appendChild(m("script"))[S]=function(){f.removeChild(this),O(e)}}:function(e){setTimeout(A(e),0)}),e.exports={set:y,clear:_}},"2d00":function(e,t,n){var i,r,s=n("da84"),o=n("342f"),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(i=l.split("."),r=i[0]>0&&i[0]<4?1:+(i[0]+i[1])),!r&&o&&(i=o.match(/Edge\/(\d+)/),(!i||i[1]>=74)&&(i=o.match(/Chrome\/(\d+)/),i&&(r=+i[1]))),e.exports=r},"342f":function(e,t,n){var i=n("d066");e.exports=i("navigator","userAgent")||""},"35a1":function(e,t,n){var i=n("f5df"),r=n("dc4a"),s=n("3f8c"),o=n("b622"),a=o("iterator");e.exports=function(e){if(void 0!=e)return r(e,a)||r(e,"@@iterator")||s[i(e)]}},"37e8":function(e,t,n){var i=n("83ab"),r=n("9bf2"),s=n("825a"),o=n("fc6a"),a=n("df75");e.exports=i?Object.defineProperties:function(e,t){s(e);var n,i=o(t),c=a(t),u=c.length,l=0;while(u>l)r.f(e,n=c[l++],i[n]);return e}},"3a9b":function(e,t,n){var i=n("e330");e.exports=i({}.isPrototypeOf)},"3bbe":function(e,t,n){var i=n("da84"),r=n("1626"),s=i.String,o=i.TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw o("Can't set "+s(e)+" as a prototype")}},"3f8c":function(e,t){e.exports={}},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,i="/";t.cwd=function(){return i},t.chdir=function(t){e||(e=n("df7c")),i=e.resolve(t,i)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"44ad":function(e,t,n){var i=n("da84"),r=n("e330"),s=n("d039"),o=n("c6b6"),a=i.Object,c=r("".split);e.exports=s((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?c(e,""):a(e)}:a},"44d2":function(e,t,n){var i=n("b622"),r=n("7c73"),s=n("9bf2"),o=i("unscopables"),a=Array.prototype;void 0==a[o]&&s.f(a,o,{configurable:!0,value:r(null)}),e.exports=function(e){a[o][e]=!0}},"44de":function(e,t,n){var i=n("da84");e.exports=function(e,t){var n=i.console;n&&n.error&&(1==arguments.length?n.error(e):n.error(e,t))}},4840:function(e,t,n){var i=n("825a"),r=n("5087"),s=n("b622"),o=s("species");e.exports=function(e,t){var n,s=i(e).constructor;return void 0===s||void 0==(n=i(s)[o])?t:r(n)}},"485a":function(e,t,n){var i=n("da84"),r=n("c65b"),s=n("1626"),o=n("861d"),a=i.TypeError;e.exports=function(e,t){var n,i;if("string"===t&&s(n=e.toString)&&!o(i=r(n,e)))return i;if(s(n=e.valueOf)&&!o(i=r(n,e)))return i;if("string"!==t&&s(n=e.toString)&&!o(i=r(n,e)))return i;throw a("Can't convert object to primitive value")}},4930:function(e,t,n){var i=n("2d00"),r=n("d039");e.exports=!!Object.getOwnPropertySymbols&&!r((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&i&&i<41}))},"4d5c":function(e,t,n){(function(n){var i,r,s=function e(t,n,i){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var s=Object.getPrototypeOf(t);return null===s?void 0:e(s,n,i)}if("value"in r)return r.value;var o=r.get;return void 0!==o?o.call(i):void 0},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/*!
 * Materialize v1.0.0-rc.2 (http://materializecss.com)
 * Copyright 2014-2017 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
/*! cash-dom 1.3.5, https://github.com/kenwheeler/cash @license MIT */(function(e){window.cash=e()})((function(){var e,t=document,n=window,i=Array.prototype,r=i.slice,s=i.filter,o=i.push,a=function(){},c=function(e){return typeof e===typeof a&&e.call},u=function(e){return"string"===typeof e},l=/^#[\w-]*$/,h=/^\.[\w-]*$/,d=/<.+>/,f=/^\w+$/;function p(e,n){n=n||t;var i=h.test(e)?n.getElementsByClassName(e.slice(1)):f.test(e)?n.getElementsByTagName(e):n.querySelectorAll(e);return i}function m(n){if(!e){e=t.implementation.createHTMLDocument(null);var i=e.createElement("base");i.href=t.location.href,e.head.appendChild(i)}return e.body.innerHTML=n,e.body.childNodes}function v(e){"loading"!==t.readyState?e():t.addEventListener("DOMContentLoaded",e)}function g(e,i){if(!e)return this;if(e.cash&&e!==n)return e;var r,s=e,o=0;if(u(e))s=l.test(e)?t.getElementById(e.slice(1)):d.test(e)?m(e):p(e,i);else if(c(e))return v(e),this;if(!s)return this;if(s.nodeType||s===n)this[0]=s,this.length=1;else for(r=this.length=s.length;o<r;o++)this[o]=s[o];return this}function y(e,t){return new g(e,t)}var _=y.fn=y.prototype=g.prototype={cash:!0,length:0,push:o,splice:i.splice,map:i.map,init:g};function w(e,t){for(var n=e.length,i=0;i<n;i++)if(!1===t.call(e[i],e[i],i,e))break}function b(e,t){var n=e&&(e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector);return!!n&&n.call(e,t)}function k(e){return u(e)?b:e.cash?function(t){return e.is(t)}:function(e,t){return e===t}}function E(e){return y(r.call(e).filter((function(e,t,n){return n.indexOf(e)===t})))}Object.defineProperty(_,"constructor",{value:y}),y.parseHTML=m,y.noop=a,y.isFunction=c,y.isString=u,y.extend=_.extend=function(e){e=e||{};var t=r.call(arguments),n=t.length,i=1;for(1===t.length&&(e=this,i=0);i<n;i++)if(t[i])for(var s in t[i])t[i].hasOwnProperty(s)&&(e[s]=t[i][s]);return e},y.extend({merge:function(e,t){for(var n=+t.length,i=e.length,r=0;r<n;i++,r++)e[i]=t[r];return e.length=i,e},each:w,matches:b,unique:E,isArray:Array.isArray,isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)}});var I=y.uid="_cash"+Date.now();function T(e){return e[I]=e[I]||{}}function C(e,t,n){return T(e)[t]=n}function S(e,t){var n=T(e);return void 0===n[t]&&(n[t]=e.dataset?e.dataset[t]:y(e).attr("data-"+t)),n[t]}function O(e,t){var n=T(e);n?delete n[t]:e.dataset?delete e.dataset[t]:y(e).removeAttr("data-"+name)}_.extend({data:function(e,t){if(u(e))return void 0===t?S(this[0],e):this.each((function(n){return C(n,e,t)}));for(var n in e)this.data(n,e[n]);return this},removeData:function(e){return this.each((function(t){return O(t,e)}))}});var A=/\S+/g;function x(e){return u(e)&&e.match(A)}function D(e,t){return e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className)}function L(e,t,n){e.classList?e.classList.add(t):n.indexOf(" "+t+" ")&&(e.className+=" "+t)}function N(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(t,"")}_.extend({addClass:function(e){var t=x(e);return t?this.each((function(e){var n=" "+e.className+" ";w(t,(function(t){L(e,t,n)}))})):this},attr:function(e,t){if(e){if(u(e))return void 0===t?this[0]?this[0].getAttribute?this[0].getAttribute(e):this[0][e]:void 0:this.each((function(n){n.setAttribute?n.setAttribute(e,t):n[e]=t}));for(var n in e)this.attr(n,e[n]);return this}},hasClass:function(e){var t=!1,n=x(e);return n&&n.length&&this.each((function(e){return t=D(e,n[0]),!t})),t},prop:function(e,t){if(u(e))return void 0===t?this[0][e]:this.each((function(n){n[e]=t}));for(var n in e)this.prop(n,e[n]);return this},removeAttr:function(e){return this.each((function(t){t.removeAttribute?t.removeAttribute(e):delete t[e]}))},removeClass:function(e){if(!arguments.length)return this.attr("class","");var t=x(e);return t?this.each((function(e){w(t,(function(t){N(e,t)}))})):this},removeProp:function(e){return this.each((function(t){delete t[e]}))},toggleClass:function(e,t){if(void 0!==t)return this[t?"addClass":"removeClass"](e);var n=x(e);return n?this.each((function(e){var t=" "+e.className+" ";w(n,(function(n){D(e,n)?N(e,n):L(e,n,t)}))})):this}}),_.extend({add:function(e,t){return E(y.merge(this,y(e,t)))},each:function(e){return w(this,e),this},eq:function(e){return y(this.get(e))},filter:function(e){if(!e)return this;var t=c(e)?e:k(e);return y(s.call(this,(function(n){return t(n,e)})))},first:function(){return this.eq(0)},get:function(e){return void 0===e?r.call(this):e<0?this[e+this.length]:this[e]},index:function(e){var t=e?y(e)[0]:this[0],n=e?this:y(t).parent().children();return r.call(n).indexOf(t)},last:function(){return this.eq(-1)}});var R=function(){var e=/(?:^\w|[A-Z]|\b\w)/g,t=/[\s-_]+/g;return function(n){return n.replace(e,(function(e,t){return e[0===t?"toLowerCase":"toUpperCase"]()})).replace(t,"")}}(),M=function(){var e={},t=document,n=t.createElement("div"),i=n.style;return function(t){if(t=R(t),e[t])return e[t];var n=t.charAt(0).toUpperCase()+t.slice(1),r=["webkit","moz","ms","o"],s=(t+" "+r.join(n+" ")+n).split(" ");return w(s,(function(n){if(n in i)return e[n]=t=e[t]=n,!1})),e[t]}}();function P(e,t){return parseInt(n.getComputedStyle(e[0],null)[t],10)||0}function j(e,t,n){var i=S(e,"_cashEvents")||C(e,"_cashEvents",{});i[t]=i[t]||[],i[t].push(n),e.addEventListener(t,n)}function $(e,t,n){var i,r=S(e,"_cashEvents"),s=r&&r[t];s&&(n?(e.removeEventListener(t,n),i=s.indexOf(n),i>=0&&s.splice(i,1)):(w(s,(function(n){e.removeEventListener(t,n)})),s=[]))}function B(e,t){return"&"+encodeURIComponent(e)+"="+encodeURIComponent(t).replace(/%20/g,"+")}function F(e){var t=[];return w(e.options,(function(e){e.selected&&t.push(e.value)})),t.length?t:null}function U(e){var t=e.selectedIndex;return t>=0?e.options[t].value:null}function V(e){var t=e.type;if(!t)return null;switch(t.toLowerCase()){case"select-one":return U(e);case"select-multiple":return F(e);case"radio":return e.checked?e.value:null;case"checkbox":return e.checked?e.value:null;default:return e.value?e.value:null}}function q(e,t,n){if(n){var i=e.childNodes[0];e.insertBefore(t,i)}else e.appendChild(t)}function H(e,t,n){var i=u(t);i||!t.length?w(e,i?function(e){return e.insertAdjacentHTML(n?"afterbegin":"beforeend",t)}:function(e,i){return q(e,0===i?t:t.cloneNode(!0),n)}):w(t,(function(t){return H(e,t,n)}))}y.prefixedProp=M,y.camelCase=R,_.extend({css:function(e,t){if(u(e))return e=M(e),arguments.length>1?this.each((function(n){return n.style[e]=t})):n.getComputedStyle(this[0])[e];for(var i in e)this.css(i,e[i]);return this}}),w(["Width","Height"],(function(e){var t=e.toLowerCase();_[t]=function(){return this[0].getBoundingClientRect()[t]},_["inner"+e]=function(){return this[0]["client"+e]},_["outer"+e]=function(t){return this[0]["offset"+e]+(t?P(this,"margin"+("Width"===e?"Left":"Top"))+P(this,"margin"+("Width"===e?"Right":"Bottom")):0)}})),_.extend({off:function(e,t){return this.each((function(n){return $(n,e,t)}))},on:function(e,t,n,i){var r;if(!u(e)){for(var s in e)this.on(s,t,e[s]);return this}return c(t)&&(n=t,t=null),"ready"===e?(v(n),this):(t&&(r=n,n=function(e){var n=e.target;while(!b(n,t)){if(n===this||null===n)return!1;n=n.parentNode}n&&r.call(n,e)}),this.each((function(t){var r=n;i&&(r=function(){n.apply(this,arguments),$(t,e,r)}),j(t,e,r)})))},one:function(e,t,n){return this.on(e,t,n,!0)},ready:v,trigger:function(e,t){if(document.createEvent){var n=document.createEvent("HTMLEvents");return n.initEvent(e,!0,!1),n=this.extend(n,t),this.each((function(e){return e.dispatchEvent(n)}))}}}),_.extend({serialize:function(){var e="";return w(this[0].elements||this,(function(t){if(!t.disabled&&"FIELDSET"!==t.tagName){var n=t.name;switch(t.type.toLowerCase()){case"file":case"reset":case"submit":case"button":break;case"select-multiple":var i=V(t);null!==i&&w(i,(function(t){e+=B(n,t)}));break;default:var r=V(t);null!==r&&(e+=B(n,r))}}})),e.substr(1)},val:function(e){return void 0===e?V(this[0]):this.each((function(t){return t.value=e}))}}),_.extend({after:function(e){return y(e).insertAfter(this),this},append:function(e){return H(this,e),this},appendTo:function(e){return H(y(e),this),this},before:function(e){return y(e).insertBefore(this),this},clone:function(){return y(this.map((function(e){return e.cloneNode(!0)})))},empty:function(){return this.html(""),this},html:function(e){if(void 0===e)return this[0].innerHTML;var t=e.nodeType?e[0].outerHTML:e;return this.each((function(e){return e.innerHTML=t}))},insertAfter:function(e){var t=this;return y(e).each((function(e,n){var i=e.parentNode,r=e.nextSibling;t.each((function(e){i.insertBefore(0===n?e:e.cloneNode(!0),r)}))})),this},insertBefore:function(e){var t=this;return y(e).each((function(e,n){var i=e.parentNode;t.each((function(t){i.insertBefore(0===n?t:t.cloneNode(!0),e)}))})),this},prepend:function(e){return H(this,e,!0),this},prependTo:function(e){return H(y(e),this,!0),this},remove:function(){return this.each((function(e){if(e.parentNode)return e.parentNode.removeChild(e)}))},text:function(e){return void 0===e?this[0].textContent:this.each((function(t){return t.textContent=e}))}});var W=t.documentElement;return _.extend({position:function(){var e=this[0];return{left:e.offsetLeft,top:e.offsetTop}},offset:function(){var e=this[0].getBoundingClientRect();return{top:e.top+n.pageYOffset-W.clientTop,left:e.left+n.pageXOffset-W.clientLeft}},offsetParent:function(){return y(this[0].offsetParent)}}),_.extend({children:function(e){var t=[];return this.each((function(e){o.apply(t,e.children)})),t=E(t),e?t.filter((function(t){return b(t,e)})):t},closest:function(e){return!e||this.length<1?y():this.is(e)?this.filter(e):this.parent().closest(e)},is:function(e){if(!e)return!1;var t=!1,n=k(e);return this.each((function(i){return t=n(i,e),!t})),t},find:function(e){if(!e||e.nodeType)return y(e&&this.has(e).length?e:null);var t=[];return this.each((function(n){o.apply(t,p(e,n))})),E(t)},has:function(e){var t=u(e)?function(t){return 0!==p(e,t).length}:function(t){return t.contains(e)};return this.filter(t)},next:function(){return y(this[0].nextElementSibling)},not:function(e){if(!e)return this;var t=k(e);return this.filter((function(n){return!t(n,e)}))},parent:function(){var e=[];return this.each((function(t){t&&t.parentNode&&e.push(t.parentNode)})),E(e)},parents:function(e){var n,i=[];return this.each((function(r){n=r;while(n&&n.parentNode&&n!==t.body.parentNode)n=n.parentNode,(!e||e&&b(n,e))&&i.push(n)})),E(i)},prev:function(){return y(this[0].previousElementSibling)},siblings:function(e){var t=this.parent().children(e),n=this[0];return t.filter((function(e){return e!==n}))}}),y}));var l=function(){function e(t,n,i){u(this,e),n instanceof Element||console.error(Error(n+" is not an HTML Element"));var r=t.getInstance(n);r&&r.destroy(),this.el=n,this.$el=cash(n)}return o(e,null,[{key:"init",value:function(e,t,n){var i=null;if(t instanceof Element)i=new e(t,n);else if(t&&(t.jquery||t.cash||t instanceof NodeList)){for(var r=[],s=0;s<t.length;s++)r.push(new e(t[s],n));i=r}return i}}]),e}();(function(e){e.Package?M={}:e.M={},M.jQueryLoaded=!!e.jQuery})(window),i=[],r=function(){return M}.apply(t,i),void 0===r||(e.exports=r),M.keys={TAB:9,ENTER:13,ESC:27,ARROW_UP:38,ARROW_DOWN:40},M.tabPressed=!1,M.keyDown=!1;var h=function(e){M.keyDown=!0,e.which!==M.keys.TAB&&e.which!==M.keys.ARROW_DOWN&&e.which!==M.keys.ARROW_UP||(M.tabPressed=!0)},d=function(e){M.keyDown=!1,e.which!==M.keys.TAB&&e.which!==M.keys.ARROW_DOWN&&e.which!==M.keys.ARROW_UP||(M.tabPressed=!1)},f=function(e){M.keyDown&&document.body.classList.add("keyboard-focused")},p=function(e){document.body.classList.remove("keyboard-focused")};document.addEventListener("keydown",h,!0),document.addEventListener("keyup",d,!0),document.addEventListener("focus",f,!0),document.addEventListener("blur",p,!0),M.initializeJqueryWrapper=function(e,t,n){jQuery.fn[t]=function(i){if(e.prototype[i]){var r=Array.prototype.slice.call(arguments,1);if("get"===i.slice(0,3)){var s=this.first()[0][n];return s[i].apply(s,r)}return this.each((function(){var e=this[n];e[i].apply(e,r)}))}if("object"===typeof i||!i)return e.init(this,arguments[0]),this;jQuery.error("Method "+i+" does not exist on jQuery."+t)}},M.AutoInit=function(e){var t=e||document.body,n={Autocomplete:t.querySelectorAll(".autocomplete:not(.no-autoinit)"),Carousel:t.querySelectorAll(".carousel:not(.no-autoinit)"),Chips:t.querySelectorAll(".chips:not(.no-autoinit)"),Collapsible:t.querySelectorAll(".collapsible:not(.no-autoinit)"),Datepicker:t.querySelectorAll(".datepicker:not(.no-autoinit)"),Dropdown:t.querySelectorAll(".dropdown-trigger:not(.no-autoinit)"),Materialbox:t.querySelectorAll(".materialboxed:not(.no-autoinit)"),Modal:t.querySelectorAll(".modal:not(.no-autoinit)"),Parallax:t.querySelectorAll(".parallax:not(.no-autoinit)"),Pushpin:t.querySelectorAll(".pushpin:not(.no-autoinit)"),ScrollSpy:t.querySelectorAll(".scrollspy:not(.no-autoinit)"),FormSelect:t.querySelectorAll("select:not(.no-autoinit)"),Sidenav:t.querySelectorAll(".sidenav:not(.no-autoinit)"),Tabs:t.querySelectorAll(".tabs:not(.no-autoinit)"),TapTarget:t.querySelectorAll(".tap-target:not(.no-autoinit)"),Timepicker:t.querySelectorAll(".timepicker:not(.no-autoinit)"),Tooltip:t.querySelectorAll(".tooltipped:not(.no-autoinit)"),FloatingActionButton:t.querySelectorAll(".fixed-action-btn:not(.no-autoinit)")};for(var i in n){var r=M[i];r.init(n[i])}},M.objectSelectorString=function(e){var t=e.prop("tagName")||"",n=e.attr("id")||"",i=e.attr("class")||"";return(t+n+i).replace(/\s/g,"")},M.guid=function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}}(),M.escapeHash=function(e){return e.replace(/(:|\.|\[|\]|,|=|\/)/g,"\\$1")},M.elementOrParentIsFixed=function(e){var t=$(e),n=t.add(t.parents()),i=!1;return n.each((function(){if("fixed"===$(this).css("position"))return i=!0,!1})),i},M.checkWithinContainer=function(e,t,n){var i={top:!1,right:!1,bottom:!1,left:!1},r=e.getBoundingClientRect(),s=e===document.body?Math.max(r.bottom,window.innerHeight):r.bottom,o=e.scrollLeft,a=e.scrollTop,c=t.left-o,u=t.top-a;return(c<r.left+n||c<n)&&(i.left=!0),(c+t.width>r.right-n||c+t.width>window.innerWidth-n)&&(i.right=!0),(u<r.top+n||u<n)&&(i.top=!0),(u+t.height>s-n||u+t.height>window.innerHeight-n)&&(i.bottom=!0),i},M.checkPossibleAlignments=function(e,t,n,i){var r={top:!0,right:!0,bottom:!0,left:!0,spaceOnTop:null,spaceOnRight:null,spaceOnBottom:null,spaceOnLeft:null},s="visible"===getComputedStyle(t).overflow,o=t.getBoundingClientRect(),a=Math.min(o.height,window.innerHeight),c=Math.min(o.width,window.innerWidth),u=e.getBoundingClientRect(),l=t.scrollLeft,h=t.scrollTop,d=n.left-l,f=n.top-h,p=n.top+u.height-h;return r.spaceOnRight=s?window.innerWidth-(u.left+n.width):c-(d+n.width),r.spaceOnRight<0&&(r.left=!1),r.spaceOnLeft=s?u.right-n.width:d-n.width+u.width,r.spaceOnLeft<0&&(r.right=!1),r.spaceOnBottom=s?window.innerHeight-(u.top+n.height+i):a-(f+n.height+i),r.spaceOnBottom<0&&(r.top=!1),r.spaceOnTop=s?u.bottom-(n.height+i):p-(n.height-i),r.spaceOnTop<0&&(r.bottom=!1),r},M.getOverflowParent=function(e){return null==e?null:e===document.body||"visible"!==getComputedStyle(e).overflow?e:M.getOverflowParent(e.parentElement)},M.getIdFromTrigger=function(e){var t=e.getAttribute("data-target");return t||(t=e.getAttribute("href"),t=t?t.slice(1):""),t},M.getDocumentScrollTop=function(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},M.getDocumentScrollLeft=function(){return window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0};
/**
 * Get time in ms
 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
 * @type {function}
 * @return {number}
 */
var m=Date.now||function(){return(new Date).getTime()};
/**
 * Returns a function, that, when invoked, will only be triggered at most once
 * during a given window of time. Normally, the throttled function will run
 * as much as it can, without ever going more than once per `wait` duration;
 * but if you'd like to disable the execution on the leading edge, pass
 * `{leading: false}`. To disable execution on the trailing edge, ditto.
 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
 * @param {function} func
 * @param {number} wait
 * @param {Object=} options
 * @returns {Function}
 */M.throttle=function(e,t,n){var i=void 0,r=void 0,s=void 0,o=null,a=0;n||(n={});var c=function(){a=!1===n.leading?0:m(),o=null,s=e.apply(i,r),i=r=null};return function(){var u=m();a||!1!==n.leading||(a=u);var l=t-(u-a);return i=this,r=arguments,l<=0?(clearTimeout(o),o=null,a=u,s=e.apply(i,r),i=r=null):o||!1===n.trailing||(o=setTimeout(c,l)),s}};var v={scope:{}};v.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){if(n.get||n.set)throw new TypeError("ES3 does not support getters and setters.");e!=Array.prototype&&e!=Object.prototype&&(e[t]=n.value)},v.getGlobal=function(e){return"undefined"!=typeof window&&window===e?e:"undefined"!=typeof n&&null!=n?n:e},v.global=v.getGlobal(this),v.SYMBOL_PREFIX="jscomp_symbol_",v.initSymbol=function(){v.initSymbol=function(){},v.global.Symbol||(v.global.Symbol=v.Symbol)},v.symbolCounter_=0,v.Symbol=function(e){return v.SYMBOL_PREFIX+(e||"")+v.symbolCounter_++},v.initSymbolIterator=function(){v.initSymbol();var e=v.global.Symbol.iterator;e||(e=v.global.Symbol.iterator=v.global.Symbol("iterator")),"function"!=typeof Array.prototype[e]&&v.defineProperty(Array.prototype,e,{configurable:!0,writable:!0,value:function(){return v.arrayIterator(this)}}),v.initSymbolIterator=function(){}},v.arrayIterator=function(e){var t=0;return v.iteratorPrototype((function(){return t<e.length?{done:!1,value:e[t++]}:{done:!0}}))},v.iteratorPrototype=function(e){return v.initSymbolIterator(),e={next:e},e[v.global.Symbol.iterator]=function(){return this},e},v.array=v.array||{},v.iteratorFromArray=function(e,t){v.initSymbolIterator(),e instanceof String&&(e+="");var n=0,i={next:function(){if(n<e.length){var r=n++;return{value:t(r,e[r]),done:!1}}return i.next=function(){return{done:!0,value:void 0}},i.next()}};return i[Symbol.iterator]=function(){return i},i},v.polyfill=function(e,t,n,i){if(t){for(n=v.global,e=e.split("."),i=0;i<e.length-1;i++){var r=e[i];r in n||(n[r]={}),n=n[r]}e=e[e.length-1],i=n[e],t=t(i),t!=i&&null!=t&&v.defineProperty(n,e,{configurable:!0,writable:!0,value:t})}},v.polyfill("Array.prototype.keys",(function(e){return e||function(){return v.iteratorFromArray(this,(function(e){return e}))}}),"es6-impl","es3");var g=this;(function(e){M.anime=e()})((function(){function e(e){if(!$.col(e))try{return document.querySelectorAll(e)}catch(t){}}function t(e,t){for(var n=e.length,i=2<=arguments.length?arguments[1]:void 0,r=[],s=0;s<n;s++)if(s in e){var o=e[s];t.call(i,o,s,e)&&r.push(o)}return r}function n(e){return e.reduce((function(e,t){return e.concat($.arr(t)?n(t):t)}),[])}function i(t){return $.arr(t)?t:($.str(t)&&(t=e(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])}function r(e,t){return e.some((function(e){return e===t}))}function s(e){var t,n={};for(t in e)n[t]=e[t];return n}function o(e,t){var n,i=s(e);for(n in e)i[n]=t.hasOwnProperty(n)?t[n]:e[n];return i}function a(e,t){var n,i=s(e);for(n in t)i[n]=$.und(e[n])?t[n]:e[n];return i}function c(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,n,i){return t+t+n+n+i+i}));var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);e=parseInt(t[1],16);var n=parseInt(t[2],16);t=parseInt(t[3],16);return"rgba("+e+","+n+","+t+",1)"}function u(e){function t(e,t,n){return 0>n&&(n+=1),1<n&&--n,n<1/6?e+6*(t-e)*n:.5>n?t:n<2/3?e+(t-e)*(2/3-n)*6:e}var n=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e);e=parseInt(n[1])/360;var i=parseInt(n[2])/100,r=parseInt(n[3])/100;n=n[4]||1;if(0==i)r=i=e=r;else{var s=.5>r?r*(1+i):r+i-r*i,o=2*r-s;r=t(o,s,e+1/3),i=t(o,s,e);e=t(o,s,e-1/3)}return"rgba("+255*r+","+255*i+","+255*e+","+n+")"}function l(e){if(e=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e))return e[2]}function h(e){return-1<e.indexOf("translate")||"perspective"===e?"px":-1<e.indexOf("rotate")||-1<e.indexOf("skew")?"deg":void 0}function d(e,t){return $.fnc(e)?e(t.target,t.id,t.total):e}function f(e,t){if(t in e.style)return getComputedStyle(e).getPropertyValue(t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function p(e,t){return $.dom(e)&&r(j,t)?"transform":$.dom(e)&&(e.getAttribute(t)||$.svg(e)&&e[t])?"attribute":$.dom(e)&&"transform"!==t&&f(e,t)?"css":null!=e[t]?"object":void 0}function m(e,n){var i=h(n);i=-1<n.indexOf("scale")?1:0+i;if(e=e.style.transform,!e)return i;for(var r=[],s=[],o=[],a=/(\w+)\((.+?)\)/g;r=a.exec(e);)s.push(r[1]),o.push(r[2]);return e=t(o,(function(e,t){return s[t]===n})),e.length?e[0]:i}function v(e,t){switch(p(e,t)){case"transform":return m(e,t);case"css":return f(e,t);case"attribute":return e.getAttribute(t)}return e[t]||0}function y(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var i=l(e)||0;switch(t=parseFloat(t),e=parseFloat(e.replace(n[0],"")),n[0][0]){case"+":return t+e+i;case"-":return t-e+i;case"*":return t*e+i}}function _(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function w(e){e=e.points;for(var t,n=0,i=0;i<e.numberOfItems;i++){var r=e.getItem(i);0<i&&(n+=_(t,r)),t=r}return n}function b(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return 2*Math.PI*e.getAttribute("r");case"rect":return 2*e.getAttribute("width")+2*e.getAttribute("height");case"line":return _({x:e.getAttribute("x1"),y:e.getAttribute("y1")},{x:e.getAttribute("x2"),y:e.getAttribute("y2")});case"polyline":return w(e);case"polygon":var t=e.points;return w(e)+_(t.getItem(t.numberOfItems-1),t.getItem(0))}}function k(e,t){function n(n){return n=void 0===n?0:n,e.el.getPointAtLength(1<=t+n?t+n:0)}var i=n(),r=n(-1),s=n(1);switch(e.property){case"x":return i.x;case"y":return i.y;case"angle":return 180*Math.atan2(s.y-r.y,s.x-r.x)/Math.PI}}function E(e,t){var n,i=/-?\d*\.?\d+/g;if(n=$.pth(e)?e.totalLength:e,$.col(n))if($.rgb(n)){var r=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n);n=r?"rgba("+r[1]+",1)":n}else n=$.hex(n)?c(n):$.hsl(n)?u(n):void 0;else r=(r=l(n))?n.substr(0,n.length-r.length):n,n=t&&!/\s/g.test(n)?r+t:r;return n+="",{original:n,numbers:n.match(i)?n.match(i).map(Number):[0],strings:$.str(e)||t?n.split(i):[]}}function I(e){return e=e?n($.arr(e)?e.map(i):i(e)):[],t(e,(function(e,t,n){return n.indexOf(e)===t}))}function T(e){var t=I(e);return t.map((function(e,n){return{target:e,id:n,total:t.length}}))}function C(e,t){var n=s(t);if($.arr(e)){var r=e.length;2!==r||$.obj(e[0])?$.fnc(t.duration)||(n.duration=t.duration/r):e={value:e}}return i(e).map((function(e,n){return n=n?0:t.delay,e=$.obj(e)&&!$.pth(e)?e:{value:e},$.und(e.delay)&&(e.delay=n),e})).map((function(e){return a(e,n)}))}function S(e,t){var n,i={};for(n in e){var r=d(e[n],t);$.arr(r)&&(r=r.map((function(e){return d(e,t)})),1===r.length&&(r=r[0])),i[n]=r}return i.duration=parseFloat(i.duration),i.delay=parseFloat(i.delay),i}function O(e){return $.arr(e)?B.apply(this,e):F[e]}function A(e,t){var n;return e.tweens.map((function(i){i=S(i,t);var r=i.value,s=v(t.target,e.name),o=n?n.to.original:s,a=(o=$.arr(r)?r[0]:o,y($.arr(r)?r[1]:r,o));s=l(a)||l(o)||l(s);return i.from=E(o,s),i.to=E(a,s),i.start=n?n.end:e.offset,i.end=i.start+i.delay+i.duration,i.easing=O(i.easing),i.elasticity=(1e3-Math.min(Math.max(i.elasticity,1),999))/1e3,i.isPath=$.pth(r),i.isColor=$.col(i.from.original),i.isColor&&(i.round=1),n=i}))}function x(e,i){return t(n(e.map((function(e){return i.map((function(t){var n=p(e.target,t.name);if(n){var i=A(t,e);t={type:n,property:t.name,animatable:e,tweens:i,duration:i[i.length-1].end,delay:i[0].delay}}else t=void 0;return t}))}))),(function(e){return!$.und(e)}))}function D(e,t,n,i){var r="delay"===e;return t.length?(r?Math.min:Math.max).apply(Math,t.map((function(t){return t[e]}))):r?i.delay:n.offset+i.delay+i.duration}function L(e){var t,n=o(M,e),i=o(P,e),r=T(e.targets),s=[],c=a(n,i);for(t in e)c.hasOwnProperty(t)||"targets"===t||s.push({name:t,offset:c.offset,tweens:C(e[t],i)});return e=x(r,s),a(n,{children:[],animatables:r,animations:e,duration:D("duration",e,n,i),delay:D("delay",e,n,i)})}function N(e){function n(){return window.Promise&&new Promise((function(e){return h=e}))}function i(e){return p.reversed?p.duration-e:e}function r(e){for(var n=0,i={},r=p.animations,s=r.length;n<s;){var o=r[n],a=o.animatable,c=o.tweens,u=c.length-1,l=c[u];u&&(l=t(c,(function(t){return e<t.end}))[0]||l);c=Math.min(Math.max(e-l.start-l.delay,0),l.duration)/l.duration;for(var h=isNaN(c)?1:l.easing(c,l.elasticity),d=(c=l.to.strings,l.round),m=(u=[],void 0),v=(m=l.to.numbers.length,0);v<m;v++){var g=void 0,y=(g=l.to.numbers[v],l.from.numbers[v]);g=l.isPath?k(l.value,h*g):y+h*(g-y);d&&(l.isColor&&2<v||(g=Math.round(g*d)/d)),u.push(g)}if(l=c.length)for(m=c[0],h=0;h<l;h++)d=c[h+1],v=u[h],isNaN(v)||(m=d?m+(v+d):m+(v+" "));else m=u[0];U[o.type](a.target,o.property,m,i,a.id),o.currentValue=m,n++}if(n=Object.keys(i).length)for(r=0;r<n;r++)R||(R=f(document.body,"transform")?"transform":"-webkit-transform"),p.animatables[r].target.style[R]=i[r].join(" ");p.currentTime=e,p.progress=e/p.duration*100}function s(e){p[e]&&p[e](p)}function o(){p.remaining&&!0!==p.remaining&&p.remaining--}function a(e){var t=p.duration,a=p.offset,f=a+p.delay,m=p.currentTime,v=p.reversed,g=i(e);if(p.children.length){var y=p.children,_=y.length;if(g>=p.currentTime)for(var w=0;w<_;w++)y[w].seek(g);else for(;_--;)y[_].seek(g)}(g>=f||!t)&&(p.began||(p.began=!0,s("begin")),s("run")),g>a&&g<t?r(g):(g<=a&&0!==m&&(r(0),v&&o()),(g>=t&&m!==t||!t)&&(r(t),v||o())),s("update"),e>=t&&(p.remaining?(u=c,"alternate"===p.direction&&(p.reversed=!p.reversed)):(p.pause(),p.completed||(p.completed=!0,s("complete"),"Promise"in window&&(h(),d=n()))),l=0)}e=void 0===e?{}:e;var c,u,l=0,h=null,d=n(),p=L(e);return p.reset=function(){var e=p.direction,t=p.loop;for(p.currentTime=0,p.progress=0,p.paused=!0,p.began=!1,p.completed=!1,p.reversed="reverse"===e,p.remaining="alternate"===e&&1===t?2:t,r(0),e=p.children.length;e--;)p.children[e].reset()},p.tick=function(e){c=e,u||(u=c),a((l+c-u)*N.speed)},p.seek=function(e){a(i(e))},p.pause=function(){var e=V.indexOf(p);-1<e&&V.splice(e,1),p.paused=!0},p.play=function(){p.paused&&(p.paused=!1,u=0,l=i(p.currentTime),V.push(p),q||H())},p.reverse=function(){p.reversed=!p.reversed,u=0,l=i(p.currentTime)},p.restart=function(){p.pause(),p.reset(),p.play()},p.finished=d,p.reset(),p.autoplay&&p.play(),p}var R,M={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},P={duration:1e3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},j="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),$={arr:function(e){return Array.isArray(e)},obj:function(e){return-1<Object.prototype.toString.call(e).indexOf("Object")},pth:function(e){return $.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},dom:function(e){return e.nodeType||$.svg(e)},str:function(e){return"string"===typeof e},fnc:function(e){return"function"===typeof e},und:function(e){return"undefined"===typeof e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return $.hex(e)||$.rgb(e)||$.hsl(e)}},B=function(){function e(e,t,n){return(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e}return function(t,n,i,r){if(0<=t&&1>=t&&0<=i&&1>=i){var s=new Float32Array(11);if(t!==n||i!==r)for(var o=0;11>o;++o)s[o]=e(.1*o,t,i);return function(o){if(t===n&&i===r)return o;if(0===o)return 0;if(1===o)return 1;for(var a=0,c=1;10!==c&&s[c]<=o;++c)a+=.1;--c;c=a+(o-s[c])/(s[c+1]-s[c])*.1;var u=3*(1-3*i+3*t)*c*c+2*(3*i-6*t)*c+3*t;if(.001<=u){for(a=0;4>a;++a){if(u=3*(1-3*i+3*t)*c*c+2*(3*i-6*t)*c+3*t,0===u)break;var l=e(c,t,i)-o;c=c-l/u}o=c}else if(0===u)o=c;else{c=a,a=a+.1;var h=0;do{l=c+(a-c)/2,u=e(l,t,i)-o,0<u?a=l:c=l}while(1e-7<Math.abs(u)&&10>++h);o=l}return e(o,n,r)}}}}(),F=function(){function e(e,t){return 0===e||1===e?e:-Math.pow(2,10*(e-1))*Math.sin(2*(e-1-t/(2*Math.PI)*Math.asin(1))*Math.PI/t)}var t,n="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),i={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],e],Out:[[.25,.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(t,n){return 1-e(1-t,n)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(t,n){return.5>t?e(2*t,n)/2:1-e(-2*t+2,n)/2}]},r={linear:B(.25,.25,.75,.75)},s={};for(t in i)s.type=t,i[s.type].forEach(function(e){return function(t,i){r["ease"+e.type+n[i]]=$.fnc(t)?t:B.apply(g,t)}}(s)),s={type:s.type};return r}(),U={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,i,r){i[r]||(i[r]=[]),i[r].push(t+"("+n+")")}},V=[],q=0,H=function(){function e(){q=requestAnimationFrame(t)}function t(t){var n=V.length;if(n){for(var i=0;i<n;)V[i]&&V[i].tick(t),i++;e()}else cancelAnimationFrame(q),q=0}return e}();return N.version="2.2.0",N.speed=1,N.running=V,N.remove=function(e){e=I(e);for(var t=V.length;t--;)for(var n=V[t],i=n.animations,s=i.length;s--;)r(e,i[s].animatable.target)&&(i.splice(s,1),i.length||n.pause())},N.getValue=v,N.path=function(t,n){var i=$.str(t)?e(t)[0]:t,r=n||100;return function(e){return{el:i,property:e,totalLength:b(i)*(r/100)}}},N.setDashoffset=function(e){var t=b(e);return e.setAttribute("stroke-dasharray",t),t},N.bezier=B,N.easings=F,N.timeline=function(e){var t=N(e);return t.pause(),t.duration=0,t.add=function(n){return t.children.forEach((function(e){e.began=!0,e.completed=!0})),i(n).forEach((function(n){var i=a(n,o(P,e||{}));i.targets=i.targets||e.targets,n=t.duration;var r=i.offset;i.autoplay=!1,i.direction=t.direction,i.offset=$.und(r)?n:y(r,n),t.began=!0,t.completed=!0,t.seek(i.offset),i=N(i),i.began=!0,i.completed=!0,i.duration>n&&(t.duration=i.duration),t.children.push(i)})),t.seek(0),t.reset(),t.autoplay&&t.restart(),t},t},N.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},N})),function(e,t){"use strict";var n={accordion:!0,onOpenStart:void 0,onOpenEnd:void 0,onCloseStart:void 0,onCloseEnd:void 0,inDuration:300,outDuration:300},i=function(i){function r(t,n){u(this,r);var i=a(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,r,t,n));i.el.M_Collapsible=i,i.options=e.extend({},r.defaults,n),i.$headers=i.$el.children("li").children(".collapsible-header"),i.$headers.attr("tabindex",0),i._setupEventHandlers();var s=i.$el.children("li.active").children(".collapsible-body");return i.options.accordion?s.first().css("display","block"):s.css("display","block"),i}return c(r,i),o(r,[{key:"destroy",value:function(){this._removeEventHandlers(),this.el.M_Collapsible=void 0}},{key:"_setupEventHandlers",value:function(){var e=this;this._handleCollapsibleClickBound=this._handleCollapsibleClick.bind(this),this._handleCollapsibleKeydownBound=this._handleCollapsibleKeydown.bind(this),this.el.addEventListener("click",this._handleCollapsibleClickBound),this.$headers.each((function(t){t.addEventListener("keydown",e._handleCollapsibleKeydownBound)}))}},{key:"_removeEventHandlers",value:function(){var e=this;this.el.removeEventListener("click",this._handleCollapsibleClickBound),this.$headers.each((function(t){t.removeEventListener("keydown",e._handleCollapsibleKeydownBound)}))}},{key:"_handleCollapsibleClick",value:function(t){var n=e(t.target).closest(".collapsible-header");if(t.target&&n.length){var i=n.closest(".collapsible");if(i[0]===this.el){var r=n.closest("li"),s=i.children("li"),o=r[0].classList.contains("active"),a=s.index(r);o?this.close(a):this.open(a)}}}},{key:"_handleCollapsibleKeydown",value:function(e){13===e.keyCode&&this._handleCollapsibleClickBound(e)}},{key:"_animateIn",value:function(e){var n=this,i=this.$el.children("li").eq(e);if(i.length){var r=i.children(".collapsible-body");t.remove(r[0]),r.css({display:"block",overflow:"hidden",height:0,paddingTop:"",paddingBottom:""});var s=r.css("padding-top"),o=r.css("padding-bottom"),a=r[0].scrollHeight;r.css({paddingTop:0,paddingBottom:0}),t({targets:r[0],height:a,paddingTop:s,paddingBottom:o,duration:this.options.inDuration,easing:"easeInOutCubic",complete:function(e){r.css({overflow:"",paddingTop:"",paddingBottom:"",height:""}),"function"===typeof n.options.onOpenEnd&&n.options.onOpenEnd.call(n,i[0])}})}}},{key:"_animateOut",value:function(e){var n=this,i=this.$el.children("li").eq(e);if(i.length){var r=i.children(".collapsible-body");t.remove(r[0]),r.css("overflow","hidden"),t({targets:r[0],height:0,paddingTop:0,paddingBottom:0,duration:this.options.outDuration,easing:"easeInOutCubic",complete:function(){r.css({height:"",overflow:"",padding:"",display:""}),"function"===typeof n.options.onCloseEnd&&n.options.onCloseEnd.call(n,i[0])}})}}},{key:"open",value:function(t){var n=this,i=this.$el.children("li").eq(t);if(i.length&&!i[0].classList.contains("active")){if("function"===typeof this.options.onOpenStart&&this.options.onOpenStart.call(this,i[0]),this.options.accordion){var r=this.$el.children("li"),s=this.$el.children("li.active");s.each((function(t){var i=r.index(e(t));n.close(i)}))}i[0].classList.add("active"),this._animateIn(t)}}},{key:"close",value:function(e){var t=this.$el.children("li").eq(e);t.length&&t[0].classList.contains("active")&&("function"===typeof this.options.onCloseStart&&this.options.onCloseStart.call(this,t[0]),t[0].classList.remove("active"),this._animateOut(e))}}],[{key:"init",value:function(e,t){return s(r.__proto__||Object.getPrototypeOf(r),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_Collapsible}},{key:"defaults",get:function(){return n}}]),r}(l);M.Collapsible=i,M.jQueryLoaded&&M.initializeJqueryWrapper(i,"collapsible","M_Collapsible")}(cash,M.anime),function(e,t){"use strict";var n={alignment:"left",autoFocus:!0,constrainWidth:!0,container:null,coverTrigger:!0,closeOnClick:!0,hover:!1,inDuration:150,outDuration:250,onOpenStart:null,onOpenEnd:null,onCloseStart:null,onCloseEnd:null,onItemClick:null},i=function(i){function r(t,n){u(this,r);var i=a(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,r,t,n));return i.el.M_Dropdown=i,r._dropdowns.push(i),i.id=M.getIdFromTrigger(t),i.dropdownEl=document.getElementById(i.id),i.$dropdownEl=e(i.dropdownEl),i.options=e.extend({},r.defaults,n),i.isOpen=!1,i.isScrollable=!1,i.isTouchMoving=!1,i.focusedIndex=-1,i.filterQuery=[],i.options.container?e(i.options.container).append(i.dropdownEl):i.$el.after(i.dropdownEl),i._makeDropdownFocusable(),i._resetFilterQueryBound=i._resetFilterQuery.bind(i),i._handleDocumentClickBound=i._handleDocumentClick.bind(i),i._handleDocumentTouchmoveBound=i._handleDocumentTouchmove.bind(i),i._handleDropdownClickBound=i._handleDropdownClick.bind(i),i._handleDropdownKeydownBound=i._handleDropdownKeydown.bind(i),i._handleTriggerKeydownBound=i._handleTriggerKeydown.bind(i),i._setupEventHandlers(),i}return c(r,i),o(r,[{key:"destroy",value:function(){this._resetDropdownStyles(),this._removeEventHandlers(),r._dropdowns.splice(r._dropdowns.indexOf(this),1),this.el.M_Dropdown=void 0}},{key:"_setupEventHandlers",value:function(){this.el.addEventListener("keydown",this._handleTriggerKeydownBound),this.dropdownEl.addEventListener("click",this._handleDropdownClickBound),this.options.hover?(this._handleMouseEnterBound=this._handleMouseEnter.bind(this),this.el.addEventListener("mouseenter",this._handleMouseEnterBound),this._handleMouseLeaveBound=this._handleMouseLeave.bind(this),this.el.addEventListener("mouseleave",this._handleMouseLeaveBound),this.dropdownEl.addEventListener("mouseleave",this._handleMouseLeaveBound)):(this._handleClickBound=this._handleClick.bind(this),this.el.addEventListener("click",this._handleClickBound))}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("keydown",this._handleTriggerKeydownBound),this.dropdownEl.removeEventListener("click",this._handleDropdownClickBound),this.options.hover?(this.el.removeEventListener("mouseenter",this._handleMouseEnterBound),this.el.removeEventListener("mouseleave",this._handleMouseLeaveBound),this.dropdownEl.removeEventListener("mouseleave",this._handleMouseLeaveBound)):this.el.removeEventListener("click",this._handleClickBound)}},{key:"_setupTemporaryEventHandlers",value:function(){document.body.addEventListener("click",this._handleDocumentClickBound,!0),document.body.addEventListener("touchend",this._handleDocumentClickBound),document.body.addEventListener("touchmove",this._handleDocumentTouchmoveBound),this.dropdownEl.addEventListener("keydown",this._handleDropdownKeydownBound)}},{key:"_removeTemporaryEventHandlers",value:function(){document.body.removeEventListener("click",this._handleDocumentClickBound,!0),document.body.removeEventListener("touchend",this._handleDocumentClickBound),document.body.removeEventListener("touchmove",this._handleDocumentTouchmoveBound),this.dropdownEl.removeEventListener("keydown",this._handleDropdownKeydownBound)}},{key:"_handleClick",value:function(e){e.preventDefault(),this.open()}},{key:"_handleMouseEnter",value:function(){this.open()}},{key:"_handleMouseLeave",value:function(t){var n=t.toElement||t.relatedTarget,i=!!e(n).closest(".dropdown-content").length,r=!1,s=e(n).closest(".dropdown-trigger");s.length&&s[0].M_Dropdown&&s[0].M_Dropdown.isOpen&&(r=!0),r||i||this.close()}},{key:"_handleDocumentClick",value:function(t){var n=this,i=e(t.target);this.options.closeOnClick&&i.closest(".dropdown-content").length&&!this.isTouchMoving?setTimeout((function(){n.close()}),0):!i.closest(".dropdown-trigger").length&&i.closest(".dropdown-content").length||setTimeout((function(){n.close()}),0),this.isTouchMoving=!1}},{key:"_handleTriggerKeydown",value:function(e){e.which!==M.keys.ARROW_DOWN&&e.which!==M.keys.ENTER||this.isOpen||(e.preventDefault(),this.open())}},{key:"_handleDocumentTouchmove",value:function(t){var n=e(t.target);n.closest(".dropdown-content").length&&(this.isTouchMoving=!0)}},{key:"_handleDropdownClick",value:function(t){if("function"===typeof this.options.onItemClick){var n=e(t.target).closest("li")[0];this.options.onItemClick.call(this,n)}}},{key:"_handleDropdownKeydown",value:function(t){if(t.which===M.keys.TAB)t.preventDefault(),this.close();else if(t.which!==M.keys.ARROW_DOWN&&t.which!==M.keys.ARROW_UP||!this.isOpen)if(t.which===M.keys.ENTER&&this.isOpen){var n=this.dropdownEl.children[this.focusedIndex],i=e(n).find("a, button").first();i.length?i[0].click():n.click()}else t.which===M.keys.ESC&&this.isOpen&&(t.preventDefault(),this.close());else{t.preventDefault();var r=t.which===M.keys.ARROW_DOWN?1:-1,s=this.focusedIndex,o=!1;do{if(s+=r,this.dropdownEl.children[s]&&-1!==this.dropdownEl.children[s].tabIndex){o=!0;break}}while(s<this.dropdownEl.children.length&&s>=0);o&&(this.focusedIndex=s,this._focusFocusedItem())}var a=String.fromCharCode(t.which).toLowerCase(),c=[9,13,27,38,40];if(a&&-1===c.indexOf(t.which)){this.filterQuery.push(a);var u=this.filterQuery.join(""),l=e(this.dropdownEl).find("li").filter((function(t){return 0===e(t).text().toLowerCase().indexOf(u)}))[0];l&&(this.focusedIndex=e(l).index(),this._focusFocusedItem())}this.filterTimeout=setTimeout(this._resetFilterQueryBound,1e3)}},{key:"_resetFilterQuery",value:function(){this.filterQuery=[]}},{key:"_resetDropdownStyles",value:function(){this.$dropdownEl.css({display:"",width:"",height:"",left:"",top:"","transform-origin":"",transform:"",opacity:""})}},{key:"_makeDropdownFocusable",value:function(){this.dropdownEl.tabIndex=0,e(this.dropdownEl).children().each((function(e){e.getAttribute("tabindex")||e.setAttribute("tabindex",0)}))}},{key:"_focusFocusedItem",value:function(){this.focusedIndex>=0&&this.focusedIndex<this.dropdownEl.children.length&&this.options.autoFocus&&this.dropdownEl.children[this.focusedIndex].focus()}},{key:"_getDropdownPosition",value:function(){this.el.offsetParent.getBoundingClientRect();var e=this.el.getBoundingClientRect(),t=this.dropdownEl.getBoundingClientRect(),n=t.height,i=t.width,r=e.left-t.left,s=e.top-t.top,o={left:r,top:s,height:n,width:i},a=this.dropdownEl.offsetParent?this.dropdownEl.offsetParent:this.dropdownEl.parentNode,c=M.checkPossibleAlignments(this.el,a,o,this.options.coverTrigger?0:e.height),u="top",l=this.options.alignment;if(s+=this.options.coverTrigger?0:e.height,this.isScrollable=!1,c.top||(c.bottom?u="bottom":(this.isScrollable=!0,c.spaceOnTop>c.spaceOnBottom?(u="bottom",n+=c.spaceOnTop,s-=c.spaceOnTop):n+=c.spaceOnBottom)),!c[l]){var h="left"===l?"right":"left";c[h]?l=h:c.spaceOnLeft>c.spaceOnRight?(l="right",i+=c.spaceOnLeft,r-=c.spaceOnLeft):(l="left",i+=c.spaceOnRight)}return"bottom"===u&&(s=s-t.height+(this.options.coverTrigger?e.height:0)),"right"===l&&(r=r-t.width+e.width),{x:r,y:s,verticalAlignment:u,horizontalAlignment:l,height:n,width:i}}},{key:"_animateIn",value:function(){var e=this;t.remove(this.dropdownEl),t({targets:this.dropdownEl,opacity:{value:[0,1],easing:"easeOutQuad"},scaleX:[.3,1],scaleY:[.3,1],duration:this.options.inDuration,easing:"easeOutQuint",complete:function(t){if(e.options.autoFocus&&e.dropdownEl.focus(),"function"===typeof e.options.onOpenEnd){var n=t.animatables[0].target;e.options.onOpenEnd.call(n,e.el)}}})}},{key:"_animateOut",value:function(){var e=this;t.remove(this.dropdownEl),t({targets:this.dropdownEl,opacity:{value:0,easing:"easeOutQuint"},scaleX:.3,scaleY:.3,duration:this.options.outDuration,easing:"easeOutQuint",complete:function(t){if(e._resetDropdownStyles(),"function"===typeof e.options.onCloseEnd){t.animatables[0].target;e.options.onCloseEnd.call(e,e.el)}}})}},{key:"_placeDropdown",value:function(){var e=this.options.constrainWidth?this.el.getBoundingClientRect().width:this.dropdownEl.getBoundingClientRect().width;this.dropdownEl.style.width=e+"px";var t=this._getDropdownPosition();this.dropdownEl.style.left=t.x+"px",this.dropdownEl.style.top=t.y+"px",this.dropdownEl.style.height=t.height+"px",this.dropdownEl.style.width=t.width+"px",this.dropdownEl.style.transformOrigin=("left"===t.horizontalAlignment?"0":"100%")+" "+("top"===t.verticalAlignment?"0":"100%")}},{key:"open",value:function(){this.isOpen||(this.isOpen=!0,"function"===typeof this.options.onOpenStart&&this.options.onOpenStart.call(this,this.el),this._resetDropdownStyles(),this.dropdownEl.style.display="block",this._placeDropdown(),this._animateIn(),this._setupTemporaryEventHandlers())}},{key:"close",value:function(){this.isOpen&&(this.isOpen=!1,this.focusedIndex=-1,"function"===typeof this.options.onCloseStart&&this.options.onCloseStart.call(this,this.el),this._animateOut(),this._removeTemporaryEventHandlers(),this.options.autoFocus&&this.el.focus())}},{key:"recalculateDimensions",value:function(){this.isOpen&&(this.$dropdownEl.css({width:"",height:"",left:"",top:"","transform-origin":""}),this._placeDropdown())}}],[{key:"init",value:function(e,t){return s(r.__proto__||Object.getPrototypeOf(r),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_Dropdown}},{key:"defaults",get:function(){return n}}]),r}(l);i._dropdowns=[],window.M.Dropdown=i,M.jQueryLoaded&&M.initializeJqueryWrapper(i,"dropdown","M_Dropdown")}(cash,M.anime),function(e,t){"use strict";var n={opacity:.5,inDuration:250,outDuration:250,onOpenStart:null,onOpenEnd:null,onCloseStart:null,onCloseEnd:null,preventScrolling:!0,dismissible:!0,startingTop:"4%",endingTop:"10%"},i=function(i){function r(t,n){u(this,r);var i=a(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,r,t,n));return i.el.M_Modal=i,i.options=e.extend({},r.defaults,n),i.isOpen=!1,i.id=i.$el.attr("id"),i._openingTrigger=void 0,i.$overlay=e('<div class="modal-overlay"></div>'),i.el.tabIndex=0,i._nthModalOpened=0,r._count++,i._setupEventHandlers(),i}return c(r,i),o(r,[{key:"destroy",value:function(){r._count--,this._removeEventHandlers(),this.el.removeAttribute("style"),this.$overlay.remove(),this.el.M_Modal=void 0}},{key:"_setupEventHandlers",value:function(){this._handleOverlayClickBound=this._handleOverlayClick.bind(this),this._handleModalCloseClickBound=this._handleModalCloseClick.bind(this),1===r._count&&document.body.addEventListener("click",this._handleTriggerClick),this.$overlay[0].addEventListener("click",this._handleOverlayClickBound),this.el.addEventListener("click",this._handleModalCloseClickBound)}},{key:"_removeEventHandlers",value:function(){0===r._count&&document.body.removeEventListener("click",this._handleTriggerClick),this.$overlay[0].removeEventListener("click",this._handleOverlayClickBound),this.el.removeEventListener("click",this._handleModalCloseClickBound)}},{key:"_handleTriggerClick",value:function(t){var n=e(t.target).closest(".modal-trigger");if(n.length){var i=M.getIdFromTrigger(n[0]),r=document.getElementById(i).M_Modal;r&&r.open(n),t.preventDefault()}}},{key:"_handleOverlayClick",value:function(){this.options.dismissible&&this.close()}},{key:"_handleModalCloseClick",value:function(t){var n=e(t.target).closest(".modal-close");n.length&&this.close()}},{key:"_handleKeydown",value:function(e){27===e.keyCode&&this.options.dismissible&&this.close()}},{key:"_handleFocus",value:function(e){this.el.contains(e.target)||this._nthModalOpened!==r._modalsOpen||this.el.focus()}},{key:"_animateIn",value:function(){var n=this;e.extend(this.el.style,{display:"block",opacity:0}),e.extend(this.$overlay[0].style,{display:"block",opacity:0}),t({targets:this.$overlay[0],opacity:this.options.opacity,duration:this.options.inDuration,easing:"easeOutQuad"});var i={targets:this.el,duration:this.options.inDuration,easing:"easeOutCubic",complete:function(){"function"===typeof n.options.onOpenEnd&&n.options.onOpenEnd.call(n,n.el,n._openingTrigger)}};this.el.classList.contains("bottom-sheet")?(e.extend(i,{bottom:0,opacity:1}),t(i)):(e.extend(i,{top:[this.options.startingTop,this.options.endingTop],opacity:1,scaleX:[.8,1],scaleY:[.8,1]}),t(i))}},{key:"_animateOut",value:function(){var n=this;t({targets:this.$overlay[0],opacity:0,duration:this.options.outDuration,easing:"easeOutQuart"});var i={targets:this.el,duration:this.options.outDuration,easing:"easeOutCubic",complete:function(){n.el.style.display="none",n.$overlay.remove(),"function"===typeof n.options.onCloseEnd&&n.options.onCloseEnd.call(n,n.el)}};this.el.classList.contains("bottom-sheet")?(e.extend(i,{bottom:"-100%",opacity:0}),t(i)):(e.extend(i,{top:[this.options.endingTop,this.options.startingTop],opacity:0,scaleX:.8,scaleY:.8}),t(i))}},{key:"open",value:function(e){if(!this.isOpen)return this.isOpen=!0,r._modalsOpen++,this._nthModalOpened=r._modalsOpen,this.$overlay[0].style.zIndex=1e3+2*r._modalsOpen,this.el.style.zIndex=1e3+2*r._modalsOpen+1,this._openingTrigger=e?e[0]:void 0,"function"===typeof this.options.onOpenStart&&this.options.onOpenStart.call(this,this.el,this._openingTrigger),this.options.preventScrolling&&(document.body.style.overflow="hidden"),this.el.classList.add("open"),this.el.insertAdjacentElement("afterend",this.$overlay[0]),this.options.dismissible&&(this._handleKeydownBound=this._handleKeydown.bind(this),this._handleFocusBound=this._handleFocus.bind(this),document.addEventListener("keydown",this._handleKeydownBound),document.addEventListener("focus",this._handleFocusBound,!0)),t.remove(this.el),t.remove(this.$overlay[0]),this._animateIn(),this.el.focus(),this}},{key:"close",value:function(){if(this.isOpen)return this.isOpen=!1,r._modalsOpen--,this._nthModalOpened=0,"function"===typeof this.options.onCloseStart&&this.options.onCloseStart.call(this,this.el),this.el.classList.remove("open"),0===r._modalsOpen&&(document.body.style.overflow=""),this.options.dismissible&&(document.removeEventListener("keydown",this._handleKeydownBound),document.removeEventListener("focus",this._handleFocusBound,!0)),t.remove(this.el),t.remove(this.$overlay[0]),this._animateOut(),this}}],[{key:"init",value:function(e,t){return s(r.__proto__||Object.getPrototypeOf(r),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_Modal}},{key:"defaults",get:function(){return n}}]),r}(l);i._modalsOpen=0,i._count=0,M.Modal=i,M.jQueryLoaded&&M.initializeJqueryWrapper(i,"modal","M_Modal")}(cash,M.anime),function(e,t){"use strict";var n={inDuration:275,outDuration:200,onOpenStart:null,onOpenEnd:null,onCloseStart:null,onCloseEnd:null},i=function(i){function r(t,n){u(this,r);var i=a(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,r,t,n));return i.el.M_Materialbox=i,i.options=e.extend({},r.defaults,n),i.overlayActive=!1,i.doneAnimating=!0,i.placeholder=e("<div></div>").addClass("material-placeholder"),i.originalWidth=0,i.originalHeight=0,i.originInlineStyles=i.$el.attr("style"),i.caption=i.el.getAttribute("data-caption")||"",i.$el.before(i.placeholder),i.placeholder.append(i.$el),i._setupEventHandlers(),i}return c(r,i),o(r,[{key:"destroy",value:function(){this._removeEventHandlers(),this.el.M_Materialbox=void 0,e(this.placeholder).after(this.el).remove(),this.$el.removeAttr("style")}},{key:"_setupEventHandlers",value:function(){this._handleMaterialboxClickBound=this._handleMaterialboxClick.bind(this),this.el.addEventListener("click",this._handleMaterialboxClickBound)}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("click",this._handleMaterialboxClickBound)}},{key:"_handleMaterialboxClick",value:function(e){!1===this.doneAnimating||this.overlayActive&&this.doneAnimating?this.close():this.open()}},{key:"_handleWindowScroll",value:function(){this.overlayActive&&this.close()}},{key:"_handleWindowResize",value:function(){this.overlayActive&&this.close()}},{key:"_handleWindowEscape",value:function(e){27===e.keyCode&&this.doneAnimating&&this.overlayActive&&this.close()}},{key:"_makeAncestorsOverflowVisible",value:function(){this.ancestorsChanged=e();var t=this.placeholder[0].parentNode;while(null!==t&&!e(t).is(document)){var n=e(t);"visible"!==n.css("overflow")&&(n.css("overflow","visible"),void 0===this.ancestorsChanged?this.ancestorsChanged=n:this.ancestorsChanged=this.ancestorsChanged.add(n)),t=t.parentNode}}},{key:"_animateImageIn",value:function(){var e=this,n={targets:this.el,height:[this.originalHeight,this.newHeight],width:[this.originalWidth,this.newWidth],left:M.getDocumentScrollLeft()+this.windowWidth/2-this.placeholder.offset().left-this.newWidth/2,top:M.getDocumentScrollTop()+this.windowHeight/2-this.placeholder.offset().top-this.newHeight/2,duration:this.options.inDuration,easing:"easeOutQuad",complete:function(){e.doneAnimating=!0,"function"===typeof e.options.onOpenEnd&&e.options.onOpenEnd.call(e,e.el)}};this.maxWidth=this.$el.css("max-width"),this.maxHeight=this.$el.css("max-height"),"none"!==this.maxWidth&&(n.maxWidth=this.newWidth),"none"!==this.maxHeight&&(n.maxHeight=this.newHeight),t(n)}},{key:"_animateImageOut",value:function(){var e=this,n={targets:this.el,width:this.originalWidth,height:this.originalHeight,left:0,top:0,duration:this.options.outDuration,easing:"easeOutQuad",complete:function(){e.placeholder.css({height:"",width:"",position:"",top:"",left:""}),e.attrWidth&&e.$el.attr("width",e.attrWidth),e.attrHeight&&e.$el.attr("height",e.attrHeight),e.$el.removeAttr("style"),e.originInlineStyles&&e.$el.attr("style",e.originInlineStyles),e.$el.removeClass("active"),e.doneAnimating=!0,e.ancestorsChanged.length&&e.ancestorsChanged.css("overflow",""),"function"===typeof e.options.onCloseEnd&&e.options.onCloseEnd.call(e,e.el)}};t(n)}},{key:"_updateVars",value:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.caption=this.el.getAttribute("data-caption")||""}},{key:"open",value:function(){var n=this;this._updateVars(),this.originalWidth=this.el.getBoundingClientRect().width,this.originalHeight=this.el.getBoundingClientRect().height,this.doneAnimating=!1,this.$el.addClass("active"),this.overlayActive=!0,"function"===typeof this.options.onOpenStart&&this.options.onOpenStart.call(this,this.el),this.placeholder.css({width:this.placeholder[0].getBoundingClientRect().width+"px",height:this.placeholder[0].getBoundingClientRect().height+"px",position:"relative",top:0,left:0}),this._makeAncestorsOverflowVisible(),this.$el.css({position:"absolute","z-index":1e3,"will-change":"left, top, width, height"}),this.attrWidth=this.$el.attr("width"),this.attrHeight=this.$el.attr("height"),this.attrWidth&&(this.$el.css("width",this.attrWidth+"px"),this.$el.removeAttr("width")),this.attrHeight&&(this.$el.css("width",this.attrHeight+"px"),this.$el.removeAttr("height")),this.$overlay=e('<div id="materialbox-overlay"></div>').css({opacity:0}).one("click",(function(){n.doneAnimating&&n.close()})),this.$el.before(this.$overlay);var i=this.$overlay[0].getBoundingClientRect();this.$overlay.css({width:this.windowWidth+"px",height:this.windowHeight+"px",left:-1*i.left+"px",top:-1*i.top+"px"}),t.remove(this.el),t.remove(this.$overlay[0]),t({targets:this.$overlay[0],opacity:1,duration:this.options.inDuration,easing:"easeOutQuad"}),""!==this.caption&&(this.$photocaption&&t.remove(this.$photoCaption[0]),this.$photoCaption=e('<div class="materialbox-caption"></div>'),this.$photoCaption.text(this.caption),e("body").append(this.$photoCaption),this.$photoCaption.css({display:"inline"}),t({targets:this.$photoCaption[0],opacity:1,duration:this.options.inDuration,easing:"easeOutQuad"}));var r=0,s=this.originalWidth/this.windowWidth,o=this.originalHeight/this.windowHeight;this.newWidth=0,this.newHeight=0,s>o?(r=this.originalHeight/this.originalWidth,this.newWidth=.9*this.windowWidth,this.newHeight=.9*this.windowWidth*r):(r=this.originalWidth/this.originalHeight,this.newWidth=.9*this.windowHeight*r,this.newHeight=.9*this.windowHeight),this._animateImageIn(),this._handleWindowScrollBound=this._handleWindowScroll.bind(this),this._handleWindowResizeBound=this._handleWindowResize.bind(this),this._handleWindowEscapeBound=this._handleWindowEscape.bind(this),window.addEventListener("scroll",this._handleWindowScrollBound),window.addEventListener("resize",this._handleWindowResizeBound),window.addEventListener("keyup",this._handleWindowEscapeBound)}},{key:"close",value:function(){var e=this;this._updateVars(),this.doneAnimating=!1,"function"===typeof this.options.onCloseStart&&this.options.onCloseStart.call(this,this.el),t.remove(this.el),t.remove(this.$overlay[0]),""!==this.caption&&t.remove(this.$photoCaption[0]),window.removeEventListener("scroll",this._handleWindowScrollBound),window.removeEventListener("resize",this._handleWindowResizeBound),window.removeEventListener("keyup",this._handleWindowEscapeBound),t({targets:this.$overlay[0],opacity:0,duration:this.options.outDuration,easing:"easeOutQuad",complete:function(){e.overlayActive=!1,e.$overlay.remove()}}),this._animateImageOut(),""!==this.caption&&t({targets:this.$photoCaption[0],opacity:0,duration:this.options.outDuration,easing:"easeOutQuad",complete:function(){e.$photoCaption.remove()}})}}],[{key:"init",value:function(e,t){return s(r.__proto__||Object.getPrototypeOf(r),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_Materialbox}},{key:"defaults",get:function(){return n}}]),r}(l);M.Materialbox=i,M.jQueryLoaded&&M.initializeJqueryWrapper(i,"materialbox","M_Materialbox")}(cash,M.anime),function(e){"use strict";var t={responsiveThreshold:0},n=function(n){function i(t,n){u(this,i);var r=a(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,i,t,n));return r.el.M_Parallax=r,r.options=e.extend({},i.defaults,n),r._enabled=window.innerWidth>r.options.responsiveThreshold,r.$img=r.$el.find("img").first(),r.$img.each((function(){var t=this;t.complete&&e(t).trigger("load")})),r._updateParallax(),r._setupEventHandlers(),r._setupStyles(),i._parallaxes.push(r),r}return c(i,n),o(i,[{key:"destroy",value:function(){i._parallaxes.splice(i._parallaxes.indexOf(this),1),this.$img[0].style.transform="",this._removeEventHandlers(),this.$el[0].M_Parallax=void 0}},{key:"_setupEventHandlers",value:function(){this._handleImageLoadBound=this._handleImageLoad.bind(this),this.$img[0].addEventListener("load",this._handleImageLoadBound),0===i._parallaxes.length&&(i._handleScrollThrottled=M.throttle(i._handleScroll,5),window.addEventListener("scroll",i._handleScrollThrottled),i._handleWindowResizeThrottled=M.throttle(i._handleWindowResize,5),window.addEventListener("resize",i._handleWindowResizeThrottled))}},{key:"_removeEventHandlers",value:function(){this.$img[0].removeEventListener("load",this._handleImageLoadBound),0===i._parallaxes.length&&(window.removeEventListener("scroll",i._handleScrollThrottled),window.removeEventListener("resize",i._handleWindowResizeThrottled))}},{key:"_setupStyles",value:function(){this.$img[0].style.opacity=1}},{key:"_handleImageLoad",value:function(){this._updateParallax()}},{key:"_updateParallax",value:function(){var e=this.$el.height()>0?this.el.parentNode.offsetHeight:500,t=this.$img[0].offsetHeight,n=t-e,i=this.$el.offset().top+e,r=this.$el.offset().top,s=M.getDocumentScrollTop(),o=window.innerHeight,a=s+o,c=(a-r)/(e+o),u=n*c;this._enabled?i>s&&r<s+o&&(this.$img[0].style.transform="translate3D(-50%, "+u+"px, 0)"):this.$img[0].style.transform=""}}],[{key:"init",value:function(e,t){return s(i.__proto__||Object.getPrototypeOf(i),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_Parallax}},{key:"_handleScroll",value:function(){for(var e=0;e<i._parallaxes.length;e++){var t=i._parallaxes[e];t._updateParallax.call(t)}}},{key:"_handleWindowResize",value:function(){for(var e=0;e<i._parallaxes.length;e++){var t=i._parallaxes[e];t._enabled=window.innerWidth>t.options.responsiveThreshold}}},{key:"defaults",get:function(){return t}}]),i}(l);n._parallaxes=[],M.Parallax=n,M.jQueryLoaded&&M.initializeJqueryWrapper(n,"parallax","M_Parallax")}(cash),function(e,t){"use strict";var n={duration:300,onShow:null,swipeable:!1,responsiveThreshold:1/0},i=function(i){function r(t,n){u(this,r);var i=a(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,r,t,n));return i.el.M_Tabs=i,i.options=e.extend({},r.defaults,n),i.$tabLinks=i.$el.children("li.tab").children("a"),i.index=0,i._setupActiveTabLink(),i.options.swipeable?i._setupSwipeableTabs():i._setupNormalTabs(),i._setTabsAndTabWidth(),i._createIndicator(),i._setupEventHandlers(),i}return c(r,i),o(r,[{key:"destroy",value:function(){this._removeEventHandlers(),this._indicator.parentNode.removeChild(this._indicator),this.options.swipeable?this._teardownSwipeableTabs():this._teardownNormalTabs(),this.$el[0].M_Tabs=void 0}},{key:"_setupEventHandlers",value:function(){this._handleWindowResizeBound=this._handleWindowResize.bind(this),window.addEventListener("resize",this._handleWindowResizeBound),this._handleTabClickBound=this._handleTabClick.bind(this),this.el.addEventListener("click",this._handleTabClickBound)}},{key:"_removeEventHandlers",value:function(){window.removeEventListener("resize",this._handleWindowResizeBound),this.el.removeEventListener("click",this._handleTabClickBound)}},{key:"_handleWindowResize",value:function(){this._setTabsAndTabWidth(),0!==this.tabWidth&&0!==this.tabsWidth&&(this._indicator.style.left=this._calcLeftPos(this.$activeTabLink)+"px",this._indicator.style.right=this._calcRightPos(this.$activeTabLink)+"px")}},{key:"_handleTabClick",value:function(t){var n=this,i=e(t.target).closest("li.tab"),r=e(t.target).closest("a");if(r.length&&r.parent().hasClass("tab"))if(i.hasClass("disabled"))t.preventDefault();else if(!r.attr("target")){this.$activeTabLink.removeClass("active");var s=this.$content;this.$activeTabLink=r,this.$content=e(M.escapeHash(r[0].hash)),this.$tabLinks=this.$el.children("li.tab").children("a"),this.$activeTabLink.addClass("active");var o=this.index;this.index=Math.max(this.$tabLinks.index(r),0),this.options.swipeable?this._tabsCarousel&&this._tabsCarousel.set(this.index,(function(){"function"===typeof n.options.onShow&&n.options.onShow.call(n,n.$content[0])})):this.$content.length&&(this.$content[0].style.display="block",this.$content.addClass("active"),"function"===typeof this.options.onShow&&this.options.onShow.call(this,this.$content[0]),s.length&&!s.is(this.$content)&&(s[0].style.display="none",s.removeClass("active"))),this._setTabsAndTabWidth(),this._animateIndicator(o),t.preventDefault()}}},{key:"_createIndicator",value:function(){var e=this,t=document.createElement("li");t.classList.add("indicator"),this.el.appendChild(t),this._indicator=t,setTimeout((function(){e._indicator.style.left=e._calcLeftPos(e.$activeTabLink)+"px",e._indicator.style.right=e._calcRightPos(e.$activeTabLink)+"px"}),0)}},{key:"_setupActiveTabLink",value:function(){this.$activeTabLink=e(this.$tabLinks.filter('[href="'+location.hash+'"]')),0===this.$activeTabLink.length&&(this.$activeTabLink=this.$el.children("li.tab").children("a.active").first()),0===this.$activeTabLink.length&&(this.$activeTabLink=this.$el.children("li.tab").children("a").first()),this.$tabLinks.removeClass("active"),this.$activeTabLink[0].classList.add("active"),this.index=Math.max(this.$tabLinks.index(this.$activeTabLink),0),this.$activeTabLink.length&&(this.$content=e(M.escapeHash(this.$activeTabLink[0].hash)),this.$content.addClass("active"))}},{key:"_setupSwipeableTabs",value:function(){var t=this;window.innerWidth>this.options.responsiveThreshold&&(this.options.swipeable=!1);var n=e();this.$tabLinks.each((function(t){var i=e(M.escapeHash(t.hash));i.addClass("carousel-item"),n=n.add(i)}));var i=e('<div class="tabs-content carousel carousel-slider"></div>');n.first().before(i),i.append(n),n[0].style.display="";var r=this.$activeTabLink.closest(".tab").index();this._tabsCarousel=M.Carousel.init(i[0],{fullWidth:!0,noWrap:!0,onCycleTo:function(n){var i=t.index;t.index=e(n).index(),t.$activeTabLink.removeClass("active"),t.$activeTabLink=t.$tabLinks.eq(t.index),t.$activeTabLink.addClass("active"),t._animateIndicator(i),"function"===typeof t.options.onShow&&t.options.onShow.call(t,t.$content[0])}}),this._tabsCarousel.set(r)}},{key:"_teardownSwipeableTabs",value:function(){var e=this._tabsCarousel.$el;this._tabsCarousel.destroy(),e.after(e.children()),e.remove()}},{key:"_setupNormalTabs",value:function(){this.$tabLinks.not(this.$activeTabLink).each((function(t){if(t.hash){var n=e(M.escapeHash(t.hash));n.length&&(n[0].style.display="none")}}))}},{key:"_teardownNormalTabs",value:function(){this.$tabLinks.each((function(t){if(t.hash){var n=e(M.escapeHash(t.hash));n.length&&(n[0].style.display="")}}))}},{key:"_setTabsAndTabWidth",value:function(){this.tabsWidth=this.$el.width(),this.tabWidth=Math.max(this.tabsWidth,this.el.scrollWidth)/this.$tabLinks.length}},{key:"_calcRightPos",value:function(e){return Math.ceil(this.tabsWidth-e.position().left-e[0].getBoundingClientRect().width)}},{key:"_calcLeftPos",value:function(e){return Math.floor(e.position().left)}},{key:"updateTabIndicator",value:function(){this._setTabsAndTabWidth(),this._animateIndicator(this.index)}},{key:"_animateIndicator",value:function(e){var n=0,i=0;this.index-e>=0?n=90:i=90;var r={targets:this._indicator,left:{value:this._calcLeftPos(this.$activeTabLink),delay:n},right:{value:this._calcRightPos(this.$activeTabLink),delay:i},duration:this.options.duration,easing:"easeOutQuad"};t.remove(this._indicator),t(r)}},{key:"select",value:function(e){var t=this.$tabLinks.filter('[href="#'+e+'"]');t.length&&t.trigger("click")}}],[{key:"init",value:function(e,t){return s(r.__proto__||Object.getPrototypeOf(r),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_Tabs}},{key:"defaults",get:function(){return n}}]),r}(l);window.M.Tabs=i,M.jQueryLoaded&&M.initializeJqueryWrapper(i,"tabs","M_Tabs")}(cash,M.anime),function(e,t){"use strict";var n={exitDelay:200,enterDelay:0,html:null,margin:5,inDuration:250,outDuration:200,position:"bottom",transitionMovement:10},i=function(i){function r(t,n){u(this,r);var i=a(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,r,t,n));return i.el.M_Tooltip=i,i.options=e.extend({},r.defaults,n),i.isOpen=!1,i.isHovered=!1,i.isFocused=!1,i._appendTooltipEl(),i._setupEventHandlers(),i}return c(r,i),o(r,[{key:"destroy",value:function(){e(this.tooltipEl).remove(),this._removeEventHandlers(),this.el.M_Tooltip=void 0}},{key:"_appendTooltipEl",value:function(){var e=document.createElement("div");e.classList.add("material-tooltip"),this.tooltipEl=e;var t=document.createElement("div");t.classList.add("tooltip-content"),t.innerHTML=this.options.html,e.appendChild(t),document.body.appendChild(e)}},{key:"_updateTooltipContent",value:function(){this.tooltipEl.querySelector(".tooltip-content").innerHTML=this.options.html}},{key:"_setupEventHandlers",value:function(){this._handleMouseEnterBound=this._handleMouseEnter.bind(this),this._handleMouseLeaveBound=this._handleMouseLeave.bind(this),this._handleFocusBound=this._handleFocus.bind(this),this._handleBlurBound=this._handleBlur.bind(this),this.el.addEventListener("mouseenter",this._handleMouseEnterBound),this.el.addEventListener("mouseleave",this._handleMouseLeaveBound),this.el.addEventListener("focus",this._handleFocusBound,!0),this.el.addEventListener("blur",this._handleBlurBound,!0)}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("mouseenter",this._handleMouseEnterBound),this.el.removeEventListener("mouseleave",this._handleMouseLeaveBound),this.el.removeEventListener("focus",this._handleFocusBound,!0),this.el.removeEventListener("blur",this._handleBlurBound,!0)}},{key:"open",value:function(t){this.isOpen||(t=void 0===t||void 0,this.isOpen=!0,this.options=e.extend({},this.options,this._getAttributeOptions()),this._updateTooltipContent(),this._setEnterDelayTimeout(t))}},{key:"close",value:function(){this.isOpen&&(this.isHovered=!1,this.isFocused=!1,this.isOpen=!1,this._setExitDelayTimeout())}},{key:"_setExitDelayTimeout",value:function(){var e=this;clearTimeout(this._exitDelayTimeout),this._exitDelayTimeout=setTimeout((function(){e.isHovered||e.isFocused||e._animateOut()}),this.options.exitDelay)}},{key:"_setEnterDelayTimeout",value:function(e){var t=this;clearTimeout(this._enterDelayTimeout),this._enterDelayTimeout=setTimeout((function(){(t.isHovered||t.isFocused||e)&&t._animateIn()}),this.options.enterDelay)}},{key:"_positionTooltip",value:function(){var t=this.el,n=this.tooltipEl,i=t.offsetHeight,r=t.offsetWidth,s=n.offsetHeight,o=n.offsetWidth,a=void 0,c=this.options.margin,u=void 0,l=void 0;this.xMovement=0,this.yMovement=0,u=t.getBoundingClientRect().top+M.getDocumentScrollTop(),l=t.getBoundingClientRect().left+M.getDocumentScrollLeft(),"top"===this.options.position?(u+=-s-c,l+=r/2-o/2,this.yMovement=-this.options.transitionMovement):"right"===this.options.position?(u+=i/2-s/2,l+=r+c,this.xMovement=this.options.transitionMovement):"left"===this.options.position?(u+=i/2-s/2,l+=-o-c,this.xMovement=-this.options.transitionMovement):(u+=i+c,l+=r/2-o/2,this.yMovement=this.options.transitionMovement),a=this._repositionWithinScreen(l,u,o,s),e(n).css({top:a.y+"px",left:a.x+"px"})}},{key:"_repositionWithinScreen",value:function(e,t,n,i){var r=M.getDocumentScrollLeft(),s=M.getDocumentScrollTop(),o=e-r,a=t-s,c={left:o,top:a,width:n,height:i},u=this.options.margin+this.options.transitionMovement,l=M.checkWithinContainer(document.body,c,u);return l.left?o=u:l.right&&(o-=o+n-window.innerWidth),l.top?a=u:l.bottom&&(a-=a+i-window.innerHeight),{x:o+r,y:a+s}}},{key:"_animateIn",value:function(){this._positionTooltip(),this.tooltipEl.style.visibility="visible",t.remove(this.tooltipEl),t({targets:this.tooltipEl,opacity:1,translateX:this.xMovement,translateY:this.yMovement,duration:this.options.inDuration,easing:"easeOutCubic"})}},{key:"_animateOut",value:function(){t.remove(this.tooltipEl),t({targets:this.tooltipEl,opacity:0,translateX:0,translateY:0,duration:this.options.outDuration,easing:"easeOutCubic"})}},{key:"_handleMouseEnter",value:function(){this.isHovered=!0,this.isFocused=!1,this.open(!1)}},{key:"_handleMouseLeave",value:function(){this.isHovered=!1,this.isFocused=!1,this.close()}},{key:"_handleFocus",value:function(){M.tabPressed&&(this.isFocused=!0,this.open(!1))}},{key:"_handleBlur",value:function(){this.isFocused=!1,this.close()}},{key:"_getAttributeOptions",value:function(){var e={},t=this.el.getAttribute("data-tooltip"),n=this.el.getAttribute("data-position");return t&&(e.html=t),n&&(e.position=n),e}}],[{key:"init",value:function(e,t){return s(r.__proto__||Object.getPrototypeOf(r),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_Tooltip}},{key:"defaults",get:function(){return n}}]),r}(l);M.Tooltip=i,M.jQueryLoaded&&M.initializeJqueryWrapper(i,"tooltip","M_Tooltip")}(cash,M.anime),function(e){"use strict";var t=t||{},n=document.querySelectorAll.bind(document);function i(e){return null!==e&&e===e.window}function r(e){return i(e)?e:9===e.nodeType&&e.defaultView}function s(e){var t,n,i={top:0,left:0},s=e&&e.ownerDocument;return t=s.documentElement,"undefined"!==typeof e.getBoundingClientRect&&(i=e.getBoundingClientRect()),n=r(s),{top:i.top+n.pageYOffset-t.clientTop,left:i.left+n.pageXOffset-t.clientLeft}}function o(e){var t="";for(var n in e)e.hasOwnProperty(n)&&(t+=n+":"+e[n]+";");return t}var a={duration:750,show:function(e,t){if(2===e.button)return!1;var n=t||this,i=document.createElement("div");i.className="waves-ripple",n.appendChild(i);var r=s(n),c=e.pageY-r.top,u=e.pageX-r.left,l="scale("+n.clientWidth/100*10+")";"touches"in e&&(c=e.touches[0].pageY-r.top,u=e.touches[0].pageX-r.left),i.setAttribute("data-hold",Date.now()),i.setAttribute("data-scale",l),i.setAttribute("data-x",u),i.setAttribute("data-y",c);var h={top:c+"px",left:u+"px"};i.className=i.className+" waves-notransition",i.setAttribute("style",o(h)),i.className=i.className.replace("waves-notransition",""),h["-webkit-transform"]=l,h["-moz-transform"]=l,h["-ms-transform"]=l,h["-o-transform"]=l,h.transform=l,h.opacity="1",h["-webkit-transition-duration"]=a.duration+"ms",h["-moz-transition-duration"]=a.duration+"ms",h["-o-transition-duration"]=a.duration+"ms",h["transition-duration"]=a.duration+"ms",h["-webkit-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",h["-moz-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",h["-o-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",h["transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",i.setAttribute("style",o(h))},hide:function(e){c.touchup(e);var t=this,n=(t.clientWidth,null),i=t.getElementsByClassName("waves-ripple");if(!(i.length>0))return!1;n=i[i.length-1];var r=n.getAttribute("data-x"),s=n.getAttribute("data-y"),u=n.getAttribute("data-scale"),l=Date.now()-Number(n.getAttribute("data-hold")),h=350-l;h<0&&(h=0),setTimeout((function(){var i={top:s+"px",left:r+"px",opacity:"0","-webkit-transition-duration":a.duration+"ms","-moz-transition-duration":a.duration+"ms","-o-transition-duration":a.duration+"ms","transition-duration":a.duration+"ms","-webkit-transform":u,"-moz-transform":u,"-ms-transform":u,"-o-transform":u,transform:u};n.setAttribute("style",o(i)),setTimeout((function(){try{t.removeChild(n)}catch(e){return!1}}),a.duration)}),h)},wrapInput:function(e){for(var t=0;t<e.length;t++){var n=e[t];if("input"===n.tagName.toLowerCase()){var i=n.parentNode;if("i"===i.tagName.toLowerCase()&&-1!==i.className.indexOf("waves-effect"))continue;var r=document.createElement("i");r.className=n.className+" waves-input-wrapper";var s=n.getAttribute("style");s||(s=""),r.setAttribute("style",s),n.className="waves-button-input",n.removeAttribute("style"),i.replaceChild(r,n),r.appendChild(n)}}}},c={touches:0,allowEvent:function(e){var t=!0;return"touchstart"===e.type?c.touches+=1:"touchend"===e.type||"touchcancel"===e.type?setTimeout((function(){c.touches>0&&(c.touches-=1)}),500):"mousedown"===e.type&&c.touches>0&&(t=!1),t},touchup:function(e){c.allowEvent(e)}};function u(e){if(!1===c.allowEvent(e))return null;var t=null,n=e.target||e.srcElement;while(null!==n.parentNode){if(!(n instanceof SVGElement)&&-1!==n.className.indexOf("waves-effect")){t=n;break}n=n.parentNode}return t}function l(t){var n=u(t);null!==n&&(a.show(t,n),"ontouchstart"in e&&(n.addEventListener("touchend",a.hide,!1),n.addEventListener("touchcancel",a.hide,!1)),n.addEventListener("mouseup",a.hide,!1),n.addEventListener("mouseleave",a.hide,!1),n.addEventListener("dragend",a.hide,!1))}t.displayEffect=function(t){t=t||{},"duration"in t&&(a.duration=t.duration),a.wrapInput(n(".waves-effect")),"ontouchstart"in e&&document.body.addEventListener("touchstart",l,!1),document.body.addEventListener("mousedown",l,!1)},t.attach=function(t){"input"===t.tagName.toLowerCase()&&(a.wrapInput([t]),t=t.parentNode),"ontouchstart"in e&&t.addEventListener("touchstart",l,!1),t.addEventListener("mousedown",l,!1)},e.Waves=t,document.addEventListener("DOMContentLoaded",(function(){t.displayEffect()}),!1)}(window),function(e,t){"use strict";var n={html:"",displayLength:4e3,inDuration:300,outDuration:375,classes:"",completeCallback:null,activationPercent:.8},i=function(){function i(t){u(this,i),this.options=e.extend({},i.defaults,t),this.message=this.options.html,this.panning=!1,this.timeRemaining=this.options.displayLength,0===i._toasts.length&&i._createContainer(),i._toasts.push(this);var n=this._createToast();n.M_Toast=this,this.el=n,this.$el=e(n),this._animateIn(),this._setTimer()}return o(i,[{key:"_createToast",value:function(){var t=document.createElement("div");return t.classList.add("toast"),this.options.classes.length&&e(t).addClass(this.options.classes),("object"===typeof HTMLElement?this.message instanceof HTMLElement:this.message&&"object"===typeof this.message&&null!==this.message&&1===this.message.nodeType&&"string"===typeof this.message.nodeName)?t.appendChild(this.message):this.message.jquery?e(t).append(this.message[0]):t.innerHTML=this.message,i._container.appendChild(t),t}},{key:"_animateIn",value:function(){t({targets:this.el,top:0,opacity:1,duration:this.options.inDuration,easing:"easeOutCubic"})}},{key:"_setTimer",value:function(){var e=this;this.timeRemaining!==1/0&&(this.counterInterval=setInterval((function(){e.panning||(e.timeRemaining-=20),e.timeRemaining<=0&&e.dismiss()}),20))}},{key:"dismiss",value:function(){var e=this;window.clearInterval(this.counterInterval);var n=this.el.offsetWidth*this.options.activationPercent;this.wasSwiped&&(this.el.style.transition="transform .05s, opacity .05s",this.el.style.transform="translateX("+n+"px)",this.el.style.opacity=0),t({targets:this.el,opacity:0,marginTop:-40,duration:this.options.outDuration,easing:"easeOutExpo",complete:function(){"function"===typeof e.options.completeCallback&&e.options.completeCallback(),e.$el.remove(),i._toasts.splice(i._toasts.indexOf(e),1),0===i._toasts.length&&i._removeContainer()}})}}],[{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_Toast}},{key:"_createContainer",value:function(){var e=document.createElement("div");e.setAttribute("id","toast-container"),e.addEventListener("touchstart",i._onDragStart),e.addEventListener("touchmove",i._onDragMove),e.addEventListener("touchend",i._onDragEnd),e.addEventListener("mousedown",i._onDragStart),document.addEventListener("mousemove",i._onDragMove),document.addEventListener("mouseup",i._onDragEnd),document.body.appendChild(e),i._container=e}},{key:"_removeContainer",value:function(){document.removeEventListener("mousemove",i._onDragMove),document.removeEventListener("mouseup",i._onDragEnd),e(i._container).remove(),i._container=null}},{key:"_onDragStart",value:function(t){if(t.target&&e(t.target).closest(".toast").length){var n=e(t.target).closest(".toast"),r=n[0].M_Toast;r.panning=!0,i._draggedToast=r,r.el.classList.add("panning"),r.el.style.transition="",r.startingXPos=i._xPos(t),r.time=Date.now(),r.xPos=i._xPos(t)}}},{key:"_onDragMove",value:function(e){if(i._draggedToast){e.preventDefault();var t=i._draggedToast;t.deltaX=Math.abs(t.xPos-i._xPos(e)),t.xPos=i._xPos(e),t.velocityX=t.deltaX/(Date.now()-t.time),t.time=Date.now();var n=t.xPos-t.startingXPos,r=t.el.offsetWidth*t.options.activationPercent;t.el.style.transform="translateX("+n+"px)",t.el.style.opacity=1-Math.abs(n/r)}}},{key:"_onDragEnd",value:function(){if(i._draggedToast){var e=i._draggedToast;e.panning=!1,e.el.classList.remove("panning");var t=e.xPos-e.startingXPos,n=e.el.offsetWidth*e.options.activationPercent,r=Math.abs(t)>n||e.velocityX>1;r?(e.wasSwiped=!0,e.dismiss()):(e.el.style.transition="transform .2s, opacity .2s",e.el.style.transform="",e.el.style.opacity=""),i._draggedToast=null}}},{key:"_xPos",value:function(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}},{key:"dismissAll",value:function(){for(var e in i._toasts)i._toasts[e].dismiss()}},{key:"defaults",get:function(){return n}}]),i}();i._toasts=[],i._container=null,i._draggedToast=null,M.Toast=i,M.toast=function(e){return new i(e)}}(cash,M.anime),function(e,t){"use strict";var n={edge:"left",draggable:!0,inDuration:250,outDuration:200,onOpenStart:null,onOpenEnd:null,onCloseStart:null,onCloseEnd:null,preventScrolling:!0},i=function(i){function r(t,n){u(this,r);var i=a(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,r,t,n));return i.el.M_Sidenav=i,i.id=i.$el.attr("id"),i.options=e.extend({},r.defaults,n),i.isOpen=!1,i.isFixed=i.el.classList.contains("sidenav-fixed"),i.isDragged=!1,i.lastWindowWidth=window.innerWidth,i.lastWindowHeight=window.innerHeight,i._createOverlay(),i._createDragTarget(),i._setupEventHandlers(),i._setupClasses(),i._setupFixed(),r._sidenavs.push(i),i}return c(r,i),o(r,[{key:"destroy",value:function(){this._removeEventHandlers(),this._enableBodyScrolling(),this._overlay.parentNode.removeChild(this._overlay),this.dragTarget.parentNode.removeChild(this.dragTarget),this.el.M_Sidenav=void 0,this.el.style.transform="";var e=r._sidenavs.indexOf(this);e>=0&&r._sidenavs.splice(e,1)}},{key:"_createOverlay",value:function(){var e=document.createElement("div");this._closeBound=this.close.bind(this),e.classList.add("sidenav-overlay"),e.addEventListener("click",this._closeBound),document.body.appendChild(e),this._overlay=e}},{key:"_setupEventHandlers",value:function(){0===r._sidenavs.length&&document.body.addEventListener("click",this._handleTriggerClick),this._handleDragTargetDragBound=this._handleDragTargetDrag.bind(this),this._handleDragTargetReleaseBound=this._handleDragTargetRelease.bind(this),this._handleCloseDragBound=this._handleCloseDrag.bind(this),this._handleCloseReleaseBound=this._handleCloseRelease.bind(this),this._handleCloseTriggerClickBound=this._handleCloseTriggerClick.bind(this),this.dragTarget.addEventListener("touchmove",this._handleDragTargetDragBound),this.dragTarget.addEventListener("touchend",this._handleDragTargetReleaseBound),this._overlay.addEventListener("touchmove",this._handleCloseDragBound),this._overlay.addEventListener("touchend",this._handleCloseReleaseBound),this.el.addEventListener("touchmove",this._handleCloseDragBound),this.el.addEventListener("touchend",this._handleCloseReleaseBound),this.el.addEventListener("click",this._handleCloseTriggerClickBound),this.isFixed&&(this._handleWindowResizeBound=this._handleWindowResize.bind(this),window.addEventListener("resize",this._handleWindowResizeBound))}},{key:"_removeEventHandlers",value:function(){1===r._sidenavs.length&&document.body.removeEventListener("click",this._handleTriggerClick),this.dragTarget.removeEventListener("touchmove",this._handleDragTargetDragBound),this.dragTarget.removeEventListener("touchend",this._handleDragTargetReleaseBound),this._overlay.removeEventListener("touchmove",this._handleCloseDragBound),this._overlay.removeEventListener("touchend",this._handleCloseReleaseBound),this.el.removeEventListener("touchmove",this._handleCloseDragBound),this.el.removeEventListener("touchend",this._handleCloseReleaseBound),this.el.removeEventListener("click",this._handleCloseTriggerClickBound),this.isFixed&&window.removeEventListener("resize",this._handleWindowResizeBound)}},{key:"_handleTriggerClick",value:function(t){var n=e(t.target).closest(".sidenav-trigger");if(t.target&&n.length){var i=M.getIdFromTrigger(n[0]),r=document.getElementById(i).M_Sidenav;r&&r.open(n),t.preventDefault()}}},{key:"_startDrag",value:function(e){var n=e.targetTouches[0].clientX;this.isDragged=!0,this._startingXpos=n,this._xPos=this._startingXpos,this._time=Date.now(),this._width=this.el.getBoundingClientRect().width,this._overlay.style.display="block",this._initialScrollTop=this.isOpen?this.el.scrollTop:M.getDocumentScrollTop(),this._verticallyScrolling=!1,t.remove(this.el),t.remove(this._overlay)}},{key:"_dragMoveUpdate",value:function(e){var t=e.targetTouches[0].clientX,n=this.isOpen?this.el.scrollTop:M.getDocumentScrollTop();this.deltaX=Math.abs(this._xPos-t),this._xPos=t,this.velocityX=this.deltaX/(Date.now()-this._time),this._time=Date.now(),this._initialScrollTop!==n&&(this._verticallyScrolling=!0)}},{key:"_handleDragTargetDrag",value:function(e){if(this.options.draggable&&!this._isCurrentlyFixed()&&!this._verticallyScrolling){this.isDragged||this._startDrag(e),this._dragMoveUpdate(e);var t=this._xPos-this._startingXpos,n=t>0?"right":"left";t=Math.min(this._width,Math.abs(t)),this.options.edge===n&&(t=0);var i=t,r="translateX(-100%)";"right"===this.options.edge&&(r="translateX(100%)",i=-i),this.percentOpen=Math.min(1,t/this._width),this.el.style.transform=r+" translateX("+i+"px)",this._overlay.style.opacity=this.percentOpen}}},{key:"_handleDragTargetRelease",value:function(){this.isDragged&&(this.percentOpen>.2?this.open():this._animateOut(),this.isDragged=!1,this._verticallyScrolling=!1)}},{key:"_handleCloseDrag",value:function(e){if(this.isOpen){if(!this.options.draggable||this._isCurrentlyFixed()||this._verticallyScrolling)return;this.isDragged||this._startDrag(e),this._dragMoveUpdate(e);var t=this._xPos-this._startingXpos,n=t>0?"right":"left";t=Math.min(this._width,Math.abs(t)),this.options.edge!==n&&(t=0);var i=-t;"right"===this.options.edge&&(i=-i),this.percentOpen=Math.min(1,1-t/this._width),this.el.style.transform="translateX("+i+"px)",this._overlay.style.opacity=this.percentOpen}}},{key:"_handleCloseRelease",value:function(){this.isOpen&&this.isDragged&&(this.percentOpen>.8?this._animateIn():this.close(),this.isDragged=!1,this._verticallyScrolling=!1)}},{key:"_handleCloseTriggerClick",value:function(t){var n=e(t.target).closest(".sidenav-close");n.length&&!this._isCurrentlyFixed()&&this.close()}},{key:"_handleWindowResize",value:function(){this.lastWindowWidth!==window.innerWidth&&(window.innerWidth>992?this.open():this.close()),this.lastWindowWidth=window.innerWidth,this.lastWindowHeight=window.innerHeight}},{key:"_setupClasses",value:function(){"right"===this.options.edge&&(this.el.classList.add("right-aligned"),this.dragTarget.classList.add("right-aligned"))}},{key:"_removeClasses",value:function(){this.el.classList.remove("right-aligned"),this.dragTarget.classList.remove("right-aligned")}},{key:"_setupFixed",value:function(){this._isCurrentlyFixed()&&this.open()}},{key:"_isCurrentlyFixed",value:function(){return this.isFixed&&window.innerWidth>992}},{key:"_createDragTarget",value:function(){var e=document.createElement("div");e.classList.add("drag-target"),document.body.appendChild(e),this.dragTarget=e}},{key:"_preventBodyScrolling",value:function(){var e=document.body;e.style.overflow="hidden"}},{key:"_enableBodyScrolling",value:function(){var e=document.body;e.style.overflow=""}},{key:"open",value:function(){!0!==this.isOpen&&(this.isOpen=!0,"function"===typeof this.options.onOpenStart&&this.options.onOpenStart.call(this,this.el),this._isCurrentlyFixed()?(t.remove(this.el),t({targets:this.el,translateX:0,duration:0,easing:"easeOutQuad"}),this._enableBodyScrolling(),this._overlay.style.display="none"):(this.options.preventScrolling&&this._preventBodyScrolling(),this.isDragged&&1==this.percentOpen||this._animateIn()))}},{key:"close",value:function(){if(!1!==this.isOpen)if(this.isOpen=!1,"function"===typeof this.options.onCloseStart&&this.options.onCloseStart.call(this,this.el),this._isCurrentlyFixed()){var e="left"===this.options.edge?"-105%":"105%";this.el.style.transform="translateX("+e+")"}else this._enableBodyScrolling(),this.isDragged&&0==this.percentOpen?this._overlay.style.display="none":this._animateOut()}},{key:"_animateIn",value:function(){this._animateSidenavIn(),this._animateOverlayIn()}},{key:"_animateSidenavIn",value:function(){var e=this,n="left"===this.options.edge?-1:1;this.isDragged&&(n="left"===this.options.edge?n+this.percentOpen:n-this.percentOpen),t.remove(this.el),t({targets:this.el,translateX:[100*n+"%",0],duration:this.options.inDuration,easing:"easeOutQuad",complete:function(){"function"===typeof e.options.onOpenEnd&&e.options.onOpenEnd.call(e,e.el)}})}},{key:"_animateOverlayIn",value:function(){var n=0;this.isDragged?n=this.percentOpen:e(this._overlay).css({display:"block"}),t.remove(this._overlay),t({targets:this._overlay,opacity:[n,1],duration:this.options.inDuration,easing:"easeOutQuad"})}},{key:"_animateOut",value:function(){this._animateSidenavOut(),this._animateOverlayOut()}},{key:"_animateSidenavOut",value:function(){var e=this,n="left"===this.options.edge?-1:1,i=0;this.isDragged&&(i="left"===this.options.edge?n+this.percentOpen:n-this.percentOpen),t.remove(this.el),t({targets:this.el,translateX:[100*i+"%",105*n+"%"],duration:this.options.outDuration,easing:"easeOutQuad",complete:function(){"function"===typeof e.options.onCloseEnd&&e.options.onCloseEnd.call(e,e.el)}})}},{key:"_animateOverlayOut",value:function(){var n=this;t.remove(this._overlay),t({targets:this._overlay,opacity:0,duration:this.options.outDuration,easing:"easeOutQuad",complete:function(){e(n._overlay).css("display","none")}})}}],[{key:"init",value:function(e,t){return s(r.__proto__||Object.getPrototypeOf(r),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_Sidenav}},{key:"defaults",get:function(){return n}}]),r}(l);i._sidenavs=[],window.M.Sidenav=i,M.jQueryLoaded&&M.initializeJqueryWrapper(i,"sidenav","M_Sidenav")}(cash,M.anime),function(e,t){"use strict";var n={throttle:100,scrollOffset:200,activeClass:"active",getActiveElement:function(e){return'a[href="#'+e+'"]'}},i=function(i){function r(t,n){u(this,r);var i=a(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,r,t,n));return i.el.M_ScrollSpy=i,i.options=e.extend({},r.defaults,n),r._elements.push(i),r._count++,r._increment++,i.tickId=-1,i.id=r._increment,i._setupEventHandlers(),i._handleWindowScroll(),i}return c(r,i),o(r,[{key:"destroy",value:function(){r._elements.splice(r._elements.indexOf(this),1),r._elementsInView.splice(r._elementsInView.indexOf(this),1),r._visibleElements.splice(r._visibleElements.indexOf(this.$el),1),r._count--,this._removeEventHandlers(),e(this.options.getActiveElement(this.$el.attr("id"))).removeClass(this.options.activeClass),this.el.M_ScrollSpy=void 0}},{key:"_setupEventHandlers",value:function(){var e=M.throttle(this._handleWindowScroll,200);this._handleThrottledResizeBound=e.bind(this),this._handleWindowScrollBound=this._handleWindowScroll.bind(this),1===r._count&&(window.addEventListener("scroll",this._handleWindowScrollBound),window.addEventListener("resize",this._handleThrottledResizeBound),document.body.addEventListener("click",this._handleTriggerClick))}},{key:"_removeEventHandlers",value:function(){0===r._count&&(window.removeEventListener("scroll",this._handleWindowScrollBound),window.removeEventListener("resize",this._handleThrottledResizeBound),document.body.removeEventListener("click",this._handleTriggerClick))}},{key:"_handleTriggerClick",value:function(n){for(var i=e(n.target),s=r._elements.length-1;s>=0;s--){var o=r._elements[s];if(i.is('a[href="#'+o.$el.attr("id")+'"]')){n.preventDefault();var a=o.$el.offset().top+1;t({targets:[document.documentElement,document.body],scrollTop:a-o.options.scrollOffset,duration:400,easing:"easeOutCubic"});break}}}},{key:"_handleWindowScroll",value:function(){r._ticks++;for(var e=M.getDocumentScrollTop(),t=M.getDocumentScrollLeft(),n=t+window.innerWidth,i=e+window.innerHeight,s=r._findElements(e,n,i,t),o=0;o<s.length;o++){var a=s[o],c=a.tickId;c<0&&a._enter(),a.tickId=r._ticks}for(var u=0;u<r._elementsInView.length;u++){var l=r._elementsInView[u],h=l.tickId;h>=0&&h!==r._ticks&&(l._exit(),l.tickId=-1)}r._elementsInView=s}},{key:"_enter",value:function(){r._visibleElements=r._visibleElements.filter((function(e){return 0!=e.height()})),r._visibleElements[0]?(e(this.options.getActiveElement(r._visibleElements[0].attr("id"))).removeClass(this.options.activeClass),r._visibleElements[0][0].M_ScrollSpy&&this.id<r._visibleElements[0][0].M_ScrollSpy.id?r._visibleElements.unshift(this.$el):r._visibleElements.push(this.$el)):r._visibleElements.push(this.$el),e(this.options.getActiveElement(r._visibleElements[0].attr("id"))).addClass(this.options.activeClass)}},{key:"_exit",value:function(){var t=this;r._visibleElements=r._visibleElements.filter((function(e){return 0!=e.height()})),r._visibleElements[0]&&(e(this.options.getActiveElement(r._visibleElements[0].attr("id"))).removeClass(this.options.activeClass),r._visibleElements=r._visibleElements.filter((function(e){return e.attr("id")!=t.$el.attr("id")})),r._visibleElements[0]&&e(this.options.getActiveElement(r._visibleElements[0].attr("id"))).addClass(this.options.activeClass))}}],[{key:"init",value:function(e,t){return s(r.__proto__||Object.getPrototypeOf(r),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_ScrollSpy}},{key:"_findElements",value:function(e,t,n,i){for(var s=[],o=0;o<r._elements.length;o++){var a=r._elements[o],c=e+a.options.scrollOffset||200;if(a.$el.height()>0){var u=a.$el.offset().top,l=a.$el.offset().left,h=l+a.$el.width(),d=u+a.$el.height(),f=!(l>t||h<i||u>n||d<c);f&&s.push(a)}}return s}},{key:"defaults",get:function(){return n}}]),r}(l);i._elements=[],i._elementsInView=[],i._visibleElements=[],i._count=0,i._increment=0,i._ticks=0,M.ScrollSpy=i,M.jQueryLoaded&&M.initializeJqueryWrapper(i,"scrollSpy","M_ScrollSpy")}(cash,M.anime),function(e){"use strict";var t={data:{},limit:1/0,onAutocomplete:null,minLength:1,sortFunction:function(e,t,n){return e.indexOf(n)-t.indexOf(n)}},n=function(n){function i(t,n){u(this,i);var r=a(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,i,t,n));return r.el.M_Autocomplete=r,r.options=e.extend({},i.defaults,n),r.isOpen=!1,r.count=0,r.activeIndex=-1,r.oldVal,r.$inputField=r.$el.closest(".input-field"),r.$active=e(),r._mousedown=!1,r._setupDropdown(),r._setupEventHandlers(),r}return c(i,n),o(i,[{key:"destroy",value:function(){this._removeEventHandlers(),this._removeDropdown(),this.el.M_Autocomplete=void 0}},{key:"_setupEventHandlers",value:function(){this._handleInputBlurBound=this._handleInputBlur.bind(this),this._handleInputKeyupAndFocusBound=this._handleInputKeyupAndFocus.bind(this),this._handleInputKeydownBound=this._handleInputKeydown.bind(this),this._handleInputClickBound=this._handleInputClick.bind(this),this._handleContainerMousedownAndTouchstartBound=this._handleContainerMousedownAndTouchstart.bind(this),this._handleContainerMouseupAndTouchendBound=this._handleContainerMouseupAndTouchend.bind(this),this.el.addEventListener("blur",this._handleInputBlurBound),this.el.addEventListener("keyup",this._handleInputKeyupAndFocusBound),this.el.addEventListener("focus",this._handleInputKeyupAndFocusBound),this.el.addEventListener("keydown",this._handleInputKeydownBound),this.el.addEventListener("click",this._handleInputClickBound),this.container.addEventListener("mousedown",this._handleContainerMousedownAndTouchstartBound),this.container.addEventListener("mouseup",this._handleContainerMouseupAndTouchendBound),"undefined"!==typeof window.ontouchstart&&(this.container.addEventListener("touchstart",this._handleContainerMousedownAndTouchstartBound),this.container.addEventListener("touchend",this._handleContainerMouseupAndTouchendBound))}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("blur",this._handleInputBlurBound),this.el.removeEventListener("keyup",this._handleInputKeyupAndFocusBound),this.el.removeEventListener("focus",this._handleInputKeyupAndFocusBound),this.el.removeEventListener("keydown",this._handleInputKeydownBound),this.el.removeEventListener("click",this._handleInputClickBound),this.container.removeEventListener("mousedown",this._handleContainerMousedownAndTouchstartBound),this.container.removeEventListener("mouseup",this._handleContainerMouseupAndTouchendBound),"undefined"!==typeof window.ontouchstart&&(this.container.removeEventListener("touchstart",this._handleContainerMousedownAndTouchstartBound),this.container.removeEventListener("touchend",this._handleContainerMouseupAndTouchendBound))}},{key:"_setupDropdown",value:function(){var t=this;this.container=document.createElement("ul"),this.container.id="autocomplete-options-"+M.guid(),e(this.container).addClass("autocomplete-content dropdown-content"),this.$inputField.append(this.container),this.el.setAttribute("data-target",this.container.id),this.dropdown=M.Dropdown.init(this.el,{autoFocus:!1,closeOnClick:!1,coverTrigger:!1,onItemClick:function(n){t.selectOption(e(n))}}),this.el.removeEventListener("click",this.dropdown._handleClickBound)}},{key:"_removeDropdown",value:function(){this.container.parentNode.removeChild(this.container)}},{key:"_handleInputBlur",value:function(){this._mousedown||(this.close(),this._resetAutocomplete())}},{key:"_handleInputKeyupAndFocus",value:function(e){"keyup"===e.type&&(i._keydown=!1),this.count=0;var t=this.el.value.toLowerCase();13!==e.keyCode&&38!==e.keyCode&&40!==e.keyCode&&(this.oldVal===t||!M.tabPressed&&"focus"===e.type||this.open(),this.oldVal=t)}},{key:"_handleInputKeydown",value:function(t){i._keydown=!0;var n=t.keyCode,r=void 0,s=e(this.container).children("li").length;if(n===M.keys.ENTER&&this.activeIndex>=0)return r=e(this.container).children("li").eq(this.activeIndex),void(r.length&&(this.selectOption(r),t.preventDefault()));n!==M.keys.ARROW_UP&&n!==M.keys.ARROW_DOWN||(t.preventDefault(),n===M.keys.ARROW_UP&&this.activeIndex>0&&this.activeIndex--,n===M.keys.ARROW_DOWN&&this.activeIndex<s-1&&this.activeIndex++,this.$active.removeClass("active"),this.activeIndex>=0&&(this.$active=e(this.container).children("li").eq(this.activeIndex),this.$active.addClass("active")))}},{key:"_handleInputClick",value:function(e){this.open()}},{key:"_handleContainerMousedownAndTouchstart",value:function(e){this._mousedown=!0}},{key:"_handleContainerMouseupAndTouchend",value:function(e){this._mousedown=!1}},{key:"_highlight",value:function(e,t){var n=t.find("img"),i=t.text().toLowerCase().indexOf(""+e.toLowerCase()),r=i+e.length-1,s=t.text().slice(0,i),o=t.text().slice(i,r+1),a=t.text().slice(r+1);t.html("<span>"+s+"<span class='highlight'>"+o+"</span>"+a+"</span>"),n.length&&t.prepend(n)}},{key:"_resetCurrentElement",value:function(){this.activeIndex=-1,this.$active.removeClass("active")}},{key:"_resetAutocomplete",value:function(){e(this.container).empty(),this._resetCurrentElement(),this.oldVal=null,this.isOpen=!1,this._mousedown=!1}},{key:"selectOption",value:function(e){var t=e.text().trim();this.el.value=t,this.$el.trigger("change"),this._resetAutocomplete(),this.close(),"function"===typeof this.options.onAutocomplete&&this.options.onAutocomplete.call(this,t)}},{key:"_renderDropdown",value:function(t,n){var i=this;this._resetAutocomplete();var r=[];for(var s in t)if(t.hasOwnProperty(s)&&-1!==s.toLowerCase().indexOf(n)){if(this.count>=this.options.limit)break;var o={data:t[s],key:s};r.push(o),this.count++}if(this.options.sortFunction){var a=function(e,t){return i.options.sortFunction(e.key.toLowerCase(),t.key.toLowerCase(),n.toLowerCase())};r.sort(a)}for(var c=0;c<r.length;c++){var u=r[c],l=e("<li></li>");u.data?l.append('<img src="'+u.data+'" class="right circle"><span>'+u.key+"</span>"):l.append("<span>"+u.key+"</span>"),e(this.container).append(l),this._highlight(n,l)}}},{key:"open",value:function(){var e=this.el.value.toLowerCase();this._resetAutocomplete(),e.length>=this.options.minLength&&(this.isOpen=!0,this._renderDropdown(this.options.data,e)),this.dropdown.isOpen?this.dropdown.recalculateDimensions():this.dropdown.open()}},{key:"close",value:function(){this.dropdown.close()}},{key:"updateData",value:function(e){var t=this.el.value.toLowerCase();this.options.data=e,this.isOpen&&this._renderDropdown(e,t)}}],[{key:"init",value:function(e,t){return s(i.__proto__||Object.getPrototypeOf(i),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_Autocomplete}},{key:"defaults",get:function(){return t}}]),i}(l);n._keydown=!1,M.Autocomplete=n,M.jQueryLoaded&&M.initializeJqueryWrapper(n,"autocomplete","M_Autocomplete")}(cash),function(e){M.updateTextFields=function(){var t="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea";e(t).each((function(t,n){var i=e(this);t.value.length>0||e(t).is(":focus")||t.autofocus||null!==i.attr("placeholder")?i.siblings("label").addClass("active"):t.validity?i.siblings("label").toggleClass("active",!0===t.validity.badInput):i.siblings("label").removeClass("active")}))},M.validate_field=function(e){var t=null!==e.attr("data-length"),n=parseInt(e.attr("data-length")),i=e[0].value.length;0!==i||!1!==e[0].validity.badInput||e.is(":required")?e.hasClass("validate")&&(e.is(":valid")&&t&&i<=n||e.is(":valid")&&!t?(e.removeClass("invalid"),e.addClass("valid")):(e.removeClass("valid"),e.addClass("invalid"))):e.hasClass("validate")&&(e.removeClass("valid"),e.removeClass("invalid"))},M.textareaAutoResize=function(t){if(t instanceof Element&&(t=e(t)),t.length){var n=e(".hiddendiv").first();n.length||(n=e('<div class="hiddendiv common"></div>'),e("body").append(n));var i=t.css("font-family"),r=t.css("font-size"),s=t.css("line-height"),o=t.css("padding-top"),a=t.css("padding-right"),c=t.css("padding-bottom"),u=t.css("padding-left");r&&n.css("font-size",r),i&&n.css("font-family",i),s&&n.css("line-height",s),o&&n.css("padding-top",o),a&&n.css("padding-right",a),c&&n.css("padding-bottom",c),u&&n.css("padding-left",u),t.data("original-height")||t.data("original-height",t.height()),"off"===t.attr("wrap")&&n.css("overflow-wrap","normal").css("white-space","pre"),n.text(t[0].value+"\n");var l=n.html().replace(/\n/g,"<br>");n.html(l),t[0].offsetWidth>0&&t[0].offsetHeight>0?n.css("width",t.width()+"px"):n.css("width",window.innerWidth/2+"px"),t.data("original-height")<=n.innerHeight()?t.css("height",n.innerHeight()+"px"):t[0].value.length<t.data("previous-length")&&t.css("height",t.data("original-height")+"px"),t.data("previous-length",t[0].value.length)}else console.error("No textarea element found")},e(document).ready((function(){var t="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea";e(document).on("change",t,(function(){0===this.value.length&&null===e(this).attr("placeholder")||e(this).siblings("label").addClass("active"),M.validate_field(e(this))})),e(document).ready((function(){M.updateTextFields()})),e(document).on("reset",(function(n){var i=e(n.target);i.is("form")&&(i.find(t).removeClass("valid").removeClass("invalid"),i.find(t).each((function(t){this.value.length&&e(this).siblings("label").removeClass("active")})),setTimeout((function(){i.find("select").each((function(){this.M_FormSelect&&e(this).trigger("change")}))}),0))})),document.addEventListener("focus",(function(n){e(n.target).is(t)&&e(n.target).siblings("label, .prefix").addClass("active")}),!0),document.addEventListener("blur",(function(n){var i=e(n.target);if(i.is(t)){var r=".prefix";0===i[0].value.length&&!0!==i[0].validity.badInput&&null===i.attr("placeholder")&&(r+=", label"),i.siblings(r).removeClass("active"),M.validate_field(i)}}),!0);var n="input[type=radio], input[type=checkbox]";e(document).on("keyup",n,(function(t){if(t.which!==M.keys.TAB);else{e(this).addClass("tabbed");var n=e(this);n.one("blur",(function(t){e(this).removeClass("tabbed")}))}}));var i=".materialize-textarea";e(i).each((function(){var t=e(this);t.data("original-height",t.height()),t.data("previous-length",this.value.length),M.textareaAutoResize(t)})),e(document).on("keyup",i,(function(){M.textareaAutoResize(e(this))})),e(document).on("keydown",i,(function(){M.textareaAutoResize(e(this))})),e(document).on("change",'.file-field input[type="file"]',(function(){for(var t=e(this).closest(".file-field"),n=t.find("input.file-path"),i=e(this)[0].files,r=[],s=0;s<i.length;s++)r.push(i[s].name);n[0].value=r.join(", "),n.trigger("change")}))}))}(cash),function(e,t){"use strict";var n={indicators:!0,height:400,duration:500,interval:6e3},i=function(i){function r(n,i){u(this,r);var s=a(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,r,n,i));return s.el.M_Slider=s,s.options=e.extend({},r.defaults,i),s.$slider=s.$el.find(".slides"),s.$slides=s.$slider.children("li"),s.activeIndex=s.$slides.filter((function(t){return e(t).hasClass("active")})).first().index(),-1!=s.activeIndex&&(s.$active=s.$slides.eq(s.activeIndex)),s._setSliderHeight(),s.$slides.find(".caption").each((function(e){s._animateCaptionIn(e,0)})),s.$slides.find("img").each((function(t){var n="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";e(t).attr("src")!==n&&(e(t).css("background-image",'url("'+e(t).attr("src")+'")'),e(t).attr("src",n))})),s._setupIndicators(),s.$active?s.$active.css("display","block"):(s.$slides.first().addClass("active"),t({targets:s.$slides.first()[0],opacity:1,duration:s.options.duration,easing:"easeOutQuad"}),s.activeIndex=0,s.$active=s.$slides.eq(s.activeIndex),s.options.indicators&&s.$indicators.eq(s.activeIndex).addClass("active")),s.$active.find("img").each((function(e){t({targets:s.$active.find(".caption")[0],opacity:1,translateX:0,translateY:0,duration:s.options.duration,easing:"easeOutQuad"})})),s._setupEventHandlers(),s.start(),s}return c(r,i),o(r,[{key:"destroy",value:function(){this.pause(),this._removeIndicators(),this._removeEventHandlers(),this.el.M_Slider=void 0}},{key:"_setupEventHandlers",value:function(){var e=this;this._handleIntervalBound=this._handleInterval.bind(this),this._handleIndicatorClickBound=this._handleIndicatorClick.bind(this),this.options.indicators&&this.$indicators.each((function(t){t.addEventListener("click",e._handleIndicatorClickBound)}))}},{key:"_removeEventHandlers",value:function(){var e=this;this.options.indicators&&this.$indicators.each((function(t){t.removeEventListener("click",e._handleIndicatorClickBound)}))}},{key:"_handleIndicatorClick",value:function(t){var n=e(t.target).index();this.set(n)}},{key:"_handleInterval",value:function(){var e=this.$slider.find(".active").index();this.$slides.length===e+1?e=0:e+=1,this.set(e)}},{key:"_animateCaptionIn",value:function(n,i){var r={targets:n,opacity:0,duration:i,easing:"easeOutQuad"};e(n).hasClass("center-align")?r.translateY=-100:e(n).hasClass("right-align")?r.translateX=100:e(n).hasClass("left-align")&&(r.translateX=-100),t(r)}},{key:"_setSliderHeight",value:function(){this.$el.hasClass("fullscreen")||(this.options.indicators?this.$el.css("height",this.options.height+40+"px"):this.$el.css("height",this.options.height+"px"),this.$slider.css("height",this.options.height+"px"))}},{key:"_setupIndicators",value:function(){var t=this;this.options.indicators&&(this.$indicators=e('<ul class="indicators"></ul>'),this.$slides.each((function(n,i){var r=e('<li class="indicator-item"></li>');t.$indicators.append(r[0])})),this.$el.append(this.$indicators[0]),this.$indicators=this.$indicators.children("li.indicator-item"))}},{key:"_removeIndicators",value:function(){this.$el.find("ul.indicators").remove()}},{key:"set",value:function(e){var n=this;if(e>=this.$slides.length?e=0:e<0&&(e=this.$slides.length-1),this.activeIndex!=e){this.$active=this.$slides.eq(this.activeIndex);var i=this.$active.find(".caption");this.$active.removeClass("active"),t({targets:this.$active[0],opacity:0,duration:this.options.duration,easing:"easeOutQuad",complete:function(){n.$slides.not(".active").each((function(e){t({targets:e,opacity:0,translateX:0,translateY:0,duration:0,easing:"easeOutQuad"})}))}}),this._animateCaptionIn(i[0],this.options.duration),this.options.indicators&&(this.$indicators.eq(this.activeIndex).removeClass("active"),this.$indicators.eq(e).addClass("active")),t({targets:this.$slides.eq(e)[0],opacity:1,duration:this.options.duration,easing:"easeOutQuad"}),t({targets:this.$slides.eq(e).find(".caption")[0],opacity:1,translateX:0,translateY:0,duration:this.options.duration,delay:this.options.duration,easing:"easeOutQuad"}),this.$slides.eq(e).addClass("active"),this.activeIndex=e,this.start()}}},{key:"pause",value:function(){clearInterval(this.interval)}},{key:"start",value:function(){clearInterval(this.interval),this.interval=setInterval(this._handleIntervalBound,this.options.duration+this.options.interval)}},{key:"next",value:function(){var e=this.activeIndex+1;e>=this.$slides.length?e=0:e<0&&(e=this.$slides.length-1),this.set(e)}},{key:"prev",value:function(){var e=this.activeIndex-1;e>=this.$slides.length?e=0:e<0&&(e=this.$slides.length-1),this.set(e)}}],[{key:"init",value:function(e,t){return s(r.__proto__||Object.getPrototypeOf(r),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_Slider}},{key:"defaults",get:function(){return n}}]),r}(l);M.Slider=i,M.jQueryLoaded&&M.initializeJqueryWrapper(i,"slider","M_Slider")}(cash,M.anime),function(e,t){e(document).on("click",".card",(function(n){if(e(this).children(".card-reveal").length){var i=e(n.target).closest(".card");void 0===i.data("initialOverflow")&&i.data("initialOverflow",void 0===i.css("overflow")?"":i.css("overflow"));var r=e(this).find(".card-reveal");e(n.target).is(e(".card-reveal .card-title"))||e(n.target).is(e(".card-reveal .card-title i"))?t({targets:r[0],translateY:0,duration:225,easing:"easeInOutQuad",complete:function(t){var n=t.animatables[0].target;e(n).css({display:"none"}),i.css("overflow",i.data("initialOverflow"))}}):(e(n.target).is(e(".card .activator"))||e(n.target).is(e(".card .activator i")))&&(i.css("overflow","hidden"),r.css({display:"block"}),t({targets:r[0],translateY:"-100%",duration:300,easing:"easeInOutQuad"}))}}))}(cash,M.anime),function(e){"use strict";var t={data:[],placeholder:"",secondaryPlaceholder:"",autocompleteOptions:{},limit:1/0,onChipAdd:null,onChipSelect:null,onChipDelete:null},n=function(n){function i(t,n){u(this,i);var r=a(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,i,t,n));return r.el.M_Chips=r,r.options=e.extend({},i.defaults,n),r.$el.addClass("chips input-field"),r.chipsData=[],r.$chips=e(),r._setupInput(),r.hasAutocomplete=Object.keys(r.options.autocompleteOptions).length>0,r.$input.attr("id")||r.$input.attr("id",M.guid()),r.options.data.length&&(r.chipsData=r.options.data,r._renderChips(r.chipsData)),r.hasAutocomplete&&r._setupAutocomplete(),r._setPlaceholder(),r._setupLabel(),r._setupEventHandlers(),r}return c(i,n),o(i,[{key:"getData",value:function(){return this.chipsData}},{key:"destroy",value:function(){this._removeEventHandlers(),this.$chips.remove(),this.el.M_Chips=void 0}},{key:"_setupEventHandlers",value:function(){this._handleChipClickBound=this._handleChipClick.bind(this),this._handleInputKeydownBound=this._handleInputKeydown.bind(this),this._handleInputFocusBound=this._handleInputFocus.bind(this),this._handleInputBlurBound=this._handleInputBlur.bind(this),this.el.addEventListener("click",this._handleChipClickBound),document.addEventListener("keydown",i._handleChipsKeydown),document.addEventListener("keyup",i._handleChipsKeyup),this.el.addEventListener("blur",i._handleChipsBlur,!0),this.$input[0].addEventListener("focus",this._handleInputFocusBound),this.$input[0].addEventListener("blur",this._handleInputBlurBound),this.$input[0].addEventListener("keydown",this._handleInputKeydownBound)}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("click",this._handleChipClickBound),document.removeEventListener("keydown",i._handleChipsKeydown),document.removeEventListener("keyup",i._handleChipsKeyup),this.el.removeEventListener("blur",i._handleChipsBlur,!0),this.$input[0].removeEventListener("focus",this._handleInputFocusBound),this.$input[0].removeEventListener("blur",this._handleInputBlurBound),this.$input[0].removeEventListener("keydown",this._handleInputKeydownBound)}},{key:"_handleChipClick",value:function(t){var n=e(t.target).closest(".chip"),i=e(t.target).is(".close");if(n.length){var r=n.index();i?(this.deleteChip(r),this.$input[0].focus()):this.selectChip(r)}else this.$input[0].focus()}},{key:"_handleInputFocus",value:function(){this.$el.addClass("focus")}},{key:"_handleInputBlur",value:function(){this.$el.removeClass("focus")}},{key:"_handleInputKeydown",value:function(e){if(i._keydown=!0,13===e.keyCode){if(this.hasAutocomplete&&this.autocomplete&&this.autocomplete.isOpen)return;e.preventDefault(),this.addChip({tag:this.$input[0].value}),this.$input[0].value=""}else 8!==e.keyCode&&37!==e.keyCode||""!==this.$input[0].value||!this.chipsData.length||(e.preventDefault(),this.selectChip(this.chipsData.length-1))}},{key:"_renderChip",value:function(t){if(t.tag){var n=document.createElement("div"),i=document.createElement("i");if(n.classList.add("chip"),n.textContent=t.tag,n.setAttribute("tabindex",0),e(i).addClass("material-icons close"),i.textContent="close",t.image){var r=document.createElement("img");r.setAttribute("src",t.image),n.insertBefore(r,n.firstChild)}return n.appendChild(i),n}}},{key:"_renderChips",value:function(){this.$chips.remove();for(var e=0;e<this.chipsData.length;e++){var t=this._renderChip(this.chipsData[e]);this.$el.append(t),this.$chips.add(t)}this.$el.append(this.$input[0])}},{key:"_setupAutocomplete",value:function(){var e=this;this.options.autocompleteOptions.onAutocomplete=function(t){e.addChip({tag:t}),e.$input[0].value="",e.$input[0].focus()},this.autocomplete=M.Autocomplete.init(this.$input[0],this.options.autocompleteOptions)}},{key:"_setupInput",value:function(){this.$input=this.$el.find("input"),this.$input.length||(this.$input=e("<input></input>"),this.$el.append(this.$input)),this.$input.addClass("input")}},{key:"_setupLabel",value:function(){this.$label=this.$el.find("label"),this.$label.length&&this.$label.setAttribute("for",this.$input.attr("id"))}},{key:"_setPlaceholder",value:function(){void 0!==this.chipsData&&!this.chipsData.length&&this.options.placeholder?e(this.$input).prop("placeholder",this.options.placeholder):(void 0===this.chipsData||this.chipsData.length)&&this.options.secondaryPlaceholder&&e(this.$input).prop("placeholder",this.options.secondaryPlaceholder)}},{key:"_isValid",value:function(e){if(e.hasOwnProperty("tag")&&""!==e.tag){for(var t=!1,n=0;n<this.chipsData.length;n++)if(this.chipsData[n].tag===e.tag){t=!0;break}return!t}return!1}},{key:"addChip",value:function(t){if(this._isValid(t)&&!(this.chipsData.length>=this.options.limit)){var n=this._renderChip(t);this.$chips.add(n),this.chipsData.push(t),e(this.$input).before(n),this._setPlaceholder(),"function"===typeof this.options.onChipAdd&&this.options.onChipAdd.call(this,this.$el,n)}}},{key:"deleteChip",value:function(t){var n=this.$chips.eq(t);this.$chips.eq(t).remove(),this.$chips=this.$chips.filter((function(t){return e(t).index()>=0})),this.chipsData.splice(t,1),this._setPlaceholder(),"function"===typeof this.options.onChipDelete&&this.options.onChipDelete.call(this,this.$el,n[0])}},{key:"selectChip",value:function(e){var t=this.$chips.eq(e);this._selectedChip=t,t[0].focus(),"function"===typeof this.options.onChipSelect&&this.options.onChipSelect.call(this,this.$el,t[0])}}],[{key:"init",value:function(e,t){return s(i.__proto__||Object.getPrototypeOf(i),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_Chips}},{key:"_handleChipsKeydown",value:function(t){i._keydown=!0;var n=e(t.target).closest(".chips"),r=t.target&&n.length;if(!e(t.target).is("input, textarea")&&r){var s=n[0].M_Chips;if(8===t.keyCode||46===t.keyCode){t.preventDefault();var o=s.chipsData.length;if(s._selectedChip){var a=s._selectedChip.index();s.deleteChip(a),s._selectedChip=null,o=Math.max(a-1,0)}s.chipsData.length&&s.selectChip(o)}else if(37===t.keyCode){if(s._selectedChip){var c=s._selectedChip.index()-1;if(c<0)return;s.selectChip(c)}}else if(39===t.keyCode&&s._selectedChip){var u=s._selectedChip.index()+1;u>=s.chipsData.length?s.$input[0].focus():s.selectChip(u)}}}},{key:"_handleChipsKeyup",value:function(e){i._keydown=!1}},{key:"_handleChipsBlur",value:function(t){if(!i._keydown){var n=e(t.target).closest(".chips"),r=n[0].M_Chips;r._selectedChip=null}}},{key:"defaults",get:function(){return t}}]),i}(l);n._keydown=!1,M.Chips=n,M.jQueryLoaded&&M.initializeJqueryWrapper(n,"chips","M_Chips"),e(document).ready((function(){e(document.body).on("click",".chip .close",(function(){var t=e(this).closest(".chips");t.length&&t[0].M_Chips||e(this).closest(".chip").remove()}))}))}(cash),function(e){"use strict";var t={top:0,bottom:1/0,offset:0,onPositionChange:null},n=function(n){function i(t,n){u(this,i);var r=a(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,i,t,n));return r.el.M_Pushpin=r,r.options=e.extend({},i.defaults,n),r.originalOffset=r.el.offsetTop,i._pushpins.push(r),r._setupEventHandlers(),r._updatePosition(),r}return c(i,n),o(i,[{key:"destroy",value:function(){this.el.style.top=null,this._removePinClasses(),this._removeEventHandlers();var e=i._pushpins.indexOf(this);i._pushpins.splice(e,1)}},{key:"_setupEventHandlers",value:function(){document.addEventListener("scroll",i._updateElements)}},{key:"_removeEventHandlers",value:function(){document.removeEventListener("scroll",i._updateElements)}},{key:"_updatePosition",value:function(){var e=M.getDocumentScrollTop()+this.options.offset;this.options.top<=e&&this.options.bottom>=e&&!this.el.classList.contains("pinned")&&(this._removePinClasses(),this.el.style.top=this.options.offset+"px",this.el.classList.add("pinned"),"function"===typeof this.options.onPositionChange&&this.options.onPositionChange.call(this,"pinned")),e<this.options.top&&!this.el.classList.contains("pin-top")&&(this._removePinClasses(),this.el.style.top=0,this.el.classList.add("pin-top"),"function"===typeof this.options.onPositionChange&&this.options.onPositionChange.call(this,"pin-top")),e>this.options.bottom&&!this.el.classList.contains("pin-bottom")&&(this._removePinClasses(),this.el.classList.add("pin-bottom"),this.el.style.top=this.options.bottom-this.originalOffset+"px","function"===typeof this.options.onPositionChange&&this.options.onPositionChange.call(this,"pin-bottom"))}},{key:"_removePinClasses",value:function(){this.el.classList.remove("pin-top"),this.el.classList.remove("pinned"),this.el.classList.remove("pin-bottom")}}],[{key:"init",value:function(e,t){return s(i.__proto__||Object.getPrototypeOf(i),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_Pushpin}},{key:"_updateElements",value:function(){for(var e in i._pushpins){var t=i._pushpins[e];t._updatePosition()}}},{key:"defaults",get:function(){return t}}]),i}(l);n._pushpins=[],M.Pushpin=n,M.jQueryLoaded&&M.initializeJqueryWrapper(n,"pushpin","M_Pushpin")}(cash),function(e,t){"use strict";var n={direction:"top",hoverEnabled:!0,toolbarEnabled:!1};e.fn.reverse=[].reverse;var i=function(i){function r(t,n){u(this,r);var i=a(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,r,t,n));return i.el.M_FloatingActionButton=i,i.options=e.extend({},r.defaults,n),i.isOpen=!1,i.$anchor=i.$el.children("a").first(),i.$menu=i.$el.children("ul").first(),i.$floatingBtns=i.$el.find("ul .btn-floating"),i.$floatingBtnsReverse=i.$el.find("ul .btn-floating").reverse(),i.offsetY=0,i.offsetX=0,i.$el.addClass("direction-"+i.options.direction),"top"===i.options.direction?i.offsetY=40:"right"===i.options.direction?i.offsetX=-40:"bottom"===i.options.direction?i.offsetY=-40:i.offsetX=40,i._setupEventHandlers(),i}return c(r,i),o(r,[{key:"destroy",value:function(){this._removeEventHandlers(),this.el.M_FloatingActionButton=void 0}},{key:"_setupEventHandlers",value:function(){this._handleFABClickBound=this._handleFABClick.bind(this),this._handleOpenBound=this.open.bind(this),this._handleCloseBound=this.close.bind(this),this.options.hoverEnabled&&!this.options.toolbarEnabled?(this.el.addEventListener("mouseenter",this._handleOpenBound),this.el.addEventListener("mouseleave",this._handleCloseBound)):this.el.addEventListener("click",this._handleFABClickBound)}},{key:"_removeEventHandlers",value:function(){this.options.hoverEnabled&&!this.options.toolbarEnabled?(this.el.removeEventListener("mouseenter",this._handleOpenBound),this.el.removeEventListener("mouseleave",this._handleCloseBound)):this.el.removeEventListener("click",this._handleFABClickBound)}},{key:"_handleFABClick",value:function(){this.isOpen?this.close():this.open()}},{key:"_handleDocumentClick",value:function(t){e(t.target).closest(this.$menu).length||this.close()}},{key:"open",value:function(){this.isOpen||(this.options.toolbarEnabled?this._animateInToolbar():this._animateInFAB(),this.isOpen=!0)}},{key:"close",value:function(){this.isOpen&&(this.options.toolbarEnabled?(window.removeEventListener("scroll",this._handleCloseBound,!0),document.body.removeEventListener("click",this._handleDocumentClickBound,!0),this._animateOutToolbar()):this._animateOutFAB(),this.isOpen=!1)}},{key:"_animateInFAB",value:function(){var e=this;this.$el.addClass("active");var n=0;this.$floatingBtnsReverse.each((function(i){t({targets:i,opacity:1,scale:[.4,1],translateY:[e.offsetY,0],translateX:[e.offsetX,0],duration:275,delay:n,easing:"easeInOutQuad"}),n+=40}))}},{key:"_animateOutFAB",value:function(){var e=this;this.$floatingBtnsReverse.each((function(n){t.remove(n),t({targets:n,opacity:0,scale:.4,translateY:e.offsetY,translateX:e.offsetX,duration:175,easing:"easeOutQuad",complete:function(){e.$el.removeClass("active")}})}))}},{key:"_animateInToolbar",value:function(){var t=this,n=void 0,i=window.innerWidth,r=window.innerHeight,s=this.el.getBoundingClientRect(),o=e('<div class="fab-backdrop"></div>'),a=this.$anchor.css("background-color");this.$anchor.append(o),this.offsetX=s.left-i/2+s.width/2,this.offsetY=r-s.bottom,n=i/o[0].clientWidth,this.btnBottom=s.bottom,this.btnLeft=s.left,this.btnWidth=s.width,this.$el.addClass("active"),this.$el.css({"text-align":"center",width:"100%",bottom:0,left:0,transform:"translateX("+this.offsetX+"px)",transition:"none"}),this.$anchor.css({transform:"translateY("+-this.offsetY+"px)",transition:"none"}),o.css({"background-color":a}),setTimeout((function(){t.$el.css({transform:"",transition:"transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s"}),t.$anchor.css({overflow:"visible",transform:"",transition:"transform .2s"}),setTimeout((function(){t.$el.css({overflow:"hidden","background-color":a}),o.css({transform:"scale("+n+")",transition:"transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"}),t.$menu.children("li").children("a").css({opacity:1}),t._handleDocumentClickBound=t._handleDocumentClick.bind(t),window.addEventListener("scroll",t._handleCloseBound,!0),document.body.addEventListener("click",t._handleDocumentClickBound,!0)}),100)}),0)}},{key:"_animateOutToolbar",value:function(){var e=this,t=window.innerWidth,n=window.innerHeight,i=this.$el.find(".fab-backdrop"),r=this.$anchor.css("background-color");this.offsetX=this.btnLeft-t/2+this.btnWidth/2,this.offsetY=n-this.btnBottom,this.$el.removeClass("active"),this.$el.css({"background-color":"transparent",transition:"none"}),this.$anchor.css({transition:"none"}),i.css({transform:"scale(0)","background-color":r}),this.$menu.children("li").children("a").css({opacity:""}),setTimeout((function(){i.remove(),e.$el.css({"text-align":"",width:"",bottom:"",left:"",overflow:"","background-color":"",transform:"translate3d("+-e.offsetX+"px,0,0)"}),e.$anchor.css({overflow:"",transform:"translate3d(0,"+e.offsetY+"px,0)"}),setTimeout((function(){e.$el.css({transform:"translate3d(0,0,0)",transition:"transform .2s"}),e.$anchor.css({transform:"translate3d(0,0,0)",transition:"transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"})}),20)}),200)}}],[{key:"init",value:function(e,t){return s(r.__proto__||Object.getPrototypeOf(r),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_FloatingActionButton}},{key:"defaults",get:function(){return n}}]),r}(l);M.FloatingActionButton=i,M.jQueryLoaded&&M.initializeJqueryWrapper(i,"floatingActionButton","M_FloatingActionButton")}(cash,M.anime),function(e){"use strict";var t={autoClose:!1,format:"mmm dd, yyyy",parse:null,defaultDate:null,setDefaultDate:!1,disableWeekends:!1,disableDayFn:null,firstDay:0,minDate:null,maxDate:null,yearRange:10,minYear:0,maxYear:9999,minMonth:void 0,maxMonth:void 0,startRange:null,endRange:null,isRTL:!1,showMonthAfterYear:!1,showDaysInNextAndPreviousMonths:!1,container:null,showClearBtn:!1,i18n:{cancel:"Cancel",clear:"Clear",done:"Ok",previousMonth:"‹",nextMonth:"›",months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekdaysAbbrev:["S","M","T","W","T","F","S"]},events:[],onSelect:null,onOpen:null,onClose:null,onDraw:null},n=function(n){function i(t,n){u(this,i);var r=a(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,i,t,n));r.el.M_Datepicker=r,r.options=e.extend({},i.defaults,n),n&&n.hasOwnProperty("i18n")&&"object"===typeof n.i18n&&(r.options.i18n=e.extend({},i.defaults.i18n,n.i18n)),r.options.minDate&&r.options.minDate.setHours(0,0,0,0),r.options.maxDate&&r.options.maxDate.setHours(0,0,0,0),r.id=M.guid(),r._setupVariables(),r._insertHTMLIntoDOM(),r._setupModal(),r._setupEventHandlers(),r.options.defaultDate||(r.options.defaultDate=new Date(Date.parse(r.el.value)));var s=r.options.defaultDate;return i._isDate(s)?r.options.setDefaultDate?(r.setDate(s,!0),r.setInputValue()):r.gotoDate(s):r.gotoDate(new Date),r.isOpen=!1,r}return c(i,n),o(i,[{key:"destroy",value:function(){this._removeEventHandlers(),this.modal.destroy(),e(this.modalEl).remove(),this.destroySelects(),this.el.M_Datepicker=void 0}},{key:"destroySelects",value:function(){var e=this.calendarEl.querySelector(".orig-select-year");e&&M.FormSelect.getInstance(e).destroy();var t=this.calendarEl.querySelector(".orig-select-month");t&&M.FormSelect.getInstance(t).destroy()}},{key:"_insertHTMLIntoDOM",value:function(){this.options.showClearBtn&&(e(this.clearBtn).css({visibility:""}),this.clearBtn.innerHTML=this.options.i18n.clear),this.doneBtn.innerHTML=this.options.i18n.done,this.cancelBtn.innerHTML=this.options.i18n.cancel,this.options.container?this.$modalEl.appendTo(this.options.container):this.$modalEl.insertBefore(this.el)}},{key:"_setupModal",value:function(){var e=this;this.modalEl.id="modal-"+this.id,this.modal=M.Modal.init(this.modalEl,{onCloseEnd:function(){e.isOpen=!1}})}},{key:"toString",value:function(e){var t=this;if(e=e||this.options.format,!i._isDate(this.date))return"";var n=e.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g),r=n.map((function(e){return t.formats[e]?t.formats[e]():e})).join("");return r}},{key:"setDate",value:function(e,t){if(!e)return this.date=null,this._renderDateDisplay(),this.draw();if("string"===typeof e&&(e=new Date(Date.parse(e))),i._isDate(e)){var n=this.options.minDate,r=this.options.maxDate;i._isDate(n)&&e<n?e=n:i._isDate(r)&&e>r&&(e=r),this.date=new Date(e.getTime()),this._renderDateDisplay(),i._setToStartOfDay(this.date),this.gotoDate(this.date),t||"function"!==typeof this.options.onSelect||this.options.onSelect.call(this,this.date)}}},{key:"setInputValue",value:function(){this.el.value=this.toString(),this.$el.trigger("change",{firedBy:this})}},{key:"_renderDateDisplay",value:function(){var e=i._isDate(this.date)?this.date:new Date,t=this.options.i18n,n=t.weekdaysShort[e.getDay()],r=t.monthsShort[e.getMonth()],s=e.getDate();this.yearTextEl.innerHTML=e.getFullYear(),this.dateTextEl.innerHTML=n+", "+r+" "+s}},{key:"gotoDate",value:function(e){var t=!0;if(i._isDate(e)){if(this.calendars){var n=new Date(this.calendars[0].year,this.calendars[0].month,1),r=new Date(this.calendars[this.calendars.length-1].year,this.calendars[this.calendars.length-1].month,1),s=e.getTime();r.setMonth(r.getMonth()+1),r.setDate(r.getDate()-1),t=s<n.getTime()||r.getTime()<s}t&&(this.calendars=[{month:e.getMonth(),year:e.getFullYear()}]),this.adjustCalendars()}}},{key:"adjustCalendars",value:function(){this.calendars[0]=this.adjustCalendar(this.calendars[0]),this.draw()}},{key:"adjustCalendar",value:function(e){return e.month<0&&(e.year-=Math.ceil(Math.abs(e.month)/12),e.month+=12),e.month>11&&(e.year+=Math.floor(Math.abs(e.month)/12),e.month-=12),e}},{key:"nextMonth",value:function(){this.calendars[0].month++,this.adjustCalendars()}},{key:"prevMonth",value:function(){this.calendars[0].month--,this.adjustCalendars()}},{key:"render",value:function(e,t,n){var r=this.options,s=new Date,o=i._getDaysInMonth(e,t),a=new Date(e,t,1).getDay(),c=[],u=[];i._setToStartOfDay(s),r.firstDay>0&&(a-=r.firstDay,a<0&&(a+=7));var l=0===t?11:t-1,h=11===t?0:t+1,d=0===t?e-1:e,f=11===t?e+1:e,p=i._getDaysInMonth(d,l),m=o+a,v=m;while(v>7)v-=7;m+=7-v;for(var g=!1,y=0,_=0;y<m;y++){var w=new Date(e,t,y-a+1),b=!!i._isDate(this.date)&&i._compareDates(w,this.date),k=i._compareDates(w,s),E=-1!==r.events.indexOf(w.toDateString()),I=y<a||y>=o+a,T=y-a+1,C=t,S=e,O=r.startRange&&i._compareDates(r.startRange,w),A=r.endRange&&i._compareDates(r.endRange,w),x=r.startRange&&r.endRange&&r.startRange<w&&w<r.endRange,D=r.minDate&&w<r.minDate||r.maxDate&&w>r.maxDate||r.disableWeekends&&i._isWeekend(w)||r.disableDayFn&&r.disableDayFn(w);I&&(y<a?(T=p+T,C=l,S=d):(T-=o,C=h,S=f));var L={day:T,month:C,year:S,hasEvent:E,isSelected:b,isToday:k,isDisabled:D,isEmpty:I,isStartRange:O,isEndRange:A,isInRange:x,showDaysInNextAndPreviousMonths:r.showDaysInNextAndPreviousMonths};u.push(this.renderDay(L)),7===++_&&(c.push(this.renderRow(u,r.isRTL,g)),u=[],_=0,g=!1)}return this.renderTable(r,c,n)}},{key:"renderDay",value:function(e){var t=[],n="false";if(e.isEmpty){if(!e.showDaysInNextAndPreviousMonths)return'<td class="is-empty"></td>';t.push("is-outside-current-month"),t.push("is-selection-disabled")}return e.isDisabled&&t.push("is-disabled"),e.isToday&&t.push("is-today"),e.isSelected&&(t.push("is-selected"),n="true"),e.hasEvent&&t.push("has-event"),e.isInRange&&t.push("is-inrange"),e.isStartRange&&t.push("is-startrange"),e.isEndRange&&t.push("is-endrange"),'<td data-day="'+e.day+'" class="'+t.join(" ")+'" aria-selected="'+n+'"><button class="datepicker-day-button" type="button" data-year="'+e.year+'" data-month="'+e.month+'" data-day="'+e.day+'">'+e.day+"</button></td>"}},{key:"renderRow",value:function(e,t,n){return'<tr class="datepicker-row'+(n?" is-selected":"")+'">'+(t?e.reverse():e).join("")+"</tr>"}},{key:"renderTable",value:function(e,t,n){return'<div class="datepicker-table-wrapper"><table cellpadding="0" cellspacing="0" class="datepicker-table" role="grid" aria-labelledby="'+n+'">'+this.renderHead(e)+this.renderBody(t)+"</table></div>"}},{key:"renderHead",value:function(e){var t=void 0,n=[];for(t=0;t<7;t++)n.push('<th scope="col"><abbr title="'+this.renderDayName(e,t)+'">'+this.renderDayName(e,t,!0)+"</abbr></th>");return"<thead><tr>"+(e.isRTL?n.reverse():n).join("")+"</tr></thead>"}},{key:"renderBody",value:function(e){return"<tbody>"+e.join("")+"</tbody>"}},{key:"renderTitle",value:function(t,n,i,r,s,o){var a=void 0,c=void 0,u=void 0,l=this.options,h=i===l.minYear,d=i===l.maxYear,f='<div id="'+o+'" class="datepicker-controls" role="heading" aria-live="assertive">',p=void 0,m=void 0,v=!0,g=!0;for(u=[],a=0;a<12;a++)u.push('<option value="'+(i===s?a-n:12+a-n)+'"'+(a===r?' selected="selected"':"")+(h&&a<l.minMonth||d&&a>l.maxMonth?'disabled="disabled"':"")+">"+l.i18n.months[a]+"</option>");for(p='<select class="datepicker-select orig-select-month" tabindex="-1">'+u.join("")+"</select>",e.isArray(l.yearRange)?(a=l.yearRange[0],c=l.yearRange[1]+1):(a=i-l.yearRange,c=1+i+l.yearRange),u=[];a<c&&a<=l.maxYear;a++)a>=l.minYear&&u.push('<option value="'+a+'" '+(a===i?'selected="selected"':"")+">"+a+"</option>");m='<select class="datepicker-select orig-select-year" tabindex="-1">'+u.join("")+"</select>";var y='<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/><path d="M0-.5h24v24H0z" fill="none"/></svg>';f+='<button class="month-prev'+(v?"":" is-disabled")+'" type="button">'+y+"</button>",f+='<div class="selects-container">',l.showMonthAfterYear?f+=m+p:f+=p+m,f+="</div>",h&&(0===r||l.minMonth>=r)&&(v=!1),d&&(11===r||l.maxMonth<=r)&&(g=!1);var _='<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/><path d="M0-.25h24v24H0z" fill="none"/></svg>';return f+='<button class="month-next'+(g?"":" is-disabled")+'" type="button">'+_+"</button>",f+"</div>"}},{key:"draw",value:function(e){if(this.isOpen||e){var t=this.options,n=t.minYear,i=t.maxYear,r=t.minMonth,s=t.maxMonth,o="",a=void 0;this._y<=n&&(this._y=n,!isNaN(r)&&this._m<r&&(this._m=r)),this._y>=i&&(this._y=i,!isNaN(s)&&this._m>s&&(this._m=s)),a="datepicker-title-"+Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,2);for(var c=0;c<1;c++)this._renderDateDisplay(),o+=this.renderTitle(this,c,this.calendars[c].year,this.calendars[c].month,this.calendars[0].year,a)+this.render(this.calendars[c].year,this.calendars[c].month,a);this.destroySelects(),this.calendarEl.innerHTML=o;var u=this.calendarEl.querySelector(".orig-select-year"),l=this.calendarEl.querySelector(".orig-select-month");M.FormSelect.init(u,{classes:"select-year",dropdownOptions:{container:document.body,constrainWidth:!1}}),M.FormSelect.init(l,{classes:"select-month",dropdownOptions:{container:document.body,constrainWidth:!1}}),u.addEventListener("change",this._handleYearChange.bind(this)),l.addEventListener("change",this._handleMonthChange.bind(this)),"function"===typeof this.options.onDraw&&this.options.onDraw(this)}}},{key:"_setupEventHandlers",value:function(){this._handleInputKeydownBound=this._handleInputKeydown.bind(this),this._handleInputClickBound=this._handleInputClick.bind(this),this._handleInputChangeBound=this._handleInputChange.bind(this),this._handleCalendarClickBound=this._handleCalendarClick.bind(this),this._finishSelectionBound=this._finishSelection.bind(this),this._handleMonthChange=this._handleMonthChange.bind(this),this._closeBound=this.close.bind(this),this.el.addEventListener("click",this._handleInputClickBound),this.el.addEventListener("keydown",this._handleInputKeydownBound),this.el.addEventListener("change",this._handleInputChangeBound),this.calendarEl.addEventListener("click",this._handleCalendarClickBound),this.doneBtn.addEventListener("click",this._finishSelectionBound),this.cancelBtn.addEventListener("click",this._closeBound),this.options.showClearBtn&&(this._handleClearClickBound=this._handleClearClick.bind(this),this.clearBtn.addEventListener("click",this._handleClearClickBound))}},{key:"_setupVariables",value:function(){var t=this;this.$modalEl=e(i._template),this.modalEl=this.$modalEl[0],this.calendarEl=this.modalEl.querySelector(".datepicker-calendar"),this.yearTextEl=this.modalEl.querySelector(".year-text"),this.dateTextEl=this.modalEl.querySelector(".date-text"),this.options.showClearBtn&&(this.clearBtn=this.modalEl.querySelector(".datepicker-clear")),this.doneBtn=this.modalEl.querySelector(".datepicker-done"),this.cancelBtn=this.modalEl.querySelector(".datepicker-cancel"),this.formats={d:function(){return t.date.getDate()},dd:function(){var e=t.date.getDate();return(e<10?"0":"")+e},ddd:function(){return t.options.i18n.weekdaysShort[t.date.getDay()]},dddd:function(){return t.options.i18n.weekdays[t.date.getDay()]},m:function(){return t.date.getMonth()+1},mm:function(){var e=t.date.getMonth()+1;return(e<10?"0":"")+e},mmm:function(){return t.options.i18n.monthsShort[t.date.getMonth()]},mmmm:function(){return t.options.i18n.months[t.date.getMonth()]},yy:function(){return(""+t.date.getFullYear()).slice(2)},yyyy:function(){return t.date.getFullYear()}}}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("click",this._handleInputClickBound),this.el.removeEventListener("keydown",this._handleInputKeydownBound),this.el.removeEventListener("change",this._handleInputChangeBound),this.calendarEl.removeEventListener("click",this._handleCalendarClickBound)}},{key:"_handleInputClick",value:function(){this.open()}},{key:"_handleInputKeydown",value:function(e){e.which===M.keys.ENTER&&(e.preventDefault(),this.open())}},{key:"_handleCalendarClick",value:function(t){if(this.isOpen){var n=e(t.target);n.hasClass("is-disabled")||(!n.hasClass("datepicker-day-button")||n.hasClass("is-empty")||n.parent().hasClass("is-disabled")?n.closest(".month-prev").length?this.prevMonth():n.closest(".month-next").length&&this.nextMonth():(this.setDate(new Date(t.target.getAttribute("data-year"),t.target.getAttribute("data-month"),t.target.getAttribute("data-day"))),this.options.autoClose&&this._finishSelection()))}}},{key:"_handleClearClick",value:function(){this.date=null,this.setInputValue(),this.close()}},{key:"_handleMonthChange",value:function(e){this.gotoMonth(e.target.value)}},{key:"_handleYearChange",value:function(e){this.gotoYear(e.target.value)}},{key:"gotoMonth",value:function(e){isNaN(e)||(this.calendars[0].month=parseInt(e,10),this.adjustCalendars())}},{key:"gotoYear",value:function(e){isNaN(e)||(this.calendars[0].year=parseInt(e,10),this.adjustCalendars())}},{key:"_handleInputChange",value:function(e){var t=void 0;e.firedBy!==this&&(t=this.options.parse?this.options.parse(this.el.value,this.options.format):new Date(Date.parse(this.el.value)),i._isDate(t)&&this.setDate(t))}},{key:"renderDayName",value:function(e,t,n){t+=e.firstDay;while(t>=7)t-=7;return n?e.i18n.weekdaysAbbrev[t]:e.i18n.weekdays[t]}},{key:"_finishSelection",value:function(){this.setInputValue(),this.close()}},{key:"open",value:function(){if(!this.isOpen)return this.isOpen=!0,"function"===typeof this.options.onOpen&&this.options.onOpen.call(this),this.draw(),this.modal.open(),this}},{key:"close",value:function(){if(this.isOpen)return this.isOpen=!1,"function"===typeof this.options.onClose&&this.options.onClose.call(this),this.modal.close(),this}}],[{key:"init",value:function(e,t){return s(i.__proto__||Object.getPrototypeOf(i),"init",this).call(this,this,e,t)}},{key:"_isDate",value:function(e){return/Date/.test(Object.prototype.toString.call(e))&&!isNaN(e.getTime())}},{key:"_isWeekend",value:function(e){var t=e.getDay();return 0===t||6===t}},{key:"_setToStartOfDay",value:function(e){i._isDate(e)&&e.setHours(0,0,0,0)}},{key:"_getDaysInMonth",value:function(e,t){return[31,i._isLeapYear(e)?29:28,31,30,31,30,31,31,30,31,30,31][t]}},{key:"_isLeapYear",value:function(e){return e%4===0&&e%100!==0||e%400===0}},{key:"_compareDates",value:function(e,t){return e.getTime()===t.getTime()}},{key:"_setToStartOfDay",value:function(e){i._isDate(e)&&e.setHours(0,0,0,0)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_Datepicker}},{key:"defaults",get:function(){return t}}]),i}(l);n._template=['<div class= "modal datepicker-modal">','<div class="modal-content datepicker-container">','<div class="datepicker-date-display">','<span class="year-text"></span>','<span class="date-text"></span>',"</div>",'<div class="datepicker-calendar-container">','<div class="datepicker-calendar"></div>','<div class="datepicker-footer">','<button class="btn-flat datepicker-clear waves-effect" style="visibility: hidden;" type="button"></button>','<div class="confirmation-btns">','<button class="btn-flat datepicker-cancel waves-effect" type="button"></button>','<button class="btn-flat datepicker-done waves-effect" type="button"></button>',"</div>","</div>","</div>","</div>","</div>"].join(""),M.Datepicker=n,M.jQueryLoaded&&M.initializeJqueryWrapper(n,"datepicker","M_Datepicker")}(cash),function(e){"use strict";var t={dialRadius:135,outerRadius:105,innerRadius:70,tickRadius:20,duration:350,container:null,defaultTime:"now",fromNow:0,showClearBtn:!1,i18n:{cancel:"Cancel",clear:"Clear",done:"Ok"},autoClose:!1,twelveHour:!0,vibrate:!0,onOpenStart:null,onOpenEnd:null,onCloseStart:null,onCloseEnd:null,onSelect:null},n=function(n){function i(t,n){u(this,i);var r=a(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,i,t,n));return r.el.M_Timepicker=r,r.options=e.extend({},i.defaults,n),r.id=M.guid(),r._insertHTMLIntoDOM(),r._setupModal(),r._setupVariables(),r._setupEventHandlers(),r._clockSetup(),r._pickerSetup(),r}return c(i,n),o(i,[{key:"destroy",value:function(){this._removeEventHandlers(),this.modal.destroy(),e(this.modalEl).remove(),this.el.M_Timepicker=void 0}},{key:"_setupEventHandlers",value:function(){this._handleInputKeydownBound=this._handleInputKeydown.bind(this),this._handleInputClickBound=this._handleInputClick.bind(this),this._handleClockClickStartBound=this._handleClockClickStart.bind(this),this._handleDocumentClickMoveBound=this._handleDocumentClickMove.bind(this),this._handleDocumentClickEndBound=this._handleDocumentClickEnd.bind(this),this.el.addEventListener("click",this._handleInputClickBound),this.el.addEventListener("keydown",this._handleInputKeydownBound),this.plate.addEventListener("mousedown",this._handleClockClickStartBound),this.plate.addEventListener("touchstart",this._handleClockClickStartBound),e(this.spanHours).on("click",this.showView.bind(this,"hours")),e(this.spanMinutes).on("click",this.showView.bind(this,"minutes"))}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("click",this._handleInputClickBound),this.el.removeEventListener("keydown",this._handleInputKeydownBound)}},{key:"_handleInputClick",value:function(){this.open()}},{key:"_handleInputKeydown",value:function(e){e.which===M.keys.ENTER&&(e.preventDefault(),this.open())}},{key:"_handleClockClickStart",value:function(e){e.preventDefault();var t=this.plate.getBoundingClientRect(),n={x:t.left,y:t.top};this.x0=n.x+this.options.dialRadius,this.y0=n.y+this.options.dialRadius,this.moved=!1;var r=i._Pos(e);this.dx=r.x-this.x0,this.dy=r.y-this.y0,this.setHand(this.dx,this.dy,!1),document.addEventListener("mousemove",this._handleDocumentClickMoveBound),document.addEventListener("touchmove",this._handleDocumentClickMoveBound),document.addEventListener("mouseup",this._handleDocumentClickEndBound),document.addEventListener("touchend",this._handleDocumentClickEndBound)}},{key:"_handleDocumentClickMove",value:function(e){e.preventDefault();var t=i._Pos(e),n=t.x-this.x0,r=t.y-this.y0;this.moved=!0,this.setHand(n,r,!1,!0)}},{key:"_handleDocumentClickEnd",value:function(t){var n=this;t.preventDefault(),document.removeEventListener("mouseup",this._handleDocumentClickEndBound),document.removeEventListener("touchend",this._handleDocumentClickEndBound);var r=i._Pos(t),s=r.x-this.x0,o=r.y-this.y0;this.moved&&s===this.dx&&o===this.dy&&this.setHand(s,o),"hours"===this.currentView?this.showView("minutes",this.options.duration/2):this.options.autoClose&&(e(this.minutesView).addClass("timepicker-dial-out"),setTimeout((function(){n.done()}),this.options.duration/2)),"function"===typeof this.options.onSelect&&this.options.onSelect.call(this,this.hours,this.minutes),document.removeEventListener("mousemove",this._handleDocumentClickMoveBound),document.removeEventListener("touchmove",this._handleDocumentClickMoveBound)}},{key:"_insertHTMLIntoDOM",value:function(){this.$modalEl=e(i._template),this.modalEl=this.$modalEl[0],this.modalEl.id="modal-"+this.id;var t=document.querySelector(this.options.container);this.options.container&&t?this.$modalEl.appendTo(t):this.$modalEl.insertBefore(this.el)}},{key:"_setupModal",value:function(){var e=this;this.modal=M.Modal.init(this.modalEl,{onOpenStart:this.options.onOpenStart,onOpenEnd:this.options.onOpenEnd,onCloseStart:this.options.onCloseStart,onCloseEnd:function(){"function"===typeof e.options.onCloseEnd&&e.options.onCloseEnd.call(e),e.isOpen=!1}})}},{key:"_setupVariables",value:function(){this.currentView="hours",this.vibrate=navigator.vibrate?"vibrate":navigator.webkitVibrate?"webkitVibrate":null,this._canvas=this.modalEl.querySelector(".timepicker-canvas"),this.plate=this.modalEl.querySelector(".timepicker-plate"),this.hoursView=this.modalEl.querySelector(".timepicker-hours"),this.minutesView=this.modalEl.querySelector(".timepicker-minutes"),this.spanHours=this.modalEl.querySelector(".timepicker-span-hours"),this.spanMinutes=this.modalEl.querySelector(".timepicker-span-minutes"),this.spanAmPm=this.modalEl.querySelector(".timepicker-span-am-pm"),this.footer=this.modalEl.querySelector(".timepicker-footer"),this.amOrPm="PM"}},{key:"_pickerSetup",value:function(){var t=e('<button class="btn-flat timepicker-clear waves-effect" style="visibility: hidden;" type="button" tabindex="'+(this.options.twelveHour?"3":"1")+'">'+this.options.i18n.clear+"</button>").appendTo(this.footer).on("click",this.clear.bind(this));this.options.showClearBtn&&t.css({visibility:""});var n=e('<div class="confirmation-btns"></div>');e('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="'+(this.options.twelveHour?"3":"1")+'">'+this.options.i18n.cancel+"</button>").appendTo(n).on("click",this.close.bind(this)),e('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="'+(this.options.twelveHour?"3":"1")+'">'+this.options.i18n.done+"</button>").appendTo(n).on("click",this.done.bind(this)),n.appendTo(this.footer)}},{key:"_clockSetup",value:function(){this.options.twelveHour&&(this.$amBtn=e('<div class="am-btn">AM</div>'),this.$pmBtn=e('<div class="pm-btn">PM</div>'),this.$amBtn.on("click",this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm),this.$pmBtn.on("click",this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm)),this._buildHoursView(),this._buildMinutesView(),this._buildSVGClock()}},{key:"_buildSVGClock",value:function(){var e=this.options.dialRadius,t=this.options.tickRadius,n=2*e,r=i._createSVGEl("svg");r.setAttribute("class","timepicker-svg"),r.setAttribute("width",n),r.setAttribute("height",n);var s=i._createSVGEl("g");s.setAttribute("transform","translate("+e+","+e+")");var o=i._createSVGEl("circle");o.setAttribute("class","timepicker-canvas-bearing"),o.setAttribute("cx",0),o.setAttribute("cy",0),o.setAttribute("r",4);var a=i._createSVGEl("line");a.setAttribute("x1",0),a.setAttribute("y1",0);var c=i._createSVGEl("circle");c.setAttribute("class","timepicker-canvas-bg"),c.setAttribute("r",t),s.appendChild(a),s.appendChild(c),s.appendChild(o),r.appendChild(s),this._canvas.appendChild(r),this.hand=a,this.bg=c,this.bearing=o,this.g=s}},{key:"_buildHoursView",value:function(){var t=e('<div class="timepicker-tick"></div>');if(this.options.twelveHour)for(var n=1;n<13;n+=1){var i=t.clone(),r=n/6*Math.PI,s=this.options.outerRadius;i.css({left:this.options.dialRadius+Math.sin(r)*s-this.options.tickRadius+"px",top:this.options.dialRadius-Math.cos(r)*s-this.options.tickRadius+"px"}),i.html(0===n?"00":n),this.hoursView.appendChild(i[0])}else for(var o=0;o<24;o+=1){var a=t.clone(),c=o/6*Math.PI,u=o>0&&o<13,l=u?this.options.innerRadius:this.options.outerRadius;a.css({left:this.options.dialRadius+Math.sin(c)*l-this.options.tickRadius+"px",top:this.options.dialRadius-Math.cos(c)*l-this.options.tickRadius+"px"}),a.html(0===o?"00":o),this.hoursView.appendChild(a[0])}}},{key:"_buildMinutesView",value:function(){for(var t=e('<div class="timepicker-tick"></div>'),n=0;n<60;n+=5){var r=t.clone(),s=n/30*Math.PI;r.css({left:this.options.dialRadius+Math.sin(s)*this.options.outerRadius-this.options.tickRadius+"px",top:this.options.dialRadius-Math.cos(s)*this.options.outerRadius-this.options.tickRadius+"px"}),r.html(i._addLeadingZero(n)),this.minutesView.appendChild(r[0])}}},{key:"_handleAmPmClick",value:function(t){var n=e(t.target);this.amOrPm=n.hasClass("am-btn")?"AM":"PM",this._updateAmPmView()}},{key:"_updateAmPmView",value:function(){this.options.twelveHour&&(this.$amBtn.toggleClass("text-primary","AM"===this.amOrPm),this.$pmBtn.toggleClass("text-primary","PM"===this.amOrPm))}},{key:"_updateTimeFromInput",value:function(){var e=((this.el.value||this.options.defaultTime||"")+"").split(":");if(this.options.twelveHour&&"undefined"!==typeof e[1]&&(e[1].toUpperCase().indexOf("AM")>0?this.amOrPm="AM":this.amOrPm="PM",e[1]=e[1].replace("AM","").replace("PM","")),"now"===e[0]){var t=new Date(+new Date+this.options.fromNow);e=[t.getHours(),t.getMinutes()],this.options.twelveHour&&(this.amOrPm=e[0]>=12&&e[0]<24?"PM":"AM")}this.hours=+e[0]||0,this.minutes=+e[1]||0,this.spanHours.innerHTML=this.hours,this.spanMinutes.innerHTML=i._addLeadingZero(this.minutes),this._updateAmPmView()}},{key:"showView",value:function(t,n){"minutes"===t&&e(this.hoursView).css("visibility");var i="hours"===t,r=i?this.hoursView:this.minutesView,s=i?this.minutesView:this.hoursView;this.currentView=t,e(this.spanHours).toggleClass("text-primary",i),e(this.spanMinutes).toggleClass("text-primary",!i),s.classList.add("timepicker-dial-out"),e(r).css("visibility","visible").removeClass("timepicker-dial-out"),this.resetClock(n),clearTimeout(this.toggleViewTimer),this.toggleViewTimer=setTimeout((function(){e(s).css("visibility","hidden")}),this.options.duration)}},{key:"resetClock",value:function(t){var n=this.currentView,i=this[n],r="hours"===n,s=Math.PI/(r?6:30),o=i*s,a=r&&i>0&&i<13?this.options.innerRadius:this.options.outerRadius,c=Math.sin(o)*a,u=-Math.cos(o)*a,l=this;t?(e(this.canvas).addClass("timepicker-canvas-out"),setTimeout((function(){e(l.canvas).removeClass("timepicker-canvas-out"),l.setHand(c,u)}),t)):this.setHand(c,u)}},{key:"setHand",value:function(e,t,n){var r=this,s=Math.atan2(e,-t),o="hours"===this.currentView,a=Math.PI/(o||n?6:30),c=Math.sqrt(e*e+t*t),u=o&&c<(this.options.outerRadius+this.options.innerRadius)/2,l=u?this.options.innerRadius:this.options.outerRadius;this.options.twelveHour&&(l=this.options.outerRadius),s<0&&(s=2*Math.PI+s);var h=Math.round(s/a);s=h*a,this.options.twelveHour?o?0===h&&(h=12):(n&&(h*=5),60===h&&(h=0)):o?(12===h&&(h=0),h=u?0===h?12:h:0===h?0:h+12):(n&&(h*=5),60===h&&(h=0)),this[this.currentView]!==h&&this.vibrate&&this.options.vibrate&&(this.vibrateTimer||(navigator[this.vibrate](10),this.vibrateTimer=setTimeout((function(){r.vibrateTimer=null}),100))),this[this.currentView]=h,o?this["spanHours"].innerHTML=h:this["spanMinutes"].innerHTML=i._addLeadingZero(h);var d=Math.sin(s)*(l-this.options.tickRadius),f=-Math.cos(s)*(l-this.options.tickRadius),p=Math.sin(s)*l,m=-Math.cos(s)*l;this.hand.setAttribute("x2",d),this.hand.setAttribute("y2",f),this.bg.setAttribute("cx",p),this.bg.setAttribute("cy",m)}},{key:"open",value:function(){this.isOpen||(this.isOpen=!0,this._updateTimeFromInput(),this.showView("hours"),this.modal.open())}},{key:"close",value:function(){this.isOpen&&(this.isOpen=!1,this.modal.close())}},{key:"done",value:function(e,t){var n=this.el.value,r=t?"":i._addLeadingZero(this.hours)+":"+i._addLeadingZero(this.minutes);this.time=r,!t&&this.options.twelveHour&&(r=r+" "+this.amOrPm),this.el.value=r,r!==n&&this.$el.trigger("change"),this.close(),this.el.focus()}},{key:"clear",value:function(){this.done(null,!0)}}],[{key:"init",value:function(e,t){return s(i.__proto__||Object.getPrototypeOf(i),"init",this).call(this,this,e,t)}},{key:"_addLeadingZero",value:function(e){return(e<10?"0":"")+e}},{key:"_createSVGEl",value:function(e){var t="http://www.w3.org/2000/svg";return document.createElementNS(t,e)}},{key:"_Pos",value:function(e){return e.targetTouches&&e.targetTouches.length>=1?{x:e.targetTouches[0].clientX,y:e.targetTouches[0].clientY}:{x:e.clientX,y:e.clientY}}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_Timepicker}},{key:"defaults",get:function(){return t}}]),i}(l);n._template=['<div class= "modal timepicker-modal">','<div class="modal-content timepicker-container">','<div class="timepicker-digital-display">','<div class="timepicker-text-container">','<div class="timepicker-display-column">','<span class="timepicker-span-hours text-primary"></span>',":",'<span class="timepicker-span-minutes"></span>',"</div>",'<div class="timepicker-display-column timepicker-display-am-pm">','<div class="timepicker-span-am-pm"></div>',"</div>","</div>","</div>",'<div class="timepicker-analog-display">','<div class="timepicker-plate">','<div class="timepicker-canvas"></div>','<div class="timepicker-dial timepicker-hours"></div>','<div class="timepicker-dial timepicker-minutes timepicker-dial-out"></div>',"</div>",'<div class="timepicker-footer"></div>',"</div>","</div>","</div>"].join(""),M.Timepicker=n,M.jQueryLoaded&&M.initializeJqueryWrapper(n,"timepicker","M_Timepicker")}(cash),function(e){"use strict";var t={},n=function(n){function i(t,n){u(this,i);var r=a(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,i,t,n));return r.el.M_CharacterCounter=r,r.options=e.extend({},i.defaults,n),r.isInvalid=!1,r.isValidLength=!1,r._setupCounter(),r._setupEventHandlers(),r}return c(i,n),o(i,[{key:"destroy",value:function(){this._removeEventHandlers(),this.el.CharacterCounter=void 0,this._removeCounter()}},{key:"_setupEventHandlers",value:function(){this._handleUpdateCounterBound=this.updateCounter.bind(this),this.el.addEventListener("focus",this._handleUpdateCounterBound,!0),this.el.addEventListener("input",this._handleUpdateCounterBound,!0)}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("focus",this._handleUpdateCounterBound,!0),this.el.removeEventListener("input",this._handleUpdateCounterBound,!0)}},{key:"_setupCounter",value:function(){this.counterEl=document.createElement("span"),e(this.counterEl).addClass("character-counter").css({float:"right","font-size":"12px",height:1}),this.$el.parent().append(this.counterEl)}},{key:"_removeCounter",value:function(){e(this.counterEl).remove()}},{key:"updateCounter",value:function(){var t=+this.$el.attr("data-length"),n=this.el.value.length;this.isValidLength=n<=t;var i=n;t&&(i+="/"+t,this._validateInput()),e(this.counterEl).html(i)}},{key:"_validateInput",value:function(){this.isValidLength&&this.isInvalid?(this.isInvalid=!1,this.$el.removeClass("invalid")):this.isValidLength||this.isInvalid||(this.isInvalid=!0,this.$el.removeClass("valid"),this.$el.addClass("invalid"))}}],[{key:"init",value:function(e,t){return s(i.__proto__||Object.getPrototypeOf(i),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_CharacterCounter}},{key:"defaults",get:function(){return t}}]),i}(l);M.CharacterCounter=n,M.jQueryLoaded&&M.initializeJqueryWrapper(n,"characterCounter","M_CharacterCounter")}(cash),function(e){"use strict";var t={duration:200,dist:-100,shift:0,padding:0,numVisible:5,fullWidth:!1,indicators:!1,noWrap:!1,onCycleTo:null},n=function(n){function i(t,n){u(this,i);var r=a(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,i,t,n));return r.el.M_Carousel=r,r.options=e.extend({},i.defaults,n),r.hasMultipleSlides=r.$el.find(".carousel-item").length>1,r.showIndicators=r.options.indicators&&r.hasMultipleSlides,r.noWrap=r.options.noWrap||!r.hasMultipleSlides,r.pressed=!1,r.dragged=!1,r.offset=r.target=0,r.images=[],r.itemWidth=r.$el.find(".carousel-item").first().innerWidth(),r.itemHeight=r.$el.find(".carousel-item").first().innerHeight(),r.dim=2*r.itemWidth+r.options.padding||1,r._autoScrollBound=r._autoScroll.bind(r),r._trackBound=r._track.bind(r),r.options.fullWidth&&(r.options.dist=0,r._setCarouselHeight(),r.showIndicators&&r.$el.find(".carousel-fixed-item").addClass("with-indicators")),r.$indicators=e('<ul class="indicators"></ul>'),r.$el.find(".carousel-item").each((function(t,n){if(r.images.push(t),r.showIndicators){var i=e('<li class="indicator-item"></li>');0===n&&i[0].classList.add("active"),r.$indicators.append(i)}})),r.showIndicators&&r.$el.append(r.$indicators),r.count=r.images.length,r.options.numVisible=Math.min(r.count,r.options.numVisible),r.xform="transform",["webkit","Moz","O","ms"].every((function(e){var t=e+"Transform";return"undefined"===typeof document.body.style[t]||(r.xform=t,!1)})),r._setupEventHandlers(),r._scroll(r.offset),r}return c(i,n),o(i,[{key:"destroy",value:function(){this._removeEventHandlers(),this.el.M_Carousel=void 0}},{key:"_setupEventHandlers",value:function(){var e=this;this._handleCarouselTapBound=this._handleCarouselTap.bind(this),this._handleCarouselDragBound=this._handleCarouselDrag.bind(this),this._handleCarouselReleaseBound=this._handleCarouselRelease.bind(this),this._handleCarouselClickBound=this._handleCarouselClick.bind(this),"undefined"!==typeof window.ontouchstart&&(this.el.addEventListener("touchstart",this._handleCarouselTapBound),this.el.addEventListener("touchmove",this._handleCarouselDragBound),this.el.addEventListener("touchend",this._handleCarouselReleaseBound)),this.el.addEventListener("mousedown",this._handleCarouselTapBound),this.el.addEventListener("mousemove",this._handleCarouselDragBound),this.el.addEventListener("mouseup",this._handleCarouselReleaseBound),this.el.addEventListener("mouseleave",this._handleCarouselReleaseBound),this.el.addEventListener("click",this._handleCarouselClickBound),this.showIndicators&&this.$indicators&&(this._handleIndicatorClickBound=this._handleIndicatorClick.bind(this),this.$indicators.find(".indicator-item").each((function(t,n){t.addEventListener("click",e._handleIndicatorClickBound)})));var t=M.throttle(this._handleResize,200);this._handleThrottledResizeBound=t.bind(this),window.addEventListener("resize",this._handleThrottledResizeBound)}},{key:"_removeEventHandlers",value:function(){var e=this;"undefined"!==typeof window.ontouchstart&&(this.el.removeEventListener("touchstart",this._handleCarouselTapBound),this.el.removeEventListener("touchmove",this._handleCarouselDragBound),this.el.removeEventListener("touchend",this._handleCarouselReleaseBound)),this.el.removeEventListener("mousedown",this._handleCarouselTapBound),this.el.removeEventListener("mousemove",this._handleCarouselDragBound),this.el.removeEventListener("mouseup",this._handleCarouselReleaseBound),this.el.removeEventListener("mouseleave",this._handleCarouselReleaseBound),this.el.removeEventListener("click",this._handleCarouselClickBound),this.showIndicators&&this.$indicators&&this.$indicators.find(".indicator-item").each((function(t,n){t.removeEventListener("click",e._handleIndicatorClickBound)})),window.removeEventListener("resize",this._handleThrottledResizeBound)}},{key:"_handleCarouselTap",value:function(t){"mousedown"===t.type&&e(t.target).is("img")&&t.preventDefault(),this.pressed=!0,this.dragged=!1,this.verticalDragged=!1,this.reference=this._xpos(t),this.referenceY=this._ypos(t),this.velocity=this.amplitude=0,this.frame=this.offset,this.timestamp=Date.now(),clearInterval(this.ticker),this.ticker=setInterval(this._trackBound,100)}},{key:"_handleCarouselDrag",value:function(e){var t=void 0,n=void 0,i=void 0,r=void 0;if(this.pressed)if(t=this._xpos(e),n=this._ypos(e),i=this.reference-t,r=Math.abs(this.referenceY-n),r<30&&!this.verticalDragged)(i>2||i<-2)&&(this.dragged=!0,this.reference=t,this._scroll(this.offset+i));else{if(this.dragged)return e.preventDefault(),e.stopPropagation(),!1;this.verticalDragged=!0}if(this.dragged)return e.preventDefault(),e.stopPropagation(),!1}},{key:"_handleCarouselRelease",value:function(e){if(this.pressed)return this.pressed=!1,clearInterval(this.ticker),this.target=this.offset,(this.velocity>10||this.velocity<-10)&&(this.amplitude=.9*this.velocity,this.target=this.offset+this.amplitude),this.target=Math.round(this.target/this.dim)*this.dim,this.noWrap&&(this.target>=this.dim*(this.count-1)?this.target=this.dim*(this.count-1):this.target<0&&(this.target=0)),this.amplitude=this.target-this.offset,this.timestamp=Date.now(),requestAnimationFrame(this._autoScrollBound),this.dragged&&(e.preventDefault(),e.stopPropagation()),!1}},{key:"_handleCarouselClick",value:function(t){if(this.dragged)return t.preventDefault(),t.stopPropagation(),!1;if(!this.options.fullWidth){var n=e(t.target).closest(".carousel-item").index(),i=this._wrap(this.center)-n;0!==i&&(t.preventDefault(),t.stopPropagation()),this._cycleTo(n)}}},{key:"_handleIndicatorClick",value:function(t){t.stopPropagation();var n=e(t.target).closest(".indicator-item");n.length&&this._cycleTo(n.index())}},{key:"_handleResize",value:function(e){this.options.fullWidth?(this.itemWidth=this.$el.find(".carousel-item").first().innerWidth(),this.imageHeight=this.$el.find(".carousel-item.active").height(),this.dim=2*this.itemWidth+this.options.padding,this.offset=2*this.center*this.itemWidth,this.target=this.offset,this._setCarouselHeight(!0)):this._scroll()}},{key:"_setCarouselHeight",value:function(e){var t=this,n=this.$el.find(".carousel-item.active").length?this.$el.find(".carousel-item.active").first():this.$el.find(".carousel-item").first(),i=n.find("img").first();if(i.length)if(i[0].complete){var r=i.height();if(r>0)this.$el.css("height",r+"px");else{var s=i[0].naturalWidth,o=i[0].naturalHeight,a=this.$el.width()/s*o;this.$el.css("height",a+"px")}}else i.one("load",(function(e,n){t.$el.css("height",e.offsetHeight+"px")}));else if(!e){var c=n.height();this.$el.css("height",c+"px")}}},{key:"_xpos",value:function(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}},{key:"_ypos",value:function(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}},{key:"_wrap",value:function(e){return e>=this.count?e%this.count:e<0?this._wrap(this.count+e%this.count):e}},{key:"_track",value:function(){var e=void 0,t=void 0,n=void 0,i=void 0;e=Date.now(),t=e-this.timestamp,this.timestamp=e,n=this.offset-this.frame,this.frame=this.offset,i=1e3*n/(1+t),this.velocity=.8*i+.2*this.velocity}},{key:"_autoScroll",value:function(){var e=void 0,t=void 0;this.amplitude&&(e=Date.now()-this.timestamp,t=this.amplitude*Math.exp(-e/this.options.duration),t>2||t<-2?(this._scroll(this.target-t),requestAnimationFrame(this._autoScrollBound)):this._scroll(this.target))}},{key:"_scroll",value:function(t){var n=this;this.$el.hasClass("scrolling")||this.el.classList.add("scrolling"),null!=this.scrollingTimeout&&window.clearTimeout(this.scrollingTimeout),this.scrollingTimeout=window.setTimeout((function(){n.$el.removeClass("scrolling")}),this.options.duration);var i=void 0,r=void 0,s=void 0,o=void 0,a=void 0,c=void 0,u=void 0,l=void 0,h=void 0,d=void 0,f=this.center,p=1/this.options.numVisible;if(this.offset="number"===typeof t?t:this.offset,this.center=Math.floor((this.offset+this.dim/2)/this.dim),s=this.offset-this.center*this.dim,o=s<0?1:-1,a=-o*s*2/this.dim,r=this.count>>1,this.options.fullWidth?(u="translateX(0)",d=1):(u="translateX("+(this.el.clientWidth-this.itemWidth)/2+"px) ",u+="translateY("+(this.el.clientHeight-this.itemHeight)/2+"px)",d=1-p*a),this.showIndicators){var m=this.center%this.count,v=this.$indicators.find(".indicator-item.active");v.index()!==m&&(v.removeClass("active"),this.$indicators.find(".indicator-item").eq(m)[0].classList.add("active"))}if(!this.noWrap||this.center>=0&&this.center<this.count){c=this.images[this._wrap(this.center)],e(c).hasClass("active")||(this.$el.find(".carousel-item").removeClass("active"),c.classList.add("active"));var g=u+" translateX("+-s/2+"px) translateX("+o*this.options.shift*a*i+"px) translateZ("+this.options.dist*a+"px)";this._updateItemStyle(c,d,0,g)}for(i=1;i<=r;++i){if(this.options.fullWidth?(l=this.options.dist,h=i===r&&s<0?1-a:1):(l=this.options.dist*(2*i+a*o),h=1-p*(2*i+a*o)),!this.noWrap||this.center+i<this.count){c=this.images[this._wrap(this.center+i)];var y=u+" translateX("+(this.options.shift+(this.dim*i-s)/2)+"px) translateZ("+l+"px)";this._updateItemStyle(c,h,-i,y)}if(this.options.fullWidth?(l=this.options.dist,h=i===r&&s>0?1-a:1):(l=this.options.dist*(2*i-a*o),h=1-p*(2*i-a*o)),!this.noWrap||this.center-i>=0){c=this.images[this._wrap(this.center-i)];var _=u+" translateX("+(-this.options.shift+(-this.dim*i-s)/2)+"px) translateZ("+l+"px)";this._updateItemStyle(c,h,-i,_)}}if(!this.noWrap||this.center>=0&&this.center<this.count){c=this.images[this._wrap(this.center)];var w=u+" translateX("+-s/2+"px) translateX("+o*this.options.shift*a+"px) translateZ("+this.options.dist*a+"px)";this._updateItemStyle(c,d,0,w)}var b=this.$el.find(".carousel-item").eq(this._wrap(this.center));f!==this.center&&"function"===typeof this.options.onCycleTo&&this.options.onCycleTo.call(this,b[0],this.dragged),"function"===typeof this.oneTimeCallback&&(this.oneTimeCallback.call(this,b[0],this.dragged),this.oneTimeCallback=null)}},{key:"_updateItemStyle",value:function(e,t,n,i){e.style[this.xform]=i,e.style.zIndex=n,e.style.opacity=t,e.style.visibility="visible"}},{key:"_cycleTo",value:function(e,t){var n=this.center%this.count-e;this.noWrap||(n<0?Math.abs(n+this.count)<Math.abs(n)&&(n+=this.count):n>0&&Math.abs(n-this.count)<n&&(n-=this.count)),this.target=this.dim*Math.round(this.offset/this.dim),n<0?this.target+=this.dim*Math.abs(n):n>0&&(this.target-=this.dim*n),"function"===typeof t&&(this.oneTimeCallback=t),this.offset!==this.target&&(this.amplitude=this.target-this.offset,this.timestamp=Date.now(),requestAnimationFrame(this._autoScrollBound))}},{key:"next",value:function(e){(void 0===e||isNaN(e))&&(e=1);var t=this.center+e;if(t>=this.count||t<0){if(this.noWrap)return;t=this._wrap(t)}this._cycleTo(t)}},{key:"prev",value:function(e){(void 0===e||isNaN(e))&&(e=1);var t=this.center-e;if(t>=this.count||t<0){if(this.noWrap)return;t=this._wrap(t)}this._cycleTo(t)}},{key:"set",value:function(e,t){if((void 0===e||isNaN(e))&&(e=0),e>this.count||e<0){if(this.noWrap)return;e=this._wrap(e)}this._cycleTo(e,t)}}],[{key:"init",value:function(e,t){return s(i.__proto__||Object.getPrototypeOf(i),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_Carousel}},{key:"defaults",get:function(){return t}}]),i}(l);M.Carousel=n,M.jQueryLoaded&&M.initializeJqueryWrapper(n,"carousel","M_Carousel")}(cash),function(e){"use strict";var t={onOpen:void 0,onClose:void 0},n=function(n){function i(t,n){u(this,i);var r=a(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,i,t,n));return r.el.M_TapTarget=r,r.options=e.extend({},i.defaults,n),r.isOpen=!1,r.$origin=e("#"+r.$el.attr("data-target")),r._setup(),r._calculatePositioning(),r._setupEventHandlers(),r}return c(i,n),o(i,[{key:"destroy",value:function(){this._removeEventHandlers(),this.el.TapTarget=void 0}},{key:"_setupEventHandlers",value:function(){this._handleDocumentClickBound=this._handleDocumentClick.bind(this),this._handleTargetClickBound=this._handleTargetClick.bind(this),this._handleOriginClickBound=this._handleOriginClick.bind(this),this.el.addEventListener("click",this._handleTargetClickBound),this.originEl.addEventListener("click",this._handleOriginClickBound);var e=M.throttle(this._handleResize,200);this._handleThrottledResizeBound=e.bind(this),window.addEventListener("resize",this._handleThrottledResizeBound)}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("click",this._handleTargetClickBound),this.originEl.removeEventListener("click",this._handleOriginClickBound),window.removeEventListener("resize",this._handleThrottledResizeBound)}},{key:"_handleTargetClick",value:function(e){this.open()}},{key:"_handleOriginClick",value:function(e){this.close()}},{key:"_handleResize",value:function(e){this._calculatePositioning()}},{key:"_handleDocumentClick",value:function(t){e(t.target).closest(".tap-target-wrapper").length||(this.close(),t.preventDefault(),t.stopPropagation())}},{key:"_setup",value:function(){this.wrapper=this.$el.parent()[0],this.waveEl=e(this.wrapper).find(".tap-target-wave")[0],this.originEl=e(this.wrapper).find(".tap-target-origin")[0],this.contentEl=this.$el.find(".tap-target-content")[0],e(this.wrapper).hasClass(".tap-target-wrapper")||(this.wrapper=document.createElement("div"),this.wrapper.classList.add("tap-target-wrapper"),this.$el.before(e(this.wrapper)),this.wrapper.append(this.el)),this.contentEl||(this.contentEl=document.createElement("div"),this.contentEl.classList.add("tap-target-content"),this.$el.append(this.contentEl)),this.waveEl||(this.waveEl=document.createElement("div"),this.waveEl.classList.add("tap-target-wave"),this.originEl||(this.originEl=this.$origin.clone(!0,!0),this.originEl.addClass("tap-target-origin"),this.originEl.removeAttr("id"),this.originEl.removeAttr("style"),this.originEl=this.originEl[0],this.waveEl.append(this.originEl)),this.wrapper.append(this.waveEl))}},{key:"_calculatePositioning",value:function(){var t="fixed"===this.$origin.css("position");if(!t)for(var n=this.$origin.parents(),i=0;i<n.length;i++)if(t="fixed"==e(n[i]).css("position"),t)break;var r=this.$origin.outerWidth(),s=this.$origin.outerHeight(),o=t?this.$origin.offset().top-M.getDocumentScrollTop():this.$origin.offset().top,a=t?this.$origin.offset().left-M.getDocumentScrollLeft():this.$origin.offset().left,c=window.innerWidth,u=window.innerHeight,l=c/2,h=u/2,d=a<=l,f=a>l,p=o<=h,m=o>h,v=a>=.25*c&&a<=.75*c,g=this.$el.outerWidth(),y=this.$el.outerHeight(),_=o+s/2-y/2,w=a+r/2-g/2,b=t?"fixed":"absolute",k=v?g:g/2+r,E=y/2,I=p?y/2:0,T=0,C=d&&!v?g/2-r:0,S=0,O=r,A=m?"bottom":"top",x=2*r,D=x,L=y/2-D/2,N=g/2-x/2,R={};R.top=p?_+"px":"",R.right=f?c-w-g+"px":"",R.bottom=m?u-_-y+"px":"",R.left=d?w+"px":"",R.position=b,e(this.wrapper).css(R),e(this.contentEl).css({width:k+"px",height:E+"px",top:I+"px",right:S+"px",bottom:T+"px",left:C+"px",padding:O+"px",verticalAlign:A}),e(this.waveEl).css({top:L+"px",left:N+"px",width:x+"px",height:D+"px"})}},{key:"open",value:function(){this.isOpen||("function"===typeof this.options.onOpen&&this.options.onOpen.call(this,this.$origin[0]),this.isOpen=!0,this.wrapper.classList.add("open"),document.body.addEventListener("click",this._handleDocumentClickBound,!0),document.body.addEventListener("touchend",this._handleDocumentClickBound))}},{key:"close",value:function(){this.isOpen&&("function"===typeof this.options.onClose&&this.options.onClose.call(this,this.$origin[0]),this.isOpen=!1,this.wrapper.classList.remove("open"),document.body.removeEventListener("click",this._handleDocumentClickBound,!0),document.body.removeEventListener("touchend",this._handleDocumentClickBound))}}],[{key:"init",value:function(e,t){return s(i.__proto__||Object.getPrototypeOf(i),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_TapTarget}},{key:"defaults",get:function(){return t}}]),i}(l);M.TapTarget=n,M.jQueryLoaded&&M.initializeJqueryWrapper(n,"tapTarget","M_TapTarget")}(cash),function(e){"use strict";var t={classes:"",dropdownOptions:{}},n=function(n){function i(t,n){u(this,i);var r=a(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,i,t,n));return r.$el.hasClass("browser-default")?a(r):(r.el.M_FormSelect=r,r.options=e.extend({},i.defaults,n),r.isMultiple=r.$el.prop("multiple"),r.el.tabIndex=-1,r._keysSelected={},r._valueDict={},r._setupDropdown(),r._setupEventHandlers(),r)}return c(i,n),o(i,[{key:"destroy",value:function(){this._removeEventHandlers(),this._removeDropdown(),this.el.M_FormSelect=void 0}},{key:"_setupEventHandlers",value:function(){var t=this;this._handleSelectChangeBound=this._handleSelectChange.bind(this),this._handleOptionClickBound=this._handleOptionClick.bind(this),this._handleInputClickBound=this._handleInputClick.bind(this),e(this.dropdownOptions).find("li:not(.optgroup)").each((function(e){e.addEventListener("click",t._handleOptionClickBound)})),this.el.addEventListener("change",this._handleSelectChangeBound),this.input.addEventListener("click",this._handleInputClickBound)}},{key:"_removeEventHandlers",value:function(){var t=this;e(this.dropdownOptions).find("li:not(.optgroup)").each((function(e){e.removeEventListener("click",t._handleOptionClickBound)})),this.el.removeEventListener("change",this._handleSelectChangeBound),this.input.removeEventListener("click",this._handleInputClickBound)}},{key:"_handleSelectChange",value:function(e){this._setValueToInput()}},{key:"_handleOptionClick",value:function(t){t.preventDefault();var n=e(t.target).closest("li")[0],i=n.id;if(!e(n).hasClass("disabled")&&!e(n).hasClass("optgroup")&&i.length){var r=!0;if(this.isMultiple){var s=e(this.dropdownOptions).find("li.disabled.selected");s.length&&(s.removeClass("selected"),s.find('input[type="checkbox"]').prop("checked",!1),this._toggleEntryFromArray(s[0].id)),r=this._toggleEntryFromArray(i)}else e(this.dropdownOptions).find("li").removeClass("selected"),e(n).toggleClass("selected",r);var o=e(this._valueDict[i].el).prop("selected");o!==r&&(e(this._valueDict[i].el).prop("selected",r),this.$el.trigger("change"))}t.stopPropagation()}},{key:"_handleInputClick",value:function(){this.dropdown&&this.dropdown.isOpen&&(this._setValueToInput(),this._setSelectedStates())}},{key:"_setupDropdown",value:function(){var t=this;this.wrapper=document.createElement("div"),e(this.wrapper).addClass("select-wrapper "+this.options.classes),this.$el.before(e(this.wrapper)),this.wrapper.appendChild(this.el),this.el.disabled&&this.wrapper.classList.add("disabled"),this.$selectOptions=this.$el.children("option, optgroup"),this.dropdownOptions=document.createElement("ul"),this.dropdownOptions.id="select-options-"+M.guid(),e(this.dropdownOptions).addClass("dropdown-content select-dropdown "+(this.isMultiple?"multiple-select-dropdown":"")),this.$selectOptions.length&&this.$selectOptions.each((function(n){if(e(n).is("option")){var i=void 0;i=t.isMultiple?t._appendOptionWithIcon(t.$el,n,"multiple"):t._appendOptionWithIcon(t.$el,n),t._addOptionToValueDict(n,i)}else if(e(n).is("optgroup")){var r=e(n).children("option");e(t.dropdownOptions).append(e('<li class="optgroup"><span>'+n.getAttribute("label")+"</span></li>")[0]),r.each((function(e){var n=t._appendOptionWithIcon(t.$el,e,"optgroup-option");t._addOptionToValueDict(e,n)}))}})),this.$el.after(this.dropdownOptions),this.input=document.createElement("input"),e(this.input).addClass("select-dropdown dropdown-trigger"),this.input.setAttribute("type","text"),this.input.setAttribute("readonly","true"),this.input.setAttribute("data-target",this.dropdownOptions.id),this.el.disabled&&e(this.input).prop("disabled","true"),this.$el.before(this.input),this._setValueToInput();var n=e('<svg class="caret" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');if(this.$el.before(n[0]),!this.el.disabled){var i=e.extend({},this.options.dropdownOptions);i.onOpenEnd=function(n){var i=e(t.dropdownOptions).find(".selected").first();if(t.dropdown.isScrollable&&i.length){var r=i[0].getBoundingClientRect().top-t.dropdownOptions.getBoundingClientRect().top;r-=t.dropdownOptions.clientHeight/2,t.dropdownOptions.scrollTop=r}},this.isMultiple&&(i.closeOnClick=!1),this.dropdown=M.Dropdown.init(this.input,i)}this._setSelectedStates()}},{key:"_addOptionToValueDict",value:function(e,t){var n=Object.keys(this._valueDict).length,i=this.dropdownOptions.id+n,r={};t.id=i,r.el=e,r.optionEl=t,this._valueDict[i]=r}},{key:"_removeDropdown",value:function(){e(this.wrapper).find(".caret").remove(),e(this.input).remove(),e(this.dropdownOptions).remove(),e(this.wrapper).before(this.$el),e(this.wrapper).remove()}},{key:"_appendOptionWithIcon",value:function(t,n,i){var r=n.disabled?"disabled ":"",s="optgroup-option"===i?"optgroup-option ":"",o=this.isMultiple?'<label><input type="checkbox"'+r+'"/><span>'+n.innerHTML+"</span></label>":n.innerHTML,a=e("<li></li>"),c=e("<span></span>");c.html(o),a.addClass(r+" "+s),a.append(c);var u=n.getAttribute("data-icon");if(u){var l=e('<img alt="" src="'+u+'">');a.prepend(l)}return e(this.dropdownOptions).append(a[0]),a[0]}},{key:"_toggleEntryFromArray",value:function(t){var n=!this._keysSelected.hasOwnProperty(t),i=e(this._valueDict[t].optionEl);return n?this._keysSelected[t]=!0:delete this._keysSelected[t],i.toggleClass("selected",n),i.find('input[type="checkbox"]').prop("checked",n),i.prop("selected",n),n}},{key:"_setValueToInput",value:function(){var t=[],n=this.$el.find("option");if(n.each((function(n){if(e(n).prop("selected")){var i=e(n).text();t.push(i)}})),!t.length){var i=this.$el.find("option:disabled").eq(0);i.length&&""===i[0].value&&t.push(i.text())}this.input.value=t.join(", ")}},{key:"_setSelectedStates",value:function(){for(var t in this._keysSelected={},this._valueDict){var n=this._valueDict[t],i=e(n.el).prop("selected");e(n.optionEl).find('input[type="checkbox"]').prop("checked",i),i?(this._activateOption(e(this.dropdownOptions),e(n.optionEl)),this._keysSelected[t]=!0):e(n.optionEl).removeClass("selected")}}},{key:"_activateOption",value:function(t,n){if(n){this.isMultiple||t.find("li.selected").removeClass("selected");var i=e(n);i.addClass("selected")}}},{key:"getSelectedValues",value:function(){var e=[];for(var t in this._keysSelected)e.push(this._valueDict[t].el.value);return e}}],[{key:"init",value:function(e,t){return s(i.__proto__||Object.getPrototypeOf(i),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_FormSelect}},{key:"defaults",get:function(){return t}}]),i}(l);M.FormSelect=n,M.jQueryLoaded&&M.initializeJqueryWrapper(n,"formSelect","M_FormSelect")}(cash),function(e,t){"use strict";var n={},i=function(i){function r(t,n){u(this,r);var i=a(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,r,t,n));return i.el.M_Range=i,i.options=e.extend({},r.defaults,n),i._mousedown=!1,i._setupThumb(),i._setupEventHandlers(),i}return c(r,i),o(r,[{key:"destroy",value:function(){this._removeEventHandlers(),this._removeThumb(),this.el.M_Range=void 0}},{key:"_setupEventHandlers",value:function(){this._handleRangeChangeBound=this._handleRangeChange.bind(this),this._handleRangeMousedownTouchstartBound=this._handleRangeMousedownTouchstart.bind(this),this._handleRangeInputMousemoveTouchmoveBound=this._handleRangeInputMousemoveTouchmove.bind(this),this._handleRangeMouseupTouchendBound=this._handleRangeMouseupTouchend.bind(this),this._handleRangeBlurMouseoutTouchleaveBound=this._handleRangeBlurMouseoutTouchleave.bind(this),this.el.addEventListener("change",this._handleRangeChangeBound),this.el.addEventListener("mousedown",this._handleRangeMousedownTouchstartBound),this.el.addEventListener("touchstart",this._handleRangeMousedownTouchstartBound),this.el.addEventListener("input",this._handleRangeInputMousemoveTouchmoveBound),this.el.addEventListener("mousemove",this._handleRangeInputMousemoveTouchmoveBound),this.el.addEventListener("touchmove",this._handleRangeInputMousemoveTouchmoveBound),this.el.addEventListener("mouseup",this._handleRangeMouseupTouchendBound),this.el.addEventListener("touchend",this._handleRangeMouseupTouchendBound),this.el.addEventListener("blur",this._handleRangeBlurMouseoutTouchleaveBound),this.el.addEventListener("mouseout",this._handleRangeBlurMouseoutTouchleaveBound),this.el.addEventListener("touchleave",this._handleRangeBlurMouseoutTouchleaveBound)}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("change",this._handleRangeChangeBound),this.el.removeEventListener("mousedown",this._handleRangeMousedownTouchstartBound),this.el.removeEventListener("touchstart",this._handleRangeMousedownTouchstartBound),this.el.removeEventListener("input",this._handleRangeInputMousemoveTouchmoveBound),this.el.removeEventListener("mousemove",this._handleRangeInputMousemoveTouchmoveBound),this.el.removeEventListener("touchmove",this._handleRangeInputMousemoveTouchmoveBound),this.el.removeEventListener("mouseup",this._handleRangeMouseupTouchendBound),this.el.removeEventListener("touchend",this._handleRangeMouseupTouchendBound),this.el.removeEventListener("blur",this._handleRangeBlurMouseoutTouchleaveBound),this.el.removeEventListener("mouseout",this._handleRangeBlurMouseoutTouchleaveBound),this.el.removeEventListener("touchleave",this._handleRangeBlurMouseoutTouchleaveBound)}},{key:"_handleRangeChange",value:function(){e(this.value).html(this.$el.val()),e(this.thumb).hasClass("active")||this._showRangeBubble();var t=this._calcRangeOffset();e(this.thumb).addClass("active").css("left",t+"px")}},{key:"_handleRangeMousedownTouchstart",value:function(t){if(e(this.value).html(this.$el.val()),this._mousedown=!0,this.$el.addClass("active"),e(this.thumb).hasClass("active")||this._showRangeBubble(),"input"!==t.type){var n=this._calcRangeOffset();e(this.thumb).addClass("active").css("left",n+"px")}}},{key:"_handleRangeInputMousemoveTouchmove",value:function(){if(this._mousedown){e(this.thumb).hasClass("active")||this._showRangeBubble();var t=this._calcRangeOffset();e(this.thumb).addClass("active").css("left",t+"px"),e(this.value).html(this.$el.val())}}},{key:"_handleRangeMouseupTouchend",value:function(){this._mousedown=!1,this.$el.removeClass("active")}},{key:"_handleRangeBlurMouseoutTouchleave",value:function(){if(!this._mousedown){var n=parseInt(this.$el.css("padding-left")),i=7+n+"px";e(this.thumb).hasClass("active")&&(t.remove(this.thumb),t({targets:this.thumb,height:0,width:0,top:10,easing:"easeOutQuad",marginLeft:i,duration:100})),e(this.thumb).removeClass("active")}}},{key:"_setupThumb",value:function(){this.thumb=document.createElement("span"),this.value=document.createElement("span"),e(this.thumb).addClass("thumb"),e(this.value).addClass("value"),e(this.thumb).append(this.value),this.$el.after(this.thumb)}},{key:"_removeThumb",value:function(){e(this.thumb).remove()}},{key:"_showRangeBubble",value:function(){var n=parseInt(e(this.thumb).parent().css("padding-left")),i=-7+n+"px";t.remove(this.thumb),t({targets:this.thumb,height:30,width:30,top:-30,marginLeft:i,duration:300,easing:"easeOutQuint"})}},{key:"_calcRangeOffset",value:function(){var e=this.$el.width()-15,t=parseFloat(this.$el.attr("max"))||100,n=parseFloat(this.$el.attr("min"))||0,i=(parseFloat(this.$el.val())-n)/(t-n);return i*e}}],[{key:"init",value:function(e,t){return s(r.__proto__||Object.getPrototypeOf(r),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_Range}},{key:"defaults",get:function(){return n}}]),r}(l);M.Range=i,M.jQueryLoaded&&M.initializeJqueryWrapper(i,"range","M_Range"),i.init(e("input[type=range]"))}(cash,M.anime)}).call(this,n("c8ba"))},"4d64":function(e,t,n){var i=n("fc6a"),r=n("23cb"),s=n("07fa"),o=function(e){return function(t,n,o){var a,c=i(t),u=s(c),l=r(o,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},"4f60":function(e,t,n){"use strict";var i=n("7ded");n.d(t,"a",(function(){return i["a"]}));var r="firebase",s="9.5.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
i["a"].registerVersion(r,s,"app-compat")},5087:function(e,t,n){var i=n("da84"),r=n("68ee"),s=n("0d51"),o=i.TypeError;e.exports=function(e){if(r(e))return e;throw o(s(e)+" is not a constructor")}},"50c4":function(e,t,n){var i=n("5926"),r=Math.min;e.exports=function(e){return e>0?r(i(e),9007199254740991):0}},5692:function(e,t,n){var i=n("c430"),r=n("c6cd");(e.exports=function(e,t){return r[e]||(r[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.19.2",mode:i?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(e,t,n){var i=n("d066"),r=n("e330"),s=n("241c"),o=n("7418"),a=n("825a"),c=r([].concat);e.exports=i("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},"589b":function(e,t,n){"use strict";n.r(t),n.d(t,"SDK_VERSION",(function(){return Q})),n.d(t,"_DEFAULT_ENTRY_NAME",(function(){return P})),n.d(t,"_addComponent",(function(){return F})),n.d(t,"_addOrOverwriteComponent",(function(){return U})),n.d(t,"_apps",(function(){return $})),n.d(t,"_clearComponents",(function(){return W})),n.d(t,"_components",(function(){return B})),n.d(t,"_getProvider",(function(){return q})),n.d(t,"_registerComponent",(function(){return V})),n.d(t,"_removeServiceInstance",(function(){return H})),n.d(t,"deleteApp",(function(){return Z})),n.d(t,"getApp",(function(){return X})),n.d(t,"getApps",(function(){return J})),n.d(t,"initializeApp",(function(){return Y})),n.d(t,"onLog",(function(){return te})),n.d(t,"registerVersion",(function(){return ee})),n.d(t,"setLogLevel",(function(){return ne}));var i=n("22e5"),r=n("e691"),s=n("1fd5");n.d(t,"FirebaseError",(function(){return s["c"]}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const c="@firebase/app",u="0.7.9",l=new r["b"]("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",m="@firebase/app-check",v="@firebase/auth",g="@firebase/auth-compat",y="@firebase/database",_="@firebase/database-compat",w="@firebase/functions",b="@firebase/functions-compat",k="@firebase/installations",E="@firebase/installations-compat",I="@firebase/messaging",T="@firebase/messaging-compat",C="@firebase/performance",S="@firebase/performance-compat",O="@firebase/remote-config",A="@firebase/remote-config-compat",x="@firebase/storage",D="@firebase/storage-compat",L="@firebase/firestore",N="@firebase/firestore-compat",R="firebase",M="9.5.0",P="[DEFAULT]",j={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[m]:"fire-app-check",[p]:"fire-app-check-compat",[v]:"fire-auth",[g]:"fire-auth-compat",[y]:"fire-rtdb",[_]:"fire-rtdb-compat",[w]:"fire-fn",[b]:"fire-fn-compat",[k]:"fire-iid",[E]:"fire-iid-compat",[I]:"fire-fcm",[T]:"fire-fcm-compat",[C]:"fire-perf",[S]:"fire-perf-compat",[O]:"fire-rc",[A]:"fire-rc-compat",[x]:"fire-gcs",[D]:"fire-gcs-compat",[L]:"fire-fst",[N]:"fire-fst-compat","fire-js":"fire-js",[R]:"fire-js-all"},$=new Map,B=new Map;function F(e,t){try{e.container.addComponent(t)}catch(n){l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function U(e,t){e.container.addOrOverwriteComponent(t)}function V(e){const t=e.name;if(B.has(t))return l.debug(`There were multiple attempts to register component ${t}.`),!1;B.set(t,e);for(const n of $.values())F(n,e);return!0}function q(e,t){return e.container.getProvider(t)}function H(e,t,n=P){q(e,t).clearInstance(n)}function W(){B.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},K=new s["b"]("app","Firebase",z);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class G{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw K.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q=M;function Y(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:P,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!==typeof r||!r)throw K.create("bad-app-name",{appName:String(r)});const o=$.get(r);if(o){if(Object(s["h"])(e,o.options)&&Object(s["h"])(n,o.config))return o;throw K.create("duplicate-app",{appName:r})}const a=new i["b"](r);for(const i of B.values())a.addComponent(i);const c=new G(e,n,a);return $.set(r,c),c}function X(e=P){const t=$.get(e);if(!t)throw K.create("no-app",{appName:e});return t}function J(){return Array.from($.values())}async function Z(e){const t=e.name;$.has(t)&&($.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function ee(e,t,n){var r;let s=null!==(r=j[e])&&void 0!==r?r:e;n&&(s+="-"+n);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void l.warn(e.join(" "))}V(new i["a"](s+"-version",()=>({library:s,version:t}),"VERSION"))}function te(e,t){if(null!==e&&"function"!==typeof e)throw K.create("invalid-log-argument");Object(r["d"])(e,t)}function ne(e){Object(r["c"])(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e){V(new i["a"]("platform-logger",e=>new o(e),"PRIVATE")),ee(c,u,e),ee(c,u,"esm2017"),ee("fire-js","")}ie("")},5926:function(e,t){var n=Math.ceil,i=Math.floor;e.exports=function(e){var t=+e;return t!==t||0===t?0:(t>0?i:n)(t)}},5994:function(e,t,n){"use strict";(function(e){var t=n("7ded"),i=n("1f5a"),r=n("22e5"),s=n("1fd5"),o="@firebase/auth-compat",a="0.2.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c=1e3;function u(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function l(){return"http:"===u()||"https:"===u()}function h(e=Object(s["l"])()){return!("file:"!==u()&&"ionic:"!==u()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function d(){return Object(s["u"])()||Object(s["t"])()}function f(){return Object(s["q"])()&&11===(null===document||void 0===document?void 0:document.documentMode)}function p(e=Object(s["l"])()){return/Edge\/\d+/.test(e)}function m(e=Object(s["l"])()){return f()||p(e)}function v(){try{const e=self.localStorage,t=i["s"]();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!m()||Object(s["r"])()}catch(e){return g()&&Object(s["r"])()}return!1}function g(){return"undefined"!==typeof e&&"WorkerGlobalScope"in e&&"importScripts"in e}function y(){return(l()||Object(s["n"])()||h())&&!d()&&v()&&!g()}function _(){return h()&&"undefined"!==typeof document}async function w(){return!!_()&&new Promise(e=>{const t=setTimeout(()=>{e(!1)},c);document.addEventListener("deviceready",()=>{clearTimeout(t),e(!0)})})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={LOCAL:"local",NONE:"none",SESSION:"session"},k=i["p"],E="persistence";function I(e,t){k(Object.values(b).includes(t),e,"invalid-persistence-type"),Object(s["u"])()?k(t!==b.SESSION,e,"unsupported-persistence-type"):Object(s["t"])()?k(t===b.NONE,e,"unsupported-persistence-type"):g()?k(t===b.NONE||t===b.LOCAL&&Object(s["r"])(),e,"unsupported-persistence-type"):k(t===b.NONE||v(),e,"unsupported-persistence-type")}async function T(e){await e._initializationPromise;const t=S(),n=i["v"](E,e.config.apiKey,e.name);(null===t||void 0===t?void 0:t.sessionStorage)&&t.sessionStorage.setItem(n,e._getPersistence())}function C(e,t){const n=S();if(!(null===n||void 0===n?void 0:n.sessionStorage))return[];const r=i["v"](E,e,t),s=n.sessionStorage.getItem(r);switch(s){case b.NONE:return[i["L"]];case b.LOCAL:return[i["M"],i["A"]];case b.SESSION:return[i["A"]];default:return[]}}function S(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=i["p"];class A{constructor(){this.browserResolver=i["t"](i["z"]),this.cordovaResolver=i["t"](i["E"]),this.underlyingResolver=null,this._redirectPersistence=i["A"],this._completeRedirectFn=i["u"]}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,i)}async _openRedirect(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return _()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return O(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await w();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e){return e.unwrap()}function D(e){return e.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){return R(e)}function N(e,t){var n;const r=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===t.code){const n=t;n.resolver=new j(e,i["J"](e,t))}else if(r){const e=R(t),n=t;e&&(n.credential=e,n.tenantId=r.tenantId||void 0,n.email=r.email||void 0,n.phoneNumber=r.phoneNumber||void 0)}}function R(e){const{_tokenResponse:t}=e instanceof s["c"]?e.customData:e;if(!t)return null;if(!(e instanceof s["c"])&&"temporaryProof"in t&&"phoneNumber"in t)return i["i"].credentialFromResult(e);const n=t.providerId;if(!n||n===i["k"].PASSWORD)return null;let r;switch(n){case i["k"].GOOGLE:r=i["f"];break;case i["k"].FACEBOOK:r=i["d"];break;case i["k"].GITHUB:r=i["e"];break;case i["k"].TWITTER:r=i["o"];break;default:const{oauthIdToken:e,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=t;return s||o||e||a?a?n.startsWith("saml.")?i["m"]._create(n,a):i["g"]._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:e,accessToken:s}):new i["h"](n).credential({idToken:e,accessToken:s,rawNonce:c}):null}return e instanceof s["c"]?r.credentialFromError(e):r.credentialFromResult(e)}function M(e,t){return t.catch(t=>{throw t instanceof s["c"]&&N(e,t),t}).then(e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:L(e),additionalUserInfo:i["I"](e),user:$.getOrCreate(n)}})}async function P(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>M(e,n.confirm(t))}}class j{constructor(e,t){this.resolver=t,this.auth=D(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return M(x(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this._delegate=e,this.multiFactor=i["S"](e)}static getOrCreate(e){return $.USER_MAP.has(e)||$.USER_MAP.set(e,new $(e)),$.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return M(this.auth,i["O"](this._delegate,e))}async linkWithPhoneNumber(e,t){return P(this.auth,i["P"](this._delegate,e,t))}async linkWithPopup(e){return M(this.auth,i["Q"](this._delegate,e,A))}async linkWithRedirect(e){return await T(i["q"](this.auth)),i["R"](this._delegate,e,A)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return M(this.auth,i["T"](this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return P(this.auth,i["U"](this._delegate,e,t))}reauthenticateWithPopup(e){return M(this.auth,i["V"](this._delegate,e,A))}async reauthenticateWithRedirect(e){return await T(i["q"](this.auth)),i["W"](this._delegate,e,A)}sendEmailVerification(e){return i["X"](this._delegate,e)}async unlink(e){return await i["ib"](this._delegate,e),this}updateEmail(e){return i["jb"](this._delegate,e)}updatePassword(e){return i["kb"](this._delegate,e)}updatePhoneNumber(e){return i["lb"](this._delegate,e)}updateProfile(e){return i["mb"](this._delegate,e)}verifyBeforeUpdateEmail(e,t){return i["nb"](this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}$.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const B=i["p"];class F{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;B(n,"invalid-api-key",{appName:e.name});let r=[i["L"]];if("undefined"!==typeof window){r=C(n,e.name);for(const e of[i["M"],i["y"],i["A"]])r.includes(e)||r.push(e)}B(n,"invalid-api-key",{appName:e.name});const s="undefined"!==typeof window?A:void 0;this._delegate=t.initialize({options:{persistence:r,popupRedirectResolver:s}}),this._delegate._updateErrorMap(i["G"]),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?$.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){i["D"](this._delegate,e,t)}applyActionCode(e){return i["x"](this._delegate,e)}checkActionCode(e){return i["B"](this._delegate,e)}confirmPasswordReset(e,t){return i["C"](this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return M(this._delegate,i["F"](this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return i["H"](this._delegate,e)}isSignInWithEmailLink(e){return i["N"](this._delegate,e)}async getRedirectResult(){B(y(),this._delegate,"operation-not-supported-in-this-environment");const e=await i["K"](this._delegate,A);return e?M(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){i["w"](this._delegate,e)}onAuthStateChanged(e,t,n){const{next:i,error:r,complete:s}=U(e,t,n);return this._delegate.onAuthStateChanged(i,r,s)}onIdTokenChanged(e,t,n){const{next:i,error:r,complete:s}=U(e,t,n);return this._delegate.onIdTokenChanged(i,r,s)}sendSignInLinkToEmail(e,t){return i["Z"](this._delegate,e,t)}sendPasswordResetEmail(e,t){return i["Y"](this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(I(this._delegate,e),e){case b.SESSION:t=i["A"];break;case b.LOCAL:const e=await i["t"](i["M"])._isAvailable();t=e?i["M"]:i["y"];break;case b.NONE:t=i["L"];break;default:return i["r"]("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return M(this._delegate,i["ab"](this._delegate))}signInWithCredential(e){return M(this._delegate,i["bb"](this._delegate,e))}signInWithCustomToken(e){return M(this._delegate,i["cb"](this._delegate,e))}signInWithEmailAndPassword(e,t){return M(this._delegate,i["db"](this._delegate,e,t))}signInWithEmailLink(e,t){return M(this._delegate,i["eb"](this._delegate,e,t))}signInWithPhoneNumber(e,t){return P(this._delegate,i["fb"](this._delegate,e,t))}async signInWithPopup(e){return B(y(),this._delegate,"operation-not-supported-in-this-environment"),M(this._delegate,i["gb"](this._delegate,e,A))}async signInWithRedirect(e){return B(y(),this._delegate,"operation-not-supported-in-this-environment"),await T(this._delegate),i["hb"](this._delegate,e,A)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return i["ob"](this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function U(e,t,n){let i=e;"function"!==typeof e&&({next:i,error:t,complete:n}=e);const r=i,s=e=>r(e&&$.getOrCreate(e));return{next:s,error:t,complete:n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */F.Persistence=b;class V{constructor(){this.providerId="phone",this._delegate=new i["i"](x(t["a"].auth()))}static credential(e,t){return i["i"].credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}V.PHONE_SIGN_IN_METHOD=i["i"].PHONE_SIGN_IN_METHOD,V.PROVIDER_ID=i["i"].PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const q=i["p"];class H{constructor(e,n,r=t["a"].app()){var s;q(null===(s=r.options)||void 0===s?void 0:s.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new i["l"](e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W="auth-compat";function z(e){e.INTERNAL.registerComponent(new r["a"](W,e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new F(t,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:i["a"].EMAIL_SIGNIN,PASSWORD_RESET:i["a"].PASSWORD_RESET,RECOVER_EMAIL:i["a"].RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:i["a"].REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:i["a"].VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:i["a"].VERIFY_EMAIL}},EmailAuthProvider:i["c"],FacebookAuthProvider:i["d"],GithubAuthProvider:i["e"],GoogleAuthProvider:i["f"],OAuthProvider:i["h"],SAMLAuthProvider:i["n"],PhoneAuthProvider:V,PhoneMultiFactorGenerator:i["j"],RecaptchaVerifier:H,TwitterAuthProvider:i["o"],Auth:F,AuthCredential:i["b"],Error:s["c"]}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(o,a)}z(t["a"])}).call(this,n("c8ba"))},"59ed":function(e,t,n){var i=n("da84"),r=n("1626"),s=n("0d51"),o=i.TypeError;e.exports=function(e){if(r(e))return e;throw o(s(e)+" is not a function")}},"5c6c":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"5e77":function(e,t,n){var i=n("83ab"),r=n("1a2d"),s=Function.prototype,o=i&&Object.getOwnPropertyDescriptor,a=r(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!i||i&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},"605d":function(e,t,n){var i=n("c6b6"),r=n("da84");e.exports="process"==i(r.process)},6069:function(e,t){e.exports="object"==typeof window},"60da":function(e,t,n){"use strict";var i=n("83ab"),r=n("e330"),s=n("c65b"),o=n("d039"),a=n("df75"),c=n("7418"),u=n("d1e7"),l=n("7b0b"),h=n("44ad"),d=Object.assign,f=Object.defineProperty,p=r([].concat);e.exports=!d||o((function(){if(i&&1!==d({b:1},d(f({},"a",{enumerable:!0,get:function(){f(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach((function(e){t[e]=e})),7!=d({},e)[n]||a(d({},t)).join("")!=r}))?function(e,t){var n=l(e),r=arguments.length,o=1,d=c.f,f=u.f;while(r>o){var m,v=h(arguments[o++]),g=d?p(a(v),d(v)):a(v),y=g.length,_=0;while(y>_)m=g[_++],i&&!s(f,v,m)||(n[m]=v[m])}return n}:d},"619b":function(e,t,n){},"68ee":function(e,t,n){var i=n("e330"),r=n("d039"),s=n("1626"),o=n("f5df"),a=n("d066"),c=n("8925"),u=function(){},l=[],h=a("Reflect","construct"),d=/^\s*(?:class|function)\b/,f=i(d.exec),p=!d.exec(u),m=function(e){if(!s(e))return!1;try{return h(u,l,e),!0}catch(t){return!1}},v=function(e){if(!s(e))return!1;switch(o(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return p||!!f(d,c(e))};e.exports=!h||r((function(){var e;return m(m.call)||!m(Object)||!m((function(){e=!0}))||e}))?v:m},"69f3":function(e,t,n){var i,r,s,o=n("7f9a"),a=n("da84"),c=n("e330"),u=n("861d"),l=n("9112"),h=n("1a2d"),d=n("c6cd"),f=n("f772"),p=n("d012"),m="Object already initialized",v=a.TypeError,g=a.WeakMap,y=function(e){return s(e)?r(e):i(e,{})},_=function(e){return function(t){var n;if(!u(t)||(n=r(t)).type!==e)throw v("Incompatible receiver, "+e+" required");return n}};if(o||d.state){var w=d.state||(d.state=new g),b=c(w.get),k=c(w.has),E=c(w.set);i=function(e,t){if(k(w,e))throw new v(m);return t.facade=e,E(w,e,t),t},r=function(e){return b(w,e)||{}},s=function(e){return k(w,e)}}else{var I=f("state");p[I]=!0,i=function(e,t){if(h(e,I))throw new v(m);return t.facade=e,l(e,I,t),t},r=function(e){return h(e,I)?e[I]:{}},s=function(e){return h(e,I)}}e.exports={set:i,get:r,has:s,enforce:y,getterFor:_}},"6eeb":function(e,t,n){var i=n("da84"),r=n("1626"),s=n("1a2d"),o=n("9112"),a=n("ce4e"),c=n("8925"),u=n("69f3"),l=n("5e77").CONFIGURABLE,h=u.get,d=u.enforce,f=String(String).split("String");(e.exports=function(e,t,n,c){var u,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,m=!!c&&!!c.noTargetGet,v=c&&void 0!==c.name?c.name:t;r(n)&&("Symbol("===String(v).slice(0,7)&&(v="["+String(v).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!s(n,"name")||l&&n.name!==v)&&o(n,"name",v),u=d(n),u.source||(u.source=f.join("string"==typeof v?v:""))),e!==i?(h?!m&&e[t]&&(p=!0):delete e[t],p?e[t]=n:o(e,t,n)):p?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return r(this)&&h(this).source||c(this)}))},7418:function(e,t){t.f=Object.getOwnPropertySymbols},7839:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(e,t,n){var i=n("da84"),r=n("1d80"),s=i.Object;e.exports=function(e){return s(r(e))}},"7c73":function(e,t,n){var i,r=n("825a"),s=n("37e8"),o=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),h=">",d="<",f="prototype",p="script",m=l("IE_PROTO"),v=function(){},g=function(e){return d+p+h+e+d+"/"+p+h},y=function(e){e.write(g("")),e.close();var t=e.parentWindow.Object;return e=null,t},_=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(g("document.F=Object")),e.close(),e.F},w=function(){try{i=new ActiveXObject("htmlfile")}catch(t){}w="undefined"!=typeof document?document.domain&&i?y(i):_():y(i);var e=o.length;while(e--)delete w[f][o[e]];return w()};a[m]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(v[f]=r(e),n=new v,v[f]=null,n[m]=e):n=w(),void 0===t?n:s(n,t)}},"7dd0":function(e,t,n){"use strict";var i=n("23e7"),r=n("c65b"),s=n("c430"),o=n("5e77"),a=n("1626"),c=n("9ed3"),u=n("e163"),l=n("d2bb"),h=n("d44e"),d=n("9112"),f=n("6eeb"),p=n("b622"),m=n("3f8c"),v=n("ae93"),g=o.PROPER,y=o.CONFIGURABLE,_=v.IteratorPrototype,w=v.BUGGY_SAFARI_ITERATORS,b=p("iterator"),k="keys",E="values",I="entries",T=function(){return this};e.exports=function(e,t,n,o,p,v,C){c(n,t,o);var S,O,A,x=function(e){if(e===p&&M)return M;if(!w&&e in N)return N[e];switch(e){case k:return function(){return new n(this,e)};case E:return function(){return new n(this,e)};case I:return function(){return new n(this,e)}}return function(){return new n(this)}},D=t+" Iterator",L=!1,N=e.prototype,R=N[b]||N["@@iterator"]||p&&N[p],M=!w&&R||x(p),P="Array"==t&&N.entries||R;if(P&&(S=u(P.call(new e)),S!==Object.prototype&&S.next&&(s||u(S)===_||(l?l(S,_):a(S[b])||f(S,b,T)),h(S,D,!0,!0),s&&(m[D]=T))),g&&p==E&&R&&R.name!==E&&(!s&&y?d(N,"name",E):(L=!0,M=function(){return r(R,this)})),p)if(O={values:x(E),keys:v?M:x(k),entries:x(I)},C)for(A in O)(w||L||!(A in N))&&f(N,A,O[A]);else i({target:t,proto:!0,forced:w||L},O);return s&&!C||N[b]===M||f(N,b,M,{name:p}),m[t]=M,O}},"7ded":function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var i=n("1fd5"),r=n("22e5"),s=n("589b"),o=n("e691");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,Object(s["_addComponent"])(e,new r["a"]("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(s["deleteApp"])(this._delegate)))}_getService(e,t=s["_DEFAULT_ENTRY_NAME"]){var n;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return i.isInitialized()||"EXPLICIT"!==(null===(n=i.getComponent())||void 0===n?void 0:n.instantiationMode)||i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=s["_DEFAULT_ENTRY_NAME"]){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Object(s["_addComponent"])(this._delegate,e)}_addOrOverwriteComponent(e){Object(s["_addOrOverwriteComponent"])(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new i["b"]("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(e){const t={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s["registerVersion"],setLogLevel:s["setLogLevel"],onLog:s["onLog"],apps:null,SDK_VERSION:s["SDK_VERSION"],INTERNAL:{registerComponent:l,removeApp:r,useAsService:h,modularAPIs:s}};function r(e){delete t[e]}function o(e){if(e=e||s["_DEFAULT_ENTRY_NAME"],!Object(i["e"])(t,e))throw u.create("no-app",{appName:e});return t[e]}function a(r,o={}){const a=s["initializeApp"](r,o);if(Object(i["e"])(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map(e=>t[e])}function l(t){const r=t.name,a=r.replace("-compat","");if(s["_registerComponent"](t)&&"PUBLIC"===t.type){const s=(e=o())=>{if("function"!==typeof e[a])throw u.create("invalid-app-argument",{appName:r});return e[a]()};void 0!==t.serviceProps&&Object(i["i"])(s,t.serviceProps),n[a]=s,e.prototype[a]=function(...e){const n=this._getService.bind(this,r);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const e=l(a);function t(t){Object(i["i"])(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:i["g"],ErrorFactory:i["b"],deepExtend:i["i"]}),e}const d=h(),f=new o["b"]("@firebase/app-compat"),p="@firebase/app-compat",m="0.1.10";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function v(e){Object(s["registerVersion"])(p,m,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Object(i["m"])()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const g=d;v()},"7f9a":function(e,t,n){var i=n("da84"),r=n("1626"),s=n("8925"),o=i.WeakMap;e.exports=r(o)&&/native code/.test(s(o))},"825a":function(e,t,n){var i=n("da84"),r=n("861d"),s=i.String,o=i.TypeError;e.exports=function(e){if(r(e))return e;throw o(s(e)+" is not an object")}},8266:function(e,t,n){},"83ab":function(e,t,n){var i=n("d039");e.exports=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(e,t,n){var i=n("1626");e.exports=function(e){return"object"==typeof e?null!==e:i(e)}},8925:function(e,t,n){var i=n("e330"),r=n("1626"),s=n("c6cd"),o=i(Function.toString);r(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},"8c4f":function(e,t,n){"use strict";
/*!
  * vue-router v3.5.3
  * (c) 2021 Evan You
  * @license MIT
  */function i(e,t){for(var n in t)e[n]=t[n];return e}var r=/[!'()*]/g,s=function(e){return"%"+e.charCodeAt(0).toString(16)},o=/%2C/g,a=function(e){return encodeURIComponent(e).replace(r,s).replace(o,",")};function c(e){try{return decodeURIComponent(e)}catch(t){0}return e}function u(e,t,n){void 0===t&&(t={});var i,r=n||h;try{i=r(e||"")}catch(a){i={}}for(var s in t){var o=t[s];i[s]=Array.isArray(o)?o.map(l):l(o)}return i}var l=function(e){return null==e||"object"===typeof e?e:String(e)};function h(e){var t={};return e=e.trim().replace(/^(\?|#|&)/,""),e?(e.split("&").forEach((function(e){var n=e.replace(/\+/g," ").split("="),i=c(n.shift()),r=n.length>0?c(n.join("=")):null;void 0===t[i]?t[i]=r:Array.isArray(t[i])?t[i].push(r):t[i]=[t[i],r]})),t):t}function d(e){var t=e?Object.keys(e).map((function(t){var n=e[t];if(void 0===n)return"";if(null===n)return a(t);if(Array.isArray(n)){var i=[];return n.forEach((function(e){void 0!==e&&(null===e?i.push(a(t)):i.push(a(t)+"="+a(e)))})),i.join("&")}return a(t)+"="+a(n)})).filter((function(e){return e.length>0})).join("&"):null;return t?"?"+t:""}var f=/\/?$/;function p(e,t,n,i){var r=i&&i.options.stringifyQuery,s=t.query||{};try{s=m(s)}catch(a){}var o={name:t.name||e&&e.name,meta:e&&e.meta||{},path:t.path||"/",hash:t.hash||"",query:s,params:t.params||{},fullPath:y(t,r),matched:e?g(e):[]};return n&&(o.redirectedFrom=y(n,r)),Object.freeze(o)}function m(e){if(Array.isArray(e))return e.map(m);if(e&&"object"===typeof e){var t={};for(var n in e)t[n]=m(e[n]);return t}return e}var v=p(null,{path:"/"});function g(e){var t=[];while(e)t.unshift(e),e=e.parent;return t}function y(e,t){var n=e.path,i=e.query;void 0===i&&(i={});var r=e.hash;void 0===r&&(r="");var s=t||d;return(n||"/")+s(i)+r}function _(e,t,n){return t===v?e===t:!!t&&(e.path&&t.path?e.path.replace(f,"")===t.path.replace(f,"")&&(n||e.hash===t.hash&&w(e.query,t.query)):!(!e.name||!t.name)&&(e.name===t.name&&(n||e.hash===t.hash&&w(e.query,t.query)&&w(e.params,t.params))))}function w(e,t){if(void 0===e&&(e={}),void 0===t&&(t={}),!e||!t)return e===t;var n=Object.keys(e).sort(),i=Object.keys(t).sort();return n.length===i.length&&n.every((function(n,r){var s=e[n],o=i[r];if(o!==n)return!1;var a=t[n];return null==s||null==a?s===a:"object"===typeof s&&"object"===typeof a?w(s,a):String(s)===String(a)}))}function b(e,t){return 0===e.path.replace(f,"/").indexOf(t.path.replace(f,"/"))&&(!t.hash||e.hash===t.hash)&&k(e.query,t.query)}function k(e,t){for(var n in t)if(!(n in e))return!1;return!0}function E(e){for(var t=0;t<e.matched.length;t++){var n=e.matched[t];for(var i in n.instances){var r=n.instances[i],s=n.enteredCbs[i];if(r&&s){delete n.enteredCbs[i];for(var o=0;o<s.length;o++)r._isBeingDestroyed||s[o](r)}}}}var I={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(e,t){var n=t.props,r=t.children,s=t.parent,o=t.data;o.routerView=!0;var a=s.$createElement,c=n.name,u=s.$route,l=s._routerViewCache||(s._routerViewCache={}),h=0,d=!1;while(s&&s._routerRoot!==s){var f=s.$vnode?s.$vnode.data:{};f.routerView&&h++,f.keepAlive&&s._directInactive&&s._inactive&&(d=!0),s=s.$parent}if(o.routerViewDepth=h,d){var p=l[c],m=p&&p.component;return m?(p.configProps&&T(m,o,p.route,p.configProps),a(m,o,r)):a()}var v=u.matched[h],g=v&&v.components[c];if(!v||!g)return l[c]=null,a();l[c]={component:g},o.registerRouteInstance=function(e,t){var n=v.instances[c];(t&&n!==e||!t&&n===e)&&(v.instances[c]=t)},(o.hook||(o.hook={})).prepatch=function(e,t){v.instances[c]=t.componentInstance},o.hook.init=function(e){e.data.keepAlive&&e.componentInstance&&e.componentInstance!==v.instances[c]&&(v.instances[c]=e.componentInstance),E(u)};var y=v.props&&v.props[c];return y&&(i(l[c],{route:u,configProps:y}),T(g,o,u,y)),a(g,o,r)}};function T(e,t,n,r){var s=t.props=C(n,r);if(s){s=t.props=i({},s);var o=t.attrs=t.attrs||{};for(var a in s)e.props&&a in e.props||(o[a]=s[a],delete s[a])}}function C(e,t){switch(typeof t){case"undefined":return;case"object":return t;case"function":return t(e);case"boolean":return t?e.params:void 0;default:0}}function S(e,t,n){var i=e.charAt(0);if("/"===i)return e;if("?"===i||"#"===i)return t+e;var r=t.split("/");n&&r[r.length-1]||r.pop();for(var s=e.replace(/^\//,"").split("/"),o=0;o<s.length;o++){var a=s[o];".."===a?r.pop():"."!==a&&r.push(a)}return""!==r[0]&&r.unshift(""),r.join("/")}function O(e){var t="",n="",i=e.indexOf("#");i>=0&&(t=e.slice(i),e=e.slice(0,i));var r=e.indexOf("?");return r>=0&&(n=e.slice(r+1),e=e.slice(0,r)),{path:e,query:n,hash:t}}function A(e){return e.replace(/\/+/g,"/")}var x=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)},D=Y,L=j,N=$,R=U,M=Q,P=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function j(e,t){var n,i=[],r=0,s=0,o="",a=t&&t.delimiter||"/";while(null!=(n=P.exec(e))){var c=n[0],u=n[1],l=n.index;if(o+=e.slice(s,l),s=l+c.length,u)o+=u[1];else{var h=e[s],d=n[2],f=n[3],p=n[4],m=n[5],v=n[6],g=n[7];o&&(i.push(o),o="");var y=null!=d&&null!=h&&h!==d,_="+"===v||"*"===v,w="?"===v||"*"===v,b=n[2]||a,k=p||m;i.push({name:f||r++,prefix:d||"",delimiter:b,optional:w,repeat:_,partial:y,asterisk:!!g,pattern:k?q(k):g?".*":"[^"+V(b)+"]+?"})}}return s<e.length&&(o+=e.substr(s)),o&&i.push(o),i}function $(e,t){return U(j(e,t),t)}function B(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function F(e){return encodeURI(e).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function U(e,t){for(var n=new Array(e.length),i=0;i<e.length;i++)"object"===typeof e[i]&&(n[i]=new RegExp("^(?:"+e[i].pattern+")$",W(t)));return function(t,i){for(var r="",s=t||{},o=i||{},a=o.pretty?B:encodeURIComponent,c=0;c<e.length;c++){var u=e[c];if("string"!==typeof u){var l,h=s[u.name];if(null==h){if(u.optional){u.partial&&(r+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(x(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(l=a(h[d]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");r+=(0===d?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?F(h):a(h),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');r+=u.prefix+l}}else r+=u}return r}}function V(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function q(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function H(e,t){return e.keys=t,e}function W(e){return e&&e.sensitive?"":"i"}function z(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var i=0;i<n.length;i++)t.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return H(e,t)}function K(e,t,n){for(var i=[],r=0;r<e.length;r++)i.push(Y(e[r],t,n).source);var s=new RegExp("(?:"+i.join("|")+")",W(n));return H(s,t)}function G(e,t,n){return Q(j(e,n),t,n)}function Q(e,t,n){x(t)||(n=t||n,t=[]),n=n||{};for(var i=n.strict,r=!1!==n.end,s="",o=0;o<e.length;o++){var a=e[o];if("string"===typeof a)s+=V(a);else{var c=V(a.prefix),u="(?:"+a.pattern+")";t.push(a),a.repeat&&(u+="(?:"+c+u+")*"),u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",s+=u}}var l=V(n.delimiter||"/"),h=s.slice(-l.length)===l;return i||(s=(h?s.slice(0,-l.length):s)+"(?:"+l+"(?=$))?"),s+=r?"$":i&&h?"":"(?="+l+"|$)",H(new RegExp("^"+s,W(n)),t)}function Y(e,t,n){return x(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?z(e,t):x(e)?K(e,t,n):G(e,t,n)}D.parse=L,D.compile=N,D.tokensToFunction=R,D.tokensToRegExp=M;var X=Object.create(null);function J(e,t,n){t=t||{};try{var i=X[e]||(X[e]=D.compile(e));return"string"===typeof t.pathMatch&&(t[0]=t.pathMatch),i(t,{pretty:!0})}catch(r){return""}finally{delete t[0]}}function Z(e,t,n,r){var s="string"===typeof e?{path:e}:e;if(s._normalized)return s;if(s.name){s=i({},e);var o=s.params;return o&&"object"===typeof o&&(s.params=i({},o)),s}if(!s.path&&s.params&&t){s=i({},s),s._normalized=!0;var a=i(i({},t.params),s.params);if(t.name)s.name=t.name,s.params=a;else if(t.matched.length){var c=t.matched[t.matched.length-1].path;s.path=J(c,a,"path "+t.path)}else 0;return s}var l=O(s.path||""),h=t&&t.path||"/",d=l.path?S(l.path,h,n||s.append):h,f=u(l.query,s.query,r&&r.options.parseQuery),p=s.hash||l.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:d,query:f,hash:p}}var ee,te=[String,Object],ne=[String,Array],ie=function(){},re={name:"RouterLink",props:{to:{type:te,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:ne,default:"click"}},render:function(e){var t=this,n=this.$router,r=this.$route,s=n.resolve(this.to,r,this.append),o=s.location,a=s.route,c=s.href,u={},l=n.options.linkActiveClass,h=n.options.linkExactActiveClass,d=null==l?"router-link-active":l,f=null==h?"router-link-exact-active":h,m=null==this.activeClass?d:this.activeClass,v=null==this.exactActiveClass?f:this.exactActiveClass,g=a.redirectedFrom?p(null,Z(a.redirectedFrom),null,n):a;u[v]=_(r,g,this.exactPath),u[m]=this.exact||this.exactPath?u[v]:b(r,g);var y=u[v]?this.ariaCurrentValue:null,w=function(e){se(e)&&(t.replace?n.replace(o,ie):n.push(o,ie))},k={click:se};Array.isArray(this.event)?this.event.forEach((function(e){k[e]=w})):k[this.event]=w;var E={class:u},I=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:w,isActive:u[m],isExactActive:u[v]});if(I){if(1===I.length)return I[0];if(I.length>1||!I.length)return 0===I.length?e():e("span",{},I)}if("a"===this.tag)E.on=k,E.attrs={href:c,"aria-current":y};else{var T=oe(this.$slots.default);if(T){T.isStatic=!1;var C=T.data=i({},T.data);for(var S in C.on=C.on||{},C.on){var O=C.on[S];S in k&&(C.on[S]=Array.isArray(O)?O:[O])}for(var A in k)A in C.on?C.on[A].push(k[A]):C.on[A]=w;var x=T.data.attrs=i({},T.data.attrs);x.href=c,x["aria-current"]=y}else E.on=k}return e(this.tag,E,this.$slots.default)}};function se(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){var t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function oe(e){if(e)for(var t,n=0;n<e.length;n++){if(t=e[n],"a"===t.tag)return t;if(t.children&&(t=oe(t.children)))return t}}function ae(e){if(!ae.installed||ee!==e){ae.installed=!0,ee=e;var t=function(e){return void 0!==e},n=function(e,n){var i=e.$options._parentVnode;t(i)&&t(i=i.data)&&t(i=i.registerRouteInstance)&&i(e,n)};e.mixin({beforeCreate:function(){t(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",I),e.component("RouterLink",re);var i=e.config.optionMergeStrategies;i.beforeRouteEnter=i.beforeRouteLeave=i.beforeRouteUpdate=i.created}}var ce="undefined"!==typeof window;function ue(e,t,n,i,r){var s=t||[],o=n||Object.create(null),a=i||Object.create(null);e.forEach((function(e){le(s,o,a,e,r)}));for(var c=0,u=s.length;c<u;c++)"*"===s[c]&&(s.push(s.splice(c,1)[0]),u--,c--);return{pathList:s,pathMap:o,nameMap:a}}function le(e,t,n,i,r,s){var o=i.path,a=i.name;var c=i.pathToRegexpOptions||{},u=de(o,r,c.strict);"boolean"===typeof i.caseSensitive&&(c.sensitive=i.caseSensitive);var l={path:u,regex:he(u,c),components:i.components||{default:i.component},alias:i.alias?"string"===typeof i.alias?[i.alias]:i.alias:[],instances:{},enteredCbs:{},name:a,parent:r,matchAs:s,redirect:i.redirect,beforeEnter:i.beforeEnter,meta:i.meta||{},props:null==i.props?{}:i.components?i.props:{default:i.props}};if(i.children&&i.children.forEach((function(i){var r=s?A(s+"/"+i.path):void 0;le(e,t,n,i,l,r)})),t[l.path]||(e.push(l.path),t[l.path]=l),void 0!==i.alias)for(var h=Array.isArray(i.alias)?i.alias:[i.alias],d=0;d<h.length;++d){var f=h[d];0;var p={path:f,children:i.children};le(e,t,n,p,r,l.path||"/")}a&&(n[a]||(n[a]=l))}function he(e,t){var n=D(e,[],t);return n}function de(e,t,n){return n||(e=e.replace(/\/$/,"")),"/"===e[0]||null==t?e:A(t.path+"/"+e)}function fe(e,t){var n=ue(e),i=n.pathList,r=n.pathMap,s=n.nameMap;function o(e){ue(e,i,r,s)}function a(e,t){var n="object"!==typeof e?s[e]:void 0;ue([t||e],i,r,s,n),n&&n.alias.length&&ue(n.alias.map((function(e){return{path:e,children:[t]}})),i,r,s,n)}function c(){return i.map((function(e){return r[e]}))}function u(e,n,o){var a=Z(e,n,!1,t),c=a.name;if(c){var u=s[c];if(!u)return d(null,a);var l=u.regex.keys.filter((function(e){return!e.optional})).map((function(e){return e.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&l.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=J(u.path,a.params,'named route "'+c+'"'),d(u,a,o)}if(a.path){a.params={};for(var f=0;f<i.length;f++){var p=i[f],m=r[p];if(pe(m.regex,a.path,a.params))return d(m,a,o)}}return d(null,a)}function l(e,n){var i=e.redirect,r="function"===typeof i?i(p(e,n,null,t)):i;if("string"===typeof r&&(r={path:r}),!r||"object"!==typeof r)return d(null,n);var o=r,a=o.name,c=o.path,l=n.query,h=n.hash,f=n.params;if(l=o.hasOwnProperty("query")?o.query:l,h=o.hasOwnProperty("hash")?o.hash:h,f=o.hasOwnProperty("params")?o.params:f,a){s[a];return u({_normalized:!0,name:a,query:l,hash:h,params:f},void 0,n)}if(c){var m=me(c,e),v=J(m,f,'redirect route with path "'+m+'"');return u({_normalized:!0,path:v,query:l,hash:h},void 0,n)}return d(null,n)}function h(e,t,n){var i=J(n,t.params,'aliased route with path "'+n+'"'),r=u({_normalized:!0,path:i});if(r){var s=r.matched,o=s[s.length-1];return t.params=r.params,d(o,t)}return d(null,t)}function d(e,n,i){return e&&e.redirect?l(e,i||n):e&&e.matchAs?h(e,n,e.matchAs):p(e,n,i,t)}return{match:u,addRoute:a,getRoutes:c,addRoutes:o}}function pe(e,t,n){var i=t.match(e);if(!i)return!1;if(!n)return!0;for(var r=1,s=i.length;r<s;++r){var o=e.keys[r-1];o&&(n[o.name||"pathMatch"]="string"===typeof i[r]?c(i[r]):i[r])}return!0}function me(e,t){return S(e,t.parent?t.parent.path:"/",!0)}var ve=ce&&window.performance&&window.performance.now?window.performance:Date;function ge(){return ve.now().toFixed(3)}var ye=ge();function _e(){return ye}function we(e){return ye=e}var be=Object.create(null);function ke(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var e=window.location.protocol+"//"+window.location.host,t=window.location.href.replace(e,""),n=i({},window.history.state);return n.key=_e(),window.history.replaceState(n,"",t),window.addEventListener("popstate",Te),function(){window.removeEventListener("popstate",Te)}}function Ee(e,t,n,i){if(e.app){var r=e.options.scrollBehavior;r&&e.app.$nextTick((function(){var s=Ce(),o=r.call(e,t,n,i?s:null);o&&("function"===typeof o.then?o.then((function(e){Ne(e,s)})).catch((function(e){0})):Ne(o,s))}))}}function Ie(){var e=_e();e&&(be[e]={x:window.pageXOffset,y:window.pageYOffset})}function Te(e){Ie(),e.state&&e.state.key&&we(e.state.key)}function Ce(){var e=_e();if(e)return be[e]}function Se(e,t){var n=document.documentElement,i=n.getBoundingClientRect(),r=e.getBoundingClientRect();return{x:r.left-i.left-t.x,y:r.top-i.top-t.y}}function Oe(e){return De(e.x)||De(e.y)}function Ae(e){return{x:De(e.x)?e.x:window.pageXOffset,y:De(e.y)?e.y:window.pageYOffset}}function xe(e){return{x:De(e.x)?e.x:0,y:De(e.y)?e.y:0}}function De(e){return"number"===typeof e}var Le=/^#\d/;function Ne(e,t){var n="object"===typeof e;if(n&&"string"===typeof e.selector){var i=Le.test(e.selector)?document.getElementById(e.selector.slice(1)):document.querySelector(e.selector);if(i){var r=e.offset&&"object"===typeof e.offset?e.offset:{};r=xe(r),t=Se(i,r)}else Oe(e)&&(t=Ae(e))}else n&&Oe(e)&&(t=Ae(e));t&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:t.x,top:t.y,behavior:e.behavior}):window.scrollTo(t.x,t.y))}var Re=ce&&function(){var e=window.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Me(e,t){Ie();var n=window.history;try{if(t){var r=i({},n.state);r.key=_e(),n.replaceState(r,"",e)}else n.pushState({key:we(ge())},"",e)}catch(s){window.location[t?"replace":"assign"](e)}}function Pe(e){Me(e,!0)}function je(e,t,n){var i=function(r){r>=e.length?n():e[r]?t(e[r],(function(){i(r+1)})):i(r+1)};i(0)}var $e={redirected:2,aborted:4,cancelled:8,duplicated:16};function Be(e,t){return qe(e,t,$e.redirected,'Redirected when going from "'+e.fullPath+'" to "'+We(t)+'" via a navigation guard.')}function Fe(e,t){var n=qe(e,t,$e.duplicated,'Avoided redundant navigation to current location: "'+e.fullPath+'".');return n.name="NavigationDuplicated",n}function Ue(e,t){return qe(e,t,$e.cancelled,'Navigation cancelled from "'+e.fullPath+'" to "'+t.fullPath+'" with a new navigation.')}function Ve(e,t){return qe(e,t,$e.aborted,'Navigation aborted from "'+e.fullPath+'" to "'+t.fullPath+'" via a navigation guard.')}function qe(e,t,n,i){var r=new Error(i);return r._isRouter=!0,r.from=e,r.to=t,r.type=n,r}var He=["params","query","hash"];function We(e){if("string"===typeof e)return e;if("path"in e)return e.path;var t={};return He.forEach((function(n){n in e&&(t[n]=e[n])})),JSON.stringify(t,null,2)}function ze(e){return Object.prototype.toString.call(e).indexOf("Error")>-1}function Ke(e,t){return ze(e)&&e._isRouter&&(null==t||e.type===t)}function Ge(e){return function(t,n,i){var r=!1,s=0,o=null;Qe(e,(function(e,t,n,a){if("function"===typeof e&&void 0===e.cid){r=!0,s++;var c,u=Ze((function(t){Je(t)&&(t=t.default),e.resolved="function"===typeof t?t:ee.extend(t),n.components[a]=t,s--,s<=0&&i()})),l=Ze((function(e){var t="Failed to resolve async component "+a+": "+e;o||(o=ze(e)?e:new Error(t),i(o))}));try{c=e(u,l)}catch(d){l(d)}if(c)if("function"===typeof c.then)c.then(u,l);else{var h=c.component;h&&"function"===typeof h.then&&h.then(u,l)}}})),r||i()}}function Qe(e,t){return Ye(e.map((function(e){return Object.keys(e.components).map((function(n){return t(e.components[n],e.instances[n],e,n)}))})))}function Ye(e){return Array.prototype.concat.apply([],e)}var Xe="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Je(e){return e.__esModule||Xe&&"Module"===e[Symbol.toStringTag]}function Ze(e){var t=!1;return function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];if(!t)return t=!0,e.apply(this,n)}}var et=function(e,t){this.router=e,this.base=tt(t),this.current=v,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function tt(e){if(!e)if(ce){var t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^https?:\/\/[^\/]+/,"")}else e="/";return"/"!==e.charAt(0)&&(e="/"+e),e.replace(/\/$/,"")}function nt(e,t){var n,i=Math.max(e.length,t.length);for(n=0;n<i;n++)if(e[n]!==t[n])break;return{updated:t.slice(0,n),activated:t.slice(n),deactivated:e.slice(n)}}function it(e,t,n,i){var r=Qe(e,(function(e,i,r,s){var o=rt(e,t);if(o)return Array.isArray(o)?o.map((function(e){return n(e,i,r,s)})):n(o,i,r,s)}));return Ye(i?r.reverse():r)}function rt(e,t){return"function"!==typeof e&&(e=ee.extend(e)),e.options[t]}function st(e){return it(e,"beforeRouteLeave",at,!0)}function ot(e){return it(e,"beforeRouteUpdate",at)}function at(e,t){if(t)return function(){return e.apply(t,arguments)}}function ct(e){return it(e,"beforeRouteEnter",(function(e,t,n,i){return ut(e,n,i)}))}function ut(e,t,n){return function(i,r,s){return e(i,r,(function(e){"function"===typeof e&&(t.enteredCbs[n]||(t.enteredCbs[n]=[]),t.enteredCbs[n].push(e)),s(e)}))}}et.prototype.listen=function(e){this.cb=e},et.prototype.onReady=function(e,t){this.ready?e():(this.readyCbs.push(e),t&&this.readyErrorCbs.push(t))},et.prototype.onError=function(e){this.errorCbs.push(e)},et.prototype.transitionTo=function(e,t,n){var i,r=this;try{i=this.router.match(e,this.current)}catch(o){throw this.errorCbs.forEach((function(e){e(o)})),o}var s=this.current;this.confirmTransition(i,(function(){r.updateRoute(i),t&&t(i),r.ensureURL(),r.router.afterHooks.forEach((function(e){e&&e(i,s)})),r.ready||(r.ready=!0,r.readyCbs.forEach((function(e){e(i)})))}),(function(e){n&&n(e),e&&!r.ready&&(Ke(e,$e.redirected)&&s===v||(r.ready=!0,r.readyErrorCbs.forEach((function(t){t(e)}))))}))},et.prototype.confirmTransition=function(e,t,n){var i=this,r=this.current;this.pending=e;var s=function(e){!Ke(e)&&ze(e)&&(i.errorCbs.length?i.errorCbs.forEach((function(t){t(e)})):console.error(e)),n&&n(e)},o=e.matched.length-1,a=r.matched.length-1;if(_(e,r)&&o===a&&e.matched[o]===r.matched[a])return this.ensureURL(),e.hash&&Ee(this.router,r,e,!1),s(Fe(r,e));var c=nt(this.current.matched,e.matched),u=c.updated,l=c.deactivated,h=c.activated,d=[].concat(st(l),this.router.beforeHooks,ot(u),h.map((function(e){return e.beforeEnter})),Ge(h)),f=function(t,n){if(i.pending!==e)return s(Ue(r,e));try{t(e,r,(function(t){!1===t?(i.ensureURL(!0),s(Ve(r,e))):ze(t)?(i.ensureURL(!0),s(t)):"string"===typeof t||"object"===typeof t&&("string"===typeof t.path||"string"===typeof t.name)?(s(Be(r,e)),"object"===typeof t&&t.replace?i.replace(t):i.push(t)):n(t)}))}catch(o){s(o)}};je(d,f,(function(){var n=ct(h),o=n.concat(i.router.resolveHooks);je(o,f,(function(){if(i.pending!==e)return s(Ue(r,e));i.pending=null,t(e),i.router.app&&i.router.app.$nextTick((function(){E(e)}))}))}))},et.prototype.updateRoute=function(e){this.current=e,this.cb&&this.cb(e)},et.prototype.setupListeners=function(){},et.prototype.teardown=function(){this.listeners.forEach((function(e){e()})),this.listeners=[],this.current=v,this.pending=null};var lt=function(e){function t(t,n){e.call(this,t,n),this._startLocation=ht(this.base)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,i=Re&&n;i&&this.listeners.push(ke());var r=function(){var n=e.current,r=ht(e.base);e.current===v&&r===e._startLocation||e.transitionTo(r,(function(e){i&&Ee(t,e,n,!0)}))};window.addEventListener("popstate",r),this.listeners.push((function(){window.removeEventListener("popstate",r)}))}},t.prototype.go=function(e){window.history.go(e)},t.prototype.push=function(e,t,n){var i=this,r=this,s=r.current;this.transitionTo(e,(function(e){Me(A(i.base+e.fullPath)),Ee(i.router,e,s,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var i=this,r=this,s=r.current;this.transitionTo(e,(function(e){Pe(A(i.base+e.fullPath)),Ee(i.router,e,s,!1),t&&t(e)}),n)},t.prototype.ensureURL=function(e){if(ht(this.base)!==this.current.fullPath){var t=A(this.base+this.current.fullPath);e?Me(t):Pe(t)}},t.prototype.getCurrentLocation=function(){return ht(this.base)},t}(et);function ht(e){var t=window.location.pathname,n=t.toLowerCase(),i=e.toLowerCase();return!e||n!==i&&0!==n.indexOf(A(i+"/"))||(t=t.slice(e.length)),(t||"/")+window.location.search+window.location.hash}var dt=function(e){function t(t,n,i){e.call(this,t,n),i&&ft(this.base)||pt()}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,i=Re&&n;i&&this.listeners.push(ke());var r=function(){var t=e.current;pt()&&e.transitionTo(mt(),(function(n){i&&Ee(e.router,n,t,!0),Re||yt(n.fullPath)}))},s=Re?"popstate":"hashchange";window.addEventListener(s,r),this.listeners.push((function(){window.removeEventListener(s,r)}))}},t.prototype.push=function(e,t,n){var i=this,r=this,s=r.current;this.transitionTo(e,(function(e){gt(e.fullPath),Ee(i.router,e,s,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var i=this,r=this,s=r.current;this.transitionTo(e,(function(e){yt(e.fullPath),Ee(i.router,e,s,!1),t&&t(e)}),n)},t.prototype.go=function(e){window.history.go(e)},t.prototype.ensureURL=function(e){var t=this.current.fullPath;mt()!==t&&(e?gt(t):yt(t))},t.prototype.getCurrentLocation=function(){return mt()},t}(et);function ft(e){var t=ht(e);if(!/^\/#/.test(t))return window.location.replace(A(e+"/#"+t)),!0}function pt(){var e=mt();return"/"===e.charAt(0)||(yt("/"+e),!1)}function mt(){var e=window.location.href,t=e.indexOf("#");return t<0?"":(e=e.slice(t+1),e)}function vt(e){var t=window.location.href,n=t.indexOf("#"),i=n>=0?t.slice(0,n):t;return i+"#"+e}function gt(e){Re?Me(vt(e)):window.location.hash=e}function yt(e){Re?Pe(vt(e)):window.location.replace(vt(e))}var _t=function(e){function t(t,n){e.call(this,t,n),this.stack=[],this.index=-1}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.push=function(e,t,n){var i=this;this.transitionTo(e,(function(e){i.stack=i.stack.slice(0,i.index+1).concat(e),i.index++,t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var i=this;this.transitionTo(e,(function(e){i.stack=i.stack.slice(0,i.index).concat(e),t&&t(e)}),n)},t.prototype.go=function(e){var t=this,n=this.index+e;if(!(n<0||n>=this.stack.length)){var i=this.stack[n];this.confirmTransition(i,(function(){var e=t.current;t.index=n,t.updateRoute(i),t.router.afterHooks.forEach((function(t){t&&t(i,e)}))}),(function(e){Ke(e,$e.duplicated)&&(t.index=n)}))}},t.prototype.getCurrentLocation=function(){var e=this.stack[this.stack.length-1];return e?e.fullPath:"/"},t.prototype.ensureURL=function(){},t}(et),wt=function(e){void 0===e&&(e={}),this.app=null,this.apps=[],this.options=e,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=fe(e.routes||[],this);var t=e.mode||"hash";switch(this.fallback="history"===t&&!Re&&!1!==e.fallback,this.fallback&&(t="hash"),ce||(t="abstract"),this.mode=t,t){case"history":this.history=new lt(this,e.base);break;case"hash":this.history=new dt(this,e.base,this.fallback);break;case"abstract":this.history=new _t(this,e.base);break;default:0}},bt={currentRoute:{configurable:!0}};function kt(e,t){return e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function Et(e,t,n){var i="hash"===n?"#"+t:t;return e?A(e+"/"+i):i}wt.prototype.match=function(e,t,n){return this.matcher.match(e,t,n)},bt.currentRoute.get=function(){return this.history&&this.history.current},wt.prototype.init=function(e){var t=this;if(this.apps.push(e),e.$once("hook:destroyed",(function(){var n=t.apps.indexOf(e);n>-1&&t.apps.splice(n,1),t.app===e&&(t.app=t.apps[0]||null),t.app||t.history.teardown()})),!this.app){this.app=e;var n=this.history;if(n instanceof lt||n instanceof dt){var i=function(e){var i=n.current,r=t.options.scrollBehavior,s=Re&&r;s&&"fullPath"in e&&Ee(t,e,i,!1)},r=function(e){n.setupListeners(),i(e)};n.transitionTo(n.getCurrentLocation(),r,r)}n.listen((function(e){t.apps.forEach((function(t){t._route=e}))}))}},wt.prototype.beforeEach=function(e){return kt(this.beforeHooks,e)},wt.prototype.beforeResolve=function(e){return kt(this.resolveHooks,e)},wt.prototype.afterEach=function(e){return kt(this.afterHooks,e)},wt.prototype.onReady=function(e,t){this.history.onReady(e,t)},wt.prototype.onError=function(e){this.history.onError(e)},wt.prototype.push=function(e,t,n){var i=this;if(!t&&!n&&"undefined"!==typeof Promise)return new Promise((function(t,n){i.history.push(e,t,n)}));this.history.push(e,t,n)},wt.prototype.replace=function(e,t,n){var i=this;if(!t&&!n&&"undefined"!==typeof Promise)return new Promise((function(t,n){i.history.replace(e,t,n)}));this.history.replace(e,t,n)},wt.prototype.go=function(e){this.history.go(e)},wt.prototype.back=function(){this.go(-1)},wt.prototype.forward=function(){this.go(1)},wt.prototype.getMatchedComponents=function(e){var t=e?e.matched?e:this.resolve(e).route:this.currentRoute;return t?[].concat.apply([],t.matched.map((function(e){return Object.keys(e.components).map((function(t){return e.components[t]}))}))):[]},wt.prototype.resolve=function(e,t,n){t=t||this.history.current;var i=Z(e,t,n,this),r=this.match(i,t),s=r.redirectedFrom||r.fullPath,o=this.history.base,a=Et(o,s,this.mode);return{location:i,route:r,href:a,normalizedTo:i,resolved:r}},wt.prototype.getRoutes=function(){return this.matcher.getRoutes()},wt.prototype.addRoute=function(e,t){this.matcher.addRoute(e,t),this.history.current!==v&&this.history.transitionTo(this.history.getCurrentLocation())},wt.prototype.addRoutes=function(e){this.matcher.addRoutes(e),this.history.current!==v&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(wt.prototype,bt),wt.install=ae,wt.version="3.5.3",wt.isNavigationFailure=Ke,wt.NavigationFailureType=$e,wt.START_LOCATION=v,ce&&window.Vue&&window.Vue.use(wt),t["a"]=wt},"8f6b":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Oi})),n.d(t,"b",(function(){return xi})),n.d(t,"c",(function(){return Ai})),n.d(t,"d",(function(){return Li})),n.d(t,"e",(function(){return Di})),n.d(t,"f",(function(){return Ni})),n.d(t,"g",(function(){return Ri})),n.d(t,"h",(function(){return Ci})),n.d(t,"i",(function(){return Si}));var i,r="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{},s={},o=o||{},a=r||self;function c(){}function u(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function l(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function h(e){return Object.prototype.hasOwnProperty.call(e,d)&&e[d]||(e[d]=++f)}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(e,t,n){return e.call.apply(e.bind,arguments)}function m(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function v(e,t,n){return v=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:m,v.apply(null,arguments)}function g(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function y(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[n].apply(e,r)}}function _(){this.s=this.s,this.o=this.o}var w=0,b={};_.prototype.s=!1,_.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=w)){var e=h(this);delete b[e]}},_.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const k=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},E=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const i=e.length,r="string"===typeof e?e.split(""):e;for(let s=0;s<i;s++)s in r&&t.call(n,r[s],s,e)};function I(e){e:{var t=Vn;const n=e.length,i="string"===typeof e?e.split(""):e;for(let r=0;r<n;r++)if(r in i&&t.call(void 0,i[r],r,e)){t=r;break e}t=-1}return 0>t?null:"string"===typeof e?e.charAt(t):e[t]}function T(e){return Array.prototype.concat.apply([],arguments)}function C(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function S(e){return/^[\s\xa0]*$/.test(e)}var O,A=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function x(e,t){return-1!=e.indexOf(t)}function D(e,t){return e<t?-1:e>t?1:0}e:{var L=a.navigator;if(L){var N=L.userAgent;if(N){O=N;break e}}O=""}function R(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function M(e){const t={};for(const n in e)t[n]=e[n];return t}var P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function j(e,t){let n,i;for(let r=1;r<arguments.length;r++){for(n in i=arguments[r],i)e[n]=i[n];for(let t=0;t<P.length;t++)n=P[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function $(e){return $[" "](e),e}function B(e){var t=J;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}$[" "]=c;var F,U=x(O,"Opera"),V=x(O,"Trident")||x(O,"MSIE"),q=x(O,"Edge"),H=q||V,W=x(O,"Gecko")&&!(x(O.toLowerCase(),"webkit")&&!x(O,"Edge"))&&!(x(O,"Trident")||x(O,"MSIE"))&&!x(O,"Edge"),z=x(O.toLowerCase(),"webkit")&&!x(O,"Edge");function K(){var e=a.document;return e?e.documentMode:void 0}e:{var G="",Q=function(){var e=O;return W?/rv:([^\);]+)(\)|;)/.exec(e):q?/Edge\/([\d\.]+)/.exec(e):V?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):z?/WebKit\/(\S+)/.exec(e):U?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(Q&&(G=Q?Q[1]:""),V){var Y=K();if(null!=Y&&Y>parseFloat(G)){F=String(Y);break e}}F=G}var X,J={};function Z(){return B((function(){let e=0;const t=A(String(F)).split("."),n=A("9").split("."),i=Math.max(t.length,n.length);for(let o=0;0==e&&o<i;o++){var r=t[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;e=D(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||D(0==r[2].length,0==s[2].length)||D(r[2],s[2]),r=r[3],s=s[3]}while(0==e)}return 0<=e}))}if(a.document&&V){var ee=K();X=ee||(parseInt(F,10)||void 0)}else X=void 0;var te=X,ne=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{a.addEventListener("test",c,t),a.removeEventListener("test",c,t)}catch(n){}return e}();function ie(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function re(e,t){if(ie.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(W){e:{try{$(t.nodeName);var r=!0;break e}catch(s){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:se[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&re.Z.h.call(this)}}ie.prototype.h=function(){this.defaultPrevented=!0},y(re,ie);var se={2:"touch",3:"pen",4:"mouse"};re.prototype.h=function(){re.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var oe="closure_listenable_"+(1e6*Math.random()|0),ae=0;function ce(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.ia=r,this.key=++ae,this.ca=this.fa=!1}function ue(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function le(e){this.src=e,this.g={},this.h=0}function he(e,t){var n=t.type;if(n in e.g){var i,r=e.g[n],s=k(r,t);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ue(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function de(e,t,n,i){for(var r=0;r<e.length;++r){var s=e[r];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==i)return r}return-1}le.prototype.add=function(e,t,n,i,r){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=de(e,t,i,r);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new ce(t,this.src,s,!!i,r),t.fa=n,e.push(t)),t};var fe="closure_lm_"+(1e6*Math.random()|0),pe={};function me(e,t,n,i,r){if(i&&i.once)return ye(e,t,n,i,r);if(Array.isArray(t)){for(var s=0;s<t.length;s++)me(e,t[s],n,i,r);return null}return n=Te(n),e&&e[oe]?e.N(t,n,l(i)?!!i.capture:!!i,r):ve(e,t,n,!1,i,r)}function ve(e,t,n,i,r,s){if(!t)throw Error("Invalid event type");var o=l(r)?!!r.capture:!!r,a=Ee(e);if(a||(e[fe]=a=new le(e)),n=a.add(t,n,i,o,s),n.proxy)return n;if(i=ge(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)ne||(r=o),void 0===r&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(be(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function ge(){function e(n){return t.call(e.src,e.listener,n)}var t=ke;return e}function ye(e,t,n,i,r){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ye(e,t[s],n,i,r);return null}return n=Te(n),e&&e[oe]?e.O(t,n,l(i)?!!i.capture:!!i,r):ve(e,t,n,!0,i,r)}function _e(e,t,n,i,r){if(Array.isArray(t))for(var s=0;s<t.length;s++)_e(e,t[s],n,i,r);else i=l(i)?!!i.capture:!!i,n=Te(n),e&&e[oe]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=de(s,n,i,r),-1<n&&(ue(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Ee(e))&&(t=e.g[t.toString()],e=-1,t&&(e=de(t,n,i,r)),(n=-1<e?t[e]:null)&&we(n))}function we(e){if("number"!==typeof e&&e&&!e.ca){var t=e.src;if(t&&t[oe])he(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(be(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=Ee(t))?(he(n,e),0==n.h&&(n.src=null,t[fe]=null)):ue(e)}}}function be(e){return e in pe?pe[e]:pe[e]="on"+e}function ke(e,t){if(e.ca)e=!0;else{t=new re(t,this);var n=e.listener,i=e.ia||e.src;e.fa&&we(e),e=n.call(i,t)}return e}function Ee(e){return e=e[fe],e instanceof le?e:null}var Ie="__closure_events_fn_"+(1e9*Math.random()>>>0);function Te(e){return"function"===typeof e?e:(e[Ie]||(e[Ie]=function(t){return e.handleEvent(t)}),e[Ie])}function Ce(){_.call(this),this.i=new le(this),this.P=this,this.I=null}function Se(e,t){var n,i=e.I;if(i)for(n=[];i;i=i.I)n.push(i);if(e=e.P,i=t.type||t,"string"===typeof t)t=new ie(t,e);else if(t instanceof ie)t.target=t.target||e;else{var r=t;t=new ie(i,e),j(t,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];r=Oe(o,i,!0,t)&&r}if(o=t.g=e,r=Oe(o,i,!0,t)&&r,r=Oe(o,i,!1,t)&&r,n)for(s=0;s<n.length;s++)o=t.g=n[s],r=Oe(o,i,!1,t)&&r}function Oe(e,t,n,i){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&he(e.i,o),r=!1!==a.call(c,i)&&r}}return r&&!i.defaultPrevented}y(Ce,_),Ce.prototype[oe]=!0,Ce.prototype.removeEventListener=function(e,t,n,i){_e(this,e,t,n,i)},Ce.prototype.M=function(){if(Ce.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)ue(n[i]);delete t.g[e],t.h--}}this.I=null},Ce.prototype.N=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},Ce.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};var Ae=a.JSON.stringify;function xe(){var e=Be;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class De{constructor(){this.h=this.g=null}add(e,t){const n=Ne.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Le,Ne=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Re,e=>e.reset());class Re{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Me(e){a.setTimeout(()=>{throw e},0)}function Pe(e,t){Le||je(),$e||(Le(),$e=!0),Be.add(e,t)}function je(){var e=a.Promise.resolve(void 0);Le=function(){e.then(Fe)}}var $e=!1,Be=new De;function Fe(){for(var e;e=xe();){try{e.h.call(e.g)}catch(n){Me(n)}var t=Ne;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}$e=!1}function Ue(e,t){Ce.call(this),this.h=e||1,this.g=t||a,this.j=v(this.kb,this),this.l=Date.now()}function Ve(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function qe(e,t,n){if("function"===typeof e)n&&(e=v(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=v(e.handleEvent,e)}return 2147483647<Number(t)?-1:a.setTimeout(e,t||0)}function He(e){e.g=qe(()=>{e.g=null,e.i&&(e.i=!1,He(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}y(Ue,Ce),i=Ue.prototype,i.da=!1,i.S=null,i.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Se(this,"tick"),this.da&&(Ve(this),this.start()))}},i.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.M=function(){Ue.Z.M.call(this),Ve(this),delete this.g};class We extends _{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:He(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ze(e){_.call(this),this.h=e,this.g={}}y(ze,_);var Ke=[];function Ge(e,t,n,i){Array.isArray(n)||(n&&(Ke[0]=n.toString()),n=Ke);for(var r=0;r<n.length;r++){var s=me(t,n[r],i||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Qe(e){R(e.g,(function(e,t){this.g.hasOwnProperty(t)&&we(e)}),e),e.g={}}function Ye(){this.g=!0}function Xe(e,t,n,i,r,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+t+"\n"+n+"\n"+o}))}function Je(e,t,n,i,r,s,o){e.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Ze(e,t,n,i){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+tt(e,n)+(i?" "+i:"")}))}function et(e,t){e.info((function(){return"TIMEOUT: "+t}))}function tt(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return Ae(n)}catch(a){return t}}ze.prototype.M=function(){ze.Z.M.call(this),Qe(this)},ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ye.prototype.Aa=function(){this.g=!1},Ye.prototype.info=function(){};var nt={},it=null;function rt(){return it=it||new Ce}function st(e){ie.call(this,nt.Ma,e)}function ot(e){const t=rt();Se(t,new st(t,e))}function at(e,t){ie.call(this,nt.STAT_EVENT,e),this.stat=t}function ct(e){const t=rt();Se(t,new at(t,e))}function ut(e,t){ie.call(this,nt.Na,e),this.size=t}function lt(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){e()}),t)}nt.Ma="serverreachability",y(st,ie),nt.STAT_EVENT="statevent",y(at,ie),nt.Na="timingevent",y(ut,ie);var ht={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},dt={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ft(){}function pt(e){return e.h||(e.h=e.i())}function mt(){}ft.prototype.h=null;var vt,gt={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function yt(){ie.call(this,"d")}function _t(){ie.call(this,"c")}function wt(){}function bt(e,t,n,i){this.l=e,this.j=t,this.m=n,this.X=i||1,this.V=new ze(this),this.P=Et,e=H?125:void 0,this.W=new Ue(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new kt}function kt(){this.i=null,this.g="",this.h=!1}y(yt,ie),y(_t,ie),y(wt,ft),wt.prototype.g=function(){return new XMLHttpRequest},wt.prototype.i=function(){return{}},vt=new wt;var Et=45e3,It={},Tt={};function Ct(e,t,n){e.K=1,e.v=Xt(Wt(t)),e.s=n,e.U=!0,St(e,null)}function St(e,t){e.F=Date.now(),Dt(e),e.A=Wt(e.v);var n=e.A,i=e.X;Array.isArray(i)||(i=[String(i)]),fn(n.h,"t",i),e.C=0,n=e.l.H,e.h=new kt,e.g=_i(e.l,n?t:null,!e.s),0<e.O&&(e.L=new We(v(e.Ia,e,e.g),e.O)),Ge(e.V,e.g,"readystatechange",e.gb),t=e.H?M(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ot(1),Xe(e.j,e.u,e.A,e.m,e.X,e.s)}function Ot(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function At(e,t,n){let i,r=!0;for(;!e.I&&e.C<n.length;){if(i=xt(e,n),i==Tt){4==t&&(e.o=4,ct(14),r=!1),Ze(e.j,e.m,null,"[Incomplete Response]");break}if(i==It){e.o=4,ct(15),Ze(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}Ze(e.j,e.m,i,null),Pt(e,i)}Ot(e)&&i!=Tt&&i!=It&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ct(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),hi(t),t.L=!0,ct(11))):(Ze(e.j,e.m,n,"[Invalid Chunked Response]"),Mt(e),Rt(e))}function xt(e,t){var n=e.C,i=t.indexOf("\n",n);return-1==i?Tt:(n=Number(t.substring(n,i)),isNaN(n)?It:(i+=1,i+n>t.length?Tt:(t=t.substr(i,n),e.C=i+n,t)))}function Dt(e){e.Y=Date.now()+e.P,Lt(e,e.P)}function Lt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=lt(v(e.eb,e),t)}function Nt(e){e.B&&(a.clearTimeout(e.B),e.B=null)}function Rt(e){0==e.l.G||e.I||pi(e.l,e)}function Mt(e){Nt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Ve(e.W),Qe(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Pt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||bn(n.i,e)))if(n.I=e.N,!e.J&&bn(n.i,e)&&3==n.G){try{var i=n.Ca.g.parse(t)}catch(u){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;fi(n),ti(n)}li(n),ct(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&0==n.A&&!n.v&&(n.v=lt(v(n.ab,n),6e3));if(1>=wn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else vi(n,11)}else if((e.J||n.g==e)&&fi(n),!S(t))for(r=n.Ca.g.parse(t),t=0;t<r.length;t++){let u=r[t];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const t=u[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const r=u[4];null!=r&&(n.za=r,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(i=1.5*l,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=i.i;!s.g&&(x(e,"spdy")||x(e,"quic")||x(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(kn(s,s.h),s.h=null))}if(i.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.sa=e,Yt(i.F,i.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var o=e;if(i.oa=yi(i,i.H?i.la:null,i.W),o.J){En(i.i,o);var a=o,c=i.K;c&&a.setTimeout(c),a.B&&(Nt(a),Dt(a)),i.g=o}else ui(i);0<n.l.length&&ri(n)}else"stop"!=u[0]&&"close"!=u[0]||vi(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?vi(n,7):ei(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}ot(4)}catch(u){}}function jt(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"===typeof e)return e.split("");if(u(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}function $t(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(u(e)||"string"===typeof e)E(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(u(e)||"string"===typeof e){n=[];for(var i=e.length,r=0;r<i;r++)n.push(r)}else for(r in n=[],i=0,e)n[i++]=r;i=jt(e),r=i.length;for(var s=0;s<r;s++)t.call(void 0,i[s],n&&n[s],e)}}function Bt(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(e)if(e instanceof Bt)for(n=e.T(),i=0;i<n.length;i++)this.set(n[i],e.get(n[i]));else for(i in e)this.set(i,e[i])}function Ft(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var i=e.g[t];Ut(e.h,i)&&(e.g[n++]=i),t++}e.g.length=n}if(e.i!=e.g.length){var r={};for(n=t=0;t<e.g.length;)i=e.g[t],Ut(r,i)||(e.g[n++]=i,r[i]=1),t++;e.g.length=n}}function Ut(e,t){return Object.prototype.hasOwnProperty.call(e,t)}i=bt.prototype,i.setTimeout=function(e){this.P=e},i.gb=function(e){e=e.target;const t=this.L;t&&3==Gn(e)?t.l():this.Ia(e)},i.Ia=function(e){try{if(e==this.g)e:{const h=Gn(this.g);var t=this.g.Da();const d=this.g.ba();if(!(3>h)&&(3!=h||H||this.g&&(this.h.h||this.g.ga()||Qn(this.g)))){this.I||4!=h||7==t||ot(8==t||0>=d?3:2),Nt(this);var n=this.g.ba();this.N=n;t:if(Ot(this)){var i=Qn(this.g);e="";var r=i.length,s=4==Gn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Mt(this),Rt(this);var o="";break t}this.h.i=new a.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:s&&t==r-1});i.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Je(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){t:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(c)){var l=c;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,ct(12),Mt(this),Rt(this);break e}Ze(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Pt(this,n)}this.U?(At(this,h,o),H&&this.i&&3==h&&(Ge(this.V,this.W,"tick",this.fb),this.W.start())):(Ze(this.j,this.m,o,null),Pt(this,o)),4==h&&Mt(this),this.i&&!this.I&&(4==h?pi(this.l,this):(this.i=!1,Dt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ct(12)):(this.o=0,ct(13)),Mt(this),Rt(this)}}}catch(h){}},i.fb=function(){if(this.g){var e=Gn(this.g),t=this.g.ga();this.C<t.length&&(Nt(this),At(this,e,t),this.i&&4!=e&&Dt(this))}},i.cancel=function(){this.I=!0,Mt(this)},i.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(et(this.j,this.A),2!=this.K&&(ot(3),ct(17)),Mt(this),this.o=2,Rt(this)):Lt(this,this.Y-e)},i=Bt.prototype,i.R=function(){Ft(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},i.T=function(){return Ft(this),this.g.concat()},i.get=function(e,t){return Ut(this.h,e)?this.h[e]:t},i.set=function(e,t){Ut(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},i.forEach=function(e,t){for(var n=this.T(),i=0;i<n.length;i++){var r=n[i],s=this.get(r);e.call(t,s,r,this)}};var Vt=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function qt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var s=e[n].substring(0,i);r=e[n].substring(i+1)}else s=e[n];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ht(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Ht){this.g=void 0!==t?t:e.g,zt(this,e.j),this.s=e.s,Kt(this,e.i),Gt(this,e.m),this.l=e.l,t=e.h;var n=new un;n.i=t.i,t.g&&(n.g=new Bt(t.g),n.h=t.h),Qt(this,n),this.o=e.o}else e&&(n=String(e).match(Vt))?(this.g=!!t,zt(this,n[1]||"",!0),this.s=en(n[2]||""),Kt(this,n[3]||"",!0),Gt(this,n[4]),this.l=en(n[5]||"",!0),Qt(this,n[6]||"",!0),this.o=en(n[7]||"")):(this.g=!!t,this.h=new un(null,this.g))}function Wt(e){return new Ht(e)}function zt(e,t,n){e.j=n?en(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Kt(e,t,n){e.i=n?en(t,!0):t}function Gt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Qt(e,t,n){t instanceof un?(e.h=t,mn(e.h,e.g)):(n||(t=tn(t,an)),e.h=new un(t,e.g))}function Yt(e,t,n){e.h.set(t,n)}function Xt(e){return Yt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Jt(e){return e instanceof Ht?Wt(e):new Ht(e,void 0)}function Zt(e,t,n,i){var r=new Ht(null,void 0);return e&&zt(r,e),t&&Kt(r,t),n&&Gt(r,n),i&&(r.l=i),r}function en(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function tn(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,nn),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function nn(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Ht.prototype.toString=function(){var e=[],t=this.j;t&&e.push(tn(t,rn,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(tn(t,rn,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(tn(n,"/"==n.charAt(0)?on:sn,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",tn(n,cn)),e.join("")};var rn=/[#\/\?@]/g,sn=/[#\?:]/g,on=/[#\?]/g,an=/[#\?@]/g,cn=/#/g;function un(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ln(e){e.g||(e.g=new Bt,e.h=0,e.i&&qt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function hn(e,t){ln(e),t=pn(e,t),Ut(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Ut(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Ft(e)))}function dn(e,t){return ln(e),t=pn(e,t),Ut(e.g.h,t)}function fn(e,t,n){hn(e,t),0<n.length&&(e.i=null,e.g.set(pn(e,t),C(n)),e.h+=n.length)}function pn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function mn(e,t){t&&!e.j&&(ln(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(hn(this,t),fn(this,n,e))}),e)),e.j=t}i=un.prototype,i.add=function(e,t){ln(this),this.i=null,e=pn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},i.forEach=function(e,t){ln(this),this.g.forEach((function(n,i){E(n,(function(n){e.call(t,n,i,this)}),this)}),this)},i.T=function(){ln(this);for(var e=this.g.R(),t=this.g.T(),n=[],i=0;i<t.length;i++)for(var r=e[i],s=0;s<r.length;s++)n.push(t[i]);return n},i.R=function(e){ln(this);var t=[];if("string"===typeof e)dn(this,e)&&(t=T(t,this.g.get(pn(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=T(t,e[n])}return t},i.set=function(e,t){return ln(this),this.i=null,e=pn(this,e),dn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},i.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var i=t[n],r=encodeURIComponent(String(i));i=this.R(i);for(var s=0;s<i.length;s++){var o=r;""!==i[s]&&(o+="="+encodeURIComponent(String(i[s]))),e.push(o)}}return this.i=e.join("&")};var vn=class{constructor(e,t){this.h=e,this.g=t}};function gn(e){this.l=e||yn,a.PerformanceNavigationTiming?(e=a.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var yn=10;function _n(e){return!!e.h||!!e.g&&e.g.size>=e.j}function wn(e){return e.h?1:e.g?e.g.size:0}function bn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function kn(e,t){e.g?e.g.add(t):e.h=t}function En(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function In(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return C(e.i)}function Tn(){}function Cn(){this.g=new Tn}function Sn(e,t,n){const i=n||"";try{$t(e,(function(e,n){let r=e;l(e)&&(r=Ae(e)),t.push(i+n+"="+encodeURIComponent(r))}))}catch(r){throw t.push(i+"type="+encodeURIComponent("_badmap")),r}}function On(e,t){const n=new Ye;if(a.Image){const i=new Image;i.onload=g(An,n,i,"TestLoadImage: loaded",!0,t),i.onerror=g(An,n,i,"TestLoadImage: error",!1,t),i.onabort=g(An,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=g(An,n,i,"TestLoadImage: timeout",!1,t),a.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=e}else t(!1)}function An(e,t,n,i,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(i)}catch(s){}}function xn(e){this.l=e.$b||null,this.j=e.ib||!1}function Dn(e,t){Ce.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Ln,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}gn.prototype.cancel=function(){if(this.i=In(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Tn.prototype.stringify=function(e){return a.JSON.stringify(e,void 0)},Tn.prototype.parse=function(e){return a.JSON.parse(e,void 0)},y(xn,ft),xn.prototype.g=function(){return new Dn(this.l,this.j)},xn.prototype.i=function(e){return function(){return e}}({}),y(Dn,Ce);var Ln=0;function Nn(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Rn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Mn(e)}function Mn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}i=Dn.prototype,i.open=function(e,t){if(this.readyState!=Ln)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Mn(this)},i.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||a).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Rn(this)),this.readyState=Ln},i.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Mn(this)),this.g&&(this.readyState=3,Mn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Nn(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},i.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Rn(this):Mn(this),3==this.readyState&&Nn(this)}},i.Ua=function(e){this.g&&(this.response=this.responseText=e,Rn(this))},i.Ta=function(e){this.g&&(this.response=e,Rn(this))},i.ha=function(){this.g&&Rn(this)},i.setRequestHeader=function(e,t){this.v.append(e,t)},i.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Dn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Pn=a.JSON.parse;function jn(e){Ce.call(this),this.headers=new Bt,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=$n,this.K=this.L=!1}y(jn,Ce);var $n="",Bn=/^https?$/i,Fn=["POST","PUT"];function Un(e){return V&&Z()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Vn(e){return"content-type"==e.toLowerCase()}function qn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Hn(e),zn(e)}function Hn(e){e.D||(e.D=!0,Se(e,"complete"),Se(e,"error"))}function Wn(e){if(e.h&&"undefined"!=typeof o&&(!e.C[1]||4!=Gn(e)||2!=e.ba()))if(e.v&&4==Gn(e))qe(e.Fa,0,e);else if(Se(e,"readystatechange"),4==Gn(e)){e.h=!1;try{const o=e.ba();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=0===o){var r=String(e.H).match(Vt)[1]||null;if(!r&&a.self&&a.self.location){var s=a.self.location.protocol;r=s.substr(0,s.length-1)}i=!Bn.test(r?r.toLowerCase():"")}n=i}if(n)Se(e,"complete"),Se(e,"success");else{e.m=6;try{var c=2<Gn(e)?e.g.statusText:""}catch(u){c=""}e.j=c+" ["+e.ba()+"]",Hn(e)}}finally{zn(e)}}}function zn(e,t){if(e.g){Kn(e);const i=e.g,r=e.C[0]?c:null;e.g=null,e.C=null,t||Se(e,"ready");try{i.onreadystatechange=r}catch(n){}}}function Kn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(a.clearTimeout(e.A),e.A=null)}function Gn(e){return e.g?e.g.readyState:0}function Qn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case $n:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Yn(e){let t="";return R(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Xn(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=Yn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Yt(e,t,n))}function Jn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Zn(e){this.za=0,this.l=[],this.h=new Ye,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Jn("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Jn("baseRetryDelayMs",5e3,e),this.$a=Jn("retryDelaySeedMs",1e4,e),this.Ya=Jn("forwardChannelMaxRetries",2,e),this.ra=Jn("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new gn(e&&e.concurrentRequestLimit),this.Ca=new Cn,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function ei(e){if(ni(e),3==e.G){var t=e.V++,n=Wt(e.F);Yt(n,"SID",e.J),Yt(n,"RID",t),Yt(n,"TYPE","terminate"),ai(e,n),t=new bt(e,e.h,t,void 0),t.K=2,t.v=Xt(Wt(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(t.v.toString(),"")),!n&&a.Image&&((new Image).src=t.v,n=!0),n||(t.g=_i(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Dt(t)}gi(e)}function ti(e){e.g&&(hi(e),e.g.cancel(),e.g=null)}function ni(e){ti(e),e.u&&(a.clearTimeout(e.u),e.u=null),fi(e),e.i.cancel(),e.m&&("number"===typeof e.m&&a.clearTimeout(e.m),e.m=null)}function ii(e,t){e.l.push(new vn(e.Za++,t)),3==e.G&&ri(e)}function ri(e){_n(e.i)||e.m||(e.m=!0,Pe(e.Ha,e),e.C=0)}function si(e,t){return!(wn(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.l=t.D.concat(e.l),!0):!(1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya))&&(e.m=lt(v(e.Ha,e,t),mi(e,e.C)),e.C++,!0))}function oi(e,t){var n;n=t?t.m:e.V++;const i=Wt(e.F);Yt(i,"SID",e.J),Yt(i,"RID",n),Yt(i,"AID",e.U),ai(e,i),e.o&&e.s&&Xn(i,e.o,e.s),n=new bt(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=ci(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),kn(e.i,n),Ct(n,i,t)}function ai(e,t){e.j&&$t({},(function(e,n){Yt(t,n,e)}))}function ci(e,t,n){n=Math.min(e.l.length,n);var i=e.j?v(e.j.Oa,e.j,e):null;e:{var r=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=r[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=r[a].h;const c=r[a].g;if(n-=t,0>n)t=Math.max(0,r[a].h-100),o=!1;else try{Sn(c,e,"req"+n+"_")}catch(s){i&&i(c)}}if(o){i=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,i}function ui(e){e.g||e.u||(e.Y=1,Pe(e.Ga,e),e.A=0)}function li(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=lt(v(e.Ga,e),mi(e,e.A)),e.A++,!0)}function hi(e){null!=e.B&&(a.clearTimeout(e.B),e.B=null)}function di(e){e.g=new bt(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Wt(e.oa);Yt(t,"RID","rpc"),Yt(t,"SID",e.J),Yt(t,"CI",e.N?"0":"1"),Yt(t,"AID",e.U),ai(e,t),Yt(t,"TYPE","xmlhttp"),e.o&&e.s&&Xn(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Xt(Wt(t)),n.s=null,n.U=!0,St(n,e)}function fi(e){null!=e.v&&(a.clearTimeout(e.v),e.v=null)}function pi(e,t){var n=null;if(e.g==t){fi(e),hi(e),e.g=null;var i=2}else{if(!bn(e.i,t))return;n=t.D,En(e.i,t),i=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==i){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;i=rt(),Se(i,new ut(i,n,t,r)),ri(e)}else ui(e);else if(r=t.o,3==r||0==r&&0<e.I||!(1==i&&si(e,t)||2==i&&li(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),r){case 1:vi(e,5);break;case 4:vi(e,10);break;case 3:vi(e,6);break;default:vi(e,2)}}function mi(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function vi(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var i=v(e.jb,e);n||(n=new Ht("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||zt(n,"https"),Xt(n)),On(n.toString(),i)}else ct(2);e.G=0,e.j&&e.j.va(t),gi(e),ni(e)}function gi(e){e.G=0,e.I=-1,e.j&&(0==In(e.i).length&&0==e.l.length||(e.i.i.length=0,C(e.l),e.l.length=0),e.j.ua())}function yi(e,t,n){let i=Jt(n);if(""!=i.i)t&&Kt(i,t+"."+i.i),Gt(i,i.m);else{const e=a.location;i=Zt(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&R(e.aa,(function(e,t){Yt(i,t,e)})),t=e.D,n=e.sa,t&&n&&Yt(i,t,n),Yt(i,"VER",e.ma),ai(e,i),i}function _i(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new jn(new xn({ib:!0})):new jn(e.qa),t.L=e.H,t}function wi(){}function bi(){if(V&&!(10<=Number(te)))throw Error("Environmental error: no available transport.")}function ki(e,t){Ce.call(this),this.g=new Zn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!S(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!S(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Ti(this)}function Ei(e){yt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Ii(){_t.call(this),this.status=1}function Ti(e){this.g=e}i=jn.prototype,i.ea=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():vt.g(),this.C=this.u?pt(this.u):pt(vt),this.g.onreadystatechange=v(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void qn(this,s)}e=n||"";const r=new Bt(this.headers);i&&$t(i,(function(e,t){r.set(t,e)})),i=I(r.T()),n=a.FormData&&e instanceof a.FormData,!(0<=k(Fn,t))||i||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Kn(this),0<this.B&&((this.K=Un(this.g))?(this.g.timeout=this.B,this.g.ontimeout=v(this.pa,this)):this.A=qe(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){qn(this,s)}},i.pa=function(){"undefined"!=typeof o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Se(this,"timeout"),this.abort(8))},i.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Se(this,"complete"),Se(this,"abort"),zn(this))},i.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),zn(this,!0)),jn.Z.M.call(this)},i.Fa=function(){this.s||(this.F||this.v||this.l?Wn(this):this.cb())},i.cb=function(){Wn(this)},i.ba=function(){try{return 2<Gn(this)?this.g.status:-1}catch(e){return-1}},i.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},i.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Pn(t)}},i.Da=function(){return this.m},i.La=function(){return"string"===typeof this.j?this.j:String(this.j)},i=Zn.prototype,i.ma=8,i.G=1,i.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},i.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const r=new bt(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=M(s),j(s,this.P)):s=this.P),null===this.o&&(r.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var i=this.l[n];if(i="__data__"in i.g&&(i=i.g.__data__,"string"===typeof i)?i.length:void 0,void 0===i)break;if(t+=i,4096<t){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=ci(this,r,t),n=Wt(this.F),Yt(n,"RID",e),Yt(n,"CVER",22),this.D&&Yt(n,"X-HTTP-Session-Id",this.D),ai(this,n),this.o&&s&&Xn(n,this.o,s),kn(this.i,r),this.Ra&&Yt(n,"TYPE","init"),this.ja?(Yt(n,"$req",t),Yt(n,"SID","null"),r.$=!0,Ct(r,n,null)):Ct(r,n,t),this.G=2}}else 3==this.G&&(e?oi(this,e):0==this.l.length||_n(this.i)||oi(this))},i.Ga=function(){if(this.u=null,di(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=lt(v(this.bb,this),e)}},i.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ct(10),ti(this),di(this))},i.ab=function(){null!=this.v&&(this.v=null,ti(this),li(this),ct(19))},i.jb=function(e){e?(this.h.info("Successfully pinged google.com"),ct(2)):(this.h.info("Failed to ping google.com"),ct(1))},i=wi.prototype,i.xa=function(){},i.wa=function(){},i.va=function(){},i.ua=function(){},i.Oa=function(){},bi.prototype.g=function(e,t){return new ki(e,t)},y(ki,Ce),ki.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Pe(v(e.hb,e,t))),ct(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=yi(e,null,e.W),ri(e)},ki.prototype.close=function(){ei(this.g)},ki.prototype.u=function(e){if("string"===typeof e){var t={};t.__data__=e,ii(this.g,t)}else this.v?(t={},t.__data__=Ae(e),ii(this.g,t)):ii(this.g,e)},ki.prototype.M=function(){this.g.j=null,delete this.j,ei(this.g),delete this.g,ki.Z.M.call(this)},y(Ei,yt),y(Ii,_t),y(Ti,wi),Ti.prototype.xa=function(){Se(this.g,"a")},Ti.prototype.wa=function(e){Se(this.g,new Ei(e))},Ti.prototype.va=function(e){Se(this.g,new Ii(e))},Ti.prototype.ua=function(){Se(this.g,"b")},bi.prototype.createWebChannel=bi.prototype.g,ki.prototype.send=ki.prototype.u,ki.prototype.open=ki.prototype.m,ki.prototype.close=ki.prototype.close,ht.NO_ERROR=0,ht.TIMEOUT=8,ht.HTTP_ERROR=6,dt.COMPLETE="complete",mt.EventType=gt,gt.OPEN="a",gt.CLOSE="b",gt.ERROR="c",gt.MESSAGE="d",Ce.prototype.listen=Ce.prototype.N,jn.prototype.listenOnce=jn.prototype.O,jn.prototype.getLastError=jn.prototype.La,jn.prototype.getLastErrorCode=jn.prototype.Da,jn.prototype.getStatus=jn.prototype.ba,jn.prototype.getResponseJson=jn.prototype.Qa,jn.prototype.getResponseText=jn.prototype.ga,jn.prototype.send=jn.prototype.ea;var Ci=s.createWebChannelTransport=function(){return new bi},Si=s.getStatEventTarget=function(){return rt()},Oi=s.ErrorCode=ht,Ai=s.EventType=dt,xi=s.Event=nt,Di=s.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Li=s.FetchXmlHttpFactory=xn,Ni=s.WebChannel=mt,Ri=s.XhrIo=jn}).call(this,n("c8ba"))},"90e3":function(e,t,n){var i=n("e330"),r=0,s=Math.random(),o=i(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++r+s,36)}},9112:function(e,t,n){var i=n("83ab"),r=n("9bf2"),s=n("5c6c");e.exports=i?function(e,t,n){return r.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},"94ca":function(e,t,n){var i=n("d039"),r=n("1626"),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==l||n!=u&&(r(t)?i(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},"96cf":function(e,t,n){var i=function(e){"use strict";var t,n=Object.prototype,i=n.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},s=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(L){c=function(e,t,n){return e[t]=n}}function u(e,t,n,i){var r=t&&t.prototype instanceof v?t:v,s=Object.create(r.prototype),o=new A(i||[]);return s._invoke=T(e,n,o),s}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=u;var h="suspendedStart",d="suspendedYield",f="executing",p="completed",m={};function v(){}function g(){}function y(){}var _={};c(_,s,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(x([])));b&&b!==n&&i.call(b,s)&&(_=b);var k=y.prototype=v.prototype=Object.create(_);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function I(e,t){function n(r,s,o,a){var c=l(e[r],e,s);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&i.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,o,a)}),(function(e){n("throw",e,o,a)})):t.resolve(h).then((function(e){u.value=e,o(u)}),(function(e){return n("throw",e,o,a)}))}a(c.arg)}var r;function s(e,i){function s(){return new t((function(t,r){n(e,i,t,r)}))}return r=r?r.then(s,s):s()}this._invoke=s}function T(e,t,n){var i=h;return function(r,s){if(i===f)throw new Error("Generator is already running");if(i===p){if("throw"===r)throw s;return D()}n.method=r,n.arg=s;while(1){var o=n.delegate;if(o){var a=C(o,n);if(a){if(a===m)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===h)throw i=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=f;var c=l(e,t,n);if("normal"===c.type){if(i=n.done?p:d,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=p,n.method="throw",n.arg=c.arg)}}}function C(e,n){var i=e.iterator[n.method];if(i===t){if(n.delegate=null,"throw"===n.method){if(e.iterator["return"]&&(n.method="return",n.arg=t,C(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var r=l(i,e.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,m;var s=r.arg;return s?s.done?(n[e.resultName]=s.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):s:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function x(e){if(e){var n=e[s];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function n(){while(++r<e.length)if(i.call(e,r))return n.value=e[r],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:D}}function D(){return{value:t,done:!0}}return g.prototype=y,c(k,"constructor",y),c(y,"constructor",g),g.displayName=c(y,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,a,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(I.prototype),c(I.prototype,o,(function(){return this})),e.AsyncIterator=I,e.async=function(t,n,i,r,s){void 0===s&&(s=Promise);var o=new I(u(t,n,i,r),s);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},E(k),c(k,a,"Generator"),c(k,s,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){while(t.length){var i=t.pop();if(i in e)return n.value=i,n.done=!1,n}return n.done=!0,n}},e.values=x,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(i,r){return a.type="throw",a.arg=e,n.next=i,r&&(n.method="next",n.arg=t),!!r}for(var s=this.tryEntries.length-1;s>=0;--s){var o=this.tryEntries[s],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var s=r;break}}s&&("break"===e||"continue"===e)&&s.tryLoc<=t&&t<=s.finallyLoc&&(s=null);var o=s?s.completion:{};return o.type=e,o.arg=t,s?(this.method="next",this.next=s.finallyLoc,m):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var i=n.completion;if("throw"===i.type){var r=i.arg;O(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,i){return this.delegate={iterator:x(e),resultName:n,nextLoc:i},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=i}catch(r){"object"===typeof globalThis?globalThis.regeneratorRuntime=i:Function("r","regeneratorRuntime = r")(i)}},"9a1f":function(e,t,n){var i=n("da84"),r=n("c65b"),s=n("59ed"),o=n("825a"),a=n("0d51"),c=n("35a1"),u=i.TypeError;e.exports=function(e,t){var n=arguments.length<2?c(e):t;if(s(n))return o(r(n,e));throw u(a(e)+" is not iterable")}},"9bf2":function(e,t,n){var i=n("da84"),r=n("83ab"),s=n("0cfb"),o=n("825a"),a=n("a04b"),c=i.TypeError,u=Object.defineProperty;t.f=r?u:function(e,t,n){if(o(e),t=a(t),o(n),s)try{return u(e,t,n)}catch(i){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},"9ed3":function(e,t,n){"use strict";var i=n("ae93").IteratorPrototype,r=n("7c73"),s=n("5c6c"),o=n("d44e"),a=n("3f8c"),c=function(){return this};e.exports=function(e,t,n){var u=t+" Iterator";return e.prototype=r(i,{next:s(1,n)}),o(e,u,!1,!0),a[u]=c,e}},a04b:function(e,t,n){var i=n("c04e"),r=n("d9b5");e.exports=function(e){var t=i(e,"string");return r(t)?t:t+""}},a4b4:function(e,t,n){var i=n("342f");e.exports=/web0s(?!.*chrome)/i.test(i)},a79d:function(e,t,n){"use strict";var i=n("23e7"),r=n("c430"),s=n("fea9"),o=n("d039"),a=n("d066"),c=n("1626"),u=n("4840"),l=n("cdf9"),h=n("6eeb"),d=!!s&&o((function(){s.prototype["finally"].call({then:function(){}},(function(){}))}));if(i({target:"Promise",proto:!0,real:!0,forced:d},{finally:function(e){var t=u(this,a("Promise")),n=c(e);return this.then(n?function(n){return l(t,e()).then((function(){return n}))}:e,n?function(n){return l(t,e()).then((function(){throw n}))}:e)}}),!r&&c(s)){var f=a("Promise").prototype["finally"];s.prototype["finally"]!==f&&h(s.prototype,"finally",f,{unsafe:!0})}},ae93:function(e,t,n){"use strict";var i,r,s,o=n("d039"),a=n("1626"),c=n("7c73"),u=n("e163"),l=n("6eeb"),h=n("b622"),d=n("c430"),f=h("iterator"),p=!1;[].keys&&(s=[].keys(),"next"in s?(r=u(u(s)),r!==Object.prototype&&(i=r)):p=!0);var m=void 0==i||o((function(){var e={};return i[f].call(e)!==e}));m?i={}:d&&(i=c(i)),a(i[f])||l(i,f,(function(){return this})),e.exports={IteratorPrototype:i,BUGGY_SAFARI_ITERATORS:p}},b041:function(e,t,n){"use strict";var i=n("00ee"),r=n("f5df");e.exports=i?{}.toString:function(){return"[object "+r(this)+"]"}},b0c0:function(e,t,n){var i=n("83ab"),r=n("5e77").EXISTS,s=n("e330"),o=n("9bf2").f,a=Function.prototype,c=s(a.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=s(u.exec),h="name";i&&!r&&o(a,h,{configurable:!0,get:function(){try{return l(u,c(this))[1]}catch(e){return""}}})},b575:function(e,t,n){var i,r,s,o,a,c,u,l,h=n("da84"),d=n("0366"),f=n("06cf").f,p=n("2cf4").set,m=n("1cdc"),v=n("d4c3"),g=n("a4b4"),y=n("605d"),_=h.MutationObserver||h.WebKitMutationObserver,w=h.document,b=h.process,k=h.Promise,E=f(h,"queueMicrotask"),I=E&&E.value;I||(i=function(){var e,t;y&&(e=b.domain)&&e.exit();while(r){t=r.fn,r=r.next;try{t()}catch(n){throw r?o():s=void 0,n}}s=void 0,e&&e.enter()},m||y||g||!_||!w?!v&&k&&k.resolve?(u=k.resolve(void 0),u.constructor=k,l=d(u.then,u),o=function(){l(i)}):y?o=function(){b.nextTick(i)}:(p=d(p,h),o=function(){p(i)}):(a=!0,c=w.createTextNode(""),new _(i).observe(c,{characterData:!0}),o=function(){c.data=a=!a})),e.exports=I||function(e){var t={fn:e,next:void 0};s&&(s.next=t),r||(r=t,o()),s=t}},b622:function(e,t,n){var i=n("da84"),r=n("5692"),s=n("1a2d"),o=n("90e3"),a=n("4930"),c=n("fdbf"),u=r("wks"),l=i.Symbol,h=l&&l["for"],d=c?l:l&&l.withoutSetter||o;e.exports=function(e){if(!s(u,e)||!a&&"string"!=typeof u[e]){var t="Symbol."+e;a&&s(l,e)?u[e]=l[e]:u[e]=c&&h?h(t):d(t)}return u[e]}},c04e:function(e,t,n){var i=n("da84"),r=n("c65b"),s=n("861d"),o=n("d9b5"),a=n("dc4a"),c=n("485a"),u=n("b622"),l=i.TypeError,h=u("toPrimitive");e.exports=function(e,t){if(!s(e)||o(e))return e;var n,i=a(e,h);if(i){if(void 0===t&&(t="default"),n=r(i,e,t),!s(n)||o(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},c430:function(e,t){e.exports=!1},c65b:function(e,t){var n=Function.prototype.call;e.exports=n.bind?n.bind(n):function(){return n.apply(n,arguments)}},c6b6:function(e,t,n){var i=n("e330"),r=i({}.toString),s=i("".slice);e.exports=function(e){return s(r(e),8,-1)}},c6cd:function(e,t,n){var i=n("da84"),r=n("ce4e"),s="__core-js_shared__",o=i[s]||r(s,{});e.exports=o},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"===typeof window&&(n=window)}e.exports=n},ca84:function(e,t,n){var i=n("e330"),r=n("1a2d"),s=n("fc6a"),o=n("4d64").indexOf,a=n("d012"),c=i([].push);e.exports=function(e,t){var n,i=s(e),u=0,l=[];for(n in i)!r(a,n)&&r(i,n)&&c(l,n);while(t.length>u)r(i,n=t[u++])&&(~o(l,n)||c(l,n));return l}},cc12:function(e,t,n){var i=n("da84"),r=n("861d"),s=i.document,o=r(s)&&r(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},cca6:function(e,t,n){var i=n("23e7"),r=n("60da");i({target:"Object",stat:!0,forced:Object.assign!==r},{assign:r})},cdf9:function(e,t,n){var i=n("825a"),r=n("861d"),s=n("f069");e.exports=function(e,t){if(i(e),r(t)&&t.constructor===e)return t;var n=s.f(e),o=n.resolve;return o(t),n.promise}},ce4e:function(e,t,n){var i=n("da84"),r=Object.defineProperty;e.exports=function(e,t){try{r(i,e,{value:t,configurable:!0,writable:!0})}catch(n){i[e]=t}return t}},d012:function(e,t){e.exports={}},d039:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,n){var i=n("da84"),r=n("1626"),s=function(e){return r(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(i[e]):i[e]&&i[e][t]}},d1e7:function(e,t,n){"use strict";var i={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,s=r&&!i.call({1:2},1);t.f=s?function(e){var t=r(this,e);return!!t&&t.enumerable}:i},d2bb:function(e,t,n){var i=n("e330"),r=n("825a"),s=n("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=i(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(o){}return function(n,i){return r(n),s(i),t?e(n,i):n.__proto__=i,n}}():void 0)},d3b7:function(e,t,n){var i=n("00ee"),r=n("6eeb"),s=n("b041");i||r(Object.prototype,"toString",s,{unsafe:!0})},d44e:function(e,t,n){var i=n("9bf2").f,r=n("1a2d"),s=n("b622"),o=s("toStringTag");e.exports=function(e,t,n){e&&!r(e=n?e:e.prototype,o)&&i(e,o,{configurable:!0,value:t})}},d4c3:function(e,t,n){var i=n("342f"),r=n("da84");e.exports=/ipad|iphone|ipod/i.test(i)&&void 0!==r.Pebble},d9b5:function(e,t,n){var i=n("da84"),r=n("d066"),s=n("1626"),o=n("3a9b"),a=n("fdbf"),c=i.Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return s(t)&&o(t.prototype,c(e))}},da84:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dc4a:function(e,t,n){var i=n("59ed");e.exports=function(e,t){var n=e[t];return null==n?void 0:i(n)}},df75:function(e,t,n){var i=n("ca84"),r=n("7839");e.exports=Object.keys||function(e){return i(e,r)}},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,i=e.length-1;i>=0;i--){var r=e[i];"."===r?e.splice(i,1):".."===r?(e.splice(i,1),n++):n&&(e.splice(i,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function i(e){"string"!==typeof e&&(e+="");var t,n=0,i=-1,r=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!r){n=t+1;break}}else-1===i&&(r=!1,i=t+1);return-1===i?"":e.slice(n,i)}function r(e,t){if(e.filter)return e.filter(t);for(var n=[],i=0;i<e.length;i++)t(e[i],i,e)&&n.push(e[i]);return n}t.resolve=function(){for(var t="",i=!1,s=arguments.length-1;s>=-1&&!i;s--){var o=s>=0?arguments[s]:e.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,i="/"===o.charAt(0))}return t=n(r(t.split("/"),(function(e){return!!e})),!i).join("/"),(i?"/":"")+t||"."},t.normalize=function(e){var i=t.isAbsolute(e),o="/"===s(e,-1);return e=n(r(e.split("/"),(function(e){return!!e})),!i).join("/"),e||i||(e="."),e&&o&&(e+="/"),(i?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(r(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function i(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var r=i(e.split("/")),s=i(n.split("/")),o=Math.min(r.length,s.length),a=o,c=0;c<o;c++)if(r[c]!==s[c]){a=c;break}var u=[];for(c=a;c<r.length;c++)u.push("..");return u=u.concat(s.slice(a)),u.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,i=-1,r=!0,s=e.length-1;s>=1;--s)if(t=e.charCodeAt(s),47===t){if(!r){i=s;break}}else r=!1;return-1===i?n?"/":".":n&&1===i?"/":e.slice(0,i)},t.basename=function(e,t){var n=i(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,i=-1,r=!0,s=0,o=e.length-1;o>=0;--o){var a=e.charCodeAt(o);if(47!==a)-1===i&&(r=!1,i=o+1),46===a?-1===t?t=o:1!==s&&(s=1):-1!==t&&(s=-1);else if(!r){n=o+1;break}}return-1===t||-1===i||0===s||1===s&&t===i-1&&t===n+1?"":e.slice(t,i)};var s="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))},e163:function(e,t,n){var i=n("da84"),r=n("1a2d"),s=n("1626"),o=n("7b0b"),a=n("f772"),c=n("e177"),u=a("IE_PROTO"),l=i.Object,h=l.prototype;e.exports=c?l.getPrototypeOf:function(e){var t=o(e);if(r(t,u))return t[u];var n=t.constructor;return s(n)&&t instanceof n?n.prototype:t instanceof l?h:null}},e177:function(e,t,n){var i=n("d039");e.exports=!i((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},e260:function(e,t,n){"use strict";var i=n("fc6a"),r=n("44d2"),s=n("3f8c"),o=n("69f3"),a=n("7dd0"),c="Array Iterator",u=o.set,l=o.getterFor(c);e.exports=a(Array,"Array",(function(e,t){u(this,{type:c,target:i(e),index:0,kind:t})}),(function(){var e=l(this),t=e.target,n=e.kind,i=e.index++;return!t||i>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:i,done:!1}:"values"==n?{value:t[i],done:!1}:{value:[i,t[i]],done:!1}}),"values"),s.Arguments=s.Array,r("keys"),r("values"),r("entries")},e2cc:function(e,t,n){var i=n("6eeb");e.exports=function(e,t,n){for(var r in t)i(e,r,t[r],n);return e}},e330:function(e,t){var n=Function.prototype,i=n.bind,r=n.call,s=i&&i.bind(r);e.exports=i?function(e){return e&&s(r,e)}:function(e){return e&&function(){return r.apply(e,arguments)}}},e667:function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},e691:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var r;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=a[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}function l(e){i.forEach(t=>{t.setLogLevel(e)})}function h(e,t){for(const n of i){let i=null;t&&t.level&&(i=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==i&&void 0!==i?i:t.logLevel)&&e({level:r[n].toLowerCase(),message:o,args:s,type:t.name})}}}},e6cf:function(e,t,n){"use strict";var i,r,s,o,a=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),h=n("c65b"),d=n("fea9"),f=n("6eeb"),p=n("e2cc"),m=n("d2bb"),v=n("d44e"),g=n("2626"),y=n("59ed"),_=n("1626"),w=n("861d"),b=n("19aa"),k=n("8925"),E=n("2266"),I=n("1c7e"),T=n("4840"),C=n("2cf4").set,S=n("b575"),O=n("cdf9"),A=n("44de"),x=n("f069"),D=n("e667"),L=n("69f3"),N=n("94ca"),R=n("b622"),M=n("6069"),P=n("605d"),j=n("2d00"),$=R("species"),B="Promise",F=L.get,U=L.set,V=L.getterFor(B),q=d&&d.prototype,H=d,W=q,z=u.TypeError,K=u.document,G=u.process,Q=x.f,Y=Q,X=!!(K&&K.createEvent&&u.dispatchEvent),J=_(u.PromiseRejectionEvent),Z="unhandledrejection",ee="rejectionhandled",te=0,ne=1,ie=2,re=1,se=2,oe=!1,ae=N(B,(function(){var e=k(H),t=e!==String(H);if(!t&&66===j)return!0;if(c&&!W["finally"])return!0;if(j>=51&&/native code/.test(e))return!1;var n=new H((function(e){e(1)})),i=function(e){e((function(){}),(function(){}))},r=n.constructor={};return r[$]=i,oe=n.then((function(){}))instanceof i,!oe||!t&&M&&!J})),ce=ae||!I((function(e){H.all(e)["catch"]((function(){}))})),ue=function(e){var t;return!(!w(e)||!_(t=e.then))&&t},le=function(e,t){if(!e.notified){e.notified=!0;var n=e.reactions;S((function(){var i=e.value,r=e.state==ne,s=0;while(n.length>s){var o,a,c,u=n[s++],l=r?u.ok:u.fail,d=u.resolve,f=u.reject,p=u.domain;try{l?(r||(e.rejection===se&&pe(e),e.rejection=re),!0===l?o=i:(p&&p.enter(),o=l(i),p&&(p.exit(),c=!0)),o===u.promise?f(z("Promise-chain cycle")):(a=ue(o))?h(a,o,d,f):d(o)):f(i)}catch(m){p&&!c&&p.exit(),f(m)}}e.reactions=[],e.notified=!1,t&&!e.rejection&&de(e)}))}},he=function(e,t,n){var i,r;X?(i=K.createEvent("Event"),i.promise=t,i.reason=n,i.initEvent(e,!1,!0),u.dispatchEvent(i)):i={promise:t,reason:n},!J&&(r=u["on"+e])?r(i):e===Z&&A("Unhandled promise rejection",n)},de=function(e){h(C,u,(function(){var t,n=e.facade,i=e.value,r=fe(e);if(r&&(t=D((function(){P?G.emit("unhandledRejection",i,n):he(Z,n,i)})),e.rejection=P||fe(e)?se:re,t.error))throw t.value}))},fe=function(e){return e.rejection!==re&&!e.parent},pe=function(e){h(C,u,(function(){var t=e.facade;P?G.emit("rejectionHandled",t):he(ee,t,e.value)}))},me=function(e,t,n){return function(i){e(t,i,n)}},ve=function(e,t,n){e.done||(e.done=!0,n&&(e=n),e.value=t,e.state=ie,le(e,!0))},ge=function(e,t,n){if(!e.done){e.done=!0,n&&(e=n);try{if(e.facade===t)throw z("Promise can't be resolved itself");var i=ue(t);i?S((function(){var n={done:!1};try{h(i,t,me(ge,n,e),me(ve,n,e))}catch(r){ve(n,r,e)}})):(e.value=t,e.state=ne,le(e,!1))}catch(r){ve({done:!1},r,e)}}};if(ae&&(H=function(e){b(this,W),y(e),h(i,this);var t=F(this);try{e(me(ge,t),me(ve,t))}catch(n){ve(t,n)}},W=H.prototype,i=function(e){U(this,{type:B,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:te,value:void 0})},i.prototype=p(W,{then:function(e,t){var n=V(this),i=n.reactions,r=Q(T(this,H));return r.ok=!_(e)||e,r.fail=_(t)&&t,r.domain=P?G.domain:void 0,n.parent=!0,i[i.length]=r,n.state!=te&&le(n,!1),r.promise},catch:function(e){return this.then(void 0,e)}}),r=function(){var e=new i,t=F(e);this.promise=e,this.resolve=me(ge,t),this.reject=me(ve,t)},x.f=Q=function(e){return e===H||e===s?new r(e):Y(e)},!c&&_(d)&&q!==Object.prototype)){o=q.then,oe||(f(q,"then",(function(e,t){var n=this;return new H((function(e,t){h(o,n,e,t)})).then(e,t)}),{unsafe:!0}),f(q,"catch",W["catch"],{unsafe:!0}));try{delete q.constructor}catch(ye){}m&&m(q,W)}a({global:!0,wrap:!0,forced:ae},{Promise:H}),v(H,B,!1,!0),g(B),s=l(B),a({target:B,stat:!0,forced:ae},{reject:function(e){var t=Q(this);return h(t.reject,void 0,e),t.promise}}),a({target:B,stat:!0,forced:c||ae},{resolve:function(e){return O(c&&this===s?H:this,e)}}),a({target:B,stat:!0,forced:ce},{all:function(e){var t=this,n=Q(t),i=n.resolve,r=n.reject,s=D((function(){var n=y(t.resolve),s=[],o=0,a=1;E(e,(function(e){var c=o++,u=!1;a++,h(n,t,e).then((function(e){u||(u=!0,s[c]=e,--a||i(s))}),r)})),--a||i(s)}));return s.error&&r(s.value),n.promise},race:function(e){var t=this,n=Q(t),i=n.reject,r=D((function(){var r=y(t.resolve);E(e,(function(e){h(r,t,e).then(n.resolve,i)}))}));return r.error&&i(r.value),n.promise}})},e893:function(e,t,n){var i=n("1a2d"),r=n("56ef"),s=n("06cf"),o=n("9bf2");e.exports=function(e,t){for(var n=r(t),a=o.f,c=s.f,u=0;u<n.length;u++){var l=n[u];i(e,l)||a(e,l,c(t,l))}}},e95a:function(e,t,n){var i=n("b622"),r=n("3f8c"),s=i("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(r.Array===e||o[s]===e)}},f069:function(e,t,n){"use strict";var i=n("59ed"),r=function(e){var t,n;this.promise=new e((function(e,i){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=i})),this.resolve=i(t),this.reject=i(n)};e.exports.f=function(e){return new r(e)}},f36a:function(e,t,n){var i=n("e330");e.exports=i([].slice)},f5df:function(e,t,n){var i=n("da84"),r=n("00ee"),s=n("1626"),o=n("c6b6"),a=n("b622"),c=a("toStringTag"),u=i.Object,l="Arguments"==o(function(){return arguments}()),h=function(e,t){try{return e[t]}catch(n){}};e.exports=r?o:function(e){var t,n,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=h(t=u(e),c))?n:l?o(t):"Object"==(i=o(t))&&s(t.callee)?"Arguments":i}},f772:function(e,t,n){var i=n("5692"),r=n("90e3"),s=i("keys");e.exports=function(e){return s[e]||(s[e]=r(e))}},fc6a:function(e,t,n){var i=n("44ad"),r=n("1d80");e.exports=function(e){return i(r(e))}},fdbf:function(e,t,n){var i=n("4930");e.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(e,t,n){var i=n("da84");e.exports=i.Promise}}]);
//# sourceMappingURL=chunk-vendors.535338cc.js.map