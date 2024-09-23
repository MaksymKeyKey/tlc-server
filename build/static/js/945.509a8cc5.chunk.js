"use strict";(self.webpackChunkrlc=self.webpackChunkrlc||[]).push([[945],{3945:(e,l,t)=>{t.r(l),t.d(l,{default:()=>r});var a=t(3216),s=t(5043),n=t(6213),i=t(579);const d=e=>{let{schoolId:l,fetchSchool:t,editingLang:a,setEditingLang:d}=e;const[c,o]=(0,s.useState)(""),[r,u]=(0,s.useState)(""),[h,p]=(0,s.useState)([]),[m,g]=(0,s.useState)(null),[v,x]=(0,s.useState)(null),[j,y]=(0,s.useState)("");(0,s.useEffect)((()=>{a&&(o(a.lang),p(a.level))}),[a]);const N=()=>{o(""),p([]),y(""),u(""),d(null)};return(0,i.jsxs)("form",{onSubmit:async e=>{e.preventDefault();const s=a?`http://13.60.221.226/api/editLanguageForSchool/${l}/${a.id}`:"http://13.60.221.226/api/addLanguageForSchool",i={id:l,lang:c,levels:h};try{await n.A.put(s,i,{headers:{"Content-Type":"application/json"}}),t(),N()}catch(d){console.error("Error saving language:",d)}},className:"language-form",children:[(0,i.jsx)("h1",{children:a?"Edit Language":"Add Language"}),(0,i.jsx)("div",{className:"input-group",children:(0,i.jsx)("input",{type:"text",value:c,onChange:e=>o(e.target.value),placeholder:"Language",className:"input-field"})}),(0,i.jsxs)("div",{className:"input-group",children:[(0,i.jsx)("input",{type:"text",value:r,onChange:e=>u(e.target.value),placeholder:"Add course",className:"input-field"}),(0,i.jsx)("button",{type:"button",onClick:()=>{const e={id:Date.now(),levelName:r,lessonTypes:[]};p([...h,e]),u("")},className:"add-button",children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043a\u0443\u0440\u0441"})]}),(0,i.jsxs)("div",{className:"levels-list",children:[(0,i.jsx)("h3",{children:"Added Levels:"}),(0,i.jsx)("ul",{children:h.map((e=>(0,i.jsxs)("li",{className:"level-item",children:[e.levelName,(0,i.jsx)("ul",{children:e.lessonTypes.map((l=>(0,i.jsxs)("li",{children:[l.typeName," - ",l.price,(0,i.jsx)("button",{onClick:()=>{return t=e.id,a=l.id,void p(h.map((e=>e.id===t?{...e,lessonTypes:e.lessonTypes.filter((e=>e.id!==a))}:e)));var t,a},className:"delete-button",children:"\u2716"})]},l.id)))}),(0,i.jsx)("button",{type:"button",onClick:()=>x(e.id),className:"select-button "+(v===e.id?"selected":""),children:v===e.id?"\u041e\u0431\u0440\u0430\u043d\u043e":"\u041e\u0431\u0440\u0430\u0442\u0438"})]},e.id)))})]}),v&&(0,i.jsxs)("div",{className:"input-group",children:[(0,i.jsx)("input",{type:"text",value:j,onChange:e=>y(e.target.value),placeholder:"Add Class Type",className:"input-field"}),(0,i.jsx)("input",{type:"number",value:m,onChange:e=>g(e.target.value),placeholder:"Enter Price",className:"input-field"}),(0,i.jsx)("button",{type:"button",onClick:()=>{null!==v&&null!==m&&(p(h.map((e=>e.id===v?{...e,lessonTypes:[...e.lessonTypes,{id:Date.now(),typeName:j,price:m}]}:e))),y(""),g(""))},className:"add-button",children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0432\u0438\u0434 \u0437\u0430\u043d\u044f\u0442\u044c \u0434\u043e \u0432\u0438\u0431\u0440\u0430\u043d\u043e\u0433\u043e \u0440\u0456\u0432\u043d\u044f"})]}),(0,i.jsx)("button",{type:"submit",className:"submit-button",children:a?"\u041e\u043d\u043e\u0432\u0438\u0442\u0438 \u0434\u0430\u043d\u0456":"\u0414\u043e\u0434\u0430\u0442\u0438 \u043c\u043e\u0432\u0443"}),a&&(0,i.jsx)("button",{type:"button",onClick:N,className:"cancel-button",children:"\u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438"})]})},c=e=>{let{schoolId:l,fetchSchool:t,editingTeacher:a,setEditingTeacher:d,teacherId:c}=e;const[o,r]=(0,s.useState)(""),[u,h]=(0,s.useState)(""),[p,m]=(0,s.useState)(""),[g,v]=(0,s.useState)([]),[x,j]=(0,s.useState)(""),[y,N]=(0,s.useState)(""),[b,C]=(0,s.useState)(""),[f,S]=(0,s.useState)("");(0,s.useEffect)((()=>{a&&(r(a.teacherName),r(a.teacherImg),v(a.lang))}),[a]);return(0,i.jsxs)("form",{onSubmit:async e=>{e.preventDefault();const s=a?`http://13.60.221.226/api/updateTeacher/${l}`:"http://13.60.221.226/api/addTeacherForSchool";try{await n.A.put(s,{id:l,teacherName:o,teacherImg:u,langs:g,teacherId:c},{headers:{"Content-Type":"application/json"}}),t(),r(""),h(""),m(""),v([]),d(null)}catch(i){console.error(i)}},className:"add-teacher-form",children:[(0,i.jsx)("h1",{children:a?"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u0432\u0447\u0438\u0442\u0435\u043b\u044f":"\u0414\u043e\u0434\u0430\u0442\u0438 \u0432\u0447\u0438\u0442\u0435\u043b\u044f"}),(0,i.jsx)("input",{className:"input-field",type:"text",value:o,onChange:e=>r(e.target.value),placeholder:"Teacher Name"}),(0,i.jsx)("input",{className:"input-field",type:"text",value:u,onChange:e=>h(e.target.value),placeholder:"Teacher Image"}),(0,i.jsxs)("div",{className:"lang-input-group",children:[(0,i.jsx)("input",{className:"input-field",type:"text",value:p,onChange:e=>m(e.target.value),placeholder:"Add Language"}),(0,i.jsx)("button",{type:"button",onClick:()=>{const e={id:Date.now().toString(),lang:p,level:[]};v([...g,e]),m("")},className:"add-lang-btn",children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043c\u043e\u0432\u0443"})]}),(0,i.jsxs)("div",{className:"langs-list",children:[(0,i.jsx)("h3",{children:"\u0414\u043e\u0434\u0430\u043d\u0456 \u043c\u043e\u0432\u0438:"}),(0,i.jsx)("ul",{children:g.map((e=>(0,i.jsxs)("li",{className:"lang-item",children:[(0,i.jsx)("input",{type:"text",value:e.lang,onChange:l=>{return t=e.id,a=l.target.value,void v(g.map((e=>e.id===t?{...e,lang:a}:e)));var t,a},placeholder:"Edit Language"}),(0,i.jsx)("button",{className:"delete-btn",onClick:()=>{return l=e.id,void v(g.filter((e=>e.id!==l)));var l},children:"\u2716"}),(0,i.jsx)("ul",{children:e.level.length>0?e.level.map((l=>(0,i.jsxs)("li",{className:"level-item",children:[(0,i.jsx)("input",{type:"text",value:l.levelName,onChange:t=>{return a=e.id,s=l.id,n=t.target.value,void v(g.map((e=>e.id===a?{...e,level:e.level.map((e=>e.id===s?{...e,levelName:n}:e))}:e)));var a,s,n},placeholder:"Edit Level"}),(0,i.jsx)("button",{className:"delete-btn",onClick:()=>{return t=e.id,a=l.id,void v(g.map((e=>e.id===t?{...e,level:e.level.filter((e=>e.id!==a))}:e)));var t,a},children:"\u2716"}),(0,i.jsx)("ul",{children:l.lessonTypes.length>0?l.lessonTypes.map((t=>(0,i.jsxs)("li",{className:"class-type-item",children:[(0,i.jsx)("input",{type:"text",value:t.typeName,onChange:e=>{const a=l.lessonTypes.map((l=>l.id===t.id?{...l,lessonTypes:e.target.value}:l));v(g.map((e=>e.id===y?{...e,level:e.level.map((e=>e.id===f?{...e,lessonTypes:a}:e))}:e)))},placeholder:"Edit Class Type"}),(0,i.jsx)("button",{className:"delete-btn",onClick:()=>{return a=e.id,s=l.id,n=t.id,void v(g.map((e=>e.id===a?{...e,level:e.level.map((e=>e.id===s?{...e,lessonTypes:e.lessonTypes.filter((e=>e.id!==n))}:e))}:e)));var a,s,n},children:"\u2716"})]},t.id))):(0,i.jsx)("li",{children:"No class types added yet"})})]},l.id))):(0,i.jsx)("li",{children:"No levels added yet"})})]},e.id)))})]}),(0,i.jsxs)("div",{className:"add-level-group",children:[(0,i.jsxs)("select",{value:y,onChange:e=>N(e.target.value),className:"select-field",children:[(0,i.jsx)("option",{value:"",children:"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u043c\u043e\u0432\u0443"}),g.map((e=>(0,i.jsx)("option",{value:e.id,children:e.lang},e.id)))]}),(0,i.jsx)("input",{className:"input-field",type:"text",value:x,onChange:e=>j(e.target.value),placeholder:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043a\u0443\u0440\u0441"}),(0,i.jsx)("button",{type:"button",onClick:()=>{if(!y)return void alert("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u044f\u0437\u044b\u043a \u0434\u043b\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0443\u0440\u043e\u0432\u043d\u044f");const e={id:Date.now().toString(),levelName:x,lessonTypes:[],date:[]};v(g.map((l=>l.id===y?{...l,level:[...l.level,e]}:l))),j("")},className:"add-level-btn",children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043a\u0443\u0440\u0441"})]}),(0,i.jsxs)("div",{className:"add-class-type-group",children:[(0,i.jsxs)("select",{value:f,onChange:e=>S(e.target.value),className:"select-field",children:[(0,i.jsx)("option",{value:"",children:"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u043a\u0443\u0440\u0441"}),g.filter((e=>e.id===y)).flatMap((e=>e.level)).map((e=>(0,i.jsx)("option",{value:e.id,children:e.levelName},e.id)))]}),(0,i.jsx)("input",{className:"input-field",type:"text",value:b,onChange:e=>C(e.target.value),placeholder:"Add Class Type"}),(0,i.jsx)("button",{type:"button",onClick:()=>{if(!f)return void alert("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0434\u043b\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0442\u0438\u043f\u0430 \u0437\u0430\u043d\u044f\u0442\u0438\u0439");const e={id:Date.now().toString(),typeName:b};v(g.map((l=>l.id===y?{...l,level:l.level.map((l=>l.id===f?{...l,lessonTypes:[...l.lessonTypes,e]}:l))}:l))),C("")},className:"add-class-type-btn",children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0442\u0438\u043f \u0437\u0430\u043d\u044f\u0442\u044c"})]}),(0,i.jsx)("button",{type:"submit",className:"submit-btn",children:a?"\u041e\u043d\u043e\u0432\u0438\u0442\u0438 \u0432\u0447\u0438\u0442\u0435\u043b\u044f":"\u0414\u043e\u0434\u0430\u0442\u0438 \u0432\u0447\u0438\u0442\u0435\u043b\u044f"})]})},o=()=>{const[e,l]=(0,s.useState)(null),[t,o]=(0,s.useState)(null),[r,u]=(0,s.useState)(null),[h,p]=(0,s.useState)(null),m=(0,a.zy)(),{schoolId:g}=m.state||{};console.log(g);const v=async()=>{const e=await n.A.get(`http://13.60.221.226/api/schools/${g}`);l(e.data[0]),console.log(e.data)};(0,s.useEffect)((()=>{v()}),[g]);return e?(0,i.jsxs)("div",{className:"school-detail",children:[(0,i.jsx)("h2",{className:"school-name",children:e.ESL.schoolName}),(0,i.jsx)("h3",{children:"\u041c\u043e\u0432\u0438:"}),(0,i.jsx)("ul",{className:"language-list",children:e.ESL.language.map((e=>(0,i.jsxs)("li",{className:"language-item",children:[e.lang,(0,i.jsx)("button",{onClick:()=>(async e=>{try{await n.A.delete(`http://13.60.221.226/api/deleteLanguageFromSchool/${g}/${e}`),v()}catch(l){console.error("Error deleting language:",l)}})(e.id),className:"delete-button",children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"}),(0,i.jsx)("button",{onClick:()=>o(e),className:"edit-button",children:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"}),(0,i.jsx)("ul",{children:e.level.map((l=>(0,i.jsxs)("li",{className:"level-item",children:[l.levelName,(0,i.jsx)("button",{onClick:()=>(async(e,l)=>{try{await n.A.delete(`http://13.60.221.226/api/deleteLevelFromLanguage/${g}/${e}/${l}`),v()}catch(t){console.error("Error deleting level:",t)}})(e.id,l.id),className:"delete-button",children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"}),(0,i.jsx)("ul",{children:l.lessonTypes.map((t=>(0,i.jsxs)("li",{className:"class-type-item",children:[t.typeName,console.log(t.id),(0,i.jsx)("button",{onClick:()=>(async(e,l,t)=>{try{console.log(e,l,t),await n.A.delete(`http://13.60.221.226/api/deleteClassTypeFromLevel/${g}`,{data:{languageId:e,levelId:l,classTypeId:t}}),v()}catch(a){console.error("Error deleting class type:",a)}})(e.id,l.id,t.id),className:"delete-button",children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"})]},t.id)))})]},l.id)))})]},e.id)))}),(0,i.jsx)("h3",{children:"Teachers:"}),(0,i.jsx)("ul",{className:"teacher-list",children:e.ESL.teacher.map((e=>(0,i.jsxs)("li",{className:"teacher-item",children:[e.data.teacherName,(0,i.jsx)("button",{onClick:()=>(async e=>{try{await n.A.delete(`http://13.60.221.226/api/deleteTeacherFromSchool/${g}/${e}`),v()}catch(l){console.error("Error deleting teacher:",l)}})(e.data.teacherId),className:"delete-button",children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"}),(0,i.jsx)("button",{onClick:()=>((e,l)=>{u(e),p(l)})(e.data,e.data.teacherId),className:"edit-button",children:"Edit"})]},e.data.teacherId)))}),(0,i.jsx)(d,{schoolId:g,fetchSchool:v,editingLang:t,setEditingLang:o}),(0,i.jsx)(c,{schoolId:g,fetchSchool:v,editingTeacher:r,setEditingTeacher:u,teacherId:h})]}):(0,i.jsx)("p",{children:"Loading..."})},r=()=>{const{id:e}=(0,a.g)();return(0,i.jsx)(o,{schoolId:e})}}}]);
//# sourceMappingURL=945.509a8cc5.chunk.js.map