document.querySelector('#btn-search').addEventListener('click', function () {
const departure = document.querySelector('#departure');
const arrival = document.querySelector('#arrival');
const date = document.querySelector('#date');

fetch(`http://localhost:3000/home/search/${departure.value}/${arrival.value}/${date.value}`)
.then(response=>response.json())
.then(recherche => {
    console.log(recherche)
    if(!recherche.result){
        // Afficher loupe et message
        document.querySelector('#bte-resultat').innerHTML = `
        <img src="images/notfound.png" id="notfound"/>
        <p id="textbase">No trip found.</p>`
    } else {
        // Afficher les résultats de la recherche
        for(let trip of recherche.trips){
        console.log(typeof trip.date);
        const heures=new Date(trip.date).getHours();
        const minutes=new Date(trip.date).getMinutes();
        document.querySelector('#bte-resultat').innerHTML += ` 
        <div id="book">
        <p id="trajets">${trip.departure}>${trip.arrival}${heures}:${minutes}${trip.price}€ </p>
        <button type="button" id="btn-book">Book</button>
        </div>        
        `
        }
       
    }
}).then(()=>{
 const buttonsBook=document.querySelectorAll('#btn-book');
    for(let button of buttonsBook){
        button.addEventListener('click', function(){
        const trajet=document.querySelector('#button')//.parentNode.firstElementChild
        console.log(trajet);
            fetch(`http://localhost:3000/home/addCart`, {
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify()
            })
        .then(response=>response.json())
        .then(data => {
            console.log(data)  
            })
    })
    }})
})  





