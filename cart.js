


fetch(`https://tickethack-backend-ochre.vercel.app/cart/display`)
.then(response=>response.json())
.then(data => {

document.querySelector('.boite').innerHTML += `




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
