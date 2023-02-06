import homepageGen from './homepage.js';
import menuGen from './menu.js';

const content = document.getElementById("content");

function wipePage() {
    content.innerHTML = "";
};

const buttons = document.createElement("div")
buttons.id = "buttons";
content.appendChild(buttons);

const menu = document.createElement("button");
menu.id = "menu";
menu.classList.add("myButtons");
menu.textContent = "Menu";
buttons.appendChild(menu);

menu.addEventListener('click', () => {
    wipePage ();
    menuGen ();
});

const contact = document.createElement("button");
contact.id = "contact";
contact.classList.add("myButtons");
contact.textContent = "Contact Us";
buttons.appendChild(contact);

homepageGen ();