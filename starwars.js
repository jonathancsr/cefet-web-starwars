//https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/ reference

let films = new XMLHttpRequest();
let filmes;
films.open('GET', 'https://www.swapi.co/api/films', true);

films.onload = function () {
    filmes = JSON.parse(this.response).results
    console.log(filmes[0].title)
}
films.send(null);



const app = document.getElementById('movies')

let ul = document.createElement('ul')



filmes.forEach(element => {
    let li = document.createElement('li') 
    li.textContent =  "Episode " + filmes[0].element.episode_id;
    ul.appendChild(li)
});
app.appendChild(ul)
