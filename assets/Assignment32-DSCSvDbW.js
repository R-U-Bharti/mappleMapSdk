import{r as s,j as r}from"./index-D-K0FS2t.js";import{$ as p,m as u,a as d}from"./module-Bd-rYyGq.js";const a=new u,f=new d;var c;const h=({map:e})=>{const t=s.useRef(null);s.useEffect(()=>{e&&t.current&&a.removeLayer({map:e,layer:t.current});var n={location:[28.61,77.23],region:"IND",height:300};return t.current=f.search(document.getElementById("auto"),n,c),c=o=>{console.log(o)},()=>{e&&t.current&&a.removeLayer({map:e,layer:t.current})}},[e])},x=()=>{const e=s.useRef(null),[t,n]=s.useState(!1),o={width:"300px",position:"absolute",zIndex:999,fontSize:"15px",padding:"10px",border:"1px solid #ddd",outline:"none !important"},l={map:!0,plugins:["search"]};return s.useEffect(()=>(a.initialize(sessionStorage.getItem("accessToken")??"f660f18a-ffe6-423c-819a-c942085e8633",l,()=>{const i=a.Map({id:"map",properties:{center:[28.633,77.2194],zoom:4}});i.on("load",()=>{n(!0)}),e.current=i}),()=>{e.current&&e.current.remove()}),[]),r.jsxs("div",{id:"map",style:{width:"100%",height:"100vh",display:"inline-block"},children:[r.jsx("input",{style:o,type:"text",id:"auto",name:"auto",className:"search-outer form-control as-input text-zinc-900 focus:outline-none",placeholder:"Search places or eLoc's...",required:"",spellCheck:"false"}),!t&&r.jsxs("div",{className:"",style:{display:"flex",flexDirection:"column",gap:"10px",justifyContent:"center",alignItems:"center",height:"100vh"},children:[r.jsx(p,{visible:!0,height:"80",width:"80",color:"#ffffff",ariaLabel:"grid-loading",radius:"12.5",wrapperClass:"grid-wrapper"}),r.jsx("div",{style:{fontWeight:"500",fontSize:"14px",color:"white"},children:"Loading Map..."})]}),t&&r.jsx(h,{map:e.current})]})};export{x as default};
