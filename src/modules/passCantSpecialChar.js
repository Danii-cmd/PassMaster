import { specialCharController } from "../functions/passSpecialCharController.js";

/**
 * Obtiene caracteres especiales según las opciones proporcionadas.
 *
 * @param {number} leng - La longitud de la contraseña.
 * @param {string[]|null} specialCharClient - Caracteres especiales adicionales proporcionados por el cliente.
 * @returns {Object} Un objeto que contiene la cantidad de caracteres especiales a utilizar y la lista de caracteres especiales.
 * 
 * ----------------------------------------------
 * 
 * Obtains special characters based on provided options.
 *
 * @param {number} leng - The length of the password.
 * @param {string[]|null} specialCharClient - Additional special characters provided by the client.
 * @returns {Object} An object containing the count of special characters to be used and the list of special characters.
 */

export function SpecialCharObtain(leng, specialCharClient) {
    // Control de caracteres especiales
    if(specialCharClient !== null) { // Si viene con datos del usuario hacemos el control
        specialCharClient = specialCharController(specialCharClient);
    }

    // Variables
    const specialChars = specialCharClient || ["^", "*", "_", "-", ":", ";", ",", ".", "/"];
    let cantSpecialChar = 0; // Cantidad de caracteres especiales que se van a usar
    let specialCharToUse = []; // Arreglo con los caracteres especiales que vamos a insertar

    // OBTENEMOS LA CANTIDAD DE CARACTERES QUE VAMOS A USAR
    // Longitud entre 3 y 6
    if(leng >= 3 && leng < 7) cantSpecialChar = 1; // Genera el numero 1

    // Longitud entre 7 y 12
    if(leng >= 7 && leng < 13) cantSpecialChar = Math.round((Math.random() * 2) + 1); // Genera el numero 1 o 2

    // Longitud entre 13 y 16
    if(leng >= 13 && leng < 16) cantSpecialChar = Math.round(Math.random() * (4 - 2) + 2); // Genera el numero 2 o 3

    // OBTENGO LOS CARACTERES ESPECIALES QUE VAMOS A UTILIZAR
    for (let i = 0; i < cantSpecialChar; i++) {
        let indexSpecialChar = Math.round((Math.random() * ((specialChars.length)-1)) ); // Obtengo una posicion del arreglo    
        specialCharToUse.push(specialChars[indexSpecialChar]); // Guardo el caracter que esta en ese indice en el arreglo de caracteres especiales que vamos a usar
    }

    return {
        cantSpecialChar,
        specialCharToUse,
    };
}
