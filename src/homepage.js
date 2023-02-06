export default function homepageGen () {
    const content = document.getElementById("content");

    const homepage = document.createElement("homepage");
    homepage.id = "homepage";
    content.appendChild(homepage);
    
    const titleText = document.createElement("titleText");
    titleText.id = "titleText";
    homepage.appendChild(titleText);
    titleText.textContent = "Diane's Dessert Dungeon"
    
    const description = document.createElement("description");
    description.id = "description";
    description.classList.add("homepageDesc");
    homepage.appendChild(description);
    description.textContent = "Diane's distributes despondent desserts. Patrons prefer pain; Diane delivers."

    const imageHolder = document.createElement("imageHolder");
    imageHolder.id = "imageHolder";
    homepage.appendChild(imageHolder)

    const img3 = document.createElement("img");
    img3.src = "./images/dish2.jpg";
    img3.id = "dish2"
    img3.classList.add("homepagePics")
    imageHolder.appendChild(img3);
    
    const img = document.createElement("img");
    img.src = "./images/restaurant.jpg";
    img.id = "restaurant"
    img.classList.add("homepagePics");
    imageHolder.appendChild(img);

    const img2 = document.createElement("img");
    img2.src = "./images/dish1.webp";
    img2.id = "dish1";
    img2.classList.add("homepagePics");
    imageHolder.appendChild(img2);
    
    const description2 = document.createElement("description2");
    description2.id = "description2";
    description2.classList.add("homepageDesc");
    homepage.appendChild(description2);
    description2.textContent = "Try the tasteless tartufo, or our ornery oreo oatmeal..."
};