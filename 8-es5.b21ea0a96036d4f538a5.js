function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"j6/c":function(t,e,n){"use strict";n.r(e);var o,i,r,c,a,s=n("ofXK"),l=n("tyNb"),d=n("AytR"),u=n("lJxs"),p=n("fXoL"),f=n("tk/3"),m=((o=function(){function t(e){_classCallCheck(this,t),this.http=e}return _createClass(t,[{key:"getAllDoctors",value:function(){return this.http.get("".concat(d.a.apiUrl,"/doctor")).pipe(Object(u.a)((function(t){return t})))}}]),t}()).\u0275fac=function(t){return new(t||o)(p["\u0275\u0275inject"](f.b))},o.\u0275prov=p["\u0275\u0275defineInjectable"]({token:o,factory:o.\u0275fac,providedIn:"root"}),o),h=n("SxV6"),g=n("RS3s"),b=n("aceb"),y=n("sYmb"),C=[{path:"",component:(c=function(){function t(e,n,o){_classCallCheck(this,t),this.http=e,this.doctorService=n,this.router=o,this.settings={hideSubHeader:!0,actions:{add:!1,edit:!1,delete:!1,custom:[{name:"viewrecord",title:'<i class="nb-person"></i>'},{name:"editrecord",title:'<i class="nb-edit"></i>'}]},columns:{firstName:{title:"First Name",type:"string"},lastName:{title:"Last Name",type:"string"},cityOrRegion:{title:"City / Region",type:"string"},email:{title:"E-mail",type:"string"},country:{title:"Country",type:"string"},hospitalName:{title:"Hospital Name",type:"string"}}},this.source=new g.a}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.doctorService.getAllDoctors().pipe(Object(h.a)()).subscribe((function(e){t.doctors=e,t.source.load(t.doctors)}),(function(e){t.error=e}))}},{key:"onCustomAction",value:function(t){switch(t.action){case"viewrecord":this.openDoctorViewPage(t.data);break;case"editrecord":this.openDoctorEditPage(t.data)}}},{key:"openDoctorViewPage",value:function(t){this.router.navigate(["/pages/doctors/"+t._id])}},{key:"openDoctorEditPage",value:function(t){this.router.navigate(["/pages/doctors/"+t._id+"/edit"])}},{key:"onDeleteConfirm",value:function(t){window.confirm("Are you sure you want to delete?")?t.confirm.resolve():t.confirm.reject()}}]),t}(),c.\u0275fac=function(t){return new(t||c)(p["\u0275\u0275directiveInject"](f.b),p["\u0275\u0275directiveInject"](m),p["\u0275\u0275directiveInject"](l.c))},c.\u0275cmp=p["\u0275\u0275defineComponent"]({type:c,selectors:[["ngx-doctors-list"]],decls:6,vars:5,consts:[[3,"settings","source","custom","deleteConfirm"]],template:function(t,e){1&t&&(p["\u0275\u0275elementStart"](0,"nb-card"),p["\u0275\u0275elementStart"](1,"nb-card-header"),p["\u0275\u0275text"](2),p["\u0275\u0275pipe"](3,"translate"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](4,"nb-card-body"),p["\u0275\u0275elementStart"](5,"ng2-smart-table",0),p["\u0275\u0275listener"]("custom",(function(t){return e.onCustomAction(t)}))("deleteConfirm",(function(t){return e.onDeleteConfirm(t)})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&t&&(p["\u0275\u0275advance"](2),p["\u0275\u0275textInterpolate1"](" ",p["\u0275\u0275pipeBind1"](3,3,"DOCTORS_LIST")," "),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("settings",e.settings)("source",e.source))},directives:[b.l,b.m,b.k,g.b],pipes:[y.c],styles:[".nb-theme-corporate   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{-webkit-transform:translateZ(0);transform:translateZ(0)}.ng2-smart-action-add-add[_ngcontent-%COMP%]{visibility:hidden!important}[_nghost-%COMP%]     ng2-st-tbody-custom{display:-webkit-box!important;display:flex!important;-webkit-box-align:center!important;align-items:center!important;margin-bottom:-44px!important}"]}),c)},{path:":id",children:[{path:"edit",component:(r=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}(),r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=p["\u0275\u0275defineComponent"]({type:r,selectors:[["ngx-doctor-edit"]],decls:2,vars:0,template:function(t,e){1&t&&(p["\u0275\u0275elementStart"](0,"p"),p["\u0275\u0275text"](1,"doctor-edit works!"),p["\u0275\u0275elementEnd"]())},styles:[""]}),r)},{path:"",pathMatch:"full",component:(i=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}(),i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=p["\u0275\u0275defineComponent"]({type:i,selectors:[["ngx-doctor-view"]],decls:2,vars:0,template:function(t,e){1&t&&(p["\u0275\u0275elementStart"](0,"p"),p["\u0275\u0275text"](1,"doctor-view works!"),p["\u0275\u0275elementEnd"]())},styles:[""]}),i)}]}],v=((a=function t(){_classCallCheck(this,t)}).\u0275mod=p["\u0275\u0275defineNgModule"]({type:a}),a.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(t){return new(t||a)},imports:[[l.g.forChild(C)],l.g]}),a),w=n("vTDv"),k=n("Qy2A");n.d(e,"DoctorsModule",(function(){return O}));var _,O=((_=function t(){_classCallCheck(this,t)}).\u0275mod=p["\u0275\u0275defineNgModule"]({type:_}),_.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(t){return new(t||_)},imports:[[s.c,v,b.n,b.mb,b.w,b.y,w.a,k.a,g.c,y.b]]}),_)}}]);