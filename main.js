(()=>{"use strict";const e=document.getElementById("content");function t(){e.innerHTML=""}const n=document.createElement("div");n.id="buttons",e.appendChild(n);const d=document.createElement("button");d.id="menu",d.classList.add("myButtons"),d.textContent="Menu",n.appendChild(d),d.addEventListener("click",(()=>{t(),function(){const e=document.getElementById("content"),t=document.createElement("div");t.id="menuContainer",e.appendChild(t);const n=document.createElement("div");n.id="backContainer",t.appendChild(n);const d=document.createElement("button");d.id="backButt",d.textContent="Back",n.appendChild(d),d.addEventListener("click",(()=>{location.reload()}));const c=document.createElement("div");c.id="menuTitle",t.appendChild(c),c.textContent="Menu";const i=document.createElement("div");i.id="menuItem1",i.classList.add("menuItems"),t.appendChild(i);const s=document.createElement("img");s.src="./images/dish2.jpg",s.id="menuPic1",s.classList.add("menuPics"),i.appendChild(s);const a=document.createElement("div");a.id="menuDesc1",a.classList.add("menuDescs"),a.textContent="Fingerling Fingers",i.appendChild(a);const o=document.createElement("div");o.id="menuItem2",o.classList.add("menuItems"),t.appendChild(o);const m=document.createElement("img");m.src="./images/dish1.webp",m.id="menuPic2",m.classList.add("menuPics"),o.appendChild(m);const l=document.createElement("div");l.id="menuDesc2",l.classList.add("menuDescs"),l.textContent="Catastrophic Cranial Cake",o.appendChild(l);const p=document.createElement("div");p.id="menuItem3",p.classList.add("menuItems"),t.appendChild(p);const r=document.createElement("img");r.src="./images/dish3.jpeg",r.id="menuPic3",r.classList.add("menuPics"),p.appendChild(r);const u=document.createElement("div");u.id="menuDesc3",u.classList.add("menuDescs"),u.textContent="Tasteless Tartufo",p.appendChild(u);const h=document.createElement("div");h.id="oatmealText",h.textContent="We lied about the oreo oatmeal or whatever. Diane sincerely hopes that you're disappointed.",t.appendChild(h)}()}));const c=document.createElement("button");c.id="contact",c.classList.add("myButtons"),c.textContent="Contact Us",n.appendChild(c),c.addEventListener("click",(()=>{t(),function(){const e=document.getElementById("content"),t=document.createElement("div");t.id="contactBox",e.appendChild(t);const n=document.createElement("div");n.id="backContainer",t.appendChild(n);const d=document.createElement("button");d.id="backButt",d.textContent="Back",n.appendChild(d),d.addEventListener("click",(()=>{location.reload()}));const c=document.createElement("div");c.id="contactText",t.appendChild(c),c.textContent="Don't"}()})),function(){const e=document.getElementById("content"),t=document.createElement("homepage");t.id="homepage",e.appendChild(t);const n=document.createElement("titleText");n.id="titleText",t.appendChild(n),n.textContent="Diane's Dessert Dungeon";const d=document.createElement("description");d.id="description",d.classList.add("homepageDesc"),t.appendChild(d),d.textContent="Diane's distributes despondent desserts. Patrons prefer pain; Diane delivers.";const c=document.createElement("imageHolder");c.id="imageHolder",t.appendChild(c);const i=document.createElement("img");i.src="./images/dish2.jpg",i.id="dish2",i.classList.add("homepagePics"),c.appendChild(i);const s=document.createElement("img");s.src="./images/restaurant.jpg",s.id="restaurant",s.classList.add("homepagePics"),c.appendChild(s);const a=document.createElement("img");a.src="./images/dish1.webp",a.id="dish1",a.classList.add("homepagePics"),c.appendChild(a);const o=document.createElement("description2");o.id="description2",o.classList.add("homepageDesc"),t.appendChild(o),o.textContent="Try the tasteless tartufo, or our ornery oreo oatmeal..."}()})();