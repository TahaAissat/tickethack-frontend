


fetch(`https://tickethack-backend-ochre.vercel.app/cart/display`)
.then(response=>response.json())
.then(data => {

document.querySelector('.boite').innerHTML += `

<p>My cart</p>
<div id="carts">
    <p id="trajets-carted">${data.departure} > ${data.arrival} ${data.date} ${data.price} Departure in 5 hours</p>
    <button type="button" id="btn-sup">X</button>
</div>
<div id="totalprice">
    <p id="Prix">Total : 100€</p>
    <button type="button" id="btn-purchase">Purchase</button>
</div>


`

// Afficher toute la collection cart 
// ++ ajoute le bouton purchase & le bouton X

});


// créer l'event sur le click 

fetch(`https://tickethack-backend-ochre.vercel.app/cart/book`)
.then(response=>response.json())
.then(data => {

document.querySelector('.boite').innerHTML = 

// Ajoute les voyages du cart dans booking au click sur Purchase. Change également de page vers Bookings.


});




fetch(`https://tickethack-backend-ochre.vercel.app/cart/deleteCart`)
.then(response=>response.json())
.then(data => {


// Route pour supprimer lorqu'on appuie sur le bouton X

})
