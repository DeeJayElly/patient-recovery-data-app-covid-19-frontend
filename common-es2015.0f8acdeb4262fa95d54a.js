(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0AFq":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("AytR"),a=n("lJxs"),o=n("9ans"),i=n("fXoL"),s=n("tk/3");let c=(()=>{class e{constructor(e,t){this.http=e,this.authService=t}getAllDoctors(){return this.http.get(`${r.a.apiUrl}/doctor`).pipe(Object(a.a)(e=>e))}getDoctor(e){return this.http.get(`${r.a.apiUrl}/doctor/${e}`).pipe(Object(a.a)(e=>e))}setDoctor(e){return this.http.post(`${r.a.apiUrl}/doctor`,{email:e.email,firstName:e.firstName,lastName:e.lastName,cityOrRegion:e.cityOrRegion,hospital:e.hospital._id,country:e.country,password:e.password,refreshToken:this.authService.currentUserValue.token.refreshToken,role:"doctor"}).pipe(Object(a.a)(e=>e))}deleteDoctor(e){return this.http.delete(`${r.a.apiUrl}/doctor/${e}`).pipe(Object(a.a)(e=>e))}updateDoctor(e,t){return this.http.put(`${r.a.apiUrl}/doctor/${t}`,{email:e.email,firstName:e.firstName,lastName:e.lastName,cityOrRegion:e.cityOrRegion,hospital:e.hospital._id,country:e.country,password:e.password,refreshToken:this.authService.currentUserValue.token.refreshToken,role:"doctor"}).pipe(Object(a.a)(e=>e))}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275inject"](s.b),i["\u0275\u0275inject"](o.a))},e.\u0275prov=i["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},Fi67:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("AytR"),a=n("lJxs"),o=n("fXoL"),i=n("tk/3");let s=(()=>{class e{constructor(e){this.http=e}getAllHospitals(){return this.http.get(`${r.a.apiUrl}/hospital`).pipe(Object(a.a)(e=>e))}getHospital(e){return this.http.get(`${r.a.apiUrl}/hospital/${e}`).pipe(Object(a.a)(e=>e))}setHospital(e){return this.http.post(`${r.a.apiUrl}/hospital`,{name:e.name,address:e.address,numberOfBeds:e.numberOfBeds}).pipe(Object(a.a)(e=>e))}deleteHospital(e){return this.http.delete(`${r.a.apiUrl}/hospital/${e}`).pipe(Object(a.a)(e=>e))}updateHospital(e,t){return this.http.put(`${r.a.apiUrl}/hospital/${t}`,{name:e.name,address:e.address,numberOfBeds:e.numberOfBeds}).pipe(Object(a.a)(e=>e))}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](i.b))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},Qy2A:function(e,t,n){"use strict";var r=n("tyNb"),a=n("fXoL");let o=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-tables"]],decls:1,vars:0,template:function(e,t){1&e&&a["\u0275\u0275element"](0,"router-outlet")},directives:[r.h],encapsulation:2}),e})();var i=n("RS3s"),s=n("sRfN"),c=n("aceb");let d=(()=>{class e{constructor(e){this.service=e,this.settings={add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{id:{title:"ID",type:"number"},firstName:{title:"First Name",type:"string"},lastName:{title:"Last Name",type:"string"},username:{title:"Username",type:"string"},email:{title:"E-mail",type:"string"},age:{title:"Age",type:"number"}}},this.source=new i.a;const t=this.service.getData();this.source.load(t)}onDeleteConfirm(e){window.confirm("Are you sure you want to delete?")?e.confirm.resolve():e.confirm.reject()}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](s.a))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-smart-table"]],decls:5,vars:2,consts:[[3,"settings","source","deleteConfirm"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"nb-card"),a["\u0275\u0275elementStart"](1,"nb-card-header"),a["\u0275\u0275text"](2," Smart Table "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](3,"nb-card-body"),a["\u0275\u0275elementStart"](4,"ng2-smart-table",0),a["\u0275\u0275listener"]("deleteConfirm",(function(e){return t.onDeleteConfirm(e)})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("settings",t.settings)("source",t.source))},directives:[c.l,c.n,c.k,i.b],styles:[".nb-theme-corporate   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{-webkit-transform:translateZ(0);transform:translateZ(0)}"]}),e})();var l=n("ofXK");function m(e,t){1&e&&a["\u0275\u0275element"](0,"tr",9)}function h(e,t){1&e&&a["\u0275\u0275element"](0,"tr",10)}function p(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"th",11),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]();a["\u0275\u0275property"]("nbSortHeader",e.getSortDirection(e.customColumn)),a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" ",e.customColumn," ")}}function u(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"td",12),a["\u0275\u0275element"](1,"ngx-fs-icon",13),a["\u0275\u0275text"](2),a["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit,n=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("kind",e.data.kind)("expanded",e.expanded),a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" ",e.data[n.customColumn]," ")}}function b(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"th",11),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]().$implicit,t=a["\u0275\u0275nextContext"]();a["\u0275\u0275property"]("nbSortHeader",t.getSortDirection(e)),a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" ",e," ")}}function g(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"td",12),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit,n=a["\u0275\u0275nextContext"]().$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate"](e.data[n]||"-")}}function C(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0,14),a["\u0275\u0275template"](1,b,2,2,"th",6),a["\u0275\u0275template"](2,g,2,1,"td",7),a["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit,n=t.index,r=a["\u0275\u0275nextContext"]();a["\u0275\u0275property"]("nbTreeGridColumnDef",e)("showOn",r.getShowOn(n))}}function O(e,t){if(1&e&&a["\u0275\u0275element"](0,"nb-tree-grid-row-toggle",2),2&e){const e=a["\u0275\u0275nextContext"]();a["\u0275\u0275property"]("expanded",e.expanded)}}function f(e,t){1&e&&a["\u0275\u0275element"](0,"nb-icon",3)}let P=(()=>{class e{constructor(e){this.dataSourceBuilder=e,this.customColumn="name",this.defaultColumns=["size","kind","items"],this.allColumns=[this.customColumn,...this.defaultColumns],this.sortDirection=c.cb.NONE,this.data=[{data:{name:"Projects",size:"1.8 MB",items:5,kind:"dir"},children:[{data:{name:"project-1.doc",kind:"doc",size:"240 KB"}},{data:{name:"project-2.doc",kind:"doc",size:"290 KB"}},{data:{name:"project-3",kind:"txt",size:"466 KB"}},{data:{name:"project-4.docx",kind:"docx",size:"900 KB"}}]},{data:{name:"Reports",kind:"dir",size:"400 KB",items:2},children:[{data:{name:"Report 1",kind:"doc",size:"100 KB"}},{data:{name:"Report 2",kind:"doc",size:"300 KB"}}]},{data:{name:"Other",kind:"dir",size:"109 MB",items:2},children:[{data:{name:"backup.bkp",kind:"bkp",size:"107 MB"}},{data:{name:"secret-note.txt",kind:"txt",size:"2 MB"}}]}],this.dataSource=this.dataSourceBuilder.create(this.data)}updateSort(e){this.sortColumn=e.column,this.sortDirection=e.direction}getSortDirection(e){return this.sortColumn===e?this.sortDirection:c.cb.NONE}getShowOn(e){return 400+100*e}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](c.qb))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-tree-grid"]],decls:12,vars:7,consts:[["for","search",1,"search-label"],["nbInput","","id","search",1,"search-input",3,"nbFilterInput"],[3,"nbTreeGrid","nbSort","sort"],["nbTreeGridHeaderRow","",4,"nbTreeGridHeaderRowDef"],["nbTreeGridRow","",4,"nbTreeGridRowDef","nbTreeGridRowDefColumns"],[3,"nbTreeGridColumnDef"],["nbTreeGridHeaderCell","",3,"nbSortHeader",4,"nbTreeGridHeaderCellDef"],["nbTreeGridCell","",4,"nbTreeGridCellDef"],[3,"nbTreeGridColumnDef","showOn",4,"ngFor","ngForOf"],["nbTreeGridHeaderRow",""],["nbTreeGridRow",""],["nbTreeGridHeaderCell","",3,"nbSortHeader"],["nbTreeGridCell",""],[3,"kind","expanded"],[3,"nbTreeGridColumnDef","showOn"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"nb-card"),a["\u0275\u0275elementStart"](1,"nb-card-body"),a["\u0275\u0275elementStart"](2,"label",0),a["\u0275\u0275text"](3,"Search:"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](4,"input",1),a["\u0275\u0275elementStart"](5,"table",2),a["\u0275\u0275listener"]("sort",(function(e){return t.updateSort(e)})),a["\u0275\u0275template"](6,m,1,0,"tr",3),a["\u0275\u0275template"](7,h,1,0,"tr",4),a["\u0275\u0275elementContainerStart"](8,5),a["\u0275\u0275template"](9,p,2,2,"th",6),a["\u0275\u0275template"](10,u,3,3,"td",7),a["\u0275\u0275elementContainerEnd"](),a["\u0275\u0275template"](11,C,3,2,"ng-container",8),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("nbFilterInput",t.dataSource),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("nbTreeGrid",t.dataSource)("nbSort",t.dataSource),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("nbTreeGridHeaderRowDef",t.allColumns),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("nbTreeGridRowDefColumns",t.allColumns),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("nbTreeGridColumnDef",t.customColumn),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("ngForOf",t.defaultColumns))},directives:function(){return[c.l,c.k,c.B,c.x,c.pb,c.db,c.ub,c.xb,c.ob,c.rb,c.mb,l.l,c.tb,c.wb,c.sb,c.eb,c.nb,M]},styles:[".nb-theme-default   [_nghost-%COMP%]   button[nbTreeGridRowToggle][_ngcontent-%COMP%]{background:transparent;border:none;padding:0}.nb-theme-default   [_nghost-%COMP%]   .search-label[_ngcontent-%COMP%]{display:block}.nb-theme-default   [_nghost-%COMP%]   .search-input[_ngcontent-%COMP%]{margin-bottom:1rem}.nb-theme-default   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:100%}.nb-theme-default   [_nghost-%COMP%]     .row-toggle-button{color:#222b45}.nb-theme-default   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-transform:capitalize}@media screen and (min-width:400px){.nb-theme-default   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:50%}}@media screen and (min-width:500px){.nb-theme-default   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:33.333%}}@media screen and (min-width:600px){.nb-theme-default   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:31%}.nb-theme-default   [_nghost-%COMP%]   .nb-column-items[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:23%}}.nb-theme-dark   [_nghost-%COMP%]   button[nbTreeGridRowToggle][_ngcontent-%COMP%]{background:transparent;border:none;padding:0}.nb-theme-dark   [_nghost-%COMP%]   .search-label[_ngcontent-%COMP%]{display:block}.nb-theme-dark   [_nghost-%COMP%]   .search-input[_ngcontent-%COMP%]{margin-bottom:1rem}.nb-theme-dark   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:100%}.nb-theme-dark   [_nghost-%COMP%]     .row-toggle-button{color:#fff}.nb-theme-dark   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-transform:capitalize}@media screen and (min-width:400px){.nb-theme-dark   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:50%}}@media screen and (min-width:500px){.nb-theme-dark   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:33.333%}}@media screen and (min-width:600px){.nb-theme-dark   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:31%}.nb-theme-dark   [_nghost-%COMP%]   .nb-column-items[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:23%}}.nb-theme-cosmic   [_nghost-%COMP%]   button[nbTreeGridRowToggle][_ngcontent-%COMP%]{background:transparent;border:none;padding:0}.nb-theme-cosmic   [_nghost-%COMP%]   .search-label[_ngcontent-%COMP%]{display:block}.nb-theme-cosmic   [_nghost-%COMP%]   .search-input[_ngcontent-%COMP%]{margin-bottom:1rem}.nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:100%}.nb-theme-cosmic   [_nghost-%COMP%]     .row-toggle-button{color:#fff}.nb-theme-cosmic   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-transform:capitalize}@media screen and (min-width:400px){.nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:50%}}@media screen and (min-width:500px){.nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:33.333%}}@media screen and (min-width:600px){.nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:31%}.nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-items[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:23%}}.nb-theme-corporate   [_nghost-%COMP%]   button[nbTreeGridRowToggle][_ngcontent-%COMP%]{background:transparent;border:none;padding:0}.nb-theme-corporate   [_nghost-%COMP%]   .search-label[_ngcontent-%COMP%]{display:block}.nb-theme-corporate   [_nghost-%COMP%]   .search-input[_ngcontent-%COMP%]{margin-bottom:1rem}.nb-theme-corporate   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:100%}.nb-theme-corporate   [_nghost-%COMP%]     .row-toggle-button{color:#222b45}.nb-theme-corporate   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-transform:capitalize}@media screen and (min-width:400px){.nb-theme-corporate   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:50%}}@media screen and (min-width:500px){.nb-theme-corporate   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:33.333%}}@media screen and (min-width:600px){.nb-theme-corporate   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:31%}.nb-theme-corporate   [_nghost-%COMP%]   .nb-column-items[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:23%}}"]}),e})(),M=(()=>{class e{isDir(){return"dir"===this.kind}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-fs-icon"]],inputs:{kind:"kind",expanded:"expanded"},decls:3,vars:2,consts:[[3,"expanded",4,"ngIf","ngIfElse"],["fileIcon",""],[3,"expanded"],["icon","file-text-outline"]],template:function(e,t){if(1&e&&(a["\u0275\u0275template"](0,O,1,1,"nb-tree-grid-row-toggle",0),a["\u0275\u0275template"](1,f,1,0,"ng-template",null,1,a["\u0275\u0275templateRefExtractor"])),2&e){const e=a["\u0275\u0275reference"](2);a["\u0275\u0275property"]("ngIf",t.isDir())("ngIfElse",e)}},directives:[l.m,c.yb,c.y],encapsulation:2}),e})();n.d(t,"a",(function(){return w}));const _=[{path:"",component:o,children:[{path:"smart-table",component:d},{path:"tree-grid",component:P}]}];let w=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.g.forChild(_)],r.g]}),e})()},UXJL:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("AytR"),a=n("lJxs"),o=n("fXoL"),i=n("tk/3");let s=(()=>{class e{constructor(e){this.http=e}getAllPatients(){return this.http.get(`${r.a.apiUrl}/patient`).pipe(Object(a.a)(e=>e))}createNewScoreForPatient(e,t){return this.http.post(`${r.a.apiUrl}/warning-score/patient/${t}`,{years:e.years,numberOfRespirations:e.numberOfRespirations,oxygenSaturation:e.oxygenSaturation,anyAdditionalO2:e.anyAdditionalO2,systolicPressure:e.systolicPressure,heartRate:e.heartRate,stateOfConsciousness:e.stateOfConsciousness,bodyTemperature:e.bodyTemperature}).pipe(Object(a.a)(e=>e))}getPatient(e){return this.http.get(`${r.a.apiUrl}/patient/${e}`).pipe(Object(a.a)(e=>e))}setPatient(e){const t={assignedDoctor:e.assignedDoctor._id,firstName:e.firstName,lastName:e.lastName,dateOfBirth:e.dateOfBirth,sex:e.sextoLowerCase(),address:e.address,contact:e.contact,drugAllergy:e.drugAllergy,smoking:e.smoking,coronaryHeartDisease:e.coronaryHeartDisease,heartArrhythmia:e.heartArrhythmia,heartFailure:e.heartFailure,lungDisease:e.lungDisease,asthma:e.asthma,chronicKidneyDisease:e.chronicKidneyDisease,diabetes:e.diabetes,heartStroke:e.heartStroke,malignantDisease:e.malignantDisease,chronicLiverDisease:e.chronicLiverDisease,inflamatoryBowelDisease:e.inflamatoryBowelDisease,reuma:e.reuma,hiv:e.hiv,medications:e.medications.split(",").map(e=>e.trim()),operations:e.operations.split(",").map(e=>e.trim())};return this.http.post(`${r.a.apiUrl}/patient`,t).pipe(Object(a.a)(e=>e))}deletePatient(e){return this.http.delete(`${r.a.apiUrl}/patient/${e}`).pipe(Object(a.a)(e=>e))}updatePatient(e,t){const n={assignedDoctor:e.assignedDoctor._id,firstName:e.firstName,lastName:e.lastName,dateOfBirth:e.dateOfBirth,sex:e.sex.toLowerCase(),address:e.address,contact:e.contact,drugAllergy:e.drugAllergy,smoking:e.smoking,coronaryHeartDisease:e.coronaryHeartDisease,heartArrhythmia:e.heartArrhythmia,heartFailure:e.heartFailure,lungDisease:e.lungDisease,asthma:e.asthma,chronicKidneyDisease:e.chronicKidneyDisease,diabetes:e.diabetes,heartStroke:e.heartStroke,malignantDisease:e.malignantDisease,chronicLiverDisease:e.chronicLiverDisease,inflamatoryBowelDisease:e.inflamatoryBowelDisease,reuma:e.reuma,hiv:e.hiv,medications:e.medications.split(",").map(e=>e.trim()),operations:e.operations.split(",").map(e=>e.trim())};return this.http.put(`${r.a.apiUrl}/patient/${t}`,n).pipe(Object(a.a)(e=>e))}getAllPatientRelevantData(e){return this.http.get(`${r.a.apiUrl}/patient-relevant-data/patient/${e}`).pipe(Object(a.a)(e=>e))}getPatientRelevantData(e){return this.http.get(`${r.a.apiUrl}/patient-relevant-data/${e}`).pipe(Object(a.a)(e=>e))}setPatientRelevantData(e,t){return this.http.post(`${r.a.apiUrl}/patient-relevant-data/patient/${t}`,e).pipe(Object(a.a)(e=>e))}updatePatientRelevantData(e,t){return this.http.put(`${r.a.apiUrl}/patient-relevant-data/${t}`,e).pipe(Object(a.a)(e=>e))}deletePatientRelevantData(e){return this.http.delete(`${r.a.apiUrl}/patient-relevant-data/${e}`).pipe(Object(a.a)(e=>e))}getAllPatientsWarningScores(e){return this.http.get(`${r.a.apiUrl}/warning-score/patient/${e}`).pipe(Object(a.a)(e=>e))}getSinglePatientWarningScores(e){return this.http.get(`${r.a.apiUrl}/warning-score/${e}`).pipe(Object(a.a)(e=>e))}setPatientWarningScores(e,t){return this.http.post(`${r.a.apiUrl}/warning-score/patient/${t}`,e).pipe(Object(a.a)(e=>e))}deleteSinglePatientWarningScores(e){return this.http.delete(`${r.a.apiUrl}/warning-score/${e}`).pipe(Object(a.a)(e=>e))}updateSinglePatientWarningScores(e,t){return this.http.put(`${r.a.apiUrl}/warning-score/${t}`,e).pipe(Object(a.a)(e=>e))}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](i.b))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);