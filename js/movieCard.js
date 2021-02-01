 class MovieCard{
    constructor(id, name, date, img, rate, urlForData, className){
        this.id = id
        this.name = name
        this.date = date
        this.img = img
        this.rate = rate
        this.urlForData = urlForData
        this.className = className
    }
    
    dateToString(date){
        let newDate = new Date(date).toDateString().slice(4);
        return newDate;
    }
    elemForCard(){
        let newdate = this.dateToString(this.date);
        let element = `<div div class="movies_card" >
                    <a href="#" class="movies_more">...</a>
                    <a href="movieinfo.html"  onclick="toLocal('movieId', '${this.id}')"><img src="https://
w185/${this.img}" alt="movie" class="movies_bg" width="150px" height="230px"
                    <h4 class="movies_title">${this.name}</h4>
                    <p class="movies_date">${newdate}</p>
                    <div class="progres">
                        <div class="radial-progress">
                            data-progress="${this.rate}"
                        </div>
                    </div>
                </div>
            `;
        return element;
    }
     getData(){
        let self = this;
        let block = document.querySelector(this.className);
        fetch(this.urlForData)
            .then(response => response.json())
            .then(function(res){
                res.results.map(function(item) {
                    // console.log(item.title);
                    // let elem = self.elemForCard();
                    let element = `<div div class="movies_card" >
                    <a href="#" class="movies_more">...</a>
                    <a href="movieinfo.html"  onclick="toLocal('movieId', '${item.id}')"><img src="https://image.tmdb.org/t/p/w185${item.poster_path}" alt="movie" class="movies_bg" width="150px" height="230px"
                    <h4 class="movies_title">${item.title}</h4>
                    <p class="movies_date">${item.release_date}</p>
                    <div class="progres">
                        <div class="radial-progress" data-progress="${item.vote_average *10}">
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
                    console.log(element);
                    // block.innerHTML += `<h4> ${item.title}</h4>` 
                    block.innerHTML += element; 

                });
                console.log(res.results)
            })
    }
    getInfo(){
        let self = this;
        let block = document.querySelector(this.className);
        fetch(this.urlForData)
            .then(response => response.json())
            .then(function(res){
                res.results.map(function(item) {
                    // console.log(item.title);
                    // let elem = self.elemForCard();
                    let elem = self.elemForCard();
                    
                    console.log(elem);
                    // block.innerHTML += `<h4> ${item.title}</h4>` 
                    // block.innerHTML += element; 

                });
                console.log(res.results[0])
            })
    }
    sayHello(){
        console.log('Hello World');
    }
   

}


// const movies = "https://api.themoviedb.org/3/movie/popular?api_key=d9835bf16b133db7ae35ff2b1e08b533&language=en-US&page=1";
// // MovieCard.fetchUrl(movies, 'dfs');
// let as = new MovieCard('id', 'title', 'release_date', 'backdrop_path', 'rate',movies, '.movie');
// as.getData();
// as.getInfo()
// as.getData(movies, '.movie');
// let sdfsd = new MovieCard();

// module.exports = MovieCard;
export default MovieCard;

