function createResturents(arrayofItems) {
    const countryResturents = document.querySelector("#resturents-in-country")
    const createResturents = document.createElement("section")
    const createAllResturentList = document.createElement("ul")
    createAllResturentList.classList.add("resturents")
    arrayofItems.forEach(element => {
        const createResturent = document.createElement("li")
        const createResturentLink = document.createElement("a")
        createResturentLink.setAttribute("href", element.link)
        const createResturentLinkbox = document.createElement("div")
        createResturentLinkbox.classList.add("resturent")
        createResturentLinkbox.innerHTML = `<span>${element.name} Resturents</span>
        <i class="fa-solid fa-angle-right"></i>`
        createResturentLink.appendChild(createResturentLinkbox)
        createResturent.appendChild(createResturentLink)
        createAllResturentList.appendChild(createResturent)
    });
    createResturents.appendChild(createAllResturentList)
    countryResturents.appendChild(createResturents)
}
function createCategory(array) {
    const createArticle = document.createElement("article")
    createArticle.classList.add("menu")
    const createcontainer = document.createElement("div")
    createcontainer.classList.add("container")
    createArticle.appendChild(createcontainer)
    const createCardBg = document.createElement("div")
    createCardBg.classList.add("card-bg")
    createcontainer.appendChild(createCardBg)
    array.forEach(element => {
        const createCategoryLink = document.createElement("a")
        createCategoryLink.setAttribute("href", element.link)
        createCategoryLink.classList.add("categories")
        createCategoryLink.innerHTML = `<div class="card">
        <div class="card-body">
            <img src=${element.image} width="100%" height="100%" alt="">
        </div>
        <div class="card-footer">
            ${element.name}
        </div>
        </div>`
        createCardBg.appendChild(createCategoryLink)
    });
    document.querySelector("#resturents-in-country").parentElement.after(createArticle)
}

window.addEventListener("load", () => {
    createResturents([
        { name: "Chir", link: "./resturents.html", },
        { name: "Agra", link: "./resturents.html", },
        { name: "Agra", link: "./resturents.html", },
        { name: "Agra", link: "./resturents.html", },
        { name: "Agra", link: "./resturents.html", },
        { name: "Agra", link: "./resturents.html", },
        { name: "Chir", link: "./resturents.html", },
        { name: "Agra", link: "./resturents.html", },
        { name: "Agra", link: "./resturents.html", },
        { name: "Agra", link: "./resturents.html", },
        { name: "Agra", link: "./resturents.html", },
        { name: "Agra", link: "./resturents.html", },
        { name: "Chir", link: "./resturents.html", },
        { name: "Agra", link: "./resturents.html", },
        { name: "Agra", link: "./resturents.html", },
        { name: "Agra", link: "./resturents.html", },
        { name: "Agra", link: "./resturents.html", },
    ])
    createCategory([
        { image: `./Public/burger.jpg`, link: `./Public/burger.jpg`, name: `Order online` },
        { image: `./Public/party.jpg`, link: `./Public/party.jpg`, name: `Party` },
        { image: `./Public/dinning.jpg`, link: `./Public/dinning.jpg`, name: `Dinning` },
        { image: `./Public/chicken.jpg`, link: `./Public/chicken.jpg`, name: `Party` },
    ])
})