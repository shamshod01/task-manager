(this["webpackJsonptask-manager"]=this["webpackJsonptask-manager"]||[]).push([[0],{105:function(e,t,a){e.exports={siteLayout:"mainPage_siteLayout__1Zeu0",layoutShadow:"mainPage_layoutShadow__1-mUw"}},239:function(e,t,a){},240:function(e,t,a){"use strict";a.r(t);var s,n=a(6),r=a(0),c=a.n(r),i=a(21),u=a.n(i),o=(a(149),a(26)),j=a(19),l=a(49),d=a(103),b=a(38),O=a.n(b),h=a(63),m={SET_SORT_FIELD:"SET_SORT_FIELD ",SET_SORT_DIRECT:"SET_SORT_DIRECT",SET_PAGE_NUM:"SET_PAGE_NUM",SET_TOTAL_TASK_COUNT:"SET_TOTAL_TASK_COUNT",SET_TASKS:"SET_TASKS",EDIT_TASK:"EDIT_TASK",TOGGLE_IS_FETCHING:"TOGGLE_IS_FETCHING"},p=a(129).create({baseURL:"https://uxcandy.com/~shapoval/test-task-backend/v2/"}),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"username",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"asc";return p.get("?developer=Shamshod&sort_field=".concat(t,"&sort_direction=").concat(a,"&page=").concat(e)).then((function(e){return e.data}))},T=function(e){var t=new FormData;return console.log(e.username),t.append("username",e.username),t.append("email",e.email),t.append("text",e.text),p.post("create/?developer=Shamshod",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},f=function(e,t){var a=new FormData;return a.append("token",t),a.append("status",e.status),e.text&&a.append("text",e.text),p.post("edit/".concat(e.id,"/?developer=Shamshod"),a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},g=function(e,t){var a=new FormData;return a.append("username",e),a.append("password",t),p.post("login/?developer=Shamshod",a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},S=a(246),_=a(138),E="SET_USER",y="LOG_OUT",k="SET_TEXT_EDITED",v={username:"",userToken:"",textEditedTasks:[]},w=function(e,t){return{type:E,username:e,userToken:t}},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(j.a)(Object(j.a)({},e),{},{username:t.username,userToken:t.userToken});case y:return Object(j.a)(Object(j.a)({},e),{},{username:"",userToken:null,textEditedTasks:[]});case k:return Object(j.a)(Object(j.a)({},e),{},{textEditedTasks:[].concat(Object(_.a)(e.textEditedTasks),[t.id])});default:return e}},I={tasks:[{username:"",email:"",text:"",status:0}],pageNum:1,sortField:"username",sortDr:"asc",isFetching:!1,totalTaskCount:4},P=function(e){return{type:m.TOGGLE_IS_FETCHING,isFetching:e}},F=function(e,t,a){return function(){var s=Object(h.a)(O.a.mark((function s(n){var r;return O.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return n(P(!0)),n({type:m.SET_PAGE_NUM,pageNum:e}),n({type:m.SET_SORT_FIELD,sort_field:t}),n({type:m.SET_SORT_DIRECT,sortDr:a}),s.next=6,x(e,t,a);case 6:r=s.sent,n((i=r.message.tasks,{type:m.SET_TASKS,tasks:i})),n((c=r.message.total_task_count,{type:m.SET_TOTAL_TASK_COUNT,totalTaskCount:c})),n(P(!1));case 10:case"end":return s.stop()}var c,i}),s)})));return function(e){return s.apply(this,arguments)}}()},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.SET_TASKS:return Object(j.a)(Object(j.a)({},e),{},{tasks:t.tasks});case m.SET_SORT_FIELD:return Object(j.a)(Object(j.a)({},e),{},{sortField:t.sort_field});case m.SET_SORT_DIRECT:return Object(j.a)(Object(j.a)({},e),{},{sortDr:t.sortDr});case m.TOGGLE_IS_FETCHING:return Object(j.a)(Object(j.a)({},e),{},{isFetching:t.isFetching});case m.SET_PAGE_NUM:return Object(j.a)(Object(j.a)({},e),{},{pageNum:t.pageNum});case m.SET_TOTAL_TASK_COUNT:return Object(j.a)(Object(j.a)({},e),{},{totalTaskCount:t.totalTaskCount});default:return e}},N=Object(l.c)({tasksPage:A,userPage:C}),D=sessionStorage.getItem("reduxState")?JSON.parse(sessionStorage.getItem("reduxState")):null;(s=D?Object(l.d)(N,Object(j.a)(Object(j.a)({},N),{},{userPage:D}),Object(l.a)(d.a)):Object(l.d)(N,Object(j.a)({},N),Object(l.a)(d.a))).subscribe((function(){sessionStorage.setItem("reduxState",JSON.stringify(s.getState().userPage))}));var L=s,G=a(247),U=a(66),R=a(36),K=a(42),M=a(137),H=a(248),q=a(242),J=a(245),$=function(){var e=Object(r.useState)(!1),t=Object(K.a)(e,2),a=t[0],s=t[1],c=q.a.useForm(),i=Object(K.a)(c,1)[0],u=Object(o.b)(),j=Object(o.c)((function(e){return e.userPage.username}));return Object(n.jsxs)(n.Fragment,{children:[j.length>1?Object(n.jsx)(M.a,{type:"primary",ghost:!0,onClick:function(){return u({type:y})},children:"logout"}):Object(n.jsx)(M.a,{type:"primary",onClick:function(){return s(!0)},children:"login"}),Object(n.jsx)(H.a,{title:"LogIn",placement:"right",closable:!1,width:"30%",onClose:function(){s(!1)},visible:a,children:Object(n.jsxs)(q.a,{form:i,name:"basic",onFinish:function(e){u(function(e,t){return function(){var a=Object(h.a)(O.a.mark((function a(s){var n;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g(e,t);case 2:"ok"===(n=a.sent).status?(s(w(e,n.message.token)),S.b.success("Hello ".concat(e,"!"))):S.b.error("Invalid username or password. Please, try again");case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(e.username,e.password)),i.resetFields(),s(!1)},children:[Object(n.jsx)(q.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(n.jsx)(J.a,{})}),Object(n.jsx)(q.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(n.jsx)(J.a.Password,{})}),Object(n.jsx)(q.a.Item,{children:Object(n.jsx)(M.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})})]})},Q=a(71),V=a(244),Y=a(243),z=a(249),B=function(e){var t=e.task,a=e.currentQueryParams,s=Object(o.c)((function(e){return e.userPage.userToken})),c=Object(o.c)((function(e){return e.userPage.textEditedTasks})),i=Object(o.b)(),u=Object(r.useState)(!1),j=Object(K.a)(u,2),l=j[0],d=j[1],b=Object(r.useState)(t.text),m=Object(K.a)(b,2),p=m[0],x=m[1],T=Object(r.useState)(t.status),g=Object(K.a)(T,2),_=g[0],E=g[1];return Object(n.jsxs)(Y.a,{hoverable:!0,style:{width:"100%",height:"auto",border:"4px solid ".concat(0===t.status?"red":"green")},cover:t.image_path?Object(n.jsx)("img",{alt:"TaskPhoto",style:{maxHeight:"160px"},src:t.image_path}):Object(n.jsx)("img",{alt:"smallPhoto",style:{maxHeight:"160px"},src:"https://source.unsplash.com/1600x900/?".concat(t.text)}),children:[Object(n.jsxs)("h4",{children:["username: ",t.username.replaceAll("&gt;",">").replaceAll("&lt;","<").replace(/(<([^>]+)>)/gi,"")]}),Object(n.jsx)("br",{}),Object(n.jsxs)("h4",{children:["email: ",t.email]}),Object(n.jsx)("br",{}),l?Object(n.jsxs)("div",{children:[Object(n.jsx)(J.a.TextArea,{value:p,onChange:function(e){x(e.target.value)}}),"Task has done: ",Object(n.jsx)(z.a,{checked:10===_,onChange:function(){E(10===_?0:10)}})]}):Object(n.jsxs)("div",{children:[0===t.status?"Task is :":"Task was :"," ",Object(n.jsx)("span",{dangerouslySetInnerHTML:{__html:t.text}}),Object(n.jsx)("hr",{}),Object(n.jsxs)("span",{children:["status: ",0===t.status?"Let`s do it":"It was great job"]})]}),Object(n.jsx)("br",{}),s&&Object(n.jsxs)(U.a,{children:[Object(n.jsx)(R.a,{span:6,children:Object(n.jsx)(M.a,{type:"primary",onClick:function(){d((function(e){return!e})),l&&p.length>0&&i(function(e,t,a){return function(){var s=Object(h.a)(O.a.mark((function s(n){return O.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,f(e,t);case 2:"ok"===s.sent.status?(e.text&&n((r=e.id,{type:k,id:r})),n(F(a.pageNum,a.sortField,a.sortDr)),S.b.success("successfully edited")):S.b.error("Ups...Unexpected error!");case 4:case"end":return s.stop()}var r}),s)})));return function(e){return s.apply(this,arguments)}}()}({id:t.id,text:p===t.text?null:p,status:_},s,a))},children:l?"Submit":"Edit"})}),Object(n.jsx)(R.a,{span:18,children:c.includes(t.id)&&Object(n.jsx)("span",{children:"was edited by administrator"})})]})]})},W={labelCol:{span:4},wrapperCol:{span:24}},X={required:"${label} is required!",types:{email:"${label} is not a valid email!",number:"${label} is not a valid number!"}},Z=function(){var e=q.a.useForm(),t=Object(K.a)(e,1)[0],a=Object(o.b)();return Object(n.jsxs)("div",{children:[Object(n.jsx)("br",{}),Object(n.jsx)(R.a,{offset:8,children:Object(n.jsx)("h2",{children:"Add Your Task"})}),Object(n.jsxs)(q.a,Object(j.a)(Object(j.a)({},W),{},{form:t,initialValues:{username:null,email:null,text:null},name:"nest-messages",onFinish:function(e){var s;a((s=e,function(){var e=Object(h.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(P(!0)),e.next=3,T(s);case 3:a=e.sent,t(P(!1)),"ok"===a.status?(t(F(1,"id","desc")),S.b.success("Task Added")):S.b.error("Upss, something went wrong!");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),t.resetFields()},validateMessages:X,children:[Object(n.jsx)(q.a.Item,{name:"username",label:Object(n.jsx)("h3",{children:"Name"}),rules:[{required:!0}],children:Object(n.jsx)(J.a,{})}),Object(n.jsx)(q.a.Item,{name:"email",label:Object(n.jsx)("h3",{children:"Email"}),rules:[{type:"email",required:!0}],children:Object(n.jsx)(J.a,{})}),Object(n.jsx)(q.a.Item,{name:"text",label:Object(n.jsx)("h3",{children:"Text"}),rules:[{required:!0}],children:Object(n.jsx)(J.a.TextArea,{})}),Object(n.jsx)(q.a.Item,{wrapperCol:Object(j.a)(Object(j.a)({},W.wrapperCol),{},{offset:4}),children:Object(n.jsx)(M.a,{type:"primary",htmlType:"submit",children:"Submit"})})]}))]})},ee=Q.a.Option,te=function(){var e=Object(o.c)((function(e){return e.tasksPage.tasks})),t=Object(o.c)((function(e){return e.tasksPage.pageNum})),a=Object(o.c)((function(e){return e.tasksPage.sortField})),s=Object(o.c)((function(e){return e.tasksPage.sortDr})),c=Object(o.c)((function(e){return e.tasksPage.totalTaskCount})),i=Object(o.b)();return Object(r.useEffect)((function(){i(F(1))}),[i]),Object(n.jsxs)("div",{children:[Object(n.jsxs)(U.a,{justify:"center",gutter:[8,8],children:[Object(n.jsx)(R.a,{children:Object(n.jsx)("h3",{children:"You can sort by: "})}),Object(n.jsx)(R.a,{children:Object(n.jsxs)(Q.a,{defaultValue:a,style:{width:120},onChange:function(e){i(F(t,e,s))},children:[Object(n.jsx)(ee,{value:"username",children:"username"}),Object(n.jsx)(ee,{value:"email",children:"email"}),Object(n.jsx)(ee,{value:"status",children:"status"})]})}),Object(n.jsx)(R.a,{children:Object(n.jsx)("h3",{children:" and by "})}),Object(n.jsx)(R.a,{children:Object(n.jsx)(M.a,{type:"primary",shape:"round",onClick:function(){i(F(t,a,"asc"===s?"desc":"asc"))},children:"asc"===s?"asc":"desc"})})]}),Object(n.jsx)("br",{}),Object(n.jsxs)(U.a,{justify:"center",gutter:[8,8],children:[e.map((function(e){return Object(n.jsx)(R.a,{xs:24,md:12,lg:6,children:Object(n.jsx)(B,{task:e,currentQueryParams:{pageNum:t,sortField:a,sortDr:s}},"".concat(e.id," ").concat(e.text))},e.id)})),Object(n.jsx)(R.a,{xs:24,md:12,lg:6,children:Object(n.jsx)(Z,{})})]}),Object(n.jsx)("br",{}),Object(n.jsx)(U.a,{justify:"center",children:Object(n.jsx)(R.a,{offset:2,children:Object(n.jsx)(V.a,{current:t,total:c,pageSize:3,onChange:function(e){i(F(e,a,s))}})})})]})},ae=a(105),se=a.n(ae),ne=function(){var e=Object(o.c)((function(e){return e.tasksPage.isFetching}));return Object(r.useEffect)((function(){e&&S.b.loading("Processing",.2)}),[e]),Object(n.jsx)(G.a,{className:se.a.siteLayout,children:Object(n.jsx)(G.a.Content,{className:se.a.layoutShadow,children:Object(n.jsxs)(U.a,{children:[Object(n.jsx)(R.a,{span:2,children:Object(n.jsx)($,{})}),Object(n.jsx)(R.a,{offset:8,children:Object(n.jsx)("h1",{children:"WELCOME TO TASK-MANAGER"})}),Object(n.jsx)(te,{})]})})})};a(239);var re=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(o.a,{store:L,children:Object(n.jsx)(ne,{})})})};u.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(re,{})}),document.getElementById("root"))}},[[240,1,2]]]);
//# sourceMappingURL=main.46cd04d9.chunk.js.map