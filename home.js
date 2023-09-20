document.getElementById('date').valueAsDate = new Date()

document.querySelector('#btn-search').addEventListener('click', function () {
const departure = document.querySelector('#departure');
const arrival = document.querySelector('#arrival');
const date = document.querySelector('#date');

fetch(`http://localhost:3000/home/search/${departure.value}/${arrival.value}/${date.value}`)
.then(response=>response.json())
.then(recherche => {
    if(!recherche.result){
        // Afficher loupe et message
        document.querySelector('#bte-resultat').innerHTML = `
        <img src="images/notfound.png" id="notfound"/>
        <p id="textbase">No trip found.</p>`
    } else {
        // Afficher les résultats de la recherche
        for(let trip of recherche.trips){
        const heures=new Date(trip.date).getHours();
        const minutes=new Date(trip.date).getMinutes();
        document.querySelector('#bte-resultat').innerHTML += ` 
        <div class="book">
        <p id="trajets">${trip.departure}>${trip.arrival}${heures}:${minutes}${trip.price}€ </p>
        <button type="button" class='btn-book' id='${trip._id}'>Book</button>
        </div>        
        `
        } 
    }
}).then(()=>{ // Rajouter un voyage au panier
 const buttonsBook = document.querySelectorAll('.btn-book');
    for(let button of buttonsBook){
    const tripId = {trips:button.id};
        button.addEventListener('click', function(){
            fetch('http://localhost:3000/home/addCart', {
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(tripId)
            })
        .then(response=>response.json())
        .then(() => {
        window.location.assign('cart.html')
            })
    })
    }})
})  





