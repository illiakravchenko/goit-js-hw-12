import{i as c,S as m}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function d(i){const r="https://pixabay.com/api/",o=new URLSearchParams({key:"44148466-3c6c137c0d8e86e77772167ae",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),n=`${r}?${o}`;return fetch(n).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function f({webformatURL:i,largeImageURL:r,tags:o,likes:n,views:e,comments:t,downloads:s}){return`<li class="cards">
      <a href="${i}">
        <img src="${r}" alt="${o}">
      </a>
      <div>
        <ul>
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
            <p>${t}</p>
          </li>
          <li>
            <p>downloads</p>
            <p>${s}</p>
          </li>
        </ul>
      </div>

    </li>`}function g(i){return i.map(f).join("")}const u=document.querySelector(".form"),p=document.querySelector(".loader"),l=document.querySelector(".gallery");function a(){p.style.display="none"}function h(){p.style.display="block"}a();u.addEventListener("submit",y);function y(i){i.preventDefault(),h(),l.innerHTML="";const r=i.target.elements.input.value.trim();if(!r){a(),c.error({message:"Please enter Query",position:"topRight"});return}d(r).then(o=>{if(o.hits.length===0){a(),c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const n=g(o.hits);l.insertAdjacentHTML("beforeend",n),c.success({message:"Wow, there are many images matching your search query. Keep going!",position:"topRight"}),L.refresh(),a()}).catch(o=>{console.log(o),a()}),u.reset()}const L=new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
