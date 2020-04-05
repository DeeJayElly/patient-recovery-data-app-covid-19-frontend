function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"1lAe":function(e,t,n){"use strict";n.r(t);var i,r,a,o,c,s=n("ofXK"),l=n("tyNb"),u=n("RS3s"),p=n("SxV6"),f=n("AytR"),d=n("lJxs"),m=n("fXoL"),h=n("tk/3"),y=((i=function(){function e(t){_classCallCheck(this,e),this.http=t}return _createClass(e,[{key:"getAllPatients",value:function(){return this.http.get("".concat(f.a.apiUrl,"/patient")).pipe(Object(d.a)((function(e){return e})))}}]),e}()).\u0275fac=function(e){return new(e||i)(m["\u0275\u0275inject"](h.b))},i.\u0275prov=m["\u0275\u0275defineInjectable"]({token:i,factory:i.\u0275fac,providedIn:"root"}),i),C=n("aceb"),b=n("sYmb"),v=[{path:"",component:(o=function(){function e(t){_classCallCheck(this,e),this.patientService=t,this.settings={hideSubHeader:!0,actions:!1,columns:{firstName:{title:"First Name",type:"string"},lastName:{title:"Last Name",type:"string"},dateOfBirth:{title:"Date of birth",type:"date"},sex:{title:"Gender",type:"string"},contact:{title:"Contact",type:"string"},problemsDuration:{title:"Symptoms duration",type:"number"}}},this.source=new u.a}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.patientService.getAllPatients().pipe(Object(p.a)()).subscribe((function(t){e.patients=t,e.source.load(e.patients)}),(function(t){e.error=t}))}},{key:"onDeleteConfirm",value:function(e){window.confirm("Are you sure you want to delete?")?e.confirm.resolve():e.confirm.reject()}}]),e}(),o.\u0275fac=function(e){return new(e||o)(m["\u0275\u0275directiveInject"](y))},o.\u0275cmp=m["\u0275\u0275defineComponent"]({type:o,selectors:[["ngx-patients-list"]],decls:6,vars:5,consts:[[3,"settings","source","deleteConfirm"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"nb-card"),m["\u0275\u0275elementStart"](1,"nb-card-header"),m["\u0275\u0275text"](2),m["\u0275\u0275pipe"](3,"translate"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"nb-card-body"),m["\u0275\u0275elementStart"](5,"ng2-smart-table",0),m["\u0275\u0275listener"]("deleteConfirm",(function(e){return t.onDeleteConfirm(e)})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate1"](" ",m["\u0275\u0275pipeBind1"](3,3,"PATIENTS_LIST")," "),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("settings",t.settings)("source",t.source))},directives:[C.l,C.m,C.k,u.b],pipes:[b.c],styles:[""]}),o)},{path:":id",children:[{path:"edit",component:(a=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}(),a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=m["\u0275\u0275defineComponent"]({type:a,selectors:[["ngx-patient-edit"]],decls:2,vars:0,template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275text"](1,"patient-edit works!"),m["\u0275\u0275elementEnd"]())},styles:[""]}),a)},{path:"",pathMatch:"full",component:(r=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}(),r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=m["\u0275\u0275defineComponent"]({type:r,selectors:[["ngx-patient-view"]],decls:2,vars:0,template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275text"](1,"patient-view works!"),m["\u0275\u0275elementEnd"]())},styles:[""]}),r)}]}],g=((c=function e(){_classCallCheck(this,e)}).\u0275mod=m["\u0275\u0275defineNgModule"]({type:c}),c.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(e){return new(e||c)},imports:[[l.g.forChild(v)],l.g]}),c),w=n("vTDv"),k=n("Qy2A");n.d(t,"PatientsModule",(function(){return S}));var _,S=((_=function e(){_classCallCheck(this,e)}).\u0275mod=m["\u0275\u0275defineNgModule"]({type:_}),_.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(e){return new(e||_)},imports:[[s.c,g,C.n,C.mb,C.w,C.y,w.a,k.a,u.c,b.b]]}),_)}}]);