const APIPath = "https://api.sampleapis.com/cartoons/cartoons2D";
const numberOfResults = 9;
const cartoonGrid = document.querySelector('#cartoon-grid');
const searchBtn = document.querySelector('#btn-search');
let cartoons = [];

fetch("https://api.sampleapis.com/cartoons/cartoons2D")
    .then(response => response.json())
    .then((data) => {
        cartoons = data;
        updateCartoons(data);
    });

function updateCartoons(cartoons) {
    let allCardsDom = '';
    cartoons.forEach((cartoon)=>{
        const cardTemplate = 
            `<div class="col">
                <div class="card">
                    <img src="${cartoon.image}"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${cartoon.title}</h5>
                        <p class="card-text">${cartoon.genre}</p>
                    </div>
                </div>
            </div>`;
         allCardsDom +=cardTemplate;
    });
    cartoonGrid.innerHTML = allCardsDom;
}


function filterByName() {
    const searchInput = document.querySelector('#search-input').value;
    let filteredArray = [];
    if(searchInput && searchInput.length){
        cartoons.forEach((cartoon) => {
            if(cartoon.title.toLowerCase()
                .startsWith(searchInput.toLowerCase()))
                filteredArray.push(cartoon);
        });
    }else {
        return cartoons;
    }
    console.log({searchInput});
    return filteredArray;
}

searchBtn.addEventListener('click',(e)=>{
    console.log('Search button clicked...');
    let filteredList = filterByName();
    updateCartoons(filteredList);
});