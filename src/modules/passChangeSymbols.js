import { symbolsController } from "../functions/passSymbolsController.js";

/**
 * Cambia caracteres en la cadena por símbolos correspondientes.
 *
 * @param {string} stringRandom - La cadena en la que se van a cambiar los caracteres.
 * @returns {string} La cadena con caracteres cambiados por símbolos.
 *
 * ------------------------------------------------------------
 * 
 * Changes characters in the string to corresponding symbols.
 *
 * @param {string} stringRandom - The string in which characters will be changed.
 * @returns {string} The string with characters changed to symbols.
 */

export function changeSymbols(stringRandom) {
    const symbols = ["@", "!", "$", "&", "%", "~", "+", "<", "|", "#"]; //[a, i, s, y, x, n, t, c, l, o]
    let arrayStringRandom = Array.from(stringRandom);

    Array.from(stringRandom).map((character, index) => {
        arrayStringRandom[index] = symbolsController(character, symbols);
    });

    return arrayStringRandom.join("").replace(/\s+/g, "").trim();
}