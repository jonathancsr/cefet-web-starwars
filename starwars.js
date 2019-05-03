//https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/ reference

let films = new XMLHttpRequest();
let filmes;
films.open('GET', 'https://www.swapi.co/api/films', true);
films.onload = function () {
    filmes = JSON.parse(this.response).results
    
    const app = document.getElementById('movies')
    const text = document.querySelector('.reading-animation')
    let ul = document.createElement('ul')
    filmes.forEach(element => {
        let li = document.createElement('li') 
        console.log(element)
        li.addEventListener('click', e =>{
            console.log(text)
            text.innerHTML(element.crawled)
            e.stopPropagation()
        })
        li.textContent =  "Episode " + element.episode_id;
        ul.appendChild(li)
    });
    app.appendChild(ul)
    
        
}
films.send(null);
