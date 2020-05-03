function _createForOfIteratorHelper(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=_unsupportedIterableToArray(t))){var e=0,i=function(){};return{s:i,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,s,o=!0,a=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){a=!0,s=t},f:function(){try{o||null==n.return||n.return()}finally{if(a)throw s}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(i):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){return function(){var e,i=_getPrototypeOf(t);if(_isNativeReflectConstruct()){var n=_getPrototypeOf(this).constructor;e=Reflect.construct(i,arguments,n)}else e=i.apply(this,arguments);return _possibleConstructorReturn(this,e)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{eHkp:function(t,e,i){"use strict";i.r(e),i.d(e,"AddNewModule",(function(){return G}));var n,s,o=i("tyNb"),a=i("3Pt+"),r=i("GKOy"),c=i("5yWh"),u=i("giWJ"),l=i("fXoL"),h=i("7F1V"),d=i("ofXK"),f=function(t){return{"is-invalid":t}},m=[{path:"",component:(n=function(){function t(e,i,n,s,o){_classCallCheck(this,t),this.router=e,this.latestNewsService=i,this.route=n,this.fb=s,this.Log=o}return _createClass(t,[{key:"ngOnInit",value:function(){this.initForm()}},{key:"onSubmit",value:function(t){this.Log.loggingInfo("Adding new News"),this.latestNewsService.addNews(t).subscribe(),this.router.navigate(["../"],{relativeTo:this.route})}},{key:"onCancel",value:function(){this.router.navigate(["../"],{relativeTo:this.route})}},{key:"initForm",value:function(){this.addNewsForm=this.fb.group({id:["",[a.m.required]],newsTitle:["",[a.m.required,a.m.minLength(5)]],imagePath:["",a.m.required],description:["",[a.m.required,a.m.minLength(5)]],summary:["",[a.m.required,a.m.minLength(5)]],fullNews:["",[a.m.required,a.m.minLength(5)]]})}}]),t}(),n.\u0275fac=function(t){return new(t||n)(l.Kb(o.b),l.Kb(c.a),l.Kb(o.a),l.Kb(a.b),l.Kb(h.a))},n.\u0275cmp=l.Eb({type:n,selectors:[["app-add-new-news"]],features:[l.yb([c.a,r.a,u.a])],decls:43,vars:21,consts:[[1,"container","py-5"],[1,"row"],[1,"col-lg-11","mx-auto"],[1,"bg-white","rounded-lg","shadow-sm","p-5"],[1,"row","mb-4"],[1,"col-lg-8","mx-auto","text-center"],[1,"display-4"],[1,"tab-content"],["id","nav-tab-card",1,"tab-pane","fade","show","active"],["novalidate","",3,"formGroup","ngSubmit"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","id","placeholder","Please input the unique id number",1,"form-control",3,"ngClass"],["type","text","id","name","formControlName","newsTitle","placeholder","Enter the news Title to display",1,"form-control",3,"ngClass"],["for","summay"],["type","text","id","summary","formControlName","summary","placeholder","Summary....",1,"form-control",3,"ngClass"],["for","imagePath"],["type","text","id","imagePath","formControlName","imagePath","placeholder","Please provide the URL of the Image",1,"form-control",3,"ngClass"],["imagePath",""],[1,"img-responsive",3,"src"],["for","description"],["type","text","id","description","formControlName","description","placeholder","Description.....","rows","6",1,"form-control",3,"ngClass"],["for","fullNews"],["type","text","id","fullNews","formControlName","fullNews","placeholder","Please Enter the Covid-news ","rows","6",1,"form-control",3,"ngClass"],["type","submit",1,"btn","btn-success","btn-lg",3,"disabled"],["type","button",1,"btn","btn-danger","btn-lg",2,"margin-left","5px",3,"click"]],template:function(t,e){if(1&t&&(l.Pb(0,"div",0),l.Pb(1,"div",1),l.Pb(2,"div",2),l.Pb(3,"div",3),l.Pb(4,"div",4),l.Pb(5,"div",5),l.Pb(6,"h1",6),l.nc(7,"Add News"),l.Ob(),l.Ob(),l.Ob(),l.Pb(8,"div",7),l.Pb(9,"div",8),l.Pb(10,"form",9),l.Xb("ngSubmit",(function(){return e.onSubmit(e.addNewsForm.value)})),l.Pb(11,"div",10),l.Pb(12,"label",11),l.nc(13,"Input Id"),l.Ob(),l.Lb(14,"input",12),l.Ob(),l.Pb(15,"div",10),l.Pb(16,"label",11),l.nc(17,"Title"),l.Ob(),l.Lb(18,"input",13),l.Ob(),l.Pb(19,"div",10),l.Pb(20,"label",14),l.nc(21,"Summary"),l.Ob(),l.Lb(22,"input",15),l.Ob(),l.Pb(23,"div",10),l.Pb(24,"label",16),l.nc(25,"Image URL"),l.Ob(),l.Lb(26,"input",17,18),l.Ob(),l.Lb(28,"img",19),l.Pb(29,"div",10),l.Pb(30,"label",20),l.nc(31,"Description"),l.Ob(),l.Pb(32,"textarea",21),l.nc(33,"                "),l.Ob(),l.Ob(),l.Pb(34,"div",10),l.Pb(35,"label",22),l.nc(36,"Full News"),l.Ob(),l.Pb(37,"textarea",23),l.nc(38,"                  "),l.Ob(),l.Ob(),l.Pb(39,"button",24),l.nc(40,"Save"),l.Ob(),l.Pb(41,"button",25),l.Xb("click",(function(){return e.onCancel()})),l.nc(42,"Cancel"),l.Ob(),l.Ob(),l.Ob(),l.Ob(),l.Ob(),l.Ob(),l.Ob(),l.Ob()),2&t){var i=l.gc(27);l.zb(10),l.cc("formGroup",e.addNewsForm),l.zb(4),l.cc("ngClass",l.ec(9,f,(e.addNewsForm.get("id").touched||e.addNewsForm.get("id").dirty)&&!e.addNewsForm.get("id").valid)),l.zb(4),l.cc("ngClass",l.ec(11,f,(e.addNewsForm.get("newsTitle").touched||e.addNewsForm.get("newsTitle").dirty)&&!e.addNewsForm.get("newsTitle").valid)),l.zb(4),l.cc("ngClass",l.ec(13,f,(e.addNewsForm.get("summary").touched||e.addNewsForm.get("summary").dirty)&&!e.addNewsForm.get("summary").valid)),l.zb(4),l.cc("ngClass",l.ec(15,f,(e.addNewsForm.get("imagePath").touched||e.addNewsForm.get("imagePath").dirty)&&!e.addNewsForm.get("imagePath").valid)),l.zb(2),l.cc("src",i.value,l.jc),l.zb(4),l.cc("ngClass",l.ec(17,f,(e.addNewsForm.get("description").touched||e.addNewsForm.get("description").dirty)&&!e.addNewsForm.get("description").valid)),l.zb(5),l.cc("ngClass",l.ec(19,f,(e.addNewsForm.get("fullNews").touched||e.addNewsForm.get("fullNews").dirty)&&!e.addNewsForm.get("fullNews").valid)),l.zb(2),l.cc("disabled",!e.addNewsForm.valid)}},directives:[a.n,a.h,a.d,a.a,a.g,a.c,d.i],styles:["input.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]}),n),canActivate:[r.a]}],p=((s=function t(){_classCallCheck(this,t)}).\u0275mod=l.Ib({type:s}),s.\u0275inj=l.Hb({factory:function(t){return new(t||s)},imports:[[o.e.forChild(m)],o.e]}),s),v=i("R0Ic"),b=i("XNiG"),g=i("jhN1"),y=["toast-component",""];function _(t,e){if(1&t){var i=l.Qb();l.Pb(0,"button",5),l.Xb("click",(function(){return l.hc(i),l.Zb().remove()})),l.Pb(1,"span",6),l.nc(2,"\xd7"),l.Ob(),l.Ob()}}function C(t,e){if(1&t&&(l.Nb(0),l.nc(1),l.Mb()),2&t){var i=l.Zb(2);l.zb(1),l.pc("[",i.duplicatesCount+1,"]")}}function O(t,e){if(1&t&&(l.Pb(0,"div"),l.nc(1),l.mc(2,C,2,1,"ng-container",4),l.Ob()),2&t){var i=l.Zb();l.Bb(i.options.titleClass),l.Ab("aria-label",i.title),l.zb(1),l.pc(" ",i.title," "),l.zb(1),l.cc("ngIf",i.duplicatesCount)}}function w(t,e){if(1&t&&l.Lb(0,"div",7),2&t){var i=l.Zb();l.Bb(i.options.messageClass),l.cc("innerHTML",i.message,l.ic)}}function T(t,e){if(1&t&&(l.Pb(0,"div",8),l.nc(1),l.Ob()),2&t){var i=l.Zb();l.Bb(i.options.messageClass),l.Ab("aria-label",i.message),l.zb(1),l.pc(" ",i.message," ")}}function k(t,e){if(1&t&&(l.Pb(0,"div"),l.Lb(1,"div",9),l.Ob()),2&t){var i=l.Zb();l.zb(1),l.lc("width",i.width+"%")}}var P,I,N,j,A,R,x,F=function(){function t(e,i,n,s,o,a){var r=this;_classCallCheck(this,t),this.toastId=e,this.config=i,this.message=n,this.title=s,this.toastType=o,this.toastRef=a,this._onTap=new b.a,this._onAction=new b.a,this.toastRef.afterClosed().subscribe((function(){r._onAction.complete(),r._onTap.complete()}))}return _createClass(t,[{key:"triggerTap",value:function(){this._onTap.next(),this.config.tapToDismiss&&this._onTap.complete()}},{key:"onTap",value:function(){return this._onTap.asObservable()}},{key:"triggerAction",value:function(t){this._onAction.next(t)}},{key:"onAction",value:function(){return this._onAction.asObservable()}}]),t}(),D=new l.q("ToastConfig"),E=function(){function t(e,i){_classCallCheck(this,t),this.component=e,this.injector=i}return _createClass(t,[{key:"attach",value:function(t,e){return this._attachedHost=t,t.attach(this,e)}},{key:"detach",value:function(){var t=this._attachedHost;if(t)return this._attachedHost=void 0,t.detach()}},{key:"setAttachedHost",value:function(t){this._attachedHost=t}},{key:"isAttached",get:function(){return null!=this._attachedHost}}]),t}(),H=function(t){_inherits(i,t);var e=_createSuper(i);function i(t,n,s){var o;return _classCallCheck(this,i),(o=e.call(this))._hostDomElement=t,o._componentFactoryResolver=n,o._appRef=s,o}return _createClass(i,[{key:"attachComponentPortal",value:function(t,e){var i,n=this,s=this._componentFactoryResolver.resolveComponentFactory(t.component);return i=s.create(t.injector),this._appRef.attachView(i.hostView),this.setDisposeFn((function(){n._appRef.detachView(i.hostView),i.destroy()})),e?this._hostDomElement.insertBefore(this._getComponentRootNode(i),this._hostDomElement.firstChild):this._hostDomElement.appendChild(this._getComponentRootNode(i)),i}},{key:"_getComponentRootNode",value:function(t){return t.hostView.rootNodes[0]}}]),i}(function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"attach",value:function(t,e){return this._attachedPortal=t,this.attachComponentPortal(t,e)}},{key:"detach",value:function(){this._attachedPortal&&this._attachedPortal.setAttachedHost(),this._attachedPortal=void 0,this._disposeFn&&(this._disposeFn(),this._disposeFn=void 0)}},{key:"setDisposeFn",value:function(t){this._disposeFn=t}}]),t}()),z=((P=function(){function t(e){_classCallCheck(this,t),this._document=e}return _createClass(t,[{key:"ngOnDestroy",value:function(){this._containerElement&&this._containerElement.parentNode&&this._containerElement.parentNode.removeChild(this._containerElement)}},{key:"getContainerElement",value:function(){return this._containerElement||this._createContainer(),this._containerElement}},{key:"_createContainer",value:function(){var t=this._document.createElement("div");t.classList.add("overlay-container"),this._document.body.appendChild(t),this._containerElement=t}}]),t}()).\u0275fac=function(t){return new(t||P)(l.Tb(d.c))},P.\u0275prov=Object(l.Gb)({factory:function(){return new P(Object(l.Tb)(d.c))},token:P,providedIn:"root"}),P),L=function(){function t(e){_classCallCheck(this,t),this._portalHost=e}return _createClass(t,[{key:"attach",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this._portalHost.attach(t,e)}},{key:"detach",value:function(){return this._portalHost.detach()}}]),t}(),S=((I=function(){function t(e,i,n,s){_classCallCheck(this,t),this._overlayContainer=e,this._componentFactoryResolver=i,this._appRef=n,this._document=s,this._paneElements=new Map}return _createClass(t,[{key:"create",value:function(t,e){return this._createOverlayRef(this.getPaneElement(t,e))}},{key:"getPaneElement",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;return this._paneElements.get(e)||this._paneElements.set(e,{}),this._paneElements.get(e)[t]||(this._paneElements.get(e)[t]=this._createPaneElement(t,e)),this._paneElements.get(e)[t]}},{key:"_createPaneElement",value:function(t,e){var i=this._document.createElement("div");return i.id="toast-container",i.classList.add(t),i.classList.add("toast-container"),e?e.getContainerElement().appendChild(i):this._overlayContainer.getContainerElement().appendChild(i),i}},{key:"_createPortalHost",value:function(t){return new H(t,this._componentFactoryResolver,this._appRef)}},{key:"_createOverlayRef",value:function(t){return new L(this._createPortalHost(t))}}]),t}()).\u0275fac=function(t){return new(t||I)(l.Tb(z),l.Tb(l.j),l.Tb(l.g),l.Tb(d.c))},I.\u0275prov=Object(l.Gb)({factory:function(){return new I(Object(l.Tb)(z),Object(l.Tb)(l.j),Object(l.Tb)(l.g),Object(l.Tb)(d.c))},token:I,providedIn:"root"}),I),B=function(){function t(e){_classCallCheck(this,t),this._overlayRef=e,this.duplicatesCount=0,this._afterClosed=new b.a,this._activate=new b.a,this._manualClose=new b.a,this._resetTimeout=new b.a,this._countDuplicate=new b.a}return _createClass(t,[{key:"manualClose",value:function(){this._manualClose.next(),this._manualClose.complete()}},{key:"manualClosed",value:function(){return this._manualClose.asObservable()}},{key:"timeoutReset",value:function(){return this._resetTimeout.asObservable()}},{key:"countDuplicate",value:function(){return this._countDuplicate.asObservable()}},{key:"close",value:function(){this._overlayRef.detach(),this._afterClosed.next(),this._manualClose.next(),this._afterClosed.complete(),this._manualClose.complete(),this._activate.complete(),this._resetTimeout.complete(),this._countDuplicate.complete()}},{key:"afterClosed",value:function(){return this._afterClosed.asObservable()}},{key:"isInactive",value:function(){return this._activate.isStopped}},{key:"activate",value:function(){this._activate.next(),this._activate.complete()}},{key:"afterActivate",value:function(){return this._activate.asObservable()}},{key:"onDuplicate",value:function(t,e){t&&this._resetTimeout.next(),e&&this._countDuplicate.next(++this.duplicatesCount)}}]),t}(),Z=function(){function t(e,i){_classCallCheck(this,t),this._toastPackage=e,this._parentInjector=i}return _createClass(t,[{key:"get",value:function(t,e,i){return t===F?this._toastPackage:this._parentInjector.get(t,e,i)}}]),t}(),M=((j=function(){function t(e,i,n,s,o){_classCallCheck(this,t),this.overlay=i,this._injector=n,this.sanitizer=s,this.ngZone=o,this.currentlyActive=0,this.toasts=[],this.index=0,this.toastrConfig=Object.assign(Object.assign({},e.default),e.config),e.config.iconClasses&&(this.toastrConfig.iconClasses=Object.assign(Object.assign({},e.default.iconClasses),e.config.iconClasses))}return _createClass(t,[{key:"show",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return this._preBuildNotification(n,t,e,this.applyConfig(i))}},{key:"success",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this._preBuildNotification(this.toastrConfig.iconClasses.success||"",t,e,this.applyConfig(i))}},{key:"error",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this._preBuildNotification(this.toastrConfig.iconClasses.error||"",t,e,this.applyConfig(i))}},{key:"info",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this._preBuildNotification(this.toastrConfig.iconClasses.info||"",t,e,this.applyConfig(i))}},{key:"warning",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this._preBuildNotification(this.toastrConfig.iconClasses.warning||"",t,e,this.applyConfig(i))}},{key:"clear",value:function(t){var e,i=_createForOfIteratorHelper(this.toasts);try{for(i.s();!(e=i.n()).done;){var n=e.value;if(void 0!==t){if(n.toastId===t)return void n.toastRef.manualClose()}else n.toastRef.manualClose()}}catch(s){i.e(s)}finally{i.f()}}},{key:"remove",value:function(t){var e=this._findToast(t);if(!e)return!1;if(e.activeToast.toastRef.close(),this.toasts.splice(e.index,1),this.currentlyActive=this.currentlyActive-1,!this.toastrConfig.maxOpened||!this.toasts.length)return!1;if(this.currentlyActive<this.toastrConfig.maxOpened&&this.toasts[this.currentlyActive]){var i=this.toasts[this.currentlyActive].toastRef;i.isInactive()||(this.currentlyActive=this.currentlyActive+1,i.activate())}return!0}},{key:"findDuplicate",value:function(t,e,i){var n,s=_createForOfIteratorHelper(this.toasts);try{for(s.s();!(n=s.n()).done;){var o=n.value;if(o.message===t)return o.toastRef.onDuplicate(e,i),o}}catch(a){s.e(a)}finally{s.f()}return null}},{key:"applyConfig",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.assign(Object.assign({},this.toastrConfig),t)}},{key:"_findToast",value:function(t){for(var e=0;e<this.toasts.length;e++)if(this.toasts[e].toastId===t)return{index:e,activeToast:this.toasts[e]};return null}},{key:"_preBuildNotification",value:function(t,e,i,n){var s=this;return n.onActivateTick?this.ngZone.run((function(){return s._buildNotification(t,e,i,n)})):this._buildNotification(t,e,i,n)}},{key:"_buildNotification",value:function(t,e,i,n){if(!n.toastComponent)throw new Error("toastComponent required");var s=this.findDuplicate(e,this.toastrConfig.resetTimeoutOnDuplicate&&n.timeOut>0,this.toastrConfig.countDuplicates);if(e&&this.toastrConfig.preventDuplicates&&null!==s)return s;this.previousToastMessage=e;var o=!1;this.toastrConfig.maxOpened&&this.currentlyActive>=this.toastrConfig.maxOpened&&(o=!0,this.toastrConfig.autoDismiss&&this.clear(this.toasts[0].toastId));var a=this.overlay.create(n.positionClass,this.overlayContainer);this.index=this.index+1;var r=e;e&&n.enableHtml&&(r=this.sanitizer.sanitize(l.H.HTML,e));var c=new B(a),u=new F(this.index,n,r,i,t,c),h=new Z(u,this._injector),d=new E(n.toastComponent,h),f=a.attach(d,this.toastrConfig.newestOnTop);c.componentInstance=f.instance;var m={toastId:this.index,message:e||"",toastRef:c,onShown:c.afterActivate(),onHidden:c.afterClosed(),onTap:u.onTap(),onAction:u.onAction(),portal:f};return o||(this.currentlyActive=this.currentlyActive+1,setTimeout((function(){m.toastRef.activate()}))),this.toasts.push(m),m}}]),t}()).\u0275fac=function(t){return new(t||j)(l.Tb(D),l.Tb(S),l.Tb(l.r),l.Tb(g.b),l.Tb(l.z))},j.\u0275prov=Object(l.Gb)({factory:function(){return new j(Object(l.Tb)(D),Object(l.Tb)(S),Object(l.Tb)(l.o),Object(l.Tb)(g.b),Object(l.Tb)(l.z))},token:j,providedIn:"root"}),j),q=((N=function(){function t(e,i,n){var s=this;_classCallCheck(this,t),this.toastrService=e,this.toastPackage=i,this.ngZone=n,this.width=-1,this.toastClasses="",this.state={value:"inactive",params:{easeTime:this.toastPackage.config.easeTime,easing:"ease-in"}},this.message=i.message,this.title=i.title,this.options=i.config,this.originalTimeout=i.config.timeOut,this.toastClasses="".concat(i.toastType," ").concat(i.config.toastClass),this.sub=i.toastRef.afterActivate().subscribe((function(){s.activateToast()})),this.sub1=i.toastRef.manualClosed().subscribe((function(){s.remove()})),this.sub2=i.toastRef.timeoutReset().subscribe((function(){s.resetTimeout()})),this.sub3=i.toastRef.countDuplicate().subscribe((function(t){s.duplicatesCount=t}))}return _createClass(t,[{key:"ngOnDestroy",value:function(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}},{key:"activateToast",value:function(){var t=this;this.state=Object.assign(Object.assign({},this.state),{value:"active"}),!0!==this.options.disableTimeOut&&"timeOut"!==this.options.disableTimeOut&&this.options.timeOut&&(this.outsideTimeout((function(){return t.remove()}),this.options.timeOut),this.hideTime=(new Date).getTime()+this.options.timeOut,this.options.progressBar&&this.outsideInterval((function(){return t.updateProgress()}),10))}},{key:"updateProgress",value:function(){if(0!==this.width&&100!==this.width&&this.options.timeOut){var t=(new Date).getTime();this.width=(this.hideTime-t)/this.options.timeOut*100,"increasing"===this.options.progressAnimation&&(this.width=100-this.width),this.width<=0&&(this.width=0),this.width>=100&&(this.width=100)}}},{key:"resetTimeout",value:function(){var t=this;clearTimeout(this.timeout),clearInterval(this.intervalId),this.state=Object.assign(Object.assign({},this.state),{value:"active"}),this.outsideTimeout((function(){return t.remove()}),this.originalTimeout),this.options.timeOut=this.originalTimeout,this.hideTime=(new Date).getTime()+(this.options.timeOut||0),this.width=-1,this.options.progressBar&&this.outsideInterval((function(){return t.updateProgress()}),10)}},{key:"remove",value:function(){var t=this;"removed"!==this.state.value&&(clearTimeout(this.timeout),this.state=Object.assign(Object.assign({},this.state),{value:"removed"}),this.outsideTimeout((function(){return t.toastrService.remove(t.toastPackage.toastId)}),+this.toastPackage.config.easeTime))}},{key:"tapToast",value:function(){"removed"!==this.state.value&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}},{key:"stickAround",value:function(){"removed"!==this.state.value&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width=0)}},{key:"delayedHideToast",value:function(){var t=this;!0!==this.options.disableTimeOut&&"extendedTimeOut"!==this.options.disableTimeOut&&0!==this.options.extendedTimeOut&&"removed"!==this.state.value&&(this.outsideTimeout((function(){return t.remove()}),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=(new Date).getTime()+(this.options.timeOut||0),this.width=-1,this.options.progressBar&&this.outsideInterval((function(){return t.updateProgress()}),10))}},{key:"outsideTimeout",value:function(t,e){var i=this;this.ngZone?this.ngZone.runOutsideAngular((function(){return i.timeout=setTimeout((function(){return i.runInsideAngular(t)}),e)})):this.timeout=setTimeout((function(){return t()}),e)}},{key:"outsideInterval",value:function(t,e){var i=this;this.ngZone?this.ngZone.runOutsideAngular((function(){return i.intervalId=setInterval((function(){return i.runInsideAngular(t)}),e)})):this.intervalId=setInterval((function(){return t()}),e)}},{key:"runInsideAngular",value:function(t){this.ngZone?this.ngZone.run((function(){return t()})):t()}},{key:"displayStyle",get:function(){if("inactive"===this.state.value)return"none"}}]),t}()).\u0275fac=function(t){return new(t||N)(l.Kb(M),l.Kb(F),l.Kb(l.z))},N.\u0275cmp=l.Eb({type:N,selectors:[["","toast-component",""]],hostVars:5,hostBindings:function(t,e){1&t&&l.Xb("click",(function(){return e.tapToast()}))("mouseenter",(function(){return e.stickAround()}))("mouseleave",(function(){return e.delayedHideToast()})),2&t&&(l.qc("@flyInOut",e.state),l.Bb(e.toastClasses),l.lc("display",e.displayStyle))},attrs:y,decls:5,vars:5,consts:[["class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alertdialog","aria-live","polite",3,"class","innerHTML",4,"ngIf"],["role","alertdialog","aria-live","polite",3,"class",4,"ngIf"],[4,"ngIf"],["aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alertdialog","aria-live","polite",3,"innerHTML"],["role","alertdialog","aria-live","polite"],[1,"toast-progress"]],template:function(t,e){1&t&&(l.mc(0,_,3,0,"button",0),l.mc(1,O,3,5,"div",1),l.mc(2,w,1,3,"div",2),l.mc(3,T,2,4,"div",3),l.mc(4,k,2,2,"div",4)),2&t&&(l.cc("ngIf",e.options.closeButton),l.zb(1),l.cc("ngIf",e.title),l.zb(1),l.cc("ngIf",e.message&&e.options.enableHtml),l.zb(1),l.cc("ngIf",e.message&&!e.options.enableHtml),l.zb(1),l.cc("ngIf",e.options.progressBar))},directives:[d.k],encapsulation:2,data:{animation:[Object(v.j)("flyInOut",[Object(v.g)("inactive",Object(v.h)({opacity:0})),Object(v.g)("active",Object(v.h)({opacity:1})),Object(v.g)("removed",Object(v.h)({opacity:0})),Object(v.i)("inactive => active",Object(v.e)("{{ easeTime }}ms {{ easing }}")),Object(v.i)("active => removed",Object(v.e)("{{ easeTime }}ms {{ easing }}"))])]}}),N),K=Object.assign(Object.assign({},{maxOpened:0,autoDismiss:!1,newestOnTop:!0,preventDuplicates:!1,countDuplicates:!1,resetTimeoutOnDuplicate:!1,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},closeButton:!1,disableTimeOut:!1,timeOut:5e3,extendedTimeOut:1e3,enableHtml:!1,progressBar:!1,toastClass:"ngx-toastr",positionClass:"toast-top-right",titleClass:"toast-title",messageClass:"toast-message",easing:"ease-in",easeTime:300,tapToDismiss:!0,onActivateTick:!1,progressAnimation:"decreasing"}),{toastComponent:q}),V=((x=A=function(){function t(){_classCallCheck(this,t)}return _createClass(t,null,[{key:"forRoot",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ngModule:A,providers:[{provide:D,useValue:{default:K,config:t}}]}}}]),t}()).\u0275mod=l.Ib({type:x}),x.\u0275inj=l.Hb({factory:function(t){return new(t||x)},imports:[[d.b]]}),x),G=((R=function t(){_classCallCheck(this,t)}).\u0275mod=l.Ib({type:R}),R.\u0275inj=l.Hb({factory:function(t){return new(t||R)},imports:[[o.e,a.k,p,V.forRoot(),d.b]]}),R)}}]);