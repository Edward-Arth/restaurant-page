import homepageGen from './homepage.js';

const content = document.getElementById("content");

const buttons = document.createElement("div")
buttons.id = "buttons";
content.appendChild(buttons);

const menu = document.createElement("button");
menu.id = "menu";
menu.classList.add("myButtons");
menu.textContent = "Menu";
buttons.appendChild(menu);

const contact = document.createElement("button");
contact.id = "contact";
contact.classList.add("myButtons");
contact.textContent = "Contact";
buttons.appendChild(contact);

homepageGen ();