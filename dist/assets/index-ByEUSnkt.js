(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const d of e.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function t(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(r){if(r.ep)return;r.ep=!0;const e=t(r);fetch(r.href,e)}})();var v=function(c,i,t,n){function r(e){return e instanceof t?e:new t(function(d){d(e)})}return new(t||(t=Promise))(function(e,d){function l(o){try{u(n.next(o))}catch(a){d(a)}}function s(o){try{u(n.throw(o))}catch(a){d(a)}}function u(o){o.done?e(o.value):r(o.value).then(l,s)}u((n=n.apply(c,i||[])).next())})};function h(){return v(this,void 0,void 0,function*(){try{const i=yield(yield fetch("https://u05-wbsp.onrender.com/api/manufacturer/index")).json();return console.log(i),i.data}catch(c){return console.error("Couldnt get the manufacturers",c),[]}})}var p=function(c,i,t,n){function r(e){return e instanceof t?e:new t(function(d){d(e)})}return new(t||(t=Promise))(function(e,d){function l(o){try{u(n.next(o))}catch(a){d(a)}}function s(o){try{u(n.throw(o))}catch(a){d(a)}}function u(o){o.done?e(o.value):r(o.value).then(l,s)}u((n=n.apply(c,i||[])).next())})};function b(){return p(this,void 0,void 0,function*(){const c=document.getElementById("form-container");if(!c)return;c.innerHTML=`<h2>Lägg till ny disc </h2>
            <form id = "add-disc-form" >
                
                <label for="manufacturer">Tillverkare</label>
                <select id="manufacturer" name="manufacturer" required>
                    <option value="" disabled selected>Välj tillverkare</option> 


                <label for= "title" > Titel: </label>
                <input type = "text" id = "title" name = "title" required >

                <label for="type">Typ:</label>
                <select id="type" name="type" required>
                    <option value="Distance Driver">Distance Driver</option>
                    <option value="Driver">Driver</option>
                    <option value="Mid-Range">Mid-Range</option>
                    <option value="Putter">Putter</option>
                </select>

                <label for= "speed"> Speed: </label>
                <input type = "number" id = "speed" name = "speed" required>

                <label for= "turn"> turn: </label>
                <input type = "number" id = "turn" name = "turn" required>

                <label for= "fade"> fade: </label>
                <input type = "number" id = "fade" name = "fade" required>

                <label for= "glide"> glide: </label>
                <input type = "number" id = "glide" name = "glide" required>

                <button type="submit"> Spara disc </button>
            </form>`;const i=document.getElementById("add-disc-form"),t=document.getElementById("manufacturer");(yield h()).forEach(r=>{const e=document.createElement("option");e.value=r._id,e.textContent=r.name,t.appendChild(e)}),i.addEventListener("submit",r=>p(this,void 0,void 0,function*(){r.preventDefault();const e={title:document.getElementById("title").value,type:document.getElementById("type").value,speed:parseInt(document.getElementById("speed").value),turn:parseInt(document.getElementById("turn").value),fade:parseInt(document.getElementById("fade").value),glide:parseInt(document.getElementById("glide").value),manufacturer:document.getElementById("manufacturer").value};(yield fetch("https://u05-wbsp.onrender.com/api/discs/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).ok?(console.log("Disc skapades!"),i.reset()):console.error("Misslyckades att skapa disc")}))})}var g=function(c,i,t,n){function r(e){return e instanceof t?e:new t(function(d){d(e)})}return new(t||(t=Promise))(function(e,d){function l(o){try{u(n.next(o))}catch(a){d(a)}}function s(o){try{u(n.throw(o))}catch(a){d(a)}}function u(o){o.done?e(o.value):r(o.value).then(l,s)}u((n=n.apply(c,i||[])).next())})};function m(){return g(this,arguments,void 0,function*(c=""){try{const i=c?`https://u05-wbsp.onrender.com/api/discs/index?search=${encodeURIComponent(c)}`:"https://u05-wbsp.onrender.com/api/discs/index",n=yield(yield fetch(i)).json();return console.log(n),n.data}catch(i){return console.error("Couldnt get the discs",i),[]}})}var y=function(c,i,t,n){function r(e){return e instanceof t?e:new t(function(d){d(e)})}return new(t||(t=Promise))(function(e,d){function l(o){try{u(n.next(o))}catch(a){d(a)}}function s(o){try{u(n.throw(o))}catch(a){d(a)}}function u(o){o.done?e(o.value):r(o.value).then(l,s)}u((n=n.apply(c,i||[])).next())})};function w(){return y(this,void 0,void 0,function*(){const c=document.getElementById("search"),i=document.getElementById("disc-list");if(!c||!i)return;const t=yield m();f(t,i),c.addEventListener("input",()=>y(this,void 0,void 0,function*(){const n=c.value.trim();if(n==="")f(t,i);else{const r=yield m(n);f(r,i)}}))})}function f(c,i){if(i.innerHTML="",c.length===0){i.innerHTML="<li>Inga träffar på sökningen</li>";return}c.forEach(t=>{const n=document.createElement("li");n.textContent=`${t.title} || type: ${t.type} || fade: ${t.fade} || turn: ${t.turn} || glide: ${t.glide} || speed: ${t.speed}`,i.appendChild(n)})}function E(){h().then(c=>{const i=document.getElementById("manufacturer-list");i&&(i.innerHTML="",c.forEach(t=>{const n=document.createElement("li");n.textContent=`name: ${t.name} || country: ${t.country}`,i.appendChild(n)}))})}document.addEventListener("DOMContentLoaded",()=>{w(),E(),b()});
