import{a as q,S as v,i as n}from"./assets/vendor-b11e2a50.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const S="45178641-894ab33b0f7791a2b3522c7a2",w="https://pixabay.com/api/";async function h(t,r=1){const a={key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:r};try{return(await q.get(w,{params:a})).data}catch(s){throw console.error("Error fetching images:",s),s}}const f=document.querySelector(".gallery");function m(t){const r=t.map(({webformatURL:a,largeImageURL:s,tags:e,likes:o,views:i,comments:L,downloads:b})=>`
    <li>
      <a href="${s}">
        <img src="${a}" alt="${e}" />
      </a>
      <div class="info">
        <p>Likes:<br /><spann>${o}</spann></p>
        <p>Views:<br /><spann>${i}</spann></p>
        <p>Comments:<br /><spann>${L}</spann></p>
        <p>Downloads:<br /><spann>${b}</spann></p>
      </div>
    </li>
  `).join("");f.insertAdjacentHTML("beforeend",r),new v(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function E(){f.innerHTML=""}function g(){document.querySelector(".loader").classList.remove("hidden")}function y(){document.querySelector(".loader").classList.add("hidden")}const p=document.querySelector(".search-form"),d=document.querySelector(".load-more");let l="",c=1,u=0;p.addEventListener("submit",async t=>{if(t.preventDefault(),l=t.currentTarget.elements.query.value.trim(),c=1,!l){n.error({message:"Please enter a search query!",position:"topRight"});return}E(),g(),d.classList.add("hidden");try{const r=await h(l,c);u=r.totalHits,r.hits.length===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(m(r.hits),r.hits.length<15||u<=15?n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):d.classList.remove("hidden"))}catch(r){n.error({title:"Error",message:r.message})}finally{y(),p.reset()}});d.addEventListener("click",async()=>{c+=1,g();try{const t=await h(l,c);(t.hits.length===0||c*15>=u)&&(n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),d.classList.add("hidden")),m(t.hits),P()}catch(t){n.error({title:"Error",message:t.message})}finally{y()}});function P(){const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
