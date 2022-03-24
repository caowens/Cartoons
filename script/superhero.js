const APIPath = "https://raw.githubusercontent.com/bpeddapudi/sampleJson/main/superhero.json";
const numberOfResults = 9;
const superheroGrid = document.querySelector('#superhero-grid');
const searchBtn = document.querySelector('#btn-search');
let superHeros = [];

fetch("https://raw.githubusercontent.com/bpeddapudi/sampleJson/main/superhero.json")
    .then(response => response.json())
    .then((data) => {
        superHeros = data;
        updateSuperHeros(data);
    });

function updateSuperHeros(superHeros) {
    let allCardsDom = '';
    superHeros.forEach((hero)=>{
        const cardTemplate = 
            `<div class="col">
                <div class="card">
                    <img src="${hero.images.sm}"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${hero.name}</h5>
                        <p class="card-text">${hero.work.occupation}</p>
                    </div>
                </div>
            </div>`;
         allCardsDom +=cardTemplate;
    });
    superheroGrid.innerHTML = allCardsDom;
}


function filterByName() {
    const searchInput = document.querySelector('#search-input').value;
    let filteredArray = [];
    if(searchInput && searchInput.length){
        superHeros.forEach((hero) => {
            if(hero.name.toLowerCase()
                .startsWith(searchInput.toLowerCase()))
                filteredArray.push(hero);
        });
    }else {
        return superHeros;
    }
    console.log({searchInput});
    return filteredArray;
}

searchBtn.addEventListener('click',(e)=>{
    console.log('Search button clicked...');
    let filteredList = filterByName();
    updateSuperHeros(filteredList);
});