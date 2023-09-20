fetch('http://localhost:3000/bookings/display')
.then(response=>response.json())
.then(data => {
    document.querySelector('.boite').innerHTML = `
    <p>My bookings</p>
    <div id="bookings">
    </div>
    <div id="footer">
    <p>Enjoy your travels with Tickethack!</p>
    </div>`
    for(let booking of data.bookedTrips){
        document.querySelector('#bookings').innerHTML +=
        `<p id="trajets-purchased">${booking.booking.departure} > ${booking.booking.arrival}${booking.booking.date} ${booking.booking.price} € Departure in 5 hours</p>`
    } 
}
);