(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=o(i);fetch(i.href,s)}})();function L(){return`<main>
      <div class="container">
        <div class="about">
          <section>
            <h3>Опыт работы 1 год</h3>
            <ul class="list-group">
              <li class="list-group-item">
                Разработка с использованием библиотек Material UI, React/TypeScript
                Redux
              </li>
              <li class="list-group-item">
                Активное участие в процессе рефакторинга и ревью кода, обнаружение и
                исправление потенциальных проблем
              </li>
              <li class="list-group-item">
                Участие в командной разработке, эффективное взаимодействие с другими
                разработчиками
              </li>
              <li class="list-group-item">
                Реализация маршрутизации в приложении с использованием React Router
              </li>
            </ul>
          </section>
          <section>
            <h3>Ключевые навыки</h3>
            <div class="skills">
              <ul class="list-group">
                <li class="list-group-item">TypeScript</li>
                <li class="list-group-item">React</li>
                <li class="list-group-item">Redux</li>
                <li class="list-group-item">Jest</li>
              </ul>
              <ul class="list-group">
                <li class="list-group-item">Material UI</li>
                <li class="list-group-item">JavaScript</li>
                <li class="list-group-item">CSS</li>
                <li class="list-group-item">HTML</li>
              </ul>
            </div>
          </section>
          <section class="final">
            <h3>Обо мне</h3>
            <p class="greetings">
              Спасибо за интерес к резюме! Мне нравится учиться новым навыкам и
              разбираться в сложных вещах, делая их простыми для понимания. А потом
              делиться с другими!
            </p>
          </section>
        </div>
        <aside>
          <img
            src="https://i.ibb.co/N9CxLw3/photo-2024-04-30-15-11-06.jpg"
            alt="avatar"
            class="avatar"
          />
          <h4>Александр Либаур</h4>
          <h5>Frontend-разработчик</h5>
          <ul class="contacts">
            <li>
              <a href="https://t.me/AlexanderLibaur" target="_blank"
                ><img src="https://i.ibb.co/7pLGL81/telegram.png" alt="telegram"
              /></a>
            </li>
            <li>
              <a href="https://github.com/Libaur" target="_blank"
                ><img src="https://i.ibb.co/1btJmQF/github.png" alt="github"
              /></a>
            </li>
            <li>
              <a
                href="https://nn.hh.ru/resume/291e7316ff0bfd5de70039ed1f4f334c737048"
                target="_blank"
                ><img src="https://i.ibb.co/bdbv3tP/hh.png" alt="hh"
              /></a>
            </li>
          </ul>
        </aside>
      </div>
    </main>`}function b(){return`<div class="wrapper">
    <div class="container">
      <div id="map"><div></div></div>
    </div>
  </div>`}function y(){return`<div class="wrapper">
    <div class="container">
      <div class="timer">
        <section class="time">
          <h5>Timer</h5>
          <p id="count"></p>
        </section>
      </div>
    </div>
  </div>`}const l={milliseconds:1e3*60*60,seconds:1e3*60},a={profile:"/web-bee-internship-01/",map:"/web-bee-internship-01/map",time:"/web-bee-internship-01/time"},d={profile:"Profile",map:"Map",time:"Time"},m={profile:L(),map:b(),time:y()},n={active:"active",activeLink:"activeLink",navLink:".nav-link",loader:"lds-circle"},h={hint:"Нижний Новгород",balloon:"Город на Волге"},g={paths:{[a.profile]:[m.profile],[a.map]:[m.map],[a.time]:[m.time]},titles:{[a.profile]:[d.profile],[a.map]:[d.map],[a.time]:[d.time]}};function S(t){document.querySelectorAll(n.navLink).forEach(e=>{e.classList.remove(n.active)}),document.getElementById(t).classList.add(n.active)}function T(t){const e=document.getElementById(t);sessionStorage.setItem(n.activeLink,e.href)}function k(){const t=sessionStorage.getItem(n.activeLink);t?document.querySelectorAll(n.navLink).forEach(e=>{e.href===t&&e.classList.add(n.active)}):document.getElementById("Profile").classList.add(n.active)}function I(){const t=document.getElementById("map");t&&t.classList.add(n.loader),ymaps.ready(()=>{t.classList.remove(n.loader);const e=[56.326797,44.005986],o=new ymaps.Map("map",{center:e,zoom:10}),r=new ymaps.Placemark(e,{hintContent:h.hint,balloonContent:h.balloon});o.geoObjects.add(r)})}addEventListener("DOMContentLoaded",()=>{E(),u()});document.querySelectorAll(n.navLink).forEach(t=>{t.addEventListener("click",P)});onpopstate=t=>{t.preventDefault(),u()};function E(){location.pathname==="/"&&history.replaceState({},"",a.profile)}function M(t,e){document.getElementById("app").innerHTML=t,document.title=e}function u(){const t=location.pathname,[e]=g.paths[t],o=g.titles[t];M(e,o),S(o),T(o),k(),t===a.map&&I()}function P(t){t.preventDefault();const e=t.target;history.pushState({},"",e.href),u()}let f;addEventListener("load",()=>{w()});function w(){f=Date.now(),A(),requestAnimationFrame(v)}function A(){const t=sessionStorage.getItem("timerValue");t&&(f-=parseInt(t))}function v(){const t=Date.now()-f,e=document.getElementById("count");e&&(e.textContent=C(t)),O(t),requestAnimationFrame(v)}function C(t){const e=Math.floor(t/l.milliseconds),o=Math.floor(t%l.milliseconds/l.seconds),r=Math.floor(t%l.seconds/1e3);return`${p(e)}:${p(o)}:${p(r)}`}const p=t=>t.toString().padStart(2,"0"),O=t=>{sessionStorage.setItem("timerValue",t.toString())};
