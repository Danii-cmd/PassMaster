/**
 * Obtiene la cantidad de números a utilizar basada en la longitud proporcionada.
 *
 * @param {number} leng - La longitud de la contraseña.
 * @returns {number} La cantidad de números a utilizar.
 * 
 * ----------------------------------------------
 * 
 * Obtains the count of numbers to be used based on the provided length.
 *
 * @param {number} leng - The length of the password.
 * @returns {number} The count of numbers to be used.
 */

export function cantNumbersObtain(leng) {
    let cantNumbers;

    // Longitud entre 6 y 9
    if(leng >= 6 && leng < 10) return cantNumbers = Math.floor((Math.random() * 3) + 1); // Genera un numero entre 1 y 3 (incluyendo ambos)

    // Longitud entre 10 y 12
    if(leng >= 10 && leng < 13) return cantNumbers = Math.floor(Math.random() * (4 - 2) + 2); // Genera el numero 2 o 3

    // Longitud entre 13 y 16
    if(leng >= 13 && leng < 17) return cantNumbers = Math.floor(Math.random() * (4 - 2 + 1) + 2); // Genera un numero entre 3 y 5 (incluyendo ambos)
}