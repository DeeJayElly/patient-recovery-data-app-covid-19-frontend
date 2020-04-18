function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"j6/c":function(e,t,n){"use strict";n.r(t);var r=n("ofXK"),a=n("tyNb"),i=n("0AFq"),o=n("SxV6"),l=n("RS3s"),d=n("9ans"),p=n("fXoL"),c=n("tk/3"),s=n("aceb"),m=n("sYmb");function u(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"button",2),p["\u0275\u0275text"](1),p["\u0275\u0275pipe"](2,"translate"),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](2,1,"ADD_DOCTOR")))}var f,v=((f=function(){function e(t,n,r,a){_classCallCheck(this,e),this.http=t,this.auth=n,this.doctorService=r,this.router=a,this.isAdmin="superAdmin"===this.auth.currentUserValue.user.role,this.isHospitalAdmin="hospitalAdmin"===this.auth.currentUserValue.user.role,this.settings={actions:{add:!1,edit:!1,delete:!1,custom:this.isAdmin||this.isHospitalAdmin?[{name:"viewrecord",title:'<i class="nb-person"></i>'},{name:"editrecord",title:'<i class="nb-edit"></i>'}]:[{name:"viewrecord",title:'<i class="nb-person"></i>'}]},columns:{firstName:{title:"First Name",type:"string"},lastName:{title:"Last Name",type:"string"},cityOrRegion:{title:"City / Region",type:"string"},email:{title:"E-mail",type:"string"},country:{title:"Country",type:"string"},hospital:{title:"Hospital Name",type:"string"}}},this.source=new l.a}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.doctorService.getAllDoctors().pipe(Object(o.a)()).subscribe((function(t){e.doctors=t,e.doctors=e.doctors.filter((function(e){return"doctor"===e.role})),e.doctors.map((function(e){e.hospital&&(e.hospital=e.hospital.name)})),e.source.load(e.doctors)}),(function(t){e.error=t}))}},{key:"onCustomAction",value:function(e){switch(e.action){case"viewrecord":this.openDoctorViewPage(e.data);break;case"editrecord":this.openDoctorEditPage(e.data)}}},{key:"openDoctorViewPage",value:function(e){this.router.navigate(["/pages/doctors/"+e._id])}},{key:"openDoctorEditPage",value:function(e){this.router.navigate(["/pages/doctors/"+e._id+"/edit"])}},{key:"onDeleteConfirm",value:function(e){window.confirm("Are you sure you want to delete?")?e.confirm.resolve():e.confirm.reject()}}]),e}()).\u0275fac=function(e){return new(e||f)(p["\u0275\u0275directiveInject"](c.b),p["\u0275\u0275directiveInject"](d.a),p["\u0275\u0275directiveInject"](i.a),p["\u0275\u0275directiveInject"](a.c))},f.\u0275cmp=p["\u0275\u0275defineComponent"]({type:f,selectors:[["ngx-doctors-list"]],decls:7,vars:6,consts:[["nbButton","","routerLink","/pages/doctors/add",4,"ngIf"],[3,"settings","source","custom","deleteConfirm"],["nbButton","","routerLink","/pages/doctors/add"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"nb-card"),p["\u0275\u0275elementStart"](1,"nb-card-header"),p["\u0275\u0275text"](2),p["\u0275\u0275pipe"](3,"translate"),p["\u0275\u0275template"](4,u,3,3,"button",0),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](5,"nb-card-body"),p["\u0275\u0275elementStart"](6,"ng2-smart-table",1),p["\u0275\u0275listener"]("custom",(function(e){return t.onCustomAction(e)}))("deleteConfirm",(function(e){return t.onDeleteConfirm(e)})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](2),p["\u0275\u0275textInterpolate1"](" ",p["\u0275\u0275pipeBind1"](3,4,"DOCTORS_LIST")," "),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngIf",t.isAdmin||t.isHospitalAdmin),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("settings",t.settings)("source",t.source))},directives:[s.l,s.n,r.m,s.k,l.b,s.i,a.d],pipes:[m.c],styles:[".nb-theme-corporate   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{-webkit-transform:translateZ(0);transform:translateZ(0)}.ng2-smart-action-add-add[_ngcontent-%COMP%]{visibility:hidden!important}[_nghost-%COMP%]     ng2-st-tbody-custom{display:-webkit-box!important;display:flex!important;-webkit-box-align:center!important;align-items:center!important;margin-bottom:-44px!important}nb-card-header[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}"]}),f),b=n("3Pt+"),h=n("MJV+");function E(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"div"),p["\u0275\u0275text"](1),p["\u0275\u0275pipe"](2,"translate"),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](2,1,"EMAIL_ADDRESS_REQUIRED")))}function I(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div",24),p["\u0275\u0275template"](1,E,3,3,"div",2),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"](2);p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",n.f.email.errors.required)}}function S(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"div"),p["\u0275\u0275text"](1),p["\u0275\u0275pipe"](2,"translate"),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](2,1,"FIRST_NAME_REQUIRED")))}function x(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div",24),p["\u0275\u0275template"](1,S,3,3,"div",2),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"](2);p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",n.f.firstName.errors.required)}}function y(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"div"),p["\u0275\u0275text"](1),p["\u0275\u0275pipe"](2,"translate"),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](2,1,"LAST_NAME_REQUIRED")))}function g(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div",24),p["\u0275\u0275template"](1,y,3,3,"div",2),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"](2);p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",n.f.lastName.errors.required)}}function C(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"div"),p["\u0275\u0275text"](1),p["\u0275\u0275pipe"](2,"translate"),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](2,1,"CITY_REGION_REQUIRED")))}function R(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div",24),p["\u0275\u0275template"](1,C,3,3,"div",2),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"](2);p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",n.f.cityOrRegion.errors.required)}}function _(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"div"),p["\u0275\u0275text"](1),p["\u0275\u0275pipe"](2,"translate"),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](2,1,"HOSPITAL_NAME_REQUIRED")))}function O(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div",24),p["\u0275\u0275template"](1,_,3,3,"div",2),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"](2);p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",n.f.hospital.errors.required)}}function D(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"div"),p["\u0275\u0275text"](1),p["\u0275\u0275pipe"](2,"translate"),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](2,1,"COUNTRY_REQUIRED")))}function N(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div",24),p["\u0275\u0275template"](1,D,3,3,"div",2),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"](2);p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",n.f.country.errors.required)}}function A(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"div"),p["\u0275\u0275text"](1),p["\u0275\u0275pipe"](2,"translate"),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](2,1,"PASSWORD_REQUIRED")))}function w(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div",24),p["\u0275\u0275template"](1,A,3,3,"div",2),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"](2);p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",n.f.password.errors.required)}}function k(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"div"),p["\u0275\u0275text"](1),p["\u0275\u0275pipe"](2,"translate"),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](2,1,"PASSWORD_REPEAT_REQUIRED")))}function B(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div",24),p["\u0275\u0275template"](1,k,3,3,"div",2),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"](2);p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",n.f.passwordRepeat.errors.required)}}function M(e,t){if(1&e){var n=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"form",3),p["\u0275\u0275listener"]("ngSubmit",(function(){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"]().onSubmit()})),p["\u0275\u0275elementStart"](1,"div",4),p["\u0275\u0275elementStart"](2,"label",5),p["\u0275\u0275text"](3),p["\u0275\u0275pipe"](4,"translate"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](5,"input",6),p["\u0275\u0275pipe"](6,"translate"),p["\u0275\u0275template"](7,I,2,1,"div",7),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](8,"div",4),p["\u0275\u0275elementStart"](9,"label",8),p["\u0275\u0275text"](10),p["\u0275\u0275pipe"](11,"translate"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](12,"input",9),p["\u0275\u0275pipe"](13,"translate"),p["\u0275\u0275template"](14,x,2,1,"div",7),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](15,"div",4),p["\u0275\u0275elementStart"](16,"label",10),p["\u0275\u0275text"](17),p["\u0275\u0275pipe"](18,"translate"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](19,"input",11),p["\u0275\u0275pipe"](20,"translate"),p["\u0275\u0275template"](21,g,2,1,"div",7),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](22,"div",4),p["\u0275\u0275elementStart"](23,"label",12),p["\u0275\u0275text"](24),p["\u0275\u0275pipe"](25,"translate"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](26,"input",13),p["\u0275\u0275pipe"](27,"translate"),p["\u0275\u0275template"](28,R,2,1,"div",7),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](29,"div",4),p["\u0275\u0275elementStart"](30,"label",14),p["\u0275\u0275text"](31),p["\u0275\u0275pipe"](32,"translate"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](33,"input",15),p["\u0275\u0275pipe"](34,"translate"),p["\u0275\u0275template"](35,O,2,1,"div",7),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](36,"div",4),p["\u0275\u0275elementStart"](37,"label",16),p["\u0275\u0275text"](38),p["\u0275\u0275pipe"](39,"translate"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](40,"input",17),p["\u0275\u0275pipe"](41,"translate"),p["\u0275\u0275template"](42,N,2,1,"div",7),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](43,"div",4),p["\u0275\u0275elementStart"](44,"label",18),p["\u0275\u0275text"](45),p["\u0275\u0275pipe"](46,"translate"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](47,"input",19),p["\u0275\u0275pipe"](48,"translate"),p["\u0275\u0275template"](49,w,2,1,"div",7),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](50,"div",4),p["\u0275\u0275elementStart"](51,"label",20),p["\u0275\u0275text"](52),p["\u0275\u0275pipe"](53,"translate"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](54,"input",21),p["\u0275\u0275pipe"](55,"translate"),p["\u0275\u0275template"](56,B,2,1,"div",7),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](57,"div",4),p["\u0275\u0275elementStart"](58,"div",22),p["\u0275\u0275elementStart"](59,"button",23),p["\u0275\u0275text"](60),p["\u0275\u0275pipe"](61,"translate"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()}if(2&e){var r=p["\u0275\u0275nextContext"]();p["\u0275\u0275property"]("formGroup",r.doctorEditForm),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](4,26,"EMAIL_ADDRESS")),p["\u0275\u0275advance"](2),p["\u0275\u0275propertyInterpolate"]("placeholder",p["\u0275\u0275pipeBind1"](6,28,"EMAIL_ADDRESS")),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngIf",r.submitted&&r.f.email.errors),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](11,30,"FIRST_NAME")),p["\u0275\u0275advance"](2),p["\u0275\u0275propertyInterpolate"]("placeholder",p["\u0275\u0275pipeBind1"](13,32,"FIRST_NAME")),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngIf",r.submitted&&r.f.firstName.errors),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](18,34,"LAST_NAME")),p["\u0275\u0275advance"](2),p["\u0275\u0275propertyInterpolate"]("placeholder",p["\u0275\u0275pipeBind1"](20,36,"LAST_NAME")),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngIf",r.submitted&&r.f.lastName.errors),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](25,38,"CITY_REGION")),p["\u0275\u0275advance"](2),p["\u0275\u0275propertyInterpolate"]("placeholder",p["\u0275\u0275pipeBind1"](27,40,"CITY_REGION")),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngIf",r.submitted&&r.f.cityOrRegion.errors),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](32,42,"HOSPITAL_NAME")),p["\u0275\u0275advance"](2),p["\u0275\u0275propertyInterpolate"]("placeholder",p["\u0275\u0275pipeBind1"](34,44,"HOSPITAL_NAME")),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngIf",r.submitted&&r.f.hospital.errors),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](39,46,"COUNTRY")),p["\u0275\u0275advance"](2),p["\u0275\u0275propertyInterpolate"]("placeholder",p["\u0275\u0275pipeBind1"](41,48,"COUNTRY")),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngIf",r.submitted&&r.f.country.errors),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](46,50,"PASSWORD")),p["\u0275\u0275advance"](2),p["\u0275\u0275propertyInterpolate"]("placeholder",p["\u0275\u0275pipeBind1"](48,52,"PASSWORD")),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngIf",r.submitted&&r.f.password.errors),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](53,54,"PASSWORD_REPEAT")),p["\u0275\u0275advance"](2),p["\u0275\u0275propertyInterpolate"]("placeholder",p["\u0275\u0275pipeBind1"](55,56,"PASSWORD_REPEAT")),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngIf",r.submitted&&r.f.passwordRepeat.errors),p["\u0275\u0275advance"](4),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](61,58,"SAVE_DOCTOR_INFO"))}}function P(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"div"),p["\u0275\u0275elementStart"](1,"p"),p["\u0275\u0275text"](2,"This doctor doesn't belong to your hospital. Please edit another doctor profile"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"button",25),p["\u0275\u0275text"](4),p["\u0275\u0275pipe"](5,"translate"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](4),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](5,1,"GO_BACK")))}var T,j=((T=function(){function e(t,n,r,a,i){_classCallCheck(this,e),this.formBuilder=t,this.doctorService=n,this.route=r,this.dialogService=a,this.auth=i,this.submitted=!1,this.doctorEditForm=this.formBuilder.group({email:["",b.u.required],firstName:["",b.u.required],lastName:["",b.u.required],cityOrRegion:["",b.u.required],hospital:["",b.u.required],country:["",b.u.required],password:["",b.u.required],passwordRepeat:["",b.u.required]})}return _createClass(e,[{key:"ngOnInit",value:function(){this.doctorId=this.route.snapshot.params.id,this.getDoctorDetails(this.doctorId)}},{key:"getDoctorDetails",value:function(e){var t=this;this.doctorService.getDoctor(e).pipe(Object(o.a)()).subscribe((function(e){t.doctor=e,t.canEditDoctor=t.checkDoctorToHospitalRelation(),t.canEditDoctor&&t.editDoctorForm()}),(function(e){t.error=e}))}},{key:"checkDoctorToHospitalRelation",value:function(){var e=this.auth.currentUserValue;return this.doctor.hospital===e.user.hospital&&"hospitalAdmin"===e.user.role||"superAdmin"===e.user.role}},{key:"editDoctorForm",value:function(){this.doctorEditForm.patchValue({email:this.doctor.email,firstName:this.doctor.firstName,lastName:this.doctor.lastName,cityOrRegion:this.doctor.cityOrRegion,hospital:this.doctor.hospitalName,country:this.doctor.country})}},{key:"openDialog",value:function(){this.dialogService.open(h.a,{context:{title:"Doctor data has been successfully updated"}})}},{key:"onSubmit",value:function(){var e=this;this.doctorService.updateDoctor(this.doctorEditForm.value,this.doctorId).pipe(Object(o.a)()).subscribe((function(t){t&&e.openDialog()}),(function(t){e.error=t}))}},{key:"f",get:function(){return this.doctorEditForm.controls}}]),e}()).\u0275fac=function(e){return new(e||T)(p["\u0275\u0275directiveInject"](b.c),p["\u0275\u0275directiveInject"](i.a),p["\u0275\u0275directiveInject"](a.a),p["\u0275\u0275directiveInject"](s.w),p["\u0275\u0275directiveInject"](d.a))},T.\u0275cmp=p["\u0275\u0275defineComponent"]({type:T,selectors:[["ngx-doctor-edit"]],decls:8,vars:5,consts:[[1,"col-md-6"],[3,"formGroup","ngSubmit",4,"ngIf"],[4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-group","row"],["for","email",1,"label","col-sm-3","col-form-label"],["type","email","nbInput","","fullWidth","","id","email","formControlName","email",3,"placeholder"],["class","invalid-feedback",4,"ngIf"],["for","firstName",1,"label","col-sm-3","col-form-label"],["type","text","nbInput","","fullWidth","","id","firstName","formControlName","firstName",3,"placeholder"],["for","lastName",1,"label","col-sm-3","col-form-label"],["type","text","nbInput","","fullWidth","","id","lastName","formControlName","lastName",3,"placeholder"],["for","cityOrRegion",1,"label","col-sm-3","col-form-label"],["type","text","nbInput","","fullWidth","","id","cityOrRegion","formControlName","cityOrRegion",3,"placeholder"],["for","hospital",1,"label","col-sm-3","col-form-label"],["type","text","nbInput","","fullWidth","","id","hospital","formControlName","hospital",3,"placeholder"],["for","country",1,"label","col-sm-3","col-form-label"],["type","text","nbInput","","fullWidth","","id","country","formControlName","country",3,"placeholder"],["for","password",1,"label","col-sm-3","col-form-label"],["type","password","nbInput","","fullWidth","","id","password","formControlName","password",3,"placeholder"],["for","passwordRepeat",1,"label","col-sm-3","col-form-label"],["type","password","nbInput","","fullWidth","","id","passwordRepeat","formControlName","passwordRepeat",3,"placeholder"],[1,"offset-sm-3","col-sm-9"],["type","submit","nbButton","","status","primary"],[1,"invalid-feedback"],["nbButton","","routerLink","/pages/doctors"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"div",0),p["\u0275\u0275elementStart"](1,"nb-card"),p["\u0275\u0275elementStart"](2,"nb-card-header"),p["\u0275\u0275text"](3),p["\u0275\u0275pipe"](4,"translate"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](5,"nb-card-body"),p["\u0275\u0275template"](6,M,62,60,"form",1),p["\u0275\u0275template"](7,P,6,3,"div",2),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate1"](" ",p["\u0275\u0275pipeBind1"](4,3,"DOCTOR_EDIT")," "),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("ngIf",t.canEditDoctor),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",!t.canEditDoctor))},directives:[s.l,s.n,s.k,r.m,b.w,b.n,b.g,s.B,b.b,b.m,b.f,s.i,a.d],pipes:[m.c],styles:[""]}),T);function q(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div"),p["\u0275\u0275elementStart"](1,"nb-list"),p["\u0275\u0275elementStart"](2,"nb-list-item"),p["\u0275\u0275elementStart"](3,"span"),p["\u0275\u0275text"](4,"First name:"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"nb-list-item"),p["\u0275\u0275elementStart"](7,"span"),p["\u0275\u0275text"](8,"Last name:"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](9),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](10,"nb-list-item"),p["\u0275\u0275elementStart"](11,"span"),p["\u0275\u0275text"](12,"Email:"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](13),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](14,"nb-list-item"),p["\u0275\u0275elementStart"](15,"span"),p["\u0275\u0275text"](16,"Country:"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](17),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](18,"nb-list-item"),p["\u0275\u0275elementStart"](19,"span"),p["\u0275\u0275text"](20,"City/Region:"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](21),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](22,"nb-list-item"),p["\u0275\u0275elementStart"](23,"span"),p["\u0275\u0275text"](24,"Hospital name:"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](25),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](5),p["\u0275\u0275textInterpolate1"](" ",n.doctor.firstName," "),p["\u0275\u0275advance"](4),p["\u0275\u0275textInterpolate1"](" ",n.doctor.lastName," "),p["\u0275\u0275advance"](4),p["\u0275\u0275textInterpolate1"](" ",n.doctor.email," "),p["\u0275\u0275advance"](4),p["\u0275\u0275textInterpolate1"](" ",n.doctor.country," "),p["\u0275\u0275advance"](4),p["\u0275\u0275textInterpolate1"](" ",n.doctor.cityOrRegion," "),p["\u0275\u0275advance"](4),p["\u0275\u0275textInterpolate1"](" ",n.doctor.hospital," ")}}function F(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div",5),p["\u0275\u0275text"](1),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate"](n.error)}}var L,U=((L=function(){function e(t,n,r){_classCallCheck(this,e),this.route=t,this.doctorService=n,this.dialogService=r}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this.route.snapshot.params.id;e?this.getDoctorDetails(e):this.error="No details for this doctor"}},{key:"getDoctorDetails",value:function(e){var t=this;this.doctorService.getDoctor(e).pipe(Object(o.a)()).subscribe((function(e){t.doctor=e}),(function(e){t.error=e}))}},{key:"deleteDoctor",value:function(){var e=this;this.doctorService.deleteDoctor(this.doctor._id).pipe(Object(o.a)()).subscribe((function(t){e.openDialog()}),(function(t){e.error=t}))}},{key:"openDialog",value:function(){this.dialogService.open(h.a,{context:{title:"Doctor data has been successfully deleted"}})}}]),e}()).\u0275fac=function(e){return new(e||L)(p["\u0275\u0275directiveInject"](a.a),p["\u0275\u0275directiveInject"](i.a),p["\u0275\u0275directiveInject"](s.w))},L.\u0275cmp=p["\u0275\u0275defineComponent"]({type:L,selectors:[["ngx-doctor-view"]],decls:15,vars:11,consts:[[1,"title-container"],["nbButton","","routerLink","/pages/doctors"],["nbButton","","status","danger",3,"click"],[4,"ngIf"],["class","alert alert-danger mt-3 mb-0",4,"ngIf"],[1,"alert","alert-danger","mt-3","mb-0"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"nb-card"),p["\u0275\u0275elementStart"](1,"nb-card-header"),p["\u0275\u0275elementStart"](2,"div"),p["\u0275\u0275text"](3),p["\u0275\u0275pipe"](4,"translate"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](5,"div",0),p["\u0275\u0275elementStart"](6,"button",1),p["\u0275\u0275text"](7),p["\u0275\u0275pipe"](8,"translate"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](9,"button",2),p["\u0275\u0275listener"]("click",(function(){return t.deleteDoctor()})),p["\u0275\u0275text"](10),p["\u0275\u0275pipe"](11,"translate"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](12,"nb-card-body"),p["\u0275\u0275template"](13,q,26,6,"div",3),p["\u0275\u0275template"](14,F,2,1,"div",4),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate1"](" ",p["\u0275\u0275pipeBind1"](4,5,"DOCTOR_DETAILS")," "),p["\u0275\u0275advance"](4),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](8,7,"GO_BACK")),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](11,9,"DELETE_DOCTOR")),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("ngIf",t.doctor),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",t.error))},directives:[s.l,s.n,s.i,a.d,s.k,r.m,s.K,s.L],pipes:[m.c],styles:[".title-container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center}.title-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:10px}nb-card-header[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}nb-list[_ngcontent-%COMP%], nb-list[_ngcontent-%COMP%]   nb-list-item[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}nb-list[_ngcontent-%COMP%]   nb-list-item[_ngcontent-%COMP%]{-webkit-box-align:start;align-items:flex-start}nb-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:700;padding-right:20px}"]}),L),W=n("Fi67");function H(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"div"),p["\u0275\u0275text"](1),p["\u0275\u0275pipe"](2,"translate"),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](2,1,"EMAIL_ADDRESS_REQUIRED")))}function Q(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div",21),p["\u0275\u0275template"](1,H,3,3,"div",22),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",n.f.email.errors.required)}}function Y(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"div"),p["\u0275\u0275text"](1),p["\u0275\u0275pipe"](2,"translate"),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](2,1,"FIRST_NAME_REQUIRED")))}function G(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div",21),p["\u0275\u0275template"](1,Y,3,3,"div",22),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",n.f.firstName.errors.required)}}function V(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"div"),p["\u0275\u0275text"](1),p["\u0275\u0275pipe"](2,"translate"),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](2,1,"LAST_NAME_REQUIRED")))}function K(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div",21),p["\u0275\u0275template"](1,V,3,3,"div",22),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",n.f.lastName.errors.required)}}function J(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"div"),p["\u0275\u0275text"](1),p["\u0275\u0275pipe"](2,"translate"),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](2,1,"CITY_REGION_REQUIRED")))}function X(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div",21),p["\u0275\u0275template"](1,J,3,3,"div",22),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",n.f.cityOrRegion.errors.required)}}function Z(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"nb-option",23),p["\u0275\u0275text"](1),p["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;p["\u0275\u0275property"]("value",n._id),p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate"](n.name)}}function z(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"div"),p["\u0275\u0275text"](1),p["\u0275\u0275pipe"](2,"translate"),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](2,1,"HOSPITAL_NAME_REQUIRED")))}function $(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div",21),p["\u0275\u0275template"](1,z,3,3,"div",22),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",n.f.hospital.errors.required)}}function ee(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"div"),p["\u0275\u0275text"](1),p["\u0275\u0275pipe"](2,"translate"),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](2,1,"COUNTRY_REQUIRED")))}function te(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div",21),p["\u0275\u0275template"](1,ee,3,3,"div",22),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",n.f.country.errors.required)}}function ne(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"div"),p["\u0275\u0275text"](1),p["\u0275\u0275pipe"](2,"translate"),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](2,1,"PASSWORD_REQUIRED")))}function re(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div",21),p["\u0275\u0275template"](1,ne,3,3,"div",22),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",n.f.country.errors.required)}}var ae,ie,oe=((ae=function(){function e(t,n,r,a){_classCallCheck(this,e),this.formBuilder=t,this.doctorService=n,this.dialogService=r,this.hospitalService=a,this.submitted=!1,this.doctorCreateForm=this.formBuilder.group({email:["",b.u.required],firstName:["",b.u.required],lastName:["",b.u.required],cityOrRegion:["",b.u.required],hospital:[null,b.u.required],country:["",b.u.required],password:["",b.u.required]})}return _createClass(e,[{key:"ngOnInit",value:function(){this.getAllHospitals()}},{key:"getAllHospitals",value:function(){var e=this;this.hospitalService.getAllHospitals().pipe(Object(o.a)()).subscribe((function(t){e.hospitals=t,e.selectedHospital=e.hospitals[0],e.doctorCreateForm.patchValue({hospital:e.selectedHospital})}),(function(t){e.error=t}))}},{key:"openDialog",value:function(){this.dialogService.open(h.a,{context:{title:"New doctor information have been successfully added"}})}},{key:"onSubmit",value:function(){var e=this;this.doctorService.setDoctor(this.doctorCreateForm.value).pipe(Object(o.a)()).subscribe((function(t){t&&e.openDialog()}),(function(t){e.error=t}))}},{key:"f",get:function(){return this.doctorCreateForm.controls}}]),e}()).\u0275fac=function(e){return new(e||ae)(p["\u0275\u0275directiveInject"](b.c),p["\u0275\u0275directiveInject"](i.a),p["\u0275\u0275directiveInject"](s.w),p["\u0275\u0275directiveInject"](W.a))},ae.\u0275cmp=p["\u0275\u0275defineComponent"]({type:ae,selectors:[["ngx-doctor-create"]],decls:61,vars:54,consts:[[1,"col-md-6"],[3,"formGroup","ngSubmit"],[1,"form-group","row"],["for","email",1,"label","col-sm-3","col-form-label"],["type","email","nbInput","","fullWidth","","id","email","formControlName","email",3,"placeholder"],["class","invalid-feedback",4,"ngIf"],["for","firstName",1,"label","col-sm-3","col-form-label"],["type","text","nbInput","","fullWidth","","id","firstName","formControlName","firstName",3,"placeholder"],["for","lastName",1,"label","col-sm-3","col-form-label"],["type","text","nbInput","","fullWidth","","id","lastName","formControlName","lastName",3,"placeholder"],["for","cityOrRegion",1,"label","col-sm-3","col-form-label"],["type","text","nbInput","","fullWidth","","id","cityOrRegion","formControlName","cityOrRegion",3,"placeholder"],["for","hospital",1,"label","col-sm-3","col-form-label"],["value","","id","hospital","formControlName","hospital",1,"position-select"],[3,"value",4,"ngFor","ngForOf"],["for","country",1,"label","col-sm-3","col-form-label"],["type","text","nbInput","","fullWidth","","id","country","formControlName","country",3,"placeholder"],["for","password",1,"label","col-sm-3","col-form-label"],["type","text","nbInput","","fullWidth","","id","password","formControlName","password",3,"placeholder"],[1,"offset-sm-3","col-sm-9"],["type","submit","nbButton","","status","primary"],[1,"invalid-feedback"],[4,"ngIf"],[3,"value"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"div",0),p["\u0275\u0275elementStart"](1,"nb-card"),p["\u0275\u0275elementStart"](2,"nb-card-header"),p["\u0275\u0275text"](3),p["\u0275\u0275pipe"](4,"translate"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](5,"nb-card-body"),p["\u0275\u0275elementStart"](6,"form",1),p["\u0275\u0275listener"]("ngSubmit",(function(){return t.onSubmit()})),p["\u0275\u0275elementStart"](7,"div",2),p["\u0275\u0275elementStart"](8,"label",3),p["\u0275\u0275text"](9),p["\u0275\u0275pipe"](10,"translate"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](11,"input",4),p["\u0275\u0275pipe"](12,"translate"),p["\u0275\u0275template"](13,Q,2,1,"div",5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](14,"div",2),p["\u0275\u0275elementStart"](15,"label",6),p["\u0275\u0275text"](16),p["\u0275\u0275pipe"](17,"translate"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](18,"input",7),p["\u0275\u0275pipe"](19,"translate"),p["\u0275\u0275template"](20,G,2,1,"div",5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](21,"div",2),p["\u0275\u0275elementStart"](22,"label",8),p["\u0275\u0275text"](23),p["\u0275\u0275pipe"](24,"translate"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](25,"input",9),p["\u0275\u0275pipe"](26,"translate"),p["\u0275\u0275template"](27,K,2,1,"div",5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](28,"div",2),p["\u0275\u0275elementStart"](29,"label",10),p["\u0275\u0275text"](30),p["\u0275\u0275pipe"](31,"translate"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](32,"input",11),p["\u0275\u0275pipe"](33,"translate"),p["\u0275\u0275template"](34,X,2,1,"div",5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](35,"div",2),p["\u0275\u0275elementStart"](36,"label",12),p["\u0275\u0275text"](37),p["\u0275\u0275pipe"](38,"translate"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](39,"nb-select",13),p["\u0275\u0275template"](40,Z,2,2,"nb-option",14),p["\u0275\u0275elementEnd"](),p["\u0275\u0275template"](41,$,2,1,"div",5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](42,"div",2),p["\u0275\u0275elementStart"](43,"label",15),p["\u0275\u0275text"](44),p["\u0275\u0275pipe"](45,"translate"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](46,"input",16),p["\u0275\u0275pipe"](47,"translate"),p["\u0275\u0275template"](48,te,2,1,"div",5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](49,"div",2),p["\u0275\u0275elementStart"](50,"label",17),p["\u0275\u0275text"](51),p["\u0275\u0275pipe"](52,"translate"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](53,"input",18),p["\u0275\u0275pipe"](54,"translate"),p["\u0275\u0275template"](55,re,2,1,"div",5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](56,"div",2),p["\u0275\u0275elementStart"](57,"div",19),p["\u0275\u0275elementStart"](58,"button",20),p["\u0275\u0275text"](59),p["\u0275\u0275pipe"](60,"translate"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate1"](" ",p["\u0275\u0275pipeBind1"](4,24,"ADD_DOCTOR")," "),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("formGroup",t.doctorCreateForm),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](10,26,"EMAIL_ADDRESS")),p["\u0275\u0275advance"](2),p["\u0275\u0275propertyInterpolate"]("placeholder",p["\u0275\u0275pipeBind1"](12,28,"EMAIL_ADDRESS")),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngIf",t.submitted&&t.f.email.errors),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](17,30,"FIRST_NAME")),p["\u0275\u0275advance"](2),p["\u0275\u0275propertyInterpolate"]("placeholder",p["\u0275\u0275pipeBind1"](19,32,"FIRST_NAME")),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngIf",t.submitted&&t.f.firstName.errors),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](24,34,"LAST_NAME")),p["\u0275\u0275advance"](2),p["\u0275\u0275propertyInterpolate"]("placeholder",p["\u0275\u0275pipeBind1"](26,36,"LAST_NAME")),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngIf",t.submitted&&t.f.lastName.errors),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](31,38,"CITY_REGION")),p["\u0275\u0275advance"](2),p["\u0275\u0275propertyInterpolate"]("placeholder",p["\u0275\u0275pipeBind1"](33,40,"CITY_REGION")),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngIf",t.submitted&&t.f.cityOrRegion.errors),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](38,42,"HOSPITAL_NAME")),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("ngForOf",t.hospitals),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",t.submitted&&t.f.hospital.errors),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](45,44,"COUNTRY")),p["\u0275\u0275advance"](2),p["\u0275\u0275propertyInterpolate"]("placeholder",p["\u0275\u0275pipeBind1"](47,46,"COUNTRY")),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngIf",t.submitted&&t.f.country.errors),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](52,48,"PASSWORD")),p["\u0275\u0275advance"](2),p["\u0275\u0275propertyInterpolate"]("placeholder",p["\u0275\u0275pipeBind1"](54,50,"PASSWORD")),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngIf",t.submitted&&t.f.country.errors),p["\u0275\u0275advance"](4),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](60,52,"ADD_DOCTOR_INFO")))},directives:[s.l,s.n,s.k,b.w,b.n,b.g,s.B,b.b,b.m,b.f,r.m,s.X,r.l,s.i,s.R],pipes:[m.c],styles:[""]}),ae),le=n("fEFe"),de=[{path:"",component:v},{path:"add",canActivate:[le.a],component:oe},{path:":id",children:[{path:"edit",canActivate:[le.a],component:j},{path:"",pathMatch:"full",component:U}]}],pe=((ie=function e(){_classCallCheck(this,e)}).\u0275mod=p["\u0275\u0275defineNgModule"]({type:ie}),ie.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(e){return new(e||ie)},imports:[[a.g.forChild(de)],a.g]}),ie),ce=n("vTDv"),se=n("Qy2A");n.d(t,"DoctorsModule",(function(){return ue}));var me,ue=((me=function e(){_classCallCheck(this,e)}).\u0275mod=p["\u0275\u0275defineNgModule"]({type:me}),me.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(e){return new(e||me)},imports:[[r.c,pe,s.o,s.zb,s.A,s.C,ce.a,se.a,l.c,m.b,s.M,s.j,b.s,b.h,s.Y]]}),me)}}]);