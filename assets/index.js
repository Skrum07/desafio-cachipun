
let nJuegos = parseInt(prompt("¿Cuantas veses deseas jugar?"));


// Funcion principal del juego 

function juegoCachipun(nGames) {

    for (let i = 0; i < nGames; i++) {
        let jUser = prompt("Seleccione su jugada: piedra, papel o tijera").toLowerCase;
        let aleatorio = Math.floor(Math.random() * 3);
        let jugadaMaq;

        // if(aleatorio == 0){
        //     jugadaMaq = "piedra";
        // } else if(aleatorio == 1) {
        //     jugadaMaq = "papel";
        // } else { 
        //     jugadaMaq = "tijera";
        // }

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

        if (jUser == jugadaMaq) {
            alert("Empate");
        } else if ((jUser == 'piedra' && jugadaMaq == 'tijera') ||
                   (jUser == 'papel' && jugadaMaq == 'piedra') ||
                   (jUser == 'tijera' && jugadaMaq == 'papel')
        ) {
            alert("Winner winner chiken dinner");

        } else {
            alert("Your loooooseeee!!!!!")
        }



    };
}
juegoCachipun(nJuegos);






// if (eleccionUser === eleccionMaquina) {
//     alert("Has elegido" ${eleccionUser} "y la maquina" ${eleccionMaquina} "¡ES UN EMPATE!")
//     empates++;
// } else if ((eleccionUser === 'piedra' && eleccionMaquina === 'tijera') 
//     (eleccionUser === 'papel' && eleccionMaquina === 'piedra') 
//     (eleccionUser === 'tijera' && eleccionMaquina === 'papel')) {
//     alert("Has elegido" ${eleccionUser} "y la maquina" ${eleccionMaquina} "¡HAS GANADO!")
//     ganaUser++;
// } else {
//     alert("Has elegido" ${eleccionUser} "y la maquina" ${eleccionMaquina} "¡HAS PERDIDO!")
//     ganaMaqui++;
// }