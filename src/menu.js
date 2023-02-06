export default function menuGen () {
    const content = document.getElementById("content");

    const menu = document.createElement("div");
    menu.id = "menuContainer";
    content.appendChild(menu);

    const backContainer = document.createElement("div");
    backContainer.id = "backContainer";
    menu.appendChild(backContainer);

    const back = document.createElement("button");
    back.id = "backButt";
    back.textContent = "Back";
    backContainer.appendChild(back);
    back.addEventListener('click', () => {location.reload()});
    
    const menuTitle = document.createElement("div");
    menuTitle.id = "menuTitle";
    menu.appendChild(menuTitle);
    menuTitle.textContent = "Menu"

    const menuItem1 = document.createElement("div");
    menuItem1.id = "menuItem1"
    menuItem1.classList.add("menuItems");
    menu.appendChild(menuItem1);

    const menuPic1 = document.createElement("img");
    menuPic1.src = "./images/dish2.jpg"
    menuPic1.id = "menuPic1";
    menuPic1.classList.add("menuPics")
    menuItem1.appendChild(menuPic1);

    const menuDesc1 = document.createElement("div");
    menuDesc1.id = "menuDesc1";
    menuDesc1.classList.add("menuDescs");
    menuDesc1.textContent = "Fingerling Fingers";
    menuItem1.appendChild(menuDesc1);

    const menuItem2 = document.createElement("div");
    menuItem2.id = "menuItem2"
    menuItem2.classList.add("menuItems");
    menu.appendChild(menuItem2);

    const menuPic2 = document.createElement("img");
    menuPic2.src = "./images/dish1.webp"
    menuPic2.id = "menuPic2";
    menuPic2.classList.add("menuPics")
    menuItem2.appendChild(menuPic2);

    const menuDesc2 = document.createElement("div");
    menuDesc2.id = "menuDesc2";
    menuDesc2.classList.add("menuDescs");
    menuDesc2.textContent = "Catastrophic Cranial Cake";
    menuItem2.appendChild(menuDesc2);

    const menuItem3 = document.createElement("div");
    menuItem3.id = "menuItem3"
    menuItem3.classList.add("menuItems");
    menu.appendChild(menuItem3);

    const menuPic3 = document.createElement("img");
    menuPic3.src = "./images/dish3.jpeg"
    menuPic3.id = "menuPic3";
    menuPic3.classList.add("menuPics")
    menuItem3.appendChild(menuPic3);

    const menuDesc3 = document.createElement("div");
    menuDesc3.id = "menuDesc3";
    menuDesc3.classList.add("menuDescs");
    menuDesc3.textContent = "Tasteless Tartufo";
    menuItem3.appendChild(menuDesc3);

    const oatmeal = document.createElement("div");
    oatmeal.id = "oatmealText";
    oatmeal.textContent = "We lied about the oreo oatmeal or whatever. Diane sincerely hopes that you're disappointed."
    menu.appendChild(oatmeal);
};