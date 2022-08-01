window.addEventListener("load", function () {
    const tabDetails = document.querySelectorAll(".everyting-about-resturents-header>ul.tab-header-vertical li a.tab-link")
    tabDetails.forEach((result, index) => {
        const aElement = result
        aElement.addEventListener("click", event => {
            const elementId = result.getAttributeNode("href").value
            result.parentElement.classList.add("active")
            tabDetails.forEach(tabs => {
                const tabParent = tabs.parentElement.classList
                tabs.getAttributeNode("href").value === elementId ?
                    tabParent.add("active") : tabParent.remove("active")
            })
            const allTabs = this.document.querySelectorAll(".tab-details")
            allTabs.forEach(tabDetails => {
                const shown = tabDetails.classList.contains("show")
                const hidden = tabDetails.classList.contains("hide")
                if (tabDetails.getAttributeNode("id").value === elementId) {
                    hidden ? tabDetails.classList.replace("hide", "show") :
                        document.getElementById(elementId).classList.add("show")
                } else {
                    shown ? tabDetails.classList.replace("show", "hide") :
                        tabDetails.classList.add("hide")
                }
            })
        }
        )
    })
})
