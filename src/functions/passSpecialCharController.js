/**
 * Controla los caracteres especiales para evitar caracteres inválidos.
 *
 * @param {string[]} specialChar - Caracteres especiales proporcionados por el usuario.
 * @returns {string[]} Un arreglo de caracteres especiales válidos.
 *
 * ----------------------------------------------
 * 
 * Controls special characters to avoid invalid characters.
 *
 * @param {string[]} specialChar - Special characters provided by the user.
 * @returns {string[]} An array of valid special characters.
 */
export function specialCharController(specialChar) { // Funcion para evitar que el usuario ingrese numeros, numeros como caracteres o algun caracter especial para el programa
    const symbols = ["@", "!", "$", "&", "%", "~", "+", "<", "|", "#"];
    let arrayFinal = [];

        specialChar.forEach(sChar => { // Recorro el arreglo de caracteres especiales proporcionado por el cliente
            if(/^\d+$/.test(sChar)) return; // Si detecta un numero NO lo va a guardar
            
            if(!arrayFinal.includes(sChar) && !symbols.includes(sChar)) { // Si en el arreglo final no existe ya el caracter del cliente y el caracter que ingresó el cliente no esta incluido en los caracteres especiales del programa
                arrayFinal.push(sChar); // Lo agrego al arreglo
            }
        });

    return arrayFinal;
}