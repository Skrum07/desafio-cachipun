
let nJuegos = parseInt(prompt("¿Cuantas veses deseas jugar?"));

let contWin = 0;
let contLoose = 0;
let contTie = 0;



// Funcion principal del juego 

function juegoCachipun(nGames) {

    for (let i = 0; i < nGames; i++) {

        // Solicitar la jugada del usuario
        let jUser = prompt("Seleccione su jugada: piedra, papel o tijera").toLowerCase();
        
        let aleatorio = Math.floor(Math.random() * 3);
        let jugadaMaq;

        switch (aleatorio) {
            case 0:
                jugadaMaq = "piedra";
                break;

            case 1:
                jugadaMaq = "papel";
                break;

            case 2:
                jugadaMaq = "tijera";
                break;

        }

// Determinar el resultado del juego y actualizar los contadores
        if (jUser === jugadaMaq){
            alert("Empate");
            contTie++;

        } else if ((jUser === 'piedra' && jugadaMaq === 'tijera') ||
            (jUser === 'papel' && jugadaMaq === 'piedra') ||
            (jUser === 'tijera' && jugadaMaq === 'papel')
        ) {
            alert("Winner winner chiken dinner");
            contWin++;

        } else {
            alert("Your loooooseeee!!!!!")
            contLoose++;
        }
    };
}

// Ejecutar la función principal del juego

juegoCachipun(nJuegos);

// Resumen del juego 

if (contWin > contLoose) {
    alert(`Ganaste ${contWin} veces sos una maquina del cachipun bebesito!!!`);
}
else if (contWin < contLoose) {
    alert(`Entero pollo, perdiste ${contLoose} veces... anda a estudiar mejor`);
}

else {
    alert(`Empataron.`);
}