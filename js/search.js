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





// functions for real time search


//  function for date format
function dateToString(date) {
    let yangi = new Date(date).toDateString().slice(4);
    return yangi;
};

// funtion for return add movie card items

function searchItem(img, title, date, overview){
    
    let element = ` <div class="search__items">
    <div class="search__img">
    <a href="movieinfo.html">
    <img class="movie_image" src="https://image.tmdb.org/t/p/w94_and_h141_bestv2/${img}" width="94px" height="141px"
    alt="movies image">
    </a>
    </div>
    <div class="movies__info">
    <a href="movieinfo.html">
    <h3 class="movie__title">${title}</h3>
    </a>
    <p class="movies__date">${dateToString(date)}</p>
    <p class="movies__text">
    ${overview}
    </p>
    </div>
    </div>`;
    return element;
}



const api_key = "d9835bf16b133db7ae35ff2b1e08b533";

let keyForSearch = JSON.parse(localStorage.getItem('keyforsearch'));
// text for search input place holder
let inputSearch = document.querySelector('.search__text');
inputSearch.placeholder = keyForSearch;
console.log(keyForSearch);

let urlToSearchMovie = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${keyForSearch}`;

let urlToSearchTvShows = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&language=en-US&page=1&query=${keyForSearch}&include_adult=false`;



fetch(urlToSearchTvShows)
    .then(response => response.json())
    .then(function (res){
        let movieCard = document.querySelector('.search__results');
        for (let i=0; i<res.results.length; i++){
            let elem = searchItem(res.results[i].poster_path, res.results[i].name, res.results[i].first_air_date, res.results[i].overview)
            movieCard.innerHTML += elem;
        }
        console.log(res.results);
    });