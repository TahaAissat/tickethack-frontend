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
        const departHours = (new Date().getHours() - new Date(booking.booking.date).getUTCHours())
        const heures = new Date (booking.booking.date).getUTCHours()
        const minutes = new Date (booking.booking.date).getMinutes()
   
        document.querySelector('#bookings').innerHTML +=
        `<p class="trajets-purchased">${booking.booking.departure} > ${booking.booking.arrival} ${heures}:${minutes} ${booking.booking.price} € Departure in ${departHours} hours</p>`
    } 
}
);

