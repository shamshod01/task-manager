(this["webpackJsonptask-manager"]=this["webpackJsonptask-manager"]||[]).push([[0],{103:function(e,t,a){e.exports={siteLayout:"mainPage_siteLayout__1Zeu0",layoutShadow:"mainPage_layoutShadow__1-mUw"}},236:function(e,t,a){},237:function(e,t,a){"use strict";a.r(t);var n,s=a(6),r=a(0),c=a.n(r),i=a(21),u=a.n(i),o=(a(146),a(26)),j=a(20),l=a(49),b=a(101),d=a(38),O=a.n(d),h=a(63),m={SET_SORT_FIELD:"SET_SORT_FIELD ",SET_SORT_DIRECT:"SET_SORT_DIRECT",SET_PAGE_NUM:"SET_PAGE_NUM",SET_TOTAL_TASK_COUNT:"SET_TOTAL_TASK_COUNT",SET_TASKS:"SET_TASKS",EDIT_TASK:"EDIT_TASK",TOGGLE_IS_FETCHING:"TOGGLE_IS_FETCHING",ADD_TASK:"ADD_TASK"},p=a(127).create({baseURL:"https://uxcandy.com/~shapoval/test-task-backend/v2/"}),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"username",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"asc";return p.get("?developer=Shamshod&sort_field=".concat(t,"&sort_direction=").concat(a,"&page=").concat(e)).then((function(e){return e.data}))},T=function(e){var t=new FormData;return console.log(e.username),t.append("username",e.username),t.append("email",e.email),t.append("text",e.text),p.post("create/?developer=Shamshod",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},f=function(e,t){var a=new FormData;return a.append("token",t),a.append("status",e.status),a.append("text",e.text),p.post("edit/".concat(e.id,"/?developer=Shamshod"),a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},g=function(e,t){var a=new FormData;return a.append("username",e),a.append("password",t),p.post("login/?developer=Shamshod",a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},S=a(243),_={tasks:[{username:"",email:"",text:"",status:0}],pageNum:1,sortField:"username",sortDr:"asc",isFetching:!1,totalTaskCount:4},v=function(e){return{type:m.TOGGLE_IS_FETCHING,isFetching:e}},y=function(e,t,a){return function(){var n=Object(h.a)(O.a.mark((function n(s){var r;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(v(!0)),s({type:m.SET_PAGE_NUM,pageNum:e}),s({type:m.SET_SORT_FIELD,sort_field:t}),s({type:m.SET_SORT_DIRECT,sortDr:a}),n.next=6,x(e,t,a);case 6:r=n.sent,s((i=r.message.tasks,{type:m.SET_TASKS,tasks:i})),s((c=r.message.total_task_count,{type:m.SET_TOTAL_TASK_COUNT,totalTaskCount:c})),s(v(!1));case 10:case"end":return n.stop()}var c,i}),n)})));return function(e){return n.apply(this,arguments)}}()},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.SET_TASKS:return Object(j.a)(Object(j.a)({},e),{},{tasks:t.tasks});case m.SET_SORT_FIELD:return Object(j.a)(Object(j.a)({},e),{},{sortField:t.sort_field});case m.SET_SORT_DIRECT:return Object(j.a)(Object(j.a)({},e),{},{sortDr:t.sortDr});case m.TOGGLE_IS_FETCHING:return Object(j.a)(Object(j.a)({},e),{},{isFetching:t.isFetching});case m.SET_PAGE_NUM:return Object(j.a)(Object(j.a)({},e),{},{pageNum:t.pageNum});case m.SET_TOTAL_TASK_COUNT:return Object(j.a)(Object(j.a)({},e),{},{totalTaskCount:t.totalTaskCount});case m.ADD_TASK:return Object(j.a)(Object(j.a)({},e),{},{tasks:[t.task]});default:return e}},E="SET_USER",w={username:"",userToken:""},C=function(e,t){return{type:E,username:e,userToken:t}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(j.a)(Object(j.a)({},e),{},{username:t.username,userToken:t.userToken});default:return e}},I=Object(l.c)({tasksPage:k,userPage:A}),F=sessionStorage.getItem("reduxState")?JSON.parse(sessionStorage.getItem("reduxState")):null;(n=F?Object(l.d)(I,Object(j.a)(Object(j.a)({},I),{},{userPage:F}),Object(l.a)(b.a)):Object(l.d)(I,Object(j.a)({},I),Object(l.a)(b.a))).subscribe((function(){sessionStorage.setItem("reduxState",JSON.stringify(n.getState().userPage))}));var P=n,D=a(244),N=a(66),L=a(36),G=a(48),R=a(135),U=a(245),K=a(239),M=a(242),H=function(){var e=Object(r.useState)(!1),t=Object(G.a)(e,2),a=t[0],n=t[1],c=Object(o.b)(),i=Object(o.c)((function(e){return e.userPage.username}));return Object(s.jsxs)(s.Fragment,{children:[i.length>1?Object(s.jsx)("h3",{children:i}):Object(s.jsx)(R.a,{type:"primary",onClick:function(){return n(!0)},children:"login"}),Object(s.jsx)(U.a,{title:"LogIn",placement:"right",closable:!1,width:"30%",onClose:function(){n(!1)},visible:a,children:Object(s.jsxs)(K.a,{name:"basic",initialValues:{remember:!0},onFinish:function(e){c(function(e,t){return function(){var a=Object(h.a)(O.a.mark((function a(n){var s;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g(e,t);case 2:"ok"===(s=a.sent).status?(n(C(e,s.message.token)),S.b.success("Hello ".concat(e,"!"))):S.b.error("Something went wrong. Please, try again");case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(e.username,e.password))},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(s.jsx)(K.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(s.jsx)(M.a,{})}),Object(s.jsx)(K.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(s.jsx)(M.a.Password,{})}),Object(s.jsx)(K.a.Item,{children:Object(s.jsx)(R.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})})]})},q=a(70),J=a(241),V=a(240),$=a(246),Q=function(e){var t=e.task,a=e.currentQueryParams,n=Object(o.c)((function(e){return e.userPage.userToken})),c=Object(o.b)(),i=Object(r.useState)(!1),u=Object(G.a)(i,2),j=u[0],l=u[1],b=Object(r.useState)(t.text),d=Object(G.a)(b,2),m=d[0],p=d[1],x=Object(r.useState)(t.status),T=Object(G.a)(x,2),g=T[0],_=T[1];return Object(s.jsxs)(V.a,{hoverable:!0,style:{width:"100%",height:"auto",border:"4px solid ".concat(0===t.status?"red":"green")},cover:t.image_path?Object(s.jsx)("img",{alt:"TaskPhoto",style:{maxHeight:"160px"},src:t.image_path}):Object(s.jsx)("img",{alt:"smallPhoto",style:{maxHeight:"160px"},src:"https://source.unsplash.com/1600x900/?".concat(t.text)}),children:[Object(s.jsx)("h4",{children:t.username.replaceAll("&gt;",">").replaceAll("&lt;","<").replace(/(<([^>]+)>)/gi,"")}),Object(s.jsx)("br",{}),Object(s.jsx)("h4",{children:t.email}),Object(s.jsx)("br",{}),j?Object(s.jsxs)("div",{children:[Object(s.jsx)(M.a.TextArea,{value:m,onChange:function(e){p(e.target.value)}}),"Task has done: ",Object(s.jsx)($.a,{checked:10===g,onChange:function(){_(10===g?0:10)}})]}):Object(s.jsxs)("div",{children:[0===t.status?"Task is ":"Task was  "," ",Object(s.jsx)("span",{dangerouslySetInnerHTML:{__html:t.text}}),Object(s.jsx)("hr",{}),Object(s.jsx)("span",{children:0===t.status?"Let`s do it":"It was great job"})]}),Object(s.jsx)("br",{}),n&&Object(s.jsx)(R.a,{type:"primary",onClick:function(){l((function(e){return!e})),j&&m.length>0&&c(function(e,t,a){return function(){var n=Object(h.a)(O.a.mark((function n(s){return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f(e,t);case 2:"ok"===n.sent.status?(s(y(a.pageNum,a.sortField,a.sortDr)),S.b.success("successfully edited")):S.b.error("Ups...Unexpected error!");case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}({id:t.id,text:m,status:g},n,a))},children:j?"Submit":"Edit"})]})},Y={labelCol:{span:4},wrapperCol:{span:24}},z={required:"${label} is required!",types:{email:"${label} is not a valid email!",number:"${label} is not a valid number!"}},B=function(){var e=Object(o.b)(),t=K.a.useForm(),a=Object(G.a)(t,1)[0];return Object(s.jsxs)("div",{children:[Object(s.jsx)("br",{}),Object(s.jsx)(L.a,{offset:8,children:Object(s.jsx)("h2",{children:"Add Your Task"})}),Object(s.jsxs)(K.a,Object(j.a)(Object(j.a)({},Y),{},{initialValues:{username:null,email:null,text:null},name:"nest-messages",onFinish:function(t){var n;e((n=t,function(){var e=Object(h.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(v(!0)),e.next=3,T(n);case 3:a=e.sent,t(v(!1)),"ok"===a.status?(t(y(1,"id","desc")),S.b.success("Task Added")):S.b.error("Upss, something went wrong!");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),a.resetFields()},validateMessages:z,children:[Object(s.jsx)(K.a.Item,{name:"username",label:Object(s.jsx)("h3",{children:"Name"}),rules:[{required:!0}],children:Object(s.jsx)(M.a,{})}),Object(s.jsx)(K.a.Item,{name:"email",label:Object(s.jsx)("h3",{children:"Email"}),rules:[{type:"email",required:!0}],children:Object(s.jsx)(M.a,{})}),Object(s.jsx)(K.a.Item,{name:"text",label:Object(s.jsx)("h3",{children:"Text"}),rules:[{required:!0}],children:Object(s.jsx)(M.a.TextArea,{})}),Object(s.jsx)(K.a.Item,{wrapperCol:Object(j.a)(Object(j.a)({},Y.wrapperCol),{},{offset:4}),children:Object(s.jsx)(R.a,{type:"primary",htmlType:"submit",children:"Submit"})})]}))]})},W=q.a.Option,Z=function(){var e=Object(o.c)((function(e){return e.tasksPage.tasks})),t=Object(o.c)((function(e){return e.tasksPage.pageNum})),a=Object(o.c)((function(e){return e.tasksPage.sortField})),n=Object(o.c)((function(e){return e.tasksPage.sortDr})),c=Object(o.c)((function(e){return e.tasksPage.totalTaskCount})),i=Object(o.b)();return Object(r.useEffect)((function(){i(y(1))}),[i]),Object(s.jsxs)("div",{children:[Object(s.jsxs)(N.a,{justify:"center",gutter:[8,8],children:[Object(s.jsx)(L.a,{children:Object(s.jsx)("h3",{children:"You can sort by: "})}),Object(s.jsx)(L.a,{children:Object(s.jsxs)(q.a,{defaultValue:a,style:{width:120},onChange:function(e){i(y(t,e,n))},children:[Object(s.jsx)(W,{value:"username",children:"username"}),Object(s.jsx)(W,{value:"id",children:"id"}),Object(s.jsx)(W,{value:"email",children:"email"}),Object(s.jsx)(W,{value:"status",children:"status"})]})}),Object(s.jsx)(L.a,{children:Object(s.jsx)("h3",{children:" and by "})}),Object(s.jsx)(L.a,{children:Object(s.jsx)(R.a,{type:"primary",shape:"round",onClick:function(){i(y(t,a,"asc"===n?"desc":"asc"))},children:"asc"===n?"asc":"desc"})})]}),Object(s.jsx)("br",{}),Object(s.jsxs)(N.a,{justify:"center",gutter:[8,8],children:[e.map((function(e){return Object(s.jsx)(L.a,{xs:24,md:12,lg:6,children:Object(s.jsx)(Q,{task:e,currentQueryParams:{pageNum:t,sortField:a,sortDr:n}},e.id)},e.id)})),Object(s.jsx)(L.a,{xs:24,md:12,lg:6,children:Object(s.jsx)(B,{})})]}),Object(s.jsx)("br",{}),Object(s.jsx)(N.a,{justify:"center",children:Object(s.jsx)(L.a,{offset:2,children:Object(s.jsx)(J.a,{current:t,total:c,pageSize:3,onChange:function(e){i(y(e,a,n))}})})})]})},X=a(103),ee=a.n(X),te=function(){var e=Object(o.c)((function(e){return e.tasksPage.isFetching}));return Object(r.useEffect)((function(){e&&S.b.loading("Processing",.2)}),[e]),Object(s.jsx)(D.a,{className:ee.a.siteLayout,children:Object(s.jsx)(D.a.Content,{className:ee.a.layoutShadow,children:Object(s.jsxs)(N.a,{children:[Object(s.jsx)(L.a,{span:2,children:Object(s.jsx)(H,{})}),Object(s.jsx)(L.a,{offset:8,children:Object(s.jsx)("h1",{children:"WELCOME TO TASK-MANAGER"})}),Object(s.jsx)(Z,{})]})})})};a(236);var ae=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(o.a,{store:P,children:Object(s.jsx)(te,{})})})};u.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(ae,{})}),document.getElementById("root"))}},[[237,1,2]]]);
//# sourceMappingURL=main.e95d897f.chunk.js.map