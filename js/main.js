"use strict";

import MovieCard from "./MovieCard.js";
let forLocalStorage = new MovieCard;
// forLocalStorage.getLocalStorage('name', 'ali');
// forLocalStorage.getLocalStorage('afdasd', 'vali');
function bg() {
    document.querySelector('main').style.background = 'green';
    
}


$(document).ready(function() {
    // Show hide popover
    $(".for_more").click(function() {
        $(this).find(".for_more-items").slideToggle();
    });
});
$(document).on("click", function(event) {
    let $trigger = $("header");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $(".for_more-items").slideUp();
    }
});


// noinspection JSFunctionExpressionToArrowFunction
(function($) {
    $(function() {

        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);


//  function for date format
function dateToString(date) {
    let yangi = new Date(date).toDateString().slice(4);
    return yangi;
};



//  added popular movies from API
const movies = "https://api.themoviedb.org/3/movie/popular?api_key=d9835bf16b133db7ae35ff2b1e08b533&language=en-US&page=1";

let popularMovie = new MovieCard(movies, '.pop__movies' );
popularMovie.getData('element');


// added popular on TV from API 
const popularOnTv = "https://api.themoviedb.org/3/tv/popular?api_key=d9835bf16b133db7ae35ff2b1e08b533&language=en-US&page=1";

let popularTv = new MovieCard(popularOnTv, '.pop__Tv');
popularTv.getData('popularOnTv');
// popularTv.sayHello();



// Added Top Rated movies from API   
const topRated = "https://api.themoviedb.org/3/movie/top_rated?api_key=d9835bf16b133db7ae35ff2b1e08b533&language=en-US&page=1";

let topMovies = new MovieCard(topRated, '.top__rated');
topMovies.getData('element');



// Added now playing movies from API 
const latest = "https://api.themoviedb.org/3/movie/now_playing?api_key=d9835bf16b133db7ae35ff2b1e08b533&language=en-US&page=1";


let nowPlayingMovies = new MovieCard(latest, '.now__playing');
nowPlayingMovies.getData('element');






window.toLocal = (key, text) => {
    let value = JSON.stringify(text);
    localStorage.setItem(key, value);
}



// Addind todat trend movies from API

const trandThisDay = 'https://api.themoviedb.org/3/trending/movie/day?api_key=d9835bf16b133db7ae35ff2b1e08b533';

let trandThisDayMovies = new MovieCard(trandThisDay, '.trand__today');
trandThisDayMovies.getData('element');

// Adding this week trend movies from API

const trandThisWeek = 'https://api.themoviedb.org/3/trending/movie/week?api_key=d9835bf16b133db7ae35ff2b1e08b533';


let trandMoviesThisWeek = new MovieCard(trandThisWeek, '.trand__week');
trandMoviesThisWeek.getData('element');

function salom(name) {
    console.log('salom', name)
    
}

