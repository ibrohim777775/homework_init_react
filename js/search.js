$(document).ready(function () {
    $("#myInput").on("keyup", function () {
        let value = $(this).val().toLowerCase();
        $("#myDIV *").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 15) {
            $("search").css("transition", "all .4s");
            $(".search").css("margin-top", "-65px");
        } else {
            $("search").css("transition", "all .4s");
            $(".search").css("margin-top", "0");

        }
    });
});

// $(document).ready(function () {
//     $(window).scroll(function () {
//         if ($(document).scrollTop() > 25) {
//             $("header").toggle;
//         }


//     });
// });