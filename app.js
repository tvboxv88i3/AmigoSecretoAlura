// app.js

// Array para almacenar la lista de amigos.
let amigos = [];

/**
 * Agrega un nuevo amigo a la lista.
 */
function agregarAmigo() {
    // Obtenemos el valor del campo de texto donde el usuario escribe el nombre.
    let nombreAmigo = document.getElementById('amigo').value;

    // Validamos si el campo no está vacío.
    if (nombreAmigo == '') {
        alert('Por favor, ingresa un nombre válido.');
        // Detenemos la ejecución de la función si el campo está vacío.
        return;
    }

    // Añadimos el nombre del amigo al array 'amigos'.
    amigos.push(nombreAmigo);

    // Actualizamos la lista de amigos que se muestra en la pantalla.
    actualizarListaAmigos();

    // Limpiamos el campo de texto para que el usuario pueda agregar otro nombre.
    document.getElementById('amigo').value = '';
}

/**
 * Actualiza la lista de amigos en el HTML.
 */
function actualizarListaAmigos() {
    // Obtenemos el elemento de la lista (ul) donde mostraremos los nombres.
    let lista = document.getElementById('listaAmigos');
    // Limpiamos la lista para no duplicar nombres cada vez que se actualiza.
    lista.innerHTML = '';

    // Recorremos el array de amigos para agregar cada nombre a la lista.
    for (let i = 0; i < amigos.length; i++) {
        // Creamos un nuevo elemento de lista (li).
        let item = document.createElement('li');
        // Asignamos el nombre del amigo al texto del elemento.
        item.textContent = amigos[i];
        // Añadimos el elemento a la lista en el HTML.
        lista.appendChild(item);
    }
}

/**
 * Realiza el sorteo del amigo secreto.
 */
function sortearAmigo() {
    // Verificamos si hay al menos 2 amigos para poder realizar el sorteo.
    if (amigos.length < 2) {
        alert('Debes agregar al menos dos amigos para realizar el sorteo.');
        // Detenemos la ejecución si no hay suficientes amigos.
        return;
    }

    // Generamos un número aleatorio entre 0 y el número total de amigos menos 1.
    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Obtenemos el nombre del amigo que corresponde al índice sorteado.
    let amigoSecreto = amigos[indiceSorteado];

    // Mostramos el resultado del sorteo en el elemento correspondiente del HTML.
    let resultado = document.getElementById('resultado');
    resultado.textContent = 'El amigo secreto es: ' + amigoSecreto;
}