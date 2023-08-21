/**
 * Obtains positions for uppercase letters based on specified conditions.
 *
 * @param {number} leng - The length to choose positions from.
 * @param {number} cantUpper - The number of uppercase letters to include.
 * @returns {number[]} An array containing selected positions for uppercase letters.
 *
 * -----------------------------------------------------------------------
 * 
 * Obtains positions for uppercase letters based on specified conditions.
 *
 * @param {number} leng - The length to choose positions from.
 * @param {number} cantUpper - The number of uppercase letters to include.
 * @returns {number[]} An array containing selected positions for uppercase letters.
 */

export function posObtain(leng, cantUpper) {
    let uppercase = 0;
    let pos = 0;
    let posArray = [];

    while (uppercase != cantUpper) {
        pos = Math.floor(Math.random() * leng);
        if(!posArray.includes(pos)) { // Si el array incluye esa posicion
            posArray.push(pos); // Agregamos la posicion al arreglo
            uppercase++;
        }
    }

    return posArray;
}