
function createCollection(array) {
    const selectArticle = document.querySelector("#collection")
    const createSection = document.createElement("section")
    createSection.classList.add("collection-bg")
    array.forEach(element => {
        const createCardBg = document.createElement("div")
        createCardBg.classList.add("resturent-link-bg")
        createCardBg.innerHTML = `
                <a href=${element.image} class="resturent-link">
                        <figure>
                            <img src=${element.image} width="100%" height="100%" alt="">
                            <figcaption>
                                <h3>${element.name}</h3>
                                <p>26 places <i class="fa-solid fa-caret-right"></i></p>
                            </figcaption>
                        </figure>
                    </a>
        `
        createSection.appendChild(createCardBg)
    });
    selectArticle.appendChild(createSection)
}

window.addEventListener("load", () => {
    createCollection([
        { image: `./Public/burger.jpg`, link: `./Public/burger.jpg`, name: `Order online` },
        { image: `./Public/party.jpg`, link: `./Public/party.jpg`, name: `Party` },
        { image: `./Public/dinning.jpg`, link: `./Public/dinning.jpg`, name: `Dinning` },
        { image: `./Public/chicken.jpg`, link: `./Public/chicken.jpg`, name: `Party` },
    ])
})