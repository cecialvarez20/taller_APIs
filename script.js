function infoPokemon(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("info").innerHTML = `
                <div class="row align-items-center justify-content-center">
                    <img class=" col-4" src="${data.sprites.other.home.front_default}" alt="imagen pokemon">
                    <ul class="col-auto list-group text-start">
                        <li class="list-group-item p-3 mb-2 bg-success bg-gradient text-white"><strong>Nombre: </strong>${data.name}</li>
                        <li class="list-group-item p-3 mb-2 bg-success bg-gradient text-white"><strong>Tipo: </strong>${data.types[0].type.name}</li>
                        <li class="list-group-item p-3 mb-2 bg-success bg-gradient text-white"><strong>Altura: </strong>${data.height/10} m</li>
                        <li class="list-group-item p-3 mb-2 bg-success bg-gradient text-white"><strong>Peso: </strong>${data.weight/10} kg</li>
                    </ul> 
                </div>
            `;
        }) 
        .catch(error => {
            console.error('Error al buscar el pokemon:', error);
            alert("El pokémon ingresado no existe");
    });
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        infoPokemon("https://pokeapi.co/api/v2/pokemon/" + document.getElementById("searchInput").value.toLowerCase());
    });
});
