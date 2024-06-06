import{a as w,i as l,S as P}from"./assets/vendor-f144e563.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();async function d(t,r){const n="https://pixabay.com/api/",s={key:"44148466-3c6c137c0d8e86e77772167ae",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r};return(await w.get(n,{params:s})).data}const v=document.querySelector(".gallery");function S({webformatURL:t,largeImageURL:r,tags:n,likes:s,views:e,comments:o,downloads:i}){return`<li class="cards">
      <a href="${t}">
        <img src="${r}" alt="${n}">
      </a>
      <div>
        <ul class="cards-info">
          <li>
            <p>likes:</p>
            <p>${s}</p>
          </li>
          <li>
            <p>views</p>
            <p>${e}</p>
          </li>
          <li>
            <p>comments</p>
            <p>${o}</p>
          </li>
          <li>
            <p>downloads</p>
            <p>${i}</p>
          </li>
        </ul>
      </div>

    </li>`}function q(t){return t.map(S).join("")}function f(t){const r=q(t);v.insertAdjacentHTML("beforeend",r),R.refresh()}const y=document.querySelector(".form"),g=document.querySelector(".loader"),m=document.querySelector(".gallery"),u=document.querySelector(".load-button");let $,c=1,h=0;const O=15;function a(){g.style.display="none"}function b(){g.style.display="block"}function p(){u.style.display="none"}function x(){u.style.display="block"}a();p();y.addEventListener("submit",B);u.addEventListener("click",I);async function B(t){t.preventDefault(),b();const r=t.target.elements.input.value.trim();if(m.innerHTML="",c=1,!r){a(),p(),l.error({message:"Please enter Query",position:"topRight"});return}try{const n=await d(r,c);if(console.log(n),n.hits.length===0){a(),l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h=Math.ceil(n.totalHits/O),f(n.hits)}catch(n){console.log(n)}a(),L(),y.reset()}async function I(){c+=1,b();try{const t=await d($,c);f(t.hits)}catch(t){console.log(t)}a(),L(),D()}const R=new P(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function L(){c>=h?(p(),l.warning({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):x()}function D(){const t=m.firstChild.getBoundingClientRect().height;scrollBy({top:t,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
