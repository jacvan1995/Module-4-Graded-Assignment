// API // http://www.omdbapi.com/?i=tt3896198&apikey=9ee13382
//(`https://www.omdbapi.com/?apikey=9ee13382&s=${userInput}`)
let moviesContainer = document.getElementById("movies-container")
var searchBtn = document.getElementById("search-btn");
var movieInputElement = document.getElementById("movie-name");
var movieStatusElement = document.getElementById("movie-status");

searchBtn.addEventListener("click", function () {
    moviesContainer.innerHTML = ""
    movieStatusElement.innerText = "Loading..."
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {

            movieStatusElement.innerText = ""

            let result = JSON.parse(this.responseText);
            console.log(result);
            if (result.Response == "True") {
                let movies = result.Search;
                movies.map((item, i) => {
                    console.log(item);
                    moviesContainer.innerHTML += `
            <div class="movie-card" >
         <img 
         class="movie-poster"
         src= ${item.Poster}/>
         <p>  <b> Name :  </b> ${item.Title} </p>
         <p> <b> Year : </b> ${item.Year}  </p>
         <p> <b> Type : </b> ${item.Type}  </p>
     </div>`
            })
            } else {
                movieStatusElement.innerText = "404 Movies Not Found!"
            }
        }
    }
    xhttp.open("GET", `https://www.omdbapi.com/?apikey=9ee13382&s=${movieInputElement.value}`, true);
    xhttp.send();


})