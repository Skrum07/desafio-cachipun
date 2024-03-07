
let nJuegos = parseInt(prompt("¿Cuantas veses deseas jugar?"));

let jUser = prompt("Seleccione su jugada: piedra, papel o tijera").toLowerCase;;



// Funcion principal del juego 

function juegoCachipun(nJuegos){

    for (let i=0; i < nJuegos; i++){
        let opcionJ1 = prompt("Seleccione su jugada: piedra, papel o tijera").toLowerCase;



    };
}

// Funcion para determinar la jugada del PC 

function jPc () {
    const opciones = ["piedra", "papel", "tijera"];
    const aleatorio = Math.floor(Math.random()*3);
    return opciones[aleatorio];
}

// Funcion para determinar al ganador 

function winner (jUser, jPc) {
    if {
        (jUser === "piedra" && jPc === "tijera") ||
        (jUser === "papel" && jPc === "piedra") ||
        (jUser === "tijera" && jPc === "papel")
    }

}