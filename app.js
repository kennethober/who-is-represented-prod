import e from"./state-data.js";const t=(e,t)=>e.concat((e=>Array.from(document.querySelectorAll(e)))(t)),o=(e,t,o)=>{const s=o.getAttribute(e);return t[s]??=[],t[s].push(o),t},s=e=>{let t=!0;return()=>{t&&(t=!1,window.fathom.trackGoal(e,0))}},l=t=>e[t.dataset.abbreviation],n=s("EURO0KBA"),c=e=>{const t=Array.from(document.querySelectorAll("li.selected")).map(l),o=r(t);L(d,o),n()};(({selectors:e,commonAttribute:s,selectClass:l,hoverClass:n,onSelect:c,onDeselect:a})=>{const r=e.reduce(t,[]),d=r.reduce(o.bind(null,s),{}),u=e=>{d[e.getAttribute(s)].forEach((e=>e.classList.toggle(l))),e.classList.contains(l)?c(e):a(e)},i=e=>{d[e.getAttribute(s)].forEach((e=>e.classList.toggle(n)))};r.forEach((e=>{e.addEventListener("click",u.bind(null,e)),e.addEventListener("mouseenter",i.bind(null,e)),e.addEventListener("mouseleave",i.bind(null,e))}))})({selectors:["#state-map [data-abbreviation]","#state-list .state"],commonAttribute:"data-abbreviation",selectClass:"selected",hoverClass:"hovered",onSelect:c,onDeselect:c});const a=(e,{population:t,senate:o,house:s,electoral:l})=>(e.population+=t,e.senate+=o,e.house+=s,e.electoral+=l,e),r=e=>e.reduce(a,{population:0,house:0,senate:0,electoral:0}),d=r(Object.values(e)),u=s("6NCEYFOX");document.getElementById("reset").addEventListener("click",(()=>{Array.from(document.querySelectorAll(".selected")).forEach((e=>e.classList.toggle("selected"))),L(d,r([])),u()}));const i=s("IUIHGOY5");let m="map";const y=document.getElementById("toggle");y.addEventListener("click",(()=>{const e=document.querySelector("#state-map"),t=document.querySelector("#state-list");"map"===m?(e.style.display="none",t.style.display="flex",y.textContent="Show Map",m="list"):(e.style.display="block",t.style.display="none",y.textContent="Show List",m="map"),i()}));const p=s("9O18AIJO");let b="barSection";const h=document.getElementById("bar-toggle");h.addEventListener("click",(()=>{const e=document.querySelector("#bar-section"),t=document.querySelector("#thresholds");"barSection"===b?(e.style.display="none",t.style.display="unset",h.textContent="Show Bars",b="thresholds"):(e.style.display="flex",t.style.display="none",h.textContent="Show Thresholds",b="barSection"),p()}));const E=s("F7FY2KUM"),S=document.querySelector("#fullscreen");document.fullscreenEnabled&&document.documentElement.requestFullscreen&&document.exitFullscreen?S.addEventListener("click",(()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen(),E()})):S.classList.add("hidden");const v=(e,t,o)=>t[o]/e[o]*100,f=(e,t,o)=>{document.querySelector(o).textContent=e.toFixed(2)+"%",document.querySelector(t).style.width=e+"%"},g=(e,t)=>{const o=document.querySelector(e);t?o.classList.add("active"):o.classList.remove("active")},L=(e,t)=>{const o=v.bind(null,e,t),s=o("population"),l=o("electoral"),n=o("senate"),c=o("house");f(s,"#pop-bar","#pop-percent"),f(l,"#electoral-bar","#electoral-percent"),f(n,"#senate-bar","#senate-percent"),f(c,"#house-bar","#house-percent");const a=2/3*100;g("#can-filibuster",n>40),g("#senate-majority",n>50),g("#can-stop-filibuster",n>=60),g("#electoral-majority",l>50),g("#house-majority",c>50),g("#can-stop-veto",c>=a&&n>=a)};