import { numericalFont } from "./fonts/numericalFont"
import { format } from "./format"

/**
 * Reset current terminal
 */
export const clearScreen = ():void => console.clear()

/**
 * Display a prompt
 */
export const prompt = (promptChar:string =">"): boolean => process.stdout.write(promptChar)

/**
 * Clear the screen
 * format the input using the numerical font
 * display on the screen the formatted output
 * Line are truncated to fit on the current terminal
 * prompt for a new input
 */
export const display = (input:string):void => {
    clearScreen()
    format(input, numericalFont)
        .forEach(
            (line:string):void=> {
                const lineLength = process.stdout.columns - (process.stdout.columns % 3);
                process.stdout.write(`${line.substr(0, lineLength)}\n`)
            }
        )
    prompt()
}