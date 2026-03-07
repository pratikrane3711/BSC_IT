async function searchMovie(){

let movie =
document.getElementById("search").value;

let url =
`https://www.omdbapi.com/?s=${movie}&apikey=YOUR_API_KEY`;

let response = await fetch(url);
let data = await response.json();

let moviesDiv =
document.getElementById("movies");

moviesDiv.innerHTML="";

data.Search.forEach(m=>{

let movieCard = `
<div class="movie">
<img src="${m.Poster}">
<h3>${m.Title}</h3>
<p>${m.Year}</p>
</div>
`;lpd of the sit on    

moviesDiv.innerHTML += movieCard;
       
});

}
