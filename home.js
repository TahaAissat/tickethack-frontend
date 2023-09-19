document.querySelector('#btn-search').addEventListener('click', function () {
const departure = document.querySelector('#departure');
const arrival = document.querySelector('#arrival');
const date = document.querySelector('#date');

fetch(`https://tickethack-backend-ochre.vercel.app/search/${departure}/${arrival}/${date}`)
.then(response=>response.json())
.then(trips => {
    if(!trips.result){
        // Afficher loupe et message
    } else {
        document.querySelector('#resultat').innerHTML = 
    }
})
})