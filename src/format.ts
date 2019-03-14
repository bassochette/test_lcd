import {character, font} from "./fonts/font";

/**
 * Format input string with no size limit using the provided font
 * If the character is not defined in the provided font it will ignored
 */
export const format = (input:string, font:font):string[] => {
    const chars:character[] = input
        .split("")
        .map((char:string):character|undefined => font[char])
        .filter((char: character|undefined):boolean => char !== undefined)
    const output:string[] = [
        "",
        "",
        ""
    ]
    for (let char of chars){
        output[0] += char[0]
        output[1] += char[1]
        output[2] += char[2]
    }
    return output;
}