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

    // let name = title;
    // let date  = res.results[i].first_air_date;

    let over  = overview;
    let image   = img;
    let dateMovie = date;

    if (img === null){
        image = 'images/noimage.svg'}
        else{ 
            image = `https://image.tmdb.org/t/p/w94_and_h141_bestv2/${img}`
        };
    if (date === ''){
        dateMovie = ' '}
        else {
            dateMovie = dateToString(date);
        };
    
    if (overview === null){
        over = ' '
    }
        else{
            over = overview
        };
    
    let element = ` <div class="search__items">
    <div class="search__img">
    <a href="movieinfo.html">
    <img class="movie_image" src="${image}" width="94px" height="141px"
    alt="movies image">
    </a>
    </div>
    <div class="movies__info">
    <a href="movieinfo.html">
    <h3 class="movie__title">${title}</h3>
    </a>
    <p class="movies__date">${dateMovie}</p>
    <p class="movies__text">
    ${over}
    </p>
    </div>
    </div>`;
    return element;
}



const api_key = "d9835bf16b133db7ae35ff2b1e08b533"; 

// added key for search from url
let keyItem = location.search;
let keyForSearch = keyItem.slice(keyItem.indexOf('=')+1);



//key for search from index.html
// let keyitem = JSON.parse(localStorage.getItem('keyforsearch'));
// let keyForSearch = keyitem.replace(/ /g, '+'); 

// text for search input place holder
let inputSearch = document.querySelector('.search__text');
inputSearch.placeholder = keyForSearch;
console.log(keyForSearch);

//  API url for search from movies
let urlToSearchMovie = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&query=${keyForSearch}&include_adult=false`;


//  API url for search from Tv Shows
let urlToSearchTvShows = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&language=en-US&page=1&query=${keyForSearch}&include_adult=false`;

// key for search from this page
let keyForThis = document.querySelector('#myInput');
let newKey = '';


// for add value from search input to localstorage
// keyForThis.onkeyup = (e) =>{
//     let value = e.target.value.replace(/ /g, '+');
//     console.log(value);
//     newKey = value;
//     toLocal('newKey', value);
//     // localStorage.setItem('keyForSearch', value); 
// };

// function for add value to localstorage
// function toLocal(key, text) {
//     let value = JSON.stringify(text);
//     localStorage.setItem(key, value);
// };

// add value from localstorage
// let keyFromLocal = JSON.parse(localStorage.getItem('newKey'));

// if (keyFromLocal != null){
//     urlToSearchMovie = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&query=${keyFromLocal}&include_adult=false`;
//     inputSearch.placeholder = keyFromLocal;
// }
// else {
    
urlToSearchMovie = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&query=${keyForSearch}&include_adult=false`;
// };


fetch(urlToSearchMovie)
.then(response => response.json())
.then(function (res){
    console.log(res);
    let resultNumber = document.querySelector('.result__movie');
    resultNumber.innerText = res.total_results;
    console.log(resultNumber.innerText);
    let movieCard = document.querySelector('.search__results');
    // let urlimg = movieImage.src();
    for (let i=0; i<res.results.length; i++){
       
        let elem  = searchItem(res.results[i].poster_path, res.results[i].title, res.results[i].release_date, res.results[i].overview);
        
        movieCard.innerHTML += elem;
    }
});



// let movieImage = document.querySelector('movie_image');
// if (movieImage = null){
//     movieImage.setAttribute('src', 'images/noimages.svg')
//     // urlimg = "images/noimages.svg";
// };



// localStorage.clear();
// key for search in this page
// let izlash = '';
// keyForThis.onkeyup = (e) =>{
//     let value = e.target.value;
//     console.log(value);
//     izlash = value;
//     // toLocal('keyforsearch', value);
//     // localStorage.setItem('keyForSearch', value);
// }


// let newUrlForSearchTvShows =  `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&language=en-US&page=1&query=${izlash}&include_adult=false`;

// fetch(newUrlForSearchTvShows)
// .then(response => response.json())
// .then(function (res){
//     console.log(res.results);
//     let movieCard = document.querySelector('.search__results');
//     // let urlimg = movieImage.src();
//     for (let i=0; i<res.results.length; i++){
//         let elem = searchItem(res.results[i].poster_path, res.results[i].name, res.results[i].first_air_date, res.results[i].overview);
        
//         movieCard.innerHTML += elem;
//     }
// });

// console.log(keyForThis);