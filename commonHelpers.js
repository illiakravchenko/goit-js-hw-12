import{a as P,i as l,S as v}from"./assets/vendor-f144e563.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function g(t,o){const s="https://pixabay.com/api/",n={key:"44148466-3c6c137c0d8e86e77772167ae",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o};return(await P.get(s,{params:n})).data}const S=document.querySelector(".gallery");function q({webformatURL:t,largeImageURL:o,tags:s,likes:n,views:e,comments:r,downloads:i}){return`<li class="cards">
      <a href="${t}">
        <img class="photo" src="${o}" alt="${s}">
      </a>
      <div>
        <ul class="cards-info">
          <li>
            <p>likes:</p>
            <p>${n}</p>
          </li>
          <li>
            <p>views</p>
            <p>${e}</p>
          </li>
          <li>
            <p>comments</p>
            <p>${r}</p>
          </li>
          <li>
            <p>downloads</p>
            <p>${i}</p>
          </li>
        </ul>
      </div>

    </li>`}function $(t){return t.map(q).join("")}function y(t){const o=$(t);S.insertAdjacentHTML("beforeend",o),I.refresh()}const f=document.querySelector(".form"),m=document.querySelector(".loader"),h=document.querySelector(".gallery"),p=document.querySelector(".load-button");let u,c=1,b=0;const O=15;function a(){m.style.display="none"}function L(){m.style.display="block"}function d(){p.style.display="none"}function R(){p.style.display="block"}a();d();f.addEventListener("submit",x);p.addEventListener("click",B);async function x(t){if(t.preventDefault(),L(),u=t.target.elements.input.value.trim(),h.innerHTML="",c=1,!u){a(),d(),l.error({message:"Please enter Query",position:"topRight"});return}try{const o=await g(u,c);if(console.log(o),o.hits.length===0){a(),l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b=Math.ceil(o.totalHits/O),y(o.hits)}catch(o){console.log(o)}l.success({message:"Wow, there are many images matching your search query. Keep going!",position:"topRight"}),a(),w(),f.reset()}async function B(){c+=1,L();try{const t=await g(u,c);y(t.hits)}catch(t){console.log(t)}a(),w(),D()}const I=new v(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function w(){c>=b?(d(),l.warning({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):R()}function D(){const t=h.firstChild.getBoundingClientRect().height;scrollBy({top:t,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
