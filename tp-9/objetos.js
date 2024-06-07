var personaEjemplo = {
    "apellido": "Perez",
    "nombre": "Juan",
    "edad": 20,
    "documento": 12345
};

/**
 * 01 - crearPersona
 */
function crearPersona(nombre, apellido, edad, documento) {
    return {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        documento: documento
    };
}
console.log("resultado crearPersona: ", crearPersona("Juan", "Pérez", 20, 123456));

/**
 * 02 - agregarApodo
 */
function agregarApodo(persona, apodo) {
    persona.apodo = apodo;
    return persona;
}
console.log("resultado agregarApodo: ", agregarApodo(personaEjemplo, "JuanPe"));

/**
 * 03 - sinDocumento
 */
function sinDocumento(persona) {
    let personaSinDocumento = { ...persona };
    delete personaSinDocumento.documento;
    return personaSinDocumento;
}
console.log("resultado sinDocumento: ", sinDocumento(personaEjemplo));

/**
 * 04 - nombreCompletoDePersona
 */
function nombreCompletoDePersona(persona) {
    return `${persona.apellido}, ${persona.nombre}`;
}
console.log("resultado nombreCompletoDePersona: ", nombreCompletoDePersona(personaEjemplo));

/**
 * 05 - felizCumpleaños
 */
function felizCumpleaños(persona) {
    let personaConCumpleanos = { ...persona };
    personaConCumpleanos.edad += 1;
    return personaConCumpleanos;
}
console.log("resultado felizCumpleaños: ", felizCumpleaños(personaEjemplo));

/**
 * 06 - sonLaMismaPersona
 */
function sonLaMismaPersona(persona1, persona2) {
    return persona1.nombre === persona2.nombre &&
           persona1.apellido === persona2.apellido &&
           persona1.edad === persona2.edad &&
           persona1.documento === persona2.documento;
}
console.log("resultado sonLaMismaPersona: ", sonLaMismaPersona(
    personaEjemplo,
    { apellido: "Perez", nombre: "Juan", edad: 20, documento: 12345 }
));
