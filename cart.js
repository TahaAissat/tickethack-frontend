


fetch(`http://localhost:3000/cart/display`)
.then(response=>response.json())
.then(data => {
    let total = 0

    document.querySelector('.boite').innerHTML = `
    <p>My cart</p>
    <div id="carts">
    </div>
    <div id="totalprice">
    <p id="Prix">Total : ${total}€</p>
    <button type="button" id="btn-purchase">Purchase</button>
    </div>`

    for (let trip of data.allTrips){
        console.log(trip.trips[0].price)
    const heures = new Date(trip.trips[0].date).getHours();
    const minutes = new Date(trip.trips[0].date).getMinutes();
    total += trip.trips[0].price 
    document.querySelector('#carts').innerHTML += `
    <div id="trajets-carted">
    <p >${trip.trips[0].departure} > ${trip.trips[0].arrival} ${heures}:${minutes} ${trip.trips[0].price}€</p>
    <button type="button" id="btn-sup">X</button>
    </div>
`

};
});

// créer l'event sur le click 

/*document.querySelector('#btn-purchase').addEventListener('click', function () {

fetch(`http://localhost:3000/cart/book`)
.then(response=>response.json())
.then(data => {
console.log(data)
document.querySelector('.boite').innerHTML = 

// Ajoute les voyages du cart dans booking au click sur Purchase. Change également de page vers Bookings.


});

});

document.querySelector('#btn-sup').addEventListener('click', function () {
fetch(`http://localhost:3000/cart/deleteCart`)
.then(response=>response.json())
.then(data => {
console.log(data)

// Route pour supprimer lorqu'on appuie sur le bouton X

})
});*/