!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).enigma=t()}(this,function(){"use strict";var c={};function r(){r.init.call(this)}c.isObject=function(e){return"object"==typeof e&&null!==e},c.isNumber=function(e){return"number"==typeof e},c.isUndefined=function(e){return void 0===e},c.isFunction=function(e){return"function"==typeof e};var n=r;(r.EventEmitter=r).prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.init=function(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0},r.prototype.setMaxListeners=function(e){if(!c.isNumber(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},r.prototype.emit=function(e){var t,n,r,o,i,s;if(this._events||(this._events={}),"error"===e&&!this._events.error)throw(t=arguments[1])instanceof Error?t:Error('Uncaught, unspecified "error" event.');if(n=this._events[e],c.isUndefined(n))return!1;if(c.isFunction(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:for(r=arguments.length,o=new Array(r-1),i=1;i<r;i++)o[i-1]=arguments[i];n.apply(this,o)}else if(c.isObject(n)){for(r=arguments.length,o=new Array(r-1),i=1;i<r;i++)o[i-1]=arguments[i];for(r=(s=n.slice()).length,i=0;i<r;i++)s[i].apply(this,o)}return!0},r.prototype.on=r.prototype.addListener=function(e,t){var n;if(!c.isFunction(t))throw TypeError("listener must be a function");(this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,c.isFunction(t.listener)?t.listener:t),this._events[e]?c.isObject(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,c.isObject(this._events[e])&&!this._events[e].warned)&&((n=c.isUndefined(this._maxListeners)?r.defaultMaxListeners:this._maxListeners)&&0<n&&this._events[e].length>n&&(this._events[e].warned=!0,c.isFunction(console.error)&&console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),c.isFunction(console.trace)&&console.trace()));return this},r.prototype.once=function(e,t){if(!c.isFunction(t))throw TypeError("listener must be a function");var n=!1;function r(){this.removeListener(e,r),n||(n=!0,t.apply(this,arguments))}return r.listener=t,this.on(e,r),this},r.prototype.removeListener=function(e,t){var n,r,o,i;if(!c.isFunction(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(o=(n=this._events[e]).length,r=-1,n===t||c.isFunction(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(c.isObject(n)){for(i=o;0<i--;)if(n[i]===t||n[i].listener&&n[i].listener===t){r=i;break}if(r<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],c.isFunction(n))this.removeListener(e,n);else if(Array.isArray(n))for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},r.prototype.listeners=function(e){return this._events&&this._events[e]?c.isFunction(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.listenerCount=function(e,t){return e._events&&e._events[t]?c.isFunction(e._events[t])?1:e._events[t].length:0};var a=function(t){Object.keys(n.prototype).forEach(function(e){t[e]=n.prototype[e]}),n.init(t)};function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(r){var o=f();return function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){{if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")}return function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e)}(this,e)}}function l(e){var r="function"==typeof Map?new Map:void 0;return(l=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,n)}function n(){return o(e,arguments,h(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),p(n,e)})(e)}function o(e,t,n){return(o=f()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&p(o,n.prototype),o}).apply(null,arguments)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(i,l(Error));var t,n,r,o=u(i);function i(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(r=o.call(this,e)).code=t,r.enigmaError=!0,r.original=n,r}return t=i,n&&s(t.prototype,n),r&&s(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}();function v(e,t,n){return new y(t,e,n)}var d={NOT_CONNECTED:-1,OBJECT_NOT_FOUND:-2,EXPECTED_ARRAY_OF_PATCHES:-3,PATCH_HAS_NO_PARENT:-4,ENTRY_ALREADY_DEFINED:-5,NO_CONFIG_SUPPLIED:-6,PROMISE_REQUIRED:-7,SCHEMA_STRUCT_TYPE_NOT_FOUND:-8,SCHEMA_MIXIN_CANT_OVERRIDE_FUNCTION:-9,SCHEMA_MIXIN_EXTEND_NOT_ALLOWED:-10,SESSION_SUSPENDED:-11,SESSION_NOT_ATTACHED:-12};function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach(function(e){g(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=0,_=function(){function c(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);var t=this;Object.assign(t,e),this.Promise=this.config.Promise,this.definition=this.config.definition,a(t),E+=1,t.id=E,t.rpc.on("socket-error",t.onRpcError.bind(t)),t.rpc.on("closed",t.onRpcClosed.bind(t)),t.rpc.on("message",t.onRpcMessage.bind(t)),t.rpc.on("notification",t.onRpcNotification.bind(t)),t.rpc.on("traffic",t.onRpcTraffic.bind(t)),t.on("closed",function(){return t.onSessionClosed()})}var e,t,n;return e=c,n=[{key:"addToPromiseChain",value:function(e,o,i){e[o]=i;var s=e.then;e.then=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=s.apply(this,t);return c.addToPromiseChain(r,o,i),r}}}],(t=[{key:"onRpcError",value:function(e){this.suspendResume.isSuspended||this.emit("socket-error",e)}},{key:"onRpcClosed",value:function(e){var t=this;if(!this.suspendResume.isSuspended&&1e3!==e.code&&4e3!==e.code)if(this.config.suspendOnClose){var n=e.code,r=e.reason;this.suspendResume.suspend().then(function(){return t.emit("suspended",{initiator:"network",code:n,reason:r})})}else this.emit("closed",e)}},{key:"onRpcMessage",value:function(e){var t=this;this.suspendResume.isSuspended||(e.change&&e.change.forEach(function(e){return t.emitHandleChanged(e)}),e.close&&e.close.forEach(function(e){return t.emitHandleClosed(e)}))}},{key:"onRpcNotification",value:function(e){this.emit("notification:*",e.method,e.params),this.emit("notification:".concat(e.method),e.params)}},{key:"onRpcTraffic",value:function(e,t,n){this.emit("traffic:*",e,t),this.emit("traffic:".concat(e),t);var r=this.apis.getApi(n);r&&(r.emit("traffic:*",e,t),r.emit("traffic:".concat(e),t))}},{key:"onSessionClosed",value:function(){this.apis.getApis().forEach(function(e){e.api.emit("closed"),e.api.removeAllListeners()}),this.apis.clear()}},{key:"getObjectApi",value:function(e){var t=e.handle,n=e.id,r=e.type,o=e.genericType,i=this.apis.getApi(t);return i||(i=this.definition.generate(r)(this,t,n,o),this.apis.add(t,i),i)}},{key:"open",value:function(){var t=this;if(!this.globalPromise){var e={handle:-1,id:"Global",type:"Global",genericType:"Global"};this.globalPromise=this.rpc.open().then(function(){return t.getObjectApi(e)}).then(function(e){return t.emit("opened"),e})}return this.globalPromise}},{key:"send",value:function(r){var o=this;if(this.suspendResume.isSuspended)return this.Promise.reject(v(d.SESSION_SUSPENDED,"Session suspended",this.rpc.closeEvent));r.id=this.rpc.createRequestId();var e=this.intercept.executeRequests(this,this.Promise.resolve(r)).then(function(e){var t=b(b({},o.config.protocol),e);delete t.outKey;var n=o.rpc.send(t);return e.retry=function(){return o.send(r)},o.intercept.executeResponses(o,n,e)});return c.addToPromiseChain(e,"requestId",r.id),e}},{key:"suspend",value:function(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:4e3,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";return this.suspendResume.suspend(t,n).then(function(){return e.emit("suspended",{initiator:"manual",code:t,reason:n})})}},{key:"resume",value:function(e){var t=this;return this.suspendResume.resume(e).then(function(e){return t.emit("resumed"),e})}},{key:"close",value:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1e3,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";return this.globalPromise=void 0,this.rpc.close(e,n).then(function(e){return t.emit("closed",e)})}},{key:"emitHandleChanged",value:function(e){var t=this.apis.getApi(e);t&&t.emit("changed")}},{key:"emitHandleClosed",value:function(e){var t=this.apis.getApi(e);t&&(t.emit("closed"),t.removeAllListeners())}}])&&O(e.prototype,t),n&&O(e,n),Object.defineProperty(e,"prototype",{writable:!1}),c}();function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.entries={}}var t,n,r;return t=e,(n=[{key:"add",value:function(e,t){if(e+="",void 0!==this.entries[e])throw v(d.ENTRY_ALREADY_DEFINED,"Entry already defined with key ".concat(e));this.entries[e]=t}},{key:"set",value:function(e,t){e+="",this.entries[e]=t}},{key:"remove",value:function(e){delete this.entries[e]}},{key:"get",value:function(e){return this.entries[e]}},{key:"getAll",value:function(){var t=this;return Object.keys(this.entries).map(function(e){return{key:e,value:t.entries[e]}})}},{key:"getKey",value:function(t){var n=this;return Object.keys(this.entries).filter(function(e){return n.entries[e]===t})[0]}},{key:"clear",value:function(){this.entries={}}}])&&w(t.prototype,n),r&&w(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var S=Object.prototype.hasOwnProperty;function A(e){return e.substring(0,1).toLowerCase()+e.substring(1)}var T=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.config=e,this.Promise=e.Promise,this.schema=e.schema,this.mixins=new j,this.types=new j}var e,n,r;return e=t,(n=[{key:"registerMixin",value:function(e){var n=this,t=e.types,r=e.type,o=e.extend,i=e.override,s=e.init;Array.isArray(t)||(t=[t]),r&&t.push(r);var c={extend:o,override:i,init:s};t.forEach(function(e){var t=n.mixins.get(e);t?t.push(c):n.mixins.add(e,[c])})}},{key:"generate",value:function(e){var t=this.types.get(e);if(t)return t;if(!this.schema.structs[e])throw v(d.SCHEMA_STRUCT_TYPE_NOT_FOUND,"".concat(e," not found"));var n=this.generateApi(e,this.schema.structs[e]);return this.types.add(e,n),n}},{key:"generateApi",value:function(c,e){var u=Object.create({});return this.generateDefaultApi(u,e),this.mixinType(c,u),this.mixinNamedParamFacade(u,e),function(e,t,n,r){var o=this,i=Object.create(u);a(i),Object.defineProperties(i,{session:{enumerable:!0,value:e},handle:{enumerable:!0,value:t,writable:!0},id:{enumerable:!0,value:n},type:{enumerable:!0,value:c},genericType:{enumerable:!0,value:r}});var s=this.mixins.get(c)||[];return r!==c&&(this.mixinType(r,i),s=s.concat(this.mixins.get(r)||[])),s.forEach(function(e){"function"==typeof e.init&&e.init({config:o.config,api:i})}),i}.bind(this)}},{key:"generateDefaultApi",value:function(n,i){Object.keys(i).forEach(function(r){var e=i[r].Out,o=1===e.length?e[0].Name:-1,t=A(r);n[t]=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.session.send({handle:this.handle,method:r,params:t,outKey:o})}})}},{key:"mixinType",value:function(s,c){var e=this.mixins.get(s);e&&e.forEach(function(e){var t=e.extend,n=void 0===t?{}:t,r=e.override,i=void 0===r?{}:r;Object.keys(i).forEach(function(r){if("function"!=typeof c[r]||"function"!=typeof i[r])throw v(d.SCHEMA_MIXIN_CANT_OVERRIDE_FUNCTION,"No function to override. Type: ".concat(s," function: ").concat(r));var o=c[r];c[r]=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return i[r].apply(this,[o.bind(this)].concat(t))}}),Object.keys(n).forEach(function(e){if("function"==typeof c[e]&&"function"==typeof n[e])throw v(d.SCHEMA_MIXIN_EXTEND_NOT_ALLOWED,"Extend is not allowed for this mixin. Type: ".concat(s," function: ").concat(e));c[e]=n[e]})})}},{key:"mixinNamedParamFacade",value:function(n,i){Object.keys(i).forEach(function(e){var t=A(e),r=n[t],o=i[e].In.reduce(function(e,t){return e[t.Name]=t.DefaultValue,e},{});n[t]=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e,t){for(var n=arguments.length,r=new Array(2<n?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return 1!==r.length||"object"!==k(r[0])||Array.isArray(r[0])||Object.keys(r[0]).every(function(e){return S.call(t,e)})&&(r=Object.keys(t).map(function(e){return r[0][e]||t[e]})),e.apply(this,r)}.apply(this,[r,o].concat(t))}})}}])&&P(e.prototype,n),r&&P(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var N=function(){function o(e,t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),a(this),this.id=e,this.handle=t,this.resolve=n,this.reject=r}var e,t,n;return e=o,(t=[{key:"resolveWith",value:function(e){this.resolve(e),this.emit("resolved",this.id)}},{key:"rejectWith",value:function(e){this.reject(e),this.emit("rejected",this.id)}}])&&R(e.prototype,t),n&&R(e,n),Object.defineProperty(e,"prototype",{writable:!1}),o}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Object.assign(this,e),a(this),this.resolvers={},this.requestId=0,this.openedPromise=void 0,this.closeEvent=void 0}var e,n,r;return e=t,(n=[{key:"open",value:function(){var n=this;if(!(0<arguments.length&&void 0!==arguments[0]&&arguments[0])&&this.openedPromise)return this.openedPromise;try{this.socket=this.createSocket(this.url)}catch(e){return this.Promise.reject(e)}return this.socket.onopen=this.onOpen.bind(this),this.socket.onclose=this.onClose.bind(this),this.socket.onerror=this.onError.bind(this),this.socket.onmessage=this.onMessage.bind(this),this.openedPromise=new this.Promise(function(e,t){return n.registerResolver("opened",null,e,t)}),this.closedPromise=new this.Promise(function(e,t){return n.registerResolver("closed",null,e,t)}),this.openedPromise}},{key:"onOpen",value:function(){var e=this;this.resolvers.opened.resolveWith(function(){return e.closedPromise})}},{key:"onClose",value:function(e){this.emit("closed",e),this.closeEvent=e,this.resolvers&&this.resolvers.closed&&this.resolvers.closed.resolveWith(e),this.rejectAllOutstandingResolvers(v(d.NOT_CONNECTED,"Socket closed",e))}},{key:"close",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1e3,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";return this.socket&&(this.socket.close(e,t),this.socket=null),this.closedPromise}},{key:"onError",value:function(e){this.resolvers.opened?this.resolvers.opened.rejectWith(e):this.emit("socket-error",e),this.rejectAllOutstandingResolvers(v(d.NOT_CONNECTED,"Socket error",e))}},{key:"onMessage",value:function(e){var t=JSON.parse(e.data),n=this.resolvers[t.id]||{};this.emit("traffic","received",t,n.handle),void 0!==t.id?(this.emit("message",t),this.resolvers[t.id].resolveWith(t)):this.emit(t.params?"notification":"message",t)}},{key:"rejectAllOutstandingResolvers",value:function(t){var n=this;Object.keys(this.resolvers).forEach(function(e){"opened"!==e&&"closed"!==e&&n.resolvers[e].rejectWith(t)})}},{key:"unregisterResolver",value:function(e){this.resolvers[e].removeAllListeners(),delete this.resolvers[e]}},{key:"registerResolver",value:function(e,t,n,r){var o=this,i=new N(e,t,n,r);(this.resolvers[e]=i).on("resolved",function(e){return o.unregisterResolver(e)}),i.on("rejected",function(e){return o.unregisterResolver(e)})}},{key:"send",value:function(n){var r=this;if(this.socket&&this.socket.readyState===this.socket.OPEN)return n.id||(n.id=this.createRequestId()),n.jsonrpc="2.0",new this.Promise(function(e,t){return r.socket.send(JSON.stringify(n)),r.emit("traffic","sent",n,n.handle),r.registerResolver(n.id,n.handle,e,t)});var e=v(d.NOT_CONNECTED,"Not connected",this.closeEvent);return this.Promise.reject(e)}},{key:"createRequestId",value:function(){return this.requestId+=1,this.requestId}}])&&C(e.prototype,n),r&&C(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function u(e){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),Object.assign(this,e),this.isSuspended=!1,this.rpc.on("traffic",function(e,t){"sent"===e&&"OpenDoc"===t.method&&(n.openDocParams=t.params)})}var e,t,n;return e=u,n=[{key:"buildGetMethodName",value:function(e){return"Field"===e||"Variable"===e?null:"GenericVariable"===e?"GetVariableById":e.replace("Generic","Get")}}],(t=[{key:"restoreRpcConnection",value:function(t){var n=this;return this.reopen(5e3).then(function(e){return"SESSION_CREATED"===e&&t?n.Promise.reject(v(d.SESSION_NOT_ATTACHED,"Not attached")):n.Promise.resolve()})}},{key:"restoreGlobal",value:function(e){var t=this.apis.getApisByType("Global").pop();return e.push(t.api),this.Promise.resolve()}},{key:"restoreDoc",value:function(n,r){var o=this,i=this.apis.getApisByType("Doc").pop();return i?this.rpc.send({method:"GetActiveDoc",handle:-1,params:[]}).then(function(e){return e.error&&o.openDocParams?o.rpc.send({method:"OpenDoc",handle:-1,params:o.openDocParams}):e}).then(function(e){if(e.error)return n.push(i.api),o.Promise.resolve();var t=e.result.qReturn.qHandle;return i.api.handle=t,r.push(i.api),o.Promise.resolve(i.api)}):this.Promise.resolve()}},{key:"restoreDocObjects",value:function(r,o,i){var s=this,c=[],e=this.apis.getApis().map(function(e){return e.api}).filter(function(e){return"Global"!==e.type&&"Doc"!==e.type});return r?(e.forEach(function(t){var e=u.buildGetMethodName(t.type);if(e){var n=s.rpc.send({method:e,handle:r.handle,params:[t.id]}).then(function(e){e.error||!e.result.qReturn.qHandle?o.push(t):(t.handle=e.result.qReturn.qHandle,i.push(t))});c.push(n)}else o.push(t)}),this.Promise.all(c)):(e.forEach(function(e){return o.push(e)}),this.Promise.resolve())}},{key:"suspend",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:4e3,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";return this.isSuspended=!0,this.rpc.close(e,t)}},{key:"resume",value:function(e){var t=this,n=[],r=[];return this.restoreRpcConnection(e).then(function(){return t.restoreGlobal(n)}).then(function(){return t.restoreDoc(r,n)}).then(function(e){return t.restoreDocObjects(e,r,n)}).then(function(){t.isSuspended=!1,t.apis.clear(),r.forEach(function(e){e.emit("closed"),e.removeAllListeners()}),n.forEach(function(e){t.apis.add(e.handle,e),"Global"!==e.type&&e.emit("changed")})}).catch(function(e){return t.rpc.close().then(function(){return t.Promise.reject(e)})})}},{key:"reopen",value:function(e){var t,n,r=this,o=!1,i=new this.Promise(function(e){n=e}),s=function(e){"OnConnected"===e.method&&(clearTimeout(t),n(e.params.qSessionState),o=!0)};return this.rpc.on("notification",s),this.rpc.open(!0).then(function(){return o||(t=setTimeout(function(){return n("SESSION_CREATED")},e)),i}).then(function(e){return r.rpc.removeListener("notification",s),e}).catch(function(e){return r.rpc.removeListener("notification",s),r.Promise.reject(e)})}}])&&D(e.prototype,t),n&&D(e,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(),x="qSuccess";function L(e,t,n){if(n&&n.qHandle&&n.qType)return e.getObjectApi({handle:n.qHandle,type:n.qType,id:n.qGenericId,genericType:n.qGenericType});if(n&&null===n.qHandle&&null===n.qType){var r=v(d.OBJECT_NOT_FOUND,"Object not found");return e.config.Promise.reject(r)}return n}var F=Object.prototype.hasOwnProperty,M=Object.prototype.toString,H=Object.defineProperty,G=Object.getOwnPropertyDescriptor,U=function(e){return"function"==typeof Array.isArray?Array.isArray(e):"[object Array]"===M.call(e)},W=function(e){if(!e||"[object Object]"!==M.call(e))return!1;var t,n=F.call(e,"constructor"),r=e.constructor&&e.constructor.prototype&&F.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!n&&!r)return!1;for(t in e);return void 0===t||F.call(e,t)},Y=function(e,t){H&&"__proto__"===t.name?H(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},B=function(e,t){if("__proto__"===t){if(!F.call(e,t))return;if(G)return G(e,t).value}return e[t]};function V(e){return function(e){if(Array.isArray(e))return X(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return X(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return X(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var K=function e(){var t,n,r,o,i,s,c=arguments[0],u=1,a=arguments.length,l=!1;for("boolean"==typeof c&&(l=c,c=arguments[1]||{},u=2),(null==c||"object"!=typeof c&&"function"!=typeof c)&&(c={});u<a;++u)if(null!=(t=arguments[u]))for(n in t)r=B(c,n),c!==(o=B(t,n))&&(l&&o&&(W(o)||(i=U(o)))?(s=i?(i=!1,r&&U(r)?r:[]):r&&W(r)?r:{},Y(c,{name:n,newValue:e(l,s,o)})):void 0!==o&&Y(c,{name:n,newValue:o}));return c}.bind(null,!0),J={},$=Array.isArray;function Q(e){return null!=e&&!Array.isArray(e)&&"object"===t(e)}function z(e){return void 0===e}function Z(e,t){return"function"==typeof e[t]||"$$"===t.substring(0,2)||"_"===t.substring(0,1)}function ee(r,e){var o,i=e.substring(1).split("/").slice(0,-1);return i.forEach(function(e,t){if(t!==i.length){o=+e;var n=isNaN(o)?{}:[];r[o||e]=z(r[o||e])?n:r[e],r=r[o||e]}}),r}function te(t,n){var r=!0;if(Q(t)&&Q(n))return Object.keys(t).length===Object.keys(n).length&&(Object.keys(t).forEach(function(e){te(t[e],n[e])||(r=!1)}),r);if($(t)&&$(n)){if(t.length!==n.length)return!1;for(var e=0,o=t.length;e<o;e+=1)if(!te(t[e],n[e]))return!1;return!0}return t===n}function ne(e){return(ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}J.generate=function(i,s,c){c=c||"";var u=[];return Object.keys(s).forEach(function(e){var t,n=(t=s[e])?K({},{val:t}).val:t,r=i[e],o="".concat(c,"/").concat(e);te(n,r)||Z(s,e)||(z(r)?u.push({op:"add",path:o,value:n}):Q(n)&&Q(r)?u=u.concat(J.generate(r,n,o)):$(n)&&$(r)?u=u.concat(function(e,t,n){var r=[],o=e.slice(),i=-1;function s(e,t,n){if(e[n]&&z(e[n].qInfo))return null;if(e[n]&&e[n].qInfo.qId===t)return n;for(var r=0,o=e.length;r<o;r+=1)if(e[r]&&e[r].qInfo.qId===t)return r;return-1}if(te(t,o))return r;if(!z(t[0])&&z(t[0].qInfo))return r.push({op:"replace",path:n,value:t}),r;for(var c=o.length-1;0<=c;c-=1)-1===(i=s(t,o[c].qInfo&&o[c].qInfo.qId,c))?(r.push({op:"remove",path:"".concat(n,"/").concat(c)}),o.splice(c,1)):r=r.concat(J.generate(o[c],t[i],"".concat(n,"/").concat(c)));for(var u=0,a=t.length;u<a;u+=1)-1===(i=s(o,t[u].qInfo&&t[u].qInfo.qId))?(r.push({op:"add",path:"".concat(n,"/").concat(u),value:t[u]}),o.splice(u,0,t[u])):i!==u&&(r.push({op:"move",path:"".concat(n,"/").concat(u),from:"".concat(n,"/").concat(i)}),o.splice(u,0,o.splice(i,1)[0]));return r}(r,n,o)):u.push({op:"replace",path:"".concat(c,"/").concat(e),value:n}))}),Object.keys(i).forEach(function(e){z(s[e])&&!Z(i,e)&&u.push({op:"remove",path:"".concat(c,"/").concat(e)})}),u},J.apply=function(l,e){e.forEach(function(e){var t,n=ee(l,e.path),r=e.path.split("/").splice(-1)[0],o=r&&isNaN(+r)?n[r]:n[+r]||n,i=e.from?e.from.split("/").splice(-1)[0]:null;if("/"===e.path&&(n=null,o=l),"add"===e.op||"replace"===e.op)if($(n))"-"===r&&(r=n.length),n.splice(+r,"add"===e.op?0:1,e.value);else if($(o)&&$(e.value))for(var s=o.length=0;s<e.value.length;s+=1e3){var c,u=e.value.slice(s,s+1e3);(c=o).push.apply(c,V(u))}else if(Q(o)&&Q(e.value))t=o,Object.keys(t).forEach(function(e){Object.getOwnPropertyDescriptor(t,e).configurable&&!Z(t,e)&&delete t[e]}),K(o,e.value);else{if(!n)throw v(d.PATCH_HAS_NO_PARENT,"Patchee is not an object we can patch");n[r]=e.value}else if("move"===e.op){var a=ee(l,e.from);$(n)?n.splice(+r,0,a.splice(+i,1)[0]):(n[r]=a[i],delete a[i])}else"remove"===e.op&&($(n)?n.splice(+r,1):delete n[r])})},J.clone=function(e){return K({},e)},J.createPatch=function(e,t,n){var r={op:e.toLowerCase(),path:n};return"move"===r.op?r.from=t:void 0!==t&&(r.value=t),r},J.updateObject=function(e,t){Object.keys(e).length?J.apply(e,J.generate(e,t)):K(e,t)};var re={},oe=function(e,t){!function(e){if(!re[e.id]){var t={};re[e.id]=t,e.on("traffic:received",function(e){return e.close&&e.close.forEach(function(e){return delete t[e]})}),e.on("closed",function(){return delete re[e.id]})}}(e);var n=re[e.id];return n[t]||(n[t]=new j),n[t]},ie=function(e,t,n,r){var o=oe(e,t),i=o.get(n);return void 0===i&&(i=Array.isArray(r[0].value)?[]:{}),r.length&&("/"===r[0].path&&"object"!==ne(r[0].value)?i=r[0].value:J.apply(i,r),o.set(n,i)),i};function se(t,n,e){var r=e.delta,o=e.result;return r?(Object.keys(o).forEach(function(e){if(!Array.isArray(o[e]))throw v(d.EXPECTED_ARRAY_OF_PATCHES,"Unexpected RPC response, expected array of patches");o[e]=ie(t,n.handle,"".concat(n.method,"-").concat(e),o[e])}),JSON.parse(JSON.stringify(e))):e}se.sessions=re;var ce="qReturn";function ue(e){return function(e){if(Array.isArray(e))return ae(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return ae(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ae(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function le(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var fe=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Object.assign(this,e),this.request=[{onFulfilled:function(e,t){var n=e.config.protocol.delta&&-1!==t.outKey&&t.outKey!==x;return n&&(t.delta=n),t}}].concat(ue(this.request||[])),this.response=[{onFulfilled:function(e,t,n){if(void 0===n.error)return n;var r=n.error,o=new Error(r.message);return o.code=r.code,o.parameter=r.parameter,e.config.Promise.reject(o)}},{onFulfilled:se},{onFulfilled:function(e,t,n){return n.result}},{onFulfilled:function(e,t,n){return"CreateSessionApp"===t.method||"CreateSessionAppFromApp"===t.method?n[ce].qGenericId=n.qSessionAppId||n[ce].qGenericId:"GetInteract"!==t.method&&"StoreTempSelectionState"!==t.method||delete n[ce],hasOwnProperty.call(n,ce)?n[ce]:-1!==t.outKey?n[t.outKey]:n}}].concat(ue(this.response||[]),[{onFulfilled:L}])}var e,n,r;return e=t,(n=[{key:"executeRequests",value:function(r,e){var o=this;return this.request.reduce(function(e,t){var n=t.onFulfilled&&t.onFulfilled.bind(o,r);return e.then(n)},e)}},{key:"executeResponses",value:function(n,e,r){var o=this;return this.response.reduce(function(e,t){return e.then(t.onFulfilled&&t.onFulfilled.bind(o,n,r),t.onRejected&&t.onRejected.bind(o,n,r))},e)}}])&&le(e.prototype,n),r&&le(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function pe(e){return(pe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function he(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ye(){return(ye="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=me(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}}).apply(this,arguments)}function ve(e,t){return(ve=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function de(r){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=me(r);if(o){var n=me(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){{if(t&&("object"===pe(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")}return function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e)}(this,e)}}function me(e){return(me=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var be=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ve(e,t)}(i,j);var t,n,r,o=de(i);function i(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),o.apply(this,arguments)}return t=i,(n=[{key:"add",value:function(e,t){var n=this,r={api:t};return ye(me(i.prototype),"add",this).call(this,e.toString(),r),t.on("closed",function(){return n.remove(e)}),r}},{key:"getApi",value:function(e){var t=void 0!==e?this.get(e.toString()):void 0;return t&&t.api}},{key:"getApis",value:function(){return ye(me(i.prototype),"getAll",this).call(this).map(function(e){return{handle:e.key,api:e.value.api}})}},{key:"getApisByType",value:function(t){return this.getApis().filter(function(e){return e.api.type===t})}}])&&he(t.prototype,n),r&&he(t,r),Object.defineProperty(t,"prototype",{writable:!1}),i}();function ge(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"getSession",value:function(e){var t=e.createSocket,n=e.Promise,r=e.requestInterceptors,o=e.responseInterceptors,i=e.url,s=new be,c=new fe({apis:s,Promise:n,request:r,response:o}),u=new I({createSocket:t,Promise:n,url:i}),a=new q({apis:s,Promise:n,rpc:u});return new _({apis:s,config:e,intercept:c,rpc:u,suspendResume:a})}},{key:"configureDefaults",value:function(e){if(!e)throw v(d.NO_CONFIG_SUPPLIED,"You need to supply a configuration.");if(!e.Promise&&"undefined"==typeof Promise)throw v(d.PROMISE_REQUIRED,"Your environment has no Promise implementation. You must provide a Promise implementation in the config.");"function"!=typeof e.createSocket&&"function"==typeof WebSocket&&(e.createSocket=function(e){return new WebSocket(e)}),void 0===e.suspendOnClose&&(e.suspendOnClose=!1),e.protocol=e.protocol||{},e.protocol.delta=void 0===e.protocol.delta||e.protocol.delta,e.Promise=e.Promise||Promise,e.mixins=e.mixins||[],e.definition=e.definition||new T(e)}},{key:"create",value:function(t){return e.configureDefaults(t),t.mixins.forEach(function(e){t.definition.registerMixin(e)}),e.getSession(t)}}],(n=null)&&ge(t.prototype,n),r&&ge(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}()});
//# sourceMappingURL=enigma.min.js.map