"use strict";(self.webpackChunkrlc=self.webpackChunkrlc||[]).push([[708],{5501:(e,a,t)=>{t.d(a,{r:()=>l,u:()=>s});t(2573);function s(e){const a=e.replace("\u0440.","").replace("\u043e","").trim(),[t,s,l,r,n,c]=a.split(" "),i={"\u0441\u0456\u0447\u043d\u044f":"January","\u043b\u044e\u0442\u043e\u0433\u043e":"February","\u0431\u0435\u0440\u0435\u0437\u043d\u044f":"March","\u043a\u0432\u0456\u0442\u043d\u044f":"April","\u0442\u0440\u0430\u0432\u043d\u044f":"May","\u0447\u0435\u0440\u0432\u043d\u044f":"June","\u043b\u0438\u043f\u043d\u044f":"July","\u0441\u0435\u0440\u043f\u043d\u044f":"August","\u0432\u0435\u0440\u0435\u0441\u043d\u044f":"September","\u0436\u043e\u0432\u0442\u043d\u044f":"October","\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434\u0430":"November","\u0433\u0440\u0443\u0434\u043d\u044f":"December"}[s];return new Date(`${i} ${t}, ${l} ${c}`).toUTCString()}const l=e=>{const a=new Date(e);return`${a.getUTCDate()} ${["\u0441\u0456\u0447\u043d\u044f","\u043b\u044e\u0442\u043e\u0433\u043e","\u0431\u0435\u0440\u0435\u0437\u043d\u044f","\u043a\u0432\u0456\u0442\u043d\u044f","\u0442\u0440\u0430\u0432\u043d\u044f","\u0447\u0435\u0440\u0432\u043d\u044f","\u043b\u0438\u043f\u043d\u044f","\u0441\u0435\u0440\u043f\u043d\u044f","\u0432\u0435\u0440\u0435\u0441\u043d\u044f","\u0436\u043e\u0432\u0442\u043d\u044f","\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434\u0430","\u0433\u0440\u0443\u0434\u043d\u044f"][a.getUTCMonth()]} ${a.getUTCFullYear()} \u0440. \u043e ${String(a.getUTCHours()).padStart(2,"0")}:${String(a.getUTCMinutes()).padStart(2,"0")}`}},1708:(e,a,t)=>{t.r(a),t.d(a,{default:()=>f});var s=t(3216),l=t(5043),r=t(5475),n=t(8571),c=t(5501);const i=(e,a,t,s,l,r)=>{const n=localStorage.getItem(`availableTimes_${e.data.teacherId}`);if(n)try{return JSON.parse(n).map((e=>e.time))}catch(o){console.error("Invalid JSON string for availableTimes",o)}let c=[];if("string"===typeof a)try{c=JSON.parse(a),Array.isArray(c)||(console.error("parsedSelectedTimes is not an array:",c),c=[])}catch(o){console.error("Invalid JSON string for selectedTimes",o)}else Array.isArray(a)&&(c=a);const i=e.data.lang.filter((e=>e.lang===t)).flatMap((e=>e.level)).filter((e=>e.levelName===s)).flatMap((e=>e.lessonTypes.filter((e=>e.typeName==r)))).flatMap((e=>e.date)).flatMap((e=>e.workTime)).filter((e=>c.some((a=>new Date(new Date(e.time).getTime()+6e4*new Date(e.time).getTimezoneOffset()).getTime()===new Date(new Date(l(a))).getTime()&&e.slots>0))));return console.log(i),localStorage.setItem(`availableTimes_${e.data.teacherId}`,JSON.stringify(i)),i.map((e=>e.time))},o=(e,a,t,s,l,r,n)=>{const c=`${e.data.teacherName}, ${e.data.teacherId}, ${a}, ${t}, ${s}, ${l}`;if(n.includes(c)){const e=n.filter((e=>e!==c));r(e),localStorage.setItem("selectedSlots",JSON.stringify(e))}else{const e=[...n,c];r(e),localStorage.setItem("selectedSlots",JSON.stringify(e))}};var d=t(8929),m=t(6213);const g=async(e,a,t,s,l,r,n,i,o,d,g)=>{try{let d=(await m.A.get(`http://13.60.221.226/api/schools/${e}`)).data[0].ESL.teacher;if(a){let e=[];if("string"===typeof t&&t.length>0)try{e=JSON.parse(t)}catch(h){console.error("Invalid JSON string for selectedTimes:",h)}Array.isArray(e)||(e=[]),d=d.filter((t=>t.data&&t.data.lang.some((t=>t.level&&t.level.some((n=>n.levelName===a&&(t.lang===s||t.lang===l)&&n.lessonTypes.some((a=>a.typeName===r&&(0===e.length||e.some((e=>a.date.some((a=>a.workTime.some((a=>new Date(new Date(a.time).getTime()+6e4*new Date(a.time).getTimezoneOffset()).getTime()===new Date(new Date((0,c.u)(e))).getTime()&&a.slots>0)))))))))))))))}console.log(d);const g=d.flatMap((e=>e.data.lang.flatMap((e=>e.lang)))),f=d.flatMap((e=>e.data.lang.filter((e=>e.lang===s)).flatMap((e=>e.level.filter((e=>e.levelName===a)).flatMap((e=>e.lessonTypes.filter((e=>e.typeName==r)).flatMap((e=>e.date))))))));s?n(g):l&&n(l),i(f),o(d)}catch(f){d(f.message)}finally{g(!1)}};t(6412);var h=t(579);const f=()=>{const[e,a]=(0,l.useState)(null),[t,m]=(0,l.useState)(!0),[f,u]=(0,l.useState)(null),[p,N]=(0,l.useState)([]),[v,y]=(0,l.useState)(),[j,S]=(0,l.useState)([]),[x,$]=(0,l.useState)(1),T=(0,s.zy)(),{level:D}=T.state||{},{language:I}=T.state||{},{lessonTypes:b}=T.state||{},{lang_from_general_cal:w}=T.state||{},{schoolId:M}=T.state||{},{count:O}=T.state||{};console.log(w,D,b,M,O);const _=localStorage.getItem("selectedDates");console.log(M);const J=()=>I?"/date":"/final";return(0,l.useEffect)((()=>{Object.keys(localStorage);localStorage.setItem("OrderId",[]),g(M,D,_,I,w,b,y,N,a,u,m)}),[]),t?(0,h.jsx)("div",{className:"loading",children:"Loading..."}):f?(0,h.jsxs)("div",{className:"error",children:["Error: ",f]}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:"main",children:(0,h.jsxs)("div",{className:"container",children:[(0,h.jsx)("div",{className:"logo",children:(0,h.jsx)("div",{className:"logo-items",children:(0,h.jsx)(r.N_,{to:`/${M}`,children:(0,h.jsx)("img",{src:n.A,alt:"Logo"})})})}),(0,h.jsxs)("div",{className:"container-items-block teach",children:[(0,h.jsx)("h1",{className:"teacher-title",children:"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u0432\u0447\u0438\u0442\u0435\u043b\u044f"}),e&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:"teachers-data",children:e.map(((e,a)=>(0,h.jsxs)("div",{className:"teacher",children:[(0,h.jsxs)("div",{className:"teacherData",children:[(0,h.jsx)("div",{className:"teacherImg",children:(0,h.jsx)("img",{src:e.data.teacherImg,alt:""})}),(0,h.jsxs)("div",{className:"name-and-btn",children:[(0,h.jsx)("div",{className:"teacher-link",children:(0,h.jsx)("p",{children:e.data.teacherName})}),i(e,_,w,D,c.u,b).length<=0?(0,h.jsx)(r.N_,{to:J(),state:{teacherDate:e.data.lang.filter((e=>e.lang===I)),level:D,lang_from_general_cal:v,teacherId:e.data.teacherId,teacherName:e.data.teacherName,lessonTypes:b,schoolId:M,count:O||x},className:"select-btn",children:(0,h.jsx)("div",{children:(0,h.jsx)("p",{children:"\u041e\u0431\u0440\u0430\u0442\u0438"})})}):(0,h.jsx)("div",{className:"select-btn",children:(0,h.jsx)("div",{className:"teacher-times",children:i(e,_,w,D,c.u).length>0?(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("ul",{className:"teachers-times",children:i(e,_,w,D,c.u).map(((a,t)=>(0,h.jsx)("li",{onClick:()=>o(e,v,D,b,a,S,j),style:{cursor:"pointer",backgroundColor:j.includes(`${e.data.teacherName}, ${e.data.teacherId}, ${v}, ${D}, ${b}, ${a}`)?"#4D7D6DB2":"#D9D9D980",color:j.includes(`${e.data.teacherName}, ${e.data.teacherId}, ${v}, ${D}, ${b}, ${a}`)?"white":"#205C48"},children:(0,c.r)(a)},t)))})}):null})})]})]}),(0,h.jsx)("hr",{})]},a)))}),e.some((e=>i(e,_,w,D,c.u).length>0))&&(0,h.jsx)(r.N_,{to:J(),state:{teacherDate:e[0].data.lang.filter((e=>e.lang===I)),level:D,lang_from_general_cal:v,teacherId:e[0].data.teacherId,lessonTypes:b,schoolId:M,count:O||x},className:"select-btn",children:(0,h.jsx)("button",{disabled:0===j.length,children:"\u0414\u0430\u043b\u0456"})})]})]})]})}),(0,h.jsx)(d.A,{})]})}},6412:()=>{}}]);
//# sourceMappingURL=708.86b01481.chunk.js.map