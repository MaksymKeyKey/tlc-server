"use strict";(self.webpackChunkrlc=self.webpackChunkrlc||[]).push([[719],{5501:(e,t,s)=>{s.d(t,{r:()=>l,u:()=>a});s(2573);function a(e){const t=e.replace("\u0440.","").replace("\u043e","").trim(),[s,a,l,n,o,r]=t.split(" "),i={"\u0441\u0456\u0447\u043d\u044f":"January","\u043b\u044e\u0442\u043e\u0433\u043e":"February","\u0431\u0435\u0440\u0435\u0437\u043d\u044f":"March","\u043a\u0432\u0456\u0442\u043d\u044f":"April","\u0442\u0440\u0430\u0432\u043d\u044f":"May","\u0447\u0435\u0440\u0432\u043d\u044f":"June","\u043b\u0438\u043f\u043d\u044f":"July","\u0441\u0435\u0440\u043f\u043d\u044f":"August","\u0432\u0435\u0440\u0435\u0441\u043d\u044f":"September","\u0436\u043e\u0432\u0442\u043d\u044f":"October","\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434\u0430":"November","\u0433\u0440\u0443\u0434\u043d\u044f":"December"}[a];return new Date(`${i} ${s}, ${l} ${r}`).toUTCString()}const l=e=>{const t=new Date(e);return`${t.getUTCDate()} ${["\u0441\u0456\u0447\u043d\u044f","\u043b\u044e\u0442\u043e\u0433\u043e","\u0431\u0435\u0440\u0435\u0437\u043d\u044f","\u043a\u0432\u0456\u0442\u043d\u044f","\u0442\u0440\u0430\u0432\u043d\u044f","\u0447\u0435\u0440\u0432\u043d\u044f","\u043b\u0438\u043f\u043d\u044f","\u0441\u0435\u0440\u043f\u043d\u044f","\u0432\u0435\u0440\u0435\u0441\u043d\u044f","\u0436\u043e\u0432\u0442\u043d\u044f","\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434\u0430","\u0433\u0440\u0443\u0434\u043d\u044f"][t.getUTCMonth()]} ${t.getUTCFullYear()} \u0440. \u043e ${String(t.getUTCHours()).padStart(2,"0")}:${String(t.getUTCMinutes()).padStart(2,"0")}`}},7719:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var a=s(3216),l=s(5043),n=(s(8785),s(7668));const o=(e,t)=>{const s=e.reduce(((e,t)=>{const s=t.d;return e[s]?(e[s].workTime=[...e[s].workTime,...t.workTime],e[s].nonWorkTime=[...new Set([...e[s].nonWorkTime,...t.nonWorkTime])],e[s].allSlots+=t.allSlots||0):e[s]={...t,workTime:[...t.workTime],nonWorkTime:[...t.nonWorkTime],allSlots:t.allSlots||0},e}),{});return Object.values(s).map((e=>{const s=[];let a=e.workTime.every((e=>e.slots<t)),l=!1;e.workTime.forEach((n=>{if(n.slots>=t&&n.time)s.push(n.time);else if(e.allSlots<=0&&n.time){const e=n.time.split("T")[0]+"T00:00:00.000Z";s.push(e)}else a&&!l&&(s.push(e.d),e.allSlots=0,l=!0)}));const n=(e=>{const t=e.map((e=>new Date(e))).sort(((e,t)=>e-t)),s=[];let a=null;return t.forEach((e=>{a?e<=a[1]?a[1]=new Date(Math.max(a[1],e)):(s.push(a),a=[e,e]):a=[e,e]})),a&&s.push(a),s.map((e=>{let[t]=e;return{start:t}}))})(s),o=((e,t)=>{if(0===(t=t.map((e=>{if(!e.start)return console.error("Missing time in workTimes:",e),null;const t=new Date(e.start.getTime()-108e5);return{...e,time:t}})).filter((e=>null!==e)).sort(((e,t)=>new Date(e.time)-new Date(t.time)))).length)return console.error("No valid work times available"),[];const s=[],a=new Date(new Date(t[0].time).setHours(0,0,0,0));console.log(a);const l=new Date(t[0].time);a<l&&s.push({start:a,end:new Date(l.getTime()-6e4)});for(let c=0;c<t.length;c++){const e=new Date(t[c].time);if(0===t[c].slots){const a=c<t.length-1?new Date(t[c+1].time):new Date(e.setHours(23,59,0,0));s.push({start:e,end:new Date(a.getTime()-6e4)})}else if(c>0&&0!==t[c-1].slots){const a=new Date(t[c-1].time);a<e&&s.push({start:new Date(a.getTime()+36e5-354e4),end:new Date(e.getTime()-6e4)})}}const n=new Date(t[t.length-1].time),o=new Date(n);o.setHours(23,59,0,0),n<o&&s.push({start:new Date(n.getTime()+36e5-354e4),end:o});const r=[...s],i=Array.from(new Set(r.map((e=>`${e.start}-${e.end}`)))).map((e=>{const[t,s]=e.split("-");return{start:new Date(t),end:new Date(s)}}));return console.log(i),i})(e.nonWorkTime,n);return{...e,workTime:n,nonWorkTime:o,allSlots:e.allSlots}}))};var r=s(5501),i=(s(8571),s(5475)),c=s(579);(0,n.hn)({locale:n.TZ,theme:"ios",themeVariant:"light"});const m=function(e){let{HandleFinish:t,final:s,teacherId:m,teacherName:u,schoolId:d}=e;const[h,g]=(0,l.useState)([]),[T,f]=(0,l.useState)([]),[p,w]=(0,l.useState)([]),[S,D]=(0,l.useState)([]),[k,y]=(0,l.useState)([]),[v,b]=(0,l.useState)([]),x=(0,a.zy)(),{teacherDate:j}=x.state||{},{level:N}=x.state||{},{allTeachers:C}=x.state||{},{lessonTypes:I}=x.state||{},{count:$}=x.state||{};console.log($,I,C,N);const A=(0,l.useCallback)((()=>{const e=[],t=[];k.forEach((s=>{const a=new Date(s.d),l=new Date(a.getTime()+6e4*a.getTimezoneOffset());s.allSlots>0?(t.push({start:l,title:s.allSlots+" SPOTS",textColor:"#e1528f"}),e.push(...s.nonWorkTime)):e.push(l)})),console.log(e),w(t),D(e)}),[k]);(0,l.useEffect)((()=>{(async()=>{try{if(j){const e=j[0].level.filter((e=>e.levelName===N))[0].lessonTypes.filter((e=>e.typeName==I));e[0].date.forEach((e=>{e.allSlots=e.workTime.reduce(((e,t)=>e+t.slots),0)}));const t=e[0].date.flatMap((e=>e.workTime));b(t),y(o(e[0].date,$))}else if(C){C.forEach((e=>{e.allSlots=e.workTime.reduce(((e,t)=>e+t.slots),0)}));const e=C.flatMap((e=>e.workTime)),t=o(C,$);y(t),b(e),console.log(e)}const e=localStorage.getItem("selectedDates");e&&f(JSON.parse(e))}catch(e){console.error("Failed to fetch bookings",e)}})()}),[]),(0,l.useEffect)((()=>{A()}),[k,A]),(0,l.useEffect)((()=>{localStorage.setItem("selectedDates",JSON.stringify(h))}),[h]);const E=(0,l.useCallback)((e=>{let t=e.value;null===t?f([]):t instanceof Date?f([t]):Array.isArray(t)?f(t):(console.error("Unexpected type for 'args.value':",t),f([]))}),[]),W=e=>new Date(e).toLocaleString("uk-UA",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"});return(0,c.jsxs)(n.YW,{className:"md-calendar-booking",children:[(0,c.jsxs)("div",{className:"mbsc-form-group",children:[(0,c.jsx)("div",{className:"mbsc-form-group-title",children:"Select date & time"}),(0,c.jsx)(n.t1,{display:"inline",controls:["calendar","timegrid"],min:"2024-01-01T00:00",max:"2024-12-15T00:00",minTime:"05:00",maxTime:"23:59",stepMinute:10,width:null,labels:p,invalid:S,onPageLoading:A,cssClass:"booking-datetime",onChange:E,multiple:!0}),(0,c.jsx)("button",{onClick:()=>{Array.isArray(T)?g((e=>{const t=T.map(W);return[...new Set([...e,...t])]})):console.error("Expected 'multiple' to be an array, but got:",typeof T)},children:"\u041e\u0431\u0440\u0430\u0442\u0438"})]}),(0,c.jsxs)("div",{className:"selected-dates",children:[(0,c.jsx)("h3",{children:"\u041e\u0431\u0440\u0430\u043d\u0456 \u0437\u0430\u043f\u0438\u0441\u0438:"}),Array.isArray(h)&&h.length>0?(0,c.jsx)("ul",{children:h.map(((e,t)=>{const s=v.filter((t=>new Date(new Date(t.time).getTime()+6e4*new Date(t.time).getTimezoneOffset()).getTime()===new Date(new Date((0,r.u)(e))).getTime()&&t.slots>0)).reduce(((e,t)=>e+t.slots),0);return(0,c.jsxs)("li",{children:[e," ",s&&`(\u0412\u0456\u043b\u044c\u043d\u0438\u0445 \u043c\u0456\u0441\u0446\u044c: ${s})`,(0,c.jsx)("button",{className:"delete-btn",onClick:()=>{return t=e,void g((e=>e.filter((e=>e!==t))));var t},children:"\u2716"})]},t)}))}):(0,c.jsx)("p",{children:"\u041d\u0435\u043c\u0430\u0454 \u043e\u0431\u0440\u0430\u043d\u0438\u0445 \u0434\u0430\u0442"}),(0,c.jsx)("div",{className:"next-btn",children:(0,c.jsx)(i.N_,{to:t(),state:{lang_from_general_cal:s,level:N,teacherId:m,teacherName:u,lessonTypes:I,schoolId:d,count:$},children:(0,c.jsx)("button",{disabled:0===h.length,children:"\u0414\u0430\u043b\u0456"})})})]})]})};var u=s(8929);const d=()=>{const[e,t]=(0,l.useState)(null),s=(0,a.zy)(),{teacherDate:n}=s.state||{},{level:o}=s.state||{},{allTeachers:r}=s.state||{},{lang:i}=s.state||{},{teacherId:d}=s.state||{},{teacherName:h}=s.state||{},{lessonTypes:g}=s.state||{},{schoolId:T}=s.state||{},{count:f}=s.state||{};return(0,l.useEffect)((()=>{const e=Object.keys(localStorage);localStorage.setItem("OrderId",[]),e.forEach((e=>{e.startsWith("availableTimes_")&&localStorage.removeItem(e)})),localStorage.setItem("selectedSlots",[]),n?t(n[0].lang):r&&(localStorage.removeItem("selectedDates"),t(i),console.log(i))}),[]),(0,c.jsxs)("div",{className:"calendar",children:[(0,c.jsx)(m,{HandleFinish:()=>r?"/teacher":n?"/final":void 0,final:e,teacherId:d,teacherName:h,schoolId:T}),(0,c.jsx)("div",{className:"calendar-footer",children:(0,c.jsx)(u.A,{})})]})}}}]);
//# sourceMappingURL=719.e212cf56.chunk.js.map