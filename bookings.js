


fetch(`https://tickethack-backend-ochre.vercel.app/cart/bookings/display`)
.then(response=>response.json())
.then(data => {

    document.querySelector('.boite').innerHTML = `
    <p>My bookings</p>
    <div id="bookings">
        <p id="trajets-purchased">`${data.departure}` > `${data.arrival}` `${data.date}` `${data.price}` € Departure in 5 hours</p>
    </div>
    <div id="footer">
        <p>Enjoy your travels with Tickethack!</p>
    </div>
    
    `


// Affiche les voyages à acheter qui proviennent du cart.


)};