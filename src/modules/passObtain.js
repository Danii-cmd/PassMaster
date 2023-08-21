import { stringsRandoms } from "../data/strings.js";
import { cantNumbersObtain } from "./passCantNumbers.js";
import { SpecialCharObtain } from "./passCantSpecialChar.js";
import { uppercase } from "./passUppercase.js";
import { changeSymbols } from "./passChangeSymbols.js";
import { transformPass } from "./passTransformPass.js";

/**
 * Obtiene una contraseña aleatoria con opciones específicas.
 *
 * @param {number} leng - La longitud deseada de la contraseña.
 * @param {boolean} number - Si incluir números en la contraseña.
 * @param {boolean} upper - Si convertir a mayúsculas.
 * @param {boolean} specialChar - Si incluir caracteres especiales.
 * @param {string[]|null} specialCharClient - Caracteres especiales proporcionados por el cliente.
 * @param {boolean} changeS - Si cambiar letras por caracteres especiales.
 * @returns {string} Contraseña generada.
 *
 * ----------------------------------------------------
 * 
 * Generates a random password with specific options.
 *
 * @param {number} leng - The desired length of the password.
 * @param {boolean} number - Whether to include numbers in the password.
 * @param {boolean} upper - Whether to convert to uppercase.
 * @param {boolean} specialChar - Whether to include special characters.
 * @param {string[]|null} specialCharClient - Additional special characters provided by the client.
 * @param {boolean} changeS - Whether to change letters to special characters.
 * @returns {string} Generated password.
 */

export function passObtain( leng, number, upper, specialChar, specialCharClient, changeS ) {
    // Variables
    let cantNumbers = 0;
    let indexString = 0;
    let stringRandom = "";
    let cantSpecialCharVar = 0;
    let specialCharToUseVar = [];
    let randomPass = "";

    // Controlo que la longitud sea entre 3 y 16
    if(leng < 6 || leng > 16) return {
        errorMessage: "Largo de contraseña inválido, deben ser entre 3 y 16 caracteres",
        errorType: "Error-Leng",
        errorCode: -100,
    }

    // Controlo si el usuario pidio que tenga numeros
    if(number) {
        cantNumbers = cantNumbersObtain( leng );
        leng -= cantNumbers;
    }

    // Controlo si el usuario pidio que tenga caracteres especiales y que tenga la longitud adecuada o superior para poder insertar algun elemento
    if(specialChar && leng > 2) {
        let sco = SpecialCharObtain( leng, specialCharClient );
        cantSpecialCharVar = sco.cantSpecialChar;
        specialCharToUseVar = sco.specialCharToUse;
        leng -= cantSpecialCharVar;
    }
    
    // Obtenemos y cargamos la palabra al azar de la longitud que me piden
    do {
        indexString = Math.round(Math.random() * 1001); // Genera un número entre 0 y 1000
        stringRandom = stringsRandoms[indexString];
    } while (stringRandom.length !== leng);

    
    // Controlo si pide mayusculas
    if(upper) stringRandom = uppercase(stringRandom, stringRandom.length);

    // Controlo si quiere cambiar algunas letras por caracteres especiales
    if(changeS) stringRandom = changeSymbols(stringRandom);
    
    // Transformo la contraseña con
    randomPass = transformPass( stringRandom, cantNumbers, cantSpecialCharVar, specialCharToUseVar );

    return randomPass;
}
