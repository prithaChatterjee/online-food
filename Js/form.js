$(document).ready(function () {
    const $loginForm = $(`#login form:first-child`)
    const $loginFormInput = $(`#login form:first-child input`)
    $loginFormInput.each(function () {
        $(this).on("change", function (e) {
            $(this).val(e.target.value)
        })
    })

    $loginForm.submit(function (event) {
        event.preventDefault();
        $(this).find("input").each(function () {
            console.log($(this).val())
        })
        // $loginFormInput.each(function () {
        //     console.log($(this).val())
        // })
    })

    $.get("Public/data.txt", function( data ) {
        console.log(data)
        alert( "Load was performed." );
      });


    $.ajax({
        url: "Public/data.txt",
        dataType: "text"
      }).done(function(result) {
        console.log(result)
      });
})