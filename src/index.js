import { passObtain } from "./modules/passObtain.js";

/**
 * Genera una contraseña utilizando opciones específicas.
 *
 * @param {Object} options - Las opciones para generar la contraseña.
 * @param {number} options.leng - La longitud de la contraseña (por defecto: 8).
 * @param {boolean} options.number - Si incluir números en la contraseña (por defecto: true).
 * @param {boolean} options.upper - Si incluir letras mayúsculas en la contraseña (por defecto: false).
 * @param {boolean} options.specialChar - Si incluir caracteres especiales en la contraseña (por defecto: false).
 * @param {string|null} options.specialCharClient - Caracteres especiales adicionales proporcionados por el cliente (por defecto: null).
 * @param {boolean} options.changeS - Si cambiar ciertas letras por caracteres especiales (por defecto: false).
 * @returns {string} La contraseña generada.
 *
 * ----------------------------------------------
 *
 * Generates a password using specific options.
 *
 * @param {Object} options - The options for generating the password.
 * @param {number} options.leng - The length of the password (default: 8).
 * @param {boolean} options.number - Whether to include numbers in the password (default: true).
 * @param {boolean} options.upper - Whether to include uppercase letters in the password (default: false).
 * @param {boolean} options.specialChar - Whether to include special characters in the password (default: false).
 * @param {string|null} options.specialCharClient - Additional special characters provided by the client (default: null).
 * @param {boolean} options.changeS - Whether to replace certain letters with special characters (default: false).
 * @returns {string} The generated password.
 */

export function passMasterGenerator({ leng=8, number=true, upper=false, specialChar=false, specialCharClient=null, changeS=false }) {
    // Obtenemos una contraseña de la longitud deseada con las opciones proporcionadas
    let password = passObtain(leng, number, upper, specialChar, specialCharClient, changeS);
    return password;
}