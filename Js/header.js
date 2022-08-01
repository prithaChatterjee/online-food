window.addEventListener("load", function () {
    const loginDlg = document.getElementById("login")
    const signupDlg = document.getElementById("signup")
    // event handlers to show the dialog as non-modal and modal
    document.getElementById("loginButton").addEventListener("click", function () {
        // Show the dialog using the non-modal API
        loginDlg.showModal()
    })

    document.getElementById("signinbutton").addEventListener("click", function () {
        // Show the dialog using the non-modal API
        signupDlg.showModal()
    })

    document.querySelectorAll(".close").forEach(result => {
        result.addEventListener("click", function (event) {
            // Hide the dialog
            event.target.closest("dialog").close()
        })
    })

    document.querySelector("#go-to-signup").addEventListener("click", function (event) {
        // Show the dialog using the non-modal API
        // Hide the dialog
        loginDlg.close()
        signupDlg.showModal()
    })

    document.querySelector("#go-to-login").addEventListener("click", function (event) {
        // Show the dialog using the non-modal API
        // Hide the dialog
        loginDlg.showModal()
        signupDlg.close()
    })

})

$(document).ready(() => {
    "use strict"
    console.log($("header#upper-most"))
})