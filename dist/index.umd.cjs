(function(s,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue"),require("primevue/datatable"),require("primevue/column"),require("primevue/button"),require("primevue/toolbar"),require("primevue/dialog"),require("axios"),require("primevue/inputtext"),require("primevue/textarea"),require("primevue/inputnumber"),require("primevue/inputswitch"),require("primevue/api")):typeof define=="function"&&define.amd?define(["exports","vue","primevue/datatable","primevue/column","primevue/button","primevue/toolbar","primevue/dialog","axios","primevue/inputtext","primevue/textarea","primevue/inputnumber","primevue/inputswitch","primevue/api"],e):(s=typeof globalThis<"u"?globalThis:s||self,e(s.PVTables={},s.Vue,s.DataTable,s.Column,s.Button,s.Toolbar,s.Dialog,s.axios,s.InputText,s.Textarea,s.InputNumber,s.InputSwitch,s.api))})(this,function(s,e,X,U,m,Y,S,w,T,$,F,M,D){"use strict";const Z={class:"card"},ee={class:"p-3"},te={class:"p-field"},le=["for"],ae=["id"],re={class:"confirmation-content"},ie=e.createElementVNode("i",{class:"pi pi-exclamation-triangle p-mr-3",style:{"font-size":"2rem"}},null,-1),oe={key:0},ne={class:"confirmation-content"},se=e.createElementVNode("i",{class:"pi pi-exclamation-triangle p-mr-3",style:{"font-size":"2rem"}},null,-1),de={key:0},q={__name:"PVTables",props:{table:{type:String,required:!0},actions:{type:Object},reload:{type:Boolean},filters:{type:Object,default:{}}},emits:["message"],setup(L,{expose:v,emit:fe}){e.defineComponent({name:"PVTables"});const u=L,x=e.ref(),G=()=>{let r={};for(let i in f)if(u.filters.hasOwnProperty(i))r[i]=u.filters[i];else switch(f[i].type){default:r[i]={operator:D.FilterOperator.AND,constraints:[{value:null,matchMode:D.FilterMatchMode.STARTS_WITH}]}}x.value=r},ue=r=>{y.value.filters=x.value,k(r)},pe=()=>{G(),y.value.filters=x.value,k()},me=r=>"Поиск по "+r.label,ye=fe,d={add:r=>{ye("message",r)}},R=e.ref(),P=e.ref(!0),I=e.ref(0),H=e.ref(0),y=e.ref({}),_=e.ref([{field:"id",label:"ID"}]);let f={};const h=e.ref();let E=e.ref([]);const A=e.ref(!1),he=e.ref(!1),K=e.ref([]);e.onMounted(async()=>{P.value=!0,y.value={first:R.value.first,rows:R.value.rows,sortField:null,sortOrder:null};try{const r=await w.options("/api/"+u.table);if(!r.data.success){d.add({severity:"error",summary:"Ошибка",detail:r.data.message,life:3e3});return}if(r.data.data.hasOwnProperty("fields")){f=r.data.data.fields;let i=[],o=[];for(let l in f)f[l].field=l,f[l].hasOwnProperty("label")||(f[l].label=l),f[l].hasOwnProperty("type")||(f[l].type="text"),o.push(f[l]),i.push(l);K.value=i,G();let t=r.data.data.actions;for(let l in u.actions)t[l]=u.actions[l];for(let l in t){let a={...t[l]},c=!0;switch(a.action=l,l){case"update":a.hasOwnProperty("row")||(a.row=!0),a.hasOwnProperty("icon")||(a.icon="pi pi-pencil"),a.hasOwnProperty("class")||(a.class="p-button-rounded p-button-success"),a.hasOwnProperty("click")||(a.click=C=>xe(C));break;case"delete":a.hasOwnProperty("row")||(a.row=!0),a.hasOwnProperty("head")||(a.head=!0),a.hasOwnProperty("icon")||(a.icon="pi pi-trash"),a.hasOwnProperty("class")||(a.class="p-button-rounded p-button-danger"),a.hasOwnProperty("click")||(a.click=C=>Be(C)),a.hasOwnProperty("head_click")||(a.head_click=()=>Fe()),a.hasOwnProperty("label")||(a.label="Удалить");break;case"create":a.hasOwnProperty("head")||(a.head=!0),a.hasOwnProperty("icon")||(a.icon="pi pi-plus"),a.hasOwnProperty("class")||(a.class="p-button-rounded p-button-success"),a.hasOwnProperty("head_click")||(a.head_click=()=>Oe()),a.hasOwnProperty("label")||(a.label="Создать");break;case"subtables":c=!1;for(let C in t[l]){let p={...t[l][C]};p.table=C,p.hasOwnProperty("row")||(p.row=!0),p.hasOwnProperty("icon")||(p.icon="pi pi-angle-right"),p.hasOwnProperty("class")||(p.class="p-button-rounded p-button-success"),p.hasOwnProperty("click")||(p.click=Te=>be(Te,p)),A.value=!0,E.value.push(p)}break}c&&(a.hasOwnProperty("row")&&(A.value=!0),a.hasOwnProperty("row")&&(he.value=!0),E.value.push(a))}_.value=o}k()}catch(r){d.add({severity:"error",summary:"Ошибка",detail:r.message,life:3e3}),console.error(r)}});const N=e.ref({}),z=e.ref({}),Q=e.ref({}),W=async r=>{N.value={...r}},be=async(r,i)=>{let o={...N.value};if(o.hasOwnProperty(r.id))if(z.value[r.id]==i.table){delete o[r.id],await W(o);return}else delete o[r.id],await W(o),o[r.id]=!0;else o[r.id]=!0;if(z.value[r.id]=i.table,i.hasOwnProperty("where")){let t={};for(let l in i.where)t[l]={operator:D.FilterOperator.AND,constraints:[{value:r[i.where[l]],matchMode:D.FilterMatchMode.EQUALS}]};Q.value[r.id]=t}N.value={...o}},k=r=>{P.value=!0,y.value={...y.value,first:(r==null?void 0:r.first)||H.value};let i={limit:y.value.rows,setTotal:1,offset:y.value.first,multiSortMeta:y.value.multiSortMeta,filters:x.value};w.get("/api/"+u.table,{params:i}).then(function(o){if(!o.data.success){d.add({severity:"error",summary:"Ошибка",detail:o.data.message,life:3e3});return}let t=[];o.data.data.rows.length&&o.data.data.rows.forEach(function(l){for(let a in f)switch(a=="id"&&(l[a]=Number(l[a])),f[a].type){case"boolean":l.hasOwnProperty(a)&&(l[a]==="0"?l[a]=!1:l[a]=!0);break;case"number":case"decimal":l[a]=Number(l[a]);break}t.push(l)}),h.value=t,I.value=o.data.data.total,P.value=!1}).catch(function(o){d.add({severity:"error",summary:"Ошибка",detail:o.message,life:3e3})})},J=()=>{k()};v({refresh:J});const we=async r=>{let{data:i,newValue:o,field:t}=r;try{const l=await w.patch("/api/"+u.table,{id:i.id,[t]:o});if(!l.data.success){d.add({severity:"error",summary:"Ошибка",detail:l.data.message,life:3e3});return}l.data.success&&(i[t]=o)}catch(l){r.preventDefault(),d.add({severity:"error",summary:"Ошибка",detail:l.message,life:3e3}),console.error(l)}},ke=r=>{y.value=r,k(r)},Ve=r=>{y.value=r,k(r)},ge=r=>r.toString().replace(".",","),n=e.ref({}),j=e.ref(!1),V=e.ref(!1),xe=r=>{n.value={...r},V.value=!0},Ce=()=>{V.value=!1,j.value=!1},Pe=()=>{j.value=!0,n.value.id?w.patch("/api/"+u.table,n.value).then(r=>{if(!r.data.success){d.add({severity:"error",summary:"Ошибка",detail:r.data.message,life:3e3});return}h.value[Ne(Number(n.value.id))]=n.value,V.value=!1,n.value={}}).catch(function(r){d.add({severity:"error",summary:"Ошибка",detail:r.message,life:3e3})}):w.put("/api/"+u.table,n.value).then(r=>{if(!r.data.success){d.add({severity:"error",summary:"Ошибка",detail:r.data.message,life:3e3});return}P.value=!0,V.value=!1,n.value={},k()}).catch(function(r){d.add({severity:"error",summary:"Ошибка",detail:r.message,life:3e3})})},Ne=r=>{let i=-1;for(let o=0;o<h.value.length;o++)if(h.value[o].id===r){i=o;break}return i},Oe=()=>{n.value={},j.value=!1,V.value=!0},O=e.ref(!1),B=e.ref(!1),Be=r=>{n.value=r,O.value=!0},Ue=()=>{w.delete("/api/"+u.table+"?ids="+n.value.id).then(r=>{if(!r.data.success){d.add({severity:"error",summary:"Ошибка",detail:r.data.message,life:3e3});return}h.value=h.value.filter(i=>i.id!==n.value.id),O.value=!1,n.value={}}).catch(function(r){d.add({severity:"error",summary:"Ошибка",detail:r.message,life:3e3})})},Fe=()=>{b.value&&b.value.length&&(B.value=!0)},De=()=>{let r=[];b.value.forEach(function(i){r.push(i.id)}),w.delete("/api/"+u.table+"?ids="+r.join(",")).then(i=>{if(!i.data.success){d.add({severity:"error",summary:"Ошибка",detail:i.data.message,life:3e3});return}h.value=h.value.filter(o=>!b.value.includes(o)),B.value=!1,b.value=null}).catch(function(i){d.add({severity:"error",summary:"Ошибка",detail:i.message,life:3e3})})},b=e.ref(),g=e.ref(!1),_e=r=>{g.value=r.checked,g.value?(g.value=!0,b.value=h.value):(g.value=!1,b.value=[])},Ee=()=>{g.value=b.value.length===I.value},Se=()=>{g.value=!1};return(r,i)=>{const o=e.resolveComponent("PVTables",!0);return e.openBlock(),e.createElementBlock("div",Z,[e.createVNode(e.unref(Y),{class:"p-mb-4"},{start:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(E).filter(t=>t.head),t=>(e.openBlock(),e.createBlock(e.unref(m),{icon:t.icon,label:t.label,class:e.normalizeClass(t.class),onClick:t.head_click},null,8,["icon","label","class","onClick"]))),256))]),end:e.withCtx(()=>[e.createVNode(e.unref(m),{icon:"pi pi-refresh",class:"p-button-rounded p-button-success",onClick:J}),e.createVNode(e.unref(m),{type:"button",icon:"pi pi-filter-slash",onClick:i[0]||(i[0]=t=>pe())})]),_:1}),e.createVNode(e.unref(X),{value:h.value,lazy:"",paginator:"",first:H.value,rows:10,rowsPerPageOptions:[10,60,30,10],ref_key:"dt",ref:R,dataKey:"id",totalRecords:I.value,loading:P.value,onPage:i[1]||(i[1]=t=>ke(t)),onSort:i[2]||(i[2]=t=>Ve(t)),sortMode:"multiple",editMode:"cell",onCellEditComplete:we,selection:b.value,"onUpdate:selection":i[3]||(i[3]=t=>b.value=t),selectAll:g.value,onSelectAllChange:_e,onRowSelect:Ee,onRowUnselect:Se,filters:x.value,"onUpdate:filters":i[4]||(i[4]=t=>x.value=t),filterDisplay:"menu",globalFilterFields:K.value,onFilter:i[5]||(i[5]=t=>ue(t)),expandedRows:N.value,"onUpdate:expandedRows":i[6]||(i[6]=t=>N.value=t),showGridlines:""},{expansion:e.withCtx(t=>[e.createElementVNode("div",ee,[e.createElementVNode("h5",null,"Orders for "+e.toDisplayString(t.data.id),1),e.createVNode(o,{table:z.value[t.data.id],filters:Q.value[t.data.id]},null,8,["table","filters"])])]),default:e.withCtx(()=>[e.createVNode(e.unref(U),{selectionMode:"multiple",headerStyle:"width: 3rem"}),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(_.value.filter(t=>t.modal_only!=!0),t=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:t.field},[t.field=="id"?(e.openBlock(),e.createBlock(e.unref(U),{key:0,field:"id",header:"id",style:{padding:"1rem 10px 1rem 10px"},sortable:""},{body:e.withCtx(({data:l,field:a})=>[e.createTextVNode(e.toDisplayString(l[a]),1)]),_:1})):(e.openBlock(),e.createBlock(e.unref(U),{key:1,field:t.field,header:t.label,style:{"min-width":"12rem"},sortable:""},e.createSlots({filter:e.withCtx(({filterModel:l})=>[e.createVNode(e.unref(T),{modelValue:l.value,"onUpdate:modelValue":a=>l.value=a,type:"text",class:"p-column-filter",placeholder:me(t)},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},[t.type=="decimal"?{name:"body",fn:e.withCtx(({data:l,field:a})=>[e.createTextVNode(e.toDisplayString(ge(l[a])),1)]),key:"0"}:t.type=="boolean"?{name:"body",fn:e.withCtx(({data:l,field:a})=>[e.createVNode(e.unref(M),{modelValue:l[a],"onUpdate:modelValue":c=>l[a]=c},null,8,["modelValue","onUpdate:modelValue"])]),key:"1"}:{name:"body",fn:e.withCtx(({data:l,field:a})=>[e.createTextVNode(e.toDisplayString(l[a]),1)]),key:"2"},t.type=="textarea"?{name:"editor",fn:e.withCtx(({data:l,field:a})=>[e.createVNode(e.unref($),{modelValue:l[a],"onUpdate:modelValue":c=>l[a]=c,rows:"1"},null,8,["modelValue","onUpdate:modelValue"])]),key:"3"}:t.type=="number"?{name:"editor",fn:e.withCtx(({data:l,field:a})=>[e.createVNode(e.unref(F),{modelValue:l[a],"onUpdate:modelValue":c=>l[a]=c},null,8,["modelValue","onUpdate:modelValue"])]),key:"4"}:t.type=="decimal"?{name:"editor",fn:e.withCtx(({data:l,field:a})=>[e.createVNode(e.unref(F),{modelValue:l[a],"onUpdate:modelValue":c=>l[a]=c,minFractionDigits:t.FractionDigits,maxFractionDigits:t.FractionDigits},null,8,["modelValue","onUpdate:modelValue","minFractionDigits","maxFractionDigits"])]),key:"5"}:t.type=="boolean"?{name:"editor",fn:e.withCtx(({data:l,field:a})=>[e.createVNode(e.unref(M),{modelValue:l[a],"onUpdate:modelValue":c=>l[a]=c},null,8,["modelValue","onUpdate:modelValue"])]),key:"6"}:{name:"editor",fn:e.withCtx(({data:l,field:a})=>[e.createVNode(e.unref(T),{modelValue:l[a],"onUpdate:modelValue":c=>l[a]=c},null,8,["modelValue","onUpdate:modelValue"])]),key:"7"}]),1032,["field","header"]))],64))),128)),A.value?(e.openBlock(),e.createBlock(e.unref(U),{key:0,exportable:!1,style:{"white-space":"nowrap"}},{body:e.withCtx(t=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(E).filter(l=>l.row),l=>(e.openBlock(),e.createBlock(e.unref(m),{icon:l.icon,class:e.normalizeClass(l.class),onClick:a=>l.click(t.data,_.value)},null,8,["icon","class","onClick"]))),256))]),_:1})):e.createCommentVNode("",!0)]),_:1},8,["value","first","totalRecords","loading","selection","selectAll","filters","globalFilterFields","expandedRows"]),e.createVNode(e.unref(S),{visible:V.value,"onUpdate:visible":i[7]||(i[7]=t=>V.value=t),style:{width:"450px"},header:"Редактировать",modal:!0,class:"p-fluid"},{footer:e.withCtx(()=>[e.createVNode(e.unref(m),{label:"Отмена",icon:"pi pi-times",class:"p-button-text",onClick:Ce}),e.createVNode(e.unref(m),{label:"Сохранить",icon:"pi pi-check",class:"p-button-text",onClick:Pe})]),default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(_.value.filter(t=>t.table_only!=!0),t=>(e.openBlock(),e.createElementBlock("div",te,[e.createElementVNode("label",{for:t.field},e.toDisplayString(t.label),9,le),t.field=="id"?(e.openBlock(),e.createElementBlock("p",{key:0,id:t.field},e.toDisplayString(n.value[t.field]),9,ae)):t.type=="textarea"?(e.openBlock(),e.createBlock(e.unref($),{key:1,id:t.field,modelValue:n.value[t.field],"onUpdate:modelValue":l=>n.value[t.field]=l,modelModifiers:{trim:!0}},null,8,["id","modelValue","onUpdate:modelValue"])):t.type=="number"?(e.openBlock(),e.createBlock(e.unref(F),{key:2,id:t.field,modelValue:n.value[t.field],"onUpdate:modelValue":l=>n.value[t.field]=l},null,8,["id","modelValue","onUpdate:modelValue"])):t.type=="decimal"?(e.openBlock(),e.createBlock(e.unref(F),{key:3,id:t.field,modelValue:n.value[t.field],"onUpdate:modelValue":l=>n.value[t.field]=l,minFractionDigits:t.FractionDigits,maxFractionDigits:t.FractionDigits},null,8,["id","modelValue","onUpdate:modelValue","minFractionDigits","maxFractionDigits"])):t.type=="boolean"?(e.openBlock(),e.createBlock(e.unref(M),{key:4,id:t.field,modelValue:n.value[t.field],"onUpdate:modelValue":l=>n.value[t.field]=l},null,8,["id","modelValue","onUpdate:modelValue"])):(e.openBlock(),e.createBlock(e.unref(T),{key:5,id:t.field,modelValue:n.value[t.field],"onUpdate:modelValue":l=>n.value[t.field]=l,modelModifiers:{trim:!0}},null,8,["id","modelValue","onUpdate:modelValue"]))]))),256))]),_:1},8,["visible"]),e.createVNode(e.unref(S),{visible:O.value,"onUpdate:visible":i[9]||(i[9]=t=>O.value=t),style:{width:"450px"},header:"Confirm",modal:!0},{footer:e.withCtx(()=>[e.createVNode(e.unref(m),{label:"Нет",icon:"pi pi-times",class:"p-button-text",onClick:i[8]||(i[8]=t=>O.value=!1)}),e.createVNode(e.unref(m),{label:"Да",icon:"pi pi-check",class:"p-button-text",onClick:Ue})]),default:e.withCtx(()=>[e.createElementVNode("div",re,[ie,n.value?(e.openBlock(),e.createElementBlock("span",oe,"Вы хотите удалить эту запись?")):e.createCommentVNode("",!0)])]),_:1},8,["visible"]),e.createVNode(e.unref(S),{visible:B.value,"onUpdate:visible":i[11]||(i[11]=t=>B.value=t),style:{width:"450px"},header:"Confirm",modal:!0},{footer:e.withCtx(()=>[e.createVNode(e.unref(m),{label:"Нет",icon:"pi pi-times",class:"p-button-text",onClick:i[10]||(i[10]=t=>B.value=!1)}),e.createVNode(e.unref(m),{label:"Да",icon:"pi pi-check",class:"p-button-text",onClick:De})]),default:e.withCtx(()=>[e.createElementVNode("div",ne,[se,n.value?(e.openBlock(),e.createElementBlock("span",de,"Вы хотите удалить отмеченные записи?")):e.createCommentVNode("",!0)])]),_:1},8,["visible"])])}}},ce={install:(L,v)=>{L.component(q.name,q)}};s.PVTables=q,s.default=ce,Object.defineProperties(s,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});