(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=a(i);fetch(i.href,s)}})();const L=`<main>
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
    </main>`,b=`<div class="wrapper">
    <div class="container">
      <div id="map"><div></div></div>
    </div>
  </div>`,y=`<div class="wrapper">
    <div class="container">
      <div class="timer">
        <section class="time">
          <h5>Timer</h5>
          <p id="count"></p>
        </section>
      </div>
    </div>
  </div>`,l={milliseconds:1e3*60*60,seconds:1e3*60},n={profile:"/web-bee-internship-01/",map:"/web-bee-internship-01/map",time:"/web-bee-internship-01/time"},d={profile:"Profile",map:"Map",time:"Time"},m={profile:L,map:b,time:y},o={active:"active",activeLink:"activeLink",navLink:".nav-link",loader:"lds-circle"},h={hint:"Нижний Новгород",balloon:"Город на Волге"};function S(t){document.querySelectorAll(o.navLink).forEach(e=>{e.classList.remove(o.active)}),document.getElementById(t).classList.add(o.active)}function T(t){const e=document.getElementById(t);sessionStorage.setItem(o.activeLink,e.href)}function k(){const t=sessionStorage.getItem(o.activeLink);t?document.querySelectorAll(o.navLink).forEach(e=>{e.href===t&&e.classList.add(o.active)}):document.getElementById("Profile").classList.add(o.active)}function I(){const t=document.getElementById("map");t&&t.classList.add(o.loader),ymaps.ready(()=>{t.classList.remove(o.loader);const e=[56.326797,44.005986],a=new ymaps.Map("map",{center:e,zoom:10}),r=new ymaps.Placemark(e,{hintContent:h.hint,balloonContent:h.balloon});a.geoObjects.add(r)})}const g={paths:{[n.profile]:[m.profile],[n.map]:[m.map],[n.time]:[m.time]},titles:{[n.profile]:[d.profile],[n.map]:[d.map],[n.time]:[d.time]}};addEventListener("DOMContentLoaded",()=>{E(),u()});document.querySelectorAll(o.navLink).forEach(t=>{t.addEventListener("click",P)});onpopstate=t=>{t.preventDefault(),u()};function E(){location.pathname==="/"&&history.replaceState({},"",n.profile)}function M(t,e){document.getElementById("app").innerHTML=t,document.title=e}function u(){const t=location.pathname,[e]=g.paths[t],a=g.titles[t];M(e,a),S(a),T(a),k(),t===n.map&&I()}function P(t){t.preventDefault();const e=t.target;history.pushState({},"",e.href),u()}let f;addEventListener("load",()=>{w()});function w(){f=Date.now(),A(),requestAnimationFrame(v)}function A(){const t=sessionStorage.getItem("timerValue");t&&(f-=parseInt(t))}function v(){const t=Date.now()-f,e=document.getElementById("count");e&&(e.textContent=C(t)),O(t),requestAnimationFrame(v)}function C(t){const e=Math.floor(t/l.milliseconds),a=Math.floor(t%l.milliseconds/l.seconds),r=Math.floor(t%l.seconds/1e3);return`${p(e)}:${p(a)}:${p(r)}`}const p=t=>t.toString().padStart(2,"0"),O=t=>{sessionStorage.setItem("timerValue",t.toString())};
