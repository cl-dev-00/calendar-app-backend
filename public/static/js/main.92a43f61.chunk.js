(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{59:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(9),r=n.n(c),o=n(8),s=n(49),i=n(7),l=n(11),u=n.n(l),j=n(17),d=n(15),b=n.n(d),m="https://mern-calendar-cl.herokuapp.com/api",p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("GET"===t)return fetch("".concat(m,"/").concat(e));var a={method:t,headers:{"Content-type":"application/json"},body:JSON.stringify(n)};return fetch("".concat(m,"/").concat(e),a)},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=localStorage.getItem("token")||"";return"GET"===t?fetch("".concat(m,"/").concat(e),{method:t,headers:{"x-token":a}}):fetch("".concat(m,"/").concat(e),{method:t,headers:{"x-token":a,"Content-type":"application/json"},body:JSON.stringify(n)})},v="[Ui] Open Modal",f="[Ui] Close Modal",h="[Event] Add New Event",x="[Event] Set Active Event",g="[Event] Clear Active Event",y="[Event] Update Event",N="[Event] Deleted Event",k="[Event] Loaded Events",E="[Event] Select Slot Day",w="[Event] Clrear Select Slot Day",S="[Auth] Checking Login State Finish",C="[Auth] Login",D="[Auth] Logout",A=function(){return{type:D}},T=function(e){return{type:C,payload:e}},I=function(){return{type:S}},P=n(12),_=n(22),M=n(4),L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(P.a)(t,2),c=n[0],r=n[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(t)},s=function(e){var t=e.target;r(Object(M.a)(Object(M.a)({},c),{},Object(_.a)({},t.name,t.value)))};return[c,s,o]},R=(n(59),n(1)),G=function(){var e=Object(o.b)(),t=L({lEmail:"pedro@gmail.com",lPassword:"123456"}),n=Object(P.a)(t,2),a=n[0],c=n[1],r=a.lEmail,s=a.lPassword,i=L({rName:"Pedro",rEmail:"pedro2@gmail.com",rPassword1:"123456",rPassword2:"123456"}),l=Object(P.a)(i,2),d=l[0],m=l[1],O=d.rName,v=d.rEmail,f=d.rPassword1,h=d.rPassword2;return Object(R.jsx)("div",{style:{backgroundImage:"url(/assets/img/background.jpg)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"left bottom"},className:"container-fluid login-container",children:Object(R.jsxs)("div",{className:"row animate__animated animate__fadeIn",children:[Object(R.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(R.jsx)("h3",{children:"Ingreso"}),Object(R.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=r,a=s,function(){var e=Object(j.a)(u.a.mark((function e(t){var c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("auth","POST",{email:n,password:a});case 2:return c=e.sent,e.next=5,c.json();case 5:(r=e.sent).ok?(localStorage.setItem("token",r.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(T({uid:r.uid,name:r.name}))):b.a.fire("Error",r.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(R.jsx)("div",{className:"form-group",children:Object(R.jsx)("input",{name:"lEmail",onChange:c,value:r,type:"text",className:"form-control",placeholder:"Correo"})}),Object(R.jsx)("div",{className:"form-group",children:Object(R.jsx)("input",{name:"lPassword",onChange:c,value:s,type:"password",className:"form-control",placeholder:"Contrase\xf1a"})}),Object(R.jsx)("div",{className:"form-group",children:Object(R.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(R.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(R.jsx)("h3",{children:"Registro"}),Object(R.jsxs)("form",{onSubmit:function(t){var n,a,c;t.preventDefault(),f===h?e((n=O,a=v,c=f,function(){var e=Object(j.a)(u.a.mark((function e(t){var r,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("auth/new","POST",{name:n,email:a,password:c});case 2:return r=e.sent,e.next=5,r.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(T({name:o.name,uid:o.uid}))):b.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())):b.a.fire("Error","Los password no son iguales","error")},children:[Object(R.jsx)("div",{className:"form-group",children:Object(R.jsx)("input",{name:"rName",value:O,onChange:m,type:"text",className:"form-control",placeholder:"Nombre"})}),Object(R.jsx)("div",{className:"form-group",children:Object(R.jsx)("input",{name:"rEmail",value:v,onChange:m,type:"email",className:"form-control",placeholder:"Correo"})}),Object(R.jsx)("div",{className:"form-group",children:Object(R.jsx)("input",{name:"rPassword1",value:f,onChange:m,type:"password",className:"form-control",placeholder:"Contrase\xf1a"})}),Object(R.jsx)("div",{className:"form-group",children:Object(R.jsx)("input",{name:"rPassword2",value:h,onChange:m,type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a"})}),Object(R.jsx)("div",{className:"form-group",children:Object(R.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})},U=n(16),F=n.n(U),H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(M.a)(Object(M.a)({},e),{},{start:F()(e.start).toDate(),end:F()(e.end).toDate()})}))},V=function(e){return{type:k,payload:e}},J=function(e){return{type:h,payload:e}},z=function(){return{type:g}},B=function(e){return{type:y,payload:e}},X=function(){return{type:N}},q=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})).name;return Object(R.jsxs)("nav",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(R.jsx)("span",{className:"navbar-brand ",children:t}),Object(R.jsxs)("button",{onClick:function(){e(z()),e(function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.clear(),t(A());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},className:"btn btn-outline-danger",children:[Object(R.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(R.jsx)("span",{className:"ml-2",children:"Salir"})]})]})},K=n(42),Q={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},W=(n(62),function(e){var t=e.event,n=t.title,a=t.user;return Object(R.jsxs)("div",{children:[Object(R.jsxs)("strong",{children:[" ",n," "]}),"-",Object(R.jsxs)("strong",{children:[" ",a.name," "]})]})}),Y=n(38),Z=n.n(Y),$=function(){return{type:v}},ee=(n(70),n(39)),te=n.n(ee),ne={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};Z.a.setAppElement("#root");var ae=F()().minutes(0).seconds(0).add(1,"hours"),ce=ae.clone().add(1,"hours"),re={title:"",notes:"",start:ae.toDate(),end:ce.toDate()},oe=function(){var e=Object(o.c)((function(e){return e.ui})).openModal,t=Object(o.c)((function(e){return e.calendar})),n=t.activeEvent,c=t.daySlotCalendar,r=Object(o.b)(),s=Object(a.useState)(ae.toDate()),i=Object(P.a)(s,2),l=i[0],d=i[1],m=Object(a.useState)(ce.toDate()),p=Object(P.a)(m,2),v=p[0],h=p[1],x=Object(a.useState)(!0),g=Object(P.a)(x,2),y=g[0],N=g[1],k=Object(a.useState)(re),E=Object(P.a)(k,2),S=E[0],C=E[1],D=S.notes,A=S.title,T=S.start,I=S.end;Object(a.useEffect)((function(){n?(C(n),d(n.start),h(n.end)):c?(C(c),d(c.start),h(c.end)):C(re)}),[n,c,C]);var L=function(e){var t=e.target;C(Object(M.a)(Object(M.a)({},S),{},Object(_.a)({},t.name,t.value)))},G=function(){r({type:f}),r(z()),r({type:w}),C(re)};return Object(R.jsxs)(Z.a,{isOpen:e,onRequestClose:G,style:ne,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo",ariaHideApp:!1,children:[Object(R.jsxs)("h1",{children:[" ",n?"Editar evento":"Nuevo evento"," "]}),Object(R.jsx)("hr",{}),Object(R.jsxs)("form",{className:"container",onSubmit:function(e){e.preventDefault();var t,a=F()(T),c=F()(I);return a.isSameOrAfter(c)?b.a.fire("Error","La fecha fin debe de ser mayor a la fecha de inicio","error"):A.trim().length<2?N(!1):(r(n?(t=S,function(){var e=Object(j.a)(u.a.mark((function e(n){var a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("events/".concat(t.id),"PUT",t);case 3:return a=e.sent,e.next=6,a.json();case 6:(c=e.sent).ok?n(B(t)):b.a.fire("Error",c.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(j.a)(u.a.mark((function t(n,a){var c,r,o,s,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O("events","POST",e);case 3:return c=t.sent,t.next=6,c.json();case 6:(r=t.sent).ok?(o=a().auth,s=o.uid,i=o.name,e.id=r.event.id,e.user={_id:s,name:i},n(J(e))):b.a.fire("Error",r.msg,"error"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,n){return t.apply(this,arguments)}}()}(S)),N(!0),void G())},children:[Object(R.jsxs)("div",{className:"form-group",children:[Object(R.jsx)("label",{children:"Fecha y hora inicio"}),Object(R.jsx)(te.a,{className:"form-control","data-enable-time":!0,value:l,onChange:function(e){return function(e){var t=Object(P.a)(e,1)[0];d(t),C(Object(M.a)(Object(M.a)({},S),{},{start:t}))}(e)}})]}),Object(R.jsxs)("div",{className:"form-group",children:[Object(R.jsx)("label",{children:"Fecha y hora fin"}),Object(R.jsx)(te.a,{className:"form-control","data-enable-time":!0,value:v,options:{minDate:l},onChange:function(e){return function(e){var t=Object(P.a)(e,1)[0];h(t),C(Object(M.a)(Object(M.a)({},S),{},{end:t}))}(e)}})]}),Object(R.jsx)("hr",{}),Object(R.jsxs)("div",{className:"form-group",children:[Object(R.jsx)("label",{children:"Titulo y notas"}),Object(R.jsx)("input",{type:"text",className:"form-control ".concat(!y&&"is-invalid"," "),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:A,onChange:L}),Object(R.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(R.jsxs)("div",{className:"form-group",children:[Object(R.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:D,onChange:L}),Object(R.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(R.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(R.jsx)("i",{className:"far fa-save"}),Object(R.jsx)("span",{children:" Guardar"})]})]})]})},se=function(){var e=Object(o.b)();return Object(R.jsx)("button",{className:"btn btn-primary fab",type:"button",onClick:function(){e(z()),e($())},children:Object(R.jsx)("i",{className:"fas fa-plus"})})},ie=function(){var e=Object(o.b)();return Object(R.jsxs)("button",{onClick:function(){e(function(){var e=Object(j.a)(u.a.mark((function e(t,n){var a,c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=n().calendar.activeEvent.id,e.next=4,O("events/".concat(a),"DELETE");case 4:return c=e.sent,e.next=7,c.json();case 7:(r=e.sent).ok?(t(X()),t(z())):b.a.fire("Error",r.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}())},className:"btn btn-danger fab-danger",type:"button",children:[Object(R.jsx)("i",{className:"fas fa-trash"}),Object(R.jsx)("span",{children:"Borrar evento"})]})};F.a.locale("es");var le=Object(K.b)(F.a),ue=function(){var e=Object(o.c)((function(e){return e.calendar})),t=e.events,n=e.activeEvent,c=Object(o.c)((function(e){return e.auth})).uid,r=Object(o.b)(),s=Object(a.useState)(localStorage.getItem("lastView")||"month"),i=Object(P.a)(s,2),l=i[0],d=i[1];Object(a.useEffect)((function(){r(function(){var e=Object(j.a)(u.a.mark((function e(t){var n,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("events/");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,c=H(a.events),t(V(c)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[r]);return Object(R.jsxs)("div",{className:"calendar-screen",children:[Object(R.jsx)(q,{}),Object(R.jsx)(K.a,{className:"animate__animated animate__zoomIn",localizer:le,events:t,startAccessor:"start",endAccessor:"end",messages:Q,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:e.user._id===c?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(e){r($())},onView:function(e){d(e),localStorage.setItem("lastView",e)},onSelectEvent:function(e){r(function(e){return{type:x,payload:e}}(e))},view:l,components:{event:W},selectable:!0,onSelectSlot:function(e){var t=e.start,n=e.end;r({type:E,payload:{title:"",notes:"",start:t,end:n}}),r($())}}),Object(R.jsx)(se,{}),n&&Object(R.jsx)(ie,{}),Object(R.jsx)(oe,{})]})},je=function(){return Object(R.jsx)("div",{className:"spinner-content",children:Object(R.jsxs)("div",{className:"sk-chase",children:[Object(R.jsx)("div",{className:"sk-chase-dot"}),Object(R.jsx)("div",{className:"sk-chase-dot"}),Object(R.jsx)("div",{className:"sk-chase-dot"}),Object(R.jsx)("div",{className:"sk-chase-dot"}),Object(R.jsx)("div",{className:"sk-chase-dot"}),Object(R.jsx)("div",{className:"sk-chase-dot"})]})})},de=n(30),be=function(e){var t=e.isAuthentication,n=e.component,a=Object(de.a)(e,["isAuthentication","component"]);return Object(R.jsx)(i.b,Object(M.a)(Object(M.a)({},a),{},{component:function(e){return t?Object(R.jsx)(n,Object(M.a)({},e)):Object(R.jsx)(i.a,{to:"/login"})}}))},me=function(e){var t=e.isAuthentication,n=e.component,a=Object(de.a)(e,["isAuthentication","component"]);return Object(R.jsx)(i.b,Object(M.a)(Object(M.a)({},a),{},{component:function(e){return t?Object(R.jsx)(i.a,{to:"/"}):Object(R.jsx)(n,Object(M.a)({},e))}}))},pe=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})),n=t.checking,c=t.uid;return Object(a.useEffect)((function(){e(function(){var e=Object(j.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(T({name:a.name,uid:a.uid}))):t(I());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(R.jsx)(je,{}):Object(R.jsx)(s.a,{children:Object(R.jsx)("div",{children:Object(R.jsxs)(i.d,{children:[Object(R.jsx)(me,{exact:!0,path:"/login",component:G,isAuthentication:!!c}),Object(R.jsx)(be,{exact:!0,path:"/",component:ue,isAuthentication:!!c}),Object(R.jsx)(i.a,{to:"/"})]})})})},Oe=n(20),ve={checking:!0},fe=n(23),he={events:[],activeEvent:null,daySlotCalendar:null},xe={openModal:!1},ge=Object(Oe.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(M.a)(Object(M.a)({},e),{},{openModal:!0});case f:return Object(M.a)(Object(M.a)({},e),{},{openModal:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(M.a)(Object(M.a)({},e),{},{activeEvent:t.payload});case h:return Object(M.a)(Object(M.a)({},e),{},{events:[].concat(Object(fe.a)(e.events),[t.payload])});case g:return Object(M.a)(Object(M.a)({},e),{},{activeEvent:null});case y:return Object(M.a)(Object(M.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case N:return Object(M.a)(Object(M.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id}))});case k:return Object(M.a)(Object(M.a)({},e),{},{events:t.payload});case E:return Object(M.a)(Object(M.a)({},e),{},{daySlotCalendar:t.payload});case w:return Object(M.a)(Object(M.a)({},e),{},{daySlotCalendar:null});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(M.a)(Object(M.a)(Object(M.a)({},e),t.payload),{},{checking:!1});case S:return Object(M.a)(Object(M.a)({},e),{},{checking:!1});case D:return{checking:!1};default:return e}}}),ye=n(50),Ne="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Oe.d,ke=Object(Oe.e)(ge,Ne(Object(Oe.a)(ye.a))),Ee=function(){return Object(R.jsx)(o.a,{store:ke,children:Object(R.jsx)(pe,{})})};n(73);r.a.render(Object(R.jsx)(Ee,{}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.92a43f61.chunk.js.map