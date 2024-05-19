import{a as y,S as L,i as c}from"./assets/vendor-06b1bbdf.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const b="https://pixabay.com/api/?",w="43811206-00759c8a8797fc9712cd71957",h=async(t,s,a)=>{const i=new URLSearchParams({key:w,image_type:"photo",orientation:"horizontal",q:`${t}`,safesearch:!0,page:s,per_page:a});return(await y.get(`${b}${i}`)).data},$=new L(".list-link"),f=(t,s)=>{const a=t.map(i=>`<li class="list-item">
            <a class="list-link" href="${i.largeImageURL}"><img class="list-img" src="${i.webformatURL}" data-original="${i.largeImageURL}" download></a>
            <ul class="list-statistic">
              <li>
                <span class="list-item-title">likes</span>
                <span class="list-item-number">${i.likes}</span>
              </li>
  
              <li>
                <span class="list-item-title">views</span>
                <span class="list-item-number">${i.views}</span>
              </li>
              <li>
                <span class="list-item-title">comments</span>
                <span class="list-item-number">${i.comments}</span>
              </li>
              <li>
                <span class="list-item-title">downloads</span>
                <span class="list-item-number">${i.downloads}</span>
              </li>
            </ul>
          </li>`).join("");s.insertAdjacentHTML("beforeend",a),$.refresh()},v=document.querySelector(".search-form"),d=document.querySelector(".gallery"),o=document.querySelector(".loader"),l=document.querySelector(".load-more-btn");l.style.display="none";let n=1,g=1;const p=15;let u;v.addEventListener("submit",async t=>{t.preventDefault(),n=1,o.classList.remove("is-hidden"),l.style.display="block",u=t.target.elements.search.value,d.innerHTML="",setTimeout(async()=>{try{const s=await h(u,n,p);if(g=Math.ceil(s.totalHits/p),o.classList.add("is-hidden"),s.hits.length===0)return l.style.display="none",c.error({message:"No images found for your search query.",position:"topRight"});f(s.hits,d)}catch(s){c.error({message:`Error during fetching posts: ${s}`,position:"topRight"}),o.classList.add("is-hidden")}},1e3),t.currentTarget.reset()});l.addEventListener("click",()=>{n+=1,o.classList.remove("is-hidden"),setTimeout(async()=>{try{const t=await h(u,n,p);f(t.hits,d),o.classList.add("is-hidden"),n>=g&&(l.style.display="none",c.info({message:"You've reached the end of search results.",position:"topRight"}));const s=d.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:2*s,behavior:"smooth"})}catch(t){c.error({message:`Error during loading more images: ${t}`,position:"topRight"}),o.classList.add("is-hidden")}},1e3)});
//# sourceMappingURL=commonHelpers.js.map
