import { posObtain } from "../functions/passPosObtain.js";

/**
 * Convierte caracteres a mayúsculas según condiciones específicas.
 *
 * @param {string} stringRandom - La cadena de entrada para convertir.
 * @param {number} leng - La longitud de la cadena.
 * @returns {string} La cadena convertida con caracteres en mayúscula.
 *
 * ------------------------------------------------------------------
 * 
 * Converts characters to uppercase based on specified conditions.
 *
 * @param {string} stringRandom - The input string to convert.
 * @param {number} leng - The length of the string.
 * @returns {string} The converted string with uppercase characters.
 */

export function uppercase(stringRandom, leng) {
    let stringRandomArray = Array.from(stringRandom);
    let posArray;

    if (leng <= 3) {
        posArray = posObtain(leng, 1); // Le pasamos la longitud de la contraseña y la cantidad de mayusculas que tendra mi cadena
        stringRandomArray[posArray[0]] = stringRandomArray[posArray[0]].toUpperCase();
    }

    if(leng > 3 && leng <= 6) {
        posArray = posObtain(leng, 2); // Le pasamos la longitud de la contraseña y la cantidad de mayusculas que tendra mi cadena
        posArray.map((pos, index) => {
            stringRandomArray[pos] = stringRandomArray[pos].toUpperCase();
        });
    }

    if(leng > 6 && leng <= 9) {
        posArray = posObtain(leng, Math.floor((Math.random() * 2) + 1)); // Le pasamos la longitud de la contraseña y la cantidad de mayusculas que tendra mi cadena
        posArray.map((pos, index) => {
            stringRandomArray[pos] = stringRandomArray[pos].toUpperCase();
        });
    }

    if(leng > 9 && leng <= 12) {
        posArray = posObtain(leng, Math.floor((Math.random() * 3) + 1)); // Le pasamos la longitud de la contraseña y la cantidad de mayusculas que tendra mi cadena
        posArray.map((pos, index) => {
            stringRandomArray[pos] = stringRandomArray[pos].toUpperCase();
        });
    }

    if(leng > 12 && leng <= 16) {
        posArray = posObtain(leng, Math.floor((Math.random() * 4) + 1)); // Le pasamos la longitud de la contraseña y la cantidad de mayusculas que tendra mi cadena
        posArray.map((pos, index) => {
            stringRandomArray[pos] = stringRandomArray[pos].toUpperCase();
        });
    }

    return stringRandomArray.join("").replace(/\s+/g, "").trim();
}
