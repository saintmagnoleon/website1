let currentIndex=0;const works=document.querySelectorAll(".media-gallery img, .media-gallery video");let debounceTimer;function openLightbox(e){if(!works[e])return;const t=works[e],n=document.getElementById("lightbox-modal"),o=document.getElementById("lightbox-img"),r=document.getElementById("lightbox-video"),i=document.getElementById("lightbox-title"),c=document.getElementById("lightbox-description");i.textContent=t.getAttribute("data-title"),c.textContent=t.getAttribute("data-description"),"video"===t.tagName.toLowerCase()?(r.src=t.querySelector("source").src,r.style.display="block",o.style.display="none"):(o.src=t.src,o.style.display="block",r.style.display="none"),n.style.display="flex"}function closeLightbox(){document.getElementById("lightbox-modal").style.display="none"}function changeImage(e){debounceTimer&&clearTimeout(debounceTimer),debounceTimer=setTimeout((()=>{currentIndex+=e,currentIndex>=works.length?currentIndex=0:currentIndex<0&&(currentIndex=works.length-1),openLightbox(currentIndex)}),200)}if(document.addEventListener("DOMContentLoaded",(()=>{document.querySelector(".arrow.left").addEventListener("click",(()=>changeImage(-1))),document.querySelector(".arrow.right").addEventListener("click",(()=>changeImage(1))),works.forEach(((e,t)=>{e.addEventListener("click",(()=>{currentIndex=t,openLightbox(t)}))}))})),window.onload=function(){sessionStorage.getItem("startTime")||sessionStorage.setItem("startTime",Date.now()),setInterval((function(){const e=sessionStorage.getItem("startTime"),t=Math.floor((Date.now()-e)/1e3);document.getElementById("timer").innerText=`You've been lingering here for ${t} seconds. It's your time to hustle.`}),1e3)},window.onbeforeunload=function(){sessionStorage.removeItem("startTime")},document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("click-counter"),t=parseInt(sessionStorage.getItem("clickCount"))||0;e.innerText=`You clicked ${t} times.`,document.addEventListener("click",(function(){t++,sessionStorage.setItem("clickCount",t),e.innerText=`You clicked ${t} times.`}))})),window.innerWidth<=1920){let e=0;const t=document.querySelector(".navbar");window.addEventListener("scroll",(function(){const n=window.pageYOffset||document.documentElement.scrollTop;t.style.top=n>e?"-300px":"0",e=n}))}