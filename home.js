document.querySelector('#btn-search').addEventListener('click', function () {
const departure = document.querySelector('#departure');
const arrival = document.querySelector('#arrival');
const date = document.querySelector('#date');

fetch(`https://tickethack-backend-ochre.vercel.app/home/search/${departure}/${arrival}/${date}`)
.then(response=>response.json())
.then(trips => {
    if(!trips.result){
        // Afficher loupe et message
        document.querySelector('#resultat').innerHTML = `

        <img src="images/notfound.png" id="notfound"/>
        <p id="textbase">No trip found.</p>`

    } else {
        document.querySelector('#resultat').innerHTML = `
        
        <div id="book">
        <p id="trajets">`${trips.departure}` > `${trips.arrival}` `${trips.date}` `${trips.price}` € </p>
        <button type="button" id="btn-book">Book</button>
        </div>

        
        `
        // Afficher les résultats


    }

    
})


fetch(`https://tickethack-backend-ochre.vercel.app/home//addCart`)
.then(response=>response.json())
.then(data => {

    // Fetch la route qui ajoute dans le cart lorsqu'on appuie sur le bouton book 

}):