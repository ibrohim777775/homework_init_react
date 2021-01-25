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



// document.querySelector('.radial-progress').setAttribute('data-progress', 68);



//  function for date format
function dateToString(date) {
    let yangi = new Date(date).toDateString().slice(4);
    return yangi;
};

// function add elements  to movies card
function addElements(img, title, date, vote, movieid) {
    let element = `<div div class="movies_card" >
                    <a href="#" class="movies_more">...</a>
                    <a href="movieinfo.html"  onclick="toLocal('movieId', '${movieid}')"><img src="https://image.tmdb.org/t/p/w185/${img}" alt="movie" class="movies_bg" width="150px" height="230px" "></a>
                    <h4 class="movies_title">${title}</h4>
                    <p class="movies_date">${dateToString(date)}</p>
                    <div class="progres">
                        <div class="radial-progress" data-progress="${vote}">
                            <div class="circle">
                                <div class="mask full">
                                    <div class="fill"></div>
                                </div>
                                <div class="mask half">
                                    <div class="fill"></div>
                                    <div class="fill fix"></div>
                                </div>
                                <div class="shadow"></div>
                            </div>
                            <div class="inset">
                                <div class="percentage">
                                    <div class="numbers">
                                        <span>-</span><span>0%</span><span>1%</span><span>2%</span><span>3%</span><span>4%</span><span>5%</span><span>6%</span><span>7%</span><span>8%</span><span>9%</span><span>10%</span><span>11%</span><span>12%</span><span>13%</span><span>14%</span><span>15%</span><span>16%</span><span>17%</span><span>18%</span><span>19%</span><span>20%</span><span>21%</span><span>22%</span><span>23%</span><span>24%</span><span>25%</span><span>26%</span><span>27%</span><span>28%</span><span>29%</span><span>30%</span><span>31%</span><span>32%</span><span>33%</span><span>34%</span><span>35%</span><span>36%</span><span>37%</span><span>38%</span><span>39%</span><span>40%</span><span>41%</span><span>42%</span><span>43%</span><span>44%</span><span>45%</span><span>46%</span><span>47%</span><span>48%</span><span>49%</span><span>50%</span><span>51%</span><span>52%</span><span>53%</span><span>54%</span><span>55%</span><span>56%</span><span>57%</span><span>58%</span><span>59%</span><span>60%</span><span>61%</span><span>62%</span><span>63%</span><span>64%</span><span>65%</span><span>66%</span><span>67%</span><span>68%</span><span>69%</span><span>70%</span><span>71%</span><span>72%</span><span>73%</span><span>74%</span><span>75%</span><span>76%</span><span>77%</span><span>78%</span><span>79%</span><span>80%</span><span>81%</span><span>82%</span><span>83%</span><span>84%</span><span>85%</span><span>86%</span><span>87%</span><span>88%</span><span>89%</span><span>90%</span><span>91%</span><span>92%</span><span>93%</span><span>94%</span><span>95%</span><span>96%</span><span>97%</span><span>98%</span><span>99%</span><span>100%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
            `;
    return element;
}


//  added popular movies from API
const movies = "https://api.themoviedb.org/3/movie/popular?api_key=d9835bf16b133db7ae35ff2b1e08b533&language=en-US&page=1";

fetch(movies)
    .then(response => response.json())
    .then(function(res) {
        let moviesInfo = document.querySelector('.pop__movies');
        for (let i = 0; i < res.results.length; i++) {
            let element = addElements(res.results[i].poster_path, res.results[i].title, res.results[i].release_date, res.results[i].vote_average * 10, res.results[i].id);
            moviesInfo.innerHTML += element;
        
        }
    });



// added popular on TV from API 
const popularOnTv = "https://api.themoviedb.org/3/tv/popular?api_key=d9835bf16b133db7ae35ff2b1e08b533&language=en-US&page=1";

fetch(popularOnTv)
    .then(response => response.json())
    .then(function(popTv) {
        let popOnTv = document.querySelector('.pop__Tv');
        for (let i = 0; i < popTv.results.length; i++) {
            let elem = addElements(popTv.results[i].poster_path, popTv.results[i].name, popTv.results[i].first_air_date, popTv.results[i].vote_average * 10, popTv.results[i].id);


            popOnTv.innerHTML += elem;
        }
    })



// Added Top Rated movies from API   
const topRated = "https://api.themoviedb.org/3/movie/top_rated?api_key=d9835bf16b133db7ae35ff2b1e08b533&language=en-US&page=1";

fetch(topRated)
    .then(response => response.json())
    .then(function(res) {
        let topMovies = document.querySelector('.top__rated');
        for (let i = 0; i < res.results.length; i++) {
            let element = addElements(res.results[i].poster_path, res.results[i].title, res.results[i].release_date, res.results[i].vote_average * 10,res.results[i].id);

            topMovies.innerHTML += element;
        };

    })



// Added now playing movies from API 
const latest = "https://api.themoviedb.org/3/movie/now_playing?api_key=d9835bf16b133db7ae35ff2b1e08b533&language=en-US&page=1";

fetch(latest)
    .then(response => response.json())
    .then(function(res) {
        let content = document.querySelector('.now__playing');
        for (let i = 0; i < res.results.length; i++) {
            let element = addElements(res.results[i].poster_path, res.results[i].title, res.results[i].release_date, res.results[i].vote_average * 10, res.results[i].id);

            content.innerHTML += element;
        }
    })







// clear localstorage
// localStorage.clear();

// let inputValue = document.querySelector('.input__search');

// inputValue.onkeyup = (e) =>{
//     let value = e.target.value;
//     console.log(value);
//     toLocal('keyforsearch', value);
//     // localStorage.setItem('keyForSearch', value);
// }

function toLocal(key, text) {
    let value = JSON.stringify(text);
    localStorage.setItem(key, value);
}



// Addind todat trand movies from API

const trandThisDay = 'https://api.themoviedb.org/3/trending/movie/day?api_key=d9835bf16b133db7ae35ff2b1e08b533';

fetch (trandThisDay)
    .then(response => response.json())
    .then(function(res) {
        let trand = document.querySelector('.trand__today');
        for (let i = 0; i < res.results.length; i++) {
            function getDate() {
                if (res.results[i].first_air_date){return res.results[i].first_air_date}
                else {return res.results[i].release_date}
            };
            let date = getDate();
            let element = addElements(res.results[i].poster_path, res.results[i].title, date, res.results[i].vote_average * 10, res.results[i].id);

            trand.innerHTML += element;
        };


    });

// Adding this week trand movies from API

const trandThisWeek = 'https://api.themoviedb.org/3/trending/movie/week?api_key=d9835bf16b133db7ae35ff2b1e08b533';

fetch(trandThisWeek)
    .then(response => response.json())
    .then(function(res){
        let trand = document.querySelector('.trand__week');
        for (let i = 0; i < res.results.length; i++) {
            function getDate() {
                if (res.results[i].first_air_date){return res.results[i].first_air_date}
                else {return res.results[i].release_date}
            };
            let date = getDate();
            let element = addElements(res.results[i].poster_path, res.results[i].title, date, res.results[i].vote_average * 10, res.results[i].id);

            trand.innerHTML += element;
        };
        console.log(res);

    })
