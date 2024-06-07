var listaNumerosEjemplo = [2, 4, 6, -1, 5, -4, 0];

/**
 * 01 - invertirLista
 */
function invertirLista(listaDeNumeros) {
    return listaDeNumeros.slice().reverse();
}
console.log("invertirLista([2,3,4]): ", invertirLista([2, 3, 4]));

/**
 * 02 - calcularPromedio
 */
function calcularPromedio(listaDeNumeros) {
    let suma = listaDeNumeros.reduce((acumulador, numero) => acumulador + numero, 0);
    return suma / listaDeNumeros.length;
}
console.log("calcularPromedio([2,3,4]): ", calcularPromedio([2, 3, 4]));
console.log("calcularPromedio(listaNumerosEjemplo): ", calcularPromedio(listaNumerosEjemplo));

/**
 * 03 - crearListaDeNumeros
 */
function crearListaDeNumeros(inicio, fin) {
    let lista = [];
    for (let i = inicio; i <= fin; i++) {
        lista.push(i);
    }
    return lista;
}
console.log("crearListaDeNumeros(2,5): ", crearListaDeNumeros(2, 5));

/**
 * 04 - ordenarDeMayorAMenor
 */
function ordenarDeMayorAMenor(listaDeNumeros) {
    return listaDeNumeros.slice().sort((a, b) => b - a);
}
console.log("ordenarDeMayorAMenor([2,3,4]): ", ordenarDeMayorAMenor([2, 3, 4]));
console.log("ordenarDeMayorAMenor(listaNumerosEjemplo): ", ordenarDeMayorAMenor(listaNumerosEjemplo));

/**
 * 05 - encontrarNumeroMayor
 */
function encontrarNumeroMayor(listaDeNumeros) {
    return Math.max(...listaDeNumeros);
}
console.log("encontrarNumeroMayor([2,3,4]): ", encontrarNumeroMayor([2, 3, 4]));
console.log("encontrarNumeroMayor(listaNumerosEjemplo): ", encontrarNumeroMayor(listaNumerosEjemplo));

/**
 * 06 - ordenarPalabrasPorLongitud
 */
function ordenarPalabrasPorLongitud(listaDePalabras) {
    return listaDePalabras.slice().sort((a, b) => a.length - b.length);
}
console.log("ordenarPalabrasPorLongitud(['abc', 'a', 'ab']): ", ordenarPalabrasPorLongitud(['abc', 'a', 'ab']));

/**
 * 07 - encontrarPalabraMasCorta
 */
function encontrarPalabraMasCorta(listaDePalabras) {
    return listaDePalabras.reduce((corta, palabra) => palabra.length < corta.length ? palabra : corta);
}
console.log("encontrarPalabraMasCorta(['abc', 'a', 'ab']): ", encontrarPalabraMasCorta(['abc', 'a', 'ab']));

/**
 * 08 - filtrarSoloPositivos
 */
function filtrarSoloPositivos(listaDeNumeros) {
    return listaDeNumeros.filter(numero => numero > 0);
}
console.log("filtrarSoloPositivos([1,-1,0]): ", filtrarSoloPositivos([1, -1, 0]));
console.log("filtrarSoloPositivos(listaNumerosEjemplo): ", filtrarSoloPositivos(listaNumerosEjemplo));

/**
 * 09 - contarAprobados
 */
function contarAprobados(listaDeNotas) {
    return listaDeNotas.filter(nota => nota >= 6).length;
}
console.log("contarAprobados([10, 4, 6, 7, 1, 9]): ", contarAprobados([10, 4, 6, 7, 1, 9]));

/**
 * 10 - filtrarSoloTruthy
 */
function filtrarSoloTruthy(listaDeValores) {
    return listaDeValores.filter(valor => Boolean(valor));
}
console.log("filtrarSoloTruthy(): ", filtrarSoloTruthy(["Hola", "", null, 1, 0, -1, undefined, [], {}]));

/**
 * 11 - enumerarLista
 */
function enumerarLista(listaDePalabras) {
    if (listaDePalabras.length === 0) return "";
    if (listaDePalabras.length === 1) return listaDePalabras[0] + ".";
    let ultimaPalabra = listaDePalabras.pop();
    return listaDePalabras.join(", ") + " y " + ultimaPalabra + ".";
}
console.log("enumerarLista(): ", enumerarLista(["Han", "Leia", "Luke", "Yoda"]));
