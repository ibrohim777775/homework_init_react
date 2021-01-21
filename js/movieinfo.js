// Added top actors  to movie.html from API 
let movieId = JSON.parse(localStorage.getItem('movieId'));
// const movieId = 553604;
function topActorsUrl(movieId) {
    return "https://api.themoviedb.org/3/movie/"+movieId+"/credits?api_key=d9835bf16b133db7ae35ff2b1e08b533"
}


let movieImg = document.querySelector('.img');
let movieTitle = document.querySelector('.movies__title');
let movieDate = document.querySelector('.movies__made');
let movieRate = document.querySelector('.radial-progress');
let movieDuration = document.querySelector('.movie__duration');
let movieTagline = document.querySelector('.more__text');
let movieOverview = document.querySelector('.overview__text');
let main = document.querySelector('main');
let revenue = document.querySelector('.info__revenue');
let budget = document.querySelector('.info__budget');
let originalLanguage = document.querySelector('.info__language');
let vote = document.querySelector('.radial-progress');


const movieInfoUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=d9835bf16b133db7ae35ff2b1e08b533&language=en-US`;

fetch(movieInfoUrl)
.then(response => response.json())
.then(function (res){
    console.log(res);
    movieImg.src = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${res.poster_path}`;
    main.style.backgroundImage = `url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${res.backdrop_path}')`;
    movieTitle.innerText = res.title;
    movieDate.innerText = res.release_date;
    let movieGanres = document.querySelector('.movie__ganres');
    for (let i=0; i<res.genres.length; i++){
        let elem = `<a href="#">${res.genres[i].name},</a>`;
        movieGanres.innerHTML +=elem;
    };
    movieOverview.innerText = res.overview;
    movieTagline.innerText = res.tagline;
    revenue.innerText = currency(res.revenue).format();
    budget.innerText = currency(res.budget).format();
    originalLanguage.innerText = res.original_language;
    // vote.data-progress = res.vote_average * 10;

    
    })




const actors = topActorsUrl(movieId);

fetch(actors)
    .then(response => response.json())
    .then(function(res) {
        let actors = document.querySelector('.top__billed-inners');
        for (let i=0; i<res.cast.length; i++){
            let element = ` <div class="top__billed-items">
                        <a class="actors__link" href="#"><img class="actors__image" src="https://image.tmdb.org/t/p/w138_and_h175_face/${res.cast[i].profile_path}"
                                alt="top actors" width="138px" height="175px">
                        </a>
                        <a href="#" class="actors__name">
                            <h4 class="actors__name-link">${res.cast[i].name}</h4>
                        </a>
                        <p class="actors__title">${res.cast[i].character}</p>
                    </div>`;
            if (res.cast[i].profile_path) actors.innerHTML += element;

        }
    })



//  Added movie keywords from API
function urlToMovieKeywords(movieId) {
    return " https://api.themoviedb.org/3/movie/"+movieId+"/keywords?api_key=d9835bf16b133db7ae35ff2b1e08b533";
}

const keywordsId = urlToMovieKeywords(movieId);

fetch(keywordsId)
    .then(response => response.json())
    .then(function(res) {
        let keys = document.querySelector('.keywords__inners');
        for (let i=0; i<res.keywords.length; i++){
            let elem = `<div class="keywords__items">
                                    <a href="#" class="keywors__link">${res.keywords[i].name}</a>
                                </div>
            `;
            keys.innerHTML += elem;
        };
    })
