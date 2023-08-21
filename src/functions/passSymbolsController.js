/**
 * Convierte caracteres específicos en símbolos correspondientes.
 *
 * @param {string} character - El carácter que se va a convertir.
 * @param {string[]} symbols - Un array de símbolos correspondientes.
 * @returns {string} El carácter convertido o el carácter original si no es necesaria ninguna conversión.
 *
 * -------------------------------------------------------
 * 
 * Converts specific characters to corresponding symbols.
 *
 * @param {string} character - The character to be converted.
 * @param {string[]} symbols - An array of corresponding symbols.
 * @returns {string} The converted character or the original character if no conversion is needed.
 */

export function symbolsController(character, symbols) {
    switch (character) {
        case 'a':
        case 'A':
            character = symbols[0];
            break;
        case 'i':
        case 'I':
            character = symbols[1];
            break;
        case 's':
        case 'S':
            character = symbols[2];
            break;
        case 'y':
        case 'Y':
            character = symbols[3];
            break;
        case 'x':
        case 'X':
            character = symbols[4];
            break;
        case 'n':
        case 'N':
            character = symbols[5];
            break;
        case 't':
        case 'T':
            character = symbols[6];
            break;
        case 'c':
        case 'C':
            character = symbols[7];
            break;
        case 'l':
        case 'L':
            character = symbols[8];
            break;
        case 'o':
        case 'O':
            character = symbols[9];
            break;
        default:
            // Si no es necesaria ninguna conversión, devuelve el carácter original
            return character;
    }

    return character;
}