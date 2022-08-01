function createOtherOptions(array) {
    const selectArticle = document.querySelector("#collection").parentElement
    const createArticle = document.createElement("article")
    createArticle.classList.add("collections")
    const createDiv = document.createElement("div")
    createDiv.classList.add("container")
    const createHeader = document.createElement("header")
    createHeader.innerHTML = `<h1>Explore other options for you here</h1>`
    const createSection = document.createElement("section")
    createSection.classList.add("more-option")
    array.forEach(element => {
        const createSectionTab = document.createElement("section")
        createSectionTab.classList.add("tab")
        const createSectionTabHeader = document.createElement("header")
        createSectionTabHeader.classList.add("tab-header")
        createSectionTabHeader.innerHTML = `
            <h3>${element.heading}</h3>
            <i class="fa-solid fa-angle-down"></i>`
        const createSectionForDetails = document.createElement("section")
        createSectionForDetails.classList.add("hide")
        const ulForDetails = document.createElement("ul")
        ulForDetails.classList.add("option-list")
        createSectionForDetails.append(ulForDetails)
        element.list.forEach(result => {
            const liForDetails = document.createElement("li")
            liForDetails.innerHTML = `<span class="dots"></span>
            <a href="">${result.name}</a>`
            ulForDetails.append(liForDetails)
        })
        createSectionTab.append(createSectionTabHeader)
        createSectionTab.append(createSectionForDetails)
        createSection.append(createSectionTab)
    });
    createDiv.append(createHeader)
    createDiv.append(createSection)
    createArticle.append(createDiv)
    selectArticle.after(createArticle)


    const tabHeader = document.querySelectorAll(".tab-header")
    tabHeader.forEach((element, index) => {
        tabHeader[index].addEventListener("click", () => {
            let arrowStyle = element.lastChild.classList
            arrowStyle.contains("fa-angle-down") ? arrowStyle.replace("fa-angle-down", "fa-angle-up") :
                arrowStyle.replace("fa-angle-up", "fa-angle-down")
            let formatStyle = element.closest("section.tab").children[1].classList
            formatStyle.contains("show") ? formatStyle.replace("show", "hide") :
                formatStyle.replace("hide", "show")
        })
    });
}

window.addEventListener("load", () => {
    createOtherOptions([
        {
            heading: `Order online`, list: [{
                name: `Beverages food near me`, link: `./Public/burger.jpg`,
            },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg`, },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg`, },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg`, },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            ]
        },
    {
        heading: `Party`, list: [{ name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg`, },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg`, },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg`, },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },]
    },
    {
        heading: `Dinning`, list: [{ name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg`, },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg`, },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg`, },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },]
    },
    {
        heading: `Party`, list: [{ name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg`, },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg`, },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg`, },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },
            { name: `Beverages food near me`, link: `./Public/burger.jpg` },]
    },
    ])
})