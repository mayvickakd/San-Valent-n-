// Generar estrellas en el cielo

function generarEstrellas() {

    let contenedor = document.getElementById("estrellas");

    for (let i = 0; i < 100; i++) { // Cantidad de estrellas

        let estrella = document.createElement("div");

        estrella.classList.add("estrella");

        estrella.style.left = `${Math.random() * 100}vw`;

        estrella.style.top = `${Math.random() * 100}vh`;

        estrella.style.animationDuration = `${Math.random() * 3 + 2}s`;

        contenedor.appendChild(estrella);

    }

}

generarEstrellas(); // Llamar la función al cargar la página

// Acción al presionar "Sí"

document.getElementById("yesButton").addEventListener("click", function() {

    let mensaje = document.createElement("h2");

    mensaje.innerText = "¡Sabía que dirías que sí! ❤️";

    mensaje.style.color = "white";

    mensaje.style.textShadow = "2px 2px 10px pink";

    document.body.appendChild(mensaje);

    // Reproducir la canción

    let song = document.getElementById("romanticSong");

    song.play();

    

    lanzarFuegosArtificiales();

});

// Función para lanzar fuegos artificiales

function lanzarFuegosArtificiales() {

    let fireworksContainer = document.getElementById("fireworks-container");

    for (let i = 0; i < 20; i++) { // Número de explosiones

        setTimeout(() => {

            let firework = document.createElement("div");

            firework.classList.add("firework");

            firework.style.left = `${Math.random() * 100}vw`;

            firework.style.top = `${Math.random() * 100}vh`;

            firework.style.backgroundColor = getRandomColor();

            fireworksContainer.appendChild(firework);

            setTimeout(() => firework.remove(), 1500);

        }, i * 200);

    }

}

// Función para generar colores aleatorios

function getRandomColor() {

    let colors = ["red", "yellow", "blue", "pink", "purple", "orange", "white"];

    return colors[Math.floor(Math.random() * colors.length)];

}