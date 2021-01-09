$(document).ready(function () {
    $("#myInput").on("keyup", function () {
        let value = $(this).val().toLowerCase();
        $("#myDIV *").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

