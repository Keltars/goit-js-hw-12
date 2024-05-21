import{a as y,S as L,i as c}from"./assets/vendor-06b1bbdf.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const b="https://pixabay.com/api/?",w="43811206-00759c8a8797fc9712cd71957",f=async(t,s,l)=>{const i=new URLSearchParams({key:w,image_type:"photo",orientation:"horizontal",q:`${t}`,safesearch:!0,page:s,per_page:l});return(await y.get(`${b}${i}`)).data},$=new L(".list-link"),g=(t,s)=>{const l=t.map(i=>`<li class="list-item">
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
          </li>`).join("");s.insertAdjacentHTML("beforeend",l),$.refresh()},R=document.querySelector(".search-form"),p=document.querySelector(".gallery"),a=document.querySelector(".loader"),o=document.querySelector(".load-more-btn");o.style.display="none";let n=1,u=1;const h=15;let d;R.addEventListener("submit",async t=>{if(t.preventDefault(),n=1,d=t.target.elements.search.value.trim(),!d)return c.error({message:"Search query cannot be empty.",position:"topRight"});a.classList.remove("is-hidden"),p.innerHTML="",setTimeout(async()=>{try{const s=await f(d,n,h);if(u=Math.ceil(s.totalHits/h),a.classList.add("is-hidden"),s.hits.length===0)return c.error({message:"No images found for your search query.",position:"topRight"});g(s.hits,p),n<u&&(o.style.display="block")}catch(s){c.error({message:`Error during fetching posts: ${s}`,position:"topRight"}),a.classList.add("is-hidden")}},1e3),t.currentTarget.reset()});o.addEventListener("click",()=>{n+=1,a.classList.remove("is-hidden"),setTimeout(async()=>{try{const t=await f(d,n,h);g(t.hits,p),a.classList.add("is-hidden"),n>=u?(o.style.display="none",c.info({message:"You've reached the end of search results.",position:"topRight"})):o.style.display="block";const s=p.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:2*s,behavior:"smooth"})}catch(t){c.error({message:`Error during loading more images: ${t}`,position:"topRight"}),a.classList.add("is-hidden"),o.style.display="none"}},1e3)});
//# sourceMappingURL=commonHelpers.js.map
