


fetch(`http://localhost:3000/home/cart/display`)
.then(response=>response.json())
.then(data => {
    const heures = new Date(data.date).getHours();
    const minutes = new Date(data.date).getMinutes();
    const total = data.price + data.price // À revoir mdr
document.querySelector('.boite').innerHTML += `

<p>My cart</p>
<div id="carts">
    <p id="trajets-carted">${data.departure} > ${data.arrival} ${heures}:${minutes} ${data.price}€</p>
    <button type="button" id="btn-sup">X</button>
</div>
<div id="totalprice">
    <p id="Prix">Total : ${total}€</p>
    <button type="button" id="btn-purchase">Purchase</button>
</div>

`

// Afficher toute la collection cart 
// ++ ajoute le bouton purchase & le bouton X

});


// créer l'event sur le click 

document.querySelector('#btn-purchase').addEventListener('click', function () {

fetch(`http://localhost:3000/home/cart/book`)
.then(response=>response.json())
.then(data => {
console.log(data)
document.querySelector('.boite').innerHTML = 

// Ajoute les voyages du cart dans booking au click sur Purchase. Change également de page vers Bookings.


});

});

document.querySelector('#btn-sup').addEventListener('click', function () {
fetch(`http://localhost:3000/home/cart/deleteCart`)
.then(response=>response.json())
.then(data => {
console.log(data)

// Route pour supprimer lorqu'on appuie sur le bouton X

})
});