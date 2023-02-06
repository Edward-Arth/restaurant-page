export default function contactGen () {
    const content = document.getElementById("content");

    const contactBox = document.createElement("div");
    contactBox.id = "contactBox";
    content.appendChild(contactBox);

    const backContainer = document.createElement("div");
    backContainer.id = "backContainer";
    contactBox.appendChild(backContainer);

    const back = document.createElement("button");
    back.id = "backButt";
    back.textContent = "Back";
    backContainer.appendChild(back);
    back.addEventListener('click', () => {location.reload()});

    const contactText = document.createElement("div");
    contactText.id = "contactText";
    contactBox.appendChild(contactText);
    contactText.textContent = "Don't"
}