function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{hEQw:function(e,t,n){"use strict";n.r(t);var r,o=n("ofXK"),c=n("tyNb"),i=n("SxV6"),a=n("AytR"),l=n("lJxs"),s=n("fXoL"),p=n("tk/3"),f=((r=function(){function e(t){_classCallCheck(this,e),this.http=t}return _createClass(e,[{key:"downloadCSVReport",value:function(){return this.http.get("".concat(a.a.apiUrl,"/patient/export/csv")).pipe(Object(l.a)((function(e){return e})))}}]),e}()).\u0275fac=function(e){return new(e||r)(s["\u0275\u0275inject"](p.b))},r.\u0275prov=s["\u0275\u0275defineInjectable"]({token:r,factory:r.\u0275fac,providedIn:"root"}),r);function u(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"p"),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate"](n.success)}}function d(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"p"),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate"](n.error)}}var h,v,C=[{path:"",component:(h=function(){function e(t){_classCallCheck(this,e),this.reportService=t}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"downloadCSVReport",value:function(){var e=this;this.reportService.downloadCSVReport().pipe(Object(i.a)()).subscribe((function(t){e.success="CSV file has been successfully exported"}),(function(t){e.error=t}))}}]),e}(),h.\u0275fac=function(e){return new(e||h)(s["\u0275\u0275directiveInject"](f))},h.\u0275cmp=s["\u0275\u0275defineComponent"]({type:h,selectors:[["ngx-reports-list"]],decls:8,vars:2,consts:[[3,"click"],[4,"ngIf"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"h2"),s["\u0275\u0275text"](1,"Work in progress"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"p"),s["\u0275\u0275text"](3,"For now you will only have the ability to download csv of all patients with all the relevant data, by clicking on "),s["\u0275\u0275elementStart"](4,"span",0),s["\u0275\u0275listener"]("click",(function(){return t.downloadCSVReport()})),s["\u0275\u0275text"](5,"this link"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](6,u,2,1,"p",1),s["\u0275\u0275template"](7,d,2,1,"p",1)),2&e&&(s["\u0275\u0275advance"](6),s["\u0275\u0275property"]("ngIf",t.success),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",t.error))},directives:[o.m],styles:["span[_ngcontent-%COMP%]{font-weight:700;text-decoration:underline;cursor:pointer}"]}),h)}],m=((v=function e(){_classCallCheck(this,e)}).\u0275mod=s["\u0275\u0275defineNgModule"]({type:v}),v.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||v)},imports:[[c.g.forChild(C)],c.g]}),v);n.d(t,"ReportsModule",(function(){return y}));var w,y=((w=function e(){_classCallCheck(this,e)}).\u0275mod=s["\u0275\u0275defineNgModule"]({type:w}),w.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||w)},imports:[[o.c,m]]}),w)}}]);