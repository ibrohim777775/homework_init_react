"use strict";
//
// function showDisplay() {
//     document.getElementById("for_more-items").style.display="block";
//     document.getElementById("for_border").style.display="block";
//     document.querySelector('body').onclick= removeDisplay();
// }
// function removeDisplay() {
//     document.getElementById("for_more-items").style.display="none";
//     document.getElementById("for_border").style.display="none";
// }

// import ProgressBar from "progressbar.js";

$(document).ready(function () {
    // Show hide popover
    $(".for_more").click(function () {
        $(this).find(".for_more-items").slideToggle();
    });
});
$(document).on("click", function (event) {
    let $trigger = $("header");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $(".for_more-items").slideUp();
    }
});


// noinspection JSFunctionExpressionToArrowFunction
(function ($) {
    $(function () {

        $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);
// let line = new ProgressBar.Line('#progresbar');
//
// let bar;
// bar = new ProgressBar.Circle('#progresbar', {
//     strokeWidth: 6,
//     easing: 'easeInOut',
//     duration: 1400,
//     color: '#FFEA82',
//     trailColor: '#eee',
//     trailWidth: 1,
//     svgStyle: null
// });



document.querySelector('.radial-progress').setAttribute('data-progress', 68);

// function for search
// $(document)(function () {
//     $("#myInput").on("keyup", function () {
//         var value = $(this).val().toLowerCase();
//         $(".suggestions__links").filter(function () {
//             $(this).css('display', 'none')($(this).text().toLowerCase().indexOf(value) > -1)
//         });
//     });
// });
// let searchText = document.getElementById('myInput').innerText;
// let searchKeys = document.getElementsByClassName('suggestions_items').innerText;
// console.log(searchText);
// console.log(searchKeys);
// function search() {

// }


