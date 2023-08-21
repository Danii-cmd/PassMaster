/**
 * Transforma la contraseña generada añadiendo números y caracteres especiales según condiciones específicas.
 *
 * @param {string} stringRandom - La cadena de contraseña generada original.
 * @param {number} cantNumbers - La cantidad de números a añadir.
 * @param {number} cantSpecialChar - La cantidad de caracteres especiales a añadir.
 * @param {string[]} specialCharToUse - Un arreglo de caracteres especiales que se van a añadir.
 * @returns {string} La cadena de contraseña transformada.
 *
 * ---------------------------------------------------------------------------------------------------------
 * 
 * Transforms the generated password by adding numbers and special characters based on specified conditions.
 *
 * @param {string} stringRandom - The original generated password string.
 * @param {number} cantNumbers - The count of numbers to add.
 * @param {number} cantSpecialChar - The count of special characters to add.
 * @param {string[]} specialCharToUse - An array of special characters to be added.
 * @returns {string} The transformed password string.
 */

export function transformPass( stringRandom, cantNumbers, cantSpecialChar, specialCharToUse ) {
    let posRandom = 0;
    let numRandom = 0;

    // Si nos pide utilizar numeros
    if(cantNumbers > 0) {
        for (let i = 0; i < cantNumbers; i++) {
            posRandom = Math.random() < 0.5 ? 0 : 1; // Me da un numero entre 0 y la longitud de la cadena
            numRandom = Math.floor(Math.random() * 10); // Genera un número entre 0 y 9

            posRandom == 0 ? stringRandom = numRandom + stringRandom : stringRandom = stringRandom + numRandom; // Dependiendo de la posicion que indique lo va a colocar al principio o al final del password
        }
    }

    // Si nos pide utilizar carcteres especiales
    if(cantSpecialChar > 0) {
        let randomPassArray = Array.from(stringRandom); // Transformo un string en array

        specialCharToUse.map(el => { // Recorremos cada elemento que obtuvimos
            posRandom = Math.floor(Math.random() * randomPassArray.length); // Obtiene un valor aleatorio entre 0 y la longitud del arreglo-1
            randomPassArray.splice(posRandom, 0, el); // Guardo ese elemento en cierta posicion
        });
        
        stringRandom = randomPassArray.join("");
    }

    return stringRandom.replace(/\s+/g, "").trim();
}