(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{ttbB:function(e,t,n){"use strict";n.r(t);var i=n("ofXK"),r=n("tyNb"),a=n("SxV6"),s=n("RS3s"),o=n("AytR"),l=n("lJxs"),d=n("fXoL"),p=n("tk/3");let c=(()=>{class e{constructor(e){this.http=e}getAllHospitals(){return this.http.get(`${o.a.apiUrl}/hospital`).pipe(Object(l.a)(e=>e))}getHospital(e){return this.http.get(`${o.a.apiUrl}/hospital/${e}`).pipe(Object(l.a)(e=>e))}setHospital(e){return this.http.post(`${o.a.apiUrl}/hospital`,e).pipe(Object(l.a)(e=>e))}deleteHospital(e){return this.http.delete(`${o.a.apiUrl}/hospital/${e}`).pipe(Object(l.a)(e=>e))}updateHospital(e,t){return this.http.put(`${o.a.apiUrl}/hospital/${t}`,{name:e.name,address:e.address,numberOfBeds:e.numberOfBeds}).pipe(Object(l.a)(e=>e))}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275inject"](p.b))},e.\u0275prov=d["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var m=n("aceb"),u=n("sYmb");let h=(()=>{class e{constructor(e,t,n){this.http=e,this.hospitalService=t,this.router=n,this.settings={actions:{add:!1,edit:!1,delete:!1,custom:[{name:"viewrecord",title:'<i class="nb-person"></i>'},{name:"editrecord",title:'<i class="nb-edit"></i>'}]},columns:{name:{title:"Hospital Name",type:"string"},address:{title:"Address",type:"string"},numberOfBeds:{title:"Number of beds",type:"string"}}},this.source=new s.a}ngOnInit(){this.hospitalService.getAllHospitals().pipe(Object(a.a)()).subscribe(e=>{this.hospitals=e,this.source.load(this.hospitals)},e=>{this.error=e})}onCustomAction(e){switch(e.action){case"viewrecord":this.openHospitalViewPage(e.data);break;case"editrecord":this.openHospitalEditPage(e.data)}}openHospitalViewPage(e){this.router.navigate(["/pages/hospitals/"+e._id])}openHospitalEditPage(e){this.router.navigate(["/pages/hospitals/"+e._id+"/edit"])}onDeleteConfirm(e){window.confirm("Are you sure you want to delete?")?e.confirm.resolve():e.confirm.reject()}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275directiveInject"](p.b),d["\u0275\u0275directiveInject"](c),d["\u0275\u0275directiveInject"](r.c))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-hospital-list"]],decls:6,vars:5,consts:[[3,"settings","source","custom","deleteConfirm"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"nb-card"),d["\u0275\u0275elementStart"](1,"nb-card-header"),d["\u0275\u0275text"](2),d["\u0275\u0275pipe"](3,"translate"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"nb-card-body"),d["\u0275\u0275elementStart"](5,"ng2-smart-table",0),d["\u0275\u0275listener"]("custom",(function(e){return t.onCustomAction(e)}))("deleteConfirm",(function(e){return t.onDeleteConfirm(e)})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"](" ",d["\u0275\u0275pipeBind1"](3,3,"HOSPITAL_LIST")," "),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("settings",t.settings)("source",t.source))},directives:[m.l,m.n,m.k,s.b],pipes:[u.c],styles:[".nb-theme-corporate   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{-webkit-transform:translateZ(0);transform:translateZ(0)}.ng2-smart-action-add-add[_ngcontent-%COMP%]{visibility:hidden!important}[_nghost-%COMP%]     ng2-st-tbody-custom{display:-webkit-box!important;display:flex!important;-webkit-box-align:center!important;align-items:center!important;margin-bottom:-44px!important}"]}),e})();var f=n("MJV+"),b=n("3Pt+");function v(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"div"),d["\u0275\u0275text"](1),d["\u0275\u0275pipe"](2,"translate"),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate"](d["\u0275\u0275pipeBind1"](2,1,"EMAIL_ADDRESS_REQUIRED")))}function g(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div",12),d["\u0275\u0275template"](1,v,3,3,"div",13),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",e.f.name.errors.required)}}function S(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"div"),d["\u0275\u0275text"](1),d["\u0275\u0275pipe"](2,"translate"),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate"](d["\u0275\u0275pipeBind1"](2,1,"FIRST_NAME_REQUIRED")))}function E(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div",12),d["\u0275\u0275template"](1,S,3,3,"div",13),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",e.f.address.errors.required)}}function I(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"div"),d["\u0275\u0275text"](1,"Number of beds required"),d["\u0275\u0275elementEnd"]())}function x(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div",12),d["\u0275\u0275template"](1,I,2,0,"div",13),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",e.f.numberOfBeds.errors.required)}}let y=(()=>{class e{constructor(e,t,n,i){this.formBuilder=e,this.hospitalService=t,this.route=n,this.dialogService=i,this.submitted=!1,this.hospitalEditForm=this.formBuilder.group({name:["",b.u.required],address:["",b.u.required],numberOfBeds:["",b.u.required]})}get f(){return this.hospitalEditForm.controls}ngOnInit(){this.hospitalId=this.route.snapshot.params.id,this.getHospitalDetails(this.hospitalId)}getHospitalDetails(e){this.hospitalService.getHospital(e).pipe(Object(a.a)()).subscribe(e=>{this.hospital=e,this.editHospitalForm()},e=>{this.error=e})}editHospitalForm(){this.hospitalEditForm.patchValue({name:this.hospital.name,address:this.hospital.address,numberOfBeds:this.hospital.numberOfBeds})}openDialog(){this.dialogService.open(f.a,{context:{title:"Hospital data has been successfully updated"}})}onSubmit(){this.hospitalService.updateHospital(this.hospitalEditForm.value,this.hospitalId).pipe(Object(a.a)()).subscribe(e=>{e&&this.openDialog()},e=>{this.error=e})}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275directiveInject"](b.c),d["\u0275\u0275directiveInject"](c),d["\u0275\u0275directiveInject"](r.a),d["\u0275\u0275directiveInject"](m.w))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-hospital-edit"]],decls:26,vars:7,consts:[[1,"col-md-6"],[3,"formGroup","ngSubmit"],[1,"form-group","row"],["for","name",1,"label","col-sm-3","col-form-label"],["type","text","nbInput","","fullWidth","","id","name","formControlName","name","placeholder","Hospital name"],["class","invalid-feedback",4,"ngIf"],["for","address",1,"label","col-sm-3","col-form-label"],["type","text","nbInput","","fullWidth","","id","address","formControlName","address","placeholder","Address"],["for","numberOfBeds",1,"label","col-sm-3","col-form-label"],["type","text","nbInput","","fullWidth","","id","numberOfBeds","formControlName","numberOfBeds","placeholder","Number of beds"],[1,"offset-sm-3","col-sm-9"],["type","submit","nbButton","","status","primary"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"div",0),d["\u0275\u0275elementStart"](1,"nb-card"),d["\u0275\u0275elementStart"](2,"nb-card-header"),d["\u0275\u0275text"](3),d["\u0275\u0275pipe"](4,"translate"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"nb-card-body"),d["\u0275\u0275elementStart"](6,"form",1),d["\u0275\u0275listener"]("ngSubmit",(function(){return t.onSubmit()})),d["\u0275\u0275elementStart"](7,"div",2),d["\u0275\u0275elementStart"](8,"label",3),d["\u0275\u0275text"](9,"Hospital name"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](10,"input",4),d["\u0275\u0275template"](11,g,2,1,"div",5),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](12,"div",2),d["\u0275\u0275elementStart"](13,"label",6),d["\u0275\u0275text"](14,"Address"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](15,"input",7),d["\u0275\u0275template"](16,E,2,1,"div",5),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](17,"div",2),d["\u0275\u0275elementStart"](18,"label",8),d["\u0275\u0275text"](19,"Number of beds"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](20,"input",9),d["\u0275\u0275template"](21,x,2,1,"div",5),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](22,"div",2),d["\u0275\u0275elementStart"](23,"div",10),d["\u0275\u0275elementStart"](24,"button",11),d["\u0275\u0275text"](25,"Save hospital info"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate"](d["\u0275\u0275pipeBind1"](4,5,"PATIENT_WARNING_SCORE")),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("formGroup",t.hospitalEditForm),d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("ngIf",t.submitted&&t.f.name.errors),d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("ngIf",t.submitted&&t.f.address.errors),d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("ngIf",t.submitted&&t.f.numberOfBeds.errors))},directives:[m.l,m.n,m.k,b.w,b.n,b.g,m.B,b.b,b.m,b.f,i.m,m.i],pipes:[u.c],styles:[""]}),e})();function O(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div"),d["\u0275\u0275elementStart"](1,"nb-list"),d["\u0275\u0275elementStart"](2,"nb-list-item"),d["\u0275\u0275elementStart"](3,"span"),d["\u0275\u0275text"](4,"Name:"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](5),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"nb-list-item"),d["\u0275\u0275elementStart"](7,"span"),d["\u0275\u0275text"](8,"Address:"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](9),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](10,"nb-list-item"),d["\u0275\u0275elementStart"](11,"span"),d["\u0275\u0275text"](12,"Number of beds:"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](13),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](5),d["\u0275\u0275textInterpolate1"](" ",e.hospital.name," "),d["\u0275\u0275advance"](4),d["\u0275\u0275textInterpolate1"](" ",e.hospital.address," "),d["\u0275\u0275advance"](4),d["\u0275\u0275textInterpolate1"](" ",e.hospital.numberOfBeds," ")}}let C=(()=>{class e{constructor(e,t){this.route=e,this.hospitalService=t}ngOnInit(){const e=this.route.snapshot.params.id;e?this.getHospitalDetails(e):this.error="No details for this hospital"}getHospitalDetails(e){this.hospitalService.getHospital(e).pipe(Object(a.a)()).subscribe(e=>{this.hospital=e},e=>{this.error=e})}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275directiveInject"](r.a),d["\u0275\u0275directiveInject"](c))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-hospital-view"]],decls:13,vars:10,consts:[[1,"title-container"],["nbButton","","routerLink","/pages/hospitals"],["nbButton","","routerLink","/pages/hospitals/add"],[4,"ngIf"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"nb-card"),d["\u0275\u0275elementStart"](1,"nb-card-header"),d["\u0275\u0275elementStart"](2,"div",0),d["\u0275\u0275text"](3),d["\u0275\u0275pipe"](4,"translate"),d["\u0275\u0275elementStart"](5,"button",1),d["\u0275\u0275text"](6),d["\u0275\u0275pipe"](7,"translate"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](8,"button",2),d["\u0275\u0275text"](9),d["\u0275\u0275pipe"](10,"translate"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](11,"nb-card-body"),d["\u0275\u0275template"](12,O,14,3,"div",3),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate1"](" ",d["\u0275\u0275pipeBind1"](4,4,"HOSPITAL_DETAILS")," "),d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate"](d["\u0275\u0275pipeBind1"](7,6,"GO_BACK")),d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate"](d["\u0275\u0275pipeBind1"](10,8,"ADD_HOSPITAL")),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("ngIf",t.hospital))},directives:[m.l,m.n,m.i,r.d,m.k,i.m,m.K,m.L],pipes:[u.c],styles:[""]}),e})();const w=[{path:"",component:h},{path:"add",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-hospital-create"]],decls:2,vars:0,template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275text"](1,"hospital-create works!"),d["\u0275\u0275elementEnd"]())},styles:[""]}),e})()},{path:":id",children:[{path:"edit",component:y},{path:"",pathMatch:"full",component:C}]}];let B=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.g.forChild(w)],r.g]}),e})();n.d(t,"HospitalsModule",(function(){return H}));let H=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.c,B,m.o,b.s,u.b,s.c,m.C,m.j,m.M]]}),e})()}}]);