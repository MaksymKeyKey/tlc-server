"use strict";(self.webpackChunkrlc=self.webpackChunkrlc||[]).push([[304],{6498:(e,l,s)=>{s.d(l,{A:()=>o});s(5043);var a=s(5475),n=s(8571),c=s(8929),t=(s(6412),s(579));const o=e=>{let{title:l,data:s,type:o,language:i=null,level:d=null,schoolId:g=null,lessonTypes:r=null,count:h=null,allTeachers:u=null}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"main",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("div",{className:"logo",children:(0,t.jsxs)("div",{className:"logo-items",children:[(0,t.jsx)(a.N_,{to:`/${g}`,children:(0,t.jsx)("img",{src:n.A,alt:"Logo"})}),(0,t.jsxs)("div",{className:"logo-name",children:["\u041c\u043e\u0432\u043d\u0430 \u0448\u043a\u043e\u043b\u0430 ",(0,t.jsx)("span",{children:"EAGLES"})]})]})}),(0,t.jsxs)("div",{className:"container-items-block",children:[(0,t.jsx)("h1",{className:"languages-title",children:l}),s&&s.length>0?(0,t.jsx)("div",{className:"school-data",children:s.filter((e=>h>=3?"\u0413\u0440\u0443\u043f\u043e\u0432\u0456"===e.typeName:2===h?"\u041f\u0430\u0440\u043d\u0456"===e.typeName||"\u0413\u0440\u0443\u043f\u043e\u0432\u0456"===e.typeName:1!==h||("\u041f\u0430\u0440\u043d\u0456"===e.typeName||"\u0406\u043d\u0434\u0438\u0432\u0456\u0434\u0443\u0430\u043b\u044c\u043d\u0456"===e.typeName||"\u0413\u0440\u0443\u043f\u043e\u0432\u0456"===e.typeName))).map(((e,l)=>(0,t.jsx)(a.N_,{className:"language-link",to:"language"===o?"/course":"level"===o?"/count":"type"===o?"/priority":"count"===o?"/lessoTypes":"priority"===o?"/teacher":"",state:"language"===o?{level:e.level,language:e.lang,schoolId:g}:"level"===o?{level:e.levelName,language:i,lessonTypes:e.lessonTypes,schoolId:g}:"type"===o?{level:d,language:i,lessonTypes:e.typeName,schoolId:g,count:h}:"count"===o?{level:d,language:i,schoolId:g}:"",children:(0,t.jsx)("div",{className:"language-item",children:(0,t.jsx)("p",{children:"language"===o?e.lang:"level"===o?e.levelName:"type"===o?e.typeName:""})})},l)))}):r&&!h?(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"},className:"school-data",children:(0,t.jsxs)("div",{className:"count-elements",children:[(0,t.jsx)(a.N_,{to:"/lessoTypes",state:{level:d,language:i,schoolId:g,count:1,lessonTypes:r},className:"language-link",children:(0,t.jsx)("div",{className:"language-item",children:(0,t.jsx)("p",{children:"1"})})}),(0,t.jsx)(a.N_,{to:"/lessoTypes",state:{level:d,language:i,schoolId:g,count:2,lessonTypes:r},className:"language-link",children:(0,t.jsx)("div",{className:"language-item",children:(0,t.jsx)("p",{children:"2"})})}),(0,t.jsx)(a.N_,{to:"/lessoTypes",state:{level:d,language:i,schoolId:g,count:3,lessonTypes:r},className:"language-link",children:(0,t.jsx)("div",{className:"language-item",children:(0,t.jsx)("p",{children:"3"})})}),(0,t.jsx)(a.N_,{to:"/lessoTypes",state:{level:d,language:i,schoolId:g,count:4,lessonTypes:r},className:"language-link",children:(0,t.jsx)("div",{className:"language-item",children:(0,t.jsx)("p",{children:"4"})})}),(0,t.jsx)(a.N_,{to:"/lessoTypes",state:{level:d,language:i,schoolId:g,count:5,lessonTypes:r},className:"language-link",children:(0,t.jsx)("div",{className:"language-item",children:(0,t.jsx)("p",{children:"5"})})}),(0,t.jsx)(a.N_,{to:"/lessoTypes",state:{level:d,language:i,schoolId:g,count:6,lessonTypes:r},className:"language-link",children:(0,t.jsx)("div",{className:"language-item",children:(0,t.jsx)("p",{children:"6"})})})]})}):r&&h?(0,t.jsxs)("div",{className:"school-data",children:[(0,t.jsx)(a.N_,{to:"/date",state:{level:d,lang:i,schoolId:g,count:h,lessonTypes:r,allTeachers:u},className:"language-link",children:(0,t.jsx)("div",{className:"language-item",children:(0,t.jsx)("p",{children:"\u041e\u0431\u0440\u0430\u0442\u0438 \u0447\u0430\u0441"})})}),(0,t.jsx)(a.N_,{to:"/teacher",state:{level:d,language:i,schoolId:g,count:h,lessonTypes:r},className:"language-link",children:(0,t.jsx)("div",{className:"language-item",children:(0,t.jsx)("p",{children:"\u041e\u0431\u0440\u0430\u0442\u0438 \u0432\u0447\u0438\u0442\u0435\u043b\u044f"})})})]}):""]})]})}),(0,t.jsx)(c.A,{})]})}},9304:(e,l,s)=>{s.r(l),s.d(l,{default:()=>o});var a=s(3216),n=s(5043),c=s(6498),t=s(579);const o=()=>{(0,n.useEffect)((()=>{localStorage.setItem("OrderId",[])}),[]);const e=(0,a.zy)(),{level:l}=e.state||{},{language:s}=e.state||{},{schoolId:o}=e.state||{},{lessonTypes:i}=e.state||{};return(0,t.jsx)(c.A,{title:"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0443\u0447\u043d\u0456\u0432",type:"count",language:s,level:l,schoolId:o,lessonTypes:i})}}}]);
//# sourceMappingURL=304.93047045.chunk.js.map