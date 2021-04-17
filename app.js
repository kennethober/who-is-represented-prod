import e from"./state-data.js";const t=(e,t)=>e.concat((e=>Array.from(document.querySelectorAll(e)))(t)),o=(e,t,o)=>{const s=o.getAttribute(e);return t[s]??=[],t[s].push(o),t},s=e=>{let t=!0;return()=>{t&&(t=!1,window.fathom.trackGoal(e,0))}},l=s("EURO0KBA"),n=e=>e.dataset.abbreviation,c=t=>{const o=[...document.querySelectorAll("#state-list .selected")].map(n);window.history.replaceState(null,"",`?s=${o.join("_")}`);const s=o.map((t=>e[t])),c=r(s);L(i,c),l()};(({selectors:e,commonAttribute:s,selectClass:l,hoverClass:n,onSelect:c,onDeselect:a})=>{const r=e.reduce(t,[]),i=r.reduce(o.bind(null,s),{}),d=e=>{i[e.getAttribute(s)].forEach((e=>e.classList.toggle(l))),e.classList.contains(l)?c(e):a(e)},u=e=>{i[e.getAttribute(s)].forEach((e=>e.classList.add(n)))},m=e=>{i[e.getAttribute(s)].forEach((e=>e.classList.remove(n)))};r.forEach((e=>{e.addEventListener("click",d.bind(null,e)),e.addEventListener("mouseenter",u.bind(null,e)),e.addEventListener("mouseleave",m.bind(null,e))}))})({selectors:["#state-map [data-abbreviation]","#state-list .state"],commonAttribute:"data-abbreviation",selectClass:"selected",hoverClass:"hovered",onSelect:c,onDeselect:c});const a=(e,{population:t,senate:o,house:s,electoral:l})=>(e.population+=t,e.senate+=o,e.house+=s,e.electoral+=l,e),r=e=>e.reduce(a,{population:0,house:0,senate:0,electoral:0}),i=r(Object.values(e)),d=s("6NCEYFOX");document.getElementById("reset").addEventListener("click",(()=>{window.history.replaceState(null,"","/");Array.from(document.querySelectorAll(".selected")).forEach((e=>e.classList.toggle("selected"))),L(i,r([])),d()}));const u=s("IUIHGOY5");let m="map";const p=document.getElementById("toggle");p.addEventListener("click",(()=>{const e=document.querySelector("#state-map"),t=document.querySelector("#state-list");"map"===m?(e.style.display="none",t.style.display="flex",p.textContent="Show Map",m="list"):(e.style.display="block",t.style.display="none",p.textContent="Show List",m="map"),u()}));const y=s("9O18AIJO");let h="barSection";const b=document.getElementById("bar-toggle");b.addEventListener("click",(()=>{const e=document.querySelector("#bar-section"),t=document.querySelector("#thresholds");"barSection"===h?(e.style.display="none",t.style.display="unset",b.textContent="Show Bars",h="thresholds"):(e.style.display="flex",t.style.display="none",b.textContent="Show Thresholds",h="barSection"),y()}));const S=s("F7FY2KUM"),E=document.querySelector("#fullscreen");document.fullscreenEnabled&&document.documentElement.requestFullscreen&&document.exitFullscreen?E.addEventListener("click",(()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen(),S()})):E.classList.add("hidden");const v=(e,t,o)=>t[o]/e[o]*100,f=(e,t,o)=>{document.querySelector(o).textContent=e.toFixed(2)+"%",document.querySelector(t).style.width=e+"%"},g=(e,t)=>{const o=document.querySelector(e);t?o.classList.add("active"):o.classList.remove("active")},L=(e,t)=>{const o=v.bind(null,e,t),s=o("population"),l=o("electoral"),n=o("senate"),c=o("house");f(s,"#pop-bar","#pop-percent"),f(l,"#electoral-bar","#electoral-percent"),f(n,"#senate-bar","#senate-percent"),f(c,"#house-bar","#house-percent");const a=2/3*100;g("#can-filibuster",n>40),g("#senate-majority",n>50),g("#can-stop-filibuster",n>=60),g("#electoral-majority",l>50),g("#house-majority",c>50),g("#can-stop-veto",c>=a&&n>=a)},A=e=>`#state-list [data-abbreviation=${e}]`,q=new URLSearchParams(window.location.search);if(q.has("s")&&q.get("s").length>1){const e=q.get("s").split("_").map(A).join(",");Array.from(document.querySelectorAll(e)).forEach((e=>e.click()))}