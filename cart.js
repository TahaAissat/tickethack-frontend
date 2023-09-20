


fetch(`http://localhost:3000/cart/display`)
.then(response=>response.json())
.then(data => {
    let total = 0

    document.querySelector('.boite').innerHTML = `
    <p>My cart</p>
    <div id="carts">
    </div>
    <div id="totalprice">
    <p id="Prix">Total : ${total} €</p>
    <button type="button" id="btn-purchase">Purchase</button>
    </div>`

    for (let trip of data.allTrips){
        console.log(trip.trips.price)
    const heures = new Date(trip.trips.date).getHours();
    const minutes = new Date(trip.trips.date).getMinutes();
    total += trip.trips.price 
    document.querySelector('#Prix').textContent = `Total : ${total} €`
    document.querySelector('#carts').innerHTML += `
    <div id="trajets-carted">
    <p >${trip.trips.departure} > ${trip.trips.arrival} ${heures}:${minutes} ${trip.trips.price}€</p>
    <button type="button" id="btn-sup">X</button>
    </div>
`

document.querySelector('#btn-purchase').addEventListener('click', function(){
    fetch('http://localhost:3000/cart/purchase',{
        method:'POST',
        headers:{'Content-type':'application/json'}
    })
    .then(response=>response.json())
    .then(data => {
        if(data.result){
            document.querySelector('.boite').innerHTML = 
            `<p id="textbase">No tickets in your cart</p>
             <p id="textbase">Why not plan a trip ?</p>`
         window.location.assign('bookings.html')
        }
    })
})
};
});

